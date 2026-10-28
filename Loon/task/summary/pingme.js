//2026/06/29
/*
@Name：PingMe 自动化签到+视频奖励
@Author：怎么肥事

Loon 配置（加入配置文件的 [Script] 与 [MITM] 段）：

[Script]
http-request ^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus script-path=https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe_Loon.js, tag=PingMe抓包, enable=true
cron "30 8,20 * * *" script-path=https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe_Loon.js, tag=PingMe签到, enable=true, timeout=600

[MITM]
hostname = %APPEND% api.pingmeapp.net

说明：
1. script-path 换成你自己的脚本地址（本地文件或远程链接均可）。
2. timeout=600 为脚本超时（秒），Loon 默认仅 10 秒；本脚本单账号约 40 秒，
   若视频被服务端限流还会自动退避重试（每次 30 秒、最多 2 次），多账号依次执行
   可能需要数分钟，请保留该参数（上限 600）。
3. Loon 3.5.1(983) 及以上也可使用新版 Script 语法：
   request if ${url} ~= /^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus/ then script("PingMe_Loon.js") with tag="PingMe抓包"
   cron "30 8,20 * * *" then script("PingMe_Loon.js") with tag="PingMe签到", timeout=600

—— 相对 QuantumultX 原版的改动（仅平台 API，业务逻辑不变）——
$prefs.valueForKey(key)                →  $persistentStore.read(key)
$prefs.setValueForKey(v, key)          →  $persistentStore.write(v, key)
$task.fetch({url, method, headers})    →  $httpClient.get({url, headers}, 回调) 的 Promise 封装
$notify(title, subtitle, body)         →  $notification.post(title, subtitle, body)
$done({}) / $done()、$request           →  与原版一致，未改动

—— 2026-10-16 修复：视频签到报"您尝试的次数过多。请稍后再试。"——
根因：Loon 的 $httpClient 默认超时只有 5000ms，而 QX 的 $task.fetch 没有该限制。
      videoBonus 接口响应较慢，超过 5 秒即被 Loon 客户端判定超时，脚本中继承自
      QX 原版的重试逻辑随即重发请求，短时间内对同一接口形成请求突发，被服务端
      风控限流。查询/签到接口响应快不超时，所以只有视频签到会出现该问题。
修复：1) $httpClient.get 显式设置 timeout=20000，并关闭 auto-cookie，
         使请求与抓包时一致，消除客户端超时引发的重试突发；
      2) 视频仍被限流时，按服务端"请稍后再试"的提示退避 30 秒后重试同一个
         视频（最多 2 次），而不是直接放弃剩余视频。
*/

const scriptName = 'PingMe';
const storeKey = 'pingme_accounts_v1';

/* ══════════ 签到合集 · 统一通知接入 ══════════
 * 插件里 merge 打开时：本脚本不再单独弹通知，只把结果登记到 pingme_status，
 * 由 summary.js 每天固定时间发一条汇总。抓包阶段（$request 存在）照常通知。
 * ═════════════════════════════════════════════ */
const MERGE_STATUS_KEY = 'pingme_status';
const IS_CAPTURE_RUN = typeof $request !== 'undefined' && !!$request;

function mergeEnabled() {
  try {
    if (typeof $argument === 'undefined' || !$argument) return false;
    if (typeof $argument === 'object') {
      const v = $argument.merge;
      return v === true || v === 'true' || v === 1 || v === '1';
    }
    // 兜底：参数被当成字符串塞进来（"merge=true"）
    return typeof $argument === 'string' && /merge\s*[=:]\s*"?true"?/i.test($argument);
  } catch (e) { return false; }
}

