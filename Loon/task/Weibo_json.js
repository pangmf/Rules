/***********************************************
> 应用名称：墨鱼自用微博&微博国际版净化脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2025-09-15
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本声明：本脚本是在[https://github.com/zmqcherish]原创基础上优化自用
> 脚本声明：若有侵犯原作者权利，请邮箱联系删除
***********************************************/	  


const version = 'V2.0.142';


const mainConfig={isDebug:!1,author:"ddgksf2013",removeHomeVip:!0,removeHomeCreatorTask:!0,removeRelate:!0,removeGood:!0,removeFollow:!0,modifyMenus:!0,removeRelateItem:!1,removeRecommendItem:!0,removeRewardItem:!0,removeLiveMedia:!0,removeNextVideo:!1,removePinedTrending:!0,removeInterestFriendInTopic:!1,removeInterestTopic:!1,removeInterestUser:!0,removeLvZhou:!0,removeSearchWindow:!0,profileSkin1:null,profileSkin2:null,tabIconVersion:0,tabIconPath:""},itemMenusConfig={creator_task:!1,mblog_menus_custom:!1,mblog_menus_video_later:!0,mblog_menus_comment_manager:!0,mblog_menus_avatar_widget:!1,mblog_menus_card_bg:!1,mblog_menus_long_picture:!0,mblog_menus_delete:!0,mblog_menus_edit:!0,mblog_menus_edit_history:!0,mblog_menus_edit_video:!0,mblog_menus_sticking:!0,mblog_menus_open_reward:!0,mblog_menus_novelty:!1,mblog_menus_favorite:!0,mblog_menus_promote:!0,mblog_menus_modify_visible:!0,mblog_menus_copy_url:!0,mblog_menus_follow:!0,mblog_menus_video_feedback:!0,mblog_menus_shield:!0,mblog_menus_report:!0,mblog_menus_apeal:!0,mblog_menus_home:!0},modifyCardsUrls=["/cardlist","video/community_tab","searchall"],modifyStatusesUrls=["statuses/friends/timeline","statuses_unread_hot_timeline","statuses/unread_friends_timeline","statuses/unread_hot_timeline","groups/timeline","statuses/friends_timeline"],otherUrls={"/profile/me":"removeHome","/statuses/extend":"itemExtendHandler","/video/remind_info":"removeVideoRemind","/checkin/show":"removeCheckin","/live/media_homelist":"removeMediaHomelist","/container_detail":"removeComments","/container/get_item":"containerHandler","/profile/container_timeline":"userHandler","/video/tiny_stream_video_list":"nextVideoHandler","/2/statuses/video_mixtimeline":"nextVideoHandler","video/tiny_stream_mid_detail":"nextVideoHandler","/!/client/light_skin":"tabSkinHandler","/littleskin/preview":"skinPreviewHandler","/search/finder":"removeSearchMain","/search/container_timeline":"removeSearch","/search/container_discover":"removeSearch","/2/flowpage":"removeMsgAd","/2/page?":"removePage","/statuses/unread_topic_timeline":"topicHandler","/square&pageDataType/":"squareHandler","/statuses/container_timeline_topic":"removeMain","/statuses/container_timeline":"removeMainTab","wbapplua/wbpullad.lua":"removeLuaScreenAds","interface/sdk/sdkad.php":"removePhpScreenAds","a=trends":"removeTopics",user_center:"modifiedUserCenter","a=get_coopen_ads":"removeIntlOpenAds","php?a=search_topic":"removeSearchTopic","ad/realtime":"removeRealtimeAd","ad/preload":"removeAdPreload","php?a=open_app":"removeAdBanner"};function getModifyMethod(e){for(const o of modifyCardsUrls)if(-1<e.indexOf(o))return"removeCards";for(const i of modifyStatusesUrls)if(-1<e.indexOf(i))return"removeTimeLine";for(var[t,a]of Object.entries(otherUrls))if(-1<e.indexOf(t))return a;return null}function removeRealtimeAd(e){return delete e.ads,e.code=4016,e}function removeAdBanner(e){return e.data.close_ad_setting&&delete e.data.close_ad_setting,e.data.detail_banner_ad&&(e.data.detail_banner_ad=[]),e}function removeAdPreload(e){if(e.ads){e.last_ad_show_interval=86400;for(var t of e.ads)t.start_time=2681574400,t.end_time=2681660799,t.display_duration=0,t.daily_display_cnt=0,t.total_display_cnt=0}return e}function removeIntlOpenAds(e){return e.data&&(e.data={display_ad:1}),e}function removeSearchTopic(e){return e.data&&0!==e.data.search_topic?.cards.length&&(e.data.search_topic.cards=Object.values(e.data.search_topic.cards).filter(e=>!("searchtop"==e.type)),e.data.trending_topic)&&delete e.data.trending_topic,e}function modifiedUserCenter(e){return e.data&&0!==e.data.length&&e.data.cards&&(e.data.cards=Object.values(e.data.cards).filter(e=>!("personal_vip"==e.items[0].type))),e}function removeTopics(e){return e.data&&(e.data.order=["search_topic"]),e}function isAd(e){return!!e&&("广告"==e.mblogtypename||"热推"==e.mblogtypename||"ad"==e.promotion?.type||"ad"==e.page_info?.actionlog?.source||"广告"==e.content_auth_info?.content_auth_title)}function squareHandler(e){return e.items,e}function removeMainTab(e){if(e.loadedInfo&&e.loadedInfo.headers&&delete e.loadedInfo.headers,e.items){var t,a=[];for(t of e.items)isAd(t.data)||(t.data?.page_info?.video_limit&&delete t.data.page_info.video_limit,t.data?.common_struct&&delete t.data.common_struct,t.category&&"group"==t.category&&-1==JSON.stringify(t.items).indexOf("profile_top"))||a.push(t);e.items=a,log("removeMainTab success")}return e}function removeMain(e){if(e.loadedInfo&&e.loadedInfo.headers&&delete e.loadedInfo.headers,e.items){var t,a=[];for(t of e.items)"feed"==t.category?isAd(t.data)||a.push(t):"group"==t.category?0<t.items.length&&t.items[0].data?.itemid?.includes("search_input")?(t.items=t.items.filter(e=>e?.data?.itemid?.includes("mine_topics")||e?.data?.itemid?.includes("search_input")||202==e?.data?.card_type),t.items[0].data.hotwords=[{word:"搜索超话",tip:""}],a.push(t)):0<t.items.length&&t.items[0].data?.itemid?.includes("top_title")||(0<t.items.length&&(t.items=Object.values(t.items).filter(e=>"feed"===e.category||"card"===e.category)),a.push(t)):t.data?.card_type&&-1<[202,200].indexOf(t.data.card_type)||a.push(t);e.items=a,log("removeMain success")}return e}function topicHandler(e){var t=e.cards;if(t&&(mainConfig.removeUnfollowTopic||mainConfig.removeUnusedPart)){var a,o=[];for(a of t){let e=!0;if(a.mblog){var i=a.mblog.buttons;mainConfig.removeUnfollowTopic&&i&&"follow"==i[0].type&&(e=!1)}else{if(!mainConfig.removeUnusedPart)continue;if("bottom_mix_activity"==a.itemid)e=!1;else if("正在活跃"==a?.top?.title)e=!1;else if(200==a.card_type&&a.group)e=!1;else{i=a.card_group;if(!i)continue;var r=i[0];if(-1<["guess_like_title","cats_top_title","chaohua_home_readpost_samecity_title"].indexOf(r.itemid))e=!1;else if(1<i.length){var n,d=[];for(n of i)-1==["chaohua_discovery_banner_1","bottom_mix_activity"].indexOf(n.itemid)&&d.push(n);a.card_group=d}}}e&&o.push(a)}e.cards=o,log("topicHandler success")}return e}function removeSearchMain(e){var t=e.channelInfo.channels;if(t){var a,o=[];for(a of t)a.payload&&(a.payload?.items&&(a.payload.items=[]),a.payload?.loadedInfo?.searchBarContent&&(a.payload.loadedInfo.searchBarContent=[{}]),a.payload?.loadedInfo?.headerBack&&(a.payload.loadedInfo.headerBack.channelStyleMap={}),delete a.titleInfoAbsorb,delete a.titleInfo,delete a.title,o.push(a));e.channelInfo.channels=o,e.header?.data&&removeHeader(e.header.data),e.channelInfo?.moreChannels&&(delete e.channelInfo.moreChannels,delete e.channelInfo.channelConfig),log("remove_search main success")}return e}function removeHeader(e){if(e.items){var t,a=[];for(t of e.items)"group"==t.category&&(t.items=t.items.filter(e=>void 0===e.data?.card_type||101===e.data?.card_type||17===e.data?.card_type).map(e=>(17===e.data?.card_type&&(e.data.col=1),e)),0<t.items.length)&&a.push(t);log("remove Header success"),e.items=a}return e}function checkSearchWindow(e){return!!mainConfig.removeSearchWindow&&"card"==e.category&&("finder_window"==e.data?.itemid||"discover_gallery"==e.data?.itemid||"more_frame"==e.data?.itemid||208==e.data?.card_type||236==e.data?.card_type||247==e.data?.card_type||217==e.data?.card_type||101==e.data?.card_type||19==e.data?.card_type||e.data?.mblog?.page_info?.actionlog?.source?.includes("ad")||e.data?.pic?.includes("ads"))}function removeSearch(e){if(e.items){var t,a=[];for(t of e.items)"feed"==t.category?isAd(t.data)||(t.data?.page_info?.video_limit&&delete t.data.page_info.video_limit,a.push(t)):"group"==t.category?"guess"===t.header?.type&&"search"!=t.itemExt?.filterType||(t.items=t.items.filter(e=>(void 0===e.data?.card_type||17===e.data?.card_type||10===e.data?.card_type)&&"广告"!==e.data?.content_auth_info?.content_auth_title).map(e=>(17===e.data?.card_type&&(e.data.col=1),e)),0<t.items.length&&a.push(t)):checkSearchWindow(t)||a.push(t);e.items=a,e.loadedInfo&&(e.loadedInfo.searchBarContent=[],e.loadedInfo.headerBack)&&(e.loadedInfo.headerBack.channelStyleMap={}),log("remove_search success")}return e}function removeMsgAd(e){if(e.items){var t,a=[];for(t of e.items)"hotword"==t.itemId?(t.items=t.items.filter(e=>e?.data?.pic?.includes("com/wb_search")),a.push(t)):"text"==t.type&&t?.text?.content?.includes("实时热点")&&a.push(t);e.items=a,e.channelInfo&&delete e.channelInfo,log("remove_search success")}return e}function removePage(e){return removeCards(e),mainConfig.removePinedTrending&&e.cards&&0<e.cards.length&&e.cards[0].card_group&&(e.cards[0].card_group=e.cards[0].card_group.filter(e=>!(e?.actionlog?.ext?.includes("ads_word")||e?.itemid?.includes("t:51")||e?.itemid?.includes("ads_word")))),e}function removeCards(e){if(e.hotwords&&(e.hotwords=[]),e.cards){var t,a=[];for(t of e.cards){"232082type=1"!=e.cardlistInfo?.containerid||17!=t.card_type&&58!=t.card_type&&11!=t.card_type||(o=t.card_type+1,t={card_type:o});var o=t.card_group;if(o&&0<o.length){var i=[];for(const n of o)118==n.card_type||isAd(n.mblog)||-1==JSON.stringify(n).indexOf("res_from:ads")&&i.push(n);t.card_group=i,a.push(t)}else{var r=t.card_type;-1<[9,165].indexOf(r)?isAd(t.mblog)||a.push(t):-1<[1007,180].indexOf(r)||a.push(t)}}e.cards=a}e.items&&(log("data.items"),removeSearch(e))}function lvZhouHandler(e){if(mainConfig.removeLvZhou&&e){var t=e.common_struct;if(t){var a=[];for(const o of t)"绿洲"!=o.name&&a.push(o);e.common_struct=a}}}function isBlock(e){var t=mainConfig.blockIds||[];if(0!==t.length){var a=e.user.id;for(const o of t)if(o==a)return!0}return!1}function removeTimeLine(e){for(const a of["ad","advertises","trends","headers"])e[a]&&delete e[a];if(e.statuses){var t=[];for(const o of e.statuses)isAd(o)||(lvZhouHandler(o),o.common_struct&&delete o.common_struct,o.category&&"group"==o.category)||t.push(o);e.statuses=t}}function removeHomeVip(e){return e.header&&e.header.vipView&&(e.header.vipView=null),e}function removeVideoRemind(e){e.bubble_dismiss_time=0,e.exist_remind=!1,e.image_dismiss_time=0,e.image="",e.tag_image_english="",e.tag_image_english_dark="",e.tag_image_normal="",e.tag_image_normal_dark=""}function itemExtendHandler(e){var t;(mainConfig.removeRelate||mainConfig.removeGood)&&e.trend&&e.trend.titles&&(t=e.trend.titles.title,mainConfig.removeRelate&&"相关推荐"===t||mainConfig.removeGood&&"博主好物种草"===t)&&delete e.trend,mainConfig.removeFollow&&e.follow_data&&(e.follow_data=null),mainConfig.removeRewardItem&&e.reward_info&&(e.reward_info=null),e.head_cards&&delete e.head_cards,e.page_alerts&&(e.page_alerts=null);try{-1<e.trend.extra_struct.extBtnInfo.btn_picurl.indexOf("timeline_icon_ad_delete")&&delete e.trend}catch(e){}if(mainConfig.modifyMenus&&e.custom_action_list){var a=[];for(const r of e.custom_action_list){var o=r.type,i=itemMenusConfig[o];void 0===i?a.push(r):"mblog_menus_copy_url"===o?a.unshift(r):i&&a.push(r)}e.custom_action_list=a}}function updateFollowOrder(e){try{for(var t of e.items){var a;if("mainnums_friends"===t.itemId)return a=t.click.modules[0].scheme,t.click.modules[0].scheme=a.replace("231093_-_selfrecomm","231093_-_selffollowed"),void log("updateFollowOrder success")}}catch(e){console.log("updateFollowOrder fail")}}function updateProfileSkin(t,e){try{var a=mainConfig[e];if(a){let e=0;for(var o of t.items)if(o.image)try{"alpha"!=(dm=o.image.style.darkMode)&&(o.image.style.darkMode="alpha"),o.image.iconUrl=a[e++],o.dot&&(o.dot=[])}catch(e){}log("updateProfileSkin success")}}catch(e){console.log("updateProfileSkin fail")}}function removeHome(e){if(e.items){var t,a=[];for(t of e.items){var o=t.itemId;"profileme_mine"==o?((t=mainConfig.removeHomeVip?removeHomeVip(t):t).header?.vipIcon&&delete t.header.vipIcon,updateFollowOrder(t),a.push(t)):"100505_-_top8"==o?(updateProfileSkin(t,"profileSkin1"),a.push(t)):"100505_-_newcreator"==o?"grid"==t.type?(updateProfileSkin(t,"profileSkin2"),a.push(t)):mainConfig.removeHomeCreatorTask||a.push(t):"100505_-_chaohua"!=o&&"100505_-_manage"!=o&&"100505_-_recentlyuser"!=o||(0<t.images?.length&&(t.images=t.images.filter(e=>"100505_-_chaohua"==e.itemId||"100505_-_recentlyuser"==e.itemId)),a.push(t))}e.items=a}return e}function removeCheckin(e){log("remove tab1签到"),e.show=0}function removeMediaHomelist(e){mainConfig.removeLiveMedia&&(log("remove 首页直播"),e.data={})}function removeComments(e){var t=["广告","廣告","相关内容","推荐","热推","推薦","荐读"],a=(e.pageHeader&&(e.pageHeader.data.items=e.pageHeader.data.items.filter(e=>"detail"==e.category)),e.items||[]);if(0!==a.length){var o=[];for(const r of a){var i=r.data.adType||"";-1==t.indexOf(i)&&6!=r.data.card_type&&236!=r.data.card_type&&o.push(r)}log("remove 评论区相关和推荐内容"),e.items=o,e.tip_msg&&delete e.tip_msg}}function containerHandler(e){mainConfig.removeInterestFriendInTopic&&"超话里的好友"===e.card_type_name&&(log("remove 超话里的好友"),e.card_group=[]),mainConfig.removeInterestTopic&&e.itemid&&(-1<e.itemid.indexOf("infeed_may_interest_in")?(log("remove 感兴趣的超话"),e.card_group=[]):-1<e.itemid.indexOf("infeed_friends_recommend")&&(log("remove 超话好友关注"),e.card_group=[]))}function userHandler(e){if(e=removeMainTab(e),mainConfig.removeInterestUser&&e.items){var t,a=[];for(t of e.items){let e=!0;if("group"==t.category)try{"可能感兴趣的人"==t.items[0].data.desc&&(e=!1)}catch(e){}e&&(t.data?.common_struct&&delete t.data.common_struct,a.push(t))}e.items=a,log("removeMain sub success")}return e}function nextVideoHandler(e){if(e.statuses){var t,a=[];for(t of e.statuses)if(!isAd(t)){for(const o of["forward_redpacket_info","shopping","float_info","tags"])t.video_info?.[o]&&delete t.video_info[o];a.push(t)}e.statuses=a,log("removeMainTab Success")}return e}function tabSkinHandler(e){try{var t,a=mainConfig.tabIconVersion;if(e.data.canUse=1,a&&mainConfig.tabIconPath&&!(a<100)){for(t of e.data.list)t.version=a,t.downloadlink=mainConfig.tabIconPath;log("tabSkinHandler success")}}catch(e){log("tabSkinHandler fail")}}function skinPreviewHandler(e){e.data.skin_info.status=1}function removeLuaScreenAds(e){if(e.cached_ad)for(var t of e.cached_ad.ads)t.start_date=1893254400,t.show_count=0,t.duration=0,t.end_date=1893340799;return e}function removePhpScreenAds(e){if(e.ads){e.show_push_splash_ad=!1,e.background_delay_display_time=0,e.lastAdShow_delay_display_time=0,e.realtime_ad_video_stall_time=0,e.realtime_ad_timeout_duration=0;for(var t of e.ads)t.displaytime=0,t.displayintervel=86400,t.allowdaydisplaynum=0,t.displaynum=0,t.displaytime=1,t.begintime="2029-12-30 00:00:00",t.endtime="2029-12-30 23:59:59"}return e}function log(e){mainConfig.isDebug&&console.log(e)}
/* ================= Loon 适配层：配置持久化 + 内置设置面板 ================= */
var CFG_KEY="ddgksf_weibo_cfg";(function(){try{var r=$persistentStore.read(CFG_KEY);if(!r)return;var o=JSON.parse(r);if(o.main)for(var k in o.main){if(typeof mainConfig[k]==="boolean"&&Object.prototype.hasOwnProperty.call(o.main,k))mainConfig[k]=!!o.main[k];}if(o.itemMenus)for(var k2 in o.itemMenus){if(typeof itemMenusConfig[k2]==="boolean"&&Object.prototype.hasOwnProperty.call(o.itemMenus,k2))itemMenusConfig[k2]=!!o.itemMenus[k2];}}catch(e){}})();
var url=$request.url;
if(/__qx_weibo_settings__/.test(url)){weiboSettings(url);}
else{var body=$response.body;let method=getModifyMethod(url);
if(method){log(method);var func=eval(method);let data=JSON.parse(body.match(/\{.*\}/)[0]);new func(data),body=JSON.stringify(data),"removePhpScreenAds"==method&&(body=JSON.stringify(data)+"OK")}
$done({body:body});}

