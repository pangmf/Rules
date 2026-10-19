/*
 * 拼多多 · 百亿补贴积分打卡 自动签到  ——  Loon 脚本版
 * ============================================================
 * 用法（两种，可共存）：
 *   A. 自动模式（推荐）：配合 pdd-capture.js + MITM，
 *      脚本自动读取 pdd_template / pdd_cookie，无需手填任何请求。
 *   B. 手动模式：把下面 CURL 换成手机抓包得到的签到请求。
 *      请求优先级：MITM 模板 > CURL > FALLBACK。
 *   最后在 Loon 的 [Script] 里加一行 cron（见同目录 loon-snippet.conf）。
 *
 * 特点：
 *   - 自动跳过当天已签，避免重复触发
 *   - 成功后推送通知，含积分字段与请求来源
 *   - 结果写入 $persistentStore，可在 Loon 里查看
 *
 * 注意：CURL 里带 Cookie，等于账号凭证。不手动填就留空，
 *       让 MITM 去抓，避免把凭证写进托管文件。
 * ============================================================
 */

// ======================= 配置区（只改这里） =======================

const CURL = `
curl 'https://api.example.com/api/activity/sign_in' \
  -H 'Cookie: pdd_user_id=1234567890; pdd_user_uin=ABCDEFG; api_uid=abcdefg123456==' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148' \
  -H 'Referer: https://mobile.yangkeduo.com/' \
  --data-raw '{"activity_id":"12345","page_sn":"10014","anti_content":"0aqWfxU...（原样保留，不要改动）"}'
`;

// 抓包内容拼不进来时，可以改成手填（CURL 留空则用这里）
const FALLBACK = {
  url: "",
  method: "POST",
  headers: {},
  body: ""
};

const DELAY_MIN = 0;      // 触发后随机延迟下限（秒）
const DELAY_MAX = 20;     // 上限。Loon 对脚本有执行时长限制，别设太大；报超时就改成 0
const SKIP_IF_DONE = true; // 当天签到成功过就不再请求
const NOTIFY_ON_SKIP = false;

// ======================= 以下不用改 =======================

const K_LAST_OK = "pdd_signin_last_ok";
const K_LAST_RESULT = "pdd_signin_last_result";
// 由 pdd-capture.js 写入，见同目录脚本
const K_TPL = "pdd_template";
const K_COOKIE = "pdd_cookie";
const K_UA = "pdd_ua";

const RISK_WORDS = ["验证码", "安全验证", "滑块", "操作频繁", "访问频繁", "请稍后",
  "verify", "captcha", "risk", "forbidden"];
const DONE_WORDS = ["已签到", "已打卡", "already", "重复签到", "今日已"];
const OK_WORDS = ["签到成功", "打卡成功", "领取成功", "success"];
const DROP_HEADERS = ["host", "content-length", "connection", "accept-encoding", "transfer-encoding"];

/* ---------------- cURL 解析 ---------------- */

function tokenize(src) {
  const out = [];
  let cur = "", quote = null, has = false;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === quote) quote = null;
      else if (c === "\\" && quote === '"' && i + 1 < src.length) cur += src[++i];
      else cur += c;
    } else if (c === "'" || c === '"') {
      quote = c; has = true;
    } else if (c === " " || c === "\n" || c === "\t" || c === "\r") {
      if (cur || has) { out.push(cur); cur = ""; has = false; }
    } else {
      cur += c;
    }
  }
  if (cur || has) out.push(cur);
  return out;
}

function parseCurl(text) {
  if (!text || !text.trim()) throw new Error("CURL 为空");
  let s = text.trim().replace(/\\\s*\n\s*/g, " ").replace(/\^\s*\n\s*/g, " ").replace(/\s+/g, " ");
  if (/^curl/i.test(s)) s = s.slice(4).trim();

  const t = tokenize(s);
  let url = null, method = null, headers = {}, body = [];

  for (let i = 0; i < t.length; i++) {
    const tok = t[i], low = tok.toLowerCase();
    if (low === "-h" || low === "--header") {
      const h = t[++i] || "";
      const p = h.indexOf(":");
      if (p > 0) headers[h.slice(0, p).trim()] = h.slice(p + 1).trim();
    } else if (low === "-x" || low === "--request") {
      method = (t[++i] || "").toUpperCase();
    } else if (low === "-b" || low === "--cookie") {
      headers["Cookie"] = (t[++i] || "").trim();
    } else if (low === "-a" || low === "--user-agent") {
      headers["User-Agent"] = (t[++i] || "").trim();
    } else if (low === "-e" || low === "--referer") {
      headers["Referer"] = (t[++i] || "").trim();
    } else if (["-d", "--data", "--data-raw", "--data-binary", "--data-urlencode"].indexOf(low) >= 0) {
      body.push(t[++i] || "");
    } else if (low === "--url") {
      url = (t[++i] || "").trim();
    } else if (tok.charAt(0) === "-") {
      // --compressed / -s / -k 等开关，忽略
    } else if (!url) {
      url = tok.trim();
    }
  }

  if (!url) throw new Error("未能从 CURL 解析出 URL");
  const data = body.length ? body.join("&") : null;
  return { url: url, method: method || (data ? "POST" : "GET"), headers: headers, body: data };
}