function bjDay(t) {
  return new Date(Number(t) + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

function recordStatus(s, msg) {
  msg = String(msg == null ? '' : msg).replace(/\s+/g, ' ').trim().slice(0, 100);
  if (s === 'fail' && /过期|重新登录|未登录|请登录|登录失效|token\s*(失效|过期|无效)/i.test(msg)) s = 'cookie';
  let old = null;
  try { old = JSON.parse($persistentStore.read(MERGE_STATUS_KEY) || 'null'); } catch (e) {}
  // 同一天已有带余额的成功记录时，后面没余额的结果不覆盖它（晚间场不冲掉早间场）
  if (s === 'ok' && old && old.s === 'ok' && bjDay(old.t) === bjDay(Date.now())
      && String(old.msg).indexOf('余额') >= 0 && String(msg).indexOf('余额') < 0) return;
  try { $persistentStore.write(JSON.stringify({ s: s, msg: msg, t: Date.now() }), MERGE_STATUS_KEY); } catch (e) {}
}

function summarizeAccounts(total, text) {
  const blocks = String(text || '').split('\n———\n');
  let coins = 0, hasCoins = false, bad = 0;
  blocks.forEach(function (b) {
    const m = b.match(/最新余额：([\d.]+)/);
    if (m) { coins += parseFloat(m[1]) || 0; hasCoins = true; }
    if (/❌|⚠️ 签到：|⚠️ 查询：/.test(b)) bad++;
  });
  let msg = total + ' 个账号';
  if (hasCoins) msg += ' · 余额 ' + (Math.round(coins * 100) / 100) + ' Coins';
  return { msg: msg, bad: bad };
}
const SECRET = '0fOiukQq7jXZV2GRi9LGlO';
const MAX_VIDEO = 3;
const VIDEO_DELAY = 8000;
const ACCOUNT_GAP = 3500;
const MAX_RATE_RETRY = 1;      // 单个视频被服务端限流后的最大重试次数
const VIDEO_BACKOFF = 30000;   // 被限流后的退避等待（毫秒），遵循服务端"请稍后再试"的提示

const IOS_VERSIONS = ['17.5.1','17.6.1','17.4.1','17.2.1','16.7.8','17.6','17.3.1','18.0.1','17.1.2','16.6.1'];
const IOS_SCALES = ['2.00','3.00','3.00','2.00','3.00'];
const IPHONE_MODELS = ['iPhone14,3','iPhone13,3','iPhone15,3','iPhone16,1','iPhone14,7','iPhone13,2','iPhone15,2','iPhone12,1'];
const CFN_VERS = ['1410.0.3','1494.0.7','1568.100.1','1209.1','1474.0.4','1568.200.2'];
const DARWIN_VERS = ['22.6.0','23.5.0','23.6.0','24.0.0','22.4.0'];

function MD5(string) {
  function RotateLeft(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)); }
  function AddUnsigned(lX, lY) {
    const lX4 = lX & 0x40000000, lY4 = lY & 0x40000000, lX8 = lX & 0x80000000, lY8 = lY & 0x80000000;
    const lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    if (lX4 | lY4) return (lResult & 0x40000000) ? (lResult ^ 0xC0000000 ^ lX8 ^ lY8) : (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    return lResult ^ lX8 ^ lY8;
  }
  function F(x, y, z) { return (x & y) | ((~x) & z); }
  function G(x, y, z) { return (x & z) | (y & (~z)); }
  function H(x, y, z) { return x ^ y ^ z; }
  function I(x, y, z) { return y ^ (x | (~z)); }
  function FF(a, b, c, d, x, s, ac) { a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac)); return AddUnsigned(RotateLeft(a, s), b); }
  function GG(a, b, c, d, x, s, ac) { a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac)); return AddUnsigned(RotateLeft(a, s), b); }
  function HH(a, b, c, d, x, s, ac) { a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac)); return AddUnsigned(RotateLeft(a, s), b); }
  function II(a, b, c, d, x, s, ac) { a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac)); return AddUnsigned(RotateLeft(a, s), b); }
  function ConvertToWordArray(str) {
    const lMessageLength = str.length;
    const lNumberOfWords_temp1 = lMessageLength + 8;
    const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1).fill(0);
    let lBytePosition = 0, lByteCount = 0;
    while (lByteCount < lMessageLength) {
      const lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] |= str.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    const lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] |= 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function WordToHex(lValue) {
    let WordToHexValue = '';
    for (let lCount = 0; lCount <= 3; lCount++) {
      const lByte = (lValue >>> (lCount * 8)) & 255;
      const WordToHexValue_temp = '0' + lByte.toString(16);
      WordToHexValue += WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  const x = ConvertToWordArray(string);
  let a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
  const S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20;
  const S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  for (let k = 0; k < x.length; k += 16) {
    const AA = a, BB = b, CC = c, DD = d;
    a = FF(a,b,c,d,x[k+0],S11,0xD76AA478); d = FF(d,a,b,c,x[k+1],S12,0xE8C7B756); c = FF(c,d,a,b,x[k+2],S13,0x242070DB); b = FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
    a = FF(a,b,c,d,x[k+4],S11,0xF57C0FAF); d = FF(d,a,b,c,x[k+5],S12,0x4787C62A); c = FF(c,d,a,b,x[k+6],S13,0xA8304613); b = FF(b,c,d,a,x[k+7],S14,0xFD469501);
    a = FF(a,b,c,d,x[k+8],S11,0x698098D8); d = FF(d,a,b,c,x[k+9],S12,0x8B44F7AF); c = FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1); b = FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
    a = FF(a,b,c,d,x[k+12],S11,0x6B901122); d = FF(d,a,b,c,x[k+13],S12,0xFD987193); c = FF(c,d,a,b,x[k+14],S13,0xA679438E); b = FF(b,c,d,a,x[k+15],S14,0x49B40821);
    a = GG(a,b,c,d,x[k+1],S21,0xF61E2562); d = GG(d,a,b,c,x[k+6],S22,0xC040B340); c = GG(c,d,a,b,x[k+11],S23,0x265E5A51); b = GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
    a = GG(a,b,c,d,x[k+5],S21,0xD62F105D); d = GG(d,a,b,c,x[k+10],S22,0x02441453); c = GG(c,d,a,b,x[k+15],S23,0xD8A1E681); b = GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
    a = GG(a,b,c,d,x[k+9],S21,0x21E1CDE6); d = GG(d,a,b,c,x[k+14],S22,0xC33707D6); c = GG(c,d,a,b,x[k+3],S23,0xF4D50D87); b = GG(b,c,d,a,x[k+8],S24,0x455A14ED);
    a = GG(a,b,c,d,x[k+13],S21,0xA9E3E905); d = GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8); c = GG(c,d,a,b,x[k+7],S23,0x676F02D9); b = GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
    a = HH(a,b,c,d,x[k+5],S31,0xFFFA3942); d = HH(d,a,b,c,x[k+8],S32,0x8771F681); c = HH(c,d,a,b,x[k+11],S33,0x6D9D6122); b = HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
    a = HH(a,b,c,d,x[k+1],S31,0xA4BEEA44); d = HH(d,a,b,c,x[k+4],S32,0x4BDECFA9); c = HH(c,d,a,b,x[k+7],S33,0xF6BB4B60); b = HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
    a = HH(a,b,c,d,x[k+13],S31,0x289B7EC6); d = HH(d,a,b,c,x[k+0],S32,0xEAA127FA); c = HH(c,d,a,b,x[k+3],S33,0xD4EF3085); b = HH(b,c,d,a,x[k+6],S34,0x04881D05);
    a = HH(a,b,c,d,x[k+9],S31,0xD9D4D039); d = HH(d,a,b,c,x[k+12],S32,0xE6DB99E5); c = HH(c,d,a,b,x[k+15],S33,0x1FA27CF8); b = HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
    a = II(a,b,c,d,x[k+0],S41,0xF4292244); d = II(d,a,b,c,x[k+7],S42,0x432AFF97); c = II(c,d,a,b,x[k+14],S43,0xAB9423A7); b = II(b,c,d,a,x[k+5],S44,0xFC93A039);
    a = II(a,b,c,d,x[k+12],S41,0x655B59C3); d = II(d,a,b,c,x[k+3],S42,0x8F0CCC92); c = II(c,d,a,b,x[k+10],S43,0xFFEFF47D); b = II(b,c,d,a,x[k+1],S44,0x85845DD1);
    a = II(a,b,c,d,x[k+8],S41,0x6FA87E4F); d = II(d,a,b,c,x[k+15],S42,0xFE2CE6E0); c = II(c,d,a,b,x[k+6],S43,0xA3014314); b = II(b,c,d,a,x[k+13],S44,0x4E0811A1);
    a = II(a,b,c,d,x[k+4],S41,0xF7537E82); d = II(d,a,b,c,x[k+11],S42,0xBD3AF235); c = II(c,d,a,b,x[k+2],S43,0x2AD7D2BB); b = II(b,c,d,a,x[k+9],S44,0xEB86D391);
    a = AddUnsigned(a,AA); b = AddUnsigned(b,BB); c = AddUnsigned(c,CC); d = AddUnsigned(d,DD);
  }
  return (WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d)).toLowerCase();
}

