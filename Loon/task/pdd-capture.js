/*
 * 拼多多 Cookie / 签到请求模板 自动抓取  ——  Loon http-request 脚本
 * ============================================================
 * 作用：
 *   1. 只要 App / H5 / 小程序访问拼多多域名，就把 Cookie 合并存下来
 *      → Cookie 会随你正常使用自动续期，不用再手动抓包
 *   2. 一旦发现「签到类」POST 请求，就把整个请求（URL + Header + Body）
 *      存成模板，cron 脚本下次直接拿它回放
 *
 * 配合：
 *   [MITM]  hostname = *.yangkeduo.com, *.pinduoduo.com
 *   [Script] http-request ^https?://[^/]*(yangkeduo|pinduoduo)\.com/ \
 *              script-path=..., requires-body=true, tag=PDD抓取
 *
 * 注意：
 *   - 必须开启 MITM 并安装、信任 Loon 的 CA 证书
 *   - 只解这两个域名，不影响其他流量
 *   - 不需要改配置，抓到什么存什么；脚本最后 $done({}) 原样放行
 * ============================================================
 */

const K_COOKIE = "pdd_cookie";          // 合并后的完整 Cookie
const K_UA = "pdd_ua";                  // 最新 User-Agent
const K_TPL = "pdd_template";           // 签到请求模板（JSON）
const K_TIME = "pdd_capture_time";      // 模板抓取时间
const K_TAG = "pdd_template_tag";       // 用于判断模板是否变化

const NOTIFY_NEW_TEMPLATE = true;       // 抓到（新的）签到请求时弹一次通知

// URL 命中这些词，认为是签到类请求
const SIGN_HINTS = ["sign", "checkin", "check_in", "signin", "daily", "task", "clock"];
// 静态资源不处理
const STATIC_RE = /\.(png|jpe?g|gif|webp|css|js|ico|svg|woff2?|ttf|otf|mp4|m3u8)(\?|#|$)/i;
// 存入模板时丢弃的 Header（透传会出错，或属于凭证单独存）
const DROP = ["host", "content-length", "connection", "accept-encoding", "transfer-encoding", "cookie", "content-encoding"];

/* ---------------- 工具 ---------------- */

function read(k) {
  try { return $persistentStore.read(k) || ""; } catch (e) { return ""; }
}
function write(v, k) {
  try { return $persistentStore.write(String(v), k); } catch (e) { return false; }
}
function short(s, n) { s = String(s || ""); return s.length > n ? s.slice(0, n) + "…" : s; }

function headerOf(headers, name) {
  if (!headers) return "";
  const want = name.toLowerCase();
  const keys = Object.keys(headers);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === want) return headers[keys[i]];
  }
  return "";
}

// 合并 Cookie：新值覆盖同名键，其余保留
function mergeCookies(oldRaw, newRaw) {
  const map = {};
  [oldRaw, newRaw].forEach(function (raw) {
    String(raw || "").split(";").forEach(function (pair) {
      const i = pair.indexOf("=");
      if (i > 0) {
        const k = pair.slice(0, i).trim();
        if (k) map[k] = pair.slice(i + 1).trim();
      }
    });
  });
  return Object.keys(map).map(function (k) { return k + "=" + map[k]; }).join("; ");
}

function hash(s) {
  let h = 0;
  s = String(s || "");
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
  return String(h);
}

/* ---------------- 判定是不是签到请求 ---------------- */

function looksLikeSign(url, body) {
  const u = String(url || "").toLowerCase();
  if (SIGN_HINTS.some(function (k) { return u.indexOf(k) >= 0; })) return true;
  // 兜底：Body 里同时有 anti_content 和签到语义
  const b = String(body || "").toLowerCase();
  if (b.indexOf("anti_content") >= 0 &&
      (b.indexOf("sign") >= 0 || b.indexOf("clock") >= 0 || b.indexOf("checkin") >= 0)) {
    return true;
  }
  return false;
}

/* ---------------- 主流程 ---------------- */

function main() {
  const url = $request.url || "";
  const method = String($request.method || "GET").toUpperCase();
  const headers = $request.headers || {};

  if (!url || STATIC_RE.test(url)) return done();

  // 1. 只要带了 Cookie 就合并保存（这是 Cookie 自动续期的关键）
  const cookie = headerOf(headers, "cookie");
  if (cookie) {
    const old = read(K_COOKIE);
    const merged = mergeCookies(old, cookie);
    if (merged !== old) write(merged, K_COOKIE);
  }

  // 2. 随手记一份最新 UA，回放时用
  const ua = headerOf(headers, "user-agent");
  if (ua) write(ua, K_UA);

  // 3. 签到请求 → 存模板
  if (method === "POST") {
    let body = $request.body || "";
    if (body && typeof body !== "string") {
      try { body = JSON.stringify(body); } catch (e) { body = ""; }
    }
    if (looksLikeSign(url, body)) {
      saveTemplate(url, method, headers, body);
    }
  }

  return done();
}

function saveTemplate(url, method, headers, body) {
  const kept = {};
  Object.keys(headers).forEach(function (k) {
    if (DROP.indexOf(k.toLowerCase()) < 0) kept[k] = headers[k];
  });

  const tpl = { url: url, method: method, headers: kept, body: body || null, ts: Date.now() };
  const tag = hash(url + "|" + (body || ""));
  const oldTag = read(K_TAG);

  write(JSON.stringify(tpl), K_TPL);
  write(new Date().toISOString(), K_TIME);

  if (tag !== oldTag) {
    write(tag, K_TAG);
    if (NOTIFY_NEW_TEMPLATE) {
      try {
        $notification.post("拼多多｜已抓到签到请求", "之后 cron 会自动回放",
          "接口：" + short(url.split("?")[0], 70) + "\nCookie 已同步保存");
      } catch (e) { }
    }
  }
}

function done() {
  // http-request 脚本必须 $done({}) 才能原样放行
  if (typeof $done === "function") $done({});
}

main();
