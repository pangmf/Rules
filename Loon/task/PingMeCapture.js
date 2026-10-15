/**
 * PingMe 抓参 —— Loon / Egern 通用版
 *
 * Loon（Plugin）：
 *   [Script]
 *   http-request ^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus script-path=<本文件>, tag=PingMe抓参, timeout=60
 *   [MITM]
 *   hostname = api.pingmeapp.net
 *
 * Egern（请求脚本）：
 *   类型：请求（http_request）
 *   匹配：^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus
 *
 * 使用：开启 MITM 后打开 PingMe App 触发一次请求，参数自动保存。
 */

const CK_KEY = 'pingme_capture_v3';
const API = 'https://api.pingmeapp.net/app';

function detectEnv() {
  if (typeof $loon !== 'undefined') return 'Loon';
  if (typeof $task !== 'undefined') return 'QuantumultX';
  return 'Egern';
}
const PLATFORM = detectEnv();

// ---------------------------------------------------------------- 提取与保存（共用）
function extract(url, headers) {
  if (!url || !url.startsWith(API)) return null;
  const query = (url.split('?')[1] || '').split('#')[0];
  const paramsRaw = {};
  query.split('&').forEach(pair => {
    if (!pair) return;
    const idx = pair.indexOf('=');
    if (idx < 0) return;
    paramsRaw[pair.slice(0, idx)] = pair.slice(idx + 1);
  });
  if (!Object.keys(paramsRaw).length) return null;
  const clean = {};
  Object.keys(headers || {}).forEach(k => {
    if (k.startsWith(':') || /^content-length$/i.test(k)) return;
    clean[k] = headers[k];
  });
  return { paramsRaw, headers: clean, capturedAt: Date.now() };
}

function save(capture) {
  const summary = `✅ PingMe 参数已保存：${Object.keys(capture.paramsRaw).join(', ')}`;
  if (PLATFORM === 'Egern') return capture; // 由 ctx 路径处理
  try {
    $persistentStore.write(JSON.stringify(capture), CK_KEY);
    if (typeof $notification !== 'undefined') $notification.post('PingMe抓参', '', summary);
    else if (typeof $notify !== 'undefined') $notify('PingMe抓参', '', summary);
    console.log(summary);
    if (typeof $done === 'function') $done({});
  } catch (e) {
    console.log('保存失败：' + e);
    if (typeof $done === 'function') $done({});
  }
  return null;
}

// ---------------------------------------------------------------- 入口
if (PLATFORM === 'Egern') {
  export default async function (ctx) {
    const req = ctx.request || ctx;
    const capture = extract(req.url || '', req.headers);
    if (!capture) return;
    try {
      ctx.storage?.setJSON(CK_KEY, capture);
      console.log(`✅ PingMe 参数已保存：${Object.keys(capture.paramsRaw).join(', ')}`);
    } catch (e) {
      console.log('⚠️ 存储失败，请手动复制 JSON 到签到脚本 CAPTURE 环境变量：');
      console.log(JSON.stringify(capture));
    }
  };
} else {
  // Loon http-request：$request 全局；QuantumultX：$request 同形
  const req = typeof $request !== 'undefined' ? $request : {};
  const capture = extract(req.url, req.headers);
  if (capture) save(capture);
  else if (typeof $done === 'function') $done({});
}
