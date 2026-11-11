var WidgetMetadata = {"id":"catpaw.miniyingshi","title":"猫 · 迷你影视","author":"balge","version":"2.2.8","requiredVersion":"0.0.1","description":"影视搜索、分类与网盘资源。复用全盘的网盘目录、分集匹配、画质和字幕逻辑；分享地址需要网站免费账号。","detailCacheDuration":1800,"globalParams":[{"name":"email","title":"网站邮箱（必填）","type":"input","value":""},{"name":"password","title":"网站密码（必填，仅本机登录使用）","type":"input","value":""},{"name":"credentialSource","title":"网盘账号来源","type":"enumeration","value":"shared","enumOptions":[{"title":"共用账号","value":"shared"},{"title":"仅本模块","value":"local"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"subtitles","title":"同版本外挂字幕","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（最多 3 条）","value":"auto"},{"title":"关闭","value":"off"}]}],"search":{"title":"影视网盘搜索","functionName":"search","params":[{"name":"keyword","title":"关键词（输入“登录检测”检查网站账号）","type":"input","value":""},{"name":"page","title":"页码","type":"page"}]},"modules":[{"id":"browse","title":"影视分类","functionName":"browse","cacheDuration":120,"params":[{"name":"mediaType","title":"分类","type":"enumeration","value":"1","enumOptions":[{"title":"电影","value":"1"},{"title":"剧集","value":"2"},{"title":"动漫","value":"3"},{"title":"综艺","value":"4"}]},{"name":"sort","title":"排序","type":"enumeration","value":"updated","enumOptions":[{"title":"最近更新","value":"updated"},{"title":"热度","value":"hot"},{"title":"豆瓣评分","value":"doubanScore"}]},{"name":"page","title":"页码","type":"page"}]},{"id":"clearRexCatalogCache","title":"刷新网盘目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载网盘资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}]};
var MiniPan = (function(){var WidgetMetadata;
WidgetMetadata = {"id":"catpaw.miniyingshi.pan.rex","title":"迷你影视","version":"2.2.4","requiredVersion":"0.0.1","description":"全盘影视搜索，支持夸克、百度、UC、115、123、移动、天翼、迅雷网盘及外挂字幕。","author":"balge","site":"https://quanpan.xyz","detailCacheDuration":1800,"globalParams":[{"name":"site","title":"站点地址（留空使用全盘搜索）","type":"input","value":"https://quanpan.xyz"},{"name":"quarkCookie","title":"垮 Cookie","type":"input"},{"name":"baiduCookie","title":"佰 Cookie","type":"input"},{"name":"cookie115","title":"伍 Cookie","type":"input"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；迅雷三项全部留空时使用通用配置","value":""}]},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；光鸭三项全部留空时使用通用配置","value":""}]},{"name":"multiSource","title":"聚合搜索","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]}],"modules":[{"id":"searchResources","title":"搜索网盘资源","functionName":"search","cacheDuration":0,"params":[{"name":"keyword","title":"关键词","type":"input"}]},{"id":"refreshCatalog","title":"刷新目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}],"search":{"title":"全盘搜索","functionName":"search","params":[{"name":"keyword","title":"关键词","type":"input"},{"name":"page","title":"页码","type":"page"}]}};

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const CACHE_FOLDER = "CatpawCache";
const STORAGE_COOKIE_KEY = "catpaw.miniyingshi.pan.quark.cookie";
const STORAGE_SITE_KEY = "catpaw.miniyingshi.pan.quark.site";
const STORAGE_PRELOAD_KEY = "catpaw.miniyingshi.pan.quark.preloadCount";
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
  if(Object.prototype.hasOwnProperty.call(params,"cookie115")) safeStorageSet("catpaw.miniyingshi.pan.115.cookie",normalizeCookie(params.cookie115));
  if (params.multiSource === "enabled" || params.multiSource === "disabled") {
    safeStorageSet("catpaw.miniyingshi.pan.multiSource", params.multiSource);
  }
  const ck = params.quarkCookie || params.cookie || params.quarkck || "";
  if(Object.prototype.hasOwnProperty.call(params,"quarkCookie")) {
    CURRENT_COOKIE=normalizeCookie(params.quarkCookie);
    safeStorageSet(STORAGE_COOKIE_KEY,CURRENT_COOKIE);
  } else ensureCookie(ck);
  if (Object.prototype.hasOwnProperty.call(params, "baiduCookie")) {
    safeStorageSet("catpaw.miniyingshi.pan.baidu.cookie", normalizeCookie(params.baiduCookie));
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
  return "minipan:" + encodeURIComponent(JSON.stringify(obj));
}

function decodeLink(link) {
  const raw = String(link || "");
  if (!raw.startsWith("minipan:")) return null;
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
  return {id:"miniyingshi-pan-"+baiduSha1(JSON.stringify([share.key,share.passcode])),type:"url",title,posterPath:"",description:providerName(share.provider),link:encodeLink(info)};
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
    id: `miniyingshi-pan-${tid}`,
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
      if(!info&&(safeStorageGet("catpaw.miniyingshi.pan.multiSource")||"enabled")!=="enabled")return [];
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
  let cookie = normalizeCookie(safeStorageGet("catpaw.miniyingshi.pan.baidu.cookie"));
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
    id: `miniyingshi-pan-${tid}-${group.identity.key}`, type: "url",
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
  const cookie=normalizeCookie(safeStorageGet("catpaw.miniyingshi.pan.115.cookie"));
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
  const hash=baiduSha1(key),storageKey="catpaw.miniyingshi.pan.catalog."+hash;
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
      let keys=[];try{keys=JSON.parse(safeStorageGet("catpaw.miniyingshi.pan.catalog.keys")||"[]");}catch(_){}
      keys=keys.filter(k=>k!==hash);keys.push(hash);
      while(keys.length>16)safeStorageSet("catpaw.miniyingshi.pan.catalog."+keys.shift(),"");
      safeStorageSet(storageKey,JSON.stringify(entry));safeStorageSet("catpaw.miniyingshi.pan.catalog.keys",JSON.stringify(keys));
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
  const cookie=share.provider==="baidu"?safeStorageGet("catpaw.miniyingshi.pan.baidu.cookie"):
    share.provider==="115"?safeStorageGet("catpaw.miniyingshi.pan.115.cookie"):share.provider==="quark"?ensureCookie():"";
  return [share.provider==="quark"?"share-video-v3":"share-package-v2",share.provider,share.shareId,share.passcode||"",baiduSha1(String(cookie||""))].join(":");
}
function qpInvalidateShareCatalog(share){
  const hash=baiduSha1(qpShareCatalogKey(share));rexMemoryCache.delete(hash);safeStorageSet("catpaw.miniyingshi.pan.catalog."+hash,"");
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
  let keys=[];try{keys=JSON.parse(safeStorageGet("catpaw.miniyingshi.pan.catalog.keys")||"[]");}catch(_){}
  keys.forEach(key=>safeStorageSet("catpaw.miniyingshi.pan.catalog."+key,""));safeStorageSet("catpaw.miniyingshi.pan.catalog.keys","[]");
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
const QP_INDEX_PREFIX="catpaw.miniyingshi.pan.selected-index.",QP_INDEX_KEYS=QP_INDEX_PREFIX+"keys";
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
})({"linkPrefix":"minipan:","site":"https://www.miniyingshi.com"});
})();
var MiniDiscovery=(()=>{var Rh=Object.create;var nt=Object.defineProperty;var Oh=Object.getOwnPropertyDescriptor;var Ph=Object.getOwnPropertyNames;var Ch=Object.getPrototypeOf,qh=Object.prototype.hasOwnProperty;var h=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Lh=(e,t)=>{for(var r in t)nt(e,r,{get:t[r],enumerable:!0})},zs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ph(t))!qh.call(e,i)&&i!==r&&nt(e,i,{get:()=>t[i],enumerable:!(n=Oh(t,i))||n.enumerable});return e};var An=(e,t,r)=>(r=e!=null?Rh(Ch(e)):{},zs(t||!e||!e.__esModule?nt(r,"default",{value:e,enumerable:!0}):r,e)),Uh=e=>zs(nt({},"__esModule",{value:!0}),e);var Q=h(($y,Js)=>{"use strict";Js.exports=function(e){try{return!!e()}catch{return!0}}});var mr=h((zy,Ys)=>{"use strict";var Fh=Q();Ys.exports=!Fh(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var H=h((Wy,Zs)=>{"use strict";var Qs=mr(),Xs=Function.prototype,Tn=Xs.call,kh=Qs&&Xs.bind.bind(Tn,Tn);Zs.exports=Qs?kh:function(e){return function(){return Tn.apply(e,arguments)}}});var it=h((Ky,ro)=>{"use strict";var eo=H(),Dh=eo({}.toString),Nh=eo("".slice);ro.exports=function(e){return Nh(Dh(e),8,-1)}});var On=h((Jy,to)=>{"use strict";var Bh=H(),jh=Q(),Hh=it(),Rn=Object,Mh=Bh("".split);to.exports=jh(function(){return!Rn("z").propertyIsEnumerable(0)})?function(e){return Hh(e)==="String"?Mh(e,""):Rn(e)}:Rn});var st=h((Yy,no)=>{"use strict";no.exports=function(e){return e==null}});var vr=h((Qy,io)=>{"use strict";var Gh=st(),Vh=TypeError;io.exports=function(e){if(Gh(e))throw new Vh("Can't call method on "+e);return e}});var He=h((Xy,so)=>{"use strict";var $h=On(),zh=vr();so.exports=function(e){return $h(zh(e))}});var ao=h((Zy,oo)=>{"use strict";oo.exports=function(){}});var qe=h((e1,uo)=>{"use strict";uo.exports={}});var V=h((Pn,co)=>{"use strict";var yr=function(e){return e&&e.Math===Math&&e};co.exports=yr(typeof globalThis=="object"&&globalThis)||yr(typeof window=="object"&&window)||yr(typeof self=="object"&&self)||yr(typeof global=="object"&&global)||yr(typeof Pn=="object"&&Pn)||(function(){return this})()||Function("return this")()});var $=h((r1,fo)=>{"use strict";var Cn=typeof document=="object"&&document.all;fo.exports=typeof Cn>"u"&&Cn!==void 0?function(e){return typeof e=="function"||e===Cn}:function(e){return typeof e=="function"}});var po=h((t1,ho)=>{"use strict";var Wh=V(),Kh=$(),lo=Wh.WeakMap;ho.exports=Kh(lo)&&/native code/.test(String(lo))});var me=h((n1,xo)=>{"use strict";var Jh=$();xo.exports=function(e){return typeof e=="object"?e!==null:Jh(e)}});var W=h((i1,go)=>{"use strict";var Yh=Q();go.exports=!Yh(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var Ln=h((s1,vo)=>{"use strict";var Qh=V(),mo=me(),qn=Qh.document,Xh=mo(qn)&&mo(qn.createElement);vo.exports=function(e){return Xh?qn.createElement(e):{}}});var Un=h((o1,yo)=>{"use strict";var Zh=W(),e0=Q(),r0=Ln();yo.exports=!Zh&&!e0(function(){return Object.defineProperty(r0("div"),"a",{get:function(){return 7}}).a!==7})});var Fn=h((a1,wo)=>{"use strict";var t0=W(),n0=Q();wo.exports=t0&&n0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var _e=h((u1,bo)=>{"use strict";var i0=me(),s0=String,o0=TypeError;bo.exports=function(e){if(i0(e))return e;throw new o0(s0(e)+" is not an object")}});var ve=h((c1,Io)=>{"use strict";var a0=mr(),ot=Function.prototype.call;Io.exports=a0?ot.bind(ot):function(){return ot.apply(ot,arguments)}});var wr=h((f1,Eo)=>{"use strict";Eo.exports={}});var Le=h((l1,So)=>{"use strict";var kn=wr(),Dn=V(),u0=$(),_o=function(e){return u0(e)?e:void 0};So.exports=function(e,t){return arguments.length<2?_o(kn[e])||_o(Dn[e]):kn[e]&&kn[e][t]||Dn[e]&&Dn[e][t]}});var Nn=h((h1,Ao)=>{"use strict";var c0=H();Ao.exports=c0({}.isPrototypeOf)});var Po=h((d1,Oo)=>{"use strict";var f0=V(),To=f0.navigator,Ro=To&&To.userAgent;Oo.exports=Ro?String(Ro):""});var Do=h((p1,ko)=>{"use strict";var Fo=V(),Bn=Po(),Co=Fo.process,qo=Fo.Deno,Lo=Co&&Co.versions||qo&&qo.version,Uo=Lo&&Lo.v8,ae,at;Uo&&(ae=Uo.split("."),at=ae[0]>0&&ae[0]<4?1:+(ae[0]+ae[1]));!at&&Bn&&(ae=Bn.match(/Edge\/(\d+)/),(!ae||ae[1]>=74)&&(ae=Bn.match(/Chrome\/(\d+)/),ae&&(at=+ae[1])));ko.exports=at});var jn=h((x1,Bo)=>{"use strict";var No=Do(),l0=Q(),h0=V(),d0=h0.String;Bo.exports=!!Object.getOwnPropertySymbols&&!l0(function(){var e=Symbol("symbol detection");return!d0(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&No&&No<41})});var Hn=h((g1,jo)=>{"use strict";var p0=jn();jo.exports=p0&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Mn=h((m1,Ho)=>{"use strict";var x0=Le(),g0=$(),m0=Nn(),v0=Hn(),y0=Object;Ho.exports=v0?function(e){return typeof e=="symbol"}:function(e){var t=x0("Symbol");return g0(t)&&m0(t.prototype,y0(e))}});var Gn=h((v1,Mo)=>{"use strict";var w0=String;Mo.exports=function(e){try{return w0(e)}catch{return"Object"}}});var br=h((y1,Go)=>{"use strict";var b0=$(),I0=Gn(),E0=TypeError;Go.exports=function(e){if(b0(e))return e;throw new E0(I0(e)+" is not a function")}});var ut=h((w1,Vo)=>{"use strict";var _0=br(),S0=st();Vo.exports=function(e,t){var r=e[t];return S0(r)?void 0:_0(r)}});var zo=h((b1,$o)=>{"use strict";var Vn=ve(),$n=$(),zn=me(),A0=TypeError;$o.exports=function(e,t){var r,n;if(t==="string"&&$n(r=e.toString)&&!zn(n=Vn(r,e))||$n(r=e.valueOf)&&!zn(n=Vn(r,e))||t!=="string"&&$n(r=e.toString)&&!zn(n=Vn(r,e)))return n;throw new A0("Can't convert object to primitive value")}});var Me=h((I1,Wo)=>{"use strict";Wo.exports=!0});var Yo=h((E1,Jo)=>{"use strict";var Ko=V(),T0=Object.defineProperty;Jo.exports=function(e,t){try{T0(Ko,e,{value:t,configurable:!0,writable:!0})}catch{Ko[e]=t}return t}});var Ir=h((_1,Zo)=>{"use strict";var R0=Me(),O0=V(),P0=Yo(),Qo="__core-js_shared__",Xo=Zo.exports=O0[Qo]||P0(Qo,{});(Xo.versions||(Xo.versions=[])).push({version:"3.46.0",mode:R0?"pure":"global",copyright:"\xA9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",license:"https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Wn=h((S1,ra)=>{"use strict";var ea=Ir();ra.exports=function(e,t){return ea[e]||(ea[e]=t||{})}});var Er=h((A1,ta)=>{"use strict";var C0=vr(),q0=Object;ta.exports=function(e){return q0(C0(e))}});var ue=h((T1,na)=>{"use strict";var L0=H(),U0=Er(),F0=L0({}.hasOwnProperty);na.exports=Object.hasOwn||function(t,r){return F0(U0(t),r)}});var Kn=h((R1,ia)=>{"use strict";var k0=H(),D0=0,N0=Math.random(),B0=k0(1.1.toString);ia.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+B0(++D0+N0,36)}});var ce=h((O1,oa)=>{"use strict";var j0=V(),H0=Wn(),sa=ue(),M0=Kn(),G0=jn(),V0=Hn(),Ge=j0.Symbol,Jn=H0("wks"),$0=V0?Ge.for||Ge:Ge&&Ge.withoutSetter||M0;oa.exports=function(e){return sa(Jn,e)||(Jn[e]=G0&&sa(Ge,e)?Ge[e]:$0("Symbol."+e)),Jn[e]}});var fa=h((P1,ca)=>{"use strict";var z0=ve(),aa=me(),ua=Mn(),W0=ut(),K0=zo(),J0=ce(),Y0=TypeError,Q0=J0("toPrimitive");ca.exports=function(e,t){if(!aa(e)||ua(e))return e;var r=W0(e,Q0),n;if(r){if(t===void 0&&(t="default"),n=z0(r,e,t),!aa(n)||ua(n))return n;throw new Y0("Can't convert object to primitive value")}return t===void 0&&(t="number"),K0(e,t)}});var Yn=h((C1,la)=>{"use strict";var X0=fa(),Z0=Mn();la.exports=function(e){var t=X0(e,"string");return Z0(t)?t:t+""}});var Ue=h(da=>{"use strict";var ed=W(),rd=Un(),td=Fn(),ct=_e(),ha=Yn(),nd=TypeError,Qn=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Xn="enumerable",Zn="configurable",ei="writable";da.f=ed?td?function(t,r,n){if(ct(t),r=ha(r),ct(n),typeof t=="function"&&r==="prototype"&&"value"in n&&ei in n&&!n[ei]){var i=id(t,r);i&&i[ei]&&(t[r]=n.value,n={configurable:Zn in n?n[Zn]:i[Zn],enumerable:Xn in n?n[Xn]:i[Xn],writable:!1})}return Qn(t,r,n)}:Qn:function(t,r,n){if(ct(t),r=ha(r),ct(n),rd)try{return Qn(t,r,n)}catch{}if("get"in n||"set"in n)throw new nd("Accessors not supported");return"value"in n&&(t[r]=n.value),t}});var Ve=h((L1,pa)=>{"use strict";pa.exports=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}}});var $e=h((U1,xa)=>{"use strict";var sd=W(),od=Ue(),ad=Ve();xa.exports=sd?function(e,t,r){return od.f(e,t,ad(1,r))}:function(e,t,r){return e[t]=r,e}});var ft=h((F1,ma)=>{"use strict";var ud=Wn(),cd=Kn(),ga=ud("keys");ma.exports=function(e){return ga[e]||(ga[e]=cd(e))}});var lt=h((k1,va)=>{"use strict";va.exports={}});var Sr=h((D1,ba)=>{"use strict";var fd=po(),wa=V(),ld=me(),hd=$e(),ri=ue(),ti=Ir(),dd=ft(),pd=lt(),ya="Object already initialized",ni=wa.TypeError,xd=wa.WeakMap,ht,_r,dt,gd=function(e){return dt(e)?_r(e):ht(e,{})},md=function(e){return function(t){var r;if(!ld(t)||(r=_r(t)).type!==e)throw new ni("Incompatible receiver, "+e+" required");return r}};fd||ti.state?(fe=ti.state||(ti.state=new xd),fe.get=fe.get,fe.has=fe.has,fe.set=fe.set,ht=function(e,t){if(fe.has(e))throw new ni(ya);return t.facade=e,fe.set(e,t),t},_r=function(e){return fe.get(e)||{}},dt=function(e){return fe.has(e)}):(Fe=dd("state"),pd[Fe]=!0,ht=function(e,t){if(ri(e,Fe))throw new ni(ya);return t.facade=e,hd(e,Fe,t),t},_r=function(e){return ri(e,Fe)?e[Fe]:{}},dt=function(e){return ri(e,Fe)});var fe,Fe;ba.exports={set:ht,get:_r,has:dt,enforce:gd,getterFor:md}});var Aa=h((N1,Sa)=>{"use strict";var vd=mr(),_a=Function.prototype,Ia=_a.apply,Ea=_a.call;Sa.exports=typeof Reflect=="object"&&Reflect.apply||(vd?Ea.bind(Ia):function(){return Ea.apply(Ia,arguments)})});var ii=h((B1,Ta)=>{"use strict";var yd=it(),wd=H();Ta.exports=function(e){if(yd(e)==="Function")return wd(e)}});var si=h(Pa=>{"use strict";var Ra={}.propertyIsEnumerable,Oa=Object.getOwnPropertyDescriptor,bd=Oa&&!Ra.call({1:2},1);Pa.f=bd?function(t){var r=Oa(this,t);return!!r&&r.enumerable}:Ra});var La=h(qa=>{"use strict";var Id=W(),Ed=ve(),_d=si(),Sd=Ve(),Ad=He(),Td=Yn(),Rd=ue(),Od=Un(),Ca=Object.getOwnPropertyDescriptor;qa.f=Id?Ca:function(t,r){if(t=Ad(t),r=Td(r),Od)try{return Ca(t,r)}catch{}if(Rd(t,r))return Sd(!Ed(_d.f,t,r),t[r])}});var Fa=h((M1,Ua)=>{"use strict";var Pd=Q(),Cd=$(),qd=/#|\.prototype\./,Ar=function(e,t){var r=Ud[Ld(e)];return r===kd?!0:r===Fd?!1:Cd(t)?Pd(t):!!t},Ld=Ar.normalize=function(e){return String(e).replace(qd,".").toLowerCase()},Ud=Ar.data={},Fd=Ar.NATIVE="N",kd=Ar.POLYFILL="P";Ua.exports=Ar});var Tr=h((G1,Da)=>{"use strict";var ka=ii(),Dd=br(),Nd=mr(),Bd=ka(ka.bind);Da.exports=function(e,t){return Dd(e),t===void 0?e:Nd?Bd(e,t):function(){return e.apply(t,arguments)}}});var ke=h((V1,Ba)=>{"use strict";var Rr=V(),jd=Aa(),Hd=ii(),Md=$(),Gd=La().f,Vd=Fa(),ze=wr(),$d=Tr(),We=$e(),Na=ue();Ir();var zd=function(e){var t=function(r,n,i){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,i)}return jd(e,this,arguments)};return t.prototype=e.prototype,t};Ba.exports=function(e,t){var r=e.target,n=e.global,i=e.stat,s=e.proto,o=n?Rr:i?Rr[r]:Rr[r]&&Rr[r].prototype,u=n?ze:ze[r]||We(ze,r,{})[r],f=u.prototype,p,l,a,c,x,g,S,E,O;for(c in t)p=Vd(n?c:r+(i?".":"#")+c,e.forced),l=!p&&o&&Na(o,c),g=u[c],l&&(e.dontCallGetSet?(O=Gd(o,c),S=O&&O.value):S=o[c]),x=l&&S?S:t[c],!(!p&&!s&&typeof g==typeof x)&&(e.bind&&l?E=$d(x,Rr):e.wrap&&l?E=zd(x):s&&Md(x)?E=Hd(x):E=x,(e.sham||x&&x.sham||g&&g.sham)&&We(E,"sham",!0),We(u,c,E),s&&(a=r+"Prototype",Na(ze,a)||We(ze,a,{}),We(ze[a],c,x),e.real&&f&&(p||!f[c])&&We(f,c,x)))}});var Ma=h(($1,Ha)=>{"use strict";var oi=W(),Wd=ue(),ja=Function.prototype,Kd=oi&&Object.getOwnPropertyDescriptor,ai=Wd(ja,"name"),Jd=ai&&(function(){}).name==="something",Yd=ai&&(!oi||oi&&Kd(ja,"name").configurable);Ha.exports={EXISTS:ai,PROPER:Jd,CONFIGURABLE:Yd}});var Va=h((z1,Ga)=>{"use strict";var Qd=Math.ceil,Xd=Math.floor;Ga.exports=Math.trunc||function(t){var r=+t;return(r>0?Xd:Qd)(r)}});var pt=h((W1,$a)=>{"use strict";var Zd=Va();$a.exports=function(e){var t=+e;return t!==t||t===0?0:Zd(t)}});var ui=h((K1,za)=>{"use strict";var ep=pt(),rp=Math.max,tp=Math.min;za.exports=function(e,t){var r=ep(e);return r<0?rp(r+t,0):tp(r,t)}});var Ka=h((J1,Wa)=>{"use strict";var np=pt(),ip=Math.min;Wa.exports=function(e){var t=np(e);return t>0?ip(t,9007199254740991):0}});var ci=h((Y1,Ja)=>{"use strict";var sp=Ka();Ja.exports=function(e){return sp(e.length)}});var Xa=h((Q1,Qa)=>{"use strict";var op=He(),ap=ui(),up=ci(),Ya=function(e){return function(t,r,n){var i=op(t),s=up(i);if(s===0)return!e&&-1;var o=ap(n,s),u;if(e&&r!==r){for(;s>o;)if(u=i[o++],u!==u)return!0}else for(;s>o;o++)if((e||o in i)&&i[o]===r)return e||o||0;return!e&&-1}};Qa.exports={includes:Ya(!0),indexOf:Ya(!1)}});var ru=h((X1,eu)=>{"use strict";var cp=H(),fi=ue(),fp=He(),lp=Xa().indexOf,hp=lt(),Za=cp([].push);eu.exports=function(e,t){var r=fp(e),n=0,i=[],s;for(s in r)!fi(hp,s)&&fi(r,s)&&Za(i,s);for(;t.length>n;)fi(r,s=t[n++])&&(~lp(i,s)||Za(i,s));return i}});var li=h((Z1,tu)=>{"use strict";tu.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var hi=h((ew,nu)=>{"use strict";var dp=ru(),pp=li();nu.exports=Object.keys||function(t){return dp(t,pp)}});var su=h(iu=>{"use strict";var xp=W(),gp=Fn(),mp=Ue(),vp=_e(),yp=He(),wp=hi();iu.f=xp&&!gp?Object.defineProperties:function(t,r){vp(t);for(var n=yp(r),i=wp(r),s=i.length,o=0,u;s>o;)mp.f(t,u=i[o++],n[u]);return t}});var au=h((tw,ou)=>{"use strict";var bp=Le();ou.exports=bp("document","documentElement")});var mt=h((nw,pu)=>{"use strict";var Ip=_e(),Ep=su(),uu=li(),_p=lt(),Sp=au(),Ap=Ln(),Tp=ft(),cu=">",fu="<",pi="prototype",xi="script",hu=Tp("IE_PROTO"),di=function(){},du=function(e){return fu+xi+cu+e+fu+"/"+xi+cu},lu=function(e){e.write(du("")),e.close();var t=e.parentWindow.Object;return e=null,t},Rp=function(){var e=Ap("iframe"),t="java"+xi+":",r;return e.style.display="none",Sp.appendChild(e),e.src=String(t),r=e.contentWindow.document,r.open(),r.write(du("document.F=Object")),r.close(),r.F},xt,gt=function(){try{xt=new ActiveXObject("htmlfile")}catch{}gt=typeof document<"u"?document.domain&&xt?lu(xt):Rp():lu(xt);for(var e=uu.length;e--;)delete gt[pi][uu[e]];return gt()};_p[hu]=!0;pu.exports=Object.create||function(t,r){var n;return t!==null?(di[pi]=Ip(t),n=new di,di[pi]=null,n[hu]=t):n=gt(),r===void 0?n:Ep.f(n,r)}});var gu=h((iw,xu)=>{"use strict";var Op=Q();xu.exports=!Op(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var mi=h((sw,vu)=>{"use strict";var Pp=ue(),Cp=$(),qp=Er(),Lp=ft(),Up=gu(),mu=Lp("IE_PROTO"),gi=Object,Fp=gi.prototype;vu.exports=Up?gi.getPrototypeOf:function(e){var t=qp(e);if(Pp(t,mu))return t[mu];var r=t.constructor;return Cp(r)&&t instanceof r?r.prototype:t instanceof gi?Fp:null}});var Ke=h((ow,yu)=>{"use strict";var kp=$e();yu.exports=function(e,t,r,n){return n&&n.enumerable?e[t]=r:kp(e,t,r),e}});var bi=h((aw,Iu)=>{"use strict";var Dp=Q(),Np=$(),Bp=me(),jp=mt(),wu=mi(),Hp=Ke(),Mp=ce(),Gp=Me(),wi=Mp("iterator"),bu=!1,we,vi,yi;[].keys&&(yi=[].keys(),"next"in yi?(vi=wu(wu(yi)),vi!==Object.prototype&&(we=vi)):bu=!0);var Vp=!Bp(we)||Dp(function(){var e={};return we[wi].call(e)!==e});Vp?we={}:Gp&&(we=jp(we));Np(we[wi])||Hp(we,wi,function(){return this});Iu.exports={IteratorPrototype:we,BUGGY_SAFARI_ITERATORS:bu}});var vt=h((uw,_u)=>{"use strict";var $p=ce(),zp=$p("toStringTag"),Eu={};Eu[zp]="z";_u.exports=String(Eu)==="[object z]"});var Je=h((cw,Su)=>{"use strict";var Wp=vt(),Kp=$(),yt=it(),Jp=ce(),Yp=Jp("toStringTag"),Qp=Object,Xp=yt((function(){return arguments})())==="Arguments",Zp=function(e,t){try{return e[t]}catch{}};Su.exports=Wp?yt:function(e){var t,r,n;return e===void 0?"Undefined":e===null?"Null":typeof(r=Zp(t=Qp(e),Yp))=="string"?r:Xp?yt(t):(n=yt(t))==="Object"&&Kp(t.callee)?"Arguments":n}});var Tu=h((fw,Au)=>{"use strict";var ex=vt(),rx=Je();Au.exports=ex?{}.toString:function(){return"[object "+rx(this)+"]"}});var Ye=h((lw,Ou)=>{"use strict";var tx=vt(),nx=Ue().f,ix=$e(),sx=ue(),ox=Tu(),ax=ce(),Ru=ax("toStringTag");Ou.exports=function(e,t,r,n){var i=r?e:e&&e.prototype;i&&(sx(i,Ru)||nx(i,Ru,{configurable:!0,value:t}),n&&!tx&&ix(i,"toString",ox))}});var Ii=h((hw,Pu)=>{"use strict";var ux=bi().IteratorPrototype,cx=mt(),fx=Ve(),lx=Ye(),hx=qe(),dx=function(){return this};Pu.exports=function(e,t,r,n){var i=t+" Iterator";return e.prototype=cx(ux,{next:fx(+!n,r)}),lx(e,i,!1,!0),hx[i]=dx,e}});var qu=h((dw,Cu)=>{"use strict";var px=H(),xx=br();Cu.exports=function(e,t,r){try{return px(xx(Object.getOwnPropertyDescriptor(e,t)[r]))}catch{}}});var Uu=h((pw,Lu)=>{"use strict";var gx=me();Lu.exports=function(e){return gx(e)||e===null}});var ku=h((xw,Fu)=>{"use strict";var mx=Uu(),vx=String,yx=TypeError;Fu.exports=function(e){if(mx(e))return e;throw new yx("Can't set "+vx(e)+" as a prototype")}});var Nu=h((gw,Du)=>{"use strict";var wx=qu(),bx=me(),Ix=vr(),Ex=ku();Du.exports=Object.setPrototypeOf||("__proto__"in{}?(function(){var e=!1,t={},r;try{r=wx(Object.prototype,"__proto__","set"),r(t,[]),e=t instanceof Array}catch{}return function(i,s){return Ix(i),Ex(s),bx(i)&&(e?r(i,s):i.__proto__=s),i}})():void 0)});var _i=h((mw,Ku)=>{"use strict";var _x=ke(),Sx=ve(),wt=Me(),zu=Ma(),Ax=$(),Tx=Ii(),Bu=mi(),ju=Nu(),Rx=Ye(),Ox=$e(),Ei=Ke(),Px=ce(),Hu=qe(),Wu=bi(),Cx=zu.PROPER,qx=zu.CONFIGURABLE,Mu=Wu.IteratorPrototype,bt=Wu.BUGGY_SAFARI_ITERATORS,Or=Px("iterator"),Gu="keys",Pr="values",Vu="entries",$u=function(){return this};Ku.exports=function(e,t,r,n,i,s,o){Tx(r,t,n);var u=function(O){if(O===i&&c)return c;if(!bt&&O&&O in l)return l[O];switch(O){case Gu:return function(){return new r(this,O)};case Pr:return function(){return new r(this,O)};case Vu:return function(){return new r(this,O)}}return function(){return new r(this)}},f=t+" Iterator",p=!1,l=e.prototype,a=l[Or]||l["@@iterator"]||i&&l[i],c=!bt&&a||u(i),x=t==="Array"&&l.entries||a,g,S,E;if(x&&(g=Bu(x.call(new e)),g!==Object.prototype&&g.next&&(!wt&&Bu(g)!==Mu&&(ju?ju(g,Mu):Ax(g[Or])||Ei(g,Or,$u)),Rx(g,f,!0,!0),wt&&(Hu[f]=$u))),Cx&&i===Pr&&a&&a.name!==Pr&&(!wt&&qx?Ox(l,"name",Pr):(p=!0,c=function(){return Sx(a,this)})),i)if(S={values:u(Pr),keys:s?c:u(Gu),entries:u(Vu)},o)for(E in S)(bt||p||!(E in l))&&Ei(l,E,S[E]);else _x({target:t,proto:!0,forced:bt||p},S);return(!wt||o)&&l[Or]!==c&&Ei(l,Or,c,{name:i}),Hu[t]=c,S}});var It=h((vw,Ju)=>{"use strict";Ju.exports=function(e,t){return{value:e,done:t}}});var Ai=h((yw,ec)=>{"use strict";var Lx=He(),Si=ao(),Yu=qe(),Xu=Sr(),Ux=Ue().f,Fx=_i(),Et=It(),kx=Me(),Dx=W(),Zu="Array Iterator",Nx=Xu.set,Bx=Xu.getterFor(Zu);ec.exports=Fx(Array,"Array",function(e,t){Nx(this,{type:Zu,target:Lx(e),index:0,kind:t})},function(){var e=Bx(this),t=e.target,r=e.index++;if(!t||r>=t.length)return e.target=null,Et(void 0,!0);switch(e.kind){case"keys":return Et(r,!1);case"values":return Et(t[r],!1)}return Et([r,t[r]],!1)},"values");var Qu=Yu.Arguments=Yu.Array;Si("keys");Si("values");Si("entries");if(!kx&&Dx&&Qu.name!=="values")try{Ux(Qu,"name",{value:"values"})}catch{}});var nc=h(()=>{"use strict";var jx=ke(),Hx=H(),Mx=ui(),Gx=RangeError,rc=String.fromCharCode,tc=String.fromCodePoint,Vx=Hx([].join),$x=!!tc&&tc.length!==1;jx({target:"String",stat:!0,arity:1,forced:$x},{fromCodePoint:function(t){for(var r=[],n=arguments.length,i=0,s;n>i;){if(s=+arguments[i++],Mx(s,1114111)!==s)throw new Gx(s+" is not a valid code point");r[i]=s<65536?rc(s):rc(((s-=65536)>>10)+55296,s%1024+56320)}return Vx(r,"")}})});var oc=h((Iw,sc)=>{"use strict";var ic=V(),zx=W(),Wx=Object.getOwnPropertyDescriptor;sc.exports=function(e){if(!zx)return ic[e];var t=Wx(ic,e);return t&&t.value}});var Cr=h((Ew,uc)=>{"use strict";var Kx=Q(),Jx=ce(),Yx=W(),ac=Me(),Qx=Jx("iterator");uc.exports=!Kx(function(){var e=new URL("b?a=1&b=2&c=3","https://a"),t=e.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return e.pathname="c%20d",t.forEach(function(i,s){t.delete("b"),n+=s+i}),r.delete("a",2),r.delete("b",void 0),ac&&(!e.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!t.size&&(ac||!Yx)||!t.sort||e.href!=="https://a/c%20d?a=1&c=3"||t.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!t[Qx]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("https://\u0442\u0435\u0441\u0442").host!=="xn--e1aybc"||new URL("https://a#\u0431").hash!=="#%D0%B1"||n!=="a1c3"||new URL("https://x",void 0).host!=="x"})});var Ti=h((_w,cc)=>{"use strict";var Xx=Ue();cc.exports=function(e,t,r){return Xx.f(e,t,r)}});var lc=h((Sw,fc)=>{"use strict";var Zx=Ke();fc.exports=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:Zx(e,n,t[n],r);return e}});var Ri=h((Aw,hc)=>{"use strict";var eg=Nn(),rg=TypeError;hc.exports=function(e,t){if(eg(t,e))return e;throw new rg("Incorrect invocation")}});var De=h((Tw,dc)=>{"use strict";var tg=Je(),ng=String;dc.exports=function(e){if(tg(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return ng(e)}});var _t=h((Rw,xc)=>{"use strict";var ig=Je(),pc=ut(),sg=st(),og=qe(),ag=ce(),ug=ag("iterator");xc.exports=function(e){if(!sg(e))return pc(e,ug)||pc(e,"@@iterator")||og[ig(e)]}});var Oi=h((Ow,gc)=>{"use strict";var cg=ve(),fg=br(),lg=_e(),hg=Gn(),dg=_t(),pg=TypeError;gc.exports=function(e,t){var r=arguments.length<2?dg(e):t;if(fg(r))return lg(cg(r,e));throw new pg(hg(e)+" is not iterable")}});var qr=h((Pw,mc)=>{"use strict";var xg=TypeError;mc.exports=function(e,t){if(e<t)throw new xg("Not enough arguments");return e}});var Pi=h((Cw,vc)=>{"use strict";var gg=H();vc.exports=gg([].slice)});var bc=h((qw,wc)=>{"use strict";var yc=Pi(),mg=Math.floor,Ci=function(e,t){var r=e.length;if(r<8)for(var n=1,i,s;n<r;){for(s=n,i=e[n];s&&t(e[s-1],i)>0;)e[s]=e[--s];s!==n++&&(e[s]=i)}else for(var o=mg(r/2),u=Ci(yc(e,0,o),t),f=Ci(yc(e,o),t),p=u.length,l=f.length,a=0,c=0;a<p||c<l;)e[a+c]=a<p&&c<l?t(u[a],f[c])<=0?u[a++]:f[c++]:a<p?u[a++]:f[c++];return e};wc.exports=Ci});var ji=h((Lw,Vc)=>{"use strict";Ai();nc();var Di=ke(),Uc=V(),Ni=oc(),vg=Le(),St=ve(),le=H(),Lr=W(),Fc=Cr(),kc=Ke(),yg=Ti(),wg=lc(),bg=Ye(),Ig=Ii(),Bi=Sr(),Dc=Ri(),qi=$(),Eg=ue(),_g=Tr(),Sg=Je(),Ag=_e(),Nc=me(),K=De(),Tg=mt(),Ic=Ve(),Ec=Oi(),Rg=_t(),At=It(),Qe=qr(),Og=ce(),Pg=bc(),Cg=Og("iterator"),Ze="URLSearchParams",Bc=Ze+"Iterator",jc=Bi.set,X=Bi.getterFor(Ze),qg=Bi.getterFor(Bc),_c=Ni("fetch"),Ot=Ni("Request"),Ur=Ni("Headers"),Li=Ot&&Ot.prototype,Sc=Ur&&Ur.prototype,Lg=Uc.TypeError,Ug=Uc.encodeURIComponent,Fg=String.fromCharCode,kg=vg("String","fromCodePoint"),Dg=parseInt,Rt=le("".charAt),Ac=le([].join),Se=le([].push),Hc=le("".replace),Ng=le([].shift),Tc=le([].splice),Rc=le("".split),Mc=le("".slice),Bg=le(/./.exec),jg=/\+/g,Ui="\uFFFD",Hg=/^[0-9a-f]+$/i,Oc=function(e,t){var r=Mc(e,t,t+2);return Bg(Hg,r)?Dg(r,16):NaN},Mg=function(e){for(var t=0,r=128;r>0&&(e&r)!==0;r>>=1)t++;return t},Gg=function(e){var t=null;switch(e.length){case 1:t=e[0];break;case 2:t=(e[0]&31)<<6|e[1]&63;break;case 3:t=(e[0]&15)<<12|(e[1]&63)<<6|e[2]&63;break;case 4:t=(e[0]&7)<<18|(e[1]&63)<<12|(e[2]&63)<<6|e[3]&63;break}return t>1114111?null:t},Pc=function(e){e=Hc(e,jg," ");for(var t=e.length,r="",n=0;n<t;){var i=Rt(e,n);if(i==="%"){if(Rt(e,n+1)==="%"||n+3>t){r+="%",n++;continue}var s=Oc(e,n+1);if(s!==s){r+=i,n++;continue}n+=2;var o=Mg(s);if(o===0)i=Fg(s);else{if(o===1||o>4){r+=Ui,n++;continue}for(var u=[s],f=1;f<o&&(n++,!(n+3>t||Rt(e,n)!=="%"));){var p=Oc(e,n+1);if(p!==p){n+=3;break}if(p>191||p<128)break;Se(u,p),n+=2,f++}if(u.length!==o){r+=Ui;continue}var l=Gg(u);l===null?r+=Ui:i=kg(l)}}r+=i,n++}return r},Vg=/[!'()~]|%20/g,$g={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},zg=function(e){return $g[e]},Cc=function(e){return Hc(Ug(e),Vg,zg)},Fi=Ig(function(t,r){jc(this,{type:Bc,target:X(t).entries,index:0,kind:r})},Ze,function(){var t=qg(this),r=t.target,n=t.index++;if(!r||n>=r.length)return t.target=null,At(void 0,!0);var i=r[n];switch(t.kind){case"keys":return At(i.key,!1);case"values":return At(i.value,!1)}return At([i.key,i.value],!1)},!0),Gc=function(e){this.entries=[],this.url=null,e!==void 0&&(Nc(e)?this.parseObject(e):this.parseQuery(typeof e=="string"?Rt(e,0)==="?"?Mc(e,1):e:K(e)))};Gc.prototype={type:Ze,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t=this.entries,r=Rg(e),n,i,s,o,u,f,p;if(r)for(n=Ec(e,r),i=n.next;!(s=St(i,n)).done;){if(o=Ec(Ag(s.value)),u=o.next,(f=St(u,o)).done||(p=St(u,o)).done||!St(u,o).done)throw new Lg("Expected sequence with length 2");Se(t,{key:K(f.value),value:K(p.value)})}else for(var l in e)Eg(e,l)&&Se(t,{key:l,value:K(e[l])})},parseQuery:function(e){if(e)for(var t=this.entries,r=Rc(e,"&"),n=0,i,s;n<r.length;)i=r[n++],i.length&&(s=Rc(i,"="),Se(t,{key:Pc(Ng(s)),value:Pc(Ac(s,"="))}))},serialize:function(){for(var e=this.entries,t=[],r=0,n;r<e.length;)n=e[r++],Se(t,Cc(n.key)+"="+Cc(n.value));return Ac(t,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var Pt=function(){Dc(this,Xe);var t=arguments.length>0?arguments[0]:void 0,r=jc(this,new Gc(t));Lr||(this.size=r.entries.length)},Xe=Pt.prototype;wg(Xe,{append:function(t,r){var n=X(this);Qe(arguments.length,2),Se(n.entries,{key:K(t),value:K(r)}),Lr||this.length++,n.updateURL()},delete:function(e){for(var t=X(this),r=Qe(arguments.length,1),n=t.entries,i=K(e),s=r<2?void 0:arguments[1],o=s===void 0?s:K(s),u=0;u<n.length;){var f=n[u];if(f.key===i&&(o===void 0||f.value===o)){if(Tc(n,u,1),o!==void 0)break}else u++}Lr||(this.size=n.length),t.updateURL()},get:function(t){var r=X(this).entries;Qe(arguments.length,1);for(var n=K(t),i=0;i<r.length;i++)if(r[i].key===n)return r[i].value;return null},getAll:function(t){var r=X(this).entries;Qe(arguments.length,1);for(var n=K(t),i=[],s=0;s<r.length;s++)r[s].key===n&&Se(i,r[s].value);return i},has:function(t){for(var r=X(this).entries,n=Qe(arguments.length,1),i=K(t),s=n<2?void 0:arguments[1],o=s===void 0?s:K(s),u=0;u<r.length;){var f=r[u++];if(f.key===i&&(o===void 0||f.value===o))return!0}return!1},set:function(t,r){var n=X(this);Qe(arguments.length,1);for(var i=n.entries,s=!1,o=K(t),u=K(r),f=0,p;f<i.length;f++)p=i[f],p.key===o&&(s?Tc(i,f--,1):(s=!0,p.value=u));s||Se(i,{key:o,value:u}),Lr||(this.size=i.length),n.updateURL()},sort:function(){var t=X(this);Pg(t.entries,function(r,n){return r.key>n.key?1:-1}),t.updateURL()},forEach:function(t){for(var r=X(this).entries,n=_g(t,arguments.length>1?arguments[1]:void 0),i=0,s;i<r.length;)s=r[i++],n(s.value,s.key,this)},keys:function(){return new Fi(this,"keys")},values:function(){return new Fi(this,"values")},entries:function(){return new Fi(this,"entries")}},{enumerable:!0});kc(Xe,Cg,Xe.entries,{name:"entries"});kc(Xe,"toString",function(){return X(this).serialize()},{enumerable:!0});Lr&&yg(Xe,"size",{get:function(){return X(this).entries.length},configurable:!0,enumerable:!0});bg(Pt,Ze);Di({global:!0,constructor:!0,forced:!Fc},{URLSearchParams:Pt});!Fc&&qi(Ur)&&(qc=le(Sc.has),Lc=le(Sc.set),ki=function(e){if(Nc(e)){var t=e.body,r;if(Sg(t)===Ze)return r=e.headers?new Ur(e.headers):new Ur,qc(r,"content-type")||Lc(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),Tg(e,{body:Ic(0,K(t)),headers:Ic(0,r)})}return e},qi(_c)&&Di({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return _c(t,arguments.length>1?ki(arguments[1]):{})}}),qi(Ot)&&(Tt=function(t){return Dc(this,Li),new Ot(t,arguments.length>1?ki(arguments[1]):{})},Li.constructor=Tt,Tt.prototype=Li,Di({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Tt})));var qc,Lc,ki,Tt;Vc.exports={URLSearchParams:Pt,getState:X}});var $c=h(()=>{"use strict";ji()});var zc=h(()=>{});var Wc=h(()=>{});var Kc=h(()=>{});var Hi=h((Mw,Jc)=>{"use strict";$c();zc();Wc();Kc();var Wg=wr();Jc.exports=Wg.URLSearchParams});var Gi=h((Gw,Xc)=>{"use strict";var Mi=H(),Kg=pt(),Jg=De(),Yg=vr(),Qg=Mi("".charAt),Yc=Mi("".charCodeAt),Xg=Mi("".slice),Qc=function(e){return function(t,r){var n=Jg(Yg(t)),i=Kg(r),s=n.length,o,u;return i<0||i>=s?e?"":void 0:(o=Yc(n,i),o<55296||o>56319||i+1===s||(u=Yc(n,i+1))<56320||u>57343?e?Qg(n,i):o:e?Xg(n,i,i+2):(o-55296<<10)+(u-56320)+65536)}};Xc.exports={codeAt:Qc(!1),charAt:Qc(!0)}});var tf=h(()=>{"use strict";var Zg=Gi().charAt,em=De(),ef=Sr(),rm=_i(),Zc=It(),rf="String Iterator",tm=ef.set,nm=ef.getterFor(rf);rm(String,"String",function(e){tm(this,{type:rf,string:em(e),index:0})},function(){var t=nm(this),r=t.string,n=t.index,i;return n>=r.length?Zc(void 0,!0):(i=Zg(r,n),t.index+=i.length,Zc(i,!1))})});var sf=h(nf=>{"use strict";nf.f=Object.getOwnPropertySymbols});var cf=h((Ww,uf)=>{"use strict";var of=W(),im=H(),sm=ve(),om=Q(),Vi=hi(),am=sf(),um=si(),cm=Er(),fm=On(),er=Object.assign,af=Object.defineProperty,lm=im([].concat);uf.exports=!er||om(function(){if(of&&er({b:1},er(af({},"a",{enumerable:!0,get:function(){af(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var e={},t={},r=Symbol("assign detection"),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(i){t[i]=i}),er({},e)[r]!==7||Vi(er({},t)).join("")!==n})?function(t,r){for(var n=cm(t),i=arguments.length,s=1,o=am.f,u=um.f;i>s;)for(var f=fm(arguments[s++]),p=o?lm(Vi(f),o(f)):Vi(f),l=p.length,a=0,c;l>a;)c=p[a++],(!of||sm(u,f,c))&&(n[c]=f[c]);return n}:er});var hf=h((Kw,lf)=>{"use strict";var hm=ve(),ff=_e(),dm=ut();lf.exports=function(e,t,r){var n,i;ff(e);try{if(n=dm(e,"return"),!n){if(t==="throw")throw r;return r}n=hm(n,e)}catch(s){i=!0,n=s}if(t==="throw")throw r;if(i)throw n;return ff(n),r}});var pf=h((Jw,df)=>{"use strict";var pm=_e(),xm=hf();df.exports=function(e,t,r,n){try{return n?t(pm(r)[0],r[1]):t(r)}catch(i){xm(e,"throw",i)}}});var gf=h((Yw,xf)=>{"use strict";var gm=ce(),mm=qe(),vm=gm("iterator"),ym=Array.prototype;xf.exports=function(e){return e!==void 0&&(mm.Array===e||ym[vm]===e)}});var vf=h((Qw,mf)=>{"use strict";var wm=H(),bm=$(),$i=Ir(),Im=wm(Function.toString);bm($i.inspectSource)||($i.inspectSource=function(e){return Im(e)});mf.exports=$i.inspectSource});var _f=h((Xw,Ef)=>{"use strict";var Em=H(),_m=Q(),yf=$(),Sm=Je(),Am=Le(),Tm=vf(),wf=function(){},bf=Am("Reflect","construct"),zi=/^\s*(?:class|function)\b/,Rm=Em(zi.exec),Om=!zi.test(wf),Fr=function(t){if(!yf(t))return!1;try{return bf(wf,[],t),!0}catch{return!1}},If=function(t){if(!yf(t))return!1;switch(Sm(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Om||!!Rm(zi,Tm(t))}catch{return!0}};If.sham=!0;Ef.exports=!bf||_m(function(){var e;return Fr(Fr.call)||!Fr(Object)||!Fr(function(){e=!0})||e})?If:Fr});var Af=h((Zw,Sf)=>{"use strict";var Pm=W(),Cm=Ue(),qm=Ve();Sf.exports=function(e,t,r){Pm?Cm.f(e,t,qm(0,r)):e[t]=r}});var Pf=h((eb,Of)=>{"use strict";var Lm=Tr(),Um=ve(),Fm=Er(),km=pf(),Dm=gf(),Nm=_f(),Bm=ci(),Tf=Af(),jm=Oi(),Hm=_t(),Rf=Array;Of.exports=function(t){var r=Fm(t),n=Nm(this),i=arguments.length,s=i>1?arguments[1]:void 0,o=s!==void 0;o&&(s=Lm(s,i>2?arguments[2]:void 0));var u=Hm(r),f=0,p,l,a,c,x,g;if(u&&!(this===Rf&&Dm(u)))for(l=n?new this:[],c=jm(r,u),x=c.next;!(a=Um(x,c)).done;f++)g=o?km(c,s,[a.value,f],!0):a.value,Tf(l,f,g);else for(p=Bm(r),l=n?new this(p):Rf(p);p>f;f++)g=o?s(r[f],f):r[f],Tf(l,f,g);return l.length=f,l}});var Bf=h((rb,Nf)=>{"use strict";var Ne=H(),Wi=2147483647,kr=36,Ff=1,Yi=26,Mm=38,Gm=700,Vm=72,$m=128,zm="-",Wm=/[^\0-\u007E]/,kf=/[.\u3002\uFF0E\uFF61]/g,Cf="Overflow: input needs wider integers to process",Ki=kr-Ff,qf=RangeError,Km=Ne(kf.exec),rr=Math.floor,Ji=String.fromCharCode,Lf=Ne("".charCodeAt),Df=Ne([].join),Ae=Ne([].push),Jm=Ne("".replace),Ym=Ne("".split),Qm=Ne("".toLowerCase),Xm=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=Lf(e,r++);if(i>=55296&&i<=56319&&r<n){var s=Lf(e,r++);(s&64512)===56320?Ae(t,((i&1023)<<10)+(s&1023)+65536):(Ae(t,i),r--)}else Ae(t,i)}return t},Uf=function(e){return e+22+75*(e<26)},Zm=function(e,t,r){var n=0;for(e=r?rr(e/Gm):e>>1,e+=rr(e/t);e>Ki*Yi>>1;)e=rr(e/Ki),n+=kr;return rr(n+(Ki+1)*e/(e+Mm))},ev=function(e){var t=[];e=Xm(e);var r=e.length,n=$m,i=0,s=Vm,o,u;for(o=0;o<e.length;o++)u=e[o],u<128&&Ae(t,Ji(u));var f=t.length,p=f;for(f&&Ae(t,zm);p<r;){var l=Wi;for(o=0;o<e.length;o++)u=e[o],u>=n&&u<l&&(l=u);var a=p+1;if(l-n>rr((Wi-i)/a))throw new qf(Cf);for(i+=(l-n)*a,n=l,o=0;o<e.length;o++){if(u=e[o],u<n&&++i>Wi)throw new qf(Cf);if(u===n){for(var c=i,x=kr;;){var g=x<=s?Ff:x>=s+Yi?Yi:x-s;if(c<g)break;var S=c-g,E=kr-g;Ae(t,Ji(Uf(g+S%E))),c=rr(S/E),x+=kr}Ae(t,Ji(Uf(c))),s=Zm(i,a,p===f),i=0,p++}}i++,n++}return Df(t,"")};Nf.exports=function(e){var t=[],r=Ym(Jm(Qm(e),kf,"."),"."),n,i;for(n=0;n<r.length;n++)i=r[n],Ae(t,Km(Wm,i)?"xn--"+ev(i):i);return Df(t,".")}});var nl=h(()=>{"use strict";tf();var rv=ke(),ds=W(),tv=Cr(),ps=V(),jf=Tr(),ne=H(),Ft=Ke(),Z=Ti(),nv=Ri(),fs=ue(),xs=cf(),tr=Pf(),he=Pi(),iv=Gi().codeAt,sv=Bf(),Ie=De(),ov=Ye(),av=qr(),Qf=ji(),Xf=Sr(),uv=Xf.set,kt=Xf.getterFor("URL"),cv=Qf.URLSearchParams,fv=Qf.getState,Dr=ps.URL,ls=ps.TypeError,Dt=ps.parseInt,lv=Math.floor,Hf=Math.pow,te=ne("".charAt),de=ne(/./.exec),Br=ne([].join),hv=ne(1.1.toString),dv=ne([].pop),ir=ne([].push),Qi=ne("".replace),pv=ne([].shift),xv=ne("".split),Hr=ne("".slice),Nt=ne("".toLowerCase),gv=ne([].unshift),mv="Invalid authority",Xi="Invalid scheme",Be="Invalid host",Mf="Invalid port",Zf=/[a-z]/i,vv=/[\d+-.a-z]/i,hs=/\d/,yv=/^0x/i,wv=/^[0-7]+$/,bv=/^\d+$/,el=/^[\da-f]+$/i,Iv=/[\0\t\n\r #%/:<>?@[\\\]^|]/,Ev=/[\0\t\n\r #/:<>?@[\\\]^|]/,_v=/^[\u0000-\u0020]+/,Sv=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,Av=/[\t\n\r]/g,ee,Tv=function(e){var t=xv(e,"."),r,n,i,s,o,u,f;if(t.length&&t[t.length-1]===""&&t.length--,r=t.length,r>4)return e;for(n=[],i=0;i<r;i++){if(s=t[i],s==="")return e;if(o=10,s.length>1&&te(s,0)==="0"&&(o=de(yv,s)?16:8,s=Hr(s,o===8?1:2)),s==="")u=0;else{if(!de(o===10?bv:o===8?wv:el,s))return e;u=Dt(s,o)}ir(n,u)}for(i=0;i<r;i++)if(u=n[i],i===r-1){if(u>=Hf(256,5-r))return null}else if(u>255)return null;for(f=dv(n),i=0;i<n.length;i++)f+=n[i]*Hf(256,3-i);return f},Rv=function(e){var t=[0,0,0,0,0,0,0,0],r=0,n=null,i=0,s,o,u,f,p,l,a,c=function(){return te(e,i)};if(c()===":"){if(te(e,1)!==":")return;i+=2,r++,n=r}for(;c();){if(r===8)return;if(c()===":"){if(n!==null)return;i++,r++,n=r;continue}for(s=o=0;o<4&&de(el,c());)s=s*16+Dt(c(),16),i++,o++;if(c()==="."){if(o===0||(i-=o,r>6))return;for(u=0;c();){if(f=null,u>0)if(c()==="."&&u<4)i++;else return;if(!de(hs,c()))return;for(;de(hs,c());){if(p=Dt(c(),10),f===null)f=p;else{if(f===0)return;f=f*10+p}if(f>255)return;i++}t[r]=t[r]*256+f,u++,(u===2||u===4)&&r++}if(u!==4)return;break}else if(c()===":"){if(i++,!c())return}else if(c())return;t[r++]=s}if(n!==null)for(l=r-n,r=7;r!==0&&l>0;)a=t[r],t[r--]=t[n+l-1],t[n+--l]=a;else if(r!==8)return;return t},Ov=function(e){for(var t=null,r=1,n=null,i=0,s=0;s<8;s++)e[s]!==0?(i>r&&(t=n,r=i),n=null,i=0):(n===null&&(n=s),++i);return i>r?n:t},Nr=function(e){var t,r,n,i;if(typeof e=="number"){for(t=[],r=0;r<4;r++)gv(t,e%256),e=lv(e/256);return Br(t,".")}if(typeof e=="object"){for(t="",n=Ov(e),r=0;r<8;r++)i&&e[r]===0||(i&&(i=!1),n===r?(t+=r?":":"::",i=!0):(t+=hv(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},Ut={},rl=xs({},Ut,{" ":1,'"':1,"<":1,">":1,"`":1}),tl=xs({},rl,{"#":1,"?":1,"{":1,"}":1}),Zi=xs({},tl,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Te=function(e,t){var r=iv(e,0);return r>32&&r<127&&!fs(t,e)?e:encodeURIComponent(e)},Ct={ftp:21,file:null,http:80,https:443,ws:80,wss:443},jr=function(e,t){var r;return e.length===2&&de(Zf,te(e,0))&&((r=te(e,1))===":"||!t&&r==="|")},Gf=function(e){var t;return e.length>1&&jr(Hr(e,0,2))&&(e.length===2||(t=te(e,2))==="/"||t==="\\"||t==="?"||t==="#")},Pv=function(e){return e==="."||Nt(e)==="%2e"},Cv=function(e){return e=Nt(e),e===".."||e==="%2e."||e===".%2e"||e==="%2e%2e"},es={},Vf={},rs={},$f={},zf={},ts={},Wf={},Kf={},qt={},Lt={},ns={},is={},ss={},os={},Jf={},as={},nr={},ye={},Yf={},je={},be={},gs=function(e,t,r){var n=Ie(e),i,s,o;if(t){if(s=this.parse(n),s)throw new ls(s);this.searchParams=null}else{if(r!==void 0&&(i=new gs(r,!0)),s=this.parse(n,null,i),s)throw new ls(s);o=fv(new cv),o.bindURL(this),this.searchParams=o}};gs.prototype={type:"URL",parse:function(e,t,r){var n=this,i=t||es,s=0,o="",u=!1,f=!1,p=!1,l,a,c,x;for(e=Ie(e),t||(n.scheme="",n.username="",n.password="",n.host=null,n.port=null,n.path=[],n.query=null,n.fragment=null,n.cannotBeABaseURL=!1,e=Qi(e,_v,""),e=Qi(e,Sv,"$1")),e=Qi(e,Av,""),l=tr(e);s<=l.length;){switch(a=l[s],i){case es:if(a&&de(Zf,a))o+=Nt(a),i=Vf;else{if(t)return Xi;i=rs;continue}break;case Vf:if(a&&(de(vv,a)||a==="+"||a==="-"||a==="."))o+=Nt(a);else if(a===":"){if(t&&(n.isSpecial()!==fs(Ct,o)||o==="file"&&(n.includesCredentials()||n.port!==null)||n.scheme==="file"&&!n.host))return;if(n.scheme=o,t){n.isSpecial()&&Ct[n.scheme]===n.port&&(n.port=null);return}o="",n.scheme==="file"?i=os:n.isSpecial()&&r&&r.scheme===n.scheme?i=$f:n.isSpecial()?i=Kf:l[s+1]==="/"?(i=zf,s++):(n.cannotBeABaseURL=!0,ir(n.path,""),i=Yf)}else{if(t)return Xi;o="",i=rs,s=0;continue}break;case rs:if(!r||r.cannotBeABaseURL&&a!=="#")return Xi;if(r.cannotBeABaseURL&&a==="#"){n.scheme=r.scheme,n.path=he(r.path),n.query=r.query,n.fragment="",n.cannotBeABaseURL=!0,i=be;break}i=r.scheme==="file"?os:ts;continue;case $f:if(a==="/"&&l[s+1]==="/")i=qt,s++;else{i=ts;continue}break;case zf:if(a==="/"){i=Lt;break}else{i=ye;continue}case ts:if(n.scheme=r.scheme,a===ee)n.username=r.username,n.password=r.password,n.host=r.host,n.port=r.port,n.path=he(r.path),n.query=r.query;else if(a==="/"||a==="\\"&&n.isSpecial())i=Wf;else if(a==="?")n.username=r.username,n.password=r.password,n.host=r.host,n.port=r.port,n.path=he(r.path),n.query="",i=je;else if(a==="#")n.username=r.username,n.password=r.password,n.host=r.host,n.port=r.port,n.path=he(r.path),n.query=r.query,n.fragment="",i=be;else{n.username=r.username,n.password=r.password,n.host=r.host,n.port=r.port,n.path=he(r.path),n.path.length--,i=ye;continue}break;case Wf:if(n.isSpecial()&&(a==="/"||a==="\\"))i=qt;else if(a==="/")i=Lt;else{n.username=r.username,n.password=r.password,n.host=r.host,n.port=r.port,i=ye;continue}break;case Kf:if(i=qt,a!=="/"||te(o,s+1)!=="/")continue;s++;break;case qt:if(a!=="/"&&a!=="\\"){i=Lt;continue}break;case Lt:if(a==="@"){u&&(o="%40"+o),u=!0,c=tr(o);for(var g=0;g<c.length;g++){var S=c[g];if(S===":"&&!p){p=!0;continue}var E=Te(S,Zi);p?n.password+=E:n.username+=E}o=""}else if(a===ee||a==="/"||a==="?"||a==="#"||a==="\\"&&n.isSpecial()){if(u&&o==="")return mv;s-=tr(o).length+1,o="",i=ns}else o+=a;break;case ns:case is:if(t&&n.scheme==="file"){i=as;continue}else if(a===":"&&!f){if(o==="")return Be;if(x=n.parseHost(o),x)return x;if(o="",i=ss,t===is)return}else if(a===ee||a==="/"||a==="?"||a==="#"||a==="\\"&&n.isSpecial()){if(n.isSpecial()&&o==="")return Be;if(t&&o===""&&(n.includesCredentials()||n.port!==null))return;if(x=n.parseHost(o),x)return x;if(o="",i=nr,t)return;continue}else a==="["?f=!0:a==="]"&&(f=!1),o+=a;break;case ss:if(de(hs,a))o+=a;else if(a===ee||a==="/"||a==="?"||a==="#"||a==="\\"&&n.isSpecial()||t){if(o!==""){var O=Dt(o,10);if(O>65535)return Mf;n.port=n.isSpecial()&&O===Ct[n.scheme]?null:O,o=""}if(t)return;i=nr;continue}else return Mf;break;case os:if(n.scheme="file",a==="/"||a==="\\")i=Jf;else if(r&&r.scheme==="file")switch(a){case ee:n.host=r.host,n.path=he(r.path),n.query=r.query;break;case"?":n.host=r.host,n.path=he(r.path),n.query="",i=je;break;case"#":n.host=r.host,n.path=he(r.path),n.query=r.query,n.fragment="",i=be;break;default:Gf(Br(he(l,s),""))||(n.host=r.host,n.path=he(r.path),n.shortenPath()),i=ye;continue}else{i=ye;continue}break;case Jf:if(a==="/"||a==="\\"){i=as;break}r&&r.scheme==="file"&&!Gf(Br(he(l,s),""))&&(jr(r.path[0],!0)?ir(n.path,r.path[0]):n.host=r.host),i=ye;continue;case as:if(a===ee||a==="/"||a==="\\"||a==="?"||a==="#"){if(!t&&jr(o))i=ye;else if(o===""){if(n.host="",t)return;i=nr}else{if(x=n.parseHost(o),x)return x;if(n.host==="localhost"&&(n.host=""),t)return;o="",i=nr}continue}else o+=a;break;case nr:if(n.isSpecial()){if(i=ye,a!=="/"&&a!=="\\")continue}else if(!t&&a==="?")n.query="",i=je;else if(!t&&a==="#")n.fragment="",i=be;else if(a!==ee&&(i=ye,a!=="/"))continue;break;case ye:if(a===ee||a==="/"||a==="\\"&&n.isSpecial()||!t&&(a==="?"||a==="#")){if(Cv(o)?(n.shortenPath(),a!=="/"&&!(a==="\\"&&n.isSpecial())&&ir(n.path,"")):Pv(o)?a!=="/"&&!(a==="\\"&&n.isSpecial())&&ir(n.path,""):(n.scheme==="file"&&!n.path.length&&jr(o)&&(n.host&&(n.host=""),o=te(o,0)+":"),ir(n.path,o)),o="",n.scheme==="file"&&(a===ee||a==="?"||a==="#"))for(;n.path.length>1&&n.path[0]==="";)pv(n.path);a==="?"?(n.query="",i=je):a==="#"&&(n.fragment="",i=be)}else o+=Te(a,tl);break;case Yf:a==="?"?(n.query="",i=je):a==="#"?(n.fragment="",i=be):a!==ee&&(n.path[0]+=Te(a,Ut));break;case je:!t&&a==="#"?(n.fragment="",i=be):a!==ee&&(a==="'"&&n.isSpecial()?n.query+="%27":a==="#"?n.query+="%23":n.query+=Te(a,Ut));break;case be:a!==ee&&(n.fragment+=Te(a,rl));break}s++}},parseHost:function(e){var t,r,n;if(te(e,0)==="["){if(te(e,e.length-1)!=="]"||(t=Rv(Hr(e,1,-1)),!t))return Be;this.host=t}else if(this.isSpecial()){if(e=sv(e),de(Iv,e)||(t=Tv(e),t===null))return Be;this.host=t}else{if(de(Ev,e))return Be;for(t="",r=tr(e),n=0;n<r.length;n++)t+=Te(r[n],Ut);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||this.scheme==="file"},includesCredentials:function(){return this.username!==""||this.password!==""},isSpecial:function(){return fs(Ct,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;t&&(this.scheme!=="file"||t!==1||!jr(e[0],!0))&&e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,n=e.password,i=e.host,s=e.port,o=e.path,u=e.query,f=e.fragment,p=t+":";return i!==null?(p+="//",e.includesCredentials()&&(p+=r+(n?":"+n:"")+"@"),p+=Nr(i),s!==null&&(p+=":"+s)):t==="file"&&(p+="//"),p+=e.cannotBeABaseURL?o[0]:o.length?"/"+Br(o,"/"):"",u!==null&&(p+="?"+u),f!==null&&(p+="#"+f),p},setHref:function(e){var t=this.parse(e);if(t)throw new ls(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if(e==="blob")try{return new sr(e.path[0]).origin}catch{return"null"}return e==="file"||!this.isSpecial()?"null":e+"://"+Nr(this.host)+(t!==null?":"+t:"")},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(Ie(e)+":",es)},getUsername:function(){return this.username},setUsername:function(e){var t=tr(Ie(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=Te(t[r],Zi)}},getPassword:function(){return this.password},setPassword:function(e){var t=tr(Ie(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=Te(t[r],Zi)}},getHost:function(){var e=this.host,t=this.port;return e===null?"":t===null?Nr(e):Nr(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,ns)},getHostname:function(){var e=this.host;return e===null?"":Nr(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,is)},getPort:function(){var e=this.port;return e===null?"":Ie(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=Ie(e),e===""?this.port=null:this.parse(e,ss))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+Br(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,nr))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=Ie(e),e===""?this.query=null:(te(e,0)==="?"&&(e=Hr(e,1)),this.query="",this.parse(e,je)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){if(e=Ie(e),e===""){this.fragment=null;return}te(e,0)==="#"&&(e=Hr(e,1)),this.fragment="",this.parse(e,be)},update:function(){this.query=this.searchParams.serialize()||null}};var sr=function(t){var r=nv(this,J),n=av(arguments.length,1)>1?arguments[1]:void 0,i=uv(r,new gs(t,!1,n));ds||(r.href=i.serialize(),r.origin=i.getOrigin(),r.protocol=i.getProtocol(),r.username=i.getUsername(),r.password=i.getPassword(),r.host=i.getHost(),r.hostname=i.getHostname(),r.port=i.getPort(),r.pathname=i.getPathname(),r.search=i.getSearch(),r.searchParams=i.getSearchParams(),r.hash=i.getHash())},J=sr.prototype,re=function(e,t){return{get:function(){return kt(this)[e]()},set:t&&function(r){return kt(this)[t](r)},configurable:!0,enumerable:!0}};ds&&(Z(J,"href",re("serialize","setHref")),Z(J,"origin",re("getOrigin")),Z(J,"protocol",re("getProtocol","setProtocol")),Z(J,"username",re("getUsername","setUsername")),Z(J,"password",re("getPassword","setPassword")),Z(J,"host",re("getHost","setHost")),Z(J,"hostname",re("getHostname","setHostname")),Z(J,"port",re("getPort","setPort")),Z(J,"pathname",re("getPathname","setPathname")),Z(J,"search",re("getSearch","setSearch")),Z(J,"searchParams",re("getSearchParams")),Z(J,"hash",re("getHash","setHash")));Ft(J,"toJSON",function(){return kt(this).serialize()},{enumerable:!0});Ft(J,"toString",function(){return kt(this).serialize()},{enumerable:!0});Dr&&(us=Dr.createObjectURL,cs=Dr.revokeObjectURL,us&&Ft(sr,"createObjectURL",jf(us,Dr)),cs&&Ft(sr,"revokeObjectURL",jf(cs,Dr)));var us,cs;ov(sr,"URL");rv({global:!0,constructor:!0,forced:!tv,sham:!ds},{URL:sr})});var il=h(()=>{"use strict";nl()});var al=h(()=>{"use strict";var qv=ke(),Lv=Le(),ol=Q(),Uv=qr(),sl=De(),Fv=Cr(),ms=Lv("URL"),kv=Fv&&ol(function(){ms.canParse()}),Dv=ol(function(){return ms.canParse.length!==1});qv({target:"URL",stat:!0,forced:!kv||Dv},{canParse:function(t){var r=Uv(arguments.length,1),n=sl(t),i=r<2||arguments[1]===void 0?void 0:sl(arguments[1]);try{return!!new ms(n,i)}catch{return!1}}})});var cl=h(()=>{"use strict";var Nv=ke(),Bv=Le(),jv=qr(),ul=De(),Hv=Cr(),Mv=Bv("URL");Nv({target:"URL",stat:!0,forced:!Hv},{parse:function(t){var r=jv(arguments.length,1),n=ul(t),i=r<2||arguments[1]===void 0?void 0:ul(arguments[1]);try{return new Mv(n,i)}catch{return null}}})});var fl=h(()=>{});var hl=h((hb,ll)=>{"use strict";Hi();il();al();cl();fl();var Gv=wr();ll.exports=Gv.URL});var pl=h((db,dl)=>{"use strict";var Vv=hl();dl.exports=Vv});var gl=h((pb,xl)=>{"use strict";var $v=pl();xl.exports=$v});var vl=h((xb,ml)=>{"use strict";ml.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wl=h(()=>{"use strict";Ai();var zv=vl(),Wv=V(),Kv=Ye(),yl=qe();for(Bt in zv)Kv(Wv[Bt],Bt),yl[Bt]=yl.Array;var Bt});var Il=h((vb,bl)=>{"use strict";var Jv=Hi();wl();bl.exports=Jv});var _l=h((yb,El)=>{"use strict";var Yv=Il();El.exports=Yv});var Ml=h((Jr,Kr)=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});var Nl=new WeakMap,_s=new WeakMap;function U(e){let t=Nl.get(e);return console.assert(t!=null,"'this' is expected an Event object, but got",e),t}function Ll(e){if(e.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",e.passiveListener);return}e.event.cancelable&&(e.canceled=!0,typeof e.event.preventDefault=="function"&&e.event.preventDefault())}function lr(e,t){Nl.set(this,{eventTarget:e,event:t,eventPhase:2,currentTarget:e,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:t.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});let r=Object.keys(t);for(let n=0;n<r.length;++n){let i=r[n];i in this||Object.defineProperty(this,i,Bl(i))}}lr.prototype={get type(){return U(this).event.type},get target(){return U(this).eventTarget},get currentTarget(){return U(this).currentTarget},composedPath(){let e=U(this).currentTarget;return e==null?[]:[e]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return U(this).eventPhase},stopPropagation(){let e=U(this);e.stopped=!0,typeof e.event.stopPropagation=="function"&&e.event.stopPropagation()},stopImmediatePropagation(){let e=U(this);e.stopped=!0,e.immediateStopped=!0,typeof e.event.stopImmediatePropagation=="function"&&e.event.stopImmediatePropagation()},get bubbles(){return!!U(this).event.bubbles},get cancelable(){return!!U(this).event.cancelable},preventDefault(){Ll(U(this))},get defaultPrevented(){return U(this).canceled},get composed(){return!!U(this).event.composed},get timeStamp(){return U(this).timeStamp},get srcElement(){return U(this).eventTarget},get cancelBubble(){return U(this).stopped},set cancelBubble(e){if(!e)return;let t=U(this);t.stopped=!0,typeof t.event.cancelBubble=="boolean"&&(t.event.cancelBubble=!0)},get returnValue(){return!U(this).canceled},set returnValue(e){e||Ll(U(this))},initEvent(){}};Object.defineProperty(lr.prototype,"constructor",{value:lr,configurable:!0,writable:!0});typeof window<"u"&&typeof window.Event<"u"&&(Object.setPrototypeOf(lr.prototype,window.Event.prototype),_s.set(window.Event.prototype,lr));function Bl(e){return{get(){return U(this).event[e]},set(t){U(this).event[e]=t},configurable:!0,enumerable:!0}}function ey(e){return{value(){let t=U(this).event;return t[e].apply(t,arguments)},configurable:!0,enumerable:!0}}function ry(e,t){let r=Object.keys(t);if(r.length===0)return e;function n(i,s){e.call(this,i,s)}n.prototype=Object.create(e.prototype,{constructor:{value:n,configurable:!0,writable:!0}});for(let i=0;i<r.length;++i){let s=r[i];if(!(s in e.prototype)){let u=typeof Object.getOwnPropertyDescriptor(t,s).value=="function";Object.defineProperty(n.prototype,s,u?ey(s):Bl(s))}}return n}function jl(e){if(e==null||e===Object.prototype)return lr;let t=_s.get(e);return t==null&&(t=ry(jl(Object.getPrototypeOf(e)),e),_s.set(e,t)),t}function ty(e,t){let r=jl(Object.getPrototypeOf(t));return new r(e,t)}function ny(e){return U(e).immediateStopped}function iy(e,t){U(e).eventPhase=t}function sy(e,t){U(e).currentTarget=t}function Ul(e,t){U(e).passiveListener=t}var Hl=new WeakMap,Fl=1,kl=2,un=3;function cn(e){return e!==null&&typeof e=="object"}function Wr(e){let t=Hl.get(e);if(t==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return t}function oy(e){return{get(){let r=Wr(this).get(e);for(;r!=null;){if(r.listenerType===un)return r.listener;r=r.next}return null},set(t){typeof t!="function"&&!cn(t)&&(t=null);let r=Wr(this),n=null,i=r.get(e);for(;i!=null;)i.listenerType===un?n!==null?n.next=i.next:i.next!==null?r.set(e,i.next):r.delete(e):n=i,i=i.next;if(t!==null){let s={listener:t,listenerType:un,passive:!1,once:!1,next:null};n===null?r.set(e,s):n.next=s}},configurable:!0,enumerable:!0}}function Ss(e,t){Object.defineProperty(e,`on${t}`,oy(t))}function Dl(e){function t(){xe.call(this)}t.prototype=Object.create(xe.prototype,{constructor:{value:t,configurable:!0,writable:!0}});for(let r=0;r<e.length;++r)Ss(t.prototype,e[r]);return t}function xe(){if(this instanceof xe){Hl.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return Dl(arguments[0]);if(arguments.length>0){let e=new Array(arguments.length);for(let t=0;t<arguments.length;++t)e[t]=arguments[t];return Dl(e)}throw new TypeError("Cannot call a class as a function")}xe.prototype={addEventListener(e,t,r){if(t==null)return;if(typeof t!="function"&&!cn(t))throw new TypeError("'listener' should be a function or an object.");let n=Wr(this),i=cn(r),o=(i?!!r.capture:!!r)?Fl:kl,u={listener:t,listenerType:o,passive:i&&!!r.passive,once:i&&!!r.once,next:null},f=n.get(e);if(f===void 0){n.set(e,u);return}let p=null;for(;f!=null;){if(f.listener===t&&f.listenerType===o)return;p=f,f=f.next}p.next=u},removeEventListener(e,t,r){if(t==null)return;let n=Wr(this),s=(cn(r)?!!r.capture:!!r)?Fl:kl,o=null,u=n.get(e);for(;u!=null;){if(u.listener===t&&u.listenerType===s){o!==null?o.next=u.next:u.next!==null?n.set(e,u.next):n.delete(e);return}o=u,u=u.next}},dispatchEvent(e){if(e==null||typeof e.type!="string")throw new TypeError('"event.type" should be a string.');let t=Wr(this),r=e.type,n=t.get(r);if(n==null)return!0;let i=ty(this,e),s=null;for(;n!=null;){if(n.once?s!==null?s.next=n.next:n.next!==null?t.set(r,n.next):t.delete(r):s=n,Ul(i,n.passive?n.listener:null),typeof n.listener=="function")try{n.listener.call(this,i)}catch(o){typeof console<"u"&&typeof console.error=="function"&&console.error(o)}else n.listenerType!==un&&typeof n.listener.handleEvent=="function"&&n.listener.handleEvent(i);if(ny(i))break;n=n.next}return Ul(i,null),iy(i,0),sy(i,null),!i.defaultPrevented}};Object.defineProperty(xe.prototype,"constructor",{value:xe,configurable:!0,writable:!0});typeof window<"u"&&typeof window.EventTarget<"u"&&Object.setPrototypeOf(xe.prototype,window.EventTarget.prototype);Jr.defineEventAttribute=Ss;Jr.EventTarget=xe;Jr.default=xe;Kr.exports=xe;Kr.exports.EventTarget=Kr.exports.default=xe;Kr.exports.defineEventAttribute=Ss});var My={};Lh(My,{createMiniWidget:()=>Th});async function Ws(e,t,{check:r=()=>{},fail:n=()=>{}}={}){let i=new Array(e.length),s=0,o;async function u(){for(;!o&&s<e.length;){let f=s++;try{r(),i[f]=await t(e[f],f),r()}catch(p){o||(o=p,n(p))}}}if(await Promise.allSettled([u(),u()]),o)throw o;return i}function Ks(e,{check:t=()=>{}}={}){let r=new Map,n=[],i=new Set,s=!1,o=!1,u,f=new Promise(c=>{u=c}),p={check(){if(t(),o)throw Error("Preview retired")},async wait(c){let x=await Promise.race([c,f]);return p.check(),x}};function l(){for(;!s&&i.size<2&&n.length;){let c=n.shift(),x=(async()=>{p.check();let g=await e(c.value,p);p.check(),c.success={value:g}})();i.add(x),x.then(()=>a(x),()=>a(x))}}function a(c){i.delete(c),l()}return{offer(c,x){if(s||r.has(c)||r.size>=8)return;let g={value:x};r.set(c,g),n.push(g),l()},successful:c=>o?void 0:r.get(c)?.success,retire(){s=!0,n.length=0,o=!0,u()},async close(){s=!0,n.length=0,await Promise.allSettled([...i])}}}var Ql=An(gl(),1),Xl=An(_l(),1);var jt="utf-8";function _(e,t=void 0){if(e)throw TypeError("Decoder error");return t||65533}function B(e){throw TypeError("The code point "+e+" could not be encoded.")}function Mr(e){let t=String(e).trim().toLowerCase();return t in vs?vs[t]:null}var ys=[{encodings:[{labels:["unicode-1-1-utf-8","utf-8","utf8"],name:"UTF-8"}],heading:"The Encoding"},{encodings:[{labels:["866","cp866","csibm866","ibm866"],name:"IBM866"},{labels:["csisolatin2","iso-8859-2","iso-ir-101","iso8859-2","iso88592","iso_8859-2","iso_8859-2:1987","l2","latin2"],name:"ISO-8859-2"},{labels:["csisolatin3","iso-8859-3","iso-ir-109","iso8859-3","iso88593","iso_8859-3","iso_8859-3:1988","l3","latin3"],name:"ISO-8859-3"},{labels:["csisolatin4","iso-8859-4","iso-ir-110","iso8859-4","iso88594","iso_8859-4","iso_8859-4:1988","l4","latin4"],name:"ISO-8859-4"},{labels:["csisolatincyrillic","cyrillic","iso-8859-5","iso-ir-144","iso8859-5","iso88595","iso_8859-5","iso_8859-5:1988"],name:"ISO-8859-5"},{labels:["arabic","asmo-708","csiso88596e","csiso88596i","csisolatinarabic","ecma-114","iso-8859-6","iso-8859-6-e","iso-8859-6-i","iso-ir-127","iso8859-6","iso88596","iso_8859-6","iso_8859-6:1987"],name:"ISO-8859-6"},{labels:["csisolatingreek","ecma-118","elot_928","greek","greek8","iso-8859-7","iso-ir-126","iso8859-7","iso88597","iso_8859-7","iso_8859-7:1987","sun_eu_greek"],name:"ISO-8859-7"},{labels:["csiso88598e","csisolatinhebrew","hebrew","iso-8859-8","iso-8859-8-e","iso-ir-138","iso8859-8","iso88598","iso_8859-8","iso_8859-8:1988","visual"],name:"ISO-8859-8"},{labels:["csiso88598i","iso-8859-8-i","logical"],name:"ISO-8859-8-I"},{labels:["csisolatin6","iso-8859-10","iso-ir-157","iso8859-10","iso885910","l6","latin6"],name:"ISO-8859-10"},{labels:["iso-8859-13","iso8859-13","iso885913"],name:"ISO-8859-13"},{labels:["iso-8859-14","iso8859-14","iso885914"],name:"ISO-8859-14"},{labels:["csisolatin9","iso-8859-15","iso8859-15","iso885915","iso_8859-15","l9"],name:"ISO-8859-15"},{labels:["iso-8859-16"],name:"ISO-8859-16"},{labels:["cskoi8r","koi","koi8","koi8-r","koi8_r"],name:"KOI8-R"},{labels:["koi8-ru","koi8-u"],name:"KOI8-U"},{labels:["csmacintosh","mac","macintosh","x-mac-roman"],name:"macintosh"},{labels:["dos-874","iso-8859-11","iso8859-11","iso885911","tis-620","windows-874"],name:"windows-874"},{labels:["cp1250","windows-1250","x-cp1250"],name:"windows-1250"},{labels:["cp1251","windows-1251","x-cp1251"],name:"windows-1251"},{labels:["ansi_x3.4-1968","cp1252","cp819","ibm819","iso-ir-100","windows-1252","x-cp1252"],name:"windows-1252"},{labels:["ascii","us-ascii","iso-8859-1","iso8859-1","iso88591","iso_8859-1","iso_8859-1:1987","l1","latin1","csisolatin1"],name:"iso-8859-1"},{labels:["cp1253","windows-1253","x-cp1253"],name:"windows-1253"},{labels:["cp1254","csisolatin5","iso-8859-9","iso-ir-148","iso8859-9","iso88599","iso_8859-9","iso_8859-9:1989","l5","latin5","windows-1254","x-cp1254"],name:"windows-1254"},{labels:["cp1255","windows-1255","x-cp1255"],name:"windows-1255"},{labels:["cp1256","windows-1256","x-cp1256"],name:"windows-1256"},{labels:["cp1257","windows-1257","x-cp1257"],name:"windows-1257"},{labels:["cp1258","windows-1258","x-cp1258"],name:"windows-1258"},{labels:["x-mac-cyrillic","x-mac-ukrainian"],name:"x-mac-cyrillic"}],heading:"Legacy single-byte encodings"},{encodings:[{labels:["chinese","csgb2312","csiso58gb231280","gb2312","gb_2312","gb_2312-80","gbk","iso-ir-58","x-gbk"],name:"GBK"},{labels:["gb18030"],name:"gb18030"}],heading:"Legacy multi-byte Chinese (simplified) encodings"},{encodings:[{labels:["big5","big5-hkscs","cn-big5","csbig5","x-x-big5"],name:"Big5"}],heading:"Legacy multi-byte Chinese (traditional) encodings"},{encodings:[{labels:["cseucpkdfmtjapanese","euc-jp","x-euc-jp"],name:"EUC-JP"},{labels:["csiso2022jp","iso-2022-jp"],name:"ISO-2022-JP"},{labels:["csshiftjis","ms932","ms_kanji","shift-jis","shift_jis","sjis","windows-31j","x-sjis"],name:"Shift_JIS"}],heading:"Legacy multi-byte Japanese encodings"},{encodings:[{labels:["cseuckr","csksc56011987","euc-kr","iso-ir-149","korean","ks_c_5601-1987","ks_c_5601-1989","ksc5601","ksc_5601","windows-949"],name:"EUC-KR"}],heading:"Legacy multi-byte Korean encodings"},{encodings:[{labels:["csiso2022kr","hz-gb-2312","iso-2022-cn","iso-2022-cn-ext","iso-2022-kr"],name:"replacement"},{labels:["utf-16be"],name:"UTF-16BE"},{labels:["utf-16","utf-16le"],name:"UTF-16LE"},{labels:["x-user-defined"],name:"x-user-defined"}],heading:"Legacy miscellaneous encodings"}],vs={};ys.forEach(e=>{e.encodings.forEach(t=>{t.labels.forEach(r=>{vs[r]=t})})});function ws(e){return Array.isArray(e)?e:[e]}function y(e,t,r){return t<=e&&e<=r}function Sl(e,t){return e.indexOf(t)!==-1}function or(e){if(e==null)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}function Al(e){let t=String(e),r=t.length,n=0,i=[];for(;n<r;){let s=t.charCodeAt(n);if(s<55296||s>57343)i.push(s);else if(56320<=s&&s<=57343)i.push(65533);else if(55296<=s&&s<=56319)if(n===r-1)i.push(65533);else{let o=t.charCodeAt(n+1);if(56320<=o&&o<=57343){let u=s&1023,f=o&1023;i.push(65536+(u<<10)+f),n+=1}else i.push(65533)}n+=1}return i}function Tl(e){let t="";for(let r=0;r<e.length;++r){let n=e[r];n<=65535?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode((n>>10)+55296,(n&1023)+56320))}return t}function Ht(){if(typeof global<"u")return global;if(typeof window<"u")return window;if(typeof self<"u")return self}var bs;function Qv(){if(typeof TextEncodingIndexes<"u")return TextEncodingIndexes.encodingIndexes;let e=Ht();return e?"TextEncodingIndexes"in e?global.TextEncodingIndexes.encodingIndexes:"encoding-indexes"in e?global.encodingIndexes:null:null}function Mt(){if(bs)return bs;let e=Qv();return e?(bs=e,e):null}function ie(e,t){return t&&t[e]||null}function pe(e,t){let r=t.indexOf(e);return r===-1?null:r}function q(e){let t=Mt();if(!t)throw Error("Indexes missing. Did you forget to include encoding-indexes.js first?");return t[e]}function Rl(e){if(e>39419&&e<189e3||e>1237575)return null;if(e===7457)return 59335;let t=0,r=0,n=q("gb18030-ranges");for(let i=0;i<n.length;++i){let s=ws(n[i]);if(s[0]<=e)t=s[0],r=s[1];else break}return r+e-t}function Ol(e){if(e===59335)return 7457;let t=0,r=0,n=q("gb18030-ranges");for(let i=0;i<n.length;++i){let s=n[i],o=ws(s);if(o[1]<=e)t=o[1],r=o[0];else break}return r+e-t}function Pl(e){return Is=Is||q("jis0208").map(function(r,n){return y(n,8272,8835)?null:r}),Is.indexOf(e)}var Is;function Cl(e){Es=Es||q("big5").map((r,n)=>n<5024?null:r);let t=Es;return e===9552||e===9566||e===9569||e===9578||e===21313||e===21317?t.lastIndexOf(e):pe(e,t)}var Es;function j(e){return 0<=e&&e<=127}var D=j,w=-1;var Gt=class{constructor(t){this.fatal=t.fatal,this.Big5_lead=0}handler(t,r){if(r===w&&this.Big5_lead!==0)return this.Big5_lead=0,_(this.fatal);if(r===w&&this.Big5_lead===0)return-1;if(this.Big5_lead!==0){let n=this.Big5_lead,i=null;this.Big5_lead=0;let s=r<127?64:98;switch((y(r,64,126)||y(r,161,254))&&(i=(n-129)*157+(r-s)),i){case 1133:return[202,772];case 1135:return[202,780];case 1164:return[234,772];case 1166:return[234,780]}let o=i===null?null:ie(i,q("big5"));return o===null&&j(r)&&t.prepend(r),o===null?_(this.fatal):o}return j(r)?r:y(r,129,254)?(this.Big5_lead=r,null):_(this.fatal)}};var Vt=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;let n=Cl(r);if(n===null)return B(r);let i=Math.floor(n/157)+129;if(i<161)return B(r);let s=n%157,o=s<63?64:98;return[i,s+o]}};var $t=class{constructor(t){this.fatal=t.fatal,this.eucjp_jis0212_flag=!1,this.eucjp_lead=0}handler(t,r){if(r===w&&this.eucjp_lead!==0)return this.eucjp_lead=0,_(this.fatal);if(r===w&&this.eucjp_lead===0)return-1;if(this.eucjp_lead===142&&y(r,161,223))return this.eucjp_lead=0,65216+r;if(this.eucjp_lead===143&&y(r,161,254))return this.eucjp_jis0212_flag=!0,this.eucjp_lead=r,null;if(this.eucjp_lead!==0){let n=this.eucjp_lead;this.eucjp_lead=0;let i=null;return y(n,161,254)&&y(r,161,254)&&(i=ie((n-161)*94+(r-161),q(this.eucjp_jis0212_flag?"jis0212":"jis0208"))),this.eucjp_jis0212_flag=!1,y(r,161,254)||t.prepend(r),i===null?_(this.fatal):i}return j(r)?r:r===142||r===143||y(r,161,254)?(this.eucjp_lead=r,null):_(this.fatal)}};var zt=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;if(r===165)return 92;if(r===8254)return 126;if(y(r,65377,65439))return[142,r-65377+161];r===8722&&(r=65293);let n=pe(r,q("jis0208"));if(n===null)return B(r);let i=Math.floor(n/94)+161,s=n%94+161;return[i,s]}};var Wt=class{constructor(t){this.fatal=t.fatal,this.euckr_lead=0}handler(t,r){if(r===w&&this.euckr_lead!==0)return this.euckr_lead=0,_(this.fatal);if(r===w&&this.euckr_lead===0)return-1;if(this.euckr_lead!==0){let n=this.euckr_lead,i=null;this.euckr_lead=0,y(r,65,254)&&(i=(n-129)*190+(r-65));let s=i===null?null:ie(i,q("euc-kr"));return i===null&&j(r)&&t.prepend(r),s===null?_(this.fatal):s}return j(r)?r:y(r,129,254)?(this.euckr_lead=r,null):_(this.fatal)}};var Kt=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;let n=pe(r,q("euc-kr"));if(n===null)return B(r);let i=Math.floor(n/190)+129,s=n%190+65;return[i,s]}};var Gr=class{constructor(t){this.fatal=t.fatal,this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0}handler(t,r){if(r===w&&this.gb18030_first===0&&this.gb18030_second===0&&this.gb18030_third===0)return-1;r===w&&(this.gb18030_first!==0||this.gb18030_second!==0||this.gb18030_third!==0)&&(this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0,_(this.fatal));let n;if(this.gb18030_third!==0){n=null,y(r,48,57)&&(n=Rl((((this.gb18030_first-129)*10+this.gb18030_second-48)*126+this.gb18030_third-129)*10+r-48));let i=[this.gb18030_second,this.gb18030_third,r];return this.gb18030_first=0,this.gb18030_second=0,this.gb18030_third=0,n===null?(t.prepend(i),_(this.fatal)):n}if(this.gb18030_second!==0)return y(r,129,254)?(this.gb18030_third=r,null):(t.prepend([this.gb18030_second,r]),this.gb18030_first=0,this.gb18030_second=0,_(this.fatal));if(this.gb18030_first!==0){if(y(r,48,57))return this.gb18030_second=r,null;let i=this.gb18030_first,s=null;this.gb18030_first=0;let o=r<127?64:65;return(y(r,64,126)||y(r,128,254))&&(s=(i-129)*190+(r-o)),n=s===null?null:ie(s,q("gb18030")),n===null&&j(r)&&t.prepend(r),n===null?_(this.fatal):n}return j(r)?r:r===128?8364:y(r,129,254)?(this.gb18030_first=r,null):_(this.fatal)}};var Vr=class{constructor(t,r=void 0){this.gbk_flag=r,this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;if(r===58853)return B(r);if(this.gbk_flag&&r===8364)return 128;let n=pe(r,q("gb18030"));if(n!==null){let f=Math.floor(n/190)+129,p=n%190,l=p<63?64:65;return[f,p+l]}if(this.gbk_flag)return B(r);n=Ol(r);let i=Math.floor(n/10/126/10);n=n-i*10*126*10;let s=Math.floor(n/10/126);n=n-s*10*126;let o=Math.floor(n/10),u=n-o*10;return[i+129,s+48,o+129,u+48]}};var L;(function(e){e[e.ASCII=0]="ASCII",e[e.Roman=1]="Roman",e[e.Katakana=2]="Katakana",e[e.LeadByte=3]="LeadByte",e[e.TrailByte=4]="TrailByte",e[e.EscapeStart=5]="EscapeStart",e[e.Escape=6]="Escape"})(L||(L={}));var Jt=class{constructor(t){this.fatal=t.fatal,this.iso2022jp_decoder_state=L.ASCII,this.iso2022jp_decoder_output_state=L.ASCII,this.iso2022jp_lead=0,this.iso2022jp_output_flag=!1}handler(t,r){switch(this.iso2022jp_decoder_state){default:case L.ASCII:return r===27?(this.iso2022jp_decoder_state=L.EscapeStart,null):y(r,0,127)&&r!==14&&r!==15&&r!==27?(this.iso2022jp_output_flag=!1,r):r===w?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case L.Roman:return r===27?(this.iso2022jp_decoder_state=L.EscapeStart,null):r===92?(this.iso2022jp_output_flag=!1,165):r===126?(this.iso2022jp_output_flag=!1,8254):y(r,0,127)&&r!==14&&r!==15&&r!==27&&r!==92&&r!==126?(this.iso2022jp_output_flag=!1,r):r===w?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case L.Katakana:return r===27?(this.iso2022jp_decoder_state=L.EscapeStart,null):y(r,33,95)?(this.iso2022jp_output_flag=!1,65344+r):r===w?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case L.LeadByte:return r===27?(this.iso2022jp_decoder_state=L.EscapeStart,null):y(r,33,126)?(this.iso2022jp_output_flag=!1,this.iso2022jp_lead=r,this.iso2022jp_decoder_state=L.TrailByte,null):r===w?-1:(this.iso2022jp_output_flag=!1,_(this.fatal));case L.TrailByte:if(r===27)return this.iso2022jp_decoder_state=L.EscapeStart,_(this.fatal);if(y(r,33,126)){this.iso2022jp_decoder_state=L.LeadByte;let s=(this.iso2022jp_lead-33)*94+r-33,o=ie(s,q("jis0208"));return o===null?_(this.fatal):o}return r===w?(this.iso2022jp_decoder_state=L.LeadByte,t.prepend(r),_(this.fatal)):(this.iso2022jp_decoder_state=L.LeadByte,_(this.fatal));case L.EscapeStart:return r===36||r===40?(this.iso2022jp_lead=r,this.iso2022jp_decoder_state=L.Escape,null):(t.prepend(r),this.iso2022jp_output_flag=!1,this.iso2022jp_decoder_state=this.iso2022jp_decoder_output_state,_(this.fatal));case L.Escape:let n=this.iso2022jp_lead;this.iso2022jp_lead=0;let i=null;if(n===40&&r===66&&(i=L.ASCII),n===40&&r===74&&(i=L.Roman),n===40&&r===73&&(i=L.Katakana),n===36&&(r===64||r===66)&&(i=L.LeadByte),i!==null){this.iso2022jp_decoder_state=this.iso2022jp_decoder_state=i;let s=this.iso2022jp_output_flag;return this.iso2022jp_output_flag=!0,s?_(this.fatal):null}return t.prepend([n,r]),this.iso2022jp_output_flag=!1,this.iso2022jp_decoder_state=this.iso2022jp_decoder_output_state,_(this.fatal)}}};var z;(function(e){e[e.ASCII=0]="ASCII",e[e.Roman=1]="Roman",e[e.jis0208=2]="jis0208"})(z||(z={}));var Yt=class{constructor(t){this.fatal=t.fatal,this.iso2022jp_state=z.ASCII}handler(t,r){if(r===w&&this.iso2022jp_state!==z.ASCII)return t.prepend(r),this.iso2022jp_state=z.ASCII,[27,40,66];if(r===w&&this.iso2022jp_state===z.ASCII)return-1;if((this.iso2022jp_state===z.ASCII||this.iso2022jp_state===z.Roman)&&(r===14||r===15||r===27))return B(65533);if(this.iso2022jp_state===z.ASCII&&D(r))return r;if(this.iso2022jp_state===z.Roman&&(D(r)&&r!==92&&r!==126||r==165||r==8254)){if(D(r))return r;if(r===165)return 92;if(r===8254)return 126}if(D(r)&&this.iso2022jp_state!==z.ASCII)return t.prepend(r),this.iso2022jp_state=z.ASCII,[27,40,66];if((r===165||r===8254)&&this.iso2022jp_state!==z.Roman)return t.prepend(r),this.iso2022jp_state=z.Roman,[27,40,74];r===8722&&(r=65293);let n=pe(r,q("jis0208"));if(n===null)return B(r);if(this.iso2022jp_state!==z.jis0208)return t.prepend(r),this.iso2022jp_state=z.jis0208,[27,36,66];let i=Math.floor(n/94)+33,s=n%94+33;return[i,s]}};var Qt=class{constructor(t){this.fatal=t.fatal,this.Shift_JIS_lead=0}handler(t,r){if(r===w&&this.Shift_JIS_lead!==0)return this.Shift_JIS_lead=0,_(this.fatal);if(r===w&&this.Shift_JIS_lead===0)return-1;if(this.Shift_JIS_lead!==0){let n=this.Shift_JIS_lead,i=null;this.Shift_JIS_lead=0;let s=r<127?64:65,o=n<160?129:193;if((y(r,64,126)||y(r,128,252))&&(i=(n-o)*188+r-s),y(i,8836,10715))return 48508+i;let u=i===null?null:ie(i,q("jis0208"));return u===null&&j(r)&&t.prepend(r),u===null?_(this.fatal):u}return j(r)||r===128?r:y(r,161,223)?65216+r:y(r,129,159)||y(r,224,252)?(this.Shift_JIS_lead=r,null):_(this.fatal)}};var Xt=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r)||r===128)return r;if(r===165)return 92;if(r===8254)return 126;if(y(r,65377,65439))return r-65377+161;r===8722&&(r=65293);let n=Pl(r);if(n===null)return B(r);let i=Math.floor(n/188),s=i<31?129:193,o=n%188,u=o<63?64:65;return[i+s,o+u]}};var Zt=class{constructor(t,r){this.index=t,this.fatal=r.fatal}handler(t,r){if(r===w)return-1;if(j(r))return r;let n=this.index[r-128];return n||_(this.fatal)}};var en=class{constructor(t,r){this.index=t,this.fatal=r.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;let n=pe(r,this.index);return n===null&&B(r),n+128}};function ar(e,t){let r=e>>8,n=e&255;return t?[r,n]:[n,r]}var $r=class{constructor(t,r){this.utf16_be=t,this.fatal=r.fatal,this.utf16_lead_byte=null,this.utf16_lead_surrogate=null}handler(t,r){if(r===w&&(this.utf16_lead_byte!==null||this.utf16_lead_surrogate!==null))return _(this.fatal);if(r===w&&this.utf16_lead_byte===null&&this.utf16_lead_surrogate===null)return-1;if(this.utf16_lead_byte===null)return this.utf16_lead_byte=r,null;let n;if(this.utf16_be?n=(this.utf16_lead_byte<<8)+r:n=(r<<8)+this.utf16_lead_byte,this.utf16_lead_byte=null,this.utf16_lead_surrogate!==null){let i=this.utf16_lead_surrogate;return this.utf16_lead_surrogate=null,y(n,56320,57343)?65536+(i-55296)*1024+(n-56320):(t.prepend(ar(n,this.utf16_be)),_(this.fatal))}return y(n,55296,56319)?(this.utf16_lead_surrogate=n,null):y(n,56320,57343)?_(this.fatal):n}};var zr=class{constructor(t,r){this.utf16_be=t,this.fatal=r.fatal}handler(t,r){if(r===w)return-1;if(y(r,0,65535))return ar(r,this.utf16_be);let n=ar((r-65536>>10)+55296,this.utf16_be),i=ar((r-65536&1023)+56320,this.utf16_be);return n.concat(i)}};var rn=class{constructor(t){this.fatal=t.fatal,this.utf8_code_point=0,this.utf8_bytes_seen=0,this.utf8_bytes_needed=0,this.utf8_lower_boundary=128,this.utf8_upper_boundary=191}handler(t,r){if(r===w&&this.utf8_bytes_needed!==0)return this.utf8_bytes_needed=0,_(this.fatal);if(r===w)return-1;if(this.utf8_bytes_needed===0){if(y(r,0,127))return r;if(y(r,194,223))this.utf8_bytes_needed=1,this.utf8_code_point=r&31;else if(y(r,224,239))r===224&&(this.utf8_lower_boundary=160),r===237&&(this.utf8_upper_boundary=159),this.utf8_bytes_needed=2,this.utf8_code_point=r&15;else if(y(r,240,244))r===240&&(this.utf8_lower_boundary=144),r===244&&(this.utf8_upper_boundary=143),this.utf8_bytes_needed=3,this.utf8_code_point=r&7;else return _(this.fatal);return null}if(!y(r,this.utf8_lower_boundary,this.utf8_upper_boundary))return this.utf8_code_point=this.utf8_bytes_needed=this.utf8_bytes_seen=0,this.utf8_lower_boundary=128,this.utf8_upper_boundary=191,t.prepend(r),_(this.fatal);if(this.utf8_lower_boundary=128,this.utf8_upper_boundary=191,this.utf8_code_point=this.utf8_code_point<<6|r&63,this.utf8_bytes_seen+=1,this.utf8_bytes_seen!==this.utf8_bytes_needed)return null;let n=this.utf8_code_point;return this.utf8_code_point=this.utf8_bytes_needed=this.utf8_bytes_seen=0,n}};var tn=class{constructor(t){this.fatal=t.fatal}handler(t,r){if(r===w)return-1;if(D(r))return r;let n,i;y(r,128,2047)?(n=1,i=192):y(r,2048,65535)?(n=2,i=224):y(r,65536,1114111)&&(n=3,i=240);let s=[(r>>6*n)+i];for(;n>0;){let o=r>>6*(n-1);s.push(128|o&63),n-=1}return s}};var nn=class{constructor(t){this.fatal=t.fatal}handler(t,r){return r===w?-1:j(r)?r:63360+r-128}};var sn=class{constructor(t){this.fatal=t.fatal}handler(t,r){return r===w?-1:D(r)?r:y(r,63360,63487)?r-63360+128:B(r)}};var Xv=Mt(),on={"UTF-8":e=>new tn(e),GBK:e=>new Vr(e,!0),gb18030:e=>new Vr(e),Big5:e=>new Vt(e),"EUC-JP":e=>new zt(e),"ISO-2022-JP":e=>new Yt(e),Shift_JIS:e=>new Xt(e),"EUC-KR":e=>new Kt(e),"UTF-16BE":e=>new zr(!0,e),"UTF-16LE":e=>new zr(!1,e),"x-user-defined":e=>new sn(e)},an={"UTF-8":e=>new rn(e),GBK:e=>new Gr(e),gb18030:e=>new Gr(e),Big5:e=>new Gt(e),"EUC-JP":e=>new $t(e),"ISO-2022-JP":e=>new Jt(e),Shift_JIS:e=>new Qt(e),"EUC-KR":e=>new Wt(e),"UTF-16BE":e=>new $r(!0,e),"UTF-16LE":e=>new $r(!1,e),"x-user-defined":e=>new nn(e)};Xv&&ys.forEach(function(e){e.heading==="Legacy single-byte encodings"&&e.encodings.forEach(function(t){let r=t.name,n=q(r.toLowerCase());an[r]=function(i){return new Zt(n,i)},on[r]=function(i){return new en(n,i)}})});var ur=class{constructor(t){this.tokens=Array.from(t),this.tokens.reverse()}endOfStream(){return!this.tokens.length}read(){return this.tokens.length?this.tokens.pop():w}prepend(t){if(Array.isArray(t)){let r=t;for(;r.length;)this.tokens.push(r.pop())}else this.tokens.push(t)}push(t){if(Array.isArray(t)){let r=t;for(;r.length;)this.tokens.unshift(r.shift())}else this.tokens.unshift(t)}};var cr=class{constructor(t,r){t=t!==void 0?String(t):jt;let n=or(r);this._encoding=null,this._decoder=null,this._ignoreBOM=!1,this._BOMseen=!1,this._error_mode="replacement",this._do_not_flush=!1;let i=Mr(t);if(i===null||i.name==="replacement")throw RangeError("Unknown encoding: "+t);if(!an[i.name])throw Error("Decoder not present. Did you forget to include encoding-indexes.js first?");this._encoding=i,n.fatal&&(this._error_mode="fatal"),n.ignoreBOM&&(this._ignoreBOM=!0)}get encoding(){return this._encoding.name.toLowerCase()}get fatal(){return this._error_mode==="fatal"}get ignoreBOM(){return this._ignoreBOM}decode(t,r){let n=Zv(t),i=or(r);this._do_not_flush||(this._decoder=an[this._encoding.name]({fatal:this._error_mode==="fatal"}),this._BOMseen=!1),this._do_not_flush=!!i.stream;let s=new ur(n),o=[],u;for(;;){let f=s.read();if(f===w||(u=this._decoder.handler(s,f),u===-1))break;u!==null&&(Array.isArray(u)?o.push.apply(o,u):o.push(u))}if(!this._do_not_flush){do{if(u=this._decoder.handler(s,s.read()),u===-1)break;u&&(Array.isArray(u)?o.push.apply(o,u):o.push(u))}while(!s.endOfStream());this._decoder=null}return this.serializeStream(o)}serializeStream(t){return Sl(["UTF-8","UTF-16LE","UTF-16BE"],this._encoding.name)&&!this._ignoreBOM&&!this._BOMseen&&(t.length>0&&t[0]===65279?(this._BOMseen=!0,t.shift()):t.length>0&&(this._BOMseen=!0)),Tl(t)}};function ql(e){try{return e instanceof ArrayBuffer}catch(t){return console.error(t),!1}}function Zv(e){return typeof e!="object"?new Uint8Array(0):ql(e)?new Uint8Array(e):"buffer"in e&&ql(e.buffer)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0)}var fr=class{constructor(t,r){let n=or(r);if(this._encoding=null,this._encoder=null,this._do_not_flush=!1,this._fatal=n.fatal?"fatal":"replacement",n.NONSTANDARD_allowLegacyEncoding){t=t?String(t):jt;let i=Mr(t);if(i===null||i.name==="replacement")throw RangeError("Unknown encoding: "+t);if(!on[i.name])throw Error("Encoder not present. Did you forget to include encoding-indexes.js first?");this._encoding=i}else{this._encoding=Mr("utf-8");let i=Ht()||{};t!==void 0&&"console"in i&&console.warn("TextEncoder constructor called with encoding label, which is ignored.")}}get encoding(){return this._encoding.name.toLowerCase()}encode(t,r){t=t===void 0?"":String(t);let n=or(r);this._do_not_flush||(this._encoder=on[this._encoding.name]({fatal:this._fatal==="fatal"})),this._do_not_flush=!!n.stream;let i=new ur(Al(t)),s=[],o;for(;;){let u=i.read();if(u===w||(o=this._encoder.handler(i,u),o===-1))break;Array.isArray(o)?s.push.apply(s,o):s.push(o)}if(!this._do_not_flush){for(;o=this._encoder.handler(i,i.read()),o!==-1;)Array.isArray(o)?s.push.apply(s,o):s.push(o);this._encoder=null}return new Uint8Array(s)}};if(typeof window<"u"){let e=t=>!(t in window)||typeof window[t]>"u"||window[t]===null;e("TextDecoder")&&(window.TextDecoder=cr),e("TextEncoder")&&(window.TextEncoder=fr)}var Yr=An(Ml(),1),Re=class extends Yr.EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){let t=fn.get(this);if(typeof t!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return t}};(0,Yr.defineEventAttribute)(Re.prototype,"abort");function ay(){let e=Object.create(Re.prototype);return Yr.EventTarget.call(e),fn.set(e,!1),e}function uy(e){fn.get(e)===!1&&(fn.set(e,!0),e.dispatchEvent({type:"abort"}))}var fn=new WeakMap;Object.defineProperties(Re.prototype,{aborted:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});var hr=class{constructor(){Vl.set(this,ay())}get signal(){return Gl(this)}abort(){uy(Gl(this))}},Vl=new WeakMap;function Gl(e){let t=Vl.get(e);if(t==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${e===null?"null":typeof e}`);return t}Object.defineProperties(hr.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}});typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(hr.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var hy=typeof self=="object"?self:globalThis,$l=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new hy[e](t)},dy=(e,t)=>{let r=(i,s)=>(e.set(s,i),i),n=i=>{if(e.has(i))return e.get(i);let[s,o]=t[i];switch(s){case 0:case-1:return r(o,i);case 1:{let u=r([],i);for(let f of o)u.push(n(f));return u}case 2:{let u=r({},i);for(let[f,p]of o)u[n(f)]=n(p);return u}case 3:return r(new Date(o),i);case 4:{let{source:u,flags:f}=o;return r(new RegExp(u,f),i)}case 5:{let u=r(new Map,i);for(let[f,p]of o)u.set(n(f),n(p));return u}case 6:{let u=r(new Set,i);for(let f of o)u.add(n(f));return u}case 7:{let{name:u,message:f}=o;return r($l(u,f),i)}case 8:return r(BigInt(o),i);case"BigInt":return r(Object(BigInt(o)),i);case"ArrayBuffer":return r(new Uint8Array(o).buffer,o);case"DataView":{let{buffer:u}=new Uint8Array(o);return r(new DataView(u),o)}}return r($l(s,o),i)};return n},Rs=e=>dy(new Map,e)(0);var dr="",{toString:py}={},{keys:xy}=Object,Qr=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let r=py.call(e).slice(8,-1);switch(r){case"Array":return[1,dr];case"Object":return[2,dr];case"Date":return[3,dr];case"RegExp":return[4,dr];case"Map":return[5,dr];case"Set":return[6,dr];case"DataView":return[1,r]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},hn=([e,t])=>e===0&&(t==="function"||t==="symbol"),gy=(e,t,r,n)=>{let i=(o,u)=>{let f=n.push(o)-1;return r.set(u,f),f},s=o=>{if(r.has(o))return r.get(o);let[u,f]=Qr(o);switch(u){case 0:{let l=o;switch(f){case"bigint":u=8,l=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);l=null;break;case"undefined":return i([-1],o)}return i([u,l],o)}case 1:{if(f){let c=o;return f==="DataView"?c=new Uint8Array(o.buffer):f==="ArrayBuffer"&&(c=new Uint8Array(o)),i([f,[...c]],o)}let l=[],a=i([u,l],o);for(let c of o)l.push(s(c));return a}case 2:{if(f)switch(f){case"BigInt":return i([f,o.toString()],o);case"Boolean":case"Number":case"String":return i([f,o.valueOf()],o)}if(t&&"toJSON"in o)return s(o.toJSON());let l=[],a=i([u,l],o);for(let c of xy(o))(e||!hn(Qr(o[c])))&&l.push([s(c),s(o[c])]);return a}case 3:return i([u,o.toISOString()],o);case 4:{let{source:l,flags:a}=o;return i([u,{source:l,flags:a}],o)}case 5:{let l=[],a=i([u,l],o);for(let[c,x]of o)(e||!(hn(Qr(c))||hn(Qr(x))))&&l.push([s(c),s(x)]);return a}case 6:{let l=[],a=i([u,l],o);for(let c of o)(e||!hn(Qr(c)))&&l.push(s(c));return a}}let{message:p}=o;return i([u,{name:f,message:p}],o)};return s},Os=(e,{json:t,lossy:r}={})=>{let n=[];return gy(!(t||r),!!t,new Map,n)(e),n};var Yl=new WeakMap,Ps=class extends hr{constructor(){super(),Object.defineProperty(this.signal,"reason",{get:()=>Yl.get(this.signal)})}abort(t=Object.assign(new Error("Aborted"),{name:"AbortError"})){this.signal.aborted||(Yl.set(this.signal,t),super.abort())}},my=e=>Rs(Os(e));function Zl(e=globalThis){for(let[t,r]of Object.entries({URL:Ql.default,URLSearchParams:Xl.default,TextEncoder:fr,TextDecoder:cr,AbortController:Ps,AbortSignal:Re,structuredClone:my}))e[t]===void 0&&(e[t]=r);return e}function rh(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function vy(e,...t){if(!rh(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function th(e,t){return Array.isArray(t)?t.length===0?!0:e?t.every(r=>typeof r=="string"):t.every(r=>Number.isSafeInteger(r)):!1}function Xr(e,t){if(typeof t!="string")throw new Error(`${e}: string expected`);return!0}function Ls(e){if(!Number.isSafeInteger(e))throw new Error(`invalid integer: ${e}`)}function qs(e){if(!Array.isArray(e))throw new Error("array expected")}function dn(e,t){if(!th(!0,t))throw new Error(`${e}: array of strings expected`)}function yy(e,t){if(!th(!1,t))throw new Error(`${e}: array of numbers expected`)}function wy(...e){let t=s=>s,r=(s,o)=>u=>s(o(u)),n=e.map(s=>s.encode).reduceRight(r,t),i=e.map(s=>s.decode).reduce(r,t);return{encode:n,decode:i}}function by(e){let t=typeof e=="string"?e.split(""):e,r=t.length;dn("alphabet",t);let n=new Map(t.map((i,s)=>[i,s]));return{encode:i=>(qs(i),i.map(s=>{if(!Number.isSafeInteger(s)||s<0||s>=r)throw new Error(`alphabet.encode: digit index outside alphabet "${s}". Allowed: ${e}`);return t[s]})),decode:i=>(qs(i),i.map(s=>{Xr("alphabet.decode",s);let o=n.get(s);if(o===void 0)throw new Error(`Unknown letter: "${s}". Allowed: ${e}`);return o}))}}function Iy(e=""){return Xr("join",e),{encode:t=>(dn("join.decode",t),t.join(e)),decode:t=>(Xr("join.decode",t),t.split(e))}}function Ey(e,t="="){return Ls(e),Xr("padding",t),{encode(r){for(dn("padding.encode",r);r.length*e%8;)r.push(t);return r},decode(r){dn("padding.decode",r);let n=r.length;if(n*e%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;n>0&&r[n-1]===t;n--)if((n-1)*e%8===0)throw new Error("padding: invalid, string has too much padding");return r.slice(0,n)}}}var nh=(e,t)=>t===0?e:nh(t,e%t),pn=(e,t)=>e+(t-nh(e,t)),Cs=(()=>{let e=[];for(let t=0;t<40;t++)e.push(2**t);return e})();function eh(e,t,r,n){if(qs(e),t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(pn(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${pn(t,r)}`);let i=0,s=0,o=Cs[t],u=Cs[r]-1,f=[];for(let p of e){if(Ls(p),p>=o)throw new Error(`convertRadix2: invalid data word=${p} from=${t}`);if(i=i<<t|p,s+t>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);for(s+=t;s>=r;s-=r)f.push((i>>s-r&u)>>>0);let l=Cs[s];if(l===void 0)throw new Error("invalid carry");i&=l-1}if(i=i<<r-s&u,!n&&s>=t)throw new Error("Excess padding");if(!n&&i>0)throw new Error(`Non-zero padding: ${i}`);return n&&s>0&&f.push(i>>>0),f}function _y(e,t=!1){if(Ls(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(pn(8,e)>32||pn(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!rh(r))throw new Error("radix2.encode input should be Uint8Array");return eh(Array.from(r),8,e,!t)},decode:r=>(yy("radix2.decode",r),Uint8Array.from(eh(r,e,8,t)))}}var Sy=typeof Uint8Array.from([]).toBase64=="function"&&typeof Uint8Array.fromBase64=="function",Ay=(e,t)=>{Xr("base64",e);let r=t?/^[A-Za-z0-9=_-]+$/:/^[A-Za-z0-9=+/]+$/,n=t?"base64url":"base64";if(e.length>0&&!r.test(e))throw new Error("invalid base64");return Uint8Array.fromBase64(e,{alphabet:n,lastChunkHandling:"strict"})},ih=Sy?{encode(e){return vy(e),e.toBase64()},decode(e){return Ay(e,!1)}}:wy(_y(6),by("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Ey(6),Iy(""));var sh=Object.freeze(["INVALID_INPUT","INVALID_CONFIG","NO_CREDENTIALS","MATCH_MISS","ACCOUNT_CHANGED","AUTH_FAILED","ACCESS_DENIED","RATE_LIMITED","REQUEST_TIMEOUT","OPERATION_TIMEOUT","ABORTED","QUEUE_FULL","CATALOG_LIMIT","CATALOG_PARTIAL","AMBIGUOUS_EPISODE","FILE_NOT_FOUND","QUALITY_UNAVAILABLE","QUALITY_DOWNGRADED","URL_EXPIRED","TRANSFER_UNCERTAIN","UPSTREAM_ERROR","UNEXPECTED_HTTP","RESPONSE_TOO_LARGE","SITE_UNAVAILABLE","PROVIDER_UNAVAILABLE","ACCOUNTS_UNAVAILABLE","ORIGIN_ACCESS_DENIED"]),Us=class extends Error{constructor(t,r={}){let n=sh.includes(t)?t:"UPSTREAM_ERROR";super(n.replaceAll("_"," ").toLowerCase()),this.name="ResolverError",Object.assign(this,Ty(r)),this.code=n}},se=(e,t)=>new Us(e,t);function Ty(e={}){let t={};sh.includes(e.code)&&(t.code=e.code);for(let r of["status","upstreamCode","count","durationMs"])typeof e[r]=="number"&&Number.isFinite(e[r])&&(t[r]=e[r]);return typeof e.upstreamCode=="string"&&/^-?\d{1,10}$/.test(e.upstreamCode)&&(t.upstreamCode=e.upstreamCode),["request","search","detail","listFiles","resolve","transfer","poll","cache"].includes(e.stage)&&(t.stage=e.stage),["quark","baidu","uc","115","123"].includes(e.provider)&&(t.provider=e.provider),["muou","huajuan","zhizhen","woniu","tgsou","tg-channels","wogg","labi","shandian","duoduo","ouge","huban","xiaoban"].includes(e.siteId)&&(t.siteId=e.siteId),typeof e.retryable=="boolean"&&(t.retryable=e.retryable),t}function oh(e){return typeof e=="string"&&/^[A-Za-z0-9+/_-]+={0,2}$/.test(e)?e.replace(/\+/g,"-").replace(/\//g,"_"):e}function Ry(e){return e.method!=="GET"||typeof e.url!="string"||!/^https:\/\/(?:pc-api\.uc\.cn|drive-(?:h|pc)\.quark\.cn)\/1\/clouddrive\/share\/sharepage\/detail(?:\?|$)/i.test(e.url)?e.url:e.url.replace(/([?&]stoken=)([^&#]*)/g,(t,r,n)=>{let i;try{i=decodeURIComponent(n)}catch{return t}return!/^[A-Za-z0-9+/_-]+={0,2}$/.test(i)||!/[+/]/.test(i)?t:r+encodeURIComponent(oh(i))})}function Oy(e){if(e.method!=="POST"||typeof e.body!="string"||!/^https:\/\/(?:pc-api\.uc\.cn\/1\/clouddrive\/file\/download|drive-h\.quark\.cn\/1\/clouddrive\/share\/sharepage\/save)(?:\?|$)/i.test(e.url))return e.body;try{let t=JSON.parse(e.body),r=oh(t?.stoken);return typeof t?.stoken!="string"||r===t.stoken?e.body:JSON.stringify({...t,stoken:r})}catch{return e.body}}function ah(e){if(typeof e?.http?.request!="function")throw se("INVALID_CONFIG");return{async request(t){let r;try{r=await e.http.request({url:Ry(t),method:t.method,headers:{...t.headers},...t.body===void 0?{}:{data:Oy(t)},timeout:t.timeoutMs/1e3,allow_redirects:!1,base64Data:!0})}catch(s){if(s?.response)r=s.response;else{let o=Number(/^HTTP ([1-5]\d{2})(?::|$)/.exec(String(s?.message??""))?.[1])||void 0,u=o===400&&t.method==="POST"&&/^https:\/\/drive-pc\.quark\.cn\/1\/clouddrive\/file\/download(?:\?|$)/i.test(t.url),f=t.method==="POST"&&/^https:\/\/drive-pc\.quark\.cn\/1\/clouddrive\/file\/download(?:\?|$)/i.test(t.url);throw se(o===401?"AUTH_FAILED":o===429?"RATE_LIMITED":o===403?f?"ORIGIN_ACCESS_DENIED":"ACCESS_DENIED":u?"QUALITY_UNAVAILABLE":"UPSTREAM_ERROR",{status:o})}}let n=Number(r?.statusCode??r?.status);if(!Number.isInteger(n)||n<100||n>599||typeof r.data!="string")throw se("UPSTREAM_ERROR");if(r.data.length>4*Math.ceil(t.maxResponseBytes/3))throw se("RESPONSE_TOO_LARGE");let i;try{i=ih.decode(r.data)}catch{throw se("UPSTREAM_ERROR")}if(i.byteLength>t.maxResponseBytes)throw se("RESPONSE_TOO_LARGE");return{status:n,headers:r.headers??{},body:i}}}}var Py={"zh-hans":"zh-Hans","zh-cn":"zh-Hans",chs:"zh-Hans",sc:"zh-Hans",\u7B80\u4F53:"zh-Hans",\u7B80\u4E2D:"zh-Hans","zh-hant":"zh-Hant","zh-tw":"zh-Hant",cht:"zh-Hant",tc:"zh-Hant",\u7E41\u4F53:"zh-Hant",\u7E41\u4E2D:"zh-Hant",zh:"zh",chi:"zh",zho:"zh",\u4E2D\u6587:"zh",en:"en",eng:"en",\u82F1\u6587:"en",ja:"ja",jpn:"ja",\u65E5\u6587:"ja",ko:"ko",kor:"ko",fr:"fr",fra:"fr",de:"de",deu:"de",es:"es",spa:"es",yue:"yue",\u7CA4\u8BED:"yue"},uh=[...Object.keys(Py),"forced","sdh","cc"].sort((e,t)=>t.length-e.length).join("|"),iE=new RegExp(`(?:[._\\s-]+(${uh})|[._\\s-]*[\\[\uFF08(](${uh})[\\]\uFF09)])$`,"i");function Cy(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Zr(e,...t){if(!Cy(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function Fs(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function ch(e,t){Zr(e);let r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}function Oe(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function gn(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function ge(e,t){return e<<32-t|e>>>t}function mn(e,t){return e<<t|e>>>32-t>>>0}var qy=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Ly=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function fh(e){if(Zr(e),qy)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=Ly[e[r]];return t}function Uy(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}function ks(e){return typeof e=="string"&&(e=Uy(e)),Zr(e),e}var xn=class{};function vn(e){let t=n=>e().update(ks(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Fy(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);let i=BigInt(32),s=BigInt(4294967295),o=Number(r>>i&s),u=Number(r&s),f=n?4:0,p=n?0:4;e.setUint32(t+f,o,n),e.setUint32(t+p,u,n)}function yn(e,t,r){return e&t^~e&r}function wn(e,t,r){return e&t^e&r^t&r}var pr=class extends xn{constructor(t,r,n,i){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=i,this.buffer=new Uint8Array(t),this.view=gn(this.buffer)}update(t){Fs(this),t=ks(t),Zr(t);let{view:r,buffer:n,blockLen:i}=this,s=t.length;for(let o=0;o<s;){let u=Math.min(i-this.pos,s-o);if(u===i){let f=gn(t);for(;i<=s-o;o+=i)this.process(f,o);continue}n.set(t.subarray(o,o+u),this.pos),this.pos+=u,o+=u,this.pos===i&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Fs(this),ch(t,this),this.finished=!0;let{buffer:r,view:n,blockLen:i,isLE:s}=this,{pos:o}=this;r[o++]=128,Oe(this.buffer.subarray(o)),this.padOffset>i-o&&(this.process(n,0),o=0);for(let a=o;a<i;a++)r[a]=0;Fy(n,i-8,BigInt(this.length*8),s),this.process(n,0);let u=gn(t),f=this.outputLen;if(f%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let p=f/4,l=this.get();if(p>l.length)throw new Error("_sha2: outputLen bigger than state");for(let a=0;a<p;a++)u.setUint32(4*a,l[a],s)}digest(){let{buffer:t,outputLen:r}=this;this.digestInto(t);let n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:r,buffer:n,length:i,finished:s,destroyed:o,pos:u}=this;return t.destroyed=o,t.finished=s,t.length=i,t.pos=u,i%r&&t.buffer.set(n),t}clone(){return this._cloneInto()}},Ee=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var et=Uint32Array.from([1732584193,4023233417,2562383102,271733878,3285377520]),Pe=new Uint32Array(80),bn=class extends pr{constructor(){super(64,20,8,!1),this.A=et[0]|0,this.B=et[1]|0,this.C=et[2]|0,this.D=et[3]|0,this.E=et[4]|0}get(){let{A:t,B:r,C:n,D:i,E:s}=this;return[t,r,n,i,s]}set(t,r,n,i,s){this.A=t|0,this.B=r|0,this.C=n|0,this.D=i|0,this.E=s|0}process(t,r){for(let f=0;f<16;f++,r+=4)Pe[f]=t.getUint32(r,!1);for(let f=16;f<80;f++)Pe[f]=mn(Pe[f-3]^Pe[f-8]^Pe[f-14]^Pe[f-16],1);let{A:n,B:i,C:s,D:o,E:u}=this;for(let f=0;f<80;f++){let p,l;f<20?(p=yn(i,s,o),l=1518500249):f<40?(p=i^s^o,l=1859775393):f<60?(p=wn(i,s,o),l=2400959708):(p=i^s^o,l=3395469782);let a=mn(n,5)+p+u+l+Pe[f]|0;u=o,o=s,s=mn(i,30),i=n,n=a}n=n+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,u=u+this.E|0,this.set(n,i,s,o,u)}roundClean(){Oe(Pe)}destroy(){this.set(0,0,0,0,0),Oe(this.buffer)}},lh=vn(()=>new bn);var hh=lh;var ky=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ce=new Uint32Array(64),In=class extends pr{constructor(t=32){super(64,t,8,!1),this.A=Ee[0]|0,this.B=Ee[1]|0,this.C=Ee[2]|0,this.D=Ee[3]|0,this.E=Ee[4]|0,this.F=Ee[5]|0,this.G=Ee[6]|0,this.H=Ee[7]|0}get(){let{A:t,B:r,C:n,D:i,E:s,F:o,G:u,H:f}=this;return[t,r,n,i,s,o,u,f]}set(t,r,n,i,s,o,u,f){this.A=t|0,this.B=r|0,this.C=n|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=u|0,this.H=f|0}process(t,r){for(let a=0;a<16;a++,r+=4)Ce[a]=t.getUint32(r,!1);for(let a=16;a<64;a++){let c=Ce[a-15],x=Ce[a-2],g=ge(c,7)^ge(c,18)^c>>>3,S=ge(x,17)^ge(x,19)^x>>>10;Ce[a]=S+Ce[a-7]+g+Ce[a-16]|0}let{A:n,B:i,C:s,D:o,E:u,F:f,G:p,H:l}=this;for(let a=0;a<64;a++){let c=ge(u,6)^ge(u,11)^ge(u,25),x=l+c+yn(u,f,p)+ky[a]+Ce[a]|0,S=(ge(n,2)^ge(n,13)^ge(n,22))+wn(n,i,s)|0;l=p,p=f,f=u,u=o+x|0,o=s,s=i,i=n,n=x+S|0}n=n+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,u=u+this.E|0,f=f+this.F|0,p=p+this.G|0,l=l+this.H|0,this.set(n,i,s,o,u,f,p,l)}roundClean(){Oe(Ce)}destroy(){this.set(0,0,0,0,0,0,0,0),Oe(this.buffer)}};var dh=vn(()=>new In);var ph=dh;function Ds(e){let t={sha1:hh,sha256:ph}[e];if(!t)throw new TypeError("Unsupported hash algorithm");let r=t.create(),n={update(i){return r.update(i),n},digest(i){if(i!=="hex")throw new TypeError("Unsupported hash format");return fh(r.digest())}};return n}function Ns(e,t="INVALID_INPUT"){if(!e||typeof e!="object"||Array.isArray(e)||![Object.prototype,null].includes(Object.getPrototypeOf(e)))throw se(t);return e}function Bs(e,{empty:t=!1,nullable:r=!1}={}){if(r&&e==null)return null;if(typeof e!="string"||!t&&!e.trim())throw se("INVALID_INPUT");return e}var Dy=e=>["explicit","context"].includes(e),xh=e=>{if(/^\d+$/.test(e))return Number(e);let t="\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D",r=0,n=0;for(let i of e.replaceAll("\u4E24","\u4E8C").replaceAll("\u3007","\u96F6"))t.includes(i)?n=t.indexOf(i):(r+=(n||1)*(i==="\u767E"?100:10),n=0);return r+n},js=e=>Number.isSafeInteger(e)&&e>=0,gh="[\u96F6\u3007\u4E00\u4E8C\u4E24\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\\d]+";function mh(e){let t=/(?:^|[^a-z0-9])(?:s|season\s*)(\d{1,3})(?=$|[^a-z0-9]|e\d)/i.exec(e)??new RegExp(`\u7B2C(${gh})\u5B63`).exec(e),r=/(?:^|[^a-z0-9])(?:e|ep|episode)\s*(\d{1,5})(?=$|[^a-z0-9])/i.exec(e)??/s\d{1,3}e(\d{1,5})(?=$|[^a-z0-9])/i.exec(e)??new RegExp(`\u7B2C(${gh})[\u96C6\u8BDD\u8A71]`).exec(e);return{season:t?xh(t[1]):null,episode:r?xh(r[1]):null}}function Ny(e){return/(?:^|[^a-z])(?:sp\d*|ova\d*|oad\d*|specials?)(?=$|[^a-z])|特别篇|特別篇|番外/i.test(e)?"special":/花絮|幕后|幕後|预告|預告|(?:^|[^a-z])(?:extras?|trailers?|behind[ ._-]+the[ ._-]+scenes)(?=$|[^a-z])/i.test(e)?"extra":null}function By(e){return{code:"AMBIGUOUS_EPISODE",siteId:e.siteId,provider:e.provider,sourceId:e.id,shareId:e.shareId,stage:"listFiles",retryable:!1,message:se("AMBIGUOUS_EPISODE").message}}function vh(e){Ns(e);let t=Bs(e.name).replace(/\.(?:mkv|mp4|avi|m4v|ts|mov|wmv|flv|webm|m2ts)$/i,""),r=Bs(e.parentPath??"",{empty:!0}).split(/[\\/]/).filter(Boolean).reverse(),n=Ns(e.share?.context??{}),i=(e.mediaType??n.mediaType)==="movie",o=[{...mh(t),evidence:"explicit"}];for(let l of["season","episode"])js(e[l])&&e.evidence?.[l]==="explicit"&&o.push({[l]:e[l],evidence:"explicit"});for(let l of[...r,n.groupLabel,n.title])typeof l=="string"&&o.push({...mh(l),evidence:"context"});js(n.seasonHint)&&o.push({season:n.seasonHint,evidence:"context"});for(let l of["season","episode"])js(e[l])&&["context","weak"].includes(e.evidence?.[l])&&o.push({[l]:e[l],evidence:e.evidence[l]});let u={season:null,episode:null,kind:"unknown",specialLabel:null,evidence:{season:"unknown",episode:"unknown"},diagnostics:[]},f=!1;if(!i)for(let l of["season","episode"]){let a=o.filter(c=>c[l]!=null);a.length&&(u[l]=a[0][l],u.evidence[l]=a[0].evidence,f||(f=a.some(c=>Dy(c.evidence)&&c[l]!==u[l])))}let p=[t,...r,n.groupLabel].filter(l=>typeof l=="string").map(Ny).find(Boolean);return u.kind=p??(["special","extra"].includes(e.kind)?e.kind:u.episode!==null?"regular":"unknown"),["special","extra"].includes(u.kind)&&(u.specialLabel=e.specialLabel??t),f&&u.diagnostics.push(By(e)),u}var Ms=e=>typeof e=="string"&&e.length<=200&&!/[\x00-\x1f\x7f]/.test(e)?e.trim():"",Hs=e=>/^(?:19|20)\d{2}$/.test(String(e??""))?Number(e):null;function yh(e,t=!1){let r=Ms(e),n=null;t&&(r=r.replace(/^[🎬🎥📺]\s*/u,"").replace(/^(?:名称|片名)\s*[:：]\s*/,"").replace(/\s*(?:更新(?:至|到)?\s*\d|更至|全\s*\d+\s*[集期]|完结|已完结)[\s\S]*$/,"")),r=r.replace(/[（(]\s*(?:真彩|臻彩)\s*[）)]/g,"").trim();let i=vh({name:r||"?"}).season;for(let s=0;s<4;s++){let o=r;if(r=r.replace(/([）)\]])(?:\d{3,4}p|[248]K|HDR\d*|UHD)(?=\s|$)[\s\S]*$/i,"$1").replace(/\s*[（(]\s*((?:19|20)\d{2})(?:-\d{2}-\d{2})?\s*[）)]\s*$/,(u,f)=>(n??(n=Number(f)),"")).replace(/\s*[\[(（](?:\d{3,4}p|[248]K|HDR\d*|UHD|WEB-?DL|蓝光|杜比|简繁中字|中文字幕)[^\])）]*[\])）]\s*$/i,"").replace(/\s+(?:\d{3,4}p|[248]K|HDR\d*|UHD|WEB-?DL|蓝光|杜比|高码率?)(?=\s|$)[\s\S]*$/i,"").replace(/\s*(?:第\s*[零〇一二两三四五六七八九十百\d]+\s*季|season\s*\d+)\s*$/i,"").trim(),r===o)break}return{title:r,key:r.replace(/[\s·:：._\-]/g,"").toLowerCase(),year:n,season:i}}function Gs(e){let t=[e.seriesName,e.title,e.name,e.keyword].map(Ms).find(Boolean);return jy([t,e.originalName,e.originalTitle,...Array.isArray(e.alternativeTitles)?e.alternativeTitles:[]])}function jy(e){let t=new Set;return e.map(Ms).filter(r=>{let n=yh(r).key;return!n||t.has(n)?!1:(t.add(n),!0)}).slice(0,16)}function wh(e){let t=[Hs(e.year),Hs(e.releaseYear),e.type==="movie"?Hs(String(e.airDate||"").slice(0,4)):null].filter(i=>i!==null),r=t[0]??null,n=yh(Gs(e)[0]||"").year;return{year:r??n,conflict:new Set([...t,n].filter(i=>i!==null)).size>1}}var oe="https://www.miniyingshi.com",Vs="catpaw.miniyingshi:session:v2",$s=e=>Ds("sha256").update(e).digest("hex"),bh={INVALID_INPUT:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u53C2\u6570\u65E0\u6548",INVALID_CONFIG:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u672C\u5730\u5B58\u50A8\u4E0D\u53EF\u7528",SESSION_UNAVAILABLE:"\u8FF7\u4F60\u5F71\u89C6\uFF1ARex \u672A\u6536\u5230\u7F51\u7AD9\u767B\u5F55\u4F1A\u8BDD\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7AD9\u90AE\u7BB1\u3001\u5BC6\u7801\u6216\u7A0D\u540E\u91CD\u8BD5",LOGIN_REQUIRED:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u8BF7\u5728\u6A21\u5757\u8BBE\u7F6E\u586B\u5199\u7F51\u7AD9\u90AE\u7BB1\u548C\u5BC6\u7801\uFF0C\u518D\u6267\u884C\u767B\u5F55\u68C0\u6D4B",ACCOUNT_CHANGED:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u8D26\u53F7\u914D\u7F6E\u5DF2\u66F4\u6539\uFF0C\u8BF7\u91CD\u8BD5",RATE_LIMITED:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",ACCESS_DENIED:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u7AD9\u70B9\u62D2\u7EDD\u8BBF\u95EE\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u5728\u7F51\u7AD9\u91CD\u65B0\u767B\u5F55",UPSTREAM_ERROR:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u63A5\u53E3\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",INVALID_SHARE:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u7F51\u76D8\u5206\u4EAB\u5730\u5740\u65E0\u6548\uFF0C\u8BF7\u5237\u65B0\u6216\u66F4\u6362\u8D44\u6E90",NO_SHARES:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u6B64\u4F5C\u54C1\u6682\u65E0\u652F\u6301\u7684\u7F51\u76D8\u8D44\u6E90"},R=e=>Object.assign(new Error(bh[e]||bh.UPSTREAM_ERROR),{code:e}),xr=(e,t=32768)=>typeof e=="string"&&e.length<=t&&!/[\x00-\x1f\x7f]/.test(e);function En(e,t=()=>Date.now()){function r(c,...x){try{let g=e[c](...x);if(g?.then)throw Error();return g}catch{throw R("INVALID_CONFIG")}}function n(){let c;try{c=JSON.parse(r("get",Vs)||"null")}catch{c=null}return(!c||c.origin!==oe||!Array.isArray(c.cookies)||!xr(c.email||"",254))&&(c={origin:oe,email:"",importHash:"",cookies:[]}),c.cookies=c.cookies.filter(x=>!x.imported&&xr(x.name,100)&&/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(x.name)&&xr(x.value,8192)&&typeof x.path=="string"&&x.path.startsWith("/")&&(!x.expires||x.expires>t())),c}let i=n(),s=0,o="",u=c=>JSON.stringify([c?.email||"",c?.importHash||"",c?.credentialHash||""]),f=u(i);function p(){try{return u(JSON.parse(r("get",Vs)||"null"))}catch(c){throw c.code?c:R("INVALID_CONFIG")}}function l(c){if(c!==s||p()!==f)throw R("ACCOUNT_CHANGED")}let a=()=>{l(s),r("set",Vs,JSON.stringify(i)),f=u(i)};return{configure(c={}){p()!==f&&(i=n(),f=u(i),o="",s++),l(s);let x=JSON.stringify([i.email,i.importHash,i.credentialHash]);if(Object.hasOwn(c,"email")){if(!xr(c.email,254))throw R("INVALID_INPUT");let g=c.email.trim();g!==i.email&&(i.email=g,i.cookies=[],i.importHash="",i.credentialHash="",o="")}if(Object.hasOwn(c,"password")){if(!xr(c.password,1024))throw R("INVALID_INPUT");let g=$s(i.email+"\0"+c.password);g!==i.credentialHash&&(i.cookies=[],i.importHash="",i.credentialHash=g),o=c.password}return JSON.stringify([i.email,i.importHash,i.credentialHash])!==x&&(s++,a()),s},version:()=>s,check:l,credentials:()=>({email:i.email,password:o}),configured:()=>!!(i.email&&i.credentialHash&&i.credentialHash!==$s(i.email+"\0")),hasCookies:()=>i.cookies.some(c=>c.name==="mys_at"&&c.value&&(!c.expires||c.expires>t())&&(c.path==="/api"||c.path==="/")),fingerprint:()=>$s(JSON.stringify([i.email,i.importHash,i.credentialHash])),header(c){return i.cookies.filter(x=>(!x.expires||x.expires>t())&&(c===x.path||c.startsWith(x.path.endsWith("/")?x.path:x.path+"/"))).map(x=>`${x.name}=${x.value}`).join("; ")},accept(c,x){l(x);let g=!1,S=!1,E=Object.entries(c||{}).filter(([O])=>O.toLowerCase()==="set-cookie").flatMap(([,O])=>Array.isArray(O)?O:[O]);for(let O of E)for(let M of String(O).split(/,(?=\s*[!#$%&'*+.^_`|~0-9A-Za-z-]+=)/)){let C=M.split(";").map(T=>T.trim()),N=C[0].indexOf("=");if(N<=0)continue;let d=C[0].slice(0,N),m=C[0].slice(N+1);if(!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(d)||!xr(m,8192))continue;let v=Object.fromEntries(C.slice(1).map(T=>{let Y=T.indexOf("=");return Y<0?[T.toLowerCase(),!0]:[T.slice(0,Y).toLowerCase(),T.slice(Y+1)]})),b=String(v.domain||"www.miniyingshi.com").replace(/^\./,"").toLowerCase();if(!["www.miniyingshi.com","miniyingshi.com"].includes(b))continue;let k=typeof v.path=="string"&&v.path.startsWith("/")?v.path:"/api",A=v["max-age"]!==void 0?t()+Number(v["max-age"])*1e3:v.expires?Date.parse(v.expires):0,P=["mys_at","mys_rt","mys_login"].includes(d),F=m&&(!A||A>t());i.cookies=i.cookies.filter(T=>T.name!==d||!(T.path===k||P&&(F||T.imported))),F&&(i.cookies.push({name:d,value:m,path:k,expires:Number.isFinite(A)?A:0}),d==="mys_at"&&(k==="/"||k==="/api")&&(S=!0)),g=!0}return g&&a(),S}}}var gr=e=>typeof e=="string"&&/^[A-Za-z0-9_-]{1,80}$/.test(e),Ih=e=>Number.isSafeInteger(e)&&e>0&&e<=1e4;function Eh({request:e,store:t,now:r=()=>Date.now(),session:n=En(t,r),authentication:i={current:null}}){let s={},o=new Map,u,f=d=>["ABORTED","OPERATION_TIMEOUT"].includes(d?.code),p=d=>f(d)||["UPSTREAM_ERROR","SESSION_UNAVAILABLE","RATE_LIMITED","ACCESS_DENIED"].includes(d?.code);function l(d){if(u?.version===d)throw u.error;for(let m of o.keys())if(m.version===d&&m.error&&(m.owner===s||!f(m.error)))throw u={version:d,error:m.error},m.error}function a(d){if(o.has(d))return o.get(d);let m=d.promise.catch(v=>{if(n.check(d.version),f(v)&&d.owner!==s)return g(d.version,d.key,d);throw v}).catch(v=>{throw u={version:d.version,error:v},v});return o.set(d,m),m.catch(()=>{}),m}async function c(d,{method:m="GET",body:v,authenticated:b=!1,version:k=n.version(),acceptCookies:A=!0,preview:P}={}){if(!d.startsWith("/api/")||d.includes(".."))throw R("INVALID_INPUT");n.check(k);let F=b?n.header(d):"",T;try{P?.check();let G=e({url:oe+d,method:m,headers:{"User-Agent":"Mozilla/5.0",Referer:oe+"/",...m==="POST"?{Origin:oe}:{},Accept:"application/json",...v?{"Content-Type":"application/json"}:{},...F?{Cookie:F}:{}},...v?{body:JSON.stringify(v)}:{},timeoutMs:15e3,maxResponseBytes:2*1024*1024});T=await(P?P.wait(G):G),P?.check()}catch(G){if(P?.check(),n.check(k),["ABORTED","OPERATION_TIMEOUT","ACCOUNT_CHANGED"].includes(G?.code))throw G;let Sn=G?.details?.status||G?.status;if(G?.code==="AUTH_FAILED"||Sn===401)return{status:401};throw G?.code==="RATE_LIMITED"||Sn===429?R("RATE_LIMITED"):G?.code==="ACCESS_DENIED"||Sn===403?R("ACCESS_DENIED"):R("UPSTREAM_ERROR")}if(n.check(k),T.status===401)return{status:401};if(T.status===429)throw R("RATE_LIMITED");if(T.status===403)throw R("ACCESS_DENIED");if(T.status<200||T.status>=300)throw R("UPSTREAM_ERROR");let Y;try{let G=typeof T.body=="string"?T.body:new TextDecoder().decode(T.body);if(G.length>2*1024*1024)throw Error();Y=JSON.parse(G)}catch{throw R("UPSTREAM_ERROR")}if(!Y||typeof Y.code!="number")throw R("UPSTREAM_ERROR");if(Y.code!==0)throw R(b?"LOGIN_REQUIRED":"UPSTREAM_ERROR");let tt=b&&A?n.accept(T.headers,k):!1;return{status:T.status,data:Y.data,acceptedAccess:tt}}function x(){if(!n.configured())throw R("LOGIN_REQUIRED")}function g(d,m,v){n.check(d),x(),l(d);let b=i.current;if(v&&b!==v&&b?.version===d)return a(b);let k=b?.settled&&p(b.error)&&!o.has(b);if(!v&&!k&&b?.version===d&&(!b.settled||b.error&&(b.key===m||!n.hasCookies())||m!==null&&b.key===m))return a(b);let A={owner:s,version:d,key:m,settled:!1,error:null,promise:null};return i.current=A,A.promise=(async()=>{let{email:P,password:F}=n.credentials();if(!P||!F)throw R("LOGIN_REQUIRED");let T=await c("/api/auth/login",{method:"POST",body:{email:P,password:F},authenticated:!0,version:d});if(T.status===401)throw R("LOGIN_REQUIRED");if(!T.acceptedAccess||!n.hasCookies())throw R("SESSION_UNAVAILABLE")})(),A.promise.then(()=>{A.settled=!0},P=>{A.settled=!0,A.error=P}),a(A)}function S(){let d=n.version();x(),n.check(d),l(d),n.hasCookies()?i.current?.version===d&&!i.current.settled&&a(i.current):g(d,null)}async function E(d,m=!1){x();let v=n.version();l(v);let b=i.current;if(b?.version===v&&(!b.settled||b.error)&&(m?await g(v,b.key):b.settled||a(b)),!n.hasCookies()){let P=g(v,null);m&&await P}let k=n.header(d),A=await c(d,{authenticated:!0,version:v});if(A.status===401&&((n.header(d)===k||!n.hasCookies())&&await g(v,k),A=await c(d,{authenticated:!0,version:v})),A.status===401)throw R("LOGIN_REQUIRED");return l(v),A.data}async function O(d,m){x();let v=await c(d,{authenticated:!0,acceptCookies:!1,preview:m});if(m?.check(),v.status===401)throw R("LOGIN_REQUIRED");return v.data}function M(d,m){if(d?.id!==m)throw R("UPSTREAM_ERROR");return d}function C(d){if(!Array.isArray(d?.list))throw R("UPSTREAM_ERROR");return d.list.filter(m=>gr(m.id)&&Number.isSafeInteger(m.provider)&&typeof m.title=="string"&&m.title.length<2e3)}function N(d,m){let v=Object.entries(m).filter(([,b])=>b!==void 0&&b!=="").map(([b,k])=>encodeURIComponent(b)+"="+encodeURIComponent(k)).join("&");return E(d+"?"+v).then(b=>{if(!Array.isArray(b?.list)||!b.pagination||!Number.isSafeInteger(b.pagination.page))throw R("UPSTREAM_ERROR");return b})}return{configure:n.configure,prepareSession:S,fingerprint:n.fingerprint,version:n.version,check:n.check,checkAuthentication(){let d=n.version();n.check(d),l(d)},async search({keyword:d,page:m=1}){if(typeof d!="string"||!d.trim()||d.trim().length>50||!Ih(m))throw R("INVALID_INPUT");return N("/api/search/titles",{q:d.trim(),mode:"all",by:"title",page:m})},async browse({mediaType:d=1,page:m=1,sort:v="updated"}){if(![1,2,3,4].includes(d)||!Ih(m)||!["updated","hot","doubanScore"].includes(v))throw R("INVALID_INPUT");return N("/api/titles",{mediaType:d,page:m,sort:v})},async title(d){if(!gr(d))throw R("INVALID_INPUT");return M(await E("/api/titles/"+d),d)},async previewTitle(d,m){if(!gr(d))throw R("INVALID_INPUT");return M(await O("/api/titles/"+d,m),d)},async shares(d){if(!gr(d))throw R("INVALID_INPUT");return C(await E("/api/titles/"+d+"/netdisk-shares"))},async previewShares(d,m){if(!gr(d))throw R("INVALID_INPUT");return C(await O("/api/titles/"+d+"/netdisk-shares",m))},async credential(d){if(!gr(d))throw R("INVALID_INPUT");let m=await E("/api/netdisk-shares/"+d+"/credential",!0);try{let v=new URL(m?.shareURL);if(!["https:","http:"].includes(v.protocol)||v.username||v.password||typeof m.accessCode!="string"||m.accessCode.length>128||/[\x00-\x1f\x7f]/.test(m.accessCode))throw Error()}catch{throw R("INVALID_SHARE")}return{shareURL:m.shareURL,accessCode:m.accessCode}},async account(){return await E("/api/auth/me",!0),!0}}}var _n="miniyingshi:v2:",_h={1:"xunlei",2:"baidu",3:"quark",5:"uc",6:"123",7:"115",8:"tianyi",9:"guangya"},rt=e=>{let t=e.posterURL||e.posterThumbURL||"";return{cover:t,coverUrl:t,posterPath:t,backdropPath:e.backdropURL||t}},Sh=e=>e.mediaType===1?"movie":"tv",Ah=e=>_n+e;function Hy(e){if(typeof e!="string"||!e.startsWith(_n)||!/^[A-Za-z0-9_-]{1,80}$/.test(e.slice(_n.length)))throw R("INVALID_INPUT");return e.slice(_n.length)}function Th({Widget:e,engine:t,now:r=()=>Date.now()}){Zl();let n=ah(e),i=En(e.storage,r),s={current:null};function o(a={}){let c={owner:null,error:null},x=Eh({request:async S=>{if(c.error)throw c.error;let E=await t.request(S,n.request,c.owner);if(c.error)throw c.error;return E},store:e.storage,now:r,session:i,authentication:s}),g=x.configure(a);return t.bind(a),{api:x,scope:c,check:()=>x.check(g)}}function u(a){return{id:"miniyingshi-"+a.id,type:"url",title:a.title,mediaType:Sh(a),year:a.year,season:a.seasonNumber??void 0,releaseDate:a.releaseDate||String(a.year||""),description:[a.year,"\u8FF7\u4F60\u5F71\u89C6 \xB7 \u7F51\u76D8\u8D44\u6E90"].filter(Boolean).join(" \xB7 "),...rt(a),link:Ah(a.id)}}function f(a,c,x,g){let S=!1,E=new Map,O=wh(a),M=a.type==="movie"?"movie":"tv";return{identity:c.fingerprint(),async search(C){if(x.owner=t.owner(),O.conflict||!Gs(a).length||M==="tv"&&(!Number.isSafeInteger(Number(a.season??1))||Number(a.season??1)<1||!Number.isSafeInteger(Number(a.episode))||Number(a.episode)<1))return[];S||(await c.prepareSession(),g(),S=!0);let N=Ks(async(d,m)=>{let v=await c.previewTitle(d.id,m);if(g(),m.check(),!t.matchesSiteTitle(v.title,C))return null;let b=await c.previewShares(v.id,m);return g(),{t:v,shares:b}},{check:g});try{let d=[],m=new Set;for(let A=1;A<=5;A++){let P=await c.search({keyword:C.keyword,page:A});g();let F=P.pagination;if(F.page!==A||!Number.isSafeInteger(F.total)||F.total<0||!Number.isSafeInteger(F.size)||F.size<1||F.total>F.size*5)return[];for(let T of P.list)m.has(T.id)||(m.add(T.id),d.push(T));if(A*F.size>=F.total)break;for(let T of d)t.matchesSiteTitle(T.title,C)&&N.offer(T.id,T)}let v=[];for(let A of d)t.matchesSiteTitle(A.title,C)&&v.push(A);if(v.length>8)return[];await N.close(),g();let b=await Ws(v,async A=>{let P=N.successful(A.id);if(P)return c.checkAuthentication(),P.value;let F=await c.title(A.id);if(g(),!t.matchesSiteTitle(F.title,C))return null;let T=await c.shares(F.id);return g(),{t:F,shares:T}},{check:g,fail:A=>{x.error??(x.error=A)}}),k=[];for(let A of b){if(!A)continue;let{t:P,shares:F}=A;await t.prepareDirectoryIdentity(P.year,C),g();for(let T of F){let Y=_h[T.provider];if(!Y||!t.enabled(Y))continue;let tt=P.title+(M==="tv"?" S"+String(P.seasonNumber??1).padStart(2,"0"):""),G={action:"detail",id:"miniyingshi-share-"+T.id,site:oe,title:tt,poster:rt(P).posterPath,description:P.summary||"",shares:[],siteShare:{id:T.id,provider:Y,year:P.year,season:Number(P.seasonNumber??1),note:T.title}};k.push({id:G.id,cpSiteCardId:P.id,type:"url",title:tt,provider:Y,link:t.encode(G)})}}return k}finally{N.retire(),await N.close(),g()}},async read(C){x.owner=t.owner();let N=t.decode(C.link),d=N?.siteShare;if(!d||!t.enabled(d.provider))return null;if(E.has(d.id))return E.get(d.id);let m=(async()=>{try{let v=await c.credential(d.id);g();let b=t.parseShare({url:v.shareURL,password:v.accessCode,note:d.note});if(!b||b.provider!==d.provider)throw R("INVALID_SHARE");let{siteShare:k,...A}=N;return{...A,shares:[b],verifiedYear:d.year,verifiedSeason:d.season}}catch(v){throw["ACCOUNT_CHANGED","LOGIN_REQUIRED","RATE_LIMITED","INVALID_CONFIG","ACCESS_DENIED","SESSION_UNAVAILABLE","ABORTED","OPERATION_TIMEOUT"].includes(v.code)&&(x.error??(x.error=v)),v}})();return E.set(d.id,m),m}}}async function p(a,c,x,g){let S=await x.shares(a.id);c();let E=new Set,O=[],M,C=new Map;for(let N of S){let d=_h[N.provider];d&&t.enabled(d)&&(C.has(d)||C.set(d,[]),C.get(d).push(N))}if(await Promise.allSettled(Array.from(C,async([N,d])=>{for(let m of d){if(g.error)break;try{let v=await x.credential(m.id);c();let b=t.parseShare({url:v.shareURL,password:v.accessCode,note:m.title});if(!b||b.provider!==N)throw R("INVALID_SHARE");let k=JSON.stringify([b.provider,b.shareId,b.passcode||""]);if(E.has(k))continue;E.add(k);let A={action:"detail",id:"miniyingshi-"+a.id,site:oe,title:a.title,description:a.summary||"",poster:rt(a).posterPath,shares:[b]};O.push(A)}catch(v){if(["ACCOUNT_CHANGED","LOGIN_REQUIRED","RATE_LIMITED","INVALID_CONFIG","ACCESS_DENIED","SESSION_UNAVAILABLE","ABORTED","OPERATION_TIMEOUT"].includes(v.code))throw g.error??(g.error=v),v;M??(M=v)}}})),g.error)throw g.error;if(!O.length&&M)throw M;return O}return{async search(a={}){let{api:c,check:x,scope:g}=o(a);if(["\u767B\u5F55\u68C0\u6D4B","\u4FDD\u5B58\u767B\u5F55"].includes(String(a.keyword||"").trim()))try{return await c.account(),x(),[{id:"miniyingshi-login",type:"url",title:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u767B\u5F55\u6709\u6548",description:"\u7F51\u7AD9\u7F51\u76D8\u5206\u4EAB\u63A5\u53E3\u53EF\u7528\uFF1B\u7F51\u76D8\u8D26\u53F7\u6CBF\u7528\u901A\u7528\u914D\u7F6E\u3002",link:oe}]}catch(E){return[{id:"miniyingshi-login-error",type:"url",title:E.code?E.message:"\u8FF7\u4F60\u5F71\u89C6\uFF1A\u6A21\u5757\u8FD0\u884C\u5931\u8D25",description:E.code||"ERROR",link:oe}]}await c.prepareSession();let S=await c.search({keyword:a.keyword,page:Number(a.page||1)});return x(),S.list.map(u)},async browse(a={}){let{api:c,check:x,scope:g}=o(a);await c.prepareSession();let S=await c.browse({mediaType:Number(a.mediaType||1),page:Number(a.page||1),sort:a.sort||"updated"});return x(),S.list.map(u)},async loadDetail(a){let c=typeof a=="string"?{link:a}:a||{},{api:x,check:g,scope:S}=o(c);if(t.isLink(c.link)){let C=await t.loadDetail(c.link);return g(),C}let E=await x.title(Hy(c.link));g();let O=await p(E,g,x,S);if(!O.length)throw R("NO_SHARES");let M=await t.loadDetail(t.encode({...O[0],shares:O.flatMap(C=>C.shares)}));g();for(let C of M?.episodeItems||[])Object.assign(C,rt(E));return{...M,...rt(E),title:E.title,mediaType:Sh(E),link:Ah(E.id)}},async loadResource(a={}){let{api:c,check:x,scope:g}=o(a);if(t.isLink(a.link)){let E=await t.loadResource(a);return x(),E}let S=await t.loadResource(a,f(a,c,g,x));return x(),S}}}return Uh(My);})();


var MiniInstance;
function miniWidget(){return MiniInstance||(MiniInstance=MiniDiscovery.createMiniWidget({Widget:Widget,engine:MiniPan}));}
async function search(params){return miniWidget().search(params);}
async function browse(params){return miniWidget().browse(params);}
async function loadDetail(input){return miniWidget().loadDetail(input);}
async function loadResource(params){return miniWidget().loadResource(params);}
async function clearRexCatalogCache(){return MiniPan.clear();}

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
// Original metadata header: "{\"id\":\"catpaw.miniyingshi\",\"title\":\"猫 · 迷你影视\",\"author\":\"balge\",\"version\":\"2.2.8\",\"requiredVersion\":\"0.0.1\",\"description\":\"影视搜索、分类与网盘资源。复用全盘的网盘目录、分集匹配、画质和字幕逻辑；分享地址需要网站免费账号。\",\"detailCacheDuration\":1800,\"globalParams\":[{\"name\":\"email\",\"title\":\"网站邮箱（必填）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"password\",\"title\":\"网站密码（必填，仅本机登录使用）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"credentialSource\",\"title\":\"网盘账号来源\",\"type\":\"enumeration\",\"value\":\"shared\",\"enumOptions\":[{\"title\":\"共用账号\",\"value\":\"shared\"},{\"title\":\"仅本模块\",\"value\":\"local\"}]},{\"name\":\"quarkCookie\",\"title\":\"夸克 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"baiduCookie\",\"title\":\"百度 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"cookie115\",\"title\":\"115 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"guangyaAuth\",\"title\":\"光鸭访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 accessToken；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"guangyaRefreshToken\",\"title\":\"光鸭刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refreshToken，用于自动续期；可留空；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"guangyaDeviceId\",\"title\":\"光鸭设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 deviceId；留空使用默认设备号；全部光鸭凭证留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"tianyiCookie\",\"title\":\"天翼 Cookie（留空使用通用配置）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"xunleiAuth\",\"title\":\"迅雷访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 access_token 或 Authorization；自动识别 Web/App；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"xunleiRefreshToken\",\"title\":\"迅雷刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refresh_token，用于自动续期；可留空；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"xunleiDeviceId\",\"title\":\"迅雷设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 device_id；留空优先从令牌读取，否则使用默认设备号；迅雷三项全部留空时使用通用配置\",\"value\":\"\"}]},{\"name\":\"subtitles\",\"title\":\"同版本外挂字幕\",\"type\":\"enumeration\",\"value\":\"auto\",\"enumOptions\":[{\"title\":\"自动（最多 3 条）\",\"value\":\"auto\"},{\"title\":\"关闭\",\"value\":\"off\"}]}],\"search\":{\"title\":\"影视网盘搜索\",\"functionName\":\"search\",\"params\":[{\"name\":\"keyword\",\"title\":\"关键词（输入“登录检测”检查网站账号）\",\"type\":\"input\",\"value\":\"\"},{\"name\":\"page\",\"title\":\"页码\",\"type\":\"page\"}]},\"modules\":[{\"id\":\"loadResource\",\"title\":\"加载网盘资源\",\"functionName\":\"loadResource\",\"type\":\"stream\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"browse\",\"title\":\"影视分类\",\"functionName\":\"browse\",\"cacheDuration\":120,\"params\":[{\"name\":\"mediaType\",\"title\":\"分类\",\"type\":\"enumeration\",\"value\":\"1\",\"enumOptions\":[{\"title\":\"电影\",\"value\":\"1\"},{\"title\":\"剧集\",\"value\":\"2\"},{\"title\":\"动漫\",\"value\":\"3\"},{\"title\":\"综艺\",\"value\":\"4\"}]},{\"name\":\"sort\",\"title\":\"排序\",\"type\":\"enumeration\",\"value\":\"updated\",\"enumOptions\":[{\"title\":\"最近更新\",\"value\":\"updated\"},{\"title\":\"热度\",\"value\":\"hot\"},{\"title\":\"豆瓣评分\",\"value\":\"doubanScore\"}]},{\"name\":\"page\",\"title\":\"页码\",\"type\":\"page\"}]},{\"id\":\"clearRexCatalogCache\",\"title\":\"刷新网盘目录缓存\",\"functionName\":\"clearRexCatalogCache\",\"cacheDuration\":0,\"params\":[]}]}"
const cpBetaModuleListValues=new Map(WidgetMetadata.globalParams.map(p=>[p.name,p.value]));
WidgetMetadata = {"id":"catpaw.miniyingshi","title":"猫 · 迷你影视","author":"balge","version":"2.2.8","requiredVersion":"0.0.1","description":"影视搜索、分类与网盘资源。复用全盘的网盘目录、分集匹配、画质和字幕逻辑；分享地址需要网站免费账号。","detailCacheDuration":1800,"globalParams":[{"name":"email","title":"网站邮箱（必填）","type":"input","value":""},{"name":"password","title":"网站密码（必填，仅本机登录使用）","type":"input","value":""},{"name":"credentialSource","title":"网盘账号来源","type":"enumeration","value":"shared","enumOptions":[{"title":"共用账号","value":"shared"},{"title":"仅本模块","value":"local"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号；共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下光鸭三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","description":"共用账号模式下留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号；共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。","value":""}],"description":"共用账号模式下迅雷三项全部留空使用通用配置；仅本模块模式不回退通用配置。"},{"name":"subtitles","title":"同版本外挂字幕","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（最多 3 条）","value":"auto"},{"title":"关闭","value":"off"}]}],"search":{"title":"影视网盘搜索","functionName":"search","params":[{"name":"keyword","title":"关键词（输入“登录检测”检查网站账号）","type":"input","value":""},{"name":"page","title":"页码","type":"page"}]},"modules":[{"id":"browse","title":"影视分类","functionName":"browse","cacheDuration":120,"params":[{"name":"mediaType","title":"分类","type":"enumeration","value":"1","enumOptions":[{"title":"电影","value":"1"},{"title":"剧集","value":"2"},{"title":"动漫","value":"3"},{"title":"综艺","value":"4"}]},{"name":"sort","title":"排序","type":"enumeration","value":"updated","enumOptions":[{"title":"最近更新","value":"updated"},{"title":"热度","value":"hot"},{"title":"豆瓣评分","value":"doubanScore"}]},{"name":"page","title":"页码","type":"page"}]},{"id":"clearRexCatalogCache","title":"刷新网盘目录缓存","functionName":"clearRexCatalogCache","cacheDuration":0,"params":[]},{"id":"loadResource","title":"加载网盘资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]}]};
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
