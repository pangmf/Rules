/*
 * CoolApkRedirect.js — 酷安外链跳转净化
 *
 * 处理 https://www.coolapk.com/link?...url=<编码后的真实地址>
 * 直接 302 到真实地址，避免中间页。
 *
 * 兼容 Loon / QuantumultX / Surge：优先用 Loon 的 $response 结构，
 * 不支持时退化为 $done({ url }) 的 URL 重定向写法。
 */

(function () {
    const url = ($request && $request.url) || '';

    if (url.indexOf('coolapk.com/link') === -1) return $done({});

    const m = url.match(/[?&]url=([^&]+)/);
    if (!m) return $done({});

    let target;
    try {
        target = decodeURIComponent(m[1]);
    } catch (e) {
        return $done({});
    }

    // 只放行 http/https，避免被塞 javascript: / file: 之类的伪协议
    if (!/^https?:\/\//i.test(target)) return $done({});

    const resp = {
        status: 302,
        headers: {
            Location: target,
            'Cache-Control': 'no-cache, no-store'
        }
    };

    // Loon / Surge 支持直接返回伪造响应；QX 用 redirect 字段
    try {
        $done({ response: resp });
    } catch (e) {
        $done({ url: target });
    }
})();
