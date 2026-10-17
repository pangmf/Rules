/**
 * 油价小组件（Hark 仪表盘版 · 透明液态玻璃）
 * 基于 jnlaoshu/MySelf GasPrice.js 改版：数据接口不变，界面与功能重做
 *
 * 新增 / 优化：
 *  • 透明液态玻璃（liquid，默认）：面板四层透明材质叠加
 *    ——斜向淡彩底 → 斜向高光 → 顶部径向光晕 → 1px 边缘描光；
 *    油价卡为按燃料语义着色的内嵌玻璃（92#金 / 95#珊瑚 / 98#蓝 / 柴油绿），
 *    常用油号以燃料色描边突出；全部材质颜色随系统深浅色自适应，文字带极淡投影
 *  • 小号 / 中号仅做「材质替换」：内边距、间距、卡片高度与原版完全一致，零增高
 *  • 大号在面板顶部加一道高光带（specular），模拟光线掠过玻璃上缘
 *  • 调价倒计时进度条（上次调价 → 下次调价）
 *  • 加满一箱要多少钱，以及本轮调价让一箱多花 / 少花多少
 *  • 请求失败时显示上次成功的缓存数据，不再整块报错
 *  • 2026 调价日历之后自动显示「待公布」，跨年不崩
 *  • 临近调价自动缩短刷新间隔（3 天内 30 分钟，平时 3 小时）
 *  • 支持锁屏小组件（行内 / 圆形 / 矩形）
 *
 * 环境变量：
 *  PROVINCE  省份编码或名称（默认 11 北京）
 *  CITY      城市（默认 北京）
 *  AREA_INDEX 多区域索引（可选）
 *  OFFSET_SCALE 涨跌幅系数（默认 1）
 *  MY_FUEL   常加的油号：92 / 95 / 98 / 柴油（默认 92）
 *  TANK_L    油箱容量，升（默认 50）
 *  TITLE     标题（默认「<城市>油价」）
 *  STYLE     背景样式：liquid（默认，透明液态玻璃）/ glass（旧版极简玻璃）/ classic（经典纯色）
 */
