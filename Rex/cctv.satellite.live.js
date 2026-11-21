var WidgetMetadata = {"id":"cctv.satellite.live","title":"直播 · 央视卫视","version":"1.0.0","requiredVersion":"0.0.1","description":"央视 + 卫视 56 个频道，每台精选主线路，播放时自动附带同台备用线路。全部线路均经实际拉流验证。","author":"IPTV","site":"https://live.zbds.top/tv/iptv4.m3u","globalParams":[{"name":"mode","title":"数据来源","type":"enumeration","value":"builtin","enumOptions":[{"title":"内置频道表（快，推荐）","value":"builtin"},{"title":"在线订阅（需填地址）","value":"online"}],"description":"内置模式不发任何网络请求；在线模式先拉订阅，失败自动回退内置表。"},{"name":"sourceUrl","title":"订阅地址","type":"input","value":"","placeholders":[{"title":"任意 m3u/m3u8 直播源地址，留空则用内置表","value":""}],"description":"需以 #EXTM3U 开头。"}],"modules":[{"id":"grp_cctv","title":"央视","functionName":"loadGroup","cacheDuration":1800,"params":[{"name":"group","title":"分组","type":"constant","value":"央视"}]},{"id":"grp_satellite","title":"卫视","functionName":"loadGroup","cacheDuration":1800,"params":[{"name":"group","title":"分组","type":"constant","value":"卫视"}]},{"id":"loadResource","title":"加载资源","functionName":"loadResource","type":"stream","cacheDuration":0,"params":[]},{"id":"refreshSource","title":"刷新在线订阅","functionName":"refreshSource","cacheDuration":0,"params":[]}],"search":{"title":"搜索频道","functionName":"search","params":[{"name":"keyword","title":"关键词","type":"input"}]}};

