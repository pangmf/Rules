/*
 * CoolApk Ads Cleaner  —  response-body 脚本（Loon / QuantumultX / Surge / Egern 通用）
 *
 * 版本：2.0
 * 覆盖：开屏(main/init)、首页(indexV8)、列表(main/dataList、page/dataList)、
 *       评论(feed/replyList)、详情(feed/detail)、我的页卡片(account/loadConfig)、搜索热词
 *
 * 识别策略（三层，命中任一即删）：
 *   1. 模板名：entityTemplate / entityType / cardType 驼峰拆分后按词匹配 ad|sponsor|promotion|splash
 *   2. 广告标记字段：adId / ad_id / isAd / hasAd / adInfo / adData / sponsorInfo 有值
 *   3. 历史黑名单：原脚本 / egern 模块里那些写死的 entityId
 *
 * 与原脚本的区别：
 *   - 不再"只认几个固定 ID"，酷安换素材后依然生效（这是开屏失效的主因）
 *   - 任何字段缺失都不会抛异常；一旦抛异常 $done 不执行，整个响应会原样放行
 *   - 无广告时 $done({}) 原样放行，不做无意义的重新序列化
 */

const DEBUG = false;   // true：在脚本日志里打印 main/init 的结构，便于回传真实字段

// ---------- 配置 ----------

// 历史黑名单 entityId（原 coolapk.js + egern 模块里出现过的全部）
const ID_BLACKLIST = {
    'main/init': [944, 945, 1635, 24455, 36839],                  // 1635 = "关注" 卡片
    'indexV8': [32557, 29349, 28621],
    'page/dataList': [36104, 24309, 12889, 21063, 35730, 35846,
        28374, 28375, 27332, 20090, 28773, 29343, 21106],
    'account/loadConfig': [1001, 1003, 1004, 1005]
};

// main/init 里 .data[].entities 需要剔除的
const INIT_ENTITY_IDS = [1635, 2261, 1633, 413, 417, 1754, 1966, 2274, 1170, 1175, 1190, 2258];

// 标题黑名单
const TITLE_BLACKLIST = {
    'main/init': ['关注'],
    'indexV8': ['值得买', '红包'],
    'main/dataList': ['精选配件'],
    'page/dataList': ['话题热议'],
    'page/dataList.entity': ['睡个好觉需要什么？']
};

// 广告模板名：驼峰拆分后按"独立词"匹配，feedCard / apkCard / padCard 不会误伤
const AD_TPL_RE = /(^|[^a-z])(ad|ads|advert|advertisement|advertising|sponsor|sponsored|promotion|splash)([^a-z]|$)/;

// 广告标记字段，有值即广告
const AD_FLAG_KEYS = ['adId', 'ad_id', 'isAd', 'is_ad', 'hasAd', 'has_ad',
    'adInfo', 'ad_info', 'adData', 'ad_data', 'sponsorInfo', 'sponsor_info'];

// ---------- 工具 ----------

function blank(v) {
    return v === undefined || v === null || v === false || v === 0 || v === '' || v === '0' || v === 'false';
}

// splashScreenCard -> "splash screen card"
function splitCamel(s) {
    return String(s).replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
}

function templatesOf(o) {
    const keys = ['entityTemplate', 'entityType', 'cardType', 'card_type', 'template', 'templateName', 'typename'];
    const out = [];
    for (let i = 0; i < keys.length; i++) {
        const v = o[keys[i]];
        if (typeof v === 'string' && v) out.push(v);
    }
    return out;
}

function isAdEntity(o) {
    if (!o || typeof o !== 'object' || Array.isArray(o)) return false;

    const tpls = templatesOf(o);
    for (let i = 0; i < tpls.length; i++) {
        if (AD_TPL_RE.test(splitCamel(tpls[i]))) return true;
    }
    for (let i = 0; i < AD_FLAG_KEYS.length; i++) {
        if (!blank(o[AD_FLAG_KEYS[i]])) return true;
    }
    return false;
}

function inList(arr, v) {
    return Array.isArray(arr) && arr.indexOf(v) !== -1;
}

function hitId(o, ids) {
    const n = Number(o.entityId);
    return !isNaN(n) && inList(ids, n);
}

function hitTitle(o, words) {
    if (!Array.isArray(words) || typeof o.title !== 'string') return false;
    for (let i = 0; i < words.length; i++) {
        if (words[i] && o.title.indexOf(words[i]) !== -1) return true;
    }
    return false;
}

// 数组型 data 的统一过滤
function filterArray(json, ids, titles, opts) {
    if (!json || !Array.isArray(json.data)) return 0;
    const keepNoId = !!(opts && opts.keepNoId);   // true：无 id 的条目视为广告
    const before = json.data.length;
    json.data = json.data.filter(function (o) {
        if (!o || typeof o !== 'object') return true;
        if (hitId(o, ids)) return false;
        if (hitTitle(o, titles)) return false;
        if (isAdEntity(o)) return false;
        if (keepNoId && blank(o.id) && blank(o.replyId)) return false;
        return true;
    });
    return before - json.data.length;
}

// ---------- 各接口处理 ----------

function handleInit(json) {
    let n = filterArray(json, ID_BLACKLIST['main/init'], TITLE_BLACKLIST['main/init']);

    // data 也可能是对象，内部再嵌若干数组
    const data = json && json.data;
    if (data && !Array.isArray(data) && typeof data === 'object') {
        Object.keys(data).forEach(function (k) {
            if (Array.isArray(data[k]) && data[k].length && typeof data[k][0] === 'object') {
                n += filterArray({ data: data[k] }, ID_BLACKLIST['main/init'], TITLE_BLACKLIST['main/init']);
            }
        });
    }

    // 清理每个卡片的 entities
    (Array.isArray(data) ? data : []).forEach(function (card) {
        if (!card || !Array.isArray(card.entities)) return;
        const before = card.entities.length;
        card.entities = card.entities.filter(function (e) {
            if (!e || typeof e !== 'object') return true;
            if (hitId(e, INIT_ENTITY_IDS)) return false;
            if (e.title === '关注') return false;
            return !isAdEntity(e);
        });
        n += before - card.entities.length;
    });
    return n;
}