function buildRequest() {
  // 优先级：MITM 自动抓到的模板 > 脚本内手填 CURL > FALLBACK
  const auto = storedRequest();
  if (auto) return auto;

  if (CURL && CURL.replace(/curl/gi, "").trim()) {
    try {
      const r = parseCurl(CURL);
      r.source = "脚本内 CURL";
      return r;
    } catch (e) {
      if (!FALLBACK.url) throw e;
    }
  }
  if (!FALLBACK.url) {
    throw new Error("没有可用请求：请开启 MITM 抓包，或在 CURL 里填入手动抓到的请求");
  }
  return {
    url: FALLBACK.url,
    method: (FALLBACK.method || "POST").toUpperCase(),
    headers: FALLBACK.headers || {},
    body: FALLBACK.body || null,
    source: "FALLBACK"
  };
}

/* 从 MITM 抓包结果里取请求；没有则返回 null */
function storedRequest() {
  let raw = "";
  try { raw = $persistentStore.read(K_TPL) || ""; } catch (e) { return null; }
  if (!raw) return null;

  let tpl;
  try { tpl = JSON.parse(raw); } catch (e) { return null; }
  if (!tpl || !tpl.url) return null;

  const headers = {};
  Object.keys(tpl.headers || {}).forEach(function (k) { headers[k] = tpl.headers[k]; });

  let cookie = "";
  try { cookie = $persistentStore.read(K_COOKIE) || ""; } catch (e) { }
  if (cookie) headers["Cookie"] = cookie;
  if (!headers["Cookie"]) return null;   // 没 cookie 回放必失败，宁可报错

  if (!headers["User-Agent"]) {
    let ua = "";
    try { ua = $persistentStore.read(K_UA) || ""; } catch (e) { }
    if (ua) headers["User-Agent"] = ua;
  }

  return {
    url: tpl.url,
    method: (tpl.method || "POST").toUpperCase(),
    headers: headers,
    body: tpl.body || null,
    source: "MITM 抓包模板"
  };
}

/* ---------------- 发送 ---------------- */

function request(req) {
  return new Promise(function (resolve, reject) {
    const headers = {};
    Object.keys(req.headers).forEach(function (k) {
      if (DROP_HEADERS.indexOf(k.toLowerCase()) < 0) headers[k] = req.headers[k];
    });
    if (!headers["User-Agent"]) {
      headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) " +
        "AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148";
    }

    const opts = { url: req.url, headers: headers, timeout: 20000 };
    if (req.body) opts.body = req.body;

    const cb = function (err, resp, data) {
      if (err) return reject(err instanceof Error ? err : new Error(String(err)));
      resolve({
        status: (resp && (resp.status || resp.statusCode)) || 0,
        headers: (resp && resp.headers) || {},
        text: typeof data === "string" ? data : JSON.stringify(data || "")
      });
    };

    if (req.method === "GET") {
      $httpClient.get(opts, cb);
    } else {
      $httpClient.post(opts, cb);
    }
  });
}

/* ---------------- 结果判定 ---------------- */

function walkPoints(obj, depth, out) {
  depth = depth || 0;
  out = out || {};
  if (depth > 8 || !obj) return out;
  const keys = ["score", "point", "integral", "credit", "coin", "amount"];
  if (Array.isArray(obj)) {
    obj.forEach(function (v) { walkPoints(v, depth + 1, out); });
  } else if (typeof obj === "object") {
    Object.keys(obj).forEach(function (k) {
      const v = obj[k], kl = String(k).toLowerCase();
      if (typeof v === "number" && keys.some(function (w) { return kl.indexOf(w) >= 0; })) {
        out[k] = v;
      } else if (v && typeof v === "object") {
        walkPoints(v, depth + 1, out);
      }
    });
  }
  return out;
}