// ===== 频道表：[名称, 分组, 台标, [主线路, 备用...]] =====
const BUILTIN = [["CCTV-1 综合","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-1.png",["http://74.91.26.218:82/live/cctv1hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv1hd","http://38.75.136.137:98/gslb/dsdqbv/cctv1hd.m3u8?auth=test20251009"]],["CCTV-2 财经","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-2.png",["http://192.151.150.154/live/cctv2hd.m3u8","http://198.204.228.26/live/cctv2hd.m3u8","http://107.150.60.122/live/cctv2hd.m3u8"]],["CCTV-3 综艺","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-3.png",["http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv3hd","http://107.150.60.122/live/cctv3hd.m3u8","http://74.91.26.218:82/live/cctv3hd.m3u8"]],["CCTV-4 中文国际","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-4.png",["http://107.150.60.122/live/cctv4hd.m3u8","http://173.208.212.130:8181/1080p/cctv4.m3u8","http://38.75.136.137:98/gslb/dsdqpub/cctv4k.m3u8?auth=testpub"]],["CCTV-5 体育","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-5.png",["http://107.150.60.122/live/cctv5hd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/cctv5p.m3u8?auth=testpub"]],["CCTV-6 电影","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-6.png",["http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv6hd","http://74.91.26.218:82/live/cctv6hd.m3u8"]],["CCTV-7 国防军事","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-7.png",["http://107.150.60.122/live/cctv7hd.m3u8","http://74.91.26.218:82/live/cctv7hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv7hd"]],["CCTV-8 电视剧","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-8.png",["http://74.91.26.218:82/live/cctv8hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv8k"]],["CCTV-9 纪录","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-9.png",["http://107.150.60.122/live/cctv9hd.m3u8","http://74.91.26.218:82/live/cctv9hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv9hd"]],["CCTV-10 科教","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-10.png",["http://74.91.26.218:82/live/cctv10hd.m3u8","http://38.75.136.137:98/gslb/dsdqbv/cctv10hd.m3u8?auth=test20251009"]],["CCTV-11 戏曲","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-11.png",["http://38.75.136.137:98/gslb/dsdqbv/cctv11hd.m3u8?auth=test20251009","http://74.91.26.218:82/live/cctv11hd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/cctv11hd.m3u8?auth=testpub"]],["CCTV-12 社会与法","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-12.png",["http://124.165.251.82:85/tsfile/live/0012_1.m3u8?key=txiptv&playlive=1&authid=0","http://38.75.136.137:98/gslb/dsdqbv/cctv12hd.m3u8?auth=test20251009","http://74.91.26.218:82/live/cctv12hd.m3u8"]],["CCTV-13 新闻","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-13.png",["http://ali-m-l.cztv.com/channels/lantian/channel21/1080p.m3u8","http://120.76.248.139/live/bfgd/4200000067.m3u8","http://38.75.136.137:98/gslb/dsdqbv/cctv13hd.m3u8?auth=test20251009"]],["CCTV-14 少儿","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-14.png",["http://38.75.136.137:98/gslb/dsdqbv/cctv14hd.m3u8?auth=test20251009","http://74.91.26.218:82/live/cctv14hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv14hd"]],["CCTV-15 音乐","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-15.png",["http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv15hd","http://74.91.26.218:82/live/cctv15hd.m3u8","http://38.75.136.137:98/gslb/dsdqbv/cctv15hd.m3u8?auth=test20251009"]],["CCTV-16 奥林匹克","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-16.png",["http://38.75.136.137:98/gslb/dsdqbv/cctv16hd.m3u8?auth=test20251009","http://74.91.26.218:82/live/cctv16hd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/cctv16hd.m3u8?auth=testpub"]],["CCTV-17 农业农村","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-17.png",["http://38.75.136.137:98/gslb/dsdqbv/cctv17hd.m3u8?auth=test20251009","http://74.91.26.218:82/live/cctv17hd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cctv17hd"]],["CCTV-5+","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-5%2B.png",["http://120.76.248.139/live/bfgd/4200000246.m3u8","http://223.78.65.165:9901/tsfile/live/0006_1.m3u8?key=txiptv&playlive=1&authid=0","http://38.75.136.137:98/gslb/dsdqbv/cctv5p.m3u8?auth=test20251009"]],["CCTV-8K","央视","https://www.xn--rgv465a.top/tvlogo/CCTV-8K.png",["http://192.151.150.154/live/cctv8k.m3u8"]],["北京卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%8C%97%E4%BA%AC%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000083.m3u8","http://38.75.136.137:98/gslb/dsdqbv/bjwshd.m3u8?auth=test20251009","http://107.150.60.122/live/bjwshd.m3u8"]],["天津卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%A4%A9%E6%B4%A5%E5%8D%AB%E8%A7%86.png",["http://38.75.136.137:98/gslb/dsdqpub/tjwshd.m3u8?auth=testpub","http://107.150.60.122/live/tjwshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=tjwshd"]],["河北卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B2%B3%E5%8C%97%E5%8D%AB%E8%A7%86.png",["https://event.pull.hebtv.com/live/live101.m3u8","http://120.76.248.139/live/bfgd/4200000108.m3u8","http://38.75.136.137:98/gslb/dsdqpub/hewshd.m3u8?auth=testpub"]],["山西卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%B1%B1%E8%A5%BF%E5%8D%AB%E8%A7%86.png",["http://m3u8.channel.wsrtv.com.cn/cms/videos/nmip-media/channellive/channel7/playlist.m3u8","http://204.12.221.218:8181/3m1080p/sxws.m3u8","http://107.150.60.122/live/sxwshd.m3u8"]],["内蒙古卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%86%85%E8%92%99%E5%8F%A4%E5%8D%AB%E8%A7%86.png",["http://play1-qk.nmtv.cn/live/1769652018126032.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=nmgws","http://107.150.60.122/live/nmgws.m3u8"]],["辽宁卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E8%BE%BD%E5%AE%81%E5%8D%AB%E8%A7%86.png",["http://198.204.228.26/live/lnwshd.m3u8","http://204.12.221.218:8181/3m1080p/lnws.m3u8","http://107.150.60.122/live/lnwshd.m3u8"]],["吉林卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%90%89%E6%9E%97%E5%8D%AB%E8%A7%86.png",["http://221.7.175.154:8445/tsfile/live/1014_1.m3u8?key=txiptv&playlive=1&authid=0","http://38.75.136.137:98/gslb/dsdqpub/jlwshd.m3u8?auth=testpub","http://107.150.60.122/live/jlwshd.m3u8"]],["黑龙江卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E9%BB%91%E9%BE%99%E6%B1%9F%E5%8D%AB%E8%A7%86.png",["https://idclive.hljtv.com:4430/live/hljws_own.m3u8","http://120.76.248.139/live/bfgd/4200000095.m3u8","http://38.75.136.137:98/gslb/dsdqpub/hljwshd.m3u8?auth=testpub"]],["东方卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E4%B8%9C%E6%96%B9%E5%8D%AB%E8%A7%86.png",["http://bp-resource-dfl.bestv.cn/148/3/video.m3u8","http://38.75.136.137:98/gslb/dsdqpub/dfwshd.m3u8?auth=testpub","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=dfwshd"]],["江苏卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B1%9F%E8%8B%8F%E5%8D%AB%E8%A7%86.png",["http://38.75.136.137:98/gslb/dsdqbv/jswshd.m3u8?auth=test20251009","http://107.150.60.122/live/jswshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=jswshd"]],["浙江卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B5%99%E6%B1%9F%E5%8D%AB%E8%A7%86.png",["http://ali-xwl.cztv.com/live/channel011080Plxw.m3u8","https://ali-m-l.cztv.com/channels/lantian/channel001/1080p.m3u8","http://107.150.60.122/live/zjwshd.m3u8"]],["安徽卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%AE%89%E5%BE%BD%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/ahwshd.m3u8","http://204.12.221.218:8181/3m1080p/ahws.m3u8","http://198.204.228.26/live/ahwshd.m3u8"]],["东南卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E4%B8%9C%E5%8D%97%E5%8D%AB%E8%A7%86.png",["http://live.zohi.tv/video/s10001-fztv-3/index.m3u8","http://120.76.248.139/live/bfgd/4200000483.m3u8","http://38.75.136.137:98/gslb/dsdqpub/dnwshd.m3u8?auth=testpub"]],["江西卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B1%9F%E8%A5%BF%E5%8D%AB%E8%A7%86.png",["http://112.27.5.218:9901/tsfile/live/faacts/0138_1.m3u8?key=txiptv&playlive=1&authid=0","http://38.75.136.137:98/gslb/dsdqpub/jxwshd.m3u8?auth=testpub","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=jxwshd"]],["山东卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%B1%B1%E4%B8%9C%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000099.m3u8","http://38.75.136.137:98/gslb/dsdqpub/sdwshd.m3u8?auth=testpub","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=sdwshd"]],["河南卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B2%B3%E5%8D%97%E5%8D%AB%E8%A7%86.png",["http://38.75.136.137:98/gslb/dsdqpub/hawshd.m3u8?auth=testpub","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=hawshd"]],["湖北卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B9%96%E5%8C%97%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000102.m3u8","http://107.150.60.122/live/hbwshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=hbwshd"]],["湖南卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86.png",["http://hlsal-ldvt.qing.mgtv.com/nn_live/nn_x64/dWlwPTEyNy4wLjAuMSZ1aWQ9cWluZy1jbXMmbm5fdGltZXpvbmU9OCZjZG5leF9pZD1hbF9obHNfbGR2dCZ1dWlkPTliODY4NmU5ZTM2YzYwMmMmZT02OTE0NjA0JnY9MSZpZD1ITldTWkdTVCZzPTcwN2RiYTc2YzJjNmJmMTQ4MmUyZGYzOWU2NWM3YWFi/HNWSZGST.m3u8","https://txmov2.a.kwimgs.com/bs3/video-hls/5199687338554291078_hlsb.m3u8","http://107.150.60.122/live/hnwshd.m3u8"]],["广东卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%B9%BF%E4%B8%9C%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000092.m3u8","http://38.75.136.137:98/gslb/dsdqpub/gdwshd.m3u8?auth=testpub"]],["广西卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%B9%BF%E8%A5%BF%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000116.m3u8","http://198.204.228.26/live/gxwshd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/gxwshd.m3u8?auth=testpub"]],["海南卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B5%B7%E5%8D%97%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000473.m3u8"]],["重庆卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E9%87%8D%E5%BA%86%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/cqwshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=cqwshd"]],["四川卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%9B%9B%E5%B7%9D%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/scwshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=scwshd","http://38.75.136.137:98/gslb/dsdqpub/scwshd.m3u8?auth=testpub"]],["贵州卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E8%B4%B5%E5%B7%9E%E5%8D%AB%E8%A7%86.png",["http://204.12.221.218:8181/3m1080p/gzws.m3u8","http://107.150.60.122/live/gzwshd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/gzwshd.m3u8?auth=testpub"]],["云南卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E4%BA%91%E5%8D%97%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000482.m3u8","http://107.150.60.122/live/ynwshd.m3u8","http://192.151.150.154/live/ynwshd.m3u8"]],["西藏卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E8%A5%BF%E8%97%8F%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000121.m3u8","http://112.27.5.218:9901/tsfile/live/0111_1.m3u8?key=txiptv&playlive=1&authid=0","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=xzws"]],["陕西卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E9%99%95%E8%A5%BF%E5%8D%AB%E8%A7%86.png",["http://192.151.150.154/live/snwshd.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=snwshd","http://107.150.60.122/live/snwshd.m3u8"]],["甘肃卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E7%94%98%E8%82%83%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000119.m3u8","http://38.75.136.137:98/gslb/dsdqpub/gswshd.m3u8?auth=testpub","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=gswshd"]],["青海卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E9%9D%92%E6%B5%B7%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000111.m3u8","http://107.150.60.122/live/qhws.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=qhws"]],["宁夏卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%AE%81%E5%A4%8F%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/nxws.m3u8","http://198.204.228.26/live/nxws.m3u8"]],["新疆卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%96%B0%E7%96%86%E5%8D%AB%E8%A7%86.png",["http://218.84.12.186:8001/hls/main/playlist.m3u8","http://107.150.60.122/live/xjws.m3u8","http://198.204.228.26/live/xjws.m3u8"]],["大湾区卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%A4%A7%E6%B9%BE%E5%8C%BA%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/nfws.m3u8","http://198.204.228.26/live/nfws.m3u8","http://38.75.136.137:98/gslb/dsdqpub/nfws.m3u8?auth=testpub"]],["深圳卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E6%B7%B1%E5%9C%B3%E5%8D%AB%E8%A7%86.png",["http://120.76.248.139/live/bfgd/4200000100.m3u8","http://107.150.60.122/live/szwshd.m3u8","http://38.75.136.137:98/gslb/dsdqpub/szwshd.m3u8?auth=testpub"]],["安多卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%AE%89%E5%A4%9A%E5%8D%AB%E8%A7%86.png",["https://liveout.xntv.tv/a65jur/96iln2.m3u8"]],["延边卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%BB%B6%E8%BE%B9%E5%8D%AB%E8%A7%86.png",["https://srs.iyb983.cn:443/video/CYS/index.m3u8","https://srs.iyb983.cn/video/CYS/index.m3u8"]],["厦门卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E5%8E%A6%E9%97%A8%E5%8D%AB%E8%A7%86.png",["http://198.204.228.26/live/xmws.m3u8","http://192.151.150.154/live/xmws.m3u8","http://107.150.60.122/live/xmws.m3u8"]],["三沙卫视","卫视","https://www.xn--rgv465a.top/tvlogo/%E4%B8%89%E6%B2%99%E5%8D%AB%E8%A7%86.png",["http://107.150.60.122/live/ssws.m3u8","http://63.141.230.178:82/gslb/zbdq5.m3u8?id=ssws","http://198.204.228.26/live/ssws.m3u8"]]];
const GROUP_ORDER = ["央视","卫视"];
const CACHE_KEY = "cctv.satellite.live.sub.v1";
const CACHE_TTL = 6 * 60 * 60 * 1000;
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

