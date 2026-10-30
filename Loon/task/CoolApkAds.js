/*
 * CoolApkAds.js — 酷安去广告（重写版）
 *
 * 用途：替换 ddgksf2013/coolapk.js V1.0.12 里"按硬编码 entityId 删开屏广告"的脆弱逻辑。
 * 类型：script-response-body（Loon / QuantumultX / Surge 通用）
 * 覆盖：开屏(main/init)、首页(indexV8)、列表(dataList、page/dataList)、回复(replyList)、详情(detail)
 *
 * 设计原则：
 *   1. 不再依赖"某几个固定 entityId"——酷安每换一次广告素材，entityId 就变，硬编码必然失效。
 *   2. 改为按 entityTemplate / 广告标记字段 / 已知模板名单识别，命中即删。
 *   3. 只删明确的广告实体，宁可漏杀不误杀正文。
 *   4. DEBUG 打开后会把 main/init 的 data 结构打到日志，方便回传真实字段再精调。
 */

const DEBUG = false;        // 调参时改成 true，在 Loon/QX 的脚本日志里看输出
const STRICT = true;        // true：模板名里带 ad/sponsor/splash 等词就删；false：只按白名单+标记字段删

// 历史脚本里出现过的广告实体 ID（保留，作为额外兜底）
const LEGACY_AD_IDS = [945, 6390, 24455, 36839, 8639, 29349, 33006, 32557];

// 已知广告模板名（小写比对）
const AD_TPL_WORDS = [
    'sponsorcard', 'iconbuttongridcard', 'iconlargescrollcard',
    'adcard', 'adcontainer', 'adbanner', 'bannerad',
    'splashad', 'splashcard', 'splashscreen', 'splashscreenad',
    'promotioncard', 'advertisementcard', 'adfeedcard'
];

// 模板名里出现这些"独立词"也判为广告（先转小写再匹配，避免 /i 作用下 [^a-z] 误排除大写字母）
const AD_TPL_RE = /(^|[^a-z])(ad|ads|advert|advertisement|advertising|sponsor|sponsored|promotion|splash)([^a-z]|$)/;

// 这些字段有值即视为广告实体
const AD_FLAG_KEYS = [
    'adId', 'ad_id', 'isAd', 'is_ad', 'hasAd', 'has_ad',
    'adInfo', 'ad_info', 'adData', 'ad_data',
    'sponsorInfo', 'sponsor_info'
];

// 标题里出现这些词且带模板名时判为广告（刻意收窄，避免误删讨论广告的帖子）
const AD_TITLE_RE = /(品牌广告|广告位|商务推广|广告投放)/;

function isBlank(v) {
    return v === undefined || v === null || v === false || v === 0 || v === '' || v === '0' || v === 'false';
}

// splashScreenCard -> "splash screen card"，再小写，这样按词匹配才准
function splitCamel(s) {
    return String(s).replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
}

function templatesOf(o) {    const keys = ['entityTemplate', 'entityType', 'cardType', 'card_type', 'template', 'templateName', 'typename'];
    const out = [];
    for (let i = 0; i < keys.length; i++) {
        const v = o[keys[i]];
        if (typeof v === 'string' && v) out.push(v);
    }
    return out;
}

function isAdEntity(o) {
    if (!o || typeof o !== 'object' || Array.isArray(o)) return false;

    const id = Number(o.entityId);
    if (!isNaN(id) && LEGACY_AD_IDS.indexOf(id) !== -1) return true;

    const tpls = templatesOf(o);
    for (let i = 0; i < tpls.length; i++) {
        const low = tpls[i].toLowerCase();
        if (AD_TPL_WORDS.indexOf(low) !== -1) return true;
        if (STRICT && AD_TPL_RE.test(splitCamel(tpls[i]))) return true;
    }

    for (let i = 0; i < AD_FLAG_KEYS.length; i++) {
        if (!isBlank(o[AD_FLAG_KEYS[i]])) return true;
    }

    if (typeof o.title === 'string' && tpls.length && AD_TITLE_RE.test(o.title)) return true;

    return false;
}