function getUTCSignDate() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${now.getUTCFullYear()}-${pad(now.getUTCMonth()+1)}-${pad(now.getUTCDate())} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;
}

function normalizeHeaderNameMap(headers) {
  const out = {};
  Object.keys(headers || {}).forEach(k => out[k] = headers[k]);
  return out;
}

function parseRawQuery(url) {
  const query = (url.split('?')[1] || '').split('#')[0];
  const rawMap = {};
  query.split('&').forEach(pair => {
    if (!pair) return;
    const idx = pair.indexOf('=');
    if (idx < 0) return;
    const k = pair.slice(0, idx);
    const v = pair.slice(idx + 1);
    rawMap[k] = v;
  });
  return rawMap;
}

function fingerprintOf(paramsRaw) {
  const drop = { sign:1, signDate:1, timestamp:1, ts:1, nonce:1, random:1, reqTime:1, reqId:1, requestId:1 };
  const base = Object.keys(paramsRaw || {}).filter(k => !drop[k]).sort().map(k => `${k}=${paramsRaw[k]}`).join('&');
  return MD5(base).slice(0, 12);
}

function loadStore() {
  const raw = $persistentStore.read(storeKey);
  if (!raw) return { version: 1, accounts: {}, order: [] };
  try {
    const obj = JSON.parse(raw);
    if (!obj.accounts) obj.accounts = {};
    if (!Array.isArray(obj.order)) obj.order = Object.keys(obj.accounts);
    return obj;
  } catch (e) {
    return { version: 1, accounts: {}, order: [] };
  }
}

