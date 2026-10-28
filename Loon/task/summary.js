/**
 * 签到汇总 · 一条通知看完 极氪 / PingMe / WeTalk 今天的结果
 *
 * 原理：三个签到脚本在「统一通知」打开时不再单独弹通知，只往持久化存储写一条
 *       <app>_status = {s, msg, t}；本脚本按插件参数过滤后汇总成一条通知。
 *       cron 每天 09:40（三个脚本都跑完之后），也可随时手动运行。
 *
 * 状态约定：
 *   ok     → 成功（msg 里是余额/奖励摘要）
 *   cookie → 需要重新抓 Cookie / Token
 *   fail   → 其他失败
 *   none   → 没抓过账号，不算问题，只计数
 *
 * @Author: 整合版
 * @Updated: 2026-10-28
 */

const $ = new Env("签到汇总");

const SCRIPT_VERSION = "2026-10-28.r1"; // 改一次 +1，确认拉到最新版
$.log(`[INFO] 脚本版本 ${SCRIPT_VERSION}`);

// [显示名, 状态 key]；没装或从未运行的脚本没有记录，自动跳过
const SCRIPTS = [
    ["极氪", "zeekr_status"],
    ["PingMe", "pingme_status"],
    ["WeTalk", "wetalk_status"],
];

// 插件会传入各脚本开关，只汇总打开的脚本
const enabled = typeof $argument === "object" && $argument ? $argument : null;
const today = day(Date.now());
const cookie = [], fail = [], ok = [];
let unused = 0;
for (const [name, key] of SCRIPTS) {
    if (enabled && !isOn(enabled[key.replace(/_status$/, "")])) continue;
    let r;
    try { r = JSON.parse($.getdata(key) || "null"); } catch (e) { r = null; }
    if (!r) continue;
    if (r.s === "none") { unused++; continue; } // 没抓过 Cookie 或没配账号，不算问题
    const label = `${name}${day(r.t) === today ? "" : `(${day(r.t)})`}`; // 不是今天的结果标上日期
    if (r.s === "ok") ok.push(`${label} ${reward(r.msg)}`);
    else if (r.s === "cookie") cookie.push(label);
    else fail.push(`${label}(${r.msg})`);
}

const counts = [
    ok.length && `✅ ${ok.length} 成功`,
    cookie.length && `⚠️ ${cookie.length} 需重抓`,
    fail.length && `❌ ${fail.length} 失败`,
].filter(Boolean);
const lines = [];
if (cookie.length) lines.push(`需重新抓取:${cookie.join("、")}`);
if (fail.length) lines.push(`失败:${fail.join("、")}`);
lines.push(...ok);
if (unused) lines.push(`未使用 ${unused} 个`);
if (!lines.length) lines.push("暂无记录，签到脚本运行一次后会自动登记");
$.msg($.name, counts.join(" · ") || "暂无记录", lines.join("\n"));
$.done();

// 成功记录里去掉「签到成功」前缀，只留奖励；没有奖励时写「今日已签」/「签到成功」
function reward(msg) {
    const m = String(msg || "").trim();
    if (/^今日已签/.test(m)) return "今日已签";
    return m.replace(/^签到成功\s*[·:：]?\s*/, "").replace(/^[·:：]\s*/, "") || "签到成功";
}

// 插件开关可能是布尔 true，也可能是字符串 "true"
function isOn(v) {
    return v === true || v === "true" || v === 1 || v === "1";
}

// 北京时间 MM-DD
function day(t) {
    return new Date(Number(t) + 8 * 3600 * 1000).toISOString().slice(5, 10);
}

function Env(s) {
    this.name = s;
    this.isSurge = () => typeof $httpClient !== "undefined";
    this.isQuanX = () => typeof $task !== "undefined";
    this.isLoon = () => typeof $loon !== "undefined";
    this.log = (...a) => console.log(a.join("\n"));
    this.msg = (t = this.name, s = "", b = "") => {
        if (this.isSurge() || this.isLoon()) $notification.post(t, s, b);
        else if (this.isQuanX()) $notify(t, s, b);
        console.log(["", "====📣" + t + "====", s, b].filter(Boolean).join("\n"));
    };
    this.getdata = (k) => {
        if (this.isSurge() || this.isLoon()) return $persistentStore.read(k);
        if (this.isQuanX()) return $prefs.valueForKey(k);
        return null;
    };
    this.done = (v = {}) => { if (typeof $done !== "undefined") $done(v); };
}