const BASE = 'https://cx.sinopecsales.com/yjkqiantai';
const QYJ_BASE = 'http://m.qiyoujiage.com';
const PROVINCES = {
  '11':'北京','12':'天津','13':'河北','14':'山西','41':'河南','37':'山东','31':'上海','32':'江苏','33':'浙江','34':'安徽','35':'福建','36':'江西','42':'湖北','43':'湖南','44':'广东','45':'广西','53':'云南','52':'贵州','46':'海南','50':'重庆','51':'四川','65':'新疆','15':'内蒙古','21':'辽宁','22':'吉林','64':'宁夏','61':'陕西','23':'黑龙江','54':'西藏','63':'青海','62':'甘肃'
};
// 省份代码 -> 汽油价格网 (qiyoujiage.com) 的省份拼音 slug，用于抓取调价预测
const QYJ_SLUGS = {
  '11':'beijing','12':'tianjin','13':'hebei','14':'shanxi','41':'henan','37':'shandong',
  '31':'shanghai','32':'jiangsu','33':'zhejiang','34':'anhui','35':'fujian','36':'jiangxi',
  '42':'hubei','43':'hunan','44':'guangdong','45':'guangxi','53':'yunnan','52':'guizhou',
  '46':'hainan','50':'chongqing','51':'sichuan','65':'xinjiang','15':'neimenggu','21':'liaoning',
  '22':'jilin','64':'ningxia','61':'shanxi-3','23':'heilongjiang','54':'xizang','63':'qinghai','62':'gansu'
};
const NAMES = [
  ['GAS_92', '92#'], ['GAS_95', '95#'], ['GAS_98', '98#'],
  ['E92', 'E92#'], ['E95', 'E95#'],
  ['AIPAO95', '爱跑95#'], ['AIPAO98', '爱跑98#'],
  ['AIPAOE92', '爱跑E92#'], ['AIPAOE95', '爱跑E95#'], ['AIPAOE98', '爱跑E98#'],
  ['CHAI_0', '0#'], ['CHAI_10', '-10#'], ['CHAI_20', '-20#'], ['CHAI_35', '-35#']
];
const KEY_MAP = {
  CHAI_0: 'CHECHAI_0', CHAI_10: 'CHECHAI_10',
  AIPAO95: 'AIPAO_GAS_95', AIPAO98: 'AIPAO_GAS_98',
  AIPAOE92: 'AIPAO_GAS_E92', AIPAOE95: 'AIPAO_GAS_E95', AIPAOE98: 'AIPAO_GAS_E98'
};
const TARGET_FUELS = ['GAS_92', 'GAS_95', 'GAS_98', 'AIPAO98', 'CHAI_0'];
const getEnv = (env, names, fallback = '') => {
  for (const name of names) {
    const value = env?.[name];
    if (value !== undefined && value !== null && String(value).trim() !== '') return String(value).trim();
  }
  return fallback;
};
const toNumber = (v, fallback) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};
const normalizeProvince = (value) => {
  const raw = String(value || '').trim();
  if (!raw) return '51';
  if (PROVINCES[raw]) return raw;
  const cleaned = raw.replace(/省|市|自治区|壮族|回族|维吾尔/g, '');
  const found = Object.entries(PROVINCES).find(([, name]) => name === cleaned || name.includes(cleaned) || cleaned.includes(name));
  return found ? found[0] : raw;
};
const parseSetCookie = (headers) => {
  let values = [];
  if (headers?.getAll) { try { const v = headers.getAll('set-cookie'); if (v) values = values.concat(v); } catch (_) {} }
  if (!values.length && headers?.get) { try { const v = headers.get('set-cookie'); if (v) values = values.concat(Array.isArray(v) ? v : [v]); } catch (_) {} }
  return values
    .flatMap((v) => Array.isArray(v) ? v : String(v).split(/,\s*(?=[A-Za-z0-9_]+=)/))
    .map((v) => String(v).split(';')[0].trim())
    .filter(Boolean)
    .join(';');
};
const stringToBase64 = (str) => {
  if (typeof Buffer !== 'undefined') return Buffer.from(str, 'utf8').toString('base64');
  const encoded = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  return btoa(encoded);
};
const lineChartSVG = (arr, { color = '#34C759', width = 120, height = 34, lineWidth = 2 } = {}) => {
  const nums = (arr || []).map(Number).filter(Number.isFinite).slice(-12);
  if (nums.length < 2) return null;
  const pad = Math.max(3, Math.ceil(lineWidth));
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const range = max - min || 1;
  const points = nums.map((n, i) => {
    const x = pad + (width - pad * 2) * (i / (nums.length - 1));
    const y = pad + (height - pad * 2) * (1 - ((n - min) / range));
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const bottom = height - pad;
  const area = `${points[0]} ${points.slice(1).join(' ')} ${width - pad},${bottom} ${pad},${bottom}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity="0.28"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><polygon points="${area}" fill="url(#fill)"/><polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="${lineWidth}" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>`;
  return `data:image/svg+xml;base64,${stringToBase64(svg)}`;
};
const COMMON_HEADERS = {
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  'Referer': `${BASE}/index.html`,
  'Origin': 'https://cx.sinopecsales.com'
};
async function readJSONResponse(resp) {
  const textBody = await resp.text();
  try { return JSON.parse(textBody); } catch (e) { throw new Error(`接口异常 HTTP ${resp.status || ''}`); }
}
async function loadData(ctx, province) {
  const initResp = await ctx.http.get(`${BASE}/data/initMainData`, { headers: COMMON_HEADERS, credentials: 'include', timeout: 15000 });
  const initJSON = await readJSONResponse(initResp);
  const cookie = parseSetCookie(initResp.headers);
  let current = initJSON;
  const headers = { ...COMMON_HEADERS, 'Content-Type': 'application/json;charset=UTF-8' };
  if (cookie) headers.Cookie = cookie;
  const resp = await ctx.http.post(`${BASE}/data/switchProvince`, {
    headers, body: { provinceId: String(province) }, credentials: 'include', timeout: 15000
  });
  const switched = await readJSONResponse(resp);
  if (switched?.data?.provinceCheck || switched?.data?.area?.length) current = switched;
  const histResp = await ctx.http.get(`${BASE}/data/initOilPrice`, {
    headers: cookie ? { ...COMMON_HEADERS, Cookie: cookie } : COMMON_HEADERS, credentials: 'include', timeout: 15000
  });
  const history = await readJSONResponse(histResp);
  return { current, history };
}
// 从汽油价格网 (qiyoujiage.com) 按省份抓取"下轮调价预测"涨跌幅
async function loadPrediction(ctx, provinceCode) {
  const slug = QYJ_SLUGS[provinceCode];
  if (!slug) return null;
  const resp = await ctx.http.get(`${QYJ_BASE}/${slug}.shtml`, {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,*/*',
      'User-Agent': COMMON_HEADERS['User-Agent']
    },
    timeout: 10000
  });
  const html = await resp.text();
  const dm = html.match(/下次油价(\d{1,2})月(\d{1,2})日24时调整/);
  const nextMD = dm ? [Number(dm[1]), Number(dm[2])] : null;
  // 1. 搁浅或不作调整
  if (/预计(?:油价)?(?:搁浅|不作?调整|停滞)/.test(html)) {
    return { flat: true, nextMD };
  }
  // 2. 主格式："目前预计上调油价780元/吨(0.59元/升-0.70元/升)" 或 单值 "(0.59元/升)"
  let m = html.match(/预计(上调|下调|上涨|下跌)(?:油价)?[\d.]+元\/吨\((\d+(?:\.\d+)?)元\/升(?:[-~至](\d+(?:\.\d+)?)元\/升)?\)/);
  // 3. 兜底格式："油价上涨0.32元/升-0.38元/升" 或 单值 "0.32元/升"
  if (!m) m = html.match(/(上涨|上调|下调|下跌)(?:油价)?(\d+(?:\.\d+)?)元\/升(?:[-~至](\d+(?:\.\d+)?)元\/升)?/);
  if (!m) return nextMD ? { none: true, nextMD } : null;
  const up = m[1] === '上调' || m[1] === '上涨';
  const minV = parseFloat(m[2]);
  const maxV = m[3] ? parseFloat(m[3]) : minV;
  if (!Number.isFinite(minV)) return null;
  return { up, minV, maxV, nextMD };
}
function resolveAreaIndex(current, cityName, explicitIndex) {
  if (explicitIndex != null && explicitIndex >= 0) return explicitIndex;
  const area = (current.data || current).area || [];
  if (!area.length || !cityName) return 0;
  const target = String(cityName).trim();
  const idx = area.findIndex((a) => {
    const name = a?.areaCheck?.AREA_NAME || a?.areaCheck?.CITY_NAME || a?.areaCheck?.PROVINCE_NAME || a?.areaName || '';
    return name && (name.includes(target) || target.includes(name));
  });
  return idx >= 0 ? idx : 0;
}
function extractItems(current, history, province, areaIndex, targetKeys, offsetScale) {
  let { provinceCheck, provinceData, area } = current.data || current;
  area = area || [];
  let areaName = '';
  if (area.length) {
    const idx = Math.max(0, Math.min(area.length - 1, areaIndex));
    provinceCheck = area[idx].areaCheck;
    provinceData = area[idx].areaData;
    areaName = area[idx]?.areaCheck?.AREA_NAME || area[idx]?.areaCheck?.CITY_NAME || area[idx]?.areaName || '';
  }
  const historyData = (((history.data || {}).area || []).length
    ? history.data.area[Math.max(0, Math.min(history.data.area.length - 1, areaIndex))].areaData
    : (history.data || {}).provinceData || []
  ).slice().reverse();
  const items = [];
  for (const [rawKey, name] of NAMES) {
    if (!targetKeys.includes(rawKey)) continue;
    if (provinceCheck?.[rawKey] === 'Y') {
      const key = KEY_MAP[rawKey] || rawKey;
      const offset = Number(provinceData?.[`${key}_STATUS`] ?? 0) * offsetScale;
      const series = historyData.map((it) => it?.[key]).map(Number).filter(Number.isFinite);
      items.push({ rawKey, key, name, price: provinceData?.[key], offset, series, up: offset > 0 });
    }
  }
  return { provinceName: provinceCheck?.PROVINCE_NAME || PROVINCES[province] || String(province), areaName, items };
}
// ---------------------------------------------------------------------------
// 调价日历
// ---------------------------------------------------------------------------
const CALENDAR = {
  2026: [[1,12],[1,23],[2,9],[2,23],[3,9],[3,23],[4,7],[4,21],[5,8],[5,22],
         [6,5],[6,19],[7,3],[7,17],[7,31],[8,14],[8,28],[9,11],[9,24],
         [10,14],[10,28],[11,11],[11,25],[12,9],[12,23]],
};
function adjustWindow(now, override) {
  const all = [];
  if (override) {
    const [om, od] = override; let oy = now.getFullYear();
    if (om < now.getMonth() + 1 - 6) oy += 1;
    const od8 = new Date(oy, om - 1, od, 23, 59, 59);
    if (od8 > now) all.push(od8);
  }
  Object.keys(CALENDAR).forEach(y => CALENDAR[y].forEach(([m, d]) => all.push(new Date(Number(y), m - 1, d, 23, 59, 59))));
  const uniq = []; all.forEach(d => { if (!uniq.some(u => Math.abs(u - d) < 4 * 86400000 && u > now && d > now)) uniq.push(d); });
  all.length = 0; uniq.sort((a, b) => a - b).forEach(d => all.push(d));
  const idx = all.findIndex(d => d.getTime() > now.getTime());
  if (idx < 0) return null;
  const next = all[idx];
  const prev = idx > 0 ? all[idx - 1] : new Date(next.getTime() - 14 * 86400000);
  const mins = Math.max(0, Math.floor((next - now) / 60000));
  const days = Math.floor(mins / 1440), hours = Math.floor((mins % 1440) / 60), m = mins % 60;
  return {
    next,
    dateStr: `${pad(next.getMonth() + 1)}.${pad(next.getDate())} 24:00`,
    shortDate: `${next.getMonth() + 1}.${next.getDate()}`,
    countdown: days > 0 ? `${days}天${hours}时` : `${hours}时${m}分`,
    days,
    progress: Math.max(0, Math.min(1, (now - prev) / (next - prev))),
    urgent: mins < 72 * 60,
  };
}
// ---------------------------------------------------------------------------
// 视觉
// ---------------------------------------------------------------------------
const pad = n => String(n).padStart(2, '0');
const C = {
  text: { light: '#000000', dark: '#FFFFFF' },
  dim: { light: '#3C3C4399', dark: '#EBEBF599' },
  glass: { light: 'rgba(255, 255, 255, 0.10)', dark: 'rgba(255, 255, 255, 0.06)' },
glassHi: { light: 'rgba(255, 255, 255, 0.16)', dark: 'rgba(255, 255, 255, 0.10)' },
glassBorder: { light: 'rgba(255, 255, 255, 0.28)', dark: 'rgba(255, 255, 255, 0.10)' },
  up: '#FF453A',
  down: '#30D158',
  gold: '#FFB340',
};
const FUELS = [
  { id: '92', label: '92号', key: 'p92', hex: '#FFB340' },
  { id: '95', label: '95号', key: 'p95', hex: '#FF6B5E' },
  { id: '98', label: '98号', key: 'p98', hex: '#64A8FF' },
  { id: '柴油', label: '柴油', key: 'diesel', hex: '#30D158' },
];
// ---------- 液态玻璃材质参数（STYLE=liquid 时生效） ----------
const G = {
  // 面板：斜向淡彩底（深色偏冷蓝、浅色偏白），整体压低透明度避免叠层发灰
  panelTint: { light: 'rgba(255, 255, 255, 0.38)', dark: 'rgba(26, 28, 36, 0.46)' },
  panelTint2: { light: 'rgba(255, 255, 255, 0.20)', dark: 'rgba(12, 13, 18, 0.36)' },
  sheen: 'rgba(255, 255, 255, 0.10)', // 斜向高光（两态通用）
  bloom: { light: 'rgba(255, 255, 255, 0.32)', dark: 'rgba(255, 255, 255, 0.11)' }, // 顶部光晕
  rim: { light: 'rgba(255, 255, 255, 0.55)', dark: 'rgba(255, 255, 255, 0.18)' }, // 边缘描光
  chipTop: { light: 'rgba(255, 255, 255, 0.44)', dark: 'rgba(255, 255, 255, 0.10)' }, // 玻璃面受光
  chipBottom: { light: 'rgba(255, 255, 255, 0.26)', dark: 'rgba(255, 255, 255, 0.05)' }, // 玻璃面背光
  chipBorder: { light: 'rgba(255, 255, 255, 0.62)', dark: 'rgba(255, 255, 255, 0.14)' },
  cardBorder: { light: 'rgba(255, 255, 255, 0.45)', dark: 'rgba(255, 255, 255, 0.12)' }, // 油价卡描边
  chipShadow: { light: 'rgba(0, 0, 0, 0.10)', dark: 'rgba(0, 0, 0, 0.30)' }
};
// 面板圆角与顶部光晕半径（贴合 Widget 容器圆角）
const PANEL_CFG = {
  small: { r: 20, bloom: 120 },
  medium: { r: 24, bloom: 190 },
  large: { r: 24, bloom: 250 }
};
const sizeOf = family => {
  const f = String(family || '').toLowerCase();
  return f.includes('small') ? 'small' : f.includes('large') ? 'large' : 'medium';
};
let LIQUID = true;   // getState 内按 STYLE 赋值（默认液态玻璃）
let PAL = C;         // 液态模式文本色（玻璃之上略提亮，保证可读性）
let TXT_SHADOW = {}; // 液态模式极淡文字投影：让文字从透明材质里"浮"出来
// 燃料色为固定亮色（两态通用），转 rgba 用于语义着色
const rgbOf = hex => {
  const h = String(hex || '').replace('#', '');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)).join(', ');
};
const tintRGB = (hex, a) => `rgba(${rgbOf(hex)}, ${a})`;
function bg(style = 'glass') {
  if (style === 'classic') {
    return {
      type: 'linear',
      colors: [
        { light: '#F2F2F7', dark: '#000000' },
        { light: '#F2F2F7', dark: '#1C1C1E' }
      ],
      stops: [0, 1],
      startPoint: { x: 0, y: 0 },
      endPoint: { x: 1, y: 1 }
    };
  }
  // glass / liquid：透明（液态玻璃由面板材质自行呈现）
  return {
    type: 'linear',
    colors: [
      { light: '#00000000', dark: '#00000000' },
      { light: '#00000000', dark: '#00000000' }
    ],
    stops: [0, 1],
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 1, y: 1 }
  };
}
function svgUri(svg) { return 'data:image/svg+xml,' + encodeURIComponent(svg); }
function barSvg(pct, color, w, h) {
  const p = Math.max(0, Math.min(1, Number(pct) || 0));
  const r = h / 2, fw = p > 0 ? Math.max(h, w * p) : 0;
  return svgUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'><rect width='${w}' height='${h}' rx='${r}' fill='${color}' fill-opacity='0.22'/>` +
    (fw ? `<rect width='${fw.toFixed(1)}' height='${h}' rx='${r}' fill='${color}'/>` : '') + `</svg>`);
}
function sparkLine(arr, color, w, h) {
  const nums = (arr || []).map(Number).filter(Number.isFinite).slice(-12);
  if (nums.length < 2) return null;
  const p = 2, min = Math.min(...nums), max = Math.max(...nums), rg = max - min || 1;
  const pts = nums.map((n, i) => `${(p + (w - 2 * p) * i / (nums.length - 1)).toFixed(1)},${(p + (h - 2 * p) * (1 - (n - min) / rg)).toFixed(1)}`);
  const area = `${pts.join(' ')} ${w - p},${h} ${p},${h}`;
  return svgUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'><polygon points='${area}' fill='${color}' fill-opacity='0.18'/><polyline points='${pts.join(' ')}' fill='none' stroke='${color}' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>`);
}
function T(text, size, color, weight = 'regular', extra = {}) {
  return { type: 'text', text: String(text ?? ''), font: { size, weight }, textColor: color || PAL.text, maxLines: 1, minScale: 0.7, ...(LIQUID && !extra.noShadow ? TXT_SHADOW : {}), ...extra };
}
function icon(name, color, size = 12, extra = {}) { return { type: 'image', src: `sf-symbol:${name}`, width: size, height: size, color, ...extra }; }
// 玻璃卡：液态→中性玻璃面（受光渐变 + 发丝描边 + 淡影）；
// glass→旧版细描边透明面（系统自行套 Liquid Glass）；classic→素容器
function glass(children, extra = {}) {
  if (LIQUID) {
    return {
      type: 'stack',
      direction: 'column',
      alignItems: 'start',
      gap: 4,
      padding: 10,
      borderRadius: 14,
      backgroundGradient: {
        type: 'linear',
        colors: [G.chipTop, G.chipBottom],
        stops: [0, 1],
        startPoint: { x: 0, y: 0 },
        endPoint: { x: 0.3, y: 1 }
      },
      borderWidth: 1,
      borderColor: G.chipBorder,
      shadowColor: G.chipShadow,
      shadowRadius: 5,
      shadowOffset: { x: 0, y: 2 },
      children,
      ...extra
    };
  }
  return {
    type: 'stack',
    direction: 'column',
    alignItems: 'start',
    gap: 4,
    padding: 10,
    borderRadius: 14,
    backgroundColor: '#00000000',
    borderWidth: 1,
    borderColor: C.glassBorder,
    children,
    ...extra
  };
}
function row(children, extra = {}) { return { type: 'stack', direction: 'row', alignItems: 'center', gap: 4, children, ...extra }; }
function fmtDelta(off) {
  if (off == null || !Number.isFinite(off) || off === 0) return { text: '持平', color: PAL.dim };
  return { text: `${off > 0 ? '▲' : '▼'}${Math.abs(off).toFixed(2)}`, color: off > 0 ? C.up : C.down };
}
// ---------------------------------------------------------------------------
// 数据（含缓存）
// ---------------------------------------------------------------------------
async function getState(ctx) {
  const env = ctx.env || {};
  const styleRaw = getEnv(env, ['STYLE'], 'liquid').toLowerCase();
  const style = styleRaw === 'classic' ? 'classic' : styleRaw === 'glass' ? 'glass' : 'liquid';
  LIQUID = style === 'liquid';
  PAL = LIQUID ? { ...C, dim: { light: '#3C3C43CC', dark: '#EBEBF5CC' } } : C;
  TXT_SHADOW = LIQUID
    ? { shadowColor: { light: 'rgba(0, 0, 0, 0.14)', dark: 'rgba(0, 0, 0, 0.35)' }, shadowRadius: 3, shadowOffset: { x: 0, y: 1 } }
    : {};
  const provinceCode = normalizeProvince(getEnv(env, ['PROVINCE', 'PROVINCE_ID', 'province'], '33'));
  const cityName = getEnv(env, ['CITY', 'city'], PROVINCES[provinceCode] || '台州');
  const rawArea = getEnv(env, ['AREA', 'AREA_INDEX', 'area'], '');
  const explicitArea = rawArea === '' ? null : toNumber(rawArea, null);
  const offsetScale = toNumber(getEnv(env, ['OFFSET_SCALE', 'offset_scale'], '1'), 1);
  const cacheKey = `gas.hark.v1.${provinceCode}.${cityName}`;
  const now = new Date();
  let win = adjustWindow(now);
  let state = null, error = null;
  try {
    const { current, history } = await loadData(ctx, provinceCode);
    const areaIndex = resolveAreaIndex(current, cityName, explicitArea);
    const payload = extractItems(current, history, provinceCode, areaIndex, TARGET_FUELS, offsetScale);
    const f = {};
    payload.items.forEach(it => { f[it.rawKey] = it; });
    const pick = it => it ? { price: Number(it.price), offset: Number(it.offset) || 0, series: it.series || [] } : null;
    const fuels = { p92: pick(f.GAS_92), p95: pick(f.GAS_95), p98: pick(f.GAS_98 || f.AIPAO98), diesel: pick(f.CHAI_0) };
    if (!Object.values(fuels).some(v => v && Number.isFinite(v.price))) throw new Error('接口未返回油价');
    state = { fuels, updatedAt: Date.now(), region: cityName || payload.provinceName };
    try { ctx.storage?.setJSON(cacheKey, state); } catch (_) {}
  } catch (e) {
    error = e && e.message ? e.message : String(e);
    try { state = ctx.storage?.getJSON(cacheKey) || null; } catch (_) {}
  }
  // 涨跌幅：临近调价时用汽油价格网的预测，否则用上次调整
  let trend = null;
  if (state) {
    const offs = Object.values(state.fuels).filter(Boolean).map(v => v.offset).filter(v => v);
    if (offs.length) {
      const up = offs.reduce((a, b) => a + b, 0) >= 0;
      const abs = offs.map(Math.abs), lo = Math.min(...abs).toFixed(2), hi = Math.max(...abs).toFixed(2);
      trend = { label: '上次', text: `${up ? '↑' : '↓'} ${lo === hi ? lo : `${lo}-${hi}`} 元/升`, color: up ? C.up : C.down };
    }
    if (!error) {
      try {
        const pr = await loadPrediction(ctx, provinceCode);
        if (pr && pr.nextMD) win = adjustWindow(now, pr.nextMD) || win;
        if (pr && !pr.none && !pr.flat) state.pred = { up: pr.up, minV: pr.minV, maxV: pr.maxV };
        else state.pred = pr && pr.flat ? { flat: true } : null;
        if (pr && pr.none) {}
        else if (pr && pr.flat) trend = { label: '预测', text: '搁浅 / 不调整', color: PAL.dim };
        else if (pr) {
          const r = pr.minV === pr.maxV ? pr.minV.toFixed(2) : `${pr.minV.toFixed(2)}-${pr.maxV.toFixed(2)}`;
          trend = { label: '预测', text: `${pr.up ? '↑' : '↓'} ${r} 元/升`, color: pr.up ? C.up : C.down };
        }
      } catch (_) {}
    }
  }
  const myId = getEnv(env, ['MY_FUEL'], '92').replace(/号|#/g, '');
  const my = FUELS.find(x => x.id === myId || (myId.includes('柴') && x.id === '柴油')) || FUELS[0];
  const tank = Math.max(1, toNumber(getEnv(env, ['TANK_L'], '50'), 50));
  const title = getEnv(env, ['TITLE'], `${cityName || '全国'}油价`);
  return { state, error, win, trend, my, tank, title, now, cityName, style };
}
function tankInfo(S) {
  const f = S.state && S.state.fuels[S.my.key];
  if (!f || !Number.isFinite(f.price)) return null;
  return { full: f.price * S.tank, diff: (f.offset || 0) * S.tank };
}
// ---------------------------------------------------------------------------
// 组件
// ---------------------------------------------------------------------------
function header(S, size = 13) {
  return row([
    icon('fuelpump.fill', C.gold, size - 1, LIQUID ? TXT_SHADOW : {}),
    T(S.title, size, PAL.text, 'semibold', { minScale: 1 }),
    { type: 'spacer' },
    T(`${S.error ? '缓存 · ' : ''}更新 ${S.state ? fmtTs(S.state.updatedAt) : '--'}`, 10, S.error ? C.gold : PAL.dim, 'regular', { minScale: 1 }),
  ]);
}
function fmtTs(ts) { const d = new Date(ts); return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
function priceCard(S, fu, o) {
  const f = S.state.fuels[fu.key];
  const d = fmtDelta(f && f.offset);
  const mine = fu.id === S.my.id;
  const line = o.spark && f ? sparkLine(f.series, fu.hex, 90, 24) : null;
  const children = [
    row([
      { type: 'stack', width: 5, height: 5, borderRadius: 3, backgroundColor: fu.hex, children: [] },
      T(fu.label, o.label, fu.hex, 'semibold', { minScale: 1 }),
      ...(mine ? [T('常用', 8, PAL.dim, 'medium', { minScale: 1 })] : []),
    ], { gap: 3 }),
    T(f && Number.isFinite(f.price) ? f.price.toFixed(2) : '--', o.price, PAL.text, 'bold', { minScale: 0.8 }),
    T(d.text, o.delta, d.color, 'semibold', { minScale: 1 }),
    ...(line ? [{ type: 'image', src: line, width: o.sparkW, height: o.sparkH }] : []),
  ];
  if (LIQUID) {
    // 液态：燃料语义着色玻璃卡（顶部着色较重、底部渐隐，模拟液体玻璃的染色与受光）；
    // 常用油号以燃料色描边突出。内边距/间距/卡高与旧版完全一致，仅替换材质
    return {
      type: 'stack',
      direction: 'column',
      alignItems: 'center',
      gap: o.gap || 2,
      padding: o.pad || [8, 4],
      borderRadius: o.radius || 12,
      flex: 1,
      backgroundGradient: {
        type: 'linear',
        colors: [tintRGB(fu.hex, 0.15), tintRGB(fu.hex, 0.045)],
        stops: [0, 1],
        startPoint: { x: 0, y: 0 },
        endPoint: { x: 0.3, y: 1 }
      },
      borderWidth: 1,
      borderColor: mine ? tintRGB(fu.hex, 0.5) : G.cardBorder,
      shadowColor: G.chipShadow,
      shadowRadius: 4,
      shadowOffset: { x: 0, y: 2 },
      children,
      ...(o.height ? { height: o.height } : {})
    };
  }
  return glass(children, { flex: 1, alignItems: 'center', gap: o.gap || 2, padding: o.pad || [8, 4], borderRadius: 10, backgroundColor: '#00000000', borderColor: mine ? C.glassBorder : { light: 'rgba(255,255,255,0.10)', dark: 'rgba(255,255,255,0.05)' }, ...(o.height ? { height: o.height } : {}) });
}
function countdownRow(S, barW, short) {
  const w = S.win;
  const c = w ? (w.urgent ? C.up : C.gold) : C.dim;
  return row([
    icon('clock.fill', c, 10),
    T(w ? `下轮 ${short ? w.shortDate : w.dateStr}` : '下轮调价 待公布', 10, PAL.text, 'semibold', { minScale: 1 }),
    ...(w ? [{ type: 'image', src: barSvg(w.progress, c, barW, 5), width: barW, height: 5 }, T(`${w.countdown}后`, 10, c, 'semibold', { minScale: 1 })] : []),
  ], { gap: 5 });
}
function tankRow(S, preferPred) {
  const tk = tankInfo(S);
  if (!tk) return T('', 10, PAL.dim);
  const pr = S.state && S.state.pred;
  if (preferPred && pr && !pr.flat) {
    const lo = (pr.minV * S.tank).toFixed(1), hi = (pr.maxV * S.tank).toFixed(1);
    return row([
      icon('drop.fill', S.my.hex, 10),
      T(`${S.my.label}加满 ${S.tank}L ¥${tk.full.toFixed(1)}`, 10, PAL.text, 'medium', { minScale: 1 }),
      T(`· 下轮预计${pr.up ? '多花' : '省'} ¥${lo === hi ? lo : lo + '-' + hi}`, 10, pr.up ? C.up : C.down, 'medium', { minScale: 0.8 }),
    ]);
  }
  const diff = tk.diff ? `${tk.diff > 0 ? '多花' : '省'} ¥${Math.abs(tk.diff).toFixed(1)}` : '与上次持平';
  return row([
    icon('drop.fill', S.my.hex, 10),
    T(`${S.my.label}加满 ${S.tank}L ¥${tk.full.toFixed(1)}`, 10, PAL.text, 'medium', { minScale: 1 }),
    T(`· 本轮${diff}`, 10, tk.diff > 0 ? C.up : tk.diff < 0 ? C.down : PAL.dim, 'medium', { minScale: 0.8 }),
  ]);
}
function trendRow(S, short) {
  if (!S.trend) return T('', 10, PAL.dim);
  return row([T(S.trend.label === '预测' ? '下轮预测' : '较上次', 10, PAL.dim, 'medium', { minScale: 1 }), T(short ? S.trend.text.replace(' 元/升', '').replace(' ', '') : S.trend.text, 10, S.trend.color, 'bold', { minScale: 1 })], { gap: 3 });
}
function refreshAfter(S) {
  const mins = S.win && S.win.urgent ? 30 : 180;
  return new Date(Date.now() + mins * 60000).toISOString();
}
// 面板顶部高光带：模拟光线掠过玻璃上缘（大号液态）
const specular = {
  type: 'stack',
  direction: 'row',
  height: 1.5,
  children: [],
  backgroundGradient: {
    type: 'linear',
    colors: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.40)', 'rgba(255, 255, 255, 0.06)', 'rgba(255, 255, 255, 0)'],
    stops: [0, 0.3, 0.55, 1],
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 1, y: 0 }
  }
};
// 四层面板：斜向淡彩底 → 斜向高光 → 顶部径向光晕 → 1px 边缘描光（rim 内承载内容与内边距）
function glassPanel(children, padding, gap, size) {
  const cfg = PANEL_CFG[size] || PANEL_CFG.medium;
  const layer = (grad, child) => ({
    type: 'stack',
    direction: 'column',
    alignItems: 'start',
    flex: 1,
    borderRadius: cfg.r,
    ...(grad ? { backgroundGradient: grad } : {}),
    children: [child]
  });
  const rim = {
    type: 'stack',
    direction: 'column',
    alignItems: 'start',
    flex: 1,
    gap,
    borderRadius: cfg.r,
    borderWidth: 1,
    borderColor: G.rim,
    padding,
    children
  };
  return layer({
    type: 'linear',
    colors: [G.panelTint, G.panelTint2],
    stops: [0, 1],
    startPoint: { x: 0.1, y: 0 },
    endPoint: { x: 0.9, y: 1 }
  }, layer({
    type: 'linear',
    colors: [G.sheen, 'rgba(255, 255, 255, 0)'],
    stops: [0, 0.65],
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 1, y: 1 }
  }, layer({
    type: 'radial',
    colors: [G.bloom, 'rgba(255, 255, 255, 0)'],
    stops: [0, 1],
    center: { x: 0.5, y: 0 },
    startRadius: 0,
    endRadius: cfg.bloom
  }, rim)));
}
// 组件根：液态→四层面板（padding/gap 与旧版一致，零增高）；
// classic→纯色底；glass→透明底（均保持旧版行为）
function root(S, children, padding, gap, size) {
  if (LIQUID) {
    return {
      type: 'widget', padding: 0, refreshAfter: refreshAfter(S), url: BASE,
      children: [glassPanel(children, padding, gap, size)]
    };
  }
  return {
    type: 'widget', padding, gap, backgroundGradient: bg(S.style), refreshAfter: refreshAfter(S), url: BASE,
    children
  };
}
function errorWidget(S, family) {
  const content = [
    header(S),
    { type: 'spacer' },
    icon('exclamationmark.triangle.fill', C.gold, 20, LIQUID ? TXT_SHADOW : {}),
    T('油价加载失败', 14, PAL.text, 'semibold'),
    T(S.error || '', 10, PAL.dim, 'regular', { maxLines: 3 }),
    { type: 'spacer' }
  ];
  if (LIQUID) return root(S, content, 14, 6, sizeOf(family));
  return { type: 'widget', padding: 14, gap: 6, backgroundGradient: bg(S.style), children: content };
}
function buildSmall(S) {
  const o = { label: 10, price: 15, delta: 9, pad: [5, 3], gap: 1, radius: 10 };
  const children = [
    row([icon('fuelpump.fill', C.gold, 11, LIQUID ? TXT_SHADOW : {}), T(S.title, 12, PAL.text, 'semibold', { minScale: 1 }), { type: 'spacer' }, T(S.state ? fmtTs(S.state.updatedAt).slice(6) : '', 9, PAL.dim, 'regular', { minScale: 1 })]),
    { type: 'stack', direction: 'column', gap: 5, flex: 1, children: [
      row(FUELS.slice(0, 2).map(f => priceCard(S, f, o)), { gap: 5, flex: 1 }),
      row(FUELS.slice(2).map(f => priceCard(S, f, o)), { gap: 5, flex: 1 }),
    ] },
    row([icon('clock.fill', S.win && S.win.urgent ? C.up : C.gold, 9), T(S.win ? `${S.win.shortDate} 调价 · ${S.win.countdown}后` : '下轮调价 待公布', 9, S.win && S.win.urgent ? C.up : PAL.dim, 'semibold', { minScale: 0.8 })], { gap: 3 }),
  ];
  return root(S, children, 11, 6, 'small');
}
function buildMedium(S) {
  const o = { label: 10, price: 19, delta: 10, pad: [7, 4], gap: 2, height: 66, radius: 12 };
  const children = [
    header(S),
    row(FUELS.map(f => priceCard(S, f, o)), { gap: 6 }),
    glass([
      row([countdownRow(S, 40, true), { type: 'spacer' }, trendRow(S, true)]),
      tankRow(S, true),
    ], { gap: 4, padding: [6, 9], borderRadius: 12 }),
  ];
  return root(S, children, [10, 11], 6, 'medium');
}
function buildLarge(S) {
  const o = { label: 11, price: 21, delta: 10, spark: true, sparkW: 80, sparkH: 16, pad: [5, 6], gap: 2, height: 88, radius: 14 };
  const tk = FUELS.map(fu => {
    const f = S.state.fuels[fu.key];
    return { type: 'stack', direction: 'column', alignItems: 'center', gap: 1, flex: 1, children: [T(fu.label, 9, fu.hex, 'semibold', { minScale: 1 }), T(f && Number.isFinite(f.price) ? `¥${(f.price * S.tank).toFixed(0)}` : '--', 12, PAL.text, 'bold', { minScale: 0.8 })] };
  });
  const t = tankInfo(S), pr = S.state.pred;
  const parts = [];
  if (t) parts.push(T(t.diff ? `本轮${t.diff > 0 ? '多花' : '省'} ¥${Math.abs(t.diff).toFixed(1)}` : '本轮持平', 10, t.diff > 0 ? C.up : t.diff < 0 ? C.down : PAL.dim, 'medium', { minScale: 1 }));
  if (pr && !pr.flat) {
    const lo = (pr.minV * S.tank).toFixed(1), hi = (pr.maxV * S.tank).toFixed(1);
    parts.push(T('·', 10, PAL.dim), T(`下轮预计${pr.up ? '多花' : '省'} ¥${lo === hi ? lo : lo + '-' + hi}`, 10, pr.up ? C.up : C.down, 'medium', { minScale: 1 }));
  }
  const children = [
    header(S, 14),
    ...(LIQUID ? [specular] : []),
    row(FUELS.slice(0, 2).map(f => priceCard(S, f, o)), { gap: 8 }),
    row(FUELS.slice(2).map(f => priceCard(S, f, o)), { gap: 8 }),
    glass([
      row([countdownRow(S, 90), { type: 'spacer' }]),
      row([trendRow(S), { type: 'spacer' }, icon('drop.fill', S.my.hex, 9), T(`加满 ${S.tank}L`, 10, PAL.dim, 'medium', { minScale: 1 })]),
      row(tk, { gap: 4 }),
      row([icon('drop.fill', S.my.hex, 9), T(`${S.my.label}`, 10, PAL.text, 'medium', { minScale: 1 }), ...parts, { type: 'spacer' }], { gap: 3 }),
    ], { gap: 5, padding: [8, 12], borderRadius: 14 }),
    { type: 'spacer' },
  ];
  return root(S, children, 14, 8, 'large');
}
function buildLock(S, family) {
  const f = S.state.fuels[S.my.key];
  const price = f && Number.isFinite(f.price) ? f.price.toFixed(2) : '--';
  const d = fmtDelta(f && f.offset);
  const when = S.win ? `${S.win.countdown}后调价` : '调价待公布';
  if (family === 'accessoryInline') {
    return { type: 'widget', children: [T(`⛽ ${S.my.label} ${price} ${d.text} · ${when}`, 12, PAL.text, 'medium', { noShadow: true })] };
  }
  if (family === 'accessoryCircular') {
    return {
      type: 'widget', padding: 4, gap: 0, children: [
        { type: 'spacer' }, icon('fuelpump.fill', PAL.text, 12), T(price, 13, PAL.text, 'bold', { minScale: 0.6, noShadow: true }), T(S.my.label, 8, PAL.dim, 'medium', { noShadow: true }), { type: 'spacer' },
      ],
    };
  }
  return {
    type: 'widget', gap: 2, children: [
      row([icon('fuelpump.fill', PAL.text, 11), T(S.title, 11, PAL.text, 'semibold', { noShadow: true })]),
      T(FUELS.map(fu => { const x = S.state.fuels[fu.key]; return `${fu.label.replace('号', '')} ${x && Number.isFinite(x.price) ? x.price.toFixed(2) : '--'}`; }).slice(0, 3).join('  '), 11, PAL.text, 'medium', { noShadow: true }),
      T(S.win ? `${S.win.dateStr} 调价 · ${S.win.countdown}后` : '下轮调价 待公布', 10, PAL.dim, 'medium', { noShadow: true }),
    ],
  };
}
export default async function (ctx) {
  const S = await getState(ctx);
  const family = ctx.widgetFamily || 'systemMedium';
  if (!S.state) return errorWidget(S, family);
  if (family.startsWith('accessory')) return buildLock(S, family);
  if (family === 'systemSmall') return buildSmall(S);
  if (family === 'systemLarge' || family === 'systemExtraLarge') return buildLarge(S);
  return buildMedium(S);
}
