/**
 * PingMe 抓参 —— Loon 专用版（http-request 脚本）
 *
 * [Script]
 * PingMe抓参 = http-request ^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus script-path=<本文件>, tag=PingMe抓参, timeout=60
 * [mitm]
 * hostname = api.pingmeapp.net
 *
 * 使用：开启 MITM 后打开 PingMe App（余额页），参数自动保存并弹通知。
 */

const CK_KEY = 'pingme_capture_v3';
const API = 'https://api.pingmeapp.net/app';

(function () {
  const url = ($request && $request.url) || '';
  if (!url.startsWith(API)) return $done({});

  const query = (url.split('?')[1] || '').split('#')[0];
  const paramsRaw = {};
  query.split('&').forEach(pair => {
    if (!pair) return;
    const idx = pair.indexOf('=');
    if (idx < 0) return;
    paramsRaw[pair.slice(0, idx)] = pair.slice(idx + 1);
  });
  if (!Object.keys(paramsRaw).length) return $done({});

  const headers = {};
  Object.keys(($request && $request.headers) || {}).forEach(k => {
    if (k.startsWith(':') || /^content-length$/i.test(k)) return;
    headers[k] = $request.headers[k];
  });

  const capture = { paramsRaw, headers, capturedAt: Date.now() };
  const ok = $persistentStore.write(JSON.stringify(capture), CK_KEY);
  const summary = ok
    ? `✅ PingMe 参数已保存：${Object.keys(paramsRaw).join(', ')}`
    : '❌ PingMe 参数保存失败，请重试';
  try { $notification.post('PingMe抓参', '', summary); } catch (_) {}
  console.log(summary);
  $done({});
})();