// 列表页额外按标题黑名单过滤（沿用原脚本对"流量/精选配件"推广位的处理）
const LIST_TITLE_BLACKLIST = /流量|精选配件/;

// 通用：过滤 data 数组里的广告实体
function filterDataList(json, titleBlacklist) {
    if (!json || !Array.isArray(json.data)) return 0;
    const before = json.data.length;
    json.data = json.data.filter(function (o) {
        if (isAdEntity(o)) return false;
        if (titleBlacklist && o && typeof o.title === 'string' && titleBlacklist.test(o.title)) return false;
        return true;
    });
    return before - json.data.length;
}

// 详情页：清空推广字段、过滤无 id 的推广行
function cleanDetail(json) {
    const data = json && json.data;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return 0;
    let n = 0;

    const dropKeys = ['detailSponsorCard', 'detail_sponsor_card', 'sponsorCard', 'include_goods', 'include_goods_ids'];
    for (let i = 0; i < dropKeys.length; i++) {
        const k = dropKeys[i];
        const v = data[k];
        if (v === undefined || v === null) continue;
        if (typeof v === 'string') {
            if (v) { n += 1; data[k] = ''; }
        } else {
            const len = Array.isArray(v) ? v.length : Object.keys(v).length;
            if (len) { n += len; data[k] = []; }
        }
    }

    const rowKeys = ['topReplyRows', 'hotReplyRows', 'replyRows'];
    for (let i = 0; i < rowKeys.length; i++) {
        const k = rowKeys[i];
        if (!Array.isArray(data[k]) || !data[k].length) continue;
        const before = data[k].length;
        data[k] = data[k].filter(function (o) { return o && (o.id || o.replyId); });
        n += before - data[k].length;
    }
    return n;
}

// 回复列表：广告行没有 id，直接按 id 留存
function cleanReplyList(json) {
    if (!json || !Array.isArray(json.data)) return 0;
    const before = json.data.length;
    json.data = json.data.filter(function (o) { return o && (o.id || o.replyId); });
    return before - json.data.length;
}

function dumpMainInit(json) {
    const list = (json && json.data) || [];
    if (!Array.isArray(list)) {
        console.log('[CoolApkAds] main/init data 不是数组，实际类型: ' + typeof list);
        return;
    }
    console.log('[CoolApkAds] main/init data 共 ' + list.length + ' 项：');
    list.forEach(function (o, i) {
        if (!o || typeof o !== 'object') { console.log('  #' + i + ' = ' + String(o)); return; }
        console.log('  #' + i +
            ' entityId=' + o.entityId +
            ' entityTemplate=' + o.entityTemplate +
            ' entityType=' + o.entityType +
            ' title=' + (typeof o.title === 'string' ? o.title.slice(0, 40) : o.title));
    });
}

(function () {
    const url = ($request && $request.url) || '';
    const raw = $response && $response.body;

    if (!raw) return $done({});

    let json;
    try {
        json = JSON.parse(raw);
    } catch (e) {
        return $done({});
    }

    let removed = 0;

    if (url.indexOf('main/init') !== -1) {
        if (DEBUG) dumpMainInit(json);
        removed = filterDataList(json);
    } else if (url.indexOf('indexV8') !== -1) {
        removed = filterDataList(json);
    } else if (url.indexOf('dataList') !== -1) {
        removed = filterDataList(json, LIST_TITLE_BLACKLIST);
    } else if (url.indexOf('replyList') !== -1) {
        removed = cleanReplyList(json);
    } else if (url.indexOf('detail') !== -1) {
        removed = cleanDetail(json);
    } else {
        return $done({});
    }

    if (DEBUG) console.log('[CoolApkAds] ' + url.split('?')[0] + ' 移除 ' + removed + ' 项');

    if (removed > 0) {
        $done({ body: JSON.stringify(json) });
    } else {
        $done({});
    }
})();