function sGet(k) {
  try { return Widget && Widget.storage && Widget.storage.get ? (Widget.storage.get(k) || "") : ""; } catch (e) { return ""; }
}
function sSet(k, v) {
  try { if (Widget && Widget.storage && Widget.storage.set) Widget.storage.set(k, v); } catch (e) {}
}
function readCache() {
  try {
    const raw = sGet(CACHE_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (obj && obj.expires > Date.now() && Array.isArray(obj.rows) && obj.rows.length) return obj;
  } catch (e) {}
  return null;
}
function writeCache(rows) {
  try { sSet(CACHE_KEY, JSON.stringify({ expires: Date.now() + CACHE_TTL, rows: rows })); } catch (e) {}
}

function ent(v) {
  return String(v == null ? "" : v)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'");
}

// m3u -> [[name, group, logo, [urls]]]
function parseM3U(text) {
  const src = String(text || "").replace(/\r/g, "");
  if (src.indexOf("#EXTM3U") < 0) throw new Error("订阅内容不是合法的 m3u");
  const out = [];
  let cur = null;
  src.split("\n").forEach(function (line) {
    const l = line.trim();
    if (!l) return;
    if (l.indexOf("#EXTINF") === 0) {
      const comma = l.indexOf(",");
      const info = comma >= 0 ? l.slice(0, comma) : l;
      const name = comma >= 0 ? l.slice(comma + 1).trim() : "";
      const g = /group-title="([^"]*)"/.exec(info);
      const p = /tvg-logo="([^"]*)"/.exec(info);
      cur = { n: ent(name), g: ent(g ? g[1] : "未分组"), l: ent(p ? p[1] : "") };
    } else if (l.charAt(0) !== "#" && cur) {
      let u = ent(l);
      if (u.indexOf(";http") > 0) u = u.split(";http")[0];
      cur.u = u.trim();
      if (/^https?:\/\//i.test(cur.u) || /^(rtmp|rtsp|rtp|udp|p3p):/i.test(cur.u)) out.push(cur);
      cur = null;
    }
  });
  return out.filter(function (x) { return x.n && x.u; });
}