function judge(res) {
  const text = res.text || "";
  const low = text.toLowerCase();

  let data = null;
  try { data = JSON.parse(text); } catch (e) { }

  let successFlag = null, errCode = null, msg = "";
  if (data && typeof data === "object") {
    successFlag = data.success;
    errCode = data.error_code !== undefined ? data.error_code : data.errorCode;
    msg = String(data.error_msg || data.errorMsg || data.msg || "");
  }

  const risky = RISK_WORDS.some(function (w) { return text.indexOf(w) >= 0; });
  const done = DONE_WORDS.some(function (w) { return text.indexOf(w) >= 0; });
  const okText = OK_WORDS.some(function (w) { return low.indexOf(w) >= 0; });

  let status, reason;
  if (risky && successFlag !== true) {
    status = "risk";
    if (res.status === 401 || res.status === 403 || res.status === 429) {
      reason = "HTTP " + res.status + "：" + (msg || "被拦截，Cookie 可能已失效或触发风控");
    } else {
      reason = msg || "命中风控 / 需要验证码，建议重新抓包";
    }
  } else if (done) {
    status = "already"; reason = msg || "今日已签到";
  } else if (successFlag === true || errCode === 0 || errCode === "0") {
    status = "success"; reason = msg || "接口返回成功";
  } else if (successFlag === false) {
    status = "fail"; reason = msg || ("接口返回失败 error_code=" + errCode);
  } else if (errCode !== null && errCode !== undefined && errCode !== 0 && errCode !== "0") {
    status = "fail"; reason = "接口返回错误码 " + errCode;
  } else if (!data && okText) {
    status = "success"; reason = "响应文本含成功标识";
  } else if (res.status >= 400) {
    status = "fail"; reason = "HTTP " + res.status;
  } else {
    status = "fail"; reason = "未识别到明确成功标识，请核对响应片段";
  }

  return {
    status: status,
    reason: reason,
    http: res.status,
    points: data ? walkPoints(data) : {},
    snippet: text.slice(0, 400),
    time: nowStr()
  };
}

const LABEL = {
  success: "✅ 签到成功",
  already: "🟡 今日已签到",
  risk: "⚠️ 触发风控",
  fail: "❌ 签到失败"
};

/* ---------------- 工具 ---------------- */

function pad(n) { return n < 10 ? "0" + n : "" + n; }
function nowStr() {
  const d = new Date();
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
    " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}
function todayStr() { return nowStr().slice(0, 10); }

function notify(r) {
  const lines = [
    "状态：" + (LABEL[r.status] || r.status),
    "说明：" + (r.reason || "-")
  ];
  if (r.source) lines.push("来源：" + r.source);
  lines.push("HTTP：" + (r.http || "-"));
  const pk = Object.keys(r.points || {});
  if (pk.length) lines.push("积分：" + pk.map(function (k) { return k + "=" + r.points[k]; }).join("，"));
  lines.push("时间：" + r.time);

  const title = "拼多多签到｜" + (LABEL[r.status] || r.status).replace(/^[^\u4e00-\u9fa5]+/, "");
  try {
    $notification.post(title, "百亿补贴积分打卡", lines.join("\n"));
  } catch (e) { }
}

function finish(r) {
  try {
    $persistentStore.write(JSON.stringify(r), K_LAST_RESULT);
    if (r.status === "success") $persistentStore.write(todayStr(), K_LAST_OK);
  } catch (e) { }
  notify(r);
  if (typeof $done === "function") $done();
}

/* ---------------- 主流程 ---------------- */

function run() {
  let req;
  try {
    req = buildRequest();
  } catch (e) {
    finish({ status: "fail", reason: "请求构造失败：" + e.message, source: "-", http: 0, points: {}, time: nowStr() });
    return;
  }

  if (SKIP_IF_DONE && $persistentStore.read(K_LAST_OK) === todayStr()) {
    if (NOTIFY_ON_SKIP) {
      notify({ status: "already", reason: "今天已成功签过，跳过", http: 0, points: {}, time: nowStr() });
    }
    if (typeof $done === "function") $done();
    return;
  }

  request(req).then(function (res) {
    const r = judge(res);
    r.source = req.source;
    finish(r);
  }).catch(function (err) {
    finish({
      status: "fail",
      reason: "请求异常：" + (err && err.message ? err.message : String(err)),
      source: req.source, http: 0, points: {}, time: nowStr()
    });
  });
}

(function main() {
  const lo = Math.max(0, DELAY_MIN | 0);
  const hi = Math.max(lo, DELAY_MAX | 0);
  const wait = lo + Math.floor(Math.random() * (hi - lo + 1));

  if (wait > 0 && typeof setTimeout === "function") {
    setTimeout(run, wait * 1000);
  } else {
    run();
  }
})();