function saveStore(store) {
  $persistentStore.write(JSON.stringify(store), storeKey);
}

function pickItem(arr, seed) {
  return arr[seed % arr.length];
}

function buildUA(baseUA, seed) {
  const iosVer = pickItem(IOS_VERSIONS, seed);
  const scale = pickItem(IOS_SCALES, seed + 1);
  const model = pickItem(IPHONE_MODELS, seed + 2);
  const cfn = pickItem(CFN_VERS, seed + 3);
  const darwin = pickItem(DARWIN_VERS, seed + 4);
  if (baseUA && typeof baseUA === 'string') {
    let ua = baseUA;
    let changed = false;
    if (/iOS \d+(\.\d+){0,2}/.test(ua)) { ua = ua.replace(/iOS \d+(\.\d+){0,2}/, `iOS ${iosVer}`); changed = true; }
    if (/Scale\/\d+(\.\d+)?/.test(ua)) { ua = ua.replace(/Scale\/\d+(\.\d+)?/, `Scale/${scale}`); changed = true; }
    if (/iPhone\d+,\d+/.test(ua)) { ua = ua.replace(/iPhone\d+,\d+/, model); changed = true; }
    if (/CFNetwork\/[\d.]+/.test(ua)) { ua = ua.replace(/CFNetwork\/[\d.]+/, `CFNetwork/${cfn}`); changed = true; }
    if (/Darwin\/[\d.]+/.test(ua)) { ua = ua.replace(/Darwin\/[\d.]+/, `Darwin/${darwin}`); changed = true; }
    if (changed) return ua;
  }
  return `PingMe/1.0.0 (${model}; iOS ${iosVer}; Scale/${scale}) CFNetwork/${cfn} Darwin/${darwin}`;
}

