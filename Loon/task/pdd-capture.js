/*
 * 拼多多 Cookie / 签到请求模板 自动抓取  ——  Loon 脚本（请求 + 响应双模式）
 * ============================================================
 * 同一个文件在 [Script] 里挂两次：
 *   http-request   → 抓 Cookie、抓签到 POST 模板、计数
 *   http-response  → 从 Set-Cookie 里补 Cookie（H5 常用这种下发方式）
 *
 * 配套：
 *   [MITM] hostname = *.yangkeduo.com, *.pinduoduo.com
 *
 * 诊断：
 *   抓没抓到东西，跑 pdd-debug.js 就能看到计数、最近域名、Cookie 长度。
 * ============================================================
 */

const K_COOKIE = "pdd_cookie";
const K_UA = "pdd_ua";
const K_TPL = "pdd_template";
const K_TIME = "pdd_capture_time";
const K_TAG = "pdd_template_tag";
const K_COUNT = "pdd_capture_count";     // 经过脚本的请求数（判断 MITM 是否生效）
const K_HOST = "pdd_last_host";          // 最近一次命中的域名
const K_SEEN = "pdd_seen_hosts";         // 命中的域名列表

const NOTIFY_NEW_TEMPLATE = true;

const SIGN_HINTS = ["sign", "checkin", "check_in", "signin", "daily", "task", "clock"];
const STATIC_RE = /\.(png|jpe?g|gif|webp|css|js|ico|svg|woff2?|ttf|otf|mp4|m3u8)(\?|#|$)/i;
const DROP = ["host", "content-length", "connection", "accept-encoding",
  "transfer-encoding", "cookie", "content-encoding"];
// Set-Cookie 里的属性名，不能当成 Cookie 键
const COOKIE_ATTRS = ["expires", "path", "domain", "max-age", "secure", "httponly", "samesite", "version", "comment"];

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
    if (keys[i].toLowerCase() === want) {
      const v = headers[keys[i]];
      return Array.isArray(v) ? v.join("; ") : String(v || "");
    }
  }
  return "";
}

function mergeCookies(oldRaw, newRaw) {
  const map = {};
  [oldRaw, newRaw].forEach(function (raw) {
    String(raw || "").split(";").forEach(function (pair) {
      const i = pair.indexOf("=");
      if (i > 0) {
        const k = pair.slice(0, i).trim();
        const v = pair.slice(i + 1).trim();
        if (k && COOKIE_ATTRS.indexOf(k.toLowerCase()) < 0) map[k] = v;
      }
    });
  });
  return Object.keys(map).map(function (k) { return k + "=" + map[k]; }).join("; ");
}

function saveCookie(raw) {
  if (!raw) return false;
  const old = read(K_COOKIE);
  const merged = mergeCookies(old, raw);
  if (merged && merged !== old) { write(merged, K_COOKIE); return true; }
  return false;
}

function hash(s) {
  let h = 0;
  s = String(s || "");
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
  return String(h);
}

function markSeen(url) {
  try {
    const host = String(url || "").split("/")[2] || "";
    if (host) write(host, K_HOST);
    const n = parseInt(read(K_COUNT) || "0", 10) + 1;
    write(n, K_COUNT);
    if (host) {
      const seen = read(K_SEEN).split(",").filter(Boolean);
      if (seen.indexOf(host) < 0) {
        seen.push(host);
        write(seen.slice(-8).join(","), K_SEEN);
      }
    }
  } catch (e) { }
}

/* ---------------- 请求侧 ---------------- */

function looksLikeSign(url, body) {
  const u = String(url || "").toLowerCase();
  if (SIGN_HINTS.some(function (k) { return u.indexOf(k) >= 0; })) return true;
  const b = String(body || "").toLowerCase();
  if (b.indexOf("anti_content") >= 0 &&
      (b.indexOf("sign") >= 0 || b.indexOf("clock") >= 0 || b.indexOf("checkin") >= 0)) {
    return true;
  }
  return false;
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
          "接口：" + short(String(url).split("?")[0], 70) + "\nCookie 已同步保存");
      } catch (e) { }
    }
  }
}

function handleRequest() {
  const url = $request.url || "";
  const method = String($request.method || "GET").toUpperCase();
  const headers = $request.headers || {};

  if (STATIC_RE.test(url)) return;
  markSeen(url);

  const cookie = headerOf(headers, "cookie");
  if (cookie) saveCookie(cookie);

  const ua = headerOf(headers, "user-agent");
  if (ua) write(ua, K_UA);

  if (method === "POST") {
    let body = $request.body || "";
    if (body && typeof body !== "string") {
      try { body = JSON.stringify(body); } catch (e) { body = ""; }
    }
    if (looksLikeSign(url, body)) saveTemplate(url, method, headers, body);
  }
}

/* ---------------- 响应侧：从 Set-Cookie 补 Cookie ---------------- */

function parseSetCookie(raw) {
  // 一条 Set-Cookie 里可能有多个 cookie，用 ; 分隔；属性项要跳过
  const pairs = [];
  String(raw || "").split(";").forEach(function (seg) {
    const i = seg.indexOf("=");
    if (i <= 0) return;
    const k = seg.slice(0, i).trim();
    const v = seg.slice(i + 1).trim();
    if (!k || COOKIE_ATTRS.indexOf(k.toLowerCase()) >= 0) return;
    pairs.push(k + "=" + v);
  });
  return pairs.join("; ");
}

function handleResponse() {
  const url = ($request && $request.url) || "";
  if (STATIC_RE.test(url)) return;
  markSeen(url);

  const headers = ($response && $response.headers) || {};
  let sc = headerOf(headers, "set-cookie");
  if (!sc) return;

  // Loon 可能给字符串，也可能给数组
  const list = Array.isArray(sc) ? sc : String(sc).split(/,(?=\s*[A-Za-z0-9_\-]+=)/);
  const merged = list.map(parseSetCookie).filter(Boolean).join("; ");
  if (merged) saveCookie(merged);
}

/* ---------------- 入口 ---------------- */

(function main() {
  try {
    // http-response 脚本里 $response 存在；http-request 里不存在
    if (typeof $response !== "undefined" && $response) {
      handleResponse();
    } else {
      handleRequest();
    }
  } catch (e) {
    // 抓取脚本绝不能因为报错阻断用户正常上网
  }
  if (typeof $done === "function") $done({});
})();
