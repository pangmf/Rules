var WidgetMetadata = {"id":"catpaw.drive.accounts","title":"猫 · 通用配置","version":"2.2.8","requiredVersion":"0.0.1","author":"balge","detailCacheDuration":1800,"description":"共享网盘配置。光鸭、移动、天翼、迅雷用于全盘搜索和 TG，默认关闭。搜索“保存账号”生效。","globalParams":[{"name":"driveQuarkEnabled","title":"夸克网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","placeholders":[{"title":"填写夸克网页登录 Cookie","value":""}]},{"name":"quarkQuality","title":"夸克画质","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（优先原画）","value":"auto"},{"title":"原画","value":"origin"},{"title":"转码（夸克）","value":"transcode"}]},{"name":"driveBaiduEnabled","title":"百度网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","placeholders":[{"title":"填写百度网页登录 Cookie","value":""}]},{"name":"drive115Enabled","title":"115网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","placeholders":[{"title":"填写 115 网页登录 Cookie","value":""}]},{"name":"driveGuangyaEnabled","title":"光鸭","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken","value":""}]},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空","value":""}]},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号","value":""}]},{"name":"driveTianyiEnabled","title":"天翼云盘","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","placeholders":[{"title":"含 JSESSIONID、COOKIE_LOGIN_USER 的 Cookie","value":""}]},{"name":"driveXunleiEnabled","title":"迅雷","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App","value":""}]},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空","value":""}]},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号","value":""}]},{"name":"driveUcEnabled","title":"UC网盘（免登录）","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"drive123Enabled","title":"123网盘（免登录）","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"driveYidongEnabled","title":"移动网盘（免登录）","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"maxShareCandidates","title":"搜索档位","type":"enumeration","value":"2","enumOptions":[{"title":"均衡（默认）","value":"2"},{"title":"极速","value":"1"},{"title":"优选","value":"3"},{"title":"全面","value":"5"}],"description":"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。"},{"name":"candidateFailureFallback","title":"提取失败候补","type":"enumeration","value":"enabled","enumOptions":[{"title":"开启（默认）","value":"enabled"},{"title":"关闭","value":"disabled"}],"description":"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。"},{"name":"indexTimeoutSeconds","title":"资源匹配超时（秒）","type":"input","value":"10","placeholders":[{"title":"5～30 秒，默认 10","value":""}]},{"name":"resourceCategory","title":"画质分类（仅展示）","type":"enumeration","value":"","enumOptions":[{"title":"8K","value":"8k"},{"title":"4K","value":"4k"},{"title":"1080P","value":"1080p"},{"title":"其他","value":"other"},{"title":"空（按真实分辨率）","value":""}]}],"search":{"title":"通用配置","functionName":"accountStatus","params":[{"name":"keyword","title":"输入“保存账号”保存；其他输入查看状态","type":"input","value":""}]},"modules":[{"id":"saveAccounts","title":"保存／更新共享配置","functionName":"saveAccounts","type":"list","cacheDuration":0,"params":[]},{"id":"clearTransferData","title":"清除转存数据（含对应回收站）","functionName":"clearTransferData","type":"list","cacheDuration":0,"params":[]},{"id":"accountStatus","title":"账号配置状态","functionName":"accountStatus","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionQuark","title":"夸克网盘账号连接测试","functionName":"testDriveConnectionQuark","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionBaidu","title":"百度网盘账号连接测试","functionName":"testDriveConnectionBaidu","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection115","title":"115网盘账号连接测试","functionName":"testDriveConnection115","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionGuangya","title":"光鸭网盘账号连接测试","functionName":"testDriveConnectionGuangya","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionTianyi","title":"天翼网盘账号连接测试","functionName":"testDriveConnectionTianyi","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionXunlei","title":"迅雷网盘账号连接测试","functionName":"testDriveConnectionXunlei","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionUc","title":"UC网盘免登录连接检测","functionName":"testDriveConnectionUc","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection123","title":"123网盘免登录连接检测","functionName":"testDriveConnection123","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionYidong","title":"移动网盘免登录连接检测","functionName":"testDriveConnectionYidong","type":"list","cacheDuration":0,"params":[]}]};
const ACCOUNT_CANDIDATE_LABELS={"1":"极速","2":"均衡","3":"优选","5":"全面"};
var WidgetMetadata = {
  id: "catpaw.drive.accounts", title: "猫 · 通用配置", version: "2.2.8",
  requiredVersion: "0.0.1", author: "balge", detailCacheDuration: 1800,
  description: "共享网盘配置。光鸭、移动、天翼、迅雷用于全盘搜索和 TG，默认关闭。搜索“保存账号”生效。",
  globalParams: [
    {name:"driveQuarkEnabled",title:"夸克网盘",type:"enumeration",value:"enabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]},
    {name:"quarkCookie",title:"夸克 Cookie",type:"input",value:""},
    {name:"quarkQuality",title:"夸克画质",type:"enumeration",value:"auto",enumOptions:[{title:"自动（优先原画）",value:"auto"},{title:"原画",value:"origin"},{title:"转码（夸克）",value:"transcode"}]},
    {name:"driveBaiduEnabled",title:"百度网盘",type:"enumeration",value:"enabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]},
    {name:"baiduCookie",title:"百度 Cookie",type:"input",value:""},
    {name:"drive115Enabled",title:"115网盘",type:"enumeration",value:"enabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]},
    {name:"cookie115",title:"115 Cookie",type:"input",value:""}
  ],
  search: {title:"通用配置",functionName:"accountStatus",params:[{name:"keyword",title:"输入“保存账号”保存；其他输入查看状态",type:"input",value:""}]},
  modules: [
    {id:"saveAccounts",title:"保存／更新共享配置",functionName:"saveAccounts",type:"list",cacheDuration:0,params:[]},
    {id:"accountStatus",title:"账号配置状态",functionName:"accountStatus",type:"list",cacheDuration:0,params:[]}
  ]
};
const ACCOUNT_FIELDS=["quarkCookie","baiduCookie","cookie115","xunleiAuth","guangyaAuth","tianyiCookie"],ACCOUNT_TITLES=["夸克","百度","115","迅雷","光鸭","天翼云盘"];
const ACCOUNT_NAMESPACE="catpaw.drive-accounts.v1",ACCOUNT_KEY="credentials";
const ACCOUNT_DRIVES={"driveQuarkEnabled": "夸克", "driveBaiduEnabled": "百度", "driveUcEnabled": "UC", "drive115Enabled": "115", "drive123Enabled": "123", "driveXunleiEnabled":"迅雷", "driveGuangyaEnabled":"光鸭", "driveYidongEnabled":"移动云盘（免登录）", "driveTianyiEnabled":"天翼云盘"};
const ACCOUNT_NEW_DRIVES=["driveGuangyaEnabled","driveYidongEnabled","driveTianyiEnabled","driveXunleiEnabled"];
function accountDriveValue(key,value){return ["enabled","disabled"].includes(value)?value:ACCOUNT_NEW_DRIVES.includes(key)?"disabled":"enabled";}
function accountDriveTitle(key,title){return title+(title.includes("盘")?"":"网盘");}
const ACCOUNT_CANDIDATES=["1","2","3","5"];
function accountTimeout(value){return typeof value==="string"&&/^(?:[5-9]|[12]\d|30)$/.test(value);}
function accountTimeoutUpdate(params){
 if(!Object.prototype.hasOwnProperty.call(params,"indexTimeoutSeconds"))return {};
 if(!accountTimeout(params.indexTimeoutSeconds))throw new Error("资源匹配超时须为 5～30 秒的整数");
 return {indexTimeoutSeconds:params.indexTimeoutSeconds};
}
const ACCOUNT_CATEGORIES={"8k":"8K","4k":"4K","1080p":"1080P",other:"其他","":"空（按真实分辨率）"};
function readAccounts(){
 try{const value=JSON.parse(Widget.sharedCache.get(ACCOUNT_NAMESPACE,ACCOUNT_KEY)||"null");return value&&value.schemaVersion===1&&Number.isSafeInteger(value.revision)&&value.revision>0&&ACCOUNT_FIELDS.every((k,i)=>(i>=3&&value[k]===undefined)||typeof value[k]==="string"&&!/[\x00-\x1f\x7f]/.test(value[k]))?Object.assign({xunleiAuth:"",guangyaAuth:"",tianyiCookie:""},value):null;}catch(_){return null;}
}
function accountStatus(params={}){
 if(params.keyword==="保存账号")return saveAccounts(params);
 let value=readAccounts();
 const updates=Object.assign(accountDriveUpdates(params),accountTimeoutUpdate(params));
 if(Object.prototype.hasOwnProperty.call(params,"maxShareCandidates")){
  if(!ACCOUNT_CANDIDATES.includes(params.maxShareCandidates))throw new Error("搜索档位无效");
  updates.maxShareCandidates=params.maxShareCandidates;
 }
 if(Object.keys(updates).length){
  if(!value||Object.keys(updates).some(key=>value[key]!==updates[key])){
   const revision=(value?value.revision:0)+1;if(!Number.isSafeInteger(revision))throw new Error("账号版本无效");
   const next=Object.assign({schemaVersion:1,quarkCookie:"",baiduCookie:"",cookie115:"",xunleiAuth:"",guangyaAuth:"",tianyiCookie:"",quarkQuality:"auto",resourceCategory:""},value||{},{revision},updates);
   writeAccounts(next);value=next;
  }
  for(const key of Object.keys(updates))try{Widget.storage.set("accounts:"+key,updates[key]);}catch(_){}
 }
 const category=value&&value.resourceCategory;
 return ACCOUNT_FIELDS.map((key,i)=>({id:key,type:"text",title:ACCOUNT_TITLES[i],description:value&&value[key].trim()?"已配置":"未配置"})).concat({id:"resourceCategory",type:"text",title:"画质分类",description:typeof category==="string"&&Object.prototype.hasOwnProperty.call(ACCOUNT_CATEGORIES,category)?ACCOUNT_CATEGORIES[category]:ACCOUNT_CATEGORIES[""]},{id:"maxShareCandidates",type:"text",title:"搜索档位",description:ACCOUNT_CANDIDATE_LABELS[ACCOUNT_CANDIDATES.includes(value?.maxShareCandidates)?value.maxShareCandidates:"2"]},{id:"indexTimeoutSeconds",type:"text",title:"资源匹配超时",description:(accountTimeout(value?.indexTimeoutSeconds)?value.indexTimeoutSeconds:"10")+" 秒"},...Object.entries(ACCOUNT_DRIVES).map(([key,title])=>({id:key,type:"text",title:accountDriveTitle(key,title),description:accountDriveValue(key,value?.[key])==="disabled"?"禁用":"启用"})));
}
function saveAccounts(params={}){
 params=cpXunleiCredentialParams(cpGuangyaCredentialParams(params));
 if(!params||typeof params!=="object"||Array.isArray(params)||ACCOUNT_FIELDS.some(k=>Object.prototype.hasOwnProperty.call(params,k)&&(typeof params[k]!=="string"||/[\x00-\x1f\x7f]/.test(params[k]))))throw new Error("账号格式无效");
 if(params.xunleiAuth&& !params.xunleiAuth.trim().startsWith('{')&&!/^(?:Bearer\s+)?[A-Za-z0-9._~+/-]+=*$/i.test(params.xunleiAuth.trim()))throw new Error("迅雷请填写 Authorization 或含 refreshToken 的令牌 JSON");
 if(Object.prototype.hasOwnProperty.call(params,"quarkQuality")&&!["auto","origin","transcode"].includes(params.quarkQuality))throw new Error("画质设置无效");
 if(Object.prototype.hasOwnProperty.call(params,"resourceCategory")&&(typeof params.resourceCategory!=="string"||!Object.prototype.hasOwnProperty.call(ACCOUNT_CATEGORIES,params.resourceCategory)))throw new Error("画质分类无效");
 if(Object.prototype.hasOwnProperty.call(params,"maxShareCandidates")&&!ACCOUNT_CANDIDATES.includes(params.maxShareCandidates))throw new Error("搜索档位无效");
 const driveUpdates=accountDriveUpdates(params),timeoutUpdate=accountTimeoutUpdate(params);
 const old=readAccounts(),revision=(old?old.revision:0)+1;if(!Number.isSafeInteger(revision))throw new Error("账号版本无效");
 const next={schemaVersion:1,revision};
 for(const k of ACCOUNT_FIELDS){const incoming=Object.prototype.hasOwnProperty.call(params,k);let saved;try{saved=Widget.storage.get("accounts:"+k);}catch(_){}next[k]=(incoming?params[k]:(saved||old?.[k]||"")).trim();}
 let savedQuality;try{savedQuality=Widget.storage.get("accounts:quarkQuality");}catch(_){}
 const quality=Object.prototype.hasOwnProperty.call(params,"quarkQuality")?params.quarkQuality:savedQuality||old?.quarkQuality;
 next.quarkQuality=["auto","origin","transcode"].includes(quality)?quality:"auto";
 let savedCategory;try{savedCategory=Widget.storage.get("accounts:resourceCategory");}catch(_){}
 const category=Object.prototype.hasOwnProperty.call(params,"resourceCategory")?params.resourceCategory:savedCategory||old?.resourceCategory;
 next.resourceCategory=typeof category==="string"&&Object.prototype.hasOwnProperty.call(ACCOUNT_CATEGORIES,category)?category:"";
 let savedCandidates;try{savedCandidates=Widget.storage.get("accounts:maxShareCandidates");}catch(_){}
 const candidates=Object.prototype.hasOwnProperty.call(params,"maxShareCandidates")?params.maxShareCandidates:savedCandidates||old?.maxShareCandidates;
 next.maxShareCandidates=ACCOUNT_CANDIDATES.includes(candidates)?candidates:"2";
 let savedTimeout;try{savedTimeout=Widget.storage.get("accounts:indexTimeoutSeconds");}catch(_){}
 const timeout=timeoutUpdate.indexTimeoutSeconds||savedTimeout||old?.indexTimeoutSeconds;
 next.indexTimeoutSeconds=accountTimeout(timeout)?timeout:"10";
 for(const key of Object.keys(ACCOUNT_DRIVES)){
  let saved;try{saved=Widget.storage.get("accounts:"+key);}catch(_){}
  const value=Object.prototype.hasOwnProperty.call(driveUpdates,key)?driveUpdates[key]:["enabled","disabled"].includes(saved)?saved:old?.[key];
  next[key]=accountDriveValue(key,value);
 }
 writeAccounts(next);
 for(const key of Object.keys(ACCOUNT_DRIVES))try{Widget.storage.set("accounts:"+key,next[key]);}catch(_){}
 for(const k of ACCOUNT_FIELDS)try{Widget.storage.set("accounts:"+k,next[k]);}catch(_){}
 try{Widget.storage.set("accounts:quarkQuality",next.quarkQuality);}catch(_){}
 try{Widget.storage.set("accounts:resourceCategory",next.resourceCategory);}catch(_){}
 try{Widget.storage.set("accounts:maxShareCandidates",next.maxShareCandidates);}catch(_){}
 try{Widget.storage.set("accounts:indexTimeoutSeconds",next.indexTimeoutSeconds);}catch(_){}
 return accountStatus();
}

function writeAccounts(next){
 try{if(typeof Widget.sharedCache.set!=="function")throw Error();const result=Widget.sharedCache.set(ACCOUNT_NAMESPACE,ACCOUNT_KEY,JSON.stringify(next));if(result&&typeof result.then==="function")throw Error();}catch(_){throw new Error("共享账号保存失败，请更新宿主后重试");}
}

function accountDriveUpdates(params){
 const updates={};
 for(const key of Object.keys(ACCOUNT_DRIVES))if(Object.prototype.hasOwnProperty.call(params,key)){
  if(!["enabled","disabled"].includes(params[key]))throw new Error("网盘开关无效");
  updates[key]=params[key];
 }
 return updates;
}

for(const [provider,label,field] of [["Xunlei","迅雷","xunleiAuth"],["Guangya","光鸭","guangyaAuth"],["Tianyi","天翼云盘","tianyiCookie"]]){
 WidgetMetadata.globalParams.push({name:"drive"+provider+"Enabled",title:label,type:"enumeration",value:"disabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]});
 WidgetMetadata.globalParams.push({name:field,title:label+(provider==="Guangya"?" accessToken":" Cookie"),type:"input",value:"",description:provider==="Tianyi"?"网页登录后的 Cookie（JSESSIONID、COOKIE_LOGIN_USER）。":provider==="Xunlei"?"网页登录 Cookie（含 sessionid）；自动换取和续期访问令牌。":"直接填写 accessToken；也支持 JSON（accessToken、refreshToken、deviceId）。"});
}

WidgetMetadata.globalParams.push({name:"driveYidongEnabled",title:"移动云盘（免登录）",type:"enumeration",value:"disabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}],description:"匿名预览优先，无预览时尝试分享下载。"});

WidgetMetadata.globalParams.push({name:"driveUcEnabled",title:"UC网盘（免登录）",type:"enumeration",value:"enabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]});

WidgetMetadata.globalParams.push({name:"drive123Enabled",title:"123网盘（免登录）",type:"enumeration",value:"enabled",enumOptions:[{title:"启用",value:"enabled"},{title:"禁用",value:"disabled"}]});

WidgetMetadata.globalParams.push(
  {name:"maxShareCandidates",title:"搜索档位",type:"enumeration",value:"2",enumOptions:[2,1,3,5].map(n=>({title:ACCOUNT_CANDIDATE_LABELS[n]+(n===2?"（默认）":""),value:String(n)})),description:"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。"},
  {name:"indexTimeoutSeconds",title:"资源匹配超时（秒）",type:"input",value:"10",description:"5～30 秒，默认 10。到期返回已有线路，无线路则报超时。"},
  {name:"resourceCategory",title:"画质分类（仅展示）",type:"enumeration",value:"",enumOptions:[{title:"8K",value:"8k"},{title:"4K",value:"4k"},{title:"1080P",value:"1080p"},{title:"其他",value:"other"},{title:"空（按真实分辨率）",value:""}]}
);


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

// Keep account credentials ahead of the three anonymous drive switches.
const ACCOUNT_CONFIG_ORDER=["driveQuarkEnabled","quarkCookie","quarkQuality","driveBaiduEnabled","baiduCookie","drive115Enabled","cookie115","driveGuangyaEnabled","guangyaAuth","guangyaRefreshToken","guangyaDeviceId","driveTianyiEnabled","tianyiCookie","driveXunleiEnabled","xunleiAuth","xunleiRefreshToken","xunleiDeviceId","driveUcEnabled","drive123Enabled","driveYidongEnabled"];
for(const param of WidgetMetadata.globalParams){
 if(param.name==="driveYidongEnabled")param.title="移动网盘（免登录）";
}
WidgetMetadata.globalParams.sort((a,b)=>{
 const left=ACCOUNT_CONFIG_ORDER.indexOf(a.name),right=ACCOUNT_CONFIG_ORDER.indexOf(b.name);
 return (left<0?Infinity:left)-(right<0?Infinity:right);
});

if(!WidgetMetadata.globalParams.some(p=>p.name==="candidateFailureFallback"))WidgetMetadata.globalParams.splice(WidgetMetadata.globalParams.findIndex(p=>p.name==="maxShareCandidates")+1,0,{"name":"candidateFailureFallback","title":"提取失败候补","type":"enumeration","value":"enabled","enumOptions":[{"title":"开启（默认）","value":"enabled"},{"title":"关闭","value":"disabled"}],"description":"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。"});
ACCOUNT_DRIVES.candidateFailureFallback="提取失败候补";
const cpFallbackAccountTitleNative=accountDriveTitle;
accountDriveTitle=function(key,title){return key==="candidateFailureFallback"?title:cpFallbackAccountTitleNative(key,title);};

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

/* module-quota-settings-v1 */
for(const [name,description] of Object.entries({"maxShareCandidates":"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。","candidateFailureFallback":"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。"})){const param=WidgetMetadata.globalParams.find(p=>p.name===name);if(param)param.description=description;}

/* Common-settings connection tests */
// Standalone common-settings extension. No save/status/cleanup entry calls.
async function cpDriveConnection(provider,params){
 cpNPInstallNativeHttpErrors();
 const labels={quark:'夸克',baidu:'百度','115':'115',uc:'UC','123':'123',guangya:'光鸭',yidong:'移动',tianyi:'天翼',xunlei:'迅雷'};
 const started=Date.now(),deadline=started+10000;let expired=false,timer;
 const UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0.0.0 Safari/537.36';
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
 function cpError(code){const e=new Error(code);e.code=code;return e;}
 function check(){if(provider==='quark')cpSettingsQuarkCheck();if(['xunlei','guangya'].includes(provider)&&cpBetaXunleiPersist&&String(readAccounts()?.[provider+'Auth']||'')!==cpBetaXunleiConfigured)throw cpError('ACCOUNT_CHANGED');if(expired||Date.now()>=deadline)throw cpError('TIMEOUT');}
 function apiExclusion(data){
  const details=cpNPErrorDetails({data}),text=String(details.code??'')+' '+details.message;
  if(!cpNPAuthExcluded(text))return;
  let code='SERVICE';
  if(/timeout|timed.?out|ETIMEDOUT|超时/i.test(text))code='TIMEOUT';
  else if(/rate.?limit|too many|频繁|限流|captcha/i.test(text))code='LIMIT';
  const error=cpError(code);Object.defineProperty(error,'cause',{value:{data},configurable:true});throw error;
 }
 function statusError(status){throw cpError(status===401?'AUTH':status===403||status===429?'LIMIT':'SERVICE');}
 async function request(method,url,body,headers={}){
  check();let response;
  const options={headers:Object.assign({'User-Agent':UA,Accept:'application/json'},headers),timeout:Math.max(1,deadline-Date.now())};
  try{response=await (method==='OPTIONS'?Widget.http.request({...options,url,method,timeout:options.timeout/1000,allow_redirects:false}):method==='GET'?Widget.http.get(url,options):Widget.http.post(url,typeof body==='string'?body:JSON.stringify(body),{...options,headers:{...options.headers,'Content-Type':'application/json'}}));}
  catch(e){
   check();cpNPLogError('connection '+provider,e);
   const details=cpNPErrorDetails(e),text=String(details.code??'')+' '+details.message;
   let code='NETWORK';
   if(/timeout|timed.?out|ETIMEDOUT|超时/i.test(text))code='TIMEOUT';
   else if(details.status===429||/rate.?limit|too many|频繁|限流|captcha/i.test(text))code='LIMIT';
   else if(cpNPAuthRejected(details.status,details.code,details.message))code='AUTH';
   else if(cpNPAuthExcluded(text))code='SERVICE';
   else if(details.status===403)code='LIMIT';
   else if(details.status>=400)code='SERVICE';
   const failure=cpError(code);Object.defineProperty(failure,'cause',{value:e,configurable:true});throw failure;
  }
  check();if(provider==='quark')cpSettingsQuarkResponse(response);const status=Number(response?.status??response?.statusCode??200);
  if(method==='OPTIONS'){if((response?.status==null&&response?.statusCode==null)||(status!==200&&status!==204))statusError(status);return response;}
  let data=response?.data;
  if(typeof data==='string'){
   try{data=JSON.parse(data);}catch(_){
    if(status!==200)apiExclusion({message:data});
    try{if(provider!=='yidong')throw Error();data=JSON.parse(cpNPYidongDecrypt(data));}catch(_){if(status!==200)statusError(status);throw cpError('SERVICE');}
   }
  }
  if(status!==200){
   apiExclusion(data);
   if(status===400&&data&&typeof data==='object')apiCode(data);
   statusError(status);
  }
  if(!data||typeof data!=='object'||Array.isArray(data))throw cpError('SERVICE');return data;
 }
 function apiCode(data){
  const code=data.error_code??data.errorCode??data.code??data.errno??data.res_code;
  if(data.error||code!==undefined&&![0,200].includes(Number(code))){
   apiExclusion(data);
   if(provider==='guangya'){const failure=cpNPFailure(200,code,[data.error,data.error_description,data.msg,data.message].filter(Boolean).join(' '));throw cpError(failure.code==='AUTH_FAILED'?'AUTH':failure.code==='RATE_LIMITED'?'LIMIT':'SERVICE');}const value=String(data.error||code);
   throw cpError(/^(?:401|-6|99|40101|41017|990009|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired|user_unauthenticated|invalid_grant|unauthenticated|invalid_token|16)$/i.test(value)?'AUTH':/^(?:403|429|412|captcha_required|captcha_invalid|captcha_needed|PERMISSION_DENIED)$/i.test(value)?'LIMIT':'SERVICE');
  }
 }
 async function cpNPJson(_provider,_profile,method,url,body,headers){const data=await request(method,url,body,headers);apiCode(data);return data;}
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
async function cpNPXunleiCaptcha(action,auth,share,profile) {
 const context=cpNPXunleiContext(auth,share),timestamp=String(Date.now());let sign=context.clientId+context.version+context.packageName+context.deviceId+timestamp;
 for(const salt of context.browser?["gYM4fe6xRkcN/9dpGW","H/BFOFqsj3aq6qu8ElOiPwFB","tMApC4Udm/YjjEW9SSB","dO/RvcKBLBb6WCYNhkDwtRkA8Bc/rfW","T8lAmUWKRPJ","q5btU2MBAFfjEmM3piZSRt2uhPwkWuT2","0TJ5KPeq1wKxWa4s2MUdZ2tTDyWTm6lMdkGxQAxT6Wrg","s4BY7Gr2HzrL6EbwKdRds9s+QQNAXMa0R3HZN3Gz","RBLVDve6Rpdb9FmFD90M7r","PpwBrLaMQO"]:share?cpNPXUNLEI_SHARE_SIGN:cpNPXUNLEI_APP_SIGN)sign=cpNPMd5(sign+salt);
 const meta={client_version:context.version,package_name:context.packageName,timestamp,user_id:context.userId,captcha_sign:!share&&context.web&&!context.browser?'1.ee2cef5f061a7cdf4374df81b370d2ec':'1.'+sign};
 const body={client_id:context.clientId,action,device_id:context.deviceId,captcha_token:'',meta};if(share)Object.assign(meta,{username:'',phone_number:'',email:''});else if(!context.web)body.redirect_uri='xlaccsdk01://xunlei.com/callback?state=harbor';
 const headers={'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId};const data=await cpNPJson('xunlei',profile,'POST','https://xluser-ssl.xunlei.com/v1/shield/captcha/init',body,headers);if(!data.captcha_token||data.url)throw cpError('AUTH_FAILED');return Object.assign(headers,{'x-captcha-token':data.captcha_token,'x-client-version':context.version});
}
 function credential(field){
  const v=own(params,field)?params[field]:readAccounts()?.[field]||'';
  if(typeof v!=='string'||/[\x00-\x1f\x7f]/.test(v))throw cpError('CONFIG');return v.trim();
 }
 function authToken(){
  const name=provider+'Auth',group=[name,provider+'RefreshToken',provider+'DeviceId'];
  const incoming=group.some(k=>own(params,k));
  const values=incoming?Object.fromEntries(group.filter(k=>own(params,k)).map(k=>[k,params[k]])):{[name]:credential(name)};
  for(const v of Object.values(values))if(typeof v!=='string'||/[\x00-\x1f\x7f]/.test(v))throw cpError('CONFIG');
  let raw;
  try{const composed=provider==='xunlei'?cpXunleiCredentialParams(values):cpGuangyaCredentialParams(values);raw=String(composed[name]||'').trim();}catch(_){throw cpError('CONFIG');}
  if(!raw)throw cpError('MISSING');let auth;
  try{auth=raw.startsWith('{')?JSON.parse(raw):{accessToken:raw};}catch(_){throw cpError('CONFIG');}
  if(!auth||typeof auth!=='object'||Array.isArray(auth))throw cpError('CONFIG');
  const session=auth.appSession||auth.webSession;
  if(session){if(typeof session!=='object'||Array.isArray(session))throw cpError('CONFIG');auth={...auth,...session,clientKind:auth.clientKind||(auth.appSession?'app':'web')};}
  const h=auth.headers||{};
  auth={...auth,accessToken:auth.accessToken||auth.access_token||auth.authorization||auth.auth||h.Authorization||h.authorization||'',refreshToken:auth.refreshToken||auth.refresh_token||'',deviceId:auth.deviceId||auth.device_id||''};
  for(const k of ['accessToken','refreshToken','deviceId'])if(typeof auth[k]!=='string'||/[\x00-\x1f\x7f]/.test(auth[k]))throw cpError('CONFIG');
  auth.accessToken=auth.accessToken.replace(/^Bearer\s+/i,'').trim();
  if(!auth.accessToken&&!auth.refreshToken)throw cpError('MISSING');
  if(auth.accessToken&&!/^[A-Za-z0-9._~+/-]+=*$/.test(auth.accessToken))throw cpError('CONFIG');
  return auth;
 }
 async function refresh(auth){
  if(['xunlei','guangya'].includes(provider)){if(cpBetaXunleiPersist&&typeof Widget.sharedCache?.set!=='function')throw cpError('SERVICE');return provider==='xunlei'?cpNPRefreshXunleiAuth(null):cpNPRefreshGuangyaAuth(null);}
  if(!auth.refreshToken)throw cpError('AUTH');let data;
  if(provider==='guangya'){
   const id=auth.deviceId||'0123456789abcdef0123456789abcdef';
   data=await cpNPJson(provider,null,'POST','https://account.guangyapan.com/v1/auth/token',{client_id:'aMe-8VSlkrbQXpUR',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'X-Client-Id':'aMe-8VSlkrbQXpUR','X-Client-Version':'0.0.1','X-Device-Id':id,'X-Device-Model':'chrome%2F147.0.0.0','X-Device-Name':'PC-Chrome','X-Device-Sign':'wdi10.'+id+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','X-Net-Work-Type':'NONE','X-OS-Version':'Win32','X-Platform-Version':'1','X-Protocol-Version':'301','X-Provider-Name':'NONE','X-SDK-Version':'9.0.2'});
  }
  else{const c=cpNPXunleiContext(auth,false);data=await cpNPJson(provider,null,'POST','https://xluser-ssl.xunlei.com/v1/auth/token',{client_id:c.clientId,client_secret:c.web?'Qbaferw2knfQKqxa25EYJGtZ2_6755CMwzXBN3ctW54':'Xp6vsy4tN9toTVdMSpomVdXpRmES',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'User-Agent':c.userAgent,'x-client-id':c.clientId,'x-device-id':c.deviceId});}
  const token=data.access_token||data.accessToken||data.data?.accessToken;
  if(typeof token!=='string'||!token||! /^[A-Za-z0-9._~+/-]+=*$/.test(token))throw cpError('AUTH');return {...auth,accessToken:token};
 }
 async function tokenProbe(auth){
  if(!auth.accessToken||cpNPPanTokenExpired(auth))auth=await refresh(auth);
  if(provider==='guangya'){
   const d=await cpNPJson(provider,null,'POST','https://api.guangyapan.com/userres/v1/file/get_file_list',{parentId:'',page:1,pageSize:200,orderBy:3,sortType:1,fileTypes:[]},cpNPGuangyaHeaders(auth));
   if(!Array.isArray(d.data?.list)&&!(d.msg==='success'&&d.data&&typeof d.data==='object'&&!Array.isArray(d.data)&&(Object.keys(d.data).length===0||Number.isSafeInteger(d.data.total)&&d.data.total>=0)))throw cpError('SERVICE');
  }else{
   let headers;try{headers=await cpNPXunleiCaptcha('GET:drive/v1/files',auth,false,null);}catch(e){if(e.code==='AUTH_FAILED')throw cpError('LIMIT');throw e;}
   const d=await cpNPJson(provider,null,'GET','https://api-pan.xunlei.com/drive/v1/files?parent_id=&limit=1',null,{...headers,Authorization:'Bearer '+auth.accessToken});
   if(!Array.isArray(d.files))throw cpError('SERVICE');
  }
 }

/* Beta Xunlei shared renewal adapter */
const cpNPRefreshes=cpBetaXunleiRefreshes;
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
// Adapter for the common-settings entry. Reuses the playback refresh lifecycle.
// The configured credential remains the identity; rotated tokens live separately.
let cpBetaXunleiRaw='',cpBetaXunleiConfigured='',cpBetaXunleiKey='',cpBetaXunleiPersist=false;
function cpBetaXunleiAuth(){
 const validated=authToken(),field=provider+'Auth',fields=[field,provider+'RefreshToken',provider+'DeviceId'];
 cpBetaXunleiConfigured=String(readAccounts()?.[field]||'');
 const incoming=fields.some(k=>own(params,k));
 const compose=provider==='xunlei'?cpXunleiCredentialParams:cpGuangyaCredentialParams;
 cpBetaXunleiRaw=incoming?String(compose(Object.fromEntries(fields.filter(k=>own(params,k)).map(k=>[k,params[k]])))[field]||''):cpBetaXunleiConfigured;
 cpBetaXunleiPersist=!!cpBetaXunleiConfigured&&cpBetaXunleiRaw===cpBetaXunleiConfigured;
 cpBetaXunleiKey=provider+':'+baiduSha1(cpBetaXunleiRaw);
 // Credential validation above also applies to unsaved entry parameters.
 if(!cpBetaXunleiPersist)cpBetaXunleiRaw=JSON.stringify(validated);
 return cpNPReadAuth(provider);
}
function cpNPGuard(){check();if(cpBetaXunleiPersist&&String(readAccounts()?.[provider+'Auth']||'')!==cpBetaXunleiConfigured)throw cpError('ACCOUNT_CHANGED');}
function cpNewPanIdentity(){return cpBetaXunleiPersist?baiduSha1(String(readAccounts()?.[provider+'Auth']||'')):cpBetaXunleiKey.slice(provider.length+1);}
function cpNewPanAuthValue(){
 if(cpBetaXunleiPersist){try{const entry=JSON.parse(Widget.sharedCache?.get('catpaw.drive-auth.v1',cpBetaXunleiKey)||'null');if(typeof entry?.auth==='string')return entry.auth;}catch(_){}}
 return cpBetaXunleiRaw;
}
function cpNewPanCommitSession(provider,raw,previous,identity){
 cpNPIdentityGuard(provider,identity);
 const current=cpNewPanAuthValue();if(current!==previous)return current;
 if(cpBetaXunleiPersist){
  if(typeof Widget.sharedCache?.set!=='function')throw cpError('UPSTREAM_ERROR');
  try{Widget.sharedCache.set('catpaw.drive-auth.v1',cpBetaXunleiKey,JSON.stringify({auth:raw}));}catch(_){throw cpError('UPSTREAM_ERROR');}
 }else cpBetaXunleiRaw=raw;
 return raw;
}

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
let cpSettingsQuarkConfigured='',cpSettingsQuarkKey='',cpSettingsQuarkPersist=false,cpSettingsQuarkPrevious='';
function cpSettingsQuarkRead(){
 try{return cpQuarkSessionCookie(JSON.parse(Widget.sharedCache?.get('catpaw.drive-auth.v1',cpSettingsQuarkKey)||'null'));}catch(_){return '';}
}
function cpSettingsQuarkCookie(cookie){
 cpSettingsQuarkConfigured=String(readAccounts()?.quarkCookie||'').trim();
 cpSettingsQuarkPersist=!!cookie&&cookie===cpSettingsQuarkConfigured;
 cpSettingsQuarkKey='quark:'+baiduSha1(cookie);
 cpSettingsQuarkPrevious=cpSettingsQuarkPersist?cpSettingsQuarkRead()||cookie:cookie;
 return cpSettingsQuarkPrevious;
}
function cpSettingsQuarkCheck(){
 if(cpSettingsQuarkPersist&&String(readAccounts()?.quarkCookie||'').trim()!==cpSettingsQuarkConfigured)throw cpError('ACCOUNT_CHANGED');
}
function cpSettingsQuarkResponse(response){
 if(!cpSettingsQuarkPersist)return;cpSettingsQuarkCheck();
 const current=cpSettingsQuarkRead()||cpSettingsQuarkConfigured;
 if(current!==cpSettingsQuarkPrevious)return;
 const cookie=cpQuarkResponseCookie(cpSettingsQuarkPrevious,response);
 if(!cookie||cookie===cpSettingsQuarkPrevious)return;
 try{Widget.sharedCache?.set('catpaw.drive-auth.v1',cpSettingsQuarkKey,JSON.stringify({cookie}));}catch(_){}
}

function cpNPNativeFailure(error){
 const details=cpNPErrorDetails(error);let failure;
 try{failure=cpNPFailure(details.status,details.code,details.message);}catch(normalized){failure=normalized;}
 Object.defineProperty(failure,'cause',{value:error,configurable:true});
 cpNPLogError('HTTP request failed',failure);
 return failure;
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
 if((!Number.isFinite(status)||status===0)&&!cpNPAuthRejected(status,code,message))throw cpError(/timeout|timed.?out|ETIMEDOUT/i.test(String(message||''))?'TIMEOUT':'NETWORK');const n=Number(code),text=String(code??'')+' '+String(message||'');
 const kind=status===429||n===429||/rate.?limit|too many|频繁|限流/i.test(text)?'RATE_LIMITED':
 cpNPAuthRejected(status,code,message)||status===403||/captcha_invalid|captcha_required/i.test(text)?'AUTH_FAILED':'UPSTREAM_ERROR';
 const error=cpError(kind);error.status=status;error.apiCode=code;return error;
}
function cpNPIdentityGuard(provider,identity){if(cpNewPanIdentity(provider)!==identity)throw cpError('ACCOUNT_CHANGED');}
async function cpNPRefreshRequest(provider,profile,url,body,headers,previous,identity,update){
 cpNPInstallNativeHttpErrors();
 cpNPGuard(provider,profile);
 const work=async()=>{
  cpNPGuard(provider,profile);
  let response;
  // A consumed one-use refresh must retain its successful rotation for the same
  // configured drive, even if this owner expires. Use the bounded raw transport;
  // the pool and individual waiter still fence every resource continuation.
  try{const options={timeout:15000,headers:Object.assign({'User-Agent':UA,'Content-Type':'application/json'},headers||{})};response=await (typeof cpResourceRequest==='function'?cpResourceRequest('post',url,JSON.stringify(body),options):Widget.http.post(url,JSON.stringify(body),options));}
  catch(error){cpNPIdentityGuard(provider,identity);if(['ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error?.code))throw error;throw cpNPNativeFailure(error);}
  cpNPIdentityGuard(provider,identity);
  const status=Number(response&&(response.status||response.statusCode)||200);
  let data=response&&response.data;try{if(typeof data==='string')data=JSON.parse(data);}catch(_){throw cpError('UPSTREAM_ERROR');}
  const code=data&&(data.error_code??data.errorCode??data.code);
  if(status>=400||!data||typeof data!=='object'||data.error||(code!==undefined&&![0,200].includes(Number(code))))throw cpNPFailure(status,code,data&&[data.error,data.error_description,data.msg,data.message].filter(Boolean).join(' '));
  const auth=update(data);cpNPIdentityGuard(provider,identity);
  cpNewPanCommitSession(provider,JSON.stringify(auth),previous,identity);
  cpNPIdentityGuard(provider,identity);return cpNPReadAuth(provider);
 };
 return typeof cpQueueCatalogRead==='function'?cpQueueCatalogRead(provider,work):work();
}
async function cpNPRefreshAuth(provider,profile,work,restarted=false){
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
 try {const renewed=await job.promise;if(!cpBetaXunleiPersist)cpBetaXunleiRaw=JSON.stringify(renewed);}
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
async function cpNPDoRefreshXunleiAuth(profile,identity) {
 const provider='xunlei';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const context=cpNPXunleiContext(auth,false);
 return cpNPRefreshRequest(provider,profile,'https://xluser-ssl.xunlei.com/v1/auth/token',{client_id:context.clientId,client_secret:context.browser?undefined:context.web?'Qbaferw2knfQKqxa25EYJGtZ2_6755CMwzXBN3ctW54':'Xp6vsy4tN9toTVdMSpomVdXpRmES',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId},previous,identity,data=>{
  if(!data.access_token)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token,refreshToken:data.refresh_token||auth.refreshToken,userId:data.user_id||context.userId,deviceId:context.deviceId,clientId:context.clientId});
 });
}
function cpNPRefreshGuangyaAuth(profile){return cpNPRefreshAuth('guangya',profile,identity=>cpNPDoRefreshGuangyaAuth(profile,identity));}
async function cpNPDoRefreshGuangyaAuth(profile,identity) {
 const provider='guangya';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const id=auth.deviceId||'0123456789abcdef0123456789abcdef';
 const headers={'X-Client-Id':'aMe-8VSlkrbQXpUR','X-Client-Version':'0.0.1','X-Device-Id':id,'X-Device-Model':'chrome%2F147.0.0.0','X-Device-Name':'PC-Chrome','X-Device-Sign':'wdi10.'+id+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','X-Net-Work-Type':'NONE','X-OS-Version':'Win32','X-Platform-Version':'1','X-Protocol-Version':'301','X-Provider-Name':'NONE','X-SDK-Version':'9.0.2'};
 return cpNPRefreshRequest(provider,profile,'https://account.guangyapan.com/v1/auth/token',{client_id:'aMe-8VSlkrbQXpUR',grant_type:'refresh_token',refresh_token:auth.refreshToken},headers,previous,identity,data=>{
  if(!data.access_token&&!data.accessToken)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token||data.accessToken,refreshToken:data.refresh_token||data.refreshToken||auth.refreshToken,deviceId:data.device_id||data.deviceId||id});
 });
}
 async function work(){
  if(!params||typeof params!=='object'||Array.isArray(params)||params.then)throw cpError('CONFIG');
  if(['guangya','xunlei'].includes(provider)){
   const auth=cpBetaXunleiAuth();try{await tokenProbe(auth);}catch(e){if(e.code!=='AUTH'||!auth.refreshToken||!auth.accessToken||cpNPPanTokenExpired(auth))throw e;await tokenProbe(await refresh(auth));}return false;
  }
  if(['uc','123','yidong'].includes(provider)){
   let d;
   if(provider==='uc'){
    // A fake share produces HTTP 404. Rex's native bridge may reject it without
    // preserving status/body, so probe the same API with a successful CORS preflight.
    d=await request('OPTIONS','https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?pr=UCBrowser&fr=pc',null,{Origin:'https://drive.uc.cn','Access-Control-Request-Method':'POST','Access-Control-Request-Headers':'content-type'});
    const headers=Object.fromEntries(Object.entries(d.headers||{}).map(([k,v])=>[k.toLowerCase(),Array.isArray(v)?v.join(','):String(v)]));
    if(!['https://drive.uc.cn','*'].includes(headers['access-control-allow-origin'])||!String(headers['access-control-allow-methods']||'').split(',').some(m=>m.trim().toUpperCase()==='POST'))throw cpError('SERVICE');
    return true;
   }
   if(provider==='123'){d=await request('GET','https://www.123684.com/b/api/share/get?shareKey=000000000000',null,{Referer:'https://www.123pan.cn/'});if(typeof d.code!=='number'||typeof d.message!=='string')throw cpError('SERVICE');}
   if(provider==='yidong'){
    const payload={getOutLinkInfoReq:{account:'',linkID:'000000000000',passwd:'',caSrt:0,coSrt:0,srtDr:1,bNum:1,pCaID:'root',eNum:1},commonAccountInfo:{account:'',accountType:1}};
    d=await request('POST',cpNPYIDONG_API+'getOutLinkInfoV6',cpNPYidongEncrypt(payload),cpNPYidongHeaders(payload,false));d=d.result||d;
    if(!/^[0-9A-Z_-]+$/i.test(String(d.resultCode??d.code??d.mcsCode??'')))throw cpError('SERVICE');
   }
   const code=Number(d.code??d.resultCode);if([403,429].includes(code))throw cpError('LIMIT');if(code>=500&&code<600)throw cpError('SERVICE');return true;
  }
  const field={quark:'quarkCookie',baidu:'baiduCookie','115':'cookie115',tianyi:'tianyiCookie'}[provider],cookie=provider==='quark'?cpSettingsQuarkCookie(credential(field)):credential(field);
  if(!cookie)throw cpError('MISSING');let d;
  if(provider==='quark'){
   d=await request('GET','https://drive-pc.quark.cn/1/clouddrive/file/sort?pr=ucpro&fr=pc&pdir_fid=0&_page=1&_size=1',null,{Cookie:cookie,Referer:'https://pan.quark.cn/'});apiCode(d);if(d.status!==200||!Array.isArray(d.data?.list))throw cpError('SERVICE');
  }else if(provider==='baidu'){
   d=await request('GET','https://mbd.baidu.com/userx/v1/info/get?appname=baiduboxapp&fields=%5B%22uid%22%5D',null,{Cookie:cookie,Referer:'https://pan.baidu.com/'});apiCode(d);const uid=d.data?.fields?.uid;if(!uid||uid==='default_uid')throw cpError('AUTH');
  }else if(provider==='115'){
   d=await request('GET','https://webapi.115.com/files?aid=1&cid=0&limit=1&offset=0&format=json',null,{Cookie:cookie,Referer:'https://115.com/'});apiCode(d);if(d.state===false)throw cpError('AUTH');if(d.state!==true||!Array.isArray(d.data))throw cpError('SERVICE');
  }else{
   d=await request('GET','https://m.cloud.189.cn/v2/getUserBriefInfo.action',null,{Cookie:cookie});apiCode(d);if(typeof (d.data||d).sessionKey!=='string'||!(d.data||d).sessionKey)throw cpError('AUTH');
  }
  return false;
 }
 try{
  const task=work();let anonymous;
  if(typeof setTimeout==='function')anonymous=await Promise.race([task,new Promise((_,reject)=>{timer=setTimeout(()=>{expired=true;reject(cpError('TIMEOUT'));},Math.max(0,deadline-Date.now()));})]);else anonymous=await task;
  return [{id:'drive-connection-'+provider,type:'text',title:labels[provider]+' · '+(anonymous?'接口可达':'连接成功'),description:(anonymous?(provider==='uc'?'免登录接口预检通过；未验证具体分享可用性。':'免登录接口；未验证具体分享可用性。'):'账号验证通过。')+'耗时 '+Math.max(0,Date.now()-started)+' 毫秒。'}];
 }catch(e){
  cpNPLogError('connection '+provider,e);
  e={code:({AUTH_FAILED:'AUTH',UPSTREAM_ERROR:'SERVICE',RATE_LIMITED:'LIMIT',OPERATION_TIMEOUT:'TIMEOUT',ACCOUNT_CHANGED:'CONFIG'})[e?.code]||e?.code};const messages={MISSING:'未配置',CONFIG:'配置格式无效',AUTH:'登录失效',LIMIT:'请求受限',TIMEOUT:'请求超时',SERVICE:'服务异常',NETWORK:'网络异常'};
  return [{id:'drive-connection-'+provider,type:'text',title:labels[provider]+' · '+(messages[e?.code]||'服务异常'),description:'耗时 '+Math.max(0,Date.now()-started)+' 毫秒。'+({MISSING:'请填写该网盘凭据。',CONFIG:'请检查该网盘凭据格式。',AUTH:'请更新该网盘登录凭据。',LIMIT:'请稍后重试，或在网盘中完成安全验证。'}[e?.code]||'请稍后重试。')}];
 }finally{expired=true;if(timer!==undefined&&typeof clearTimeout==='function')clearTimeout(timer);}
}
async function testDriveConnectionQuark(params={}){return cpDriveConnection('quark',params);}
async function testDriveConnectionBaidu(params={}){return cpDriveConnection('baidu',params);}
async function testDriveConnection115(params={}){return cpDriveConnection('115',params);}
async function testDriveConnectionUc(params={}){return cpDriveConnection('uc',params);}
async function testDriveConnection123(params={}){return cpDriveConnection('123',params);}
async function testDriveConnectionGuangya(params={}){return cpDriveConnection('guangya',params);}
async function testDriveConnectionYidong(params={}){return cpDriveConnection('yidong',params);}
async function testDriveConnectionTianyi(params={}){return cpDriveConnection('tianyi',params);}
async function testDriveConnectionXunlei(params={}){return cpDriveConnection('xunlei',params);}

WidgetMetadata.modules.push(...[{"id":"testDriveConnectionQuark","title":"夸克网盘连接测试","functionName":"testDriveConnectionQuark","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionBaidu","title":"百度网盘连接测试","functionName":"testDriveConnectionBaidu","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection115","title":"115网盘连接测试","functionName":"testDriveConnection115","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionUc","title":"UC网盘连接测试","functionName":"testDriveConnectionUc","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection123","title":"123网盘连接测试","functionName":"testDriveConnection123","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionGuangya","title":"光鸭网盘连接测试","functionName":"testDriveConnectionGuangya","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionYidong","title":"移动网盘连接测试","functionName":"testDriveConnectionYidong","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionTianyi","title":"天翼网盘连接测试","functionName":"testDriveConnectionTianyi","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionXunlei","title":"迅雷网盘连接测试","functionName":"testDriveConnectionXunlei","type":"list","cacheDuration":0,"params":[]}]);

/* Beta Xunlei refresh coalescing */
const cpBetaXunleiRefreshes=new Map();

/* CatPaw Beta module list overlay v1 */
// Original metadata header: "{\"id\":\"catpaw.drive.accounts\",\"title\":\"猫 · 通用配置\",\"version\":\"2.2.8\",\"requiredVersion\":\"0.0.1\",\"author\":\"balge\",\"detailCacheDuration\":1800,\"description\":\"共享网盘配置。光鸭、移动、天翼、迅雷用于全盘搜索和 TG，默认关闭。搜索“保存账号”生效。\",\"globalParams\":[{\"name\":\"driveQuarkEnabled\",\"title\":\"夸克网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"quarkCookie\",\"title\":\"夸克 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写夸克网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"quarkQuality\",\"title\":\"夸克画质\",\"type\":\"enumeration\",\"value\":\"auto\",\"enumOptions\":[{\"title\":\"自动（优先原画）\",\"value\":\"auto\"},{\"title\":\"原画\",\"value\":\"origin\"},{\"title\":\"转码（夸克）\",\"value\":\"transcode\"}]},{\"name\":\"driveBaiduEnabled\",\"title\":\"百度网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"baiduCookie\",\"title\":\"百度 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写百度网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"drive115Enabled\",\"title\":\"115网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"cookie115\",\"title\":\"115 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 115 网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"driveGuangyaEnabled\",\"title\":\"光鸭\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"guangyaAuth\",\"title\":\"光鸭访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 accessToken\",\"value\":\"\"}]},{\"name\":\"guangyaRefreshToken\",\"title\":\"光鸭刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refreshToken，用于自动续期；可留空\",\"value\":\"\"}]},{\"name\":\"guangyaDeviceId\",\"title\":\"光鸭设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 deviceId；留空使用默认设备号\",\"value\":\"\"}]},{\"name\":\"driveTianyiEnabled\",\"title\":\"天翼云盘\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"tianyiCookie\",\"title\":\"天翼 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"含 JSESSIONID、COOKIE_LOGIN_USER 的 Cookie\",\"value\":\"\"}]},{\"name\":\"driveXunleiEnabled\",\"title\":\"迅雷\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"xunleiAuth\",\"title\":\"迅雷访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 access_token 或 Authorization；自动识别 Web/App\",\"value\":\"\"}]},{\"name\":\"xunleiRefreshToken\",\"title\":\"迅雷刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refresh_token，用于自动续期；可留空\",\"value\":\"\"}]},{\"name\":\"xunleiDeviceId\",\"title\":\"迅雷设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 device_id；留空优先从令牌读取，否则使用默认设备号\",\"value\":\"\"}]},{\"name\":\"driveUcEnabled\",\"title\":\"UC网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"drive123Enabled\",\"title\":\"123网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"driveYidongEnabled\",\"title\":\"移动网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"maxShareCandidates\",\"title\":\"搜索档位\",\"type\":\"enumeration\",\"value\":\"2\",\"enumOptions\":[{\"title\":\"均衡（默认）\",\"value\":\"2\"},{\"title\":\"极速\",\"value\":\"1\"},{\"title\":\"优选\",\"value\":\"3\"},{\"title\":\"全面\",\"value\":\"5\"}],\"description\":\"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。\"},{\"name\":\"candidateFailureFallback\",\"title\":\"提取失败候补\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"开启（默认）\",\"value\":\"enabled\"},{\"title\":\"关闭\",\"value\":\"disabled\"}],\"description\":\"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。\"},{\"name\":\"indexTimeoutSeconds\",\"title\":\"资源匹配超时（秒）\",\"type\":\"input\",\"value\":\"10\",\"placeholders\":[{\"title\":\"5～30 秒，默认 10\",\"value\":\"\"}]},{\"name\":\"resourceCategory\",\"title\":\"画质分类（仅展示）\",\"type\":\"enumeration\",\"value\":\"\",\"enumOptions\":[{\"title\":\"8K\",\"value\":\"8k\"},{\"title\":\"4K\",\"value\":\"4k\"},{\"title\":\"1080P\",\"value\":\"1080p\"},{\"title\":\"其他\",\"value\":\"other\"},{\"title\":\"空（按真实分辨率）\",\"value\":\"\"}]}],\"search\":{\"title\":\"通用配置\",\"functionName\":\"accountStatus\",\"params\":[{\"name\":\"keyword\",\"title\":\"输入“保存账号”保存；其他输入查看状态\",\"type\":\"input\",\"value\":\"\"}]},\"modules\":[{\"id\":\"saveAccounts\",\"title\":\"保存／更新共享配置\",\"functionName\":\"saveAccounts\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"accountStatus\",\"title\":\"账号配置状态\",\"functionName\":\"accountStatus\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionQuark\",\"title\":\"夸克网盘连接测试\",\"functionName\":\"testDriveConnectionQuark\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionBaidu\",\"title\":\"百度网盘连接测试\",\"functionName\":\"testDriveConnectionBaidu\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnection115\",\"title\":\"115网盘连接测试\",\"functionName\":\"testDriveConnection115\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionUc\",\"title\":\"UC网盘连接测试\",\"functionName\":\"testDriveConnectionUc\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnection123\",\"title\":\"123网盘连接测试\",\"functionName\":\"testDriveConnection123\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionGuangya\",\"title\":\"光鸭网盘连接测试\",\"functionName\":\"testDriveConnectionGuangya\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionYidong\",\"title\":\"移动网盘连接测试\",\"functionName\":\"testDriveConnectionYidong\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionTianyi\",\"title\":\"天翼网盘连接测试\",\"functionName\":\"testDriveConnectionTianyi\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionXunlei\",\"title\":\"迅雷网盘连接测试\",\"functionName\":\"testDriveConnectionXunlei\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]}]}"
const cpBetaModuleListValues=new Map(WidgetMetadata.globalParams.map(p=>[p.name,p.value]));
WidgetMetadata = {"id":"catpaw.drive.accounts","title":"猫 · 通用配置","version":"2.2.8","requiredVersion":"0.0.1","author":"balge","detailCacheDuration":1800,"description":"共享网盘配置。光鸭、移动、天翼、迅雷用于全盘搜索和 TG，默认关闭。搜索“保存账号”生效。","globalParams":[{"name":"driveQuarkEnabled","title":"夸克网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"quarkCookie","title":"夸克 Cookie","type":"input","value":"","placeholders":[{"title":"填写夸克网页登录 Cookie","value":""}]},{"name":"quarkQuality","title":"夸克画质","type":"enumeration","value":"auto","enumOptions":[{"title":"自动（优先原画）","value":"auto"},{"title":"原画","value":"origin"},{"title":"转码（夸克）","value":"transcode"}]},{"name":"driveBaiduEnabled","title":"百度网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"baiduCookie","title":"百度 Cookie","type":"input","value":"","placeholders":[{"title":"填写百度网页登录 Cookie","value":""}]},{"name":"drive115Enabled","title":"115网盘","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"cookie115","title":"115 Cookie","type":"input","value":"","placeholders":[{"title":"填写 115 网页登录 Cookie","value":""}]},{"name":"driveGuangyaEnabled","title":"光鸭","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"guangyaAuth","title":"光鸭访问令牌","type":"input","value":"","placeholders":[{"title":"填写 accessToken","value":""}]},{"name":"guangyaRefreshToken","title":"光鸭刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refreshToken，用于自动续期；可留空","value":""}]},{"name":"guangyaDeviceId","title":"光鸭设备号","type":"input","value":"","placeholders":[{"title":"填写 deviceId；留空使用默认设备号","value":""}]},{"name":"driveTianyiEnabled","title":"天翼云盘","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"tianyiCookie","title":"天翼 Cookie","type":"input","value":"","placeholders":[{"title":"含 JSESSIONID、COOKIE_LOGIN_USER 的 Cookie","value":""}]},{"name":"driveXunleiEnabled","title":"迅雷","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"xunleiAuth","title":"迅雷访问令牌","type":"input","value":"","placeholders":[{"title":"填写 access_token 或 Authorization；自动识别 Web/App","value":""}]},{"name":"xunleiRefreshToken","title":"迅雷刷新令牌","type":"input","value":"","placeholders":[{"title":"填写 refresh_token，用于自动续期；可留空","value":""}]},{"name":"xunleiDeviceId","title":"迅雷设备号","type":"input","value":"","placeholders":[{"title":"填写 device_id；留空优先从令牌读取，否则使用默认设备号","value":""}]},{"name":"driveUcEnabled","title":"UC网盘（免登录）","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"drive123Enabled","title":"123网盘（免登录）","type":"enumeration","value":"enabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"driveYidongEnabled","title":"移动网盘（免登录）","type":"enumeration","value":"disabled","enumOptions":[{"title":"启用","value":"enabled"},{"title":"禁用","value":"disabled"}]},{"name":"maxShareCandidates","title":"搜索档位","type":"enumeration","value":"2","enumOptions":[{"title":"均衡（默认）","value":"2"},{"title":"极速","value":"1"},{"title":"优选","value":"3"},{"title":"全面","value":"5"}],"description":"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。"},{"name":"candidateFailureFallback","title":"提取失败候补","type":"enumeration","value":"enabled","enumOptions":[{"title":"开启（默认）","value":"enabled"},{"title":"关闭","value":"disabled"}],"description":"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。"},{"name":"indexTimeoutSeconds","title":"资源匹配超时（秒）","type":"input","value":"10","placeholders":[{"title":"5～30 秒，默认 10","value":""}]},{"name":"resourceCategory","title":"画质分类（仅展示）","type":"enumeration","value":"","enumOptions":[{"title":"8K","value":"8k"},{"title":"4K","value":"4k"},{"title":"1080P","value":"1080p"},{"title":"其他","value":"other"},{"title":"空（按真实分辨率）","value":""}]}],"search":{"title":"通用配置","functionName":"accountStatus","params":[{"name":"keyword","title":"输入“保存账号”保存；其他输入查看状态","type":"input","value":""}]},"modules":[{"id":"saveAccounts","title":"保存／更新共享配置","functionName":"saveAccounts","type":"list","cacheDuration":0,"params":[]},{"id":"accountStatus","title":"账号配置状态","functionName":"accountStatus","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionQuark","title":"夸克网盘账号连接测试","functionName":"testDriveConnectionQuark","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionBaidu","title":"百度网盘账号连接测试","functionName":"testDriveConnectionBaidu","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection115","title":"115网盘账号连接测试","functionName":"testDriveConnection115","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionGuangya","title":"光鸭网盘账号连接测试","functionName":"testDriveConnectionGuangya","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionTianyi","title":"天翼网盘账号连接测试","functionName":"testDriveConnectionTianyi","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionXunlei","title":"迅雷网盘账号连接测试","functionName":"testDriveConnectionXunlei","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionUc","title":"UC网盘免登录连接检测","functionName":"testDriveConnectionUc","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnection123","title":"123网盘免登录连接检测","functionName":"testDriveConnection123","type":"list","cacheDuration":0,"params":[]},{"id":"testDriveConnectionYidong","title":"移动网盘免登录连接检测","functionName":"testDriveConnectionYidong","type":"list","cacheDuration":0,"params":[]}]};
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

/* CatPaw manual transfer clearing; common settings only */
// Original settings header: "{\"id\":\"catpaw.drive.accounts\",\"title\":\"猫 · 通用配置\",\"version\":\"2.2.8\",\"requiredVersion\":\"0.0.1\",\"author\":\"balge\",\"detailCacheDuration\":1800,\"description\":\"共享网盘配置。光鸭、移动、天翼、迅雷用于全盘搜索和 TG，默认关闭。搜索“保存账号”生效。\",\"globalParams\":[{\"name\":\"driveQuarkEnabled\",\"title\":\"夸克网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"quarkCookie\",\"title\":\"夸克 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写夸克网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"quarkQuality\",\"title\":\"夸克画质\",\"type\":\"enumeration\",\"value\":\"auto\",\"enumOptions\":[{\"title\":\"自动（优先原画）\",\"value\":\"auto\"},{\"title\":\"原画\",\"value\":\"origin\"},{\"title\":\"转码（夸克）\",\"value\":\"transcode\"}]},{\"name\":\"driveBaiduEnabled\",\"title\":\"百度网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"baiduCookie\",\"title\":\"百度 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写百度网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"drive115Enabled\",\"title\":\"115网盘\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"cookie115\",\"title\":\"115 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 115 网页登录 Cookie\",\"value\":\"\"}]},{\"name\":\"driveGuangyaEnabled\",\"title\":\"光鸭\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"guangyaAuth\",\"title\":\"光鸭访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 accessToken\",\"value\":\"\"}]},{\"name\":\"guangyaRefreshToken\",\"title\":\"光鸭刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refreshToken，用于自动续期；可留空\",\"value\":\"\"}]},{\"name\":\"guangyaDeviceId\",\"title\":\"光鸭设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 deviceId；留空使用默认设备号\",\"value\":\"\"}]},{\"name\":\"driveTianyiEnabled\",\"title\":\"天翼云盘\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"tianyiCookie\",\"title\":\"天翼 Cookie\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"含 JSESSIONID、COOKIE_LOGIN_USER 的 Cookie\",\"value\":\"\"}]},{\"name\":\"driveXunleiEnabled\",\"title\":\"迅雷\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"xunleiAuth\",\"title\":\"迅雷访问令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 access_token 或 Authorization；自动识别 Web/App\",\"value\":\"\"}]},{\"name\":\"xunleiRefreshToken\",\"title\":\"迅雷刷新令牌\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 refresh_token，用于自动续期；可留空\",\"value\":\"\"}]},{\"name\":\"xunleiDeviceId\",\"title\":\"迅雷设备号\",\"type\":\"input\",\"value\":\"\",\"placeholders\":[{\"title\":\"填写 device_id；留空优先从令牌读取，否则使用默认设备号\",\"value\":\"\"}]},{\"name\":\"driveUcEnabled\",\"title\":\"UC网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"drive123Enabled\",\"title\":\"123网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"driveYidongEnabled\",\"title\":\"移动网盘（免登录）\",\"type\":\"enumeration\",\"value\":\"disabled\",\"enumOptions\":[{\"title\":\"启用\",\"value\":\"enabled\"},{\"title\":\"禁用\",\"value\":\"disabled\"}]},{\"name\":\"maxShareCandidates\",\"title\":\"搜索档位\",\"type\":\"enumeration\",\"value\":\"2\",\"enumOptions\":[{\"title\":\"均衡（默认）\",\"value\":\"2\"},{\"title\":\"极速\",\"value\":\"1\"},{\"title\":\"优选\",\"value\":\"3\"},{\"title\":\"全面\",\"value\":\"5\"}],\"description\":\"每个模块最多返回最快成功的对应数量：极速 1 份、均衡 2 份、优选 3 份、全面 5 份。各网盘共同竞争名额，满额后停止较慢任务。\"},{\"name\":\"candidateFailureFallback\",\"title\":\"提取失败候补\",\"type\":\"enumeration\",\"value\":\"enabled\",\"enumOptions\":[{\"title\":\"开启（默认）\",\"value\":\"enabled\"},{\"title\":\"关闭\",\"value\":\"disabled\"}],\"description\":\"某个网盘提取无结果时立即候补 1 次，不等待其他网盘；候补成功计入模块总名额。\"},{\"name\":\"indexTimeoutSeconds\",\"title\":\"资源匹配超时（秒）\",\"type\":\"input\",\"value\":\"10\",\"placeholders\":[{\"title\":\"5～30 秒，默认 10\",\"value\":\"\"}]},{\"name\":\"resourceCategory\",\"title\":\"画质分类（仅展示）\",\"type\":\"enumeration\",\"value\":\"\",\"enumOptions\":[{\"title\":\"8K\",\"value\":\"8k\"},{\"title\":\"4K\",\"value\":\"4k\"},{\"title\":\"1080P\",\"value\":\"1080p\"},{\"title\":\"其他\",\"value\":\"other\"},{\"title\":\"空（按真实分辨率）\",\"value\":\"\"}]}],\"search\":{\"title\":\"通用配置\",\"functionName\":\"accountStatus\",\"params\":[{\"name\":\"keyword\",\"title\":\"输入“保存账号”保存；其他输入查看状态\",\"type\":\"input\",\"value\":\"\"}]},\"modules\":[{\"id\":\"saveAccounts\",\"title\":\"保存／更新共享配置\",\"functionName\":\"saveAccounts\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"accountStatus\",\"title\":\"账号配置状态\",\"functionName\":\"accountStatus\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionQuark\",\"title\":\"夸克网盘账号连接测试\",\"functionName\":\"testDriveConnectionQuark\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionBaidu\",\"title\":\"百度网盘账号连接测试\",\"functionName\":\"testDriveConnectionBaidu\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnection115\",\"title\":\"115网盘账号连接测试\",\"functionName\":\"testDriveConnection115\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionGuangya\",\"title\":\"光鸭网盘账号连接测试\",\"functionName\":\"testDriveConnectionGuangya\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionTianyi\",\"title\":\"天翼网盘账号连接测试\",\"functionName\":\"testDriveConnectionTianyi\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionXunlei\",\"title\":\"迅雷网盘账号连接测试\",\"functionName\":\"testDriveConnectionXunlei\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionUc\",\"title\":\"UC网盘免登录连接检测\",\"functionName\":\"testDriveConnectionUc\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnection123\",\"title\":\"123网盘免登录连接检测\",\"functionName\":\"testDriveConnection123\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]},{\"id\":\"testDriveConnectionYidong\",\"title\":\"移动网盘免登录连接检测\",\"functionName\":\"testDriveConnectionYidong\",\"type\":\"list\",\"cacheDuration\":0,\"params\":[]}]}"
async function cpManualTransferProvider(provider,params){
 const manualState={wrote:false},manualField=provider==='quark'?'quarkCookie':provider+'Auth',manualConfigured=String(readAccounts()?.[manualField]||'');
 cpNPInstallNativeHttpErrors();
 const labels={quark:'夸克',baidu:'百度','115':'115',uc:'UC','123':'123',guangya:'光鸭',yidong:'移动',tianyi:'天翼',xunlei:'迅雷'};
 const started=Date.now(),deadline=started+120000;let expired=false,timer;
 const UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0.0.0 Safari/537.36';
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
 function cpError(code){const e=new Error(code);e.code=code;return e;}
 function manualAccountCheck(){if(String(readAccounts()?.[manualField]||'')!==manualConfigured)throw cpError('ACCOUNT_CHANGED');}
 function check(){manualAccountCheck();if(provider==='quark')cpSettingsQuarkCheck();if(['xunlei','guangya'].includes(provider)&&cpBetaXunleiPersist&&String(readAccounts()?.[provider+'Auth']||'')!==cpBetaXunleiConfigured)throw cpError('ACCOUNT_CHANGED');if(expired||Date.now()>=deadline)throw cpError('TIMEOUT');}
 function apiExclusion(data){
  const details=cpNPErrorDetails({data}),text=String(details.code??'')+' '+details.message;
  if(!cpNPAuthExcluded(text))return;
  let code='SERVICE';
  if(/timeout|timed.?out|ETIMEDOUT|超时/i.test(text))code='TIMEOUT';
  else if(/rate.?limit|too many|频繁|限流|captcha/i.test(text))code='LIMIT';
  const error=cpError(code);Object.defineProperty(error,'cause',{value:{data},configurable:true});throw error;
 }
 function statusError(status){throw cpError(status===401?'AUTH':status===403||status===429?'LIMIT':'SERVICE');}
 async function request(method,url,body,headers={}){
  check();let response;
  const options={headers:Object.assign({'User-Agent':UA,Accept:'application/json'},headers),timeout:Math.max(1,deadline-Date.now())};
  try{response=await (method==='OPTIONS'?Widget.http.request({...options,url,method,timeout:options.timeout/1000,allow_redirects:false}):method==='GET'?Widget.http.get(url,options):Widget.http.post(url,typeof body==='string'?body:JSON.stringify(body),{...options,headers:{...options.headers,'Content-Type':'application/json'}}));}
  catch(e){
   check();cpNPLogError('connection '+provider,e);
   const details=cpNPErrorDetails(e),text=String(details.code??'')+' '+details.message;
   let code='NETWORK';
   if(/timeout|timed.?out|ETIMEDOUT|超时/i.test(text))code='TIMEOUT';
   else if(details.status===429||/rate.?limit|too many|频繁|限流|captcha/i.test(text))code='LIMIT';
   else if(cpNPAuthRejected(details.status,details.code,details.message))code='AUTH';
   else if(cpNPAuthExcluded(text))code='SERVICE';
   else if(details.status===403)code='LIMIT';
   else if(details.status>=400)code='SERVICE';
   const failure=cpError(code);Object.defineProperty(failure,'cause',{value:e,configurable:true});throw failure;
  }
  check();if(provider==='quark')cpSettingsQuarkResponse(response);const status=Number(response?.status??response?.statusCode??200);
  if(method==='OPTIONS'){if((response?.status==null&&response?.statusCode==null)||(status!==200&&status!==204))statusError(status);return response;}
  let data=response?.data;
  if(typeof data==='string'){
   try{data=JSON.parse(data);}catch(_){
    if(status!==200)apiExclusion({message:data});
    try{if(provider!=='yidong')throw Error();data=JSON.parse(cpNPYidongDecrypt(data));}catch(_){if(status!==200)statusError(status);throw cpError('SERVICE');}
   }
  }
  if(status!==200){
   apiExclusion(data);
   if(status===400&&data&&typeof data==='object')apiCode(data);
   statusError(status);
  }
  if(!data||typeof data!=='object'||Array.isArray(data))throw cpError('SERVICE');return data;
 }
 function apiCode(data){
  const code=data.error_code??data.errorCode??data.code??data.errno??data.res_code;
  if(data.error||code!==undefined&&![0,200].includes(Number(code))){
   apiExclusion(data);
   if(provider==='guangya'){const failure=cpNPFailure(200,code,[data.error,data.error_description,data.msg,data.message].filter(Boolean).join(' '));throw cpError(failure.code==='AUTH_FAILED'?'AUTH':failure.code==='RATE_LIMITED'?'LIMIT':'SERVICE');}const value=String(data.error||code);
   throw cpError(/^(?:401|-6|99|40101|41017|990009|InvalidSessionKey|InvalidAccessToken|AccessTokenExpired|user_unauthenticated|invalid_grant|unauthenticated|invalid_token|16)$/i.test(value)?'AUTH':/^(?:403|429|412|captcha_required|captcha_invalid|captcha_needed|PERMISSION_DENIED)$/i.test(value)?'LIMIT':'SERVICE');
  }
 }
 async function cpNPJson(_provider,_profile,method,url,body,headers){const data=await request(method,url,body,headers);apiCode(data);return data;}
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
async function cpNPXunleiCaptcha(action,auth,share,profile) {
 const context=cpNPXunleiContext(auth,share),timestamp=String(Date.now());let sign=context.clientId+context.version+context.packageName+context.deviceId+timestamp;
 for(const salt of context.browser?["gYM4fe6xRkcN/9dpGW","H/BFOFqsj3aq6qu8ElOiPwFB","tMApC4Udm/YjjEW9SSB","dO/RvcKBLBb6WCYNhkDwtRkA8Bc/rfW","T8lAmUWKRPJ","q5btU2MBAFfjEmM3piZSRt2uhPwkWuT2","0TJ5KPeq1wKxWa4s2MUdZ2tTDyWTm6lMdkGxQAxT6Wrg","s4BY7Gr2HzrL6EbwKdRds9s+QQNAXMa0R3HZN3Gz","RBLVDve6Rpdb9FmFD90M7r","PpwBrLaMQO"]:share?cpNPXUNLEI_SHARE_SIGN:cpNPXUNLEI_APP_SIGN)sign=cpNPMd5(sign+salt);
 const meta={client_version:context.version,package_name:context.packageName,timestamp,user_id:context.userId,captcha_sign:!share&&context.web&&!context.browser?'1.ee2cef5f061a7cdf4374df81b370d2ec':'1.'+sign};
 const body={client_id:context.clientId,action,device_id:context.deviceId,captcha_token:'',meta};if(share)Object.assign(meta,{username:'',phone_number:'',email:''});else if(!context.web)body.redirect_uri='xlaccsdk01://xunlei.com/callback?state=harbor';
 const headers={'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId};const data=await cpNPJson('xunlei',profile,'POST','https://xluser-ssl.xunlei.com/v1/shield/captcha/init',body,headers);if(!data.captcha_token||data.url)throw cpError('AUTH_FAILED');return Object.assign(headers,{'x-captcha-token':data.captcha_token,'x-client-version':context.version});
}
 function credential(field){
  const v=own(params,field)?params[field]:readAccounts()?.[field]||'';
  if(typeof v!=='string'||/[\x00-\x1f\x7f]/.test(v))throw cpError('CONFIG');return v.trim();
 }
 function authToken(){
  const name=provider+'Auth',group=[name,provider+'RefreshToken',provider+'DeviceId'];
  const incoming=group.some(k=>own(params,k));
  const values=incoming?Object.fromEntries(group.filter(k=>own(params,k)).map(k=>[k,params[k]])):{[name]:credential(name)};
  for(const v of Object.values(values))if(typeof v!=='string'||/[\x00-\x1f\x7f]/.test(v))throw cpError('CONFIG');
  let raw;
  try{const composed=provider==='xunlei'?cpXunleiCredentialParams(values):cpGuangyaCredentialParams(values);raw=String(composed[name]||'').trim();}catch(_){throw cpError('CONFIG');}
  if(!raw)throw cpError('MISSING');let auth;
  try{auth=raw.startsWith('{')?JSON.parse(raw):{accessToken:raw};}catch(_){throw cpError('CONFIG');}
  if(!auth||typeof auth!=='object'||Array.isArray(auth))throw cpError('CONFIG');
  const session=auth.appSession||auth.webSession;
  if(session){if(typeof session!=='object'||Array.isArray(session))throw cpError('CONFIG');auth={...auth,...session,clientKind:auth.clientKind||(auth.appSession?'app':'web')};}
  const h=auth.headers||{};
  auth={...auth,accessToken:auth.accessToken||auth.access_token||auth.authorization||auth.auth||h.Authorization||h.authorization||'',refreshToken:auth.refreshToken||auth.refresh_token||'',deviceId:auth.deviceId||auth.device_id||''};
  for(const k of ['accessToken','refreshToken','deviceId'])if(typeof auth[k]!=='string'||/[\x00-\x1f\x7f]/.test(auth[k]))throw cpError('CONFIG');
  auth.accessToken=auth.accessToken.replace(/^Bearer\s+/i,'').trim();
  if(!auth.accessToken&&!auth.refreshToken)throw cpError('MISSING');
  if(auth.accessToken&&!/^[A-Za-z0-9._~+/-]+=*$/.test(auth.accessToken))throw cpError('CONFIG');
  return auth;
 }
 async function refresh(auth){
  if(['xunlei','guangya'].includes(provider)){if(cpBetaXunleiPersist&&typeof Widget.sharedCache?.set!=='function')throw cpError('SERVICE');return provider==='xunlei'?cpNPRefreshXunleiAuth(null):cpNPRefreshGuangyaAuth(null);}
  if(!auth.refreshToken)throw cpError('AUTH');let data;
  if(provider==='guangya'){
   const id=auth.deviceId||'0123456789abcdef0123456789abcdef';
   data=await cpNPJson(provider,null,'POST','https://account.guangyapan.com/v1/auth/token',{client_id:'aMe-8VSlkrbQXpUR',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'X-Client-Id':'aMe-8VSlkrbQXpUR','X-Client-Version':'0.0.1','X-Device-Id':id,'X-Device-Model':'chrome%2F147.0.0.0','X-Device-Name':'PC-Chrome','X-Device-Sign':'wdi10.'+id+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','X-Net-Work-Type':'NONE','X-OS-Version':'Win32','X-Platform-Version':'1','X-Protocol-Version':'301','X-Provider-Name':'NONE','X-SDK-Version':'9.0.2'});
  }
  else{const c=cpNPXunleiContext(auth,false);data=await cpNPJson(provider,null,'POST','https://xluser-ssl.xunlei.com/v1/auth/token',{client_id:c.clientId,client_secret:c.web?'Qbaferw2knfQKqxa25EYJGtZ2_6755CMwzXBN3ctW54':'Xp6vsy4tN9toTVdMSpomVdXpRmES',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'User-Agent':c.userAgent,'x-client-id':c.clientId,'x-device-id':c.deviceId});}
  const token=data.access_token||data.accessToken||data.data?.accessToken;
  if(typeof token!=='string'||!token||! /^[A-Za-z0-9._~+/-]+=*$/.test(token))throw cpError('AUTH');return {...auth,accessToken:token};
 }
 async function tokenProbe(auth){
  if(!auth.accessToken||cpNPPanTokenExpired(auth))auth=await refresh(auth);
  if(provider==='guangya'){
   const d=await cpNPJson(provider,null,'POST','https://api.guangyapan.com/userres/v1/file/get_file_list',{parentId:'',page:1,pageSize:200,orderBy:3,sortType:1,fileTypes:[]},cpNPGuangyaHeaders(auth));
   if(!Array.isArray(d.data?.list)&&!(d.msg==='success'&&d.data&&typeof d.data==='object'&&!Array.isArray(d.data)&&(Object.keys(d.data).length===0||Number.isSafeInteger(d.data.total)&&d.data.total>=0)))throw cpError('SERVICE');
  }else{
   let headers;try{headers=await cpNPXunleiCaptcha('GET:drive/v1/files',auth,false,null);}catch(e){if(e.code==='AUTH_FAILED')throw cpError('LIMIT');throw e;}
   const d=await cpNPJson(provider,null,'GET','https://api-pan.xunlei.com/drive/v1/files?parent_id=&limit=1',null,{...headers,Authorization:'Bearer '+auth.accessToken});
   if(!Array.isArray(d.files))throw cpError('SERVICE');
  }
 }

/* Beta Xunlei shared renewal adapter */
const cpNPRefreshes=cpBetaXunleiRefreshes;
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
// Adapter for the common-settings entry. Reuses the playback refresh lifecycle.
// The configured credential remains the identity; rotated tokens live separately.
let cpBetaXunleiRaw='',cpBetaXunleiConfigured='',cpBetaXunleiKey='',cpBetaXunleiPersist=false;
function cpBetaXunleiAuth(){
 const validated=authToken(),field=provider+'Auth',fields=[field,provider+'RefreshToken',provider+'DeviceId'];
 cpBetaXunleiConfigured=String(readAccounts()?.[field]||'');
 const incoming=fields.some(k=>own(params,k));
 const compose=provider==='xunlei'?cpXunleiCredentialParams:cpGuangyaCredentialParams;
 cpBetaXunleiRaw=incoming?String(compose(Object.fromEntries(fields.filter(k=>own(params,k)).map(k=>[k,params[k]])))[field]||''):cpBetaXunleiConfigured;
 cpBetaXunleiPersist=!!cpBetaXunleiConfigured&&cpBetaXunleiRaw===cpBetaXunleiConfigured;
 cpBetaXunleiKey=provider+':'+baiduSha1(cpBetaXunleiRaw);
 // Credential validation above also applies to unsaved entry parameters.
 if(!cpBetaXunleiPersist)cpBetaXunleiRaw=JSON.stringify(validated);
 return cpNPReadAuth(provider);
}
function cpNPGuard(){check();if(cpBetaXunleiPersist&&String(readAccounts()?.[provider+'Auth']||'')!==cpBetaXunleiConfigured)throw cpError('ACCOUNT_CHANGED');}
function cpNewPanIdentity(){return cpBetaXunleiPersist?baiduSha1(String(readAccounts()?.[provider+'Auth']||'')):cpBetaXunleiKey.slice(provider.length+1);}
function cpNewPanAuthValue(){
 if(cpBetaXunleiPersist){try{const entry=JSON.parse(Widget.sharedCache?.get('catpaw.drive-auth.v1',cpBetaXunleiKey)||'null');if(typeof entry?.auth==='string')return entry.auth;}catch(_){}}
 return cpBetaXunleiRaw;
}
function cpNewPanCommitSession(provider,raw,previous,identity){
 cpNPIdentityGuard(provider,identity);
 const current=cpNewPanAuthValue();if(current!==previous)return current;
 if(cpBetaXunleiPersist){
  if(typeof Widget.sharedCache?.set!=='function')throw cpError('UPSTREAM_ERROR');
  try{Widget.sharedCache.set('catpaw.drive-auth.v1',cpBetaXunleiKey,JSON.stringify({auth:raw}));}catch(_){throw cpError('UPSTREAM_ERROR');}
 }else cpBetaXunleiRaw=raw;
 return raw;
}

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
let cpSettingsQuarkConfigured='',cpSettingsQuarkKey='',cpSettingsQuarkPersist=false,cpSettingsQuarkPrevious='';
function cpSettingsQuarkRead(){
 try{return cpQuarkSessionCookie(JSON.parse(Widget.sharedCache?.get('catpaw.drive-auth.v1',cpSettingsQuarkKey)||'null'));}catch(_){return '';}
}
function cpSettingsQuarkCookie(cookie){
 cpSettingsQuarkConfigured=String(readAccounts()?.quarkCookie||'').trim();
 cpSettingsQuarkPersist=!!cookie&&cookie===cpSettingsQuarkConfigured;
 cpSettingsQuarkKey='quark:'+baiduSha1(cookie);
 cpSettingsQuarkPrevious=cpSettingsQuarkPersist?cpSettingsQuarkRead()||cookie:cookie;
 return cpSettingsQuarkPrevious;
}
function cpSettingsQuarkCheck(){
 if(cpSettingsQuarkPersist&&String(readAccounts()?.quarkCookie||'').trim()!==cpSettingsQuarkConfigured)throw cpError('ACCOUNT_CHANGED');
}
function cpSettingsQuarkResponse(response){
 if(!cpSettingsQuarkPersist)return;cpSettingsQuarkCheck();
 const current=cpSettingsQuarkRead()||cpSettingsQuarkConfigured;
 if(current!==cpSettingsQuarkPrevious)return;
 const cookie=cpQuarkResponseCookie(cpSettingsQuarkPrevious,response);
 if(!cookie||cookie===cpSettingsQuarkPrevious)return;
 try{Widget.sharedCache?.set('catpaw.drive-auth.v1',cpSettingsQuarkKey,JSON.stringify({cookie}));}catch(_){}
}

function cpNPNativeFailure(error){
 const details=cpNPErrorDetails(error);let failure;
 try{failure=cpNPFailure(details.status,details.code,details.message);}catch(normalized){failure=normalized;}
 Object.defineProperty(failure,'cause',{value:error,configurable:true});
 cpNPLogError('HTTP request failed',failure);
 return failure;
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
 if((!Number.isFinite(status)||status===0)&&!cpNPAuthRejected(status,code,message))throw cpError(/timeout|timed.?out|ETIMEDOUT/i.test(String(message||''))?'TIMEOUT':'NETWORK');const n=Number(code),text=String(code??'')+' '+String(message||'');
 const kind=status===429||n===429||/rate.?limit|too many|频繁|限流/i.test(text)?'RATE_LIMITED':
 cpNPAuthRejected(status,code,message)||status===403||/captcha_invalid|captcha_required/i.test(text)?'AUTH_FAILED':'UPSTREAM_ERROR';
 const error=cpError(kind);error.status=status;error.apiCode=code;return error;
}
function cpNPIdentityGuard(provider,identity){if(cpNewPanIdentity(provider)!==identity)throw cpError('ACCOUNT_CHANGED');}
async function cpNPRefreshRequest(provider,profile,url,body,headers,previous,identity,update){
 cpNPInstallNativeHttpErrors();
 cpNPGuard(provider,profile);
 const work=async()=>{
  cpNPGuard(provider,profile);
  let response;
  // A consumed one-use refresh must retain its successful rotation for the same
  // configured drive, even if this owner expires. Use the bounded raw transport;
  // the pool and individual waiter still fence every resource continuation.
  try{const options={timeout:15000,headers:Object.assign({'User-Agent':UA,'Content-Type':'application/json'},headers||{})};response=await (typeof cpResourceRequest==='function'?cpResourceRequest('post',url,JSON.stringify(body),options):Widget.http.post(url,JSON.stringify(body),options));}
  catch(error){cpNPIdentityGuard(provider,identity);if(['ACCOUNT_CHANGED','ABORTED','OPERATION_TIMEOUT'].includes(error?.code))throw error;throw cpNPNativeFailure(error);}
  cpNPIdentityGuard(provider,identity);
  const status=Number(response&&(response.status||response.statusCode)||200);
  let data=response&&response.data;try{if(typeof data==='string')data=JSON.parse(data);}catch(_){throw cpError('UPSTREAM_ERROR');}
  const code=data&&(data.error_code??data.errorCode??data.code);
  if(status>=400||!data||typeof data!=='object'||data.error||(code!==undefined&&![0,200].includes(Number(code))))throw cpNPFailure(status,code,data&&[data.error,data.error_description,data.msg,data.message].filter(Boolean).join(' '));
  const auth=update(data);cpNPIdentityGuard(provider,identity);
  cpNewPanCommitSession(provider,JSON.stringify(auth),previous,identity);
  cpNPIdentityGuard(provider,identity);return cpNPReadAuth(provider);
 };
 return typeof cpQueueCatalogRead==='function'?cpQueueCatalogRead(provider,work):work();
}
async function cpNPRefreshAuth(provider,profile,work,restarted=false){
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
 try {const renewed=await job.promise;if(!cpBetaXunleiPersist)cpBetaXunleiRaw=JSON.stringify(renewed);}
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
async function cpNPDoRefreshXunleiAuth(profile,identity) {
 const provider='xunlei';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const context=cpNPXunleiContext(auth,false);
 return cpNPRefreshRequest(provider,profile,'https://xluser-ssl.xunlei.com/v1/auth/token',{client_id:context.clientId,client_secret:context.browser?undefined:context.web?'Qbaferw2knfQKqxa25EYJGtZ2_6755CMwzXBN3ctW54':'Xp6vsy4tN9toTVdMSpomVdXpRmES',grant_type:'refresh_token',refresh_token:auth.refreshToken},{'User-Agent':context.userAgent,'x-client-id':context.clientId,'x-device-id':context.deviceId},previous,identity,data=>{
  if(!data.access_token)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token,refreshToken:data.refresh_token||auth.refreshToken,userId:data.user_id||context.userId,deviceId:context.deviceId,clientId:context.clientId});
 });
}
function cpNPRefreshGuangyaAuth(profile){return cpNPRefreshAuth('guangya',profile,identity=>cpNPDoRefreshGuangyaAuth(profile,identity));}
async function cpNPDoRefreshGuangyaAuth(profile,identity) {
 const provider='guangya';cpNPGuard(provider,profile);const previous=cpNewPanAuthValue(provider),auth=cpNPReadAuth(provider);if(!auth.refreshToken)throw cpError('AUTH_FAILED');const id=auth.deviceId||'0123456789abcdef0123456789abcdef';
 const headers={'X-Client-Id':'aMe-8VSlkrbQXpUR','X-Client-Version':'0.0.1','X-Device-Id':id,'X-Device-Model':'chrome%2F147.0.0.0','X-Device-Name':'PC-Chrome','X-Device-Sign':'wdi10.'+id+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','X-Net-Work-Type':'NONE','X-OS-Version':'Win32','X-Platform-Version':'1','X-Protocol-Version':'301','X-Provider-Name':'NONE','X-SDK-Version':'9.0.2'};
 return cpNPRefreshRequest(provider,profile,'https://account.guangyapan.com/v1/auth/token',{client_id:'aMe-8VSlkrbQXpUR',grant_type:'refresh_token',refresh_token:auth.refreshToken},headers,previous,identity,data=>{
  if(!data.access_token&&!data.accessToken)throw cpError('AUTH_FAILED');return Object.assign(auth,{accessToken:data.access_token||data.accessToken,refreshToken:data.refresh_token||data.refreshToken||auth.refreshToken,deviceId:data.device_id||data.deviceId||id});
 });
}
 async function work(){
  const context={request,apiCode,check,checkAccount:manualAccountCheck,fail:cpError,state:manualState};
  if(provider==='quark'){
   const cookie=credential('quarkCookie');if(!cookie)throw cpError('MISSING');
   context.headers=async()=>({Cookie:cpSettingsQuarkCookie(cookie),Referer:'https://pan.quark.cn/'});
  }else{
   cpBetaXunleiAuth();
   context.refresh=()=>refresh(cpNPReadAuth(provider));
   context.headers=async(method)=>{
    let auth=cpNPReadAuth(provider);if(!auth.accessToken||cpNPPanTokenExpired(auth))auth=await context.refresh();
    if(provider==='guangya')return cpNPGuangyaHeaders(auth);
    return {...await cpNPXunleiCaptcha(method+':drive/v1/files',auth,false,null),Authorization:'Bearer '+auth.accessToken};
   };
  }
  return cpManualTransferWork(provider,context);
 }
 let manualFailure;
 try{
  const task=work();
  if(typeof setTimeout!=='function')return await task;
  return await Promise.race([task,new Promise((_,reject)=>{timer=setTimeout(()=>{expired=true;reject(cpError(manualState.wrote?'UNCERTAIN':'TIMEOUT'));},Math.max(0,deadline-Date.now()));})]);
 }catch(error){manualFailure=error;throw error;}
 finally{
  expired=true;if(timer!==undefined&&typeof clearTimeout==='function')clearTimeout(timer);
  if(manualState.wrote&&manualState.finish)try{manualState.finish();}catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;if(!manualFailure)throw cpError('CACHE_AFTER_DELETE');}
 }
}
// Invoked only by the common-settings menu. Never attached to playback or save.
let cpManualTransferFlight=null;
function clearTransferData(){
 if(cpManualTransferFlight)return cpManualTransferFlight;
 const providers=[['quark','夸克'],['baidu','百度'],['115','115'],['uc','UC'],['123','123'],['xunlei','迅雷'],['guangya','光鸭'],['yidong','移动'],['tianyi','天翼']];
 const job=Promise.all(providers.map(async([provider,label])=>{
  let title,description;
  if(!['quark','xunlei','guangya'].includes(provider)){
   title='无需清理';description=provider==='115'?'普通分享播放免转存，不产生转存数据。':'当前使用免转存播放，不产生转存数据。';
  }else try{
   const result=await cpManualTransferProvider(provider,{});
   title=result.removed||result.recycled?'清理完成':'无需清理';
   description=result.removed?(result.recycled?'已删除猫源转存文件夹，并永久清理对应回收站条目，下次播放会重新创建。':'已删除猫源转存文件夹及其中全部内容，下次播放会重新创建。'):result.recycled?'已永久清理猫源转存回收站条目。':'猫源专用转存文件夹及对应回收站条目均不存在。';
  }catch(error){
   const code=error?.code;
   title=code==='MISSING'?'未配置，已跳过':code==='UNCERTAIN'?'清理结果待确认':code==='TRASH_UNCERTAIN'?'回收站清理待确认':'清理失败';
   description=({MISSING:'未保存该网盘账号。',CONFIG:'请检查已保存的网盘账号。',AUTH:'登录失效，请更新账号后重试。',AUTH_FAILED:'登录失效，请更新账号后重试。',LIMIT:'网盘请求受限，请稍后重试。',RATE_LIMITED:'网盘请求受限，请稍后重试。',ACCOUNT_CHANGED:'清理期间账号发生变化，已停止。请核对网盘后重试。',TIMEOUT:'请求超时，请检查网盘后重试。',UNCERTAIN:'删除请求的结果尚未确认，未重复发送。请检查网盘后再运行。',TRASH_UNCERTAIN:'转存目录已删除或不存在；回收站清理结果尚未确认，未自动重复发送。请检查网盘后再运行。',CACHE:'无法重置转存回执，已停止清理。请更新客户端后重试。',CACHE_AFTER_DELETE:'转存数据已删除，但转存缓存重置失败。请更新客户端或清理模块缓存后重试。'})[code]||'未能完整清理，请检查网盘后重试。';
  }
  return {id:'transfer-clear-'+provider,type:'text',title:label+' · '+title,description};
 }));
 cpManualTransferFlight=job.finally(()=>{cpManualTransferFlight=null;});return cpManualTransferFlight;
}
async function cpManualTransferWork(provider,context){
 const {request,apiCode,check,fail,state}=context;
 const receiptsNamespace='catpaw.upstream-enhanced.transfers.v1',cache=Widget.sharedCache;
 const reserved=name=>name==='CatpawCache'||name==='ftv-cache';
 if(typeof cache?.keys!=='function'||typeof cache?.get!=='function'||typeof cache?.set!=='function')throw fail('CACHE');
 const pattern=provider==='quark'?/^transfer:(?:quark:|[a-f0-9]{40}:)/i:new RegExp('^transfer:'+provider+':');
 function invalidateReceipts(final=false){
  (final?context.checkAccount:check)();
  try{
   const epoch=String(Date.now())+':'+String(Math.random()),epochKey='playback-epoch:'+provider;
   const written=cache.set(receiptsNamespace,epochKey,epoch);if(written?.then||cache.get(receiptsNamespace,epochKey)!==epoch)throw Error();
   const keys=cache.keys(receiptsNamespace);if(!Array.isArray(keys)||keys.some(k=>typeof k!=='string'))throw Error();
   for(const key of keys.filter(k=>pattern.test(k))){const result=cache.set(receiptsNamespace,key,'null');if(result?.then||cache.get(receiptsNamespace,key)!=='null')throw Error();}
  }catch(_){throw fail('CACHE');}
 }
 state.finish=()=>{if(!state.finished){invalidateReceipts(true);state.finished=true;}};
 function id(value){if((typeof value!=='string'&&typeof value!=='number')||!String(value)||/\s|[\x00-\x1f\x7f]/.test(String(value))||['0','null','undefined'].includes(String(value)))throw fail('SERVICE');return String(value);}
 function item(row,parent,recycle=false){
  if(!row||typeof row!=='object'||Array.isArray(row))throw fail('SERVICE');
  const fid=id(provider==='quark'?row.fid:provider==='xunlei'?row.id:row.fileId||row.id||row.resId);
  const declared=provider==='quark'?row.pdir_fid:provider==='xunlei'?row.parent_id:row.parentId;
  if(!recycle&&declared!=null&&String(declared)!==parent)throw fail('SERVICE');
  const name=provider==='quark'?row.file_name:provider==='xunlei'?row.name:row.fileName||row.name;
  if(typeof name!=='string')throw fail('SERVICE');
  const type=provider==='quark'?recycle?row.file_type:row.dir:provider==='xunlei'?row.kind:Number(row.resType);
  if(recycle){
   if(reserved(name)&&(declared==null||(provider==='quark'?![0,1].includes(type):provider==='xunlei'?!['drive#folder','drive#file'].includes(type):![1,2].includes(type))))throw fail('SERVICE');
   return {id:fid,record:provider==='quark'?id(row.record_id):fid,name,parent:declared==null?null:String(declared),folder:provider==='quark'?type===0:provider==='xunlei'?type==='drive#folder':type===2};
  }
  if(provider==='quark'?![true,false,0,1].includes(type):provider==='xunlei'?!['drive#folder','drive#file'].includes(type):![1,2].includes(type))throw fail('SERVICE');
  return {id:fid,name,parent,folder:provider==='quark'?type===true||type===1:provider==='xunlei'?type==='drive#folder':type===2};
 }
 function query(values){return Object.entries(values).map(([k,v])=>encodeURIComponent(k)+'='+encodeURIComponent(v)).join('&');}
 async function api(method,path,body,write=false){
  async function send(){
   const headers=await context.headers(method);check();if(write)state.wrote=true;
   const url=provider==='quark'?'https://drive-pc.quark.cn/1/clouddrive/'+path:provider==='xunlei'?'https://api-pan.xunlei.com/'+path:'https://api.guangyapan.com/'+path;
   const data=await request(method,url,body,headers);apiCode(data);return data;
  }
  try{return await send();}catch(error){
   // Only reads may be replayed after authentication renewal. Never replay a delete.
   if(!write&&['AUTH','AUTH_FAILED'].includes(error?.code)&&context.refresh){await context.refresh();return send();}
   throw error;
  }
 }
 async function list(parent,recycle=false){
  const rows=[],seen=new Set(),tokens=new Set();let token='';
  for(let page=0;page<1000;page++){
   check();let response,payload,entries,total,next='';
   if(provider==='quark'){
    response=await api('GET',(recycle?'file/recycle/list?':'file/sort?')+query({pr:'ucpro',fr:'pc',uc_param_str:'',_page:page+1,_size:200,_fetch_total:1,...recycle?{}:{pdir_fid:parent,_fetch_sub_dirs:0,_sort:'file_type:asc,file_name:asc'}}));
    if(response.status!==200)throw fail('SERVICE');payload=response.data;entries=payload?.list;total=payload?.total??response.metadata?._total??response.metadata?.detail_meta?._total;
   }else if(provider==='xunlei'){
    response=await api('GET','drive/v1/files?'+query({limit:200,page_token:token,...recycle?{filters:JSON.stringify({trashed:{eq:true}})}:{parent_id:parent,with_audit:true,filters:JSON.stringify({phase:{eq:'PHASE_TYPE_COMPLETE'},trashed:{eq:false}})}}));
    entries=response.files;next=response.next_page_token??response.nextPageToken??'';if(typeof next!=='string')throw fail('SERVICE');
   }else{
    response=await api('POST','userres/v1/file/get_file_list',recycle?{parentId:'',page,pageSize:100,dirType:4,orderBy:12,sortType:1}:{parentId:parent,page,pageSize:200,orderBy:3,sortType:1,fileTypes:[]});
    payload=response.data;entries=payload?.list;total=payload?.total;
    if(entries===undefined&&payload&&typeof payload==='object'&&!Array.isArray(payload)&&(Number(total)===0||response.msg==='success'&&Object.keys(payload).length===0))entries=[];
   }
   if(!Array.isArray(entries))throw fail('SERVICE');
   for(const entry of entries){const value=item(entry,parent,recycle),key=recycle?value.record:value.id;if(seen.has(key))throw fail('SERVICE');seen.add(key);rows.push(value);}
   if(total!=null&&(!Number.isSafeInteger(Number(total))||Number(total)<rows.length))throw fail('SERVICE');
   if(provider==='xunlei'){
    if(!next)return rows;if(!entries.length||tokens.has(next))throw fail('SERVICE');tokens.add(next);token=next;
   }else if(total!=null){if(rows.length===Number(total))return rows;if(!entries.length)throw fail('SERVICE');}
   else if(entries.length<(recycle&&provider==='guangya'?100:200))return rows;
  }
  throw fail('SERVICE');
 }
 const top=provider==='quark'?'0':'';
 async function roots(){const found=(await list(top)).filter(row=>row.folder&&reserved(row.name));if(new Set(found.map(row=>row.name)).size!==found.length)throw fail('SERVICE');return found;}
 const selectedRoots=await roots();
 // A JSON null shadows each module's private receipt. Removing the shared key
 // would fall back to the stale private file ID. Credentials are never changed.
 invalidateReceipts();
 let failure;
 try{
 let removed=0,recycled=0;
 async function delay(){if(typeof setTimeout==='function')await new Promise(resolve=>setTimeout(resolve,500));check();}
 for(const selected of selectedRoots){
  const rootId=selected.id;
  if((await roots()).find(row=>row.name===selected.name)?.id!==rootId)throw fail('SERVICE');
  // Delete only the reserved root, without enumerating its descendants.
  try{
   if(provider==='quark')await api('POST','file/delete?pr=ucpro&fr=pc&uc_param_str=',{action_type:2,filelist:[rootId],exclude_fids:[]},true);
   else if(provider==='xunlei')await api('POST','drive/v1/files:batchDelete',{ids:[rootId],space:''},true);
   else await api('POST','userres/v1/file/delete_file',{fileIds:[rootId]},true);
  }catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;}
  let confirmed=false;
  for(let attempt=0;attempt<6;attempt++){
   let absent=false;
   try{absent=(await list(top)).every(row=>row.id!==rootId);}catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;}
   if(absent){removed++;confirmed=true;break;}
   if(attempt<5)await delay();
  }
  if(!confirmed)throw fail('UNCERTAIN');
 }
 const owned=row=>row.folder&&reserved(row.name)&&row.parent===top;
 try{
  let inventory;
  for(let attempt=0;attempt<6;attempt++){
   inventory=await list(top,true);
   // These providers first move the live folder to their recycle inventory.
   // Observe it before claiming the permanent deletion is complete.
   if(!selectedRoots.length||provider==='xunlei'||selectedRoots.every(root=>inventory.some(row=>row.id===root.id&&owned(row))))break;
   if(attempt===5)throw fail('TRASH_UNCERTAIN');
   await delay();
  }
  const targets=inventory.filter(owned);
  for(const target of targets){
   check();
   const current=(await list(top,true)).find(row=>row.record===target.record);
   if(!current){recycled++;continue;}
   if(current.id!==target.id||!owned(current))throw fail('TRASH_UNCERTAIN');
   try{
    if(provider==='quark')await api('POST','file/recycle/remove?pr=ucpro&fr=pc&uc_param_str=',{select_mode:2,record_list:[target.record]},true);
    else if(provider==='xunlei')await api('POST','drive/v1/files:batchDelete',{ids:[target.id],space:''},true);
    else await api('POST','userres/v1/file/delete_file',{fileIds:[target.id]},true);
   }catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;}
   let absent=false;
   for(let attempt=0;attempt<6;attempt++){
    try{absent=(await list(top,true)).every(row=>row.record!==target.record);}catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;}
    if(absent)break;
    if(attempt<5)await delay();
   }
   if(!absent)throw fail('TRASH_UNCERTAIN');
   recycled++;
  }
 }catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;throw fail('TRASH_UNCERTAIN');}
 return {removed,recycled};
 }catch(error){failure=error;throw error;}
 finally{
  // Fence URLs and receipts produced both before and during deletion, including
  // writes with lost responses. A changed account must never be touched.
  if(state.wrote)try{state.finish();}catch(error){if(error?.code==='ACCOUNT_CHANGED')throw error;if(!failure)throw fail('CACHE_AFTER_DELETE');}
 }
}

WidgetMetadata.modules.splice(1,0,{"id":"clearTransferData","title":"清除转存数据（含对应回收站）","functionName":"clearTransferData","type":"list","cacheDuration":0,"params":[]});