function buildSignedParamsRaw(capture, overrideDeviceId) {
  const params = {};
  Object.keys(capture.paramsRaw || {}).forEach(k => {
    if (k !== 'sign' && k !== 'signDate') params[k] = capture.paramsRaw[k];
  });
  if (overrideDeviceId && params.uniquedeviceid) {
    params.uniquedeviceid = overrideDeviceId;
  }
  params.signDate = getUTCSignDate();
  const signBase = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
  params.sign = MD5(signBase + SECRET);
  return params;
}

function buildUrl(path, capture, overrideDeviceId) {
  const params = buildSignedParamsRaw(capture, overrideDeviceId);
  const qs = Object.keys(params).map(k => `${k}=${encodeURIComponent(params[k])}`).join('&');
  return `https://api.pingmeapp.net/app/${path}?${qs}`;
}

function randHex(n) {
  let s = '';
  for (let i = 0; i < n; i++) s += Math.floor(Math.random() * 16).toString(16);
  return s.toUpperCase();
}

function genFakeDeviceId() {
  return `${randHex(8)}-${randHex(4)}-${randHex(4)}-${randHex(4)}-${randHex(12)}PingMeIOS`;
}

function cloneHeaders(headers) {
  const out = {};
  Object.keys(headers || {}).forEach(k => out[k] = headers[k]);
  return out;
}

function buildHeaders(capture, ua) {
  const headers = cloneHeaders(capture.headers || {});
  delete headers['Content-Length']; delete headers['content-length'];
  delete headers[':authority']; delete headers[':method']; delete headers[':path']; delete headers[':scheme'];
  headers['Host'] = 'api.pingmeapp.net';
  headers['Accept'] = headers['Accept'] || 'application/json';
  Object.keys(headers).forEach(k => {
    const lk = k.toLowerCase();
    if (lk === 'user-agent' || lk === 'connection' || lk === 'proxy-connection' || lk === 'keep-alive') delete headers[k];
  });
  headers['User-Agent'] = ua;
  headers['Connection'] = 'close';
  return headers;
}

function getEmail(acc) {
  if (acc && acc.email) return acc.email;
  const raw = acc && acc.capture && acc.capture.paramsRaw ? (acc.capture.paramsRaw.email || '') : '';
  try { return decodeURIComponent(raw); } catch (e) { return raw; }
}

function notify(title, body) {
  console.log(`【${scriptName} 通知】${title}\n${body}`);
  if (!IS_CAPTURE_RUN && mergeEnabled()) return; // 统一通知模式：交给签到汇总
  $notification.post(scriptName, title, body);
}

function isDeregistered(msg) {
  return typeof msg === 'string' && msg.indexOf('已被注销') !== -1;
}

function isRateLimited(msg) {
  return typeof msg === 'string' && /次数过多|过于频繁|操作频繁|请稍后|稍后再试|太快|try again later|too many|rate limit/i.test(msg);
}