async function fetchSource(url) {
  const opts = { timeout: 15000, headers: { "User-Agent": UA, "Accept": "*/*" } };
  let res;
  if (Widget && Widget.http && typeof Widget.http.get === "function") res = await Widget.http.get(url, opts);
  else if (Widget && Widget.http && typeof Widget.http.request === "function")
    res = await Widget.http.request(Object.assign({ url: url, method: "GET" }, opts));
  else throw new Error("当前客户端不支持网络请求");
  let body = res && res.data !== undefined ? res.data : res;
  if (body && typeof body !== "string") body = JSON.stringify(body);
  return parseM3U(body);
}

async function channels(params) {
  const p = params || {};
  const mode = String(p.mode || sGet("cctv.satellite.live.mode") || "builtin");
  const url = String(p.sourceUrl || sGet("cctv.satellite.live.sourceUrl") || "").trim();
  if (mode !== "online" || !url) return BUILTIN;
  const cached = readCache();
  if (cached) return cached.rows;
  try {
    const rows = (await fetchSource(url)).map(function (x) { return [x.n, x.g, x.l, [x.u]]; });
    if (rows.length) { writeCache(rows); return rows; }
  } catch (e) {}
  return BUILTIN;
}

function toItem(row, idx) {
  return {
    id: "cc-" + idx,
    type: "url",
    title: row[0],
    posterPath: row[2] || "",
    description: row[1] + (row[3].length > 1 ? " · " + row[3].length + " 条线路" : ""),
    link: "iptv:" + encodeURIComponent(JSON.stringify({ i: idx, n: row[0], u: row[3] })),
  };
}