function handlePageDataList(json) {
    if (!json || !Array.isArray(json.data)) return 0;
    const before = json.data.length;
    const ids = ID_BLACKLIST['page/dataList'];
    json.data = json.data.filter(function (o) {
        if (!o || typeof o !== 'object') return true;
        if (hitId(o, ids)) return false;
        if (hitTitle(o, TITLE_BLACKLIST['page/dataList'])) return false;
        return !isAdEntity(o);
    });
    let n = before - json.data.length;

    // 再清一层 entities（原版只按标题过滤，这里连广告实体一起清）
    json.data.forEach(function (o) {
        if (!o || !Array.isArray(o.entities)) return;
        const b = o.entities.length;
        o.entities = o.entities.filter(function (e) {
            if (!e || typeof e !== 'object') return true;
            if (hitTitle(e, TITLE_BLACKLIST['page/dataList.entity'])) return false;
            return !isAdEntity(e);
        });
        n += b - o.entities.length;
    });
    return n;
}

function handleDetail(json) {
    const data = json && json.data;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return 0;
    let n = 0;

    ['detailSponsorCard', 'include_goods', 'include_goods_ids', 'sponsorCard'].forEach(function (k) {
        const v = data[k];
        if (v === undefined || v === null) return;
        if (typeof v === 'string') {
            if (v) { data[k] = ''; n += 1; }
        } else {
            const len = Array.isArray(v) ? v.length : Object.keys(v).length;
            if (len) { data[k] = []; n += len; }
        }
    });

    ['hotReplyRows', 'topReplyRows'].forEach(function (k) {
        if (!Array.isArray(data[k])) return;
        const before = data[k].length;
        data[k] = data[k].filter(function (r) { return r && !blank(r.id); });
        n += before - data[k].length;
    });
    return n;
}

function handleAccountConfig(json) {
    if (!json || !Array.isArray(json.data)) return 0;
    const ids = ID_BLACKLIST['account/loadConfig'];
    const before = json.data.length;
    json.data = json.data.filter(function (o) {
        if (!o || typeof o !== 'object') return true;
        if (o.entityType === 'textLink') return false;
        if (hitId(o, ids)) return false;
        return !isAdEntity(o);
    });
    let n = before - json.data.length;

    json.data.forEach(function (o) {
        if (!o || !Array.isArray(o.entities)) return;
        const b = o.entities.length;
        o.entities = o.entities.filter(function (e) {
            if (!e || typeof e !== 'object') return true;
            if (e.entityType === 'textLink') return false;
            return !isAdEntity(e);
        });
        n += b - o.entities.length;
    });
    return n;
}

// 搜索热词：把各热词数组清空（等价于原版的 respond {}）
function handleHotSearch(json) {
    const data = json && json.data;
    if (!data || typeof data !== 'object') return 0;
    let n = 0;
    Object.keys(data).forEach(function (k) {
        const v = data[k];
        if (!Array.isArray(v) || !v.length) return;
        n += v.length;
        data[k] = [];
    });
    return n;
}

function dump(label, json) {
    const list = (json && json.data) || [];
    if (!Array.isArray(list)) {
        console.log('[CoolApk] ' + label + ' data 不是数组，实际类型: ' + typeof list);
        return;
    }
    console.log('[CoolApk] ' + label + ' 共 ' + list.length + ' 项：');
    list.forEach(function (o, i) {
        if (!o || typeof o !== 'object') { console.log('  #' + i + ' = ' + String(o)); return; }
        console.log('  #' + i + ' entityId=' + o.entityId +
            ' entityTemplate=' + o.entityTemplate +
            ' entityType=' + o.entityType +
            ' title=' + (typeof o.title === 'string' ? o.title.slice(0, 40) : o.title));
    });
}

// ---------- 入口 ----------

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
    try {
        if (url.indexOf('main/init') !== -1) {
            if (DEBUG) dump('main/init', json);
            removed = handleInit(json);
        } else if (url.indexOf('indexV8') !== -1) {
            removed = filterArray(json, ID_BLACKLIST['indexV8'], TITLE_BLACKLIST['indexV8']);
        } else if (url.indexOf('page/dataList') !== -1) {
            removed = handlePageDataList(json);
        } else if (url.indexOf('dataList') !== -1) {
            removed = filterArray(json, [], TITLE_BLACKLIST['main/dataList']);
        } else if (url.indexOf('replyList') !== -1) {
            removed = filterArray(json, [], [], { keepNoId: true });
        } else if (url.indexOf('feed/detail') !== -1) {
            removed = handleDetail(json);
        } else if (url.indexOf('loadConfig') !== -1) {
            removed = handleAccountConfig(json);
        } else if (url.indexOf('hotSearch') !== -1) {
            removed = handleHotSearch(json);
        } else {
            return $done({});
        }
    } catch (e) {
        // 绝不让异常吃掉 $done：出问题时原样放行，宁可漏杀也不改坏响应
        console.log('[CoolApk] 处理异常: ' + e.message);
        return $done({});
    }

    if (DEBUG) console.log('[CoolApk] ' + url.split('?')[0] + ' 移除 ' + removed + ' 项');

    if (removed > 0) {
        $done({ body: JSON.stringify(json) });
    } else {
        $done({});
    }
})();
