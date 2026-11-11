var WidgetMetadata = {"id":"catpaw.seedhub","title":"猫 · SeedHub","author":"balge","version":"2.2.8","requiredVersion":"0.0.1","description":"影视搜索与网盘播放，支持多版本、媒体标签和外挂字幕。","detailCacheDuration":1800,"globalParams":[{"name":"site","title":"手动域名（留空使用内置地址）","type":"input","value":"","placeholders":[{"title":"填写后优先使用，失败自动切换内置地址","value":""}]},{"name":"flaresolverrUrl","title":"FlareSolverr 地址（可选）","type":"input","value":"","placeholders":[{"title":"留空不使用；遇访问验证时调用，可填基础地址或 /v1，支持 ?apikey=…","value":""}]},{"name":"credentialSource","title":"网盘账号来源","type":"enumeration","value":"shared","enumOptions":[{"title":"共用账号","value":"shared"},{"title":"仅本模块","value":"local"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"subtitles","title":"同版本外挂字幕","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（最多 3 条）","value":"auto"},{"title":"关闭","value":"off"}]}],"search":{"title":"SeedHub 搜索","functionName":"search","params":[{"name":"keyword","title":"关键词（输入“访问检测”检查网站连接）","type":"input","value":""},{"name":"page","title":"页码","type":"page"}]},"modules":[{"id":"browse","title":"SeedHub 分类","functionName":"browse","cacheDuration":120,"params":[{"name":"category","title":"分类","type":"enumeration","value":"1","enumOptions":[{"title":"电影","value":"1"},{"title":"动漫","value":"2"},{"title":"剧集","value":"3"}]},{"name":"order","title":"排序","type":"enumeration","value":"update","enumOptions":[{"title":"最近更新","value":"update"},{"title":"上映时间","value":"date"},{"title":"豆瓣评分","value":"score"},{"title":"近期热门","value":"hot"}]},{"name":"page","title":"页码","type":"page"}]},{"id":"clearRexCatalogCache","title":"刷新网盘目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载网盘资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}]};
var SeedPan = (function(){var WidgetMetadata;
WidgetMetadata = {"id":"catpaw.seedhub.pan.rex","title":"SeedHub","version":"2.2.4","requiredVersion":"0.0.1","description":"全盘影视搜索，支持夸克、百度、UC、115、123、移动、天翼、迅雷网盘及外挂字幕。","author":"balge","site":"https://quanpan.xyz","detailCacheDuration":1800,"globalParams":[{"name":"site","title":"站点地址（留空使用全盘搜索）","type":"input","value":"https://quanpan.xyz"},{"name":"quarkCookie","title":"垮 Cookie","type":"input"},{"name":"baiduCookie","title":"佰 Cookie","type":"input"},{"name":"cookie115","title":"伍 Cookie","type":"input"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"multiSource","title":"聚合搜索","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]}],"modules":[{"id":"searchResources","title":"搜索网盘资源","functionName":"search","cacheDuration":0,"params":[{"name":"keyword","title":"关键词","type":"input"}]},{"id":"refreshCatalog","title":"刷新目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}],"search":{"title":"全盘搜索","functionName":"search","params":[{"name":"keyword","title":"关键词","type":"input"},{"name":"page","title":"页码","type":"page"}]}};

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const CACHE_FOLDER = "CatpawCache";
const STORAGE_COOKIE_KEY = "catpaw.seedhub.pan.quark.cookie";
const STORAGE_SITE_KEY = "catpaw.seedhub.pan.quark.site";
const STORAGE_PRELOAD_KEY = "catpaw.seedhub.pan.quark.preloadCount";
let CURRENT_COOKIE = "";

function getSite(params) {
  const incoming=params&&typeof params.site==="string"?params.site.trim():"";
  if(incoming){const site=qpOrigin(incoming);safeStorageSet(STORAGE_SITE_KEY,site);return site;}
  return qpOrigin(safeStorageGet(STORAGE_SITE_KEY)||"https://quanpan.xyz");
}

function safeStorageGet(key) {
  try {
    return Widget && Widget.storage && Widget.storage.get ? Widget.storage.get(key) : "";
  } catch (e) {
    
    return "";
  }
}

function safeStorageSet(key, value) {
  try {
    if (Widget && Widget.storage && Widget.storage.set) Widget.storage.set(key, value);
  } catch (e) {
    
  }
}

function normalizeCookie(cookie) {
  return String(cookie || "").trim();
}

function ensureCookie(cookie) {
  const incoming = normalizeCookie(cookie);
  if (incoming) {
    CURRENT_COOKIE = incoming;
    safeStorageSet(STORAGE_COOKIE_KEY, incoming);
    return CURRENT_COOKIE;
  }
  if (CURRENT_COOKIE) return CURRENT_COOKIE;
  CURRENT_COOKIE = normalizeCookie(safeStorageGet(STORAGE_COOKIE_KEY));
  return CURRENT_COOKIE;
}

function getPreloadCount(params) {
  const incoming = params && params.preloadCount !== undefined ? Number(params.preloadCount) : NaN;
  if (!Number.isNaN(incoming)) {
    const n = Math.max(0, Math.floor(incoming));
    safeStorageSet(STORAGE_PRELOAD_KEY, String(n));
    return n;
  }
  const saved = Number(safeStorageGet(STORAGE_PRELOAD_KEY));
  if (!Number.isNaN(saved)) return Math.max(0, Math.floor(saved));
  return 3;
}

function bindForwardParams(params = {}) {
  getSite(params);
  getPreloadCount(params);
  if(Object.prototype.hasOwnProperty.call(params,"cookie115")) safeStorageSet("catpaw.seedhub.pan.115.cookie",normalizeCookie(params.cookie115));
  if (params.multiSource === "enabled" || params.multiSource === "disabled") {
    safeStorageSet("catpaw.seedhub.pan.multiSource", params.multiSource);
  }
  const ck = params.quarkCookie || params.cookie || params.quarkck || "";
  if(Object.prototype.hasOwnProperty.call(params,"quarkCookie")) {
    CURRENT_COOKIE=normalizeCookie(params.quarkCookie);
    safeStorageSet(STORAGE_COOKIE_KEY,CURRENT_COOKIE);
  } else ensureCookie(ck);
  if (Object.prototype.hasOwnProperty.call(params, "baiduCookie")) {
    safeStorageSet("catpaw.seedhub.pan.baidu.cookie", normalizeCookie(params.baiduCookie));
  }
}

function toQuery(obj) {
  return Object.keys(obj || {}).map(k => k + "=" + encodeURIComponent(obj[k])).join("&");
}

function absUrl(url, site) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) return site + url;
  return site + "/" + url;
}

function pickText($, el, selector) {
  return $(el).find(selector).text().trim();
}

function idFromHref(href) {
  const s = String(href || "");
  const m = s.match(/\/detail\/id\/(\d+)\.html/) || s.match(/\/vod\/detail\/id\/(\d+)\.html/) || s.match(/id\/(\d+)/);
  return m ? m[1] : s;
}

function encodeLink(obj) {
  return "seedpan:" + encodeURIComponent(JSON.stringify(obj));
}

function decodeLink(link) {
  const raw = String(link || "");
  if (!raw.startsWith("seedpan:")) return null;
  try { return JSON.parse(decodeURIComponent(raw.slice(8))); } catch (_) { return null; }
}

async function httpTextFresh(url, options) {
  rexAssertWithinUsagePeriod();
  const res = await cpHttpGet(url, Object.assign({ timeout: 8000, headers: { "User-Agent": UA, Referer: getSite() + "/" } }, options || {}));
  return typeof res.data === "string" ? res.data : JSON.stringify(res.data || "");
}

async function httpJsonCore(method, url, data, headers, readToken) {
  const baseHeaders = headers || quarkHeaders();
  const cpQuarkRequestProfile=cpActiveProfile||cpProfile,cpQuarkRequestCookie=String(Object.entries(baseHeaders).find(([name])=>name.toLowerCase()==="cookie")?.[1]||"");
  let res;
  if (method === "POST") {
    res = await cpHttpPost(url, JSON.stringify(data || {}), {
      timeout: 8000,
      headers: Object.assign({}, baseHeaders, { "Content-Type": "application/json" })
    });
  } else {
    res = await cpHttpGet(url, Object.assign({headers:baseHeaders,timeout:8000},readToken?{cpB6Token:readToken}:{}));
    if(readToken){const status=Number(res.status||res.statusCode||0);if(status===401||status===429){const error=cpError(status===401?'AUTH_FAILED':'RATE_LIMITED');error.status=status;throw error;}}
  }
  /* Cookie rotation is committed by cpQuarkAcceptResponse below. */
  cpQuarkAcceptResponse(url,res,cpQuarkRequestProfile,cpQuarkRequestCookie);
  const json=typeof res.data === "string" ? JSON.parse(res.data) : res.data;
  const httpStatus=Number(res.status || res.statusCode || 0);
  qpAssertShareResponse(url,json,httpStatus);
  if(httpStatus>=400) {
    const error=new Error("网盘接口 HTTP 错误");
    error.status=httpStatus;
    error.code=json && (json.errno !== undefined ? json.errno : json.error_code !== undefined ? json.error_code : json.code);
    throw error;
  }
  
  return json;
}

function quarkHeaders(cookie) {
  const ck = ensureCookie(cookie);
  return {
    "User-Agent": UA,
    "Cookie": ck,
    "Referer": "https://pan.quark.cn/"
  };
}

function playHeaders() {
  return { "User-Agent": UA, "Cookie": CURRENT_COOKIE };
}

// Explicit drive expiry is terminal; password/auth ambiguity remains retryable.
function qpAssertShareResponse(url,json,status){
 if(!/^https:\/\/(?:drive(?:-[a-z]+)?\.quark\.cn|pc-api\.uc\.cn|pan\.baidu\.com|(?:webapi|proapi)\.115\.com|(?:www\.)?123pan\.(?:com|cn))\//i.test(String(url)))return;
 if(!/\/(?:share\/|file\/download|app\/share\/)/.test(url)||!json||typeof json!=='object')return;
 const failed=Number(status)>=400||json.state===false||json.success===false||['errno','error_code','code'].some(k=>json[k]!=null&&String(json[k])!=='0'&&String(json[k])!=='200')||Number(json.status)>=400;
 const message=[json.message,json.msg,json.errmsg,json.error_msg,json.error].filter(v=>typeof v==='string').join(' ');
 if(!failed||/提取码|提取碼|密码|密碼|验证码|驗證碼|password|passcode|captcha|token|登录|登陆|login|或|or /i.test(message))return;
 if(/(?:分享|共享|链接|連結)[^。\n]{0,20}(?:过期|失效|取消|删除|不存在)|share(?:d)?(?: link)?[^.\n]{0,30}(?:expired|cancelled|canceled|deleted|not found)/i.test(message))throw cpError('SHARE_EXPIRED');
}
// Protocol source: quanpan.xyz/api.min.js (2026-10-20). Search tokens never leave this origin.
const QP_PROVIDERS=["quark","baidu","uc","115","123","yidong","tianyi","xunlei"];
const qpTokens=new Map();
function qpError(status,kind){
 const code=status===403?"QUANPAN_ACCESS_DENIED":status===429?"QUANPAN_RATE_LIMITED":"QUANPAN_UPSTREAM_ERROR";
 const error=new Error("全盘搜索"+(kind||"接口")+(status?" HTTP "+status:"返回数据异常"));
 error.code=code;error.status=status||undefined;return error;
}
function qpCheck(signal){cpCheck(cpActiveProfile||cpProfile);if(signal&&signal.aborted)throw cpError("ABORTED");}
async function qpResponse(work){
 try{return await work();}catch(error){
  const status=Number(error?.response?.status||error?.status||error?.statusCode||String(error?.message||"").match(/^HTTP\s+([45]\d{2})(?::|\s|$)/i)?.[1]);
  if(status>=400)return {status,data:error?.response?.data};
  throw error;
 }
}
// Rex's JavaScriptCore context has no browser URL/URLSearchParams globals.
function qpParseUrl(value){
 const match=/^(https?):\/\/([a-z0-9.-]+)(?::([0-9]{1,5}))?(\/[^?#\\]*)?(?:\?([^#]*))?(?:#(.*))?$/i.exec(String(value));
 if(!match||!match[2].split(".").every(label=>/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)))return null;
 const protocol=match[1].toLowerCase()+":",hostname=match[2].toLowerCase();
 if(match[3]&&Number(match[3])>65535)return null;
 const port=match[3]&&Number(match[3])!==(protocol==="https:"?443:80)?String(Number(match[3])):"";
 const origin=protocol+"//"+hostname+(port?":"+port:""),pathname=match[4]||"/",query=match[5]||"",hash=match[6]||"";
 return {origin,hostname,port,pathname,search:query,hash,href:origin+pathname+(match[5]===undefined?"":"?"+query)+(match[6]===undefined?"":"#"+hash),param(name){
  for(const part of query.split("&")){const at=part.indexOf("="),key=at<0?part:part.slice(0,at),value=at<0?"":part.slice(at+1);
   try{if(decodeURIComponent(key.replace(/\+/g," "))===name)return decodeURIComponent(value.replace(/\+/g," "));}catch(_){}
  }return null;
 }};
}
function qpOrigin(value){
 const url=qpParseUrl(String(value).trim());
 if(!url||url.pathname!=="/"||url.search||url.hash)throw qpError(0,"站点地址");
 return url.origin;
}
function qpData(response,kind){
 const status=Number(response&&(response.status||response.statusCode)||200);
 if(status<200||status>=300)throw qpError(status,kind);
 let json;try{json=typeof response.data==="string"?JSON.parse(response.data):response.data;}catch(_){throw qpError(0,kind);}
 if(!json||typeof json!=="object"||Array.isArray(json)||(json.code!=null&&Number(json.code)!==0))throw qpError(0,kind);
 return json.data&&typeof json.data==="object"&&!Array.isArray(json.data)?json.data:json;
}
async function qpGetToken(site,force=false){
 const cpMatchingTokenContext=cpMatchingCaptureContext(),denied=cpMatchingTokenContext.quanpan?.tokenFailures?.get(site);if(denied)throw denied;
 const current=qpTokens.get(site);
 if(current&&current.pending)return await current.pending;
 if(!force&&current&&Date.now()<current.refreshAt)return current.token;
 const entry={};
 entry.pending=(async()=>{
  const response=await qpResponse(()=>cpHttpGet(site+"/api/auth/token",{timeout:15000,headers:{"User-Agent":UA,Referer:site+"/",Accept:"application/json"}}));
  cpMatchingCheckContext(cpMatchingTokenContext);const data=qpData(response,"令牌接口"),ttl=data.ttl_ms==null?900000:Number(data.ttl_ms);
  if(typeof data.token!=="string"||!data.token.trim()||data.token.length>8192||/[\x00-\x20\x7f]/.test(data.token)||!Number.isFinite(ttl)||ttl<=0)throw qpError(0,"令牌接口");
  entry.token=data.token;entry.refreshAt=Date.now()+ttl-Math.min(180000,ttl/5);
  return entry.token;
 })();
 qpTokens.set(site,entry);
 try{return await entry.pending;}catch(error){if(qpTokens.get(site)===entry)qpTokens.delete(site);if(error.status===403||error.status===429)cpMatchingTokenContext.quanpan?.tokenFailures?.set(site,error);throw error;}
 finally{delete entry.pending;}
}
async function qpDirectSearchData(site,keyword,signal){
 const providers=QP_PROVIDERS.filter(cpDriveEnabled);if(!providers.length)return {merged_by_type:{},results:[]};
 qpCheck(signal);let token=await qpGetToken(site);qpCheck(signal);
 const request=()=>qpResponse(()=>cpHttpPost(site+"/api/search",JSON.stringify({kw:keyword,res:"merge",src:"all",cloud_types:providers}),{
  timeout:30000,headers:{"User-Agent":UA,Referer:site+"/",Accept:"application/json","Content-Type":"application/json","X-QP-K":token}
 }));
 let response=await request();qpCheck(signal);
 if(Number(response.status||response.statusCode)===403){token=await qpGetToken(site,true);qpCheck(signal);response=await request();qpCheck(signal);}
 if(Number(response.status||response.statusCode)===403)qpOperation?.tokenFailures?.set(site,qpError(403,"搜索接口"));
 return qpData(response,"搜索接口");
}
async function qpSearchData(site,keyword,signal){
 qpCheck(signal);const data=await qpDirectSearchData(site,keyword,signal);
 if(data.merged_by_type!=null&&(typeof data.merged_by_type!=="object"||Array.isArray(data.merged_by_type)))throw qpError(0,"搜索接口");
 if(data.results!=null&&!Array.isArray(data.results))throw qpError(0,"搜索接口");
 for(const provider of QP_PROVIDERS)if(data.merged_by_type&&Object.prototype.hasOwnProperty.call(data.merged_by_type,provider)&&!Array.isArray(data.merged_by_type[provider]))throw qpError(0,"搜索接口");
 if(!(data.merged_by_type&&typeof data.merged_by_type==="object"&&!Array.isArray(data.merged_by_type))&&!Array.isArray(data.results))throw qpError(0,"搜索接口");
 return data;
}
function qpShare(entry){
 if(!entry||typeof entry.url!=="string"||/\s/.test(entry.url))return null;
 const url=qpParseUrl(entry.url);if(!url||url.port)return null;
 const host=url.hostname.toLowerCase();
 const provider=host==="pan.quark.cn"?"quark":host==="pan.baidu.com"?"baidu":host==="drive.uc.cn"?"uc":/^(115|anxia|115cdn)\.com$/.test(host)?"115":/^(?:[a-z0-9-]+\.)*(?:123pan|123684|123865|123912|123952|123592)\.(?:com|cn)$/.test(host)?"123":"";
 const init=provider==="baidu"&&url.pathname==="/share/init"?url.param("surl"):null;
 const id=init?"1"+init:url.pathname.match(/^\/(?:s|ps|123pan)\/([A-Za-z0-9_-]+)\/?$/)?.[1];
 if(!QP_PROVIDERS.includes(provider)||!id||!/^[A-Za-z0-9_-]+$/.test(id))return null;
 const explicit=["pwd","password","passcode","receive_code"].map(key=>url.param(key)).find(Boolean);
 const nearby=String(entry.note||"").match(/(?:提取码|提取密碼|密码|密碼)\s*[:：]?\s*([A-Za-z0-9]{4,8})/)?.[1];
 const bare=/^[A-Za-z0-9]{4,8}$/.test(url.search)?url.search:"";
 const raw=explicit||entry.password||nearby||bare||"";
 if(typeof raw!=="string"||raw.length>128||/[\x00-\x1f\x7f]/.test(raw))return null;
 return {key:provider+":"+id,provider,shareId:id,passcode:raw,url:url.href};
}
const qpLinkChecks=new Map(),qpLinkPending=new Map(),qpCheckQueues=new Map();
function qpCheckKey(share,site){return JSON.stringify([site,share.provider,share.shareId,share.passcode]);}
async function qpCheckBatch(entries,site,keyword,cpMatchingContext=cpMatchingCaptureContext()){
 try{
  cpMatchingCheckContext(cpMatchingContext);let token=await cpMatchingWithContext(cpMatchingContext,()=>qpGetToken(site));cpMatchingCheckContext(cpMatchingContext);
  const request=()=>cpMatchingWithContext(cpMatchingContext,()=>qpResponse(()=>cpHttpPost(site+"/api/check/links",JSON.stringify({items:entries.map(({share})=>({disk_type:share.provider,url:share.url,password:share.passcode||""}))}),{
   headers:{"User-Agent":UA,Referer:site+"/?q="+encodeURIComponent(keyword||""),"Content-Type":"application/json","X-QP-K":token}
  })));
  let response=await request();cpMatchingCheckContext(cpMatchingContext);
  if(Number(response.status||response.statusCode)===403){token=await cpMatchingWithContext(cpMatchingContext,()=>qpGetToken(site,true));cpMatchingCheckContext(cpMatchingContext);response=await request();cpMatchingCheckContext(cpMatchingContext);}
  const data=qpData(response,"链接有效性检测"),rows=Array.isArray(data.data)?data.data:data.results;
  if(!Array.isArray(rows))throw qpError(0,"链接有效性检测");
  for(const entry of entries){
   const share=entry.share,row=rows.find(row=>row.disk_type===share.provider&&qpShare({url:row.url})?.shareId===share.shareId);
   const validity=["ok","bad","invalid","expired","locked","uncertain"].includes(row?.state)?row.state:"uncertain";
   const normalized=qpShare({url:row?.normalized_url});
   const passcode=!share.passcode&&normalized?.provider===share.provider&&normalized.shareId===share.shareId?normalized.passcode:share.passcode;
   const value={until:Date.now()+60000,validity,summary:String(row?.summary||""),passcode};
   qpLinkChecks.set(entry.key,value);entry.resolve(value);
  }
  while(qpLinkChecks.size>500)qpLinkChecks.delete(qpLinkChecks.keys().next().value);
 }catch(error){for(const entry of entries)entry.reject(error);}
 finally{for(const entry of entries)qpLinkPending.delete(entry.key);}
}
function qpCheckedShare(share,site,keyword){
 const key=qpCheckKey(share,site),cached=qpLinkChecks.get(key);
 if(cached&&cached.until>Date.now())return Promise.resolve(cached);
 if(qpLinkPending.has(key))return qpLinkPending.get(key);
 let resolve,reject;const pending=new Promise((yes,no)=>{resolve=yes;reject=no;});qpLinkPending.set(key,pending);
 const cpMatchingContext=cpMatchingCaptureContext(),queueKey=JSON.stringify([cpMatchingOwnerId(),site,keyword||""]);let queue=qpCheckQueues.get(queueKey);
 if(!queue){
  queue=[];qpCheckQueues.set(queueKey,queue);
  // Combine ready callers in this microtask; no timer, waiting window or result cutoff.
  Promise.resolve().then(()=>{
   qpCheckQueues.delete(queueKey);
   // The checker does not always echo the separate password field. Keep
   // conflicting passwords for one share in separate requests, so identity
   // matching cannot borrow the status of a different extraction code.
   const waiting=queue.slice();
   while(waiting.length){
    const batch=[],identities=new Set();
    for(let index=0;index<waiting.length&&batch.length<5;){
     const entry=waiting[index],identity=entry.share.key||entry.share.provider+":"+entry.share.shareId;
     if(identities.has(identity)){index++;continue;}
     identities.add(identity);batch.push(entry);waiting.splice(index,1);
    }
    cpMatchingWithContext(cpMatchingContext,()=>qpCheckBatch(batch,site,keyword,cpMatchingContext));
   }
  });
 }
 queue.push({key,share,resolve,reject});return pending;
}
async function qpCheckShares(shares,site,keyword){
 return await Promise.all(shares.map(async share=>{
  const value=await qpCheckedShare(share,site,keyword);qpCheck();
  return Object.assign({},share,{passcode:value.passcode||share.passcode,validity:value.validity,validitySummary:value.summary});
 }));
}
function parseQuanpanResults(data,keyword,site){
 const entries=[];
 for(const provider of QP_PROVIDERS){const values=data.merged_by_type&&data.merged_by_type[provider];if(Array.isArray(values))entries.push(...values);}
 if(Array.isArray(data.results))entries.push(...data.results);
 const unique=[],buckets=new Map();
 for(const entry of entries){
  const share=qpShare(entry);if(!share||!cpDriveEnabled(share.provider))continue;
  const title=typeof entry.note==="string"&&entry.note.trim()?entry.note.trim():keyword;
  const bucket=buckets.get(share.key)||[];
  const previous=bucket.find(row=>!row.share.passcode||!share.passcode||row.share.passcode===share.passcode);
  if(previous){if(!previous.share.passcode&&share.passcode)previous.share=share;continue;}
  const row={share,title};unique.push(row);bucket.push(row);buckets.set(share.key,bucket);
 }
 return unique.map(({share,title})=>{
  const info={action:"detail",id:share.key,site,title,description:providerName(share.provider),poster:"",shares:[share]};
  return {id:"seedhub-pan-"+baiduSha1(JSON.stringify([share.key,share.passcode])),type:"url",title,posterPath:"",description:providerName(share.provider),link:encodeLink(info)};
 });
}
async function search(params={},siteOverride){
 rexAssertWithinUsagePeriod();bindForwardParams(params);qpCheck(params.signal);
 const keyword=String(params.keyword||"").trim();if(!keyword||Number(params.page||1)>1)return [];
 if(keyword.length>100)throw qpError(0,"关键词");
 const site=qpOrigin(siteOverride||getSite(params));
 const load=async()=>{
  try{if(typeof params.cpSiteSearch==='function')return await params.cpSiteSearch(params);return parseQuanpanResults(await qpSearchData(site,keyword,params.signal),keyword,site);}
  catch(error){qpCheck(params.signal);if(typeof params.cpSiteSearch==='function')throw error;if(/^QUANPAN_/.test(error?.code)||["ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT"].includes(error?.code))throw error;throw qpError(0,"网络请求");}
 };
 // A caller-specific cancellation must not reject another caller joined to the same cached flight.
 const rows=params.signal?await load():await rexCached((typeof params.cpSiteSearch==="function"?"site-search-v2:":"search:")+site+":"+keyword+":"+cpMatchingDiscoveryIdentity(params)+(typeof params.cpSiteSearch==="function"?":"+baiduSha1(JSON.stringify([params.cpSiteIdentity,params.tmdbId||params.tmdbID||"",cpRequestedYear(params),params.type,params.season,cpRelevanceTitles(params)])):""),45000,load,rows=>rows.length>0);
 qpCheck(params.signal);return rows;
}

async function loadDetail(link) {
  rexAssertWithinUsagePeriod();

  ensureCookie();
  const info = decodeLink(link);
  if (!info) return null;
  return await buildDetailItem(info);
}

// 不同网盘独立请求；同一网盘按顺序处理，避免共享状态和 Cookie 串用。
async function runProviderTasks(items, work) {
  const groups = new Map();
  for (const item of items) {
    const provider = item.provider || "quark";
    if (!groups.has(provider)) groups.set(provider, []);
    groups.get(provider).push(item);
  }
  await Promise.all(Array.from(groups.values()).map(async group => {
    for (const item of group) await work(item);
  }));
}

async function buildDetailItem(info) {
  rexAssertWithinUsagePeriod();
  const site=info.site||getSite(),tid=String(info.id||"");
  const message=info;
  const title=message.title||info.title||"全盘资源",poster=message.poster||info.poster||"",desc=message.description||info.description||"";
  const shares=(message.shares||[]).filter(share=>quanpanProviderEnabled(share.provider));
  const channelUsername="",channelDisplayName="";

  const episodeItems = [];
  const failures = [];
  const counts = {};
  const cpCatalogReads=cpPrimeCatalogs(shares,share=>rexShareCatalog(share));
  await runProviderTasks(shares, async share => {
    counts[share.provider] = (counts[share.provider] || 0) + 1;
    const lineName = providerName(share.provider) + "#" + counts[share.provider];
    try {
      const cpCatalogRead=await cpCatalogReads.get(share);
      if(!cpCatalogRead.ok)throw cpCatalogRead.error;
      const detail=cpCatalogRead.value;

      ((detail && detail.list) || []).forEach((v, idx) => {
        const epTitle = formatVideoName(v.file_name, v.size) || `视频 ${idx + 1}`;
        episodeItems.push({
          id: `${share.provider}-${share.shareId}-${v.fid}`,
          type: "url", title: epTitle, description: lineName,
          link: encodeLink({ action: "play", provider: share.provider, lineName, channelUsername, channelDisplayName, packageSizeBytes:Number(detail.packageSizeBytes||0), videoInfo: v, title: epTitle })
        });
      });
    } catch (e) {
      
      failures.push(`${lineName}: ${e.message || e}`);
      
    }
  });

  return {
    id: `seedhub-pan-${tid}`,
    type: "url",
    title,
    posterPath: absUrl(poster, site),
    description: [desc || (shares.length ? `已发现 ${shares.length} 个网盘分享链接` : "未发现支持的网盘分享链接"), ...failures].filter(Boolean).join("\n"),
    episodeItems: groupEpisodeLines(episodeItems, tid),
    link: encodeLink(Object.assign({},info,{action:"detail"}))
  };
}

async function loadResource(params = {}) {
  rexAssertWithinUsagePeriod(); return await loadResourceImpl(params); }

async function loadResourceImpl(params) {
  const cpOwnedResource=cpResourceParams.get(params);
  rexAssertWithinUsagePeriod();bindForwardParams(params || {});
  let info=decodeLink(params&&params.link),failure=null;
  const resources=[],resourceOrder=new Map(),resolvedFiles=new Set(),reads=new Set(),deferredIssues=[];
  const compareResources=(a,b)=>Number(b.packageSizeBytes||0)-Number(a.packageSizeBytes||0)||resourceOrder.get(a)-resourceOrder.get(b);
  if(cpOwnedResource)cpOwnedResource.snapshot=()=>resources.slice().sort(compareResources);
  const enqueue=source=>{
    const provider=source.provider||"quark",v=source.videoInfo||{};
    const key=JSON.stringify([provider,String(v.shareId??v.shareid??v.share_id??""),String(v.uk??""),String(v.fid??v.fs_id??v.file_name??"")]);
    if(resolvedFiles.has(key)||!quanpanProviderEnabled(provider))return false;
    const task=Promise.resolve().then(async()=>{
      cpCheck(cpActiveProfile||cpProfile);if(cpBlockedProviders.has(provider))return false;
      const issues=[],items=await cpResolveCandidate(source,issues);cpCheck(cpActiveProfile||cpProfile);
      const ordinaryIssues=issues.filter(issue=>issue.code!=="SHARE_EXPIRED");
      if(provider==="quark")cpApplyCandidateIssues(ordinaryIssues);else deferredIssues.push(...ordinaryIssues);
      if(issues.some(issue=>issue.code==="SHARE_EXPIRED"))return "expired";
      const resource=items.find(item=>item.url);if(!resource)return false;
      const formatted=formatPlaybackResource(resource,source,params||{});
      if(resources.some(item=>item.id===formatted.id))formatted.id+="_"+baiduSha1(key);
      resolvedFiles.add(key);resourceOrder.set(formatted,source.qpCandidateOrder||0);resources.push(formatted);
      return true;
    }).catch(error=>{if(cpModuleQuotaCancelled(error))return "quota-stop";failure=failure||error;return false;});
    reads.add(task);task.finally(()=>reads.delete(task));
    return task;
  };
  try{
    let streamed=false;
    if(!info||info.action!=="play"){
      if(!info&&(safeStorageGet("catpaw.seedhub.pan.multiSource")||"enabled")!=="enabled")return [];
      streamed=true;info=await findEpisodeResource(params||{},info,enqueue);
    }
    if(!info){if(failure)throw failure;cpWrite("last-error",null);return [];}
    if(Array.isArray(info.sources)){
      if(!streamed){
        const groups=new Map();
        for(const source of info.sources){const provider=source.provider||"quark";if(!groups.has(provider))groups.set(provider,[]);groups.get(provider).push(source);}
        await Promise.all(Array.from(groups.values(),sources=>enqueue(sources[0])));
      }
      await Promise.all([...reads]);if(failure)throw failure;
      resources.sort(compareResources);
      if(!resources.length)cpWrite("last-error",null);
      return resources;
    }
    const items=(await cpResolveCandidate(info)).filter(item=>item.url);
    if(!items.length)cpWrite("last-error",null);
    return items.map(item=>formatPlaybackResource(item,info,params||{}));
  }finally{await Promise.allSettled([...reads]);if(resources.length)cpApplyCandidateIssues(deferredIssues);}
}

async function resolvePlaySource(info) {
  if(info.provider==="123")return await getPan123Resource(info);
  if(!quanpanProviderEnabled(info.provider||"quark"))return [];
  const videoInfo = info.videoInfo || {};

  try {
    if (info.provider === "115") return await get115Resource(info);
    if (info.provider === "uc") return await getUcResource(info);
    if (info.provider === "baidu") return await serialBaidu(() => getBaiduResource(info));
    const fid = await saveShareFile(videoInfo);
    if (!fid) throw new Error("转存失败");
    const urls = await getPlayUrl(fid);
    const best = urls.find(v => v.resolution === "4k") || urls.find(v => v.resolution === "2k") || urls[0];
    if (best && best.url) {
      return [{
        name: "垮",
        customHeaders: playHeaders(),
        description: best.resolution ? `清晰度: ${best.resolution}` : "",
        url: best.url
      }];
    }
  } catch (e) {

  }
  return [{
    name: info.title || "垮视频",
    description: info.provider === "uc" ? "优免登直链获取失败，请重开详情刷新分享信息" : "获取播放地址失败，请检查对应网盘 Cookie 和提取码",
    url: ""
  }];
}

async function getStoken(shareId, passcode) {
  const url = "https://drive-h.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc&uc_param_str=";
  const json = await cpQueueCatalogRead("quark",()=>httpJson("POST", url, { pwd_id: shareId, passcode: passcode || "" }, quarkHeaders()));
  return json && json.status === 200 && json.data ? json.data.stoken : "";
}

function qpFileBytes(value){const bytes=Number(value);return Number.isFinite(bytes)&&bytes>0?bytes:0;}
// Walk independent folders concurrently; pages within a folder remain ordered.
// Drain every in-flight read before propagating failure to the next operation.
async function getVideosFromShareLink(shareLink, passcode, scope) {
  const match = String(shareLink || "").match(/\/s\/([a-zA-Z0-9]+)/);
  const shareId = match ? match[1] : "";
  if (!shareId) return { movieName: "", list: [] };
  const stoken = await getStoken(shareId, passcode || "");
  if (!stoken) throw new Error("垮分享令牌获取失败，请检查分享和 Cookie");
  return await getShareDetail(shareId, stoken,undefined,scope);
}

// ==================== 夸克网盘缓存文件夹管理 ====================

// 检查缓存文件夹是否存在，返回 fid
async function checkFolderExists(folderName) {
  const url = "https://drive-pc.quark.cn/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,updated_at:desc&fetch_all_file=1&fetch_risk_file_name=1";
  const json = await httpJson("GET", url, null, quarkHeaders());
  const list = (json && json.data && json.data.list) || [];
  const folder = list.find(x => x.dir && x.file_name === folderName);
  return folder ? folder.fid : "";
}

// 删除文件/文件夹列表


// 复用缓存文件夹，避免生成多条夸克线路时删除前一条资源的文件。
async function createFolder(folderName, pdirFid = "0") {
  // 检查是否已存在
  const existingFid = await checkFolderExists(folderName);
  if (existingFid) {
    return existingFid;
  }
  // 创建新文件夹
  const url = "https://drive-pc.quark.cn/1/clouddrive/file?pr=ucpro&fr=pc&uc_param_str=";
  try {
    const json = await httpJson("POST", url, {
      pdir_fid: pdirFid,
      file_name: folderName,
      dir_path: "",
      dir_init_lock: false
    }, quarkHeaders());
    if (json && json.status === 200 && json.code === 0 && json.data) {
      
      return json.data.fid;
    }
    
    return "0";
  } catch (e) {
    if(e&&["AUTH_FAILED","RATE_LIMITED","ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT","TRANSFER_UNCERTAIN"].includes(e.code))throw e;
    
    return "0";
  }
}

// 转存分享文件到缓存文件夹
async function saveShareFile(videoInfo) {
  const toFid=await createFolder(CACHE_FOLDER);
  if(!toFid || toFid === "0")return "";
  const base="https://drive-h.quark.cn/1/clouddrive/";
  const query="pr=ucpro&fr=pc&uc_param_str=";
  const body={fid_list:[videoInfo.fid],fid_token_list:[videoInfo.share_fid_token],
    pdir_fid:videoInfo.pdir_fid||"0",pwd_id:videoInfo.shareId,scene:"link",stoken:videoInfo.stoken,to_pdir_fid:toFid};
  const savedFid=json=>{
    const data=json&&json.data;
    const candidates=[data,data&&data.task_resp&&data.task_resp.data];
    for(const entry of candidates){
      const saved=entry&&entry.save_as;
      const fids=saved&&(saved.save_as_top_fids||saved.save_as_select_top_fids);
      if(Array.isArray(fids)&&fids.length)return String(fids[0]);
    }
    return "";
  };
  const successful=json=>!!json&&(json.code==null||Number(json.code)===0)&&(json.status==null||Number(json.status)===200);
  try{
    const json=await httpJson("POST",base+"share/sharepage/save?"+query,body,quarkHeaders());
    if(!successful(json))return "";
    const immediate=savedFid(json);if(immediate)return immediate;
    const taskId=json.data&&json.data.task_id;if(!taskId)return "";
    // 与猫源一致，异步转存任务最多查询6次，成功后再调用file/v2/play转码。
    for(let retry=0;retry<6;retry++){
      const task=await httpJson("GET",base+"task?"+query+"&task_id="+encodeURIComponent(String(taskId))+"&retry_index="+retry,null,quarkHeaders());
      if(!successful(task))return "";
      const fid=savedFid(task);if(fid)return fid;
      if(retry<5&&typeof setTimeout==="function")await new Promise(resolve=>setTimeout(resolve,1000));
    }
    return "";
  }catch(e){throw e;}
}

// 获取播放 URL
async function getPlayUrl(myFid) {
  const url = "https://drive-pc.quark.cn/1/clouddrive/file/v2/play?pr=ucpro&fr=pc&uc_param_str=";
  const json = await httpJson("POST", url, { fid: myFid, resolutions: "normal,low,high,super,2k,4k" }, quarkHeaders());
  const arr = json && json.status === 200 && json.code === 0 && json.data ? (json.data.video_list || []) : [];
  return arr.map(v => ({ resolution: v.resolution, file_name: json.data.file_name, url: v.video_info && v.video_info.url })).filter(v => v.url);
}

function formatVideoName(fileName, size) {
  if (!fileName) return "视频";
  const gb = Number(size || 0) / 1024 / 1024 / 1024;
  const sizeText = gb > 0 ? ` ${gb >= 1 ? gb.toFixed(2) + "GB" : Math.round(gb * 1024) + "MB"}` : "";
  return String(fileName).trim() + sizeText;
}

// ==================== 多网盘线路 ====================
function playbackLineName(provider) {
  return { quark: "夸克", baidu: "百度", uc: "UC", "115":"115", "123":"123" }[provider] || "网盘";
}

function providerName(provider) {
  return playbackLineName(provider);
}

function extractShareLinks($) {
  const shares = [];
  const seen = new Set();
  $(".tgme_widget_message_text, .tgme_widget_message_inline_button, a, p").each((i, el) => {
    const text = cpShareExtractionText($,el);
    const regex = /https?:\/\/(pan\.quark\.cn|drive\.uc\.cn|pan\.baidu\.com|115\.com|anxia\.com|115cdn\.com|(?:[A-Za-z0-9-]+\.)*(?:123pan|123684|123865|123912|123952|123592)\.(?:com|cn))\/((?:s|ps|123pan)\/[A-Za-z0-9_-]+(?:\?[^\s\x00-\x1f\x7f<>"'，。]*)?|share\/init\?[^\s\x00-\x1f\x7f<>"'，。]+)/g;
    let m;
    while ((m = regex.exec(text))) {
      const provider = /(?:^|\.)(?:123pan|123684|123865|123912|123952|123592)\.(?:com|cn)$/.test(m[1]) ? "123" : m[1] === "pan.baidu.com" ? "baidu" : m[1] === "drive.uc.cn" ? "uc" : /^(115|anxia|115cdn)\.com$/.test(m[1]) ? "115" : "quark";
      const id = m[2].match(/^(?:s|ps|123pan)\/([^?&#]+)/) || m[2].match(/[?&]surl=([^&#]+)/);
      if (!id) continue;
      const queryPwd = m[0].match(/[?&](?:pwd|password|passcode)=([^&#\s\x00-\x1f\x7f]+)/);
      const nearbyPwd = text.slice(m.index + m[0].length, m.index + m[0].length + 80).split(/https?:\/\/|\u0001/,1)[0].match(/(?:提取码|提取密碼|密码|密碼)\s*[:：]?\s*([A-Za-z0-9]{4,8})/);
      const passcode = queryPwd ? decodeURIComponent(queryPwd[1]) : nearbyPwd ? nearbyPwd[1] : "";
      const key = provider + ":" + id[1];
      const existing = shares.find(x => x.key === key);
      if (existing) { if (!existing.passcode && passcode) existing.passcode = passcode; continue; }
      if (!seen.has(key)) {
        seen.add(key);
        shares.push({ key, provider, shareId: id[1], passcode, url: m[0] });
      }
    }
  });
  return shares;
}

function isVideoFile(item) {
  return item.obj_category === "video" || String(item.category) === "1" ||
    /\.(mp4|mkv|avi|mov|flv|wmv|ts|m2ts|webm|m4v)$/i.test(item.file_name || item.server_filename || "");
}

const UC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) uc-cloud-drive/2.5.20 Chrome/100.0.4896.160 Electron/18.3.5.4-b478491100 Safari/537.36 Channel/pckk_other_ch";
function ucHeaders() { return { "User-Agent": UC_UA, Referer: "https://drive.uc.cn" }; }
async function ucApi(path, data) {
  const json = await httpJson(data ? "POST" : "GET", "https://pc-api.uc.cn/1/clouddrive/" + path, data, ucHeaders());
  if (!json || (json.status && json.status !== 200) || (json.code && json.code !== 0)) {
    const error=new Error("优分享请求失败");
    error.code=json && json.code; error.status=json && json.status;
    throw error;
  }
  // Some UC responses put catalog totals outside data. Preserve them for all page readers.
  if(path.startsWith("share/sharepage/detail?")&&json.data&&json.metadata)return Object.assign({},json.data,{metadata:json.metadata});
  return json.data;
}
async function getUcToken(shareId, passcode) {
  const data = await cpQueueCatalogRead("uc",()=>ucApi("share/sharepage/token?pr=UCBrowser&fr=pc", { pwd_id: shareId, passcode: passcode || "" }));
  if (!data || !data.stoken) throw new Error("优分享失效或提取码错误");
  return data.stoken;
}
async function getUcResource(info) {
  let v = info.videoInfo || {};
  const started = Date.now();

  const download = async video => {
    
    const data = await ucApi("file/download?pr=UCBrowser&fr=pc", {
      fids:[video.fid], fids_token:[video.share_fid_token], pwd_id:video.shareId,
      stoken:video.stoken, speedup_session:""
    });
    return Array.isArray(data) ? data[0] : data;
  };
  try {
    let item;
    if (v.stoken && v.share_fid_token) {
      try { item=await download(v); } catch(e) { if(e&&["AUTH_FAILED","RATE_LIMITED","ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT","SHARE_EXPIRED"].includes(e.code))throw e; }
    }
    if (!item || !item.download_url) {
      
      if(info.qpFreshCatalog)throw new Error("优免登下载地址获取失败");
      const detail=await getUcVideos({shareId:v.shareId,passcode:v.passcode},v.pdir_fid!=null?v:undefined);
      v=detail.list.find(file=>String(file.fid)===String(v.fid));
      if(!v) throw new Error("优分享文件已失效");
      item=await download(v);
      // Renew the raw index's selected file as well, so subsequent loads do not repeat this refresh.
      if(item?.download_url&&info.videoInfo)Object.assign(info.videoInfo,v);
    }
    if(!item || !/^https?:\/\//i.test(item.download_url || "")) throw new Error("优免登下载地址为空或格式无效");
    // 完整保留参考实现：Referer 为原始下载地址加一个反斜杠，不解码、不规范化。
    const headers={"User-Agent":UC_UA,Referer:item.download_url+"\\","Accept-Encoding":"identity"};
    const resource={name:"优",description:"原画",url:item.download_url,customHeaders:headers,headers:Object.assign({},headers)};

    return [resource];
  } catch(e) {
      throw e;
  }
}

// Each Baidu workflow owns its share cookie and signature; no global read queue.
async function serialBaidu(work){return await work();}
function baiduHeaders(share, randsk) {
  let cookie = normalizeCookie(safeStorageGet("catpaw.seedhub.pan.baidu.cookie"));
  if (!cookie) throw new Error("请先在插件设置填写佰 Cookie");
  // BDCLND 属于单个分享，用户粘贴的 Cookie 中可能包含其他分享的值。
  cookie = cookie.split(";").map(p => p.trim()).filter(p => p && !/^BDCLND\s*=/i.test(p)).join("; ");
  if (randsk) cookie += "; BDCLND=" + randsk;
  return { "User-Agent": BAIDU_WEB_UA, Cookie: cookie, Referer: share.url || "https://pan.baidu.com/share/init?surl=" + encodeURIComponent(baiduShortId(share.shareId)) };
}
function baiduShortId(shareId) { return shareId.charAt(0) === "1" ? shareId.slice(1) : shareId; }
async function baiduVerifyCore(share) {
  // 空提取码也请求验证，以获取本分享的 sekey；只携带账号基础 Cookie。
  const res = await cpHttpPost("https://pan.baidu.com/share/verify?" + toQuery({ surl: baiduShortId(share.shareId), pwd: share.passcode || "" }),
    toQuery({ pwd: share.passcode || "", vcode: "", vcode_str: "" }),
    { timeout: 8000, headers: Object.assign(baiduHeaders(share), { "Content-Type": "application/x-www-form-urlencoded" }) });
  const json = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
  qpAssertShareResponse("https://pan.baidu.com/share/verify",json,Number(res.status||res.statusCode||0));
  
  if (!json || Number(json.errno) !== 0 || !json.randsk) {
    const error=new Error("佰提取码验证失败或需要验证码");
    error.status=Number(res.status || res.statusCode || 0) || undefined;
    error.code=json && json.errno;
    throw error;
  }
  return json.randsk;
}
const BAIDU_WEB_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const BAIDU_PLAY_UA = "netdisk;P2SP;2.2.91.136;android-android;";
const BAIDU_APP_VERSION = "12.0.0";
function baiduSha1(message) {
  const encoded = encodeURIComponent(String(message));
  const bytes = [];
  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === "%") { bytes.push(parseInt(encoded.slice(i + 1, i + 3), 16)); i += 2; }
    else bytes.push(encoded.charCodeAt(i));
  }
  const bitLength = bytes.length * 8;
  bytes.push(128);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const high = Math.floor(bitLength / 4294967296);
  for (let i = 3; i >= 0; i--) bytes.push((high >>> (i * 8)) & 255);
  for (let i = 3; i >= 0; i--) bytes.push((bitLength >>> (i * 8)) & 255);
  const rotate = (n, count) => (n << count) | (n >>> (32 - count));
  let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
  for (let offset = 0; offset < bytes.length; offset += 64) {
    const w = [];
    for (let i = 0; i < 16; i++) {
      const start = offset + i * 4;
      w[i] = (bytes[start] << 24) | (bytes[start + 1] << 16) | (bytes[start + 2] << 8) | bytes[start + 3];
    }
    for (let i = 16; i < 80; i++) w[i] = rotate(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
    let a = h0, b = h1, c = h2, d = h3, e = h4;
    for (let i = 0; i < 80; i++) {
      const f = i < 20 ? (b & c) | (~b & d) : i < 40 ? b ^ c ^ d : i < 60 ? (b & c) | (b & d) | (c & d) : b ^ c ^ d;
      const k = i < 20 ? 0x5a827999 : i < 40 ? 0x6ed9eba1 : i < 60 ? 0x8f1bbcdc : 0xca62c1d6;
      const next = (rotate(a, 5) + f + e + k + w[i]) | 0;
      e = d; d = c; c = rotate(b, 30); b = a; a = next;
    }
    h0 = (h0 + a) | 0; h1 = (h1 + b) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0; h4 = (h4 + e) | 0;
  }
  return [h0, h1, h2, h3, h4].map(n => (n >>> 0).toString(16).padStart(8, "0")).join("");
}

async function getBaiduResource(info) {
  const v = info.videoInfo || {};

  try {
    
    if (!v.shareid || !v.uk || !v.fid) throw new Error("佰分享文件信息不完整，请重新打开详情");
    const headers = baiduHeaders(v);
    const bduss = headers.Cookie.match(/(?:^|;)\s*BDUSS=([^;]+)/);
    if (!bduss) throw new Error("佰 Cookie 缺少 BDUSS");
    
    let randsk = await baiduVerify(v);
    
    const account = await httpJson("GET", "https://mbd.baidu.com/userx/v1/info/get?" + toQuery({
      appname:"baiduboxapp", fields:'        ["bg_image","member","uid","avatar", "avatar_member"]',
      client:"", clientfrom:"", lang:"zh-cn", tpl:"", ttt:""
    }), null, headers);
    const accountUid = account && account.data && account.data.fields && account.data.fields.uid;
    const uid = accountUid || "default_uid";
    const devuid = "73CED981D0F186D12BC18CAE1684FFD5|VSRCQTF6W";
    const requestDlink = async () => {
      // verify 的 randsk 可能已经转义；toQuery 统一编码一次，避免 %2B 变成 %252B。
      let sekey = randsk;
      try { sekey = decodeURIComponent(randsk); } catch (_) {}
      const time = String(Date.now());
      const rand = baiduSha1(baiduSha1(bduss[1]) + uid + "ebrcUYiuxaZv2XGu7KIYKxUrqfnOfpDF" + time + devuid + BAIDU_APP_VERSION + "ae5821440fab5e1a61a025f014bd8972");
      
      return await httpJson("GET", "https://pan.baidu.com/share/list?" + toQuery({
        shareid:v.shareid, uk:v.uk, fid:v.fid, sekey, origin:"dlna", devuid,
        clienttype:1, channel:"android_12_zhao_bd-netdisk_1024266h", version:BAIDU_APP_VERSION, time, rand
      }), null, Object.assign(baiduHeaders(v, randsk), {"User-Agent":BAIDU_PLAY_UA, Referer:"https://pan.baidu.com/"}));
    };
    let json = await requestDlink();
    if (json && Number(json.errno) === -9) {
      
      randsk = await cpRefreshBaiduVerify(v,randsk);
      json = await requestDlink();
    }
    if(json&&Number(json.errno)===-9)cpReadInvalidate("baidu",v.shareId,v.passcode,"verify");
    const items = json && (Array.isArray(json.list) ? json.list : Array.isArray(json.info) ? json.info : []) || [];
    const fileId = file => file && (file.fs_id || file.fsid || file.fid);
    // 单文件接口有时只返回 dlink；返回明确 fid 时必须匹配，不能误播其他集。
    const item = items.find(file => String(fileId(file)) === String(v.fid)) ||
      (items.length === 1 && !fileId(items[0]) ? items[0] : null);

    if (!json || Number(json.errno) !== 0 || !item || !/^https?:\/\//i.test(item.dlink || "")) {
      const error = new Error("佰不转存直链获取失败");
      if (json && Number.isFinite(Number(json.errno))) error.code = Number(json.errno);
      throw error;
    }
    // 对齐 baidu.js 的原画播放头：签名直链仅携带 UA/Referer，账号 Cookie 只用于取链。
    const playbackHeaders = {"User-Agent":BAIDU_PLAY_UA, Referer:"https://pan.baidu.com/"};
    // iOS 遇到未转义的 | 会重新编码整条 URL，使签名中的 %2F/%3D 变成 %252F/%253D。
    // 只转义 devuid 的分隔符，保留百度已经编码的签名和其他查询参数。
    const playbackUrl = item.dlink.replace(/\|/g, "%7C");

    return [{name:"佰", description:"原画", url:playbackUrl, customHeaders:playbackHeaders, headers:playbackHeaders}];
  } catch (error) {

    throw error;
  }
}

// 用明确的季/集编号匹配跨网盘版本；无法识别编号时只合并同名文件。
function episodeIdentity(fileName) {
  const name = String(fileName || "").replace(/\.[a-z0-9]{2,5}$/i, "");
  const seasonMatch = name.match(/s(\d{1,2})[ ._-]*e(\d{1,3})(?!\d)/i);
  if (seasonMatch) return { key: `s${Number(seasonMatch[1])}e${Number(seasonMatch[2])}`, season: Number(seasonMatch[1]), episode: Number(seasonMatch[2]) };
  const season = name.match(/第\s*(\d+)\s*季/);
  const episode = name.match(/第\s*(\d{1,3})\s*[集话]/) || name.match(/(?:^|[^a-z])(?:ep?|episode)[ ._-]*(\d{1,3})(?!\d)/i) || name.match(/^\s*(\d{1,3})(?:$|[ ._\-])/);
  if (episode) return { key: `s${season ? Number(season[1]) : 1}e${Number(episode[1])}`, season: season ? Number(season[1]) : 1, episode: Number(episode[1]) };
  return { key: "name:" + name.toLowerCase().replace(/[\s._\-]+/g, "") };
}

function groupEpisodeLines(items, tid) {
  const groups = new Map();
  for (const item of items) {
    const source = decodeLink(item.link);
    if (!source) continue;
    const identity = episodeIdentity(source.videoInfo.file_name);
    if (!groups.has(identity.key)) groups.set(identity.key, { identity, item, sources: [] });
    groups.get(identity.key).sources.push(source);
  }
  return Array.from(groups.values()).sort((a, b) => {
    if (a.identity.episode !== undefined && b.identity.episode !== undefined) return a.identity.season - b.identity.season || a.identity.episode - b.identity.episode;
    return a.item.title.localeCompare(b.item.title, "zh-CN", { numeric: true });
  }).map(group => ({
    id: `seedhub-pan-${tid}-${group.identity.key}`, type: "url",
    title: group.identity.episode !== undefined ? `第${group.identity.episode}集` : group.item.title,
    description: Array.from(new Set(group.sources.map(source => playbackLineName(source.provider || "quark")))).join(" / "),
    link: encodeLink({ action: "play", title: group.item.title, sources: group.sources })
  }));
}

// Website fuzzy search owns discovery; no external metadata or alias search requests.
function qpCleanQuery(value){
 let title=String(value||"").replace(/[\u200b-\u200f\u202a-\u202e\ufeff]/g,"").trim();
 for(let i=0;i<2;i++)title=title.replace(/\s*[（(]\s*(?:19|20)\d{2}\s*[）)]\s*$/,"").replace(/\s*(?:第\s*[一二三四五六七八九十百\d]+\s*季|season\s*\d+|\bS\d{1,2})\s*$/i,"").trim();
 return title.length<=100&&!/[\x00-\x1f\x7f]/.test(title)?title:"";
}
async function qpDiscoverCandidates(params,onCandidate,options={}){
 const keyword=qpCleanQuery(options.keyword)||[params.seriesName,params.title,params.name,params.keyword].map(qpCleanQuery).find(Boolean);
 if(!keyword)return [];
 const rows=options.rows||await search(Object.assign({},params,{keyword,page:1,alternativeTitles:cpRelevanceTitles(params).concat(options.titles||[])}));qpCheck(params.signal);
 if(options.onCoverageRows)options.onCoverageRows(rows);
 if(options.onRows){const localMatching=Object.assign({},params,{alternativeTitles:cpB12LocalTitles(params)});options.onRows(rows.filter(row=>!cpSearchResultMatches(row.title,localMatching)));}
 const candidates=[],buckets=new Map(),passwords=new Map();
 for(const row of rows)for(const share of decodeLink(row.link)?.shares||[]){
  if(share.passcode){const key=share.provider+':'+share.shareId,set=passwords.get(key)||new Set();set.add(share.passcode);passwords.set(key,set);}
 }
 const collect=(batch,titles)=>{
  const start=candidates.length;
  for(const row of batch){const info=decodeLink(row.link);if(!info)continue;
   for(const share of info.shares||[]){
    const key=share.provider+':'+share.shareId,bucket=buckets.get(key)||[];
    const existing=bucket.find(c=>!c.shares[0].passcode||!share.passcode||c.shares[0].passcode===share.passcode);
    if(existing){if(!existing.shares[0].passcode&&share.passcode)existing.shares=[share];continue;}
    const candidate=Object.assign({},info,{shares:[share],cpB7MatchTitles:titles});bucket.push(candidate);buckets.set(key,bucket);candidates.push(candidate);
   }
  }
  // Access codes describe the same share regardless of the card's title.
  // Complete unambiguous codes before starting either batch's catalog reads.
  for(const candidate of candidates.slice(start)){
   const share=candidate.shares[0],codes=passwords.get(share.provider+':'+share.shareId);
   if(!share.passcode&&codes?.size===1)candidate.shares=[Object.assign({},share,{passcode:[...codes][0]})];
  }
  if(onCandidate)candidates.slice(start).forEach(onCandidate);
 };
 const readBatch=async(batch,titles)=>{
  if(typeof params.cpSiteRead!=='function')return collect(batch,titles);
  await readSiteCandidates(batch,{read:row=>cpSiteReadCandidate(row,params),ready:info=>collect([{link:encodeLink(info)}],titles),canRead:provider=>quanpanProviderEnabled(provider)&&(options.canRead?options.canRead(provider):candidates.filter(c=>c.shares[0]?.provider===provider).length<qpCandidateLimit()),check:()=>cpResourceCheck(cpResourceOwner),failed:()=>cpB12DiscoveryFailed()});
 };
 await cpB7SearchMatches(rows,Object.assign({},params,{alternativeTitles:cpRelevanceTitles(params).concat(options.titles||[])}),readBatch);qpCheck(params.signal);
 return candidates;
}
// Both adapters share relevance predicates; Quanpan retains one selected file per candidate.
function qpSelectVideo(files,params){
 if(params.type==="movie"){
  let largest=null;const titles=cpRelevanceTitles(params);
  for(const file of files)if(cpMovieVideoMatches(file,params,titles)&&(!largest||Number(file.size||0)>Number(largest.size||0)))largest=file;
  return largest;
 }
 return files.find(file=>cpEpisodeVideoMatches(file,params))||null;
}
function qpCandidateLimit(){const n=Number(cpSetting("maxShareCandidates","2"));return [1,2,3,5].includes(n)?n:2;}
function qpCandidateKey(share){return JSON.stringify([share.provider,share.shareId,share.passcode||""]);}
async function findEpisodeResource(params,linkInfo,onSource){
 if(params.type==="movie"&&cpRequestedYear(params).conflict)return null;
 const claimed=new Set(),counts=new Map(),sources=[],pending=[],shareChains=new Map(),resolveChains=new Map(),deadShares=new Set(),profile=cpActiveProfile||cpProfile,limit=qpCandidateLimit();
 if(params.refresh)cpCoverageClear();
 const indexKey=qpSeriesIndexKey(params,linkInfo),index=qpSeriesIndexRead(indexKey),generation=rexCacheGeneration;
 cpModuleQuotaRemember(()=>qpSeriesIndexWrite(indexKey,index,generation));
 let failure=null,hadError=false,matched=0,unmatchedRows=[],coverageRows=index.cpQuotaRows,coverageMode=false;
 // Reuse already resolved site-share identities before calling a site's
 // credential endpoint again. The index key includes the website account.
 if(typeof params.cpSiteRead==='function'){
  const nativeRead=params.cpSiteRead;
  params=Object.assign({},params,{cpSiteRead:async(row,query)=>{
   const info=decodeLink(row.link),known=index.candidates.find(c=>!c.qpExpired&&c.id&&c.id===info?.id&&c.shares[0]?.provider===row.provider);
   return known||nativeRead(row,query);
  }});
 }
 const quota=cpSuccessQuota({counts,limit:()=>coverageMode?1:limit,blocked:p=>cpBlockedProviders.has(p),check:()=>cpCheck(profile),stopped:()=>!!failure,onVacancy:async provider=>{
  if(linkInfo?.action==='detail'){submit(linkInfo);return;}
  const rows=coverageRows||await search(Object.assign({},params,{keyword:qpCleanQuery(params.seriesName||params.title||params.name||params.keyword||''),page:1}));
  const canRead=p=>p===provider&&!cpBlockedProviders.has(p)&&(counts.get(p)||0)<(coverageMode?1:limit);
  await qpDiscoverCandidates(params,candidate=>{if(canRead(candidate.shares[0]?.provider))submit(candidate);},{rows,canRead});
 }});
 const submit=(candidate,cached,remember=true)=>{
  const candidateParams=Object.assign({},cpSiteCandidateParams(params,candidate),{cpFileContextTitle:candidate.title});
  for(const share of candidate.shares||[]){
   const key=qpCandidateKey(share),shareKey=JSON.stringify([share.provider,share.shareId]);
   if(!quanpanProviderEnabled(share.provider)||candidate.qpExpired||quota.has(key))continue;
   quota.offer(share.provider,key,async()=>{
   if(deadShares.has(shareKey))return "skip";
   cpCoverageEnsure(candidateParams,share,candidate.cpB7MatchTitles);
   claimed.add(key);const ordinal=quota.successes(share.provider)+1;
   const descriptor=remember?Object.assign({},candidate,{shares:[share]}):candidate;
   if(remember)index.candidates.push(descriptor);
   let accessShare=share;const order=pending.length,prior=shareChains.get(shareKey)||Promise.resolve();
   const task=prior.then(async()=>{
    cpCheck(profile);
    if(descriptor.qpExpired||deadShares.has(shareKey))return;
    const {checked,catalog:preparedCatalog}=await cpB8CheckedCatalog(share,cached||index.entries[key]?.catalog,candidate.site||getSite(),params.seriesName||params.title||params.name||params.keyword||"",candidateParams,descriptor.cpB7MatchTitles);accessShare=checked;cpCheck(profile);
    if(["bad","invalid","expired"].includes(checked.validity)){
     descriptor.qpExpired=true;deadShares.add(shareKey);delete index.entries[key];qpInvalidateShareCatalog(accessShare,cpSharedPlaybackCleanupToken);return;
    }
    const catalog=preparedCatalog;cpCheck(profile);
    index.entries[key]={catalog,cpMatchingIdentity:cpMatchingCatalogIdentity(share)};
    const video=await cpB7SelectVideo(catalog.list||[],cpFileCatalogParams(Object.assign({},candidateParams,{cpFileContextTitle:descriptor.title}),catalog.list||[]),descriptor.cpB7MatchTitles);cpCheck(profile);if(!video)return;matched++;
    const source={action:"play",provider:checked.provider,lineName:providerName(checked.provider)+"#"+ordinal,channelUsername:"",channelDisplayName:"",
     qpCandidateOrder:order,packageSizeScope:catalog.cpTargetDirectory&&!catalog.cpTargetDirectory.completeShare?'directory':'share',packageSizeBytes:Number(catalog.packageSizeBytes||0),videoInfo:video,title:formatVideoName(video.file_name,video.size),qpFreshCatalog:(catalog.cpTargetDirectory?catalog!==cached:!cached)&&qpOperation?.catalogReads?.has(qpShareCatalogKey(checked))===true};
    // Catalogs overlap; playback work on the same drive retains its serialized owner.
    const resolutionKey=['quark','uc','baidu','115','tianyi','yidong','xunlei','guangya'].includes(checked.provider)?shareKey:checked.provider;
    const resolution=(resolveChains.get(resolutionKey)||Promise.resolve()).then(async()=>{
     cpCheck(profile);const outcome=onSource?await onSource(source):true;
     if(outcome===false||outcome==="expired"){
      if(outcome==="expired"){descriptor.qpExpired=true;deadShares.add(shareKey);}
      delete index.entries[key];qpInvalidateShareCatalog(accessShare,cpSharedPlaybackCleanupToken);return;
     }
     cpCheck(profile);sources.push(source);
    });resolveChains.set(resolutionKey,resolution.catch(()=>{}));await resolution;
   }).catch(error=>{
    hadError=true;if(cpModuleQuotaCancelled(error))return;delete index.entries[key];qpInvalidateShareCatalog(accessShare,cpSharedPlaybackCleanupToken);
    if(error?.code==="SHARE_EXPIRED"){descriptor.qpExpired=true;deadShares.add(shareKey);}
    if(/^QUANPAN_/.test(error?.code)||["ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT"].includes(error?.code))failure=failure||error;
   });
   shareChains.set(shareKey,task);pending.push(task);await task;
   return sources.some(source=>source.qpCandidateOrder===order);
   });
  }
 };
 try{
  if(index.candidates.length){for(const candidate of index.candidates)submit(candidate,index.entries[qpCandidateKey(candidate.shares[0])]?.catalog,false);}
  else if(linkInfo?.action==="detail")submit(linkInfo);
  else await qpDiscoverCandidates(params,candidate=>submit(candidate),{canRead:provider=>(counts.get(provider)||0)<limit,onRows:rows=>{unmatchedRows=rows;},onCoverageRows:rows=>{coverageRows=(coverageRows||[]).concat(rows);}});
  await quota.drain();await Promise.allSettled(pending);cpCheck(profile);if(failure)throw failure;
  for(let round=1;round<5&&!quota.failure();round++){
   quota.sync();const canRead=provider=>!cpBlockedProviders.has(provider)&&(counts.get(provider)||0)<limit;
   if(!['quark','uc','baidu','115','123','xunlei','guangya','yidong','tianyi'].some(p=>quanpanProviderEnabled(p)&&canRead(p)))break;
   const previous=claimed.size;
   try{
   if(linkInfo?.action==='detail')submit(linkInfo);
   else{
    const rows=coverageRows||await search(Object.assign({},params,{keyword:qpCleanQuery(params.seriesName||params.title||params.name||params.keyword||''),page:1}));
    await qpDiscoverCandidates(params,candidate=>submit(candidate),{rows,canRead});
   }
   await quota.drain();await Promise.allSettled(pending);cpCheck(profile);if(failure)throw failure;
   }catch(error){if(['ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT'].includes(error?.code))throw error;quota.stopDiscovery(error);break;}
   if(claimed.size===previous)break;
  }
  const cleanMiss=()=>!matched&&!hadError&&!deadShares.size&&cpB12CanSearch();
  if(!linkInfo&&cleanMiss()){
   let titles=cpB12LocalTitles(params);if(!cpB12Alternate(params,titles))titles=await cpB7TrustedTitles(params);cpCheck(profile);
   const alternate=cpB12Alternate(params,titles);
   if(alternate){
    quota.sync();
    if(unmatchedRows.length){await qpDiscoverCandidates(params,candidate=>submit(candidate),{rows:unmatchedRows,titles,canRead:provider=>(counts.get(provider)||0)<limit});await quota.drain();await Promise.allSettled(pending);cpCheck(profile);if(failure)throw failure;}
    if(cleanMiss()){quota.sync();await qpDiscoverCandidates(params,candidate=>submit(candidate),{keyword:alternate,titles,canRead:provider=>(counts.get(provider)||0)<limit,onCoverageRows:rows=>{coverageRows=(coverageRows||[]).concat(rows);}});await quota.drain();await Promise.allSettled(pending);cpCheck(profile);}
   }
  }
  if(!linkInfo&&cleanMiss()&&cpCoverageEligible(params)){
   if(params.refresh)cpCoverageClear();
   const rows=coverageRows||await search(Object.assign({},params,{keyword:qpCleanQuery(params.seriesName||params.title||params.name||params.keyword||''),page:1}));cpCheck(profile);
   if(typeof params.cpSiteRead==="function"){quota.sync();coverageMode=true;}
   const candidates=await cpCoverageCandidates(rows,params,row=>typeof params.cpSiteRead==='function'?cpSiteReadCandidate(row,params):Promise.resolve(decodeLink(row.link)),share=>claimed.has(qpCandidateKey(share)),typeof params.cpSiteRead==="function"?candidate=>submit(candidate):undefined);
   quota.sync();coverageMode=true;for(const candidate of candidates)submit(candidate);
   await quota.drain();await Promise.allSettled(pending);cpCheck(profile);if(failure)throw failure;
  }
 }catch(error){failure=failure||error;}
 finally{await quota.close();await Promise.allSettled(pending);}
 if(failure&&!(typeof params.cpSiteRead==="function"&&failure.code==="RATE_LIMITED"&&sources.length))throw failure;
 index.candidates=index.candidates.filter(c=>cpCoverageKeep(cpSiteCandidateParams(params,c),c.shares[0]));
 if(quota.failure()&&!sources.length)throw quota.failure();index.cpQuotaRows=coverageRows;qpSeriesIndexWrite(indexKey,index,generation);
 return sources.length?{action:"play",sources}:null;
}

// 对齐荐片返回的资源结构：各网盘独立 id/name/type，播放头保留。
function formatPlaybackResource(resource, source, params) {
  const provider = source.provider || "quark";
  const video = source.videoInfo || {};
  const channelName=source.channelDisplayName||source.channelUsername||"";
  const name=playbackLineName(provider);
  const title = params.seriesName || params.title || source.title || video.file_name || "木偶";
  const episode = params.episode ? ` 第${params.episode}集` : "";
  return Object.assign({}, resource, {
    id: ["tg", tgChannelIdentity(source), provider, video.shareId || "", video.fid || "", params.season || 1, params.episode || ""].map(part => encodeURIComponent(String(part))).join("_"),
    name,
    type: params.type === "movie" ? "movie" : "tv",
    description: `${title}${episode} [${name}]` + (resource.description ? ` · ${resource.description}` : "")
  });
}

async function httpJson(method, url, data, headers) { return await httpJsonCore(method, url, data, headers); }

async function baiduVerify(share) { return await cpQueueCatalogRead("baidu",()=>baiduVerifyCore(share)); }

const P115_UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 115Browser/36.0.0 Chromium/125.0";
function headers115(required=false){
  const cookie=normalizeCookie(safeStorageGet("catpaw.seedhub.pan.115.cookie"));
  if(required&&!cookie)throw new Error("请在插件设置填写伍 Cookie");
  const headers={"User-Agent":P115_UA,Referer:"https://115.com/"};
  if(cookie)headers.Cookie=cookie;
  return headers;
}
async function get115Resource(info){
  const v=info.videoInfo||{},start=Date.now();

  try{
    
    const headers=headers115(true);
    if(!v.shareId||!v.fid)throw new Error("伍分享文件信息缺失");
    
    const encoded=p115Encrypt(JSON.stringify({share_code:v.shareId,receive_code:v.passcode||"",file_id:String(v.fid)}));
    const body=toQuery({data:encoded});
    
    const response=await cpHttpPost("https://proapi.115.com/app/share/downurl",body,{timeout:8000,headers:Object.assign({},headers,{"Content-Type":"application/x-www-form-urlencoded"})});
    const json=typeof response.data==="string"?JSON.parse(response.data):response.data;
    qpAssertShareResponse("https://proapi.115.com/app/share/downurl",json,Number(response.status||response.statusCode||0));
    
    if(!json||!json.state||typeof json.data!=="string"){
      const error=new Error("伍下载接口拒绝请求");error.code=json&&(json.errno||json.errcode);error.status=response.status;throw error;
    }
    
    const data=JSON.parse(p115Decrypt(json.data));
    const url=typeof data.url==="string"?data.url:data.url&&data.url.url;
    if(!/^https?:\/\//i.test(url||""))throw new Error("伍原画地址为空");
    const playHeaders={"User-Agent":P115_UA,Referer:"https://115.com/"};
    const auth=data.url&&data.url.auth_cookie||data.auth_cookie;
    if(auth&&auth.name&&auth.value)playHeaders.Cookie=auth.name+"="+auth.value;
    const resource={name:"伍",description:"原画",url,headers:playHeaders,customHeaders:Object.assign({},playHeaders)};
    
    return [resource];
  }catch(error){throw error;}
}

function combineSameTitleDetails(details){
  const items=[],seen=new Set();
  for(const detail of details)for(const episode of detail.episodeItems||[]){
    const info=decodeLink(episode.link);
    for(const source of info&&info.sources||[]){
      const v=source.videoInfo||{},key=tgSourceIdentity(source);if(seen.has(key))continue;seen.add(key);
      items.push({title:source.title||v.file_name,link:encodeLink(source)});
    }
  }
  return {episodeItems:groupEpisodeLines(items,"aggregate")};
}
function p115Utf8Encode(text){
  const encoded=encodeURIComponent(text),bytes=[];
  for(let i=0;i<encoded.length;i++){if(encoded[i]==="%"){bytes.push(parseInt(encoded.slice(i+1,i+3),16));i+=2;}else bytes.push(encoded.charCodeAt(i));}
  return new Uint8Array(bytes);
}
function p115Utf8Decode(bytes){return decodeURIComponent(Array.from(bytes,b=>"%"+b.toString(16).padStart(2,"0")).join(""));}
const P115_BASE64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function p115Base64Encode(bytes){
  let text="";for(let i=0;i<bytes.length;i+=3){const n=(bytes[i]<<16)|((bytes[i+1]||0)<<8)|(bytes[i+2]||0);
    text+=P115_BASE64[(n>>>18)&63]+P115_BASE64[(n>>>12)&63]+(i+1<bytes.length?P115_BASE64[(n>>>6)&63]:"=")+(i+2<bytes.length?P115_BASE64[n&63]:"=");}return text;
}
function p115Base64Decode(text){
  const clean=String(text).replace(/\s/g,"");if(!/^[A-Za-z0-9+/]*={0,2}$/.test(clean)||clean.length%4)throw new Error("伍加密响应Base64无效");
  const bytes=[];for(let i=0;i<clean.length;i+=4){const n=(P115_BASE64.indexOf(clean[i])<<18)|(P115_BASE64.indexOf(clean[i+1])<<12)|((P115_BASE64.indexOf(clean[i+2])&63)<<6)|(P115_BASE64.indexOf(clean[i+3])&63);
    bytes.push((n>>>16)&255);if(clean[i+2]!=="=")bytes.push((n>>>8)&255);if(clean[i+3]!=="=")bytes.push(n&255);}return new Uint8Array(bytes);
}

// 115 RSA/XOR 算法移植自用户指定猫源 util/115.js；移除 Node Buffer/TextEncoder 依赖。
const p115G_kts = new Uint8Array([
  0xf0, 0xe5, 0x69, 0xae, 0xbf, 0xdc, 0xbf, 0x8a,
  0x1a, 0x45, 0xe8, 0xbe, 0x7d, 0xa6, 0x73, 0xb8,
  0xde, 0x8f, 0xe7, 0xc4, 0x45, 0xda, 0x86, 0xc4,
  0x9b, 0x64, 0x8b, 0x14, 0x6a, 0xb4, 0xf1, 0xaa,
  0x38, 0x01, 0x35, 0x9e, 0x26, 0x69, 0x2c, 0x86,
  0x00, 0x6b, 0x4f, 0xa5, 0x36, 0x34, 0x62, 0xa6,
  0x2a, 0x96, 0x68, 0x18, 0xf2, 0x4a, 0xfd, 0xbd,
  0x6b, 0x97, 0x8f, 0x4d, 0x8f, 0x89, 0x13, 0xb7,
  0x6c, 0x8e, 0x93, 0xed, 0x0e, 0x0d, 0x48, 0x3e,
  0xd7, 0x2f, 0x88, 0xd8, 0xfe, 0xfe, 0x7e, 0x86,
  0x50, 0x95, 0x4f, 0xd1, 0xeb, 0x83, 0x26, 0x34,
  0xdb, 0x66, 0x7b, 0x9c, 0x7e, 0x9d, 0x7a, 0x81,
  0x32, 0xea, 0xb6, 0x33, 0xde, 0x3a, 0xa9, 0x59,
  0x34, 0x66, 0x3b, 0xaa, 0xba, 0x81, 0x60, 0x48,
  0xb9, 0xd5, 0x81, 0x9c, 0xf8, 0x6c, 0x84, 0x77,
  0xff, 0x54, 0x78, 0x26, 0x5f, 0xbe, 0xe8, 0x1e,
  0x36, 0x9f, 0x34, 0x80, 0x5c, 0x45, 0x2c, 0x9b,
  0x76, 0xd5, 0x1b, 0x8f, 0xcc, 0xc3, 0xb8, 0xf5,
]);
const p115RSA_e = 0x8686980c0f5a24c4b9d43020cd2c22703ff3f450756529058b1cf88f09b8602136477198a6e2683149659bd122c33592fdb5ad47944ad1ea4d36c6b172aad6338c3bb6ac6227502d010993ac967d1aef00f0c8e038de2e4d3bc2ec368af2e9f10a6f1eda4f7262f136420c07c331b871bf139f74f3010e3c4fe57df3afb71683n;
const p115RSA_n = 0x10001n;

function p115ToBytes(value, length) {
  if (length == undefined)
    length = Math.ceil(value.toString(16).length / 2);
  const buffer = new Uint8Array(length);
  for (let i = length - 1; i >= 0; i--) {
    buffer[i] = Number(value & 0xffn);
    value >>= 8n;
  }
  return buffer;
}

function p115FromBytes(bytes) {
  let intVal = 0n;
  for (const b of bytes)
    intVal = (intVal << 8n) | BigInt(b);
  return intVal;
}

function* p115AccStep(start, stop, step = 1) {
  for (let i = start + step; i < stop; i += step) {
    yield [start, i, step];
    start = i;
  }
  if (start !== stop)
    yield [start, stop, stop - start];
}

function p115BytesXor(v1, v2) {
  const result = new Uint8Array(v1.length);
  for (let i = 0; i < v1.length; i++)
    result[i] = v1[i] ^ v2[i];
  return result;
}

function p115GenKey(randKey, skLen) {
  const xorKey = new Uint8Array(skLen);
  let length = skLen * (skLen - 1);
  let index = 0;
  for (let i = 0; i < skLen; i++) {
    const x = (randKey[i] + p115G_kts[index]) & 0xff;
    xorKey[i] = p115G_kts[length] ^ x;
    length -= skLen;
    index += skLen;
  }
  return xorKey;
}

function p115PadPkcs1V1_5(message) {
  const msg_len = message.length
  const buffer = new Uint8Array(128);
  buffer.fill(0x02, 1, 127 - msg_len);
  buffer.set(message, 128 - msg_len);
  return p115FromBytes(buffer);
}

function p115Xor(src, key) {
  const buffer = new Uint8Array(src.length);
  const i = src.length & 0b11;
  if (i)
    buffer.set(p115BytesXor(src.subarray(0, i), key.subarray(0, i)));
  for (const [j, k] of p115AccStep(i, src.length, key.length))
    buffer.set(p115BytesXor(src.subarray(j, k), key), j);
  return buffer;
}

function p115Pow(base, exponent, modulus) {
  if (modulus === 1n)
    return 0n;
  let result = 1n;
  base %= modulus;
  while (exponent) {
    if (exponent & 1n)
      result = (result * base) % modulus;
    exponent = exponent >> 1n;
    base = (base * base) % modulus;
  }
  return result;
}

function p115Encrypt(data) {
  if (typeof data === "string" || data instanceof String)
    data = p115Utf8Encode(data);
  const xorText = new Uint8Array(16 + data.length);
  xorText.set(p115Xor(
    p115Xor(data, new Uint8Array([0x8d, 0xa5, 0xa5, 0x8d])).reverse(),
    new Uint8Array([0x78, 0x06, 0xad, 0x4c, 0x33, 0x86, 0x5d, 0x18, 0x4c, 0x01, 0x3f, 0x46])
  ), 16);
  const cipherData = new Uint8Array(Math.ceil(xorText.length / 117) * 128);
  let start = 0;
  for (const [l, r] of p115AccStep(0, xorText.length, 117))
    cipherData.set(p115ToBytes(p115Pow(p115PadPkcs1V1_5(xorText.subarray(l, r)), p115RSA_n, p115RSA_e), 128), start, start += 128);
  return p115Base64Encode(cipherData);
}

function p115Decrypt(cipherData) {
  const cipher_data = p115Base64Decode(cipherData);
  let data = [];
  for (const [l, r] of p115AccStep(0, cipher_data.length, 128)) {
    const p = p115Pow(p115FromBytes(cipher_data.subarray(l, r)), p115RSA_n, p115RSA_e);
    const b = p115ToBytes(p);
    data.push(...b.subarray(b.indexOf(0) + 1));
  }
  data = new Uint8Array(data);
  const keyL = p115GenKey(data.subarray(0, 16), 12);
  const tmp = p115Xor(data.subarray(16), keyL).reverse();
  return p115Utf8Decode(p115Xor(tmp, new Uint8Array([0x8d, 0xa5, 0xa5, 0x8d])));
}


// 搜索结果标题包含年份、清晰度、更新状态等；仅用于匹配，不修改展示原文。
function normalizeQuanpanTitle(value) {
  let title=String(value||"").trim();
  title=title.replace(/^(?:名称|片名)\s*[:：]\s*/,"");
  // 有明确年份时，只取年份之前的片名，兼容 (2026)、（2026）及独立年份。
  title=title.replace(/\s*[（(]\s*(?:19|20)\d{2}\s*[）)][\s\S]*$/,"");
  title=title.replace(/\s+(?:19|20)\d{2}(?=\s|$)[\s\S]*$/,"");
  // 无年份时，删除明确的资源状态；保留片名本身中的数字和括号。
  title=title.replace(/\s*(?:更新至|更至|更新到|全\s*\d+\s*[集期]|完结|已完结)[\s\S]*$/,"");
  title=title.replace(/\s+(?:4K|8K|1080[Pp]|2160[Pp]|720[Pp]|HDR|杜比|蓝光)(?=\s|$)[\s\S]*$/i,"");
  title=title.replace(/\s*\[[^\]]*\]\s*$/,"");
  title=title.replace(/\s*(?:第\s*[一二三四五六七八九十百\d]+\s*季|season\s*\d+)\s*$/i,"");
  return title.replace(/[\s·:：._\-]/g,"").toLowerCase();
}

const rexMemoryCache=new Map(),rexPending=new Map();
let rexCacheGeneration=0;
function rexClone(value){return JSON.parse(JSON.stringify(value));}
async function rexCached(key,ttl,loader,accept) {
  const hash=baiduSha1(key),storageKey="catpaw.seedhub.pan.catalog."+hash;
  let entry=rexMemoryCache.get(hash);
  if(!entry){try{entry=JSON.parse(safeStorageGet(storageKey)||"null");}catch(_){}}
  if(entry&&entry.expires>Date.now())return rexClone(entry.value);
  if(rexPending.has(hash))return rexClone(await rexPending.get(hash));
  const generation=rexCacheGeneration;
  const pending=(async()=>{
    const value=await loader();
    if(generation===rexCacheGeneration&&accept(value)){
      const entry={expires:Date.now()+ttl,value:rexClone(value)};
      rexMemoryCache.set(hash,entry);
      while(rexMemoryCache.size>32)rexMemoryCache.delete(rexMemoryCache.keys().next().value);
      let keys=[];try{keys=JSON.parse(safeStorageGet("catpaw.seedhub.pan.catalog.keys")||"[]");}catch(_){}
      keys=keys.filter(k=>k!==hash);keys.push(hash);
      while(keys.length>16)safeStorageSet("catpaw.seedhub.pan.catalog."+keys.shift(),"");
      safeStorageSet(storageKey,JSON.stringify(entry));safeStorageSet("catpaw.seedhub.pan.catalog.keys",JSON.stringify(keys));
    }
    return value;
  })();rexPending.set(hash,pending);
  try{return rexClone(await pending);}finally{if(rexPending.get(hash)===pending)rexPending.delete(hash);}
}
async function httpText(url,options) {
  rexAssertWithinUsagePeriod();
  return rexCached("page:"+url,120000,()=>httpTextFresh(url,options),html=>typeof html==="string"&&html.length>1000&&!/页面不存在|>404</.test(html));
}
function qpShareCatalogKey(share){
  const cookie=share.provider==="baidu"?safeStorageGet("catpaw.seedhub.pan.baidu.cookie"):
    share.provider==="115"?safeStorageGet("catpaw.seedhub.pan.115.cookie"):share.provider==="quark"?ensureCookie():"";
  return [share.provider==="quark"?"share-video-v3":"share-package-v2",share.provider,share.shareId,share.passcode||"",baiduSha1(String(cookie||""))].join(":");
}
function qpInvalidateShareCatalog(share){
  const hash=baiduSha1(qpShareCatalogKey(share));rexMemoryCache.delete(hash);safeStorageSet("catpaw.seedhub.pan.catalog."+hash,"");
}
async function rexShareCatalog(share) {
  const key=qpShareCatalogKey(share);
  return rexCached(key,180000,()=>{
    qpOperation?.catalogReads?.add(key);
    return share.provider==="123"?getPan123Videos(share):share.provider==="uc"?getUcVideos(share):share.provider==="115"?get115Videos(share):share.provider==="baidu"?getBaiduVideos(share):getVideosFromShareLink(share.url,share.passcode);
  },result=>!!(result&&result.list&&result.list.length));
}
async function clearRexCatalogCache() {
  rexCacheGeneration++;rexMemoryCache.clear();rexPending.clear();
  qpClearSeriesIndexes();
  let keys=[];try{keys=JSON.parse(safeStorageGet("catpaw.seedhub.pan.catalog.keys")||"[]");}catch(_){}
  keys.forEach(key=>safeStorageSet("catpaw.seedhub.pan.catalog."+key,""));safeStorageSet("catpaw.seedhub.pan.catalog.keys","[]");
  return [{id:"tg-cache-cleared",type:"url",title:"目录缓存已清除",description:"重新打开详情即可获取最新集数。"}];
}

function quanpanProviderEnabled(provider) {
  if(!cpDriveEnabled(provider))return false; return ["quark","baidu","uc","115","123"].includes(provider); }


const PAN123_HEADERS={
  "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
  platform:"android","app-version":"3",Referer:"https://www.123pan.cn/",Origin:"https://www.123pan.cn"
};
function pan123RawUrl(url) {
  return String(url||"").replace("_24_24","")
    .replace("&cache_type=1&w=24&h=24&trade_key=123pan-thumbnail&type=video","")
    .replace("?cache_type=1&w=24&h=24&trade_key=123pan-thumbnail&type=video","");
}
function pan123RedirectUrl(location,base) {
  if(/^https?:\/\//i.test(location))return location;
  const match=base.match(/^(https?:)\/\/([^/]+)([^?#]*)/);if(!match)throw new Error("123重定向地址无效");
  if(location.startsWith("//"))return match[1]+location;
  if(location.startsWith("?"))return match[1]+"//"+match[2]+(match[3]||"/")+location;
  const path=location.startsWith("/")?location:(match[3]||"/").replace(/[^/]*$/,"")+location;
  return match[1]+"//"+match[2]+path;
}
async function getPan123Resource(info) {
  const profile=cpActiveProfile||cpProfile;cpCheck(profile);
  let video=info.videoInfo||{};
  if(!video.downloadUrl){const fresh=await getPan123Videos({shareId:video.shareId,passcode:video.passcode},video.parentId!=null?video:null);video=fresh.list.find(item=>String(item.fid)===String(video.fid));}
  const raw=pan123RawUrl(video&&video.downloadUrl);if(!/^https?:\/\//i.test(raw))throw new Error("123分享未提供免登录地址");
  let url=raw;const visited=new Set();
  // 与猫源相同：小范围读取用于跟随跳转，失败时仍返回原始免登地址，不走登录接口。
  try{
    for(let i=0;i<5;i++){
      cpCheck(profile);if(visited.has(url))throw new Error("123 redirect cycle");visited.add(url);
      const response=await cpHttpGet(url,{timeout:10000,allow_redirects:false,headers:{"User-Agent":PAN123_HEADERS["User-Agent"],Referer:PAN123_HEADERS.Referer,Range:"bytes=0-0"}});
      cpCheck(profile);
      const status=Number(response.status||response.statusCode||200);
      if(status>=200&&status<300)break;
      if(status<300||status>=400)throw new Error("123直链读取失败");
      const headers=response.headers||{},key=Object.keys(headers).find(k=>k.toLowerCase()==="location");if(!key)break;
      url=pan123RedirectUrl(String(headers[key]),url);
    }
  }catch(_){cpCheck(profile);url=raw;}
  const headers={"User-Agent":PAN123_HEADERS["User-Agent"],Referer:PAN123_HEADERS.Referer};
  return [{name:"123",description:"免登录 · 原画",url,customHeaders:headers,headers:Object.assign({},headers)}];
}

// 北京时间2026年12月31日结束后停止模块访问；不依赖设备本地时区。
const REX_USAGE_EXPIRES_AT=Date.parse("2027-01-01T00:00:00+08:00");
function rexAssertWithinUsagePeriod() {
  if(Date.now()>=REX_USAGE_EXPIRES_AT)throw new Error("本模块使用期限已结束（2026年12月31日），已停止访问资源站点。请获取作者发布的新版。");
}

function tgChannelIdentity(source) {
  return source.channelUsername ? String(source.channelUsername).replace(/^@/,"").trim().toLowerCase() : String(source.channelDisplayName||"").trim();
}
function tgSourceIdentity(source) {
  const video=source.videoInfo||{};
  return JSON.stringify([tgChannelIdentity(source),source.provider||"quark",String(video.shareId||""),String(video.fid||video.file_name||"")]);
}

// 夸克在API响应中轮换__puus；播放地址必须使用更新后的登录Cookie。
function syncQuarkPlaybackCookie(url,response) {
  if(!/^https:\/\/drive(?:-[a-z]+)?\.quark\.cn\//i.test(String(url||"")))return;
  const headers=response&&response.headers||{};
  const key=Object.keys(headers).find(name=>name.toLowerCase()==="set-cookie");
  if(!key)return;
  const lines=Array.isArray(headers[key])?headers[key].join(";"):String(headers[key]||"");
  const match=lines.match(/(?:^|[;,]\s*)__puus=([^;,\s]+)/);
  if(!match)return;
  const cookie=ensureCookie();if(!cookie)return;
  const old=cookie.match(/(?:^|;)\s*__puus=([^;]+)/);if(old&&old[1]===match[1])return;
  CURRENT_COOKIE=cookie.split(";").map(part=>part.trim()).filter(part=>part&&!/^__puus\s*=/.test(part)).concat("__puus="+match[1]).join("; ");
  safeStorageSet(STORAGE_COOKIE_KEY,CURRENT_COOKIE);
}

WidgetMetadata.globalParams=WidgetMetadata.globalParams.concat([{"name": "credentialSource", "title": "网盘账号来源", "type": "enumeration", "value": "shared", "enumOptions": [{"title": "默认共用（本模块非空 Cookie 优先）", "value": "shared"}, {"title": "仅本模块", "value": "local"}]}, {"name": "subtitles", "title": "同版本外挂字幕", "type": "enumeration", "value": "auto", "enumOptions": [{"title": "自动（最多 3 条）", "value": "auto"}, {"title": "关闭", "value": "off"}]}]);
// Visible wording follows the earlier secondary-development edition; parameter identities stay native.
WidgetMetadata.globalParams.forEach(function(param){
 const titles={"quarkCookie": "夸克 Cookie（非空优先，留空继承共用）", "baiduCookie": "百度 Cookie（非空优先，留空继承共用）", "cookie115": "115 Cookie（非空优先，留空继承共用）", "woniuCookie": "蜗牛站点 Cookie", "channels": "TG 频道用户名（逗号分隔）", "resultCount": "每个频道搜索结果数", "showPictures": "显示搜索封面"};
 if(titles[param.name])param.title=titles[param.name];
 if(WidgetMetadata.id==="catpaw.upstream-enhanced.tgsou"&&param.name==="site")param.title="TG 搜索接口地址（必填）";
 if(param.name==="resultCount")param.enumOptions.forEach(function(option){option.title=option.value+" 条";});
 if(["quarkCookie","baiduCookie","cookie115"].includes(param.name))(param.placeholders||[]).forEach(function(item){item.title=item.title.replace(/垮/g,"夸克").replace(/佰/g,"百度").replace(/伍/g,"115");});
});

// 原版内增强：完整代码保留在本模块。未替换原版搜索、目录和整剧缓存实现。
const CP_PREFIX="enhanced:"+WidgetMetadata.id+":";
const CP_COOKIE_ROOT=STORAGE_COOKIE_KEY.replace(/quark\.cookie$/,""),CP_FIELDS=["quarkCookie","baiduCookie","cookie115","xunleiAuth","guangyaAuth","tianyiCookie"];
const cpNativeBind=bindForwardParams,cpNativeFormat=formatPlaybackResource,cpNativeResolve=resolvePlaySource;
const cpNativeJson=httpJson,cpNativeEpisode=episodeIdentity;
// Shared cookie validation and response decoding for settings and playback.
function cpQuarkSessionCookie(entry){
 return entry&&typeof entry.cookie==='string'&&entry.cookie.trim()&&!/[\x00-\x1f\x7f]/.test(entry.cookie)?entry.cookie:'';
}
function cpQuarkResponseCookie(previous,response){
 const headers=response?.headers||{},key=Object.keys(headers).find(k=>k.toLowerCase()==='set-cookie');
 const lines=key?(Array.isArray(headers[key])?headers[key].join(';'):String(headers[key]||'')):'';
 const match=lines.match(/(?:^|[;,]\s*)__puus=([^;,\s]+)/);if(!match)return '';
 const cookie=previous.split(';').map(s=>s.trim()).filter(s=>s&&!/^__puus\s*=/.test(s)).concat('__puus='+match[1]).join('; ');
 return cpQuarkSessionCookie({cookie});
}
// Derived cookies belong to the configured Quark account, independently of
// the other drive credentials and of the resource module that rotated them.
function cpQuarkReadSession(configured,profile){
 if(!configured)return null;
 const key='quark:'+baiduSha1(configured);let entry,readable=false;
 try{if(typeof Widget.sharedCache?.get==='function'){entry=JSON.parse(Widget.sharedCache.get('catpaw.drive-auth.v1',key)||'null');readable=true;}}catch(_){}
 const local=cpRead('quark-session:'+key),sharedCookie=cpQuarkSessionCookie(entry),localCookie=cpQuarkSessionCookie(local);
 // Retry an unacknowledged write only while the shared session still agrees
 // with its predecessor. A different shared cookie belongs to a newer writer.
 if(localCookie&&local.pending&&(!sharedCookie||sharedCookie===local.previous||sharedCookie===localCookie)){
  if(readable)cpQuarkSaveSession(configured,localCookie,local.previous);return local;
 }
 if(sharedCookie&&localCookie&&local.pending)cpWrite('quark-session:'+key,{cookie:sharedCookie});
 if(cpQuarkSessionCookie(entry))return entry;
 entry=local;
 if(cpQuarkSessionCookie(entry))return entry;
 // Adopt the old local session only for its exact original account profile.
 entry=cpRead('session:'+profile);
 if(!cpQuarkSessionCookie(entry))return null;
 cpQuarkSaveSession(configured,entry.cookie);return entry;
}
function cpQuarkSaveSession(configured,cookie,previous=configured){
 if(!configured||!cpQuarkSessionCookie({cookie}))return;
 const key='quark:'+baiduSha1(configured),entry={cookie};
 const local=cpRead('quark-session:'+key);
 if(local&&local.pending&&cpQuarkSessionCookie(local)===previous)previous=local.previous;
 cpWrite('quark-session:'+key,{cookie,previous,pending:true});
 try{
  if(typeof Widget.sharedCache?.get==='function'&&typeof Widget.sharedCache?.set==='function'){
   const current=cpQuarkSessionCookie(JSON.parse(Widget.sharedCache.get('catpaw.drive-auth.v1',key)||'null'));
   if(current&&current!==previous&&current!==cookie)return;
   Widget.sharedCache.set('catpaw.drive-auth.v1',key,JSON.stringify(entry));
   cpWrite('quark-session:'+key,entry);
  }
 }catch(_){}
}
function cpQuarkAcceptResponse(url,response,profile,previous){
 if(!/^https:\/\/drive(?:-[a-z]+)?\.quark\.cn\//i.test(String(url||'')))return;
 cpCheck(profile);
 const configured=cpAccounts()[0];if(!configured||!previous)return;
 const shared=cpQuarkSessionCookie(cpQuarkReadSession(configured,profile)),local=ensureCookie();
 // A response dispatched with an older cookie cannot replace a rotation that
 // another request or module has already committed, even without Set-Cookie.
 const winner=shared&&shared!==previous?shared:local!==previous?local:'';
 if(winner){CURRENT_COOKIE=winner;safeStorageSet(STORAGE_COOKIE_KEY,winner);return;}
 const cookie=cpQuarkResponseCookie(previous,response);if(!cookie||cookie===previous)return;
 CURRENT_COOKIE=cookie;safeStorageSet(STORAGE_COOKIE_KEY,cookie);cpQuarkSaveSession(configured,cookie,previous);
}

let cpSaveNative=saveShareFile;
let cpNativeFind=findEpisodeResource,cpProfile="",cpActiveProfile="",cpDeadline=Infinity,cpSignal=null;
const cpFlights=new Map(),cpBlockedProviders=new Set();
function cpRead(key){try{if(key.startsWith("transfer:")&&Widget.sharedCache){const raw=Widget.sharedCache.get("catpaw.upstream-enhanced.transfers.v1",key);if(raw){const v=JSON.parse(raw);if(v===null||["succeeded","known","uncertain","failed","preparing"].includes(v.state))return v;}}return JSON.parse(safeStorageGet(CP_PREFIX+key)||"null");}catch(_){return null;}}
function cpWrite(key,value){const raw=JSON.stringify(value);safeStorageSet(CP_PREFIX+key,raw);if(key.startsWith("transfer:")){try{if(Widget.sharedCache)Widget.sharedCache.set("catpaw.upstream-enhanced.transfers.v1",key,raw);}catch(_){}}}
function cpSetting(key,fallback){if(key==="indexTimeoutSeconds"){const value=cpShared().indexTimeoutSeconds;return typeof value==="string"&&/^(?:[5-9]|[12]\d|30)$/.test(value)?value:"10";}if(key==="maxShareCandidates"){const value=cpShared().maxShareCandidates;return ["1","2","3","5"].includes(value)?value:"2";}if(key==="quality"){const quality=cpShared().quarkQuality;return ["auto","origin","transcode"].includes(quality)?quality:"auto";}const value=cpRead("setting:"+key);return value==null?fallback:value;}
function cpError(code){const e=new Error({ACCOUNT_CHANGED:"账号已更换，请重新加载",ABORTED:"操作已取消",OPERATION_TIMEOUT:"请求超时",AUTH_FAILED:"网盘登录失效",RATE_LIMITED:"网盘请求受限",ORIGIN_ACCESS_DENIED:"原画受网盘权限或大小限制",QUALITY_UNAVAILABLE:"所选画质不可用",FILE_NOT_FOUND:"所选文件不存在，请刷新详情",TRANSFER_UNCERTAIN:"转存回执未确认，请检查网盘后重试",SHARE_EXPIRED:"分享已失效或过期",UPSTREAM_ERROR:"网盘请求失败"}[code]||"资源请求失败");e.code=code;return e;}
function cpShared(){try{const raw=Widget.sharedCache&&Widget.sharedCache.get("catpaw.drive-accounts.v1","credentials");if(typeof raw!=="string")return {};const v=JSON.parse(raw);return v.schemaVersion===1&&Number.isSafeInteger(v.revision)&&v.revision>0&&CP_FIELDS.every((k,i)=>(i>=3&&v[k]===undefined)||typeof v[k]==="string"&&!/[\x00-\x1f\x7f]/.test(v[k]))?Object.assign({xunleiAuth:"",guangyaAuth:"",tianyiCookie:""},v):{};}catch(_){return {};}}
function cpAccounts(){
 const shared=cpSetting("credentialSource","shared")==="local"?{}:cpShared();
 return CP_FIELDS.map(k=>String(cpRead("local:"+k)||shared[k]||"").trim());
}
function cpCheck(profile){if(cpSignal&&cpSignal.aborted)throw cpError("ABORTED");if(profile&&profile!==baiduSha1(JSON.stringify(cpAccounts())))throw cpError("ACCOUNT_CHANGED");if(Date.now()>=cpDeadline)throw cpError("OPERATION_TIMEOUT");}
bindForwardParams=function(params={}){
 params=cpXunleiCredentialParams(cpGuangyaCredentialParams(params));
 cpPlaybackInitializeAccounts();
 for(const key of ["credentialSource","subtitles"]){if(Object.prototype.hasOwnProperty.call(params,key))cpWrite("setting:"+key,String(params[key]));}
 if(typeof params.xunleiAuth==='string'&&params.xunleiAuth.trim()&&!params.xunleiAuth.trim().startsWith('{')&&!/^(?:Bearer\s+)?[A-Za-z0-9._~+/-]+=*$/i.test(params.xunleiAuth.trim()))throw cpError("AUTH_FAILED");
 for(const key of CP_FIELDS)if(Object.prototype.hasOwnProperty.call(params,key)){if(typeof params[key]!=="string"||/[\x00-\x1f\x7f]/.test(params[key]))throw cpError("AUTH_FAILED");cpWrite("local:"+key,params[key].trim());}
 if(!Object.prototype.hasOwnProperty.call(params,"quarkCookie")&&(params.cookie||params.quarkck))cpWrite("local:quarkCookie",normalizeCookie(params.cookie||params.quarkck));
 const accounts=cpAccounts(),profile=baiduSha1(JSON.stringify(accounts));
 const session=cpQuarkReadSession(accounts[0],profile),quark=session&&session.cookie||accounts[0];
 cpProfile=profile;
 const result=cpNativeBind(Object.assign({},params,{quarkCookie:quark,baiduCookie:accounts[1],cookie115:accounts[2]}));
 // 登录配置身份保持稳定；__puus轮换只更新会话，不使原版整剧缓存失效。
 safeStorageSet(STORAGE_COOKIE_KEY.replace(/cookie$/,"configHash"),baiduSha1(normalizeCookie(accounts[0])));return result;
};

// Shared switches apply independently of the module's credential source.
function cpDriveEnabled(provider){
 const fields={quark:"driveQuarkEnabled",baidu:"driveBaiduEnabled",uc:"driveUcEnabled","115":"drive115Enabled","123":"drive123Enabled",xunlei:"driveXunleiEnabled",guangya:"driveGuangyaEnabled",yidong:"driveYidongEnabled",tianyi:"driveTianyiEnabled"};
 const value=cpShared()[fields[provider]];
 return ["xunlei","guangya","yidong","tianyi"].includes(provider)?value==="enabled":value!=="disabled";
}
function cpSize(value){const n=Number(value);return n>0?(n>=1073741824?(n/1073741824).toFixed(2)+" GB":(n/1048576).toFixed(1)+" MB"):"";}
// Filename hints describe labels supplied by the publisher, never a probed
// stream or a list of real cpMedia_audio tracks. Contradictory cpMedia_scalar labels are unknown.
const cpMedia_boundary = pattern => new RegExp(`(?:^|[^\\p{L}\\p{N}])(?:${pattern})(?=$|[^\\p{L}\\p{N}])`, 'iu');
const cpMedia_video = [ ['H.264', 'h[ ._-]?264|x264|avc'], ['H.265', 'h[ ._-]?265|x265|hevc'], ['AV1','av1'], ['VP9','vp9'] ];
const cpMedia_range = [['SDR','sdr'], ['HDR10+', 'hdr10\\+'], ['HDR10','hdr10(?!\\+)'], ['Dolby Vision','dolby[ ._-]?vision|dovi|dv']];
const cpMedia_audio = [['AAC','aac'], ['AC3','(?<!e[ ._-])ac[ ._-]?3'], ['EAC3','e[ ._-]?ac[ ._-]?3|ddp|dd\\+'], ['TrueHD','true[ ._-]?hd'], ['DTS-HD','dts[ ._-]?hd(?:[ ._-]?ma)?'], ['DTS','dts(?![ ._-]?hd)']];
const cpMedia_depths = [[8,'8[ ._-]?bit'], [10,'10[ ._-]?bit'], [12,'12[ ._-]?bit']];
const cpMedia_channels = [['7.1.4','7\\.1\\.4'], ['5.1.2','5\\.1\\.2'], ['2.0','2\\.0|2[ ._-]?ch'], ['5.1','5\\.1|6[ ._-]?ch'], ['7.1','7\\.1|8[ ._-]?ch'], ['1.0','1\\.0|mono|1[ ._-]?ch']].map(([value, pattern]) => [value, `(?<!\\d\\.)(?:${pattern})(?!\\.\\d)`]);
const cpMedia_languages = [['zh','国语|国語|普通话|普通話|mandarin|zh|zho|chi'], ['en','英语|英語|英文|english|eng|en'], ['yue','粤语|粵語|cantonese|yue'], ['ja','日语|日語|日文|japanese|jpn|ja'], ['ko','韩语|韓語|korean|kor|ko'], ['fr','法语|法語|french|fra|fre'], ['de','德语|德語|german|deu|ger'], ['es','西班牙语|spanish|spa']];
// Release names commonly attach a depth or channel count to a codec token.
// Split only known complete combinations, never arbitrary numeric suffixes.
function cpMedia_releaseText(value) {
  return value.replace(/(^|[^\p{L}\p{N}])(hevc|avc|h[ ._-]?26[45]|x26[45])(?=(?:8|10|12)[ ._-]?bit(?:$|[^\p{L}\p{N}]))/giu, '$1$2 ')
    .replace(/(^|[^\p{L}\p{N}])(ddp|dd\+|aac|e[ ._-]?ac[ ._-]?3|ac[ ._-]?3|true[ ._-]?hd|dts[ ._-]?hd|dts)(?=(?:2\.0|5\.1|7\.1)(?:$|[^\p{L}\p{N}]))/giu, '$1$2 ');
}
function cpMedia_scalar(text, definitions) {
  const values = definitions.filter(([,pattern]) => cpMedia_boundary(pattern).test(text)).map(([value]) => value);
  return values.length === 1 ? values[0] : null;
}
function cpMediaInfo(filename) {
  const text = cpMedia_releaseText(typeof filename === 'string' ? filename : '');
  return {
    videoCodec: cpMedia_scalar(text, cpMedia_video), dynamicRange: cpMedia_scalar(text, cpMedia_range), bitDepth: cpMedia_scalar(text, cpMedia_depths),
    audioCodec: cpMedia_scalar(text, cpMedia_audio), audioChannels: cpMedia_scalar(text, cpMedia_channels), atmos: cpMedia_boundary('atmos').test(text),
    languageHints: cpMedia_languages.filter(([,pattern]) => cpMedia_boundary(pattern).test(text)).map(([value]) => value),
  };
}
function cpResolutionInfo(value) {
  const found = new Set(), aliases = { '8k':'4320p', '4k':'2160p', uhd:'2160p', '2k':'1440p' };
  // Underscores and Chinese titles commonly touch resolution labels. Require
  // ASCII token boundaries so 18K and 8Kbps cannot become resolution hints.
  const pattern = /(?:^|[^a-z0-9])((?:4320|2160|1440|1080|720|576|540|480|360)[pi]|[248]k|uhd|\d{3,5}\s*[x×]\s*(?:4320|2160|1440|1080|720|576|540|480|360))(?=$|[^a-z0-9])/gi;
  for (const match of String(value || '').matchAll(pattern)) {
    const label = match[1].toLowerCase();
    found.add(aliases[label] || (/[x×]/.test(label) ? label.split(/[x×]/)[1].trim()+'p' : label.replace(/i$/, 'p')));
  }
  return {present:found.size>0, value:found.size===1?[...found][0]:null};
}
function cpOriginResolution(resource, video) {
  // These are original video dimensions. video_max_resolution is a service's
  // transcode ceiling and must never describe the original file.
  const w = Number(video.video_width), h = Number(video.video_height);
  if (Number.isSafeInteger(w) && Number.isSafeInteger(h) && w > 0 && h > 0 && w <= 32768 && h <= 32768) {
    const wide=Math.max(w,h), short=Math.min(w,h);
    // Use both axes for cropped widescreen releases and rotated videos.
    for (const [height,width] of [[4320,7680],[2160,3840],[1440,2560],[1080,1920],[720,1280],[576,1024],[540,960],[480,854],[360,640]]) {
      if (wide>=width || short>=height) return height+'p';
    }
  }
  for (const value of [resource.resolution, video.file_name, resource.description]) {
    const hint=cpResolutionInfo(value);
    if (hint.present) return hint.value;
  }
  return null;
}
function cpMedia(name,resolution=cpResolutionInfo(name).value){const info=cpMediaInfo(name),labels=[resolution,info.videoCodec,info.dynamicRange,info.bitDepth?info.bitDepth+"bit":null,info.audioCodec,info.audioChannels,info.atmos?"Atmos":null,info.languageHints.length?"语言标签: "+info.languageHints.join("/"):null].filter(Boolean);return labels;}
// Quanpan discovers shares in JSON. Slots belong to native catalog requests,
// never the lifetime of a recursive share or a whole provider.
const qpCatalogWaiting=[],qpCatalogRunning=new Map();let qpCatalogActive=0;
function qpPumpCatalog(){
 for(let i=0;i<qpCatalogWaiting.length&&qpCatalogActive<4;){
  const job=qpCatalogWaiting[i],count=qpCatalogRunning.get(job.provider)||0;
  if(count>=2){i++;continue;}
  qpCatalogWaiting.splice(i,1);qpCatalogActive++;qpCatalogRunning.set(job.provider,count+1);
  Promise.resolve().then(()=>{cpCheck(job.profile);return job.work();}).then(v=>{cpCheck(job.profile);return v;})
   .then(job.resolve,job.reject).finally(()=>{qpCatalogActive--;const left=(qpCatalogRunning.get(job.provider)||1)-1;if(left)qpCatalogRunning.set(job.provider,left);else qpCatalogRunning.delete(job.provider);qpPumpCatalog();});
 }
}
function cpQueueCatalogRead(provider,work){
 const profile=cpActiveProfile||cpProfile;
 return new Promise((resolve,reject)=>{qpCatalogWaiting.push({provider,profile,work,resolve,reject});qpPumpCatalog();});
}
function cpQueueCatalogShare(provider,work){const profile=cpActiveProfile||cpProfile;return Promise.resolve().then(()=>{cpCheck(profile);return work();}).then(v=>{cpCheck(profile);return v;});}
function cpPrimeCatalogs(shares,read){return new Map(shares.map(share=>[share,cpQueueCatalogShare(share.provider||'quark',()=>read(share)).then(value=>({ok:true,value}),error=>({ok:false,error}))]));}
function cpCatalogTotal(data,json){
 for(const value of [data?.total,data?._total,data?.total_count,data?.metadata?._total,json?.metadata?._total])if(value!=null&&value!==''&&Number.isFinite(Number(value))&&Number(value)>=0)return Number(value);
 return null;
}
function cpCatalogPageEnd(items,total,received,seen,key,scanned){
 if(!items.length){if(total!==null&&(scanned??seen.size)<total)throw cpError('UPSTREAM_ERROR');return true;}
 let added=0;for(const item of items){const id=String(key(item));if(!seen.has(id)){seen.add(id);added++;}}
 if(!added)throw cpError('UPSTREAM_ERROR');
 return total!==null&&(scanned??seen.size)>=total;
}
async function qpCatalogPages(provider,read,size,key,readSchedulesRequests=false,onPage,readToken){
 const rows=[],seen=new Set();let next=0,scanned=0,hasNativeCount=false;
 const pending=new Map();let parallelTotal=null,lastPage=0,scheduled=1,pageFailure;
 const request=(page,cursor)=>Promise.resolve().then(()=>{const run=()=>{if(pageFailure)throw pageFailure;return read(page,cursor);};return readSchedulesRequests?run():cpTargetQueue(readToken,provider,run);}).then(value=>({value}),error=>{pageFailure=pageFailure||error;return {error};});
 try{for(let page=1;;page++){
  const outcome=await (pending.get(page)||request(page,next));pending.delete(page);
  if(pageFailure)throw pageFailure;const value=outcome.value;
  if(!value||!Array.isArray(value.items))throw cpError('UPSTREAM_ERROR');
  const total=value.total==null?null:Number(value.total);
  if(total!==null&&(!Number.isFinite(total)||total<0))throw cpError('UPSTREAM_ERROR');
  // UC may filter rows after pagination: 98 visible items can consume 100 slots.
  const count=value.count==null?value.items.length:Number(value.count);
  if(!Number.isInteger(count)||count<value.items.length)throw cpError('UPSTREAM_ERROR');
  if(parallelTotal!==null&&(total!==parallelTotal||count!==Math.min(size,parallelTotal-(page-1)*size)))throw cpError('UPSTREAM_ERROR');
  hasNativeCount=hasNativeCount||value.count!=null;scanned+=count;
  const consumed=hasNativeCount?scanned:undefined;
  const filteredEmpty=!value.items.length&&value.count!=null&&count>0;
  const end=filteredEmpty?total!==null&&scanned>=total:cpCatalogPageEnd(value.items,total,rows.length+value.items.length,seen,key,consumed);
  rows.push(...value.items);if(onPage)onPage(value.items);
  if(parallelTotal!==null&&page===lastPage&&!end)throw cpError('UPSTREAM_ERROR');
  if(end)break;
  if(String(value.next)==='-1'){if(total!==null&&(consumed??seen.size)<total)throw cpError('UPSTREAM_ERROR');break;}
  if(total===null&&value.next==null&&count<size)break;
  next=value.next??0;
  // Only these providers expose independent fixed-size numbered pages. Short
  // first pages retain the serial path because their page geometry is unknown.
  if(page===1&&(provider==='quark'||provider==='uc')&&value.next==null&&Number.isInteger(total)&&total>size&&count===size){parallelTotal=total;lastPage=Math.ceil(total/size);}
  if(parallelTotal!==null)while(pending.size<2&&scheduled<lastPage){scheduled++;pending.set(scheduled,request(scheduled,0));}
 }}catch(error){pageFailure=pageFailure||error;throw error;}finally{await Promise.all(pending.values());}
 return rows;
}
// Discover folders after each validated page so later parent pages do not idle
// the existing second worker. Keep full-catalog completion before flattening.
// Folder completion can be out of order. Flatten the recorded tree in original
// breadth-first order only after every started read has settled.
async function qpCatalogTree(root,read,child,onItem){
 const nodes=new Map(),queue=[];let active=0,failure;
 return await new Promise((resolve,reject)=>{
  function discover(id){const key=String(id);if(nodes.has(key))return;const node={id,items:[]};nodes.set(key,node);queue.push(node);pump();}
  function finish(){
   if(active||queue.length&&!failure)return;
   if(failure){reject(failure);return;}
   const result=[],pending=[root],visited=new Set();
   for(let i=0;i<pending.length;i++){
    const parent=pending[i],key=String(parent);if(visited.has(key))continue;visited.add(key);
    for(const item of nodes.get(key).items){const id=child(item);if(id!==undefined&&id!==null)pending.push(id);result.push({item,parent});}
   }
   resolve(result);
  }
  function pump(){
   while(!failure&&active<2&&queue.length){const node=queue.shift();active++;
    Promise.resolve().then(()=>{
     let emitted=false;
     const append=items=>{if(failure)throw failure;emitted=true;for(const item of items){node.items.push(item);const id=child(item);if(id!==undefined&&id!==null)discover(id);else if(onItem)onItem(item,node.id);}};
     return Promise.resolve(read(node.id,append)).then(items=>{if(!emitted)append(items);});
    })
     .catch(error=>{failure=failure||error;queue.length=0;}).finally(()=>{active--;pump();finish();});
   }
  }
  discover(root);
 });
}
function qpCatalogResult(entries,key,folder,video,convert){
 const seen=new Set(),list=[];let packageSizeBytes=0;
 for(const {item,parent} of entries){if(folder(item))continue;const id=String(key(item));if(seen.has(id))continue;seen.add(id);
  packageSizeBytes+=qpFileBytes(item.size??item.Size??item.s);if(video(item))list.push(convert(item,parent));
 }
 return {list,packageSizeBytes};
}
async function getShareDetail(shareId,stoken,target,scope){
 const cpTargetToken=undefined;
 const folder=item=>!!item.dir;
 const entries=await cpTargetQpWalk(cpTargetFilter(scope,item=>cpQuarkCandidateVideo(item)),target?.pdir_fid??'0',(parent,emit,cpTargetToken)=>qpCatalogPages('quark',async page=>{
  cpCoveragePage(scope||cpCoverageFor('quark',Object.assign({shareId},target)));
  const json=await httpJson('GET','https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?'+toQuery({pr:'ucpro',fr:'pc',uc_param_str:'',ver:'2',pwd_id:shareId,stoken,pdir_fid:parent,force:0,_page:page,_size:200,_fetch_total:1,_sort:'file_type:asc,file_name:asc'}),null,quarkHeaders());
  if(!json||(json.status!=null&&Number(json.status)!==200)||(json.code!=null&&Number(json.code)!==0))throw cpError('UPSTREAM_ERROR');
  return {items:json.data?.list,total:cpCatalogTotal(json.data,json),count:json.metadata?._count??json.data?.metadata?._count};
 },200,item=>item.fid,false,emit,cpTargetToken),item=>!target&&folder(item)?item.fid:undefined);
 const result=qpCatalogResult(entries,item=>item.fid,folder,item=>cpQuarkCandidateVideo(item),(item,parent)=>Object.assign({},item,{shareId,stoken,pdir_fid:item.pdir_fid??parent,dir:false,file:true}));
 result.movieName=entries.find(({item})=>folder(item))?.item.file_name||result.list[0]?.file_name||'';return result;
}
async function getUcVideos(share,target){
 const cpTargetToken=undefined;
 const stoken=await getUcToken(share.shareId,share.passcode),folder=item=>!!item.dir;
 const entries=await cpTargetQpWalk(cpTargetFilter(share.cpTargetDirectory,item=>isVideoFile(item)),target?.pdir_fid??'0',(parent,emit,cpTargetToken)=>qpCatalogPages('uc',async page=>{
  cpCoveragePage(share.cpTargetDirectory||cpCoverageFor('uc',share));
  const data=await ucApi('share/sharepage/detail?'+toQuery({pr:'UCBrowser',fr:'pc',pwd_id:share.shareId,stoken,pdir_fid:parent,force:0,_page:page,_size:100,_fetch_total:1,_sort:'file_type:asc,file_name:asc'}));
  return {items:data?.list,total:cpCatalogTotal(data),count:data?.metadata?._count};
 },100,item=>item.fid,false,emit,cpTargetToken),item=>!target&&folder(item)?item.fid:undefined,(item,parent)=>{if(!folder(item)&&isVideoFile(item)&&(!target||String(item.fid)===String(target.fid)))cpB6EmitFile('uc',share,Object.assign({},item,{shareId:share.shareId,passcode:share.passcode,stoken,pdir_fid:item.pdir_fid??parent}),{root:parent==='0'});});
 return qpCatalogResult(entries,item=>item.fid,folder,item=>isVideoFile(item)&&(!target||String(item.fid)===String(target.fid)),(item,parent)=>Object.assign({},item,{shareId:share.shareId,passcode:share.passcode,stoken,pdir_fid:item.pdir_fid??parent}));
}
async function getBaiduVideos(share){
 const cpTargetToken=undefined;
 let randsk=await baiduVerify(share),headers=baiduHeaders(share,randsk),refreshing=null,rejectedToken=null;const folder=item=>item.isdir!=null?Number(item.isdir)===1:String(item.category)==='6';let {uk,shareid}=cpLocationBaidu(share.cpTargetDirectory);
 const entries=await cpTargetQpWalk(cpTargetFilter(share.cpTargetDirectory,item=>isVideoFile(item)),null,(dir,emit,cpTargetToken)=>qpCatalogPages('baidu',async page=>{
  cpCoveragePage(share.cpTargetDirectory||cpCoverageFor('baidu',share));
  const size=dir===null?20:100,params={app_id:250528,web:1,channel:'chunlei',view_mode:1,showempty:0,page,num:size,order:dir===null?'time':'name',desc:dir===null?1:0};
  if(dir===null)Object.assign(params,{root:1,clienttype:0,shorturl:baiduShortId(share.shareId)});else Object.assign(params,{dir,uk,shareid,is_from_web:true});
  const usedToken=randsk,usedHeaders=headers;let json=await cpTargetQueue(cpTargetToken,'baidu',()=>httpJson('GET','https://pan.baidu.com/share/list?'+toQuery(params),null,usedHeaders));
  if(json&&Number(json.errno)===-9){
   if(!refreshing){rejectedToken=usedToken;refreshing=cpRefreshBaiduVerify(share,usedToken).then(value=>{randsk=value;headers=baiduHeaders(share,value);});}
   if(usedToken===rejectedToken){await refreshing;json=await cpTargetQueue(cpTargetToken,'baidu',()=>httpJson('GET','https://pan.baidu.com/share/list?'+toQuery(params),null,headers));}
  }
  if(json&&Number(json.errno)===-9)cpReadInvalidate("baidu",share.shareId,share.passcode,"verify");
  if(json&&Number(json.errno)===-9)cpLocationDenied(share.cpTargetDirectory);if(!json||Number(json.errno)!==0)throw cpError('UPSTREAM_ERROR');if(dir===null){uk=json.uk||uk;shareid=json.share_id||json.shareid||shareid;}
  return {items:json.list,total:cpCatalogTotal(json)};
 },dir===null?20:100,item=>item.fs_id||item.fsid||item.path,true,emit,cpTargetToken),item=>folder(item)?item.path:undefined,(item,parent)=>{if(!folder(item)&&isVideoFile(item))cpB6EmitFile('baidu',share,{fid:String(item.fs_id||item.fsid||item.path),file_name:item.server_filename,size:item.size,path:item.path,uk,shareid,shareId:share.shareId,passcode:share.passcode},{root:parent===null});});
 return qpCatalogResult(entries,item=>item.fs_id||item.fsid||item.path,folder,isVideoFile,item=>({fid:String(item.fs_id||item.fsid||item.path),file_name:item.server_filename,size:item.size,path:item.path,uk,shareid,shareId:share.shareId,passcode:share.passcode}));
}
async function get115Videos(share){
 const cpTargetToken=undefined;
 const key=item=>String(item.fc)+':'+String(item.fid||item.cid),folder=item=>Number(item.fc)===0;
 const entries=await cpTargetQpWalk(cpTargetFilter(share.cpTargetDirectory,item=>Number(item.fc)===1&&isVideoFile({file_name:item.n})),'',(cid,emit,cpTargetToken)=>{let offset=0;return qpCatalogPages('115',async()=>{
  cpCoveragePage(share.cpTargetDirectory||cpCoverageFor('115',share));
  const json=await httpJson('GET','https://webapi.115.com/share/snap?'+toQuery({share_code:share.shareId,receive_code:share.passcode||'',cid,limit:100,offset}),null,headers115());
  if(!json?.state||!json.data)throw cpError('UPSTREAM_ERROR');const items=json.data.list;offset+=Array.isArray(items)?items.length:0;
  return {items,total:json.data.count??null};
 },100,key,false,emit,cpTargetToken);},item=>folder(item)?item.cid:undefined,(item,cid)=>{if(Number(item.fc)===1&&isVideoFile({file_name:item.n}))cpB6EmitFile('115',share,{fid:String(item.fid),file_name:item.n,size:Number(item.s||0),cid,shareId:share.shareId,passcode:share.passcode||''},{root:cid===''});});
 return qpCatalogResult(entries,key,folder,item=>Number(item.fc)===1&&isVideoFile({file_name:item.n}),(item,cid)=>({fid:String(item.fid),file_name:item.n,size:Number(item.s||0),cid,shareId:share.shareId,passcode:share.passcode||''}));
}
async function getPan123Videos(share,target){
 const cpTargetToken=undefined;
 const folder=item=>Number(item.Type)===1;
 const entries=await cpTargetQpWalk(cpTargetFilter(share.cpTargetDirectory,item=>Number(item.Category)===2),target?.parentId??0,(parent,emit,cpTargetToken)=>qpCatalogPages('123',async(page,next)=>{
  cpCoveragePage(share.cpTargetDirectory||cpCoverageFor('123',share));
  const response=await cpHttpGet('https://www.123684.com/b/api/share/get?'+toQuery({limit:100,next,orderBy:'file_name',orderDirection:'asc',shareKey:share.shareId,SharePwd:share.passcode||'',ParentFileId:parent,Page:page}),{timeout:10000,headers:PAN123_HEADERS});
  const json=typeof response.data==='string'?JSON.parse(response.data):response.data;
  if(Number(response.status||response.statusCode||200)>=400||!json||(json.code!=null&&Number(json.code)!==0))throw cpError('UPSTREAM_ERROR');
  return {items:json.data?.InfoList,total:cpCatalogTotal(json.data,json),next:json.data?.Next};
 },100,item=>item.FileId,false,emit,cpTargetToken),item=>!target&&folder(item)?item.FileId:undefined);
 return qpCatalogResult(entries,item=>item.FileId,folder,item=>Number(item.Category)===2&&(!target||String(item.FileId)===String(target.fid)),(item,parent)=>({fid:String(item.FileId),parentId:parent,file_name:item.FileName,size:Number(item.Size||0),shareId:share.shareId,passcode:share.passcode||'',downloadUrl:item.DownloadUrl||''}));
}
// Display classification is independent of account overrides and playback quality.
// An explicit empty value restores the original resolution detection path.
function cpResourceCategory(){
 const value=cpShared().resourceCategory;
 return ["8k","4k","1080p","other", ""].includes(value)?value:"";
}
function cpWithoutResolution(value){
 return String(value||"").replace(/(?<![a-z0-9])(?:\d{3,5}\s*[x×]\s*\d{3,5}|\d{3,5}[pi]|(?:4320|2160|1440|1080|720|576|540|480|360)|[248]k|uhd|fhd)(?=$|[^a-z0-9])/gi,"").replace(/\s+/g," ").trim();
}
formatPlaybackResource=function(resource,source,params){
 const result=cpNativeFormat(resource,source,params),v=source.videoInfo||{};
 const origin=resource.quality==="origin"||(!resource.quality&&/原画|直链/.test(resource.description||""));
 const category=cpResourceCategory(),forced=category!=="";
 const resolution=forced?({"8k":"4320p","4k":"2160p","1080p":"1080p"}[category]||null):origin?cpOriginResolution(resource,v):cpResolutionInfo(resource.resolution).value;
 const facts=origin?cpMedia(v.file_name,resolution):resource.quality==="preview"?(forced&&resolution?["展示分类 "+resolution]:[]):resolution?[resolution]:[];
 const size=cpSize(resource.sizeBytes!=null?resource.sizeBytes:origin?v.size:0);
 const provider={quark:"夸克",baidu:"百度",uc:"UC","115":"115","123":"123",xunlei:"迅雷",guangya:"光鸭",yidong:"移动",tianyi:"天翼云盘"}[source.provider||"quark"]||"网盘";
 const quality=resource.quality==="preview"?"预览":origin?"原画":resource.quality==="transcode"||/转码/.test(resource.description||"")?"转码":"";
 const rawTitle=params.seriesName||params.title||(resource.quality==="preview"?"视频":source.title||v.file_name||"视频");
 const title=forced?cpWithoutResolution(rawTitle)||"视频":rawTitle;
 const episode=params.type!=="movie"&&params.episode?" 第"+(params.season||1)+"季 第"+params.episode+"集":"";
 const station=(forced?cpWithoutResolution(WidgetMetadata.title):WidgetMetadata.title).replace(/^猫\s*·\s*/, "");
 result.name=(size?"["+size+"] ":"")+[provider,quality,station].filter(Boolean).join(" · ");
 result.description=[title+episode,...facts,size].filter(Boolean).join(" · ");
 if(forced)result.resolution=resolution;
 if(resource.quality)result.quality=resource.quality;
 if(resource.subtitles)result.subtitles=resource.subtitles;
 return result;
};
function cpTitleKey(value){return String(value||"").replace(/[（(]\s*(?:真彩|臻彩)\s*[）)]|[-－]\s*(?:真彩|臻彩)\s*$/g,"").replace(/\s*[（(](?:19|20)\d{2}[）)]\s*$/,"").replace(/\s*(?:第\s*[一二三四五六七八九十百\d]+\s*季|season\s*\d+)\s*$/i,"").replace(/[\s·:：._\-]/g,"").toLowerCase();}
function cpTitlesEqual(a,b){return cpTitleKey(a)===cpTitleKey(b);}
episodeIdentity=function(name){
 name=cpNormalizeEpisodeLabel(name);
 const original=cpNativeEpisode(name);if(original.episode!=null||/特别篇|番外|预告|花絮|\b(?:OVA|OAD|SP)\b/i.test(name))return original;
 const stem=String(name||"").replace(/\.[a-z0-9]{2,5}$/i,"");
 const explicit=/s(\d{1,2})[ ._-]*e(\d{4})(?!\d)/i.exec(stem);if(explicit)return {key:"s"+Number(explicit[1])+"e"+Number(explicit[2]),season:Number(explicit[1]),episode:Number(explicit[2])};
 const m=/\s-\s*(\d{1,3})(?=\s|\[|$)/.exec(stem)||/\]\[(\d{1,3})\](?=\[|$)/.exec(stem)||/第\s*(\d{1,3})\s*期/.exec(stem);
 if(!m||Number(m[1])<1)return original;const s=/第\s*(\d+)\s*季|\bS(\d+)\b/i.exec(stem),season=s?Number(s[1]||s[2]):1;
 return {key:"s"+season+"e"+Number(m[1]),season,episode:Number(m[1])};
};
// Shared pure relevance rules; provider I/O and discovery policies stay in their adapters.
function cpMovieHostYear(value){return /[（(]\s*((?:19|20)\d{2})\s*[）)]\s*$/.exec(value||'');}
// Rex forwards airDate rather than year. Keep all supplied year evidence in
// agreement, and only strip an unbracketed year when it is that release year.
function cpRequestedYear(params){
 const year=v=>/^(?:19|20)\d{2}$/.test(String(v??""))?Number(v):null;
 const embedded=cpMovieHostYear(params.seriesName||params.title||""),values=[year(params.year),year(params.releaseYear),params.type==="movie"?year(String(params.airDate||"").slice(0,4)):null,embedded?Number(embedded[1]):null].filter(v=>v!==null);
 return {year:values[0]||null,conflict:new Set(values).size>1};
}
function cpMovieName(value,year){
 let name=String(value||"").replace(/^[🎬🎥📺]\s*/u,"").replace(/^(?:名称|片名)\s*[:：]\s*/,"").replace(/[\u200b-\u200f\u202a-\u202e\ufeff]/g,"").replace(/[（(]\s*(?:真彩|臻彩)\s*[）)]/g,"").trim();
 const bracket=cpMovieHostYear(name);if(bracket)return {name:name.slice(0,bracket.index).trim(),year:Number(bracket[1])};
 const suffix=year&&new RegExp("^(.*?)[ ._-]*"+year+"$").exec(name);
 if(suffix&&suffix[1].trim()&&!/^\d+$/.test(suffix[1].trim()))return {name:suffix[1].trim(),year};
 return {name,year:null};
}
function cpMovieCandidate(value,params){
 const requested=cpRequestedYear(params);if(requested.conflict)return false;
 const host=cpMovieName(params.seriesName||params.title||params.name||params.keyword),full=cpMovieName(value),candidate=cpTitlesEqual(host.name,full.name)?full:cpMovieName(value,requested.year);
 return (!requested.year||!candidate.year||requested.year===candidate.year)&&cpTitlesEqual(host.name,candidate.name);
}
function cpMovieCacheIdentity(params){const r=cpRequestedYear(params);return JSON.stringify([3,params.tmdbId||params.tmdbID||"",r.year,r.conflict,params.imdbId||""]);}
function cpMovieVideoMatches(video,params,titles=cpRelevanceTitles(params)){return cpFileMatchDecision(video,params.type==="movie"?params:Object.assign({},params,{type:"movie"}),titles).matched;}
function cpRelevanceTitles(params){
 return [...new Set([params.seriesName||params.title||params.name||params.keyword,params.originalName,params.originalTitle,params.original_name,params.original_title,...(Array.isArray(params.alternativeTitles)?params.alternativeTitles:[]),...(Array.isArray(params.aliases)?params.aliases:[])].filter(v=>typeof v==="string"&&v.trim()).map(v=>v.trim()))];
}
// Remove known title words before interpreting labels such as "Trailer" or "Sample".
function cpWithoutKnownTitles(value,titles){
 let text=String(value||"");
 const names=[...new Set(titles.filter(Boolean).map(t=>cpMovieName(t).name))].sort((a,b)=>b.length-a.length);
 for(const title of names){
  const tokens=title.split(/[\s·:：._\-()[\]（）]+/).filter(Boolean).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  if(tokens.length)text=text.replace(new RegExp("(^|[\\s·:：._\\-()[\\]（）/\\\\])"+tokens.join("[\\s·:：._\\-()[\\]（）]*")+"(?=$|[^a-z0-9]|S\\d{1,2}E\\d+)","i"),"$1");
 }
 return text;
}
function cpHasExtraMarker(video,titles){
 return [video?.file_name,video?.parentPath||video?.parent_path].some(value=>{
  const text=cpWithoutKnownTitles(String(value||"").replace(/\.[a-z0-9]{2,5}$/i,""),titles);
  return /特别篇|番外|预告|花絮|(?:^|[^a-z0-9])(?:trailer|sample|extras?|featurettes?|OVA|OAD|SP)(?=$|[^a-z0-9])/i.test(text);
 });
}
function cpSearchMetadataLabel(value){
 const label=String(value||'').trim();
 const rest=label.replace(/(?:内封|外挂)?(?:简繁|简|繁|中英|中|英|双语|多语)?(?:中字|字幕|双字|中)|国语|粤语|多音轨|已完结|完结|(?:全\s*\d+|\d+)\s*[集期](?:全)?|剧情|爱情|喜剧|悬疑|动作|科幻|惊悚|犯罪|冒险|动画|奇幻|[248]K|\d{3,4}P|HDR(?:10\+?)?|DV|H26[45]|\d+(?:\.\d+)?fps|WEB[ ._-]*DL|BluRay|REMUX/gi,'');
 return rest!==label&&/^[ ._+&\/-]*$/.test(rest);
}
function cpRelevanceSearchName(value){
 let text=String(value||"").replace(/^[🎬🎥📺]\s*/u,"").replace(/^(?:名称|片名)\s*[:：]\s*/,"").replace(/[\u200b-\u200f\u202a-\u202e\ufeff]/g,"").trim();
 text=text.replace(/^[\[【](?:电影|剧集|电视剧|动漫|短剧)[·・](?:光鸭|迅雷|移动|天翼|夸克|百度|UC|115|123)[\]】]\s*/i,'');
 // Only recognized metadata labels are removable; bracketed sequel names stay meaningful.
 let previous;
 do{previous=text;text=text.replace(/\s*[\[【（(]([^\]】）)]+)[\]】）)]\s*$/, (whole,label)=>cpSearchMetadataLabel(label)?"":whole).trim();}while(text!==previous);
 text=text.replace(/\s*(?:更新至|更至|更新到|全\s*\d+\s*[集期]|完结|已完结)[\s\S]*$/,"");
 return text.replace(/[ ._-]+(?:[248]K|\d{3,4}[Pp]|HDR|杜比|蓝光|WEB[ ._-]*DL|BluRay|REMUX)(?=$|[ ._-])[\s\S]*$/i,(whole,offset)=>{
  const prefix=text.slice(0,offset);
  return (prefix.match(/[\[【（(]/g)||[]).length===(prefix.match(/[\]】）)]/g)||[]).length?'':whole;
 }).trim();
}
function cpExplicitSeason(value){
 const m=/第\s*([一二三四五六七八九十百\d]+)\s*季|(?:^|[^a-z0-9])Season[ ._-]*(\d+)(?=$|[^a-z0-9])|S(\d{1,2})[ ._-]*E\d+|(?:^|[^a-z0-9])S(\d{1,2})(?=$|[^a-z0-9])/i.exec(String(value||""));if(!m)return null;
 const raw=m[1]||m[2]||m[3]||m[4];if(/^\d+$/.test(raw))return Number(raw);const nums={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};if(raw==="十")return 10;if(raw.includes("十")){const parts=raw.split("十");return (nums[parts[0]]||1)*10+(nums[parts[1]]||0);}return nums[raw]||null;
}
function cpSearchTitleMatches(value,params){
 const requested=cpRequestedYear(params);if(requested.conflict)return false;
 if(!String(value||"").trim())return true;
 const titles=cpRelevanceTitles(params),evidence=cpWithoutKnownTitles(value,titles);
 const explicitSeason=params.type==="movie"?null:cpExplicitSeason(value);
 if(explicitSeason!==null&&explicitSeason!==Number(params.season||1))return false;
 const years=[...evidence.matchAll(/(?:^|[^a-z0-9])((?:19|20)\d{2})(?=$|[^a-z0-9])/gi)].map(m=>Number(m[1]));
 if(requested.year&&years.some(year=>year!==requested.year))return false;
 const clean=cpRelevanceSearchName(value);
 if(params.type==="movie")return titles.some(title=>cpMovieCandidate(clean,Object.assign({},params,{seriesName:title,title,year:requested.year||params.year})));
 const season=cpExplicitSeason(clean);if(season!==null&&season!==Number(params.season||1))return false;
 // Season and year suffixes may be in either order. Conflict checks above
 // remain authoritative; normalize only the already-validated trailing season.
 const name=clean.replace(/\s*(?:第\s*[一二三四五六七八九十百\d]+\s*季|Season[ ._-]*\d+|(?:^|[ ._-])S\d{1,2})\s*$/i,'');
 let candidate=cpMovieName(name,requested.year);
 if(requested.year&&candidate.year&&requested.year!==candidate.year)return false;
 const key=value=>cpTitleKey(value).replace(/s\d{1,2}$/i,"");
 const matches=name=>titles.some(title=>key(name)===key(cpRelevanceSearchName(title)));
 if(matches(candidate.name))return true;
 // TV hosts need not supply a release year. Strip a bare result year only
 // when the remaining name matches; titles such as 1984 retain their identity.
 const suffix=/^(.*?)[ ._-]+((?:19|20)\d{2})$/.exec(candidate.name);
 return !!suffix&&(!requested.year||Number(suffix[2])===requested.year)&&matches(suffix[1]);
}
function cpEpisodeVideoMatches(video,params,titles=cpRelevanceTitles(params)){return cpFileMatchDecision(video,params,titles).matched;}
function cpToken(value){return typeof value==="string"&&/^[A-Za-z0-9+/_-]+={0,2}$/.test(value)?value.replace(/\+/g,"-").replace(/\//g,"_"):value;}
function cpNativeRequest(method,url,data){
 if(/https:\/\/(?:pc-api\.uc\.cn|drive-(?:h|pc)\.quark\.cn)\/1\/clouddrive\//.test(url)){
  if(method==="GET"&&/\/share\/sharepage\/detail\?/.test(url))url=url.replace(/([?&]stoken=)([^&#]*)/g,(all,p,v)=>{try{return p+encodeURIComponent(cpToken(decodeURIComponent(v)));}catch(_){return all;}});
  if(method==="POST"&&/\/(?:file\/download|share\/sharepage\/save)\?/.test(url)&&data&&typeof data.stoken==="string")data=Object.assign({},data,{stoken:cpToken(data.stoken)});
 }
 return {method,url,data};
}
// Reuse successful Baidu preparation briefly across modules; signed playback URLs stay fresh.
const CP_BAIDU_READ_NAMESPACE="catpaw.drive-read.v1";
function cpIoReuseEnabled(){return !/(?:^|\.)(?:tgsou|tg-channels)$/.test(WidgetMetadata.id);}
function cpBaiduCacheState(){
 try{const raw=Widget.sharedCache&&Widget.sharedCache.get(CP_BAIDU_READ_NAMESPACE,"baidu"),state=raw?JSON.parse(raw):cpRead("baidu-read:cache");if(state?.schema===1&&typeof state.generation==="string"&&state.entries&&typeof state.entries==="object"&&!Array.isArray(state.entries))return state;}catch(_){}
 return {schema:1,generation:"",entries:{}};
}
function cpBaiduCacheGet(key){const state=cpBaiduCacheState();return key.startsWith("epoch:")?state.generation:state.entries[key]||null;}
function cpBaiduCacheSet(key,value){
 const state=cpBaiduCacheState();
 if(key.startsWith("epoch:")){state.generation=String(value);state.entries={};}
 else{
  delete state.entries[key];if(value!==null)state.entries[key]=value;
  const keys=Object.keys(state.entries);for(let i=0;i<keys.length-64;i++)delete state.entries[keys[i]];
 }
 cpWrite("baidu-read:cache",state);try{if(Widget.sharedCache)Widget.sharedCache.set(CP_BAIDU_READ_NAMESPACE,"baidu",JSON.stringify(state));}catch(_){}
}
function cpBaiduCacheKey(label,identity){const profile=cpActiveProfile||cpProfile;cpCheck(profile);const epoch=cpBaiduCacheGet("epoch:"+profile);return profile+":"+String(epoch||"")+":"+baiduSha1(JSON.stringify([label,identity]));}
function cpBaiduCached(key,ttl){
 if(!cpIoReuseEnabled())return null;const entry=cpBaiduCacheGet(key),now=Date.now();
 return entry&&Number.isFinite(entry.at)&&Number.isFinite(entry.until)&&entry.at<=now&&entry.until>now&&entry.until-entry.at<=ttl?entry.value:null;
}
function cpBaiduRemember(key,value,ttl){if(cpIoReuseEnabled()){const now=Date.now();cpBaiduCacheSet(key,{at:now,until:now+ttl,value});}}
function cpBaiduInvalidateAccount(){if(cpIoReuseEnabled())cpBaiduCacheSet("epoch:"+(cpActiveProfile||cpProfile),String(Date.now())+":"+String(Math.random()));}
// Only a serialized public loadResource owns this response cache.
let cpBaiduUidScope=null;
function cpBaiduUidKey(method,url,headers){
 if(!cpBaiduUidScope||method!=="GET"||!/^https:\/\/mbd\.baidu\.com\/userx\/v1\/info\/get(?:\?|$)/.test(url))return null;
 const normalized=Object.keys(headers||{}).filter(k=>k.toLowerCase()!=="referer").map(k=>[k.toLowerCase(),headers[k]]).sort((a,b)=>a[0]<b[0]?-1:a[0]>b[0]?1:JSON.stringify(a).localeCompare(JSON.stringify(b)));
 return JSON.stringify([url,normalized]);
}
function cpValidBaiduUid(json){
 const uid=json&&json.data&&json.data.fields&&json.data.fields.uid;
 return (typeof uid==="string"&&/^[1-9]\d*$/.test(uid)||typeof uid==="number"&&Number.isSafeInteger(uid)&&uid>0)&&["errno","code","error_code"].every(k=>json[k]==null||Number(json[k])===0)&&(json.status==null||[0,200].includes(Number(json.status)));
}
async function cpReadBaiduIdentity(scope,key,request,profile){
 if(!scope.inflight)scope.inflight=new Map();
 const previous=scope.inflight.get(key)||Promise.resolve();
 const task=previous.catch(error=>{if(error&&["AUTH_FAILED","RATE_LIMITED","ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT"].includes(error.code))throw error;}).then(async()=>{
  cpCheck(profile);if(scope.has(key))return JSON.parse(scope.get(key));
  const cacheKey=cpBaiduCacheKey("uid",key),cached=cpBaiduCached(cacheKey,300000);
  if(cpValidBaiduUid(cached)){scope.set(key,JSON.stringify(cached));return JSON.parse(JSON.stringify(cached));}
  let json;try{json=await request();}catch(error){const status=Number(error&&error.status);if(status===401||status===429){const fatal=cpError(status===401?"AUTH_FAILED":"RATE_LIMITED");fatal.status=status;throw fatal;}throw error;}cpCheck(profile);
  if(cpValidBaiduUid(json)){scope.set(key,JSON.stringify(json));cpBaiduRemember(cacheKey,{errno:0,data:{fields:{uid:json.data.fields.uid}}},300000);}return json;
 });
 scope.inflight.set(key,task);
 try{return await task;}finally{if(scope.inflight.get(key)===task)scope.inflight.delete(key);}
}
httpJson=async function(method,url,data,headers){
 const profile=cpActiveProfile||cpProfile;cpCheck(profile);const fixed=cpNativeRequest(method,url,data);
 const save=method==="POST"&&/^https:\/\/drive-h\.quark\.cn\/1\/clouddrive\/share\/sharepage\/save(?:\?|$)/.test(url);
 const key=save?cpTransferKey({shareId:data.pwd_id,fid:(data.fid_list||[])[0]}):null;
 if(save&&cpOwnedTransfers.has(key)){
  const phase=cpRead(key);if(phase?.state==="succeeded")return {status:200,code:0,data:{save_as:{save_as_top_fids:[phase.fid]}}};
  if(phase?.state!=="preparing"||phase.owner!==cpTransferOwner||phase.until<=Date.now())throw cpError("TRANSFER_UNCERTAIN");
 }
 if(save)cpWrite(key,{state:"uncertain"});
 try{
  const uidKey=cpBaiduUidKey(fixed.method,fixed.url,headers),scope=cpBaiduUidScope;
  const request=()=>cpNativeJson(fixed.method,fixed.url,fixed.data,headers);
  const json=uidKey!==null?await cpReadBaiduIdentity(scope,uidKey,request,profile):await request();cpCheck(profile);
  if(save){const fid=cpSavedFid(json),ok=json&&(json.code==null||Number(json.code)===0)&&(json.status==null||Number(json.status)===200);
   if(fid&&ok)cpWrite(key,{state:"succeeded",fid});else if(ok&&json.data&&json.data.task_id)cpWrite(key,{state:"known",taskId:String(json.data.task_id)});else if(!ok)cpWrite(key,{state:"failed"});}
  if(cpIoReuseEnabled()&&fixed.method==="GET"&&/^https:\/\/drive-h\.quark\.cn\/1\/clouddrive\/task\?/.test(fixed.url)&&!cpSavedFid(json)){
   const taskId=decodeURIComponent((/[?&]task_id=([^&#]*)/.exec(fixed.url)||[])[1]||""),retry=Number((/[?&]retry_index=(\d+)/.exec(fixed.url)||[])[1]||"0");
   if(retry>=5||cpQuarkTaskFailed(json))for(const transferKey of cpOwnedTransfers){const receipt=cpRead(transferKey);if(receipt?.state==="known"&&receipt.taskId===taskId)cpWrite(transferKey,Object.assign({},receipt,{nextPollAt:Date.now()+5000}));}
  }
  cpObserve(fixed.url,json);return json;
 }catch(e){
  if(/^https:\/\/(?:pan|mbd)\.baidu\.com\//.test(fixed.url)&&(e?.code==="AUTH_FAILED"||e?.code==="SHARE_EXPIRED"||Number(e?.status)===401))cpBaiduInvalidateAccount();
  if(e&&["ACCOUNT_CHANGED","ABORTED","OPERATION_TIMEOUT","AUTH_FAILED","RATE_LIMITED","ORIGIN_ACCESS_DENIED","QUALITY_UNAVAILABLE","TRANSFER_UNCERTAIN","UPSTREAM_ERROR","SHARE_EXPIRED"].includes(e.code))throw e;
  const status=Number(e&&e.status)||Number((/HTTP (\d{3})/.exec(String(e&&e.message))||[])[1]);
  if(save&&[400,401,403,404,429].includes(status))cpWrite(key,{state:"failed"});
  const error=cpError(status===401?"AUTH_FAILED":status===429?"RATE_LIMITED":"UPSTREAM_ERROR");error.status=status||undefined;throw error;
 }
};

async function cpOrigin(fid){
 const base="https://drive-pc.quark.cn/1/clouddrive/";
 const flush=await cpReadReuse("quark","session","","flush",()=>httpJson("GET",base+"auth/pc/flush?pr=ucpro&fr=pc&sys=win32&ve=3.1.8",null,quarkHeaders()),json=>!!json&&(json.code==null||Number(json.code)===0)&&(json.status==null||Number(json.status)===200));
 if(!flush||(flush.code!=null&&Number(flush.code)!==0)||(flush.status!=null&&Number(flush.status)!==200))throw cpError("UPSTREAM_ERROR");
 let json;
 try{json=await httpJson("POST",base+"file/download?pr=ucpro&fr=pc&uc_param_str=",{fids:[String(fid)]},quarkHeaders());}
 catch(e){if(e.status===403){e.code="ORIGIN_ACCESS_DENIED";}else if(e.status===400){e.code="QUALITY_UNAVAILABLE";}throw e;}
 if(Number(json&&json.code)===23018)throw cpError("ORIGIN_ACCESS_DENIED");
 if(!json||(json.code!=null&&Number(json.code)!==0)||(json.status!=null&&Number(json.status)!==200))throw cpError("UPSTREAM_ERROR");
 const list=Array.isArray(json.data)?json.data:[];
 const item=list.find(v=>!v.fid||String(v.fid)===String(fid));
 if(!item||!/^https:\/\//i.test(item.download_url||""))throw cpError("QUALITY_UNAVAILABLE");
 return {name:"垮",description:"原画",url:item.download_url,quality:"origin",headers:playHeaders(),customHeaders:playHeaders()};
}
function cpTransferKey(video){return "transfer:"+cpProfile+":"+baiduSha1(JSON.stringify([CACHE_FOLDER,String(video.shareId),String(video.fid)]));}
function cpSavedFid(json){for(const data of [json&&json.data,json&&json.data&&json.data.task_resp&&json.data.task_resp.data]){const ids=data&&data.save_as&&(data.save_as.save_as_top_fids||data.save_as.save_as_select_top_fids);if(Array.isArray(ids)&&ids.length===1&&String(ids[0])!=="0")return String(ids[0]);}return "";}
function cpQuarkTaskFailed(json){return !!json&&((json.code!=null&&Number(json.code)!==0)||(json.status!=null&&Number(json.status)!==200));}
async function cpResumeTransfer(key,taskId,profile){
 const receipt=cpRead(key),now=Date.now();
 if(cpIoReuseEnabled()&&Number.isFinite(receipt?.nextPollAt)&&receipt.nextPollAt>now&&receipt.nextPollAt<=now+5000)throw cpError("TRANSFER_UNCERTAIN");
 for(let retry=0;retry<6;retry++){
  cpCheck(profile);const json=await httpJson("GET","https://drive-h.quark.cn/1/clouddrive/task?pr=ucpro&fr=pc&task_id="+encodeURIComponent(taskId)+"&retry_index="+retry,null,quarkHeaders());
  if(cpIoReuseEnabled()&&cpQuarkTaskFailed(json)){const receipt=cpRead(key);if(receipt?.state==="known"&&receipt.taskId===taskId)cpWrite(key,Object.assign({},receipt,{nextPollAt:Date.now()+5000}));throw cpError("UPSTREAM_ERROR");}
  const fid=cpSavedFid(json);if(fid){cpWrite(key,{state:"succeeded",fid});return fid;}
  if(retry<5&&typeof setTimeout==="function")await new Promise(resolve=>setTimeout(resolve,300));
 }
 if(cpIoReuseEnabled()){const receipt=cpRead(key);if(receipt?.state==="known"&&receipt.taskId===taskId)cpWrite(key,Object.assign({},receipt,{nextPollAt:Date.now()+5000}));}
 throw cpError("TRANSFER_UNCERTAIN");
}
const cpTransferOwner=String(Date.now())+"-"+String(Math.random()),cpOwnedTransfers=new Set();
async function cpWaitTransfer(key,profile){
 for(let i=0;i<75;i++){
  cpCheck(profile);const state=cpRead(key);
  if(state?.state==='succeeded')return state.fid;
  if(!state||state.state==='failed')return null;
  if(state.state==='preparing'&&(!Number.isFinite(state.until)||state.until<=Date.now())){cpWrite(key,{state:'failed'});return null;}
  if(state.state==='known')return cpResumeTransfer(key,state.taskId,profile);
  // 在本次等待期间，POST 已提交但尚未回执时继续等；独立新请求仍拒绝盲目重发。
  if(typeof setTimeout!=='function')throw cpError('TRANSFER_UNCERTAIN');
  await new Promise(resolve=>setTimeout(resolve,200));
 }throw cpError('TRANSFER_UNCERTAIN');
}
saveShareFile=async function(video){
 const profile=cpProfile;cpCheck(profile);const key=cpTransferKey(video);
 if(cpFlights.has(key))return cpFlights.get(key);
 let saved=cpRead(key);
 if(saved?.state==='preparing'){const fid=await cpWaitTransfer(key,profile);if(fid)return fid;saved=cpRead(key);}
 if(saved?.state==='succeeded')return saved.fid;
 if(saved?.state==='uncertain')throw cpError('TRANSFER_UNCERTAIN');
 // 先登记正在准备，再进入原版建目录流程，其他模块等待回执。
 if(saved?.state!=='known'){cpWrite(key,{state:'preparing',owner:cpTransferOwner,until:Date.now()+60000});cpOwnedTransfers.add(key);}
 const task=(async()=>{
  try{
   const fid=saved?.state==='known'?await cpResumeTransfer(key,saved.taskId,profile):await cpSaveNative(video);
   cpCheck(profile);if(!fid){const state=cpRead(key);throw cpError(state&&['known','uncertain'].includes(state.state)?'TRANSFER_UNCERTAIN':'UPSTREAM_ERROR');}
   cpWrite(key,{state:'succeeded',fid:String(fid)});return String(fid);
  }catch(e){const pending=cpRead(key);if(pending?.state==='preparing'&&pending.owner===cpTransferOwner)cpWrite(key,{state:'failed'});throw e;}
 })();cpFlights.set(key,task);
 try{return await task;}finally{cpOwnedTransfers.delete(key);if(cpFlights.get(key)===task)cpFlights.delete(key);}
};
function cpApplyCandidateIssues(issues){
 for(const issue of issues){
  if(["AUTH_FAILED","RATE_LIMITED","TRANSFER_UNCERTAIN"].includes(issue.code))cpBlockedProviders.add(issue.provider);
  if(issue.lastError)cpWrite("last-error",{code:issue.code,provider:issue.provider,at:Date.now()});
 }
}
function cpCandidateIssue(provider,code,lastError,deferredIssues){
 const issue={provider,code:typeof code==="string"?code:"UPSTREAM_ERROR",lastError};
 cpAuthNoticeRemember(issue,arguments[4]);
 if(deferredIssues)deferredIssues.push(issue);if(!deferredIssues||['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(issue.code))cpApplyCandidateIssues([issue]);
}
async function cpResolveCandidate(info,deferredIssues){try{return await cpPlaybackResolveOwned(info,deferredIssues);}catch(e){if(["ACCOUNT_CHANGED","ABORTED","OPERATION_TIMEOUT"].includes(e.code))throw e;cpCandidateIssue(info.provider||"quark",e.code,true,deferredIssues,/* auth-notice-evidence */e);return [];}}

resolvePlaySource=async function(info,deferredIssues){
 const profile=cpProfile;cpCheck(profile);const provider=info.provider||"quark";let items;
 const readVideo=async()=>{ if(provider==="uc")items=await getUcResource(info);
 else if(provider==="baidu")items=await getBaiduResource(info);
 else if(provider==="115")items=await get115Resource(info);
 else if(provider!=="quark")items=await cpNativeResolve(info);
 else items=await cpQuarkPlayback(info,profile);
 return items;};
 const videoTask=readVideo();
 const subtitleTask=['uc','baidu','115'].includes(provider)&&cpSetting('subtitles','auto')!=='off'?cpTrackRead(Promise.resolve().then(()=>cpSubtitles(info,profile,deferredIssues))):null;
 items=await videoTask;
 cpCheck(profile);
 if(cpSetting("subtitles","auto")!=="off"&&items&&items.some(i=>i.url)){
  const subtitles=await (subtitleTask||cpSubtitles(info,profile,deferredIssues));cpCheck(profile);items=items.map(item=>item.url?Object.assign({},item,{subtitles}):item);
 }
 return items||[];
};
function cpSubtitleInfo(name){
 const m=/\.(srt|ass|ssa|vtt)$/i.exec(String(name||""));if(!m)return null;
 let stem=name.slice(0,-m[0].length),language;const suffix=/(?:[._ -]+|\[|（|\()(zh-Hans|zh-Hant|zh-cn|zh-tw|chs|cht|sc|tc|简体|繁体|简中|繁中|zh|en|eng|ja|jpn|forced|sdh|cc)[\]）)]?$/i;
 const stems=[stem];for(;;){const s=suffix.exec(stem);if(!s)break;const tag=s[1].toLowerCase();if(!["forced","sdh","cc"].includes(tag))language=({chs:"zh-Hans",sc:"zh-Hans","zh-cn":"zh-Hans","zh-hans":"zh-Hans",cht:"zh-Hant",tc:"zh-Hant","zh-tw":"zh-Hant","zh-hant":"zh-Hant",简体:"zh-Hans",简中:"zh-Hans",繁体:"zh-Hant",繁中:"zh-Hant",eng:"en",jpn:"ja"})[tag]||tag;stem=stem.slice(0,s.index);stems.push(stem);}
 return {stems,format:m[1].toLowerCase(),language};
}
function cpParent(v){if(v.pdir_fid!=null)return "id:"+String(v.pdir_fid);if(v.cid!=null)return "id:"+String(v.cid);if(v.path)return "path:"+String(v.path).replace(/\/[^/]*$/,"");return null;}
function cpMatchSubtitles(video,files){
 const stem=String(video.file_name||"").replace(/\.(mkv|mp4|avi|mov|m4v|ts|m2ts|webm|flv|wmv)$/i,""),groups=new Map();
 for(const f of files){if(cpParent(video)===null||cpParent(video)!==cpParent(f))continue;const info=cpSubtitleInfo(f.file_name);if(!info||!info.stems.includes(stem))continue;const key=String(f.file_name);if(!groups.has(key))groups.set(key,new Map());groups.get(key).set(String(f.fid),f);}
 return Array.from(groups.values()).filter(g=>g.size===1).map(g=>g.values().next().value).slice(0,3);
}
function cpObserve(url,json){
 if(!/\/share\/(?:sharepage\/detail|list|snap)\?/.test(url))return;
 const list=json&&((json.data&&json.data.list)||json.list);if(!Array.isArray(list))return;
 const query=name=>{const m=new RegExp("[?&]"+name+"=([^&#]*)").exec(url);try{return m?decodeURIComponent(m[1]):null;}catch(_){return null;}};
 const provider=/quark\.cn/.test(url)?"quark":/uc\.cn/.test(url)?"uc":/baidu\.com/.test(url)?"baidu":"115";
 const share=query("pwd_id")||query("shorturl")||query("share_code")||(provider==="baidu"?"id:"+String(json.share_id||json.shareid||query("shareid")||""):"");if(!share||share==="id:")return;
 const parent=query("pdir_fid")??query("cid"),stoken=query("stoken");
 const key="subtitles:"+cpProfile+":"+provider+":"+baiduSha1(share),previous=cpRead(key),files=previous&&previous.expires>Date.now()?previous.files:[];
 for(const item of list){const name=item.file_name||item.server_filename||item.n;if(!cpSubtitleInfo(name))continue;
  const v=Object.assign({},item,{fid:String(item.fid||item.fs_id||item.fsid||""),file_name:name});
  if(provider!=="baidu")v.shareId=share;
  if(parent!=null&&v.pdir_fid==null)v.pdir_fid=parent;if(stoken)v.stoken=stoken;
  if(provider==="baidu"){if(json.uk!=null)v.uk=json.uk;if(json.share_id||json.shareid)v.shareid=json.share_id||json.shareid;}
  const at=files.findIndex(f=>f.fid===v.fid);if(at<0)files.push(v);else files[at]=v;
 }
 if(files.length)cpWrite(key,{expires:Date.now()+86400000,files:files.slice(-128)});
}
async function cpUcSubtitle(info,profile,getter=getUcResource){
 try{return await getter(info);}catch(e){
  if(e&&["AUTH_FAILED","RATE_LIMITED","ABORTED","ACCOUNT_CHANGED","OPERATION_TIMEOUT"].includes(e.code))throw e;
  cpCheck(profile);const v=info.videoInfo||{},record=cpRead("subtitles:"+profile+":uc:"+baiduSha1(String(v.shareId))),fresh=record?.files?.find(f=>String(f.fid)===String(v.fid));
  if(!fresh||!fresh.stoken||!fresh.share_fid_token||(fresh.stoken===v.stoken&&fresh.share_fid_token===v.share_fid_token))throw e;
  return await getter({provider:"uc",videoInfo:Object.assign({},v,fresh)});
 }
}
async function cpSubtitles(info,profile,deferredIssues,policy){
 try{
  const v=info.videoInfo||{},provider=info.provider||"quark",keys=[v.shareId];if(provider==="baidu")keys.push(String(v.shareId||"").replace(/^1/,""),"id:"+v.shareid);
  const files=[];for(const share of keys){const r=cpRead("subtitles:"+profile+":"+provider+":"+baiduSha1(String(share)));if(r&&r.expires>Date.now())files.push(...r.files);}
  const selected=cpMatchSubtitles(v,files),result=[];for(const subtitle of selected){try{cpCheck(profile);const sub=Object.assign({},v,subtitle),sinfo=cpSubtitleInfo(sub.file_name);let resources;
   if(provider==="quark"){const fid=await saveShareFile(sub);resources=[await cpOrigin(fid)];}
   else resources=await cpSubtitleRead(provider,{provider,videoInfo:sub},profile,policy);
   cpCheck(profile);const r=resources&&resources.find(r=>r.url);if(r)result.push({url:r.url,headers:r.headers||r.customHeaders||{},name:sub.file_name,...(sinfo.language?{language:sinfo.language}:{}),isDefault:false});
  }catch(e){cpCheck(profile);if(e&&["AUTH_FAILED","RATE_LIMITED","TRANSFER_UNCERTAIN"].includes(e.code)){(policy?.issue||cpCandidateIssue)(provider,e.code,false,deferredIssues);break;}}}return result;
 }catch(e){cpCheck(profile);return [];}
}
// Keep the native detail cover fields without installing title verification or alias lookups.
let cpLastDetail=null;
const qpDetailEntry=buildDetailItem;
buildDetailItem=async function(info,...args){
 const detail=await qpDetailEntry(info,...args);
 if(detail){
  const poster=detail.posterPath||info.poster||"";detail.posterPath=poster;
  for(const episode of detail.episodeItems||[])Object.assign(episode,{coverUrl:episode.coverUrl||poster,posterPath:episode.posterPath||poster,backdropPath:episode.backdropPath||poster});
 }
 cpLastDetail=detail;return detail;
};
// Read preparation belongs to one serialized public resource operation, never storage.
let cpReadOperation=null;
function cpReadKey(provider,shareId,passcode,label){
 const profile=cpActiveProfile||cpProfile;cpCheck(profile);
 return JSON.stringify([profile,provider,String(shareId||""),String(passcode||""),label]);
}
function cpTrackRead(task,operation=cpReadOperation){
 if(operation&&operation.pending){operation.pending.add(task);task.then(()=>operation.pending.delete(task),()=>operation.pending.delete(task));}
 // Attach a rejection observer even when a caller abandons preparation on an error.
 task.catch(()=>{});return task;
}
async function cpWithReadOperation(work){
 const previous=cpReadOperation,operation=new Map(),owner=cpResourceOwner;operation.pending=new Set();cpReadOperation=operation;
 if(owner?.moduleQuota&&!owner.moduleQuota.requiredReadOperation)owner.moduleQuota.requiredReadOperation=operation;
 try{return await work();}
 finally{if(operation.betaQuarkFolder&&!operation.betaQuarkFolder.used)operation.betaQuarkFolder.token.cancel();if(operation.betaBaiduUid)for(const entry of operation.betaBaiduUid.values())if(!entry.used)entry.token.cancel();if(operation.betaTianyiAuth)for(const entry of operation.betaTianyiAuth.values())if(!entry.used)entry.token.cancel();cpSubtitleRequiredEnd(owner,operation);while(operation.pending.size)await Promise.allSettled(Array.from(operation.pending));cpReadOperation=previous;}
}
function cpReadReuse(provider,shareId,passcode,label,work,valid=value=>!!value){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile,key=cpReadKey(provider,shareId,passcode,label);
 if(!operation)return Promise.resolve().then(()=>{cpCheck(profile);return work();}).then(value=>{cpCheck(profile);return value;});
 let pending=operation.get(key);
 if(!pending){
  pending=Promise.resolve().then(()=>{cpCheck(profile);return work();}).then(value=>{cpCheck(profile);if(!valid(value)&&operation.get(key)===pending)operation.delete(key);return value;}).catch(error=>{if(operation.get(key)===pending)operation.delete(key);throw error;});
  operation.set(key,pending);cpTrackRead(pending,operation);
 }
 return pending.then(value=>{cpCheck(profile);return value;});
}
function cpReadInvalidate(provider,shareId,passcode,label){if(provider==="baidu"&&label==="verify"&&cpIoReuseEnabled())cpBaiduCacheSet(cpBaiduCacheKey("verify",[String(shareId||""),String(passcode||"")]),null);if(cpReadOperation)cpReadOperation.delete(cpReadKey(provider,shareId,passcode,label));}
// A slot encloses just the native URL getter. Subtitle work obtains its own slot afterwards.
const cpReadWaiting=[],cpReadRunning=new Map();let cpReadActive=0,cpSubtitleReadActive=0;
function cpPumpRead(){
 // Remove closed early jobs even when all native slots are occupied.
 for(let i=cpReadWaiting.length-1;i>=0;i--){const job=cpReadWaiting[i];if(job.policy)try{job.policy.check();}catch(error){cpReadWaiting.splice(i,1);job.reject(error);}}
 cpReadWaiting.sort((a,b)=>Number(!!a.policy)-Number(!!b.policy));
 for(let index=0;index<cpReadWaiting.length&&cpReadActive<4;){
  const job=cpReadWaiting[index],count=cpReadRunning.get(job.provider)||0;
  if(count>=(job.provider==="quark"?1:2)||job.policy&&(cpSubtitleReadActive>=1||cpReadActive===0||cpReadActive>=3)){index++;continue;}
  cpReadWaiting.splice(index,1);cpReadActive++;if(job.policy)cpSubtitleReadActive++;cpReadRunning.set(job.provider,count+1);
  Promise.resolve().then(()=>{cpCheck(job.profile);if(job.policy)job.policy.check();return job.work();}).then(value=>{cpCheck(job.profile);return value;}).then(job.resolve,job.reject).finally(()=>{cpReadActive--;if(job.policy)cpSubtitleReadActive--;const left=(cpReadRunning.get(job.provider)||1)-1;if(left)cpReadRunning.set(job.provider,left);else cpReadRunning.delete(job.provider);cpPumpRead();});
 }
}
function cpScheduleRead(provider,work,policy){
 const profile=cpActiveProfile||cpProfile;
 return cpTrackRead(new Promise((resolve,reject)=>{cpReadWaiting.push({provider,work,profile,resolve,reject,policy});cpPumpRead();}));
}
const cpSessionStoken=getStoken,cpSessionUcToken=getUcToken,cpSessionBaiduVerify=baiduVerify,cpSessionCreateFolder=createFolder;
getStoken=function(shareId,passcode){return cpReadReuse("quark",shareId,passcode,"token",()=>cpSessionStoken(shareId,passcode));};
getUcToken=function(shareId,passcode){return cpReadReuse("uc",shareId,passcode,"token",()=>cpSessionUcToken(shareId,passcode));};
baiduVerify=function(share){return cpReadReuse("baidu",share.shareId,share.passcode,"verify",async()=>{
 const key=cpBaiduCacheKey("verify",[String(share.shareId||""),String(share.passcode||"")]),cached=cpBaiduCached(key,60000);
 if(typeof cached==="string"&&cached)return cached;
 try{const value=await cpSessionBaiduVerify(share);cpCheck(cpActiveProfile||cpProfile);if(typeof value==="string"&&value)cpBaiduRemember(key,value,60000);return value;}
 catch(error){if(error?.code==="AUTH_FAILED"||error?.code==="SHARE_EXPIRED")cpBaiduInvalidateAccount();throw error;}
 });};
createFolder=function(name,parent="0"){return cpReadReuse("quark","folder:"+parent,"",name,()=>cpSessionCreateFolder(name,parent),fid=>!!fid&&String(fid)!=="0");};
const cpSessionUcResource=getUcResource,cpSessionBaiduResource=getBaiduResource,cpSession115Resource=get115Resource;
getUcResource=function(info){return cpScheduleRead("uc",()=>cpSessionUcResource(info));};
getBaiduResource=function(info){return cpScheduleRead("baidu",()=>cpSessionBaiduResource(info));};
get115Resource=function(info){return cpScheduleRead("115",()=>cpSession115Resource(info));};
// A known file may refresh only its known parent. Read all parent pages but never recurse.
async function cpRefreshShareFile(provider,video){
 const parent=video.pdir_fid;
 if(!video.shareId||!video.fid||parent==null)throw cpError("FILE_NOT_FOUND");
 const list=await cpReadReuse(provider,video.shareId,video.passcode,"refresh-parent:"+String(parent),async()=>{
  const stoken=await cpReadReuse(provider,video.shareId,video.passcode,"refresh-token",()=>{
   cpReadInvalidate(provider,video.shareId,video.passcode,"token");
   return provider==="uc"?getUcToken(video.shareId,video.passcode):getStoken(video.shareId,video.passcode);
  });
  const files=[],seen=new Set();let received=0;
  for(let page=1;;page++){
   cpCoveragePage(cpCoverageFor(provider,video));
   const params={pr:provider==="uc"?"UCBrowser":"ucpro",fr:"pc",pwd_id:video.shareId,stoken,pdir_fid:parent,force:0,_page:page,_size:provider==="uc"?100:200,_fetch_total:1,_sort:"file_type:asc,file_name:asc"};
   let data,json;
   if(provider==="uc")data=await cpQueueCatalogRead(provider,()=>ucApi("share/sharepage/detail?"+toQuery(params)));
   else{json=await cpQueueCatalogRead(provider,()=>httpJson("GET","https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?"+toQuery(Object.assign({uc_param_str:"",ver:"2"},params)),null,quarkHeaders()));
    if(!json||(json.status!=null&&Number(json.status)!==200)||(json.code!=null&&Number(json.code)!==0))throw cpError("UPSTREAM_ERROR");data=json.data;}
   if(!data||!Array.isArray(data.list))throw cpError("UPSTREAM_ERROR");
   received+=data.list.length;
   files.push(...data.list.map(item=>Object.assign({},item,{shareId:video.shareId,passcode:video.passcode,stoken,pdir_fid:item.pdir_fid==null?parent:item.pdir_fid})));
   if(cpCatalogPageEnd(data.list,cpCatalogTotal(data,json),received,seen,item=>item.fid))break;
  }
  return files;
 });
 const selected=list.find(item=>!item.dir&&String(item.fid)===String(video.fid));
 if(!selected)throw cpError("FILE_NOT_FOUND");return Object.assign({},video,selected);
}

function cpRefreshBaiduVerify(video,rejected){return cpReadReuse("baidu",video.shareId,video.passcode,"verify-refresh:"+baiduSha1(String(rejected)),()=>{cpReadInvalidate("baidu",video.shareId,video.passcode,"verify");return baiduVerify(video);});}
async function cpQuarkPlayback(info,profile){
 if(!quanpanProviderEnabled("quark"))return [];let video=info.videoInfo||{};
 for(let attempt=0;attempt<2;attempt++){
  let fid;
  try{
   fid=await saveShareFile(video);const quality=cpSetting("quality","auto");let origin;
   if(quality!=="transcode")try{origin=await cpOrigin(fid);}catch(e){if(quality==="origin"||!["ORIGIN_ACCESS_DENIED","QUALITY_UNAVAILABLE"].includes(e.code))throw e;}
   if(origin)return [origin];
   const choices=await getPlayUrl(fid),best=choices.find(v=>v.resolution==="4k")||choices.find(v=>v.resolution==="2k")||choices[0];return best?[{name:"垮",description:"转码",url:best.url,resolution:({"4k":"2160p","2k":"1440p",super:"1080p",high:"720p",normal:"480p",low:"360p"})[best.resolution]||"",quality:"transcode",headers:playHeaders(),customHeaders:playHeaders()}]:[];
  }catch(e){
   cpCheck(profile);if(!fid||attempt||(e.code!=="FILE_NOT_FOUND"&&e.status!==404))throw e;
   cpWrite(cpTransferKey(video),{state:"failed"});
   video=await cpRefreshShareFile("quark",video);
  }
 }
 return [];
}

// The shared presenter predates named 123 lines; keep this new module's five-provider labels explicit.
const qpFormatResource=formatPlaybackResource;
formatPlaybackResource=function(resource,source,params){
 const result=qpFormatResource(resource,source,params);
 if(source.provider==="123")result.name=result.name.replace(" · 网盘", " · 123");
 result.packageSizeBytes=Number(source.packageSizeBytes||0);
 if(result.packageSizeBytes)result.description=[result.description,(source.packageSizeScope==='directory'?'目标目录 ':'分享包 ')+(result.packageSizeBytes/1073741824).toFixed(2)+" GB"].filter(Boolean).join(" · ");
 return result;
};

// Transfer mutations remain serialized, including subtitle saves and retries.
// Once a saved fid is available, read-only origin/transcode requests can overlap.
const qpSaveShareFile=saveShareFile;let qpMutationQueue=Promise.resolve();
saveShareFile=function(video){
 const profile=cpActiveProfile||cpProfile;
 const task=qpMutationQueue.then(()=>{cpCheck(profile);return qpSaveShareFile(video);});
 qpMutationQueue=task.catch(()=>{});return task;
};

// Reuse the Quanpan page reader for a known parent, including short pages without totals.
cpRefreshShareFile=async function(provider,video){
 const parent=video.pdir_fid;
 if(!video.shareId||!video.fid||parent==null)throw cpError("FILE_NOT_FOUND");
 const list=await cpReadReuse(provider,video.shareId,video.passcode,"refresh-parent:"+String(parent),async()=>{
  const stoken=await cpReadReuse(provider,video.shareId,video.passcode,"refresh-token",()=>{
   cpReadInvalidate(provider,video.shareId,video.passcode,"token");
   return provider==="uc"?getUcToken(video.shareId,video.passcode):getStoken(video.shareId,video.passcode);
  });
  const catalog=provider==="uc"?await getUcVideos({shareId:video.shareId,passcode:video.passcode},video):await getShareDetail(video.shareId,stoken,video);
  return catalog.list;
 });
 const selected=list.find(item=>String(item.fid)===String(video.fid));
 if(!selected)throw cpError("FILE_NOT_FOUND");return Object.assign({},video,selected);
};
// Same policy as the existing film modules: cache file indexes, never playback URLs.
const QP_INDEX_PREFIX="catpaw.seedhub.pan.selected-index.",QP_INDEX_KEYS=QP_INDEX_PREFIX+"keys";
function qpSeriesIndexKey(params,linkInfo){
 const title=[params.seriesName,params.title,params.name,params.keyword,params.originalName,params.originalTitle,params.original_name,params.original_title].map(qpCleanQuery).find(Boolean)||"";
 return QP_INDEX_PREFIX+'search-v2-matching-v1:'+baiduSha1(JSON.stringify([getSite(params),cpMatchingDiscoveryIdentity(params),params.type||"tv",Number(params.season||1),title,params.tmdbId||params.tmdbID||"",params.imdbId||"",params.year||params.releaseYear||(params.type==="movie"?params.airDate:"")||"",linkInfo?.action==="detail"?linkInfo:params.cpSiteIdentity?{siteIdentity:params.cpSiteIdentity}:null,qpCandidateLimit(),cpRelevanceTitles(params),cpMovieCacheIdentity(params)]));
}
function qpSeriesIndexRead(key){
 let current;try{current=JSON.parse(safeStorageGet(key)||'null');}catch(_){}
 if(!(current?.expires>Date.now())){
  const previous=key.replace(QP_INDEX_PREFIX+'coverage-v1:',QP_INDEX_PREFIX).replace(QP_INDEX_PREFIX+'target-directory-v1:',QP_INDEX_PREFIX);
  if(previous!==key){const legacy=qpSeriesIndexRead(previous);if(legacy.candidates.length&&!Object.values(legacy.entries).some(entry=>entry.catalog?.cpTargetDirectory)){legacy.expires=Math.min(legacy.expires,Date.now()+14400000);qpSeriesIndexWrite(previous,legacy,rexCacheGeneration);return legacy;}}
 }
 try{const value=JSON.parse(safeStorageGet(key)||"null");
  if(value?.schemaVersion===4&&value.expires>Date.now()&&Array.isArray(value.candidates)&&value.candidates.every(c=>Array.isArray(c.shares)&&c.shares.length===1&&c.shares[0]?.provider&&c.shares[0]?.shareId)&&value.entries&&typeof value.entries==="object"&&Object.values(value.entries).every(entry=>Array.isArray(entry.catalog?.list)))return value;
 }catch(_){}
 return {candidates:[],entries:{}};
}
function qpSeriesIndexWrite(key,value,generation){
 cpCheck(cpActiveProfile||cpProfile);
 if(generation!==rexCacheGeneration)return;
 if(!value.candidates.length||!Object.keys(value.entries).length){safeStorageSet(key,"");return;}
 const entries=rexClone(value.entries);
 for(const entry of Object.values(entries))cpTargetStripUrls(entry.catalog);
 // Cache hits (including missing episodes) cannot postpone seeing future updates forever.
 const expires=Math.min(Number(value.expires)||Infinity,Date.now()+86400000);
 safeStorageSet(key,JSON.stringify({schemaVersion:4,expires,candidates:value.candidates,entries,cpMediaSchema:1,cpQuotaRows:value.cpQuotaRows}));
 let keys=[];try{keys=JSON.parse(safeStorageGet(QP_INDEX_KEYS)||"[]");}catch(_){}
 keys=keys.filter(item=>item!==key);keys.push(key);
 while(keys.length>16)safeStorageSet(keys.shift(),"");
 safeStorageSet(QP_INDEX_KEYS,JSON.stringify(keys));
}
function qpClearSeriesIndexes(){
 let keys=[];try{keys=JSON.parse(safeStorageGet(QP_INDEX_KEYS)||"[]");}catch(_){}
 keys.forEach(key=>safeStorageSet(key,""));safeStorageSet(QP_INDEX_KEYS,"[]");
}
// One serialized resource owner covers matching, native reads and all cleanup.
let qpOperation=null,qpOperationQueue=Promise.resolve();
function qpCheckOwner(owner){
 if(!owner)return;
 if(owner.signal?.aborted)throw cpError("ABORTED");
 if(owner.profile&&owner.profile!==baiduSha1(JSON.stringify(cpAccounts())))throw cpError("ACCOUNT_CHANGED");
}
const qpCheckNative=cpCheck;
cpCheck=function(profile){qpCheckOwner(qpOperation);return qpCheckNative(profile);};
const qpPublicDetail=loadDetail;
loadDetail=async function(...args){bindForwardParams({});return await qpPublicDetail.apply(this,args);};
const qpResourceEntry=loadResource;
loadResource=function(params={}){
 const owner={signal:params.signal||null,profile:null,tokenFailures:new Map(),catalogReads:new Set()};
 const task=qpOperationQueue.then(async()=>{
  const oldOwner=qpOperation,oldSignal=cpSignal,oldActive=cpActiveProfile,oldUid=cpBaiduUidScope;
  qpOperation=owner;
  try{
   bindForwardParams(params);owner.profile=cpProfile;cpActiveProfile=cpProfile;cpSignal=owner.signal;cpBaiduUidScope=new Map();
   cpWrite("last-error",null);cpBlockedProviders.clear();qpCheckOwner(owner);
   return await cpWithReadOperation(async()=>{
    cpCheck(owner.profile);const rows=await qpResourceEntry(params);cpCheck(owner.profile);
    const issue=cpRead("last-error");if(issue&&Array.isArray(rows)&&!rows.some(row=>row.url))throw cpError(issue.code);
    return rows;
   });
  }finally{qpOperation=oldOwner;cpSignal=oldSignal;cpActiveProfile=oldActive;cpBaiduUidScope=oldUid;}
 });
 qpOperationQueue=task.catch(()=>{});return task;
};
// Shared new-drive protocols. Local crypto and wire shapes adapted from the supplied reference.
// No catalog writes, previews, deletion, Node APIs, or remotely loaded code.
function cpNPUtf8Encode(text) {
  const encoded = encodeURIComponent(text),
    bytes = [];
  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === "%") {
      bytes.push(parseInt(encoded.slice(i + 1, i + 3), 16));
      i += 2;
    } else bytes.push(encoded.charCodeAt(i));
  }
  return new Uint8Array(bytes);
}
function cpNPUtf8Decode(bytes) {
  return decodeURIComponent(Array.from(bytes, (b) => "%" + b.toString(16).padStart(2, "0")).join(""));
}
const cpNPP115_BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function cpNPBase64Encode(bytes) {
  let text = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);
    text +=
      cpNPP115_BASE64[(n >>> 18) & 63] +
      cpNPP115_BASE64[(n >>> 12) & 63] +
      (i + 1 < bytes.length ? cpNPP115_BASE64[(n >>> 6) & 63] : "=") +
      (i + 2 < bytes.length ? cpNPP115_BASE64[n & 63] : "=");
  }
  return text;
}
function cpNPBase64Decode(text) {
  const clean = String(text).replace(/\s/g, "");
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(clean) || clean.length % 4) throw new Error("伍加密响应Base64无效");
  const bytes = [];
  for (let i = 0; i < clean.length; i += 4) {
    const n =
      (cpNPP115_BASE64.indexOf(clean[i]) << 18) |
      (cpNPP115_BASE64.indexOf(clean[i + 1]) << 12) |
      ((cpNPP115_BASE64.indexOf(clean[i + 2]) & 63) << 6) |
      (cpNPP115_BASE64.indexOf(clean[i + 3]) & 63);
    bytes.push((n >>> 16) & 255);
    if (clean[i + 2] !== "=") bytes.push((n >>> 8) & 255);
    if (clean[i + 3] !== "=") bytes.push(n & 255);
  }
  return new Uint8Array(bytes);
}


function cpNPPanJwt(token) {
  try {
    let payload = String(token || "")
      .replace(/^Bearer\s+/i, "")
      .split(".")[1]
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    while (payload.length % 4) payload += "=";
    return JSON.parse(cpNPUtf8Decode(cpNPBase64Decode(payload)));
  } catch (_) {
    return {};
  }
}

function cpNPPanTokenExpired(auth) {
  const expires = Number(cpNPPanJwt(auth.accessToken).exp || 0) * 1000;
  return !auth.accessToken || (expires > 0 && expires <= Date.now() + 60000);
}


function cpNPMd5(text) {
  const bytes = Array.from(cpNPUtf8Encode(String(text)));
  const length = bytes.length;
  bytes.push(128);
  while (bytes.length % 64 !== 56) bytes.push(0);
  for (let i = 0; i < 8; i++) bytes.push(Math.floor((length * 8) / Math.pow(256, i)) & 255);
  const shifts = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  let h0 = 0x67452301,
    h1 = 0xefcdab89,
    h2 = 0x98badcfe,
    h3 = 0x10325476;
  for (let offset = 0; offset < bytes.length; offset += 64) {
    const words = [];
    for (let i = 0; i < 16; i++) {
      const pos = offset + i * 4;
      words.push(bytes[pos] | (bytes[pos + 1] << 8) | (bytes[pos + 2] << 16) | (bytes[pos + 3] << 24));
    }
    let a = h0,
      b = h1,
      c = h2,
      d = h3;
    for (let i = 0; i < 64; i++) {
      let f, g;
      if (i < 16) {
        f = (b & c) | (~b & d);
        g = i;
      } else if (i < 32) {
        f = (d & b) | (~d & c);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = (3 * i + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * i) % 16;
      }
      const sum = (a + f + Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) + words[g]) | 0;
      const shift = shifts[Math.floor(i / 16) * 4 + (i % 4)];
      const previousD = d;
      d = c;
      c = b;
      b = (b + ((sum << shift) | (sum >>> (32 - shift)))) | 0;
      a = previousD;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
  }
  return [h0, h1, h2, h3]
    .map((word) => [0, 8, 16, 24].map((shift) => ((word >>> shift) & 255).toString(16).padStart(2, "0")).join(""))
    .join("");
}

function cpNPGfMultiply(a, b) {
  let value = 0;
  while (b) {
    if (b & 1) value ^= a;
    a = ((a << 1) ^ (a & 128 ? 0x11b : 0)) & 255;
    b >>= 1;
  }
  return value;
}

const cpNPAesTables = (() => {
  const sbox = [],
    inverse = [];
  for (let x = 0; x < 256; x++) {
    let inv = 0;
    if (x) {
      inv = 1;
      for (let i = 0; i < 254; i++) inv = cpNPGfMultiply(inv, x);
    }
    let value = inv ^ 0x63;
    for (let shift = 1; shift <= 4; shift++) value ^= ((inv << shift) | (inv >>> (8 - shift))) & 255;
    sbox[x] = value;
    inverse[value] = x;
  }
  const key = Array.from(cpNPUtf8Encode("PVGDwmcvfs1uV3d1"));
  let rcon = 1;
  while (key.length < 176) {
    let word = key.slice(-4);
    if (key.length % 16 === 0) {
      word = [sbox[word[1]] ^ rcon, sbox[word[2]], sbox[word[3]], sbox[word[0]]];
      rcon = cpNPGfMultiply(rcon, 2);
    }
    for (const value of word) key.push(key[key.length - 16] ^ value);
  }
  return { sbox, inverse, key };
})();

function cpNPAesBlock(block, decrypt) {
  let state = Array.from(block);
  const { sbox, inverse, key } = cpNPAesTables;
  const addKey = (round) => {
    state = state.map((value, i) => value ^ key[round * 16 + i]);
  };
  const sub = (table) => {
    state = state.map((value) => table[value]);
  };
  const shiftRows = (reverse) => {
    const before = state.slice();
    for (let row = 0; row < 4; row++)
      for (let col = 0; col < 4; col++) {
        state[row + col * 4] = before[row + ((col + (reverse ? 4 - row : row)) % 4) * 4];
      }
  };
  const mixColumns = (reverse) => {
    const factors = reverse ? [14, 11, 13, 9] : [2, 3, 1, 1];
    const before = state.slice();
    for (let col = 0; col < 4; col++)
      for (let row = 0; row < 4; row++) {
        let value = 0;
        for (let i = 0; i < 4; i++) value ^= cpNPGfMultiply(before[col * 4 + i], factors[(i - row + 4) % 4]);
        state[col * 4 + row] = value;
      }
  };
  addKey(decrypt ? 10 : 0);
  for (let round = 1; round < 10; round++) {
    if (decrypt) {
      shiftRows(true);
      sub(inverse);
      addKey(10 - round);
      mixColumns(true);
    } else {
      sub(sbox);
      shiftRows(false);
      mixColumns(false);
      addKey(round);
    }
  }
  if (decrypt) {
    shiftRows(true);
    sub(inverse);
    addKey(0);
  } else {
    sub(sbox);
    shiftRows(false);
    addKey(10);
  }
  return state;
}

function cpNPYidongEncrypt(value) {
  const bytes = Array.from(cpNPUtf8Encode(typeof value === "string" ? value : JSON.stringify(value)));
  const padding = 16 - (bytes.length % 16);
  for (let i = 0; i < padding; i++) bytes.push(padding);
  const iv = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));
  const output = iv.slice();
  let previous = iv;
  for (let offset = 0; offset < bytes.length; offset += 16) {
    previous = cpNPAesBlock(
      bytes.slice(offset, offset + 16).map((value, i) => value ^ previous[i]),
      false
    );
    output.push(...previous);
  }
  return cpNPBase64Encode(output);
}

function cpNPYidongDecrypt(value) {
  const bytes = Array.from(cpNPBase64Decode(String(value)));
  if (bytes.length < 32 || bytes.length % 16) throw new Error("移动网盘返回的加密数据无效");
  const output = [];
  for (let offset = 16; offset < bytes.length; offset += 16) {
    output.push(...cpNPAesBlock(bytes.slice(offset, offset + 16), true).map((byte, i) => byte ^ bytes[offset - 16 + i]));
  }
  const padding = output[output.length - 1];
  if (padding < 1 || padding > 16 || output.slice(-padding).some((byte) => byte !== padding))
    throw new Error("移动网盘数据解密失败");
  return cpNPUtf8Decode(output.slice(0, -padding));
}


const cpNPXUNLEI_APP_UA =
  "ANDROID-com.xunlei.downloadprovider/8.31.0.9726 netWorkType/5G appid/40 deviceName/Xiaomi_M2004j7ac deviceModel/M2004J7AC OSVersion/12 protocolVersion/301 platformVersion/10 sdkVersion/512000 Oauth2Client/0.9 (Linux 4_14_186-perf-gddfs8vbb238b) (JAVA 0)";
const cpNPXUNLEI_APP_SIGN = [
  "9uJNVj/wLmdwKrJaVj/omlQ",
  "Oz64Lp0GigmChHMf/6TNfxx7O9PyopcczMsnf",
  "Eb+L7Ce+Ej48u",
  "jKY0",
  "ASr0zCl6v8W4aidjPK5KHd1Lq3t+vBFf41dqv5+fnOd",
  "wQlozdg6r1qxh0eRmt3QgNXOvSZO6q/GXK",
  "gmirk+ciAvIgA/cxUUCema47jr/YToixTT+Q6O",
  "5IiCoM9B1/788ntB",
  "P07JH0h6qoM6TSUAK2aL9T5s2QBVeY9JWvalf",
  "+oK0AN"
];
const cpNPXUNLEI_SHARE_SIGN = [
  "QG3/GhopO+5+T",
  "1Sv94+ANND3lDmmw",
  "q2eTxRva8b3B5d",
  "m2",
  "VIc5CZRBMU71ENfbOh0+RgWIuzLy",
  "66M8Wpw6nkBEekOtL6e",
  "N0rucK7S8W/vrRkfPto5urIJJS8dVY0S",
  "oLAR7pdUVUAp9xcuHWzrU057aUhdCJrt",
  "6lxcykBSsfI//GR9",
  "r50cz+1I4gbU/fk8",
  "tdwzrTc4SNFC4marNGTgf05flC85A",
  "qvNVUDFjfsOMqvdi2gB8gCvtaJAIqxXs"
];

function cpNPXunleiContext(auth,share){
 const jwt=cpNPPanJwt(auth.accessToken),audience=Array.isArray(jwt.aud)?jwt.aud[0]:jwt.aud;
 const clientId=auth.clientId||audience;
 const browser=!share&&clientId==='Xqp0kJBXWhwaTpB6';
 const web=browser||clientId==='XW-G4v1H72tgfJym'||auth.clientKind==='web';
 const device=String(auth.deviceId||jwt.device_id||'').replace(/^wdi10\.([0-9a-f]{32})[0-9a-f]{32}$/i,'$1');
 return {clientId:share||browser?'Xqp0kJBXWhwaTpB6':web?'XW-G4v1H72tgfJym':'Xp6vsxz_7IYVw2BB',deviceId:share?'1bf91caf40093318e8040916eb7ad16a':device||(web?'652c6bb3cacdb4b80e852dfc3cb3cca4':cpNPMd5('CatVodOpenXunlei')),version:browser?'1.93.14':share?'1.92.9':web?'3.1.5':'8.31.0.9726',packageName:share||browser?'pan.xunlei.com':web?'ThunderPanPlugin':'com.xunlei.downloadprovider',userAgent:share||web?UA:cpNPXUNLEI_APP_UA,userId:auth.userId||auth.user_id||jwt.sub||'',web,browser};
}

function cpNPGuangyaHeaders(auth) {
  const headers = {
    "User-Agent": UA,
    Accept: "application/json, text/plain, */*",
    Origin: "https://www.guangyapan.com",
    Referer: "https://www.guangyapan.com/",
    Did: (auth && auth.deviceId) || "0123456789abcdef0123456789abcdef",
    Dt: "4"
  };
  if (auth && auth.accessToken) headers.Authorization = "Bearer " + auth.accessToken;
  return headers;
}


function cpNPXunleiOriginalUrl(file = {}) {
  const original = (file.medias || []).find(
    (media) =>
      media.is_visible !== false &&
      media.link &&
      /^https?:\/\//i.test(media.link.url || "") &&
      (media.is_origin === true ||
        media.is_origin === 1 ||
        /^(?:原画|原始|original|source)$/i.test(String(media.resolution_name || media.media_name || "").trim()))
  );
  if (original) return original.link.url;
  return (
    (file.links && file.links["application/octet-stream"] && file.links["application/octet-stream"].url) ||
    file.web_content_link ||
    ""
  );
}


function cpNPGuangyaDownloadUrl(data) {
  const url = data && (data.signedURL || data.signedUrl || data.downloadUrl || data.url);
  if (typeof url === "string" && /^https?:\/\//i.test(url)) return url;
  for (const key of [
    "downloadInfo",
    "fileInfo",
    "resource",
    "normal",
    "data",
    "list",
    "urls",
    "downloadUrls",
    "resources"
  ]) {
    const nested = data && data[key];
    if (!nested || typeof nested !== "object") continue;
    for (const item of Array.isArray(nested) ? nested : [nested]) {
      const found =
        typeof item === "string" ? item : item && (item.signedURL || item.signedUrl || item.downloadUrl || item.url);
      if (/^https?:\/\//i.test(found || "")) return found;
    }
  }
  return "";
}


const cpNPYIDONG_API = "https://share-kd-njs.yun.139.com/yun-share/richlifeApp/devapp/IOutLink/";

function cpNPYidongHeaders(payload, signed) {
  const headers = {
    "User-Agent": UA,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    Referer: "https://yun.139.com/shareweb/",
    "hcy-cool-flag": "1",
    "x-deviceinfo": "||3|12.27.0|chrome|131.0.0.0|5c7c68368f048245e1ce47f1c0f8f2d0||windows 10|1536X695|zh-CN|||"
  };
  if (signed) {
    const now = new Date(),
      pad = (value) => String(value).padStart(2, "0");
    const time =
      now.getFullYear() +
      "-" +
      pad(now.getMonth() + 1) +
      "-" +
      pad(now.getDate()) +
      " " +
      pad(now.getHours()) +
      ":" +
      pad(now.getMinutes()) +
      ":" +
      pad(now.getSeconds());
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const nonce = Array.from({ length: 16 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
    const body = encodeURIComponent(JSON.stringify(payload)).split("").sort().join("");
    const sign = cpNPMd5(cpNPMd5(cpNPBase64Encode(cpNPUtf8Encode(body))) + cpNPMd5(time + ":" + nonce)).toUpperCase();
    Object.assign(headers, {
      "X-Requested-With": "XMLHttpRequest",
      "CMS-DEVICE": "default",
      "x-yun-channel-source": "10230043",
      "x-huawei-channelSrc": "10230043",
      "x-yun-svc-type": "1",
      "x-SvcType": "1",
      "x-m4c-caller": "PC",
      "x-m4c-src": "10002",
      "x-inner-ntwk": "2",
      "mcloud-route": "001",
      "mcloud-version": "12.27.0",
      "mcloud-channel": "1000101",
      "mcloud-client": "1001000021",
      "mcloud-sign": time + "," + nonce + "," + sign,
      "INNER-HCY-ROUTER-HTTPS": "1",
      "x-yun-module-type": "100",
      "x-yun-api-version": "v1",
      "x-yun-app-channel": "10230043",
      "x-yun-client-info": "||9|12.27.0|chrome|131.0.0.0|visitor||windows 10||zh-CN|||Y2hyb21l||"
    });
  }
  return headers;
}


function cpNPYidongDownloadUrl(data) {
  if (typeof data === "string" && /^https?:\/\//i.test(data)) return data;
  const ext = (data && data.extInfo) || {};
  const item = (Array.isArray(ext.item) ? ext.item : []).find((item) => item.key === "cdnDownloadUrl" && item.value);
  return String(
    ext.cdnDownloadUrl ||
      (item && item.value) ||
      (data && (data.downloadURL || data.downloadUrl || data.redrUrl || data.url)) ||
      ""
  ).trim();
}


function cpNPGuard(provider, profile) {
 cpCheck(profile);
 const active = cpNewPanAssert(provider);
 cpCheck(profile);
 if (active !== profile) throw cpError('ACCOUNT_CHANGED');
}
function cpNPReadAuth(provider) {
 const raw=String(cpNewPanAuthValue(provider)||'').trim();if(!raw)throw cpError('AUTH_FAILED');
 let auth;try{auth=raw.startsWith('{')?JSON.parse(raw):{accessToken:raw};}catch(_){throw cpError('AUTH_FAILED');}
 if(!auth||typeof auth!=='object'||Array.isArray(auth))throw cpError('AUTH_FAILED');
 if(provider==='xunlei'){
  const session=auth.appSession||auth.webSession;
  if(session&&(typeof session!=='object'||Array.isArray(session)))throw cpError('AUTH_FAILED');
  if(session){const kind=auth.appSession?'app':'web';auth=Object.assign({},auth,session);if(!auth.clientKind)auth.clientKind=kind;}
  delete auth.appSession;delete auth.webSession;
 }
 const headers=auth.headers||{};
 auth.accessToken=String(auth.accessToken||auth.access_token||auth.auth||auth.authorization||headers.Authorization||headers.authorization||'').replace(/^Bearer\s+/i,'').trim();
 auth.refreshToken=String(auth.refreshToken||auth.refresh_token||'').trim();auth.deviceId=String(auth.deviceId||auth.device_id||'').trim();
 if(!auth.accessToken&&!auth.refreshToken)throw cpError('AUTH_FAILED');
 // A website Cookie is not a bearer token. There is no Cookie bootstrap path.
 if(provider==='xunlei'&&auth.accessToken&&!/^[A-Za-z0-9._~+/-]+=*$/.test(auth.accessToken))throw cpError('AUTH_FAILED');
 return auth;
}
function cpNPFailure(status, code, message) {
 const n=Number(code),text=String(message||'');
 const kind=status===429||n===429||/rate.?limit|too many|频繁|限流/i.test(text)?'RATE_LIMITED':
 [401,403].includes(status)||[10,16,117,401,403,4121,4122].includes(n)||/unauthori[sz]ed|invalid.?token|token.?expired|登录失效|登录过期|鉴权失败|captcha_invalid|captcha_required/i.test(text)?'AUTH_FAILED':'UPSTREAM_ERROR';
 const error=cpError(kind);error.status=status;error.apiCode=code;return error;
}
async function cpNPHttp(provider,profile,method,url,body,headers,beforeDispatch,readToken) {
 cpNPGuard(provider,profile);
 const work=()=>{cpNPGuard(provider,profile);const options={timeout:15000,headers:Object.assign({'User-Agent':UA,'Content-Type':'application/json'},headers||{})};if(readToken)options.cpB6Token=readToken;const claim=()=>{cpNPGuard(provider,profile);if(beforeDispatch)beforeDispatch();};if(method==='GET'&&typeof cpHttpGet==='function')return cpHttpGet(url,options,claim);if(method!=='GET'&&typeof cpHttpPost==='function')return cpHttpPost(url,body,options,claim);claim();return method==='GET'?Widget.http.get(url,options):Widget.http.post(url,body,options);};
 let response;
 try {response=await (typeof cpQueueCatalogRead==='function'?cpQueueCatalogRead(provider,work):work());}
 catch(error){if(readToken?.cancelled)throw cpB6Unused();cpNPGuard(provider,profile);if(error&&['ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT','AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(error.code))throw error;/* native-error-evidence */throw cpNPNativeFailure(error);}
 if(readToken?.cancelled)throw cpB6Unused();
 cpNPGuard(provider,profile);
 const status=Number(response&&(response.status||response.statusCode)||200);
 if(status>=400){const details=cpNPErrorDetails({status,data:response?.data});throw cpNPFailure(details.status,details.code,details.message);}
 return response&&response.data;
}
async function cpNPJson(provider,profile,method,url,body,headers,beforeDispatch,readToken) {
 let data=await cpNPHttp(provider,profile,method,url,method==='GET'?null:JSON.stringify(body||{}),headers,beforeDispatch,readToken);
 try {if(typeof data==='string')data=JSON.parse(data);}catch(_){throw cpError('UPSTREAM_ERROR');}
 const code=data&&(data.error_code??data.errorCode??data.code);
 if(!data||typeof data!=='object'||data.error||(code!==undefined&&![0,200].includes(Number(code))))throw cpNPFailure(200,code,data&&(data.error_description||data.msg||data.message||data.error));
 return data;
}
function cpNPQuery(value){return Object.keys(value).map(key=>encodeURIComponent(key)+'='+encodeURIComponent(String(value[key]))).join('&');}
function cpNPVideo(name){return /\.(?:mkv|mp4|m4v|avi|mov|wmv|flv|ts|m2ts|webm|mpg|mpeg|rmvb|iso)$/i.test(String(name||''));}
function cpNPItem(share,fid,name,size,parentPath,extra){return Object.assign({provider:share.provider,fid:String(fid),file_name:String(name||''),size:Number(size||0),shareId:share.shareId,passcode:share.passcode||'',parentPath},extra||{});}
function cpNPResource(provider,url,headers){if(!/^https?:\/\//i.test(String(url||'')))throw cpError('QUALITY_UNAVAILABLE');return [{name:{xunlei:'迅雷',guangya:'光鸭',yidong:'移动云盘',tianyi:'天翼云盘'}[provider],description:'原画',url,headers,customHeaders:Object.assign({},headers)}];}
function cpNPWrite(profile,provider,key,value){cpNPGuard(provider,profile);cpWrite(key,value);cpNPGuard(provider,profile);}
function cpNPKey(profile,provider,parts){cpNPGuard(provider,profile);return 'transfer:'+provider+':'+cpNewPanIdentity(provider)+':'+cpNPMd5(JSON.stringify([CACHE_FOLDER,...parts]));}
function cpNPLimit(count){if(count>1000)throw cpError('UPSTREAM_ERROR');}
function cpNPRows(data,key){if(!data||!Array.isArray(data[key]))throw cpError('UPSTREAM_ERROR');return data[key];}
function cpNPSeenPage(items,seen,id){let added=0;for(const item of items){const value=String(id(item)||'');if(!value)throw cpError('UPSTREAM_ERROR');if(!seen.has(value)){seen.add(value);added++;}}if(items.length&&!added)throw cpError('UPSTREAM_ERROR');return added;}
function cpParseNewPanLinks(text) {
 const input=String(text||''),matches=[...input.matchAll(/https?:\/\/[^\s\u0001<>"'，。；（()）]+/gi)],list=[],seen=new Set();
 for(let i=0;i<matches.length;i++){
  const match=matches[i],url=match[0].replace(/[.,;!]+$/,''),domain=(/^https?:\/\/([^/?#]+)/i.exec(url)||[])[1]?.toLowerCase();let provider,id;
  if(domain==='pan.xunlei.com'){provider='xunlei';id=(/\/s\/([A-Za-z0-9_-]+)/.exec(url)||[])[1];}
  else if(['guangyapan.com','www.guangyapan.com'].includes(domain)){provider='guangya';id=(/\/s\/([A-Za-z0-9_-]+)/.exec(url)||[])[1];}
  else if(['yun.139.com','caiyun.139.com'].includes(domain)){provider='yidong';id=(/\/(?:w|m)\/i(?:\/|\?)([A-Za-z0-9_-]+)/.exec(url)||[])[1];}
  else if(domain==='cloud.189.cn'){provider='tianyi';id=(/\/t\/([A-Za-z0-9_-]+)/.exec(url)||[])[1]||(/[?&]code=([A-Za-z0-9_-]+)(?:[&#]|$)/.exec(url)||[])[1];}
  if(!id)continue;
  const after=input.slice(match.index+match[0].length,i+1<matches.length?matches[i+1].index:input.length).slice(0,100).split('\u0001',1)[0];
  const passcode=(/[?&](?:pwd|password|passcode|accessCode)=([A-Za-z0-9]{4,8})(?:[&#]|$)/i.exec(url)||[])[1]||(provider==='guangya'&&(/#([A-Za-z0-9]{4,8})$/.exec(url)||[])[1])||(provider!=='tianyi'&&(/[?&]code=([A-Za-z0-9]{4,8})(?:[&#]|$)/i.exec(url)||[])[1])||(/(?:提取码|访问码|密码)\s*[:：]?\s*([A-Za-z0-9]{4,8})(?![A-Za-z0-9])/i.exec(after)||[])[1]||'';
  const identity=JSON.stringify([provider,id,passcode]);if(seen.has(identity))continue;seen.add(identity);list.push({key:provider+':'+id,provider,shareId:id,passcode,url});
 }
 return list;
}
// Refresh tokens can be single-use. Commit the response inside the physical
// request work, before the host pool's operation-profile postguard can reject it.
// This exception only preserves the same provider's session; no resource escapes
// the individual waiter's cancellation/account guard.
function cpNPIdentityGuard(provider,identity){if(cpNewPanIdentity(provider)!==identity)throw cpError('ACCOUNT_CHANGED');}
async function cpNPRefreshRequest(provider,profile,url,body,headers,previous,identity,update){
 cpNPGuard(provider,profile);
 const work=async()=>{
  cpNPGuard(provider,profile);
  let response;
  // A consumed one-use refresh must retain its successful rotation for the same
  // configured drive, even if this owner expires. Use the bounded raw transport;
  // the pool and individual waiter still fence every resource continuation.
  try{const options={timeout:15000,headers:Object.assign({'User-Agent':UA,'Content-Type':'application/json'},headers||{})};response=await (typeof cpResourceRequest==='function'?cpResourceRequest('post',url,JSON.stringify(body),options):Widget.http.post(url,JSON.stringify(body),options));}
  catch(error){cpNPIdentityGuard(provider,identity);if(['ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error?.code))throw error;/* native-error-evidence */throw cpNPNativeFailure(error);}
  cpNPIdentityGuard(provider,identity);
  const status=Number(response&&(response.status||response.statusCode)||200);
  let data=response&&response.data;try{if(typeof data==='string')data=JSON.parse(data);}catch(_){throw cpError('UPSTREAM_ERROR');}
  const code=data&&(data.error_code??data.errorCode??data.code);
  if(status>=400||!data||typeof data!=='object'||data.error||(code!==undefined&&![0,200].includes(Number(code))))throw cpNPFailure(status,code,data&&[data.error,data.error_description,data.msg,data.message].filter(Boolean).join(' '));
  const auth=update(data);cpNPIdentityGuard(provider,identity);
  cpNewPanCommitSession(provider,JSON.stringify(auth),previous,identity);
  cpNPIdentityGuard(provider,identity);return cpNPReadAuth(provider);
 };
 return work();
}
// Share only refresh work for the same configured drive identity. Every waiter
// keeps its own operation profile and must pass its own cancellation/account guard.
const cpNPRefreshes=new Map();
async function cpNPRefreshAuth(provider,profile,work,restarted=false){
 const resourceOwner=cpResourceOwner;
 cpNPGuard(provider,profile);const identity=cpNewPanIdentity(provider),key=provider+':'+identity;
 let job=cpNPRefreshes.get(key);
 if(!job){
  const previous=cpNewPanAuthValue(provider);job={profile};
  job.promise=Promise.resolve().then(()=>work(identity)).catch(error=>{
   cpNPIdentityGuard(provider,identity);
   // A different module may have rotated the one-use refresh token first.
   // Reuse only an actually changed, valid session under the captured config.
   if(['AUTH_FAILED','ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error?.code)&&cpNewPanAuthValue(provider)!==previous){const winner=cpNPReadAuth(provider);if(!cpNPPanTokenExpired(winner))return winner;}
   throw error;
  }).finally(()=>{if(cpNPRefreshes.get(key)===job)cpNPRefreshes.delete(key);});
  cpNPRefreshes.set(key,job);
 }
 try {await cpResourceAwait(resourceOwner,job.promise); }
 catch(error){
  cpNPGuard(provider,profile);
  // A newer operation may share config but have a new overall profile. A stale
  // owner's account guard must not poison this valid operation's refresh.
  if(!restarted&&error?.code==='ACCOUNT_CHANGED'&&job.profile!==profile&&cpNewPanIdentity(provider)===identity)return cpNPRefreshAuth(provider,profile,work,true);
  throw error;
 }
 cpNPGuard(provider,profile);if(cpNewPanIdentity(provider)!==identity)throw cpError('ACCOUNT_CHANGED');
 const auth=cpNPReadAuth(provider);if(cpNPPanTokenExpired(auth))throw cpError('AUTH_FAILED');return auth;
}
function cpNPRefreshXunleiAuth(profile){return cpNPRefreshAuth('xunlei',profile,identity=>cpNPDoRefreshXunleiAuth(profile,identity));}
function cpNPRefreshGuangyaAuth(profile){return cpNPRefreshAuth('guangya',profile,identity=>cpNPDoRefreshGuangyaAuth(profile,identity));}
async function cpNPDoRefreshXunleiAuth(profile,identity) {
 const provider='xunlei';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const context=cpNPXunleiContext(auth,false);
 return cpNPRefreshRequest(provider,profile,'https://xluser-ssl.xunlei.com/v1/auth/token',{client_id:context.clientId,client_secret:context.browser?undefined:context.web?'Qbaferw2knfQKqxa25EYJGtZ2_6755CMwzXBN3ctW54':'Xp6vsy4tN9toTVdMSpomVdXpRmES',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId},previous,identity,data=>{
  if(!data.access_token)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token,refreshToken:data.refresh_token||auth.refreshToken,userId:data.user_id||context.userId,deviceId:context.deviceId,clientId:context.clientId});
 });
}
async function cpNPXunleiCaptcha(action,auth,share,profile,readToken) {
 const context=cpNPXunleiContext(auth,share),timestamp=String(Date.now());let sign=context.clientId+context.version+context.packageName+context.deviceId+timestamp;
 for(const salt of context.browser?["gYM4fe6xRkcN/9dpGW","H/BFOFqsj3aq6qu8ElOiPwFB","tMApC4Udm/YjjEW9SSB","dO/RvcKBLBb6WCYNhkDwtRkA8Bc/rfW","T8lAmUWKRPJ","q5btU2MBAFfjEmM3piZSRt2uhPwkWuT2","0TJ5KPeq1wKxWa4s2MUdZ2tTDyWTm6lMdkGxQAxT6Wrg","s4BY7Gr2HzrL6EbwKdRds9s+QQNAXMa0R3HZN3Gz","RBLVDve6Rpdb9FmFD90M7r","PpwBrLaMQO"]:share?cpNPXUNLEI_SHARE_SIGN:cpNPXUNLEI_APP_SIGN)sign=cpNPMd5(sign+salt);
 const meta={client_version:context.version,package_name:context.packageName,timestamp,user_id:context.userId,captcha_sign:!share&&context.web&&!context.browser?'1.ee2cef5f061a7cdf4374df81b370d2ec':'1.'+sign};
 const body={client_id:context.clientId,action,device_id:context.deviceId,captcha_token:'',meta};if(share)Object.assign(meta,{username:'',phone_number:'',email:''});else if(!context.web)body.redirect_uri='xlaccsdk01://xunlei.com/callback?state=harbor';
 const headers={'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId};const data=await cpNPJson('xunlei',profile,'POST','https://xluser-ssl.xunlei.com/v1/shield/captcha/init',body,headers,undefined,readToken);if(!data.captcha_token||data.url)throw cpError('AUTH_FAILED');return Object.assign(headers,{'x-captcha-token':data.captcha_token,'x-client-version':context.version});
}
async function cpNPXunleiApi(method,path,body,share,profile,retry=true,beforeDispatch,readToken) {
 cpNPGuard('xunlei',profile);let auth=cpNPReadAuth('xunlei');if(cpNPPanTokenExpired(auth))auth=await cpNPRefreshXunleiAuth(profile);
 const action=share?'/drive/v1/share':path.startsWith('drive/v1/files')?'drive/v1/files':path.split('?')[0];const headers=await cpNPXunleiCaptcha(method+':'+action,auth,share,profile,readToken);if(!share)headers.Authorization='Bearer '+auth.accessToken;
 try{
  const data=await cpNPJson('xunlei',profile,method,'https://api-pan.xunlei.com/'+path,body,headers,beforeDispatch,readToken);
  // Share failures can arrive as HTTP 200 with an empty files array.
  if(share&&data.share_status&&data.share_status!=='OK'){
   if(['DELETED','EXPIRED','CANCELLED','CANCELED','NOT_FOUND'].includes(data.share_status))throw cpError('SHARE_EXPIRED');
   const error=cpError('UPSTREAM_ERROR');
   if(/^PASS_CODE_/.test(data.share_status))error.message='迅雷分享提取码缺失或错误';
   throw error;
  }
  return data;
 }
 catch(error){if(!share&&method==='GET'&&retry&&error.code==='AUTH_FAILED'&&auth.refreshToken){await cpNPRefreshXunleiAuth(profile);return cpNPXunleiApi(method,path,body,share,profile,false,beforeDispatch,readToken);}throw error;}
}
async function cpNPDoRefreshGuangyaAuth(profile,identity) {
 const provider='guangya';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const id=auth.deviceId||'0123456789abcdef0123456789abcdef';
 const headers={'X-Client-Id':'aMe-8VSlkrbQXpUR','X-Client-Version':'0.0.1','X-Device-Id':id,'X-Device-Model':'chrome%2F147.0.0.0','X-Device-Name':'PC-Chrome','X-Device-Sign':'wdi10.'+id+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','X-Net-Work-Type':'NONE','X-OS-Version':'Win32','X-Platform-Version':'1','X-Protocol-Version':'301','X-Provider-Name':'NONE','X-SDK-Version':'9.0.2'};
 return cpNPRefreshRequest(provider,profile,'https://account.guangyapan.com/v1/auth/token',{client_id:'aMe-8VSlkrbQXpUR',grant_type:'refresh_token',refresh_token:auth.refreshToken},headers,previous,identity,data=>{
  if(!data.access_token&&!data.accessToken)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token||data.accessToken,refreshToken:data.refresh_token||data.refreshToken||auth.refreshToken,deviceId:data.device_id||data.deviceId||id});
 });
}
async function cpNPGuangyaApi(path,body,own,profile,retry=true,beforeDispatch,readToken) {
 cpNPGuard('guangya',profile);let auth=cpNPReadAuth('guangya');if(own&&cpNPPanTokenExpired(auth))auth=await cpNPRefreshGuangyaAuth(profile);
 const readonly=!/\/(?:restore_share|create_dir)$/.test(path);
 try {const data=await cpNPJson('guangya',profile,'POST','https://api.guangyapan.com'+path,body,cpNPGuangyaHeaders(own?auth:null),beforeDispatch,readToken);if(own&&path==='/userres/v1/file/get_file_list'&&data.msg==='success'&&data.data&&typeof data.data==='object'&&!Array.isArray(data.data)&&Object.keys(data.data).length===0)return {list:[],total:0};return data.data||{};}
 catch(error){if(own&&readonly&&retry&&error.code==='AUTH_FAILED'&&auth.refreshToken){await cpNPRefreshGuangyaAuth(profile);return cpNPGuangyaApi(path,body,own,profile,false,beforeDispatch,readToken);}throw error;}
}
async function cpNPGuangyaShareToken(share,profile){const data=await cpNPGuangyaApi('/userres/v1/get_share_access_token',Object.assign({shareId:share.shareId},share.passcode?{code:share.passcode}:{}),false,profile);if(!data.accessToken)throw cpError('AUTH_FAILED');return data.accessToken;}
let cpNPXunleiCatalog;
async function cpNPGuangyaPages(parentId,token,own,profile,onPage,readToken,scope){
 const rows=[],seen=new Set(),pages=new Set();let cursor='';
 for(let page=0;;page++){
  cpCoveragePage(scope);cpNPLimit(page);
  const body=own?{parentId:parentId||'',page,pageSize:200,orderBy:3,sortType:1,fileTypes:[]}:{accessToken:token,parentId:parentId||'',pageSize:200,orderBy:0,sortType:0};if(!own&&cursor)body.cursor=cursor;
  const data=await cpNPGuangyaApi(own?'/userres/v1/file/get_file_list':'/userres/v1/get_share_page_files_list',body,own,profile,true,undefined,readToken);
  const items=cpNPRows(data,'list'),prior=new Set(seen);cpNPSeenPage(items,seen,x=>x.fileId||x.id||x.resId);
  for(const item of items){const id=String(item.fileId||item.id||item.resId);if(!prior.has(id)){prior.add(id);rows.push(item);}}
  if(!own&&onPage)onPage(items);
  const total=data.total==null?null:Number(data.total);
  if(total!==null&&(!Number.isFinite(total)||total<0))throw cpError('UPSTREAM_ERROR');
  // The API can return a numeric cursor even on its final page. Count distinct
  // IDs before stopping, and preserve cursor types in subsequent request bodies.
  const explicit=own?'':data.nextCursor||data.next_cursor||data.cursor||'';
  if(total!==null&&seen.size>=total)break;
  const next=explicit||(total!==null&&total>seen.size?seen.size:'');
  if(!next){if(total!==null&&seen.size<total||total===null&&items.length>=200)throw cpError('UPSTREAM_ERROR');break;}
  if(!items.length||pages.has(String(next))||String(next)===String(cursor))throw cpError('UPSTREAM_ERROR');pages.add(String(next));cursor=next;
 }
 return rows;
}
let cpNPGuangyaCatalog;
async function cpNPYidongRequest(path,payload,encrypted,signed,profile,readToken){
 const body=encrypted?cpNPYidongEncrypt(payload):JSON.stringify(payload);
 let data=await cpNPHttp('yidong',profile,'POST',cpNPYIDONG_API+path,body,cpNPYidongHeaders(payload,signed),undefined,readToken);
 if(readToken?.cancelled)throw cpB6Unused();
 if(typeof data==='string'){try{data=JSON.parse(data);}catch(_){}if(path==='dlFromOutLinkV3'&&/^https?:\/\//i.test(data))return data;if(typeof data==='string'){try{data=JSON.parse(cpNPYidongDecrypt(data));}catch(_){throw cpError('UPSTREAM_ERROR');}}}
 if(!data||typeof data!=='object')throw cpError('UPSTREAM_ERROR');const code=data.resultCode??data.code??data.mcsCode;if(code!==undefined&&!['0','0000','200'].includes(String(code)))throw cpNPFailure(200,code,data.desc||data.message||data.resultDesc);return data.data!==undefined?data.data:data;
}
let cpNPYidongCatalog;
const cpNPQueues=new Map();
function cpNPSerial(key,work){const prior=cpNPQueues.get(key)||Promise.resolve();const next=prior.catch(()=>{}).then(work);cpNPQueues.set(key,next);return next.finally(()=>{if(cpNPQueues.get(key)===next)cpNPQueues.delete(key);});}
async function cpNPWriteOnce(provider,profile,key,work){const prior=cpRead(key);if(prior?.state==='succeeded')return prior.value;if(prior)throw cpError('TRANSFER_UNCERTAIN');let dispatched=false;const claim=()=>{cpNPGuard(provider,profile);if(cpRead(key))throw cpError('TRANSFER_UNCERTAIN');cpNPGuard(provider,profile);cpWrite(key,{state:'uncertain'});dispatched=true;};let value;try{value=await work(claim);}catch(error){cpNPGuard(provider,profile);if(error&&['AUTH_FAILED','RATE_LIMITED','ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error.code))throw error;throw cpError('TRANSFER_UNCERTAIN');}cpNPGuard(provider,profile);if(!dispatched||!value)throw cpError('TRANSFER_UNCERTAIN');cpNPWrite(profile,provider,key,{state:'succeeded',value});return value;}
async function cpNPXunleiOwnFiles(parentId,profile){const rows=[],seen=new Set(),pages=new Set();let pageToken='';for(let page=0;;page++){cpNPLimit(page);const data=await cpNPXunleiApi('GET','drive/v1/files?'+cpNPQuery({parent_id:parentId||'',limit:200,page_token:pageToken,with_audit:true,filters:JSON.stringify({phase:{eq:'PHASE_TYPE_COMPLETE'},trashed:{eq:false}})}),null,false,profile);const items=cpNPRows(data,'files');cpNPSeenPage(items,seen,x=>x.id);rows.push(...items);const next=String(data.next_page_token||data.nextPageToken||'');if(!next)break;if(!items.length||pages.has(next)||next===pageToken)throw cpError('UPSTREAM_ERROR');pages.add(next);pageToken=next;}return rows;}
async function cpNPEnsureFolder(provider,name,parentId,profile){const own=provider==='xunlei'?await cpNPXunleiOwnFiles(parentId,profile):await cpNPGuangyaPages(parentId,'',true,profile);const existing=own.find(file=>provider==='xunlei'?file.kind==='drive#folder'&&file.name===name:Number(file.resType)===2&&file.fileName===name);if(existing)return String(existing.id||existing.fileId);const key=cpNPKey(profile,provider,['folder',parentId,name]);return cpNPWriteOnce(provider,profile,key,async claim=>{if(provider==='xunlei'){const data=await cpNPXunleiApi('POST','drive/v1/files',{parent_id:parentId,name,kind:'drive#folder',space:''},false,profile,true,claim);return data.file?.id||data.id||null;}const data=await cpNPGuangyaApi('/userres/v1/file/create_dir',{parentId,dirName:name},true,profile,true,claim);return data.fileId||data.id||data.folderId||data.resId||null;});}
async function cpPlaybackPrepareTransfer(provider,video,profile){const root=await cpNPEnsureFolder(provider,CACHE_FOLDER,'',profile),folder=await cpNPEnsureFolder(provider,cpNPMd5(video.shareId+':'+video.fid),root,profile);const own=()=>provider==='xunlei'?cpNPXunleiOwnFiles(folder,profile):cpNPGuangyaPages(folder,'',true,profile);const matches=file=>provider==='xunlei'?file.kind!=='drive#folder'&&file.name===video.file_name&&(!Number(video.size)||Number(file.size)===Number(video.size)):Number(file.resType)===1&&file.fileName===video.file_name&&(!Number(video.size)||Number(file.fileSize)===Number(video.size));let saved=(await own()).find(matches);const key=cpNPKey(profile,provider,['file',video.shareId,video.passcode||'',video.fid]);let phase=cpRead(key);
 if(!saved&&phase?.state==='succeeded')saved=provider==='xunlei'?{id:phase.value}:{fileId:phase.value};
 if(!saved){if(phase?.state==='uncertain')throw cpError('TRANSFER_UNCERTAIN');let taskId=phase?.taskId;
  if(!phase){let token;if(provider==='xunlei')token=await cpBetaXunleiShareToken(video,profile);else token=await cpNPGuangyaShareToken(video,profile);if(!token)throw cpError('AUTH_FAILED');
   const claim=()=>{cpNPGuard(provider,profile);if(cpRead(key))throw cpError('TRANSFER_UNCERTAIN');cpNPGuard(provider,profile);cpWrite(key,{state:'uncertain'});};let data;
   try{data=provider==='xunlei'?await cpNPXunleiApi('POST','drive/v1/share/restore',{parent_id:folder,share_id:video.shareId,pass_code_token:token,ancestor_ids:[],file_ids:[video.fid],specify_parent_id:true},false,profile,true,claim):await cpNPGuangyaApi('/userres/v1/restore_share',{accessToken:token,fileIds:[video.fid],parentId:folder},true,profile,true,claim);}
   catch(error){cpNPGuard(provider,profile);if(error&&['AUTH_FAILED','RATE_LIMITED','ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error.code))throw error;throw cpError('TRANSFER_UNCERTAIN');}
   taskId=data.taskId||data.task_id;const fid=provider==='xunlei'?(data.file?.id||data.file_id||data.files?.[0]?.id):null;
   if(fid){saved={id:String(fid)};cpNPWrite(profile,provider,key,{state:'succeeded',value:String(fid)});}else if(taskId)cpNPWrite(profile,provider,key,{state:'known',taskId:String(taskId)});
  }
  for(let attempt=0;!saved&&attempt<5;attempt++){if(taskId&&provider==='guangya'){const status=await cpNPGuangyaApi('/userres/v1/get_task_status',{taskId},true,profile);if(Number(status.status)===3){cpNPWrite(profile,provider,key,{state:'failed',taskId});throw cpError('UPSTREAM_ERROR');}}saved=(await own()).find(matches);if(!saved&&attempt<4&&typeof setTimeout==='function')await new Promise(resolve=>setTimeout(resolve,500));cpNPGuard(provider,profile);}
  if(!saved)throw cpError('TRANSFER_UNCERTAIN');
 }
 const fid=String(saved.id||saved.fileId);cpNPWrite(profile,provider,key,{state:'succeeded',value:fid});
 return fid;
}
async function cpPlaybackTransferUrl(provider,fid,profile){
 if(provider==='guangya'){const data=await cpNPGuangyaApi('/userres/v1/get_res_download_url',{fileId:fid},true,profile);return cpNPResource(provider,cpNPGuangyaDownloadUrl(data),{'User-Agent':UA,Referer:'https://www.guangyapan.com/',Origin:'https://www.guangyapan.com'});}
 for(const usage of ['PLAY','CONSUME','']){const query={space:'','with[0]':'public_share_tag'};if(usage)query.usage=usage;const file=await cpNPXunleiApi('GET','drive/v1/files/'+encodeURIComponent(fid)+'?'+cpNPQuery(query),null,false,profile);const url=cpNPXunleiOriginalUrl(file);if(url)return cpNPResource(provider,url,{'User-Agent':'Dalvik/2.1.0 (Linux; U; Android 12; M2004J7AC Build/SP1A.210812.016)'});}
 throw cpError('QUALITY_UNAVAILABLE');
}
// Anonymous share playback: preview first, signed download only with a verified path.
async function cpNPYidongResolve(video,profile){
 let path=String(video.path||'').trim(),content={};
 try{
  const data=await cpNPYidongRequest('getContentInfoFromOutLink',{getContentInfoFromOutLinkReq:{contentId:video.fid,linkID:video.shareId,account:''},commonAccountInfo:{account:'',accountType:1}},true,false,profile);
  content=data.contentInfo||{};
 }catch(error){
  // Cancellation, changed accounts, disabled drives and rate limits must stop here.
  cpNPGuard('yidong',profile);
  if(!path||error.code!=='UPSTREAM_ERROR')throw error;
 }
 for(const key of ['presentUURL','presentHURL','presentURL','presentLURL']){
  const url=content[key];if(typeof url==='string'&&/^https?:\/\//i.test(url)){
   const resources=cpNPResource('yidong',url,{'User-Agent':UA,Referer:'https://yun.139.com/'});
   resources[0].quality='preview';resources[0].description='预览';return resources;
  }
 }
 if(!path){const parent=content.parentCatalogId||content.parentCatalogID,id=content.contentID||content.contentId;if(parent&&id&&String(id)===String(video.fid))path=parent+'/'+id;}
 if(!path)throw cpError('QUALITY_UNAVAILABLE');
 const shapes=[{linkID:video.shareId,coIDLst:{items:[path]},caIDLst:{items:[]}},{dlFromOutLinkReqV3:{linkID:video.shareId,account:'',coIDLst:{item:[path]}}}];
 for(const payload of shapes){
  try{const data=await cpNPYidongRequest('dlFromOutLinkV3',payload,true,true,profile),url=cpNPYidongDownloadUrl(data);if(url)return cpNPResource('yidong',url,{'User-Agent':UA,Referer:'https://yun.139.com/'});}
  catch(error){cpNPGuard('yidong',profile);if(!['UPSTREAM_ERROR','QUALITY_UNAVAILABLE'].includes(error.code))throw error;}
 }
 throw cpError('QUALITY_UNAVAILABLE');
}
async function cpNewPanCatalog(share){const provider=share&&share.provider;if(!['xunlei','guangya','yidong','tianyi'].includes(provider))throw cpError('UPSTREAM_ERROR');const profile=cpNewPanAssert(provider);cpNPGuard(provider,profile);if(!share.shareId)throw cpError('SHARE_EXPIRED');const result=await (provider==='xunlei'?cpNPXunleiCatalog(share,profile):provider==='guangya'?cpNPGuangyaCatalog(share,profile):provider==='tianyi'?cpNPTianyiCatalog(share,profile):cpNPYidongCatalog(share,profile));cpNPGuard(provider,profile);return result;}
async function cpNewPanResolve(info){const provider=info&&info.provider;if(!['xunlei','guangya','yidong','tianyi'].includes(provider))throw cpError('UPSTREAM_ERROR');const profile=cpNewPanAssert(provider),video=info.videoInfo||{};cpNPGuard(provider,profile);if(!video.shareId||!video.fid||!['yidong','tianyi'].includes(provider)&&!video.file_name)throw cpError('FILE_NOT_FOUND');const read=async()=>{cpNPGuard(provider,profile);const result=await (provider==='yidong'?cpNPYidongResolve(video,profile):provider==='tianyi'?cpNPTianyiResolve(video,profile):cpNPTransferResolve(provider,video,profile));cpNPGuard(provider,profile);return result;};return read();}
// Tianyi ordinary shares: anonymous catalog reads, then Cookie -> sessionKey
// -> signed accessToken -> signed original download URL. No transfer or login.
const cpNPTIANYI_SHARE_API = 'https://cloud.189.cn/api/open/share/';
const cpNPTIANYI_SESSION_URL = 'https://m.cloud.189.cn/v2/getUserBriefInfo.action';
const cpNPTIANYI_TOKEN_URL = 'https://api.cloud.189.cn/open/oauth2/getAccessTokenBySsKey.action';
const cpNPTIANYI_DOWNLOAD_URL = 'https://api.cloud.189.cn/open/file/getFileDownloadUrl.action';
const cpNPTIANYI_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';

function cpNPTianyiClientHeaders() {
  return {'User-Agent':cpNPTIANYI_UA, Accept:'application/json;charset=UTF-8'};
}

function cpNPTianyiXml(text, tag) {
  const match = new RegExp('<'+tag+'(?:\\s[^>]*)?>([\\s\\S]*?)</'+tag+'>','i').exec(text);
  if (!match) return '';
  const value = match[1].trim();
  if (value.startsWith('<![CDATA[') && value.endsWith(']]>')) return value.slice(9,-3);
  return value.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
}

function cpNPTianyiResponse(raw, xml) {
  let data=raw;
  if (typeof data==='string') {
    try {data=JSON.parse(data);}
    catch (_) {
      if (!xml || !/^\s*</.test(raw)) throw cpError('UPSTREAM_ERROR');
      data={res_code:cpNPTianyiXml(raw,'res_code')||cpNPTianyiXml(raw,'code'),
        res_message:cpNPTianyiXml(raw,'res_message')||cpNPTianyiXml(raw,'message'),
        fileDownloadUrl:cpNPTianyiXml(raw,'fileDownloadUrl')};
    }
  }
  if (!data || typeof data!=='object' || Array.isArray(data)) throw cpError('UPSTREAM_ERROR');
  const code=data.res_code??data.code??data.errorCode;
  if (data.error || (code!==undefined && code!=='' && ![0,200].includes(Number(code)))) {
    const message=String(data.res_message||data.message||data.msg||data.error||'');
    if (/Invalid(?:AccessToken|SessionKey)|(?:session|cookie).*(?:invalid|expired)/i.test(String(code)+' '+message)) throw cpError('AUTH_FAILED');
    throw cpNPFailure(200,code,message);
  }
  return data;
}

async function cpNPTianyiGet(url, profile, headers, xml, readToken) {
  const raw=await cpNPHttp('tianyi',profile,'GET',url,null,headers,undefined,readToken);
  if(readToken?.cancelled)throw cpB6Unused();
  return cpNPTianyiResponse(raw,xml);
}

function cpNPTianyiId(value) {
  if ((typeof value!=='string' && typeof value!=='number') ||
      (typeof value==='number' && !Number.isSafeInteger(value)) || !String(value).trim()) throw cpError('UPSTREAM_ERROR');
  return String(value).trim();
}

function cpNPTianyiShareId(value) {
  const id=cpNPTianyiId(value);
  if (!/^\d+$/.test(id)) throw cpError('UPSTREAM_ERROR');
  return id;
}

function cpNPTianyiFile(item) {
  if (!item || typeof item!=='object' || Array.isArray(item)) throw cpError('UPSTREAM_ERROR');
  const id=cpNPTianyiId(item.id??item.fileId??item.fileIdStr??item.file_id);
  const name=item.name??item.fileName;
  const size=Number(item.size??item.fileSize??0);
  if (typeof name!=='string' || !name.trim() || !Number.isFinite(size) || size<0) throw cpError('UPSTREAM_ERROR');
  return {id,name,size};
}

function cpNPTianyiShareHeaders(share) {
  const code=share.passcode?share.shareId+'（访问码：'+share.passcode+'）':String(share.shareId||'');
  return Object.assign(cpNPTianyiClientHeaders(),{
    Referer:'https://cloud.189.cn/web/share?code='+encodeURIComponent(code),
    'Sign-Type':'1','browser-id':'3e7c817cbd911a2f917b42518d320fb8'
  });
}

async function cpNPTianyiShareInfo(share, profile) {
  const code=share.passcode?share.shareId+'（访问码：'+share.passcode+'）':String(share.shareId||'');
  if (!code) throw cpError('UPSTREAM_ERROR');
  const response=await cpNPTianyiGet(cpNPTIANYI_SHARE_API+'getShareInfoByCodeV2.action?'+
    cpNPQuery({noCache:Math.random(),shareCode:code}),profile,cpNPTianyiShareHeaders(share),false,share.cpB8ReadToken);
  const data=response.fileId||response.shareId?response:response.data||response.file||{};
  const file=cpNPTianyiFile(Object.assign({},data,{id:data.fileId??data.fileIdStr??data.file_id}));
  const shareId=cpNPTianyiShareId(data.shareId??data.share_id??response.shareId);
  const flag=data.isFolder;
  const folder=[true,1,'1','true'].includes(flag)||data.fileType==='folder';
  if (!folder && ![false,0,'0','false'].includes(flag) && data.fileType!=='file') throw cpError('UPSTREAM_ERROR');
  return Object.assign(file,{shareId,isFolder:folder,shareMode:String(data.shareMode??data.shareModeStr??response.shareMode??'')});
}

function cpNPTianyiRows(response) {
  const root=response.data??response;
  if (!root || typeof root!=='object' || Array.isArray(root)) throw cpError('UPSTREAM_ERROR');
  const lists=root.fileListAO??(root.fileList && !Array.isArray(root.fileList)?root.fileList:root);
  if (!lists || typeof lists!=='object' || (!Array.isArray(lists.fileList) && !Array.isArray(lists.folderList))) throw cpError('UPSTREAM_ERROR');
  if ((lists.fileList!==undefined && !Array.isArray(lists.fileList)) ||
      (lists.folderList!==undefined && !Array.isArray(lists.folderList))) throw cpError('UPSTREAM_ERROR');
  const files=(lists.fileList||[]).map(cpNPTianyiFile),folders=(lists.folderList||[]).map(cpNPTianyiFile);
  if (files.length+folders.length>60) throw cpError('UPSTREAM_ERROR');
  return {files,folders};
}

let cpNPTianyiCatalog;
async function cpNPTianyiPrepareAuth(profile, cookie, readToken) {
  cpNPGuard('tianyi',profile);
  const headers=Object.assign(cpNPTianyiClientHeaders(),{Cookie:cookie});
  const session=await cpNPTianyiGet(cpNPTIANYI_SESSION_URL,profile,headers,false,readToken);
  const sessionKey=(session.data||session).sessionKey;
  if (typeof sessionKey!=='string' || !sessionKey) throw cpError('AUTH_FAILED');
  const timestamp=String(Date.now());
  const token=await cpNPTianyiGet(cpNPTIANYI_TOKEN_URL+'?'+cpNPQuery({sessionKey}),profile,Object.assign({},headers,{
    Signature:cpNPMd5('AppKey=600100422&Timestamp='+timestamp+'&sessionKey='+sessionKey),
    Timestamp:timestamp,AppKey:'600100422','Sign-Type':'1'
  }),false,readToken);
  const accessToken=(token.data||token).accessToken;
  if (typeof accessToken!=='string' || !accessToken) throw cpError('AUTH_FAILED');
  return accessToken;
}

async function cpNPTianyiResolve(video, profile) {
  cpNPGuard('tianyi',profile);
  if (String(video.fid||'').startsWith('!tycas1!')) throw cpError('QUALITY_UNAVAILABLE');
  const fileId=cpNPTianyiId(video.fid);
  const shareId=video.tianyiShareId?cpNPTianyiShareId(video.tianyiShareId):(await cpNPTianyiShareInfo(video,profile)).shareId;
  const cookie=String(cpNewPanAuthValue('tianyi')||'').trim();
  if (!cookie) throw cpError('AUTH_FAILED');
  // Only the current serialized resource operation owns this token. It never
  // reaches storage or another module; downloads retain their per-file signature.
  const identity=cpNPMd5(cookie),prepare=()=>cpNPTianyiPrepareAuth(profile,cookie);
  const accessToken=await (typeof cpReadReuse==='function'?
    cpReadReuse('tianyi',identity,'','play-auth',prepare):prepare());
  cpNPGuard('tianyi',profile);
  const timestamp=String(Date.now());
  const headers=Object.assign(cpNPTianyiClientHeaders(),{Cookie:cookie});
  let response;
  try {
    response=await cpNPTianyiGet(cpNPTIANYI_DOWNLOAD_URL+'?'+cpNPQuery({fileId,dt:1,shareId}),profile,Object.assign({},headers,{
      Signature:cpNPMd5('AccessToken='+accessToken+'&Timestamp='+timestamp+'&dt=1&fileId='+fileId+'&shareId='+shareId),
      Timestamp:timestamp,'Sign-Type':'1',accessToken
    }),true);
  } catch(error) {
    if(error?.code==='AUTH_FAILED'&&typeof cpReadInvalidate==='function')cpReadInvalidate('tianyi',identity,'','play-auth');
    throw error;
  }
  const url=(response.data||response).fileDownloadUrl;
  if (typeof url!=='string' || !/^https?:\/\/[^\s]+$/i.test(url)) throw cpError('QUALITY_UNAVAILABLE');
  // Widget GET can follow redirects and read the entire video. Give the signed
  // first hop to the player, with only the upstream's public client headers.
  const resources=cpNPResource('tianyi',url,cpNPTianyiClientHeaders());
  resources[0].name='天翼云盘';
  resources[0].playVia='client';
  cpNPGuard('tianyi',profile);
  return resources;
}

const CP_NEW_PANS={xunlei:{field:'xunleiAuth',index:3,label:'迅雷'},guangya:{field:'guangyaAuth',index:4,label:'光鸭'},yidong:{anonymous:true,label:'移动云盘'},tianyi:{field:'tianyiCookie',index:5,label:'天翼云盘'}};
function cpIsNewPan(provider){return Object.prototype.hasOwnProperty.call(CP_NEW_PANS,provider);}
function cpNewPanConfig(provider){return cpIsNewPan(provider)?String(cpAccounts()[CP_NEW_PANS[provider].index]||''):'';}
function cpNewPanIdentity(provider){return baiduSha1(CP_NEW_PANS[provider]?.anonymous?'anonymous-v1':cpNewPanConfig(provider));}
function cpNewPanSessionKey(provider){return provider+':'+cpNewPanIdentity(provider);}
function cpNewPanSession(provider){
 const key=cpNewPanSessionKey(provider);
 try{const raw=Widget.sharedCache&&Widget.sharedCache.get('catpaw.drive-auth.v1',key);if(raw){const entry=JSON.parse(raw);if(typeof entry.auth==='string')return entry.auth;}}catch(_){}
 const local=cpRead('pan-session:'+key);return local&&typeof local.auth==='string'?local.auth:'';
}
function cpNewPanAuthValue(provider){const configured=cpNewPanConfig(provider);return configured?cpNewPanSession(provider)||configured:'';}
function cpNewPanSaveAuth(provider,raw,previous,identity){
 cpCheck(cpActiveProfile||cpProfile);return cpNewPanCommitSession(provider,raw,previous,identity===undefined?cpNewPanIdentity(provider):identity);
}
// Refreshing a one-use token is a session side effect. Keep its successful
// rotation for the same drive even when the initiating operation was cancelled.
function cpNewPanCommitSession(provider,raw,previous,identity){
 if(!cpIsNewPan(provider)||typeof raw!=='string'||!raw.trim()||/[\x00-\x1f\x7f]/.test(raw))throw cpError('AUTH_FAILED');
 if(!cpNewPanConfig(provider)||identity!==cpNewPanIdentity(provider))throw cpError('ACCOUNT_CHANGED');
 const current=cpNewPanAuthValue(provider);
 if(current!==previous)return current;
 const key=cpNewPanSessionKey(provider),value={auth:raw};
 try{if(Widget.sharedCache&&typeof Widget.sharedCache.set==='function')Widget.sharedCache.set('catpaw.drive-auth.v1',key,JSON.stringify(value));}catch(_){throw cpError('UPSTREAM_ERROR');}
 cpWrite('pan-session:'+key,value);return raw;
}
function cpCandidateNewProviderEnabled(provider){return cpIsNewPan(provider)&&cpDriveEnabled(provider)&&(CP_NEW_PANS[provider].anonymous||!!cpNewPanAuthValue(provider));}
function cpNewPanAssert(provider){
 const profile=cpActiveProfile||cpProfile;cpCheck(profile);
 if(!cpCandidateNewProviderEnabled(provider))throw cpError('AUTH_FAILED');return profile;
}
for(const [provider,entry] of Object.entries(CP_NEW_PANS)){
 if(!entry.field||!/(?:^|\.)(?:tgsou|tg-channels|quanpan)(?:\.rex|\.v[0-9]+)?$/.test(WidgetMetadata.id))continue;
 if(WidgetMetadata.globalParams.some(param=>param.name===entry.field))continue;
 WidgetMetadata.globalParams.push({name:entry.field,title:entry.label+(provider==='guangya'?' accessToken':' Cookie')+'（非空优先，留空继承共用）',type:'input',value:'',description:'在通用配置中启用对应网盘后使用。'});
}
const cpNPProviderName=providerName,cpNPLineName=playbackLineName;
providerName=function(provider){return CP_NEW_PANS[provider]?.label||cpNPProviderName(provider);};
playbackLineName=function(provider){return CP_NEW_PANS[provider]?.label||cpNPLineName(provider);};
if(typeof rexProviderEnabled==='function'){
 const native=rexProviderEnabled;rexProviderEnabled=function(provider){return cpIsNewPan(provider)?cpCandidateNewProviderEnabled(provider):native(provider);};
}
if(typeof tgsouProviderEnabled==='function'){
 const native=tgsouProviderEnabled;tgsouProviderEnabled=function(provider){return cpIsNewPan(provider)?cpCandidateNewProviderEnabled(provider):native(provider);};
}
if(typeof quanpanProviderEnabled==='function'){
 const native=quanpanProviderEnabled;quanpanProviderEnabled=function(provider){return cpIsNewPan(provider)?cpCandidateNewProviderEnabled(provider):native(provider);};
}
function cpNewPanMergeShares(current,extra){
 for(const share of extra){
  if(!cpCandidateNewProviderEnabled(share.provider))continue;
  const existing=current.find(s=>s.provider===share.provider&&s.shareId===share.shareId&&(!s.passcode||!share.passcode||s.passcode===share.passcode));
  if(existing){if(!existing.passcode&&share.passcode)existing.passcode=share.passcode;}
  else current.push(share);
 }return current;
}
if(typeof parseShareLinks==='function'){
 const native=parseShareLinks;parseShareLinks=function(text){return cpNewPanMergeShares(native(text),cpParseNewPanLinks(text));};
}
const cpNPExtractShares=extractShareLinks;
extractShareLinks=function($){
 const shares=cpNPExtractShares($),elements=$('[data-clipboard-text],a,p,.down-card,.down-card-url').get();
 for(const el of elements){const node=$(el);cpNewPanMergeShares(shares,cpParseNewPanLinks(cpShareExtractionText($,el)));}
 return cpNewPanMergeShares(shares,cpParseNewPanLinks(cpShareExtractionText($,$.root().get(0))));
};
function cpNewPanCatalogKey(share){return [share.provider==="quark"?"share-video-v3":"share",share.provider,share.shareId,share.passcode||'',cpNewPanIdentity(share.provider)].join(':');}
function cpNewPanInvalidateCatalog(share){
 const key=cpNewPanCatalogKey(share);
 if(typeof huajuanInvalidateCache==='function')huajuanInvalidateCache(key);
 if(typeof rexMemoryCache!=='undefined'){const hash=baiduSha1(key);rexMemoryCache.delete(hash);safeStorageSet(CP_COOKIE_ROOT+'catalog.'+hash,'');}
}
async function cpNewPanCatalogCached(share,refresh=false){
 const profile=cpNewPanAssert(share.provider);if(refresh)cpNewPanInvalidateCatalog(share);
 const cache=typeof huajuanCached==='function'?huajuanCached:rexCached;
 const result=await cache(cpNewPanCatalogKey(share),180000,()=>cpNewPanCatalog(share),result=>!share.cpB8ReadToken?.cancelled&&!!result&&Array.isArray(result.list)&&result.list.length>0);
 if(share.cpB8ReadToken?.cancelled)throw cpB6Unused();
 cpCheck(profile);cpNewPanAssert(share.provider);return result;
}
if(typeof huajuanShareCatalog==='function'){
 const native=huajuanShareCatalog;huajuanShareCatalog=function(share,refresh=false){return cpIsNewPan(share.provider)?cpNewPanCatalogCached(share,refresh):native(share,refresh);};
}
if(typeof rexShareCatalog==='function'){
 const native=rexShareCatalog;rexShareCatalog=function(share,refresh=false){return cpIsNewPan(share.provider)?cpNewPanCatalogCached(share,refresh):native(share,refresh);};
}
const cpNPResolveSource=resolvePlaySource;
resolvePlaySource=async function(info,deferredIssues){
 if(!cpIsNewPan(info.provider))return cpNPResolveSource(info,deferredIssues);
 if(!cpCandidateNewProviderEnabled(info.provider))return [];
 const profile=cpNewPanAssert(info.provider),result=await cpNewPanResolve(info);cpCheck(profile);cpNewPanAssert(info.provider);return result;
};
// Discovery support is separate from the upstream search API's cloud_types.
if(typeof qpShare==='function'){
 const native=qpShare;qpShare=function(entry){
  const old=native(entry);if(old||!entry||typeof entry.url!=='string'||/\s/.test(entry.url))return old;
  const shares=cpParseNewPanLinks(entry.url),share=shares[0];if(!share)return null;
  const nearby=String(entry.note||'').match(/(?:提取码|提取密碼|密码|密碼)\s*[:：]?\s*([A-Za-z0-9]{4,8})/);
  if(!share.passcode)share.passcode=entry.password||(nearby&&nearby[1])||'';
  if(typeof share.passcode!=='string'||share.passcode.length>128||/[\x00-\x1f\x7f]/.test(share.passcode))return null;return share;
 };
 const parse=parseQuanpanResults;parseQuanpanResults=function(data,keyword,site){
  const extra=[];for(const provider of Object.keys(CP_NEW_PANS)){const rows=data.merged_by_type?.[provider];if(Array.isArray(rows))extra.push(...rows);}
  return parse(Object.assign({},data,{results:[...(data.results||[]),...extra]}),keyword,site);
 };
}
// The outermost entry includes queueing, discovery and direct preparation in one budget.
// Keep its owner until logical work has drained; raw HTTP may outlive the host timeout,
// but a response must pass the captured owner before any native parser sees it.
let cpResourceOwner=null,cpResourceQueue=Promise.resolve();
const cpResourceParams=new WeakMap();
function cpResourceForwardParams(params,extra){
 const copy=Object.assign({},params,extra),owner=cpResourceParams.get(params);
 if(owner)cpResourceParams.set(copy,owner);return copy;
}
function cpResourceIdentity(owner){
 if(owner.signal?.aborted)throw cpError('ABORTED');
 if(owner.profile&&owner.profile!==baiduSha1(JSON.stringify(cpAccounts())))throw cpError('ACCOUNT_CHANGED');
}
function cpResourceCheck(owner){
 if(!owner)return;
 cpResourceIdentity(owner);
 if(owner.closed||Date.now()>=owner.deadline)throw cpError('OPERATION_TIMEOUT');
}
function cpResourceLines(rows){
 const seen=new Set(),ids=new Set(),result=[];
 for(const row of rows.flat().filter(Boolean)){
  if(!/^https?:\/\//i.test(row.url||''))continue;
  const identity=JSON.stringify([row.id,row.url]);if(seen.has(identity))continue;seen.add(identity);
  const item=JSON.parse(JSON.stringify(row));
  if(ids.has(item.id))item.id+='_'+baiduSha1(identity);ids.add(item.id);result.push(item);
 }
 return result;
}
function cpResourceRequest(method,url,data,options,beforeDispatch){
 const owner=cpResourceOwner;cpResourceCheck(owner);
 const bounded=owner?Object.assign({},options,{timeout:Math.max(1,Math.min(Number(options?.timeout)||8000,owner.deadline-Date.now()))}):options;
 if(beforeDispatch)beforeDispatch();
 // Rex helpers discard timeout; request forwards it in seconds to the native bridge.
 return owner&&typeof Widget.http.request==='function'?Widget.http.request(Object.assign({zlibMode:false,decodable:true,base64Data:false},bounded,{url,method:method.toUpperCase(),timeout:bounded.timeout/1000},method==='post'?{data}:{})):method==='get'?Widget.http.get(url,bounded):Widget.http.post(url,data,bounded);
}
function cpResourceHttp(method,url,data,options,beforeDispatch){
 const owner=cpResourceOwner;
 return cpResourceAwait(owner,cpResourceRequest(method,url,data,options,beforeDispatch));
}
function cpResourceAwait(owner,task){
 if(!owner)return task;
 // Race before parsing. The losing raw promise remains observed by Promise.race.
 return Promise.race([task,owner.expired]).then(response=>{cpResourceCheck(owner);return response;},error=>{cpResourceCheck(owner);throw error;});
}
function cpHttpGet(url,options,beforeDispatch){return cpResourceHttp('get',url,null,options,beforeDispatch);}
function cpHttpPost(url,data,options,beforeDispatch){return cpResourceHttp('post',url,data,options,beforeDispatch);}
function cpTmdbGet(path,options){
 // Some native TMDB bridges discard timeout; without host timers this await
 // cannot be independently interrupted. Always fence its late continuation.
 const owner=cpResourceOwner;cpResourceCheck(owner);
 const bounded=owner?Object.assign({},options,{timeout:Math.max(0.001,(owner.deadline-Date.now())/1000)}):options;
 return cpResourceAwait(owner,Widget.tmdb.get(path,bounded));
}
const cpBudgetEntry=loadResource;
loadResource=function(params={}){
 params=Object.assign({},params);
 const manual=decodeLink(params.link)?.action==='play';
 const owner={manual,refresh:params.refresh===true||params.forceRefresh===true,deadline:Date.now()+(manual?30000:Number(cpSetting('indexTimeoutSeconds','10'))*1000),signal:params.signal||null,profile:null,closed:false,snapshot:null};
 let timer;
 if(owner){
  owner.expired=new Promise((_,reject)=>{
   if(typeof setTimeout==='function')timer=setTimeout(()=>{owner.closed=true;reject(cpError('OPERATION_TIMEOUT'));},Math.max(0,owner.deadline-Date.now()));
  });
  owner.expired.catch(()=>{});
 }
 const execute=async()=>{
  cpResourceCheck(owner);
  const previous=cpResourceOwner,deadline=cpDeadline;cpResourceOwner=owner;cpDeadline=owner?owner.deadline:Infinity;
  try{
   bindForwardParams(params);if(owner){owner.profile=cpProfile;owner.betaInitialQuality=cpSetting('quality','auto');owner.betaInitialSubtitles=cpSetting('subtitles','auto');cpResourceParams.set(params,owner);}cpResourceCheck(owner);
   let result=await cpModuleQuotaRequired(owner,params,()=>cpBudgetEntry(params));cpResourceCheck(owner);result=await cpPlaybackComplete(owner,result);cpResourceCheck(owner);cpSharedPlaybackCommit(owner,result);cpBetaCommitPlayback(owner,result);return result;
  }finally{cpResourceParams.delete(params);cpResourceOwner=previous;cpDeadline=deadline;}
 };
 const work=cpResourceQueue.then(execute,execute);cpResourceQueue=work.catch(()=>{});
 const result=owner?Promise.race([work,owner.expired]).catch(error=>{
  if(error?.code!=='OPERATION_TIMEOUT')throw error;
  owner.closed=true;cpResourceIdentity(owner);
  const rows=cpResourceLines(owner.snapshot?owner.snapshot():[]);
  if(rows.length)return rows;
  throw cpError('OPERATION_TIMEOUT');
 }):work;
 return result.then(cpSortDisplayedResources).then(rows=>cpAuthNoticeResult(rows,owner,params),error=>cpAuthNoticeFailure(error,owner,params)).finally(()=>{if(timer!==undefined&&typeof clearTimeout==='function')clearTimeout(timer);});
};
// Public details share native global scopes. Queue them outside an automatic
// owner; internal buildDetailItem discovery and direct preparation still overlap.
const cpBudgetDetail=loadDetail;
loadDetail=function(link,...args){
 if(decodeLink(link)?.action==='play')return cpPlaybackDetail(()=>cpBudgetDetail.call(this,link,...args));
 const execute=()=>cpBudgetDetail.call(this,link,...args),work=cpResourceQueue.then(execute,execute);
 cpResourceQueue=work.catch(()=>{});return work;
};

// Rex uses a flat parameter list. Keep supported drive controls contiguous and
// preserve the relative order of the remaining site/search preferences.
const CP_CONFIG_DRIVES=["credentialSource","driveQuarkEnabled","quarkCookie","quarkQuality","driveBaiduEnabled","baiduCookie","drive115Enabled","cookie115","driveUcEnabled","drive123Enabled","driveGuangyaEnabled","guangyaAuth","guangyaRefreshToken","guangyaDeviceId","driveYidongEnabled","driveTianyiEnabled","tianyiCookie","driveXunleiEnabled","xunleiAuth","xunleiRefreshToken","xunleiDeviceId","quality"];
const CP_CONFIG_CREDENTIALS={quarkCookie:["夸克 Cookie","填写夸克网页登录 Cookie"],baiduCookie:["百度 Cookie","填写百度网页登录 Cookie"],cookie115:["115 Cookie","填写 115 网页登录 Cookie"],guangyaAuth:["光鸭访问令牌","填写 accessToken"],guangyaRefreshToken:["光鸭刷新令牌","填写 refreshToken，用于自动续期；可留空"],guangyaDeviceId:["光鸭设备号","填写 deviceId；留空使用默认设备号"],tianyiCookie:["天翼 Cookie","含 JSESSIONID、COOKIE_LOGIN_USER 的 Cookie"],xunleiAuth:["迅雷访问令牌","填写 access_token 或 Authorization；自动识别 Web/App"],xunleiRefreshToken:["迅雷刷新令牌","填写 refresh_token，用于自动续期；可留空"],xunleiDeviceId:["迅雷设备号","填写 device_id；留空优先从令牌读取，否则使用默认设备号"]};
for(const provider of ["guangya","xunlei"]){
 const index=WidgetMetadata.globalParams.findIndex(param=>param.name===provider+"Auth");
 if(index>=0)for(const [offset,suffix] of ["RefreshToken","DeviceId"].entries()){
  const name=provider+suffix;if(!WidgetMetadata.globalParams.some(param=>param.name===name))WidgetMetadata.globalParams.splice(index+offset+1,0,{name,title:CP_CONFIG_CREDENTIALS[name][0],type:"input",value:""});
 }
}

for(const param of WidgetMetadata.globalParams){
 param.title=param.title.replace(/^(?:通用|全盘\/TG)\s*·\s*/,"");
 const entry=CP_CONFIG_CREDENTIALS[param.name];
 if(entry){
  param.title=entry[0];
  param.placeholders=[{title:entry[1]+(WidgetMetadata.modules.some(module=>module.id==="saveAccounts")?"":param.name.startsWith("guangya")?"；光鸭三项全部留空时使用通用配置":param.name.startsWith("xunlei")?"；迅雷三项全部留空时使用通用配置":"；留空使用通用配置"),value:""}];
  delete param.description;
 }
 if(param.name==="credentialSource")param.enumOptions=[{title:"共用账号",value:"shared"},{title:"仅本模块",value:"local"}];
 if(param.name==="driveYidongEnabled")param.title="移动网盘";
 if(param.name.startsWith("drive")&&param.name.endsWith("Enabled"))delete param.description;
 if(param.name==="indexTimeoutSeconds"){
  param.title="资源匹配超时（秒）";param.placeholders=[{title:"5～30 秒，默认 10",value:""}];delete param.description;
 }
}
WidgetMetadata.globalParams.sort((a,b)=>{
 const left=CP_CONFIG_DRIVES.indexOf(a.name),right=CP_CONFIG_DRIVES.indexOf(b.name);
 return (left<0?Infinity:left)-(right<0?Infinity:right);
});

// B3 only: successful-path preparation, preserving final selection and order.
function cpBetaSourceKey(source){const v=source.videoInfo||{};return JSON.stringify([source.provider||'quark',v.shareId,v.passcode||'',String(v.fid)]);}
function cpBetaPrepareMovies(descriptor,files,operation){
 if(!files.length)return;
 const prepared=operation.betaPrepared||(operation.betaPrepared=new Map());
 for(const file of files){
  const source=cpCandidateSource(descriptor,file),key=cpBetaSourceKey(source);
  if(prepared.has(key))continue;
  const entry={issues:[]};prepared.set(key,entry);
  entry.task=cpTrackRead(cpBetaQueueSource(source.provider,async()=>{
   try{return {items:await cpPlaybackResolveOwned(source,entry.issues)};}catch(error){return {error};}
  }));
 }
}
async function cpBetaResolvePrepared(source,issues,operation){
 const entry=operation.betaPrepared?.get(cpBetaSourceKey(source));
 if(!entry)return await cpPlaybackResolveOwned(source,issues);
 const outcome=await entry.task;
 if(issues)issues.push(...entry.issues);else cpApplyCandidateIssues(entry.issues);
 if(outcome.error)throw outcome.error;
 return outcome.items;
}
const cpBetaSourceWaiting=[],cpBetaSourceRunning=new Map();let cpBetaSourceActive=0;
function cpBetaPumpSources(){
 for(let i=0;i<cpBetaSourceWaiting.length&&cpBetaSourceActive<4;){
  const job=cpBetaSourceWaiting[i],count=cpBetaSourceRunning.get(job.provider)||0;
  if(count>=(['quark','uc','baidu','115','tianyi','yidong','xunlei','guangya'].includes(job.provider)?2:1)){i++;continue;}
  cpBetaSourceWaiting.splice(i,1);cpBetaSourceActive++;cpBetaSourceRunning.set(job.provider,count+1);
  Promise.resolve().then(()=>{cpCheck(job.profile);return job.work();}).then(job.resolve,job.reject).finally(()=>{
   cpBetaSourceActive--;cpBetaSourceRunning.set(job.provider,(cpBetaSourceRunning.get(job.provider)||1)-1);cpBetaPumpSources();
  });
 }
}
function cpBetaQueueSource(provider,work){const profile=cpActiveProfile||cpProfile;return new Promise((resolve,reject)=>{cpBetaSourceWaiting.push({provider,profile,work,resolve,reject});cpBetaPumpSources();});}
async function cpBetaRunSources(items,work){
 let cursor=0,failure;
 const worker=async()=>{while(!failure&&cursor<items.length){const item=items[cursor++];try{await cpBetaQueueSource(item.provider||'quark',()=>work(item));}catch(error){failure=failure||error;}}};
 await Promise.all([worker(),worker()]);
 if(failure)throw failure;
}

// Directory lookup/creation and transfer acknowledgement remain one mutation owner.
const cpBetaSaveNative=saveShareFile;let cpBetaMutationQueue=Promise.resolve();
saveShareFile=function(video){
 const profile=cpActiveProfile||cpProfile;
 const task=cpBetaMutationQueue.then(()=>{cpCheck(profile);return cpBetaSaveNative(video);});
 cpBetaMutationQueue=task.catch(()=>{});return cpTrackRead(task);
};
const cpBetaOriginNative=cpOrigin;
cpOrigin=function(fid){return cpScheduleRead('quark',()=>cpBetaOriginNative(fid));};
const cpBetaPlayUrlNative=getPlayUrl;
getPlayUrl=function(fid){return cpScheduleRead('quark',()=>cpBetaPlayUrlNative(fid));};

// Only confirmed root preparation is reused, within the current operation.
const cpBetaEnsureFolderNative=cpNPEnsureFolder;
cpNPEnsureFolder=function(provider,name,parentId,profile){
 if(name!==CACHE_FOLDER||parentId!=='')return cpBetaEnsureFolderNative(provider,name,parentId,profile);
 return cpReadReuse(provider,cpNewPanIdentity(provider),'','beta-root:'+name,
  ()=>cpBetaEnsureFolderNative(provider,name,parentId,profile),fid=>typeof fid==='string'&&!!fid&&!['0','undefined','null'].includes(fid));
};

// Native URL getters keep the existing global four / provider two request slots.
// Memoize exact file reads only for this operation, including repeated subtitles.
// One native recovery flow per exact read, including empty/error outcomes.
// This map dies with the operation; no failure enters persistent caches.
// A directory retry owns only the URL outcomes that it created. Token/auth
// reuse belongs to the native readers and is deliberately outside this ledger.
function cpBetaReadAttempt(){
 return {operation:cpReadOperation,owner:cpResourceOwner,discarded:false,seen:new Set(),outcomes:new Map()};
}
function cpBetaCheckReadAttempt(attempt){
 if(!attempt)return;
 if(attempt.discarded||cpReadOperation!==attempt.operation)throw cpB6Unused();
 cpResourceCheck(attempt.owner);
}
function cpBetaDiscardReadAttempt(attempt){
 if(!attempt||attempt.discarded)return;
 attempt.discarded=true;
 const outcomes=attempt.operation?.betaReadOutcomes;
 for(const [key,task] of attempt.outcomes)if(outcomes?.get(key)===task)outcomes.delete(key);
 attempt.outcomes.clear();
}
function cpBetaReadOutcome(provider,shareId,passcode,label,work,attempt){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile;
 const check=()=>{cpCheck(profile);cpBetaCheckReadAttempt(attempt);};
 check();
 if(!operation)return Promise.resolve().then(()=>{check();return work();}).then(value=>{check();return value;});
 const outcomes=operation.betaReadOutcomes||(operation.betaReadOutcomes=new Map()),key=cpReadKey(provider,shareId,passcode,label);
 if(!outcomes.has(key)){
  const task=Promise.resolve().then(()=>{check();return work();}).then(value=>({value}),error=>({error}));
  outcomes.set(key,task);
  if(attempt)attempt.outcomes.set(key,task);
  cpTrackRead(task,operation);
 }
 return outcomes.get(key).then(outcome=>{check();if(outcome.error)throw outcome.error;return outcome.value;});
}
function cpBetaMemoGetter(provider,native){return function(info,attempt){
 const v=info.videoInfo||{},key=JSON.stringify([v.fid,v.shareId,v.shareid,v.uk,v.stoken,v.share_fid_token,v.passcode]);
 return cpBetaReadOutcome(provider,v.shareId,v.passcode,'beta-file:'+key,()=>native(info),attempt);
};}
getUcResource=cpBetaMemoGetter('uc',getUcResource);
getBaiduResource=cpBetaMemoGetter('baidu',getBaiduResource);
get115Resource=cpBetaMemoGetter('115',get115Resource);
const cpBetaSubtitlesNative=cpSubtitles;
cpSubtitles=async function(info,profile,deferredIssues,policy){
 const provider=info.provider||'quark';
 if(!['uc','baidu','115'].includes(provider))return await cpBetaSubtitlesNative(info,profile,deferredIssues,policy);
 const v=info.videoInfo||{},keys=[v.shareId],files=[];
 if(provider==='baidu')keys.push(String(v.shareId||'').replace(/^1/,''),'id:'+v.shareid);
 for(const share of keys){const record=cpRead('subtitles:'+profile+':'+provider+':'+baiduSha1(String(share)));if(record&&record.expires>Date.now())files.push(...record.files);}
 const selected=cpMatchSubtitles(v,files),rows=[],issues=selected.map(()=>[]);let cursor=0,stop=false;
 const worker=async()=>{while(!stop&&cursor<selected.length){
  const index=cursor++,sub=Object.assign({},v,selected[index]);
  try{
   cpCheck(profile);const sinfo=cpSubtitleInfo(sub.file_name),source={provider,videoInfo:sub};
   const resources=await cpSubtitleRead(provider,source,profile,policy);
   cpCheck(profile);const row=resources?.find(r=>r.url);
   if(row)rows[index]={url:row.url,headers:row.headers||row.customHeaders||{},name:sub.file_name,...(sinfo.language?{language:sinfo.language}:{}),isDefault:false};
  }catch(error){
   cpCheck(profile);if(['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(error?.code)){stop=true;(policy?.issue||cpCandidateIssue)(provider,error.code,false,issues[index]);}
  }
 }};
 // Start after the video's getter has claimed its native slot.
 await Promise.all([worker(),worker()]);
 for(const list of issues)if(deferredIssues)deferredIssues.push(...list);else cpApplyCandidateIssues(list);
 return rows.filter(Boolean);
};

// Short successful URL reuse is separate from the 24-hour raw directory index.
// Stage until the complete public result accepts the resource; never commit late
// successes from expired shares, cancelled owners or failed final selection.
const CP_BETA_PLAY_TTL=30000;
let cpBetaPlayGeneration=0;
function cpBetaPlayKey(info){
 const v=info.videoInfo||{};if(!v.shareId||!v.fid)return null;
 return 'beta-b3-play:'+baiduSha1(JSON.stringify([cpActiveProfile||cpProfile,info.provider||'quark',v.shareId,String(v.fid),v.passcode||'',v.file_name,cpParent(v),cpSetting('quality','auto'),cpSetting('subtitles','auto'),ensureCookie()]));
}
function cpBetaValidRows(rows){return Array.isArray(rows)&&rows.length>0&&rows.every(row=>row&&/^https?:\/\//i.test(row.url||'')&&(!row.subtitles||row.subtitles.every(sub=>/^https?:\/\//i.test(sub.url||''))));}
function cpBetaPlayUntil(rows,at){
 let until=at+CP_BETA_PLAY_TTL;
 for(const row of rows)for(const item of [row,...(row.subtitles||[])]){
  try{const url=new URL(item.url);for(const name of ['expires','expire','e']){
   const value=url.searchParams.get(name);if(/^\d{10,13}$/.test(value||''))until=Math.min(until,Number(value)*(value.length===10?1000:1)-5000);
  }const auth=url.searchParams.get('auth_key');if(/^\d{10}-/.test(auth||''))until=Math.min(until,Number(auth.slice(0,10))*1000-5000);}catch(_){return at;}
 }
 return until;
}
function cpBetaDiscardShare(provider,shareId){
 const owner=cpResourceOwner;if(owner)(owner.betaExpired||(owner.betaExpired=new Set())).add(JSON.stringify([provider,shareId]));
 for(const key of cpRead('beta-b3-play-keys')||[]){const entry=cpRead(key);if(entry?.provider===provider&&String(entry.shareId)===String(shareId))cpWrite(key,null);}
}
function cpBetaClearPlayback(){cpBetaPlayGeneration++;for(const key of cpRead('beta-b3-play-keys')||[])cpWrite(key,null);cpWrite('beta-b3-play-keys',[]);}
function cpBetaCommitPlayback(owner,result){
 if(!owner||!Array.isArray(result))return;cpResourceCheck(owner);
 if(owner.betaInitialQuality!==cpSetting('quality','auto')||owner.betaInitialSubtitles!==cpSetting('subtitles','auto'))return;
 const urls=new Set(result.map(row=>row.url)),now=Date.now();
 for(const entry of owner.betaPlayback||[]){
  if(entry.generation!==cpBetaPlayGeneration||entry.expires<=now||!urls.has(entry.rows[0].url)||owner.betaExpired?.has(JSON.stringify([entry.provider,entry.shareId])))continue;
  cpWrite(entry.key,entry);let keys=(cpRead('beta-b3-play-keys')||[]).filter(key=>key!==entry.key);keys.push(entry.key);
  while(keys.length>64)cpWrite(keys.shift(),null);cpWrite('beta-b3-play-keys',keys);
 }
}
const cpBetaResolveNative=resolvePlaySource;
resolvePlaySource=async function(info,deferredIssues){
 const owner=cpResourceOwner,profile=cpActiveProfile||cpProfile,provider=info.provider||'quark';cpCheck(profile);cpResourceCheck(owner);
 if(!cpDriveEnabled(provider)||cpBlockedProviders.has(provider))return [];
 const manualTransferEpoch=cpManualTransferPlayEpoch(provider),key=cpManualTransferPlayKey(cpBetaPlayKey(info),manualTransferEpoch),generation=cpBetaPlayGeneration,automatic=!!owner&&!owner.manual&&!owner.refresh,quality=cpSetting('quality','auto'),subtitles=cpSetting('subtitles','auto'),issueCount=deferredIssues?.length||0;
 if(key){
  if(!automatic)cpWrite(key,null);
  else{const cached=cpRead(key),now=Date.now();if(cached&&cached.at<=now&&cached.expires>now&&cached.expires-cached.at<=CP_BETA_PLAY_TTL&&cpBetaValidRows(cached.rows)&&cpBetaPlayUntil(cached.rows,now)>now)return JSON.parse(JSON.stringify(cached.rows));}
 }
 const rows=await cpBetaResolveNative(info,deferredIssues);cpCheck(profile);cpResourceCheck(owner);
 const currentKey=cpManualTransferPlayKey(cpBetaPlayKey(info),manualTransferEpoch);
 if(automatic&&currentKey&&manualTransferEpoch===cpManualTransferPlayEpoch(provider)&&generation===cpBetaPlayGeneration&&quality===cpSetting('quality','auto')&&subtitles===cpSetting('subtitles','auto')&&!cpBlockedProviders.has(provider)&&(deferredIssues?.length||0)===issueCount&&cpBetaValidRows(rows)){
  const at=Date.now(),expires=cpBetaPlayUntil(rows,at);
  (owner.betaPlayback||(owner.betaPlayback=[])).push({key:currentKey,provider,shareId:info.videoInfo.shareId,at,expires,generation,rows:JSON.parse(JSON.stringify(rows))});
 }
 return rows;
};
if(typeof qpInvalidateShareCatalog==='function'){
 const native=qpInvalidateShareCatalog;qpInvalidateShareCatalog=function(share,...args){cpBetaDiscardShare(share.provider||'quark',share.shareId,args[0]);return native(share,...args);};
}
if(typeof clearRexCatalogCache==='function'){
 const native=clearRexCatalogCache;clearRexCatalogCache=async function(...args){cpBetaClearPlayback();return await native(...args);};
}
if(typeof clearHuajuanCache==='function'){
 const native=clearHuajuanCache;clearHuajuanCache=async function(...args){cpBetaClearPlayback();return await native(...args);};
}

// B6: only read-only speculation; final native selection remains authoritative.
function cpB6Unused(){const error=new Error('Unused read preparation');error.code='BETA_READ_UNUSED';return error;}
function cpB6Token(){
 let close;const token={cancelled:false,used:false,closed:new Promise(resolve=>{close=resolve;})};
 token.cancel=()=>{if(!token.cancelled){token.cancelled=true;close();}};return token;
}
function cpB6Await(token,task){
 if(!token)return task;
 return Promise.race([task,token.closed.then(()=>{throw cpB6Unused();})]).then(value=>{if(token.cancelled)throw cpB6Unused();return value;});
}
function cpB6DetailOptions(info){return info?.cpB6DetailToken?{cpB6Token:info.cpB6DetailToken}:undefined;}
const cpB6HttpGetNative=cpHttpGet;
cpHttpGet=function(url,options,beforeDispatch){
 const token=options?.cpB6Token;if(!token)return cpB6HttpGetNative(url,options,beforeDispatch);
 if(token.cancelled)return Promise.reject(cpB6Unused());
 const clean=Object.assign({},options);delete clean.cpB6Token;
 // Stop before HTML decoding, parsing, page caching or candidate admission.
 return cpB6Await(token,cpB6HttpGetNative(url,clean,beforeDispatch));
};

function cpB6CatalogKey(share){return JSON.stringify([share.provider,share.shareId,share.passcode||'']);}
function cpB6EmitFile(provider,share,file,position){
 const listeners=cpReadOperation?.betaCatalogs?.get(cpB6CatalogKey(Object.assign({},share,{provider})));
 if(listeners)for(const notify of listeners)notify(file,position);
}
async function cpB6ReadCatalog(params,share,work){
 const operation=cpReadOperation;
 if(!operation||!['uc','baidu','115','tianyi','yidong'].includes(share.provider))return await work();
 const map=operation.betaCatalogs||(operation.betaCatalogs=new Map()),key=cpB6CatalogKey(share),seen=new Set(),attempts=new Set();
 const listeners=map.get(key)||new Set();map.set(key,listeners);
 const quanpan=typeof qpSelectVideo==='function',limit=quanpan?1:2;
 const rolling=!quanpan&&['uc','baidu','115'].includes(share.provider)?cpB11Rolling(share.provider,operation):null;
 const notify=(file,position)=>{
  // The existing Quanpan ordered-directory emitter lends this proof only
  // synchronously. Unscoped roots and ordinary preparation retain their ledger.
  const attempt=quanpan&&['uc','baidu','115'].includes(share.provider)?share.cpTargetDirectory?.cpTargetObservation?.preparing?.attempt:null;
  const prepared=attempt?attempt.seen:seen;
  if(attempt){cpBetaCheckReadAttempt(attempt);attempts.add(attempt);}
  if(cpReadOperation!==operation||!rolling&&prepared.size>=limit||cpBlockedProviders.has(share.provider)||!cpDriveEnabled(share.provider))return;
  const observed=share.cpTargetDirectory?.cpTargetObservation?.preparing;
  if(observed)file=Object.assign({},file,{parentPath:cpCoverageNormalize(file.parentPath||observed.path)});
  const matches=params.type==='movie'?cpMovieVideoMatches(file,params,cpRelevanceTitles(params)):cpEpisodeVideoMatches(file,params,cpRelevanceTitles(params));
  if(!matches||prepared.has(String(file.fid)))return;
  if(quanpan){
   // A later page can contain a larger movie or an earlier BFS episode.
   // Only the first matching root episode is already the final selection.
   if(params.type==='movie'){
    if(share.provider==='tianyi'){
     seen.add('auth');const profile=cpActiveProfile||cpProfile,cookie=String(cpNewPanAuthValue('tianyi')||'').trim();
     if(cookie)cpReadReuse('tianyi',cpNPMd5(cookie),'','play-auth',()=>cpNPTianyiPrepareAuth(profile,cookie)).catch(()=>{});
    }
    return;
   }
   if(!position?.root&&!observed)return;
  }
  prepared.add(String(file.fid));
  const info={provider:share.provider,videoInfo:Object.assign({},file,{passcode:file.passcode||share.passcode||''}),qpFreshCatalog:true};
  if(rolling){rolling.offer(info);return;}
  // Do not resolve subtitles until the complete directory has been observed.
  const task=Promise.resolve().then(()=>{
   cpBetaCheckReadAttempt(attempt);cpCheck(cpActiveProfile||cpProfile);if(cpBlockedProviders.has(share.provider)||!cpDriveEnabled(share.provider))return [];
   return share.provider==='uc'?getUcResource(info,attempt):share.provider==='baidu'?getBaiduResource(info,attempt):share.provider==='115'?get115Resource(info,attempt):cpNewPanResolve(info);
  });cpTrackRead(task,operation).catch(()=>{});
 };
 listeners.add(notify);
 try{return await work();}
 catch(error){for(const attempt of attempts)cpBetaDiscardReadAttempt(attempt);throw error;}
 finally{if(rolling)rolling.close();listeners.delete(notify);if(!listeners.size)map.delete(key);}
}
const cpB6NPItemNative=cpNPItem;
cpNPItem=function(share,...args){const file=cpB6NPItemNative(share,...args);cpB6EmitFile(share.provider,share,file,{root:args[3]===''});return file;};
const cpB6NPResolveNative=cpNewPanResolve;
cpNewPanResolve=function(info){
 if(!['tianyi','yidong'].includes(info.provider))return cpB6NPResolveNative(info);
 const v=info.videoInfo||{},key=JSON.stringify([v.fid,v.tianyiShareId,v.path,v.parentPath]);
 return cpBetaReadOutcome(info.provider,v.shareId,v.passcode,'b6-file:'+key,()=>cpB6NPResolveNative(info));
};

if(typeof panMonitorSites==='function'){
 const serialPrepare=panPrepareSite;
 panPrepareSite=async function(params,probe){
  const input=params&&typeof params==='object'?params:{};
  const configured=Object.prototype.hasOwnProperty.call(input,'site')?String(input.site||''):String(safeStorageGet(STORAGE_SITE_KEY+'.manual')||'');
  let previous;try{previous=JSON.parse(safeStorageGet(STORAGE_SITE_KEY+'.resolved')||'null');}catch(_){}
  // Manual domains, healthy resolved caches and non-search entries stay native.
  if(configured||!probe||previous?.expires>Date.now())return await serialPrepare(params,probe);
  if(Object.prototype.hasOwnProperty.call(input,'site'))safeStorageSet(STORAGE_SITE_KEY+'.manual','');
  if(panMonitorPending)return await panMonitorPending;
  const profile=cpActiveProfile||cpProfile,seed=panOrigin(previous?.site)||PAN_FALLBACKS.map(panOrigin).find(Boolean);
  if(!seed)return await serialPrepare(params,probe);
  let finished=false;const reads=new Map();
  const verify=site=>{
   if(!site||finished)return Promise.resolve(null);
   if(!reads.has(site))reads.set(site,(async()=>{
    try{
     cpCheck(profile);let ok=false;
     try{ok=await probe(site);}catch(error){if(['ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','AUTH_FAILED','RATE_LIMITED'].includes(error?.code))throw error;}
     cpCheck(profile);if(ok)return site;
     if(finished)return null;
     // An empty search is not a dead domain: retain native home validation so
     // later alias searches can still use a healthy site.
     const response=await cpHttpGet(site+'/',{timeout:8000,headers:{'User-Agent':UA}});
     cpCheck(profile);return /(?:\/vod\/detail\/|\/voddetail\/|module-item-pic)/i.test(panDecodePage(response.data))?site:null;
    }
    catch(error){if(['ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','AUTH_FAILED','RATE_LIMITED'].includes(error?.code))throw error;return null;}
   })());
   return reads.get(site);
  };
  panMonitorPending=(async()=>{
   const monitoring=panMonitorSites(),first=verify(seed);
   const rest=monitoring.then(async sites=>{
    const record=sites[PAN_SITE_NAME]||{};
    const urls=[record.best_url,...(record.urls||[]).filter(x=>x.has_keyword!==false).map(x=>x.url),previous?.site,...PAN_FALLBACKS];
    for(const site of Array.from(new Set(urls.map(panOrigin).filter(site=>site&&site!==seed)))){
     if(finished)return null;
     const found=await verify(site);if(found)return found;
    }
    return await first;
   });
   const site=await Promise.race([first.then(value=>value||rest),rest.then(value=>value||first)]);
   cpCheck(profile);if(!site)throw new Error(PAN_SITE_NAME+'当前域名均无法访问，请稍后重试或手动指定域名');
   finished=true;safeStorageSet(STORAGE_SITE_KEY,site);safeStorageSet(STORAGE_SITE_KEY+'.resolved',JSON.stringify({site,expires:Date.now()+3600000}));return site;
  })();
  try{return await panMonitorPending;}finally{finished=true;panMonitorPending=null;}
 };
}

// B7: no alternate-name site searches. Trusted names stay inside matching.
async function cpB7TrustedTitles(params){
 if(typeof cpTrustedTitles==='function')return await cpTrustedTitles(params);
 // Quanpan already has one-query discovery. Supplement only a known TMDB ID,
 // through the Rex bridge, using the same verified identity/cache as the peers.
 const id=String(params.tmdbId||params.tmdbID||''),type=params.type==='movie'?'movie':'tv',season=Number(params.season||1);
 const name=params.seriesName||params.title||params.name||'',requested=cpRequestedYear(params),profile=cpActiveProfile||cpProfile;
 if(!/^\d+$/.test(id)||!Widget.tmdb?.get||requested.conflict)return [];
 const signature=JSON.stringify([4,id,type,season,name,requested.year,params.imdbId||'']),key='identity:'+baiduSha1(signature);
 const valid=record=>record&&record.signature===signature&&record.expires>Date.now()&&Array.isArray(record.titles)&&record.titles.length<=16&&record.titles.every(t=>typeof t==='string'&&t.length<=200);
 try{
  const record=await cpBetaReadOutcome('identity',signature,'','b7-titles',async()=>{
   let cached=cpRead(key);try{const raw=Widget.sharedCache?.get('catpaw.upstream-enhanced.identity.v1',key);if(raw)cached=JSON.parse(raw);}catch(_){}
   if(valid(cached)&&(!params.cpSiteRead||Object.hasOwn(cached,'seasonYear')))return cached;
   const d=await cpTmdbGet('/'+type+'/'+id,{params:{language:'zh-CN',append_to_response:'alternative_titles,translations,external_ids'}});cpCheck(profile);
   if(String(d?.id)!==id)return null;
   const year=Number((d.first_air_date||d.release_date||'').slice(0,4)),seasonYear=Number((d.seasons||[]).find(s=>s.season_number===season)?.air_date?.slice(0,4));
   if(requested.year&&![year,seasonYear].includes(requested.year)||params.imdbId&&d.external_ids?.imdb_id&&params.imdbId!==d.external_ids.imdb_id)return null;
   const countries=new Set(['CN','TW','HK','SG','US','GB',...(d.origin_country||[]),...(d.production_countries||[]).map(c=>c.iso_3166_1)]);
   const native=[d.name||d.title,d.original_name||d.original_title,...(d.translations?.translations||[]).filter(t=>['zh','en',d.original_language].includes(t.iso_639_1)).map(t=>t.data?.name||t.data?.title),...(d.alternative_titles?.results||d.alternative_titles?.titles||[]).filter(t=>!t.iso_3166_1||countries.has(t.iso_3166_1)).map(t=>t.title)].filter(t=>typeof t==='string'&&t.trim()&&t.length<=200&&!/[\x00-\x1f\x7f]/.test(t));
   const supplied=[params.originalName,params.originalTitle,...(Array.isArray(params.alternativeTitles)?params.alternativeTitles:[])].filter(t=>typeof t==='string'&&t.trim());
   if(!native.concat(supplied).some(t=>cpTitlesEqual(t,name)))return null;
   const record={signature,expires:Date.now()+300000,titles:[...new Set(cpRelevanceTitles(params).concat(native))].slice(0,16),originalTitle:d.original_name||d.original_title,seriesYear:year,seasonYear:seasonYear||null};
   cpCheck(profile);cpWrite(key,record);try{Widget.sharedCache?.set('catpaw.upstream-enhanced.identity.v1',key,JSON.stringify(record));}catch(_){}return record;
  });
  return record?.titles||[];
 }catch(_){cpCheck(profile);return [];}
}

let cpB7SearchMatches;

async function cpB7SelectVideo(files,params,titles=[]){
 const matching=Object.assign({},params,{alternativeTitles:[...new Set(cpRelevanceTitles(params).concat(titles||[]))]});
 const selected=qpSelectVideo(files,matching);
 const largerUnknown=params.type==='movie'&&selected&&files.some(file=>isVideoFile(file)&&Number(file.size||0)>Number(selected.size||0)&&!cpMovieVideoMatches(file,matching,matching.alternativeTitles));
 if(selected&&!largerUnknown||!files.length)return selected;
 matching.alternativeTitles.push(...await cpB7TrustedTitles(params));
 return qpSelectVideo(files,matching);
}

const cpB7SearchTitleNative=cpSearchTitleMatches;
cpSearchTitleMatches=function(value,params){
 if(cpB7SearchTitleNative(value,params))return true;
 if(params.type==='movie')return false;
 // A fully recognized quality/update suffix may touch a bracketed year.
 // Keep that year, title, sequel and season for the native identity predicate.
 const match=/^(.+?[（(]\s*(?:19|20)\d{2}\s*[）)])[ ._-]*(?:[248]K|\d{3,4}P)[ ._-]*(?:高码(?:率)?)?[ ._-]*(?:(?:更新(?:至|到)?|全)\s*\d+\s*[集话]|已完结|完结)?$/i.exec(String(value||'').trim());
 return !!match&&cpB7SearchTitleNative(match[1],params);
};

// Private token handling for anonymous Yidong POST catalog reads only.
const cpB8HttpPostNative=cpHttpPost;
cpHttpPost=function(url,data,options,beforeDispatch){
 const token=options?.cpB6Token;if(!token)return cpB8HttpPostNative(url,data,options,beforeDispatch);
 if(token.cancelled)return Promise.reject(cpB6Unused());
 const clean=Object.assign({},options);delete clean.cpB6Token;
 return cpB6Await(token,cpB8HttpPostNative(url,data,clean,beforeDispatch));
};

// B8: independent folder work overlaps; final native breadth-first order is stable.
async function cpB8Walk(provider,root,read,child,onFile,profile,max=1001,readToken){
 const check=()=>{if(readToken?.cancelled)throw cpB6Unused();cpNPGuard(provider,profile);};
 const nodes=new Map(),queue=[];let active=0,failure;
 return new Promise((resolve,reject)=>{
  const discover=folder=>{
   check();const key=String(folder.id);if(nodes.has(key))return;
   if(nodes.size>=max)throw cpError('UPSTREAM_ERROR');
   const node={...folder,items:[]};nodes.set(key,node);queue.push(node);pump();
  };
  function finish(){
   if(active||queue.length&&!failure)return;
   if(failure){reject(failure);return;}
   const result=[],pending=[root],visited=new Set();
   for(let i=0;i<pending.length;i++){
    const folder=pending[i],key=String(folder.id);if(visited.has(key))continue;visited.add(key);
    for(const item of nodes.get(key).items){const next=child(item,folder);if(next)pending.push(next);else result.push({item,path:folder.path});}
   }
   resolve(result);
  }
  function pump(){
   while(!failure&&active<2&&queue.length){
    const node=queue.shift();active++;
    Promise.resolve().then(()=>{check();return read(node,items=>{
     if(failure)throw failure;check();
     for(const item of items){node.items.push(item);const next=child(item,node);if(next)discover(next);else if(onFile)onFile(item,node.path);}
    });}).catch(error=>{failure=failure||error;queue.length=0;}).finally(()=>{active--;pump();finish();});
   }
  }
  discover(root);
 });
}
function cpB8Folder(item,parent,id,name,extra){return Object.assign({id:String(id),path:[parent.path,name||''].filter(Boolean).join('/'),depth:(parent.depth||0)+1},extra);}
function cpB8Files(rows,build,key){const seen=new Set(),list=[];for(const row of rows){const id=String(key(row.item));if(seen.has(id))continue;seen.add(id);const file=build(row.item,row.path);if(file)list.push(file);}return {list};}

cpNPXunleiCatalog=async function(share,profile){
 const child=(row,parent)=>row.kind==='drive#folder'?cpB8Folder(row,parent,row.id,row.name,{token:row.cpB8ShareToken}):null;
 const read=async(folder,emit,cpTargetToken)=>{
  let pageToken='',token=folder.token||'';const pages=new Set(),seen=new Set(),rootItems=[];
  for(let page=0;;page++){
   cpCoveragePage(share.cpTargetDirectory);
   cpNPGuard('xunlei',profile);cpNPLimit(page);
   const query={share_id:share.shareId,limit:100,page_token:pageToken,thumbnail_size:'SIZE_SMALL'};
   if(folder.id)Object.assign(query,{parent_id:folder.id,pass_code_token:token});else query.pass_code=share.passcode||'';
   const data=await cpNPXunleiApi('GET','drive/v1/share'+(folder.id?'/detail':'')+'?'+cpNPQuery(query),null,true,profile,true,undefined,cpTargetToken);
   token=data.pass_code_token||token;const items=cpNPRows(data,'files');cpNPSeenPage(items,seen,x=>x.id);
   const rows=items.map(item=>Object.assign({},item,{cpB8ShareToken:token}));
   // Root pagination establishes the share token before any child consumes it.
   if(folder.id)emit(rows);else rootItems.push(...rows);
   const next=String(data.next_page_token||data.nextPageToken||data.page_token||'');
   if(!next)break;if(!items.length||pages.has(next)||next===pageToken)throw cpError('UPSTREAM_ERROR');pages.add(next);pageToken=next;
  }
  if(!folder.id){cpBetaRememberShareToken('xunlei',share,token,profile);emit(rootItems.map(item=>Object.assign({},item,{cpB8ShareToken:token})));}
 };
 const rows=await cpTargetB8Walk(cpTargetFilter(share.cpTargetDirectory,item=>cpNPVideo(item.name)||/^video\//i.test(item.mime_type||"")),'xunlei',{id:'',path:'',depth:0},read,child,null,profile);
 return cpB8Files(rows,(item,path)=>cpNPVideo(item.name)||/^video\//i.test(item.mime_type||'')?cpNPItem(share,item.id,item.name,item.size,path,{passCodeToken:item.cpB8ShareToken}):null,x=>x.id);
};
cpNPGuangyaCatalog=async function(share,profile){
 const token=await cpNPGuangyaShareToken(share,profile);
 const child=(item,parent)=>Number(item.resType)===2?cpB8Folder(item,parent,item.fileId||item.id||item.resId,item.fileName||item.name):null;
 const rows=await cpTargetB8Walk(cpTargetFilter(share.cpTargetDirectory,item=>Number(item.resType)===1&&(Number(item.fileType)===2||/^video\//i.test(item.mineType||item.mimeType||"")||cpNPVideo(item.fileName||item.name))),'guangya',{id:'',path:'',depth:0},(folder,emit,cpTargetToken)=>cpNPGuangyaPages(folder.id,token,false,profile,emit,cpTargetToken,share.cpTargetDirectory),child,null,profile);
 return cpB8Files(rows,(item,path)=>Number(item.resType)===1&&(Number(item.fileType)===2||/^video\//i.test(item.mineType||item.mimeType||'')||cpNPVideo(item.fileName||item.name))?cpNPItem(share,item.fileId||item.id||item.resId,item.fileName||item.name,item.fileSize||item.size,path):null,x=>x.fileId||x.id||x.resId);
};
cpNPYidongCatalog=async function(share,profile){
 const child=(item,parent)=>item.cpB8Folder?cpB8Folder(item,parent,item.caID,item.caName||item.catalogName):null;
 const build=(item,path)=>Number(item.coType)===3||cpNPVideo(item.coName)?cpNPItem(share,item.coID,item.coName,item.coSize,path,{path:item.path||''}):null;
 const read=async(folder,emit,cpTargetToken)=>{
  const readToken=cpTargetToken||share.cpB8ReadToken;
  const pages=new Set();
  for(let page=1;;page++){
   cpCoveragePage(share.cpTargetDirectory);
   cpNPGuard('yidong',profile);cpNPLimit(page);
   const data=await cpNPYidongRequest('getOutLinkInfoV6',{getOutLinkInfoReq:{account:'',linkID:share.shareId,passwd:share.passcode||'',caSrt:0,coSrt:0,srtDr:1,bNum:page,pCaID:folder.id,eNum:200},commonAccountInfo:{account:'',accountType:1}},true,false,profile,readToken);
   if(readToken?.cancelled)throw cpB6Unused();
   const folders=Array.isArray(data.caLst)?data.caLst:[],files=Array.isArray(data.coLst)?data.coLst:[];
   if(!Array.isArray(data.caLst)&&!Array.isArray(data.coLst))throw cpError('UPSTREAM_ERROR');
   cpNPSeenPage(folders.concat(files),pages,x=>x.caID?'d:'+x.caID:'f:'+x.coID);
   emit(folders.filter(x=>x.caID).map(item=>Object.assign({},item,{cpB8Folder:true})).concat(files.filter(x=>x.coID)));
   if(folders.length+files.length<200)break;
  }
 };
 const rows=await cpTargetB8Walk(cpTargetFilter(share.cpTargetDirectory,item=>Number(item.coType)===3||cpNPVideo(item.coName)),'yidong',{id:'root',path:'',depth:0},read,child,build,profile,1001,share.cpB8ReadToken);
 return cpB8Files(rows,build,x=>x.coID);
};
cpNPTianyiCatalog=async function(share,profile){
 cpNPGuard('tianyi',profile);const info=await cpNPTianyiShareInfo(share,profile),seen=new Set([info.id]);cpLocationTianyi(share.cpTargetDirectory,seen);
 const build=(file,path)=>{if(file.id.startsWith('!tycas1!'))throw cpError('QUALITY_UNAVAILABLE');return cpNPVideo(file.name)?cpNPItem(share,file.id,file.name,file.size,path,{tianyiShareId:info.shareId}):null;};
 if(!info.isFolder){const file=build(info,'');return {list:file?[file]:[]};}
 const child=(item,parent)=>{
  if(!item.cpB8Folder)return null;
  if(parent.depth>=4)throw cpError('UPSTREAM_ERROR');return cpB8Folder(item,parent,item.id,item.name);
 };
 const read=async(folder,emit,cpTargetToken)=>{
  const readToken=cpTargetToken||share.cpB8ReadToken;
  for(let page=1;page<=30;page++){
   cpCoveragePage(share.cpTargetDirectory);
   cpNPGuard('tianyi',profile);
   const response=await cpNPTianyiGet(cpNPTIANYI_SHARE_API+'listShareDir.action?'+cpNPQuery({noCache:Math.random(),pageNum:page,pageSize:60,fileId:folder.id,shareDirFileId:folder.id,isFolder:true,shareId:info.shareId,shareMode:info.shareMode,iconOption:5,orderBy:'filename',descending:false,accessCode:share.passcode||''}),profile,cpNPTianyiShareHeaders(share),false,readToken);
   if(readToken?.cancelled)throw cpB6Unused();
   const {files,folders}=cpNPTianyiRows(response);
   for(const item of files.concat(folders)){if(seen.has(item.id))throw cpError('UPSTREAM_ERROR');seen.add(item.id);}
   emit(files.concat(folders.map(item=>Object.assign({},item,{cpB8Folder:true}))));
   if(files.length+folders.length<60)break;if(page===30)throw cpError('UPSTREAM_ERROR');
  }
 };
 const rows=await cpTargetB8Walk(cpTargetFilter(share.cpTargetDirectory,item=>cpNPVideo(item.name)),'tianyi',{id:info.id,path:'',depth:0},read,child,build,profile,500,share.cpB8ReadToken);
 cpNPGuard('tianyi',profile);return cpB8Files(rows,build,x=>x.id);
};

// Share tokens are reusable only after verification in this operation. Raw
// 24-hour catalog entries (including video.passCodeToken) cannot seed this map.
function cpBetaShareTokenKey(provider,share){return cpReadKey(provider,share.shareId,share.passcode,'beta-share-token');}
function cpBetaRememberShareToken(provider,share,token,profile){
 cpNPGuard(provider,profile);if(token&&cpReadOperation)cpReadOperation.set(cpBetaShareTokenKey(provider,share),Promise.resolve(token));
}
function cpBetaXunleiShareToken(video,profile){
 return cpReadReuse('xunlei',video.shareId,video.passcode,'beta-share-token',async()=>{
  const data=await cpNPXunleiApi('GET','drive/v1/share?'+cpNPQuery({share_id:video.shareId,pass_code:video.passcode||'',limit:100}),null,true,profile);
  return data.pass_code_token||'';
 });
}
const cpBetaGuangyaShareTokenNative=cpNPGuangyaShareToken;
cpNPGuangyaShareToken=function(share,profile){return cpReadReuse('guangya',share.shareId,share.passcode,'beta-share-token',()=>cpBetaGuangyaShareTokenNative(share,profile));};

// Auth is independent of share contents. Unused speculation is cancellable and
// never enters the operation's mandatory pending set or persistent storage.
const cpB8PrepareAuthNative=cpNPTianyiPrepareAuth;
function cpB8StartTianyiAuth(){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile;
 if(!operation||!cpDriveEnabled('tianyi')||cpBlockedProviders.has('tianyi'))return;
 const cookie=String(cpNewPanAuthValue('tianyi')||'').trim();if(!cookie)return;
 const entries=operation.betaTianyiAuth||(operation.betaTianyiAuth=new Map()),key=cpNPMd5(cookie);if(entries.has(key))return;
 const entry={token:cpB6Token(),used:false};entries.set(key,entry);
 entry.task=Promise.resolve().then(()=>{cpNPGuard('tianyi',profile);if(entry.token.cancelled)throw cpB6Unused();return cpB8PrepareAuthNative(profile,cookie,entry.token);});
 entry.task.catch(()=>{});
}
cpNPTianyiPrepareAuth=function(profile,cookie){
 cpNPGuard('tianyi',profile);
 const entry=cpReadOperation?.betaTianyiAuth?.get(cpNPMd5(cookie));
 if(entry&&!entry.token.cancelled){
  entry.used=true;
  if(!entry.demanded)entry.demanded=entry.task.catch(error=>{
   cpNPGuard('tianyi',profile);if(error?.code!=='UPSTREAM_ERROR')throw error;
   // One recovery for a transient prewarm error; terminal auth stays terminal.
   return cpBetaReadOutcome('tianyi',cpNPMd5(cookie),'','auth-demand',()=>cpB8PrepareAuthNative(profile,cookie));
  });
  return entry.demanded;
 }
 return cpBetaReadOutcome('tianyi',cpNPMd5(cookie),'','auth-demand',()=>cpB8PrepareAuthNative(profile,cookie));
};
const cpB8ReadCatalogNative=cpB6ReadCatalog;
cpB6ReadCatalog=function(params,share,work){if(share.provider==='tianyi')cpB8StartTianyiAuth();return cpB8ReadCatalogNative(params,share,work);};

// Only providers with token-aware anonymous catalog requests may speculate.
// No streamed file getter runs until validity and access attributes are approved.
async function cpB8CheckedCatalog(share,cached,site,keyword,params,titles=[]){
 const profile=cpActiveProfile||cpProfile;
 if(cached)cached=cpTargetCached(cached,params,titles);
 const speculative=!cached&&!!share.passcode&&['tianyi','yidong'].includes(share.provider);
 let entry,accepted=false;
 if(speculative){
  const token=cpB6Token(),input=Object.assign({},share,{cpB8ReadToken:token,cpTargetDirectory:cpTargetScope(params,titles,share.cpCoverageFallback)});
  entry={token,cacheKey:cpNewPanCatalogKey(share)};
  entry.task=Promise.resolve().then(()=>{cpCheck(profile);if(token.cancelled)throw cpB6Unused();return rexShareCatalog(input);}).then(value=>({value}),error=>({error}));
 }
 try{
  const checked=(await qpCheckShares([share],site,keyword))[0];cpCheck(profile);
  if(['bad','invalid','expired'].includes(checked.validity)){
   if(entry)entry.token.cancel();
   return {checked,catalog:null};
  }
  let catalog=cached;
  if(entry&&checked.passcode===share.passcode){
   const outcome=await entry.task;cpCheck(profile);if(outcome.error)throw outcome.error;catalog=outcome.value;accepted=true;
  }else if(entry)entry.token.cancel();
  if(!catalog)catalog=await cpQueueCatalogShare(checked.provider,()=>cpTargetRead(params,checked,titles));
  return {checked,catalog};
 }finally{if(entry){entry.token.cancel();if(!accepted)cpB8DiscardCatalog(entry.cacheKey);}}
}

function cpB8DiscardCatalog(key){
 // Capture the native cache key before starting I/O, so account changes cannot
 // make cleanup erase another profile's catalog instead of this preparation.
 if(typeof huajuanInvalidateCache==='function')huajuanInvalidateCache(key);
 if(typeof rexMemoryCache!=='undefined'){const hash=baiduSha1(key);rexMemoryCache.delete(hash);safeStorageSet(CP_COOKIE_ROOT+'catalog.'+hash,'');}
}

// B10: account UID is independent of share verification and catalog contents.
// Stage only within the current operation; native demand owns validation/cache
// admission and error observation. Unused preparation never delays completion.
function cpB10BaiduUidUrl(){return 'https://mbd.baidu.com/userx/v1/info/get?'+toQuery({
 appname:'baiduboxapp',fields:'        ["bg_image","member","uid","avatar", "avatar_member"]',
 client:'',clientfrom:'',lang:'zh-cn',tpl:'',ttt:''
});}
function cpB10StartBaiduUid(share){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile;
 if(!operation||!cpBaiduUidScope||!cpDriveEnabled('baidu')||cpBlockedProviders.has('baidu'))return;
 cpCheck(profile);
 let headers;try{headers=baiduHeaders(share);}catch(_){return;}
 if(!/(?:^|;)\s*BDUSS=[^;]+/.test(headers.Cookie||''))return;
 const url=cpB10BaiduUidUrl(),key=cpBaiduUidKey('GET',url,headers);
 if(key===null||cpBaiduUidScope.has(key))return;
 const entries=operation.betaBaiduUid||(operation.betaBaiduUid=new Map());if(entries.has(key))return;
 const cached=cpBaiduCached(cpBaiduCacheKey('uid',key),300000);if(cpValidBaiduUid(cached))return;
 const entry={token:cpB6Token(),used:false};entries.set(key,entry);
 entry.task=Promise.resolve().then(()=>{
  cpCheck(profile);if(entry.token.cancelled)throw cpB6Unused();
  return httpJsonCore('GET',url,null,headers,entry.token);
 }).then(value=>({value}),error=>({error}));
}
const cpB10ReadBaiduIdentityNative=cpReadBaiduIdentity;
cpReadBaiduIdentity=function(scope,key,request,profile){
 const entry=cpReadOperation?.betaBaiduUid?.get(key);
 if(!entry||entry.token.cancelled)return cpB10ReadBaiduIdentityNative(scope,key,request,profile);
 return cpB10ReadBaiduIdentityNative(scope,key,()=>{
  entry.used=true;
  if(!entry.demanded)entry.demanded=entry.task.then(outcome=>{
   cpCheck(profile);
   if(!outcome.error)return outcome.value;
   const error=outcome.error,status=Number(error?.status);
   if(status===401||status===429||['AUTH_FAILED','RATE_LIMITED','ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','BETA_READ_UNUSED'].includes(error?.code))throw error;
   // A single foreground recovery for a transient speculative failure, shared
   // by all files/subtitles. No failure enters persistent identity caches.
   return request();
  });
  return entry.demanded;
 },profile);
};
const cpB10ReadCatalogNative=cpB6ReadCatalog;
cpB6ReadCatalog=function(params,share,work){if(share.provider==='baidu')cpB10StartBaiduUid(share);return cpB10ReadCatalogNative(params,share,work);};
// Known-file/manual paths can overlap UID with share verification as well.
const cpB10BaiduResourceNative=getBaiduResource;
getBaiduResource=function(info){const v=info.videoInfo||{};if(v.shareid&&v.uk&&v.fid)cpB10StartBaiduUid(v);return cpB10BaiduResourceNative(info);};

const CP_B11_QUARK_FOLDER_URL="https://drive-pc.quark.cn/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,updated_at:desc&fetch_all_file=1&fetch_risk_file_name=1";
// B11: stage the raw read-only response. Only native foreground lookup may
// decode it, sync response cookies, observe errors, or create a missing folder.
function cpB11StartQuarkFolder(){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile;
 if(!operation||operation.betaQuarkFolder||!cpDriveEnabled('quark')||cpBlockedProviders.has('quark')||!ensureCookie())return;
 cpCheck(profile);
 const entry={token:cpB6Token(),profile,used:false};operation.betaQuarkFolder=entry;
 entry.task=Promise.resolve().then(()=>{
  cpCheck(profile);if(entry.token.cancelled)throw cpB6Unused();
  entry.cookieAtDispatch=ensureCookie();
  return cpHttpGet(CP_B11_QUARK_FOLDER_URL,{headers:quarkHeaders(),timeout:8000,cpB6Token:entry.token});
 }).then(value=>({value}),error=>({error}));
}
const cpB11HttpGetNative=cpHttpGet;
cpHttpGet=function(url,options,beforeDispatch){
 const entry=cpReadOperation?.betaQuarkFolder;
 if(url!==CP_B11_QUARK_FOLDER_URL||options?.cpB6Token||beforeDispatch||!entry?.used||entry.token.cancelled)return cpB11HttpGetNative(url,options,beforeDispatch);
 if(!entry.response)entry.response=entry.task.then(outcome=>{
  cpCheck(entry.profile);
  if(!outcome.error)return outcome.value;
  if(['AUTH_FAILED','RATE_LIMITED','ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','BETA_READ_UNUSED'].includes(outcome.error?.code))throw outcome.error;
  // Only one native foreground recovery of a failed speculative transport.
  entry.recovered=true;
  return cpB11HttpGetNative(url,options,beforeDispatch);
 }).then(response=>{
  cpCheck(entry.profile);
  const status=Number(response.status||response.statusCode||0);
  if(status===401||status===429){const error=cpError(status===401?'AUTH_FAILED':'RATE_LIMITED');error.status=status;throw error;}
  // A staged response may precede a newer foreground cookie rotation. Preserve
  // that newer session instead of replaying the older response's Set-Cookie.
  if(!entry.recovered&&entry.cookieAtDispatch!==undefined&&ensureCookie()!==entry.cookieAtDispatch){
   const headers={};for(const key of Object.keys(response.headers||{}))if(key.toLowerCase()!=='set-cookie')headers[key]=response.headers[key];
   return Object.assign({},response,{headers});
  }
  return response;
 });
 return entry.response;
};
const cpB11CheckFolderNative=checkFolderExists;
checkFolderExists=function(name){
 const entry=cpReadOperation?.betaQuarkFolder;
 if(name!==CACHE_FOLDER||!entry||entry.token.cancelled)return cpB11CheckFolderNative(name);
 cpCheck(entry.profile);entry.used=true;
 if(!entry.lookup)entry.lookup=Promise.resolve().then(()=>{cpCheck(entry.profile);return cpB11CheckFolderNative(name);});
 return entry.lookup;
};
const cpB11ReadCatalogNative=cpB6ReadCatalog;
cpB6ReadCatalog=function(params,share,work){if(share.provider==='quark')cpB11StartQuarkFolder();return cpB11ReadCatalogNative(params,share,work);};

// Refill two local-certain read-only preparations while the catalog is open.
// Native URL getter limits and outcome memoization remain authoritative.
function cpB11Rolling(provider,operation){
 const profile=cpActiveProfile||cpProfile,waiting=[];let active=0,closed=false,failed=false;
 const pump=()=>{
  while(!closed&&!failed&&active<2&&waiting.length){
   const info=waiting.shift();active++;
   const task=Promise.resolve().then(()=>{
    cpCheck(profile);
    if(cpReadOperation!==operation||cpBlockedProviders.has(provider)||!cpDriveEnabled(provider))return [];
    return provider==='uc'?getUcResource(info):provider==='baidu'?getBaiduResource(info):get115Resource(info);
   });
   cpTrackRead(task,operation).then(()=>{},()=>{failed=true;waiting.length=0;}).finally(()=>{active--;pump();});
  }
 };
 return {offer(info){if(closed||failed)return;waiting.push(info);pump();},close(){closed=true;waiting.length=0;}};
}

// B12: local card filtering, plus at most one clean-miss alternate query.
function cpB12IdentityRecord(params){
 const requested=cpRequestedYear(params);if(requested.conflict)return null;
 const signature=typeof cpTrustedTitleSignature==='function'?cpTrustedTitleSignature(params):JSON.stringify([4,String(params.tmdbId||params.tmdbID||''),params.type==='movie'?'movie':'tv',Number(params.season||1),params.seriesName||params.title||params.name||'',requested.year,params.imdbId||'']);
 const key='identity:'+baiduSha1(signature),valid=r=>r&&r.signature===signature&&r.expires>Date.now()&&Array.isArray(r.titles)&&r.titles.length<=16&&r.titles.every(t=>typeof t==='string'&&t.length<=200&&!/[\x00-\x1f\x7f]/.test(t));
 let record=cpRead(key);try{const raw=Widget.sharedCache?.get('catpaw.upstream-enhanced.identity.v1',key);if(raw){const shared=JSON.parse(raw);if(valid(shared))record=shared;}}catch(_){}
 return valid(record)?record:null;
}
function cpB12LocalTitles(params){
 return [...new Set(cpRelevanceTitles(params).concat(cpB12IdentityRecord(params)?.titles||[]))];
}
function cpB12CanSearch(){
 if(cpResourceOwner?.betaB12DiscoveryFailed)return false;
 const enabled=typeof cpCandidateEnabled==='function'?cpCandidateEnabled:quanpanProviderEnabled;
 return ['quark','baidu','uc','115','123','xunlei','guangya','yidong','tianyi'].some(p=>enabled(p)&&!cpBlockedProviders.has(p));
}
function cpB12DiscoveryFailed(){if(cpResourceOwner)cpResourceOwner.betaB12DiscoveryFailed=true;}
// Failure results are shared only within this owner, never persisted as a miss.
// A catalog lookup followed by fallback must not repeat a failed metadata call.
const cpB12HasTrustedNative=typeof cpTrustedTitles==='function';
const cpB12TrustedNative=cpB12HasTrustedNative?cpTrustedTitles:cpB7TrustedTitles;
function cpB12Trusted(params){
 const owner=cpResourceOwner||cpReadOperation;
 if(!owner)return cpB12TrustedNative(params);
 const key=JSON.stringify([params.type,params.season||1,params.tmdbId||params.tmdbID||'',cpRequestedYear(params),cpRelevanceTitles(params),params.imdbId||'']);
 const memo=owner.betaB12Titles||(owner.betaB12Titles=new Map());
 if(!memo.has(key))memo.set(key,Promise.resolve().then(()=>cpB12TrustedNative(params)));
 return memo.get(key);
}
if(cpB12HasTrustedNative)cpTrustedTitles=cpB12Trusted;else cpB7TrustedTitles=cpB12Trusted;
function cpB12Alternate(params,titles){
 if(cpRequestedYear(params).conflict)return '';
 const clean=typeof cpCandidateSearchTitle==='function'?cpCandidateSearchTitle:qpCleanQuery;
 const primary=clean(params.seriesName||params.title||params.name||params.keyword||'');
 // Validated native records put the original immediately after the main name.
 // Host-supplied original names take precedence over regional translations.
 const ordered=[params.originalName,params.originalTitle,params.original_name,params.original_title,cpB12IdentityRecord(params)?.originalTitle,...titles];
 return ordered.filter(t=>typeof t==='string'&&t.trim()&&t.length<=200&&!/[\x00-\x1f\x7f]/.test(t)).map(clean).find(t=>t&&!cpTitlesEqual(t,primary))||'';
}
cpB7SearchMatches=async function(rows,params,onReady,canStart=()=>true){
 const verified=cpB14VerifiedSiteIdentity(params),titles=[...new Set(cpB12LocalTitles(params).concat(verified?.titles||[]))],matching=Object.assign({},params,verified?{year:verified.year}:{},{alternativeTitles:titles});
 const accepted=rows.filter(row=>cpSearchResultMatches(row.title,matching));
 const immediate=accepted.filter(row=>!cpCoverageCard(row.title,matching));
 if(onReady&&immediate.length&&canStart())await onReady(immediate,titles);
 return {rows:accepted,titles};
};

const cpB12SearchTitleNative=cpSearchTitleMatches;
cpSearchTitleMatches=function(value,params){
 const requested=cpRequestedYear(params);if(requested.conflict)return false;
 const raw=String(value||''),titles=cpRelevanceTitles(params),evidence=cpWithoutKnownTitles(raw,titles);
 if(requested.year&&[...evidence.matchAll(/(?:^|[^a-z0-9])((?:19|20)\d{2})(?=$|[^a-z0-9])/gi)].some(m=>Number(m[1])!==requested.year))return false;
 // Check every season marker, including bilingual cards with contradictory ones.
 const seasons=raw.match(/第\s*[一二三四五六七八九十百\d]+\s*季|(?:^|[^a-z0-9])Season[ ._-]*\d+(?=$|[^a-z0-9])|S\d{1,2}[ ._-]*E\d+|(?:^|[^a-z0-9])S\d{1,2}(?=$|[^a-z0-9])/gi)||[];
 if(params.type==='movie'&&seasons.length||seasons.some(s=>cpExplicitSeason(s)!==Number(params.season||1)))return false;
 if(cpB12SearchTitleNative(value,params))return true;
 const quality=/[ ._-](?:[248]K|\d{3,4}P|HDR|杜比|蓝光|WEB[ ._-]*DL|BluRay|REMUX)(?=$|[ ._-])/i.exec(raw);
 if(quality&&!cpSearchMetadataLabel(raw.slice(quality.index).replace(/\bSDR\b|\bHHWEB版本/gi,'')))return false;
 const text=cpRelevanceSearchName(raw);
 for(const title of titles){
  if(!/[a-z]/i.test(title)||/[\u3400-\u9fff]/.test(title))continue;
  const words=title.split(/[\s·:：._\-()[\]（）]+/).filter(Boolean).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  if(!words.length)continue;
  const match=new RegExp('(^|[ \\t])('+words.join('[ ._-]+')+')(?=$|[^a-z0-9])','i').exec(text);if(!match||match.index===0)continue;
  const prefix=text.slice(0,match.index).replace(/第\s*[一二三四五六七八九十百\d]+\s*季/g,'').replace(/[（(]\s*(?:19|20)\d{2}\s*[）)]/g,'').trim();
  // A Chinese title followed by an exact trusted original is a bilingual card.
  // Extra editions, sequels and arbitrary suffixes remain meaningful evidence.
  if(!/^[\u3400-\u9fff·\s]{1,40}$/.test(prefix)||/真人|剧场|特[别典]|番外|预告|花絮|续[作集篇]|第.*[部篇]|前传|后传|外传/.test(prefix))continue;
  const original=text.slice(match.index+match[1].length);
  if(cpB12SearchTitleNative(original,params))return true;
 }
 return false;
};


function cpB14VerifiedSiteIdentity(params){
 const requested=cpRequestedYear(params),id=String(params.tmdbId||params.tmdbID||'');
 if(id!=='273240'||params.type!=='tv'||Number(params.season||1)!==1||requested.conflict||requested.year&&requested.year!==2026)return null;
 const names=['校外','Off Campus','校園戀曲','校园之外'];
 const primary=params.seriesName||params.title||params.name||params.keyword||'';
 if(!names.some(name=>cpTitlesEqual(name,primary)))return null;
 return {year:2026,titles:['校园之外','Off Campus','校園戀曲']};
}

// A target catalog covers one complete directory, never the complete share.
// Scope travels with the share; concurrent shares cannot overwrite one another.
function cpTargetScope(params,titles=[],probe=false){
 const episode=Number(params?.episode),season=Number(params?.season||1);
 if(params?.type==='movie'||!Number.isInteger(episode)||episode<1||episode>=1000||!Number.isInteger(season)||season<1)return null;
 const names=[...new Set(cpRelevanceTitles(params).concat(titles||[]))];if(!names.length)return null;
 return cpCoverageScope({params:{...params,season,episode},titles:names,key:JSON.stringify(['season-priority-v1',season,episode,names])},probe);
}
function cpTargetCached(catalog,params,titles){
 if(!catalog||params?.refresh||params?.forceRefresh)return null;
 const coverage=catalog?.cpTargetDirectory;if(!coverage)return catalog;
 const scope=cpTargetScope(params,titles);
 if(!scope||!(coverage.expires>Date.now()))return null;
 if(coverage.completeShare)return catalog;
 if(coverage.directories&&coverage.reuseKey===JSON.stringify([scope.params.season,scope.titles])){
  const selected=coverage.directories.find(directory=>directory.list.some(file=>cpEpisodeVideoMatches(file,scope.params,scope.titles)));
  return selected?Object.assign({},catalog,selected):null;
 }
 if(coverage.key===scope.key)return catalog;
 // A partial share can cross episodes only when every earlier visited
 // directory was empty and this complete directory already contains the hit.
 return coverage.reusable===true&&coverage.reuseKey===JSON.stringify([scope.params.season,scope.titles])&&Array.isArray(catalog.list)&&catalog.list.some(file=>cpEpisodeVideoMatches(file,scope.params,scope.titles))?catalog:null;
}
function cpTargetCacheMatches(catalog,params,titles){return !!cpTargetCached(catalog,params,titles);}
function cpTargetFilter(scope,accept){return scope?{...scope,accept,cpTargetObservation:scope.cpTargetObservation||(scope.cpTargetObservation={})}:null;}
function cpTargetFolderSeason(item){
 const name=item.file_name||item.server_filename||item.n||item.FileName||item.name||item.fileName||item.caName||item.catalogName||item.coName||'';
 // Normalize only whitespace between a season label and its number. Keep the
 // native season parser's number boundaries and Chinese/episode-pack support.
 return cpExplicitSeason(String(name).replace(/((?:^|[^a-z0-9])(?:season|s))\s+(?=\d)/gi,'$1'));
}
function cpTargetHit(scope,item,path){
 const name=item.file_name??item.server_filename??item.n??item.FileName??item.name??item.fileName??item.coName??'';
 const video={...item,file_name:String(name),parentPath:item.parentPath||path||''};
 if(scope.cpCoverageProbe){video.file_name=cpCoverageNormalize(video.file_name);video.parentPath=cpCoverageNormalize(video.parentPath);if(!cpCoverageFileMatches(video,scope.params,scope.titles))return false;}
 return (scope.accept?scope.accept(item):isVideoFile(video))&&cpEpisodeVideoMatches(video,scope.params,scope.titles);
}
function cpTargetItemId(item){return String(item.fid||item.fs_id||item.fsid||item.FileId||item.fileId||item.coID||item.id||item.resId||item.path||'');}
// Native readers own pagination and validation. Jobs may read concurrently;
// only the ordered, complete prefix can affect selection or cached evidence.
async function cpTargetCollect(scope,root,read,child,onItem,check=()=>{},max=Infinity,path=()=>undefined,includeFolders=false){
 const queue=[root],seen=new Set(),result=[],jobs=new Map(),priorities=new Map(),groups=[];result.directories=[];let current,lookahead,stopped=false;
 const attempt=cpBetaReadAttempt();
 const folder=scope.folder||((item,node)=>{const next=child(item,node);return next!==undefined&&next!==null;});
 const key=node=>String(node?.id??node),rank=node=>priorities.get(key(node))||0;
 const emitFile=(item,node)=>{
  if(!onItem||folder(item,node)||scope.cpCoverageProbe&&!cpTargetHit(scope,item,cpCoveragePath(scope,node,path(node))))return;
  const observation=scope.cpTargetObservation,previous=observation?.preparing;
  if(observation&&!scope.cpCoverageProbe)observation.preparing={attempt,path:cpCoverageNormalize(path(node)||scope.cpCoveragePaths.get(cpCoverageNodeKey(node))||'')};
  try{onItem(item,node);}finally{if(observation)observation.preparing=previous;}
 };
 // Bounded coverage probes reserve every directory/page for logical work.
 const canPrefetch=()=>!scope.cpCoverageProbe&&jobs.size<max;
 const start=(node,priority=0)=>{
  const id=key(node);if(jobs.has(id))return jobs.get(id);
  if(jobs.size>=max)throw cpError('UPSTREAM_ERROR');cpCoverageDirectory(scope);
  priority=priorities.get(id)??priority;priorities.set(id,priority);
  const job={node,priority,items:[],token:cpB6Token(),active:false,emitted:false,error:null};jobs.set(id,job);
  if(scope.cpTargetReadToken){if(scope.cpTargetReadToken.cancelled)job.token.cancel();else scope.cpTargetReadToken.closed.then(()=>job.token.cancel());}
  job.task=Promise.resolve().then(()=>{if(job.token.cancelled)throw cpB6Unused();return cpB6Await(job.token,read(node,rows=>{
   if(stopped||job.token.cancelled)throw cpB6Unused();check();job.emitted=true;job.items.push(...rows);
   if(job.active){for(const item of rows)emitFile(item,node);preview(job,rows);}
  },job.token));}).then(rows=>{if(!job.emitted&&Array.isArray(rows))job.items.push(...rows);},error=>{job.error=error;});
  return job;
 };
 const preview=(job,rows)=>{
  if(lookahead||stopped||!canPrefetch()||job.items.some(item=>!folder(item,job.node)&&cpTargetHit(scope,item,path(job.node))))return;
  // Before parent pagination completes, never speculate into another season.
  const candidates=rows.filter(item=>folder(item,job.node)&&cpTargetFolderSeason(item)===scope.params.season);
  if(candidates.length){const next=child(candidates[0],job.node);lookahead=start(next,1);}
 };
 const close=()=>{stopped=true;for(const job of jobs.values())if(job!==current)job.token.cancel();};
 try{
 for(let cursor=0;cursor<queue.length;cursor++){
  check();const node=queue[cursor],id=key(node);if(seen.has(id))continue;seen.add(id);
  current=start(node);if(lookahead===current)lookahead=null;current.active=true;
  for(const item of current.items)emitFile(item,node);
  const next=queue[cursor+1];
  if(!lookahead&&canPrefetch()&&next!==undefined&&rank(next)===current.priority&&!current.items.some(item=>!folder(item,node)&&cpTargetHit(scope,item,path(node))))lookahead=start(next,rank(next));
  await current.task;current.active=false;check();if(current.error)throw current.error;
  const items=current.items,emitted=current.emitted;
  const files=[],folders=[];
  for(const item of items){if(folder(item,node))folders.push(item);else files.push(item);}
  // Multiple meaningful work branches cannot lend an unknown folder the
  // resource card's identity. Season/quality/role folders carry no work name.
  if(typeof cpFileCatalogParams==='function'&&folders.length>1){
   const labels=folders.map(item=>({parentPath:item.file_name||item.server_filename||item.n||item.FileName||item.name||item.fileName||item.caName||item.catalogName||item.coName||''}));
   if(cpFileCatalogParams(scope.params,labels).cpFileContextAmbiguous){scope.params.cpFileContextAmbiguous=true;if(scope.cpTargetObservation)scope.cpTargetObservation.ambiguous=true;}
  }
  for(const item of folders){const season=cpTargetFolderSeason(item);if(season)scope.cpCoverageSeasons.add(season);}
  // Existing read-only file preparation may overlap later pages. A catalog
  // hit is committed only after every page has completed successfully.
  for(const item of files)scope.cpCoverageParents.set(cpCoverageItemKey(item),path(node)||scope.cpCoveragePaths.get(cpCoverageNodeKey(node))||'');
  if(!emitted&&onItem)for(const item of files)emitFile(item,node);
  const hit=files.some(item=>cpTargetHit(scope,item,cpCoveragePath(scope,node,path(node))));
  const rows=(includeFolders?items:files).map(item=>({item,parent:node,path:path(node)}));
  groups.push({...cpLocationGroup(scope,node,files,folders),ids:files.map(cpTargetItemId),packageSizeBytes:typeof qpFileBytes==='function'?files.reduce((total,item)=>total+qpFileBytes(item.size??item.Size??item.s),0):undefined});
  if(hit){
   if(scope.cpTargetObservation)Object.assign(scope.cpTargetObservation,{groups,selected:groups.length-1});
   if(scope.cpTargetCommit)scope.cpTargetCommit(groups.at(-1).ids);
   result.push(...rows);result.directories.push(...folders);return result;
  }
  result.push(...rows);result.directories.push(...folders);
  // A directory name is a scheduling hint, never evidence of a file hit.
  // Stable sorting keeps all fallback folders and equal-priority versions.
  folders.sort((a,b)=>Number(cpTargetFolderSeason(b)===scope.params.season)-Number(cpTargetFolderSeason(a)===scope.params.season));
  queue.push(...folders.filter(item=>!scope.cpCoverageProbe||cpTargetFolderSeason(item)===null||cpTargetFolderSeason(item)===scope.params.season).map(item=>{const next=cpCoverageChild(scope,node,item,child(item,node),path(node));priorities.set(key(next),Number(cpTargetFolderSeason(item)===scope.params.season));return next;}));
 }
 if(scope.cpTargetObservation)Object.assign(scope.cpTargetObservation,{groups,selected:null});
 return result;
 }catch(error){
  cpBetaDiscardReadAttempt(attempt);
  throw error;
 }finally{close();}
}
function cpTargetWalk(scope,provider,root,read,child,onItem){
 if(!scope)return cpWalkCatalog(provider,root,read,child,onItem);
 return cpTargetCollect(scope,root,read,child,onItem,()=>cpCheck(cpActiveProfile||cpProfile));
}
function cpTargetQpWalk(scope,root,read,child,onItem){
 if(!scope)return qpCatalogTree(root,read,child,onItem);
 return cpTargetCollect(scope,root,read,child,onItem,()=>cpCheck(cpActiveProfile||cpProfile),Infinity,()=>undefined,true);
}
function cpTargetB8Walk(scope,provider,root,read,child,onFile,profile,max=1001,readToken){
 if(!scope)return cpB8Walk(provider,root,read,child,onFile,profile,max,readToken);
 const check=()=>{if(readToken?.cancelled)throw cpB6Unused();cpNPGuard(provider,profile);};
 const target={...scope,cpTargetReadToken:readToken,...(provider==='tianyi'?{folder:item=>!!item.cpB8Folder}:{})};
 return cpTargetCollect(target,root,read,child,onFile?(item,node)=>onFile(item,node.path):null,check,max,node=>node.path);
}
async function cpTargetRaw(share){
 cpCoverageRegister(share.cpTargetDirectory,share);
 if(typeof qpShareCatalogKey==='function')qpOperation?.catalogReads?.add(qpShareCatalogKey(share));
 const scope=share.cpTargetDirectory;
 const admissions=cpReadOperation&&(cpReadOperation.targetAdmissions||(cpReadOperation.targetAdmissions=new Map()));
 scope.cpTargetCommit=ids=>admissions?.set(cpB6CatalogKey(share),new Set(ids));
 let result;
 if(cpIsNewPan(share.provider))result=await cpNewPanCatalog(share);
 else if(share.provider==='uc')result=await getUcVideos(share);
 else if(share.provider==='baidu')result=await getBaiduVideos(share);
 else if(share.provider==='115')result=await get115Videos(share);
 else if(share.provider==='123'&&typeof getPan123Videos==='function')result=await getPan123Videos(share);
 else result=await getVideosFromShareLink(share.url,share.passcode,share.cpTargetDirectory);
 cpCheck(cpActiveProfile||cpProfile);
 cpCoverageRemember(share.cpTargetDirectory,share,result);
 const observation=scope.cpTargetObservation,all=result.list;
 if(observation?.ambiguous)for(const file of all)file.cpFileContextAmbiguous=true;
 const directories=observation?.groups?.map(group=>{const members=new Set(group.ids);return {list:all.filter(file=>members.has(String(file.fid))),...(group.packageSizeBytes===undefined?{}:{packageSizeBytes:group.packageSizeBytes})};});
 if(observation?.selected!=null)Object.assign(result,directories[observation.selected]);
 result.cpTargetDirectory={key:share.cpTargetDirectory.key,reuseKey:JSON.stringify([share.cpTargetDirectory.params.season,share.cpTargetDirectory.titles]),...(!scope.cpCoverageProbe&&directories?{directories}:{}),completeShare:false,expires:Date.now()+14400000};
 return result;
}
function cpTargetRead(params,share,titles=[],refresh=false){
 refresh=refresh||params?.refresh===true||params?.forceRefresh===true;
 const scope=cpTargetScope(params,titles,share.cpCoverageFallback);
 if(!scope)return cpB6ReadCatalog(cpColdMatchParams(params,titles),share,()=>typeof cpReadRawCatalog==='function'?cpReadRawCatalog(share,refresh):rexShareCatalog(share));
 if(refresh&&typeof cpInvalidateCandidateShare==='function')cpInvalidateCandidateShare(share);
 const input={...share,cpTargetDirectory:scope};
 return cpB6ReadCatalog(cpColdMatchParams(params,titles),input,()=>typeof cpReadRawCatalog==='function'?cpReadRawCatalog(input,refresh):rexShareCatalog(input));
}

// Keep native routing (and its refresh/invalidation contract) as the public
// catalog seam. Scoped reads can reuse a proven complete native snapshot.
if(typeof rexShareCatalog==='function'){
 const native=rexShareCatalog;rexShareCatalog=function(share,...args){return share.cpTargetDirectory?(cpTargetWholeCache(share)||cpTargetRaw(share)):native(share,...args);};
}
if(typeof huajuanShareCatalog==='function'){
 const native=huajuanShareCatalog;huajuanShareCatalog=function(share,...args){return share.cpTargetDirectory?(cpTargetWholeCache(share)||cpTargetRaw(share)):native(share,...args);};
}
function cpTargetQueue(token,provider,work){return cpQueueCatalogRead(provider,()=>{if(token?.cancelled)throw cpB6Unused();return cpB6Await(token,work());});}
const cpTargetEmitNative=cpB6EmitFile;
cpB6EmitFile=function(provider,share,file,...args){
 if(share.cpTargetDirectory?.params.cpFileContextAmbiguous)file={...file,cpFileContextAmbiguous:true};
 const admitted=cpReadOperation?.targetAdmissions?.get(cpB6CatalogKey(Object.assign({},share,{provider})));
 if(admitted&&!admitted.has(String(file.fid)))return;
 return cpTargetEmitNative(provider,share,file,...args);
};
function cpTargetWholeCache(share){
 if(share.cpTargetDirectory?.cpCoverageProbe||share.cpTargetDirectory?.params.refresh||share.cpTargetDirectory?.params.forceRefresh)return null;
 const accounts=cpAccounts(),cookie=share.provider==='baidu'?accounts[1]:share.provider==='115'?accounts[2]:share.provider==='quark'?ensureCookie():'';
 const raw=cpIsNewPan(share.provider)?cpNewPanCatalogKey(share):typeof qpShareCatalogKey==='function'?qpShareCatalogKey(share):[share.provider==="quark"?"share-video-v3":"share",share.provider,share.shareId,share.passcode||'',baiduSha1(String(cookie||''))].join(':');
 const hash=baiduSha1(raw),memory=typeof huajuanMemoryCache!=='undefined'?huajuanMemoryCache:typeof rexMemoryCache!=='undefined'?rexMemoryCache:null;
 let record=memory?.get(hash);if(!record)try{record=JSON.parse(safeStorageGet(CP_COOKIE_ROOT+'catalog.'+hash)||'null');}catch(_){}
 if(!(record?.expires>Date.now())||!Array.isArray(record.value?.list)||record.value.cpTargetDirectory)return null;
 const catalog=JSON.parse(JSON.stringify(record.value));catalog.cpTargetDirectory={completeShare:true,expires:Date.now()+14400000};return catalog;
}
function cpTargetCandidateIndex(key){
 const current=cpRead(key);if(current?.expires>Date.now())return current;
 const previous=key.replace(/^candidate-index-(?:coverage|target)-v1:/,'candidate-index-v2:'),legacy=cpRead(previous);
 if(!(legacy?.expires>Date.now())||!legacy.complete||!Array.isArray(legacy.descriptors)||!legacy.catalogs||Object.values(legacy.catalogs).some(record=>record.catalog?.cpTargetDirectory))return null;
 legacy.expires=Math.min(legacy.expires,Date.now()+14400000);for(const record of Object.values(legacy.catalogs))record.expires=Math.min(record.expires,legacy.expires);
 cpWrite(previous,legacy);return legacy;
}

// Only persisted clones pass here. Fresh 123 URLs remain available for the
// current operation, while every stored directory must refresh signed URLs.
function cpTargetStripUrls(catalog){
 for(const video of catalog.list||[])delete video.downloadUrl;
 for(const directory of catalog.cpTargetDirectory?.directories||[])for(const video of directory.list||[])delete video.downloadUrl;
}

// Cross-season cards are a bounded last resort. The original request identity
// and native file predicates remain authoritative throughout catalog/playback.
function cpCoverageParams(params){
 const verified=cpB14VerifiedSiteIdentity(params);
 return {...params,...(verified?{year:verified.year}:{}),alternativeTitles:[...new Set(cpB12LocalTitles(params).concat(verified?.titles||[]))]};
}
function cpCoverageEligible(params){return !!cpTargetScope(params)&&!cpRequestedYear(params).conflict;}
function cpCoverageCard(title,params){
 if(!cpCoverageEligible(params)||!cpSearchResultMatches(title,params))return false;
 const labels=String(title||'').match(/第\s*[一二三四五六七八九十百\d]+\s*季|(?:^|[^a-z0-9])Season[ ._-]*\d+(?=$|[^a-z0-9])|S\d{1,2}[ ._-]*E\d+|(?:^|[^a-z0-9])S\d{1,2}(?=$|[^a-z0-9])/gi)||[];
 const seasons=labels.map(cpExplicitSeason);
 if(!seasons.length||seasons.some(n=>!Number.isInteger(n)||n<1||n!==seasons[0])||seasons[0]===Number(params.season||1))return false;
 let clean=String(title);for(const label of labels)clean=clean.replace(label,' ');
 return !!clean.trim()&&cpSearchResultMatches(clean,params);
}
function cpCoverageKey(params,share){
 return 'season-coverage-v1:'+baiduSha1(JSON.stringify([getSite(),cpActiveProfile||cpProfile,share.provider,share.shareId,baiduSha1(share.passcode||''),cpIsNewPan(share.provider)?cpNewPanIdentity(share.provider):'',params.tmdbId||params.tmdbID||'',cpRequestedYear(params),cpRelevanceTitles(params).map(cpTitleKey).sort()]));
}
function cpCoverageEvidence(params,share){
 const value=cpRead(cpCoverageKey(params,share));
 return value&&value.expires>Date.now()&&Array.isArray(value.seasons)&&Array.isArray(value.confirmed)?value:null;
}
function cpCoverageRank(params,share){
 const value=cpCoverageEvidence(params,share);if(!value)return 0;
 return value.confirmed.includes(Number(params.season||1)+':'+Number(params.episode))?2:value.seasons.includes(Number(params.season||1))?1:0;
}
let cpCoverageEpoch=0;
function cpCoverageClear(){cpCoverageEpoch++;for(const key of cpRead('season-coverage-keys')||[])cpWrite(key,null);cpWrite('season-coverage-keys',[]);}
function cpCoverageName(item){return item.file_name||item.server_filename||item.n||item.FileName||item.name||item.fileName||item.caName||item.catalogName||item.coName||'';}
function cpCoverageItemKey(item){return String(item.fid??item.fs_id??item.fsid??item.FileId??item.coID??item.id??item.path??'');}
function cpCoverageNodeKey(node){return String(node?.id??node);}
function cpCoverageScope(scope,probe){
 if(!scope)return scope;
 return {...scope,cpCoverageProbe:!!probe,cpCoverageEpoch,cpCoverageBudget:{pages:0,directories:0},cpCoverageSeasons:new Set(),cpCoverageParents:new Map(),cpCoveragePaths:new Map()};
}
function cpCoverageRegister(scope,share){
 if(!scope?.cpCoverageProbe||!cpReadOperation)return;
 const budgets=cpReadOperation.coverageBudgets||(cpReadOperation.coverageBudgets=new Map()),key=cpB6CatalogKey(share);
 if(budgets.has(key))scope.cpCoverageBudget=budgets.get(key);else budgets.set(key,scope.cpCoverageBudget);
}
function cpCoverageEnsure(params,share,titles){if(share.cpCoverageFallback)cpCoverageRegister(cpTargetScope(params,titles,true),share);}
function cpCoverageFor(provider,video){
 const budget=cpReadOperation?.coverageBudgets?.get(cpB6CatalogKey({provider,shareId:video.shareId,passcode:video.passcode}));
 return budget?{cpCoverageProbe:true,cpCoverageBudget:budget}:null;
}
function cpCoveragePage(scope){
 if(!scope?.cpCoverageProbe)return;
 cpCheck(cpActiveProfile||cpProfile);
 if(scope.cpCoverageBudget.pages>=8)throw cpError('COVERAGE_BUDGET');scope.cpCoverageBudget.pages++;
}
function cpCoverageDirectory(scope){
 if(scope.cpCoverageProbe&&scope.cpCoverageBudget.directories>=4)throw cpError('COVERAGE_BUDGET');scope.cpCoverageBudget.directories++;
}
function cpCoveragePath(scope,node,path){return path||(scope.cpCoverageProbe?scope.cpCoveragePaths.get(cpCoverageNodeKey(node)):'')||'';}
function cpCoverageChild(scope,node,item,next,path){
 const season=cpTargetFolderSeason(item);if(season)scope.cpCoverageSeasons.add(season);
 const label=String(cpCoverageName(item)).replace(/((?:^|[^a-z0-9])(?:season|s))\s+(?=\d)/gi,'$1');
 scope.cpCoveragePaths.set(cpCoverageNodeKey(next),[path||scope.cpCoveragePaths.get(cpCoverageNodeKey(node)),label].filter(Boolean).join('/'));
 return next;
}
function cpCoverageNormalize(value){return String(value||'').replace(/((?:^|[^a-z0-9])(?:season|s))\s+(?=\d)/gi,'$1');}
function cpCoverageFileMatches(file,params,titles){
 const video={...file,file_name:cpCoverageNormalize(file.file_name),parentPath:cpCoverageNormalize(file.parentPath||file.parent_path)};
 const labels=(video.file_name+'/'+video.parentPath).match(/第\s*[一二三四五六七八九十百\d]+\s*季|(?:^|[^a-z0-9])Season[ ._-]*\d+(?=$|[^a-z0-9])|S\d{1,2}[ ._-]*E\d+|(?:^|[^a-z0-9])S\d{1,2}(?=$|[^a-z0-9])/gi)||[];
 return labels.length>0&&labels.every(label=>cpExplicitSeason(label)===Number(params.season||1))&&cpEpisodeVideoMatches(video,params,titles);
}
function cpCoverageRemember(scope,share,catalog){
 if(!scope||!catalog?.list)return;
 const files=catalog.list.map(file=>({...file,parentPath:cpCoverageNormalize(file.parentPath||scope.cpCoverageParents.get(String(file.fid)))}));
 catalog.list=scope.cpCoverageProbe?files.filter(file=>cpCoverageFileMatches(file,scope.params,scope.titles)):files;
 const confirmed=files.some(file=>cpCoverageFileMatches(file,scope.params,scope.titles));
 const key=cpCoverageKey(scope.params,share),previous=cpCoverageEvidence(scope.params,share);
 const value={expires:previous?.expires||Date.now()+14400000,seasons:[...new Set([...(previous?.seasons||[]),...scope.cpCoverageSeasons])].slice(0,100),confirmed:[...new Set([...(previous?.confirmed||[]),...(confirmed?[scope.params.season+':'+scope.params.episode]:[])])].slice(-100)};
 cpCheck(cpActiveProfile||cpProfile);if(scope.cpCoverageEpoch!==cpCoverageEpoch)return;cpWrite(key,value);
 let keys=(cpRead('season-coverage-keys')||[]).filter(k=>k!==key);keys.push(key);while(keys.length>64)cpWrite(keys.shift(),null);cpWrite('season-coverage-keys',keys);
}
function cpCoverageKeep(params,share){return !share.cpCoverageFallback||cpCoverageRank(params,share)===2;}
async function cpCoverageCandidates(rows,params,read,claimed,onReady){
 const matching=cpCoverageParams(params);if(!cpCoverageEligible(matching))return [];
 const seen=new Set(),cards=new Map();
 for(const row of rows||[]){
  if(seen.has(row.link)||!cpCoverageCard(row.title,matching))continue;seen.add(row.link);
  const key=row.cpSiteCardId||row.link;if(!cards.has(key))cards.set(key,[]);cards.get(key).push(row);
 }
 const candidates=[],providers=new Set();
 const accept=(info,grouped=false)=>{
  for(const share of info?.shares||[]){
   const enabled=typeof cpCandidateEnabled==='function'?cpCandidateEnabled:quanpanProviderEnabled;
   if(!share.shareId||!enabled(share.provider)||cpBlockedProviders.has(share.provider)||claimed(share)||grouped&&providers.has(share.provider))continue;
   if(grouped)providers.add(share.provider);const candidate={...info,shares:[{...share,cpCoverageFallback:true}],cpB7MatchTitles:cpRelevanceTitles(matching)};candidates.push(candidate);if(grouped&&onReady)onReady(candidate);
  }
 };
 for(const group of [...cards.values()].slice(0,3)){
  if(group[0].cpSiteCardId&&typeof readSiteCandidates==='function'){
   await readSiteCandidates(group,{read,ready:info=>accept(info,true),canRead:provider=>!providers.has(provider),check:()=>cpCheck(cpActiveProfile||cpProfile),failed:()=>cpB12DiscoveryFailed()});
  }else{const info=await read(group[0]);cpCheck(cpActiveProfile||cpProfile);accept(info);}
 }
 candidates.sort((a,b)=>cpCoverageRank(cpSiteCandidateParams(params,b),b.shares[0])-cpCoverageRank(cpSiteCandidateParams(params,a),a.shares[0]));
 const emitted=new Set();return candidates.filter(candidate=>{const provider=candidate.shares[0].provider;if(emitted.has(provider))return false;emitted.add(provider);return true;});
}
if(typeof cpClearCandidateCache==='function'){
 const native=cpClearCandidateCache;cpClearCandidateCache=function(...args){cpCoverageClear();return native(...args);};
}
if(typeof clearRexCatalogCache==='function'){
 const native=clearRexCatalogCache;clearRexCatalogCache=async function(...args){cpCoverageClear();return await native(...args);};
}

// Reuse only within one synchronous continuation. Never memoize mutable
// transfer/auth outcomes here; each network boundary checks fresh settings.
let cpColdConfig=null;
function cpColdResetConfig(){cpColdConfig=null;}
function cpColdConfigValue(key,read){
 let snapshot=cpColdConfig;
 if(!snapshot){snapshot=cpColdConfig=new Map();Promise.resolve().then(()=>{if(cpColdConfig===snapshot)cpColdResetConfig();});}
 if(!snapshot.has(key))snapshot.set(key,read());
 return snapshot.get(key);
}
const cpColdReadNative=cpRead,cpColdSharedNative=cpShared,cpColdAccountsNative=cpAccounts,cpColdSetNative=safeStorageSet;
cpRead=function(key){return /^(?:local:|setting:)/.test(key)?cpColdConfigValue('read:'+key,()=>cpColdReadNative(key)):cpColdReadNative(key);};
cpShared=function(){return cpColdConfigValue('shared',cpColdSharedNative);};
cpAccounts=function(){return cpColdConfigValue('accounts',cpColdAccountsNative).slice();};
safeStorageSet=function(...args){cpColdResetConfig();return cpColdSetNative(...args);};
const cpColdRequestNative=cpResourceRequest,cpColdHttpNative=cpResourceHttp;
cpResourceRequest=function(...args){cpColdResetConfig();return cpColdRequestNative(...args);};
cpResourceHttp=function(...args){return cpColdHttpNative(...args).finally(cpColdResetConfig);};
function cpColdMatchParams(params,titles){
 return Object.assign({},params,{alternativeTitles:[...new Set(cpRelevanceTitles(params).concat(titles||[]))]});
}

const CP_COLD_ACCESS_TTL=60000;
function cpColdAccessEpoch(){return cpRead('cold-share-access-epoch')||'';}
function cpColdBumpAccessEpoch(){cpWrite('cold-share-access-epoch',String(Date.now())+':'+String(Math.random()));}
function cpColdClearOperationAccess(){
 if(cpReadOperation)for(const key of cpReadOperation.keys())try{const parts=JSON.parse(key);if(['quark','uc'].includes(parts[1])&&parts[4]==='token')cpReadOperation.delete(key);}catch(_){}
}
function cpColdAccessKey(provider,shareId,passcode){
 return 'cold-share-access-v1:'+baiduSha1(JSON.stringify([cpActiveProfile||cpProfile,provider,String(shareId||''),String(passcode||'')]));
}
function cpColdAccessRecord(key){
 const record=cpRead(key),now=Date.now();
 return record&&record.at<=now&&record.expires>now&&record.expires-record.at===CP_COLD_ACCESS_TTL&&typeof record.value==='string'&&record.value.length>0&&record.value.length<=8192&&!/[\x00-\x1f\x7f]/.test(record.value)?record:null;
}
async function cpColdAccess(provider,shareId,passcode,work){
 const profile=cpActiveProfile||cpProfile;cpCheck(profile);
 const generation=cpColdAccessEpoch();
 if(cpReadOperation&&cpReadOperation.coldAccessEpoch!==generation){cpColdClearOperationAccess();cpReadOperation.coldAccessEpoch=generation;}
 const key=cpColdAccessKey(provider,shareId,passcode),cached=cpColdAccessRecord(key);
 if(cached)return cached.value;
 const value=await work();cpCheck(profile);
 if(generation===cpColdAccessEpoch()&&typeof value==='string'&&value.length>0&&value.length<=8192&&!/[\x00-\x1f\x7f]/.test(value)){
  const at=Date.now();cpWrite(key,{provider,shareId:String(shareId),at,expires:at+CP_COLD_ACCESS_TTL,value});
  const keys=(cpRead('cold-share-access-keys')||[]).filter(k=>k!==key);keys.push(key);
  while(keys.length>64)cpWrite(keys.shift(),null);cpWrite('cold-share-access-keys',keys);
 }
 return value;
}
const cpColdStokenNative=getStoken,cpColdUcTokenNative=getUcToken,cpColdInvalidateNative=cpReadInvalidate;
getStoken=function(shareId,passcode){return cpColdAccess('quark',shareId,passcode,()=>cpColdStokenNative(shareId,passcode));};
getUcToken=function(shareId,passcode){return cpColdAccess('uc',shareId,passcode,()=>cpColdUcTokenNative(shareId,passcode));};
cpReadInvalidate=function(provider,shareId,passcode,label){
 if(label==='token'&&['quark','uc'].includes(provider)){cpColdBumpAccessEpoch();cpWrite(cpColdAccessKey(provider,shareId,passcode),null);}
 return cpColdInvalidateNative(provider,shareId,passcode,label);
};
function cpColdClearAccess(){
 cpColdBumpAccessEpoch();
 for(const key of cpRead('cold-share-access-keys')||[])cpWrite(key,null);cpWrite('cold-share-access-keys',[]);
 cpColdClearOperationAccess();
}
for(const name of ['clearRexCatalogCache','clearHuajuanCache']){
 const native=name==='clearRexCatalogCache'?typeof clearRexCatalogCache==='function'&&clearRexCatalogCache:typeof clearHuajuanCache==='function'&&clearHuajuanCache;
 if(!native)continue;
 const clear=async function(...args){cpColdClearAccess();return native(...args);};
 if(name==='clearRexCatalogCache')clearRexCatalogCache=clear;else clearHuajuanCache=clear;
}
const cpColdTargetReadNative=cpTargetRead;
cpTargetRead=function(params,share,titles,refresh=false){
 if((refresh||params?.refresh||params?.forceRefresh)&&['quark','uc'].includes(share.provider))cpReadInvalidate(share.provider,share.shareId,share.passcode,'token');
 return cpColdTargetReadNative(params,share,titles,refresh);
};
async function cpColdAccessCatalog(provider,shareId,passcode,read){
 const cached=cpColdAccessRecord(cpColdAccessKey(provider,shareId,passcode));
 try{return await read();}catch(error){
  const retry=cached&&(error?.code==='AUTH_FAILED'||error?.code==='UPSTREAM_ERROR'&&!error?.status||Number(error?.status)===401||/目录读取失败|分享请求失败/.test(String(error?.message||'')));
  if(!retry||['ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','RATE_LIMITED','SHARE_EXPIRED','BETA_READ_UNUSED'].includes(error?.code)||Number(error?.status)===429)throw error;
  cpReadInvalidate(provider,shareId,passcode,'token');return read();
 }
}
const cpColdUcCatalogNative=getUcVideos,cpColdQuarkCatalogNative=getVideosFromShareLink;
getUcVideos=function(share,...args){return cpColdAccessCatalog('uc',share.shareId,share.passcode,()=>cpColdUcCatalogNative(share,...args));};
getVideosFromShareLink=function(url,passcode,...args){
 const id=String(url||'').match(/\/s\/([a-zA-Z0-9]+)/)?.[1];
 return id?cpColdAccessCatalog('quark',id,passcode,()=>cpColdQuarkCatalogNative(url,passcode,...args)):cpColdQuarkCatalogNative(url,passcode,...args);
};

// Link checking and native access are independent reads. Stage raw bytes only;
// the existing foreground decoder owns cookies, validation and cache admission.
function cpColdStageKey(url,body,options){
 const headers=Object.entries(options?.headers||{}).map(([k,v])=>[k.toLowerCase(),v]).sort((a,b)=>a[0].localeCompare(b[0]));
 return JSON.stringify([url,body,headers]);
}
function cpColdAccessSpec(share){
 if(share.provider==='baidu'){
  if(cpBaiduCached(cpBaiduCacheKey('verify',[String(share.shareId||''),String(share.passcode||'')]),60000))return null;
  return {url:'https://pan.baidu.com/share/verify?'+toQuery({surl:baiduShortId(share.shareId),pwd:share.passcode||''}),body:toQuery({pwd:share.passcode||'',vcode:'',vcode_str:''}),options:{timeout:8000,headers:Object.assign(baiduHeaders(share),{'Content-Type':'application/x-www-form-urlencoded'})}};
 }
 if(!['quark','uc'].includes(share.provider)||cpColdAccessRecord(cpColdAccessKey(share.provider,share.shareId,share.passcode)))return null;
 return {url:share.provider==='quark'?'https://drive-h.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc&uc_param_str=':'https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?pr=UCBrowser&fr=pc',body:JSON.stringify({pwd_id:share.shareId,passcode:share.passcode||''}),options:{timeout:8000,headers:Object.assign({},share.provider==='quark'?quarkHeaders():ucHeaders(),{'Content-Type':'application/json'})}};
}
const cpColdPostNative=cpHttpPost;
function cpColdStartAccess(share){
 const operation=cpReadOperation,profile=cpActiveProfile||cpProfile;
 if(!operation||!['baidu','quark','uc'].includes(share.provider)||!cpDriveEnabled(share.provider)||cpBlockedProviders.has(share.provider))return null;
 let spec;try{spec=cpColdAccessSpec(share);}catch(_){return null;}
 if(!spec)return null;
 const stages=operation.coldAccessStages||(operation.coldAccessStages=new Map()),key=cpColdStageKey(spec.url,spec.body,spec.options);
 if(stages.has(key))return null;
 const entry={token:cpB6Token(),profile,provider:share.provider,epoch:cpColdAccessEpoch(),used:false};stages.set(key,entry);
 entry.task=Promise.resolve().then(()=>{
  cpCheck(profile);if(entry.token.cancelled)throw cpB6Unused();
  if(share.provider==='quark')entry.cookieAtDispatch=ensureCookie();
  return cpColdPostNative(spec.url,spec.body,Object.assign({},spec.options,{cpB6Token:entry.token}));
 }).then(value=>({value}),error=>({error}));
 return entry;
}
cpHttpPost=function(url,body,options,beforeDispatch){
 const entry=!beforeDispatch&&!options?.cpB6Token&&cpReadOperation?.coldAccessStages?.get(cpColdStageKey(url,body,options));
 if(!entry||entry.token.cancelled)return cpColdPostNative(url,body,options,beforeDispatch);
 cpReadOperation.coldAccessStages.delete(cpColdStageKey(url,body,options));
 if(entry.epoch!==cpColdAccessEpoch()){entry.token.cancel();entry.task=null;return cpColdPostNative(url,body,options,beforeDispatch);}
 entry.used=true;
 if(!entry.response)entry.response=entry.task.then(outcome=>{
  cpCheck(entry.profile);
  if(entry.epoch!==cpColdAccessEpoch())return cpColdPostNative(url,body,options,beforeDispatch);
  if(!outcome.error){
   if(entry.provider==='quark'&&entry.cookieAtDispatch!==undefined&&ensureCookie()!==entry.cookieAtDispatch){
    const headers={};for(const key of Object.keys(outcome.value.headers||{}))if(key.toLowerCase()!=='set-cookie')headers[key]=outcome.value.headers[key];
    return Object.assign({},outcome.value,{headers});
   }
   return outcome.value;
  }
  if(['AUTH_FAILED','RATE_LIMITED','ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT','BETA_READ_UNUSED'].includes(outcome.error?.code)||[401,429].includes(Number(outcome.error?.status)))throw outcome.error;
  return cpColdPostNative(url,body,options,beforeDispatch);
 }).finally(()=>{entry.task=null;entry.response=null;});
 return entry.response;
};
const cpColdCheckedNative=cpB8CheckedCatalog;
cpB8CheckedCatalog=async function(share,cached,site,keyword,params,titles=[]){
 const usable=cpTargetCached(cached,params,titles);
 if(!usable&&share.provider==='baidu')cpB10StartBaiduUid(share);
 const entry=!usable?cpColdStartAccess(share):null;
 try{return await cpColdCheckedNative(share,cached,site,keyword,params,titles);}
 finally{if(entry){entry.token.cancel();if(cpReadOperation?.coldAccessStages)for(const [key,value] of cpReadOperation.coldAccessStages)if(value===entry)cpReadOperation.coldAccessStages.delete(key);entry.task=null;}}
};

// These caches supplement the native protocol. Every cached value remains
// tied to its original origin, profile, fixed lifetime and invalidation epoch.
const CP_QP_FAST_AUTH_MAX=900000,CP_QP_FAST_CHECK_TTL=60000;
let cpQpFastObserved='';
function cpQpFastEpoch(){return cpRead('qp-fast-epoch')||'';}
function cpQpFastProfile(){return cpActiveProfile||cpProfile;}
function cpQpFastObserve(){
 const epoch=cpQpFastEpoch(),identity=JSON.stringify([epoch,cpQpFastProfile()]);
 if(cpQpFastObserved!==identity){qpTokens.clear();qpLinkChecks.clear();cpQpFastObserved=identity;}
 return epoch;
}
function cpQpFastKey(kind,identity){return 'qp-fast-'+kind+'-v1:'+baiduSha1(JSON.stringify([cpQpFastProfile(),identity]));}
function cpQpFastRecord(kind,key){
 const value=cpRead(key),now=Date.now();
 if(!value||value.epoch!==cpQpFastEpoch()||!Number.isFinite(value.at)||!Number.isFinite(value.expires)||value.at>now||value.expires<=now)return null;
 const ttl=value.expires-value.at;
 if(kind==='auth')return ttl>0&&ttl<=CP_QP_FAST_AUTH_MAX&&typeof value.token==='string'&&value.token.length>0&&value.token.length<=8192&&!/[\x00-\x20\x7f]/.test(value.token)?value:null;
 return ttl===CP_QP_FAST_CHECK_TTL&&value.value?.validity==='ok'&&value.value.until===value.expires&&typeof value.value.summary==='string'&&value.value.summary.length<=2000&&typeof value.value.passcode==='string'&&value.value.passcode.length<=128&&!/[\x00-\x1f\x7f]/.test(value.value.passcode)?value:null;
}
function cpQpFastSave(kind,key,record){
 cpWrite(key,record);const index='qp-fast-'+kind+'-keys',stored=cpRead(index),keys=(Array.isArray(stored)?stored:[]).filter(k=>typeof k==='string'&&k!==key);keys.push(key);
 while(keys.length>(kind==='auth'?16:256))cpWrite(keys.shift(),null);cpWrite(index,keys);
}
function cpQpFastInvalidate(){
 cpWrite('qp-fast-epoch',String(Date.now())+':'+String(Math.random()));
 for(const kind of ['auth','check']){const index='qp-fast-'+kind+'-keys',keys=cpRead(index);for(const key of Array.isArray(keys)?keys:[])if(typeof key==='string'&&(key.startsWith('qp-fast-'+kind+'-v1:')||key.startsWith('qp-fast-'+kind+'-v2:')))cpWrite(key,null);cpWrite(index,[]);}
 cpQpFastObserve();
}
const cpQpFastTokenNative=qpGetToken;
qpGetToken=async function(site,force=false){
 const cpMatchingContext=cpMatchingCaptureContext(),profile=cpQpFastProfile();cpMatchingCheckContext(cpMatchingContext);
 // Preserve native denial/rate-limit suppression even on a persisted hit.
 const cpMatchingTokenContext=cpMatchingCaptureContext(),denied=cpMatchingTokenContext.quanpan?.tokenFailures?.get(site);if(denied)throw denied;
 if(force)cpQpFastInvalidate();
 const epoch=cpQpFastObserve(),key=cpQpFastKey('auth',site),cached=!force&&cpQpFastRecord('auth',key);
 if(cached){qpTokens.set(site,{token:cached.token,refreshAt:cached.expires,cpFastAt:cached.at});return cached.token;}
 const token=await cpQpFastTokenNative(site,force);cpMatchingCheckContext(cpMatchingContext);
 const native=qpTokens.get(site),now=Date.now();
 if(epoch===cpQpFastEpoch()&&native?.token===token){
  if(native.cpFastAt===undefined)native.cpFastAt=now;
  const expires=Math.min(native.refreshAt,native.cpFastAt+CP_QP_FAST_AUTH_MAX),record={epoch,at:native.cpFastAt,expires,token};
  native.refreshAt=expires;
  if(expires>now&&typeof token==='string'&&token.length<=8192&&!/[\x00-\x20\x7f]/.test(token))cpQpFastSave('auth',key,record);
 }
 return token;
};
const cpQpFastCheckKeyNative=qpCheckKey,cpQpFastCheckedNative=qpCheckedShare;
// Native pending checks and completed status memos use the same epoch/profile
// fence, so their late cleanup can never erase a newer generation's pending key.
qpCheckKey=function(share,site){return JSON.stringify([cpQpFastProfile(),cpQpFastEpoch(),cpQpFastCheckKeyNative(share,site)]);};
qpCheckedShare=async function(share,site,keyword){
 const cpMatchingContext=cpMatchingCaptureContext(),profile=cpQpFastProfile();cpMatchingCheckContext(cpMatchingContext);const epoch=cpQpFastObserve(),key=cpQpFastKey('check',cpQpFastCheckKeyNative(share,site)),cached=cpQpFastRecord('check',key);
 if(cached)return Object.assign({},cached.value);
 const value=await cpQpFastCheckedNative(share,site,keyword);cpMatchingCheckContext(cpMatchingContext);
 if(epoch===cpQpFastEpoch()&&value.validity==='ok'){
  const record={epoch,at:value.until-CP_QP_FAST_CHECK_TTL,expires:value.until,value:Object.assign({},value)};
  if(record.expires>Date.now()&&typeof value.summary==='string'&&value.summary.length<=2000&&typeof value.passcode==='string'&&value.passcode.length<=128&&!/[\x00-\x1f\x7f]/.test(value.passcode))cpQpFastSave('check',key,record);
 }
 return value;
};
const cpQpFastClearNative=clearRexCatalogCache;
clearRexCatalogCache=async function(...args){cpQpFastInvalidate();return cpQpFastClearNative(...args);};

/* directory-read-attempts-v1 */
const cpQpFastLoadNative=loadResource;
loadResource=function(params={}){if(params.refresh||params.forceRefresh)cpQpFastInvalidate();return cpQpFastLoadNative(params);};

async function readSiteCandidates(rows,{read,ready,canRead,check,failed}){
 const groups=new Map();let fatal=null;
 for(const row of rows){if(!groups.has(row.provider))groups.set(row.provider,[]);groups.get(row.provider).push(row);}
 const results=await Promise.allSettled(Array.from(groups,async([provider,entries])=>{
  for(const row of entries){
   if(fatal||!canRead(provider))break;
   try{check();const info=await read(row);check();if(fatal)break;if(info)await ready(info);}
   catch(error){
    if(['ABORTED','OPERATION_TIMEOUT','ACCOUNT_CHANGED','LOGIN_REQUIRED','RATE_LIMITED','INVALID_CONFIG','ACCESS_DENIED','SESSION_UNAVAILABLE'].includes(error?.code)){fatal??=error;throw error;}
    if(error?.code!=='INVALID_SHARE')failed(error);
   }
  }
 }));
 if(fatal)throw fatal;
 const failure=results.find(result=>result.status==='rejected');if(failure)throw failure.reason;
}
async function cpSiteReadCandidate(row,params){
 const candidate=await params.cpSiteRead(row,params);if(!candidate)return candidate;
 const target=Number(params.season||1),record=cpB12IdentityRecord(params);
 const year=candidate.verifiedSeason===target?candidate.verifiedYear:record?.seasonYear;
 return Object.assign({},candidate,{verifiedTargetYear:Number.isInteger(year)&&year>=1800&&year<=2200?year:null,verifiedYears:cpSiteYears(params)});
}
function cpSiteYears(params){
 if(params.type==='movie')return [];
 const record=cpB12IdentityRecord(params);return record?[...new Set([record.seriesYear,record.seasonYear].filter(y=>Number.isInteger(y)&&y>=1800&&y<=2200))]:[];
}
async function cpSiteYearMatches(year,params){
 const requested=cpRequestedYear(params);if(requested.conflict)return false;
 if(!requested.year||year===requested.year)return true;
 if(params.type==='movie')return false;
 await cpB7TrustedTitles(params);return cpSiteYears(params).includes(year);
}
function cpSiteMatchingParams(value,params){
 const allowed=params.cpSiteVerifiedYears||cpSiteYears(params);if(!allowed.length)return params;
 const evidence=cpWithoutKnownTitles(value,cpRelevanceTitles(params)),years=[...evidence.matchAll(/(?:^|[^a-z0-9])((?:19|20)\d{2})(?=$|[^a-z0-9])/gi)].map(m=>Number(m[1]));
 if(!years.length||years.some(year=>!allowed.includes(year)))return params;
 return cpResourceForwardParams(params,{year:years[0],releaseYear:undefined,seriesName:cpMovieName(params.seriesName||params.title||params.name||params.keyword).name});
}
/* CatPaw verified site year search v1 */
const cpSiteNativeSearchMatch=cpSearchResultMatches;
cpSearchResultMatches=function(value,params){return cpSiteNativeSearchMatch(value,typeof params.cpSiteRead==='function'?cpSiteMatchingParams(value,params):params);};
const cpSiteNativeTitleMatch=cpSearchTitleMatches;
cpSearchTitleMatches=function(value,params){return cpSiteNativeTitleMatch(value,typeof params.cpSiteRead==='function'?cpSiteMatchingParams(value,params):params);};
function cpSiteCandidateParams(params,candidate){
 if(typeof params.cpSiteRead!=='function')return params;
 const extra={cpSiteVerifiedYears:candidate.verifiedYears||[]};
 if(!cpRequestedYear(params).year&&Number.isInteger(candidate.verifiedTargetYear))extra.year=candidate.verifiedTargetYear;
 return cpResourceForwardParams(params,extra);
}

function cpNormalizeEpisodeLabel(name){
 let value=String(name||"").normalize("NFKC").replace(/[\u200b-\u200f\u202a-\u202e\ufeff]/g,"");
 const original=value;
 // Erase only understood presentation fields before a numeric label. Unknown
 // bracketed words may be another work's title and remain identity evidence.
 for(let i=0;i<8;i++){
  const prefix=/^\s*(?:\[([^\]]+)\]|【([^】]+)】|\(([^)]+)\))\s*/.exec(value);
  if(!prefix||typeof cpFileMetadata!=="function"||cpFileKey(cpFileMetadata(prefix[1]||prefix[2]||prefix[3])))break;
  value=value.slice(prefix[0].length);
 }
 // Removing a decoration must not turn an ambiguous numeric range/list into
 // the native parser's otherwise valid leading number.
 if(value!==original&&/^\s*\d/.test(value)){
  const numeric=cpFileMetadata(value.replace(/\.[a-z0-9]{2,5}$/i,""));
  if(!/^[\p{P}\p{S}\s]*\d{1,3}[\p{P}\p{S}\s]*$/u.test(numeric))return original;
 }
 const bracket=/^\s*(?:\[\s*(\d{1,3})\s*\]|【\s*(\d{1,3})\s*】|\(\s*(\d{1,3})\s*\))(?=$|[ ._-])/.exec(value);
 if(bracket){
  const tail=value.slice(bracket[0].length).replace(/\.[a-z0-9]{2,5}$/i,"");
  if(typeof cpFileMetadata!=="function"||cpFileKey(cpFileMetadata(tail)))return original;
  value="E"+(bracket[1]||bracket[2]||bracket[3])+value.slice(bracket[0].length);
 }
 return value.replace(/^(\s*\d{1,3})[~～](?=(?:[248]K|\d{3,4}P)(?:[ ._~-]|$))/i,"$1-");
}

function cpSortDisplayedResources(rows){
 if(!Array.isArray(rows))return rows;
 const size=row=>{const m=/^\s*\[(\d+(?:\.\d+)?)\s*(GB|MB)\]/i.exec(String(row?.name||''));const n=m?Number(m[1])*(m[2].toUpperCase()==='GB'?1024:1):-1;return Number.isFinite(n)?n:-1;};
 return rows.map((row,index)=>({row,index,size:size(row)})).sort((a,b)=>b.size-a.size||a.index-b.index).map(item=>item.row);
}

const cpSearchIndexNative=qpSeriesIndexRead;
qpSeriesIndexRead=function(key){
 const current=cpSearchIndexNative(key);if(current.candidates.length)return current;
 const previous=key.replace(QP_INDEX_PREFIX+'search-v2:',QP_INDEX_PREFIX+'coverage-v1:');
 if(previous===key)return current;
 const legacy=cpSearchIndexNative(previous);
 return legacy.candidates.length?Object.assign({},legacy,{candidates:[]}):current;
};

// Search cards are discovery hints. Catalog and file predicates retain their
// own season, episode and identity checks after this inexpensive admission step.
function cpSearchResultKey(value){
 return String(value||'').replace(/[\s·:：._\-()[\]（）【】《》〈〉「」『』\u200b-\u200f\u202a-\u202e\ufeff]/g,'').toLowerCase();
}
function cpSearchResultMatches(value,params){
 const requested=cpRequestedYear(params);if(requested.conflict)return false;
 const raw=String(value||''),key=cpSearchResultKey(raw);
 const titles=cpRelevanceTitles(params).map(title=>{
  const name=cpMovieName(title,requested.year).name.replace(/\s*(?:第\s*[一二三四五六七八九十百\d]+\s*季|Season[ ._-]*\d+|(?:^|[ ._-])S\d{1,2})\s*$/i,'');
  return cpMovieName(name,requested.year).name;
 }).filter(Boolean);
 if(!key||!titles.some(title=>{const name=cpSearchResultKey(title);return name&&key.includes(name);}))return false;
 if(!requested.year)return true;
 let identity=null;
 // Numeric names such as 1984 are identity evidence, not release years.
 for(const title of titles){
  const name=cpSearchResultKey(title);if(!name)continue;
  const numeric=/^\d+$/.test(name);
  // Use the same optional separators as containment, including a number
  // joined to the host name but separated on the site (银翼杀手 2049).
  const pattern=Array.from(name,character=>character.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('[\\s·:：._\\-()[\\]（）【】《》〈〉「」『』\\u200b-\\u200f\\u202a-\\u202e\\ufeff]*');
  const match=new RegExp((numeric?'(^|[^0-9])':'')+pattern+(numeric?'(?![0-9])':''),'i').exec(raw);
  if(match&&(!identity||match.index<identity.index||match.index===identity.index&&match[0].length>identity[0].length))identity=match;
 }
 // Mask one actual name occurrence, preserving separate release-year labels.
 let evidence=identity?raw.slice(0,identity.index)+' '+raw.slice(identity.index+identity[0].length):raw;
 // Explicit pixel dimensions and scan labels cannot supply a release year.
 evidence=evidence.replace(/\d{3,5}\s*[x×*]\s*\d{3,5}|(?:^|[^0-9])\d{3,4}\s*[pi](?=$|[^a-z])/gi,' ');
 const years=Array.from(evidence.matchAll(/(?:^|[^0-9])([0-9]{4})(?![0-9])/g),match=>Number(match[1])).filter(year=>year>=1970);
 return !years.length||years.includes(requested.year);
}

// Pure catalog matching: normalize presentation, retain identity-bearing text,
// and report why a file was selected. No provider calls or directory traversal.
function cpFileText(value){return String(value||'').normalize('NFKC').replace(/[\u200b-\u200f\u202a-\u202e\ufeff]/g,'');}
function cpFileKey(value){return cpFileText(value).replace(/[\p{P}\p{S}\s]/gu,'').toLowerCase();}
function cpFileTitlePattern(title){
 return Array.from(cpFileKey(title),c=>c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('[\\p{P}\\p{S}\\s]*');
}
function cpFileTechnicalLabel(value){
 // Read compact quality/audio labels as complete known fields. Unmarked
 // unknown suffixes may be another work, so never erase them as publishers.
 const cores=[String(value||'')];
 for(const core of cores){
  let key=cpFileKey(core),count=0,resolution=false;
  while(key){
   const atom=/^(?:\d{3,4}[pi]|[248]k|webdl|webrip|bluray|remux|hdtv|uhd|fhd|hq|hdr10|hdr|sdr|dv|dolbyvision|[xh]26[45]|hevc|avc|av1|(?:aac|ddp?|dtshd|dts|truehd|eac3|ac3)(?:[257]1|20)?|hifi|flac|atmos|无损声|无损音轨|高码率|高码|\d{2,3}fps)/i.exec(key);
   if(!atom)break;
   resolution=resolution||/^(?:\d{3,4}[pi]|[248]k)$/i.test(atom[0]);count++;key=key.slice(atom[0].length);
  }
  if(!key&&resolution&&count>=2)return true;
 }
 return false;
}
function cpFileMetadata(value){
 if(cpFileTechnicalLabel(value))return ' ';
 return value
  // Release groups follow a technical field, never a bare film name. Keep
  // explicit sequel ordinals even when they occur after an encoding label.
  .replace(/((?:[xh][ ._-]*26[45]|hevc|avc|av1|aac(?:\d(?:\.\d)?)?))[ ._]*-([a-z][a-z0-9]{1,30})$/gi,(all,codec,group)=>/^(?:(?:part|vol|chapter)?(?:[ivx]+|\d+))$/i.test(group)?all:codec)
  .replace(/\d{3,5}\s*[x×*]\s*\d{3,5}|\b\d{3,4}\s*[pi]\b|\b[248]k\b/gi,' ')
  .replace(/\b(?:av3a|aac|ddp?|dts(?:[ ._-]*hd)?|truehd|eac3|ac3)(?:[ ._-]*(?:ma[ ._-]*)?\d(?:\.\d){0,2})?\b/gi,' ')
  .replace(/\b(?:web[ ._-]*dl|web[ ._-]*rip|blu[ ._-]*ray|bd[ ._-]*rip|remux|hdtv|uhd|fhd|hq|hdr(?:10\+?)?|sdr|dv|dolby[ ._-]*vision|[xh][ ._-]*26[45]|hevc|avc|av1|aac|flac|dts(?:[ ._-]*hd)?|truehd|ddp?|eac3|ac3|atmos|amzn|nf|dsnp|hmax|atvp|dual|multi[ ._-]*audio|proper|repack|internal|extended(?:[ ._-]*cut)?|director['’]?s[ ._-]*cut|unrated|uncut|remastered)\b/gi,' ')
  .replace(/\b\d+(?:\.\d+)?\s*(?:fps|bit|gb|mb)\b|\b[257]\.1\b/gi,' ')
  .replace(/\b(?:hd[ ._-]?)?(?:tc|ts|cam)(?:版)?(?=$|[^a-z0-9])/gi,' ')
  .replace(/(?:更新(?:至|到)?|更至|全)\s*\d+\s*[集话期]|高码率|高码|高清|超清/g,' ')
  .replace(/(?:官方|内封|外挂)?(?:简繁|简体|繁体|中英|简中|繁中|双语|多语)?(?:中文字幕|英文字幕|字幕|中字|双字)|国粤双语|[中英日韩德法西俄泰粤国]+语|多音轨|加长版|导演剪辑版|未删减版|修复版|完整版|无广分享|推荐|正片|合集|电视剧|剧集|国漫|动漫|电影|更新中|已完结|完结|蓝光|杜比|原盘|真彩|臻彩/g,' ');
}
// One content-checked context per live params object. No files or final decisions
// are retained; parent facts have a deterministic FIFO bound. Oversized alias
// sets use the original uncached path rather than retaining unbounded patterns.
const cpFileMatchingContexts=new WeakMap();
function cpFileMatchingContext(params,titles){
 const requested=cpRequestedYear(params),hostTitles=cpRelevanceTitles(params);
 if(titles.length>64||hostTitles.length>64)return null;
 const signature=JSON.stringify([params.type,params.season,params.episode,requested,params.cpFileContextTitle,params.cpFileContextSeason,params.cpFileContextAmbiguous,titles,hostTitles]);
 const previous=cpFileMatchingContexts.get(params);if(previous?.signature===signature)return previous;
 const patterns=new Map(),descriptor=title=>{
  if(!patterns.has(title))patterns.set(title,Object.assign({key:cpFileKey(title)},cpFileTitleRegex(title)));
  return patterns.get(title);
 };
 // These orders intentionally differ: extra-marker masking sorts raw aliases,
 // while identity evidence deduplicates and sorts their parsed movie names.
 const without=[...titles].filter(Boolean).sort((a,b)=>cpFileKey(b).length-cpFileKey(a).length).map(title=>descriptor(cpMovieName(title).name));
 const names=[...new Set(titles.filter(t=>typeof t==='string'&&t.trim()).map(t=>cpMovieName(t).name))].sort((a,b)=>cpFileKey(b).length-cpFileKey(a).length).map(descriptor);
 const context={signature,requested,without,names,parents:new Map()};
 cpFileMatchingContexts.set(params,context);return context;
}
function cpFileParentEvidence(value,titles,context){
 const cached=context?.parents.get(value);
 if(cached)return {...cached,years:[...cached.years]};
 let evidence=cpFileTitleEvidence(value,titles,context);
 // Alphabetic catalog indexes precede Chinese titles; do not erase suffixes.
 if(evidence.matched&&/^[a-z]$/i.test(evidence.residual)&&/^[a-z][ ._-]+(?=\p{Script=Han})/iu.test(cpFileText(value)))evidence=cpFileTitleEvidence(cpFileText(value).replace(/^[a-z][ ._-]+/i,''),titles,context);
 // Folder roles must be whole labels; a movie called "Video" retains its name.
 if(!evidence.matched&&/^(?:视频|正片|资源|video|videos|media|mp4|mkv|movies|tv)$/i.test(cpFileKey(value)))evidence.residual='';
 if(context){
  if(context.parents.size>=128)context.parents.delete(context.parents.keys().next().value);
  context.parents.set(value,{...evidence,years:[...evidence.years]});
 }
 return evidence;
}
function cpFileTitleRegex(title){
 const key=cpFileKey(title),left=/^[a-z0-9]/i.test(key)?'(^|[^a-z0-9])':'',right=/[a-z0-9]$/i.test(key)?'(?=$|[^a-z0-9]|S\\d{1,2}[ ._-]*E\\d+)':'';
 return {left,re:new RegExp(left+cpFileTitlePattern(title)+right,'iu')};
}
function cpFileWithoutTitles(value,titles,context){
 let text=cpFileText(value);
 const patterns=context?context.without:[...titles].filter(Boolean).sort((a,b)=>cpFileKey(b).length-cpFileKey(a).length).map(title=>cpFileTitleRegex(cpMovieName(title).name));
 for(const {re,left} of patterns)text=text.replace(re,(_,boundary)=>left?(boundary||'')+' ':' ');
 return text;
}
function cpFileTitleEvidence(value,titles,context){
 let text=cpFileText(value),matched=false;
 const names=context?context.names:[...new Set(titles.filter(t=>typeof t==='string'&&t.trim()).map(t=>cpMovieName(t).name))].sort((a,b)=>cpFileKey(b).length-cpFileKey(a).length).filter(title=>cpFileKey(title)).map(title=>Object.assign({key:cpFileKey(title)},cpFileTitleRegex(title)));
 for(const {key,re,left} of names){
  if(!key)continue;
  // Non-global/non-sticky expressions can be reused without lastIndex state.
  // Latin words and numeric film names cannot match inside another word/number.
  const hit=re.exec(text);
  if(!hit)continue;
  // A release-group prefix is presentation only when a real name follows it.
  if(!matched){const start=hit.index+(left?hit[1].length:0);text=text.slice(0,start).replace(/^[\s\p{S}]*(?:(?:\[[^\]]+\]|【[^】]+】)\s*)+/u,'')+text.slice(start);}
  text=text.replace(re,(_,boundary)=>left?(boundary||'')+' ':' ');matched=true;
 }
 const years=Array.from(text.replace(/\d{3,5}\s*[x×*]\s*\d{3,5}|\b\d{3,4}\s*[pi]\b/gi,' ').matchAll(/(?:^|[^0-9])([0-9]{4})(?![0-9])/g),m=>Number(m[1])).filter(y=>y>=1970);
 const residual=cpFileKey(cpFileMetadata(text)
  .replace(/(?:^|[^0-9])[0-9]{4}(?![0-9])/g,m=>Number(m.replace(/\D/g,''))>=1970?' ':m)
  .replace(/S\d{1,2}[ ._-]*E\d+|(?:^|[^a-z0-9])(?:Season|S)[ ._-]*\d+(?=$|[^a-z0-9])|第\s*[一二三四五六七八九十百\d]+\s*季|第\s*\d+\s*[集话期]|(?:^|[^a-z0-9])(?:Episode|EP?)[ ._-]*\d+/gi,' '));
 return {matched,years,residual};
}
// A verified single-work resource can identify numeric episode files. Unknown
// directory spelling is missing evidence, not evidence of another work.
function cpFileResourceContext(params,titles,context){
 if(context&&context.resource!==undefined)return context.resource;
 const result=()=>{
 const value=params.cpFileContextTitle||'';
 if(!value||!cpSearchResultMatches(value,Object.assign({},params,{alternativeTitles:titles})))return false;
 // A single-work site card owns the identity. Explicit multi-work collections
 // still need a named branch; arbitrary catalog spelling is never a veto.
 return !/合集/.test(value)||!cpFileTitleEvidence(value,titles,context).residual;
 };
 const verified=result();if(context)context.resource=verified;return verified;
}
function cpFileCatalogParams(params,files){
 if(params.type==='movie'||cpFileResourceContext(params,cpRelevanceTitles(params))||params.cpFileContextAmbiguous)return params;
 const titles=cpRelevanceTitles(params),context=cpFileMatchingContext(params,titles),branches=new Set();
 for(const file of files){
  const part=String(file.parentPath||file.parent_path||'').split(/[/\\]/).filter(Boolean).find(p=>{const e=cpFileParentEvidence(p,titles,context);return e.matched||e.residual;});
  if(part)branches.add(cpFileKey(part));
 }
 return branches.size>1?Object.assign({},params,{cpFileContextAmbiguous:true}):params;
}
function cpFileMatchDecision(video,params,titles=cpRelevanceTitles(params)){
 video=cpCandidateEpisodeVideo(video,params,titles);
 const context=cpFileMatchingContext(params,titles);
 const name=cpFileText(video?.file_name).replace(/\.[a-z0-9]{2,5}$/i,''),parent=cpFileText(video?.parentPath||video?.parent_path),requested=context?context.requested:cpRequestedYear(params);
 const evidence={fileSeason:cpExplicitSeason(name),parentSeason:cpExplicitSeason(parent.replace(/\bS\s+(\d+)/gi,'S$1')),contextSeason:params.cpFileContextSeason??null};
 const result=(matched,reason)=>({matched,reason,evidence});
 if(requested.conflict)return result(false,'requested-year-conflict');
 if(cpHasExtraMarker({file_name:cpFileWithoutTitles(video?.file_name,titles,context),parentPath:cpFileWithoutTitles(parent,titles,context)},[]))return result(false,'extra');
 const verifiedResource=cpFileResourceContext(params,titles,context);
 if(verifiedResource&&params.type==='movie'){
  if(/S\d+[ ._-]*E\d+|第\s*\d+\s*[集话]/i.test(name))return result(false,'episode-in-movie');
  return result(true,'resource-title');
 }
 const file=verifiedResource?{matched:false,years:[],residual:''}:cpFileTitleEvidence(name,titles,context);evidence.file=file;
 const parents=verifiedResource?[]:parent.split(/[/\\]/).filter(Boolean).map(p=>cpFileParentEvidence(p,titles,context));evidence.parents=parents;
 const namedParent=[...parents].reverse().find(p=>p.matched);
 if(namedParent?.residual)return result(false,'parent-identity-conflict');
 for(const title of verifiedResource?[]:titles){
  const key=cpFileKey(cpMovieName(title).name),number=/^(.*?)(\d+)$/.exec(key);
  if(number&&number[1]&&parent.split(/[/\\]/).filter(Boolean).some((p,i)=>{if(parents[i].matched)return false;const other=cpFileKey(cpFileMetadata(p));return other.startsWith(number[1])&&/^\d+$/.test(other.slice(number[1].length))&&other!==key;}))return result(false,'parent-identity-conflict');
 }
 if(params.type==='movie'){
  if(/S\d+[ ._-]*E\d+|第\s*\d+\s*[集话]/i.test(name))return result(false,'episode-in-movie');
  if(file.residual)return result(false,file.matched?'identity-conflict':'unverified-file-title');
  const meaningful=[...parents].reverse().find(p=>p.matched||p.residual);
  if(!file.matched&&meaningful&&!meaningful.matched)return result(false,'parent-identity-conflict');
  const resource=cpFileTitleEvidence(params.cpFileContextTitle||'',titles,context);evidence.resource=resource;
  const identity=file.matched?file:([...parents].reverse().find(p=>p.matched)||resource);
  if(!identity?.matched||identity.residual)return result(false,'missing-title-evidence');
  if(requested.year&&[...file.years,...identity.years].some(y=>y!==requested.year))return result(false,'year-conflict');
  return result(true,file.matched?'file-title':identity===resource?'resource-title':'parent-title');
 }
 const episode=Number(params.episode),season=Number(params.season||1);
 if(!Number.isFinite(episode)||episode<=0)return result(true,'episode-not-requested');
 if(evidence.fileSeason!==null&&evidence.parentSeason!==null&&evidence.fileSeason!==evidence.parentSeason)return result(false,'season-conflict');
 if(evidence.contextSeason!==null&&evidence.contextSeason!==season)return result(false,'season-conflict');
 if((evidence.fileSeason??evidence.parentSeason??evidence.contextSeason??1)!==season)return result(false,'season-conflict');
 // A combined episode file has no reliable start offset for the requested card.
 if(/(?:S\d+[ ._-]*E|\bE|第)\d+\s*[-~～]\s*(?:S\d+E|E)?\d+/i.test(name))return result(false,'ambiguous-episode-range');
 const markers=Array.from(name.matchAll(/S(\d{1,2})[ ._-]*E(\d+)|第\s*(\d+)\s*[集话期]|(?:^|[^a-z0-9])(?:Episode|EP?)[ ._-]*(\d+)/gi));
 if(markers.some(m=>m[1]&&Number(m[1])!==season))return result(false,'season-conflict');
 if(markers.some(m=>Number(m[2]||m[3]||m[4])!==episode))return result(false,'episode-conflict');
 const id=episodeIdentity(cpFileText(video?.file_name));evidence.episode=id.episode;
 if(id.episode!==episode)return result(false,'episode-conflict');
 // Empty titles are the existing cheap plausibility probe before alias lookup.
 if(!titles.length)return result(true,'episode-probe');
 if(verifiedResource)return result(true,'resource-title-and-episode');
 // Text after an explicit episode marker can be an episode subtitle. Identity
 // before that marker must still agree; a matching suffix cannot rescue it.
 const marker=/(?:S\d{1,2}[ ._-]*E\d+|第\s*\d+\s*[集话期]|(?:^|[ ._-])(?:Episode|EP?)[ ._-]*\d+|\s-\s*\d+)/i.exec(name);
 const prefix=marker?cpFileTitleEvidence(name.slice(0,marker.index),titles,context):file;
 if(prefix.residual&&(prefix.matched||!/^\d+$/.test(prefix.residual)))return result(false,prefix.matched?'identity-conflict':'unverified-file-title');
 if(!prefix.matched){
  if((params.cpFileContextAmbiguous||video.cpFileContextAmbiguous)&&!parents.some(p=>p.matched&&!p.residual))return result(false,'ambiguous-resource-context');
  const meaningful=[...parents].reverse().find(p=>p.matched||p.residual);
  if(meaningful&&(!meaningful.matched||meaningful.residual)){
   const unresolved=parents.filter(p=>p.residual&&!p.matched),path=cpFileWithoutTitles(parent,titles,context);
   const ambiguous=params.cpFileContextAmbiguous||video.cpFileContextAmbiguous||namedParent||unresolved.length>1||/(?:多部|多剧|影视|电视剧|电影)合集|其他(?:影视|电影|剧)/.test(path);
   if(ambiguous||!cpFileResourceContext(params,titles,context))return result(false,'parent-identity-conflict');
  }
 }
 return result(true,prefix.matched?'file-title-and-episode':'context-and-episode');
}

// Success quotas belong to shares, not files or attempted catalogs. Keep the
// native HTTP/source/transfer queues as the only concurrency owners.
function cpSuccessQuota({counts,limit,blocked,check,stopped,onVacancy}){
 const states=new Map(),seen=new Set(),running=new Set();let closed=false,error=null,refillError=null,total=0;
 const state=provider=>{if(!states.has(provider))states.set(provider,{success:0,active:0,attempts:0,queue:[],refilling:false,discoveryDone:false});return states.get(provider);};
 const goal=()=>Math.max(1,Number(limit())||1);
 const full=()=>cpResourceOwner?.moduleQuota?cpResourceOwner.moduleQuota.full:total>=goal();
 // One extra extraction attempt per provider, shared by all failed primary slots.
 // A different passcode is another real attempt; identical candidates are deduplicated.
 // Missing/legacy settings retain the default enabled behavior.
 const extra=cpShared()?.candidateFailureFallback==='disabled'?0:1;
 const budget=()=>goal()+extra;
 const sync=()=>{
  for(const [provider,s] of states)counts.set(provider,full()||blocked(provider)||s.attempts>=budget()?goal():Math.min(goal(),s.success+s.active+s.queue.length));
  if(full())for(const provider of ["quark","baidu","uc","115","123","xunlei","guangya","yidong","tianyi"])counts.set(provider,goal());
 };
 const pump=()=>{
  sync();if(closed||error||stopped()||full())return;
  try{check();}catch(e){error=e;return;}
  // Empty providers enter native queues before providers filling later slots.
  const ordered=[...states].sort((a,b)=>a[1].success-b[1].success);
  for(const [provider,s] of ordered){
   while(!closed&&!stopped()&&!full()&&!blocked(provider)&&s.queue.length&&s.success+s.active<goal()&&s.attempts<budget()){
    const {key,work}=s.queue.shift();s.active++;s.attempts++;sync();
    let task;task=Promise.resolve().then(()=>{check();if(closed||stopped()||full()||blocked(provider))return false;return work();}).then(ok=>{if(ok==='skip')s.attempts--;else if(ok&&total<goal()&&(!cpResourceOwner?.moduleQuota||cpResourceOwner.moduleQuota.acceptedAttempts.has(key))){s.success++;total++;}},e=>{error=error||e;}).finally(()=>{s.active--;running.delete(task);pump();});running.add(task);
   }
  }
  sync();
  if(onVacancy&&!refillError)for(const [provider,s] of ordered){
   if(closed||error||stopped()||full()||blocked(provider)||s.refilling||s.discoveryDone||!s.attempts||s.attempts>=budget()||s.success+s.active+s.queue.length>=goal())continue;
   s.refilling=true;const before=seen.size;let task;
   task=Promise.resolve().then(()=>onVacancy(provider)).then(()=>{if(seen.size===before)s.discoveryDone=true;},e=>{if(['ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT'].includes(e?.code))error=error||e;else refillError=refillError||e;}).finally(()=>{s.refilling=false;running.delete(task);pump();});running.add(task);
  }
 };
 return {
  has:key=>seen.has(key),
  successes:provider=>state(provider).success,
  offer(provider,key,work){if(closed||full()||seen.has(key)||blocked(provider)||state(provider).attempts>=budget())return;seen.add(key);state(provider).queue.push({key,work});pump();},
  sync,
  failure:()=>refillError,
  stopDiscovery:reason=>{refillError=refillError||reason;},
  async drain(){pump();while(running.size)await Promise.all([...running]);check();if(error)throw error;},
  close(){closed=true;for(const s of states.values())s.queue.length=0;sync();return Promise.allSettled([...running]);}
 };
}

const cpMediaIndexRead=qpSeriesIndexRead;
qpSeriesIndexRead=function(key){const value=cpMediaIndexRead(key);if(value.cpMediaSchema===1||!key.includes('selected-index.search-v2:'))return value;
 for(const candidate of value.candidates||[])if(candidate.shares[0]?.provider==='quark'){qpInvalidateShareCatalog(candidate.shares[0]);delete value.entries[qpCandidateKey(candidate.shares[0])];}
 return Object.assign({},value,{candidates:[],cpMediaSchema:1});};


function cpQuarkCandidateVideo(item){
 if(!item||item.dir===true||String(item.dir)==='1'||item.file_type==='folder'||item.obj_category==='folder')return false;
 return String(item.file_type||'').includes('video')||item.obj_category==='video'||/\.(mp4|mkv|avi|mov|flv|wmv|ts|m2ts|webm|m4v)$/i.test(String(item.file_name||''));
}
function cpCandidateEpisodeVideo(video,params,titles){
 if(params.type==='movie'||!video)return video;
 const original=cpFileText(video.file_name),stem=original.replace(/\.[a-z0-9]{2,5}$/i,'');
 if(episodeIdentity(original).episode!=null)return video;
 // Bare trailing numbers are accepted only after removing a verified title.
 // Keep unrecognized text, independent numbers, years and bare resolutions.
 const evidence=cpFileTitleEvidence(stem,titles);
 if(!evidence.matched)return video;
 const named=titles.find(title=>cpFileTitleEvidence(stem,[title]).matched);
 const remainder=cpFileMetadata(cpFileWithoutTitles(stem,titles));
 const number=/^[\p{P}\p{S}\s]*(\d{1,3})[\p{P}\p{S}\s]*$/u.exec(remainder);
 if(!number||Number(number[1])<1)return video;
 return Object.assign({},video,{file_name:named+'.E'+Number(number[1])+'.mkv'});
}

function cpShareExtractionText($,el){
 const element=$(el),own=element.attr('data-clipboard-text')||element.attr('href')||'';
 // Include sibling code text for hidden URLs. Preserve every neighboring href
 // so the password reader can stop at the next link rather than borrow its code.
 const node=element.attr('href')?element.parent():element;
 const markup=String(node.html()||'').replace(/<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1[^>]*>/gi,(_,quote,href)=>' '+href+' ')
  .replace(/<\/(?:p|li|tr|section)>/gi,'\u0001').replace(/<br\s*\/?\s*>/gi,'\n');
 const text=Widget.html.load(markup).text().replace(/&amp;/g,'&');
 return (own&&!text.includes(own)?own+' ':'')+text;
}

// Keep the established stored credential/session format. Only the form input
// changes: a local set is composed as a whole, never from shared account parts.
function cpGuangyaCredentialParams(params){
 if(!params||typeof params!=='object'||Array.isArray(params))return params;
 const fields=['guangyaRefreshToken','guangyaDeviceId'];
 if(!fields.some(key=>Object.prototype.hasOwnProperty.call(params,key)))return params;
 for(const key of ['guangyaAuth',...fields])if(Object.prototype.hasOwnProperty.call(params,key)&&(typeof params[key]!=='string'||/[\x00-\x1f\x7f]/.test(params[key])))throw new Error('光鸭凭证格式无效');
 const refresh=String(params.guangyaRefreshToken||'').trim(),device=String(params.guangyaDeviceId||'').trim();
 // Old JSON configurations still arrive under the existing access-token key.
 if(!refresh&&!device)return params;
 const raw=String(params.guangyaAuth||'').trim();let auth;
 try{auth=raw.startsWith('{')?JSON.parse(raw):{accessToken:raw};}catch(_){throw new Error('光鸭凭证格式无效');}
 if(!auth||typeof auth!=='object'||Array.isArray(auth))throw new Error('光鸭凭证格式无效');
 if(Object.prototype.hasOwnProperty.call(params,'guangyaRefreshToken')){auth.refreshToken=refresh;delete auth.refresh_token;}
 if(Object.prototype.hasOwnProperty.call(params,'guangyaDeviceId')){auth.deviceId=device;delete auth.device_id;}
 return Object.assign({},params,{guangyaAuth:JSON.stringify(auth)});
}

// Compose a complete local credential without changing stored session identity
// or borrowing refresh/device values from the common account.
function cpXunleiCredentialParams(params){
 if(!params||typeof params!=='object'||Array.isArray(params))return params;
 const fields=['xunleiRefreshToken','xunleiDeviceId'],own=key=>Object.prototype.hasOwnProperty.call(params,key);
 if(!fields.some(own))return params;
 for(const key of ['xunleiAuth',...fields])if(own(key)&&(typeof params[key]!=='string'||/[\x00-\x1f\x7f]/.test(params[key])))throw new Error('迅雷凭证格式无效');
 const refresh=String(params.xunleiRefreshToken||'').trim(),device=String(params.xunleiDeviceId||'').trim();
 // Preserve legacy JSON and its original identity when the new fields are empty.
 if(!refresh&&!device)return params;
 const raw=String(params.xunleiAuth||'').trim();let auth;
 try{auth=raw.startsWith('{')?JSON.parse(raw):{accessToken:raw};}catch(_){throw new Error('迅雷凭证格式无效');}
 if(!auth||typeof auth!=='object'||Array.isArray(auth))throw new Error('迅雷凭证格式无效');
 const session=auth.appSession||auth.webSession;
 if(session){
  if(typeof session!=='object'||Array.isArray(session))throw new Error('迅雷凭证格式无效');
  const kind=auth.appSession?'app':'web';auth=Object.assign({},auth,session);if(!auth.clientKind)auth.clientKind=kind;
 }
 delete auth.appSession;delete auth.webSession;
 if(own('xunleiRefreshToken')){auth.refreshToken=refresh;delete auth.refresh_token;}
 if(own('xunleiDeviceId')){auth.deviceId=device;delete auth.device_id;}
 return Object.assign({},params,{xunleiAuth:JSON.stringify(auth)});
}

function cpPlaybackInitializeAccounts(){
 if(!cpRead("local-initialized")){
  [STORAGE_COOKIE_KEY,CP_COOKIE_ROOT+"baidu.cookie",CP_COOKIE_ROOT+"115.cookie",CP_COOKIE_ROOT+"xunlei.auth",CP_COOKIE_ROOT+"guangya.auth",CP_COOKIE_ROOT+"tianyi.cookie"].forEach((k,i)=>cpWrite("local:"+CP_FIELDS[i],String(safeStorageGet(k)||"")));
  cpWrite("local-initialized",true);
 }
}
// Required video work finishes before optional subtitles borrow the serialized
// resource scope. Only bounded logical HTTP promises can reach native parsers.
const CP_SUBTITLE_BUDGET=1500,CP_PLAYBACK_COMMIT_RESERVE=25;
// A successful cache-folder preparation can cross only the required/optional
// boundary of its own owner. Session flushes and pending reads never cross it.
function cpPlaybackFolderContext(owner){return {owner,profile:cpActiveProfile||cpProfile,cookie:ensureCookie()};}
function cpPlaybackFolderValid(record,owner){return record.owner===owner&&record.profile===owner.profile&&record.profile===(cpActiveProfile||cpProfile)&&record.cookie===ensureCookie();}
const cpPlaybackCreateFolderNative=createFolder;
createFolder=async function(name,parent='0'){
 const owner=cpResourceOwner,key=name===CACHE_FOLDER?cpReadKey('quark','folder:'+parent,'',name):null;
 const context=owner&&!owner.optional&&key?cpPlaybackFolderContext(owner):null;
 const seeded=owner?.optional&&owner.playbackFolders?.get(key);
 if(seeded&&!cpPlaybackFolderValid(seeded,owner.parent)){
  if(cpReadOperation)cpReadOperation.delete(key);owner.playbackFolders.delete(key);
 }
 const fid=await cpPlaybackCreateFolderNative(name,parent);
 if(context&&fid&&String(fid)!=='0'){
  cpResourceCheck(owner);
  if(cpPlaybackFolderValid(context,owner)){
   const folders=owner.playbackFolders||(owner.playbackFolders=new Map());folders.set(key,Object.assign(context,{value:fid}));
  }
 }
 return fid;
};
function cpPlaybackSeedFolders(parent,child){
 child.parent=parent;child.playbackFolders=new Map();
 for(const [key,record] of parent.playbackFolders||[])if(cpPlaybackFolderValid(record,parent)){
  cpReadOperation.set(key,Promise.resolve(record.value));child.playbackFolders.set(key,record);
 }
 delete parent.playbackFolders;
}
// Fence optional admission before a failed native getter releases its queue slot.
// Peers already in flight can finish, but cannot start another subtitle read.
function cpPlaybackSubtitleFailure(owner,provider,error){
 if(owner?.optional&&['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(error?.code)){
  const failures=owner.subtitleFailures||(owner.subtitleFailures=new Map());if(!failures.has(provider))failures.set(provider,error);
 }
}
function cpPlaybackSubtitleCheck(owner,provider){
 cpResourceCheck(owner);if(owner?.optional&&owner.subtitleFailures?.has(provider))throw owner.subtitleFailures.get(provider);
}
const cpPlaybackScheduleReadNative=cpScheduleRead;
cpScheduleRead=function(provider,work,policy){
 const owner=cpResourceOwner;
 return cpPlaybackScheduleReadNative(provider,async()=>{
  cpPlaybackSubtitleCheck(owner,provider);
  try{return await work();}catch(error){cpPlaybackSubtitleFailure(owner,provider,error);throw error;}
 },policy);
};
// Formal assemblies already wrap these native getters. Basic source shells
// need the same Quark slot, but must never acquire a second slot around it.
if(typeof cpBetaOriginNative==='undefined'){
 const native=cpOrigin;cpOrigin=function(...args){return cpScheduleRead('quark',()=>native(...args));};
}
if(typeof cpBetaPlayUrlNative==='undefined'){
 const native=getPlayUrl;getPlayUrl=function(...args){return cpScheduleRead('quark',()=>native(...args));};
}
const cpPlaybackSaveSubtitleNative=saveShareFile;let cpPlaybackSubtitleSaves=Promise.resolve();
saveShareFile=function(...args){
 const owner=cpResourceOwner;
 const prepare=async()=>{
  cpPlaybackSubtitleCheck(owner,'quark');
  try{return await cpPlaybackSaveSubtitleNative(...args);}catch(error){cpPlaybackSubtitleFailure(owner,'quark',error);throw error;}
 };
 if(!owner?.optional)return prepare();
 // Keep optional native writes serialized in source shells as well. Check the
 // captured owner again after waiting, before another save can be admitted.
 const task=cpPlaybackSubtitleSaves.then(prepare,prepare);cpPlaybackSubtitleSaves=task.catch(()=>{});return task;
};
const cpPlaybackSubtitleJsonNative=httpJson;
httpJson=async function(method,url,...args){
 const owner=cpResourceOwner,quark=/^https:\/\/drive-(?:h|pc)\.quark\.cn\//.test(url);
 if(quark)cpPlaybackSubtitleCheck(owner,'quark');
 try{return await cpPlaybackSubtitleJsonNative(method,url,...args);}catch(error){if(quark)cpPlaybackSubtitleFailure(owner,'quark',error);throw error;}
};
const cpPlaybackSubtitlesNative=cpSubtitles;
cpSubtitles=function(info,profile,issues){
 const owner=cpResourceOwner;
 if(owner&&!owner.optional){
  const entries=owner.subtitleEntries||(owner.subtitleEntries=new Map());
  owner.subtitleUidScope=cpBaiduUidScope;
  if(!entries.has(info))entries.set(info,{info,profile,issues,urls:[]});
  return Promise.resolve([]);
 }
 return cpPlaybackSubtitlesNative(info,profile,issues);
};
function cpPlaybackOwner(parent,deadline){
 const owner={optional:true,deadline,profile:parent.profile,signal:parent.signal,closed:false};
 owner.expired=new Promise((_,reject)=>{if(typeof setTimeout==='function')owner.timer=setTimeout(()=>{owner.closed=true;reject(cpError('OPERATION_TIMEOUT'));},Math.max(0,deadline-Date.now()));});
 owner.expired.catch(()=>{});return owner;
}
async function cpPlaybackComplete(parent,rows){
 // Quanpan details keep their native object shape; only URL rows carry subtitles.
 if(!Array.isArray(rows))return rows;
 const entries=Array.from(parent.subtitleEntries?.values()||[]),urls=new Set((rows||[]).map(row=>row.url||row.videoUrl).filter(Boolean));
 if(!entries.length||!urls.size||parent.deadline-Date.now()<=CP_PLAYBACK_COMMIT_RESERVE)return rows;
 const child=cpPlaybackOwner(parent,Math.min(Date.now()+CP_SUBTITLE_BUDGET,parent.deadline-CP_PLAYBACK_COMMIT_RESERVE));
 const previous=cpResourceOwner,deadline=cpDeadline,uidScope=cpBaiduUidScope;cpResourceOwner=child;cpDeadline=child.deadline;cpBaiduUidScope=parent.subtitleUidScope||new Map();
 try{
  // All video read preparations have drained before changing the global scope.
  await cpWithReadOperation(async()=>{
   cpPlaybackSeedFolders(parent,child);
   let cursor=0,failure;const committed=new WeakMap(),cacheCommitted=new Map(),entryIssues=[];
   const enrich=(row,index,subtitles)=>{if((committed.get(row)??-1)<=index){row.subtitles=subtitles;committed.set(row,index);}};
   const worker=async()=>{while(!failure&&cursor<entries.length){
    const index=cursor++,entry=entries[index];
    try{
     const provider=entry.info.provider||'quark';
     if(cpBlockedProviders.has(provider)||child.subtitleFailures?.has(provider)||!entry.urls.some(url=>urls.has(url)))continue;
     cpResourceCheck(child);
     const issues=[],subtitles=await cpPlaybackSubtitlesNative(entry.info,entry.profile,issues,cpSubtitleReusePolicy(parent,entry));
     cpResourceCheck(child);entryIssues[index]=issues;cpApplyCandidateIssues(issues);
     for(const row of rows)if(entry.urls.includes(row.url||row.videoUrl))enrich(row,index,subtitles);
     // Formal playback is staged until the public result commits. Source shells
     // use their existing eager cache, which needs the same subtitle enrichment.
     for(const cached of parent.betaPlayback||[])for(const row of cached.rows)if(entry.urls.includes(row.url||row.videoUrl))enrich(row,index,subtitles);
     if(typeof cpPlayKey==='function'&&typeof cpSharedPlaybackCommit!=='function'){
      const key=cpPlayKey(entry.info),cached=key&&cpRead(key);
      if((cacheCommitted.get(key)??-1)<=index){
       cacheCommitted.set(key,index);
       if(issues.length)cpWrite(key,null);
       else if(cached?.rows){for(const row of cached.rows)if(entry.urls.includes(row.url||row.videoUrl))row.subtitles=subtitles;cpWrite(key,cached);}
      }
     }
    }catch(error){failure=failure||error;}
   }};
   // Drain both logical chains before any global scope can be restored.
   await Promise.all([worker(),worker()]);
   // A shared deferred issue list retains the original entry order even when
   // a later provider finishes first. Blocking admission happens immediately.
   for(let index=0;index<entries.length;index++)if(entries[index].issues&&entryIssues[index])entries[index].issues.push(...entryIssues[index]);
   if(failure)throw failure;
  });
 }catch(error){
  // Optional expiry cannot disguise a changed account, cancellation or the
  // parent deadline. Authentication/transfer failures retain native reporting.
  cpResourceCheck(parent);
  if(error?.code!=='OPERATION_TIMEOUT')throw error;
 }finally{
  child.closed=true;if(child.timer!==undefined&&typeof clearTimeout==='function')clearTimeout(child.timer);
  cpResourceOwner=previous;cpDeadline=deadline;cpBaiduUidScope=uidScope;
 }
 if(parent.betaPlayback)parent.betaPlayback=parent.betaPlayback.filter(entry=>!cpBlockedProviders.has(entry.provider));
 if(typeof cpPlayKey==='function')for(const entry of entries)if(cpBlockedProviders.has(entry.info.provider||'quark')){const key=cpPlayKey(entry.info);if(key)cpWrite(key,null);}
 cpResourceCheck(parent);return rows;
}
const cpPlaybackResolveNative=resolvePlaySource,cpPlaybackOwnedToken={};
async function cpPlaybackResolveInOwner(info,deferredIssues,owner){
 cpResourceCheck(owner);
 const rows=await cpPlaybackResolveNative(info,deferredIssues);
 const entry=owner?.subtitleEntries?.get(info);if(entry)entry.urls=(rows||[]).map(row=>row.url);
 return rows;
}
function cpPlaybackResolveOwned(info,deferredIssues){
 const owner=cpResourceOwner;
 if(!owner)return cpPlaybackDirect(()=>cpPlaybackResolveOwned(info,deferredIssues));
 // Keep dynamic resolver wrappers usable, but carry ownership explicitly across
 // this call. An ordinary external call cannot infer ownership from globals.
 return resolvePlaySource(info,deferredIssues,{token:cpPlaybackOwnedToken,owner});
}
resolvePlaySource=function(info,deferredIssues,owned){
 if(owned?.token===cpPlaybackOwnedToken&&owned.owner&&owned.owner===cpResourceOwner)return cpPlaybackResolveInOwner(info,deferredIssues,owned.owner);
 return cpPlaybackDirect(()=>cpPlaybackResolveInOwner(info,deferredIssues,cpResourceOwner));
};
// The cache identity follows the drive that actually supplies the URL/headers.
// UC/123/Yidong share reads are anonymous; unrelated account changes cannot
// invalidate them. Quark's own session still matters for its playback headers.
function cpPlaybackIdentity(provider){
 if(typeof cpIsNewPan==='function'&&cpIsNewPan(provider))return cpNewPanIdentity(provider);
 const index={quark:0,baidu:1,'115':2}[provider];
 return index===undefined?'anonymous-v1':baiduSha1(String(cpAccounts()[index]||''));
}
// Record observed permission transitions separately per drive, including disabled
// calls that never reach a resolver. The epoch survives a module reload.
function cpPlaybackPermissions(){
 const state=cpRead('playback-permissions')||{};let changed=false;
 for(const provider of ['quark','baidu','uc','115','123','xunlei','guangya','yidong','tianyi']){
  const enabled=cpDriveEnabled(provider),previous=state[provider];
  if(!previous||previous.enabled!==enabled){state[provider]={enabled,generation:(previous?.generation||0)+(previous?1:0)};changed=true;}
 }
 if(changed)cpWrite('playback-permissions',state);return state;
}
const cpPlaybackBindNative=bindForwardParams;
bindForwardParams=function(...args){const result=cpPlaybackBindNative.apply(this,args);cpPlaybackPermissions();if(typeof cpColdResetConfig==='function')cpColdResetConfig();return result;};
function cpPlaybackKey(info){
 const v=info.videoInfo||{},provider=info.provider||'quark';if(!v.shareId||!v.fid)return null;
 return 'playback-v2:'+baiduSha1(JSON.stringify([provider,cpPlaybackIdentity(provider),v.shareId,String(v.fid),v.passcode||'',v.file_name,cpParent(v),cpSetting('quality','auto'),cpSetting('subtitles','auto'),provider==='quark'?ensureCookie():'',cpPlaybackPermissions()[provider]?.generation||0]));
}
if(typeof cpBetaPlayKey==='function')cpBetaPlayKey=cpPlaybackKey;
if(typeof cpPlayKey==='function')cpPlayKey=cpPlaybackKey;
function cpPlaybackMissing(error){return !['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN','ABORTED','ACCOUNT_CHANGED','OPERATION_TIMEOUT'].includes(error?.code)&&(error?.code==='FILE_NOT_FOUND'||error?.apiCode==='FILE_NOT_FOUND'||Number(error?.status)===404);}
async function cpNPTransferResolve(provider,video,profile){
 const owner=cpResourceOwner,operation=owner||cpReadOperation,key=cpNPKey(profile,provider,['file',video.shareId,video.passcode||'',video.fid]),lock=provider+':'+cpNewPanIdentity(provider);
 const check=(dispatch=false)=>{cpResourceCheck(owner);cpNPGuard(provider,profile);if(dispatch&&operation?.playbackFailures?.has(provider))throw cpRead(key)?.state==='uncertain'?cpError('TRANSFER_UNCERTAIN'):operation.playbackFailures.get(provider);};
 // Fence admission before releasing a failed write/read slot. Native candidate
 // issue handling still owns visible error ordering; already-running reads may
 // finish, but queued work cannot start another write after auth/uncertain state.
 const fail=error=>{if(operation&&['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(error?.code)){const failures=operation.playbackFailures||(operation.playbackFailures=new Map());if(!failures.has(provider))failures.set(provider,error);}throw error;};
 const serial=work=>cpNPSerial(lock,async()=>{check(true);try{return await work();}catch(error){return fail(error);}});
 const prepare=()=>serial(async()=>{const phase=cpRead(key);if(phase?.state==='succeeded'&&phase.value)return String(phase.value);return cpPlaybackPrepareTransfer(provider,video,profile);});
 check();
 let phase=cpRead(key),fid=phase?.state==='succeeded'&&phase.value?String(phase.value):await prepare();
 const read=()=>cpScheduleRead(provider,async()=>{check(true);try{const rows=await cpPlaybackTransferUrl(provider,fid,profile);check();return rows;}catch(error){return fail(error);}});
 try{return await read();}catch(error){
  check();if(!cpPlaybackMissing(error))throw error;
  // Only this confirmed receipt may be invalidated. A concurrent uncertain
  // write or another saved fid must never be replaced by the stale failure.
  fid=await serial(async()=>{
   check();phase=cpRead(key);
   if(phase?.state==='succeeded'&&String(phase.value)!==fid)return String(phase.value);
   if(!phase||phase.state!=='succeeded')throw cpError('TRANSFER_UNCERTAIN');
   cpNPWrite(profile,provider,key,null);
   cpReadInvalidate(provider,cpNewPanIdentity(provider),'','cache-root');
   return cpPlaybackPrepareTransfer(provider,video,profile);
  });
  return read(); // One recovery only; this second failure escapes unchanged.
 }
}

// Direct public resolution and movie-play details also get finite ownership.
// Creation occurs before queueing so waiting consumes the same 30-second budget.
function cpPlaybackDetail(work){
 const deadline=Date.now()+30000;
 // Sample current settings at arrival without binding another operation's scope.
 // Native detail binding runs only after this request owns the public queue.
 if(typeof cpColdResetConfig==='function')cpColdResetConfig();
 // Initialize storage once without changing the active profile or native bind.
 cpPlaybackInitializeAccounts();
 return cpPlaybackDirect(work,baiduSha1(JSON.stringify(cpAccounts())),deadline);
}
function cpPlaybackDirect(work,profile=cpProfile,expiresAt=Date.now()+30000){
 const owner=cpPlaybackOwner({profile,signal:null},expiresAt);owner.optional=false;owner.manual=true;
 const execute=async()=>{
  cpResourceCheck(owner);
  const previous=cpResourceOwner,deadline=cpDeadline;cpResourceOwner=owner;cpDeadline=owner.deadline;
  try{return await cpPlaybackComplete(owner,await cpWithReadOperation(work));}
  finally{cpResourceOwner=previous;cpDeadline=deadline;}
 };
 const task=cpResourceQueue.then(execute,execute);cpResourceQueue=task.catch(()=>{});
 return cpResourceAwait(owner,task).finally(()=>{if(owner.timer!==undefined&&typeof clearTimeout==='function')clearTimeout(owner.timer);});
}
// Identity hashing is pure; keep exact bounded string inputs in memory only.
// Changed credentials still hash immediately and every account guard still runs.
const cpIdentityHashNative=baiduSha1,cpIdentityHashMemo=new Map();
baiduSha1=function(message){
 if(typeof message!=='string'||message.length>8192)return cpIdentityHashNative(message);
 const cached=cpIdentityHashMemo.get(message);
 if(cached!==undefined){cpIdentityHashMemo.delete(message);cpIdentityHashMemo.set(message,cached);return cached;}
 const digest=cpIdentityHashNative(message);cpIdentityHashMemo.set(message,digest);
 if(cpIdentityHashMemo.size>32)cpIdentityHashMemo.delete(cpIdentityHashMemo.keys().next().value);
 return digest;
};
// A fresh read preserves intervening host changes; never retain storage values.
// Even a no-op write remains a configuration snapshot boundary.
const cpPlaybackStorageSetNative=safeStorageSet;
safeStorageSet=function(...args){
 if(typeof cpColdResetConfig==='function')cpColdResetConfig();
 const [key,value]=args;
 if(args.length===2&&typeof key==='string'&&typeof value==='string'&&value.length>0&&safeStorageGet(key)===value)return;
 return cpPlaybackStorageSetNative(...args);
};

/* CatPaw transfer folder CatpawCache */

/* CatPaw manual transfer playback epoch */
// Only successful URLs depend on saved transfer files. Share catalogs retain
// their existing keys. A request keeps its starting epoch across every await.
function cpManualTransferPlayEpoch(provider){
 if(!['quark','xunlei','guangya'].includes(provider))return '';
 try{
  if(typeof Widget.sharedCache?.get!=='function')return null;
  const value=Widget.sharedCache.get('catpaw.upstream-enhanced.transfers.v1','playback-epoch:'+provider);
  return value==null||value===''?CACHE_FOLDER:typeof value==='string'?CACHE_FOLDER+':'+value:null;
 }catch(_){return null;}
}
function cpManualTransferPlayKey(key,epoch){return epoch===null?null:key&&epoch?key+':'+epoch:key;}

// Each automatic module owns a total quota. The required-video child can be
// closed permanently without closing its parent's optional subtitle scope.
function cpModuleQuotaResource(row,source){
 const owner=cpResourceOwner,quota=owner?.moduleQuota;
 if(!quota||!/^https?:\/\//i.test(row?.url||''))return row;
 cpResourceCheck(owner);
 const video=source?.videoInfo||{},provider=source?.provider||'quark';
 const share=video.shareId??video.shareid??video.share_id;
 const file=video.fid??video.fs_id??video.fileId;
 const key=share==null||file==null?JSON.stringify([row.id,row.url]):JSON.stringify([provider,String(share),String(file)]);
 if(!quota.shares.has(key)){
  quota.shares.add(key);quota.rows.push(row);
  if(quota.rows.length<quota.limit)cpSubtitleAccepted(owner,source,row);
  if(share!=null)quota.acceptedAttempts.add(JSON.stringify([provider,String(share),video.passcode||'']));
  if(quota.rows.length>=quota.limit){
   cpResourceCheck(quota.parent);
   quota.full=true;owner.closed=true;quota.stop(cpError('OPERATION_TIMEOUT'));
  }
 }
 return row;
}
const cpModuleQuotaFormatNative=formatPlaybackResource;
formatPlaybackResource=function(resource,source,...args){
 cpResourceCheck(cpResourceOwner);
 return cpModuleQuotaResource(cpModuleQuotaFormatNative(resource,source,...args),source);
};
function cpModuleQuotaCancelled(error){
 return cpResourceOwner?.moduleQuota?.full===true&&error?.code==='OPERATION_TIMEOUT';
}
function cpModuleQuotaRemember(persist){
 const quota=cpResourceOwner?.moduleQuota;if(quota)quota.persist.push(persist);
}
async function cpModuleQuotaRequired(parent,params,work){
 if(!parent||parent.manual)return work();
 const value=Number(cpSetting('maxShareCandidates','2'));
 const quota={parent,limit:[1,2,3,5].includes(value)?value:2,shares:new Set(),acceptedAttempts:new Set(),rows:[],persist:[],full:false};
 const stopped=new Promise((_,reject)=>{quota.stop=reject;});
 const child={profile:parent.profile,signal:parent.signal,deadline:parent.deadline,refresh:parent.refresh,manual:false,closed:false,moduleQuota:quota,expired:Promise.race([parent.expired,stopped])};
 child.expired.catch(()=>{});
 // Snapshot only accepted successful shares, including a partial budget result.
 parent.snapshot=()=>quota.rows.length?quota.rows:child.snapshot?child.snapshot():[];
 cpResourceOwner=child;cpResourceParams.set(params,child);
 let result;
 try{
  try{result=await work();}
  catch(error){
   cpResourceCheck(parent);
   if(!quota.full||error?.code!=='OPERATION_TIMEOUT')throw error;
  }
  cpResourceCheck(parent);
  // Count usable target cards, never failed attempts or repeated target files.
  result=quota.rows.length?cpResourceLines(quota.rows):result;
 }finally{
  child.closed=true;cpResourceOwner=parent;cpResourceParams.set(params,parent);
  // All logical required work has drained before globals or optional ownership
  // change. Raw HTTP still holds the permanently closed child, never the parent.
  for(const key of ['subtitleEntries','subtitleUidScope','betaPlayback','betaExpired','sharedPlayback'])if(child[key])parent[key]=child[key];
  if(child.playbackFolders){
   parent.playbackFolders=new Map();
   for(const [key,record] of child.playbackFolders)if(record.owner===child&&record.profile===parent.profile)parent.playbackFolders.set(key,Object.assign({},record,{owner:parent}));
  }
 }
 // Quota cancellation is successful partial discovery, never a negative cache.
 // Persist observed catalogs only under the still-valid parent, after all
 // canceled logical work has settled. The closed child is never reactivated.
 cpResourceCheck(parent);
 if(quota.full)for(const persist of quota.persist)persist();
 return result;
}

/* subtitle-pipeline-v1 */
// Early subtitles share the required owner, never a concurrent global scope.
// Only successful cloned values survive its close; optional final work gets a
// fresh read operation and the unchanged 1500 ms / 25 ms commit budget.
function cpSubtitleSourceKey(info){
 const v=info.videoInfo||{};
 return JSON.stringify([info.provider||'quark',String(v.shareId||''),v.passcode||'',String(v.fid||'')]);
}
function cpSubtitleFileKey(info){
 const v=info.videoInfo||{};
 // Native token renewal does not change the accepted file's identity.
 return JSON.stringify([cpSubtitleSourceKey(info),v.file_name,cpParent(v),v.shareid,v.uk]);
}
function cpSubtitleContext(info){
 return JSON.stringify([cpActiveProfile||cpProfile,cpPlaybackKey(info),cpSharedPlaybackEpoch(info)]);
}
function cpSubtitleNativeRead(provider,source){
 if(provider==='uc')return getUcResource(source);
 if(provider==='baidu')return getBaiduResource(source);
 return get115Resource(source);
}
function cpSubtitleRead(provider,source,profile,policy){
 const read=policy?.read?info=>policy.read(provider,info):info=>cpSubtitleNativeRead(provider,info);
 return provider==='uc'?cpUcSubtitle(source,profile,read):read(source);
}
function cpSubtitleRequiredEnd(owner,operation){
 const quota=owner?.moduleQuota;
 if(!quota||quota.requiredReadOperation!==operation)return;
 // This is the primary work-settled boundary, before pending preparation drain.
 // Ordinary exhaustion is not quota success and must not persist partial indexes.
 if(!owner.closed){quota.requiredEnded=true;owner.closed=true;quota.stop(cpError('OPERATION_TIMEOUT'));}
 // Quota closure can leave an idle low-priority queue with no running getter
 // whose finally would pump it. Reject those jobs before the pending drain too.
 cpPumpRead();
}
function cpSubtitleAccepted(owner,source,row){
 if(!owner?.moduleQuota||!['uc','baidu','115'].includes(source?.provider)||cpSetting('subtitles','auto')==='off')return;
 const parent=owner.moduleQuota.parent,key=cpSubtitleSourceKey(source);
 const coordinator=parent.subtitlePreparation||(parent.subtitlePreparation={entries:new Map(),failures:new Map()});
 if(coordinator.entries.has(key)||coordinator.failures.has(source.provider))return;
 const entry=Array.from(owner.subtitleEntries?.values()||[]).find(item=>cpSubtitleSourceKey(item.info)===key&&item.urls.includes(row.url));
 if(!entry)return;
 const info=JSON.parse(JSON.stringify(entry.info)),context=cpSubtitleContext(info),values=new Map();
 const record={context,values};coordinator.entries.set(key,record);
 const check=()=>{
  cpResourceCheck(owner);
  if(!cpDriveEnabled(info.provider)||cpSetting('subtitles','auto')==='off'||cpSubtitleContext(info)!==context)throw cpError('OPERATION_TIMEOUT');
  if(coordinator.failures.has(info.provider))throw coordinator.failures.get(info.provider);
 };
 const failure=error=>{if(['AUTH_FAILED','RATE_LIMITED','TRANSFER_UNCERTAIN'].includes(error?.code)&&!coordinator.failures.has(info.provider))coordinator.failures.set(info.provider,error);};
 const policy={
  read:async(provider,subtitle)=>{
   check();const fileKey=cpSubtitleFileKey(subtitle);
   if(values.has(fileKey))return JSON.parse(JSON.stringify(values.get(fileKey)));
   const native={uc:cpSessionUcResource,baidu:cpSessionBaiduResource,'115':cpSession115Resource}[provider];
   const resources=await cpScheduleRead(provider,async()=>{
    check();
    try{return await native(subtitle);}catch(error){failure(error);throw error;}
   },{check});
   check();
   if(resources?.some(resource=>/^https?:\/\//i.test(resource.url||'')))values.set(fileKey,JSON.parse(JSON.stringify(resources)));
   return resources;
  },
  // Formal candidate issues eagerly block providers even with a deferred list.
  // An early optional failure fences only this coordinator's early admissions.
  issue:(provider,code,lastError,issues)=>{if(issues)issues.push({provider,code,lastError});}
 };
 // Matching executes synchronously up to the first read, snapshotting selected
 // records at admission. Track the entire collector before changing any scope.
 cpTrackRead(cpPlaybackSubtitlesNative(info,entry.profile,[],policy).catch(()=>{}));
}
function cpSubtitleReusePolicy(parent,entry){
 const record=parent.subtitlePreparation?.entries.get(cpSubtitleSourceKey(entry.info));
 if(!record)return;
 return {read:(provider,subtitle)=>{
  cpResourceCheck(parent);cpResourceCheck(cpResourceOwner);
  const value=record.context===cpSubtitleContext(entry.info)&&record.values.get(cpSubtitleFileKey(subtitle));
  return value&&cpSharedPlaybackUntil(value,Date.now())>Date.now()?Promise.resolve(JSON.parse(JSON.stringify(value))):cpSubtitleNativeRead(provider,subtitle);
 }};
}

/* share-query-boundaries-v1 */

/* shared-playback-v3 */
// Completed automatic playback only. Fixed single-record slots bound storage to
// 4 MiB plus small provider/fence controls, without an index read/modify/write.
const CP_SHARED_PLAYBACK_PROVIDERS=['quark','baidu','uc','115','123','xunlei','guangya','yidong','tianyi'];
const CP_SHARED_PLAYBACK_NS='catpaw.playback.v3';
const CP_SHARED_PLAYBACK_SLOTS=64,CP_SHARED_PLAYBACK_BYTES=65536;
const cpSharedPlaybackPendingInvalidations=new Set(),cpSharedPlaybackCleanupToken={};
function cpSharedPlaybackRead(key,limit=1024){
 try{
  if(typeof Widget.sharedCache?.get!=='function'||typeof Widget.sharedCache?.set!=='function')return null;
  const raw=Widget.sharedCache.get(CP_SHARED_PLAYBACK_NS,key);
  if(raw==null||raw==='')return '';
  return typeof raw==='string'&&raw.length<=limit&&cpSharedPlaybackBytes(raw)<=limit?raw:null;
 }catch(_){return null;}
}
function cpSharedPlaybackBytes(value){
 return value.length+(value.match(/[\u0080-\u07ff]/g)||[]).length+2*(value.match(/[\u0800-\uffff]/g)||[]).length-2*(value.match(/[\ud800-\udbff][\udc00-\udfff]/g)||[]).length;
}
function cpSharedPlaybackWrite(key,value){
 try{return Widget.sharedCache.set(CP_SHARED_PLAYBACK_NS,key,value)!==false;}catch(_){return false;}
}
function cpSharedPlaybackFence(key){
 const raw=cpSharedPlaybackRead(key,100);
 return raw===''?'0':raw!==null&&/^[\x20-\x7e]{1,100}$/.test(raw)?raw:null;
}
function cpSharedPlaybackBump(key='clear'){
 const previous=cpSharedPlaybackFence(key),count=Number(previous?.split(':').at(-1));
 const next=Date.now()+':'+Math.random()+':'+(Number.isSafeInteger(count)&&count>=0&&count<Number.MAX_SAFE_INTEGER?count+1:1);
 return cpSharedPlaybackWrite(key,next)&&cpSharedPlaybackFence(key)===next;
}
// Optional cache publication may miss. Explicit invalidation must either
// persist its fence or report failure to its caller before native work starts.
function cpSharedPlaybackInvalidate(key='clear',cleanup){
 if(typeof Widget.sharedCache?.get!=='function'||typeof Widget.sharedCache?.set!=='function')return;
 if(!cpSharedPlaybackBump(key)){
  cpSharedPlaybackPendingInvalidations.add(key);
  // An already-failed native request keeps its original outcome. The pending
  // key still disables local reuse/publication until durable invalidation wins.
  if(cleanup===cpSharedPlaybackCleanupToken)return;
  const error=new Error('共享播放缓存清理失败，请重试');
  error.code='PLAYBACK_CACHE_INVALIDATION_FAILED';
  throw error;
 }
 if(key==='clear')cpSharedPlaybackPendingInvalidations.clear();
 else cpSharedPlaybackPendingInvalidations.delete(key);
}
function cpSharedPlaybackShare(info){
 const video=info.videoInfo||info,provider=info.provider||'quark';
 return baiduSha1(JSON.stringify([provider,String(video.shareId||''),String(video.passcode||'')]));
}
function cpSharedPlaybackShard(info){return 'share:'+parseInt(cpSharedPlaybackShare(info).slice(0,8),16)%CP_SHARED_PLAYBACK_SLOTS;}
function cpSharedPlaybackScope(provider){
 return baiduSha1(JSON.stringify([cpPlaybackIdentity(provider),!!cpDriveEnabled(provider),cpSetting('quality','auto'),cpSetting('subtitles','auto')]));
}
function cpSharedPlaybackObserve(provider){
 if(!CP_SHARED_PLAYBACK_PROVIDERS.includes(provider))return null;
 const key='provider:'+provider,raw=cpSharedPlaybackRead(key),scope=cpSharedPlaybackScope(provider);
 if(raw===null)return null;
 if(raw&&raw!==scope)cpSharedPlaybackInvalidate('epoch:'+provider);
 if(raw!==scope&&!cpSharedPlaybackWrite(key,scope))return null;
 return scope;
}
function cpSharedPlaybackTransferEpoch(provider){
 if(!['quark','xunlei','guangya'].includes(provider))return '';
 try{
  const value=Widget.sharedCache.get('catpaw.upstream-enhanced.transfers.v1','playback-epoch:'+provider);
  return value==null||value===''?CACHE_FOLDER:typeof value==='string'&&value.length<=100?CACHE_FOLDER+':'+value:null;
 }catch(_){return null;}
}
function cpSharedPlaybackEpoch(info){
 const provider=info.provider||'quark',values=[cpSharedPlaybackFence('clear'),cpSharedPlaybackFence('epoch:'+provider),cpSharedPlaybackFence(cpSharedPlaybackShard(info)),cpSharedPlaybackTransferEpoch(provider)];
 return values.includes(null)?null:JSON.stringify(values);
}
function cpSharedPlaybackContext(info){
 if(cpSharedPlaybackPendingInvalidations.size)return null;
 const provider=info.provider||'quark',scope=cpSharedPlaybackObserve(provider),epoch=cpSharedPlaybackEpoch(info);
 return scope===null||epoch===null?null:{scope,epoch};
}
function cpSharedPlaybackValid(context,info){
 return !cpSharedPlaybackPendingInvalidations.size&&context&&context.scope===cpSharedPlaybackScope(info.provider||'quark')&&context.epoch===cpSharedPlaybackEpoch(info);
}
function cpSharedPlaybackSlot(key){return 'record:'+parseInt(baiduSha1(key).slice(0,8),16)%CP_SHARED_PLAYBACK_SLOTS;}
function cpSharedPlaybackRows(rows){
 return Array.isArray(rows)&&rows.length>0&&rows.every(row=>row&&typeof row==='object'&&!Array.isArray(row)&&/^https?:\/\//i.test(row.url||'')&&
  ['headers','customHeaders'].every(key=>row[key]===undefined||row[key]&&typeof row[key]==='object'&&!Array.isArray(row[key])&&Object.values(row[key]).every(value=>typeof value==='string'))&&
  (row.subtitles===undefined||Array.isArray(row.subtitles)&&row.subtitles.every(sub=>sub&&/^https?:\/\//i.test(sub.url||''))));
}
// Rex JavaScriptCore does not provide browser URL/URLSearchParams globals.
// Inspect signed expiry locally; malformed transport URLs conservatively miss.
function cpSharedPlaybackUntil(rows,at){
 let until=at+30000;
 for(const row of rows)for(const item of [row,...(row.subtitles||[])]){
  const url=item.url,match=typeof url==='string'&&/^https?:\/\/([A-Za-z0-9._~-]+|\[[a-fA-F0-9:]+\])(?::(\d{1,5}))?(?:[/?#][^\s\\]*)?$/i.exec(url);
  if(!match||match[2]&&Number(match[2])>65535)return at;
  try{
   decodeURI(url); // Reject broken escapes before publishing a reusable record.
   const transport=url.split('#')[0],query=transport.indexOf('?');
   if(query<0)continue;
   for(const field of transport.slice(query+1).split('&')){
    const equal=field.indexOf('='),name=decodeURIComponent((equal<0?field:field.slice(0,equal)).replace(/\+/g,' '));
    const value=decodeURIComponent((equal<0?'':field.slice(equal+1)).replace(/\+/g,' '));
    if(['expires','expire','e'].includes(name)&&/^\d{10,13}$/.test(value))until=Math.min(until,Number(value)*(value.length===10?1000:1)-5000);
    if(name==='auth_key'&&/^\d{10}-/.test(value))until=Math.min(until,Number(value.slice(0,10))*1000-5000);
   }
  }catch(_){return at;}
 }
 return until;
}
function cpSharedPlaybackGet(key,context,info){
 if(!key||!context)return null;
 try{
  const raw=cpSharedPlaybackRead(cpSharedPlaybackSlot(key),CP_SHARED_PLAYBACK_BYTES);
  if(!raw)return null;
  const entry=JSON.parse(raw),now=Date.now();
  if(entry?.schema!==3||entry.key!==key||entry.epoch!==context.epoch||entry.scope!==context.scope||
   !Number.isFinite(entry.at)||!Number.isFinite(entry.expires)||entry.at>now||
   entry.expires<=now||entry.expires-entry.at>30000||entry.expires<=entry.at||
   !cpSharedPlaybackRows(entry.rows)||cpSharedPlaybackUntil(entry.rows,entry.at)<entry.expires||
   !cpSharedPlaybackValid(context,info))return null;
  return entry.rows;
 }catch(_){return null;}
}
// Resolve the maintained native protocol, bypassing every legacy module URL
// cache. A clear in another VM can never be undone by a local fallback hit.
const cpSharedPlaybackNative=typeof cpBetaResolveNative==='function'?cpBetaResolveNative:cpPlayResolveNative;
cpPlaybackResolveInOwner=async function(info,deferredIssues,owner){
 const profile=cpActiveProfile||cpProfile,provider=info.provider||'quark';
 cpCheck(profile);
 cpResourceCheck(owner);
 if(!cpDriveEnabled(provider)||cpBlockedProviders.has(provider))return [];
 const automatic=!!owner&&!owner.manual&&!owner.refresh;
 if(!automatic)cpSharedPlaybackInvalidate(cpSharedPlaybackShard(info));
 const context=cpSharedPlaybackContext(info),key=cpPlaybackKey(info);
 if(automatic){
  const rows=cpSharedPlaybackGet(key,context,info);
  if(rows){
   cpCheck(profile);
   cpResourceCheck(owner);
   return rows;
  }
 }
 const issueCount=deferredIssues?.length||0;
 let rows;
 try{rows=await cpSharedPlaybackNative(info,deferredIssues);}
 catch(error){
  if(error?.code==='SHARE_EXPIRED')cpSharedPlaybackInvalidate(cpSharedPlaybackShard(info),cpSharedPlaybackCleanupToken);
  throw error;
 }
 cpCheck(profile);
 cpResourceCheck(owner);
 const subtitle=owner?.subtitleEntries?.get(info);
 if(subtitle)subtitle.urls=(rows||[]).map(row=>row.url);
 if(automatic&&key&&cpSharedPlaybackValid(context,info)&&!cpBlockedProviders.has(provider)&&(deferredIssues?.length||0)===issueCount&&cpSharedPlaybackRows(rows)){
  try{
   const at=Date.now();
   const entry={
    schema:3,key:cpPlaybackKey(info),scope:context.scope,epoch:context.epoch,
    at,expires:cpSharedPlaybackUntil(rows,at),rows:JSON.parse(JSON.stringify(rows))
   };
   const video=info.videoInfo;
   const file=JSON.stringify([provider,String(video.shareId),String(video.fid)]);
   (owner.sharedPlayback||(owner.sharedPlayback=[])).push({info,context,entry,file,quota:owner.moduleQuota});
  }catch(_){}
 }
 return rows;
};
function cpSharedPlaybackRowKey(row){
 const headers=value=>Object.entries(value||{}).sort(([first],[second])=>first.localeCompare(second));
 return JSON.stringify([row.url||row.videoUrl,headers(row.headers),headers(row.customHeaders)]);
}
function cpSharedPlaybackCommit(owner,result){
 if(!owner||owner.manual||owner.refresh||!Array.isArray(result))return;
 cpResourceCheck(owner);
 const accepted=new Map();
 for(const row of result){
  const key=cpSharedPlaybackRowKey(row),previous=accepted.get(key);
  // Distinct accepted files can have identical transport facts. Without exact
  // provenance, differing completed subtitles make that key uncacheable.
  if(accepted.has(key)&&(previous===null||JSON.stringify(previous.subtitles||[])!==JSON.stringify(row.subtitles||[])))accepted.set(key,null);
  else accepted.set(key,row);
 }
 for(const staged of owner.sharedPlayback||[]){
  const {info,context,entry,file,quota}=staged;
  const provider=info.provider||'quark';
  if(cpBlockedProviders.has(provider)||owner.betaExpired?.has(JSON.stringify([provider,info.videoInfo.shareId]))||!cpSharedPlaybackValid(context,info)||entry.key!==cpPlaybackKey(info))continue;
  if(quota?.rows.length&&!quota.shares.has(file))continue;
  // Preserve raw names/quality/headers. Only selected URLs gain their final
  // subtitles, after the optional pipeline has completed under this owner.
  const rows=entry.rows.filter(row=>accepted.get(cpSharedPlaybackRowKey(row))).map(row=>{
   const selected=accepted.get(cpSharedPlaybackRowKey(row));
   return selected.subtitles===undefined?row:{...row,subtitles:selected.subtitles};
  });
  if(!cpSharedPlaybackRows(rows))continue;
  try{
   const value={...entry,rows,expires:Math.min(entry.expires,cpSharedPlaybackUntil(rows,entry.at))};
   if(value.expires<=Date.now())continue;
   const raw=JSON.stringify(value);
   if(cpSharedPlaybackBytes(raw)>CP_SHARED_PLAYBACK_BYTES||!cpSharedPlaybackValid(context,info))continue;
   if(!cpSharedPlaybackWrite(cpSharedPlaybackSlot(entry.key),raw))cpSharedPlaybackBump();
  }catch(_){}
 }
 owner.sharedPlayback=[];
}
const cpSharedPlaybackBindNative=bindForwardParams;
bindForwardParams=function(...args){
 const result=cpSharedPlaybackBindNative.apply(this,args);
 for(const provider of CP_SHARED_PLAYBACK_PROVIDERS)cpSharedPlaybackObserve(provider);
 if(typeof cpColdResetConfig==='function')cpColdResetConfig();return result;
};
function cpSharedPlaybackClear(native){
 return function(...args){
  cpSharedPlaybackInvalidate();
  return native(...args);
 };
}
if(typeof cpClearCandidateCache==='function')cpClearCandidateCache=cpSharedPlaybackClear(cpClearCandidateCache);
if(typeof clearRexCatalogCache==='function')clearRexCatalogCache=cpSharedPlaybackClear(clearRexCatalogCache);
if(typeof clearHuajuanCache==='function')clearHuajuanCache=cpSharedPlaybackClear(clearHuajuanCache);
if(typeof cpClearPlaybackCache==='function')cpClearPlaybackCache=cpSharedPlaybackClear(cpClearPlaybackCache);
if(typeof cpBetaClearPlayback==='function')cpBetaClearPlayback=cpSharedPlaybackClear(cpBetaClearPlayback);
if(typeof cpBetaDiscardShare==='function'){
 const native=cpBetaDiscardShare;
 cpBetaDiscardShare=function(provider,shareId,cleanup){
  if(CP_SHARED_PLAYBACK_PROVIDERS.includes(provider))cpSharedPlaybackInvalidate('epoch:'+provider,cleanup);
  return native(provider,shareId);
 };
}
if(typeof cpInvalidateCandidateShare==='function'){
 const native=cpInvalidateCandidateShare;
 cpInvalidateCandidateShare=function(share,...args){
  cpSharedPlaybackInvalidate(cpSharedPlaybackShard(share),args[0]);
  return native(share,...args);
 };
}

/* drive-auth-notices-v1 */
const CP_AUTH_NOTICE_URL="async:data:application/vnd.apple.mpegurl;base64,I0VYVE0zVQojRVhULVgtVkVSU0lPTjo3CiNFWFQtWC1UQVJHRVREVVJBVElPTjo1CiNFWFQtWC1NRURJQS1TRVFVRU5DRTowCiNFWFQtWC1QTEFZTElTVC1UWVBFOlZPRAojRVhULVgtTUFQOlVSST0iZGF0YTp2aWRlby9tcDQ7YmFzZTY0LEFBQUFIR1owZVhCcGMyODFBQUFDQUdsemJ6VnBjMjgyYlhBME1RQUFBMUZ0YjI5MkFBQUFiRzEyYUdRQUFBQUFBQUFBQUFBQUFBQUFBRHdBQUFBQUFBQUJBQUFCQUFBQUFBQUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0FBQUNKSFJ5WVdzQUFBQmNkR3RvWkFBQUFBTUFBQUFBQUFBQUFBQUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUVBQUFBQUZBQUFBQXRBQUFBQUFBQ1JsWkhSekFBQUFIR1ZzYzNRQUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFFQUFBQUFBWnh0WkdsaEFBQUFJRzFrYUdRQUFBQUFBQUFBQUFBQUFBQUFBRHdBQUFBQUFGWEVBQUFBQUFBdGFHUnNjZ0FBQUFBQUFBQUFkbWxrWlFBQUFBQUFBQUFBQUFBQUFGWnBaR1Z2U0dGdVpHeGxjZ0FBQUFGSGJXbHVaZ0FBQUJSMmJXaGtBQUFBQVFBQUFBQUFBQUFBQUFBQUpHUnBibVlBQUFBY1pISmxaZ0FBQUFBQUFBQUJBQUFBREhWeWJDQUFBQUFCQUFBQkIzTjBZbXdBQUFDN2MzUnpaQUFBQUFBQUFBQUJBQUFBcTJGMll6RUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBTFFBRWdBQUFCSUFBQUFBQUFBQUFFVVRHRjJZell6TGpFdU1UQXhJR3hwWW5neU5qUUFBQUFBQUFBQUFBQUFBQUFZLy84QUFBQXhZWFpqUXdGQ3dCLy80UUFaWjBMQUg5bUFVQVc3QVJBQUFBTUFFQUFBQXdQQThZTW1nQUVBQldqSllKTElBQUFBRUhCaGMzQUFBQUFCQUFBQUFRQUFBQlJpZEhKMEFBQUFBQUFBVkpBQUFGU1FBQUFBRUhOMGRITUFBQUFBQUFBQUFBQUFBQkJ6ZEhOakFBQUFBQUFBQUFBQUFBQVVjM1J6ZWdBQUFBQUFBQUFBQUFBQUFBQUFBQkJ6ZEdOdkFBQUFBQUFBQUFBQUFBQW9iWFpsZUFBQUFDQjBjbVY0QUFBQUFBQUFBQUVBQUFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBa1hWa2RHRUFBQUNKYldWMFlRQUFBQUFBQUFBaGFHUnNjZ0FBQUFBQUFBQUFiV1JwY21Gd2NHd0FBQUFBQUFBQUFBQUFBQUJjYVd4emRBQUFBRENwYm1GdEFBQUFLR1JoZEdFQUFBQUJBQUFBQU9lOWtlZWJtT2VadStXOWxlV2tzZWFWaU9hUGtPZWt1Z0FBQUNTcGRHOXZBQUFBSEdSaGRHRUFBQUFCQUFBQUFFeGhkbVkyTXk0eExqRXdNUT09PS5tcDQiCiNFWFRJTkY6NC45OTUwMDAsCmRhdGE6dmlkZW8vbXA0O2Jhc2U2NCxBQUFBR0hOMGVYQnRjMlJvQUFBQUFHMXpaR2h0YzJsNEFBQUFOSE5wWkhnQkFBQUFBQUFBQVFBQVBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUFBTjZJQUFTd0FnQUFBQUFBQUFzQnRiMjltQUFBQUVHMW1hR1FBQUFBQUFBQUFBUUFBQXFoMGNtRm1BQUFBSEhSbWFHUUFBZ0E0QUFBQUFRQUFBZ0FBQUN6ZkFRRUFBQUFBQUJSMFptUjBBUUFBQUFBQUFBQUFBQUFBQUFBQ2NIUnlkVzRBQUFJRkFBQUFsZ0FBQXNnQ0FBQUFBQUFzM3dBQUFQa0FBQUFlQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQUFEQUFBQUF3QUFBQU1BQUFBREFBQUFBd0FBQUFNQUFBQURBQUFBQXdBQUFBTUFBQTA0bTFrWVhRQUFBSnlCZ1gvLzI3Y1JlbTk1dGxJdDVZczJDRFpJKzd2ZURJMk5DQXRJR052Y21VZ01UWTFJSEl6TWpJeUlHSXpOVFl3TldFZ0xTQklMakkyTkM5TlVFVkhMVFFnUVZaRElHTnZaR1ZqSUMwZ1EyOXdlV3hsWm5RZ01qQXdNeTB5TURJMUlDMGdhSFIwY0RvdkwzZDNkeTUyYVdSbGIyeGhiaTV2Y21jdmVESTJOQzVvZEcxc0lDMGdiM0IwYVc5dWN6b2dZMkZpWVdNOU1DQnlaV1k5TlNCa1pXSnNiMk5yUFRFNk1Eb3dJR0Z1WVd4NWMyVTlNSGd4T2pCNE1URXhJRzFsUFdobGVDQnpkV0p0WlQwNElIQnplVDB4SUhCemVWOXlaRDB4TGpBd09qQXVNREFnYldsNFpXUmZjbVZtUFRFZ2JXVmZjbUZ1WjJVOU1UWWdZMmh5YjIxaFgyMWxQVEVnZEhKbGJHeHBjejB5SURoNE9HUmpkRDB3SUdOeGJUMHdJR1JsWVdSNmIyNWxQVEl4TERFeElHWmhjM1JmY0hOcmFYQTlNU0JqYUhKdmJXRmZjWEJmYjJabWMyVjBQUzB5SUhSb2NtVmhaSE05TVRVZ2JHOXZhMkZvWldGa1gzUm9jbVZoWkhNOU1pQnpiR2xqWldSZmRHaHlaV0ZrY3owd0lHNXlQVEFnWkdWamFXMWhkR1U5TVNCcGJuUmxjbXhoWTJWa1BUQWdZbXgxY21GNVgyTnZiWEJoZEQwd0lHTnZibk4wY21GcGJtVmtYMmx1ZEhKaFBUQWdZbVp5WVcxbGN6MHdJSGRsYVdkb2RIQTlNQ0JyWlhscGJuUTlNalV3SUd0bGVXbHVkRjl0YVc0OU1qVWdjMk5sYm1WamRYUTlOREFnYVc1MGNtRmZjbVZtY21WemFEMHdJSEpqWDJ4dmIydGhhR1ZoWkQwMU1DQnlZejFqY21ZZ2JXSjBjbVZsUFRFZ1kzSm1QVEk0TGpBZ2NXTnZiWEE5TUM0Mk1DQnhjRzFwYmowd0lIRndiV0Y0UFRZNUlIRndjM1JsY0QwMElHbHdYM0poZEdsdlBURXVOREFnWVhFOU1Ub3hMakF3QUlBQUFDcGxaWWlFQy9KaWdBQ1gzZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYLy8vQkNGc0FGM2FCTEtvQUtCdytCb0dtbGdLZmdaei8vOEVCOEJPT0MvNU1jeW4wUUhocUVhNi8vNzY0VkMyQUNJNURMQm1GcmQvb0M3ZmxES01vVVhyMXNBRnZRTHBCYUJPUkkzOWIvNS9nZ1BodGJMYTN2OS8vLzlZSWVBQkRLV1E9PT0ubXA0CiNFWFRJTkY6LjAwMTAwMCwKZGF0YTp2aWRlby9tcDQ7YmFzZTY0LG5vV1ZjakFCQkJxMDdmL0ZkVWhYZ081aG1oWDRyZExicy8vOGNLK0NRZW93ams5UHdjZEVPby9QL3crQ0RqZ3NnUitSK2YvL3d3cjRBRFBpRTUzcURLYTFXN0tZeVlyOEhUWmhSWDUvK3V1Q0RtcVVlRXVXLy80NFY3UUMwOVVZRDNpZXBnNExRaTlINS8rUHdRY0NLVEdwRFp6MkV2NFAvLzhFSmVBQkRLVEd0eEVkMC8rZjRJUkhBQkhMSmtESXFnQndDbC84VCtDRGpneUJpd3QrQVM5ajQ4VlJoSWl1MlVLeDBSLy80SmZqUEwvOWZnZ0hZQVF1UWZUK2dvdm9jODRBTzFGT095WFAvL1dDSGdBSG9iT1VMQ1NXZ0JGQVZVR1RSWEIranR5aE9wYTY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2LzRzSGg0b09RNzdnT01qSEFBQkFJZmhzOTBWaFo0RG1odm1PQkdDOVhuc2ZBRVRFcUs2SU9yaDlLcGcxMS9ocjh0eGE5bC9CV3phQngzb0FiZjE0QU9jMkVhbEN1VUI1andGMEN2d1Z3bm41RG5yTlhJTXNJR0xWL3prQnJ4bFF4bHVFTDEzVG44WHo0bzBDQXQxd1lBSnJoOWpRcHlQTUtsb2g5djhEMUNlZFdqemlLT1Zrc2UzaUZvZjRtQ3N1b0IweCtXQUpwalZpT1ZuMDhDZ05KVUpJOStDbnZmcHhwMC93ZjQxSk1lbU9VUC8vZ0VZZmpWT0JHQUJBQ3dIUHh6Z2twekNiRjRiUTlEVWRpZ0hBUmkzUzMyQUJsNHQ1T2NhbWdiWGw2elAzTVZZL0h6Y1paZzlLUWZBQWczSDZGak9kUUJqWlQ3QUtHM21aak9BQk93UEYyTWducVRaSDlWTVNFQmE1anZsci9BQ0xUaVpObTdSZ0h0N2pqalptaFo5VXhwWTJYWGtvQmttR2ZSbXI0UHdBT2MyS01sYXVlMkFmNFlIRm5BQWlDM0VVeDlFNGFhczV1VS8zU1kxNkVSMVF0TkdBNmFieWZsM1YrZ1h4OHppaVFBVHpGWmlLNEtVSmhMTXRWdTZEazZnU21jRVNiUUhGd0xCV2tKMEJTWWJvcTBnMm0zQS9PbnhxOUdodXFmdTBHSnM5OVd5QVBteE5ISzBJQUVTdHZjeDhDQnRGU1NGVkUvd3l1M3dGalFGTkgvaVd1Slh6ZHNoYnJXYWc3bjhnTHV2dDhWS2ozd1JKMklrbWd6dTdKNHFqclhWWlU2eVpsMUo4TXZDMzZ2dy80NjczbGcxRVI1K29CbXl0K05EQkNmdkpLMnl3QjdIZUx4dDlLYTQ4QnQ3d3BvYkhPOXNFOXpXV1QvMzFCM08rY25rWWQ2KytpYVAvK1gyVWZjRmgya2VnSy93MUphU1gyTU90OFA0cWY1ZWlWbXhOeEdSNVREOElBcFZpaFdIeWp2QTArNlgvaFIvbkdGRGpERElDQTFJT1FqTkxRQmhvbUdKb2xVc0lUUnNNWHhDdGpJZi8rLzVPdFNkOXAyV2ZhWnVnaXRxaUZSenRoOWpaS1dnSGE1YkswZC9IN1RoUW4vQUtGNEFBZ0I1TElVSzFHZTFYb0VkUnRKbktmdUgvK0V5anRHMEo0OTcwUi9HZVBlNVlOcm1lUGU4bzIyS2x6L1FQRDRSUko5cGtDd3k2ei9UYm5SUzJ2Z0JWRWxVUTlvaFY3Ly9oK0orcGFGYkwwZmdBTXZaRTJpTnNTQi82ZkRpdmYvd0FLV1ZGN3l6YU5LZUgvL2hNclNsQW1Tenk0bWQ2ai8vMlpraFFsd1VWTUFZYVBROEtGRnZhWkhnQTIvMG5lZ1llTVg3a3JBazlLUFpGZFFSamhqZkN0eHhSR1BLL0FOazlnNVRITXhIZm1HU2VoejlBLzRVeFZvUGhPS1NVYk5MbnY4QUR2a1VoVmpCWDhVUDVnRHc5eHRIWXp4NE5uMDlRN2x1QVZGT1pDTyt3elNVYlI0Z084MGVmeHZoaE11QTk0UmFrd2J6UnBQenlBQ0FJYlFEQm1zbjRIRlJjTHAvK1BoM3MzQURDV1pHQURVQXh6a2RzZ2V2bG9PcXpIM0lVTUgxOS9NTzBDYjlZRVlqbDZCVk9QclU2Zk5OUnZDR3h6MUQwd1lPVFE4VmlPeTdRZk5FRFBpdndKQmFYdFFBd1d0VEd1ZjJBRHRQZ1NEclUva0d2RzE2b0IzcHJaaE0xNEFBUFpEWm1nelNGOTRBalo2Q1BiOEFHKzJRditSbkxiNFVZMGdWYmdLb09xMDZESFY3Vjc0RDlwcnZYTm4xLzE1LzJsMjREN2h2OVc5VU9BRGhuUlNHSlFPL2ZMK2o0cGhzRFg3UUZycWRpWStwbjhBQ0JWSkdIdGp2Y1RRM0t4Z1k4M2EvSjlJYWgrdXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1T2hyL24vNmFNTHRSbWF1eUVpNXNENWdTUzVRcWdQY21RY1lyNG5XZktDdGxRYndZRXhaZ01IcE1acmFxN1lZL1lBMWZ4MDJ2OEJ4NVBzVDRucFFjV01PbmUydk5mZjlFN05GTE1TQmVsTlNaVUwvckhWZkgvbE12dTNDNC9idEFmNktEeW1IL0NSNkZtMjBJK2NvTG1hOHZyU3VMYzhwZDhmK2lPYjJlZzJDMlUvMFk4QUE3V25veWpDWHg2dy9BTXZrV0t4QnNNMGVaL0N5TWU3OXNITnpCTktGdGVBQVp0LzFmSktTM01mdlRFbytkQmdheTMzcm5wTU5SRUxQbmV3ZGkwV3QvN3ZDbGs0cFZOREozMTRHRFhnQlJQSUtPVnNEMURsN1l5Mll6ZlMzVHVjYXF2ZmVCaTV6VEhTRkVIeGQ2SDZ2LzFHMEttVmtlLy9SN3VYQ0tTSENPUjFOMnZCVFdtV3dBWDcvNHBnQmNDZ0NCaFdscVFwYkE1Z0pncXBZQVQwb2swYk42QkQzNS9sNjdKR0cwNzh3aGJ5L0UvNHRvbE1mUk9mY3NEekdMMU1UU1dzL3hDWGdUVDgzODBRdHYrS09jZ1hjTCtBRjJmQ1IzUUhlQ2pOcWJFVzd6aFZuN0lNMHpjaXMySm5nQUVKWk1yVGNOTnAwYThLbW1Bd2Z6UjhXdktNbHVlRWhiYUZKbFkrWE9YNytDN1NhdGQzanI5K3k4bE0yU2JIZkV6VkgxejM3UXA5RFFDL29iTmxyUzJENlhNRVlVWkxmMkFCbmNMM0p4Q0VBdGd1TzhyL3dzdkdQZUFCOXBvOFFhY0YxZGdIZm90UHdQbnY4QVpWWG1pZDFYVllBc1k5a0JvQWRHZTh6emdEUEwweUVYWSttM0c5eUZMeEhwTjUzZjZzOUxIQkpFa0tOSVlBWFc4MkluL0VVQ2w5QllNSE5CdHFNdC9RZi9oRER5YUt3QW9sbUVnWDNaNFZybVl0d2NRTk5YUzBMVHkyWDJBTG43VXdtSDlqSUFFVTk2RFVKejJ6UTB5QzdUZjUvenpoeFBJMTFMS244QUcyUmpoR0s3RzdRRHFVZ1FsOThJZkJYaXVBVVh5VXphVE9UeTN1L21pT1pFdzhBRzFtNGtacStDMVVmbUNETk1BaDFOeWVHL2JGR2NTQ01jcUJ1d2FWZUFIVFAwL0h4aWVwbmdBVDh0S0dtQi9PL0oyWTBQWmVTdnlXc21xc0lkVEo5bisvNXgvNFVLVGtwbWxneDNXVEpoVFA0RHpFNlo0aGdIRCtFNWdBSUlKN0xmTEFBRURmNEJoaDhJUXBnQVJsZW5ScHFod0J3RTl3NzQzLy9oK0U0Y2FUR0tpN21wUC90YXcrc1EyU0FEWFN0dEozMEtzc0ZoVXF5L0JQaEhHbis5Sys2ckVhc05FaGJWMGVEZ0FRdjMzcGE4ditUc3RMd3QzMEM0ZHhJZFpWSGlXSVlBMm5sNVpqOXpyL1Q4QXVBalE4SDlUZjRZQU9uM0FlQlVMTmpSa1d4ZjQweStBRjNiRjdQK2dleG9nNHBBQUM1K0dNTkVQcjhJYi82cG9CLzB0Z1FPWTBhWHY4cHZJTXRlVXpHMHZYVWY5bkxnck95WDRBTGp5TGdvRkpNSkJ4aFcvNE9WdXk4bE04aXlyZWdhditXaU5ld0FFSmFaVEp1R20xMGFoSjBDTUF3R1I3YSt1K29YRGREU2QycmJuL3diWVp2OVhnT0hlVVM1UGUwYTlZZy92VUVHaG56WlVZcjc5NWNDaGlFN1VkN2hLcG1mLzNJUHNHUUFoZDI0Q2RxQUhydndKZHRHbXM4QURuM1VpeGdVNE1YM1NkYWNiNXU5NmxzZHB4anVscnNjN3NnWWZWY1gxSWJzK0I5cEZRU0RvZ1h1M0Q3b09qeG5USGRURjZsSnhJTWFXaGk1VUFBYWd5L3dPRGZiUXYrUm5QQUdPVEdtRlhIb2VKaE5rYzhlY0tETGV4STgxbE0xSG1CTGNKMG1qYVNZWkQ1M3g5cmZDWldyOUI1cktwcGREZW5rbzg0NFNTZFk4VWFDc0pyYVltZ3piZkptQnFHNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2dz09PS5tcDQKI0VYVElORjouMDAxMDAwLApkYXRhOnZpZGVvL21wNDtiYXNlNjQscnJycnJycnJycnJycnJycnJyL0QvOEtCcmdBZHEyZVFXZDBJTHFZakNwV3J0OCtEVllUdWxyVVJHWWcyN0lCVlcwQnV3QzlkSWJzTXRXOC8xeVM4OE9PK1ZyeTFBTVo5Z2F4aGRhd3JFNmJtb2ZIeTZIcjRDSkIvK0tXci8xLzMwQUQ1ZndSUlJNOEdTNS9QMmZvU1Nnamh1QXhEMXREL3RYeWtONEk1S25iN2lTODhPTDVYcjdUaXpvM1Q4ZGFzL2xTS2psaUEvV2ZPMnByWHZ5dTF2U2IvM29BSEExV2VWOTJsM0F2MGlSSjAvNGYvK0V5cXFmL2dBVFJ2MHRJekw0UDhQbjhaQU5rYVlsY3pLbzdDT3ZEUEFHWHlQb2pHQk4rc2lrNVRQUmY0Zi83SjhlRXd3VExBQWk5cHNXdkszMi84amJZaEJrUkFMTFkyeGpLLytHSDRkbCtBTXUyUzhhWEFNL2NoK1lqdjh3Z1FnVExlbkxTRDkvTkE4UG1zWDhBRHUzalZDWXBFdWdCckp0TmVkdy8yOEJHVWVuNStQL3dER0ZtWUFFUmZGYzNPNEFnVElBU0FwWlVsREhCOVUzNFFwdEd3ZnZSUEZpUGFZUHphQ0Y0WU1KZ0lEU3dZQWdpazJRdXBXUUREODVrWUE4UVhHdEtiRlZSMFpYaCs5N296UGhaNm5lLy9DVjZTakl5SythSjh4NGU4bjBnRUk4cnQrd01iemNpd21MNysyKzRkV2xsQUFpcnFEc1BDRWM2eDVMSGxyWmwzakFFWTFrdDIrVVExeFltamdBeWNOTVdNSlh3UXdNSHlBT21ieWZqQmRSTXc0ZGpFLzRuRHBjUWpEZkM3d1AveS9odjBBWlE2TWp3Z0tLZjlnQjlNMnNSZ0w1MjlEVFcyYjJZQU1DZklyNkRjR1llcUFUNzZ1VCs0S2VrUmpjalBmRTVCR21mSUNOOFo3Y0lDbDFrRGJjQ3dDaTVzcGtJdklIRmVaQ3ZmSys2ZFZJaWc5QkVDT3hWQXlocDI2ZnNwMlBqaUIwalU5NUMzVDlxcFY2K0szOEFDK0tzVi82Z09NZ0xuSUg5MkE0YzZiRHlLZkRjR1VYZnpCcnRIN3FXbzFVd0Z3d1BPbVlybGdZRzh5amwzWkR1aWR5K0FjWnppYUh4aTh2clJjOFhtNnFjTVE2d1lQQUtWVDc1Ly9IaFBsd05qa2RQVytYMHl6UDJqMXUzNEF0NjEzc2UzZjcvLy9PQ0hnazcrZi94REFJVlBnQXJpcFp1WUFLaEs4UXB0RzNDNS84QXdlRmZHdllEdW42ZmdHSEhwVVJEZy9mZWZzNXo4V2JBQXJidXpCTlhCU2tKdTQwbnQxckxrcWh2LzJEREFCelZJTXBBejNVOEFFVG9JbkJyTFo0ZkQvKzhLbjRBTnBud2tkVXZvQkhyN1lKUTZTc0lIN0tYck1GN24ybjd6N1JZaG9SRnMzZ0FYYmJFVHpRT2VFZER1dHVBdVdnZXlrR1VnWW0rY0FHRDNmUmFkN2VFREV6UkdrZ0FBTU1BUVVEZUFRZ1BML0FBZGtkbjZDZEFEQUFBZWFVR1lVcXFwdlRQRmkyVU9sWkMrdTRPMzFXNXFaUFFiZUg3NXFQZmlGOTdBaDFmNFVIUThxVTd6YjVkMkFNUXgxeHczM2dIU3lNV1VEMGtELzlZdm5peTM1T3JKLzYvMHdBUk1pR2RIZm1BczNCRjBwYUIrZ1Y4SGh6dDVTYU1KNFBZNkhOSEhQRUdCWjVCWjN3NEFCMDk4Q1lkYm41Z0JtMzF2L1luR251SC82bkE5OGg5Yll0cW93UGlPZS9Hd0djNnF4VE03SU5Ra2FGOWtmQkhWdHRnYjRLbFI3d2U4Zkh6SHc5ZDM0TjdERWNXYjdZSHB6ZzkzSEZ0ZU5YWm0vb0hMVjhKUjZZRjRBSHR0VkR0MDM2VEhkVjByYVVpZHNiNFRPSEd6K3A4WkRkL1pBSDFRZEdBdmdESUxxakgxQURWRnI0VXc3cjEvZitVdHZUOXY2OXZveW00ZEdZYTA4Q2J0Y05WRmxmdXcrWm11cHhaWlpXek1ReE4rdDRlNzVjdkwrdy96ajJCNlVwTmowL21VbHZIQUZmcFhUMC8vNEExK3VuT2loMnV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1djZZTi93a0dvQ00yMUhvRE51V2owYTFncG5tQ2dCQWtzQUl3dlVoVkViUkliRkhocWRQK0h3c0FCajkzZGMxVmFFNXhONHNBY0JnTlluOHh4WWM1UFhVWEwvOFBULzRBS1A1Q1J6MWpGT0NGNFQ1MzQ1UkVray9NVEVBdVArRWlEeEV1VER3QUJBWWdETDduWEJvSkpKK2NRRnptV0RMUUM0Qi84UGZVZkovazMvZ0hDWC9DUmNZWkNNclV6d0hJa3lZT25aQ3FQd3dhcTI4Qy8vQ1g3K0kyTWtlWUovWFIvLy8rRXRwbGpTdVc4dStibkg0WVpab1A2MjcvL3doLzRTbWdxbkRqeFBKK2ZyMytQNXhJZi9oSVR0UGNBZVNkMFZReEhGaHBxZ0FBQ3Y4ZmMzOFI0U0VlQUJXUnBoWGtyNEs2aG1JUUZkTEFUdi83QUM5QmF0U3c3Q00xRVJ1NWxFVDQ1Q0gvNGVLWkwwVFBsMTc5b3Zpdjl3ZWUzLzRTZ00vTmM1T1VRckRXT0pEWHJzSDltM2VSU01aLzlQLzlGRC93L0FEeDNyV2NsLzBacFlld2Y4RC8rcS8vOFBFTkpPVy9qOEJGKzM1LzRpWlU4Ly94TC8vaDRvR0g2VlliaGtGL3pUYi9xVWxmdC8rWWtMK1BoSWtEYWFoRjZvQ2FNZm43NEdCajFwV0RLTXB2ZUFBdVZQZWFFQ1laMlQ3NCs1Ri8vaDRTQ3pmcFliVmhiY0FNUCt2L3cvOEovQXJ1dXJULzhKR0J5dlBXVy8vOHphYjNIazFtam1UOWtYWStGbmg4Qms1RkQrRW9BWmxhYU5hdmUzWk12OEJLd2NEdi9vcHhsb2VSZFM5VjZtL3NYRWlLVEIwKzNtd3RzL0VITDNNLytINEkxNHRSckVxdWZxckY3bjcrLzJoRC9Wei85WG4wU3pzOFlBbUIvY28vL0NYc3ZKWDZScFFWcmtoRkhIUEZmTVNuYnU4RGI0LzIrSCtxVll6LzhKUUFzNkduU3JXS1QvalFwMi9QOFpjNU9CMGlpL01SRDN1ZzFpa3Uyb1pycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnZ2cnZ2dnJycnJycnZydnZycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJyci8rcDh4aFVMQUFReXJaNkZsWFhsdUhIWmo4d1lXYUk1T0RhMThEc0ZkMmxISU43TjZmK0VNRGhXQUQ5NUFXRm9uU05YdkFRN0hVcUlGanYwdy9BTXRBQ0l2aVRhdmdBUzAwYlE5cTNycDBPRUxqUCtIK0ZlWDJSVzF2QUEydVJtRTFVVlQ0Qi9lak1nUlVHS0Z2LzUyd3J3V0FHTTgwMGg5NGNxRmtUYkFab0tFcXZnZTJqSHYvQkI2UXJBQW8zVXlRellLa2pCM0pPMFdnTEhGQUVscFFRQzZ4UCt3TVVhQjl5UUxlSFhnK09paVlTTmN2L3EvQ0ZZQVJGOFNOcStBblhzaXpESUZRNm1MRzVTQUF4blBOVjZSUjkvNFBqTjJoYUtxa1djZy8vRDhLK0FCTFd4enFjNHBnNUFSMXVqd2IxVC93RDRRckNHSDREVG1ndngwOEFITGpaQ1YwMWVJZ3plLytEYWhDdUFMY0NPd1YzVTJBWE9vTGJsd0tHcGZsaGxuWXBSeTcvL2drRndyd0FkNFdkNmpManJBY1Fqa2xzQXU4NGVJQWdLdytELytuNFY0QVBueUU5Qml2dnZjNEFTK3VJOHE0SW9YRUNPNE80UCtzUFdGZVhTL0FDMjZDZWdLR2Q5QTREbnNWQUFJbncvK1BFSVZnQU1PeHFpSnlub2RSZ2M3UkZ6bVo3am9QQUIxbVFoMldpeHhiLy8zMldGZUFSNisyQWVqWTlWSkRDcFp3QVMyV0JvT3hqdHI5Mk1QMlF3WENuK0NLM09jcjcvMFlzVGhXQUZYb0N3cldaTmE3Y3RVOExWRVVQa1lBakZ2bHZnQVpmcDA1cWYvWlI4SzRBRUh3N3JjSVRLcVUwZlhQVjlzTXhaYmVRaEc2QlFBSjdTeHhOOTc5b21PZlNvYWltbUZYbTJJSUlzYi8zeC8wbUdtRllZQVkvTzZId0lCM0dhQ04zZjRLdDdnRkJPUS85SHdLUXNWc094eU5iLy9GUHdRUUF3anhKdEQ3TDRZaGg1bFErUE5QL1dIYUZjRXUxNStBRE1scEFYRlBPQnFTSnV3QUlKY1BwZWhoN1YvOWJDOXQ0eGxndi9qVWZoV0g0dHFFcEVCN2QrUStKVEVzT3JtR0tvQUd0eTNwWnUxcFRiYU1rMGpPN0dndHBiLzFoOEs0QUlyMTdSeU1VUFVCRFE4QndBPT09Lm1wNAojRVhUSU5GOi4wMDEwMDAsCmRhdGE6dmlkZW8vbXA0O2Jhc2U2NCxSaTJTM2dQZ1pWR2NrWFYveGh4d3I0NGt5WThnNmc5TU5ETUVTZzZzUWdxd1l1TjFSaUFBa0FCOTFmK0gzaFhpRUNKeFN6QmRYNEFSZVlVdE9RQWtIdmhTY1pRKy8rQUdONFZ5eU9yRWt1Y0xTWVducUFLQXFoaDdZL0FNZnJLVXpHMy8yRDBMeGx4WDRoeUVsamY5SjlSaFgvQUJFNytVM0xBZDlEcTkzWUkwWVhwdWViLzFvSzhLd0ppZXBnNEQwTVBhbjRCWjZKc0p1VWZqTHlPVUlNNWpkQjRwV2JFL0FDUFJmdy95STgwR1hPL0RISDViLzBXdEFoV0dBQkRwWm5vV1ZVRWZxeU5DMG12OFhUUS96K2g2Y3d2S2pmeC8vK3M0SVlBRXVMU3FxT3dMeEg5UEJrYkplK2FnQ0xKVDc1YnhRbFBhZ1M5U2hldXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV2SVVBQWg5ZXcwQUZXVFpOSXVyZFc1Tyt3ejJ3aGtULzVlTXpVa0p5ZktNMERyWFV5U1pYSERmdW9UeWoxZU45UzM3ci9nSEIrTVRCQjJCTDNLMVQ3R1Fsd3Z4aGhhRzgzRmhZVGJtWGk1NWU2dE9FdVlJcGpodHFEbXFwSCtKcUF5cXZORThaVlhtUkVRYUdJT1ljZGdEd0swY2dqbXZjUUFPL3pnRVhFSGJBNGlBR2cwc2xpTHdWQjFIZ0FHVmRXUHhVb1RQTmNhTTlqb1QvTUhwRG5EemxMS1NGdzZWaXByQ0hLSDU0Z3dBT1g0QTBGYjZVeFNsYjRMWkZNWVd1dlFTTE1VQ3IxWHdMQ0Z2alloWUVIQS84MmdTZmVQZndBRHYxZ1BYREJGWTZta3lKQjFBOWRPams0endoQUQ3L3dTeEdid2UwNU5rdXZOcC9oVExZQU84R3F0QXpOMm9oVW9jaC9oM3p3R3FQQ0FrU1hRb1dvUlpIUEFWbm5aV0lWdFg3cFVZMWVHNHhLbXFoejlMUVlnUUlmaFVUL0JVUkJlQnlIUGVXakpRN3did0tYVjFSZzVBQTZFcXROdm1ZTGc5MzlXMWxUSXdMUFkvNmNRZmc4NTNaT2RxU2huQWxoVjhhQ2xEejMxVUREdzcvNFdzZUV0VFJsYVJBYndhWVh3QWkxNGFEb1VXWnN6UXZUWmYvK0FHcmtGSEsyUjJBRkJBSkVSR3ZEcmFYZGt4dDZFajQybkFDS2Qyd0VzSDJuK1JVbTNvdXlDYU5sQVVUYzhPQ3FZaHBmRld2ZVdObnBjeWViVDI1ZGZ0T2QvbEd5WmVnMlhMNEJpanI1cDN2ekZkYWRUd3dTS0pYdGxHSCtqUlVJc0ZMQjVXNWVDakJ4UlljaXJOZjRZd0NERXBpZ0dVYklYanovK2dEZG1nNU1MTkJJUk9IS2p4bU54TFdieHNHbmRyK0g4WVNmUUJjUHNDdDZ5SHc1R09wREhKZUFNSmhDQUlGOEFJbjN5bTBEcWlOaWFQU25xVERKZWVoNUNEcVBpOTQzUlFuU3JQeWlQTzBacGpwUE94amV4TWxUd0FZSFNqcGVCZ2RDMXVPUHRiVWw1aDFtWG5PSzNYRTRkWkZ2dmV6RWphQjN3ajhrd1FXNE9PeUg1aDh4S21UcWVYb1JOc0VXN21FemhYUDNBRWV2dHJTRlBCMzNlREN5QlRDMWdGZE4zUXRlaFI0RVhkd1BPRXovcUJ6UUt3VFkrZmdOdExlbEtBZm8zNEcwSUdWeVc3WDViSTNCaWJzakd5WkdaUnA2emJySU5UbGQ0cUlCSndkVy9KbVd5Z3lRVFpMNXRHSDNXMGNwQWh3bTdVYkNnbTBycTJwQlZsTmlkN3dCcUt3anNiVTBkRCtJaGoremZkclprTkVmOFlpT0E4dGJwQ2dmMEp4QzZwRi9VZ2EzbS8zWUh6ZDBDdGUrM3c1WjMrTnVoSnc3enFBSEJIOGZtTUdHZ1c4T2I0dENqQ3cvQUZDcWVnQUNBSnpnaGZQNVN1RXpRbHZnUk4yR2Q2Nm5rcnR3YU1SK3NGZ0FGRE8rNm1RSDFZNDNmcjIzZFZHa1FQT0luZU03dXdCUUNka1R6UUJGN1lLdGd0SUt0dW5pQlFBVXNQcllPTUoyczVnMXhWSFJoQnVQb0ZpQ2hvVFJGbG16eFpWLzdpT3BscUh1MkEwS3dOcktlbjV2R3RpMTVXZk0xQktFVmVSNEVXNXhPZHVUZU16SG9sZjMrRTgvRFlTSkgzcXp1YW5TQ0RUSUdERmtKb1lCTkI5cjJtYURmUGhuYTNnWU9tcVdjTVV0ck9RQU5HaUV2RWxtZXVBb2J0cDUyZUpOb2g3WGhKaDBzUVNOZEEvOG1DN3BqVVQyU1dMTW1RTTNHVUdoaHYzZEh2TEdWY2R3QURaeUUxOWNMNHBXclo3SWtSbjVwVGd6cXVNOVd4dE1jdGovWnN4aWQ4bmcwL2llNzhrZ0g0Z3FuUEFxS0V2SnprdGNZUVFKY3R2TFlPZXZMaW9OVzF2Q1E3NGNPZFBIbHlyOXozMFFXZyt0dFVERTNhK3hodzkyL1hYMTMxZTJxOThiOHQ2WlROcDMvQXA4RmRqNFhGN3pBSUR0TUJyT0FKVlQ2dk4vUTF5WTVKWGZyM2RyYVlPSDQrbGFBbHJnMTFreUdqc2VyM1RCK0FCRHBiZWlKbW0xQUE2QnY4d0FKQ3FMVlFlVm5YQ09oemMwbThGWWZlYWpYWlowQndxWFVFc1BlL0FIZnJOQlBWSVJ0eDRqcGxXRGxiVklkRENoa1h1QVFYbXBHeERMS0QydnM0Mmd1UktvM2x0bW1TSTRmQ2lCQU5nR0lkcDIrTmZJZlhCWWRydHF5QU5tUGhpT2F5Ynh6bXpCTUp3QXc4QUdQZlh1bE9vMU1RL2ZWK09TQldOVnJ0WTlJZUxhVkNETmNoUFVTZ0VLYlppS3cxbjIvRlFBYlpmQmgwNE1hQUtIT2RaOEcvUEFPOURUcmM0MXNHRU5ROHNmYVlIMy9VdzRjTy92ZWdBYnFUTmdRNUJVd0FKTjZGbmRERFFCRVJMQmdJTjVFTlpxOVljQUl3bEdTQnFiTDBYOTVnQTFHRnUvZ21mV1dBUnZkNkVuSzI2N1JNaXdkQ3pkbjdsUUFsTUZJYkltQWNPUGxrZmdTS3hZa0N5Nzk0WndDRklnMHRXblJSdUR3Q3RqNUlQQ3lWTkFhazBleFRVVm5kV3RBQiswVjhBRk9qUkhHUk9BQ0hUMGtZMkE5d0RCeERwQUJvQVNwUmpJVm1CRWhBR3FWbW85SEVXcno2NFBGQlBPclI2ZW9GTGlVMi80UTRCRjh2ditEYlJjTWU4WmZlRzhBRzB6NFNPcVgzdlNJMXB3a0Z3QWYwU01keWNsZFBIRWFNM1FlcDRqN242NEhBZ2NjZ0dBQkdENVlLcnFjcWwvUmNIZ0lJaVdBQ3pZbzRra3IrYngvOUxQaWtXUEJDc2pzbXhJcWlpL3IwVGJFT3FNbXhKK0tjcjQ2SitJNEdaN25nMEJvN3hXYkk3SnNTZmlpL3IwVDhRNEpNbXhJcW5PWCs5RTJ4RHZCRU1ja1ZrOEFOUHNyd25PUnJsVVlyNExTNHdtUzFmUGd3d0FtSGJid1NSUmFkN0FCYzVzUGpMS0IxdS9RRDF3eFdlbHZRV09VbWZmZlpqUzRBWW5XNTMrdG9CT0VYQUMrN3BhUGhnQ1ltYUJvYllENGpxdzZJMWlxejd1OVhrVGQ2QmdnVHdLT09EQ2ltd09HaEJSeFpFYkorSzZCNHFmN25RVXpDcC9vUmU1YTJVTit1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXZwVTJBZkR3a0ZvQUZwdndrWGxVVW80aGxpTUdtM1cvdU9sL2pmOEVTSXBpeU5ENjBQeUZGR0x1VlBmT0FWR0tMLysvYjhlRXU1SU1Wc2t4b2Q4Ry9SeEdzV0FCNHhCdXRvek5La3B1QUViT3hUdDF4eUxYY2xKZitFb0pIc1kyT0dOWStCWHVyQzZIN1hjbkczejNrcUExOVhTWFlpeTRQU3hua2VxUTQvL1lCdHRuRFEvR3U0Ty8vQ1VyTmdzVng3aEhxNU9aK0N4YXlvZ0lzaWtONkZKM09EQUFyL2Vva1BvdlIyNmRDRUNacGY4SlQrS1puZkFoYmlEQ1JCQUhneHh2OU5qVmJYYjJoUWpjUTE5TnI3T3U4c2lUMnc0bHhyZUQ5aWRESC9GZll3QXJYZ1BqTWJaY1lBWmpmMS8rMWdrVWZCZ1d6a1lzQ0pxK0htVkQvcW5Hcjk3cy92ZzR5Q0gvQ1JmeHFTTUI2WUJSY05qYVdTYVFmaDhnQVN1dkNVZ3NJYWpLZ0dGaU1SdTFqTmZId2tUQUsvMTVSUFgvNFRRc3RuT2hrMG93c0ZTUW5Bcm5iTUpGRFArME5tNnBMZmlHLy80U2gvdVJnOTVFUmlLdHU3RlZGVUVBOGlqditQa1dIOEpSa00zcjM5L0VkWUdQNVlIRExubnpZMVcycDQzOVdtNWpDUUZ5eEEvL0NXL0swNmRtbjc2SWlmdFgvRWplRU9xNjJ2eG9YcUFLS0E9PT0ubXA0CiNFWFRJTkY6LjAwMTAwMCwKZGF0YTp2aWRlby9tcDQ7YmFzZTY0LEFUK1IrZUNJbmYrLzlyYTRuZ0gvQ1h5bzJJcmRiSGdNVjJ3UVRFVjZwYnRvaDFndm9yMmprM3d6ZjhBd0QvaEtZSVJ5U3diTGlJOHUxL0xWVEllUUhtWTJJcE9wdkJpRzd2c1l3YWhCL2hMNEFmNENRRmtvNy9RN1RhVGp6RklDMU5iNERZcEJsVWlBZWxLQnJueHYvWUVCU1N2OHN0OHYvQ1g0ek02ZGdrQUdjQnBDTGdFdDhDZzZaUkgzeDJ0TTJaRzdNa0ZFOTRPUVFUai9oS0FCVEgzb1Jhd1l2WCttY2htQm9XQTRINFhqY2RXYXdkWWhYNy9mRVkvOEpRUmtMTmh5ZHg0UnFkQS9vTElrdlA4emIrdCtnSnBacU5pYXFWQU1YYU5NbWF3QUFjM0hnWC9DWGJSU1hnd0xPaFExcEpJM3ZEQVpDbkxJSFNDczR3QkhOSlRESXpGVEVUUGQyaWpJa1NqNlprcTMvRGhLNGptTEc0RTQ0REQ3UU9VVDErUjN3ZmdtMXpsNmYzOUdSbE90dlovQW9yUE1PakdINnNBOWZEd2xIb0VBdVN4bFB6VURVR0hscVA5ZkdBQ0dXZFpDTDJBR1lqRWhqeXdkbjZYb1JNalhvTmNwaC93bDdBK2VFeUQzWHY2ZFFmU1NTVDhNaTlMVC91QXhjZWt2RWZDbHh6bzBtcjRiekFQLzhKYk04TzErQ1lrUXIvNlRDdmJGb3JGSDh3WmdQOE9Fb0ZKaCtYQ0UyeC9nQ3plblJ6Vis0cFNxVXYrOVV3dC9PVkJqRXphWjBPb21ZZm12MWVWWnBlcjJBYi8vQ1VBNzB3TEFyVEFkM0RaSUJVYlY4MmhHQUp5aEtSM1RUb2R0RUF4SHVYemFOeC84SmVRQWlMNGsycjRCcy9xUzBscHBVUE11OXRmK3paakRLMlR5RE5yY0lBSC80U2loRjZnekQ3N3phOWdDR21MMmYrdDZydEdqRituUHh2c2IvOEphMmVOTk1mZVlqRkpkdDRBQnpmZ3VaU2lsZjY4ckdxeVZLR1RWakFIK3J0Z1NPQkRRZTRVVTIvNFM3cW14a0Ntb0tSMU1pOTZ4TmZ4LzFVZzVKZ2ZkdnRuUHNCSUg3RDMzdkFsUzNIQnRnTkF0S0YvWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYZmZmZmZmZmZmZmZmZmZmWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWGdBQUFBUFZCbWpnWDRBWFE1Z3B3aWVlbnk4Q0VHTlNUNmVUbTRFMjgzSG53ZDlqQUhWT1dCMVRsdkVUYTB4STBnd2tMdEwxUGZOZ091U1pCMXlUSHhac0p1RFNnSEszTFlPVnVXN3pTK0E1VzVZQ0p6RndJT3NEWEtlVGlEQU9xY3NEcW5MZURxbkxmZkVGZ09LbkxjSEZUbGdjVk9XL3g4SEZUbGdjVk9XOEhGVGx2OFBVenJtNHkwV0Q5U1ltSEZNK0FqOWNlKzFCM3MvSk1yMTRjZFArTjVTOEkvTzRQZTRIVnBqNzVNTWltZEY5WC9aNFF3SndpR2NSd0puS0ZPQ1Q1R3dTYTV1RTNpandhRHZpaEhJdkRLbXV1YncraXdJcmt3UFdtT0JGTDcvczRMWExmRTl3NHkzeThtQk52U3o1ZTRUZDVyNEFYQWdBQUFCcEJtbFFGK0FIQ3ZZV2grK0wvSmhKd2ErOENRSWhmRWNBTmV3QUFBQWhCbW5ZRitBRGhHQUFBQUFoQm1wSUJmZ0E0UmdBQUFBaEJtcUF2d0FjSXdBQUFBQWhCbXNBdndBY0l3QUFBQUFoQm11QXZ3QWNJd0FBQUFBaEJtd0F2d0FjSXdBQUFBQWhCbXlBdndBY0l3QUFBQUFoQm0wQXZ3QWNJd0FBQUFBaEJtMkF2d0FjSXdBQUFBQWhCbTRBdndBY0l3QUFBQUFoQm02QXZ3QWNJd0FBQUFBaEJtOEF2d0FjSXdBQUFBQWhCbStBdndBY0l3QUFBQUFoQm1nQXZ3QWNJd0FBQUFBaEJtaUF2d0FjSXdBQUFBQWhCbWtBdndBY0l3QUFBQUFoQm1tQXZ3QWNJd0FBQUFBaEJtb0F2d0FjSXdBQUFBQWhCbXFBdndBY0l3QUFBQUFoQm1zQXZ3QWNJd0FBQUFBaEJtdUF2d0FjSXdBQUFBQWhCbXdBdndBY0l3QUFBQUFoQm15QXZ3QWNJd0FBQUFBaEJtMEF2d0FjSXdBQUFBQWhCbTJBdndBY0l3QUFBQUFoQm00QXZ3QWNJd0FBQUFBaEJtNkF2d0FjSXdBQUFBQWhCbThBdndBY0l3QUFBQUFoQm0rQXZ3QWNJd0FBQUFBaEJtZ0F2d0FjSXdBQUFBQWhCbWlBdndBY0l3QUFBQUFoQm1rQXZ3QWNJd0FBQUFBaEJtbUF2d0FjSXdBQUFBQWhCbW9BdndBY0l3QUFBQUFoQm1xQXZ3QWNJd0FBQUFBaEJtc0F2d0FjSXdBQUFBQWhCbXVBdndBY0l3QUFBQUFoQm13QXZ3QWNJd0FBQUFBaEJteUF2d0FjSXdBQUFBQWhCbTBBdndBY0l3QUFBQUFoQm0yQXZ3QWNJd0FBQUFBaEJtNEF2d0FjSXdBQUFBQWhCbTZBdndBY0l3QUFBQUFoQm04QXZ3QWNJd0FBQUFBaEJtK0F2d0FjSXdBQUFBQWhCbWdBdndBY0l3QUFBQUFoQm1pQXZ3QWNJd0FBQUFBaEJta0F2d0FjSXdBQUFBQWhCbW1BdndBY0l3QUFBQUFoQm1vQXZ3QWNJd0FBQUFBaEJtZz09PS5tcDQKI0VYVElORjouMDAxMDAwLApkYXRhOnZpZGVvL21wNDtiYXNlNjQsb0MvQUJ3akFBQUFBQ0VHYXdDL0FCd2pBQUFBQUNFR2E0Qy9BQndqQUFBQUFDRUdiQUMvQUJ3akFBQUFBQ0VHYklDL0FCd2pBQUFBQUNFR2JRQy9BQndqQUFBQUFDRUdiWUMvQUJ3akFBQUFBQ0VHYmdDL0FCd2pBQUFBQUNFR2JvQy9BQndqQUFBQUFDRUdid0MvQUJ3akFBQUFBQ0VHYjRDL0FCd2pBQUFBQUNFR2FBQy9BQndqQUFBQUFDRUdhSUMvQUJ3akFBQUFBQ0VHYVFDL0FCd2pBQUFBQUNFR2FZQy9BQndqQUFBQUFDRUdhZ0MvQUJ3akFBQUFBQ0VHYW9DL0FCd2pBQUFBQUNFR2F3Qy9BQndqQUFBQUFDRUdhNEMvQUJ3akFBQUFBQ0VHYkFDL0FCd2pBQUFBQUNFR2JJQy9BQndqQUFBQUFDRUdiUUMvQUJ3akFBQUFBQ0VHYllDL0FCd2pBQUFBQUNFR2JnQy9BQndqQUFBQUFDRUdib0MvQUJ3akFBQUFBQ0VHYndDL0FCd2pBQUFBQUNFR2I0Qy9BQndqQUFBQUFDRUdhQUMvQUJ3akFBQUFBQ0VHYUlDL0FCd2pBQUFBQUNFR2FRQy9BQndqQUFBQUFDRUdhWUMvQUJ3akFBQUFBQ0VHYWdDL0FCd2pBQUFBQUNFR2FvQy9BQndqQUFBQUFDRUdhd0MvQUJ3akFBQUFBQ0VHYTRDL0FCd2pBQUFBQUNFR2JBQy9BQndqQUFBQUFDRUdiSUMvQUJ3akFBQUFBQ0VHYlFDL0FCd2pBQUFBQUNFR2JZQy9BQndqQUFBQUFDRUdiZ0MvQUJ3akFBQUFBQ0VHYm9DL0FCd2pBQUFBQUNFR2J3Qy9BQndqQUFBQUFDRUdiNEMvQUJ3akFBQUFBQ0VHYUFDL0FCd2pBQUFBQUNFR2FJQy9BQndqQUFBQUFDRUdhUUMvQUJ3akFBQUFBQ0VHYVlDL0FCd2pBQUFBQUNFR2FnQy9BQndqQUFBQUFDRUdhb0MvQUJ3akFBQUFBQ0VHYXdDL0FCd2pBQUFBQUNFR2E0Qy9BQndqQUFBQUFDRUdiQUMvQUJ3akFBQUFBQ0VHYklDL0FCd2pBQUFBQUNFR2JRQy9BQndqQUFBQUFDRUdiWUMvQUJ3akFBQUFBQ0VHYmdDL0FCd2pBQUFBQUNFR2JvQy9BQndqQUFBQUFDRUdid0MvQUJ3akFBQUFBQ0VHYjRDL0FCd2pBQUFBQUNFR2FBQy9BQndqQUFBQUFDRUdhSUMvQUJ3akFBQUFBQ0VHYVFDL0FCd2pBQUFBQUNFR2FZQy9BQndqQUFBQUFDRUdhZ0MvQUJ3akFBQUFBQ0VHYW9DL0FCd2pBQUFBQUNFR2F3Qy9BQndqQUFBQUFDRUdhNEMvQUJ3akFBQUFBQ0VHYkFDL0FCd2pBQUFBQUNFR2JJQy9BQndqQUFBQUFDRUdiUUMvQUJ3akFBQUFBQ0VHYllDL0FCd2pBQUFBQUNFR2JnQy9BQndqQUFBQUFDRUdib0MvQUJ3akFBQUFBQ0VHYndDL0FCd2pBQUFBQUNFR2I0Qy9BQndqQUFBQUFDRUdhQUMvQUJ3akFBQUFBQ0VHYUlDL0FCd2pBQUFBQUNFR2FRQy9BQndqQUFBQUFDRUdhWUMvQUJ3akFBQUFBQ0VHYWdDL0FCd2pBQUFBQUNFR2FvQy9BQndqQUFBQUFDRUdhd0MvQUJ3akFBQUFBQ0VHYTRDL0FCd2pBQUFBQUNFR2JBQy9BQndqQUFBQUFDRUdiSUMvQUJ3akFBQUFBQ0VHYlFDL0FCd2pBQUFBQUNFR2JZQy9BQndqQUFBQUFDRUdiZ0MvQUJ3akFBQUFBQ0VHYm9DL0FCd2pBQUFBQUNFR2J3Qy9BQndqQUFBQUFDRUdiNEMvQUJ3akFBQUFBQ0VHYUFDL0FCd2pBQUFBQUNFR2FJQy9BQndqQUFBQUFDRUdhUUMvQUJ3akFBQUFBQ0VHYVlDL0FCd2pBQUFBQUNFR2FnQ3ZBQndqQUFBQUFDRUdhb0NmQUJ3akE9Lm1wNAojRVhULVgtRU5ETElTVAo==/index.m3u8";
// Authentication notices belong to one resource request and never enter caches
// or the successful-video quota. Anonymous share readers have no login to expire.
const CP_AUTH_NOTICE_DRIVES={
 quark:{index:0,label:'夸克网盘'},baidu:{index:1,label:'百度网盘'},
 '115':{index:2,label:'115网盘'},xunlei:{index:3,label:'迅雷网盘'},
 guangya:{index:4,label:'光鸭云盘'},tianyi:{index:5,label:'天翼云盘'}
};
const CP_AUTH_NOTICE_EXCLUDED=/(?:invalid|expired|cancelled|canceled|deleted|not[_ .-]?found)[_ .-]*share(?:[_ .-]*(?:access[_ .-]*)?token)?|timeout|timed.?out|ETIMEDOUT|超时|提取码|提取碼|访问码|密码|密碼|验证码|captcha|pass.?code|password|rate.?limit|too many|频繁|限流|permission.?denied|access.?denied|权限不足|无权限|(?:分享|共享|链接)[^。\n]{0,20}(?:过期|失效|无效|取消|删除|不存在)|share(?:d)?(?: link)?[^.\n]{0,30}(?:expired|invalid|cancelled|canceled|deleted|not found)/i;
function cpAuthNoticeRoot(active){
 let owner=active;
 while(owner?.parent||owner?.moduleQuota?.parent)owner=owner.parent||owner.moduleQuota.parent;
 return owner;
}
function cpAuthNoticeRecovered(provider,active,session,evidence){
 const owner=cpAuthNoticeRoot(active);
 if(!owner||owner.closed||owner.signal?.aborted||owner.profile!==baiduSha1(JSON.stringify(cpAccounts())))return;
 if(session&&session!==baiduSha1(cpNewPanAuthValue(provider)))return;
 if(owner.authNoticeEvidence?.get(provider)!==evidence)return;
 owner.authNoticeProviders?.delete(provider);owner.authNoticeSessions?.delete(provider);owner.authNoticeEvidence?.delete(provider);
}
function cpAuthNoticeRemember(issue,evidence,active=cpResourceOwner){
 if(issue.code!=='AUTH_FAILED'||!CP_AUTH_NOTICE_DRIVES[issue.provider])return;
 if(!active||Date.now()>=active.deadline)return;
 if(active.closed&&active.moduleQuota?.full!==true)return;
 if(evidence?.cpAuthNoticeSuppressed)return;
 if(['xunlei','guangya','tianyi'].includes(issue.provider)&&evidence?.cpAuthNoticePrivate!==true)return;
 // A bare HTTP 403 or captcha rejection also uses the legacy AUTH_FAILED
 // category. It does not establish that a configured login has expired.
 const apiCode=String(evidence?.apiCode??'');
 if(/captcha|permission_denied/i.test(apiCode))return;
 if(Number(evidence?.status)===403&&evidence?.cpAuthNoticeConfirmed!==true&&!/^(?:401|10|16|117|4121|4122|4126|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired|invalid_token|invalid_grant|unauthenticated)$/i.test(apiCode))return;
 const owner=cpAuthNoticeRoot(active);
 if(owner.closed||owner.signal?.aborted||owner.profile!==baiduSha1(JSON.stringify(cpAccounts())))return;
 const drive=CP_AUTH_NOTICE_DRIVES[issue.provider];
 if(!cpDriveEnabled(issue.provider)||!cpAccounts()[drive.index])return;
 if(['xunlei','guangya'].includes(issue.provider)){
  const session=baiduSha1(cpNewPanAuthValue(issue.provider));
  if(evidence?.cpAuthNoticeSession&&evidence.cpAuthNoticeSession!==session)return;
  (owner.authNoticeSessions||(owner.authNoticeSessions=new Map())).set(issue.provider,session);
 }
 (owner.authNoticeEvidence||(owner.authNoticeEvidence=new Map())).set(issue.provider,evidence||issue);
 (owner.authNoticeProviders||(owner.authNoticeProviders=new Set())).add(issue.provider);
}
// Reuse authentication codes recognized by the account connection checker.
// Inspect responses already requested by the module, including HTTP 200 errors.
function cpAuthNoticeObserve(url,json,owner,status){
 if(!owner||!json||typeof json!=='object')return;
 const message=[json.message,json.msg,json.errmsg,json.error_msg,json.error_description,json.res_message].filter(v=>typeof v==='string').join(' ');
 const host=/^https:\/\/([^/?#]+)\//i.exec(String(url))?.[1]?.toLowerCase();
 const provider=/^drive(?:-[a-z]+)?\.quark\.cn$/.test(host||'')?'quark':
  ['pan.baidu.com','mbd.baidu.com'].includes(host)?'baidu':
  ['webapi.115.com','proapi.115.com'].includes(host)?'115':null;
 const code=json.error||(json.error_code??json.errorCode??json.code??json.errno??json.res_code);
 if(String(code)==='429'||CP_AUTH_NOTICE_EXCLUDED.test(String(code)+' '+message))return;
 const confirmed=typeof cpNPAuthRejected==='function'?cpNPAuthRejected(status,code,message):status===401||/^(?:401|-6|99|40101|41017|990009|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired|user_unauthenticated|invalid_grant|unauthenticated|invalid_token|16)$/i.test(String(code));
 if(provider&&confirmed)
  cpAuthNoticeRemember({provider,code:'AUTH_FAILED'},{apiCode:code,status,cpAuthNoticeConfirmed:confirmed},owner);
}
const cpAuthNoticeJsonNative=httpJson;
httpJson=async function(method,url,...args){
 const owner=cpResourceOwner,value=await cpAuthNoticeJsonNative(method,url,...args);
 cpAuthNoticeObserve(url,value,owner);return value;
};
function cpAuthNoticeResponse(url,response,owner){
 const status=Number(response?.status??response?.statusCode);
 if(status===429)return;
 let json=response?.data;
 if(typeof json==='string'){
  // Authentication failures are small. Avoid parsing directory/media payloads
  // a second time just to observe account status.
  if(json.length>8192){if(status!==401)return;json={message:json};}
  else try{json=JSON.parse(json);}catch(_){if(status!==401)return;json={message:json};}
 }
 if(status===401&&(!json||typeof json!=='object'))json={};
 cpAuthNoticeObserve(url,json,owner,status);
}
function cpAuthNoticeTransport(url,owner,task,headers){
 if(!owner||!/^https:\/\/(?:drive(?:-[a-z]+)?\.quark\.cn|pan\.baidu\.com|mbd\.baidu\.com|webapi\.115\.com|proapi\.115\.com)\//i.test(String(url)))return task;
 return task.then(response=>{cpAuthNoticeResponse(url,response,owner);return response;},error=>{
  if(cpAuthNoticePrivateHeaders(headers)&&typeof cpNPErrorDetails==='function'){
   const details=cpNPErrorDetails(error);cpNPLogError('account HTTP request failed',error);
   cpAuthNoticeObserve(url,{error_code:details.code,message:details.message},owner,details.status);
  }
  throw error;
 });
}
const cpAuthNoticeGetNative=cpHttpGet,cpAuthNoticePostNative=cpHttpPost;
cpHttpGet=function(url,...args){
 if(typeof cpNPInstallNativeHttpErrors==='function')cpNPInstallNativeHttpErrors();
 return cpAuthNoticeTransport(url,cpResourceOwner,cpAuthNoticeGetNative(url,...args),args[0]?.headers);
};
cpHttpPost=function(url,...args){
 if(typeof cpNPInstallNativeHttpErrors==='function')cpNPInstallNativeHttpErrors();
 return cpAuthNoticeTransport(url,cpResourceOwner,cpAuthNoticePostNative(url,...args),args[1]?.headers);
};
function cpAuthNoticePrivateHeaders(headers){
 return Object.entries(headers||{}).some(([key,value])=>/^(?:authorization|cookie)$/i.test(key)&&String(value||'').trim());
}
const cpAuthNoticeNPFailure=cpNPFailure;
cpNPFailure=function(status,code,message){
 const error=cpAuthNoticeNPFailure(status,code,message);
 if(typeof cpNPAuthRejected==='function')error.cpAuthNoticeConfirmed=cpNPAuthRejected(status,code,message);
 if(CP_AUTH_NOTICE_EXCLUDED.test(String(code)+' '+String(message||'')))error.cpAuthNoticeSuppressed=true;
 return error;
};
// Public share tokens and captcha tokens must never be confused with a saved
// account. Annotate final private failures, allowing successful renewal first.
const cpAuthNoticeNPJson=cpNPJson;
cpNPJson=async function(provider,profile,method,url,body,headers,...args){
 try{return await cpAuthNoticeNPJson(provider,profile,method,url,body,headers,...args);}
 catch(error){
  if(error?.code==='AUTH_FAILED'&&!url.includes('/shield/captcha/init')&&(cpAuthNoticePrivateHeaders(headers)||body?.grant_type==='refresh_token'))error.cpAuthNoticePrivate=true;
  throw error;
 }
};
const cpAuthNoticeReadAuth=cpNPReadAuth;
cpNPReadAuth=function(...args){
 try{return cpAuthNoticeReadAuth(...args);}
 catch(error){if(error?.code==='AUTH_FAILED')error.cpAuthNoticeSuppressed=true;throw error;}
};
const cpAuthNoticeRefreshAuth=cpNPRefreshAuth;
cpNPRefreshAuth=async function(...args){
 const owner=cpResourceOwner;
 const session=baiduSha1(cpNewPanAuthValue(args[0]));
 const evidence=cpAuthNoticeRoot(owner)?.authNoticeEvidence?.get(args[0]);
 if(typeof cpNPInstallNativeHttpErrors==='function')cpNPInstallNativeHttpErrors();
 try{
  const result=await cpAuthNoticeRefreshAuth(...args);
  cpAuthNoticeRecovered(args[0],owner,null,evidence);
  return result;
 }
 catch(error){
  if(error?.code==='AUTH_FAILED'){
   error.cpAuthNoticePrivate=true;
   if(!error.cpAuthNoticeSession)error.cpAuthNoticeSession=session;
   if(error.status===undefined&&error.apiCode===undefined){
    try{const auth=cpAuthNoticeReadAuth(args[0]);const exp=Number(cpNPPanJwt(auth.accessToken).exp);if(!(exp>0&&exp*1000<=Date.now()))error.cpAuthNoticeSuppressed=true;}
    catch(_){error.cpAuthNoticeSuppressed=true;}
   }
   cpAuthNoticeRemember({provider:args[0],code:error.code},error,owner);
  }
  throw error;
 }
};
// Record the final API outcome before a speculative caller can discard it.
// The native API completes its refresh/retry branch before this catch runs.
const cpAuthNoticeXunleiApi=cpNPXunleiApi,cpAuthNoticeGuangyaApi=cpNPGuangyaApi;
cpNPXunleiApi=async function(...args){
 const owner=cpResourceOwner;
 const session=baiduSha1(cpNewPanAuthValue('xunlei'));
 const evidence=cpAuthNoticeRoot(owner)?.authNoticeEvidence?.get('xunlei');
 try{
  const result=await cpAuthNoticeXunleiApi(...args);
  if(!args[3])cpAuthNoticeRecovered('xunlei',owner,session,evidence);
  return result;
 }
 catch(error){
  if(error&&!error.cpAuthNoticeSession)error.cpAuthNoticeSession=session;
  cpAuthNoticeRemember({provider:'xunlei',code:error?.code},error,owner);
  throw error;
 }
};
cpNPGuangyaApi=async function(...args){
 const owner=cpResourceOwner;
 const session=baiduSha1(cpNewPanAuthValue('guangya'));
 const evidence=cpAuthNoticeRoot(owner)?.authNoticeEvidence?.get('guangya');
 try{
  const result=await cpAuthNoticeGuangyaApi(...args);
  if(args[2])cpAuthNoticeRecovered('guangya',owner,session,evidence);
  return result;
 }
 catch(error){
  if(error&&!error.cpAuthNoticeSession)error.cpAuthNoticeSession=session;
  cpAuthNoticeRemember({provider:'guangya',code:error?.code},error,owner);
  throw error;
 }
};
const cpAuthNoticeTianyiResponse=cpNPTianyiResponse;
cpNPTianyiResponse=function(raw,xml){
 try{return cpAuthNoticeTianyiResponse(raw,xml);}
 catch(error){
  if(error?.code==='AUTH_FAILED'&&error.status===undefined){
   let data=raw;
   if(typeof data==='string'){
    try{data=JSON.parse(data);}catch(_){data={res_code:cpNPTianyiXml(raw,'res_code')||cpNPTianyiXml(raw,'code'),res_message:cpNPTianyiXml(raw,'res_message')||cpNPTianyiXml(raw,'message')};}
   }
   error.status=200;error.apiCode=data?.res_code??data?.code??data?.errorCode;
   if(CP_AUTH_NOTICE_EXCLUDED.test(String(error.apiCode)+' '+String(data?.res_message||data?.message||data?.msg||data?.error||'')))error.cpAuthNoticeSuppressed=true;
  }
  throw error;
 }
};
const cpAuthNoticeTianyiGet=cpNPTianyiGet,cpAuthNoticeTianyiPrepare=cpNPTianyiPrepareAuth;
cpNPTianyiGet=async function(url,profile,headers,...args){
 try{return await cpAuthNoticeTianyiGet(url,profile,headers,...args);}
 catch(error){if(error?.code==='AUTH_FAILED'&&cpAuthNoticePrivateHeaders(headers))error.cpAuthNoticePrivate=true;throw error;}
};
cpNPTianyiPrepareAuth=async function(...args){
 try{return await cpAuthNoticeTianyiPrepare(...args);}
 catch(error){
  if(error?.code==='AUTH_FAILED'){
   error.cpAuthNoticePrivate=true;
   if(error.status===undefined&&error.apiCode===undefined)error.cpAuthNoticeSuppressed=true;
  }
  throw error;
 }
};
function cpAuthNoticeRows(owner,params){
 if(!owner?.authNoticeProviders?.size)return [];
 cpResourceIdentity(owner);
 const accounts=cpAccounts();
 const category=typeof cpResourceCategory==='function'?cpResourceCategory():'';
 const resolution=({"8k":"4320p","4k":"2160p","1080p":"1080p"})[category]||null;
 return Object.entries(CP_AUTH_NOTICE_DRIVES).filter(([provider,drive])=>
  owner.authNoticeProviders.has(provider)&&cpDriveEnabled(provider)&&accounts[drive.index]&&(!owner.authNoticeSessions?.has(provider)||owner.authNoticeSessions.get(provider)===baiduSha1(cpNewPanAuthValue(provider)))
 ).map(([provider,drive])=>({
  id:WidgetMetadata.id+'.auth-invalid.'+provider,
  name:'⚠ '+drive.label+' · 登录失效',
  description:[drive.label+'登录失效，请更新对应网盘的登录配置后重新加载。',resolution].filter(Boolean).join(' · '),
  type:params.type==='movie'?'movie':'tv',
  resolution,
  url:CP_AUTH_NOTICE_URL.replace('/index.m3u8','/'+provider+'.m3u8')
 }));
}
function cpAuthNoticeResult(rows,owner,params){
 if(!Array.isArray(rows))return rows;
 const notices=cpAuthNoticeRows(owner,params);
 return notices.length?rows.concat(notices):rows;
}
function cpAuthNoticeFailure(error,owner,params){
 if(['ABORTED','ACCOUNT_CHANGED'].includes(error?.code))throw error;
 const notices=cpAuthNoticeRows(owner,params);
 if(notices.length)return notices;
 throw error;
}

/* matching-cache-scope-v1:start */
// Completed matching facts use only their owning drive/site identity. Pending
// work and cpCheck retain the original full-account operation profile.
function cpMatchingDriveIdentity(provider){
 if(typeof cpIsNewPan==='function'&&cpIsNewPan(provider))return cpNewPanIdentity(provider);
 const index={quark:0,baidu:1,'115':2}[provider];
 return baiduSha1(JSON.stringify(['matching-drive-v1',provider,index===undefined?'anonymous-v1':String(cpAccounts()[index]||'')]));
}
function cpMatchingSiteIdentity(params={}){
 const channels=typeof readChannels==='function'?readChannels():null;
 // Woniu's website login is independent of its configured drive accounts.
 const account=typeof woniuPage==='function'?[safeStorageGet('forward.woniu.account')||'',safeStorageGet('forward.woniu.session')||'']:null;
 return baiduSha1(JSON.stringify(['matching-site-v1',params.cpSiteIdentity||'',channels,account]));
}
function cpMatchingDiscoveryIdentity(params={}){
 const enabled=typeof cpCandidateEnabled==='function'?cpCandidateEnabled:quanpanProviderEnabled;
 const capabilities=['quark','baidu','uc','115','123','xunlei','guangya','yidong','tianyi'].map(provider=>[provider,!!enabled(provider)]);
 return baiduSha1(JSON.stringify(['matching-discovery-v1',cpMatchingSiteIdentity(params),capabilities]));
}
function cpMatchingCatalogIdentity(share){return cpMatchingDriveIdentity(share.provider||'quark');}
if(typeof cpColdAccessKey==='function')cpColdAccessKey=function(provider,shareId,passcode){
 return 'cold-share-access-v2:'+baiduSha1(JSON.stringify([getSite(),cpMatchingDriveIdentity(provider),provider,String(shareId||''),String(passcode||''),cpColdAccessEpoch()]));
};
if(typeof cpCoverageKey==='function')cpCoverageKey=function(params,share){
 return 'season-coverage-v2:'+baiduSha1(JSON.stringify([getSite(),cpMatchingSiteIdentity(params),cpMatchingCatalogIdentity(share),share.provider,share.shareId,baiduSha1(share.passcode||''),params.tmdbId||params.tmdbID||'',cpRequestedYear(params),cpRelevanceTitles(params).map(cpTitleKey).sort()]));
};
// Baidu's verified share sekey is a matching preparation. Keep its native
// bounded store/generation and leave private UID/transfer entries unchanged.
if(typeof cpBaiduCacheKey==='function'){
 const native=cpBaiduCacheKey;
 cpBaiduCacheKey=function(label,identity){
  if(label!=='verify')return native(label,identity);
  cpCheck(cpActiveProfile||cpProfile);
  return 'matching-verify-v1:'+cpMatchingDriveIdentity('baidu')+':'+String(cpBaiduCacheGet('epoch:matching')||'')+':'+baiduSha1(JSON.stringify(identity));
 };
}
const cpMatchingOwners=new WeakMap();let cpMatchingOwnerSequence=0;
function cpMatchingOwnerId(){
 const owner=(typeof qpOperation!=='undefined'&&qpOperation)||cpResourceOwner||cpReadOperation;
 if(!owner)return 0;
 if(!cpMatchingOwners.has(owner))cpMatchingOwners.set(owner,++cpMatchingOwnerSequence);
 return cpMatchingOwners.get(owner);
}
function cpMatchingCaptureContext(){return {read:cpReadOperation,resource:cpResourceOwner,quanpan:qpOperation,profile:cpActiveProfile||cpProfile,signal:cpSignal,deadline:cpDeadline};}
// Restore synchronously before any await. Deferred protocol guards/dispatches
// re-enter their captured context rather than borrowing another live owner.
function cpMatchingWithContext(context,work){
 const previous=cpMatchingCaptureContext(),active=cpActiveProfile;
 cpReadOperation=context.read;cpResourceOwner=context.resource;qpOperation=context.quanpan;cpActiveProfile=context.profile;cpSignal=context.signal;cpDeadline=context.deadline;
 try{return work();}
 finally{cpReadOperation=previous.read;cpResourceOwner=previous.resource;qpOperation=previous.quanpan;cpActiveProfile=active;cpSignal=previous.signal;cpDeadline=previous.deadline;}
}
function cpMatchingCheckContext(context){return cpMatchingWithContext(context,()=>cpCheck(context.profile));}
if(typeof cpQpFastKey==='function'){
 cpQpFastKey=function(kind,identity){
  // Native Quanpan auth sends no drive credentials: its token belongs to the
  // supplied website origin. Native check identity includes origin/password.
  const share=kind==='check'?JSON.parse(identity):null;
  return 'qp-fast-'+kind+'-v2:'+baiduSha1(JSON.stringify([kind==='check'?cpMatchingDriveIdentity(share[1]):'site-anonymous-v1',identity]));
 };
}
if(typeof qpGetToken==='function'){
 const token=qpGetToken,checkKey=qpCheckKey;let observedOwner=-1;
 qpGetToken=async function(site,force=false){
  const context=cpMatchingCaptureContext();cpMatchingCheckContext(context);
  const owner=cpMatchingOwnerId();
  if(owner!==observedOwner){for(const [origin,entry] of qpTokens)if(entry.pending)qpTokens.delete(origin);observedOwner=owner;}
  const value=await token(site,force);cpMatchingCheckContext(context);return value;
 };
 qpCheckKey=function(share,site){return JSON.stringify([cpMatchingOwnerId(),checkKey(share,site)]);};
}
// Reject unscoped/changed catalogs independently; descriptors retain website
// provenance and can be reused while native admission rechecks permissions.
if(typeof qpSeriesIndexRead==='function'){
 const read=qpSeriesIndexRead;
 qpSeriesIndexRead=function(key){
  const value=read(key);
  for(const candidate of value.candidates||[]){const share=candidate.shares[0],id=qpCandidateKey(share),record=value.entries[id];if(record&&record.cpMatchingIdentity!==cpMatchingCatalogIdentity(share))delete value.entries[id];}
  return value;
 };
}
/* matching-cache-scope-v1:end */

/* target-directory-location-v1:start */
// Completed folder-only ancestors are structural evidence, never file/absence
// evidence. Candidate directories always pass through their native page reader.
function cpLocationNodeKey(node){return JSON.stringify(node===null?null:typeof node==='object'?[node.id,node.path,node.depth]:node);}
function cpLocationShareKey(share){return baiduSha1(JSON.stringify([share.provider||'quark',share.shareId,share.passcode||'']));}
function cpLocationEpoch(share){return JSON.stringify([cpRead('target-location-epoch')||'',cpRead('target-location-share:'+cpLocationShareKey(share))||'']);}
function cpLocationKey(scope,share){
 const p=scope.params;
 return 'target-location-v1:'+baiduSha1(JSON.stringify([getSite(p),cpMatchingSiteIdentity(p),cpMatchingCatalogIdentity(share),cpLocationShareKey(share),p.season,scope.titles,p.tmdbId||p.tmdbID||'',cpRequestedYear(p),p.cpFileContextTitle||'',p.cpFileContextSeason??null,!!p.cpFileContextAmbiguous]));
}
function cpLocationClear(){
 cpWrite('target-location-epoch',String(Date.now())+':'+Math.random());
 for(const key of cpRead('target-location-keys')||[])cpWrite(key,null);cpWrite('target-location-keys',[]);
}
function cpLocationInvalidate(share){
 cpWrite('target-location-share:'+cpLocationShareKey(share),String(Date.now())+':'+Math.random());
}
// Only structural fields used by the native child/season callbacks persist.
// In particular no signed URL, share-file token, or operation token survives.
function cpLocationFolder(item){
 const value={};
 for(const key of ['fid','fs_id','fsid','cid','FileId','fileId','coID','caID','id','resId','path','file_name','server_filename','n','FileName','name','fileName','caName','catalogName','coName','dir','file_type','obj_category','isdir','category','fc','Type','Category','resType','kind','cpB8Folder'])if(['string','number','boolean'].includes(typeof item[key]))value[key]=item[key];
 return value;
}
function cpLocationGroup(scope,node,files,folders){
 if(!scope.cpLocation)return {};
 const value={key:cpLocationNodeKey(node)};
 if(!files.length&&folders.length)value.folders=folders.map(cpLocationFolder);
 return {location:value};
}
function cpLocationDenied(scope){if(scope?.cpLocation)scope.cpLocation.denied=true;}
function cpLocationBaidu(scope){return scope?.cpLocation?.proof?.baidu||{};}
function cpLocationTianyi(scope,seen){
 if(scope?.cpLocation)scope.cpLocation.replay=items=>{for(const item of items){if(seen.has(item.id))throw cpError('UPSTREAM_ERROR');seen.add(item.id);}};
}
function cpLocationRecord(value,epoch){
 return value&&value.epoch===epoch&&value.expires>Date.now()&&value.at<=Date.now()&&value.expires-value.at===14400000&&Array.isArray(value.nodes)&&value.nodes.length>1&&value.nodes.length<=64&&value.nodes[0].folders?.length&&JSON.stringify(value).length<=65536?value:null;
}
function cpLocationContext(){return {profile:cpActiveProfile||cpProfile,read:cpReadOperation,resource:cpResourceOwner,signal:cpSignal,deadline:cpDeadline};}
function cpLocationCheck(context){
 const previous=cpLocationContext(),active=cpActiveProfile;
 cpReadOperation=context.read;cpResourceOwner=context.resource;cpActiveProfile=context.profile;cpSignal=context.signal;cpDeadline=context.deadline;
 try{return cpCheck(context.profile);}
 finally{cpReadOperation=previous.read;cpResourceOwner=previous.resource;cpActiveProfile=active;cpSignal=previous.signal;cpDeadline=previous.deadline;}
}
const cpLocationCollectNative=cpTargetCollect;
cpTargetCollect=function(scope,root,read,...args){
 const state=scope.cpLocation,proof=state?.proof;
 if(!proof)return cpLocationCollectNative(scope,root,read,...args);
 const nodes=new Map(proof.nodes.map(node=>[node.key,node]));
 const located=(node,emit,token)=>{
  const saved=nodes.get(cpLocationNodeKey(node));
  if(!saved)throw Object.assign(new Error('Location prefix exhausted'),{code:'TARGET_LOCATION_MISS'});
  if(!saved.folders)return read(node,emit,token);
  state.replay?.(saved.folders);emit(saved.folders.map(item=>({...item})));return [];
 };
 return cpLocationCollectNative(scope,root,located,...args);
};
const cpLocationRawNative=cpTargetRaw;
cpTargetRaw=async function(share){
 const scope=share.cpTargetDirectory;
 // Xunlei's root listing verifies a per-operation share token. It must remain
 // native; its auth token is deliberately not promoted to structural evidence.
 if(!scope||scope.cpCoverageProbe||scope.params.cpFileContextAmbiguous||share.provider==='xunlei')return cpLocationRawNative(share);
 const context=cpLocationContext(),key=cpLocationKey(scope,share),epoch=cpLocationEpoch(share);
 const fresh=scope.params.refresh||scope.params.forceRefresh;
 let proof=!fresh&&cpLocationRecord(cpRead(key),epoch);
 if(share.provider==='baidu'&&(!proof?.baidu?.uk||!proof?.baidu?.shareid))proof=null;
 scope.cpLocation={proof};
 let catalog;
 try{
  catalog=await cpLocationRawNative(share);cpLocationCheck(context);
  if(proof&&scope.cpTargetObservation?.selected==null)throw Object.assign(new Error('Location did not prove requested episode'),{code:'TARGET_LOCATION_MISS'});
 }catch(error){
  cpLocationCheck(context);
  if(!proof)throw error;
  cpWrite(key,null);
  // Auth/permission/rate-limit and operation failures retain native policy.
  // Only ordinary catalog errors and a completed miss permit root fallback.
  if(scope.cpLocation.denied||!['TARGET_LOCATION_MISS','UPSTREAM_ERROR',undefined].includes(error?.code)||[401,403,429].includes(Number(error?.status))||/cookie|captcha|auth|login|令牌|登录|登錄|验证码|驗證碼/i.test(String(error?.message||'')))throw error;
  scope.cpLocation={proof:null};scope.cpTargetObservation={};
  catalog=await cpLocationRawNative(share);cpLocationCheck(context);proof=null;
 }
 const observation=scope.cpTargetObservation,nodes=observation?.groups?.map(group=>group.location);
 const at=proof?.at??Date.now(),record={at,expires:at+14400000,epoch,nodes};
 if(share.provider==='baidu'){
  const file=catalog.list.find(file=>file.uk&&file.shareid);if(file)record.baidu={uk:String(file.uk),shareid:String(file.shareid)};
 }
 if(observation?.selected>0&&!observation.ambiguous&&!scope.params.cpFileContextAmbiguous&&nodes?.every(Boolean)&&cpLocationRecord(record,epoch)&&epoch===cpLocationEpoch(share)){
  catalog.cpTargetDirectory.location=record;cpWrite(key,record);
  const keys=(cpRead('target-location-keys')||[]).filter(k=>k!==key);keys.push(key);while(keys.length>64)cpWrite(keys.shift(),null);cpWrite('target-location-keys',keys);
 }
 return catalog;
};
if(typeof cpInvalidateCandidateShare==='function'){
 const native=cpInvalidateCandidateShare;cpInvalidateCandidateShare=function(share,...args){cpLocationInvalidate(share);return native(share,...args);};
}
if(typeof cpClearCandidateCache==='function'){
 const native=cpClearCandidateCache;cpClearCandidateCache=function(...args){cpLocationClear();return native(...args);};
}
if(typeof clearRexCatalogCache==='function'){
 const native=clearRexCatalogCache;clearRexCatalogCache=function(...args){cpLocationClear();return native(...args);};
}
if(typeof clearHuajuanCache==='function'){
 const native=clearHuajuanCache;clearHuajuanCache=function(...args){cpLocationClear();return native(...args);};
}
const cpLocationReadNative=cpTargetRead;
cpTargetRead=function(params,share,titles,refresh=false){
 if(refresh||params?.refresh||params?.forceRefresh)cpLocationInvalidate(share);
 return cpLocationReadNative(params,share,titles,refresh);
};
/* target-directory-location-v1:end */

/* shared-catalog-v1:start */
// Fixed descriptor and body slots keep abandoned/contended writes bounded even
// on hosts offering only synchronous get/set. Reserve 192 KiB for 128 bounded
// descriptors, control, fences and keys. Each of 128 body slots uses <64,000
// bytes including its publication token and key. Legacy namespaces are ignored.
const CP_SHARED_CATALOG_NS='catpaw.catalog.v2',CP_SHARED_CATALOG_TTL=86400000,CP_SHARED_CATALOG_BYTES=8*1024*1024-192*1024,CP_SHARED_CATALOG_COUNT=128;
const CP_SHARED_CATALOG_PART_BYTES=63872,CP_SHARED_CATALOG_META_BYTES=1024;
function cpSharedCatalogBytes(text){
 // Native regexp scans avoid a JS callback for every cached JSON character.
 // Each UTF-16 surrogate contributes three bytes, then a valid pair saves two.
 const two=text.length-text.replace(/[\u0080-\u07ff]/g,'').length,three=text.length-text.replace(/[\u0800-\uffff]/g,'').length,paired=text.length-text.replace(/[\ud800-\udbff][\udc00-\udfff]/g,'').length;
 return text.length+two+2*three-paired;
}
// Cache only the byte validation of the last bounded raw value. Read the host
// every time and parse a fresh owned object, so other modules, expiry and local
// mutations remain visible without re-scanning unchanged megabytes in JS.
let cpSharedCatalogByteMemo=null;
function cpSharedCatalogBounded(raw){
 if(typeof raw!=='string'||raw.length>CP_SHARED_CATALOG_BYTES)return false;
 if(cpSharedCatalogByteMemo?.raw===raw)return true;
 if(cpSharedCatalogBytes(raw)>CP_SHARED_CATALOG_BYTES)return false;
 cpSharedCatalogByteMemo={raw};return true;
}
// Only permission/generation control lives here. Binding never loads catalogs.
function cpSharedCatalogState(){
 try{
  if(typeof Widget.sharedCache?.get!=='function'||typeof Widget.sharedCache?.set!=='function')return null;
  const raw=Widget.sharedCache.get(CP_SHARED_CATALOG_NS,'state');
  if(!raw)return {schema:2,generation:'0',permissions:{}};
  if(typeof raw!=='string'||raw.length>CP_SHARED_CATALOG_META_BYTES||!cpSharedCatalogBounded(raw))return null;
  const state=JSON.parse(raw);
  if(state?.schema!==2||typeof state.generation!=='string'||state.generation.length>100||!state.permissions||typeof state.permissions!=='object'||Array.isArray(state.permissions))return null;
  if(Object.keys(state.permissions).length>9||Object.values(state.permissions).some(value=>typeof value!=='boolean'))return null;
  return state;
 }catch(_){return null;}
}
function cpSharedCatalogSave(state){
 try{
  const raw=JSON.stringify(state);
  return cpSharedCatalogBytes(raw)<=CP_SHARED_CATALOG_META_BYTES&&Widget.sharedCache.set(CP_SHARED_CATALOG_NS,'state',raw)!==false;
 }catch(_){return false;}
}
function cpSharedCatalogSlot(key){return parseInt(key.slice(0,8),16)%CP_SHARED_CATALOG_COUNT;}
function cpSharedCatalogRecord(slot){
 try{
  const raw=Widget.sharedCache.get(CP_SHARED_CATALOG_NS,'record:'+slot);
  if(typeof raw!=='string'||raw.length>CP_SHARED_CATALOG_META_BYTES||cpSharedCatalogBytes(raw)>CP_SHARED_CATALOG_META_BYTES)return null;
  const entry=JSON.parse(raw);
  if(!entry||typeof entry.key!=='string'||!/^[a-f0-9]{40}$/.test(entry.key)||cpSharedCatalogSlot(entry.key)!==slot||typeof entry.share!=='string'||!/^[a-f0-9]{40}$/.test(entry.share))return null;
  if(typeof entry.token!=='string'||!/^[\x20-\x7e]{1,64}$/.test(entry.token)||typeof entry.epoch!=='string'||entry.epoch.length>200)return null;
  if(!Number.isFinite(entry.at)||entry.at>Date.now()||entry.expires-entry.at!==CP_SHARED_CATALOG_TTL||!Number.isFinite(entry.used))return null;
  if(entry.verifiedAt!==undefined&&(!Number.isFinite(entry.verifiedAt)||entry.verifiedAt<entry.at||entry.verifiedAt>Date.now()))return null;
  if(!Array.isArray(entry.parts)||!entry.parts.length||entry.parts.length>CP_SHARED_CATALOG_COUNT||new Set(entry.parts).size!==entry.parts.length||entry.parts.some(part=>!Number.isInteger(part)||part<0||part>=CP_SHARED_CATALOG_COUNT))return null;
  return {...entry,slot};
 }catch(_){return null;}
}
function cpSharedCatalogRecords(){
 const entries=[];
 for(let slot=0;slot<CP_SHARED_CATALOG_COUNT;slot++){
  const entry=cpSharedCatalogRecord(slot);
  if(entry)entries.push(entry);
 }
 return entries;
}
// Keep the original catalog timestamp immutable so body chunks never need to
// be rewritten when a selected file succeeds. Existing v2 records have no lease.
function cpSharedCatalogExpires(entry){
 return (entry.verifiedAt??entry.at)+CP_SHARED_CATALOG_TTL;
}
function cpSharedCatalogCurrent(catalog){
 const stamp=catalog?.cpSharedCatalog,state=cpSharedCatalogState();
 if(!stamp||!state||stamp.schema!==2||typeof stamp.key!=='string'||
    !/^[a-f0-9]{40}$/.test(stamp.key)||typeof stamp.share!=='string'||
    stamp.epoch!==cpSharedCatalogEpoch(state,stamp.share))return null;
 const entry=cpSharedCatalogRecord(cpSharedCatalogSlot(stamp.key));
 if(!entry||entry.token!==stamp.token||entry.key!==stamp.key||entry.share!==stamp.share||entry.epoch!==stamp.epoch||
    entry.at!==stamp.at||entry.expires!==stamp.expires||cpSharedCatalogExpires(entry)<=Date.now())return null;
 return entry;
}
function cpSharedCatalogObserve(catalog,entry,share){
 const owner=cpResourceOwner?.moduleQuota?.parent||cpResourceOwner;
 if(!owner&&!share)return;
 entry=entry||cpSharedCatalogCurrent(catalog);
 if(!entry)return;
 // Manual episode links resolve in a later owner or VM. Carry only bounded
 // provenance; the later getter must still verify the current payload/file.
 if((!owner||owner.manual)&&share){
  const lease={...catalog.cpSharedCatalog,token:entry.token,identity:cpMatchingCatalogIdentity(share)};
  for(const file of catalog.list)file.cpCatalogLease=lease;
 }
 if(!owner)return;
 const observations=owner.catalogObservations||(owner.catalogObservations=new Map());
 observations.set(entry.key,{entry,catalog});
 if(observations.size>CP_SHARED_CATALOG_COUNT)observations.delete(observations.keys().next().value);
}
function cpSharedCatalogWrite(key,value){
 try{return Widget.sharedCache.set(CP_SHARED_CATALOG_NS,key,value)!==false;}catch(_){return false;}
}
function cpSharedCatalogChunks(raw){
 const chunks=[];
 while(raw.length&&chunks.length<CP_SHARED_CATALOG_COUNT){
  let end=Math.min(raw.length,CP_SHARED_CATALOG_PART_BYTES);
  if(cpSharedCatalogBytes(raw.slice(0,end))>CP_SHARED_CATALOG_PART_BYTES){
   let lower=1,upper=end;
   while(lower<upper){
    const middle=Math.ceil((lower+upper)/2);
    if(cpSharedCatalogBytes(raw.slice(0,middle))<=CP_SHARED_CATALOG_PART_BYTES)lower=middle;
    else upper=middle-1;
   }
   end=lower;
  }
  chunks.push(raw.slice(0,end));raw=raw.slice(end);
 }
 return raw.length?null:chunks;
}
function cpSharedCatalogReadRecord(entry){
 try{
  let raw='';
  const prefix=entry.token+'\n';
  for(const part of entry.parts){
   const chunk=Widget.sharedCache.get(CP_SHARED_CATALOG_NS,'part:'+part);
   if(typeof chunk!=='string'||chunk.length>64000||!chunk.startsWith(prefix)||cpSharedCatalogBytes(chunk)>64000)return null;
   raw+=chunk.slice(prefix.length);
  }
  if(!cpSharedCatalogBounded(raw))return null;
  return JSON.parse(raw);
 }catch(_){return null;}
}
function cpSharedCatalogBindRecord(catalog,entry){
 const stamp=catalog?.cpSharedCatalog;
 if(!stamp||stamp.schema!==2||stamp.share!==entry.share||stamp.key!==entry.key||
    stamp.epoch!==entry.epoch||stamp.at!==entry.at||stamp.expires!==entry.expires)return false;
 // Legacy v2 bodies remain readable. Their part tokens bind this owned copy
 // to one publication before it can prove a later selected playback result.
 stamp.token=entry.token;
 return true;
}
function cpSharedCatalogNonce(){return String(Date.now())+':'+Math.random();}
function cpSharedCatalogShare(share){
 const provider=share.provider||'quark',id=String(share.shareId||'').trim();
 return baiduSha1(JSON.stringify([provider,provider==='baidu'?baiduShortId(id):id,String(share.passcode||'')]));
}
function cpSharedCatalogFence(key='fence'){
 try{const value=Widget.sharedCache.get(CP_SHARED_CATALOG_NS,key);return value==null||value===''?'0':typeof value==='string'&&/^[\x20-\x7e]{1,64}$/.test(value)?value:null;}catch(_){return null;}
}
function cpSharedCatalogFenceBump(key='fence'){
 // The counter also distinguishes repeated invalidations under a fixed clock.
 const previous=cpSharedCatalogFence(key),count=Number(previous?.split(':').at(-1)),next=cpSharedCatalogNonce()+':'+(Number.isSafeInteger(count)&&count>=0&&count<Number.MAX_SAFE_INTEGER?count+1:1);
 try{return Widget.sharedCache.set(CP_SHARED_CATALOG_NS,key,next)!==false&&cpSharedCatalogFence(key)===next;}catch(_){return false;}
}
function cpSharedCatalogShard(share){return 'fence:'+parseInt(share.slice(0,8),16)%128;}
function cpSharedCatalogEpoch(state,share){
 if(typeof share!=='string'||!/^[a-f0-9]{40}$/.test(share))return null;
 const global=cpSharedCatalogFence(),shard=cpSharedCatalogFence(cpSharedCatalogShard(share));
 return state&&global!==null&&shard!==null?JSON.stringify([global,shard]):null;
}
function cpSharedCatalogInvalidate(share){
 // Missing/unreadable shared storage retains the native local-cache fallback.
 // A functioning read store must acknowledge mandatory invalidation by readback.
 if(!cpSharedCatalogState())return;
 const key=share&&cpSharedCatalogShare(share);
 if(!cpSharedCatalogFenceBump(key?cpSharedCatalogShard(key):'fence')){
  const error=new Error('共享目录缓存清理失败，请重试');error.code='CATALOG_CACHE_INVALIDATION_FAILED';throw error;
 }
 for(const entry of cpSharedCatalogRecords()){
  if(!key||entry.share===key)cpSharedCatalogWrite('record:'+entry.slot,'');
 }
}
// Cleanup after a native failure cannot replace that already-decided error.
// Explicit clear, refresh and permission changes still require durable fences.
function cpSharedCatalogCleanup(share){try{cpSharedCatalogInvalidate(share);}catch(_){}}
function cpSharedCatalogPermission(provider){
 const state=cpSharedCatalogState();
 if(!state)return;
 let changed=false,invalidate=false;
 for(const drive of provider?[provider]:['quark','baidu','uc','115','123','xunlei','guangya','yidong','tianyi']){
  const enabled=!!cpDriveEnabled(drive);
  if(state.permissions[drive]!==enabled){
   invalidate=invalidate||state.permissions[drive]!==undefined;
   state.permissions[drive]=enabled;changed=true;
  }
 }
 if(invalidate){cpSharedCatalogInvalidate();state.generation=cpSharedCatalogNonce();}
 if(changed)cpSharedCatalogSave(state);
}
// Public resource binding runs even when disabled providers are filtered before
// catalog dispatch. Observe that transition so re-enabling cannot reuse it.
const cpSharedBindNative=bindForwardParams;
bindForwardParams=function(...args){
 const value=cpSharedBindNative.apply(this,args);
 try{cpSharedCatalogPermission();return value;}
 // Permission observation reads the synchronous account memo after the native
 // bind reset. Preserve that boundary for the next same-turn account binding.
 finally{if(typeof cpColdResetConfig==='function')cpColdResetConfig();}
};
function cpSharedCatalogContract(params,titles){
 const scope=cpTargetScope(params,titles);
 return [params?.type||'tv',scope?.params.season||params?.season||null,scope?.titles||cpRelevanceTitles(params||{}).concat(titles||[]),params?.tmdbId||params?.tmdbID||'',cpRequestedYear(params||{}),params?.cpFileContextTitle||'',params?.cpFileContextSeason??null,!!params?.cpFileContextAmbiguous];
}
// Saved candidate catalogs and structural hints from the old directory schema
// must reread native facts. Keep the owning-drive account identity underneath.
const cpSharedMatchingIdentityNative=cpMatchingCatalogIdentity;
cpMatchingCatalogIdentity=function(share){return 'catalog-v2:'+cpSharedMatchingIdentityNative(share);};
function cpSharedCatalogKey(params,share,titles){return baiduSha1(JSON.stringify([cpMatchingCatalogIdentity(share),cpSharedCatalogShare(share),cpSharedCatalogContract(params,titles)]));}
function cpSharedCatalogFile(file){
 return !!file&&typeof file==='object'&&!Array.isArray(file)&&
  (typeof file.fid==='string'&&!!file.fid.trim()||typeof file.fid==='number'&&Number.isFinite(file.fid))&&
  (typeof file.shareId==='string'&&!!file.shareId.trim()||typeof file.shareId==='number'&&Number.isFinite(file.shareId))&&
  typeof file.file_name==='string'&&!!file.file_name.trim()&&
  ['path','parentPath','cpFileContextTitle'].every(key=>file[key]===undefined||typeof file[key]==='string');
}
function cpSharedCatalogValid(catalog){
 if(!catalog||!Array.isArray(catalog.list)||!catalog.list.length||!catalog.list.every(cpSharedCatalogFile))return false;
 const coverage=catalog.cpTargetDirectory;
 if(coverage!==undefined&&(!coverage||typeof coverage!=='object'||Array.isArray(coverage)||typeof coverage.completeShare!=='boolean'||!Number.isFinite(coverage.expires)||!coverage.completeShare&&(typeof coverage.key!=='string'||typeof coverage.reuseKey!=='string')||coverage.reusable!==undefined&&typeof coverage.reusable!=='boolean'))return false;
 const directories=coverage?.directories;
 return directories===undefined||Array.isArray(directories)&&directories.every(directory=>directory&&Array.isArray(directory.list)&&directory.list.every(cpSharedCatalogFile));
}
function cpSharedCatalogMatches(catalog,params,titles){
 if(!cpSharedCatalogValid(catalog))return null;
 const usable=cpSharedTargetCachedNative(catalog,params,titles);if(!usable||!Array.isArray(usable.list)||!usable.list.length)return null;
 const names=cpRelevanceTitles(params||{}).concat(titles||[]);
 if(params?.type==='movie')return usable.list.some(file=>cpMovieVideoMatches(file,params,names))?usable:null;
 if(Number(params?.episode)>0)return usable.list.some(file=>cpEpisodeVideoMatches(file,params,names))?usable:null;
 return usable;
}
function cpSharedCatalogGet(params,share,titles){
 if(params?.refresh||params?.forceRefresh||!cpDriveEnabled(share.provider)||cpBlockedProviders.has(share.provider))return null;
 const state=cpSharedCatalogState();
 if(!state)return null;
 const key=cpSharedCatalogKey(params,share,titles),wholeKey=cpSharedCatalogKey({},share,[]);
 let entry=cpSharedCatalogRecord(cpSharedCatalogSlot(key));
 if(entry?.key!==key){
  entry=cpSharedCatalogRecord(cpSharedCatalogSlot(wholeKey));
  if(entry?.key!==wholeKey)return null;
 }
 if(cpSharedCatalogExpires(entry)<=Date.now()||entry.epoch!==cpSharedCatalogEpoch(state,entry.share))return null;
 const stored=cpSharedCatalogReadRecord(entry);
 if(!cpSharedCatalogBindRecord(stored,entry))return null;
 if(entry.key===wholeKey&&entry.key!==key&&stored.cpTargetDirectory)return null;
 if(stored.cpTargetDirectory)stored.cpTargetDirectory.expires=cpSharedCatalogExpires(entry);
 let catalog;
 try{catalog=cpSharedCatalogMatches(stored,params,titles);}catch(_){return null;}
 if(!catalog)return null;
 // Touch only this descriptor. Token validation makes a concurrent eviction or
 // overwritten descriptor a miss, including across independently running VMs.
 const current=cpSharedCatalogRecord(entry.slot);
 if(current?.token!==entry.token)return null;
 if(!cpSharedCatalogWrite('record:'+entry.slot,JSON.stringify({...current,used:Date.now()}))){
  cpSharedCatalogFenceBump(cpSharedCatalogShard(entry.share));return null;
 }
 const published=cpSharedCatalogRecord(entry.slot);
 if(entry.epoch!==cpSharedCatalogEpoch(cpSharedCatalogState(),entry.share)||published?.token!==entry.token)return null;
 cpSharedCatalogObserve(catalog,published,share);return catalog;
}
function cpSharedCatalogPut(params,share,titles,catalog,context,epoch){
 cpLocationCheck(context);
 if(context.resource?.closed||share.cpB8ReadToken?.cancelled||share.cpTargetDirectory?.cpTargetReadToken?.cancelled||!cpDriveEnabled(share.provider)||cpBlockedProviders.has(share.provider))return;
 const state=cpSharedCatalogState(),id=cpSharedCatalogShare(share);
 if(!state||epoch===null||epoch!==cpSharedCatalogEpoch(state,id)||!cpSharedCatalogMatches(catalog,{...params,refresh:false,forceRefresh:false},titles))return;
 const key=cpSharedCatalogKey(params,share,titles),at=Date.now();
 if(catalog.cpSharedCatalog?.schema===2&&catalog.cpSharedCatalog.epoch===epoch)return;
 // Persist only catalog metadata; never signed URLs or media payloads.
 let copy;
 try{copy=JSON.parse(JSON.stringify(catalog,(name,value)=>name==='cpCatalogLease'||/(?:url|thumbnail|cover|poster|backdrop|blob|base64)/i.test(name)?undefined:value));}catch(_){return;}
 copy.cpSharedCatalog={schema:2,share:id,epoch,key,at,expires:at+CP_SHARED_CATALOG_TTL};
 if(copy.cpTargetDirectory)copy.cpTargetDirectory.expires=at+CP_SHARED_CATALOG_TTL;
 const chunks=cpSharedCatalogChunks(JSON.stringify(copy));
 if(!chunks)return;
 const slot=cpSharedCatalogSlot(key),records=cpSharedCatalogRecords();
 const retained=records.filter(entry=>entry.slot!==slot&&cpSharedCatalogExpires(entry)>at&&entry.epoch===cpSharedCatalogEpoch(state,entry.share)).sort((a,b)=>b.used-a.used);
 const discarded=records.filter(entry=>!retained.includes(entry));
 let occupied=new Set(retained.flatMap(entry=>entry.parts));
 while(CP_SHARED_CATALOG_COUNT-occupied.size<chunks.length){
  discarded.push(retained.pop());occupied=new Set(retained.flatMap(entry=>entry.parts));
 }
 // Remove old publication before replacing any body bytes. Partial writes
 // cannot retain an earlier successful observation of this directory.
 for(const entry of discarded){
  if(!cpSharedCatalogWrite('record:'+entry.slot,'')){cpSharedCatalogFenceBump(cpSharedCatalogShard(id));return;}
 }
 const parts=[];
 for(let offset=0;parts.length<chunks.length&&offset<CP_SHARED_CATALOG_COUNT;offset++){
  const part=(slot+offset)%CP_SHARED_CATALOG_COUNT;
  if(!occupied.has(part))parts.push(part);
 }
 const token=cpSharedCatalogNonce(),entry={key,share:id,epoch,at,expires:at+CP_SHARED_CATALOG_TTL,used:at,token,parts};
 for(let index=0;index<parts.length;index++){
  if(!cpSharedCatalogWrite('part:'+parts[index],token+'\n'+chunks[index])){cpSharedCatalogFenceBump(cpSharedCatalogShard(id));return;}
 }
 if(epoch!==cpSharedCatalogEpoch(cpSharedCatalogState(),id))return;
 const raw=JSON.stringify(entry);
 if(cpSharedCatalogBytes(raw)>CP_SHARED_CATALOG_META_BYTES||!cpSharedCatalogWrite('record:'+slot,raw)){cpSharedCatalogFenceBump(cpSharedCatalogShard(id));return;}
 // The independent descriptor is the publication point. Read its token and
 // fences again before granting the in-memory native catalog a shared clock.
 if(epoch===cpSharedCatalogEpoch(cpSharedCatalogState(),id)&&cpSharedCatalogRecord(slot)?.token===token){catalog.cpSharedCatalog={...copy.cpSharedCatalog,token};cpSharedCatalogObserve(catalog,undefined,share);}
}
const cpSharedTargetCachedNative=cpTargetCached;
cpTargetCached=function(catalog,params,titles){
 const stamp=catalog?.cpSharedCatalog;
 // Legacy native indexes have no trustworthy shared observation clock.
 if(!stamp&&cpSharedCatalogState())return null;
 if(stamp){
  const entry=cpSharedCatalogCurrent(catalog);if(!entry)return null;
  if(catalog.cpTargetDirectory)catalog={...catalog,cpTargetDirectory:{...catalog.cpTargetDirectory,expires:cpSharedCatalogExpires(entry)}};
 }
 const usable=cpSharedTargetCachedNative(catalog,params,titles);
 if(usable)cpSharedCatalogObserve(usable);return usable;
};
// The shared lookup above is the completed-catalog authority. Legacy native
// whole snapshots carry no reliable observation age once shared entries expire
// or are evicted; never promote them into a new successful-read lifetime. A targeted
// miss proceeds straight to the native directory reader, whose structural
// location hints still require fresh file pages. There is no second traversal.
// When shared storage cannot participate, retain the existing native fallback;
// admission is disabled in that case, so it cannot acquire a new shared clock.
const cpSharedWholeNative=cpTargetWholeCache;
cpTargetWholeCache=function(share){return cpSharedCatalogState()?null:cpSharedWholeNative(share);};
const cpSharedTargetReadNative=cpTargetRead;
const cpSharedInvalidateNative=typeof cpInvalidateCandidateShare==='function'?cpInvalidateCandidateShare:null;
const cpSharedObserved=new Map();
function cpSharedCatalogNativeInvalidate(share){
 if(cpSharedInvalidateNative)cpSharedInvalidateNative(share);
 else{cpLocationInvalidate(share);cpB8DiscardCatalog(cpIsNewPan(share.provider)?cpNewPanCatalogKey(share):qpShareCatalogKey(share));}
}
cpTargetRead=async function(params,share,titles=[],refresh=false){
 const context=cpLocationContext();cpLocationCheck(context);cpSharedCatalogPermission(share.provider);
 const id=cpSharedCatalogShare(share);let fresh=refresh||params?.refresh||params?.forceRefresh;
 if(fresh)cpSharedCatalogInvalidate(share);
 const state=cpSharedCatalogState(),before=cpSharedCatalogEpoch(state,id);
 if(!fresh){const cached=cpSharedCatalogGet(params,share,titles);if(cached){cpLocationCheck(context);return cached;}
  // A known share whose snapshot cannot prove this request (including expiry)
  // must refresh native caches as well. A partial listing is never an absence.
  fresh=!!state&&cpSharedCatalogRecords().some(entry=>entry.share===id);
 }
 if(fresh||before&&before!==cpSharedObserved.get(id)&&before!=='["0","0"]')cpSharedCatalogNativeInvalidate(share);
 cpSharedObserved.delete(id);cpSharedObserved.set(id,before);if(cpSharedObserved.size>CP_SHARED_CATALOG_COUNT)cpSharedObserved.delete(cpSharedObserved.keys().next().value);
 try{
  const input=fresh?{...params,forceRefresh:true}:params;
  const pending=cpSharedTargetReadNative(input,share,titles,!!fresh);
  // Native explicit refresh invalidates synchronously before dispatch.
  const epoch=cpSharedCatalogEpoch(cpSharedCatalogState(),id),catalog=await pending;
  cpLocationCheck(context);
  cpSharedCatalogPut(params,share,titles,catalog,context,epoch);return catalog;
 }catch(error){if(error?.code==='SHARE_EXPIRED')cpSharedCatalogCleanup(share);throw error;}
};
if(cpSharedInvalidateNative)cpInvalidateCandidateShare=function(share,...args){cpSharedCatalogInvalidate(share);return cpSharedInvalidateNative(share,...args);};
for(const name of ['cpClearCandidateCache','clearRexCatalogCache','clearHuajuanCache']){
 const native=name==='cpClearCandidateCache'?typeof cpClearCandidateCache==='function'&&cpClearCandidateCache:name==='clearRexCatalogCache'?typeof clearRexCatalogCache==='function'&&clearRexCatalogCache:typeof clearHuajuanCache==='function'&&clearHuajuanCache;
 if(!native)continue;const clear=function(...args){cpSharedCatalogInvalidate();return native(...args);};
 if(name==='cpClearCandidateCache')cpClearCandidateCache=clear;else if(name==='clearRexCatalogCache')clearRexCatalogCache=clear;else clearHuajuanCache=clear;
}
// Native Quanpan checks retain their own site/access provenance. Successful
// speculative readers can publish only after the foreground check accepts them.
const cpSharedCheckedNative=cpB8CheckedCatalog;
cpB8CheckedCatalog=async function(share,cached,site,keyword,params,titles=[]){
 const context=cpLocationContext();cpLocationCheck(context);cpSharedCatalogPermission(share.provider);
 const epoch=cpSharedCatalogEpoch(cpSharedCatalogState(),cpSharedCatalogShare(share));
 try{
  const result=await cpSharedCheckedNative(share,cached||cpSharedCatalogGet(params,share,titles),site,keyword,params,titles);cpLocationCheck(context);
  if(['bad','invalid','expired'].includes(result.checked?.validity))cpSharedCatalogInvalidate(share);
  else if(result.catalog)cpSharedCatalogPut(params,result.checked||share,titles,result.catalog,context,epoch);
  return result;
 }catch(error){if(error?.code==='SHARE_EXPIRED')cpSharedCatalogCleanup(share);throw error;}
};

// Direct detail browsing requests a completed whole share, independently of a
// title/episode selection. Targeted or speculative inputs remain owned by the
// foreground wrappers above and cannot publish ahead of native admission.
for(const name of ['rexShareCatalog','huajuanShareCatalog']){
 const native=name==='rexShareCatalog'?typeof rexShareCatalog==='function'&&rexShareCatalog:typeof huajuanShareCatalog==='function'&&huajuanShareCatalog;
 if(!native)continue;
 const read=async function(share,...args){
  if(share.cpTargetDirectory||share.cpB8ReadToken)return native(share,...args);
  const context=cpLocationContext();cpLocationCheck(context);cpSharedCatalogPermission(share.provider);
  const fresh=args[0]===true;if(fresh)cpSharedCatalogInvalidate(share);
  if(!fresh){const cached=cpSharedCatalogGet({},share,[]);if(cached){cpLocationCheck(context);return cached;}}
  // A shared-cache miss may still have a longer-lived native snapshot.
  // Discard that snapshot before reading a new complete catalog.
  if(cpSharedCatalogState())cpSharedCatalogNativeInvalidate(share);
  const epoch=cpSharedCatalogEpoch(cpSharedCatalogState(),cpSharedCatalogShare(share));
  try{const catalog=await native(share,...args);cpLocationCheck(context);cpSharedCatalogPut({},share,[],catalog,context,epoch);return catalog;}
  catch(error){if(error?.code==='SHARE_EXPIRED')cpSharedCatalogCleanup(share);throw error;}
 };
 if(name==='rexShareCatalog')rexShareCatalog=read;else huajuanShareCatalog=read;
}
if(typeof qpInvalidateShareCatalog==='function'){
 const native=qpInvalidateShareCatalog;qpInvalidateShareCatalog=function(share,...args){cpSharedCatalogInvalidate(share);return native(share,...args);};
}

// A directory lookup alone proves no current file availability. Carry exact
// successful file observations to the existing final playback boundary. The
// quota parent survives its closed video child, while canceled owners cannot
// reach this commit. Only small descriptor metadata changes on renewal.
const cpSharedCatalogResolveNative=cpPlaybackResolveInOwner;
cpPlaybackResolveInOwner=async function(info,issues,owner){
 const rows=await cpSharedCatalogResolveNative(info,issues,owner);
 cpResourceCheck(owner);
 const parent=owner?.moduleQuota?.parent||owner,video=info.videoInfo||{};
 if(!parent||!Array.isArray(rows)||!rows.some(row=>/^https?:\/\//i.test(row?.url||'')))return rows;
 const share={provider:info.provider||'quark',shareId:video.shareId,passcode:video.passcode||''};
 const id=cpSharedCatalogShare(share);
 const lease=video.cpCatalogLease;
 if(parent.manual&&lease?.identity===cpMatchingCatalogIdentity(share)){
  const entry=cpSharedCatalogCurrent({cpSharedCatalog:lease});
  if(entry?.token===lease.token&&entry.share===id){
   const catalog=cpSharedCatalogReadRecord(entry);
   if(cpSharedCatalogValid(catalog)&&cpSharedCatalogBindRecord(catalog,entry)&&
      cpSharedCatalogCurrent(catalog)?.token===entry.token)cpSharedCatalogObserve(catalog,entry);
  }
 }
 for(const {entry,catalog} of parent.catalogObservations?.values()||[]){
  if(entry.share!==id||!catalog.list.some(file=>String(file.fid)===String(video.fid)&&file.file_name===video.file_name))continue;
  const proofs=parent.catalogPlayback||(parent.catalogPlayback=[]);
  proofs.push({
   entry,share,identity:cpMatchingCatalogIdentity(share),urls:rows.map(row=>row.url),
   file:JSON.stringify([share.provider,String(video.shareId),String(video.fid)]),quota:owner.moduleQuota
  });
 }
 return rows;
};
const cpSharedCatalogCompleteNative=cpPlaybackComplete;
cpPlaybackComplete=async function(owner,rows){
 const result=await cpSharedCatalogCompleteNative(owner,rows);
 cpResourceCheck(owner);
 const urls=new Set(Array.isArray(result)?result.map(row=>row.url||row.videoUrl):[]),now=Date.now();
 for(const proof of owner.catalogPlayback||[]){
  const {entry,share,quota}=proof;
  if(!proof.urls.some(url=>urls.has(url))||quota?.rows.length&&!quota.shares.has(proof.file)||
     !cpDriveEnabled(share.provider)||cpBlockedProviders.has(share.provider)||
     owner.betaExpired?.has(JSON.stringify([share.provider,share.shareId]))||
     proof.identity!==cpMatchingCatalogIdentity(share))continue;
  const current=cpSharedCatalogRecord(entry.slot),state=cpSharedCatalogState();
  if(!current||current.token!==entry.token||current.key!==entry.key||current.epoch!==entry.epoch||
     !state||entry.epoch!==cpSharedCatalogEpoch(state,entry.share)||
     cpSharedCatalogExpires(current)<=now||now<=(current.verifiedAt??current.at))continue;
  cpResourceCheck(owner);
  const raw=JSON.stringify({...current,verifiedAt:now});
  if(cpSharedCatalogBytes(raw)<=CP_SHARED_CATALOG_META_BYTES)cpSharedCatalogWrite('record:'+entry.slot,raw);
 }
 delete owner.catalogPlayback;delete owner.catalogObservations;
 return result;
};
/* shared-catalog-v1:end */


/* CatPaw resource card names v1 */
// Display ordinals live only for this resource request; links and cache keys stay unchanged.
const cpCardOrdinals=new WeakMap();
function cpCardOrdinal(source,params){
 let groups=cpCardOrdinals.get(params);if(!groups){groups=new Map();cpCardOrdinals.set(params,groups);}
 const provider=source.provider||"quark",video=source.videoInfo||{};
 let group=groups.get(provider);if(!group){group={shares:new Map(),used:new Set()};groups.set(provider,group);}
 const explicit=/#\s*(\d+)\s*$/.exec(String(source.lineName||""));
 const key=String(video.shareId??video.shareid??video.share_id??video.fid??video.file_name??source.lineName??"");
 if(group.shares.has(key))return String(group.shares.get(key)).padStart(2,"0");
 let number=explicit?Number(explicit[1]):0;
 if(!Number.isSafeInteger(number)||number<1||group.used.has(number)){number=1;while(group.used.has(number))number++;}
 group.used.add(number);group.shares.set(key,number);return String(number).padStart(2,"0");
}
// Adapt only display labels to the core's historical size comparator.
const cpCardNativeSort=cpSortDisplayedResources;
cpSortDisplayedResources=function(rows){
 if(!Array.isArray(rows))return rows;
 const originals=new Map(),decorated=rows.map(row=>{
  const match=/^(\d+(?:\.\d+)?)\s*(GB|MB)\s*｜/i.exec(String(row?.name||""));
  const copy=Object.assign({},row,match?{name:"["+match[1]+" "+match[2]+"]"}:{});originals.set(copy,row);return copy;
 });
 return cpCardNativeSort(decorated).map(row=>originals.get(row));
};
function cpNameCard(result,resource,source,params){
 const v=source.videoInfo||{};
 const origin=resource.quality==="origin"||(!resource.quality&&/原画|直链/.test(resource.description||""));
 const transcode=resource.quality==="transcode"||/转码/.test(resource.description||"");
 const size=cpSize(resource.sizeBytes!=null?resource.sizeBytes:origin||transcode?v.size:0);
 const provider={quark:"夸克",baidu:"百度",uc:"UC","115":"115","123":"123",xunlei:"迅雷",guangya:"光鸭",yidong:"移动",tianyi:"天翼云盘"}[source.provider||"quark"]||"网盘";
 const quality=resource.quality==="preview"?"预览":origin?"原画":resource.quality==="transcode"||/转码/.test(resource.description||"")?"极速":"";
 const range=origin?cpMediaInfo(v.file_name).dynamicRange:null;
 // Rex also detects resolution in names; keep it out so configured groups win.
 result.name=(size?size+" ｜":"")+[provider+quality+" # "+cpCardOrdinal(source,params),range].filter(Boolean).join(" · ");
 return result;
}
const cpCardFormatNative=formatPlaybackResource;
formatPlaybackResource=function(resource,source,params){return cpNameCard(cpCardFormatNative(resource,source,params),resource,source,params);};
/* End CatPaw resource card names v1 */
return (function createNetdiskAdapter(options) {
 qpCheckShares=async function(shares){return shares.map(share=>Object.assign({},share,{validity:'uncertain'}));};
 // Website checks belong to the discovery adapter. Drive APIs validate shares.
 getSite=()=>options.site;

 return {bind:params=>bindForwardParams(params),enabled:provider=>quanpanProviderEnabled(provider),matchesSiteTitle:(title,params)=>cpSearchResultMatches(title,params),prepareDirectoryIdentity:(year,params)=>cpSiteYearMatches(year,params),parseShare:entry=>qpShare(entry),encode:value=>encodeLink(value),
 decode:link=>decodeLink(link),isLink:link=>typeof link==='string'&&link.startsWith(options.linkPrefix),candidateLimit:()=>qpCandidateLimit(),
 loadDetail:async link=>{
  const info=decodeLink(link);
  if(info?.action!=='play')return loadDetail(link);
  const resources=await loadResource({link});
  const items=resources.filter(r=>r.url).map(resource=>Object.assign({},resource,{
   type:'url',title:info.title,mediaType:info.mediaType||'tv',link,
   videoUrl:resource.url,headers:resource.headers||resource.customHeaders
  }));
  if(!items.length)throw new Error('未能获取播放资源，请更换资源或检查网盘账号');
  return items;
 },
 owner:()=>cpResourceOwner,
 request:(spec,request,owner=null)=>{cpResourceCheck(owner);return cpResourceAwait(owner,request(owner?Object.assign({},spec,{timeoutMs:Math.max(1,Math.min(spec.timeoutMs,owner.deadline-Date.now()))}):spec));},
 loadResource:(params,site)=>{
  if(site&&(cpRequestedYear(params).conflict||!cpRelevanceTitles(params).length||params.type!=='movie'&&(!Number.isSafeInteger(Number(params.season??1))||Number(params.season??1)<1||!Number.isSafeInteger(Number(params.episode))||Number(params.episode)<1)))return Promise.resolve([]);
  return loadResource(site?Object.assign({},params,{cpSiteSearch:site.search,cpSiteRead:site.read,cpSiteIdentity:site.identity}):params);
 },clear:()=>clearRexCatalogCache()};
})({"linkPrefix":"seedpan:","site":"https://hubdog.cc"});
})();
var SeedDiscovery=(()=>{var Mp=Object.create;var vu=Object.defineProperty;var jp=Object.getOwnPropertyDescriptor;var Hp=Object.getOwnPropertyNames;var Vp=Object.getPrototypeOf,Gp=Object.prototype.hasOwnProperty;var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Be=(e,t)=>{for(var r in t)vu(e,r,{get:t[r],enumerable:!0})},Lo=(e,t,r,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Hp(t))!Gp.call(e,n)&&n!==r&&vu(e,n,{get:()=>t[n],enumerable:!(u=jp(t,n))||u.enumerable});return e};var Ne=(e,t,r)=>(r=e!=null?Mp(Vp(e)):{},Lo(t||!e||!e.__esModule?vu(r,"default",{value:e,enumerable:!0}):r,e)),$p=e=>Lo(vu({},"__esModule",{value:!0}),e);var ne=b((Wv,Oo)=>{"use strict";Oo.exports=function(e){try{return!!e()}catch{return!0}}});var xr=b((Jv,Do)=>{"use strict";var zp=ne();Do.exports=!zp(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var J=b((Kv,Fo)=>{"use strict";var Po=xr(),Uo=Function.prototype,bi=Uo.call,Wp=Po&&Uo.bind.bind(bi,bi);Fo.exports=Po?Wp:function(e){return function(){return bi.apply(e,arguments)}}});var wu=b((Yv,Mo)=>{"use strict";var Bo=J(),Jp=Bo({}.toString),Kp=Bo("".slice);Mo.exports=function(e){return Kp(Jp(e),8,-1)}});var gi=b((Xv,jo)=>{"use strict";var Yp=J(),Xp=ne(),Qp=wu(),xi=Object,Zp=Yp("".split);jo.exports=Xp(function(){return!xi("z").propertyIsEnumerable(0)})?function(e){return Qp(e)==="String"?Zp(e,""):xi(e)}:xi});var Au=b((Qv,Ho)=>{"use strict";Ho.exports=function(e){return e==null}});var gr=b((Zv,Vo)=>{"use strict";var e2=Au(),t2=TypeError;Vo.exports=function(e){if(e2(e))throw new t2("Can't call method on "+e);return e}});var _t=b((e5,Go)=>{"use strict";var r2=gi(),u2=gr();Go.exports=function(e){return r2(u2(e))}});var zo=b((t5,$o)=>{"use strict";$o.exports=function(){}});var dt=b((r5,Wo)=>{"use strict";Wo.exports={}});var Q=b((mi,Jo)=>{"use strict";var mr=function(e){return e&&e.Math===Math&&e};Jo.exports=mr(typeof globalThis=="object"&&globalThis)||mr(typeof window=="object"&&window)||mr(typeof self=="object"&&self)||mr(typeof global=="object"&&global)||mr(typeof mi=="object"&&mi)||(function(){return this})()||Function("return this")()});var Z=b((u5,Ko)=>{"use strict";var yi=typeof document=="object"&&document.all;Ko.exports=typeof yi>"u"&&yi!==void 0?function(e){return typeof e=="function"||e===yi}:function(e){return typeof e=="function"}});var Qo=b((n5,Xo)=>{"use strict";var n2=Q(),i2=Z(),Yo=n2.WeakMap;Xo.exports=i2(Yo)&&/native code/.test(String(Yo))});var Ce=b((i5,Zo)=>{"use strict";var s2=Z();Zo.exports=function(e){return typeof e=="object"?e!==null:s2(e)}});var te=b((s5,e0)=>{"use strict";var a2=ne();e0.exports=!a2(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var wi=b((a5,r0)=>{"use strict";var o2=Q(),t0=Ce(),vi=o2.document,c2=t0(vi)&&t0(vi.createElement);r0.exports=function(e){return c2?vi.createElement(e):{}}});var Ai=b((o5,u0)=>{"use strict";var f2=te(),l2=ne(),d2=wi();u0.exports=!f2&&!l2(function(){return Object.defineProperty(d2("div"),"a",{get:function(){return 7}}).a!==7})});var Si=b((c5,n0)=>{"use strict";var h2=te(),p2=ne();n0.exports=h2&&p2(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Ke=b((f5,i0)=>{"use strict";var b2=Ce(),x2=String,g2=TypeError;i0.exports=function(e){if(b2(e))return e;throw new g2(x2(e)+" is not an object")}});var Oe=b((l5,s0)=>{"use strict";var m2=xr(),Su=Function.prototype.call;s0.exports=m2?Su.bind(Su):function(){return Su.apply(Su,arguments)}});var yr=b((d5,a0)=>{"use strict";a0.exports={}});var ht=b((h5,c0)=>{"use strict";var Ei=yr(),Ti=Q(),y2=Z(),o0=function(e){return y2(e)?e:void 0};c0.exports=function(e,t){return arguments.length<2?o0(Ei[e])||o0(Ti[e]):Ei[e]&&Ei[e][t]||Ti[e]&&Ti[e][t]}});var _i=b((p5,f0)=>{"use strict";var v2=J();f0.exports=v2({}.isPrototypeOf)});var p0=b((b5,h0)=>{"use strict";var w2=Q(),l0=w2.navigator,d0=l0&&l0.userAgent;h0.exports=d0?String(d0):""});var w0=b((x5,v0)=>{"use strict";var y0=Q(),Ii=p0(),b0=y0.process,x0=y0.Deno,g0=b0&&b0.versions||x0&&x0.version,m0=g0&&g0.v8,Ae,Eu;m0&&(Ae=m0.split("."),Eu=Ae[0]>0&&Ae[0]<4?1:+(Ae[0]+Ae[1]));!Eu&&Ii&&(Ae=Ii.match(/Edge\/(\d+)/),(!Ae||Ae[1]>=74)&&(Ae=Ii.match(/Chrome\/(\d+)/),Ae&&(Eu=+Ae[1])));v0.exports=Eu});var qi=b((g5,S0)=>{"use strict";var A0=w0(),A2=ne(),S2=Q(),E2=S2.String;S0.exports=!!Object.getOwnPropertySymbols&&!A2(function(){var e=Symbol("symbol detection");return!E2(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&A0&&A0<41})});var Ri=b((m5,E0)=>{"use strict";var T2=qi();E0.exports=T2&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var ki=b((y5,T0)=>{"use strict";var _2=ht(),I2=Z(),q2=_i(),R2=Ri(),k2=Object;T0.exports=R2?function(e){return typeof e=="symbol"}:function(e){var t=_2("Symbol");return I2(t)&&q2(t.prototype,k2(e))}});var Li=b((v5,_0)=>{"use strict";var L2=String;_0.exports=function(e){try{return L2(e)}catch{return"Object"}}});var vr=b((w5,I0)=>{"use strict";var N2=Z(),C2=Li(),O2=TypeError;I0.exports=function(e){if(N2(e))return e;throw new O2(C2(e)+" is not a function")}});var Tu=b((A5,q0)=>{"use strict";var D2=vr(),P2=Au();q0.exports=function(e,t){var r=e[t];return P2(r)?void 0:D2(r)}});var k0=b((S5,R0)=>{"use strict";var Ni=Oe(),Ci=Z(),Oi=Ce(),U2=TypeError;R0.exports=function(e,t){var r,u;if(t==="string"&&Ci(r=e.toString)&&!Oi(u=Ni(r,e))||Ci(r=e.valueOf)&&!Oi(u=Ni(r,e))||t!=="string"&&Ci(r=e.toString)&&!Oi(u=Ni(r,e)))return u;throw new U2("Can't convert object to primitive value")}});var It=b((E5,L0)=>{"use strict";L0.exports=!0});var O0=b((T5,C0)=>{"use strict";var N0=Q(),F2=Object.defineProperty;C0.exports=function(e,t){try{F2(N0,e,{value:t,configurable:!0,writable:!0})}catch{N0[e]=t}return t}});var wr=b((_5,U0)=>{"use strict";var B2=It(),M2=Q(),j2=O0(),D0="__core-js_shared__",P0=U0.exports=M2[D0]||j2(D0,{});(P0.versions||(P0.versions=[])).push({version:"3.46.0",mode:B2?"pure":"global",copyright:"\xA9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Di=b((I5,B0)=>{"use strict";var F0=wr();B0.exports=function(e,t){return F0[e]||(F0[e]=t||{})}});var Ar=b((q5,M0)=>{"use strict";var H2=gr(),V2=Object;M0.exports=function(e){return V2(H2(e))}});var Se=b((R5,j0)=>{"use strict";var G2=J(),$2=Ar(),z2=G2({}.hasOwnProperty);j0.exports=Object.hasOwn||function(t,r){return z2($2(t),r)}});var Pi=b((k5,H0)=>{"use strict";var W2=J(),J2=0,K2=Math.random(),Y2=W2(1.1.toString);H0.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+Y2(++J2+K2,36)}});var Ee=b((L5,G0)=>{"use strict";var X2=Q(),Q2=Di(),V0=Se(),Z2=Pi(),eb=qi(),tb=Ri(),qt=X2.Symbol,Ui=Q2("wks"),rb=tb?qt.for||qt:qt&&qt.withoutSetter||Z2;G0.exports=function(e){return V0(Ui,e)||(Ui[e]=eb&&V0(qt,e)?qt[e]:rb("Symbol."+e)),Ui[e]}});var J0=b((N5,W0)=>{"use strict";var ub=Oe(),$0=Ce(),z0=ki(),nb=Tu(),ib=k0(),sb=Ee(),ab=TypeError,ob=sb("toPrimitive");W0.exports=function(e,t){if(!$0(e)||z0(e))return e;var r=nb(e,ob),u;if(r){if(t===void 0&&(t="default"),u=ub(r,e,t),!$0(u)||z0(u))return u;throw new ab("Can't convert object to primitive value")}return t===void 0&&(t="number"),ib(e,t)}});var Fi=b((C5,K0)=>{"use strict";var cb=J0(),fb=ki();K0.exports=function(e){var t=cb(e,"string");return fb(t)?t:t+""}});var pt=b(X0=>{"use strict";var lb=te(),db=Ai(),hb=Si(),_u=Ke(),Y0=Fi(),pb=TypeError,Bi=Object.defineProperty,bb=Object.getOwnPropertyDescriptor,Mi="enumerable",ji="configurable",Hi="writable";X0.f=lb?hb?function(t,r,u){if(_u(t),r=Y0(r),_u(u),typeof t=="function"&&r==="prototype"&&"value"in u&&Hi in u&&!u[Hi]){var n=bb(t,r);n&&n[Hi]&&(t[r]=u.value,u={configurable:ji in u?u[ji]:n[ji],enumerable:Mi in u?u[Mi]:n[Mi],writable:!1})}return Bi(t,r,u)}:Bi:function(t,r,u){if(_u(t),r=Y0(r),_u(u),db)try{return Bi(t,r,u)}catch{}if("get"in u||"set"in u)throw new pb("Accessors not supported");return"value"in u&&(t[r]=u.value),t}});var Rt=b((D5,Q0)=>{"use strict";Q0.exports=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}}});var kt=b((P5,Z0)=>{"use strict";var xb=te(),gb=pt(),mb=Rt();Z0.exports=xb?function(e,t,r){return gb.f(e,t,mb(1,r))}:function(e,t,r){return e[t]=r,e}});var Iu=b((U5,tc)=>{"use strict";var yb=Di(),vb=Pi(),ec=yb("keys");tc.exports=function(e){return ec[e]||(ec[e]=vb(e))}});var qu=b((F5,rc)=>{"use strict";rc.exports={}});var Er=b((B5,ic)=>{"use strict";var wb=Qo(),nc=Q(),Ab=Ce(),Sb=kt(),Vi=Se(),Gi=wr(),Eb=Iu(),Tb=qu(),uc="Object already initialized",$i=nc.TypeError,_b=nc.WeakMap,Ru,Sr,ku,Ib=function(e){return ku(e)?Sr(e):Ru(e,{})},qb=function(e){return function(t){var r;if(!Ab(t)||(r=Sr(t)).type!==e)throw new $i("Incompatible receiver, "+e+" required");return r}};wb||Gi.state?(Te=Gi.state||(Gi.state=new _b),Te.get=Te.get,Te.has=Te.has,Te.set=Te.set,Ru=function(e,t){if(Te.has(e))throw new $i(uc);return t.facade=e,Te.set(e,t),t},Sr=function(e){return Te.get(e)||{}},ku=function(e){return Te.has(e)}):(bt=Eb("state"),Tb[bt]=!0,Ru=function(e,t){if(Vi(e,bt))throw new $i(uc);return t.facade=e,Sb(e,bt,t),t},Sr=function(e){return Vi(e,bt)?e[bt]:{}},ku=function(e){return Vi(e,bt)});var Te,bt;ic.exports={set:Ru,get:Sr,has:ku,enforce:Ib,getterFor:qb}});var fc=b((M5,cc)=>{"use strict";var Rb=xr(),oc=Function.prototype,sc=oc.apply,ac=oc.call;cc.exports=typeof Reflect=="object"&&Reflect.apply||(Rb?ac.bind(sc):function(){return ac.apply(sc,arguments)})});var zi=b((j5,lc)=>{"use strict";var kb=wu(),Lb=J();lc.exports=function(e){if(kb(e)==="Function")return Lb(e)}});var Wi=b(pc=>{"use strict";var dc={}.propertyIsEnumerable,hc=Object.getOwnPropertyDescriptor,Nb=hc&&!dc.call({1:2},1);pc.f=Nb?function(t){var r=hc(this,t);return!!r&&r.enumerable}:dc});var gc=b(xc=>{"use strict";var Cb=te(),Ob=Oe(),Db=Wi(),Pb=Rt(),Ub=_t(),Fb=Fi(),Bb=Se(),Mb=Ai(),bc=Object.getOwnPropertyDescriptor;xc.f=Cb?bc:function(t,r){if(t=Ub(t),r=Fb(r),Mb)try{return bc(t,r)}catch{}if(Bb(t,r))return Pb(!Ob(Db.f,t,r),t[r])}});var yc=b((G5,mc)=>{"use strict";var jb=ne(),Hb=Z(),Vb=/#|\.prototype\./,Tr=function(e,t){var r=$b[Gb(e)];return r===Wb?!0:r===zb?!1:Hb(t)?jb(t):!!t},Gb=Tr.normalize=function(e){return String(e).replace(Vb,".").toLowerCase()},$b=Tr.data={},zb=Tr.NATIVE="N",Wb=Tr.POLYFILL="P";mc.exports=Tr});var _r=b(($5,wc)=>{"use strict";var vc=zi(),Jb=vr(),Kb=xr(),Yb=vc(vc.bind);wc.exports=function(e,t){return Jb(e),t===void 0?e:Kb?Yb(e,t):function(){return e.apply(t,arguments)}}});var xt=b((z5,Sc)=>{"use strict";var Ir=Q(),Xb=fc(),Qb=zi(),Zb=Z(),ex=gc().f,tx=yc(),Lt=yr(),rx=_r(),Nt=kt(),Ac=Se();wr();var ux=function(e){var t=function(r,u,n){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,u)}return new e(r,u,n)}return Xb(e,this,arguments)};return t.prototype=e.prototype,t};Sc.exports=function(e,t){var r=e.target,u=e.global,n=e.stat,i=e.proto,s=u?Ir:n?Ir[r]:Ir[r]&&Ir[r].prototype,a=u?Lt:Lt[r]||Nt(Lt,r,{})[r],o=a.prototype,c,l,f,h,d,p,x,S,m;for(h in t)c=tx(u?h:r+(n?".":"#")+h,e.forced),l=!c&&s&&Ac(s,h),p=a[h],l&&(e.dontCallGetSet?(m=ex(s,h),x=m&&m.value):x=s[h]),d=l&&x?x:t[h],!(!c&&!i&&typeof p==typeof d)&&(e.bind&&l?S=rx(d,Ir):e.wrap&&l?S=ux(d):i&&Zb(d)?S=Qb(d):S=d,(e.sham||d&&d.sham||p&&p.sham)&&Nt(S,"sham",!0),Nt(a,h,S),i&&(f=r+"Prototype",Ac(Lt,f)||Nt(Lt,f,{}),Nt(Lt[f],h,d),e.real&&o&&(c||!o[h])&&Nt(o,h,d)))}});var _c=b((W5,Tc)=>{"use strict";var Ji=te(),nx=Se(),Ec=Function.prototype,ix=Ji&&Object.getOwnPropertyDescriptor,Ki=nx(Ec,"name"),sx=Ki&&(function(){}).name==="something",ax=Ki&&(!Ji||Ji&&ix(Ec,"name").configurable);Tc.exports={EXISTS:Ki,PROPER:sx,CONFIGURABLE:ax}});var qc=b((J5,Ic)=>{"use strict";var ox=Math.ceil,cx=Math.floor;Ic.exports=Math.trunc||function(t){var r=+t;return(r>0?cx:ox)(r)}});var Lu=b((K5,Rc)=>{"use strict";var fx=qc();Rc.exports=function(e){var t=+e;return t!==t||t===0?0:fx(t)}});var Yi=b((Y5,kc)=>{"use strict";var lx=Lu(),dx=Math.max,hx=Math.min;kc.exports=function(e,t){var r=lx(e);return r<0?dx(r+t,0):hx(r,t)}});var Nc=b((X5,Lc)=>{"use strict";var px=Lu(),bx=Math.min;Lc.exports=function(e){var t=px(e);return t>0?bx(t,9007199254740991):0}});var Xi=b((Q5,Cc)=>{"use strict";var xx=Nc();Cc.exports=function(e){return xx(e.length)}});var Pc=b((Z5,Dc)=>{"use strict";var gx=_t(),mx=Yi(),yx=Xi(),Oc=function(e){return function(t,r,u){var n=gx(t),i=yx(n);if(i===0)return!e&&-1;var s=mx(u,i),a;if(e&&r!==r){for(;i>s;)if(a=n[s++],a!==a)return!0}else for(;i>s;s++)if((e||s in n)&&n[s]===r)return e||s||0;return!e&&-1}};Dc.exports={includes:Oc(!0),indexOf:Oc(!1)}});var Bc=b((ew,Fc)=>{"use strict";var vx=J(),Qi=Se(),wx=_t(),Ax=Pc().indexOf,Sx=qu(),Uc=vx([].push);Fc.exports=function(e,t){var r=wx(e),u=0,n=[],i;for(i in r)!Qi(Sx,i)&&Qi(r,i)&&Uc(n,i);for(;t.length>u;)Qi(r,i=t[u++])&&(~Ax(n,i)||Uc(n,i));return n}});var Zi=b((tw,Mc)=>{"use strict";Mc.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var es=b((rw,jc)=>{"use strict";var Ex=Bc(),Tx=Zi();jc.exports=Object.keys||function(t){return Ex(t,Tx)}});var Vc=b(Hc=>{"use strict";var _x=te(),Ix=Si(),qx=pt(),Rx=Ke(),kx=_t(),Lx=es();Hc.f=_x&&!Ix?Object.defineProperties:function(t,r){Rx(t);for(var u=kx(r),n=Lx(r),i=n.length,s=0,a;i>s;)qx.f(t,a=n[s++],u[a]);return t}});var $c=b((nw,Gc)=>{"use strict";var Nx=ht();Gc.exports=Nx("document","documentElement")});var Ou=b((iw,Qc)=>{"use strict";var Cx=Ke(),Ox=Vc(),zc=Zi(),Dx=qu(),Px=$c(),Ux=wi(),Fx=Iu(),Wc=">",Jc="<",rs="prototype",us="script",Yc=Fx("IE_PROTO"),ts=function(){},Xc=function(e){return Jc+us+Wc+e+Jc+"/"+us+Wc},Kc=function(e){e.write(Xc("")),e.close();var t=e.parentWindow.Object;return e=null,t},Bx=function(){var e=Ux("iframe"),t="java"+us+":",r;return e.style.display="none",Px.appendChild(e),e.src=String(t),r=e.contentWindow.document,r.open(),r.write(Xc("document.F=Object")),r.close(),r.F},Nu,Cu=function(){try{Nu=new ActiveXObject("htmlfile")}catch{}Cu=typeof document<"u"?document.domain&&Nu?Kc(Nu):Bx():Kc(Nu);for(var e=zc.length;e--;)delete Cu[rs][zc[e]];return Cu()};Dx[Yc]=!0;Qc.exports=Object.create||function(t,r){var u;return t!==null?(ts[rs]=Cx(t),u=new ts,ts[rs]=null,u[Yc]=t):u=Cu(),r===void 0?u:Ox.f(u,r)}});var ef=b((sw,Zc)=>{"use strict";var Mx=ne();Zc.exports=!Mx(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var is=b((aw,rf)=>{"use strict";var jx=Se(),Hx=Z(),Vx=Ar(),Gx=Iu(),$x=ef(),tf=Gx("IE_PROTO"),ns=Object,zx=ns.prototype;rf.exports=$x?ns.getPrototypeOf:function(e){var t=Vx(e);if(jx(t,tf))return t[tf];var r=t.constructor;return Hx(r)&&t instanceof r?r.prototype:t instanceof ns?zx:null}});var Ct=b((ow,uf)=>{"use strict";var Wx=kt();uf.exports=function(e,t,r,u){return u&&u.enumerable?e[t]=r:Wx(e,t,r),e}});var cs=b((cw,af)=>{"use strict";var Jx=ne(),Kx=Z(),Yx=Ce(),Xx=Ou(),nf=is(),Qx=Ct(),Zx=Ee(),eg=It(),os=Zx("iterator"),sf=!1,Me,ss,as;[].keys&&(as=[].keys(),"next"in as?(ss=nf(nf(as)),ss!==Object.prototype&&(Me=ss)):sf=!0);var tg=!Yx(Me)||Jx(function(){var e={};return Me[os].call(e)!==e});tg?Me={}:eg&&(Me=Xx(Me));Kx(Me[os])||Qx(Me,os,function(){return this});af.exports={IteratorPrototype:Me,BUGGY_SAFARI_ITERATORS:sf}});var Du=b((fw,cf)=>{"use strict";var rg=Ee(),ug=rg("toStringTag"),of={};of[ug]="z";cf.exports=String(of)==="[object z]"});var Ot=b((lw,ff)=>{"use strict";var ng=Du(),ig=Z(),Pu=wu(),sg=Ee(),ag=sg("toStringTag"),og=Object,cg=Pu((function(){return arguments})())==="Arguments",fg=function(e,t){try{return e[t]}catch{}};ff.exports=ng?Pu:function(e){var t,r,u;return e===void 0?"Undefined":e===null?"Null":typeof(r=fg(t=og(e),ag))=="string"?r:cg?Pu(t):(u=Pu(t))==="Object"&&ig(t.callee)?"Arguments":u}});var df=b((dw,lf)=>{"use strict";var lg=Du(),dg=Ot();lf.exports=lg?{}.toString:function(){return"[object "+dg(this)+"]"}});var Dt=b((hw,pf)=>{"use strict";var hg=Du(),pg=pt().f,bg=kt(),xg=Se(),gg=df(),mg=Ee(),hf=mg("toStringTag");pf.exports=function(e,t,r,u){var n=r?e:e&&e.prototype;n&&(xg(n,hf)||pg(n,hf,{configurable:!0,value:t}),u&&!hg&&bg(n,"toString",gg))}});var fs=b((pw,bf)=>{"use strict";var yg=cs().IteratorPrototype,vg=Ou(),wg=Rt(),Ag=Dt(),Sg=dt(),Eg=function(){return this};bf.exports=function(e,t,r,u){var n=t+" Iterator";return e.prototype=vg(yg,{next:wg(+!u,r)}),Ag(e,n,!1,!0),Sg[n]=Eg,e}});var gf=b((bw,xf)=>{"use strict";var Tg=J(),_g=vr();xf.exports=function(e,t,r){try{return Tg(_g(Object.getOwnPropertyDescriptor(e,t)[r]))}catch{}}});var yf=b((xw,mf)=>{"use strict";var Ig=Ce();mf.exports=function(e){return Ig(e)||e===null}});var wf=b((gw,vf)=>{"use strict";var qg=yf(),Rg=String,kg=TypeError;vf.exports=function(e){if(qg(e))return e;throw new kg("Can't set "+Rg(e)+" as a prototype")}});var Sf=b((mw,Af)=>{"use strict";var Lg=gf(),Ng=Ce(),Cg=gr(),Og=wf();Af.exports=Object.setPrototypeOf||("__proto__"in{}?(function(){var e=!1,t={},r;try{r=Lg(Object.prototype,"__proto__","set"),r(t,[]),e=t instanceof Array}catch{}return function(n,i){return Cg(n),Og(i),Ng(n)&&(e?r(n,i):n.__proto__=i),n}})():void 0)});var ds=b((yw,Cf)=>{"use strict";var Dg=xt(),Pg=Oe(),Uu=It(),Lf=_c(),Ug=Z(),Fg=fs(),Ef=is(),Tf=Sf(),Bg=Dt(),Mg=kt(),ls=Ct(),jg=Ee(),_f=dt(),Nf=cs(),Hg=Lf.PROPER,Vg=Lf.CONFIGURABLE,If=Nf.IteratorPrototype,Fu=Nf.BUGGY_SAFARI_ITERATORS,qr=jg("iterator"),qf="keys",Rr="values",Rf="entries",kf=function(){return this};Cf.exports=function(e,t,r,u,n,i,s){Fg(r,t,u);var a=function(m){if(m===n&&h)return h;if(!Fu&&m&&m in l)return l[m];switch(m){case qf:return function(){return new r(this,m)};case Rr:return function(){return new r(this,m)};case Rf:return function(){return new r(this,m)}}return function(){return new r(this)}},o=t+" Iterator",c=!1,l=e.prototype,f=l[qr]||l["@@iterator"]||n&&l[n],h=!Fu&&f||a(n),d=t==="Array"&&l.entries||f,p,x,S;if(d&&(p=Ef(d.call(new e)),p!==Object.prototype&&p.next&&(!Uu&&Ef(p)!==If&&(Tf?Tf(p,If):Ug(p[qr])||ls(p,qr,kf)),Bg(p,o,!0,!0),Uu&&(_f[o]=kf))),Hg&&n===Rr&&f&&f.name!==Rr&&(!Uu&&Vg?Mg(l,"name",Rr):(c=!0,h=function(){return Pg(f,this)})),n)if(x={values:a(Rr),keys:i?h:a(qf),entries:a(Rf)},s)for(S in x)(Fu||c||!(S in l))&&ls(l,S,x[S]);else Dg({target:t,proto:!0,forced:Fu||c},x);return(!Uu||s)&&l[qr]!==h&&ls(l,qr,h,{name:n}),_f[t]=h,x}});var Bu=b((vw,Of)=>{"use strict";Of.exports=function(e,t){return{value:e,done:t}}});var ps=b((ww,Bf)=>{"use strict";var Gg=_t(),hs=zo(),Df=dt(),Uf=Er(),$g=pt().f,zg=ds(),Mu=Bu(),Wg=It(),Jg=te(),Ff="Array Iterator",Kg=Uf.set,Yg=Uf.getterFor(Ff);Bf.exports=zg(Array,"Array",function(e,t){Kg(this,{type:Ff,target:Gg(e),index:0,kind:t})},function(){var e=Yg(this),t=e.target,r=e.index++;if(!t||r>=t.length)return e.target=null,Mu(void 0,!0);switch(e.kind){case"keys":return Mu(r,!1);case"values":return Mu(t[r],!1)}return Mu([r,t[r]],!1)},"values");var Pf=Df.Arguments=Df.Array;hs("keys");hs("values");hs("entries");if(!Wg&&Jg&&Pf.name!=="values")try{$g(Pf,"name",{value:"values"})}catch{}});var Hf=b(()=>{"use strict";var Xg=xt(),Qg=J(),Zg=Yi(),e3=RangeError,Mf=String.fromCharCode,jf=String.fromCodePoint,t3=Qg([].join),r3=!!jf&&jf.length!==1;Xg({target:"String",stat:!0,arity:1,forced:r3},{fromCodePoint:function(t){for(var r=[],u=arguments.length,n=0,i;u>n;){if(i=+arguments[n++],Zg(i,1114111)!==i)throw new e3(i+" is not a valid code point");r[n]=i<65536?Mf(i):Mf(((i-=65536)>>10)+55296,i%1024+56320)}return t3(r,"")}})});var $f=b((Ew,Gf)=>{"use strict";var Vf=Q(),u3=te(),n3=Object.getOwnPropertyDescriptor;Gf.exports=function(e){if(!u3)return Vf[e];var t=n3(Vf,e);return t&&t.value}});var kr=b((Tw,Wf)=>{"use strict";var i3=ne(),s3=Ee(),a3=te(),zf=It(),o3=s3("iterator");Wf.exports=!i3(function(){var e=new URL("b?a=1&b=2&c=3","https://a"),t=e.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),u="";return e.pathname="c%20d",t.forEach(function(n,i){t.delete("b"),u+=i+n}),r.delete("a",2),r.delete("b",void 0),zf&&(!e.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!t.size&&(zf||!a3)||!t.sort||e.href!=="https://a/c%20d?a=1&c=3"||t.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!t[o3]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("https://\u0442\u0435\u0441\u0442").host!=="xn--e1aybc"||new URL("https://a#\u0431").hash!=="#%D0%B1"||u!=="a1c3"||new URL("https://x",void 0).host!=="x"})});var bs=b((_w,Jf)=>{"use strict";var c3=pt();Jf.exports=function(e,t,r){return c3.f(e,t,r)}});var Yf=b((Iw,Kf)=>{"use strict";var f3=Ct();Kf.exports=function(e,t,r){for(var u in t)r&&r.unsafe&&e[u]?e[u]=t[u]:f3(e,u,t[u],r);return e}});var xs=b((qw,Xf)=>{"use strict";var l3=_i(),d3=TypeError;Xf.exports=function(e,t){if(l3(t,e))return e;throw new d3("Incorrect invocation")}});var gt=b((Rw,Qf)=>{"use strict";var h3=Ot(),p3=String;Qf.exports=function(e){if(h3(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return p3(e)}});var ju=b((kw,el)=>{"use strict";var b3=Ot(),Zf=Tu(),x3=Au(),g3=dt(),m3=Ee(),y3=m3("iterator");el.exports=function(e){if(!x3(e))return Zf(e,y3)||Zf(e,"@@iterator")||g3[b3(e)]}});var gs=b((Lw,tl)=>{"use strict";var v3=Oe(),w3=vr(),A3=Ke(),S3=Li(),E3=ju(),T3=TypeError;tl.exports=function(e,t){var r=arguments.length<2?E3(e):t;if(w3(r))return A3(v3(r,e));throw new T3(S3(e)+" is not iterable")}});var Lr=b((Nw,rl)=>{"use strict";var _3=TypeError;rl.exports=function(e,t){if(e<t)throw new _3("Not enough arguments");return e}});var ms=b((Cw,ul)=>{"use strict";var I3=J();ul.exports=I3([].slice)});var sl=b((Ow,il)=>{"use strict";var nl=ms(),q3=Math.floor,ys=function(e,t){var r=e.length;if(r<8)for(var u=1,n,i;u<r;){for(i=u,n=e[u];i&&t(e[i-1],n)>0;)e[i]=e[--i];i!==u++&&(e[i]=n)}else for(var s=q3(r/2),a=ys(nl(e,0,s),t),o=ys(nl(e,s),t),c=a.length,l=o.length,f=0,h=0;f<c||h<l;)e[f+h]=f<c&&h<l?t(a[f],o[h])<=0?a[f++]:o[h++]:f<c?a[f++]:o[h++];return e};il.exports=ys});var qs=b((Dw,Rl)=>{"use strict";ps();Hf();var Ts=xt(),yl=Q(),_s=$f(),R3=ht(),Hu=Oe(),_e=J(),Nr=te(),vl=kr(),wl=Ct(),k3=bs(),L3=Yf(),N3=Dt(),C3=fs(),Is=Er(),Al=xs(),vs=Z(),O3=Se(),D3=_r(),P3=Ot(),U3=Ke(),Sl=Ce(),re=gt(),F3=Ou(),al=Rt(),ol=gs(),B3=ju(),Vu=Bu(),Pt=Lr(),M3=Ee(),j3=sl(),H3=M3("iterator"),Ft="URLSearchParams",El=Ft+"Iterator",Tl=Is.set,ce=Is.getterFor(Ft),V3=Is.getterFor(El),cl=_s("fetch"),zu=_s("Request"),Cr=_s("Headers"),ws=zu&&zu.prototype,fl=Cr&&Cr.prototype,G3=yl.TypeError,$3=yl.encodeURIComponent,z3=String.fromCharCode,W3=R3("String","fromCodePoint"),J3=parseInt,$u=_e("".charAt),ll=_e([].join),Ye=_e([].push),_l=_e("".replace),K3=_e([].shift),dl=_e([].splice),hl=_e("".split),Il=_e("".slice),Y3=_e(/./.exec),X3=/\+/g,As="\uFFFD",Q3=/^[0-9a-f]+$/i,pl=function(e,t){var r=Il(e,t,t+2);return Y3(Q3,r)?J3(r,16):NaN},Z3=function(e){for(var t=0,r=128;r>0&&(e&r)!==0;r>>=1)t++;return t},em=function(e){var t=null;switch(e.length){case 1:t=e[0];break;case 2:t=(e[0]&31)<<6|e[1]&63;break;case 3:t=(e[0]&15)<<12|(e[1]&63)<<6|e[2]&63;break;case 4:t=(e[0]&7)<<18|(e[1]&63)<<12|(e[2]&63)<<6|e[3]&63;break}return t>1114111?null:t},bl=function(e){e=_l(e,X3," ");for(var t=e.length,r="",u=0;u<t;){var n=$u(e,u);if(n==="%"){if($u(e,u+1)==="%"||u+3>t){r+="%",u++;continue}var i=pl(e,u+1);if(i!==i){r+=n,u++;continue}u+=2;var s=Z3(i);if(s===0)n=z3(i);else{if(s===1||s>4){r+=As,u++;continue}for(var a=[i],o=1;o<s&&(u++,!(u+3>t||$u(e,u)!=="%"));){var c=pl(e,u+1);if(c!==c){u+=3;break}if(c>191||c<128)break;Ye(a,c),u+=2,o++}if(a.length!==s){r+=As;continue}var l=em(a);l===null?r+=As:n=W3(l)}}r+=n,u++}return r},tm=/[!'()~]|%20/g,rm={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},um=function(e){return rm[e]},xl=function(e){return _l($3(e),tm,um)},Ss=C3(function(t,r){Tl(this,{type:El,target:ce(t).entries,index:0,kind:r})},Ft,function(){var t=V3(this),r=t.target,u=t.index++;if(!r||u>=r.length)return t.target=null,Vu(void 0,!0);var n=r[u];switch(t.kind){case"keys":return Vu(n.key,!1);case"values":return Vu(n.value,!1)}return Vu([n.key,n.value],!1)},!0),ql=function(e){this.entries=[],this.url=null,e!==void 0&&(Sl(e)?this.parseObject(e):this.parseQuery(typeof e=="string"?$u(e,0)==="?"?Il(e,1):e:re(e)))};ql.prototype={type:Ft,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t=this.entries,r=B3(e),u,n,i,s,a,o,c;if(r)for(u=ol(e,r),n=u.next;!(i=Hu(n,u)).done;){if(s=ol(U3(i.value)),a=s.next,(o=Hu(a,s)).done||(c=Hu(a,s)).done||!Hu(a,s).done)throw new G3("Expected sequence with length 2");Ye(t,{key:re(o.value),value:re(c.value)})}else for(var l in e)O3(e,l)&&Ye(t,{key:l,value:re(e[l])})},parseQuery:function(e){if(e)for(var t=this.entries,r=hl(e,"&"),u=0,n,i;u<r.length;)n=r[u++],n.length&&(i=hl(n,"="),Ye(t,{key:bl(K3(i)),value:bl(ll(i,"="))}))},serialize:function(){for(var e=this.entries,t=[],r=0,u;r<e.length;)u=e[r++],Ye(t,xl(u.key)+"="+xl(u.value));return ll(t,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var Wu=function(){Al(this,Ut);var t=arguments.length>0?arguments[0]:void 0,r=Tl(this,new ql(t));Nr||(this.size=r.entries.length)},Ut=Wu.prototype;L3(Ut,{append:function(t,r){var u=ce(this);Pt(arguments.length,2),Ye(u.entries,{key:re(t),value:re(r)}),Nr||this.length++,u.updateURL()},delete:function(e){for(var t=ce(this),r=Pt(arguments.length,1),u=t.entries,n=re(e),i=r<2?void 0:arguments[1],s=i===void 0?i:re(i),a=0;a<u.length;){var o=u[a];if(o.key===n&&(s===void 0||o.value===s)){if(dl(u,a,1),s!==void 0)break}else a++}Nr||(this.size=u.length),t.updateURL()},get:function(t){var r=ce(this).entries;Pt(arguments.length,1);for(var u=re(t),n=0;n<r.length;n++)if(r[n].key===u)return r[n].value;return null},getAll:function(t){var r=ce(this).entries;Pt(arguments.length,1);for(var u=re(t),n=[],i=0;i<r.length;i++)r[i].key===u&&Ye(n,r[i].value);return n},has:function(t){for(var r=ce(this).entries,u=Pt(arguments.length,1),n=re(t),i=u<2?void 0:arguments[1],s=i===void 0?i:re(i),a=0;a<r.length;){var o=r[a++];if(o.key===n&&(s===void 0||o.value===s))return!0}return!1},set:function(t,r){var u=ce(this);Pt(arguments.length,1);for(var n=u.entries,i=!1,s=re(t),a=re(r),o=0,c;o<n.length;o++)c=n[o],c.key===s&&(i?dl(n,o--,1):(i=!0,c.value=a));i||Ye(n,{key:s,value:a}),Nr||(this.size=n.length),u.updateURL()},sort:function(){var t=ce(this);j3(t.entries,function(r,u){return r.key>u.key?1:-1}),t.updateURL()},forEach:function(t){for(var r=ce(this).entries,u=D3(t,arguments.length>1?arguments[1]:void 0),n=0,i;n<r.length;)i=r[n++],u(i.value,i.key,this)},keys:function(){return new Ss(this,"keys")},values:function(){return new Ss(this,"values")},entries:function(){return new Ss(this,"entries")}},{enumerable:!0});wl(Ut,H3,Ut.entries,{name:"entries"});wl(Ut,"toString",function(){return ce(this).serialize()},{enumerable:!0});Nr&&k3(Ut,"size",{get:function(){return ce(this).entries.length},configurable:!0,enumerable:!0});N3(Wu,Ft);Ts({global:!0,constructor:!0,forced:!vl},{URLSearchParams:Wu});!vl&&vs(Cr)&&(gl=_e(fl.has),ml=_e(fl.set),Es=function(e){if(Sl(e)){var t=e.body,r;if(P3(t)===Ft)return r=e.headers?new Cr(e.headers):new Cr,gl(r,"content-type")||ml(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),F3(e,{body:al(0,re(t)),headers:al(0,r)})}return e},vs(cl)&&Ts({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return cl(t,arguments.length>1?Es(arguments[1]):{})}}),vs(zu)&&(Gu=function(t){return Al(this,ws),new zu(t,arguments.length>1?Es(arguments[1]):{})},ws.constructor=Gu,Gu.prototype=ws,Ts({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Gu})));var gl,ml,Es,Gu;Rl.exports={URLSearchParams:Wu,getState:ce}});var kl=b(()=>{"use strict";qs()});var Ll=b(()=>{});var Nl=b(()=>{});var Cl=b(()=>{});var Rs=b((Gw,Ol)=>{"use strict";kl();Ll();Nl();Cl();var nm=yr();Ol.exports=nm.URLSearchParams});var Ls=b(($w,Ul)=>{"use strict";var ks=J(),im=Lu(),sm=gt(),am=gr(),om=ks("".charAt),Dl=ks("".charCodeAt),cm=ks("".slice),Pl=function(e){return function(t,r){var u=sm(am(t)),n=im(r),i=u.length,s,a;return n<0||n>=i?e?"":void 0:(s=Dl(u,n),s<55296||s>56319||n+1===i||(a=Dl(u,n+1))<56320||a>57343?e?om(u,n):s:e?cm(u,n,n+2):(s-55296<<10)+(a-56320)+65536)}};Ul.exports={codeAt:Pl(!1),charAt:Pl(!0)}});var jl=b(()=>{"use strict";var fm=Ls().charAt,lm=gt(),Bl=Er(),dm=ds(),Fl=Bu(),Ml="String Iterator",hm=Bl.set,pm=Bl.getterFor(Ml);dm(String,"String",function(e){hm(this,{type:Ml,string:lm(e),index:0})},function(){var t=pm(this),r=t.string,u=t.index,n;return u>=r.length?Fl(void 0,!0):(n=fm(r,u),t.index+=n.length,Fl(n,!1))})});var Vl=b(Hl=>{"use strict";Hl.f=Object.getOwnPropertySymbols});var Wl=b((Kw,zl)=>{"use strict";var Gl=te(),bm=J(),xm=Oe(),gm=ne(),Ns=es(),mm=Vl(),ym=Wi(),vm=Ar(),wm=gi(),Bt=Object.assign,$l=Object.defineProperty,Am=bm([].concat);zl.exports=!Bt||gm(function(){if(Gl&&Bt({b:1},Bt($l({},"a",{enumerable:!0,get:function(){$l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var e={},t={},r=Symbol("assign detection"),u="abcdefghijklmnopqrst";return e[r]=7,u.split("").forEach(function(n){t[n]=n}),Bt({},e)[r]!==7||Ns(Bt({},t)).join("")!==u})?function(t,r){for(var u=vm(t),n=arguments.length,i=1,s=mm.f,a=ym.f;n>i;)for(var o=wm(arguments[i++]),c=s?Am(Ns(o),s(o)):Ns(o),l=c.length,f=0,h;l>f;)h=c[f++],(!Gl||xm(a,o,h))&&(u[h]=o[h]);return u}:Bt});var Yl=b((Yw,Kl)=>{"use strict";var Sm=Oe(),Jl=Ke(),Em=Tu();Kl.exports=function(e,t,r){var u,n;Jl(e);try{if(u=Em(e,"return"),!u){if(t==="throw")throw r;return r}u=Sm(u,e)}catch(i){n=!0,u=i}if(t==="throw")throw r;if(n)throw u;return Jl(u),r}});var Ql=b((Xw,Xl)=>{"use strict";var Tm=Ke(),_m=Yl();Xl.exports=function(e,t,r,u){try{return u?t(Tm(r)[0],r[1]):t(r)}catch(n){_m(e,"throw",n)}}});var ed=b((Qw,Zl)=>{"use strict";var Im=Ee(),qm=dt(),Rm=Im("iterator"),km=Array.prototype;Zl.exports=function(e){return e!==void 0&&(qm.Array===e||km[Rm]===e)}});var rd=b((Zw,td)=>{"use strict";var Lm=J(),Nm=Z(),Cs=wr(),Cm=Lm(Function.toString);Nm(Cs.inspectSource)||(Cs.inspectSource=function(e){return Cm(e)});td.exports=Cs.inspectSource});var od=b((e9,ad)=>{"use strict";var Om=J(),Dm=ne(),ud=Z(),Pm=Ot(),Um=ht(),Fm=rd(),nd=function(){},id=Um("Reflect","construct"),Os=/^\s*(?:class|function)\b/,Bm=Om(Os.exec),Mm=!Os.test(nd),Or=function(t){if(!ud(t))return!1;try{return id(nd,[],t),!0}catch{return!1}},sd=function(t){if(!ud(t))return!1;switch(Pm(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Mm||!!Bm(Os,Fm(t))}catch{return!0}};sd.sham=!0;ad.exports=!id||Dm(function(){var e;return Or(Or.call)||!Or(Object)||!Or(function(){e=!0})||e})?sd:Or});var fd=b((t9,cd)=>{"use strict";var jm=te(),Hm=pt(),Vm=Rt();cd.exports=function(e,t,r){jm?Hm.f(e,t,Vm(0,r)):e[t]=r}});var pd=b((r9,hd)=>{"use strict";var Gm=_r(),$m=Oe(),zm=Ar(),Wm=Ql(),Jm=ed(),Km=od(),Ym=Xi(),ld=fd(),Xm=gs(),Qm=ju(),dd=Array;hd.exports=function(t){var r=zm(t),u=Km(this),n=arguments.length,i=n>1?arguments[1]:void 0,s=i!==void 0;s&&(i=Gm(i,n>2?arguments[2]:void 0));var a=Qm(r),o=0,c,l,f,h,d,p;if(a&&!(this===dd&&Jm(a)))for(l=u?new this:[],h=Xm(r,a),d=h.next;!(f=$m(d,h)).done;o++)p=s?Wm(h,i,[f.value,o],!0):f.value,ld(l,o,p);else for(c=Ym(r),l=u?new this(c):dd(c);c>o;o++)p=s?i(r[o],o):r[o],ld(l,o,p);return l.length=o,l}});var Sd=b((u9,Ad)=>{"use strict";var mt=J(),Ds=2147483647,Dr=36,yd=1,Fs=26,Zm=38,e6=700,t6=72,r6=128,u6="-",n6=/[^\0-\u007E]/,vd=/[.\u3002\uFF0E\uFF61]/g,bd="Overflow: input needs wider integers to process",Ps=Dr-yd,xd=RangeError,i6=mt(vd.exec),Mt=Math.floor,Us=String.fromCharCode,gd=mt("".charCodeAt),wd=mt([].join),Xe=mt([].push),s6=mt("".replace),a6=mt("".split),o6=mt("".toLowerCase),c6=function(e){for(var t=[],r=0,u=e.length;r<u;){var n=gd(e,r++);if(n>=55296&&n<=56319&&r<u){var i=gd(e,r++);(i&64512)===56320?Xe(t,((n&1023)<<10)+(i&1023)+65536):(Xe(t,n),r--)}else Xe(t,n)}return t},md=function(e){return e+22+75*(e<26)},f6=function(e,t,r){var u=0;for(e=r?Mt(e/e6):e>>1,e+=Mt(e/t);e>Ps*Fs>>1;)e=Mt(e/Ps),u+=Dr;return Mt(u+(Ps+1)*e/(e+Zm))},l6=function(e){var t=[];e=c6(e);var r=e.length,u=r6,n=0,i=t6,s,a;for(s=0;s<e.length;s++)a=e[s],a<128&&Xe(t,Us(a));var o=t.length,c=o;for(o&&Xe(t,u6);c<r;){var l=Ds;for(s=0;s<e.length;s++)a=e[s],a>=u&&a<l&&(l=a);var f=c+1;if(l-u>Mt((Ds-n)/f))throw new xd(bd);for(n+=(l-u)*f,u=l,s=0;s<e.length;s++){if(a=e[s],a<u&&++n>Ds)throw new xd(bd);if(a===u){for(var h=n,d=Dr;;){var p=d<=i?yd:d>=i+Fs?Fs:d-i;if(h<p)break;var x=h-p,S=Dr-p;Xe(t,Us(md(p+x%S))),h=Mt(x/S),d+=Dr}Xe(t,Us(md(h))),i=f6(n,f,c===o),n=0,c++}}n++,u++}return wd(t,"")};Ad.exports=function(e){var t=[],r=a6(s6(o6(e),vd,"."),"."),u,n;for(u=0;u<r.length;u++)n=r[u],Xe(t,i6(n6,n)?"xn--"+l6(n):n);return wd(t,".")}});var jd=b(()=>{"use strict";jl();var d6=xt(),ta=te(),h6=kr(),ra=Q(),Ed=_r(),pe=J(),Qu=Ct(),fe=bs(),p6=xs(),Qs=Se(),ua=Wl(),jt=pd(),Ie=ms(),b6=Ls().codeAt,x6=Sd(),He=gt(),g6=Dt(),m6=Lr(),Dd=qs(),Pd=Er(),y6=Pd.set,Zu=Pd.getterFor("URL"),v6=Dd.URLSearchParams,w6=Dd.getState,Pr=ra.URL,Zs=ra.TypeError,en=ra.parseInt,A6=Math.floor,Td=Math.pow,he=pe("".charAt),qe=pe(/./.exec),Fr=pe([].join),S6=pe(1.1.toString),E6=pe([].pop),Vt=pe([].push),Bs=pe("".replace),T6=pe([].shift),_6=pe("".split),Mr=pe("".slice),tn=pe("".toLowerCase),I6=pe([].unshift),q6="Invalid authority",Ms="Invalid scheme",yt="Invalid host",_d="Invalid port",Ud=/[a-z]/i,R6=/[\d+-.a-z]/i,ea=/\d/,k6=/^0x/i,L6=/^[0-7]+$/,N6=/^\d+$/,Fd=/^[\da-f]+$/i,C6=/[\0\t\n\r #%/:<>?@[\\\]^|]/,O6=/[\0\t\n\r #/:<>?@[\\\]^|]/,D6=/^[\u0000-\u0020]+/,P6=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,U6=/[\t\n\r]/g,le,F6=function(e){var t=_6(e,"."),r,u,n,i,s,a,o;if(t.length&&t[t.length-1]===""&&t.length--,r=t.length,r>4)return e;for(u=[],n=0;n<r;n++){if(i=t[n],i==="")return e;if(s=10,i.length>1&&he(i,0)==="0"&&(s=qe(k6,i)?16:8,i=Mr(i,s===8?1:2)),i==="")a=0;else{if(!qe(s===10?N6:s===8?L6:Fd,i))return e;a=en(i,s)}Vt(u,a)}for(n=0;n<r;n++)if(a=u[n],n===r-1){if(a>=Td(256,5-r))return null}else if(a>255)return null;for(o=E6(u),n=0;n<u.length;n++)o+=u[n]*Td(256,3-n);return o},B6=function(e){var t=[0,0,0,0,0,0,0,0],r=0,u=null,n=0,i,s,a,o,c,l,f,h=function(){return he(e,n)};if(h()===":"){if(he(e,1)!==":")return;n+=2,r++,u=r}for(;h();){if(r===8)return;if(h()===":"){if(u!==null)return;n++,r++,u=r;continue}for(i=s=0;s<4&&qe(Fd,h());)i=i*16+en(h(),16),n++,s++;if(h()==="."){if(s===0||(n-=s,r>6))return;for(a=0;h();){if(o=null,a>0)if(h()==="."&&a<4)n++;else return;if(!qe(ea,h()))return;for(;qe(ea,h());){if(c=en(h(),10),o===null)o=c;else{if(o===0)return;o=o*10+c}if(o>255)return;n++}t[r]=t[r]*256+o,a++,(a===2||a===4)&&r++}if(a!==4)return;break}else if(h()===":"){if(n++,!h())return}else if(h())return;t[r++]=i}if(u!==null)for(l=r-u,r=7;r!==0&&l>0;)f=t[r],t[r--]=t[u+l-1],t[u+--l]=f;else if(r!==8)return;return t},M6=function(e){for(var t=null,r=1,u=null,n=0,i=0;i<8;i++)e[i]!==0?(n>r&&(t=u,r=n),u=null,n=0):(u===null&&(u=i),++n);return n>r?u:t},Ur=function(e){var t,r,u,n;if(typeof e=="number"){for(t=[],r=0;r<4;r++)I6(t,e%256),e=A6(e/256);return Fr(t,".")}if(typeof e=="object"){for(t="",u=M6(e),r=0;r<8;r++)n&&e[r]===0||(n&&(n=!1),u===r?(t+=r?":":"::",n=!0):(t+=S6(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},Xu={},Bd=ua({},Xu,{" ":1,'"':1,"<":1,">":1,"`":1}),Md=ua({},Bd,{"#":1,"?":1,"{":1,"}":1}),js=ua({},Md,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Qe=function(e,t){var r=b6(e,0);return r>32&&r<127&&!Qs(t,e)?e:encodeURIComponent(e)},Ju={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Br=function(e,t){var r;return e.length===2&&qe(Ud,he(e,0))&&((r=he(e,1))===":"||!t&&r==="|")},Id=function(e){var t;return e.length>1&&Br(Mr(e,0,2))&&(e.length===2||(t=he(e,2))==="/"||t==="\\"||t==="?"||t==="#")},j6=function(e){return e==="."||tn(e)==="%2e"},H6=function(e){return e=tn(e),e===".."||e==="%2e."||e===".%2e"||e==="%2e%2e"},Hs={},qd={},Vs={},Rd={},kd={},Gs={},Ld={},Nd={},Ku={},Yu={},$s={},zs={},Ws={},Js={},Cd={},Ks={},Ht={},De={},Od={},vt={},je={},na=function(e,t,r){var u=He(e),n,i,s;if(t){if(i=this.parse(u),i)throw new Zs(i);this.searchParams=null}else{if(r!==void 0&&(n=new na(r,!0)),i=this.parse(u,null,n),i)throw new Zs(i);s=w6(new v6),s.bindURL(this),this.searchParams=s}};na.prototype={type:"URL",parse:function(e,t,r){var u=this,n=t||Hs,i=0,s="",a=!1,o=!1,c=!1,l,f,h,d;for(e=He(e),t||(u.scheme="",u.username="",u.password="",u.host=null,u.port=null,u.path=[],u.query=null,u.fragment=null,u.cannotBeABaseURL=!1,e=Bs(e,D6,""),e=Bs(e,P6,"$1")),e=Bs(e,U6,""),l=jt(e);i<=l.length;){switch(f=l[i],n){case Hs:if(f&&qe(Ud,f))s+=tn(f),n=qd;else{if(t)return Ms;n=Vs;continue}break;case qd:if(f&&(qe(R6,f)||f==="+"||f==="-"||f==="."))s+=tn(f);else if(f===":"){if(t&&(u.isSpecial()!==Qs(Ju,s)||s==="file"&&(u.includesCredentials()||u.port!==null)||u.scheme==="file"&&!u.host))return;if(u.scheme=s,t){u.isSpecial()&&Ju[u.scheme]===u.port&&(u.port=null);return}s="",u.scheme==="file"?n=Js:u.isSpecial()&&r&&r.scheme===u.scheme?n=Rd:u.isSpecial()?n=Nd:l[i+1]==="/"?(n=kd,i++):(u.cannotBeABaseURL=!0,Vt(u.path,""),n=Od)}else{if(t)return Ms;s="",n=Vs,i=0;continue}break;case Vs:if(!r||r.cannotBeABaseURL&&f!=="#")return Ms;if(r.cannotBeABaseURL&&f==="#"){u.scheme=r.scheme,u.path=Ie(r.path),u.query=r.query,u.fragment="",u.cannotBeABaseURL=!0,n=je;break}n=r.scheme==="file"?Js:Gs;continue;case Rd:if(f==="/"&&l[i+1]==="/")n=Ku,i++;else{n=Gs;continue}break;case kd:if(f==="/"){n=Yu;break}else{n=De;continue}case Gs:if(u.scheme=r.scheme,f===le)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=Ie(r.path),u.query=r.query;else if(f==="/"||f==="\\"&&u.isSpecial())n=Ld;else if(f==="?")u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=Ie(r.path),u.query="",n=vt;else if(f==="#")u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=Ie(r.path),u.query=r.query,u.fragment="",n=je;else{u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=Ie(r.path),u.path.length--,n=De;continue}break;case Ld:if(u.isSpecial()&&(f==="/"||f==="\\"))n=Ku;else if(f==="/")n=Yu;else{u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,n=De;continue}break;case Nd:if(n=Ku,f!=="/"||he(s,i+1)!=="/")continue;i++;break;case Ku:if(f!=="/"&&f!=="\\"){n=Yu;continue}break;case Yu:if(f==="@"){a&&(s="%40"+s),a=!0,h=jt(s);for(var p=0;p<h.length;p++){var x=h[p];if(x===":"&&!c){c=!0;continue}var S=Qe(x,js);c?u.password+=S:u.username+=S}s=""}else if(f===le||f==="/"||f==="?"||f==="#"||f==="\\"&&u.isSpecial()){if(a&&s==="")return q6;i-=jt(s).length+1,s="",n=$s}else s+=f;break;case $s:case zs:if(t&&u.scheme==="file"){n=Ks;continue}else if(f===":"&&!o){if(s==="")return yt;if(d=u.parseHost(s),d)return d;if(s="",n=Ws,t===zs)return}else if(f===le||f==="/"||f==="?"||f==="#"||f==="\\"&&u.isSpecial()){if(u.isSpecial()&&s==="")return yt;if(t&&s===""&&(u.includesCredentials()||u.port!==null))return;if(d=u.parseHost(s),d)return d;if(s="",n=Ht,t)return;continue}else f==="["?o=!0:f==="]"&&(o=!1),s+=f;break;case Ws:if(qe(ea,f))s+=f;else if(f===le||f==="/"||f==="?"||f==="#"||f==="\\"&&u.isSpecial()||t){if(s!==""){var m=en(s,10);if(m>65535)return _d;u.port=u.isSpecial()&&m===Ju[u.scheme]?null:m,s=""}if(t)return;n=Ht;continue}else return _d;break;case Js:if(u.scheme="file",f==="/"||f==="\\")n=Cd;else if(r&&r.scheme==="file")switch(f){case le:u.host=r.host,u.path=Ie(r.path),u.query=r.query;break;case"?":u.host=r.host,u.path=Ie(r.path),u.query="",n=vt;break;case"#":u.host=r.host,u.path=Ie(r.path),u.query=r.query,u.fragment="",n=je;break;default:Id(Fr(Ie(l,i),""))||(u.host=r.host,u.path=Ie(r.path),u.shortenPath()),n=De;continue}else{n=De;continue}break;case Cd:if(f==="/"||f==="\\"){n=Ks;break}r&&r.scheme==="file"&&!Id(Fr(Ie(l,i),""))&&(Br(r.path[0],!0)?Vt(u.path,r.path[0]):u.host=r.host),n=De;continue;case Ks:if(f===le||f==="/"||f==="\\"||f==="?"||f==="#"){if(!t&&Br(s))n=De;else if(s===""){if(u.host="",t)return;n=Ht}else{if(d=u.parseHost(s),d)return d;if(u.host==="localhost"&&(u.host=""),t)return;s="",n=Ht}continue}else s+=f;break;case Ht:if(u.isSpecial()){if(n=De,f!=="/"&&f!=="\\")continue}else if(!t&&f==="?")u.query="",n=vt;else if(!t&&f==="#")u.fragment="",n=je;else if(f!==le&&(n=De,f!=="/"))continue;break;case De:if(f===le||f==="/"||f==="\\"&&u.isSpecial()||!t&&(f==="?"||f==="#")){if(H6(s)?(u.shortenPath(),f!=="/"&&!(f==="\\"&&u.isSpecial())&&Vt(u.path,"")):j6(s)?f!=="/"&&!(f==="\\"&&u.isSpecial())&&Vt(u.path,""):(u.scheme==="file"&&!u.path.length&&Br(s)&&(u.host&&(u.host=""),s=he(s,0)+":"),Vt(u.path,s)),s="",u.scheme==="file"&&(f===le||f==="?"||f==="#"))for(;u.path.length>1&&u.path[0]==="";)T6(u.path);f==="?"?(u.query="",n=vt):f==="#"&&(u.fragment="",n=je)}else s+=Qe(f,Md);break;case Od:f==="?"?(u.query="",n=vt):f==="#"?(u.fragment="",n=je):f!==le&&(u.path[0]+=Qe(f,Xu));break;case vt:!t&&f==="#"?(u.fragment="",n=je):f!==le&&(f==="'"&&u.isSpecial()?u.query+="%27":f==="#"?u.query+="%23":u.query+=Qe(f,Xu));break;case je:f!==le&&(u.fragment+=Qe(f,Bd));break}i++}},parseHost:function(e){var t,r,u;if(he(e,0)==="["){if(he(e,e.length-1)!=="]"||(t=B6(Mr(e,1,-1)),!t))return yt;this.host=t}else if(this.isSpecial()){if(e=x6(e),qe(C6,e)||(t=F6(e),t===null))return yt;this.host=t}else{if(qe(O6,e))return yt;for(t="",r=jt(e),u=0;u<r.length;u++)t+=Qe(r[u],Xu);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||this.scheme==="file"},includesCredentials:function(){return this.username!==""||this.password!==""},isSpecial:function(){return Qs(Ju,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;t&&(this.scheme!=="file"||t!==1||!Br(e[0],!0))&&e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,u=e.password,n=e.host,i=e.port,s=e.path,a=e.query,o=e.fragment,c=t+":";return n!==null?(c+="//",e.includesCredentials()&&(c+=r+(u?":"+u:"")+"@"),c+=Ur(n),i!==null&&(c+=":"+i)):t==="file"&&(c+="//"),c+=e.cannotBeABaseURL?s[0]:s.length?"/"+Fr(s,"/"):"",a!==null&&(c+="?"+a),o!==null&&(c+="#"+o),c},setHref:function(e){var t=this.parse(e);if(t)throw new Zs(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if(e==="blob")try{return new Gt(e.path[0]).origin}catch{return"null"}return e==="file"||!this.isSpecial()?"null":e+"://"+Ur(this.host)+(t!==null?":"+t:"")},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(He(e)+":",Hs)},getUsername:function(){return this.username},setUsername:function(e){var t=jt(He(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=Qe(t[r],js)}},getPassword:function(){return this.password},setPassword:function(e){var t=jt(He(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=Qe(t[r],js)}},getHost:function(){var e=this.host,t=this.port;return e===null?"":t===null?Ur(e):Ur(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,$s)},getHostname:function(){var e=this.host;return e===null?"":Ur(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,zs)},getPort:function(){var e=this.port;return e===null?"":He(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=He(e),e===""?this.port=null:this.parse(e,Ws))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+Fr(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Ht))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=He(e),e===""?this.query=null:(he(e,0)==="?"&&(e=Mr(e,1)),this.query="",this.parse(e,vt)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){if(e=He(e),e===""){this.fragment=null;return}he(e,0)==="#"&&(e=Mr(e,1)),this.fragment="",this.parse(e,je)},update:function(){this.query=this.searchParams.serialize()||null}};var Gt=function(t){var r=p6(this,ue),u=m6(arguments.length,1)>1?arguments[1]:void 0,n=y6(r,new na(t,!1,u));ta||(r.href=n.serialize(),r.origin=n.getOrigin(),r.protocol=n.getProtocol(),r.username=n.getUsername(),r.password=n.getPassword(),r.host=n.getHost(),r.hostname=n.getHostname(),r.port=n.getPort(),r.pathname=n.getPathname(),r.search=n.getSearch(),r.searchParams=n.getSearchParams(),r.hash=n.getHash())},ue=Gt.prototype,de=function(e,t){return{get:function(){return Zu(this)[e]()},set:t&&function(r){return Zu(this)[t](r)},configurable:!0,enumerable:!0}};ta&&(fe(ue,"href",de("serialize","setHref")),fe(ue,"origin",de("getOrigin")),fe(ue,"protocol",de("getProtocol","setProtocol")),fe(ue,"username",de("getUsername","setUsername")),fe(ue,"password",de("getPassword","setPassword")),fe(ue,"host",de("getHost","setHost")),fe(ue,"hostname",de("getHostname","setHostname")),fe(ue,"port",de("getPort","setPort")),fe(ue,"pathname",de("getPathname","setPathname")),fe(ue,"search",de("getSearch","setSearch")),fe(ue,"searchParams",de("getSearchParams")),fe(ue,"hash",de("getHash","setHash")));Qu(ue,"toJSON",function(){return Zu(this).serialize()},{enumerable:!0});Qu(ue,"toString",function(){return Zu(this).serialize()},{enumerable:!0});Pr&&(Ys=Pr.createObjectURL,Xs=Pr.revokeObjectURL,Ys&&Qu(Gt,"createObjectURL",Ed(Ys,Pr)),Xs&&Qu(Gt,"revokeObjectURL",Ed(Xs,Pr)));var Ys,Xs;g6(Gt,"URL");d6({global:!0,constructor:!0,forced:!h6,sham:!ta},{URL:Gt})});var Hd=b(()=>{"use strict";jd()});var $d=b(()=>{"use strict";var V6=xt(),G6=ht(),Gd=ne(),$6=Lr(),Vd=gt(),z6=kr(),ia=G6("URL"),W6=z6&&Gd(function(){ia.canParse()}),J6=Gd(function(){return ia.canParse.length!==1});V6({target:"URL",stat:!0,forced:!W6||J6},{canParse:function(t){var r=$6(arguments.length,1),u=Vd(t),n=r<2||arguments[1]===void 0?void 0:Vd(arguments[1]);try{return!!new ia(u,n)}catch{return!1}}})});var Wd=b(()=>{"use strict";var K6=xt(),Y6=ht(),X6=Lr(),zd=gt(),Q6=kr(),Z6=Y6("URL");K6({target:"URL",stat:!0,forced:!Q6},{parse:function(t){var r=X6(arguments.length,1),u=zd(t),n=r<2||arguments[1]===void 0?void 0:zd(arguments[1]);try{return new Z6(u,n)}catch{return null}}})});var Jd=b(()=>{});var Yd=b((p9,Kd)=>{"use strict";Rs();Hd();$d();Wd();Jd();var e8=yr();Kd.exports=e8.URL});var Qd=b((b9,Xd)=>{"use strict";var t8=Yd();Xd.exports=t8});var eh=b((x9,Zd)=>{"use strict";var r8=Qd();Zd.exports=r8});var rh=b((g9,th)=>{"use strict";th.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var nh=b(()=>{"use strict";ps();var u8=rh(),n8=Q(),i8=Dt(),uh=dt();for(rn in u8)i8(n8[rn],rn),uh[rn]=uh.Array;var rn});var sh=b((v9,ih)=>{"use strict";var s8=Rs();nh();ih.exports=s8});var oh=b((w9,ah)=>{"use strict";var a8=sh();ah.exports=a8});var _h=b((Jr,Wr)=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});var Ah=new WeakMap,da=new WeakMap;function B(e){let t=Ah.get(e);return console.assert(t!=null,"'this' is expected an Event object, but got",e),t}function gh(e){if(e.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",e.passiveListener);return}e.event.cancelable&&(e.canceled=!0,typeof e.event.preventDefault=="function"&&e.event.preventDefault())}function Yt(e,t){Ah.set(this,{eventTarget:e,event:t,eventPhase:2,currentTarget:e,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:t.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let r=Object.keys(t);for(let u=0;u<r.length;++u){let n=r[u];n in this||Object.defineProperty(this,n,Sh(n))}}Yt.prototype={get type(){return B(this).event.type},get target(){return B(this).eventTarget},get currentTarget(){return B(this).currentTarget},composedPath(){let e=B(this).currentTarget;return e==null?[]:[e]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return B(this).eventPhase},stopPropagation(){let e=B(this);e.stopped=!0,typeof e.event.stopPropagation=="function"&&e.event.stopPropagation()},stopImmediatePropagation(){let e=B(this);e.stopped=!0,e.immediateStopped=!0,typeof e.event.stopImmediatePropagation=="function"&&e.event.stopImmediatePropagation()},get bubbles(){return!!B(this).event.bubbles},get cancelable(){return!!B(this).event.cancelable},preventDefault(){gh(B(this))},get defaultPrevented(){return B(this).canceled},get composed(){return!!B(this).event.composed},get timeStamp(){return B(this).timeStamp},get srcElement(){return B(this).eventTarget},get cancelBubble(){return B(this).stopped},set cancelBubble(e){if(!e)return;let t=B(this);t.stopped=!0,typeof t.event.cancelBubble=="boolean"&&(t.event.cancelBubble=!0)},get returnValue(){return!B(this).canceled},set returnValue(e){e||gh(B(this))},initEvent(){}};Object.defineProperty(Yt.prototype,"constructor",{value:Yt,configurable:!0,writable:!0});typeof window<"u"&&typeof window.Event<"u"&&(Object.setPrototypeOf(Yt.prototype,window.Event.prototype),da.set(window.Event.prototype,Yt));function Sh(e){return{get(){return B(this).event[e]},set(t){B(this).event[e]=t},configurable:!0,enumerable:!0}}function l8(e){return{value(){let t=B(this).event;return t[e].apply(t,arguments)},configurable:!0,enumerable:!0}}function d8(e,t){let r=Object.keys(t);if(r.length===0)return e;function u(n,i){e.call(this,n,i)}u.prototype=Object.create(e.prototype,{constructor:{value:u,configurable:!0,writable:!0}});for(let n=0;n<r.length;++n){let i=r[n];if(!(i in e.prototype)){let a=typeof Object.getOwnPropertyDescriptor(t,i).value=="function";Object.defineProperty(u.prototype,i,a?l8(i):Sh(i))}}return u}function Eh(e){if(e==null||e===Object.prototype)return Yt;let t=da.get(e);return t==null&&(t=d8(Eh(Object.getPrototypeOf(e)),e),da.set(e,t)),t}function h8(e,t){let r=Eh(Object.getPrototypeOf(t));return new r(e,t)}function p8(e){return B(e).immediateStopped}function b8(e,t){B(e).eventPhase=t}function x8(e,t){B(e).currentTarget=t}function mh(e,t){B(e).passiveListener=t}var Th=new WeakMap,yh=1,vh=2,Tn=3;function _n(e){return e!==null&&typeof e=="object"}function zr(e){let t=Th.get(e);if(t==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return t}function g8(e){return{get(){let r=zr(this).get(e);for(;r!=null;){if(r.listenerType===Tn)return r.listener;r=r.next}return null},set(t){typeof t!="function"&&!_n(t)&&(t=null);let r=zr(this),u=null,n=r.get(e);for(;n!=null;)n.listenerType===Tn?u!==null?u.next=n.next:n.next!==null?r.set(e,n.next):r.delete(e):u=n,n=n.next;if(t!==null){let i={listener:t,listenerType:Tn,passive:!1,once:!1,next:null};u===null?r.set(e,i):u.next=i}},configurable:!0,enumerable:!0}}function ha(e,t){Object.defineProperty(e,`on${t}`,g8(t))}function wh(e){function t(){ke.call(this)}t.prototype=Object.create(ke.prototype,{constructor:{value:t,configurable:!0,writable:!0}});for(let r=0;r<e.length;++r)ha(t.prototype,e[r]);return t}function ke(){if(this instanceof ke){Th.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return wh(arguments[0]);if(arguments.length>0){let e=new Array(arguments.length);for(let t=0;t<arguments.length;++t)e[t]=arguments[t];return wh(e)}throw new TypeError("Cannot call a class as a function")}ke.prototype={addEventListener(e,t,r){if(t==null)return;if(typeof t!="function"&&!_n(t))throw new TypeError("'listener' should be a function or an object.");let u=zr(this),n=_n(r),s=(n?!!r.capture:!!r)?yh:vh,a={listener:t,listenerType:s,passive:n&&!!r.passive,once:n&&!!r.once,next:null},o=u.get(e);if(o===void 0){u.set(e,a);return}let c=null;for(;o!=null;){if(o.listener===t&&o.listenerType===s)return;c=o,o=o.next}c.next=a},removeEventListener(e,t,r){if(t==null)return;let u=zr(this),i=(_n(r)?!!r.capture:!!r)?yh:vh,s=null,a=u.get(e);for(;a!=null;){if(a.listener===t&&a.listenerType===i){s!==null?s.next=a.next:a.next!==null?u.set(e,a.next):u.delete(e);return}s=a,a=a.next}},dispatchEvent(e){if(e==null||typeof e.type!="string")throw new TypeError('"event.type" should be a string.');let t=zr(this),r=e.type,u=t.get(r);if(u==null)return!0;let n=h8(this,e),i=null;for(;u!=null;){if(u.once?i!==null?i.next=u.next:u.next!==null?t.set(r,u.next):t.delete(r):i=u,mh(n,u.passive?u.listener:null),typeof u.listener=="function")try{u.listener.call(this,n)}catch(s){typeof console<"u"&&typeof console.error=="function"&&console.error(s)}else u.listenerType!==Tn&&typeof u.listener.handleEvent=="function"&&u.listener.handleEvent(n);if(p8(n))break;u=u.next}return mh(n,null),b8(n,0),x8(n,null),!n.defaultPrevented}};Object.defineProperty(ke.prototype,"constructor",{value:ke,configurable:!0,writable:!0});typeof window<"u"&&typeof window.EventTarget<"u"&&Object.setPrototypeOf(ke.prototype,window.EventTarget.prototype);Jr.defineEventAttribute=ha;Jr.EventTarget=ke;Jr.default=ke;Wr.exports=ke;Wr.exports.EventTarget=Wr.exports.default=ke;Wr.exports.defineEventAttribute=ha});var ot=b((f_,K1)=>{K1.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var Gv={};Be(Gv,{createSeedWidget:()=>Bp});async function No(e,t,{check:r=()=>{},fail:u=()=>{}}={}){let n=new Array(e.length),i=0,s;async function a(){for(;!s&&i<e.length;){let o=i++;try{r(),n[o]=await t(e[o],o),r()}catch(c){s||(s=c,u(c))}}}if(await Promise.allSettled([a(),a()]),s)throw s;return n}function Co(e,{check:t=()=>{}}={}){let r=new Map,u=[],n=new Set,i=!1,s=!1,a,o=new Promise(h=>{a=h}),c={check(){if(t(),s)throw Error("Preview retired")},async wait(h){let d=await Promise.race([h,o]);return c.check(),d}};function l(){for(;!i&&n.size<2&&u.length;){let h=u.shift(),d=(async()=>{c.check();let p=await e(h.value,c);c.check(),h.success={value:p}})();n.add(d),d.then(()=>f(d),()=>f(d))}}function f(h){n.delete(h),l()}return{offer(h,d){if(i||r.has(h)||r.size>=8)return;let p={value:d};r.set(h,p),u.push(p),l()},successful:h=>s?void 0:r.get(h)?.success,retire(){i=!0,u.length=0,s=!0,a()},async close(){i=!0,u.length=0,await Promise.allSettled([...n])}}}var Dh=Ne(eh(),1),Ph=Ne(oh(),1);var un="utf-8";function _(e,t=void 0){if(e)throw TypeError("Decoder error");return t||65533}function $(e){throw TypeError("The code point "+e+" could not be encoded.")}function jr(e){let t=String(e).trim().toLowerCase();return t in sa?sa[t]:null}var aa=[{encodings:[{labels:["unicode-1-1-utf-8","utf-8","utf8"],name:"UTF-8"}],heading:"The Encoding"},{encodings:[{labels:["866","cp866","csibm866","ibm866"],name:"IBM866"},{labels:["csisolatin2","iso-8859-2","iso-ir-101","iso8859-2","iso88592","iso_8859-2","iso_8859-2:1987","l2","latin2"],name:"ISO-8859-2"},{labels:["csisolatin3","iso-8859-3","iso-ir-109","iso8859-3","iso88593","iso_8859-3","iso_8859-3:1988","l3","latin3"],name:"ISO-8859-3"},{labels:["csisolatin4","iso-8859-4","iso-ir-110","iso8859-4","iso88594","iso_8859-4","iso_8859-4:1988","l4","latin4"],name:"ISO-8859-4"},{labels:["csisolatincyrillic","cyrillic","iso-8859-5","iso-ir-144","iso8859-5","iso88595","iso_8859-5","iso_8859-5:1988"],name:"ISO-8859-5"},{labels:["arabic","asmo-708","csiso88596e","csiso88596i","csisolatinarabic","ecma-114","iso-8859-6","iso-8859-6-e","iso-8859-6-i","iso-ir-127","iso8859-6","iso88596","iso_8859-6","iso_8859-6:1987"],name:"ISO-8859-6"},{labels:["csisolatingreek","ecma-118","elot_928","greek","greek8","iso-8859-7","iso-ir-126","iso8859-7","iso88597","iso_8859-7","iso_8859-7:1987","sun_eu_greek"],name:"ISO-8859-7"},{labels:["csiso88598e","csisolatinhebrew","hebrew","iso-8859-8","iso-8859-8-e","iso-ir-138","iso8859-8","iso88598","iso_8859-8","iso_8859-8:1988","visual"],name:"ISO-8859-8"},{labels:["csiso88598i","iso-8859-8-i","logical"],name:"ISO-8859-8-I"},{labels:["csisolatin6","iso-8859-10","iso-ir-157","iso8859-10","iso885910","l6","latin6"],name:"ISO-8859-10"},{labels:["iso-8859-13","iso8859-13","iso885913"],name:"ISO-8859-13"},{labels:["iso-8859-14","iso8859-14","iso885914"],name:"ISO-8859-14"},{labels:["csisolatin9","iso-8859-15","iso8859-15","iso885915","iso_8859-15","l9"],name:"ISO-8859-15"},{labels:["iso-8859-16"],name:"ISO-8859-16"},{labels:["cskoi8r","koi","koi8","koi8-r","koi8_r"],name:"KOI8-R"},{labels:["koi8-ru","koi8-u"],name:"KOI8-U"},{labels:["csmacintosh","mac","macintosh","x-mac-roman"],name:"macintosh"},{labels:["dos-874","iso-8859-11","iso8859-11","iso885911","tis-620","windows-874"],name:"windows-874"},{labels:["cp1250","windows-1250","x-cp1250"],name:"windows-1250"},{labels:["cp1251","windows-1251","x-cp1251"],name:"windows-1251"},{labels:["ansi_x3.4-1968","cp1252","cp819","ibm819","iso-ir-100","windows-1252","x-cp1252"],name:"windows-1252"},{labels:["ascii","us-ascii","iso-8859-1","iso8859-1","iso88591","iso_8859-1","iso_8859-1:1987","l1","latin1","csisolatin1"],name:"iso-8859-1"},{labels:["cp1253","windows-1253","x-cp1253"],name:"windows-1253"},{labels:["cp1254","csisolatin5","iso-8859-9","iso-ir-148","iso8859-9","iso88599","iso_8859-9","iso_8859-9:1989","l5","latin5","windows-1254","x-cp1254"],name:"windows-1254"},{labels:["cp1255","windows-1255","x-cp1255"],name:"windows-1255"},{labels:["cp1256","windows-1256","x-cp1256"],name:"windows-1256"},{labels:["cp1257","windows-1257","x-cp1257"],name:"windows-1257"},{labels:["cp1258","windows-1258","x-cp1258"],name:"windows-1258"},{labels:["x-mac-cyrillic","x-mac-ukrainian"],name:"x-mac-cyrillic"}],heading:"Legacy single-byte encodings"},{encodings:[{labels:["chinese","csgb2312","csiso58gb231280","gb2312","gb_2312","gb_2312-80","gbk","iso-ir-58","x-gbk"],name:"GBK"},{labels:["gb18030"],name:"gb18030"}],heading:"Legacy multi-byte Chinese (simplified) encodings"},{encodings:[{labels:["big5","big5-hkscs","cn-big5","csbig5","x-x-big5"],name:"Big5"}],heading:"Legacy multi-byte Chinese (traditional) encodings"},{encodings:[{labels:["cseucpkdfmtjapanese","euc-jp","x-euc-jp"],name:"EUC-JP"},{labels:["csiso2022jp","iso-2022-jp"],name:"ISO-2022-JP"},{labels:["csshiftjis","ms932","ms_kanji","shift-jis","shift_jis","sjis","windows-31j","x-sjis"],name:"Shift_JIS"}],heading:"Legacy multi-byte Japanese encodings"},{encodings:[{labels:["cseuckr","csksc56011987","euc-kr","iso-ir-149","korean","ks_c_5601-1987","ks_c_5601-1989","ksc5601","ksc_5601","windows-949"],name:"EUC-KR"}],heading:"Legacy multi-byte Korean encodings"},{encodings:[{labels:["csiso2022kr","hz-gb-2312","iso-2022-cn","iso-2022-cn-ext","iso-2022-kr"],name:"replacement"},{labels:["utf-16be"],name:"UTF-16BE"},{labels:["utf-16","utf-16le"],name:"UTF-16LE"},{labels:["x-user-defined"],name:"x-user-defined"}],heading:"Legacy miscellaneous encodings"}],sa={};aa.forEach(e=>{e.encodings.forEach(t=>{t.labels.forEach(r=>{sa[r]=t})})});function oa(e){return Array.isArray(e)?e:[e]}function y(e,t,r){return t<=e&&e<=r}function ch(e,t){return e.indexOf(t)!==-1}function $t(e){if(e==null)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}function fh(e){let t=String(e),r=t.length,u=0,n=[];for(;u<r;){let i=t.charCodeAt(u);if(i<55296||i>57343)n.push(i);else if(56320<=i&&i<=57343)n.push(65533);else if(55296<=i&&i<=56319)if(u===r-1)n.push(65533);else{let s=t.charCodeAt(u+1);if(56320<=s&&s<=57343){let a=i&1023,o=s&1023;n.push(65536+(a<<10)+o),u+=1}else n.push(65533)}u+=1}return n}function lh(e){let t="";for(let r=0;r<e.length;++r){let u=e[r];u<=65535?t+=String.fromCharCode(u):(u-=65536,t+=String.fromCharCode((u>>10)+55296,(u&1023)+56320))}return t}function nn(){if(typeof global<"u")return global;if(typeof window<"u")return window;if(typeof self<"u")return self}var ca;function o8(){if(typeof TextEncodingIndexes<"u")return TextEncodingIndexes.encodingIndexes;let e=nn();return e?"TextEncodingIndexes"in e?global.TextEncodingIndexes.encodingIndexes:"encoding-indexes"in e?global.encodingIndexes:null:null}function sn(){if(ca)return ca;let e=o8();return e?(ca=e,e):null}function be(e,t){return t&&t[e]||null}function Re(e,t){let r=t.indexOf(e);return r===-1?null:r}function P(e){let t=sn();if(!t)throw Error("Indexes missing. Did you forget to include encoding-indexes.js first?");return t[e]}function dh(e){if(e>39419&&e<189e3||e>1237575)return null;if(e===7457)return 59335;let t=0,r=0,u=P("gb18030-ranges");for(let n=0;n<u.length;++n){let i=oa(u[n]);if(i[0]<=e)t=i[0],r=i[1];else break}return r+e-t}function hh(e){if(e===59335)return 7457;let t=0,r=0,u=P("gb18030-ranges");for(let n=0;n<u.length;++n){let i=u[n],s=oa(i);if(s[1]<=e)t=s[1],r=s[0];else break}return r+e-t}function ph(e){return fa=fa||P("jis0208").map(function(r,u){return y(u,8272,8835)?null:r}),fa.indexOf(e)}var fa;function bh(e){la=la||P("big5").map((r,u)=>u<5024?null:r);let t=la;return e===9552||e===9566||e===9569||e===9578||e===21313||e===21317?t.lastIndexOf(e):Re(e,t)}var la;function z(e){return 0<=e&&e<=127}var H=z,v=-1;var an=class{constructor(t){this.fatal=t.fatal,this.Big5_lead=0}handler(t,r){if(r===v&&this.Big5_lead!==0)return this.Big5_lead=0,_(this.fatal);if(r===v&&this.Big5_lead===0)return-1;if(this.Big5_lead!==0){let u=this.Big5_lead,n=null;this.Big5_lead=0;let i=r<127?64:98;switch((y(r,64,126)||y(r,161,254))&&(n=(u-129)*157+(r-i)),n){case 1133:return[202,772];case 1135:return[202,780];case 1164:return[234,772];case 1166:return[234,780]}let s=n===null?null:be(n,P("big5"));return s===null&&z(r)&&t.prepend(r),s===null?_(this.fatal):s}return z(r)?r:y(r,129,254)?(this.Big5_lead=r,null):_(this.fatal)}};var on=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;let u=bh(r);if(u===null)return $(r);let n=Math.floor(u/157)+129;if(n<161)return $(r);let i=u%157,s=i<63?64:98;return[n,i+s]}};var cn=class{constructor(t){this.fatal=t.fatal,this.eucjp_jis0212_flag=!1,this.eucjp_lead=0}handler(t,r){if(r===v&&this.eucjp_lead!==0)return this.eucjp_lead=0,_(this.fatal);if(r===v&&this.eucjp_lead===0)return-1;if(this.eucjp_lead===142&&y(r,161,223))return this.eucjp_lead=0,65216+r;if(this.eucjp_lead===143&&y(r,161,254))return this.eucjp_jis0212_flag=!0,this.eucjp_lead=r,null;if(this.eucjp_lead!==0){let u=this.eucjp_lead;this.eucjp_lead=0;let n=null;return y(u,161,254)&&y(r,161,254)&&(n=be((u-161)*94+(r-161),P(this.eucjp_jis0212_flag?"jis0212":"jis0208"))),this.eucjp_jis0212_flag=!1,y(r,161,254)||t.prepend(r),n===null?_(this.fatal):n}return z(r)?r:r===142||r===143||y(r,161,254)?(this.eucjp_lead=r,null):_(this.fatal)}};var fn=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;if(r===165)return 92;if(r===8254)return 126;if(y(r,65377,65439))return[142,r-65377+161];r===8722&&(r=65293);let u=Re(r,P("jis0208"));if(u===null)return $(r);let n=Math.floor(u/94)+161,i=u%94+161;return[n,i]}};var ln=class{constructor(t){this.fatal=t.fatal,this.euckr_lead=0}handler(t,r){if(r===v&&this.euckr_lead!==0)return this.euckr_lead=0,_(this.fatal);if(r===v&&this.euckr_lead===0)return-1;if(this.euckr_lead!==0){let u=this.euckr_lead,n=null;this.euckr_lead=0,y(r,65,254)&&(n=(u-129)*190+(r-65));let i=n===null?null:be(n,P("euc-kr"));return n===null&&z(r)&&t.prepend(r),i===null?_(this.fatal):i}return z(r)?r:y(r,129,254)?(this.euckr_lead=r,null):_(this.fatal)}};var dn=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;let u=Re(r,P("euc-kr"));if(u===null)return $(r);let n=Math.floor(u/190)+129,i=u%190+65;return[n,i]}};var Hr=class{constructor(t){this.fatal=t.fatal,this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0}handler(t,r){if(r===v&&this.gb18030_first===0&&this.gb18030_second===0&&this.gb18030_third===0)return-1;r===v&&(this.gb18030_first!==0||this.gb18030_second!==0||this.gb18030_third!==0)&&(this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0,_(this.fatal));let u;if(this.gb18030_third!==0){u=null,y(r,48,57)&&(u=dh((((this.gb18030_first-129)*10+this.gb18030_second-48)*126+this.gb18030_third-129)*10+r-48));let n=[this.gb18030_second,this.gb18030_third,r];return this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0,u===null?(t.prepend(n),_(this.fatal)):u}if(this.gb18030_second!==0)return y(r,129,254)?(this.gb18030_third=r,null):(t.prepend([this.gb18030_second,r]),this.gb18030_first=0,this.gb18030_second=0,_(this.fatal));if(this.gb18030_first!==0){if(y(r,48,57))return this.gb18030_second=r,null;let n=this.gb18030_first,i=null;this.gb18030_first=0;let s=r<127?64:65;return(y(r,64,126)||y(r,128,254))&&(i=(n-129)*190+(r-s)),u=i===null?null:be(i,P("gb18030")),u===null&&z(r)&&t.prepend(r),u===null?_(this.fatal):u}return z(r)?r:r===128?8364:y(r,129,254)?(this.gb18030_first=r,null):_(this.fatal)}};var Vr=class{constructor(t,r=void 0){this.gbk_flag=r,this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;if(r===58853)return $(r);if(this.gbk_flag&&r===8364)return 128;let u=Re(r,P("gb18030"));if(u!==null){let o=Math.floor(u/190)+129,c=u%190,l=c<63?64:65;return[o,c+l]}if(this.gbk_flag)return $(r);u=hh(r);let n=Math.floor(u/10/126/10);u=u-n*10*126*10;let i=Math.floor(u/10/126);u=u-i*10*126;let s=Math.floor(u/10),a=u-s*10;return[n+129,i+48,s+129,a+48]}};var F;(function(e){e[e.ASCII=0]="ASCII",e[e.Roman=1]="Roman",e[e.Katakana=2]="Katakana",e[e.LeadByte=3]="LeadByte",e[e.TrailByte=4]="TrailByte",e[e.EscapeStart=5]="EscapeStart",e[e.Escape=6]="Escape"})(F||(F={}));var hn=class{constructor(t){this.fatal=t.fatal,this.iso2022jp_decoder_state=F.ASCII,this.iso2022jp_decoder_output_state=F.ASCII,this.iso2022jp_lead=0,this.iso2022jp_output_flag=!1}handler(t,r){switch(this.iso2022jp_decoder_state){default:case F.ASCII:return r===27?(this.iso2022jp_decoder_state=F.EscapeStart,null):y(r,0,127)&&r!==14&&r!==15&&r!==27?(this.iso2022jp_output_flag=!1,r):r===v?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case F.Roman:return r===27?(this.iso2022jp_decoder_state=F.EscapeStart,null):r===92?(this.iso2022jp_output_flag=!1,165):r===126?(this.iso2022jp_output_flag=!1,8254):y(r,0,127)&&r!==14&&r!==15&&r!==27&&r!==92&&r!==126?(this.iso2022jp_output_flag=!1,r):r===v?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case F.Katakana:return r===27?(this.iso2022jp_decoder_state=F.EscapeStart,null):y(r,33,95)?(this.iso2022jp_output_flag=!1,65344+r):r===v?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case F.LeadByte:return r===27?(this.iso2022jp_decoder_state=F.EscapeStart,null):y(r,33,126)?(this.iso2022jp_output_flag=!1,this.iso2022jp_lead=r,this.iso2022jp_decoder_state=F.TrailByte,null):r===v?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case F.TrailByte:if(r===27)return this.iso2022jp_decoder_state=F.EscapeStart,_(this.fatal);if(y(r,33,126)){this.iso2022jp_decoder_state=F.LeadByte;let i=(this.iso2022jp_lead-33)*94+r-33,s=be(i,P("jis0208"));return s===null?_(this.fatal):s}return r===v?(this.iso2022jp_decoder_state=F.LeadByte,t.prepend(r),_(this.fatal)):(this.iso2022jp_decoder_state=F.LeadByte,_(this.fatal));case F.EscapeStart:return r===36||r===40?(this.iso2022jp_lead=r,this.iso2022jp_decoder_state=F.Escape,null):(t.prepend(r),this.iso2022jp_output_flag=!1,this.iso2022jp_decoder_state=this.iso2022jp_decoder_output_state,_(this.fatal));case F.Escape:let u=this.iso2022jp_lead;this.iso2022jp_lead=0;let n=null;if(u===40&&r===66&&(n=F.ASCII),u===40&&r===74&&(n=F.Roman),u===40&&r===73&&(n=F.Katakana),u===36&&(r===64||r===66)&&(n=F.LeadByte),n!==null){this.iso2022jp_decoder_state=this.iso2022jp_decoder_state=n;let i=this.iso2022jp_output_flag;return this.iso2022jp_output_flag=!0,i?_(this.fatal):null}return t.prepend([u,r]),this.iso2022jp_output_flag=!1,this.iso2022jp_decoder_state=this.iso2022jp_decoder_output_state,_(this.fatal)}}};var ee;(function(e){e[e.ASCII=0]="ASCII",e[e.Roman=1]="Roman",e[e.jis0208=2]="jis0208"})(ee||(ee={}));var pn=class{constructor(t){this.fatal=t.fatal,this.iso2022jp_state=ee.ASCII}handler(t,r){if(r===v&&this.iso2022jp_state!==ee.ASCII)return t.prepend(r),this.iso2022jp_state=ee.ASCII,[27,40,66];if(r===v&&this.iso2022jp_state===ee.ASCII)return-1;if((this.iso2022jp_state===ee.ASCII||this.iso2022jp_state===ee.Roman)&&(r===14||r===15||r===27))return $(65533);if(this.iso2022jp_state===ee.ASCII&&H(r))return r;if(this.iso2022jp_state===ee.Roman&&(H(r)&&r!==92&&r!==126||r==165||r==8254)){if(H(r))return r;if(r===165)return 92;if(r===8254)return 126}if(H(r)&&this.iso2022jp_state!==ee.ASCII)return t.prepend(r),this.iso2022jp_state=ee.ASCII,[27,40,66];if((r===165||r===8254)&&this.iso2022jp_state!==ee.Roman)return t.prepend(r),this.iso2022jp_state=ee.Roman,[27,40,74];r===8722&&(r=65293);let u=Re(r,P("jis0208"));if(u===null)return $(r);if(this.iso2022jp_state!==ee.jis0208)return t.prepend(r),this.iso2022jp_state=ee.jis0208,[27,36,66];let n=Math.floor(u/94)+33,i=u%94+33;return[n,i]}};var bn=class{constructor(t){this.fatal=t.fatal,this.Shift_JIS_lead=0}handler(t,r){if(r===v&&this.Shift_JIS_lead!==0)return this.Shift_JIS_lead=0,_(this.fatal);if(r===v&&this.Shift_JIS_lead===0)return-1;if(this.Shift_JIS_lead!==0){let u=this.Shift_JIS_lead,n=null;this.Shift_JIS_lead=0;let i=r<127?64:65,s=u<160?129:193;if((y(r,64,126)||y(r,128,252))&&(n=(u-s)*188+r-i),y(n,8836,10715))return 48508+n;let a=n===null?null:be(n,P("jis0208"));return a===null&&z(r)&&t.prepend(r),a===null?_(this.fatal):a}return z(r)||r===128?r:y(r,161,223)?65216+r:y(r,129,159)||y(r,224,252)?(this.Shift_JIS_lead=r,null):_(this.fatal)}};var xn=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r)||r===128)return r;if(r===165)return 92;if(r===8254)return 126;if(y(r,65377,65439))return r-65377+161;r===8722&&(r=65293);let u=ph(r);if(u===null)return $(r);let n=Math.floor(u/188),i=n<31?129:193,s=u%188,a=s<63?64:65;return[n+i,s+a]}};var gn=class{constructor(t,r){this.index=t,this.fatal=r.fatal}handler(t,r){if(r===v)return-1;if(z(r))return r;let u=this.index[r-128];return u||_(this.fatal)}};var mn=class{constructor(t,r){this.index=t,this.fatal=r.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;let u=Re(r,this.index);return u===null&&$(r),u+128}};function zt(e,t){let r=e>>8,u=e&255;return t?[r,u]:[u,r]}var Gr=class{constructor(t,r){this.utf16_be=t,this.fatal=r.fatal,this.utf16_lead_byte=null,this.utf16_lead_surrogate=null}handler(t,r){if(r===v&&(this.utf16_lead_byte!==null||this.utf16_lead_surrogate!==null))return _(this.fatal);if(r===v&&this.utf16_lead_byte===null&&this.utf16_lead_surrogate===null)return-1;if(this.utf16_lead_byte===null)return this.utf16_lead_byte=r,null;let u;if(this.utf16_be?u=(this.utf16_lead_byte<<8)+r:u=(r<<8)+this.utf16_lead_byte,this.utf16_lead_byte=null,this.utf16_lead_surrogate!==null){let n=this.utf16_lead_surrogate;return this.utf16_lead_surrogate=null,y(u,56320,57343)?65536+(n-55296)*1024+(u-56320):(t.prepend(zt(u,this.utf16_be)),_(this.fatal))}return y(u,55296,56319)?(this.utf16_lead_surrogate=u,null):y(u,56320,57343)?_(this.fatal):u}};var $r=class{constructor(t,r){this.utf16_be=t,this.fatal=r.fatal}handler(t,r){if(r===v)return-1;if(y(r,0,65535))return zt(r,this.utf16_be);let u=zt((r-65536>>10)+55296,this.utf16_be),n=zt((r-65536&1023)+56320,this.utf16_be);return u.concat(n)}};var yn=class{constructor(t){this.fatal=t.fatal,this.utf8_code_point=0,this.utf8_bytes_seen=0,this.utf8_bytes_needed=0,this.utf8_lower_boundary=128,this.utf8_upper_boundary=191}handler(t,r){if(r===v&&this.utf8_bytes_needed!==0)return this.utf8_bytes_needed=0,_(this.fatal);if(r===v)return-1;if(this.utf8_bytes_needed===0){if(y(r,0,127))return r;if(y(r,194,223))this.utf8_bytes_needed=1,this.utf8_code_point=r&31;else if(y(r,224,239))r===224&&(this.utf8_lower_boundary=160),r===237&&(this.utf8_upper_boundary=159),this.utf8_bytes_needed=2,this.utf8_code_point=r&15;else if(y(r,240,244))r===240&&(this.utf8_lower_boundary=144),r===244&&(this.utf8_upper_boundary=143),this.utf8_bytes_needed=3,this.utf8_code_point=r&7;else return _(this.fatal);return null}if(!y(r,this.utf8_lower_boundary,this.utf8_upper_boundary))return this.utf8_code_point=this.utf8_bytes_needed=this.utf8_bytes_seen=0,this.utf8_lower_boundary=128,this.utf8_upper_boundary=191,t.prepend(r),_(this.fatal);if(this.utf8_lower_boundary=128,this.utf8_upper_boundary=191,this.utf8_code_point=this.utf8_code_point<<6|r&63,this.utf8_bytes_seen+=1,this.utf8_bytes_seen!==this.utf8_bytes_needed)return null;let u=this.utf8_code_point;return this.utf8_code_point=this.utf8_bytes_needed=this.utf8_bytes_seen=0,u}};var vn=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===v)return-1;if(H(r))return r;let u,n;y(r,128,2047)?(u=1,n=192):y(r,2048,65535)?(u=2,n=224):y(r,65536,1114111)&&(u=3,n=240);let i=[(r>>6*u)+n];for(;u>0;){let s=r>>6*(u-1);i.push(128|s&63),u-=1}return i}};var wn=class{constructor(t){this.fatal=t.fatal}handler(t,r){return r===v?-1:z(r)?r:63360+r-128}};var An=class{constructor(t){this.fatal=t.fatal}handler(t,r){return r===v?-1:H(r)?r:y(r,63360,63487)?r-63360+128:$(r)}};var c8=sn(),Sn={"UTF-8":e=>new vn(e),GBK:e=>new Vr(e,!0),gb18030:e=>new Vr(e),Big5:e=>new on(e),"EUC-JP":e=>new fn(e),"ISO-2022-JP":e=>new pn(e),Shift_JIS:e=>new xn(e),"EUC-KR":e=>new dn(e),"UTF-16BE":e=>new $r(!0,e),"UTF-16LE":e=>new $r(!1,e),"x-user-defined":e=>new An(e)},En={"UTF-8":e=>new yn(e),GBK:e=>new Hr(e),gb18030:e=>new Hr(e),Big5:e=>new an(e),"EUC-JP":e=>new cn(e),"ISO-2022-JP":e=>new hn(e),Shift_JIS:e=>new bn(e),"EUC-KR":e=>new ln(e),"UTF-16BE":e=>new Gr(!0,e),"UTF-16LE":e=>new Gr(!1,e),"x-user-defined":e=>new wn(e)};c8&&aa.forEach(function(e){e.heading==="Legacy single-byte encodings"&&e.encodings.forEach(function(t){let r=t.name,u=P(r.toLowerCase());En[r]=function(n){return new gn(u,n)},Sn[r]=function(n){return new mn(u,n)}})});var Wt=class{constructor(t){this.tokens=Array.from(t),this.tokens.reverse()}endOfStream(){return!this.tokens.length}read(){return this.tokens.length?this.tokens.pop():v}prepend(t){if(Array.isArray(t)){let r=t;for(;r.length;)this.tokens.push(r.pop())}else this.tokens.push(t)}push(t){if(Array.isArray(t)){let r=t;for(;r.length;)this.tokens.unshift(r.shift())}else this.tokens.unshift(t)}};var Jt=class{constructor(t,r){t=t!==void 0?String(t):un;let u=$t(r);this._encoding=null,this._decoder=null,this._ignoreBOM=!1,this._BOMseen=!1,this._error_mode="replacement",this._do_not_flush=!1;let n=jr(t);if(n===null||n.name==="replacement")throw RangeError("Unknown encoding: "+t);if(!En[n.name])throw Error("Decoder not present. Did you forget to include encoding-indexes.js first?");this._encoding=n,u.fatal&&(this._error_mode="fatal"),u.ignoreBOM&&(this._ignoreBOM=!0)}get encoding(){return this._encoding.name.toLowerCase()}get fatal(){return this._error_mode==="fatal"}get ignoreBOM(){return this._ignoreBOM}decode(t,r){let u=f8(t),n=$t(r);this._do_not_flush||(this._decoder=En[this._encoding.name]({fatal:this._error_mode==="fatal"}),this._BOMseen=!1),this._do_not_flush=!!n.stream;let i=new Wt(u),s=[],a;for(;;){let o=i.read();if(o===v||(a=this._decoder.handler(i,o),a===-1))break;a!==null&&(Array.isArray(a)?s.push.apply(s,a):s.push(a))}if(!this._do_not_flush){do{if(a=this._decoder.handler(i,i.read()),a===-1)break;a&&(Array.isArray(a)?s.push.apply(s,a):s.push(a))}while(!i.endOfStream());this._decoder=null}return this.serializeStream(s)}serializeStream(t){return ch(["UTF-8","UTF-16LE","UTF-16BE"],this._encoding.name)&&!this._ignoreBOM&&!this._BOMseen&&(t.length>0&&t[0]===65279?(this._BOMseen=!0,t.shift()):t.length>0&&(this._BOMseen=!0)),lh(t)}};function xh(e){try{return e instanceof ArrayBuffer}catch(t){return console.error(t),!1}}function f8(e){return typeof e!="object"?new Uint8Array(0):xh(e)?new Uint8Array(e):"buffer"in e&&xh(e.buffer)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0)}var Kt=class{constructor(t,r){let u=$t(r);if(this._encoding=null,this._encoder=null,this._do_not_flush=!1,this._fatal=u.fatal?"fatal":"replacement",u.NONSTANDARD_allowLegacyEncoding){t=t?String(t):un;let n=jr(t);if(n===null||n.name==="replacement")throw RangeError("Unknown encoding: "+t);if(!Sn[n.name])throw Error("Encoder not present. Did you forget to include encoding-indexes.js first?");this._encoding=n}else{this._encoding=jr("utf-8");let n=nn()||{};t!==void 0&&"console"in n&&console.warn("TextEncoder constructor called with encoding label, which is ignored.")}}get encoding(){return this._encoding.name.toLowerCase()}encode(t,r){t=t===void 0?"":String(t);let u=$t(r);this._do_not_flush||(this._encoder=Sn[this._encoding.name]({fatal:this._fatal==="fatal"})),this._do_not_flush=!!u.stream;let n=new Wt(fh(t)),i=[],s;for(;;){let a=n.read();if(a===v||(s=this._encoder.handler(n,a),s===-1))break;Array.isArray(s)?i.push.apply(i,s):i.push(s)}if(!this._do_not_flush){for(;s=this._encoder.handler(n,n.read()),s!==-1;)Array.isArray(s)?i.push.apply(i,s):i.push(s);this._encoder=null}return new Uint8Array(i)}};if(typeof window<"u"){let e=t=>!(t in window)||typeof window[t]>"u"||window[t]===null;e("TextDecoder")&&(window.TextDecoder=Jt),e("TextEncoder")&&(window.TextEncoder=Kt)}var Kr=Ne(_h(),1),Ze=class extends Kr.EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){let t=In.get(this);if(typeof t!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return t}};(0,Kr.defineEventAttribute)(Ze.prototype,"abort");function m8(){let e=Object.create(Ze.prototype);return Kr.EventTarget.call(e),In.set(e,!1),e}function y8(e){In.get(e)===!1&&(In.set(e,!0),e.dispatchEvent({type:"abort"}))}var In=new WeakMap;Object.defineProperties(Ze.prototype,{aborted:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});var Xt=class{constructor(){qh.set(this,m8())}get signal(){return Ih(this)}abort(){y8(Ih(this))}},qh=new WeakMap;function Ih(e){let t=qh.get(e);if(t==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${e===null?"null":typeof e}`);return t}Object.defineProperties(Xt.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Xt.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var S8=typeof self=="object"?self:globalThis,Rh=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new S8[e](t)},E8=(e,t)=>{let r=(n,i)=>(e.set(i,n),n),u=n=>{if(e.has(n))return e.get(n);let[i,s]=t[n];switch(i){case 0:case-1:return r(s,n);case 1:{let a=r([],n);for(let o of s)a.push(u(o));return a}case 2:{let a=r({},n);for(let[o,c]of s)a[u(o)]=u(c);return a}case 3:return r(new Date(s),n);case 4:{let{source:a,flags:o}=s;return r(new RegExp(a,o),n)}case 5:{let a=r(new Map,n);for(let[o,c]of s)a.set(u(o),u(c));return a}case 6:{let a=r(new Set,n);for(let o of s)a.add(u(o));return a}case 7:{let{name:a,message:o}=s;return r(Rh(a,o),n)}case 8:return r(BigInt(s),n);case"BigInt":return r(Object(BigInt(s)),n);case"ArrayBuffer":return r(new Uint8Array(s).buffer,s);case"DataView":{let{buffer:a}=new Uint8Array(s);return r(new DataView(a),s)}}return r(Rh(i,s),n)};return u},xa=e=>E8(new Map,e)(0);var Qt="",{toString:T8}={},{keys:_8}=Object,Yr=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let r=T8.call(e).slice(8,-1);switch(r){case"Array":return[1,Qt];case"Object":return[2,Qt];case"Date":return[3,Qt];case"RegExp":return[4,Qt];case"Map":return[5,Qt];case"Set":return[6,Qt];case"DataView":return[1,r]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},Rn=([e,t])=>e===0&&(t==="function"||t==="symbol"),I8=(e,t,r,u)=>{let n=(s,a)=>{let o=u.push(s)-1;return r.set(a,o),o},i=s=>{if(r.has(s))return r.get(s);let[a,o]=Yr(s);switch(a){case 0:{let l=s;switch(o){case"bigint":a=8,l=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+o);l=null;break;case"undefined":return n([-1],s)}return n([a,l],s)}case 1:{if(o){let h=s;return o==="DataView"?h=new Uint8Array(s.buffer):o==="ArrayBuffer"&&(h=new Uint8Array(s)),n([o,[...h]],s)}let l=[],f=n([a,l],s);for(let h of s)l.push(i(h));return f}case 2:{if(o)switch(o){case"BigInt":return n([o,s.toString()],s);case"Boolean":case"Number":case"String":return n([o,s.valueOf()],s)}if(t&&"toJSON"in s)return i(s.toJSON());let l=[],f=n([a,l],s);for(let h of _8(s))(e||!Rn(Yr(s[h])))&&l.push([i(h),i(s[h])]);return f}case 3:return n([a,s.toISOString()],s);case 4:{let{source:l,flags:f}=s;return n([a,{source:l,flags:f}],s)}case 5:{let l=[],f=n([a,l],s);for(let[h,d]of s)(e||!(Rn(Yr(h))||Rn(Yr(d))))&&l.push([i(h),i(d)]);return f}case 6:{let l=[],f=n([a,l],s);for(let h of s)(e||!Rn(Yr(h)))&&l.push(i(h));return f}}let{message:c}=s;return n([a,{name:o,message:c}],s)};return i},ga=(e,{json:t,lossy:r}={})=>{let u=[];return I8(!(t||r),!!t,new Map,u)(e),u};var Oh=new WeakMap,ma=class extends Xt{constructor(){super(),Object.defineProperty(this.signal,"reason",{get:()=>Oh.get(this.signal)})}abort(t=Object.assign(new Error("Aborted"),{name:"AbortError"})){this.signal.aborted||(Oh.set(this.signal,t),super.abort())}},q8=e=>xa(ga(e));function Uh(e=globalThis){for(let[t,r]of Object.entries({URL:Dh.default,URLSearchParams:Ph.default,TextEncoder:Kt,TextDecoder:Jt,AbortController:ma,AbortSignal:Ze,structuredClone:q8}))e[t]===void 0&&(e[t]=r);return e}function Bh(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function R8(e,...t){if(!Bh(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function Mh(e,t){return Array.isArray(t)?t.length===0?!0:e?t.every(r=>typeof r=="string"):t.every(r=>Number.isSafeInteger(r)):!1}function Xr(e,t){if(typeof t!="string")throw new Error(`${e}: string expected`);return!0}function wa(e){if(!Number.isSafeInteger(e))throw new Error(`invalid integer: ${e}`)}function va(e){if(!Array.isArray(e))throw new Error("array expected")}function kn(e,t){if(!Mh(!0,t))throw new Error(`${e}: array of strings expected`)}function k8(e,t){if(!Mh(!1,t))throw new Error(`${e}: array of numbers expected`)}function L8(...e){let t=i=>i,r=(i,s)=>a=>i(s(a)),u=e.map(i=>i.encode).reduceRight(r,t),n=e.map(i=>i.decode).reduce(r,t);return{encode:u,decode:n}}function N8(e){let t=typeof e=="string"?e.split(""):e,r=t.length;kn("alphabet",t);let u=new Map(t.map((n,i)=>[n,i]));return{encode:n=>(va(n),n.map(i=>{if(!Number.isSafeInteger(i)||i<0||i>=r)throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${e}`);return t[i]})),decode:n=>(va(n),n.map(i=>{Xr("alphabet.decode",i);let s=u.get(i);if(s===void 0)throw new Error(`Unknown letter: "${i}". Allowed: ${e}`);return s}))}}function C8(e=""){return Xr("join",e),{encode:t=>(kn("join.decode",t),t.join(e)),decode:t=>(Xr("join.decode",t),t.split(e))}}function O8(e,t="="){return wa(e),Xr("padding",t),{encode(r){for(kn("padding.encode",r);r.length*e%8;)r.push(t);return r},decode(r){kn("padding.decode",r);let u=r.length;if(u*e%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;u>0&&r[u-1]===t;u--)if((u-1)*e%8===0)throw new Error("padding: invalid, string has too much padding");return r.slice(0,u)}}}var jh=(e,t)=>t===0?e:jh(t,e%t),Ln=(e,t)=>e+(t-jh(e,t)),ya=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})();function Fh(e,t,r,u){if(va(e),t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Ln(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Ln(t,r)}`);let n=0,i=0,s=ya[t],a=ya[r]-1,o=[];for(let c of e){if(wa(c),c>=s)throw new Error(`convertRadix2: invalid data word=${c} from=${t}`);if(n=n<<t|c,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=r;i-=r)o.push((n>>i-r&a)>>>0);let l=ya[i];if(l===void 0)throw new Error("invalid carry");n&=l-1}if(n=n<<r-i&a,!u&&i>=t)throw new Error("Excess padding");if(!u&&n>0)throw new Error(`Non-zero padding: ${n}`);return u&&i>0&&o.push(n>>>0),o}function D8(e,t=!1){if(wa(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ln(8,e)>32||Ln(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!Bh(r))throw new Error("radix2.encode input should be Uint8Array");return Fh(Array.from(r),8,e,!t)},decode:r=>(k8("radix2.decode",r),Uint8Array.from(Fh(r,e,8,t)))}}var P8=typeof Uint8Array.from([]).toBase64=="function"&&typeof Uint8Array.fromBase64=="function",U8=(e,t)=>{Xr("base64",e);let r=t?/^[A-Za-z0-9=_-]+$/:/^[A-Za-z0-9=+/]+$/,u=t?"base64url":"base64";if(e.length>0&&!r.test(e))throw new Error("invalid base64");return Uint8Array.fromBase64(e,{alphabet:u,lastChunkHandling:"strict"})},Hh=P8?{encode(e){return R8(e),e.toBase64()},decode(e){return U8(e,!1)}}:L8(D8(6),N8("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),O8(6),C8(""));var Vh=Object.freeze(["INVALID_INPUT","INVALID_CONFIG","NO_CREDENTIALS","MATCH_MISS","ACCOUNT_CHANGED","AUTH_FAILED","ACCESS_DENIED","RATE_LIMITED","REQUEST_TIMEOUT","OPERATION_TIMEOUT","ABORTED","QUEUE_FULL","CATALOG_LIMIT","CATALOG_PARTIAL","AMBIGUOUS_EPISODE","FILE_NOT_FOUND","QUALITY_UNAVAILABLE","QUALITY_DOWNGRADED","URL_EXPIRED","TRANSFER_UNCERTAIN","UPSTREAM_ERROR","UNEXPECTED_HTTP","RESPONSE_TOO_LARGE","SITE_UNAVAILABLE","PROVIDER_UNAVAILABLE","ACCOUNTS_UNAVAILABLE","ORIGIN_ACCESS_DENIED"]),Aa=class extends Error{constructor(t,r={}){let u=Vh.includes(t)?t:"UPSTREAM_ERROR";super(u.replaceAll("_"," ").toLowerCase()),this.name="ResolverError",Object.assign(this,F8(r)),this.code=u}},xe=(e,t)=>new Aa(e,t);function F8(e={}){let t={};Vh.includes(e.code)&&(t.code=e.code);for(let r of["status","upstreamCode","count","durationMs"])typeof e[r]=="number"&&Number.isFinite(e[r])&&(t[r]=e[r]);return typeof e.upstreamCode=="string"&&/^-?\d{1,10}$/.test(e.upstreamCode)&&(t.upstreamCode=e.upstreamCode),["request","search","detail","listFiles","resolve","transfer","poll","cache"].includes(e.stage)&&(t.stage=e.stage),["quark","baidu","uc","115","123"].includes(e.provider)&&(t.provider=e.provider),["muou","huajuan","zhizhen","woniu","tgsou","tg-channels","wogg","labi","shandian","duoduo","ouge","huban","xiaoban"].includes(e.siteId)&&(t.siteId=e.siteId),typeof e.retryable=="boolean"&&(t.retryable=e.retryable),t}function Gh(e){return typeof e=="string"&&/^[A-Za-z0-9+/_-]+={0,2}$/.test(e)?e.replace(/\+/g,"-").replace(/\//g,"_"):e}function B8(e){return e.method!=="GET"||typeof e.url!="string"||!/^https:\/\/(?:pc-api\.uc\.cn|drive-(?:h|pc)\.quark\.cn)\/1\/clouddrive\/share\/sharepage\/detail(?:\?|$)/i.test(e.url)?e.url:e.url.replace(/([?&]stoken=)([^&#]*)/g,(t,r,u)=>{let n;try{n=decodeURIComponent(u)}catch{return t}return!/^[A-Za-z0-9+/_-]+={0,2}$/.test(n)||!/[+/]/.test(n)?t:r+encodeURIComponent(Gh(n))})}function M8(e){if(e.method!=="POST"||typeof e.body!="string"||!/^https:\/\/(?:pc-api\.uc\.cn\/1\/clouddrive\/file\/download|drive-h\.quark\.cn\/1\/clouddrive\/share\/sharepage\/save)(?:\?|$)/i.test(e.url))return e.body;try{let t=JSON.parse(e.body),r=Gh(t?.stoken);return typeof t?.stoken!="string"||r===t.stoken?e.body:JSON.stringify({...t,stoken:r})}catch{return e.body}}function $h(e){if(typeof e?.http?.request!="function")throw xe("INVALID_CONFIG");return{async request(t){let r;try{r=await e.http.request({url:B8(t),method:t.method,headers:{...t.headers},...t.body===void 0?{}:{data:M8(t)},timeout:t.timeoutMs/1e3,allow_redirects:!1,base64Data:!0})}catch(i){if(i?.response)r=i.response;else{let s=Number(/^HTTP ([1-5]\d{2})(?::|$)/.exec(String(i?.message??""))?.[1])||void 0,a=s===400&&t.method==="POST"&&/^https:\/\/drive-pc\.quark\.cn\/1\/clouddrive\/file\/download(?:\?|$)/i.test(t.url),o=t.method==="POST"&&/^https:\/\/drive-pc\.quark\.cn\/1\/clouddrive\/file\/download(?:\?|$)/i.test(t.url);throw xe(s===401?"AUTH_FAILED":s===429?"RATE_LIMITED":s===403?o?"ORIGIN_ACCESS_DENIED":"ACCESS_DENIED":a?"QUALITY_UNAVAILABLE":"UPSTREAM_ERROR",{status:s})}}let u=Number(r?.statusCode??r?.status);if(!Number.isInteger(u)||u<100||u>599||typeof r.data!="string")throw xe("UPSTREAM_ERROR");if(r.data.length>4*Math.ceil(t.maxResponseBytes/3))throw xe("RESPONSE_TOO_LARGE");let n;try{n=Hh.decode(r.data)}catch{throw xe("UPSTREAM_ERROR")}if(n.byteLength>t.maxResponseBytes)throw xe("RESPONSE_TOO_LARGE");return{status:u,headers:r.headers??{},body:n}}}}var j8={"zh-hans":"zh-Hans","zh-cn":"zh-Hans",chs:"zh-Hans",sc:"zh-Hans",\u7B80\u4F53:"zh-Hans",\u7B80\u4E2D:"zh-Hans","zh-hant":"zh-Hant","zh-tw":"zh-Hant",cht:"zh-Hant",tc:"zh-Hant",\u7E41\u4F53:"zh-Hant",\u7E41\u4E2D:"zh-Hant",zh:"zh",chi:"zh",zho:"zh",\u4E2D\u6587:"zh",en:"en",eng:"en",\u82F1\u6587:"en",ja:"ja",jpn:"ja",\u65E5\u6587:"ja",ko:"ko",kor:"ko",fr:"fr",fra:"fr",de:"de",deu:"de",es:"es",spa:"es",yue:"yue",\u7CA4\u8BED:"yue"},zh=[...Object.keys(j8),"forced","sdh","cc"].sort((e,t)=>t.length-e.length).join("|"),sE=new RegExp(`(?:[._\\s-]+(${zh})|[._\\s-]*[\\[\uFF08(](${zh})[\\]\uFF09)])$`,"i");function H8(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Qr(e,...t){if(!H8(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function Sa(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Wh(e,t){Qr(e);let r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}function et(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function Cn(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Le(e,t){return e<<32-t|e>>>t}function On(e,t){return e<<t|e>>>32-t>>>0}var V8=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",G8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Jh(e){if(Qr(e),V8)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=G8[e[r]];return t}function $8(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}function Ea(e){return typeof e=="string"&&(e=$8(e)),Qr(e),e}var Nn=class{};function Dn(e){let t=u=>e().update(Ea(u)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function z8(e,t,r,u){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,u);let n=BigInt(32),i=BigInt(4294967295),s=Number(r>>n&i),a=Number(r&i),o=u?4:0,c=u?0:4;e.setUint32(t+o,s,u),e.setUint32(t+c,a,u)}function Pn(e,t,r){return e&t^~e&r}function Un(e,t,r){return e&t^e&r^t&r}var Zt=class extends Nn{constructor(t,r,u,n){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=t,this.outputLen=r,this.padOffset=u,this.isLE=n,this.buffer=new Uint8Array(t),this.view=Cn(this.buffer)}update(t){Sa(this),t=Ea(t),Qr(t);let{view:r,buffer:u,blockLen:n}=this,i=t.length;for(let s=0;s<i;){let a=Math.min(n-this.pos,i-s);if(a===n){let o=Cn(t);for(;n<=i-s;s+=n)this.process(o,s);continue}u.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===n&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Sa(this),Wh(t,this),this.finished=!0;let{buffer:r,view:u,blockLen:n,isLE:i}=this,{pos:s}=this;r[s++]=128,et(this.buffer.subarray(s)),this.padOffset>n-s&&(this.process(u,0),s=0);for(let f=s;f<n;f++)r[f]=0;z8(u,n-8,BigInt(this.length*8),i),this.process(u,0);let a=Cn(t),o=this.outputLen;if(o%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=o/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<c;f++)a.setUint32(4*f,l[f],i)}digest(){let{buffer:t,outputLen:r}=this;this.digestInto(t);let u=t.slice(0,r);return this.destroy(),u}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:r,buffer:u,length:n,finished:i,destroyed:s,pos:a}=this;return t.destroyed=s,t.finished=i,t.length=n,t.pos=a,n%r&&t.buffer.set(u),t}clone(){return this._cloneInto()}},Ve=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var Zr=Uint32Array.from([1732584193,4023233417,2562383102,271733878,3285377520]),tt=new Uint32Array(80),Fn=class extends Zt{constructor(){super(64,20,8,!1),this.A=Zr[0]|0,this.B=Zr[1]|0,this.C=Zr[2]|0,this.D=Zr[3]|0,this.E=Zr[4]|0}get(){let{A:t,B:r,C:u,D:n,E:i}=this;return[t,r,u,n,i]}set(t,r,u,n,i){this.A=t|0,this.B=r|0,this.C=u|0,this.D=n|0,this.E=i|0}process(t,r){for(let o=0;o<16;o++,r+=4)tt[o]=t.getUint32(r,!1);for(let o=16;o<80;o++)tt[o]=On(tt[o-3]^tt[o-8]^tt[o-14]^tt[o-16],1);let{A:u,B:n,C:i,D:s,E:a}=this;for(let o=0;o<80;o++){let c,l;o<20?(c=Pn(n,i,s),l=1518500249):o<40?(c=n^i^s,l=1859775393):o<60?(c=Un(n,i,s),l=2400959708):(c=n^i^s,l=3395469782);let f=On(u,5)+c+a+l+tt[o]|0;a=s,s=i,i=On(n,30),n=u,u=f}u=u+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,this.set(u,n,i,s,a)}roundClean(){et(tt)}destroy(){this.set(0,0,0,0,0),et(this.buffer)}},Kh=Dn(()=>new Fn);var Yh=Kh;var W8=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),rt=new Uint32Array(64),Bn=class extends Zt{constructor(t=32){super(64,t,8,!1),this.A=Ve[0]|0,this.B=Ve[1]|0,this.C=Ve[2]|0,this.D=Ve[3]|0,this.E=Ve[4]|0,this.F=Ve[5]|0,this.G=Ve[6]|0,this.H=Ve[7]|0}get(){let{A:t,B:r,C:u,D:n,E:i,F:s,G:a,H:o}=this;return[t,r,u,n,i,s,a,o]}set(t,r,u,n,i,s,a,o){this.A=t|0,this.B=r|0,this.C=u|0,this.D=n|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=o|0}process(t,r){for(let f=0;f<16;f++,r+=4)rt[f]=t.getUint32(r,!1);for(let f=16;f<64;f++){let h=rt[f-15],d=rt[f-2],p=Le(h,7)^Le(h,18)^h>>>3,x=Le(d,17)^Le(d,19)^d>>>10;rt[f]=x+rt[f-7]+p+rt[f-16]|0}let{A:u,B:n,C:i,D:s,E:a,F:o,G:c,H:l}=this;for(let f=0;f<64;f++){let h=Le(a,6)^Le(a,11)^Le(a,25),d=l+h+Pn(a,o,c)+W8[f]+rt[f]|0,x=(Le(u,2)^Le(u,13)^Le(u,22))+Un(u,n,i)|0;l=c,c=o,o=a,a=s+d|0,s=i,i=n,n=u,u=d+x|0}u=u+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,o=o+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(u,n,i,s,a,o,c,l)}roundClean(){et(rt)}destroy(){this.set(0,0,0,0,0,0,0,0),et(this.buffer)}};var Xh=Dn(()=>new Bn);var Qh=Xh;function Ta(e){let t={sha1:Yh,sha256:Qh}[e];if(!t)throw new TypeError("Unsupported hash algorithm");let r=t.create(),u={update(n){return r.update(n),u},digest(n){if(n!=="hex")throw new TypeError("Unsupported hash format");return Jh(r.digest())}};return u}function _a(e,t="INVALID_INPUT"){if(!e||typeof e!="object"||Array.isArray(e)||![Object.prototype,null].includes(Object.getPrototypeOf(e)))throw xe(t);return e}function Ia(e,{empty:t=!1,nullable:r=!1}={}){if(r&&e==null)return null;if(typeof e!="string"||!t&&!e.trim())throw xe("INVALID_INPUT");return e}var J8=e=>["explicit","context"].includes(e),Zh=e=>{if(/^\d+$/.test(e))return Number(e);let t="\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D",r=0,u=0;for(let n of e.replaceAll("\u4E24","\u4E8C").replaceAll("\u3007","\u96F6"))t.includes(n)?u=t.indexOf(n):(r+=(u||1)*(n==="\u767E"?100:10),u=0);return r+u},qa=e=>Number.isSafeInteger(e)&&e>=0,e1="[\u96F6\u3007\u4E00\u4E8C\u4E24\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\\d]+";function t1(e){let t=/(?:^|[^a-z0-9])(?:s|season\s*)(\d{1,3})(?=$|[^a-z0-9]|e\d)/i.exec(e)??new RegExp(`\u7B2C(${e1})\u5B63`).exec(e),r=/(?:^|[^a-z0-9])(?:e|ep|episode)\s*(\d{1,5})(?=$|[^a-z0-9])/i.exec(e)??/s\d{1,3}e(\d{1,5})(?=$|[^a-z0-9])/i.exec(e)??new RegExp(`\u7B2C(${e1})[\u96C6\u8BDD\u8A71]`).exec(e);return{season:t?Zh(t[1]):null,episode:r?Zh(r[1]):null}}function K8(e){return/(?:^|[^a-z])(?:sp\d*|ova\d*|oad\d*|specials?)(?=$|[^a-z])|特别篇|特別篇|番外/i.test(e)?"special":/花絮|幕后|幕後|预告|預告|(?:^|[^a-z])(?:extras?|trailers?|behind[ ._-]+the[ ._-]+scenes)(?=$|[^a-z])/i.test(e)?"extra":null}function Y8(e){return{code:"AMBIGUOUS_EPISODE",siteId:e.siteId,provider:e.provider,sourceId:e.id,shareId:e.shareId,stage:"listFiles",retryable:!1,message:xe("AMBIGUOUS_EPISODE").message}}function r1(e){_a(e);let t=Ia(e.name).replace(/\.(?:mkv|mp4|avi|m4v|ts|mov|wmv|flv|webm|m2ts)$/i,""),r=Ia(e.parentPath??"",{empty:!0}).split(/[\\/]/).filter(Boolean).reverse(),u=_a(e.share?.context??{}),n=(e.mediaType??u.mediaType)==="movie",s=[{...t1(t),evidence:"explicit"}];for(let l of["season","episode"])qa(e[l])&&e.evidence?.[l]==="explicit"&&s.push({[l]:e[l],evidence:"explicit"});for(let l of[...r,u.groupLabel,u.title])typeof l=="string"&&s.push({...t1(l),evidence:"context"});qa(u.seasonHint)&&s.push({season:u.seasonHint,evidence:"context"});for(let l of["season","episode"])qa(e[l])&&["context","weak"].includes(e.evidence?.[l])&&s.push({[l]:e[l],evidence:e.evidence[l]});let a={season:null,episode:null,kind:"unknown",specialLabel:null,evidence:{season:"unknown",episode:"unknown"},diagnostics:[]},o=!1;if(!n)for(let l of["season","episode"]){let f=s.filter(h=>h[l]!=null);f.length&&(a[l]=f[0][l],a.evidence[l]=f[0].evidence,o||(o=f.some(h=>J8(h.evidence)&&h[l]!==a[l])))}let c=[t,...r,u.groupLabel].filter(l=>typeof l=="string").map(K8).find(Boolean);return a.kind=c??(["special","extra"].includes(e.kind)?e.kind:a.episode!==null?"regular":"unknown"),["special","extra"].includes(a.kind)&&(a.specialLabel=e.specialLabel??t),o&&a.diagnostics.push(Y8(e)),a}var ka=e=>typeof e=="string"&&e.length<=200&&!/[\x00-\x1f\x7f]/.test(e)?e.trim():"",Ra=e=>/^(?:19|20)\d{2}$/.test(String(e??""))?Number(e):null;function u1(e,t=!1){let r=ka(e),u=null;t&&(r=r.replace(/^[🎬🎥📺]\s*/u,"").replace(/^(?:名称|片名)\s*[:：]\s*/,"").replace(/\s*(?:更新(?:至|到)?\s*\d|更至|全\s*\d+\s*[集期]|完结|已完结)[\s\S]*$/,"")),r=r.replace(/[（(]\s*(?:真彩|臻彩)\s*[）)]/g,"").trim();let n=r1({name:r||"?"}).season;for(let i=0;i<4;i++){let s=r;if(r=r.replace(/([）)\]])(?:\d{3,4}p|[248]K|HDR\d*|UHD)(?=\s|$)[\s\S]*$/i,"$1").replace(/\s*[（(]\s*((?:19|20)\d{2})(?:-\d{2}-\d{2})?\s*[）)]\s*$/,(a,o)=>(u??(u=Number(o)),"")).replace(/\s*[\[(（](?:\d{3,4}p|[248]K|HDR\d*|UHD|WEB-?DL|蓝光|杜比|简繁中字|中文字幕)[^\])）]*[\])）]\s*$/i,"").replace(/\s+(?:\d{3,4}p|[248]K|HDR\d*|UHD|WEB-?DL|蓝光|杜比|高码率?)(?=\s|$)[\s\S]*$/i,"").replace(/\s*(?:第\s*[零〇一二两三四五六七八九十百\d]+\s*季|season\s*\d+)\s*$/i,"").trim(),r===s)break}return{title:r,key:r.replace(/[\s·:：._\-]/g,"").toLowerCase(),year:u,season:n}}function La(e){let t=[e.seriesName,e.title,e.name,e.keyword].map(ka).find(Boolean);return X8([t,e.originalName,e.originalTitle,...Array.isArray(e.alternativeTitles)?e.alternativeTitles:[]])}function X8(e){let t=new Set;return e.map(ka).filter(r=>{let u=u1(r).key;return!u||t.has(u)?!1:(t.add(u),!0)}).slice(0,16)}function n1(e){let t=[Ra(e.year),Ra(e.releaseYear),e.type==="movie"?Ra(String(e.airDate||"").slice(0,4)):null].filter(n=>n!==null),r=t[0]??null,u=u1(La(e)[0]||"").year;return{year:r??u,conflict:new Set([...t,u].filter(n=>n!==null)).size>1}}var Q8={_useHtmlParser2:!1};function eu(e,t){if(!e)return t??Q8;let r={_useHtmlParser2:!!e.xmlMode,...t,...e};return e.xml?(r._useHtmlParser2=!0,r.xmlMode=!0,e.xml!==!0&&Object.assign(r,e.xml)):e.xmlMode&&(r._useHtmlParser2=!0),r}var Ga={};Be(Ga,{contains:()=>ei,extract:()=>W4,html:()=>V4,merge:()=>P1,parseHTML:()=>$4,root:()=>z4,text:()=>At,xml:()=>G4});var at={};Be(at,{DocumentPosition:()=>ge,append:()=>T4,appendChild:()=>E4,compareDocumentPosition:()=>N1,existsOne:()=>k1,filter:()=>sr,find:()=>Yn,findAll:()=>R4,findOne:()=>Xn,findOneChild:()=>q4,getAttributeValue:()=>v4,getChildren:()=>ir,getElementById:()=>C4,getElements:()=>N4,getElementsByClassName:()=>O4,getElementsByTagName:()=>wt,getElementsByTagType:()=>D4,getFeed:()=>Va,getInnerHTML:()=>y4,getName:()=>A4,getOuterHTML:()=>q1,getParent:()=>R1,getSiblings:()=>ja,getText:()=>Wn,hasAttrib:()=>w4,hasChildren:()=>L,innerText:()=>cu,isCDATA:()=>er,isComment:()=>au,isDocument:()=>Fe,isTag:()=>w,isText:()=>Ue,nextElementSibling:()=>Jn,prepend:()=>I4,prependChild:()=>_4,prevElementSibling:()=>Kn,removeElement:()=>$e,removeSubsets:()=>P4,replaceElement:()=>S4,testElement:()=>L4,textContent:()=>Ge,uniqueSort:()=>it});var R;(function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"})(R||(R={}));function i1(e){return e.type===R.Tag||e.type===R.Script||e.type===R.Style}var s1=R.Root,a1=R.Text,o1=R.Directive,c1=R.Comment,f1=R.Script,l1=R.Style,d1=R.Tag,h1=R.CDATA,p1=R.Doctype;var Mn=class{constructor(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}get parentNode(){return this.parent}set parentNode(t){this.parent=t}get previousSibling(){return this.prev}set previousSibling(t){this.prev=t}get nextSibling(){return this.next}set nextSibling(t){this.next=t}cloneNode(t=!1){return tr(this,t)}},tu=class extends Mn{constructor(t){super(),this.data=t}get nodeValue(){return this.data}set nodeValue(t){this.data=t}},ut=class extends tu{constructor(){super(...arguments),this.type=R.Text}get nodeType(){return 3}},ru=class extends tu{constructor(){super(...arguments),this.type=R.Comment}get nodeType(){return 8}},uu=class extends tu{constructor(t,r){super(r),this.name=t,this.type=R.Directive}get nodeType(){return 1}},nu=class extends Mn{constructor(t){super(),this.children=t}get firstChild(){var t;return(t=this.children[0])!==null&&t!==void 0?t:null}get lastChild(){return this.children.length>0?this.children[this.children.length-1]:null}get childNodes(){return this.children}set childNodes(t){this.children=t}},iu=class extends nu{constructor(){super(...arguments),this.type=R.CDATA}get nodeType(){return 4}},Pe=class extends nu{constructor(){super(...arguments),this.type=R.Root}get nodeType(){return 9}},su=class extends nu{constructor(t,r,u=[],n=t==="script"?R.Script:t==="style"?R.Style:R.Tag){super(u),this.name=t,this.attribs=r,this.type=n}get nodeType(){return 1}get tagName(){return this.name}set tagName(t){this.name=t}get attributes(){return Object.keys(this.attribs).map(t=>{var r,u;return{name:t,value:this.attribs[t],namespace:(r=this["x-attribsNamespace"])===null||r===void 0?void 0:r[t],prefix:(u=this["x-attribsPrefix"])===null||u===void 0?void 0:u[t]}})}};function w(e){return i1(e)}function er(e){return e.type===R.CDATA}function Ue(e){return e.type===R.Text}function au(e){return e.type===R.Comment}function Z8(e){return e.type===R.Directive}function Fe(e){return e.type===R.Root}function L(e){return Object.prototype.hasOwnProperty.call(e,"children")}function tr(e,t=!1){let r;if(Ue(e))r=new ut(e.data);else if(au(e))r=new ru(e.data);else if(w(e)){let u=t?Na(e.children):[],n=new su(e.name,{...e.attribs},u);u.forEach(i=>i.parent=n),e.namespace!=null&&(n.namespace=e.namespace),e["x-attribsNamespace"]&&(n["x-attribsNamespace"]={...e["x-attribsNamespace"]}),e["x-attribsPrefix"]&&(n["x-attribsPrefix"]={...e["x-attribsPrefix"]}),r=n}else if(er(e)){let u=t?Na(e.children):[],n=new iu(u);u.forEach(i=>i.parent=n),r=n}else if(Fe(e)){let u=t?Na(e.children):[],n=new Pe(u);u.forEach(i=>i.parent=n),e["x-mode"]&&(n["x-mode"]=e["x-mode"]),r=n}else if(Z8(e)){let u=new uu(e.name,e.data);e["x-name"]!=null&&(u["x-name"]=e["x-name"],u["x-publicId"]=e["x-publicId"],u["x-systemId"]=e["x-systemId"]),r=u}else throw new Error(`Not implemented yet: ${e.type}`);return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}function Na(e){let t=e.map(r=>tr(r,!0));for(let r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}var x1={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},rr=class{constructor(t,r,u){this.dom=[],this.root=new Pe(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof r=="function"&&(u=r,r=x1),typeof t=="object"&&(r=t,t=void 0),this.callback=t??null,this.options=r??x1,this.elementCB=u??null}onparserinit(t){this.parser=t}onreset(){this.dom=[],this.root=new Pe(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null}onend(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))}onerror(t){this.handleCallback(t)}onclosetag(){this.lastNode=null;let t=this.tagStack.pop();this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(t)}onopentag(t,r){let u=this.options.xmlMode?R.Tag:void 0,n=new su(t,r,void 0,u);this.addNode(n),this.tagStack.push(n)}ontext(t){let{lastNode:r}=this;if(r&&r.type===R.Text)r.data+=t,this.options.withEndIndices&&(r.endIndex=this.parser.endIndex);else{let u=new ut(t);this.addNode(u),this.lastNode=u}}oncomment(t){if(this.lastNode&&this.lastNode.type===R.Comment){this.lastNode.data+=t;return}let r=new ru(t);this.addNode(r),this.lastNode=r}oncommentend(){this.lastNode=null}oncdatastart(){let t=new ut(""),r=new iu([t]);this.addNode(r),t.parent=r,this.lastNode=t}oncdataend(){this.lastNode=null}onprocessinginstruction(t,r){let u=new uu(t,r);this.addNode(u)}handleCallback(t){if(typeof this.callback=="function")this.callback(t,this.dom);else if(t)throw t}addNode(t){let r=this.tagStack[this.tagStack.length-1],u=r.children[r.children.length-1];this.options.withStartIndices&&(t.startIndex=this.parser.startIndex),this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),r.children.push(t),u&&(t.prev=u,u.next=t),t.parent=r,this.lastNode=null}};var jn=new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(e=>e.charCodeAt(0)));var Hn=new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(e=>e.charCodeAt(0)));var Ca,e4=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),ur=(Ca=String.fromCodePoint)!==null&&Ca!==void 0?Ca:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Oa(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=e4.get(e))!==null&&t!==void 0?t:e}var Y;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Y||(Y={}));var t4=32,nt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(nt||(nt={}));function Da(e){return e>=Y.ZERO&&e<=Y.NINE}function r4(e){return e>=Y.UPPER_A&&e<=Y.UPPER_F||e>=Y.LOWER_A&&e<=Y.LOWER_F}function u4(e){return e>=Y.UPPER_A&&e<=Y.UPPER_Z||e>=Y.LOWER_A&&e<=Y.LOWER_Z||Da(e)}function n4(e){return e===Y.EQUALS||u4(e)}var K;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(K||(K={}));var oe;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(oe||(oe={}));var nr=class{constructor(t,r,u){this.decodeTree=t,this.emitCodePoint=r,this.errors=u,this.state=K.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=oe.Strict}startEntity(t){this.decodeMode=t,this.state=K.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,r){switch(this.state){case K.EntityStart:return t.charCodeAt(r)===Y.NUM?(this.state=K.NumericStart,this.consumed+=1,this.stateNumericStart(t,r+1)):(this.state=K.NamedEntity,this.stateNamedEntity(t,r));case K.NumericStart:return this.stateNumericStart(t,r);case K.NumericDecimal:return this.stateNumericDecimal(t,r);case K.NumericHex:return this.stateNumericHex(t,r);case K.NamedEntity:return this.stateNamedEntity(t,r)}}stateNumericStart(t,r){return r>=t.length?-1:(t.charCodeAt(r)|t4)===Y.LOWER_X?(this.state=K.NumericHex,this.consumed+=1,this.stateNumericHex(t,r+1)):(this.state=K.NumericDecimal,this.stateNumericDecimal(t,r))}addToNumericResult(t,r,u,n){if(r!==u){let i=u-r;this.result=this.result*Math.pow(n,i)+parseInt(t.substr(r,i),n),this.consumed+=i}}stateNumericHex(t,r){let u=r;for(;r<t.length;){let n=t.charCodeAt(r);if(Da(n)||r4(n))r+=1;else return this.addToNumericResult(t,u,r,16),this.emitNumericEntity(n,3)}return this.addToNumericResult(t,u,r,16),-1}stateNumericDecimal(t,r){let u=r;for(;r<t.length;){let n=t.charCodeAt(r);if(Da(n))r+=1;else return this.addToNumericResult(t,u,r,10),this.emitNumericEntity(n,2)}return this.addToNumericResult(t,u,r,10),-1}emitNumericEntity(t,r){var u;if(this.consumed<=r)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Y.SEMI)this.consumed+=1;else if(this.decodeMode===oe.Strict)return 0;return this.emitCodePoint(Oa(this.result),this.consumed),this.errors&&(t!==Y.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,r){let{decodeTree:u}=this,n=u[this.treeIndex],i=(n&nt.VALUE_LENGTH)>>14;for(;r<t.length;r++,this.excess++){let s=t.charCodeAt(r);if(this.treeIndex=i4(u,n,this.treeIndex+Math.max(1,i),s),this.treeIndex<0)return this.result===0||this.decodeMode===oe.Attribute&&(i===0||n4(s))?0:this.emitNotTerminatedNamedEntity();if(n=u[this.treeIndex],i=(n&nt.VALUE_LENGTH)>>14,i!==0){if(s===Y.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==oe.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;let{result:r,decodeTree:u}=this,n=(u[r]&nt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,n,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,r,u){let{decodeTree:n}=this;return this.emitCodePoint(r===1?n[t]&~nt.VALUE_LENGTH:n[t+1],u),r===3&&this.emitCodePoint(n[t+2],u),u}end(){var t;switch(this.state){case K.NamedEntity:return this.result!==0&&(this.decodeMode!==oe.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case K.NumericDecimal:return this.emitNumericEntity(0,2);case K.NumericHex:return this.emitNumericEntity(0,3);case K.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case K.EntityStart:return 0}}};function g1(e){let t="",r=new nr(e,u=>t+=ur(u));return function(n,i){let s=0,a=0;for(;(a=n.indexOf("&",a))>=0;){t+=n.slice(s,a),r.startEntity(i);let c=r.write(n,a+1);if(c<0){s=a+r.end();break}s=a+c,a=c===0?s+1:s}let o=t+n.slice(s);return t="",o}}function i4(e,t,r,u){let n=(t&nt.BRANCH_LENGTH)>>7,i=t&nt.JUMP_TABLE;if(n===0)return i!==0&&u===i?r:-1;if(i){let o=u-i;return o<0||o>=n?-1:e[r+o]-1}let s=r,a=s+n-1;for(;s<=a;){let o=s+a>>>1,c=e[o];if(c<u)s=o+1;else if(c>u)a=o-1;else return e[o+n]}return-1}var nT=g1(jn),iT=g1(Hn);function Vn(e){for(let t=1;t<e.length;t++)e[t][0]+=e[t-1][0]+1;return e}var s4=new Map(Vn([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(Vn([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(Vn([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(Vn([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]));var Pa=/["&'<>$\x80-\uFFFF]/g,m1=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]),y1=String.prototype.codePointAt!=null?(e,t)=>e.codePointAt(t):(e,t)=>(e.charCodeAt(t)&64512)===55296?(e.charCodeAt(t)-55296)*1024+e.charCodeAt(t+1)-56320+65536:e.charCodeAt(t);function ou(e){let t="",r=0,u;for(;(u=Pa.exec(e))!==null;){let n=u.index,i=e.charCodeAt(n),s=m1.get(i);s!==void 0?(t+=e.substring(r,n)+s,r=n+1):(t+=`${e.substring(r,n)}&#x${y1(e,n).toString(16)};`,r=Pa.lastIndex+=+((i&64512)===55296))}return t+e.substr(r)}function Ua(e,t){return function(u){let n,i=0,s="";for(;n=e.exec(u);)i!==n.index&&(s+=u.substring(i,n.index)),s+=t.get(n[0].charCodeAt(0)),i=n.index+1;return s+u.substring(i)}}var v1=Ua(/[&<>'"]/g,m1),Gn=Ua(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),$n=Ua(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]));var w1;(function(e){e[e.XML=0]="XML",e[e.HTML=1]="HTML"})(w1||(w1={}));var A1;(function(e){e[e.UTF8=0]="UTF8",e[e.ASCII=1]="ASCII",e[e.Extensive=2]="Extensive",e[e.Attribute=3]="Attribute",e[e.Text=4]="Text"})(A1||(A1={}));var T1=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),_1=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e]));var o4=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function c4(e){return e.replace(/"/g,"&quot;")}function f4(e,t){var r;if(!e)return;let u=((r=t.encodeEntities)!==null&&r!==void 0?r:t.decodeEntities)===!1?c4:t.xmlMode||t.encodeEntities!=="utf8"?ou:Gn;return Object.keys(e).map(n=>{var i,s;let a=(i=e[n])!==null&&i!==void 0?i:"";return t.xmlMode==="foreign"&&(n=(s=_1.get(n))!==null&&s!==void 0?s:n),!t.emptyAttrs&&!t.xmlMode&&a===""?n:`${n}="${u(a)}"`}).join(" ")}var I1=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function Ma(e,t={}){let r="length"in e?e:[e],u="";for(let n=0;n<r.length;n++)u+=l4(r[n],t);return u}var zn=Ma;function l4(e,t){switch(e.type){case s1:return Ma(e.children,t);case p1:case o1:return b4(e);case c1:return m4(e);case h1:return g4(e);case f1:case l1:case d1:return p4(e,t);case a1:return x4(e,t)}}var d4=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),h4=new Set(["svg","math"]);function p4(e,t){var r;t.xmlMode==="foreign"&&(e.name=(r=T1.get(e.name))!==null&&r!==void 0?r:e.name,e.parent&&d4.has(e.parent.name)&&(t={...t,xmlMode:!1})),!t.xmlMode&&h4.has(e.name)&&(t={...t,xmlMode:"foreign"});let u=`<${e.name}`,n=f4(e.attribs,t);return n&&(u+=` ${n}`),e.children.length===0&&(t.xmlMode?t.selfClosingTags!==!1:t.selfClosingTags&&I1.has(e.name))?(t.xmlMode||(u+=" "),u+="/>"):(u+=">",e.children.length>0&&(u+=Ma(e.children,t)),(t.xmlMode||!I1.has(e.name))&&(u+=`</${e.name}>`)),u}function b4(e){return`<${e.data}>`}function x4(e,t){var r;let u=e.data||"";return((r=t.encodeEntities)!==null&&r!==void 0?r:t.decodeEntities)!==!1&&!(!t.xmlMode&&e.parent&&o4.has(e.parent.name))&&(u=t.xmlMode||t.encodeEntities!=="utf8"?ou(u):$n(u)),u}function g4(e){return`<![CDATA[${e.children[0].data}]]>`}function m4(e){return`<!--${e.data}-->`}function q1(e,t){return zn(e,t)}function y4(e,t){return L(e)?e.children.map(r=>q1(r,t)).join(""):""}function Wn(e){return Array.isArray(e)?e.map(Wn).join(""):w(e)?e.name==="br"?`
`:Wn(e.children):er(e)?Wn(e.children):Ue(e)?e.data:""}function Ge(e){return Array.isArray(e)?e.map(Ge).join(""):L(e)&&!au(e)?Ge(e.children):Ue(e)?e.data:""}function cu(e){return Array.isArray(e)?e.map(cu).join(""):L(e)&&(e.type===R.Tag||er(e))?cu(e.children):Ue(e)?e.data:""}function ir(e){return L(e)?e.children:[]}function R1(e){return e.parent||null}function ja(e){let t=R1(e);if(t!=null)return ir(t);let r=[e],{prev:u,next:n}=e;for(;u!=null;)r.unshift(u),{prev:u}=u;for(;n!=null;)r.push(n),{next:n}=n;return r}function v4(e,t){var r;return(r=e.attribs)===null||r===void 0?void 0:r[t]}function w4(e,t){return e.attribs!=null&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&e.attribs[t]!=null}function A4(e){return e.name}function Jn(e){let{next:t}=e;for(;t!==null&&!w(t);)({next:t}=t);return t}function Kn(e){let{prev:t}=e;for(;t!==null&&!w(t);)({prev:t}=t);return t}function $e(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){let t=e.parent.children,r=t.lastIndexOf(e);r>=0&&t.splice(r,1)}e.next=null,e.prev=null,e.parent=null}function S4(e,t){let r=t.prev=e.prev;r&&(r.next=t);let u=t.next=e.next;u&&(u.prev=t);let n=t.parent=e.parent;if(n){let i=n.children;i[i.lastIndexOf(e)]=t,e.parent=null}}function E4(e,t){if($e(t),t.next=null,t.parent=e,e.children.push(t)>1){let r=e.children[e.children.length-2];r.next=t,t.prev=r}else t.prev=null}function T4(e,t){$e(t);let{parent:r}=e,u=e.next;if(t.next=u,t.prev=e,e.next=t,t.parent=r,u){if(u.prev=t,r){let n=r.children;n.splice(n.lastIndexOf(u),0,t)}}else r&&r.children.push(t)}function _4(e,t){if($e(t),t.parent=e,t.prev=null,e.children.unshift(t)!==1){let r=e.children[1];r.prev=t,t.next=r}else t.next=null}function I4(e,t){$e(t);let{parent:r}=e;if(r){let u=r.children;u.splice(u.indexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=r,t.prev=e.prev,t.next=e,e.prev=t}function sr(e,t,r=!0,u=1/0){return Yn(e,Array.isArray(t)?t:[t],r,u)}function Yn(e,t,r,u){let n=[],i=[Array.isArray(t)?t:[t]],s=[0];for(;;){if(s[0]>=i[0].length){if(s.length===1)return n;i.shift(),s.shift();continue}let a=i[0][s[0]++];if(e(a)&&(n.push(a),--u<=0))return n;r&&L(a)&&a.children.length>0&&(s.unshift(0),i.unshift(a.children))}}function q4(e,t){return t.find(e)}function Xn(e,t,r=!0){let u=Array.isArray(t)?t:[t];for(let n=0;n<u.length;n++){let i=u[n];if(w(i)&&e(i))return i;if(r&&L(i)&&i.children.length>0){let s=Xn(e,i.children,!0);if(s)return s}}return null}function k1(e,t){return(Array.isArray(t)?t:[t]).some(r=>w(r)&&e(r)||L(r)&&k1(e,r.children))}function R4(e,t){let r=[],u=[Array.isArray(t)?t:[t]],n=[0];for(;;){if(n[0]>=u[0].length){if(u.length===1)return r;u.shift(),n.shift();continue}let i=u[0][n[0]++];w(i)&&e(i)&&r.push(i),L(i)&&i.children.length>0&&(n.unshift(0),u.unshift(i.children))}}var Qn={tag_name(e){return typeof e=="function"?t=>w(t)&&e(t.name):e==="*"?w:t=>w(t)&&t.name===e},tag_type(e){return typeof e=="function"?t=>e(t.type):t=>t.type===e},tag_contains(e){return typeof e=="function"?t=>Ue(t)&&e(t.data):t=>Ue(t)&&t.data===e}};function Ha(e,t){return typeof t=="function"?r=>w(r)&&t(r.attribs[e]):r=>w(r)&&r.attribs[e]===t}function k4(e,t){return r=>e(r)||t(r)}function L1(e){let t=Object.keys(e).map(r=>{let u=e[r];return Object.prototype.hasOwnProperty.call(Qn,r)?Qn[r](u):Ha(r,u)});return t.length===0?null:t.reduce(k4)}function L4(e,t){let r=L1(e);return r?r(t):!0}function N4(e,t,r,u=1/0){let n=L1(e);return n?sr(n,t,r,u):[]}function C4(e,t,r=!0){return Array.isArray(t)||(t=[t]),Xn(Ha("id",e),t,r)}function wt(e,t,r=!0,u=1/0){return sr(Qn.tag_name(e),t,r,u)}function O4(e,t,r=!0,u=1/0){return sr(Ha("class",e),t,r,u)}function D4(e,t,r=!0,u=1/0){return sr(Qn.tag_type(e),t,r,u)}function P4(e){let t=e.length;for(;--t>=0;){let r=e[t];if(t>0&&e.lastIndexOf(r,t-1)>=0){e.splice(t,1);continue}for(let u=r.parent;u;u=u.parent)if(e.includes(u)){e.splice(t,1);break}}return e}var ge;(function(e){e[e.DISCONNECTED=1]="DISCONNECTED",e[e.PRECEDING=2]="PRECEDING",e[e.FOLLOWING=4]="FOLLOWING",e[e.CONTAINS=8]="CONTAINS",e[e.CONTAINED_BY=16]="CONTAINED_BY"})(ge||(ge={}));function N1(e,t){let r=[],u=[];if(e===t)return 0;let n=L(e)?e:e.parent;for(;n;)r.unshift(n),n=n.parent;for(n=L(t)?t:t.parent;n;)u.unshift(n),n=n.parent;let i=Math.min(r.length,u.length),s=0;for(;s<i&&r[s]===u[s];)s++;if(s===0)return ge.DISCONNECTED;let a=r[s-1],o=a.children,c=r[s],l=u[s];return o.indexOf(c)>o.indexOf(l)?a===t?ge.FOLLOWING|ge.CONTAINED_BY:ge.FOLLOWING:a===e?ge.PRECEDING|ge.CONTAINS:ge.PRECEDING}function it(e){return e=e.filter((t,r,u)=>!u.includes(t,r+1)),e.sort((t,r)=>{let u=N1(t,r);return u&ge.PRECEDING?-1:u&ge.FOLLOWING?1:0}),e}function Va(e){let t=Zn(j4,e);return t?t.name==="feed"?U4(t):F4(t):null}function U4(e){var t;let r=e.children,u={type:"atom",items:wt("entry",r).map(s=>{var a;let{children:o}=s,c={media:C1(o)};ie(c,"id","id",o),ie(c,"title","title",o);let l=(a=Zn("link",o))===null||a===void 0?void 0:a.attribs.href;l&&(c.link=l);let f=st("summary",o)||st("content",o);f&&(c.description=f);let h=st("updated",o);return h&&(c.pubDate=new Date(h)),c})};ie(u,"id","id",r),ie(u,"title","title",r);let n=(t=Zn("link",r))===null||t===void 0?void 0:t.attribs.href;n&&(u.link=n),ie(u,"description","subtitle",r);let i=st("updated",r);return i&&(u.updated=new Date(i)),ie(u,"author","email",r,!0),u}function F4(e){var t,r;let u=(r=(t=Zn("channel",e.children))===null||t===void 0?void 0:t.children)!==null&&r!==void 0?r:[],n={type:e.name.substr(0,3),id:"",items:wt("item",e.children).map(s=>{let{children:a}=s,o={media:C1(a)};ie(o,"id","guid",a),ie(o,"title","title",a),ie(o,"link","link",a),ie(o,"description","description",a);let c=st("pubDate",a)||st("dc:date",a);return c&&(o.pubDate=new Date(c)),o})};ie(n,"title","title",u),ie(n,"link","link",u),ie(n,"description","description",u);let i=st("lastBuildDate",u);return i&&(n.updated=new Date(i)),ie(n,"author","managingEditor",u,!0),n}var B4=["url","type","lang"],M4=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function C1(e){return wt("media:content",e).map(t=>{let{attribs:r}=t,u={medium:r.medium,isDefault:!!r.isDefault};for(let n of B4)r[n]&&(u[n]=r[n]);for(let n of M4)r[n]&&(u[n]=parseInt(r[n],10));return r.expression&&(u.expression=r.expression),u})}function Zn(e,t){return wt(e,t,!0,1)[0]}function st(e,t,r=!1){return Ge(wt(e,t,r,1)).trim()}function ie(e,t,r,u,n=!1){let i=st(r,u,n);i&&(e[t]=i)}function j4(e){return e==="rss"||e==="feed"||e==="rdf:RDF"}function D1(e,t,r){return e?e(t??e._root.children,null,void 0,r).toString():""}function H4(e,t){return!t&&typeof e=="object"&&e!=null&&!("length"in e)&&!("type"in e)}function V4(e,t){let r=H4(e)?(t=e,void 0):e,u={...this===null||this===void 0?void 0:this._options,...eu(t)};return D1(this,r,u)}function G4(e){let t={...this._options,xmlMode:!0};return D1(this,e,t)}function At(e){let t=e??(this?this.root():[]),r="";for(let u=0;u<t.length;u++)r+=Ge(t[u]);return r}function $4(e,t,r=typeof t=="boolean"?t:!1){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(r=t);let u=this.load(e,this._options,!1);return r||u("script").remove(),[...u.root()[0].children]}function z4(){return this(this._root)}function ei(e,t){if(t===e)return!1;let r=t;for(;r&&r!==r.parent;)if(r=r.parent,r===e)return!0;return!1}function W4(e){return this.root().extract(e)}function P1(e,t){if(!O1(e)||!O1(t))return;let r=e.length,u=+t.length;for(let n=0;n<u;n++)e[r++]=t[n];return e.length=r,e}function O1(e){if(Array.isArray(e))return!0;if(typeof e!="object"||e===null||!("length"in e)||typeof e.length!="number"||e.length<0)return!1;for(let t=0;t<e.length;t++)if(!(t in e))return!1;return!0}var Ja={};Be(Ja,{addClass:()=>V1,attr:()=>K4,data:()=>Z4,hasClass:()=>ry,prop:()=>Y4,removeAttr:()=>ty,removeClass:()=>G1,toggleClass:()=>$1,val:()=>ey});function me(e){return e.cheerio!=null}function U1(e){return e.replace(/[._-](\w|$)/g,(t,r)=>r.toUpperCase())}function F1(e){return e.replace(/[A-Z]/g,"-$&").toLowerCase()}function O(e,t){let r=e.length;for(let u=0;u<r;u++)t(e[u],u);return e}var St;(function(e){e[e.LowerA=97]="LowerA",e[e.LowerZ=122]="LowerZ",e[e.UpperA=65]="UpperA",e[e.UpperZ=90]="UpperZ",e[e.Exclamation=33]="Exclamation"})(St||(St={}));function fu(e){let t=e.indexOf("<");if(t<0||t>e.length-3)return!1;let r=e.charCodeAt(t+1);return(r>=St.LowerA&&r<=St.LowerZ||r>=St.UpperA&&r<=St.UpperZ||r===St.Exclamation)&&e.includes(">",t+2)}var lu=Object.prototype.hasOwnProperty,du=/\s+/,za="data-",Wa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,J4=/^{[^]*}$|^\[[^]*]$/;function ti(e,t,r){var u;if(!(!e||!w(e))){if((u=e.attribs)!==null&&u!==void 0||(e.attribs={}),!t)return e.attribs;if(lu.call(e.attribs,t))return!r&&Wa.test(t)?t:e.attribs[t];if(e.name==="option"&&t==="value")return At(e.children);if(e.name==="input"&&(e.attribs.type==="radio"||e.attribs.type==="checkbox")&&t==="value")return"on"}}function ar(e,t,r){r===null?H1(e,t):e.attribs[t]=`${r}`}function K4(e,t){if(typeof e=="object"||t!==void 0){if(typeof t=="function"){if(typeof e!="string")throw new Error("Bad combination of arguments.");return O(this,(r,u)=>{w(r)&&ar(r,e,t.call(r,u,r.attribs[e]))})}return O(this,r=>{if(w(r))if(typeof e=="object")for(let u of Object.keys(e)){let n=e[u];ar(r,u,n)}else ar(r,e,t)})}return arguments.length>1?this:ti(this[0],e,this.options.xmlMode)}function B1(e,t,r){return t in e?e[t]:!r&&Wa.test(t)?ti(e,t,!1)!==void 0:ti(e,t,r)}function $a(e,t,r,u){t in e?e[t]=r:ar(e,t,!u&&Wa.test(t)?r?"":null:`${r}`)}function Y4(e,t){var r;if(typeof e=="string"&&t===void 0){let u=this[0];if(!u||!w(u))return;switch(e){case"style":{let n=this.css(),i=Object.keys(n);for(let s=0;s<i.length;s++)n[s]=i[s];return n.length=i.length,n}case"tagName":case"nodeName":return u.name.toUpperCase();case"href":case"src":{let n=(r=u.attribs)===null||r===void 0?void 0:r[e];return typeof URL<"u"&&(e==="href"&&(u.tagName==="a"||u.tagName==="link")||e==="src"&&(u.tagName==="img"||u.tagName==="iframe"||u.tagName==="audio"||u.tagName==="video"||u.tagName==="source"))&&n!==void 0&&this.options.baseURI?new URL(n,this.options.baseURI).href:n}case"innerText":return cu(u);case"textContent":return Ge(u);case"outerHTML":return this.clone().wrap("<container />").parent().html();case"innerHTML":return this.html();default:return B1(u,e,this.options.xmlMode)}}if(typeof e=="object"||t!==void 0){if(typeof t=="function"){if(typeof e=="object")throw new TypeError("Bad combination of arguments.");return O(this,(u,n)=>{w(u)&&$a(u,e,t.call(u,n,B1(u,e,this.options.xmlMode)),this.options.xmlMode)})}return O(this,u=>{if(w(u))if(typeof e=="object")for(let n of Object.keys(e)){let i=e[n];$a(u,n,i,this.options.xmlMode)}else $a(u,e,t,this.options.xmlMode)})}}function M1(e,t,r){var u;(u=e.data)!==null&&u!==void 0||(e.data={}),typeof t=="object"?Object.assign(e.data,t):typeof t=="string"&&r!==void 0&&(e.data[t]=r)}function X4(e){for(let t of Object.keys(e.attribs)){if(!t.startsWith(za))continue;let r=U1(t.slice(za.length));lu.call(e.data,r)||(e.data[r]=j1(e.attribs[t]))}return e.data}function Q4(e,t){let r=za+F1(t),u=e.data;if(lu.call(u,t))return u[t];if(lu.call(e.attribs,r))return u[t]=j1(e.attribs[r])}function j1(e){if(e==="null")return null;if(e==="true")return!0;if(e==="false")return!1;let t=Number(e);if(e===String(t))return t;if(J4.test(e))try{return JSON.parse(e)}catch{}return e}function Z4(e,t){var r;let u=this[0];if(!u||!w(u))return;let n=u;return(r=n.data)!==null&&r!==void 0||(n.data={}),e==null?X4(n):typeof e=="object"||t!==void 0?(O(this,i=>{w(i)&&(typeof e=="object"?M1(i,e):M1(i,e,t))}),this):Q4(n,e)}function ey(e){let t=arguments.length===0,r=this[0];if(!r||!w(r))return t?void 0:this;switch(r.name){case"textarea":return this.text(e);case"select":{let u=this.find("option:selected");if(!t){if(this.attr("multiple")==null&&typeof e=="object")return this;this.find("option").removeAttr("selected");let n=typeof e=="object"?e:[e];for(let i of n)this.find(`option[value="${i}"]`).attr("selected","");return this}return this.attr("multiple")?u.toArray().map(n=>At(n.children)):u.attr("value")}case"input":case"option":return t?this.attr("value"):this.attr("value",e)}}function H1(e,t){!e.attribs||!lu.call(e.attribs,t)||delete e.attribs[t]}function ri(e){return e?e.trim().split(du):[]}function ty(e){let t=ri(e);for(let r of t)O(this,u=>{w(u)&&H1(u,r)});return this}function ry(e){return this.toArray().some(t=>{let r=w(t)&&t.attribs.class,u=-1;if(r&&e.length>0)for(;(u=r.indexOf(e,u+1))>-1;){let n=u+e.length;if((u===0||du.test(r[u-1]))&&(n===r.length||du.test(r[n])))return!0}return!1})}function V1(e){if(typeof e=="function")return O(this,(u,n)=>{if(w(u)){let i=u.attribs.class||"";V1.call([u],e.call(u,n,i))}});if(!e||typeof e!="string")return this;let t=e.split(du),r=this.length;for(let u=0;u<r;u++){let n=this[u];if(!w(n))continue;let i=ti(n,"class",!1);if(i){let s=` ${i} `;for(let a of t){let o=`${a} `;s.includes(` ${o}`)||(s+=o)}ar(n,"class",s.trim())}else ar(n,"class",t.join(" ").trim())}return this}function G1(e){if(typeof e=="function")return O(this,(n,i)=>{w(n)&&G1.call([n],e.call(n,i,n.attribs.class||""))});let t=ri(e),r=t.length,u=arguments.length===0;return O(this,n=>{if(w(n))if(u)n.attribs.class="";else{let i=ri(n.attribs.class),s=!1;for(let a=0;a<r;a++){let o=i.indexOf(t[a]);o>=0&&(i.splice(o,1),s=!0,a--)}s&&(n.attribs.class=i.join(" "))}})}function $1(e,t){if(typeof e=="function")return O(this,(s,a)=>{w(s)&&$1.call([s],e.call(s,a,s.attribs.class||"",t),t)});if(!e||typeof e!="string")return this;let r=e.split(du),u=r.length,n=typeof t=="boolean"?t?1:-1:0,i=this.length;for(let s=0;s<i;s++){let a=this[s];if(!w(a))continue;let o=ri(a.attribs.class);for(let c=0;c<u;c++){let l=o.indexOf(r[c]);n>=0&&l<0?o.push(r[c]):n<=0&&l>=0&&o.splice(l,1)}a.attribs.class=o.join(" ")}return this}var mo={};Be(mo,{_findBySelector:()=>qy,add:()=>rv,addBack:()=>uv,children:()=>My,closest:()=>Ny,contents:()=>jy,each:()=>Hy,end:()=>tv,eq:()=>Yy,filter:()=>Gy,filterArray:()=>go,find:()=>Iy,first:()=>Jy,get:()=>Xy,has:()=>Wy,index:()=>Zy,is:()=>$y,last:()=>Ky,map:()=>Vy,next:()=>Cy,nextAll:()=>Oy,nextUntil:()=>Dy,not:()=>zy,parent:()=>Ry,parents:()=>ky,parentsUntil:()=>Ly,prev:()=>Py,prevAll:()=>Uy,prevUntil:()=>Fy,siblings:()=>By,slice:()=>ev,toArray:()=>Qy});var A;(function(e){e.Attribute="attribute",e.Pseudo="pseudo",e.PseudoElement="pseudo-element",e.Tag="tag",e.Universal="universal",e.Adjacent="adjacent",e.Child="child",e.Descendant="descendant",e.Parent="parent",e.Sibling="sibling",e.ColumnCombinator="column-combinator"})(A||(A={}));var V;(function(e){e.Any="any",e.Element="element",e.End="end",e.Equals="equals",e.Exists="exists",e.Hyphen="hyphen",e.Not="not",e.Start="start"})(V||(V={}));var z1=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,uy=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,ny=new Map([[126,V.Element],[94,V.Start],[36,V.End],[42,V.Any],[33,V.Not],[124,V.Hyphen]]),iy=new Set(["has","not","matches","is","where","host","host-context"]);function Et(e){switch(e.type){case A.Adjacent:case A.Child:case A.Descendant:case A.Parent:case A.Sibling:case A.ColumnCombinator:return!0;default:return!1}}var sy=new Set(["contains","icontains"]);function ay(e,t,r){let u=parseInt(t,16)-65536;return u!==u||r?t:u<0?String.fromCharCode(u+65536):String.fromCharCode(u>>10|55296,u&1023|56320)}function hu(e){return e.replace(uy,ay)}function Ka(e){return e===39||e===34}function W1(e){return e===32||e===9||e===10||e===12||e===13}function ze(e){let t=[],r=J1(t,`${e}`,0);if(r<e.length)throw new Error(`Unmatched selector: ${e.slice(r)}`);return t}function J1(e,t,r){let u=[];function n(h){let d=t.slice(r+h).match(z1);if(!d)throw new Error(`Expected name, found ${t.slice(r)}`);let[p]=d;return r+=h+p.length,hu(p)}function i(h){for(r+=h;r<t.length&&W1(t.charCodeAt(r));)r++}function s(){r+=1;let h=r,d=1;for(;d>0&&r<t.length;r++)t.charCodeAt(r)===40&&!a(r)?d++:t.charCodeAt(r)===41&&!a(r)&&d--;if(d)throw new Error("Parenthesis not matched");return hu(t.slice(h,r-1))}function a(h){let d=0;for(;t.charCodeAt(--h)===92;)d++;return(d&1)===1}function o(){if(u.length>0&&Et(u[u.length-1]))throw new Error("Did not expect successive traversals.")}function c(h){if(u.length>0&&u[u.length-1].type===A.Descendant){u[u.length-1].type=h;return}o(),u.push({type:h})}function l(h,d){u.push({type:A.Attribute,name:h,action:d,value:n(1),namespace:null,ignoreCase:"quirks"})}function f(){if(u.length&&u[u.length-1].type===A.Descendant&&u.pop(),u.length===0)throw new Error("Empty sub-selector");e.push(u)}if(i(0),t.length===r)return r;e:for(;r<t.length;){let h=t.charCodeAt(r);switch(h){case 32:case 9:case 10:case 12:case 13:{(u.length===0||u[0].type!==A.Descendant)&&(o(),u.push({type:A.Descendant})),i(1);break}case 62:{c(A.Child),i(1);break}case 60:{c(A.Parent),i(1);break}case 126:{c(A.Sibling),i(1);break}case 43:{c(A.Adjacent),i(1);break}case 46:{l("class",V.Element);break}case 35:{l("id",V.Equals);break}case 91:{i(1);let d,p=null;t.charCodeAt(r)===124?d=n(1):t.startsWith("*|",r)?(p="*",d=n(2)):(d=n(0),t.charCodeAt(r)===124&&t.charCodeAt(r+1)!==61&&(p=d,d=n(1))),i(0);let x=V.Exists,S=ny.get(t.charCodeAt(r));if(S){if(x=S,t.charCodeAt(r+1)!==61)throw new Error("Expected `=`");i(2)}else t.charCodeAt(r)===61&&(x=V.Equals,i(1));let m="",k=null;if(x!=="exists"){if(Ka(t.charCodeAt(r))){let G=t.charCodeAt(r),W=r+1;for(;W<t.length&&(t.charCodeAt(W)!==G||a(W));)W+=1;if(t.charCodeAt(W)!==G)throw new Error("Attribute value didn't end");m=hu(t.slice(r+1,W)),r=W+1}else{let G=r;for(;r<t.length&&(!W1(t.charCodeAt(r))&&t.charCodeAt(r)!==93||a(r));)r+=1;m=hu(t.slice(G,r))}i(0);let D=t.charCodeAt(r)|32;D===115?(k=!1,i(1)):D===105&&(k=!0,i(1))}if(t.charCodeAt(r)!==93)throw new Error("Attribute selector didn't terminate");r+=1;let I={type:A.Attribute,name:d,action:x,value:m,namespace:p,ignoreCase:k};u.push(I);break}case 58:{if(t.charCodeAt(r+1)===58){u.push({type:A.PseudoElement,name:n(2).toLowerCase(),data:t.charCodeAt(r)===40?s():null});continue}let d=n(1).toLowerCase(),p=null;if(t.charCodeAt(r)===40)if(iy.has(d)){if(Ka(t.charCodeAt(r+1)))throw new Error(`Pseudo-selector ${d} cannot be quoted`);if(p=[],r=J1(p,t,r+1),t.charCodeAt(r)!==41)throw new Error(`Missing closing parenthesis in :${d} (${t})`);r+=1}else{if(p=s(),sy.has(d)){let x=p.charCodeAt(0);x===p.charCodeAt(p.length-1)&&Ka(x)&&(p=p.slice(1,-1))}p=hu(p)}u.push({type:A.Pseudo,name:d,data:p});break}case 44:{f(),u=[],i(1);break}default:{if(t.startsWith("/*",r)){let x=t.indexOf("*/",r+2);if(x<0)throw new Error("Comment was not terminated");r=x+2,u.length===0&&i(0);break}let d=null,p;if(h===42)r+=1,p="*";else if(h===124){if(p="",t.charCodeAt(r+1)===124){c(A.ColumnCombinator),i(2);break}}else if(z1.test(t.slice(r)))p=n(0);else break e;t.charCodeAt(r)===124&&t.charCodeAt(r+1)!==124&&(d=p,t.charCodeAt(r+1)===42?(p="*",r+=2):p=n(1)),u.push(p==="*"?{type:A.Universal,namespace:d}:{type:A.Tag,name:p,namespace:d})}}}return f(),r}var so=Ne(ot(),1);var We=Ne(ot(),1);var Y1=new Map([[A.Universal,50],[A.Tag,30],[A.Attribute,1],[A.Pseudo,0]]);function pu(e){return!Y1.has(e.type)}var oy=new Map([[V.Exists,10],[V.Equals,8],[V.Not,7],[V.Start,6],[V.End,6],[V.Any,5]]);function Ya(e){let t=e.map(X1);for(let r=1;r<e.length;r++){let u=t[r];if(!(u<0))for(let n=r-1;n>=0&&u<t[n];n--){let i=e[n+1];e[n+1]=e[n],e[n]=i,t[n+1]=t[n],t[n]=u}}}function X1(e){var t,r;let u=(t=Y1.get(e.type))!==null&&t!==void 0?t:-1;return e.type===A.Attribute?(u=(r=oy.get(e.action))!==null&&r!==void 0?r:4,e.action===V.Equals&&e.name==="id"&&(u=9),e.ignoreCase&&(u>>=1)):e.type===A.Pseudo&&(e.data?e.name==="has"||e.name==="contains"?u=0:Array.isArray(e.data)?(u=Math.min(...e.data.map(n=>Math.min(...n.map(X1)))),u<0&&(u=0)):u=2:u=3),u}var bu=Ne(ot(),1),cy=/[-[\]{}()*+?.,\\^$|#\s]/g;function Q1(e){return e.replace(cy,"\\$&")}var fy=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function Tt(e,t){return typeof e.ignoreCase=="boolean"?e.ignoreCase:e.ignoreCase==="quirks"?!!t.quirksMode:!t.xmlMode&&fy.has(e.name)}var Z1={equals(e,t,r){let{adapter:u}=r,{name:n}=t,{value:i}=t;return Tt(t,r)?(i=i.toLowerCase(),s=>{let a=u.getAttributeValue(s,n);return a!=null&&a.length===i.length&&a.toLowerCase()===i&&e(s)}):s=>u.getAttributeValue(s,n)===i&&e(s)},hyphen(e,t,r){let{adapter:u}=r,{name:n}=t,{value:i}=t,s=i.length;return Tt(t,r)?(i=i.toLowerCase(),function(o){let c=u.getAttributeValue(o,n);return c!=null&&(c.length===s||c.charAt(s)==="-")&&c.substr(0,s).toLowerCase()===i&&e(o)}):function(o){let c=u.getAttributeValue(o,n);return c!=null&&(c.length===s||c.charAt(s)==="-")&&c.substr(0,s)===i&&e(o)}},element(e,t,r){let{adapter:u}=r,{name:n,value:i}=t;if(/\s/.test(i))return bu.default.falseFunc;let s=new RegExp(`(?:^|\\s)${Q1(i)}(?:$|\\s)`,Tt(t,r)?"i":"");return function(o){let c=u.getAttributeValue(o,n);return c!=null&&c.length>=i.length&&s.test(c)&&e(o)}},exists(e,{name:t},{adapter:r}){return u=>r.hasAttrib(u,t)&&e(u)},start(e,t,r){let{adapter:u}=r,{name:n}=t,{value:i}=t,s=i.length;return s===0?bu.default.falseFunc:Tt(t,r)?(i=i.toLowerCase(),a=>{let o=u.getAttributeValue(a,n);return o!=null&&o.length>=s&&o.substr(0,s).toLowerCase()===i&&e(a)}):a=>{var o;return!!(!((o=u.getAttributeValue(a,n))===null||o===void 0)&&o.startsWith(i))&&e(a)}},end(e,t,r){let{adapter:u}=r,{name:n}=t,{value:i}=t,s=-i.length;return s===0?bu.default.falseFunc:Tt(t,r)?(i=i.toLowerCase(),a=>{var o;return((o=u.getAttributeValue(a,n))===null||o===void 0?void 0:o.substr(s).toLowerCase())===i&&e(a)}):a=>{var o;return!!(!((o=u.getAttributeValue(a,n))===null||o===void 0)&&o.endsWith(i))&&e(a)}},any(e,t,r){let{adapter:u}=r,{name:n,value:i}=t;if(i==="")return bu.default.falseFunc;if(Tt(t,r)){let s=new RegExp(Q1(i),"i");return function(o){let c=u.getAttributeValue(o,n);return c!=null&&c.length>=i.length&&s.test(c)&&e(o)}}return s=>{var a;return!!(!((a=u.getAttributeValue(s,n))===null||a===void 0)&&a.includes(i))&&e(s)}},not(e,t,r){let{adapter:u}=r,{name:n}=t,{value:i}=t;return i===""?s=>!!u.getAttributeValue(s,n)&&e(s):Tt(t,r)?(i=i.toLowerCase(),s=>{let a=u.getAttributeValue(s,n);return(a==null||a.length!==i.length||a.toLowerCase()!==i)&&e(s)}):s=>u.getAttributeValue(s,n)!==i&&e(s)}};var ly=new Set([9,10,12,13,32]),ep=48,dy=57;function tp(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,u=i(),n=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=u*(n??1),a(),t<e.length?(u=i(),a(),n=s()):u=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,u*n];function i(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let o=t,c=0;for(;t<e.length&&e.charCodeAt(t)>=ep&&e.charCodeAt(t)<=dy;)c=c*10+(e.charCodeAt(t)-ep),t++;return t===o?null:c}function a(){for(;t<e.length&&ly.has(e.charCodeAt(t));)t++}}var Xa=Ne(ot(),1);function rp(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return Xa.default.falseFunc;if(t===-1)return i=>i<=r;if(t===0)return i=>i===r;if(t===1)return r<0?Xa.default.trueFunc:i=>i>=r;let u=Math.abs(t),n=(r%u+u)%u;return t>1?i=>i>=r&&i%u===n:i=>i<=r&&i%u===n}function or(e){return rp(tp(e))}var se=Ne(ot(),1);function ui(e,t){return r=>{let u=t.getParent(r);return u!=null&&t.isTag(u)&&e(r)}}var cr={contains(e,t,{adapter:r}){return function(n){return e(n)&&r.getText(n).includes(t)}},icontains(e,t,{adapter:r}){let u=t.toLowerCase();return function(i){return e(i)&&r.getText(i).toLowerCase().includes(u)}},"nth-child"(e,t,{adapter:r,equals:u}){let n=or(t);return n===se.default.falseFunc?se.default.falseFunc:n===se.default.trueFunc?ui(e,r):function(s){let a=r.getSiblings(s),o=0;for(let c=0;c<a.length&&!u(s,a[c]);c++)r.isTag(a[c])&&o++;return n(o)&&e(s)}},"nth-last-child"(e,t,{adapter:r,equals:u}){let n=or(t);return n===se.default.falseFunc?se.default.falseFunc:n===se.default.trueFunc?ui(e,r):function(s){let a=r.getSiblings(s),o=0;for(let c=a.length-1;c>=0&&!u(s,a[c]);c--)r.isTag(a[c])&&o++;return n(o)&&e(s)}},"nth-of-type"(e,t,{adapter:r,equals:u}){let n=or(t);return n===se.default.falseFunc?se.default.falseFunc:n===se.default.trueFunc?ui(e,r):function(s){let a=r.getSiblings(s),o=0;for(let c=0;c<a.length;c++){let l=a[c];if(u(s,l))break;r.isTag(l)&&r.getName(l)===r.getName(s)&&o++}return n(o)&&e(s)}},"nth-last-of-type"(e,t,{adapter:r,equals:u}){let n=or(t);return n===se.default.falseFunc?se.default.falseFunc:n===se.default.trueFunc?ui(e,r):function(s){let a=r.getSiblings(s),o=0;for(let c=a.length-1;c>=0;c--){let l=a[c];if(u(s,l))break;r.isTag(l)&&r.getName(l)===r.getName(s)&&o++}return n(o)&&e(s)}},root(e,t,{adapter:r}){return u=>{let n=r.getParent(u);return(n==null||!r.isTag(n))&&e(u)}},scope(e,t,r,u){let{equals:n}=r;return!u||u.length===0?cr.root(e,t,r):u.length===1?i=>n(u[0],i)&&e(i):i=>u.includes(i)&&e(i)},hover:Qa("isHovered"),visited:Qa("isVisited"),active:Qa("isActive")};function Qa(e){return function(r,u,{adapter:n}){let i=n[e];return typeof i!="function"?se.default.falseFunc:function(a){return i(a)&&r(a)}}}var xu={empty(e,{adapter:t}){return!t.getChildren(e).some(r=>t.isTag(r)||t.getText(r)!=="")},"first-child"(e,{adapter:t,equals:r}){if(t.prevElementSibling)return t.prevElementSibling(e)==null;let u=t.getSiblings(e).find(n=>t.isTag(n));return u!=null&&r(e,u)},"last-child"(e,{adapter:t,equals:r}){let u=t.getSiblings(e);for(let n=u.length-1;n>=0;n--){if(r(e,u[n]))return!0;if(t.isTag(u[n]))break}return!1},"first-of-type"(e,{adapter:t,equals:r}){let u=t.getSiblings(e),n=t.getName(e);for(let i=0;i<u.length;i++){let s=u[i];if(r(e,s))return!0;if(t.isTag(s)&&t.getName(s)===n)break}return!1},"last-of-type"(e,{adapter:t,equals:r}){let u=t.getSiblings(e),n=t.getName(e);for(let i=u.length-1;i>=0;i--){let s=u[i];if(r(e,s))return!0;if(t.isTag(s)&&t.getName(s)===n)break}return!1},"only-of-type"(e,{adapter:t,equals:r}){let u=t.getName(e);return t.getSiblings(e).every(n=>r(e,n)||!t.isTag(n)||t.getName(n)!==u)},"only-child"(e,{adapter:t,equals:r}){return t.getSiblings(e).every(u=>r(e,u)||!t.isTag(u))}};function Za(e,t,r,u){if(r===null){if(e.length>u)throw new Error(`Pseudo-class :${t} requires an argument`)}else if(e.length===u)throw new Error(`Pseudo-class :${t} doesn't have any arguments`)}var ni={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:`:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"};var ye=Ne(ot(),1);var ro={};function uo(e,t){return e===ye.default.falseFunc?ye.default.falseFunc:r=>t.isTag(r)&&e(r)}function no(e,t){let r=t.getSiblings(e);if(r.length<=1)return[];let u=r.indexOf(e);return u<0||u===r.length-1?[]:r.slice(u+1).filter(t.isTag)}function to(e){return{xmlMode:!!e.xmlMode,lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,lowerCaseTags:!!e.lowerCaseTags,quirksMode:!!e.quirksMode,cacheResults:!!e.cacheResults,pseudos:e.pseudos,adapter:e.adapter,equals:e.equals}}var eo=(e,t,r,u,n)=>{let i=n(t,to(r),u);return i===ye.default.trueFunc?e:i===ye.default.falseFunc?ye.default.falseFunc:s=>i(s)&&e(s)},ii={is:eo,matches:eo,where:eo,not(e,t,r,u,n){let i=n(t,to(r),u);return i===ye.default.falseFunc?e:i===ye.default.trueFunc?ye.default.falseFunc:s=>!i(s)&&e(s)},has(e,t,r,u,n){let{adapter:i}=r,s=to(r);s.relativeSelector=!0;let a=t.some(l=>l.some(pu))?[ro]:void 0,o=n(t,s,a);if(o===ye.default.falseFunc)return ye.default.falseFunc;let c=uo(o,i);if(a&&o!==ye.default.trueFunc){let{shouldTestNextSiblings:l=!1}=o;return f=>{if(!e(f))return!1;a[0]=f;let h=i.getChildren(f),d=l?[...h,...no(f,i)]:h;return i.existsOne(c,d)}}return l=>e(l)&&i.existsOne(c,i.getChildren(l))}};function up(e,t,r,u,n){var i;let{name:s,data:a}=t;if(Array.isArray(a)){if(!(s in ii))throw new Error(`Unknown pseudo-class :${s}(${a})`);return ii[s](e,a,r,u,n)}let o=(i=r.pseudos)===null||i===void 0?void 0:i[s],c=typeof o=="string"?o:ni[s];if(typeof c=="string"){if(a!=null)throw new Error(`Pseudo ${s} doesn't have any arguments`);let l=ze(c);return ii.is(e,l,r,u,n)}if(typeof o=="function")return Za(o,s,a,1),l=>o(l,a)&&e(l);if(s in cr)return cr[s](e,a,r,u);if(s in xu){let l=xu[s];return Za(l,s,a,2),f=>l(f,r,a)&&e(f)}throw new Error(`Unknown pseudo-class :${s}`)}function io(e,t){let r=t.getParent(e);return r&&t.isTag(r)?r:null}function np(e,t,r,u,n){let{adapter:i,equals:s}=r;switch(t.type){case A.PseudoElement:throw new Error("Pseudo-elements are not supported by css-select");case A.ColumnCombinator:throw new Error("Column combinators are not yet supported by css-select");case A.Attribute:{if(t.namespace!=null)throw new Error("Namespaced attributes are not yet supported by css-select");return(!r.xmlMode||r.lowerCaseAttributeNames)&&(t.name=t.name.toLowerCase()),Z1[t.action](e,t,r)}case A.Pseudo:return up(e,t,r,u,n);case A.Tag:{if(t.namespace!=null)throw new Error("Namespaced tag names are not yet supported by css-select");let{name:a}=t;return(!r.xmlMode||r.lowerCaseTags)&&(a=a.toLowerCase()),function(c){return i.getName(c)===a&&e(c)}}case A.Descendant:{if(r.cacheResults===!1||typeof WeakSet>"u")return function(c){let l=c;for(;l=io(l,i);)if(e(l))return!0;return!1};let a=new WeakSet;return function(c){let l=c;for(;l=io(l,i);)if(!a.has(l)){if(i.isTag(l)&&e(l))return!0;a.add(l)}return!1}}case"_flexibleDescendant":return function(o){let c=o;do if(e(c))return!0;while(c=io(c,i));return!1};case A.Parent:return function(o){return i.getChildren(o).some(c=>i.isTag(c)&&e(c))};case A.Child:return function(o){let c=i.getParent(o);return c!=null&&i.isTag(c)&&e(c)};case A.Sibling:return function(o){let c=i.getSiblings(o);for(let l=0;l<c.length;l++){let f=c[l];if(s(o,f))break;if(i.isTag(f)&&e(f))return!0}return!1};case A.Adjacent:return i.prevElementSibling?function(o){let c=i.prevElementSibling(o);return c!=null&&e(c)}:function(o){let c=i.getSiblings(o),l;for(let f=0;f<c.length;f++){let h=c[f];if(s(o,h))break;i.isTag(h)&&(l=h)}return!!l&&e(l)};case A.Universal:{if(t.namespace!=null&&t.namespace!=="*")throw new Error("Namespaced universal selectors are not yet supported by css-select");return e}}}function ip(e,t,r){let u=si(e,t,r);return uo(u,t.adapter)}function si(e,t,r){let u=typeof e=="string"?ze(e):e;return ai(u,t,r)}function sp(e){return e.type===A.Pseudo&&(e.name==="scope"||Array.isArray(e.data)&&e.data.some(t=>t.some(sp)))}var hy={type:A.Descendant},py={type:"_flexibleDescendant"},by={type:A.Pseudo,name:"scope",data:null};function xy(e,{adapter:t},r){let u=!!r?.every(n=>{let i=t.isTag(n)&&t.getParent(n);return n===ro||i&&t.isTag(i)});for(let n of e){if(!(n.length>0&&pu(n[0])&&n[0].type!==A.Descendant))if(u&&!n.some(sp))n.unshift(hy);else continue;n.unshift(by)}}function ai(e,t,r){var u;e.forEach(Ya),r=(u=t.context)!==null&&u!==void 0?u:r;let n=Array.isArray(r),i=r&&(Array.isArray(r)?r:[r]);if(t.relativeSelector!==!1)xy(e,t,i);else if(e.some(o=>o.length>0&&pu(o[0])))throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");let s=!1,a=e.map(o=>{if(o.length>=2){let[c,l]=o;c.type!==A.Pseudo||c.name!=="scope"||(n&&l.type===A.Descendant?o[1]=py:(l.type===A.Adjacent||l.type===A.Sibling)&&(s=!0))}return gy(o,t,i)}).reduce(my,We.default.falseFunc);return a.shouldTestNextSiblings=s,a}function gy(e,t,r){var u;return e.reduce((n,i)=>n===We.default.falseFunc?We.default.falseFunc:np(n,i,t,r,ai),(u=t.rootFunc)!==null&&u!==void 0?u:We.default.trueFunc)}function my(e,t){return t===We.default.falseFunc||e===We.default.trueFunc?e:e===We.default.falseFunc||t===We.default.trueFunc?t:function(u){return e(u)||t(u)}}var ap=(e,t)=>e===t,yy={adapter:at,equals:ap};function op(e){var t,r,u,n;let i=e??yy;return(t=i.adapter)!==null&&t!==void 0||(i.adapter=at),(r=i.equals)!==null&&r!==void 0||(i.equals=(n=(u=i.adapter)===null||u===void 0?void 0:u.equals)!==null&&n!==void 0?n:ap),i}function ao(e){return function(r,u,n){let i=op(u);return e(r,i,n)}}var V_=ao(ip),G_=ao(si),oi=ao(ai);function cp(e){return function(r,u,n){let i=op(n);typeof r!="function"&&(r=si(r,i,u));let s=ci(u,i.adapter,r.shouldTestNextSiblings);return e(r,s,i)}}function ci(e,t,r=!1){return r&&(e=vy(e,t)),Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)}function vy(e,t){let r=Array.isArray(e)?e.slice(0):[e],u=r.length;for(let n=0;n<u;n++){let i=no(r[n],t);r.push(...i)}return r}var $_=cp((e,t,r)=>e===so.default.falseFunc||!t||t.length===0?[]:r.adapter.findAll(e,t)),z_=cp((e,t,r)=>e===so.default.falseFunc||!t||t.length===0?null:r.adapter.findOne(e,t));var li=Ne(ot(),1);var wy=new Set(["first","last","eq","gt","nth","lt","even","odd"]);function fr(e){return e.type!=="pseudo"?!1:wy.has(e.name)?!0:e.name==="not"&&Array.isArray(e.data)?e.data.some(t=>t.some(fr)):!1}function fp(e,t,r){let u=t!=null?parseInt(t,10):NaN;switch(e){case"first":return 1;case"nth":case"eq":return isFinite(u)?u>=0?u+1:1/0:0;case"lt":return isFinite(u)?u>=0?Math.min(u,r):1/0:0;case"gt":return isFinite(u)?1/0:0;case"odd":return 2*r;case"even":return 2*r-1;case"last":case"not":return 1/0}}function lp(e){for(;e.parent;)e=e.parent;return e}function fi(e){let t=[],r=[];for(let u of e)u.some(fr)?t.push(u):r.push(u);return[r,t]}var Ay={type:A.Universal,namespace:null},Sy={type:A.Pseudo,name:"scope",data:null};function fo(e,t,r={}){return lo([e],t,r)}function lo(e,t,r={}){if(typeof t=="function")return e.some(t);let[u,n]=fi(ze(t));return u.length>0&&e.some(oi(u,r))||n.some(i=>hp(i,e,r).length>0)}function Ey(e,t,r,u){let n=typeof r=="string"?parseInt(r,10):NaN;switch(e){case"first":case"lt":return t;case"last":return t.length>0?[t[t.length-1]]:t;case"nth":case"eq":return isFinite(n)&&Math.abs(n)<t.length?[n<0?t[t.length+n]:t[n]]:[];case"gt":return isFinite(n)?t.slice(n+1):[];case"even":return t.filter((i,s)=>s%2===0);case"odd":return t.filter((i,s)=>s%2===1);case"not":{let i=new Set(dp(r,t,u));return t.filter(s=>!i.has(s))}}}function ho(e,t,r={}){return dp(ze(e),t,r)}function dp(e,t,r){if(t.length===0)return[];let[u,n]=fi(e),i;if(u.length){let s=co(t,u,r);if(n.length===0)return s;s.length&&(i=new Set(s))}for(let s=0;s<n.length&&i?.size!==t.length;s++){let a=n[s];if((i?t.filter(l=>w(l)&&!i.has(l)):t).length===0)break;let c=hp(a,t,r);if(c.length)if(i)c.forEach(l=>i.add(l));else{if(s===n.length-1)return c;i=new Set(c)}}return typeof i<"u"?i.size===t.length?t:t.filter(s=>i.has(s)):[]}function hp(e,t,r){var u;if(e.some(Et)){let n=(u=r.root)!==null&&u!==void 0?u:lp(t[0]),i={...r,context:t,relativeSelector:!1};return e.push(Sy),di(n,e,i,!0,t.length)}return di(t,e,r,!1,t.length)}function pp(e,t,r={},u=1/0){if(typeof e=="function")return bp(t,e);let[n,i]=fi(ze(e)),s=i.map(a=>di(t,a,r,!0,u));return n.length&&s.push(oo(t,n,r,u)),s.length===0?[]:s.length===1?s[0]:it(s.reduce((a,o)=>[...a,...o]))}function di(e,t,r,u,n){let i=t.findIndex(fr),s=t.slice(0,i),a=t[i],o=t.length-1===i?n:1/0,c=fp(a.name,a.data,o);if(c===0)return[];let f=(s.length===0&&!Array.isArray(e)?ir(e).filter(w):s.length===0?(Array.isArray(e)?e:[e]).filter(w):u||s.some(Et)?oo(e,[s],r,c):co(e,[s],r)).slice(0,c),h=Ey(a.name,f,a.data,r);if(h.length===0||t.length===i+1)return h;let d=t.slice(i+1),p=d.some(Et);if(p){if(Et(d[0])){let{type:x}=d[0];(x===A.Sibling||x===A.Adjacent)&&(h=ci(h,at,!0)),d.unshift(Ay)}r={...r,relativeSelector:!1,rootFunc:x=>h.includes(x)}}else r.rootFunc&&r.rootFunc!==li.trueFunc&&(r={...r,rootFunc:li.trueFunc});return d.some(fr)?di(h,d,r,!1,n):p?oo(h,[d],r,n):co(h,[d],r)}function oo(e,t,r,u){let n=oi(t,r,e);return bp(e,n,u)}function bp(e,t,r=1/0){let u=ci(e,at,t.shouldTestNextSiblings);return Yn(n=>w(n)&&t(n),u,!0,r)}function co(e,t,r){let u=(Array.isArray(e)?e:[e]).filter(w);if(u.length===0)return u;let n=oi(t,r);return n===li.trueFunc?u:u.filter(n)}var _y=/^\s*[+~]/;function Iy(e){if(!e)return this._make([]);if(typeof e!="string"){let t=me(e)?e.toArray():[e],r=this.toArray();return this._make(t.filter(u=>r.some(n=>ei(n,u))))}return this._findBySelector(e,Number.POSITIVE_INFINITY)}function qy(e,t){var r;let u=this.toArray(),n=_y.test(e)?u:this.children().toArray(),i={context:u,root:(r=this._root)===null||r===void 0?void 0:r[0],xmlMode:this.options.xmlMode,lowerCaseTags:this.options.lowerCaseTags,lowerCaseAttributeNames:this.options.lowerCaseAttributeNames,pseudos:this.options.pseudos,quirksMode:this.options.quirksMode};return this._make(pp(e,n,i,t))}function po(e){return function(t,...r){return function(u){var n;let i=e(t,this);return u&&(i=go(i,u,this.options.xmlMode,(n=this._root)===null||n===void 0?void 0:n[0])),this._make(this.length>1&&i.length>1?r.reduce((s,a)=>a(s),i):i)}}}var gu=po((e,t)=>{let r=[];for(let u=0;u<t.length;u++){let n=e(t[u]);n.length>0&&(r=r.concat(n))}return r}),bo=po((e,t)=>{let r=[];for(let u=0;u<t.length;u++){let n=e(t[u]);n!==null&&r.push(n)}return r});function xo(e,...t){let r=null,u=po((n,i)=>{let s=[];return O(i,a=>{for(let o;(o=n(a))&&!r?.(o,s.length);a=o)s.push(o)}),s})(e,...t);return function(n,i){r=typeof n=="string"?a=>fo(a,n,this.options):n?mu(n):null;let s=u.call(this,i);return r=null,s}}function lr(e){return e.length>1?Array.from(new Set(e)):e}var Ry=bo(({parent:e})=>e&&!Fe(e)?e:null,lr),ky=gu(e=>{let t=[];for(;e.parent&&!Fe(e.parent);)t.push(e.parent),e=e.parent;return t},it,e=>e.reverse()),Ly=xo(({parent:e})=>e&&!Fe(e)?e:null,it,e=>e.reverse());function Ny(e){var t;let r=[];if(!e)return this._make(r);let u={xmlMode:this.options.xmlMode,root:(t=this._root)===null||t===void 0?void 0:t[0]},n=typeof e=="string"?i=>fo(i,e,u):mu(e);return O(this,i=>{for(i&&!Fe(i)&&!w(i)&&(i=i.parent);i&&w(i);){if(n(i,0)){r.includes(i)||r.push(i);break}i=i.parent}}),this._make(r)}var Cy=bo(e=>Jn(e)),Oy=gu(e=>{let t=[];for(;e.next;)e=e.next,w(e)&&t.push(e);return t},lr),Dy=xo(e=>Jn(e),lr),Py=bo(e=>Kn(e)),Uy=gu(e=>{let t=[];for(;e.prev;)e=e.prev,w(e)&&t.push(e);return t},lr),Fy=xo(e=>Kn(e),lr),By=gu(e=>ja(e).filter(t=>w(t)&&t!==e),it),My=gu(e=>ir(e).filter(w),lr);function jy(){let e=this.toArray().reduce((t,r)=>L(r)?t.concat(r.children):t,[]);return this._make(e)}function Hy(e){let t=0,r=this.length;for(;t<r&&e.call(this[t],t,this[t])!==!1;)++t;return this}function Vy(e){let t=[];for(let r=0;r<this.length;r++){let u=this[r],n=e.call(u,r,u);n!=null&&(t=t.concat(n))}return this._make(t)}function mu(e){return typeof e=="function"?(t,r)=>e.call(t,r,t):me(e)?t=>Array.prototype.includes.call(e,t):function(t){return e===t}}function Gy(e){var t;return this._make(go(this.toArray(),e,this.options.xmlMode,(t=this._root)===null||t===void 0?void 0:t[0]))}function go(e,t,r,u){return typeof t=="string"?ho(t,e,{xmlMode:r,root:u}):e.filter(mu(t))}function $y(e){let t=this.toArray();return typeof e=="string"?lo(t.filter(w),e,this.options):e?t.some(mu(e)):!1}function zy(e){let t=this.toArray();if(typeof e=="string"){let r=new Set(ho(e,t,this.options));t=t.filter(u=>!r.has(u))}else{let r=mu(e);t=t.filter((u,n)=>!r(u,n))}return this._make(t)}function Wy(e){return this.filter(typeof e=="string"?`:has(${e})`:(t,r)=>this._make(r).find(e).length>0)}function Jy(){return this.length>1?this._make(this[0]):this}function Ky(){return this.length>0?this._make(this[this.length-1]):this}function Yy(e){var t;return e=+e,e===0&&this.length<=1?this:(e<0&&(e=this.length+e),this._make((t=this[e])!==null&&t!==void 0?t:[]))}function Xy(e){return e==null?this.toArray():this[e<0?this.length+e:e]}function Qy(){return Array.prototype.slice.call(this)}function Zy(e){let t,r;return e==null?(t=this.parent().children(),r=this[0]):typeof e=="string"?(t=this._make(e),r=this[0]):(t=this,r=me(e)?e[0]:e),Array.prototype.indexOf.call(t,r)}function ev(e,t){return this._make(Array.prototype.slice.call(this,e,t))}function tv(){var e;return(e=this.prevObject)!==null&&e!==void 0?e:this._make([])}function rv(e,t){let r=this._make(e,t),u=it([...this.get(),...r.get()]);return this._make(u)}function uv(e){return this.prevObject?this.add(e?this.prevObject.filter(e):this.prevObject):this}var yo={};Be(yo,{_makeDomArray:()=>nv,after:()=>hv,append:()=>av,appendTo:()=>iv,before:()=>bv,clone:()=>Sv,empty:()=>yv,html:()=>vv,insertAfter:()=>pv,insertBefore:()=>xv,prepend:()=>ov,prependTo:()=>sv,remove:()=>gv,replaceWith:()=>mv,text:()=>Av,toString:()=>wv,unwrap:()=>lv,wrap:()=>cv,wrapAll:()=>dv,wrapInner:()=>fv});function xp(e){return function(r,u,n,i){if(typeof Buffer<"u"&&Buffer.isBuffer(r)&&(r=r.toString()),typeof r=="string")return e(r,u,n,i);let s=r;if(!Array.isArray(s)&&Fe(s))return s;let a=new Pe([]);return ct(s,a),a}}function ct(e,t){let r=Array.isArray(e)?e:[e];t?t.children=r:t=null;for(let u=0;u<r.length;u++){let n=r[u];n.parent&&n.parent.children!==r&&$e(n),t?(n.prev=r[u-1]||null,n.next=r[u+1]||null):n.prev=n.next=null,n.parent=t}return t}function nv(e,t){if(e==null)return[];if(typeof e=="string")return this._parse(e,this.options,!1,null).children.slice(0);if("length"in e){if(e.length===1)return this._makeDomArray(e[0],t);let r=[];for(let u=0;u<e.length;u++){let n=e[u];if(typeof n=="object"){if(n==null)continue;if(!("length"in n)){r.push(t?tr(n,!0):n);continue}}r.push(...this._makeDomArray(n,t))}return r}return[t?tr(e,!0):e]}function gp(e){return function(...t){let r=this.length-1;return O(this,(u,n)=>{if(!L(u))return;let i=typeof t[0]=="function"?t[0].call(u,n,this._render(u.children)):t,s=this._makeDomArray(i,n<r);e(s,u.children,u)})}}function ft(e,t,r,u,n){var i,s;let a=[t,r,...u],o=t===0?null:e[t-1],c=t+r>=e.length?null:e[t+r];for(let l=0;l<u.length;++l){let f=u[l],h=f.parent;if(h){let p=h.children.indexOf(f);p>-1&&(h.children.splice(p,1),n===h&&t>p&&a[0]--)}f.parent=n,f.prev&&(f.prev.next=(i=f.next)!==null&&i!==void 0?i:null),f.next&&(f.next.prev=(s=f.prev)!==null&&s!==void 0?s:null),f.prev=l===0?o:u[l-1],f.next=l===u.length-1?c:u[l+1]}return o&&(o.next=u[0]),c&&(c.prev=u[u.length-1]),e.splice(...a)}function iv(e){return(me(e)?e:this._make(e)).append(this),this}function sv(e){return(me(e)?e:this._make(e)).prepend(this),this}var av=gp((e,t,r)=>{ft(t,t.length,0,e,r)}),ov=gp((e,t,r)=>{ft(t,0,0,e,r)});function mp(e){return function(t){let r=this.length-1,u=this.parents().last();for(let n=0;n<this.length;n++){let i=this[n],s=typeof t=="function"?t.call(i,n,i):typeof t=="string"&&!fu(t)?u.find(t).clone():t,[a]=this._makeDomArray(s,n<r);if(!a||!L(a))continue;let o=a,c=0;for(;c<o.children.length;){let l=o.children[c];w(l)?(o=l,c=0):c++}e(i,o,[a])}return this}}var cv=mp((e,t,r)=>{let{parent:u}=e;if(!u)return;let n=u.children,i=n.indexOf(e);ct([e],t),ft(n,i,0,r,u)}),fv=mp((e,t,r)=>{L(e)&&(ct(e.children,t),ct(r,e))});function lv(e){return this.parent(e).not("body").each((t,r)=>{this._make(r).replaceWith(r.children)}),this}function dv(e){let t=this[0];if(t){let r=this._make(typeof e=="function"?e.call(t,0,t):e).insertBefore(t),u;for(let i=0;i<r.length;i++)r[i].type==="tag"&&(u=r[i]);let n=0;for(;u&&n<u.children.length;){let i=u.children[n];i.type==="tag"?(u=i,n=0):n++}u&&this._make(u).append(this)}return this}function hv(...e){let t=this.length-1;return O(this,(r,u)=>{if(!L(r)||!r.parent)return;let n=r.parent.children,i=n.indexOf(r);if(i<0)return;let s=typeof e[0]=="function"?e[0].call(r,u,this._render(r.children)):e,a=this._makeDomArray(s,u<t);ft(n,i+1,0,a,r.parent)})}function pv(e){typeof e=="string"&&(e=this._make(e)),this.remove();let t=[];for(let r of this._makeDomArray(e)){let u=this.clone().toArray(),{parent:n}=r;if(!n)continue;let i=n.children,s=i.indexOf(r);s<0||(ft(i,s+1,0,u,n),t.push(...u))}return this._make(t)}function bv(...e){let t=this.length-1;return O(this,(r,u)=>{if(!L(r)||!r.parent)return;let n=r.parent.children,i=n.indexOf(r);if(i<0)return;let s=typeof e[0]=="function"?e[0].call(r,u,this._render(r.children)):e,a=this._makeDomArray(s,u<t);ft(n,i,0,a,r.parent)})}function xv(e){let t=this._make(e);this.remove();let r=[];return O(t,u=>{let n=this.clone().toArray(),{parent:i}=u;if(!i)return;let s=i.children,a=s.indexOf(u);a<0||(ft(s,a,0,n,i),r.push(...n))}),this._make(r)}function gv(e){let t=e?this.filter(e):this;return O(t,r=>{$e(r),r.prev=r.next=r.parent=null}),this}function mv(e){return O(this,(t,r)=>{let{parent:u}=t;if(!u)return;let n=u.children,i=typeof e=="function"?e.call(t,r,t):e,s=this._makeDomArray(i);ct(s,null);let a=n.indexOf(t);ft(n,a,1,s,u),s.includes(t)||(t.parent=t.prev=t.next=null)})}function yv(){return O(this,e=>{if(L(e)){for(let t of e.children)t.next=t.prev=t.parent=null;e.children.length=0}})}function vv(e){if(e===void 0){let t=this[0];return!t||!L(t)?null:this._render(t.children)}return O(this,t=>{if(!L(t))return;for(let u of t.children)u.next=u.prev=u.parent=null;let r=me(e)?e.toArray():this._parse(`${e}`,this.options,!1,t).children;ct(r,t)})}function wv(){return this._render(this)}function Av(e){return e===void 0?At(this):typeof e=="function"?O(this,(t,r)=>this._make(t).text(e.call(t,r,At([t])))):O(this,t=>{if(!L(t))return;for(let u of t.children)u.next=u.prev=u.parent=null;let r=new ut(`${e}`);ct(r,t)})}function Sv(){let e=Array.prototype.map.call(this.get(),r=>tr(r,!0)),t=new Pe(e);for(let r of e)r.parent=t;return this._make(e)}var vo={};Be(vo,{css:()=>Ev});function Ev(e,t){if(e!=null&&t!=null||typeof e=="object"&&!Array.isArray(e))return O(this,(r,u)=>{w(r)&&yp(r,e,t,u)});if(this.length!==0)return vp(this[0],e)}function yp(e,t,r,u){if(typeof t=="string"){let n=vp(e),i=typeof r=="function"?r.call(e,u,n[t]):r;i===""?delete n[t]:i!=null&&(n[t]=i),e.attribs.style=Tv(n)}else if(typeof t=="object"){let n=Object.keys(t);for(let i=0;i<n.length;i++){let s=n[i];yp(e,s,t[s],i)}}}function vp(e,t){if(!e||!w(e))return;let r=_v(e.attribs.style);if(typeof t=="string")return r[t];if(Array.isArray(t)){let u={};for(let n of t)r[n]!=null&&(u[n]=r[n]);return u}return r}function Tv(e){return Object.keys(e).reduce((t,r)=>`${t}${t?" ":""}${r}: ${e[r]};`,"")}function _v(e){if(e=(e||"").trim(),!e)return{};let t={},r;for(let u of e.split(";")){let n=u.indexOf(":");if(n<1||n===u.length-1){let i=u.trimEnd();i.length>0&&r!==void 0&&(t[r]+=`;${i}`)}else r=u.slice(0,n).trim(),t[r]=u.slice(n+1).trim()}return t}var wo={};Be(wo,{serialize:()=>qv,serializeArray:()=>Rv});var wp="input,select,textarea,keygen",Iv=/%20/g,Ap=/\r?\n/g;function qv(){return this.serializeArray().map(r=>`${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&").replace(Iv,"+")}function Rv(){return this.map((e,t)=>{let r=this._make(t);return w(t)&&t.name==="form"?r.find(wp).toArray():r.filter(wp).toArray()}).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map((e,t)=>{var r;let u=this._make(t),n=u.attr("name"),i=(r=u.val())!==null&&r!==void 0?r:"";return Array.isArray(i)?i.map(s=>({name:n,value:s.replace(Ap,`\r
`)})):{name:n,value:i.replace(Ap,`\r
`)}}).toArray()}var Ao={};Be(Ao,{extract:()=>Lv});function kv(e){var t;return typeof e=="string"?{selector:e,value:"textContent"}:{selector:e.selector,value:(t=e.value)!==null&&t!==void 0?t:"textContent"}}function Lv(e){let t={};for(let r in e){let u=e[r],n=Array.isArray(u),{selector:i,value:s}=kv(n?u[0]:u),a=typeof s=="function"?s:typeof s=="string"?o=>this._make(o).prop(s):o=>this._make(o).extract(s);if(n)t[r]=this._findBySelector(i,Number.POSITIVE_INFINITY).map((o,c)=>a(c,r,t)).get();else{let o=this._findBySelector(i,1);t[r]=o.length>0?a(o[0],r,t):void 0}}return t}var lt=class{constructor(t,r,u){if(this.length=0,this.options=u,this._root=r,t){for(let n=0;n<t.length;n++)this[n]=t[n];this.length=t.length}}};lt.prototype.cheerio="[cheerio object]";lt.prototype.splice=Array.prototype.splice;lt.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator];Object.assign(lt.prototype,Ja,mo,yo,vo,wo,Ao);function Sp(e,t){return function r(u,n,i=!0){if(u==null)throw new Error("cheerio.load() expects a string");let s=eu(n),a=e(u,s,i,null);class o extends lt{_make(f,h){let d=c(f,h);return d.prevObject=this,d}_parse(f,h,d,p){return e(f,h,d,p)}_render(f){return t(f,this.options)}}function c(l,f,h=a,d){if(l&&me(l))return l;let p=eu(d,s),x=typeof h=="string"?[e(h,p,!1,null)]:"length"in h?h:[h],S=me(x)?x:new o(x,null,p);if(S._root=S,!l)return new o(void 0,S,p);let m=typeof l=="string"&&fu(l)?e(l,p,!1,null).children:Nv(l)?[l]:Array.isArray(l)?l:void 0,k=new o(m,S,p);if(m)return k;if(typeof l!="string")throw new TypeError("Unexpected type of selector");let I=l,D=f?typeof f=="string"?fu(f)?new o([e(f,p,!1,null)],S,p):(I=`${f} ${I}`,S):me(f)?f:new o(Array.isArray(f)?f:[f],S,p):S;return D?D.find(I):k}return Object.assign(c,Ga,{load:r,_root:a,_options:s,fn:o.prototype,prototype:o.prototype}),c}}function Nv(e){return!!e.name||e.type==="root"||e.type==="text"||e.type==="comment"}var E;(function(e){e[e.Tab=9]="Tab",e[e.NewLine=10]="NewLine",e[e.FormFeed=12]="FormFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.Number=35]="Number",e[e.Amp=38]="Amp",e[e.SingleQuote=39]="SingleQuote",e[e.DoubleQuote=34]="DoubleQuote",e[e.Dash=45]="Dash",e[e.Slash=47]="Slash",e[e.Zero=48]="Zero",e[e.Nine=57]="Nine",e[e.Semi=59]="Semi",e[e.Lt=60]="Lt",e[e.Eq=61]="Eq",e[e.Gt=62]="Gt",e[e.Questionmark=63]="Questionmark",e[e.UpperA=65]="UpperA",e[e.LowerA=97]="LowerA",e[e.UpperF=70]="UpperF",e[e.LowerF=102]="LowerF",e[e.UpperZ=90]="UpperZ",e[e.LowerZ=122]="LowerZ",e[e.LowerX=120]="LowerX",e[e.OpeningSquareBracket=91]="OpeningSquareBracket"})(E||(E={}));var g;(function(e){e[e.Text=1]="Text",e[e.BeforeTagName=2]="BeforeTagName",e[e.InTagName=3]="InTagName",e[e.InSelfClosingTag=4]="InSelfClosingTag",e[e.BeforeClosingTagName=5]="BeforeClosingTagName",e[e.InClosingTagName=6]="InClosingTagName",e[e.AfterClosingTagName=7]="AfterClosingTagName",e[e.BeforeAttributeName=8]="BeforeAttributeName",e[e.InAttributeName=9]="InAttributeName",e[e.AfterAttributeName=10]="AfterAttributeName",e[e.BeforeAttributeValue=11]="BeforeAttributeValue",e[e.InAttributeValueDq=12]="InAttributeValueDq",e[e.InAttributeValueSq=13]="InAttributeValueSq",e[e.InAttributeValueNq=14]="InAttributeValueNq",e[e.BeforeDeclaration=15]="BeforeDeclaration",e[e.InDeclaration=16]="InDeclaration",e[e.InProcessingInstruction=17]="InProcessingInstruction",e[e.BeforeComment=18]="BeforeComment",e[e.CDATASequence=19]="CDATASequence",e[e.InSpecialComment=20]="InSpecialComment",e[e.InCommentLike=21]="InCommentLike",e[e.BeforeSpecialS=22]="BeforeSpecialS",e[e.BeforeSpecialT=23]="BeforeSpecialT",e[e.SpecialStartSequence=24]="SpecialStartSequence",e[e.InSpecialTag=25]="InSpecialTag",e[e.InEntity=26]="InEntity"})(g||(g={}));function Je(e){return e===E.Space||e===E.NewLine||e===E.Tab||e===E.FormFeed||e===E.CarriageReturn}function hi(e){return e===E.Slash||e===E.Gt||Je(e)}function Cv(e){return e>=E.LowerA&&e<=E.LowerZ||e>=E.UpperA&&e<=E.UpperZ}var ve;(function(e){e[e.NoValue=0]="NoValue",e[e.Unquoted=1]="Unquoted",e[e.Single=2]="Single",e[e.Double=3]="Double"})(ve||(ve={}));var X={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])},dr=class{constructor({xmlMode:t=!1,decodeEntities:r=!0},u){this.cbs=u,this.state=g.Text,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=g.Text,this.isSpecial=!1,this.running=!0,this.offset=0,this.currentSequence=void 0,this.sequenceIndex=0,this.xmlMode=t,this.decodeEntities=r,this.entityDecoder=new nr(t?Hn:jn,(n,i)=>this.emitCodePoint(n,i))}reset(){this.state=g.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=g.Text,this.currentSequence=void 0,this.running=!0,this.offset=0}write(t){this.offset+=this.buffer.length,this.buffer=t,this.parse()}end(){this.running&&this.finish()}pause(){this.running=!1}resume(){this.running=!0,this.index<this.buffer.length+this.offset&&this.parse()}stateText(t){t===E.Lt||!this.decodeEntities&&this.fastForwardTo(E.Lt)?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=g.BeforeTagName,this.sectionStart=this.index):this.decodeEntities&&t===E.Amp&&this.startEntity()}stateSpecialStartSequence(t){let r=this.sequenceIndex===this.currentSequence.length;if(!(r?hi(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.isSpecial=!1;else if(!r){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=g.InTagName,this.stateInTagName(t)}stateInSpecialTag(t){if(this.sequenceIndex===this.currentSequence.length){if(t===E.Gt||Je(t)){let r=this.index-this.currentSequence.length;if(this.sectionStart<r){let u=this.index;this.index=r,this.cbs.ontext(this.sectionStart,r),this.index=u}this.isSpecial=!1,this.sectionStart=r+2,this.stateInClosingTagName(t);return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===X.TitleEnd?this.decodeEntities&&t===E.Amp&&this.startEntity():this.fastForwardTo(E.Lt)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===E.Lt)}stateCDATASequence(t){t===X.Cdata[this.sequenceIndex]?++this.sequenceIndex===X.Cdata.length&&(this.state=g.InCommentLike,this.currentSequence=X.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=g.InDeclaration,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length+this.offset;)if(this.buffer.charCodeAt(this.index-this.offset)===t)return!0;return this.index=this.buffer.length+this.offset-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===X.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index,2):this.cbs.oncomment(this.sectionStart,this.index,2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=g.Text):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}isTagStartChar(t){return this.xmlMode?!hi(t):Cv(t)}startSpecial(t,r){this.isSpecial=!0,this.currentSequence=t,this.sequenceIndex=r,this.state=g.SpecialStartSequence}stateBeforeTagName(t){if(t===E.ExclamationMark)this.state=g.BeforeDeclaration,this.sectionStart=this.index+1;else if(t===E.Questionmark)this.state=g.InProcessingInstruction,this.sectionStart=this.index+1;else if(this.isTagStartChar(t)){let r=t|32;this.sectionStart=this.index,this.xmlMode?this.state=g.InTagName:r===X.ScriptEnd[2]?this.state=g.BeforeSpecialS:r===X.TitleEnd[2]?this.state=g.BeforeSpecialT:this.state=g.InTagName}else t===E.Slash?this.state=g.BeforeClosingTagName:(this.state=g.Text,this.stateText(t))}stateInTagName(t){hi(t)&&(this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=g.BeforeAttributeName,this.stateBeforeAttributeName(t))}stateBeforeClosingTagName(t){Je(t)||(t===E.Gt?this.state=g.Text:(this.state=this.isTagStartChar(t)?g.InClosingTagName:g.InSpecialComment,this.sectionStart=this.index))}stateInClosingTagName(t){(t===E.Gt||Je(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=g.AfterClosingTagName,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){(t===E.Gt||this.fastForwardTo(E.Gt))&&(this.state=g.Text,this.sectionStart=this.index+1)}stateBeforeAttributeName(t){t===E.Gt?(this.cbs.onopentagend(this.index),this.isSpecial?(this.state=g.InSpecialTag,this.sequenceIndex=0):this.state=g.Text,this.sectionStart=this.index+1):t===E.Slash?this.state=g.InSelfClosingTag:Je(t)||(this.state=g.InAttributeName,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===E.Gt?(this.cbs.onselfclosingtag(this.index),this.state=g.Text,this.sectionStart=this.index+1,this.isSpecial=!1):Je(t)||(this.state=g.BeforeAttributeName,this.stateBeforeAttributeName(t))}stateInAttributeName(t){(t===E.Eq||hi(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.sectionStart=this.index,this.state=g.AfterAttributeName,this.stateAfterAttributeName(t))}stateAfterAttributeName(t){t===E.Eq?this.state=g.BeforeAttributeValue:t===E.Slash||t===E.Gt?(this.cbs.onattribend(ve.NoValue,this.sectionStart),this.sectionStart=-1,this.state=g.BeforeAttributeName,this.stateBeforeAttributeName(t)):Je(t)||(this.cbs.onattribend(ve.NoValue,this.sectionStart),this.state=g.InAttributeName,this.sectionStart=this.index)}stateBeforeAttributeValue(t){t===E.DoubleQuote?(this.state=g.InAttributeValueDq,this.sectionStart=this.index+1):t===E.SingleQuote?(this.state=g.InAttributeValueSq,this.sectionStart=this.index+1):Je(t)||(this.sectionStart=this.index,this.state=g.InAttributeValueNq,this.stateInAttributeValueNoQuotes(t))}handleInAttributeValue(t,r){t===r||!this.decodeEntities&&this.fastForwardTo(r)?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(r===E.DoubleQuote?ve.Double:ve.Single,this.index+1),this.state=g.BeforeAttributeName):this.decodeEntities&&t===E.Amp&&this.startEntity()}stateInAttributeValueDoubleQuotes(t){this.handleInAttributeValue(t,E.DoubleQuote)}stateInAttributeValueSingleQuotes(t){this.handleInAttributeValue(t,E.SingleQuote)}stateInAttributeValueNoQuotes(t){Je(t)||t===E.Gt?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(ve.Unquoted,this.index),this.state=g.BeforeAttributeName,this.stateBeforeAttributeName(t)):this.decodeEntities&&t===E.Amp&&this.startEntity()}stateBeforeDeclaration(t){t===E.OpeningSquareBracket?(this.state=g.CDATASequence,this.sequenceIndex=0):this.state=t===E.Dash?g.BeforeComment:g.InDeclaration}stateInDeclaration(t){(t===E.Gt||this.fastForwardTo(E.Gt))&&(this.cbs.ondeclaration(this.sectionStart,this.index),this.state=g.Text,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===E.Gt||this.fastForwardTo(E.Gt))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=g.Text,this.sectionStart=this.index+1)}stateBeforeComment(t){t===E.Dash?(this.state=g.InCommentLike,this.currentSequence=X.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=g.InDeclaration}stateInSpecialComment(t){(t===E.Gt||this.fastForwardTo(E.Gt))&&(this.cbs.oncomment(this.sectionStart,this.index,0),this.state=g.Text,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){let r=t|32;r===X.ScriptEnd[3]?this.startSpecial(X.ScriptEnd,4):r===X.StyleEnd[3]?this.startSpecial(X.StyleEnd,4):(this.state=g.InTagName,this.stateInTagName(t))}stateBeforeSpecialT(t){let r=t|32;r===X.TitleEnd[3]?this.startSpecial(X.TitleEnd,4):r===X.TextareaEnd[3]?this.startSpecial(X.TextareaEnd,4):(this.state=g.InTagName,this.stateInTagName(t))}startEntity(){this.baseState=this.state,this.state=g.InEntity,this.entityStart=this.index,this.entityDecoder.startEntity(this.xmlMode?oe.Strict:this.baseState===g.Text||this.baseState===g.InSpecialTag?oe.Legacy:oe.Attribute)}stateInEntity(){let t=this.entityDecoder.write(this.buffer,this.index-this.offset);t>=0?(this.state=this.baseState,t===0&&(this.index=this.entityStart)):this.index=this.offset+this.buffer.length-1}cleanup(){this.running&&this.sectionStart!==this.index&&(this.state===g.Text||this.state===g.InSpecialTag&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===g.InAttributeValueDq||this.state===g.InAttributeValueSq||this.state===g.InAttributeValueNq)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}shouldContinue(){return this.index<this.buffer.length+this.offset&&this.running}parse(){for(;this.shouldContinue();){let t=this.buffer.charCodeAt(this.index-this.offset);switch(this.state){case g.Text:{this.stateText(t);break}case g.SpecialStartSequence:{this.stateSpecialStartSequence(t);break}case g.InSpecialTag:{this.stateInSpecialTag(t);break}case g.CDATASequence:{this.stateCDATASequence(t);break}case g.InAttributeValueDq:{this.stateInAttributeValueDoubleQuotes(t);break}case g.InAttributeName:{this.stateInAttributeName(t);break}case g.InCommentLike:{this.stateInCommentLike(t);break}case g.InSpecialComment:{this.stateInSpecialComment(t);break}case g.BeforeAttributeName:{this.stateBeforeAttributeName(t);break}case g.InTagName:{this.stateInTagName(t);break}case g.InClosingTagName:{this.stateInClosingTagName(t);break}case g.BeforeTagName:{this.stateBeforeTagName(t);break}case g.AfterAttributeName:{this.stateAfterAttributeName(t);break}case g.InAttributeValueSq:{this.stateInAttributeValueSingleQuotes(t);break}case g.BeforeAttributeValue:{this.stateBeforeAttributeValue(t);break}case g.BeforeClosingTagName:{this.stateBeforeClosingTagName(t);break}case g.AfterClosingTagName:{this.stateAfterClosingTagName(t);break}case g.BeforeSpecialS:{this.stateBeforeSpecialS(t);break}case g.BeforeSpecialT:{this.stateBeforeSpecialT(t);break}case g.InAttributeValueNq:{this.stateInAttributeValueNoQuotes(t);break}case g.InSelfClosingTag:{this.stateInSelfClosingTag(t);break}case g.InDeclaration:{this.stateInDeclaration(t);break}case g.BeforeDeclaration:{this.stateBeforeDeclaration(t);break}case g.BeforeComment:{this.stateBeforeComment(t);break}case g.InProcessingInstruction:{this.stateInProcessingInstruction(t);break}case g.InEntity:{this.stateInEntity();break}}this.index++}this.cleanup()}finish(){this.state===g.InEntity&&(this.entityDecoder.end(),this.state=this.baseState),this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let t=this.buffer.length+this.offset;this.sectionStart>=t||(this.state===g.InCommentLike?this.currentSequence===X.CdataEnd?this.cbs.oncdata(this.sectionStart,t,0):this.cbs.oncomment(this.sectionStart,t,0):this.state===g.InTagName||this.state===g.BeforeAttributeName||this.state===g.BeforeAttributeValue||this.state===g.AfterAttributeName||this.state===g.InAttributeName||this.state===g.InAttributeValueSq||this.state===g.InAttributeValueDq||this.state===g.InAttributeValueNq||this.state===g.InClosingTagName||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,r){this.baseState!==g.Text&&this.baseState!==g.InSpecialTag?(this.sectionStart<this.entityStart&&this.cbs.onattribdata(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+r,this.index=this.sectionStart-1,this.cbs.onattribentity(t)):(this.sectionStart<this.entityStart&&this.cbs.ontext(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+r,this.index=this.sectionStart-1,this.cbs.ontextentity(t,this.sectionStart))}};var hr=new Set(["input","option","optgroup","select","button","datalist","textarea"]),N=new Set(["p"]),Ep=new Set(["thead","tbody"]),Tp=new Set(["dd","dt"]),_p=new Set(["rt","rp"]),Ov=new Map([["tr",new Set(["tr","th","td"])],["th",new Set(["th"])],["td",new Set(["thead","th","td"])],["body",new Set(["head","link","script"])],["li",new Set(["li"])],["p",N],["h1",N],["h2",N],["h3",N],["h4",N],["h5",N],["h6",N],["select",hr],["input",hr],["output",hr],["button",hr],["datalist",hr],["textarea",hr],["option",new Set(["option"])],["optgroup",new Set(["optgroup","option"])],["dd",Tp],["dt",Tp],["address",N],["article",N],["aside",N],["blockquote",N],["details",N],["div",N],["dl",N],["fieldset",N],["figcaption",N],["figure",N],["footer",N],["form",N],["header",N],["hr",N],["main",N],["nav",N],["ol",N],["pre",N],["section",N],["table",N],["ul",N],["rt",_p],["rp",_p],["tbody",Ep],["tfoot",Ep]]),Dv=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),Ip=new Set(["math","svg"]),qp=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignobject","desc","title"]),Pv=/\s|\//,yu=class{constructor(t,r={}){var u,n,i,s,a,o;this.options=r,this.startIndex=0,this.endIndex=0,this.openTagStart=0,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.buffers=[],this.bufferOffset=0,this.writeIndex=0,this.ended=!1,this.cbs=t??{},this.htmlMode=!this.options.xmlMode,this.lowerCaseTagNames=(u=r.lowerCaseTags)!==null&&u!==void 0?u:this.htmlMode,this.lowerCaseAttributeNames=(n=r.lowerCaseAttributeNames)!==null&&n!==void 0?n:this.htmlMode,this.recognizeSelfClosing=(i=r.recognizeSelfClosing)!==null&&i!==void 0?i:!this.htmlMode,this.tokenizer=new((s=r.Tokenizer)!==null&&s!==void 0?s:dr)(this.options,this),this.foreignContext=[!this.htmlMode],(o=(a=this.cbs).onparserinit)===null||o===void 0||o.call(a,this)}ontext(t,r){var u,n;let i=this.getSlice(t,r);this.endIndex=r-1,(n=(u=this.cbs).ontext)===null||n===void 0||n.call(u,i),this.startIndex=r}ontextentity(t,r){var u,n;this.endIndex=r-1,(n=(u=this.cbs).ontext)===null||n===void 0||n.call(u,ur(t)),this.startIndex=r}isVoidElement(t){return this.htmlMode&&Dv.has(t)}onopentagname(t,r){this.endIndex=r;let u=this.getSlice(t,r);this.lowerCaseTagNames&&(u=u.toLowerCase()),this.emitOpenTag(u)}emitOpenTag(t){var r,u,n,i;this.openTagStart=this.startIndex,this.tagname=t;let s=this.htmlMode&&Ov.get(t);if(s)for(;this.stack.length>0&&s.has(this.stack[0]);){let a=this.stack.shift();(u=(r=this.cbs).onclosetag)===null||u===void 0||u.call(r,a,!0)}this.isVoidElement(t)||(this.stack.unshift(t),this.htmlMode&&(Ip.has(t)?this.foreignContext.unshift(!0):qp.has(t)&&this.foreignContext.unshift(!1))),(i=(n=this.cbs).onopentagname)===null||i===void 0||i.call(n,t),this.cbs.onopentag&&(this.attribs={})}endOpenTag(t){var r,u;this.startIndex=this.openTagStart,this.attribs&&((u=(r=this.cbs).onopentag)===null||u===void 0||u.call(r,this.tagname,this.attribs,t),this.attribs=null),this.cbs.onclosetag&&this.isVoidElement(this.tagname)&&this.cbs.onclosetag(this.tagname,!0),this.tagname=""}onopentagend(t){this.endIndex=t,this.endOpenTag(!1),this.startIndex=t+1}onclosetag(t,r){var u,n,i,s,a,o,c,l;this.endIndex=r;let f=this.getSlice(t,r);if(this.lowerCaseTagNames&&(f=f.toLowerCase()),this.htmlMode&&(Ip.has(f)||qp.has(f))&&this.foreignContext.shift(),this.isVoidElement(f))this.htmlMode&&f==="br"&&((s=(i=this.cbs).onopentagname)===null||s===void 0||s.call(i,"br"),(o=(a=this.cbs).onopentag)===null||o===void 0||o.call(a,"br",{},!0),(l=(c=this.cbs).onclosetag)===null||l===void 0||l.call(c,"br",!1));else{let h=this.stack.indexOf(f);if(h!==-1)for(let d=0;d<=h;d++){let p=this.stack.shift();(n=(u=this.cbs).onclosetag)===null||n===void 0||n.call(u,p,d!==h)}else this.htmlMode&&f==="p"&&(this.emitOpenTag("p"),this.closeCurrentTag(!0))}this.startIndex=r+1}onselfclosingtag(t){this.endIndex=t,this.recognizeSelfClosing||this.foreignContext[0]?(this.closeCurrentTag(!1),this.startIndex=t+1):this.onopentagend(t)}closeCurrentTag(t){var r,u;let n=this.tagname;this.endOpenTag(t),this.stack[0]===n&&((u=(r=this.cbs).onclosetag)===null||u===void 0||u.call(r,n,!t),this.stack.shift())}onattribname(t,r){this.startIndex=t;let u=this.getSlice(t,r);this.attribname=this.lowerCaseAttributeNames?u.toLowerCase():u}onattribdata(t,r){this.attribvalue+=this.getSlice(t,r)}onattribentity(t){this.attribvalue+=ur(t)}onattribend(t,r){var u,n;this.endIndex=r,(n=(u=this.cbs).onattribute)===null||n===void 0||n.call(u,this.attribname,this.attribvalue,t===ve.Double?'"':t===ve.Single?"'":t===ve.NoValue?void 0:null),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribvalue=""}getInstructionName(t){let r=t.search(Pv),u=r<0?t:t.substr(0,r);return this.lowerCaseTagNames&&(u=u.toLowerCase()),u}ondeclaration(t,r){this.endIndex=r;let u=this.getSlice(t,r);if(this.cbs.onprocessinginstruction){let n=this.getInstructionName(u);this.cbs.onprocessinginstruction(`!${n}`,`!${u}`)}this.startIndex=r+1}onprocessinginstruction(t,r){this.endIndex=r;let u=this.getSlice(t,r);if(this.cbs.onprocessinginstruction){let n=this.getInstructionName(u);this.cbs.onprocessinginstruction(`?${n}`,`?${u}`)}this.startIndex=r+1}oncomment(t,r,u){var n,i,s,a;this.endIndex=r,(i=(n=this.cbs).oncomment)===null||i===void 0||i.call(n,this.getSlice(t,r-u)),(a=(s=this.cbs).oncommentend)===null||a===void 0||a.call(s),this.startIndex=r+1}oncdata(t,r,u){var n,i,s,a,o,c,l,f,h,d;this.endIndex=r;let p=this.getSlice(t,r-u);!this.htmlMode||this.options.recognizeCDATA?((i=(n=this.cbs).oncdatastart)===null||i===void 0||i.call(n),(a=(s=this.cbs).ontext)===null||a===void 0||a.call(s,p),(c=(o=this.cbs).oncdataend)===null||c===void 0||c.call(o)):((f=(l=this.cbs).oncomment)===null||f===void 0||f.call(l,`[CDATA[${p}]]`),(d=(h=this.cbs).oncommentend)===null||d===void 0||d.call(h)),this.startIndex=r+1}onend(){var t,r;if(this.cbs.onclosetag){this.endIndex=this.startIndex;for(let u=0;u<this.stack.length;u++)this.cbs.onclosetag(this.stack[u],!0)}(r=(t=this.cbs).onend)===null||r===void 0||r.call(t)}reset(){var t,r,u,n;(r=(t=this.cbs).onreset)===null||r===void 0||r.call(t),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack.length=0,this.startIndex=0,this.endIndex=0,(n=(u=this.cbs).onparserinit)===null||n===void 0||n.call(u,this),this.buffers.length=0,this.foreignContext.length=0,this.foreignContext.unshift(!this.htmlMode),this.bufferOffset=0,this.writeIndex=0,this.ended=!1}parseComplete(t){this.reset(),this.end(t)}getSlice(t,r){for(;t-this.bufferOffset>=this.buffers[0].length;)this.shiftBuffer();let u=this.buffers[0].slice(t-this.bufferOffset,r-this.bufferOffset);for(;r-this.bufferOffset>this.buffers[0].length;)this.shiftBuffer(),u+=this.buffers[0].slice(0,r-this.bufferOffset);return u}shiftBuffer(){this.bufferOffset+=this.buffers[0].length,this.writeIndex--,this.buffers.shift()}write(t){var r,u;if(this.ended){(u=(r=this.cbs).onerror)===null||u===void 0||u.call(r,new Error(".write() after done!"));return}this.buffers.push(t),this.tokenizer.running&&(this.tokenizer.write(t),this.writeIndex++)}end(t){var r,u;if(this.ended){(u=(r=this.cbs).onerror)===null||u===void 0||u.call(r,new Error(".end() after done!"));return}t&&this.write(t),this.ended=!0,this.tokenizer.end()}pause(){this.tokenizer.pause()}resume(){for(this.tokenizer.resume();this.tokenizer.running&&this.writeIndex<this.buffers.length;)this.tokenizer.write(this.buffers[this.writeIndex++]);this.ended&&this.tokenizer.end()}parseChunk(t){this.write(t)}done(t){this.end(t)}};function Rp(e,t){let r=new rr(void 0,t);return new yu(r,t).end(e),r.root}var kp=Sp(xp(Rp),zn);var q=e=>Object.assign(new Error({INVALID_INPUT:"SeedHub\uFF1A\u53C2\u6570\u65E0\u6548",ACCOUNT_CHANGED:"SeedHub\uFF1A\u7F51\u7AD9\u914D\u7F6E\u5DF2\u66F4\u6539\uFF0C\u8BF7\u91CD\u8BD5",SITE_CHALLENGE:"SeedHub\uFF1A\u7F51\u7AD9\u89E6\u53D1 Cloudflare \u8BBF\u95EE\u9A8C\u8BC1\uFF0C\u5F53\u524D\u65E0\u6CD5\u8BFB\u53D6\u8D44\u6E90\uFF0C\u8BF7\u5207\u6362\u5907\u7528\u57DF\u540D\u6216\u7A0D\u540E\u91CD\u8BD5",FLARESOLVERR_ERROR:"SeedHub\uFF1AFlareSolverr \u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5730\u5740\u548C\u8FD0\u884C\u72B6\u6001",RATE_LIMITED:"SeedHub\uFF1A\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",NO_SHARES:"SeedHub\uFF1A\u6682\u65E0\u5DF2\u542F\u7528\u7F51\u76D8\u7684\u53EF\u7528\u5206\u4EAB",UPSTREAM_ERROR:"SeedHub\uFF1A\u7AD9\u70B9\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5207\u6362\u5907\u7528\u57DF\u540D\u6216\u7A0D\u540E\u91CD\u8BD5"}[e]||"SeedHub\uFF1A\u8D44\u6E90\u5730\u5740\u65E0\u6548"),{code:e}),pr=e=>String(e||"").replace(/\s+/g," ").trim(),Lp=(e,t)=>{try{let r=new URL(e,t);return r.protocol==="https:"&&!r.username&&!r.password?r.href:""}catch{return""}},Np={"pan.quark.cn":"quark","pan.baidu.com":"baidu","drive.uc.cn":"uc","pan.xunlei.com":"xunlei"};function So(e){if(typeof e!="string"||e.length>2*1024*1024)throw q("UPSTREAM_ERROR");return kp(e)}function Eo(e,t,r){let u=So(e);if(!u(".content").length||!u("title").text().includes("SeedHub"))throw q("UPSTREAM_ERROR");let n=[],i=new Set;u(".cover").each((a,o)=>{let c=u(o),l=c.find("a.image").first(),f=new URL(l.attr("href")||"/",t),h=/^\/movies\/(\d+)\/$/.exec(f.pathname);if(f.origin!==t||!h||i.has(h[1]))return;let d=c.find("h2").first().clone();d.find(".header-anchor").remove();let p=pr(d.text()||l.attr("title"));if(!p)return;i.add(h[1]);let x=pr(c.find("li").eq(1).text());n.push({id:h[1],title:p,year:Number(/^(\d{4})\s*\//.exec(x)?.[1])||void 0,mediaType:x.includes("/ \u7535\u5F71 /")?1:2,posterURL:Lp(c.find("img").first().attr("src"),t),summary:x})});let s=null;for(let a of u("a[href]").toArray()){let o=new URL(u(a).attr("href"),t);o.origin===t&&Number(o.searchParams.get("page"))===r+1&&(s=r+1)}return{list:n,nextPage:s}}function To(e,t,r){let u=So(e),n=u("h1#cover").first().clone();n.find(".header-anchor,a").remove();let i=pr(n.text());if(!i||!u(".cover-container").length)throw q("UPSTREAM_ERROR");let s=u(".cover-container li").toArray().map(l=>pr(u(l).text())),a=Number(/(?:首播|上映日期):?\s*(\d{4})/.exec(s.join(`
`))?.[1])||void 0,o=[],c=new Set;return u("ul.pan-links a[data-link]").each((l,f)=>{let h=u(f),d=Np[h.attr("data-link")];if(!d)return;let p=new URL(h.attr("href")||"/",r),x=p.searchParams.get("redirect_to");p.origin!==r||p.pathname!=="/link_start/"||!/^pan_id_\d+$/.test(x||"")||c.has(x)||(c.add(x),o.push({id:x,provider:d,note:pr(h.attr("title")||h.text()),path:"/link_start/?redirect_to="+x}))}),{id:t,title:i,year:a,mediaType:u('.cover-container a[href^="/categories/3/"]').length?2:u('.cover-container a[href^="/categories/2/"]').length?3:1,summary:pr(u("#description").next("p").text()),posterURL:Lp(u(".cover-container img").first().attr("src"),r),shares:o}}function Cp(e){let t=So(e),r=t("script").toArray().map(i=>t(i).text()).join(`
`),u=/\b(?:var|let|const)\s+panLink\s*=\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*;/.exec(r),n;try{n=u?.[1]?.startsWith('"')?JSON.parse(u[1]):u?.[1]?.slice(1,-1).replace(/\\'/g,"'").replace(/\\\//g,"/");let i=new URL(n);if(!Np[i.hostname]||i.protocol!=="https:"||i.username||i.password||i.port||!/^\/s\/[a-zA-Z0-9_-]+\/?$/.test(i.pathname))throw Error();return i.href}catch{throw q("INVALID_SHARE")}}var Uv=2*1024*1024;function Op(e=""){if(typeof e!="string"||e.length>2048||/[\x00-\x1f\x7f]/.test(e))throw q("INVALID_INPUT");let t=e.trim();if(!t)return"";try{let r=new URL(t);if(!["http:","https:"].includes(r.protocol)||!r.hostname||r.username||r.password||r.hash||/\s/.test(t))throw Error();let u=r.pathname.replace(/\/+$/,"");return r.pathname=u.endsWith("/v1")?u:u+"/v1",r.href}catch{throw q("INVALID_INPUT")}}async function _o({endpoint:e,url:t,request:r,check:u,session:n}){let i;try{u(),i=await r({url:e,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({cmd:"request.get",url:t,maxTimeout:45e3,...n?{session:n}:{}}),timeoutMs:5e4,maxResponseBytes:6*1024*1024}),u()}catch(a){throw u(),["ABORTED","OPERATION_TIMEOUT","ACCOUNT_CHANGED","RATE_LIMITED"].includes(a.code)?a:q("FLARESOLVERR_ERROR")}if(i.status===429)throw q("RATE_LIMITED");if(i.status<200||i.status>=300)throw q("FLARESOLVERR_ERROR");let s;try{let a=JSON.parse(typeof i.body=="string"?i.body:new TextDecoder().decode(i.body));if(s=a?.solution,a?.status!=="ok"||!s||!Number.isInteger(s.status)||s.status<100||s.status>599||typeof s.response!="string"||new TextEncoder().encode(s.response).length>Uv||new URL(s.url).href!==new URL(t).href)throw Error()}catch{throw q("FLARESOLVERR_ERROR")}return{status:s.status,headers:s.headers||{},body:s.response}}var Fv=0;function Dp({cleanupRequest:e}){let t=Promise.resolve(),r,u=!1,n;function i(c){let l=t.then(async()=>{if(c.check(),u)throw q("ABORTED");if(n)throw n;if(!r){let h="catpaw-seedhub-"+Date.now().toString(36)+"-"+(++Fv).toString(36)+"-"+Math.random().toString(36).slice(2)+"-"+Math.random().toString(36).slice(2);r={endpoint:c.endpoint,session:h,usedAt:Date.now()};let d;try{if(d=await c.request({url:r.endpoint,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({cmd:"sessions.create",session:h}),timeoutMs:15e3,maxResponseBytes:65536}),c.check(),d.status===429)throw q("RATE_LIMITED");let p=JSON.parse(typeof d.body=="string"?d.body:new TextDecoder().decode(d.body));if(d.status<200||d.status>=300||p?.status!=="ok"||p.session!==h)throw q("FLARESOLVERR_ERROR")}catch(p){throw c.check(),r=null,["ABORTED","OPERATION_TIMEOUT","ACCOUNT_CHANGED","RATE_LIMITED"].includes(p.code)?p:q("FLARESOLVERR_ERROR")}}if(c.endpoint!==r.endpoint)throw q("ACCOUNT_CHANGED");let f=await _o({...c,session:r.session});return r.usedAt=Date.now(),f});return t=l.catch(f=>{n??(n=f)}),l}let s=600*1e3;async function a(){if(u=!1,n=void 0,await t,r&&Date.now()-(r.usedAt||0)>=s){let c=r;r=null;try{await e({url:c.endpoint,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({cmd:"sessions.destroy",session:c.session}),timeoutMs:5e3,maxResponseBytes:64*1024})}catch{}}}async function o(){u=!0,await t;let c=r;if(r=null,!!c)try{await e({url:c.endpoint,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({cmd:"sessions.destroy",session:c.session}),timeoutMs:5e3,maxResponseBytes:64*1024})}catch{}}return{page:i,close:o,release:a}}function Io({now:e=Date.now}={}){let t=new Map,r="",u=0,n=0;function i(){t.clear(),n=0,u++}function s(a){n-=t.get(a).bytes,t.delete(a)}return{clear:i,bind(a){return a!==r&&(i(),r=a),u},peek(a,o){if(a!==u)return;let c=t.get(o),l=e();if(!(!c||l<c.created||l>=c.expires))return JSON.parse(c.json)},get(a,o){if(a!==u)return;let c=t.get(o);if(!c)return;let l=e();if(l<c.created||l>=c.expires){s(o);return}return t.delete(o),t.set(o,c),JSON.parse(c.json)},set(a,o,c,l){if(a!==u)return;let f=JSON.stringify(c),h=f.length*2;if(h>128*1024)return;t.has(o)&&s(o);let d=e();for(t.set(o,{json:f,bytes:h,created:d,expires:d+l}),n+=h;t.size>32||n>1024*1024;)s(t.keys().next().value)}}}var pi=Object.freeze(["hubdog.cc","sidhub.cc","seedog.cc","seeduck.cc"]),Bv="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36",Pp="catpaw.seedhub.config.v1",Mv=e=>Ta("sha256").update(e).digest("hex"),jv=(e,t)=>typeof e=="string"&&e.length<=t&&!/[\x00-\x1f\x7f]/.test(e);function Up(e){if(!jv(e,2048))throw q("INVALID_INPUT");let t=e.trim();if(!t)return"";try{let r=new URL(t.includes("://")?t:"https://"+t);if(!["https:","http:"].includes(r.protocol)||!r.hostname||r.username||r.password||r.pathname!=="/"||r.search||r.hash||/\s/.test(t))throw Error();return r.origin}catch{throw q("INVALID_INPUT")}}var Hv=e=>e||"https://"+pi[0];function qo(e){let t="",r=()=>e?e.get(Pp)||"":t,u=n=>{e?e.set(Pp,n):t=n};return{configure(n={}){let i;try{i=JSON.parse(r()||"{}")}catch{i={}}let s=Up(i.site??(pi.includes(i.domain)?"https://"+i.domain:"")),a=s;if(n.site!=null)a=Up(n.site);else if(n.siteDomain!=null){if(!pi.includes(n.siteDomain))throw q("INVALID_INPUT");a="https://"+n.siteDomain}let o=Op(n.flaresolverrUrl??i.flaresolverrUrl??""),c={site:a,flaresolverrUrl:o},l=a===s&&o===(i.flaresolverrUrl??""),f=Number.isSafeInteger(i.revision)?i.revision:0,h=JSON.stringify({...c,revision:f+(l?0:1)});return h!==r()&&u(h),{...c,primaryOrigin:Hv(a),identity:Mv(h),check(){if(r()!==h)throw q("ACCOUNT_CHANGED")}}}}}function Fp({request:e,session:t=qo(),solver:r,cache:u}){let n,i,s,a=new Map;function o(d={}){return n=t.configure(d),i=n.primaryOrigin,s=u?.bind(n.identity),n}let c=d=>typeof d.body=="string"?d.body:new TextDecoder().decode(d.body),l=d=>d.status===403||Object.entries(d.headers||{}).some(([p,x])=>p.toLowerCase()==="cf-mitigated"&&x==="challenge")||/Just a moment|cf-chl-|challenge-platform/i.test(c(d));async function f(d,p,x,S=!0,m){x.check();let k=p+d,I;try{m?.check();let D=e({url:k,method:"GET",headers:{"User-Agent":Bv,Accept:"text/html",Referer:p+"/"},timeoutMs:12e3,maxResponseBytes:2*1024*1024});I=await(m?m.wait(D):D),m?.check(),x.check()}catch(D){if(m?.check(),x.check(),D.code!=="ACCESS_DENIED")throw D;I={status:403,headers:{},body:""}}if(I.status===429)throw q("RATE_LIMITED");if(S&&l(I)&&x.flaresolverrUrl&&(I=await(r?.page||_o)({endpoint:x.flaresolverrUrl,url:k,request:e,check:()=>x.check()})),x.check(),I.status===429)throw q("RATE_LIMITED");if(l(I))throw q("SITE_CHALLENGE");if(I.status<200||I.status>=300)throw q("UPSTREAM_ERROR");return c(I)}async function h(d,p){n||o();let x=n,S=s,m=x.identity+"|"+d;x.check();let k=u?.get(S,d);if(k)return x.check(),i=k.origin,k.result;let I=a.get(m);I||(I=D(),a.set(m,I));try{let G=await I;return x.check(),i=G.origin,JSON.parse(JSON.stringify(G.result))}finally{a.get(m)===I&&a.delete(m)}async function D(){let G=new Set,W=[],M=j=>{j&&!G.has(j)&&(G.add(j),W.push(j))};M(x.site),M(i);for(let j of pi)M("https://"+j);let ae,U=!!n.flaresolverrUrl;for(let j of W){x.check();try{let C=p(await f(d,j,x),j);x.check(),i=j;let we={origin:j,result:C};return u?.set(S,d,we,d.startsWith("/link_start/")?3e5:d.startsWith("/movies/")?18e5:6e4),we}catch(C){if(x.check(),["ABORTED","OPERATION_TIMEOUT","ACCOUNT_CHANGED","RATE_LIMITED"].includes(C.code))throw C;let we=br=>({FLARESOLVERR_ERROR:3,SITE_CHALLENGE:2})[br]||1;if((!ae||we(C.code)>we(ae.code))&&(ae=C),we(C.code)>1&&!U)break}}throw["SITE_CHALLENGE","FLARESOLVERR_ERROR"].includes(ae?.code)?ae:q("UPSTREAM_ERROR")}}return{configure:o,close:()=>r?.release(),identity:()=>n.identity,check:()=>n.check(),origin:()=>i,async search({keyword:d,page:p=1}){if(typeof d!="string"||!d.trim()||d.length>100||!Number.isSafeInteger(p)||p<1||p>1e4)throw q("INVALID_INPUT");return h("/s/"+encodeURIComponent(d.trim())+"/?page="+p,(x,S)=>Eo(x,S,p))},async browse({category:d="1",order:p="update",page:x=1}){if(!["1","2","3"].includes(String(d))||!["update","date","score","hot"].includes(p)||!Number.isSafeInteger(x)||x<1||x>1e4)throw q("INVALID_INPUT");return h("/categories/"+d+"/movies/?order="+p+"&page="+x,(S,m)=>Eo(S,m,x))},async title(d){if(!/^\d{1,12}$/.test(d))throw q("INVALID_INPUT");return h("/movies/"+d+"/",(p,x)=>To(p,d,x))},async previewTitle(d,p){if(!/^\d{1,12}$/.test(d))throw q("INVALID_INPUT");n||o();let x=n,S=i,m="/movies/"+d+"/";if(x.check(),p?.check(),u?.peek?.(s,m))return null;let k=await f(m,S,x,!1,p);return p?.check(),x.check(),To(k,d,S)},async credential(d){if(!/^pan_id_\d{1,12}$/.test(d))throw q("INVALID_INPUT");return h("/link_start/?redirect_to="+d,p=>Cp(p))}}}var ko="seedhub:v1:",Ro=e=>({coverUrl:e.posterURL||"",posterPath:e.posterURL||"",backdropPath:e.posterURL||""}),Vv=e=>{if(typeof e!="string"||!/^seedhub:v1:\d{1,12}$/.test(e))throw q("INVALID_INPUT");return e.slice(ko.length)};function Bp({Widget:e,engine:t}){Uh();let r=$h(e),u=qo(e.storage),n=Io(),i=Dp({cleanupRequest:r.request}),s="";async function a(d={}){let p={owner:null,error:null},x=Fp({session:u,cache:n,solver:i,request:async m=>{if(p.error)throw p.error;let k=await t.request(m,r.request,p.owner);if(x.check(),p.error)throw p.error;return k}});x.configure(d);let S=d.flaresolverrUrl!==void 0?String(d.flaresolverrUrl||"").trim():s;if(S!==s){let m=s;s=S,m&&await i.close()}return{api:x,scope:p,check:()=>x.check()}}async function o(d,p){let x=await a(d);try{return await p(x)}finally{await x.api.close()}}let c=d=>({id:"seedhub-"+d.id,type:"url",title:d.title,mediaType:d.mediaType===1?"movie":"tv",year:d.year,releaseDate:String(d.year||""),description:d.summary||"SeedHub \xB7 \u7F51\u76D8\u8D44\u6E90",...Ro(d),link:ko+d.id});function l(d,p,x){return{action:"detail",id:"seedhub-"+d.id+"-"+p.id,site:x.origin(),title:d.title,poster:d.posterURL,description:d.summary||"",shares:[],siteShare:p}}async function f(d,p){let x=d.siteShare;if(!x||!t.enabled(x.provider))return null;let S=await p.credential(x.id);p.check();let m=t.parseShare({url:S,note:x.note});if(!m||m.provider!==x.provider)throw q("INVALID_SHARE");let{siteShare:k,...I}=d;return{...I,shares:[m]}}function h(d,p,x){let S=new Map;return{identity:p.identity(),async search(m){if(x.owner=t.owner(),n1(d).conflict||!La(d).length||d.type!=="movie"&&(!Number.isSafeInteger(Number(d.season??1))||Number(d.season??1)<1||!Number.isSafeInteger(Number(d.episode))||Number(d.episode)<1))return[];let I=Co(async(D,G)=>{let W=p.origin(),M=await p.previewTitle(D.id,G);return p.check(),M?{origin:W,t:t.matchesSiteTitle(M.title,m)?M:null}:null},{check:()=>p.check()});try{let D=new Map,G;for(let U=1;U<=5;U++){let j=await p.search({keyword:m.keyword,page:U});G&&G!==p.origin()&&(I.retire(),await I.close(),p.check()),G=p.origin();for(let C of j.list)D.set(C.id,C);if(!j.nextPage)break;if(U===5)return[];for(let C of D.values())t.matchesSiteTitle(C.title,m)&&I.offer(C.id,C)}let W=[...D.values()].filter(U=>t.matchesSiteTitle(U.title,m));if(W.length>8)return[];await I.close(),p.check();let M=await No(W,async U=>{let j=I.successful(U.id);if(j?.value?.origin===p.origin())return j.value.t;let C=await p.title(U.id);return p.check(),t.matchesSiteTitle(C.title,m)?C:null},{check:()=>p.check(),fail:U=>{x.error??(x.error=U)}}),ae=[];for(let U of M)if(U){await t.prepareDirectoryIdentity(U.year,m),p.check();for(let j of U.shares){if(!t.enabled(j.provider))continue;let C=l(U,j,p);ae.push({id:C.id,cpSiteCardId:U.id,type:"url",title:U.title,provider:j.provider,link:t.encode(C)})}}return ae}finally{I.retire(),await I.close(),p.check()}},async read(m){x.owner=t.owner();let k=t.decode(m.link),I=k?.siteShare;return I?(S.has(I.id)||S.set(I.id,f(k,p).catch(D=>{throw["SITE_CHALLENGE","FLARESOLVERR_ERROR","ACCOUNT_CHANGED","RATE_LIMITED","ABORTED","OPERATION_TIMEOUT"].includes(D.code)&&(x.error??(x.error=D)),D})),S.get(I.id)):null}}}return{async search(d={}){return o(d,async({api:p})=>{if(String(d.keyword||"").trim()==="\u8BBF\u95EE\u68C0\u6D4B")try{return await p.search({keyword:"\u4E09\u4F53"}),[{id:"seedhub-check",type:"url",title:"SeedHub\uFF1A\u8BBF\u95EE\u6B63\u5E38",description:p.origin(),link:p.origin()}]}catch(x){return[{id:"seedhub-check-error",type:"url",title:x.message,description:x.code||"UPSTREAM_ERROR",link:p.origin()}]}return(await p.search({keyword:d.keyword,page:Number(d.page||1)})).list.map(c)})},async browse(d={}){return o(d,async({api:p})=>(await p.browse({category:String(d.category||"1"),order:d.order||"update",page:Number(d.page||1)})).list.map(c))},async loadDetail(d){let p=typeof d=="string"?{link:d}:d||{};return o(p,async({api:x,check:S})=>{if(t.isLink(p.link)){let M=await t.loadDetail(p.link);return S(),M}let m=await x.title(Vv(p.link)),k=new Map,I=[],D=new Set;for(let M of m.shares)t.enabled(M.provider)&&(k.has(M.provider)||k.set(M.provider,[]),k.get(M.provider).push(M));let G;if(await Promise.allSettled([...k].map(async([M,ae])=>{let U=0;for(let j of ae){if(U>=t.candidateLimit())break;try{let C=await f(l(m,j,x),x),we=C?.shares[0],br=we&&JSON.stringify([we.provider,we.shareId,we.passcode||""]);if(!br||D.has(br))continue;D.add(br),U++,I.push(C)}catch(C){if(["ACCOUNT_CHANGED","SITE_CHALLENGE","FLARESOLVERR_ERROR","RATE_LIMITED","ABORTED","OPERATION_TIMEOUT"].includes(C.code))throw C;G??(G=C)}}})).then(M=>{let ae=M.find(U=>U.status==="rejected");if(ae)throw ae.reason}),S(),!I.length)throw G||q("NO_SHARES");let W=await t.loadDetail(t.encode({...I[0],shares:I.flatMap(M=>M.shares)}));S();for(let M of W?.episodeItems||[])Object.assign(M,Ro(m));return{...W,...Ro(m),title:m.title,mediaType:m.mediaType===1?"movie":"tv",link:ko+m.id}})},clearCache:()=>n.clear(),async loadResource(d={}){return o(d,async({api:p,scope:x,check:S})=>{let m=await t.loadResource(d,t.isLink(d.link)?void 0:h(d,p,x));if(S(),x.error&&!m?.length)throw x.error;return m})}}}return $p(Gv);})();


var SeedInstance;
function seedWidget(){return SeedInstance||(SeedInstance=SeedDiscovery.createSeedWidget({Widget:Widget,engine:SeedPan}));}
async function search(params){return seedWidget().search(params);}
async function browse(params){return seedWidget().browse(params);}
async function loadDetail(input){return seedWidget().loadDetail(input);}
async function loadResource(params){return seedWidget().loadResource(params);}
async function clearRexCatalogCache(){if(SeedInstance)SeedInstance.clearCache();return SeedPan.clear();}

/* Native HTTP error evidence */
function cpNPInstallNativeHttpErrors(){
 if(typeof callSwiftAsync!=='function'||typeof Widget.callAsync!=='function'||Widget.callAsync.cpNativeHttpErrors)return;
 const previous=Widget.callAsync;
 function callWithHttpEvidence(method,params){
  if(method!=='request')return previous.apply(this,arguments);
  return new Promise(resolve=>callSwiftAsync(method,params||{},resolve)).then(result=>{
   let decoded=result;
   if(typeof result==='string'){try{decoded=JSON.parse(result);}catch(_){}}
   if(!decoded||!decoded.error)return decoded;
   const nativeError=typeof decoded.error==='object'?decoded.error:decoded;
   const message=typeof decoded.error==='string'?decoded.error:String(nativeError.message||'Native HTTP request failed');
   const error=new Error(message);
   // Non-enumerable metadata stays available to classification without being
   // accidentally serialized by a handler that logs the Error itself.
   Object.defineProperties(error,{
    response:{value:nativeError.response||decoded.response||decoded,configurable:true},
    data:{value:nativeError.data??decoded.data,configurable:true},
    status:{value:nativeError.status??decoded.status,configurable:true},
    statusCode:{value:nativeError.statusCode??decoded.statusCode,configurable:true},
    code:{value:nativeError.code??nativeError.error_code??decoded.code,configurable:true},
    cause:{value:decoded,configurable:true}
   });
   throw error;
  });
 }
 callWithHttpEvidence.cpNativeHttpErrors=true;
 Widget.callAsync=callWithHttpEvidence;
}
function cpNPErrorDetails(error){
 let data=error?.response?.data??error?.data;const bodyText=typeof data==='string'?data:'';
 if(typeof data==='string'){try{data=JSON.parse(data);}catch(_){data=null;}}
 const message=[bodyText,error?.message,typeof error?.error==='string'?error.error:null,typeof error==='string'?error:null,error?.code,data?.error,data?.error_description,data?.message,data?.msg,data?.errmsg,data?.error_msg,data?.res_message].filter(value=>typeof value==='string').join(' ').replace(/https?:\/\/[^\s\"'<>]+/gi,'[URL]');
 const reported=Number(error?.status||error?.statusCode||error?.response?.status||error?.response?.statusCode);
 const match=message.match(/\b(?:response status code was unacceptable\s*:|request failed with (?:HTTP )?status(?: code)?|HTTP(?: status(?: code)?)?)\s*:?\s*([45]\d{2})\b/i);
 const status=reported>=100&&reported<=599?reported:match?Number(match[1]):NaN;
 const code=data?.error_code??data?.errorCode??data?.errno??data?.res_code??data?.code??data?.error??error?.apiCode??error?.error_code??error?.code;
 return {status,code,message};
}
function cpNPAuthExcluded(message){
 return /(?:invalid|expired|cancelled|canceled|deleted|not[_ .-]?found)[_ .-]*share(?:[_ .-]*(?:access[_ .-]*)?token)?|timeout|timed.?out|ETIMEDOUT|超时|提取码|提取碼|访问码|密码|密碼|验证码|captcha|pass.?code|password|rate.?limit|too many|频繁|限流|permission.?denied|access.?denied|权限不足|无权限|(?:分享|共享|链接)[^。\n]{0,20}(?:过期|失效|无效|取消|删除|不存在)|share(?:d)?(?: link)?[^.\n]{0,30}(?:expired|invalid|cancelled|canceled|deleted|not found)/i.test(String(message||''));
}
function cpNPAuthRejected(status,code,message){
 const text=String(code??'')+' '+String(message||'');
 if(cpNPAuthExcluded(text))return false;
 return status===401||/^(?:401|-6|99|40101|41017|990009|10|16|117|4121|4122|4126|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired|user_unauthenticated|invalid_grant|unauthenticated|invalid_token)$/i.test(String(code))||/\bunauthori[sz]ed\b|\binvalid[_ .-]?(?:token|grant)\b|\btoken[_ .-]?expired\b|登录失效|登录过期|鉴权失败|(?:session|cookie)[_ .-]*(?:invalid|expired)/i.test(text);
}
function cpNPLogError(stage,error){
 const details=cpNPErrorDetails(error?.cause||error);
 // Log an allowlist of evidence, never arbitrary messages, URLs or headers.
 const text=String(details.code??'')+' '+details.message;
 const reason=cpNPAuthExcluded(text)?'excluded':cpNPAuthRejected(details.status,details.code,details.message)?'authentication-rejected':'unclassified';
 const apiCode=/^(?:-?\d{1,6}|invalid_token|invalid_grant|unauthenticated|user_unauthenticated|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired)$/i.test(String(details.code))?details.code:null;
 if(typeof console!=='undefined'&&typeof console.error==='function')console.error('[catpaw] '+stage,JSON.stringify({status:Number.isFinite(details.status)?details.status:null,apiCode,reason}));
}
function cpNPNativeFailure(error){
 const details=cpNPErrorDetails(error);let failure;
 try{failure=cpNPFailure(details.status,details.code,details.message);}catch(normalized){failure=normalized;}
 Object.defineProperty(failure,'cause',{value:error,configurable:true});
 cpNPLogError('HTTP request failed',failure);
 return failure;
}
function cpNPFailure(status, code, message) {
 const n=Number(code),text=String(code??'')+' '+String(message||'');
 const kind=status===429||n===429||/rate.?limit|too many|频繁|限流/i.test(text)?'RATE_LIMITED':
 cpNPAuthRejected(status,code,message)||status===403||/captcha_invalid|captcha_required/i.test(text)?'AUTH_FAILED':'UPSTREAM_ERROR';
 const error=cpError(kind);error.status=status;error.apiCode=code;return error;
}

/* CatPaw Beta module list overlay v1 */
// Original metadata header: "{\"id\":\"catpaw.seedhub\",\"title\":\"猫 · SeedHub\",\"author\":\"balge\",\"version\":\"2.2.8\",\"requiredVersion\":\"0.0.1\",\"description\":\"影视搜索与网盘播放，支持多版本、媒体标签和外挂字幕。\",\"detailCacheDuration\":1800,\"globalParams\":[{\"name\":\"site\",\"title\":\"手动域名（留空使用内置地址）\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写后优先使用，失败自动切换内置地址\",\"value\":\"\"}]},{\"name\":\"flaresolverrUrl\",\"title\":\"FlareSolverr 地址（可选）\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"留空不使用；遇访问验证时调用，可填基础地址或 /v1，支持 ?apikey=…\",\"value\":\"\"}]},{\"name\":\"credentialSource\",\"title\":\"网盘账号来源\",\"type\":\"enumeration\",\"value\":\"shared\",\"enumOptions\":[{\"title\":\"共用账号\",\"value\":\"shared\"},{\"title\":\"仅本模块\",\"value\":\"local\"}]},{\"name\":\"quarkCookie\",\"title\":\"夸克 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"baiduCookie\",\"title\":\"百度 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"cookie115\",\"title\":\"115 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"guangyaAuth\",\"title\":\"光鸭访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 accessToken；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"guangyaRefreshToken\",\"title\":\"光鸭刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refreshToken，用于自动续期；可留空；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"guangyaDeviceId\",\"title\":\"光鸭设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 deviceId；留空使用默认设备号；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"tianyiCookie\",\"title\":\"天翼 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"xunleiAuth\",\"title\":\"迅雷访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 access_token 或 Authorization；自动识别 Web/App；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"xunleiRefreshToken\",\"title\":\"迅雷刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refresh_token，用于自动续期；可留空；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"xunleiDeviceId\",\"title\":\"迅雷设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 device_id；留空优先从令牌读取，否则使用默认设备号；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"subtitles\",\"title\":\"同版本外挂字幕\",\"type\":\"enumeration\",\"value\":\"auto\",\"enumOptions\":[{\"title\":\"自动（最多 3 条）\",\"value\":\"auto\"},{\"title\":\"关闭\",\"value\":\"off\"}]}],\"search\":{\"title\":\"SeedHub 搜索\",\"functionName\":\"search\",\"params\":[{\"name\":\"keyword\",\"title\":\"关键词（输入“访问检测”检查网站连接）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"page\",\"title\":\"页码\",\"type\":\"page\"}]},\"modules\":[{\"id\":\"loadResource\",\"title\":\"加载网盘资源\",\"functionName\":\"loadResource\",\"type\":\"stream\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"browse\",\"title\":\"SeedHub 分类\",\"functionName\":\"browse\",\"cacheDuration\":120,\"params\":[{\"name\":\"category\",\"title\":\"分类\",\"type\":\"enumeration\",\"value\":\"1\",\"enumOptions\":[{\"title\":\"电影\",\"value\":\"1\"},{\"title\":\"动漫\",\"value\":\"2\"},{\"title\":\"剧集\",\"value\":\"3\"}]},{\"name\":\"order\",\"title\":\"排序\",\"type\":\"enumeration\",\"value\":\"update\",\"enumOptions\":[{\"title\":\"最近更新\",\"value\":\"update\"},{\"title\":\"上映时间\",\"value\":\"date\"},{\"title\":\"豆瓣评分\",\"value\":\"score\"},{\"title\":\"近期热门\",\"value\":\"hot\"}]},{\"name\":\"page\",\"title\":\"页码\",\"type\":\"page\"}]},{\"id\":\"clearRexCatalogCache\",\"title\":\"刷新网盘目录缓存\",\"functionName\":\"clearRexCatalogCache\",\"cacheDuration\":0,\"params\":[]}]}"
const cpBetaModuleListValues=new Map(WidgetMetadata.globalParams.map(p=>[p.name,p.value]));
WidgetMetadata = {"id":"catpaw.seedhub","title":"猫 · SeedHub","author":"balge","version":"2.2.8","requiredVersion":"0.0.1","description":"影视搜索与网盘播放，支持多版本、媒体标签和外挂字幕。","detailCacheDuration":1800,"globalParams":[{"name":"site","title":"手动域名（留空使用内置地址）","type":"input","value":"","placeholders":[{"title":"填写后优先使用，失败自动切换内置地址","value":""}]},{"name":"flaresolverrUrl","title":"FlareSolverr 地址（可选）","type":"input","value":"","placeholders":[{"title":"留空不使用；遇访问验证时调用，可填基础地址或 /v1，支持 ?apikey=…","value":""}]},{"name":"credentialSource","title":"网盘账号来源","type":"enumeration","value":"shared","enumOptions":[{"title":"共用账号","value":"shared"},{"title":"仅本模块","value":"local"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"subtitles","title":"同版本外挂字幕","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（最多 3 条）","value":"auto"},{"title":"关闭","value":"off"}]}],"search":{"title":"SeedHub 搜索","functionName":"search","params":[{"name":"keyword","title":"关键词（输入“访问检测”检查网站连接）","type":"input","value":""},{"name":"page","title":"页码","type":"page"}]},"modules":[{"id":"browse","title":"SeedHub 分类","functionName":"browse","cacheDuration":120,"params":[{"name":"category","title":"分类","type":"enumeration","value":"1","enumOptions":[{"title":"电影","value":"1"},{"title":"动漫","value":"2"},{"title":"剧集","value":"3"}]},{"name":"order","title":"排序","type":"enumeration","value":"update","enumOptions":[{"title":"最近更新","value":"update"},{"title":"上映时间","value":"date"},{"title":"豆瓣评分","value":"score"},{"title":"近期热门","value":"hot"}]},{"name":"page","title":"页码","type":"page"}]},{"id":"clearRexCatalogCache","title":"刷新网盘目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载网盘资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}]};
for(const p of WidgetMetadata.globalParams)if(cpBetaModuleListValues.has(p.name))p.value=cpBetaModuleListValues.get(p.name);
// This consumer overlay is evaluated after the original module and its Beta adapters.
if(typeof accountStatus==='function'&&typeof saveAccounts==='function'){
 const originalStatus=accountStatus;
 accountStatus=function(params={}){
  return params&&params.keyword==='保存账号'?saveAccounts(params):originalStatus({});
 };
}
if(typeof loadChannel==='function'&&typeof readChannels==='function'){
 const originalChannel=loadChannel;
 loadChannel=async function(params={}){
  const rows=await originalChannel(params),index=Number(params.channelIndex||1);
  if(rows.length||Number(params.page||1)>1||!Number.isInteger(index)||index<1||index>10)return rows;
  const slot=channelEntries(channelFormValue())[index-1]||'';
  if(parseChannel(slot,index))return rows;
  return [{id:'channel-unconfigured-'+index,type:'text',title:'频道 '+index+' 尚未配置',description:'请先在模块设置中配置第 '+index+' 个频道。空位置会保留，不会改变其他频道的编号。'}];
 };
}
for(const name of new Set(WidgetMetadata.modules.filter(m=>/刷新.*缓存/.test(m.title)).map(m=>m.functionName))){
 const original=globalThis[name];
 if(typeof original!=='function')continue;
 globalThis[name]=async function(...args){
  const rows=await original.apply(this,args);
  return rows.map(row=>({...row,type:'text',description:'模块内部网盘目录及相关索引缓存已刷新。若详情仍未更新，请等待客户端详情缓存过期后重试。'}));
 };
}
/* End CatPaw Beta module list overlay */