function weiboSettings(url){
  var q=url.split("__qx_weibo_settings__")[1]||"";
  q=q.split("?")[0].split("#")[0].replace(/\/+$/,"");
  if(q==="")q="/";
  function send(status,type,body){$done({response:{status:status,headers:{"Content-Type":type,"Cache-Control":"no-store"},body:body}});}
  function ok(o){send(200,"application/json; charset=utf-8",JSON.stringify(o));}
  if(q==="/"){send(200,"text/html; charset=utf-8",getSettingsHTML());return;}
  if(q==="/api/config"){
    var m={},im={};
    for(var k in mainConfig)if(typeof mainConfig[k]==="boolean")m[k]=mainConfig[k];
    for(var k2 in itemMenusConfig)im[k2]=!!itemMenusConfig[k2];
    ok({ok:true,version:(typeof version!=="undefined"?version:""),main:m,itemMenus:im});return;
  }
  if(q==="/api/save"){
    try{
      var b=JSON.parse($request.body||"{}");
      var payload={main:{},itemMenus:{}};
      if(b.main)for(var k3 in b.main)payload.main[k3]=!!b.main[k3];
      if(b.itemMenus)for(var k4 in b.itemMenus)payload.itemMenus[k4]=!!b.itemMenus[k4];
      $persistentStore.write(JSON.stringify(payload),CFG_KEY);
      ok({ok:true});
    }catch(e){ok({ok:false,msg:String(e)});}
    return;
  }
  if(q==="/api/reset"){$persistentStore.write("",CFG_KEY);ok({ok:true});return;}
  ok({ok:false,msg:"unknown"});
}
function getSettingsHTML(){return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>微博助手功能增强</title><style>
:root{--bg:#f4f5f7;--card:#fff;--txt:#1c1e21;--sub:#8a8f99;--line:#eceef1;--main:#ff8200}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{margin:0;overflow-x:hidden;background:var(--bg);color:var(--txt);font:15px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;padding-bottom:92px}
.hd{background:linear-gradient(135deg,#ff9a2e,#ff6a00 55%,#e6162d);color:#fff;padding:26px 20px 22px;border-radius:0 0 20px 20px}
.hd h1{margin:0;font-size:20px;font-weight:700;letter-spacing:.5px}
.hd p{margin:6px 0 0;font-size:12.5px;opacity:.88}
.wrap{padding:14px 14px 0}
.grp{background:var(--card);border-radius:14px;margin-bottom:12px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.grp>h2{margin:0;padding:13px 16px 9px;font-size:12.5px;color:var(--sub);font-weight:600;letter-spacing:.3px}
.row{display:flex;align-items:center;gap:12px;padding:13px 16px;border-top:1px solid var(--line);min-width:0}
.row:first-of-type{border-top:none}
.row .lb{flex:1;min-width:0;font-size:14.5px}
.row .ds{display:block;font-size:11.5px;color:var(--sub);margin-top:2px}
.sw{position:relative;flex:0 0 46px;width:46px;height:28px;flex-shrink:0}
.sw input{opacity:0;width:100%;height:100%;margin:0;position:absolute;z-index:2}
.sw i{position:absolute;left:0;top:0;right:0;bottom:0;background:#d9dce1;border-radius:14px;transition:.22s}
.sw i::after{content:"";position:absolute;width:24px;height:24px;left:2px;top:2px;background:#fff;border-radius:50%;transition:.22s;box-shadow:0 1px 3px rgba(0,0,0,.18)}
.sw input:checked+i{background:var(--main)}
.sw input:checked+i::after{transform:translateX(18px)}
.bar{position:fixed;left:0;right:0;bottom:0;width:100%;box-sizing:border-box;display:flex;gap:10px;padding:12px 14px calc(12px + env(safe-area-inset-bottom));background:rgba(255,255,255,.94);backdrop-filter:blur(12px);border-top:1px solid var(--line)}
button{flex:1;min-width:0;height:46px;border:0;border-radius:12px;font-size:15.5px;font-weight:600;background:#eef0f3;color:#3c4149}
button.primary{background:linear-gradient(135deg,#ff9a2e,#ff6a00);color:#fff}
#toast{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%) scale(.9);background:rgba(28,30,33,.9);color:#fff;padding:12px 22px;border-radius:12px;font-size:14px;opacity:0;pointer-events:none;transition:.22s;z-index:9}
#toast.on{opacity:1;transform:translate(-50%,-50%) scale(1)}
</style></head><body>
<div class="hd"><h1>微博助手功能增强</h1><p id="ver">全面自定义</p></div>
<div class="wrap" id="app"></div>
<div class="bar"><button id="reset">恢复默认</button><button class="primary" id="save">保存修改</button></div>
<div id="toast"></div>
<script>
var GROUPS=[
 {t:"首页与信息流",items:[["removeRecommendItem","推荐内容","首页信息流中的推荐 / 推广微博"],["removeLiveMedia","首页直播","移除首页顶部直播入口"],["removePinedTrending","热搜置顶推广","热搜榜中的置顶广告"],["removeHomeVip","我的页会员卡","隐藏我的页顶部会员卡片"],["removeHomeCreatorTask","创作者中心任务","隐藏创作者中心任务卡片"],["removeLvZhou","绿洲入口","移除微博中的绿洲推广"]]},
 {t:"详情与评论",items:[["removeRelate","相关推荐","详情页底部相关推荐"],["removeGood","博主好物种草","详情页商品种草模块"],["removeFollow","关注推荐","详情页关注推荐卡片"],["removeRewardItem","打赏模块","隐藏打赏入口"]]},
 {t:"搜索与超话",items:[["removeSearchWindow","搜索悬浮窗","搜索结果中的悬浮窗广告"],["removeInterestTopic","超话兴趣推荐","超话内推荐关注"],["removeInterestFriendInTopic","超话好友推荐","超话中的好友推荐"],["removeInterestUser","可能感兴趣的人","个人页推荐关注"]]},
 {t:"其他",items:[["removeNextVideo","下一条视频","视频流自动推荐"],["modifyMenus","精简微博菜单","只保留常用菜单项（细项见下方）"],["isDebug","调试日志","在 Loon 日志中输出处理信息"]]}
];
var MENUS=[["creator_task","创作者任务"],["mblog_menus_custom","自定义"],["mblog_menus_video_later","稍后再看"],["mblog_menus_comment_manager","评论管理"],["mblog_menus_avatar_widget","头像挂件"],["mblog_menus_card_bg","卡片背景"],["mblog_menus_long_picture","长图"],["mblog_menus_delete","删除"],["mblog_menus_edit","编辑"],["mblog_menus_edit_history","编辑记录"],["mblog_menus_edit_video","编辑视频"],["mblog_menus_sticking","置顶"],["mblog_menus_open_reward","打赏"],["mblog_menus_novelty","新鲜事"],["mblog_menus_favorite","收藏"],["mblog_menus_promote","推广"],["mblog_menus_modify_visible","修改可见"],["mblog_menus_copy_url","复制链接"],["mblog_menus_follow","关注"],["mblog_menus_video_feedback","视频反馈"],["mblog_menus_shield","屏蔽"],["mblog_menus_report","举报"],["mblog_menus_apeal","申诉"],["mblog_menus_home","主页"]];
var CFG={main:{},itemMenus:{}};
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}
function row(key,label,desc,obj){
 var r=el("div","row");var l=el("div","lb");l.appendChild(document.createTextNode(label));
 if(desc)l.appendChild(el("span","ds",desc));
 var s=el("label","sw");var i=el("input");i.type="checkbox";i.checked=!!obj[key];
 i.onchange=function(){obj[key]=i.checked;};
 s.appendChild(i);s.appendChild(el("i"));r.appendChild(l);r.appendChild(s);return r;
}
function render(){
 var app=document.getElementById("app");app.innerHTML="";
 GROUPS.forEach(function(g){
   var c=el("section","grp");c.appendChild(el("h2",null,g.t));
   g.items.forEach(function(it){c.appendChild(row(it[0],it[1],it[2],CFG.main));});
   app.appendChild(c);
 });
 var c2=el("section","grp");c2.appendChild(el("h2",null,"微博菜单项（开启 = 保留该菜单）"));
 MENUS.forEach(function(m){c2.appendChild(row(m[0],m[1],null,CFG.itemMenus));});
 app.appendChild(c2);
}
function toast(t){var e=document.getElementById("toast");e.textContent=t;e.classList.add("on");setTimeout(function(){e.classList.remove("on");},1500);}
function load(){
 fetch("/__qx_weibo_settings__/api/config").then(function(r){return r.json();}).then(function(d){
   CFG.main=d.main||{};CFG.itemMenus=d.itemMenus||{};
   document.getElementById("ver").textContent="全面自定义 · "+(d.version||"");
   render();
 }).catch(function(e){document.getElementById("app").innerHTML="配置加载失败："+e;});
}
document.getElementById("save").onclick=function(){
 fetch("/__qx_weibo_settings__/api/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(CFG)})
 .then(function(r){return r.json();}).then(function(d){toast(d.ok?"已保存，重启微博后生效":"保存失败");}).catch(function(){toast("保存失败");});
};
document.getElementById("reset").onclick=function(){
 if(!confirm("恢复全部默认设置？"))return;
 fetch("/__qx_weibo_settings__/api/reset",{method:"POST"}).then(function(r){return r.json();}).then(function(){toast("已恢复默认");setTimeout(load,400);});
};
load();
</script></body></html>`;}