function removeAccounts(store, ids) {
  const removed = [];
  ids.forEach(id => {
    if (store.accounts[id]) {
      const em = getEmail(store.accounts[id]);
      removed.push((store.accounts[id].alias || id) + (em ? `(${em})` : ''));
      delete store.accounts[id];
    }
    const pos = store.order.indexOf(id);
    if (pos !== -1) store.order.splice(pos, 1);
  });
  return removed;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function runAccount(acc, index, total) {
  const email = getEmail(acc);
  const tag = `[账号${index+1}/${total} ${acc.alias || acc.id}]`;
  const ua = buildUA(acc.baseUA, acc.uaSeed);
  const headers = buildHeaders(acc.capture, ua);
  const fakeDeviceId = genFakeDeviceId();
  const msgs = [`${tag}${email ? `\n📧 ${email}` : ''}`];
  const flag = { deregistered: false };

  function fetchApi(path, useFakeId) {
    const overrideId = useFakeId ? fakeDeviceId : null;
    // Loon 的 $httpClient 默认超时仅 5000ms（QX 的 $task.fetch 无此限制）：
    // videoBonus 响应慢会先触发客户端超时，再走下面的重试逻辑，短时间内对服务端
    // 重复请求同一接口，被服务端判定为"尝试的次数过多"。这里显式放宽超时，
    // 并关闭 auto-cookie，保证发出的请求与抓包时看到的完全一致。
    const attempt = (n) => new Promise((resolve, reject) => {
      $httpClient.get({ url: buildUrl(path, acc.capture, overrideId), headers, timeout: 20000, 'auto-cookie': false }, (error, response, body) => {
        if (error) {
          reject({ error: String(error) });
          return;
        }
        resolve({ status: response.status, headers: response.headers, body: body });
      });
    }).catch(err => {
        const m = err && (err.error || String(err));
        if (n < 3 && /SSL|SSLSessionState|timeout|timed out|reset|connection|network|stream closed|closed|EOF/i.test(m || '')) {
          return sleep(1500).then(() => attempt(n + 1));
        }
        throw err;
      });
    return attempt(1);
  }

  function doVideoLoop(count) {
    let i = 0;
    let rateRetry = 0;
    function handleVideo(res) {
      try {
        const d = JSON.parse(res.body);
        if (d.retcode === 0) {
          msgs.push(`🎬 视频${i}：+${d.result?.bonus || '?'} Coins`);
          rateRetry = 0;
          return next();
        }
        if (rateRetry < MAX_RATE_RETRY && isRateLimited(d.retmsg)) {
          rateRetry++;
          msgs.push(`⏳ 视频${i}：${d.retmsg}（${VIDEO_BACKOFF / 1000}s 后重试）`);
          return sleep(VIDEO_BACKOFF).then(fireVideo);
        }
        msgs.push(`⏸ 视频${i}：${d.retmsg}`);
        return null;
      } catch (e) {
        msgs.push(`❌ 视频${i}：解析失败`);
        return null;
      }
    }
    function fireVideo() {
      return fetchApi('videoBonus', true).then(handleVideo).catch(err => {
        msgs.push(`❌ 视频${i}：${err.error || '请求失败'}`);
        return null;
      });
    }
    function next() {
      if (i >= count) return Promise.resolve();
      return new Promise(resolve => {
        setTimeout(() => {
          i++;
          resolve(fireVideo());
        }, i === 0 ? 1500 : VIDEO_DELAY);
      });
    }
    return next();
  }

  return fetchApi('queryBalanceAndBonus').then(res => {
    try {
      const d = JSON.parse(res.body);
      if (d.retcode === 0) msgs.push(`💰 余额：${d.result.balance} Coins`);
      else {
        msgs.push(`⚠️ 查询：${d.retmsg}`);
        if (isDeregistered(d.retmsg)) flag.deregistered = true;
      }
    } catch (e) { msgs.push('❌ 查询：解析失败'); }
    if (flag.deregistered) return null;
    return fetchApi('checkIn');
  }).then(res => {
    if (flag.deregistered || !res) return null;
    try {
      const d = JSON.parse(res.body);
      if (d.retcode === 0) msgs.push(`✅ 签到：${(d.result?.bonusHint || d.retmsg || '').replace(/\n/g, ' ')}`);
      else {
        msgs.push(`⚠️ 签到：${d.retmsg}`);
        if (isDeregistered(d.retmsg)) flag.deregistered = true;
      }
    } catch (e) { msgs.push('❌ 签到：解析失败'); }
    if (flag.deregistered) return null;
    return doVideoLoop(MAX_VIDEO);
  }).then(() => {
    if (flag.deregistered) {
      msgs.push('🗑 该账号已注销，将从存储中移除');
      return null;
    }
    return fetchApi('queryBalanceAndBonus');
  }).then(res => {
    if (res) {
      try {
        const d = JSON.parse(res.body);
        if (d.retcode === 0) msgs.push(`💰 最新余额：${d.result.balance} Coins`);
      } catch (e) {}
    }
    return { text: msgs.join('\n'), deregistered: flag.deregistered };
  }).catch(err => {
    msgs.push(`❌ 异常：${err.error || String(err)}`);
    return { text: msgs.join('\n'), deregistered: false };
  });
}

if (typeof $request !== 'undefined' && $request) {
  const paramsRaw = parseRawQuery($request.url);
  const headersMap = normalizeHeaderNameMap($request.headers || {});
  let baseUA = '';
  Object.keys(headersMap).forEach(k => { if (k.toLowerCase() === 'user-agent') baseUA = headersMap[k]; });

  const store = loadStore();
  const fp = fingerprintOf(paramsRaw);
  const now = Date.now();
  const existed = !!store.accounts[fp];
  const uaSeed = existed ? store.accounts[fp].uaSeed : store.order.length;
  const alias = existed ? store.accounts[fp].alias : `账号${store.order.length + 1}`;
  let email = '';
  try { email = decodeURIComponent(paramsRaw.email || ''); } catch (e) { email = paramsRaw.email || ''; }

  store.accounts[fp] = {
    id: fp,
    alias,
    email,
    uaSeed,
    baseUA,
    capture: { url: $request.url, paramsRaw, headers: headersMap },
    createdAt: existed ? store.accounts[fp].createdAt : now,
    updatedAt: now
  };
  if (!existed) store.order.push(fp);
  saveStore(store);

  const total = store.order.length;
  notify(existed ? '🔄 账号参数已更新' : '✅ 新账号已入库', `${alias}（id:${fp}）${email ? `\n📧 ${email}` : ''}\n当前账号总数：${total}`);
  console.log(`【${scriptName}】${existed ? 'update' : 'add'} account ${fp}\n${JSON.stringify(store.accounts[fp], null, 2)}`);
  $done({});
} else {
  const store = loadStore();
  const ids = store.order.filter(id => store.accounts[id]);
  if (!ids.length) {
    recordStatus('none', '未抓取账号');
    notify('⚠️ 未抓到任何账号', '请先打开 PingMe 触发抓包');
    $done();
  } else {
    const total = ids.length;
    const results = [];
    const deadIds = [];
    let chain = Promise.resolve();
    ids.forEach((id, idx) => {
      chain = chain.then(() => runAccount(store.accounts[id], idx, total))
        .then(r => {
          results.push(r.text);
          if (r.deregistered) deadIds.push(id);
        })
        .then(() => idx < ids.length - 1 ? sleep(ACCOUNT_GAP) : null);
    });
    chain.then(() => {
      let extra = '';
      if (deadIds.length) {
        const freshStore = loadStore();
        const removed = removeAccounts(freshStore, deadIds);
        saveStore(freshStore);
        if (removed.length) extra = `\n———\n🗑 已移除注销账号：${removed.join('、')}（剩余${freshStore.order.length}个）`;
      }
      const brief = summarizeAccounts(total, results.join('\n———\n'));
      recordStatus(brief.bad ? 'fail' : 'ok',
        brief.bad ? brief.msg + ' · ' + brief.bad + ' 个异常' : brief.msg);
      notify(`🎉 全部完成 (${total}个账号)`, results.join('\n———\n') + extra);
      $done();
    }).catch(err => {
      recordStatus('fail', '执行异常：' + (err && (err.error || err.message) || err));
      notify('❌ 任务异常', results.join('\n———\n') + '\n' + (err.error || String(err)));
      $done();
    });
  }
}