async function loadGroup(params) {
  const p = params || {};
  const group = String(p.group || "");
  const rows = await channels(p);
  const out = [];
  for (let i = 0; i < rows.length; i++) {
    if (!group || rows[i][1] === group) out.push(toItem(rows[i], i));
  }
  if (!out.length) return [{ id: "cc-empty", type: "url", title: "该分组暂无频道", description: "请检查订阅地址或切换数据来源" }];
  return out;
}

async function search(params) {
  const p = params || {};
  const kw = String(p.keyword || "").trim().toLowerCase();
  const rows = await channels(p);
  if (!kw) return [];
  const hit = [], like = [];
  for (let i = 0; i < rows.length; i++) {
    const name = String(rows[i][0]).toLowerCase();
    if (name === kw) hit.push(toItem(rows[i], i));
    else if (name.indexOf(kw) >= 0) like.push(toItem(rows[i], i));
  }
  return hit.concat(like);
}

function decodeLink(link) {
  const s = String(link || "");
  if (s.indexOf("iptv:") !== 0) return null;
  try { return JSON.parse(decodeURIComponent(s.slice(5))); } catch (e) { return null; }
}

async function loadResource(params) {
  const p = params || {};
  const info = decodeLink(p.link);
  if (!info) return [];
  let urls = [];
  if (Array.isArray(info.u)) urls = info.u.filter(function (x) { return x; });
  else if (info.u) urls = [info.u];
  return urls.map(function (u, i) {
    const origin = u.split("/").slice(0, 3).join("/") + "/";
    return {
      name: (info.n || "直播") + (i === 0 ? "" : " · 备用" + i),
      description: i === 0 ? "主线路" : "备用线路",
      url: u,
      headers: { "User-Agent": UA, "Referer": origin },
    };
  });
}

async function refreshSource(params) {
  const p = params || {};
  const url = String(p.sourceUrl || sGet("cctv.satellite.live.sourceUrl") || "").trim();
  if (!url) return [{ id: "cc-refresh-noop", type: "url", title: "未填写订阅地址", description: "当前使用内置频道表，无需刷新" }];
  try {
    const rows = (await fetchSource(url)).map(function (x) { return [x.n, x.g, x.l, [x.u]]; });
    if (!rows.length) throw new Error("未解析到频道");
    writeCache(rows);
    return [{ id: "cc-refresh-ok", type: "url", title: "订阅已更新", description: "共 " + rows.length + " 个频道，返回分组页即可看到最新列表" }];
  } catch (e) {
    return [{ id: "cc-refresh-fail", type: "url", title: "订阅更新失败", description: String((e && e.message) || e) + "；仍使用内置频道表" }];
  }
}
