WidgetMetadata = {
  id: "com.zenmofeishi.yangshipin.live",
  title: "央视频直播",
  version: "1.3.0",
  requiredVersion: "0.0.1",
  description: "央视频直播",
  author: "TG@ZenMoFiShi",
  site: "https://www.yangshipin.cn/",
  detailCacheDuration: 0,
  modules: [
    {
      id: "loadList",
      title: "电视频道",
      functionName: "loadList",
      cacheDuration: 300,
      params: [{name:"group",title:"频道分类",type:"enumeration",value:"all",enumOptions:[{title:"全部",value:"all"},{title:"央视与 CGTN",value:"yangshi"},{title:"卫视频道",value:"weishi"}]}]
    },
    {id:"loadResource",title:"获取直播线路",functionName:"loadResource",type:"stream",cacheDuration:0,params:[]}
  ],
  search: {title:"搜索频道",functionName:"search",params:[{name:"keyword",title:"频道名称",type:"input"}]}
};

function yspChannelKey(value) {
  var s=String(value||"");
  if(s.indexOf("ysp-live:")===0)return s.slice(9);
  return s;
}
function yspFindChannel(value) {
  var k=yspChannelKey(value);
  for(var i=0;i<YSP_CHANNELS.length;i++)if(YSP_CHANNELS[i].pid===k)return YSP_CHANNELS[i];
  return null;
}
function yspChannelItem(ch) {
  return {id:ch.pid,type:"url",title:ch.title,link:"ysp-live:"+ch.pid,posterPath:ch.logo,backdropPath:ch.logo,description:(ch.group==="yangshi"?"央视与 CGTN":"卫视频道")+" · 直播",playerType:"system"};
}
async function loadList(params) {
  params=params||{};
  var group=String(params.group||"all"),list=[];
  for(var i=0;i<YSP_CHANNELS.length;i++)if(group==="all"||YSP_CHANNELS[i].group===group)list.push(yspChannelItem(YSP_CHANNELS[i]));
  return list;
}
function yspSearchKey(value) {
  return String(value||"").toLowerCase().replace(/[\s\-_·（）()]/g,"").replace(/中央电视台|央视/g,"cctv").replace(/综合/g,"");
}
async function search(params) {
  var k=yspSearchKey((params||{}).keyword);
  if(!k)return [];
  var out=[];
  for(var i=0;i<YSP_CHANNELS.length;i++)if(yspSearchKey(YSP_CHANNELS[i].title).indexOf(k)!==-1)out.push(yspChannelItem(YSP_CHANNELS[i]));
  return out;
}

var YSP_CHANNELS = [
  {
    "pid": "600001859",
    "cnlid": "2024078201",
    "title": "CCTV-1 综合",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/d57905b93540bd15f0c48230dbbbff7ee0d645ff539e38866e2d15c8b9f7dfcd.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001800",
    "cnlid": "2024075401",
    "title": "CCTV-2 财经",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/20115388de0207131af17eac86c33049b95d69eaff064e55653a1b941810a006.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001801",
    "cnlid": "2024068501",
    "title": "CCTV-3 综艺",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/7b7a65c712450da3deb6ca66fbacf4f9aee00d3f20bd80eafb5ada01ec63eb3a.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001814",
    "cnlid": "2029797101",
    "title": "CCTV-4 中文国际",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/f357e58fdbcc076a3d65e1f958c942b2e14f14342c60736ceed98b092d35356a.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001818",
    "cnlid": "2024078401",
    "title": "CCTV-5 体育",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/0a6a7138952675983a3d854df7688557b286d59aa06166edae51506f9204d655.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001817",
    "cnlid": "2024078001",
    "title": "CCTV-5+ 体育赛事",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/649ad76a90bfef55b05db9fe52e006487280f619089099d5dc971e387fc6eff0.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600108442",
    "cnlid": "2013693901",
    "title": "CCTV-6 电影",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/741515efda91f03f455df8a7da4ee11fa9329139c276435cf0a9e2af398d5bf2.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600004092",
    "cnlid": "2024072001",
    "title": "CCTV-7 国防军事",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/b29af94e295ebdf646cefb68122c429b9cd921f498ca20d2d8070252536f9ff9.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001803",
    "cnlid": "2029793001",
    "title": "CCTV-8 电视剧",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/ad51de94426a0ba039e6dd6a8534ea98ecc813a6176bde87b4f18cc34d6d7590.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600004078",
    "cnlid": "2024078601",
    "title": "CCTV-9 纪录",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/2ed1b4deeca179d5db806bb941790f82eb92a1b7299c1c38fe027f95a5caee5e.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001805",
    "cnlid": "2024078701",
    "title": "CCTV-10 科教",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/aa6157ec65188cd41826e5a2f088c3d6d153205f5f6428258d12c59999e221aa.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001806",
    "cnlid": "2027248701",
    "title": "CCTV-11 戏曲",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/ed12ed7c7a1034dae4350011fe039284c5d5a836506b28c9e32e3c75299625c0.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001807",
    "cnlid": "2027248801",
    "title": "CCTV-12 社会与法",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/484083cffaa40df7e659565e8cb4d1cc740158a185512114167aa21fa0c59240.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001811",
    "cnlid": "2029797201",
    "title": "CCTV-13 新闻",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/266da7b43c03e2312186b4a999e0f060e8f15b10d2cc2c9aa32171819254cf1a.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001809",
    "cnlid": "2027248901",
    "title": "CCTV-14 少儿",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/af6b603896938dc346fbb16abfc63c12cba54b0ec9d18770a15d347d115f12d5.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001815",
    "cnlid": "2027249001",
    "title": "CCTV-15 音乐",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/2ceee92188ef684efe0d8b90839c4f3ad450d179dc64d59beff417059453af47.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600098637",
    "cnlid": "2027249101",
    "title": "CCTV-16 奥林匹克",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600099502",
    "cnlid": "2027249301",
    "title": "CCTV-16 奥林匹克 4K",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/53793fa7bacd3a93ff6dc5d2758418985e1f952a316c335d663b572d8bdcd74d.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600001810",
    "cnlid": "2027249401",
    "title": "CCTV-17 农业农村",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/ddef563072f8bad2bea5b9e52674cb7b4ed50efb20c26e61994dfbdf05c1e3c0.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600002264",
    "cnlid": "2029810301",
    "title": "CCTV-4K 超高清",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/3e9d06fd7244d950df5838750f1c6ac3456e172b51caca2c16d2282125b111e8.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600156816",
    "cnlid": "2026774101",
    "title": "CCTV-8K 超高清",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202503/df543dd2e337be8bf6aa06342d8d790992f7ae47b89403606253436e40409031.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600014550",
    "cnlid": "2024181701",
    "title": "CGTN",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/a72dff758ca1c17cd0ecc8cedc11b893d208f409d5e6302faa0e9d298848abc3.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600084704",
    "cnlid": "2024181801",
    "title": "CGTN法语频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/a8d0046a47433d952bf6ed17062deb8bd2184ba9aec0f7781df6bf9487a3ffcf.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600084758",
    "cnlid": "2024181901",
    "title": "CGTN俄语频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/bf0a820893cbaf20dd0333e27042e1ef9c8806e5b602b6a8c95af399db0bc77a.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600084782",
    "cnlid": "2024182001",
    "title": "CGTN阿拉伯语频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/2e44e2aa3e7a1cedf07fd0ae59fe69e86a60a2632660a006e3e9e7397b2d107e.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600084744",
    "cnlid": "2024182101",
    "title": "CGTN西班牙语频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202309/7c337e3dbe64402ec7e4678a619a4a6d95144e42f35161181ff78e143b7cf67a.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600084781",
    "cnlid": "2024182301",
    "title": "CGTN外语纪录频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202309/74d3ac436a7e374879578de1d87a941fbf566d39d5632b027c5097891ed32bd5.png?imageMogr2/format/webp",
    "group": "yangshi"
  },
  {
    "pid": "600002309",
    "cnlid": "2024052703",
    "title": "北京卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/f4f23633c578beea49a3841d88d3490100f029ee349059fa532869db889872c5.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002521",
    "cnlid": "2024171103",
    "title": "江苏卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/380ad685c0c1d5b2c902246b8d2df6d3f9b45e2837abcfe493075bbded597a31.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002483",
    "cnlid": "2024054503",
    "title": "东方卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/9bd372ca292a82ce3aa08772b07efc4af1f85c21d1f268ea33440c49e9a0a488.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002520",
    "cnlid": "2024054703",
    "title": "浙江卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/a66c836bd98ba3e41a2e9a570d4b9c50dedc6839e9de333e2e78212ad505f37e.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002475",
    "cnlid": "2024054803",
    "title": "湖南卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/4120e89d3079d08aa17d382f69a2308ec70839b278367763c34a34666c75cb88.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002508",
    "cnlid": "2024171203",
    "title": "湖北卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/7a6be5a2bb1dc53a945c016ff1f525dc4a84c51db371c15c89aa55404b0ba784.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002485",
    "cnlid": "2024060903",
    "title": "广东卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/28886880a4dc0f06fb7e0a528a1def0591d61a65870e29176ede0cc92033bbfd.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002509",
    "cnlid": "2024060703",
    "title": "广西卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/54b7e97cb816bb223fe05f3fc44da2c7820eb66e8550c19d23100f2c414ecc38.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002498",
    "cnlid": "2029797003",
    "title": "黑龙江卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/d8273ae9be698ce2db21f5b886ecac95a73429593f93713c60ed8c12c38bf0d3.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002506",
    "cnlid": "2024055603",
    "title": "海南卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/6e060391fde0469801fc3d84dbf204b4f8d650d251f17d7595a6964c0bb99e81.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002531",
    "cnlid": "2024061103",
    "title": "重庆卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/657651f411de2673d1770d9a78b44c1265704f7468cc41d4be7f51d630768494.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002481",
    "cnlid": "2024061303",
    "title": "深圳卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/d59fec04c902e3581c617136d02d4b9b8c4cbe64272781ddd3525e80c823edb7.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002516",
    "cnlid": "2024061403",
    "title": "四川卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/3276a414ae0eaa0f116f2045cd913367967d0c7c1e978e8621ac3879436c6ed7.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002525",
    "cnlid": "2029797303",
    "title": "河南卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/74925962148a6d31c85808b6cd4e444c2a54bab393d2c5fc85e960b50e22fa86.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002484",
    "cnlid": "2024061503",
    "title": "福建东南卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/3208fe6564a293c21b711333fb3edb05bb5b406cff840573c9a8d839680a1579.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002490",
    "cnlid": "2024061603",
    "title": "贵州卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/4eb45f4781d33d872af027dc01c941559aab55667dd99cc5c22bef7037807b13.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002503",
    "cnlid": "2024061703",
    "title": "江西卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/3c760d0d00463855890e8a1864ea4a6b6dd66b90c29b4ac714a4b17c16519871.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002505",
    "cnlid": "2024171303",
    "title": "辽宁卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/ac4ed6058a87c101ae7147ebc38905d0cae047fb73fd277ee5049b84f52bda36.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002532",
    "cnlid": "2024171403",
    "title": "安徽卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/f35fa04b51b1ee4984b03578b65403570868ebca03c6c01e11b097f999a58d9b.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002493",
    "cnlid": "2024171503",
    "title": "河北卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/d545becdc81c60197b08c7f47380705e4665ed3fe55efc8b855e486f6e655378.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600002513",
    "cnlid": "2029787903",
    "title": "山东卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202306/22d403f07a7cf5410b3ad3ddb65a11aa229a32475fac213f5344c9f0ec330ca1.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600152137",
    "cnlid": "2019927003",
    "title": "天津卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/2642bf96eaf49fdc6b08db2cf6a3d8a7c30824bbcc199985e70e8b8846c5d14d.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190405",
    "cnlid": "2025561503",
    "title": "吉林卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/cfe6b0f01c7e381471b774f5a9f615e1bb70b946ad658da9ed6fcae28d752881.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190400",
    "cnlid": "2029795103",
    "title": "陕西卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/b63ce6fd91a92076273ea2d4679bfbe367ece51a114b54b79a66bc8de5831fa0.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190408",
    "cnlid": "2025561703",
    "title": "甘肃卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/ed4e35722f6d07f19274cac60eec0cc9e1205776c246a3717c2e9152025b3ddd.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190737",
    "cnlid": "2025608503",
    "title": "宁夏卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/8392c1ee75dca2a13f6dc0efa37519be4284764fecd65415a1a9f55b11534c5b.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190401",
    "cnlid": "2025561203",
    "title": "内蒙古卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/fe60396ae9ead3125d763146d8bc1e9b51ed8e19e8dc61600e28cc0b2f2d28c7.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190402",
    "cnlid": "2025561303",
    "title": "云南卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/907600c544719ffdaa6b6fa177d91b530dc9ce38e3dfd43a14ea7c805a7df97d.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190407",
    "cnlid": "2025560803",
    "title": "山西卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/d9fe4441f6adcfe9fd7ee2e45bf46d2a355b0fa48ff10dbba12978d2f8cf9780.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190406",
    "cnlid": "2025559103",
    "title": "青海卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/182e779878c85642049514a6e033f6be41aa8bf5f489fadc6f63dfc50863c36d.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600190403",
    "cnlid": "2025558003",
    "title": "西藏卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202411/37f9668cded5cc19848cfe7dcaf717de4acc47667dde656ba2646aba372eebbe.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600171827",
    "cnlid": "2022823801",
    "title": "中国教育电视台1频道",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202412/2b9301a4795c7f23b7ec7ed651d8c7df002ce8c608168970485999b03d29f783.png?imageMogr2/format/webp",
    "group": "weishi"
  },
  {
    "pid": "600152138",
    "cnlid": "2019927403",
    "title": "新疆卫视",
    "logo": "https://resources.yangshipin.cn/assets/oms/image/202412/005fd504f809ab28ec8cdd5d34d3886f0611ddefa20ebcc0f3f7dc176ad528c7.png?imageMogr2/format/webp",
    "group": "weishi"
  }
];

var YspCrypto = (function () {
  const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  function utf8Encode(str) {
    const s = String(str == null ? "" : str);
    const out = [];
    for (let i = 0; i < s.length; i++) {
      let c = s.charCodeAt(i);
      if (c >= 0xd800 && c <= 0xdbff && i + 1 < s.length) {
        const d = s.charCodeAt(i + 1);
        if (d >= 0xdc00 && d <= 0xdfff) {
          c = 0x10000 + ((c - 0xd800) << 10) + (d - 0xdc00);
          i++;
        }
      }
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
      else if (c < 0x10000) out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
      else out.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
    return out;
  }

  function utf8Decode(bytes) {
    let out = "";
    let i = 0;
    while (i < bytes.length) {
      const a = bytes[i++];
      let c;
      if (a < 0x80) c = a;
      else if (a >= 0xf0) c = ((a & 7) << 18) | ((bytes[i++] & 63) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
      else if (a >= 0xe0) c = ((a & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
      else if (a >= 0xc0) c = ((a & 31) << 6) | (bytes[i++] & 63);
      else c = 0xfffd;
      if (c > 0xffff) {
        c -= 0x10000;
        out += String.fromCharCode(0xd800 + (c >> 10), 0xdc00 + (c & 1023));
      } else {
        out += String.fromCharCode(c);
      }
    }
    return out;
  }

  function hexToBytes(hex) {
    const h = String(hex || "").replace(/[^0-9a-f]/gi, "");
    const out = new Array(h.length >> 1);
    for (let i = 0; i < out.length; i++) out[i] = parseInt(h.substr(i * 2, 2), 16);
    return out;
  }

  function bytesToHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.length; i++) out += (bytes[i] < 16 ? "0" : "") + bytes[i].toString(16);
    return out;
  }

  function base64ToBytes(text) {
    const s = String(text || "").replace(/[^A-Za-z0-9+/]/g, "");
    const out = [];
    let buf = 0;
    let bits = 0;
    for (let i = 0; i < s.length; i++) {
      buf = (buf << 6) | B64.indexOf(s.charAt(i));
      bits += 6;
      if (bits >= 8) {
        bits -= 8;
        out.push((buf >> bits) & 255);
      }
    }
    return out;
  }

  function bytesToBase64(bytes) {
    let out = "";
    for (let i = 0; i < bytes.length; i += 3) {
      const a = bytes[i];
      const b = i + 1 < bytes.length ? bytes[i + 1] : 0;
      const c = i + 2 < bytes.length ? bytes[i + 2] : 0;
      const n = (a << 16) | (b << 8) | c;
      out += B64.charAt((n >> 18) & 63) + B64.charAt((n >> 12) & 63);
      out += i + 1 < bytes.length ? B64.charAt((n >> 6) & 63) : "=";
      out += i + 2 < bytes.length ? B64.charAt(n & 63) : "=";
    }
    return out;
  }

  const SBOX = new Array(256);
  const INV_SBOX = new Array(256);
  (function () {
    let p = 1;
    let q = 1;
    do {
      p = p ^ ((p << 1) & 255) ^ (p & 128 ? 0x1b : 0);
      q ^= q << 1;
      q ^= q << 2;
      q ^= q << 4;
      q &= 255;
      if (q & 128) q ^= 0x09;
      const x = q ^ ((q << 1 | q >> 7) & 255) ^ ((q << 2 | q >> 6) & 255) ^ ((q << 3 | q >> 5) & 255) ^ ((q << 4 | q >> 4) & 255) ^ 0x63;
      SBOX[p] = x;
      INV_SBOX[x] = p;
    } while (p !== 1);
    SBOX[0] = 0x63;
    INV_SBOX[0x63] = 0;
  })();

  function xtime(a) { return ((a << 1) ^ (a & 128 ? 0x1b : 0)) & 255; }
  function gmul(a, b) {
    let r = 0;
    while (b) {
      if (b & 1) r ^= a;
      a = xtime(a);
      b >>= 1;
    }
    return r;
  }

  function expandKey(key) {
    const nk = key.length >> 2;
    const nr = nk + 6;
    const w = key.slice();
    let rcon = 1;
    for (let i = nk; i < 4 * (nr + 1); i++) {
      let t = w.slice((i - 1) * 4, i * 4);
      if (i % nk === 0) {
        t = [SBOX[t[1]] ^ rcon, SBOX[t[2]], SBOX[t[3]], SBOX[t[0]]];
        rcon = xtime(rcon);
      } else if (nk > 6 && i % nk === 4) {
        t = t.map(v => SBOX[v]);
      }
      for (let j = 0; j < 4; j++) w.push(w[(i - nk) * 4 + j] ^ t[j]);
    }
    return { w, nr };
  }

  function encryptBlock(s, ks) {
    const { w, nr } = ks;
    for (let i = 0; i < 16; i++) s[i] ^= w[i];
    for (let r = 1; r <= nr; r++) {
      for (let i = 0; i < 16; i++) s[i] = SBOX[s[i]];
      let t = s[1]; s[1] = s[5]; s[5] = s[9]; s[9] = s[13]; s[13] = t;
      t = s[2]; s[2] = s[10]; s[10] = t; t = s[6]; s[6] = s[14]; s[14] = t;
      t = s[15]; s[15] = s[11]; s[11] = s[7]; s[7] = s[3]; s[3] = t;
      if (r < nr) {
        for (let c = 0; c < 16; c += 4) {
          const a0 = s[c], a1 = s[c + 1], a2 = s[c + 2], a3 = s[c + 3];
          const x = a0 ^ a1 ^ a2 ^ a3;
          s[c] ^= x ^ xtime(a0 ^ a1);
          s[c + 1] ^= x ^ xtime(a1 ^ a2);
          s[c + 2] ^= x ^ xtime(a2 ^ a3);
          s[c + 3] ^= x ^ xtime(a3 ^ a0);
        }
      }
      for (let i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
    }
    return s;
  }

  function decryptBlock(s, ks) {
    const { w, nr } = ks;
    for (let i = 0; i < 16; i++) s[i] ^= w[nr * 16 + i];
    for (let r = nr - 1; r >= 0; r--) {
      let t = s[13]; s[13] = s[9]; s[9] = s[5]; s[5] = s[1]; s[1] = t;
      t = s[2]; s[2] = s[10]; s[10] = t; t = s[6]; s[6] = s[14]; s[14] = t;
      t = s[3]; s[3] = s[7]; s[7] = s[11]; s[11] = s[15]; s[15] = t;
      for (let i = 0; i < 16; i++) s[i] = INV_SBOX[s[i]];
      for (let i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
      if (r > 0) {
        for (let c = 0; c < 16; c += 4) {
          const a0 = s[c], a1 = s[c + 1], a2 = s[c + 2], a3 = s[c + 3];
          s[c] = gmul(a0, 14) ^ gmul(a1, 11) ^ gmul(a2, 13) ^ gmul(a3, 9);
          s[c + 1] = gmul(a0, 9) ^ gmul(a1, 14) ^ gmul(a2, 11) ^ gmul(a3, 13);
          s[c + 2] = gmul(a0, 13) ^ gmul(a1, 9) ^ gmul(a2, 14) ^ gmul(a3, 11);
          s[c + 3] = gmul(a0, 11) ^ gmul(a1, 13) ^ gmul(a2, 9) ^ gmul(a3, 14);
        }
      }
    }
    return s;
  }

  function aesCbcEncrypt(data, key, iv) {
    const ks = expandKey(key);
    const pad = 16 - (data.length % 16);
    const src = data.concat(new Array(pad).fill(pad));
    const out = [];
    let prev = iv.slice();
    for (let i = 0; i < src.length; i += 16) {
      const block = src.slice(i, i + 16).map((v, j) => v ^ prev[j]);
      prev = encryptBlock(block, ks);
      for (let j = 0; j < 16; j++) out.push(prev[j]);
    }
    return out;
  }

  function aesCbcDecrypt(data, key, iv) {
    if (!data.length || data.length % 16) throw new Error("AES 密文长度错误");
    const ks = expandKey(key);
    const out = [];
    let prev = iv.slice();
    for (let i = 0; i < data.length; i += 16) {
      const block = data.slice(i, i + 16);
      const plain = decryptBlock(block.slice(), ks);
      for (let j = 0; j < 16; j++) out.push(plain[j] ^ prev[j]);
      prev = block;
    }
    const pad = out[out.length - 1];
    if (pad < 1 || pad > 16) throw new Error("AES 填充错误");
    return out.slice(0, out.length - pad);
  }

  function md5(bytes) {
    const K = [];
    for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) | 0;
    const S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
    const msg = bytes.slice();
    const bitLen = bytes.length * 8;
    msg.push(0x80);
    while (msg.length % 64 !== 56) msg.push(0);
    for (let i = 0; i < 8; i++) msg.push(i < 4 ? (bitLen >>> (8 * i)) & 255 : Math.floor(bitLen / 4294967296) >>> (8 * (i - 4)) & 255);
    let a0 = 0x67452301, b0 = 0xefcdab89 | 0, c0 = 0x98badcfe | 0, d0 = 0x10325476;
    for (let off = 0; off < msg.length; off += 64) {
      const M = [];
      for (let i = 0; i < 16; i++) M[i] = msg[off + i * 4] | (msg[off + i * 4 + 1] << 8) | (msg[off + i * 4 + 2] << 16) | (msg[off + i * 4 + 3] << 24);
      let A = a0, B = b0, C = c0, D = d0;
      for (let i = 0; i < 64; i++) {
        let F, g;
        if (i < 16) { F = (B & C) | (~B & D); g = i; }
        else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; }
        else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
        else { F = C ^ (B | ~D); g = (7 * i) % 16; }
        const sh = S[(i >> 4) * 4 + (i & 3)];
        const x = (A + F + K[i] + M[g]) | 0;
        A = D; D = C; C = B;
        B = (B + ((x << sh) | (x >>> (32 - sh)))) | 0;
      }
      a0 = (a0 + A) | 0; b0 = (b0 + B) | 0; c0 = (c0 + C) | 0; d0 = (d0 + D) | 0;
    }
    const out = [];
    [a0, b0, c0, d0].forEach(v => { for (let i = 0; i < 4; i++) out.push((v >>> (8 * i)) & 255); });
    return bytesToHex(out);
  }

  return {md5:function(s){return md5(utf8Encode(s));},encrypt:function(s,k,v){return bytesToHex(aesCbcEncrypt(utf8Encode(s),hexToBytes(k),hexToBytes(v)));},decode64:function(s){return utf8Decode(base64ToBytes(s));},encode:utf8Encode,decode:utf8Decode};
})();

var YspKeygen=(function(){
var state={},heap={},handle=132,memory;
function text(p,n){return YspCrypto.decode(Array.prototype.slice.call(new Uint8Array(memory.buffer,p,n)));}
var wbg={
__wbg_get_9c1840f7ecd81363:function(p,n){var key=text(p,n),prefix="cctvh5openapi.state.",v="";if(key.indexOf(prefix)===0)v=state[key.slice(prefix.length)]||"";else if(key==="window.location.host")v="www.yangshipin.cn";else if(key==="window.location.protocol")v="https:";var h=handle++;heap[h]=String(v);return h;},
__wbindgen_string_get:function(out,h){var bytes=YspCrypto.encode(heap[h]||""),p=retasmFunc.__wbindgen_malloc(bytes.length,1);new Uint8Array(memory.buffer,p,bytes.length).set(bytes);var d=new DataView(memory.buffer);d.setInt32(out,p,true);d.setInt32(out+4,bytes.length,true);},
__wbindgen_object_drop_ref:function(h){delete heap[h];}
};

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123 );
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; 

    base64ReverseLookup[65+i] = i; 

    base64ReverseLookup[97+i] = 26+i; 

  }
  base64ReverseLookup[43] = 62; 

  base64ReverseLookup[47] = 63; 

   
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1048576, "L1VzZXJzL3dhbmdzaG91bWluZy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3dhc20tYmluZGdlbi0wLjIuOTMvc3JjL2NvbnZlcnQvc2xpY2VzLnJzAAAAABAAcgAAABwBAAAOAAAAL1VzZXJzL3dhbmdzaG91bWluZy8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3NsaWNlLnJzAACEABAAcgAAAKEAAAAZAAAAL1VzZXJzL3dhbmdzaG91bWluZy8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMIARAAdAAAACgCAAARAAAAY2N0dmg1b3BlbmFwaS5zdGF0ZS52ZXJzaW9uY2N0dmg1b3BlbmFwaS5zdGF0ZS5ndWlkOwEAAAAAAAAAvwEQAAEAAABndWlkIHRhZzogAADQARAACgAAAGNjdHZoNW9wZW5hcGkuc3RhdGUueXNwYXBwaWR5c3BhcHBpZDoAAAAAAhAACQAAAL8BEAABAAAAeXNwYXBwaWQgdGFnOiAAABwCEAAOAAAAd2luZG93LmxvY2F0aW9uLmhvc3Rob3N0OgAAAEgCEAAFAAAAvwEQAAEAAABob3N0IHRhZzogAABgAhAACgAAAHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbHByb3RvY29sOgAAAIwCEAAJAAAAvwEQAAEAAABwcm90b2NvbCB0YWc6IAAAqAIQAA4AAABjY3R2aDVvcGVuYXBpLnN0YXRlLnRva2VudG9rZW46ANkCEAAGAAAAvwEQAAEAAAB0b2tlbiB0YWc6IADwAhAACwAAAGNjdHZoNW9wZW5hcGkuc3RhdGUuaW5wdXRpbnB1dDoAHQMQAAYAAAC/ARAAAQAAAGlucHV0IHRhZzogADQDEAALAAAAY2N0dmg1b3BlbmFwaS5zdGF0ZS50c3RzIHRhZzogAABeAxAACAAAAAEAAAAAAAAAdG9rZW5fcm5kO3JuZCBpbnB1dDogAAAAggMQAAsAAABvdXRwdXQgcm5kOiCYAxAADAAAAG1kNSBpbnB1dDogAKwDEAALAAAAb3V0cHV0IHNpZ25hdHVyZTogAADAAxAAEg==");
  base64DecodeToExistingUint8Array(bufferView, 1049572, "AQAAAAMAAABjYW5ub3QgYWNjZXNzIGEgVGhyZWFkIExvY2FsIFN0b3JhZ2UgdmFsdWUgZHVyaW5nIG9yIGFmdGVyIGRlc3RydWN0aW9uL1VzZXJzL3dhbmdzaG91bWluZy8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMAAAAyBBAAdwAAABABAAAaAAAABAAAAC9Vc2Vycy93YW5nc2hvdW1pbmcvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjkzL3NyYy9jb252ZXJ0L3NsaWNlcy5ycwAAwAQQAHIAAADgAAAAAQAAAIA=");
  base64DecodeToExistingUint8Array(bufferView, 1049988, "AQAAAAAAAAAvcnVzdGMvNGViMTYxMjUwZTM0MGM4ZjQ4ZjY2ZTJiOTI5ZWY0YTViZWQ3YzE4MS9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMAjAUQAEsAAACNBQAAGwAAAC9ydXN0Yy80ZWIxNjEyNTBlMzQwYzhmNDhmNjZlMmI5MjllZjRhNWJlZDdjMTgxL2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnPoBRAATAAAACgCAAARAAAACAAAAAwAAAAEAAAACQAAAAoAAAALAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNy9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkAFwGEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAABcBhAAKQAAAK4EAAANAAAAQWNjZXNzRXJyb3JtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkAAAADwcQABUAAAAkBxAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5yc0QHEAAYAAAAYwEAAAkAAAAIAAAADAAAAAQAAAAMAAAAAAAAAAgAAAAEAAAADQAAAAAAAAAIAAAABAAAAA4AAAAPAAAAEAAAABEAAAASAAAAEAAAAAQAAAATAAAAFAAAABUAAAAWAAAARXJyb3IAAAAXAAAADAAAAAQAAAAYAAAAGQAAABoAAABjYXBhY2l0eSBvdmVyZmxvdwAAAOQHEAARAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycwAIEAAcAAAAKAIAABEAAABsaWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMALAgQABsAAADqAQAAFw==");
  base64DecodeToExistingUint8Array(bufferView, 1050720, "AQAAABsAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3Igd2hlbiB0aGUgdW5kZXJseWluZyBzdHJlYW0gZGlkIG5vdGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycwAAvggQABgAAACKAgAADgAAACwIEAAbAAAAjQUAABsAAAA6IAAAAQAAAAAAAAD4CBAAAgAAAH0gfTB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTk=");
}
function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var buffer = new ArrayBuffer(1114112);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var wbg = imports.wbg;
 var fimport$0 = wbg.__wbg_get_9c1840f7ecd81363;
 var fimport$1 = wbg.__wbindgen_string_get;
 var fimport$2 = wbg.__wbindgen_object_drop_ref;
 var global$0 = 1048576;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $19_1 = 0, $9_1 = 0, i64toi32_i32$1 = 0, $8_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $325 = 0, $392 = 0, $797 = 0, $885 = 0, $1069 = 0, $248 = 0, $580 = 0, $10_1 = 0, $10$hi = 0, $747 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $8_1 = global$0 - 16 | 0;
  global$0 = $8_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         if ($0_1 >>> 0 >= 245 >>> 0) {
          $19_1 = 0;
          if ($0_1 >>> 0 >= -65587 >>> 0) {
           break label$1
          }
          $1_1 = $0_1 + 11 | 0;
          $5_1 = $1_1 & -8 | 0;
          $9_1 = HEAP32[1051572 >> 2] | 0;
          if (!$9_1) {
           break label$4
          }
          $7_1 = 31;
          $4_1 = 0 - $5_1 | 0;
          if ($0_1 >>> 0 <= 16777204 >>> 0) {
           $0_1 = Math_clz32($1_1 >>> 8 | 0);
           $7_1 = ((($5_1 >>> (6 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
          }
          $1_1 = HEAP32[(($7_1 << 2 | 0) + 1051160 | 0) >> 2] | 0;
          if (!$1_1) {
           $0_1 = 0;
           break label$7;
          }
          $0_1 = 0;
          $3_1 = $5_1 << (($7_1 | 0) != (31 | 0) ? 25 - ($7_1 >>> 1 | 0) | 0 : 0) | 0;
          label$11 : while (1) {
           label$12 : {
            $6_1 = (HEAP32[($1_1 + 4 | 0) >> 2] | 0) & -8 | 0;
            if ($6_1 >>> 0 < $5_1 >>> 0) {
             break label$12
            }
            $6_1 = $6_1 - $5_1 | 0;
            if ($6_1 >>> 0 >= $4_1 >>> 0) {
             break label$12
            }
            $2_1 = $1_1;
            $4_1 = $6_1;
            if ($4_1) {
             break label$12
            }
            $4_1 = 0;
            $0_1 = $1_1;
            break label$6;
           }
           $6_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
           $1_1 = HEAP32[(($1_1 + (($3_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
           $0_1 = $6_1 ? (($6_1 | 0) != ($1_1 | 0) ? $6_1 : $0_1) : $0_1;
           $3_1 = $3_1 << 1 | 0;
           if ($1_1) {
            continue label$11
           }
           break label$11;
          };
          break label$7;
         }
         $2_1 = HEAP32[1051568 >> 2] | 0;
         $5_1 = $0_1 >>> 0 < 11 >>> 0 ? 16 : ($0_1 + 11 | 0) & 504 | 0;
         $0_1 = $5_1 >>> 3 | 0;
         $1_1 = $2_1 >>> $0_1 | 0;
         if ($1_1 & 3 | 0) {
          label$14 : {
           $6_1 = (($1_1 ^ -1 | 0) & 1 | 0) + $0_1 | 0;
           $0_1 = $6_1 << 3 | 0;
           $3_1 = $0_1 + 1051304 | 0;
           $1_1 = HEAP32[($0_1 + 1051312 | 0) >> 2] | 0;
           $4_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
           if (($3_1 | 0) != ($4_1 | 0)) {
            HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
            HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
            break label$14;
           }
           (wasm2js_i32$0 = 1051568, wasm2js_i32$1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $6_1 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
          }
          HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
          $0_1 = $0_1 + $1_1 | 0;
          HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
          $19_1 = $1_1 + 8 | 0;
          break label$1;
         }
         if ($5_1 >>> 0 <= (HEAP32[1051576 >> 2] | 0) >>> 0) {
          break label$4
         }
         label$16 : {
          label$17 : {
           if (!$1_1) {
            $0_1 = HEAP32[1051572 >> 2] | 0;
            if (!$0_1) {
             break label$4
            }
            $2_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 1051160 | 0) >> 2] | 0;
            $4_1 = ((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $5_1 | 0;
            $1_1 = $2_1;
            label$19 : while (1) {
             label$20 : {
              $0_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
              if ($0_1) {
               break label$20
              }
              $0_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
              if ($0_1) {
               break label$20
              }
              $7_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
              label$21 : {
               label$22 : {
                $0_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
                if (($1_1 | 0) == ($0_1 | 0)) {
                 $0_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
                 $2_1 = HEAP32[($1_1 + ($0_1 ? 20 : 16) | 0) >> 2] | 0;
                 if ($2_1) {
                  break label$22
                 }
                 $0_1 = 0;
                 break label$21;
                }
                $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
                HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
                HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
                break label$21;
               }
               $3_1 = $0_1 ? $1_1 + 20 | 0 : $1_1 + 16 | 0;
               label$24 : while (1) {
                $6_1 = $3_1;
                $0_1 = $2_1;
                $2_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
                $3_1 = $2_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
                $2_1 = HEAP32[($0_1 + ($2_1 ? 20 : 16) | 0) >> 2] | 0;
                if ($2_1) {
                 continue label$24
                }
                break label$24;
               };
               HEAP32[$6_1 >> 2] = 0;
              }
              if (!$7_1) {
               break label$16
              }
              $2_1 = ((HEAP32[($1_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1051160 | 0;
              if (($1_1 | 0) != (HEAP32[$2_1 >> 2] | 0 | 0)) {
               HEAP32[($7_1 + ((HEAP32[($7_1 + 16 | 0) >> 2] | 0 | 0) == ($1_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
               if (!$0_1) {
                break label$16
               }
               break label$17;
              }
              HEAP32[$2_1 >> 2] = $0_1;
              if ($0_1) {
               break label$17
              }
              (wasm2js_i32$0 = 1051572, wasm2js_i32$1 = (HEAP32[1051572 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($1_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
              break label$16;
             }
             $2_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $5_1 | 0;
             $248 = $2_1;
             $2_1 = $2_1 >>> 0 < $4_1 >>> 0;
             $4_1 = $2_1 ? $248 : $4_1;
             $1_1 = $2_1 ? $0_1 : $1_1;
             $2_1 = $0_1;
             continue label$19;
            };
           }
           label$26 : {
            $3_1 = 2 << $0_1 | 0;
            $6_1 = __wasm_ctz_i32(($3_1 | (0 - $3_1 | 0) | 0) & ($1_1 << $0_1 | 0) | 0 | 0) | 0;
            $1_1 = $6_1 << 3 | 0;
            $3_1 = $1_1 + 1051304 | 0;
            $0_1 = HEAP32[($1_1 + 1051312 | 0) >> 2] | 0;
            $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
            if (($3_1 | 0) != ($4_1 | 0)) {
             HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
             HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
             break label$26;
            }
            (wasm2js_i32$0 = 1051568, wasm2js_i32$1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $6_1 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
           }
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
           $6_1 = $0_1 + $5_1 | 0;
           $3_1 = $1_1 - $5_1 | 0;
           HEAP32[($6_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
           HEAP32[($0_1 + $1_1 | 0) >> 2] = $3_1;
           $4_1 = HEAP32[1051576 >> 2] | 0;
           if ($4_1) {
            $1_1 = ($4_1 & -8 | 0) + 1051304 | 0;
            $2_1 = HEAP32[1051584 >> 2] | 0;
            label$29 : {
             $5_1 = HEAP32[1051568 >> 2] | 0;
             $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
             if (!($5_1 & $4_1 | 0)) {
              HEAP32[1051568 >> 2] = $4_1 | $5_1 | 0;
              $325 = $1_1;
              break label$29;
             }
             $325 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
            }
            $4_1 = $325;
            HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
            HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
            HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
            HEAP32[($2_1 + 8 | 0) >> 2] = $4_1;
           }
           HEAP32[1051584 >> 2] = $6_1;
           HEAP32[1051576 >> 2] = $3_1;
           $19_1 = $0_1 + 8 | 0;
           break label$1;
          }
          HEAP32[($0_1 + 24 | 0) >> 2] = $7_1;
          $2_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
          if ($2_1) {
           HEAP32[($0_1 + 16 | 0) >> 2] = $2_1;
           HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
          }
          $2_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
          if (!$2_1) {
           break label$16
          }
          HEAP32[($0_1 + 20 | 0) >> 2] = $2_1;
          HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
         }
         label$32 : {
          label$33 : {
           if ($4_1 >>> 0 >= 16 >>> 0) {
            HEAP32[($1_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
            $3_1 = $1_1 + $5_1 | 0;
            HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
            HEAP32[($3_1 + $4_1 | 0) >> 2] = $4_1;
            $6_1 = HEAP32[1051576 >> 2] | 0;
            if (!$6_1) {
             break label$33
            }
            $0_1 = ($6_1 & -8 | 0) + 1051304 | 0;
            $2_1 = HEAP32[1051584 >> 2] | 0;
            label$35 : {
             $5_1 = HEAP32[1051568 >> 2] | 0;
             $6_1 = 1 << ($6_1 >>> 3 | 0) | 0;
             if (!($5_1 & $6_1 | 0)) {
              HEAP32[1051568 >> 2] = $5_1 | $6_1 | 0;
              $392 = $0_1;
              break label$35;
             }
             $392 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
            }
            $6_1 = $392;
            HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
            HEAP32[($6_1 + 12 | 0) >> 2] = $2_1;
            HEAP32[($2_1 + 12 | 0) >> 2] = $0_1;
            HEAP32[($2_1 + 8 | 0) >> 2] = $6_1;
            break label$33;
           }
           $0_1 = $4_1 + $5_1 | 0;
           HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
           $0_1 = $0_1 + $1_1 | 0;
           HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
           break label$32;
          }
          HEAP32[1051584 >> 2] = $3_1;
          HEAP32[1051576 >> 2] = $4_1;
         }
         $19_1 = $1_1 + 8 | 0;
         break label$1;
        }
        if (!($0_1 | $2_1 | 0)) {
         $2_1 = 0;
         $0_1 = 2 << $7_1 | 0;
         $0_1 = ($0_1 | (0 - $0_1 | 0) | 0) & $9_1 | 0;
         if (!$0_1) {
          break label$4
         }
         $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 1051160 | 0) >> 2] | 0;
        }
        if (!$0_1) {
         break label$5
        }
       }
       label$38 : while (1) {
        $3_1 = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0;
        $6_1 = $3_1 - $5_1 | 0;
        $7_1 = $6_1 >>> 0 < $4_1 >>> 0;
        $9_1 = $7_1 ? $0_1 : $2_1;
        $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
        if (!$1_1) {
         $1_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0
        }
        $0_1 = $3_1 >>> 0 < $5_1 >>> 0;
        $2_1 = $0_1 ? $2_1 : $9_1;
        $4_1 = $0_1 ? $4_1 : $7_1 ? $6_1 : $4_1;
        $0_1 = $1_1;
        if ($0_1) {
         continue label$38
        }
        break label$38;
       };
      }
      if (!$2_1) {
       break label$4
      }
      $0_1 = HEAP32[1051576 >> 2] | 0;
      if ($5_1 >>> 0 <= $0_1 >>> 0 & $4_1 >>> 0 >= ($0_1 - $5_1 | 0) >>> 0 | 0) {
       break label$4
      }
      $7_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
      label$40 : {
       label$41 : {
        $0_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
        if (($2_1 | 0) == ($0_1 | 0)) {
         $0_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         $1_1 = HEAP32[($2_1 + ($0_1 ? 20 : 16) | 0) >> 2] | 0;
         if ($1_1) {
          break label$41
         }
         $0_1 = 0;
         break label$40;
        }
        $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
        HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
        HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
        break label$40;
       }
       $3_1 = $0_1 ? $2_1 + 20 | 0 : $2_1 + 16 | 0;
       label$43 : while (1) {
        $6_1 = $3_1;
        $0_1 = $1_1;
        $1_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
        $3_1 = $1_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
        $1_1 = HEAP32[($0_1 + ($1_1 ? 20 : 16) | 0) >> 2] | 0;
        if ($1_1) {
         continue label$43
        }
        break label$43;
       };
       HEAP32[$6_1 >> 2] = 0;
      }
      if (!$7_1) {
       break label$2
      }
      $1_1 = ((HEAP32[($2_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1051160 | 0;
      if (($2_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
       HEAP32[($7_1 + ((HEAP32[($7_1 + 16 | 0) >> 2] | 0 | 0) == ($2_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
       if (!$0_1) {
        break label$2
       }
       break label$3;
      }
      HEAP32[$1_1 >> 2] = $0_1;
      if ($0_1) {
       break label$3
      }
      (wasm2js_i32$0 = 1051572, wasm2js_i32$1 = (HEAP32[1051572 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($2_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      break label$2;
     }
     label$45 : {
      label$46 : {
       label$47 : {
        label$48 : {
         label$49 : {
          $1_1 = HEAP32[1051576 >> 2] | 0;
          if ($5_1 >>> 0 > $1_1 >>> 0) {
           $0_1 = HEAP32[1051580 >> 2] | 0;
           if ($5_1 >>> 0 >= $0_1 >>> 0) {
            $2_1 = ($5_1 + 65583 | 0) & -65536 | 0;
            $0_1 = __wasm_memory_grow($2_1 >>> 16 | 0 | 0);
            $1_1 = $8_1 + 4 | 0;
            HEAP32[($1_1 + 8 | 0) >> 2] = 0;
            $580 = $2_1 & -65536 | 0;
            $2_1 = ($0_1 | 0) == (-1 | 0);
            HEAP32[($1_1 + 4 | 0) >> 2] = $2_1 ? 0 : $580;
            HEAP32[$1_1 >> 2] = $2_1 ? 0 : $0_1 << 16 | 0;
            $1_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
            $19_1 = 0;
            if (!$1_1) {
             break label$1
            }
            $6_1 = HEAP32[($8_1 + 12 | 0) >> 2] | 0;
            $4_1 = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
            $0_1 = $4_1 + (HEAP32[1051592 >> 2] | 0) | 0;
            HEAP32[1051592 >> 2] = $0_1;
            $2_1 = HEAP32[1051596 >> 2] | 0;
            HEAP32[1051596 >> 2] = $0_1 >>> 0 < $2_1 >>> 0 ? $2_1 : $0_1;
            label$52 : {
             label$53 : {
              $2_1 = HEAP32[1051588 >> 2] | 0;
              if ($2_1) {
               $0_1 = 1051288;
               label$55 : while (1) {
                $3_1 = HEAP32[$0_1 >> 2] | 0;
                $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
                if (($1_1 | 0) == ($3_1 + $7_1 | 0 | 0)) {
                 break label$53
                }
                $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if ($0_1) {
                 continue label$55
                }
                break label$55;
               };
               break label$52;
              }
              $0_1 = HEAP32[1051604 >> 2] | 0;
              if (!($0_1 >>> 0 <= $1_1 >>> 0 ? $0_1 : 0)) {
               HEAP32[1051604 >> 2] = $1_1
              }
              HEAP32[1051608 >> 2] = 4095;
              HEAP32[1051300 >> 2] = $6_1;
              HEAP32[1051292 >> 2] = $4_1;
              HEAP32[1051288 >> 2] = $1_1;
              HEAP32[1051316 >> 2] = 1051304;
              HEAP32[1051324 >> 2] = 1051312;
              HEAP32[1051312 >> 2] = 1051304;
              HEAP32[1051332 >> 2] = 1051320;
              HEAP32[1051320 >> 2] = 1051312;
              HEAP32[1051340 >> 2] = 1051328;
              HEAP32[1051328 >> 2] = 1051320;
              HEAP32[1051348 >> 2] = 1051336;
              HEAP32[1051336 >> 2] = 1051328;
              HEAP32[1051356 >> 2] = 1051344;
              HEAP32[1051344 >> 2] = 1051336;
              HEAP32[1051364 >> 2] = 1051352;
              HEAP32[1051352 >> 2] = 1051344;
              HEAP32[1051372 >> 2] = 1051360;
              HEAP32[1051360 >> 2] = 1051352;
              HEAP32[1051380 >> 2] = 1051368;
              HEAP32[1051368 >> 2] = 1051360;
              HEAP32[1051376 >> 2] = 1051368;
              HEAP32[1051388 >> 2] = 1051376;
              HEAP32[1051384 >> 2] = 1051376;
              HEAP32[1051396 >> 2] = 1051384;
              HEAP32[1051392 >> 2] = 1051384;
              HEAP32[1051404 >> 2] = 1051392;
              HEAP32[1051400 >> 2] = 1051392;
              HEAP32[1051412 >> 2] = 1051400;
              HEAP32[1051408 >> 2] = 1051400;
              HEAP32[1051420 >> 2] = 1051408;
              HEAP32[1051416 >> 2] = 1051408;
              HEAP32[1051428 >> 2] = 1051416;
              HEAP32[1051424 >> 2] = 1051416;
              HEAP32[1051436 >> 2] = 1051424;
              HEAP32[1051432 >> 2] = 1051424;
              HEAP32[1051444 >> 2] = 1051432;
              HEAP32[1051452 >> 2] = 1051440;
              HEAP32[1051440 >> 2] = 1051432;
              HEAP32[1051460 >> 2] = 1051448;
              HEAP32[1051448 >> 2] = 1051440;
              HEAP32[1051468 >> 2] = 1051456;
              HEAP32[1051456 >> 2] = 1051448;
              HEAP32[1051476 >> 2] = 1051464;
              HEAP32[1051464 >> 2] = 1051456;
              HEAP32[1051484 >> 2] = 1051472;
              HEAP32[1051472 >> 2] = 1051464;
              HEAP32[1051492 >> 2] = 1051480;
              HEAP32[1051480 >> 2] = 1051472;
              HEAP32[1051500 >> 2] = 1051488;
              HEAP32[1051488 >> 2] = 1051480;
              HEAP32[1051508 >> 2] = 1051496;
              HEAP32[1051496 >> 2] = 1051488;
              HEAP32[1051516 >> 2] = 1051504;
              HEAP32[1051504 >> 2] = 1051496;
              HEAP32[1051524 >> 2] = 1051512;
              HEAP32[1051512 >> 2] = 1051504;
              HEAP32[1051532 >> 2] = 1051520;
              HEAP32[1051520 >> 2] = 1051512;
              HEAP32[1051540 >> 2] = 1051528;
              HEAP32[1051528 >> 2] = 1051520;
              HEAP32[1051548 >> 2] = 1051536;
              HEAP32[1051536 >> 2] = 1051528;
              HEAP32[1051556 >> 2] = 1051544;
              HEAP32[1051544 >> 2] = 1051536;
              HEAP32[1051564 >> 2] = 1051552;
              HEAP32[1051552 >> 2] = 1051544;
              $0_1 = ($1_1 + 15 | 0) & -8 | 0;
              $2_1 = $0_1 - 8 | 0;
              HEAP32[1051588 >> 2] = $2_1;
              HEAP32[1051560 >> 2] = 1051552;
              $3_1 = $4_1 - 40 | 0;
              $0_1 = ($3_1 + ($1_1 - $0_1 | 0) | 0) + 8 | 0;
              HEAP32[1051580 >> 2] = $0_1;
              HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
              HEAP32[(($1_1 + $3_1 | 0) + 4 | 0) >> 2] = 40;
              HEAP32[1051600 >> 2] = 2097152;
              break label$45;
             }
             if ($2_1 >>> 0 < $3_1 >>> 0 | $1_1 >>> 0 <= $2_1 >>> 0 | 0) {
              break label$52
             }
             $3_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
             if ($3_1 & 1 | 0) {
              break label$52
             }
             if (($3_1 >>> 1 | 0 | 0) == ($6_1 | 0)) {
              break label$49
             }
            }
            $0_1 = HEAP32[1051604 >> 2] | 0;
            HEAP32[1051604 >> 2] = $0_1 >>> 0 < $1_1 >>> 0 ? $0_1 : $1_1;
            $3_1 = $1_1 + $4_1 | 0;
            $0_1 = 1051288;
            label$57 : {
             label$58 : {
              label$59 : while (1) {
               $7_1 = HEAP32[$0_1 >> 2] | 0;
               if (($3_1 | 0) != ($7_1 | 0)) {
                $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if ($0_1) {
                 continue label$59
                }
                break label$58;
               }
               break label$59;
              };
              $3_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
              if ($3_1 & 1 | 0) {
               break label$58
              }
              if (($3_1 >>> 1 | 0 | 0) == ($6_1 | 0)) {
               break label$57
              }
             }
             $0_1 = 1051288;
             label$61 : while (1) {
              label$62 : {
               $3_1 = HEAP32[$0_1 >> 2] | 0;
               if ($2_1 >>> 0 >= $3_1 >>> 0) {
                $7_1 = $3_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
                if ($2_1 >>> 0 < $7_1 >>> 0) {
                 break label$62
                }
               }
               $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
               continue label$61;
              }
              break label$61;
             };
             $0_1 = ($1_1 + 15 | 0) & -8 | 0;
             $3_1 = $0_1 - 8 | 0;
             HEAP32[1051588 >> 2] = $3_1;
             $9_1 = $4_1 - 40 | 0;
             $0_1 = ($9_1 + ($1_1 - $0_1 | 0) | 0) + 8 | 0;
             HEAP32[1051580 >> 2] = $0_1;
             HEAP32[($3_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
             HEAP32[(($1_1 + $9_1 | 0) + 4 | 0) >> 2] = 40;
             HEAP32[1051600 >> 2] = 2097152;
             $0_1 = (($7_1 - 32 | 0) & -8 | 0) - 8 | 0;
             $3_1 = $0_1 >>> 0 < ($2_1 + 16 | 0) >>> 0 ? $2_1 : $0_1;
             HEAP32[($3_1 + 4 | 0) >> 2] = 27;
             i64toi32_i32$2 = 1051288;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $10_1 = i64toi32_i32$0;
             $10$hi = i64toi32_i32$1;
             i64toi32_i32$2 = 1051296;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $747 = i64toi32_i32$1;
             i64toi32_i32$1 = $3_1 + 16 | 0;
             HEAP32[i64toi32_i32$1 >> 2] = $747;
             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $10$hi;
             i64toi32_i32$1 = $3_1;
             HEAP32[($3_1 + 8 | 0) >> 2] = $10_1;
             HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
             HEAP32[1051300 >> 2] = $6_1;
             HEAP32[1051292 >> 2] = $4_1;
             HEAP32[1051288 >> 2] = $1_1;
             HEAP32[1051296 >> 2] = $3_1 + 8 | 0;
             $0_1 = $3_1 + 28 | 0;
             label$64 : while (1) {
              HEAP32[$0_1 >> 2] = 7;
              $0_1 = $0_1 + 4 | 0;
              if ($0_1 >>> 0 < $7_1 >>> 0) {
               continue label$64
              }
              break label$64;
             };
             if (($2_1 | 0) == ($3_1 | 0)) {
              break label$45
             }
             HEAP32[($3_1 + 4 | 0) >> 2] = (HEAP32[($3_1 + 4 | 0) >> 2] | 0) & -2 | 0;
             $0_1 = $3_1 - $2_1 | 0;
             HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
             HEAP32[$3_1 >> 2] = $0_1;
             if ($0_1 >>> 0 >= 256 >>> 0) {
              $18($2_1 | 0, $0_1 | 0);
              break label$45;
             }
             $1_1 = ($0_1 & 248 | 0) + 1051304 | 0;
             label$66 : {
              $3_1 = HEAP32[1051568 >> 2] | 0;
              $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
              if (!($3_1 & $0_1 | 0)) {
               HEAP32[1051568 >> 2] = $0_1 | $3_1 | 0;
               $797 = $1_1;
               break label$66;
              }
              $797 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
             }
             $0_1 = $797;
             HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
             HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
             HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
             HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
             break label$45;
            }
            HEAP32[$0_1 >> 2] = $1_1;
            HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $4_1 | 0;
            $2_1 = (($1_1 + 15 | 0) & -8 | 0) - 8 | 0;
            HEAP32[($2_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
            $4_1 = (($7_1 + 15 | 0) & -8 | 0) - 8 | 0;
            $0_1 = $2_1 + $5_1 | 0;
            $5_1 = $4_1 - $0_1 | 0;
            if (($4_1 | 0) == (HEAP32[1051588 >> 2] | 0 | 0)) {
             break label$48
            }
            if (($4_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
             break label$47
            }
            $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
            if (($1_1 & 3 | 0 | 0) == (1 | 0)) {
             $1_1 = $1_1 & -8 | 0;
             $15($4_1 | 0, $1_1 | 0);
             $5_1 = $1_1 + $5_1 | 0;
             $4_1 = $1_1 + $4_1 | 0;
             $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
            }
            HEAP32[($4_1 + 4 | 0) >> 2] = $1_1 & -2 | 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
            HEAP32[($0_1 + $5_1 | 0) >> 2] = $5_1;
            if ($5_1 >>> 0 >= 256 >>> 0) {
             $18($0_1 | 0, $5_1 | 0);
             break label$46;
            }
            $1_1 = ($5_1 & 248 | 0) + 1051304 | 0;
            label$70 : {
             $3_1 = HEAP32[1051568 >> 2] | 0;
             $4_1 = 1 << ($5_1 >>> 3 | 0) | 0;
             if (!($3_1 & $4_1 | 0)) {
              HEAP32[1051568 >> 2] = $3_1 | $4_1 | 0;
              $885 = $1_1;
              break label$70;
             }
             $885 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
            }
            $3_1 = $885;
            HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
            HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
            HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
            HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
            break label$46;
           }
           $1_1 = $0_1 - $5_1 | 0;
           HEAP32[1051580 >> 2] = $1_1;
           $0_1 = HEAP32[1051588 >> 2] | 0;
           $2_1 = $0_1 + $5_1 | 0;
           HEAP32[1051588 >> 2] = $2_1;
           HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
           $19_1 = $0_1 + 8 | 0;
           break label$1;
          }
          $0_1 = HEAP32[1051584 >> 2] | 0;
          label$72 : {
           $2_1 = $1_1 - $5_1 | 0;
           if ($2_1 >>> 0 <= 15 >>> 0) {
            HEAP32[1051584 >> 2] = 0;
            HEAP32[1051576 >> 2] = 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 3 | 0;
            $1_1 = $0_1 + $1_1 | 0;
            HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
            break label$72;
           }
           HEAP32[1051576 >> 2] = $2_1;
           $3_1 = $0_1 + $5_1 | 0;
           HEAP32[1051584 >> 2] = $3_1;
           HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
           HEAP32[($0_1 + $1_1 | 0) >> 2] = $2_1;
           HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
          }
          $19_1 = $0_1 + 8 | 0;
          break label$1;
         }
         HEAP32[($0_1 + 4 | 0) >> 2] = $4_1 + $7_1 | 0;
         $0_1 = HEAP32[1051588 >> 2] | 0;
         $1_1 = ($0_1 + 15 | 0) & -8 | 0;
         $2_1 = $1_1 - 8 | 0;
         HEAP32[1051588 >> 2] = $2_1;
         $3_1 = (HEAP32[1051580 >> 2] | 0) + $4_1 | 0;
         $1_1 = ($3_1 + ($0_1 - $1_1 | 0) | 0) + 8 | 0;
         HEAP32[1051580 >> 2] = $1_1;
         HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
         HEAP32[(($0_1 + $3_1 | 0) + 4 | 0) >> 2] = 40;
         HEAP32[1051600 >> 2] = 2097152;
         break label$45;
        }
        HEAP32[1051588 >> 2] = $0_1;
        $1_1 = (HEAP32[1051580 >> 2] | 0) + $5_1 | 0;
        HEAP32[1051580 >> 2] = $1_1;
        HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
        break label$46;
       }
       HEAP32[1051584 >> 2] = $0_1;
       $1_1 = (HEAP32[1051576 >> 2] | 0) + $5_1 | 0;
       HEAP32[1051576 >> 2] = $1_1;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
      }
      $19_1 = $2_1 + 8 | 0;
      break label$1;
     }
     $0_1 = HEAP32[1051580 >> 2] | 0;
     $19_1 = 0;
     if ($0_1 >>> 0 <= $5_1 >>> 0) {
      break label$1
     }
     $1_1 = $0_1 - $5_1 | 0;
     HEAP32[1051580 >> 2] = $1_1;
     $0_1 = HEAP32[1051588 >> 2] | 0;
     $2_1 = $0_1 + $5_1 | 0;
     HEAP32[1051588 >> 2] = $2_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
     $19_1 = $0_1 + 8 | 0;
     break label$1;
    }
    HEAP32[($0_1 + 24 | 0) >> 2] = $7_1;
    $1_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
    if ($1_1) {
     HEAP32[($0_1 + 16 | 0) >> 2] = $1_1;
     HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
    }
    $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
    if (!$1_1) {
     break label$2
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
   }
   label$75 : {
    if ($4_1 >>> 0 >= 16 >>> 0) {
     HEAP32[($2_1 + 4 | 0) >> 2] = $5_1 | 3 | 0;
     $0_1 = $2_1 + $5_1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
     HEAP32[($0_1 + $4_1 | 0) >> 2] = $4_1;
     if ($4_1 >>> 0 >= 256 >>> 0) {
      $18($0_1 | 0, $4_1 | 0);
      break label$75;
     }
     $1_1 = ($4_1 & 248 | 0) + 1051304 | 0;
     label$78 : {
      $3_1 = HEAP32[1051568 >> 2] | 0;
      $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
      if (!($3_1 & $4_1 | 0)) {
       HEAP32[1051568 >> 2] = $3_1 | $4_1 | 0;
       $1069 = $1_1;
       break label$78;
      }
      $1069 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
     }
     $3_1 = $1069;
     HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
     break label$75;
    }
    $0_1 = $4_1 + $5_1 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
    $0_1 = $0_1 + $2_1 | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
   }
   $19_1 = $2_1 + 8 | 0;
  }
  global$0 = $8_1 + 16 | 0;
  return $19_1 | 0;
 }
 
 function $1($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $29_1 = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $361 = 0, $393 = 0, $426 = 0, $459 = 0, $492 = 0, $517 = 0, $549 = 0, $582 = 0, $615 = 0, $648 = 0, $66_1 = 0, $92 = 0, $142 = 0, $168 = 0, $218 = 0, $244 = 0, $294 = 0, $320 = 0, $704 = 0, $724 = 0;
  $1_1 = global$0 - 176 | 0;
  global$0 = $1_1;
  $27($1_1 + 8 | 0 | 0);
  $14($1_1 + 20 | 0 | 0);
  $2_1 = $1_1 + 116 | 0;
  $19($2_1 | 0, 1049140 | 0, 20 | 0);
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 144 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 140 | 0;
  HEAP32[($1_1 + 140 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 156 | 0) >> 2] = 2;
  $2_1 = $1_1 + 152 | 0;
  $13($1_1 + 128 | 0 | 0, $2_1 | 0);
  $19($2_1 | 0, 1048972 | 0, 27 | 0);
  label$1 : {
   label$2 : {
    if ((HEAP32[($1_1 + 160 | 0) >> 2] | 0 | 0) == (2 | 0)) {
     $29_1 = HEAP32[($1_1 + 156 | 0) >> 2] | 0;
     if ((HEAPU8[$29_1 >> 0] | 0 | ((HEAPU8[($29_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
      break label$2
     }
    }
    $48($1_1 + 152 | 0 | 0);
    break label$1;
   }
   $2_1 = $1_1 + 152 | 0;
   $48($2_1 | 0);
   HEAP32[($1_1 + 156 | 0) >> 2] = 2;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049168;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 100 | 0) >> 2] = 1;
   HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
   HEAP32[($1_1 + 96 | 0) >> 2] = $1_1 + 116 | 0;
   $13($1_1 + 140 | 0 | 0, $2_1 | 0);
   $48($1_1 + 128 | 0 | 0);
   HEAP32[($1_1 + 136 | 0) >> 2] = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 140 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
   $66_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 128 | 0) >> 2] = $66_1;
   HEAP32[($1_1 + 132 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($1_1 + 156 | 0) >> 2] = 1;
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049196;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 100 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
  $5_1 = $1_1 + 128 | 0;
  HEAP32[($1_1 + 96 | 0) >> 2] = $5_1;
  $2_1 = $1_1 + 140 | 0;
  $3_1 = $1_1 + 152 | 0;
  $13($2_1 | 0, $3_1 | 0);
  $48($2_1 | 0);
  HEAP32[($1_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
  $92 = i64toi32_i32$1;
  i64toi32_i32$1 = $1_1;
  HEAP32[($1_1 + 32 | 0) >> 2] = $92;
  HEAP32[($1_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = $1_1 + 116 | 0;
  $48($4_1 | 0);
  $19($4_1 | 0, 1049204 | 0, 24 | 0);
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 144 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 140 | 0) >> 2] = $4_1;
  HEAP32[($1_1 + 156 | 0) >> 2] = 2;
  $13($5_1 | 0, $3_1 | 0);
  $19($3_1 | 0, 1048972 | 0, 27 | 0);
  label$4 : {
   label$5 : {
    if ((HEAP32[($1_1 + 160 | 0) >> 2] | 0 | 0) == (2 | 0)) {
     $30_1 = HEAP32[($1_1 + 156 | 0) >> 2] | 0;
     if ((HEAPU8[$30_1 >> 0] | 0 | ((HEAPU8[($30_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
      break label$5
     }
    }
    $48($1_1 + 152 | 0 | 0);
    break label$4;
   }
   $2_1 = $1_1 + 152 | 0;
   $48($2_1 | 0);
   HEAP32[($1_1 + 156 | 0) >> 2] = 2;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049240;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 100 | 0) >> 2] = 1;
   HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
   HEAP32[($1_1 + 96 | 0) >> 2] = $1_1 + 116 | 0;
   $13($1_1 + 140 | 0 | 0, $2_1 | 0);
   $48($1_1 + 128 | 0 | 0);
   HEAP32[($1_1 + 136 | 0) >> 2] = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 140 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
   $142 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 128 | 0) >> 2] = $142;
   HEAP32[($1_1 + 132 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($1_1 + 156 | 0) >> 2] = 1;
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049272;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 100 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
  $5_1 = $1_1 + 128 | 0;
  HEAP32[($1_1 + 96 | 0) >> 2] = $5_1;
  $2_1 = $1_1 + 140 | 0;
  $3_1 = $1_1 + 152 | 0;
  $13($2_1 | 0, $3_1 | 0);
  $48($2_1 | 0);
  HEAP32[($1_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
  $168 = i64toi32_i32$1;
  i64toi32_i32$1 = $1_1;
  HEAP32[($1_1 + 48 | 0) >> 2] = $168;
  HEAP32[($1_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = $1_1 + 116 | 0;
  $48($4_1 | 0);
  $19($4_1 | 0, 1049280 | 0, 25 | 0);
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 144 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 140 | 0) >> 2] = $4_1;
  HEAP32[($1_1 + 156 | 0) >> 2] = 2;
  $13($5_1 | 0, $3_1 | 0);
  $19($3_1 | 0, 1048972 | 0, 27 | 0);
  label$7 : {
   label$8 : {
    if ((HEAP32[($1_1 + 160 | 0) >> 2] | 0 | 0) == (2 | 0)) {
     $31_1 = HEAP32[($1_1 + 156 | 0) >> 2] | 0;
     if ((HEAPU8[$31_1 >> 0] | 0 | ((HEAPU8[($31_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
      break label$8
     }
    }
    $48($1_1 + 152 | 0 | 0);
    break label$7;
   }
   $2_1 = $1_1 + 152 | 0;
   $48($2_1 | 0);
   HEAP32[($1_1 + 156 | 0) >> 2] = 2;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049312;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 100 | 0) >> 2] = 1;
   HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
   HEAP32[($1_1 + 96 | 0) >> 2] = $1_1 + 116 | 0;
   $13($1_1 + 140 | 0 | 0, $2_1 | 0);
   $48($1_1 + 128 | 0 | 0);
   HEAP32[($1_1 + 136 | 0) >> 2] = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 140 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
   $218 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 128 | 0) >> 2] = $218;
   HEAP32[($1_1 + 132 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($1_1 + 156 | 0) >> 2] = 1;
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049340;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 100 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
  $5_1 = $1_1 + 128 | 0;
  HEAP32[($1_1 + 96 | 0) >> 2] = $5_1;
  $2_1 = $1_1 + 140 | 0;
  $3_1 = $1_1 + 152 | 0;
  $13($2_1 | 0, $3_1 | 0);
  $48($2_1 | 0);
  HEAP32[($1_1 + 72 | 0) >> 2] = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
  $244 = i64toi32_i32$1;
  i64toi32_i32$1 = $1_1;
  HEAP32[($1_1 + 64 | 0) >> 2] = $244;
  HEAP32[($1_1 + 68 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = $1_1 + 116 | 0;
  $48($4_1 | 0);
  $19($4_1 | 0, 1049348 | 0, 25 | 0);
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 144 | 0) >> 2] = 1;
  HEAP32[($1_1 + 160 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 140 | 0) >> 2] = $4_1;
  HEAP32[($1_1 + 156 | 0) >> 2] = 2;
  $13($5_1 | 0, $3_1 | 0);
  $19($3_1 | 0, 1048972 | 0, 27 | 0);
  label$10 : {
   label$11 : {
    if ((HEAP32[($1_1 + 160 | 0) >> 2] | 0 | 0) == (2 | 0)) {
     $32_1 = HEAP32[($1_1 + 156 | 0) >> 2] | 0;
     if ((HEAPU8[$32_1 >> 0] | 0 | ((HEAPU8[($32_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
      break label$11
     }
    }
    $48($1_1 + 152 | 0 | 0);
    break label$10;
   }
   $2_1 = $1_1 + 152 | 0;
   $48($2_1 | 0);
   HEAP32[($1_1 + 156 | 0) >> 2] = 2;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049380;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 100 | 0) >> 2] = 1;
   HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 96 | 0;
   HEAP32[($1_1 + 96 | 0) >> 2] = $1_1 + 116 | 0;
   $13($1_1 + 140 | 0 | 0, $2_1 | 0);
   $48($1_1 + 128 | 0 | 0);
   HEAP32[($1_1 + 136 | 0) >> 2] = HEAP32[($1_1 + 148 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 140 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
   $294 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 128 | 0) >> 2] = $294;
   HEAP32[($1_1 + 132 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($1_1 + 156 | 0) >> 2] = 1;
  HEAP32[($1_1 + 152 | 0) >> 2] = 1049408;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 0;
  HEAP32[($1_1 + 164 | 0) >> 2] = 1;
  HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 100 | 0) >> 2] = 1;
  $2_1 = $1_1 + 96 | 0;
  HEAP32[($1_1 + 160 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 96 | 0) >> 2] = $1_1 + 128 | 0;
  $3_1 = $1_1 + 140 | 0;
  $4_1 = $1_1 + 152 | 0;
  $13($3_1 | 0, $4_1 | 0);
  $48($3_1 | 0);
  HEAP32[($1_1 + 88 | 0) >> 2] = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
  $320 = i64toi32_i32$1;
  i64toi32_i32$1 = $1_1;
  HEAP32[($1_1 + 80 | 0) >> 2] = $320;
  HEAP32[($1_1 + 84 | 0) >> 2] = i64toi32_i32$0;
  $48($1_1 + 116 | 0 | 0);
  $19($2_1 | 0, 1048972 | 0, 27 | 0);
  $28($4_1 | 0, 0 | 0);
  $3_1 = HEAP32[($1_1 + 156 | 0) >> 2] | 0;
  if ((HEAP32[($1_1 + 152 | 0) >> 2] | 0 | 0) != (1 | 0)) {
   HEAP32[($1_1 + 124 | 0) >> 2] = 0;
   $4_1 = HEAP32[($1_1 + 160 | 0) >> 2] | 0;
   HEAP32[($1_1 + 120 | 0) >> 2] = $4_1;
   HEAP32[($1_1 + 116 | 0) >> 2] = $3_1;
   label$14 : {
    label$15 : {
     if ((HEAP32[($1_1 + 104 | 0) >> 2] | 0 | 0) == (2 | 0)) {
      $33_1 = HEAP32[($1_1 + 100 | 0) >> 2] | 0;
      if ((HEAPU8[$33_1 >> 0] | 0 | ((HEAPU8[($33_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
       break label$15
      }
     }
     $2_1 = 0;
     $6_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
     $5_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     if ($3_1 >>> 0 < $5_1 >>> 0) {
      $37($1_1 + 116 | 0 | 0, 0 | 0, $5_1 | 0);
      $4_1 = HEAP32[($1_1 + 120 | 0) >> 2] | 0;
      $361 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     } else {
      $361 = $2_1
     }
     $7($361 + $4_1 | 0 | 0, $6_1 | 0, $5_1 | 0) | 0;
     $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $5_1 | 0;
     HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
     $4_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
     $3_1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
     if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
      $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
      $393 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     } else {
      $393 = $2_1
     }
     $7($393 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
     $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
     HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
     $4_1 = HEAP32[($1_1 + 68 | 0) >> 2] | 0;
     $3_1 = HEAP32[($1_1 + 72 | 0) >> 2] | 0;
     if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
      $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
      $426 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     } else {
      $426 = $2_1
     }
     $7($426 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
     $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
     HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
     $4_1 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
     $3_1 = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
     if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
      $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
      $459 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     } else {
      $459 = $2_1
     }
     $7($459 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
     $3_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
     HEAP32[($1_1 + 124 | 0) >> 2] = $3_1;
     $4_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
     $2_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
     if ($2_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
      $37($1_1 + 116 | 0 | 0, $3_1 | 0, $2_1 | 0);
      $492 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     } else {
      $492 = $3_1
     }
     $7($492 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $2_1 | 0) | 0;
     break label$14;
    }
    $2_1 = 0;
    $6_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
    $5_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
    if ($3_1 >>> 0 < $5_1 >>> 0) {
     $37($1_1 + 116 | 0 | 0, 0 | 0, $5_1 | 0);
     $4_1 = HEAP32[($1_1 + 120 | 0) >> 2] | 0;
     $517 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
    } else {
     $517 = $2_1
    }
    $7($517 + $4_1 | 0 | 0, $6_1 | 0, $5_1 | 0) | 0;
    $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $5_1 | 0;
    HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
    $4_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
    $3_1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
    if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
     $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
     $549 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
    } else {
     $549 = $2_1
    }
    $7($549 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
    $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
    HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
    $4_1 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
    $3_1 = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
    if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
     $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
     $582 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
    } else {
     $582 = $2_1
    }
    $7($582 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
    $3_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
    HEAP32[($1_1 + 124 | 0) >> 2] = $3_1;
    $4_1 = HEAP32[($1_1 + 68 | 0) >> 2] | 0;
    $2_1 = HEAP32[($1_1 + 72 | 0) >> 2] | 0;
    if ($2_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
     $37($1_1 + 116 | 0 | 0, $3_1 | 0, $2_1 | 0);
     $615 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
    } else {
     $615 = $3_1
    }
    $7($615 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $2_1 | 0) | 0;
   }
   $2_1 = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $2_1 | 0;
   HEAP32[($1_1 + 124 | 0) >> 2] = $2_1;
   $4_1 = HEAP32[($1_1 + 84 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 88 | 0) >> 2] | 0;
   if ($3_1 >>> 0 > ((HEAP32[($1_1 + 116 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
    $37($1_1 + 116 | 0 | 0, $2_1 | 0, $3_1 | 0);
    $648 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
   } else {
    $648 = $2_1
   }
   $7($648 + (HEAP32[($1_1 + 120 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
   HEAP32[($1_1 + 124 | 0) >> 2] = (HEAP32[($1_1 + 124 | 0) >> 2] | 0) + $3_1 | 0;
   HEAP32[($1_1 + 156 | 0) >> 2] = 1;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049528;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 132 | 0) >> 2] = 1;
   $3_1 = $1_1 + 128 | 0;
   HEAP32[($1_1 + 160 | 0) >> 2] = $3_1;
   $5_1 = $1_1 + 116 | 0;
   HEAP32[($1_1 + 128 | 0) >> 2] = $5_1;
   $2_1 = $1_1 + 140 | 0;
   $4_1 = $1_1 + 152 | 0;
   $13($2_1 | 0, $4_1 | 0);
   $48($2_1 | 0);
   $31($3_1 | 0, HEAP32[($1_1 + 120 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 124 | 0) >> 2] | 0 | 0);
   HEAP32[($1_1 + 156 | 0) >> 2] = 1;
   HEAP32[($1_1 + 152 | 0) >> 2] = 1049556;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 164 | 0) >> 2] = 1;
   HEAP32[($1_1 + 168 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 112 | 0) >> 2] = 1;
   HEAP32[($1_1 + 160 | 0) >> 2] = $1_1 + 108 | 0;
   HEAP32[($1_1 + 108 | 0) >> 2] = $3_1;
   $13($2_1 | 0, $4_1 | 0);
   $48($2_1 | 0);
   HEAP32[($1_1 + 160 | 0) >> 2] = HEAP32[($1_1 + 136 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
   $704 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 152 | 0) >> 2] = $704;
   HEAP32[($1_1 + 156 | 0) >> 2] = i64toi32_i32$1;
   $48($5_1 | 0);
   $48($1_1 + 96 | 0 | 0);
   $48($1_1 + 80 | 0 | 0);
   $48($1_1 - -64 | 0 | 0);
   $48($1_1 + 48 | 0 | 0);
   $48($1_1 + 32 | 0 | 0);
   $48($1_1 + 20 | 0 | 0);
   $48($1_1 + 8 | 0 | 0);
   $33($1_1 | 0, $4_1 | 0, 1048692 | 0);
   i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   $724 = i64toi32_i32$1;
   i64toi32_i32$1 = $0_1;
   HEAP32[i64toi32_i32$1 >> 2] = $724;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   global$0 = $1_1 + 176 | 0;
   return;
  }
  $49($3_1 | 0, HEAP32[($1_1 + 160 | 0) >> 2] | 0 | 0, 1048824 | 0);
  wasm2js_trap();
 }
 
 function $2($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0, $16_1 = 0, $17_1 = 0, $18_1 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $24_1 = 0, $25_1 = 0, $32_1 = 0, $150 = 0, $239 = 0, $289 = 0, $323 = 0, $324 = 0, $388 = 0, $540 = 0, $601 = 0, $605 = 0, $652 = 0, $858 = 0, $861 = 0, $916 = 0, $919 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $9_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
  $7_1 = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
  $32_1 = $7_1;
  $10_1 = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
  $11_1 = HEAP32[$1_1 >> 2] | 0;
  $12_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
  $13_1 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
  $14_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $15_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
  $25_1 = HEAP32[$0_1 >> 2] | 0;
  $16_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  $8_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  $24_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
  $2_1 = (__wasm_rotl_i32(($11_1 + (($25_1 + ($16_1 & $8_1 | 0) | 0) + ($24_1 & ($8_1 ^ -1 | 0) | 0) | 0) | 0) - 680876936 | 0 | 0, 7 | 0) | 0) + $8_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($14_1 + $24_1 | 0) + ($16_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $8_1 | 0) | 0) - 389564586 | 0 | 0, 12 | 0) | 0) + $2_1 | 0;
  $17_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  $18_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  $5_1 = $3_1 + (__wasm_rotl_i32(((($16_1 + $18_1 | 0) + ($8_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $3_1 | 0) | 0) + 606105819 | 0 | 0, 17 | 0) | 0) | 0;
  $4_1 = (__wasm_rotl_i32(((($8_1 + $17_1 | 0) + ($2_1 & ($5_1 ^ -1 | 0) | 0) | 0) + ($3_1 & $5_1 | 0) | 0) - 1044525330 | 0 | 0, 22 | 0) | 0) + $5_1 | 0;
  $2_1 = (__wasm_rotl_i32(((($9_1 + $2_1 | 0) + ($3_1 & ($4_1 ^ -1 | 0) | 0) | 0) + ($4_1 & $5_1 | 0) | 0) - 176418897 | 0 | 0, 7 | 0) | 0) + $4_1 | 0;
  $150 = $7_1 + $2_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($3_1 + $15_1 | 0) + ($5_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $4_1 | 0) | 0) + 1200080426 | 0 | 0, 12 | 0) | 0) + $2_1 | 0;
  $19_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
  $20_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
  $5_1 = $3_1 + (__wasm_rotl_i32(((($20_1 + $5_1 | 0) + ($4_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $3_1 | 0) | 0) - 1473231341 | 0 | 0, 17 | 0) | 0) | 0;
  $2_1 = (__wasm_rotl_i32(((($19_1 + $4_1 | 0) + ($2_1 & ($5_1 ^ -1 | 0) | 0) | 0) + ($3_1 & $5_1 | 0) | 0) - 45705983 | 0 | 0, 22 | 0) | 0) + $5_1 | 0;
  $4_1 = (__wasm_rotl_i32((($150 + ($3_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $5_1 | 0) | 0) + 1770035416 | 0 | 0, 7 | 0) | 0) + $2_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($3_1 + $12_1 | 0) + ($5_1 & ($4_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $4_1 | 0) | 0) - 1958414417 | 0 | 0, 12 | 0) | 0) + $4_1 | 0;
  $21_1 = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
  $239 = $21_1 + $2_1 | 0;
  $22_1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
  $2_1 = $3_1 + (__wasm_rotl_i32(((($22_1 + $5_1 | 0) + ($2_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($3_1 & $4_1 | 0) | 0) - 42063 | 0 | 0, 17 | 0) | 0) | 0;
  $5_1 = (__wasm_rotl_i32((($239 + ($4_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $3_1 | 0) | 0) - 1990404162 | 0 | 0, 22 | 0) | 0) + $2_1 | 0;
  $6_1 = (__wasm_rotl_i32(((($10_1 + $4_1 | 0) + ($3_1 & ($5_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $5_1 | 0) | 0) + 1804603682 | 0 | 0, 7 | 0) | 0) + $5_1 | 0;
  $23_1 = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
  $289 = $23_1 + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32(((($3_1 + $13_1 | 0) + ($2_1 & ($6_1 ^ -1 | 0) | 0) | 0) + ($5_1 & $6_1 | 0) | 0) - 40341101 | 0 | 0, 12 | 0) | 0) + $6_1 | 0;
  $2_1 = $4_1 ^ -1 | 0;
  $3_1 = (__wasm_rotl_i32((($289 + ($5_1 & $2_1 | 0) | 0) + ($4_1 & $6_1 | 0) | 0) - 1502002290 | 0 | 0, 17 | 0) | 0) + $4_1 | 0;
  $323 = ($14_1 + $6_1 | 0) + ($3_1 & $2_1 | 0) | 0;
  $324 = $5_1;
  $5_1 = HEAP32[($1_1 + 60 | 0) >> 2] | 0;
  $1_1 = $3_1 ^ -1 | 0;
  $6_1 = (__wasm_rotl_i32(((($324 + $5_1 | 0) + ($6_1 & $1_1 | 0) | 0) + ($3_1 & $4_1 | 0) | 0) + 1236535329 | 0 | 0, 22 | 0) | 0) + $3_1 | 0;
  $2_1 = (__wasm_rotl_i32(($323 + ($6_1 & $4_1 | 0) | 0) - 165796510 | 0 | 0, 5 | 0) | 0) + $6_1 | 0;
  $4_1 = (__wasm_rotl_i32(((($4_1 + $20_1 | 0) + ($1_1 & $6_1 | 0) | 0) + ($2_1 & $3_1 | 0) | 0) - 1069501632 | 0 | 0, 9 | 0) | 0) + $2_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($3_1 + $21_1 | 0) + ($2_1 & ($6_1 ^ -1 | 0) | 0) | 0) + ($4_1 & $6_1 | 0) | 0) + 643717713 | 0 | 0, 14 | 0) | 0) + $4_1 | 0;
  $388 = ($15_1 + $2_1 | 0) + ($3_1 & ($4_1 ^ -1 | 0) | 0) | 0;
  $2_1 = (__wasm_rotl_i32(((($6_1 + $11_1 | 0) + ($4_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $3_1 | 0) | 0) - 373897302 | 0 | 0, 20 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32(($388 + ($2_1 & $4_1 | 0) | 0) - 701558691 | 0 | 0, 5 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32(((($4_1 + $22_1 | 0) + ($2_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($1_1 & $3_1 | 0) | 0) + 38016083 | 0 | 0, 9 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($3_1 + $5_1 | 0) + ($1_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($4_1 & $2_1 | 0) | 0) - 660478335 | 0 | 0, 14 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32(((($2_1 + $9_1 | 0) + ($4_1 & ($1_1 ^ -1 | 0) | 0) | 0) + ($1_1 & $3_1 | 0) | 0) - 405537848 | 0 | 0, 20 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32(((($12_1 + $1_1 | 0) + ($3_1 & ($4_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $4_1 | 0) | 0) + 568446438 | 0 | 0, 5 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32(((($4_1 + $23_1 | 0) + ($2_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($1_1 & $3_1 | 0) | 0) - 1019803690 | 0 | 0, 9 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($3_1 + $17_1 | 0) + ($1_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($4_1 & $2_1 | 0) | 0) - 187363961 | 0 | 0, 14 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32(((($2_1 + $7_1 | 0) + ($4_1 & ($1_1 ^ -1 | 0) | 0) | 0) + ($1_1 & $3_1 | 0) | 0) + 1163531501 | 0 | 0, 20 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32(((($13_1 + $1_1 | 0) + ($3_1 & ($4_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $4_1 | 0) | 0) - 1444681467 | 0 | 0, 5 | 0) | 0) + $2_1 | 0;
  $540 = $15_1 + $1_1 | 0;
  $6_1 = (__wasm_rotl_i32(((($4_1 + $18_1 | 0) + ($2_1 & ($3_1 ^ -1 | 0) | 0) | 0) + ($1_1 & $3_1 | 0) | 0) - 51403784 | 0 | 0, 9 | 0) | 0) + $1_1 | 0;
  $4_1 = (__wasm_rotl_i32(((($3_1 + $19_1 | 0) + ($1_1 & ($2_1 ^ -1 | 0) | 0) | 0) + ($2_1 & $6_1 | 0) | 0) + 1735328473 | 0 | 0, 14 | 0) | 0) + $6_1 | 0;
  $3_1 = (__wasm_rotl_i32(((($2_1 + $10_1 | 0) + ($6_1 & ($1_1 ^ -1 | 0) | 0) | 0) + ($4_1 & $1_1 | 0) | 0) - 1926607734 | 0 | 0, 20 | 0) | 0) + $4_1 | 0;
  $1_1 = $3_1 ^ $4_1 | 0;
  $2_1 = (__wasm_rotl_i32(($540 + ($1_1 ^ $6_1 | 0) | 0) - 378558 | 0 | 0, 4 | 0) | 0) + $3_1 | 0;
  $601 = $14_1 + $2_1 | 0;
  $605 = $2_1;
  $2_1 = (__wasm_rotl_i32((($6_1 + $7_1 | 0) + ($1_1 ^ $2_1 | 0) | 0) - 2022574463 | 0 | 0, 11 | 0) | 0) + $2_1 | 0;
  $1_1 = $605 ^ $2_1 | 0;
  $4_1 = (__wasm_rotl_i32((($4_1 + $21_1 | 0) + ($1_1 ^ $3_1 | 0) | 0) + 1839030562 | 0 | 0, 16 | 0) | 0) + $2_1 | 0;
  $7_1 = (__wasm_rotl_i32((($3_1 + $23_1 | 0) + ($1_1 ^ $4_1 | 0) | 0) - 35309556 | 0 | 0, 23 | 0) | 0) + $4_1 | 0;
  $1_1 = (__wasm_rotl_i32(($601 + (($4_1 ^ $2_1 | 0) ^ $7_1 | 0) | 0) - 1530992060 | 0 | 0, 4 | 0) | 0) + $7_1 | 0;
  $652 = $4_1 + $19_1 | 0;
  $4_1 = (__wasm_rotl_i32((($2_1 + $9_1 | 0) + (($4_1 ^ $7_1 | 0) ^ $1_1 | 0) | 0) + 1272893353 | 0 | 0, 11 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32(($652 + ($4_1 ^ ($1_1 ^ $7_1 | 0) | 0) | 0) - 155497632 | 0 | 0, 16 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32((($7_1 + $22_1 | 0) + (($1_1 ^ $4_1 | 0) ^ $3_1 | 0) | 0) - 1094730640 | 0 | 0, 23 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32((($13_1 + $1_1 | 0) + (($3_1 ^ $4_1 | 0) ^ $2_1 | 0) | 0) + 681279174 | 0 | 0, 4 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32((($4_1 + $11_1 | 0) + (($2_1 ^ $3_1 | 0) ^ $1_1 | 0) | 0) - 358537222 | 0 | 0, 11 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32((($3_1 + $17_1 | 0) + ($4_1 ^ ($1_1 ^ $2_1 | 0) | 0) | 0) - 722521979 | 0 | 0, 16 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32((($2_1 + $20_1 | 0) + (($1_1 ^ $4_1 | 0) ^ $3_1 | 0) | 0) + 76029189 | 0 | 0, 23 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32((($12_1 + $1_1 | 0) + (($3_1 ^ $4_1 | 0) ^ $2_1 | 0) | 0) - 640364487 | 0 | 0, 4 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32((($4_1 + $10_1 | 0) + (($2_1 ^ $3_1 | 0) ^ $1_1 | 0) | 0) - 421815835 | 0 | 0, 11 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32((($3_1 + $5_1 | 0) + (($1_1 ^ $2_1 | 0) ^ $4_1 | 0) | 0) + 530742520 | 0 | 0, 16 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32((($2_1 + $18_1 | 0) + (($4_1 ^ $1_1 | 0) ^ $3_1 | 0) | 0) - 995338651 | 0 | 0, 23 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32((($11_1 + $1_1 | 0) + (($2_1 | ($4_1 ^ -1 | 0) | 0) ^ $3_1 | 0) | 0) - 198630844 | 0 | 0, 6 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32((($4_1 + $19_1 | 0) + (($1_1 | ($3_1 ^ -1 | 0) | 0) ^ $2_1 | 0) | 0) + 1126891415 | 0 | 0, 10 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32((($3_1 + $23_1 | 0) + (($4_1 | ($2_1 ^ -1 | 0) | 0) ^ $1_1 | 0) | 0) - 1416354905 | 0 | 0, 15 | 0) | 0) + $4_1 | 0;
  $2_1 = (__wasm_rotl_i32((($2_1 + $15_1 | 0) + (($3_1 | ($1_1 ^ -1 | 0) | 0) ^ $4_1 | 0) | 0) - 57434055 | 0 | 0, 21 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32((($10_1 + $1_1 | 0) + (($2_1 | ($4_1 ^ -1 | 0) | 0) ^ $3_1 | 0) | 0) + 1700485571 | 0 | 0, 6 | 0) | 0) + $2_1 | 0;
  $858 = $32_1 + $1_1 | 0;
  $861 = $2_1 + $14_1 | 0;
  $4_1 = (__wasm_rotl_i32((($4_1 + $17_1 | 0) + (($1_1 | ($3_1 ^ -1 | 0) | 0) ^ $2_1 | 0) | 0) - 1894986606 | 0 | 0, 10 | 0) | 0) + $1_1 | 0;
  $2_1 = (__wasm_rotl_i32((($3_1 + $22_1 | 0) + (($4_1 | ($2_1 ^ -1 | 0) | 0) ^ $1_1 | 0) | 0) - 1051523 | 0 | 0, 15 | 0) | 0) + $4_1 | 0;
  $1_1 = (__wasm_rotl_i32(($861 + (($2_1 | ($1_1 ^ -1 | 0) | 0) ^ $4_1 | 0) | 0) - 2054922799 | 0 | 0, 21 | 0) | 0) + $2_1 | 0;
  $3_1 = (__wasm_rotl_i32(($858 + (($1_1 | ($4_1 ^ -1 | 0) | 0) ^ $2_1 | 0) | 0) + 1873313359 | 0 | 0, 6 | 0) | 0) + $1_1 | 0;
  $916 = $1_1 + $13_1 | 0;
  $919 = $2_1 + $20_1 | 0;
  $2_1 = (__wasm_rotl_i32((($4_1 + $5_1 | 0) + (($3_1 | ($2_1 ^ -1 | 0) | 0) ^ $1_1 | 0) | 0) - 30611744 | 0 | 0, 10 | 0) | 0) + $3_1 | 0;
  $1_1 = (__wasm_rotl_i32(($919 + (($2_1 | ($1_1 ^ -1 | 0) | 0) ^ $3_1 | 0) | 0) - 1560198380 | 0 | 0, 15 | 0) | 0) + $2_1 | 0;
  $4_1 = (__wasm_rotl_i32(($916 + (($1_1 | ($3_1 ^ -1 | 0) | 0) ^ $2_1 | 0) | 0) + 1309151649 | 0 | 0, 21 | 0) | 0) + $1_1 | 0;
  $3_1 = (__wasm_rotl_i32((($9_1 + $3_1 | 0) + (($4_1 | ($2_1 ^ -1 | 0) | 0) ^ $1_1 | 0) | 0) - 145523070 | 0 | 0, 6 | 0) | 0) + $4_1 | 0;
  HEAP32[$0_1 >> 2] = $3_1 + $25_1 | 0;
  $2_1 = (__wasm_rotl_i32((($2_1 + $21_1 | 0) + (($3_1 | ($1_1 ^ -1 | 0) | 0) ^ $4_1 | 0) | 0) - 1120210379 | 0 | 0, 10 | 0) | 0) + $3_1 | 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = $24_1 + $2_1 | 0;
  $1_1 = (__wasm_rotl_i32((($1_1 + $18_1 | 0) + (($2_1 | ($4_1 ^ -1 | 0) | 0) ^ $3_1 | 0) | 0) + 718787259 | 0 | 0, 15 | 0) | 0) + $2_1 | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $16_1 + $1_1 | 0;
  (wasm2js_i32$0 = $0_1, wasm2js_i32$1 = ($1_1 + $8_1 | 0) + (__wasm_rotl_i32((($4_1 + $12_1 | 0) + (($1_1 | ($3_1 ^ -1 | 0) | 0) ^ $2_1 | 0) | 0) - 343485551 | 0 | 0, 21 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 4 | 0) >> 2] = wasm2js_i32$1;
 }
 
 function $3($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, $18_1 = 0, $77 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $110 = 0, $158 = 0, $194 = 0, $227 = 0, $53_1 = 0, $82 = 0, $283 = 0, $297 = 0;
  $1_1 = global$0 - 128 | 0;
  global$0 = $1_1;
  $27($1_1 + 12 | 0 | 0);
  $19($1_1 + 24 | 0 | 0, 1048972 | 0, 27 | 0);
  $14($1_1 + 36 | 0 | 0);
  $2_1 = $1_1 + 68 | 0;
  $19($2_1 | 0, 1049416 | 0, 22 | 0);
  HEAP32[($1_1 + 108 | 0) >> 2] = 2;
  HEAP32[($1_1 + 104 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 116 | 0) >> 2] = 1;
  HEAP32[($1_1 + 120 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 96 | 0) >> 2] = 1;
  $3_1 = $1_1 + 92 | 0;
  HEAP32[($1_1 + 112 | 0) >> 2] = $3_1;
  HEAP32[($1_1 + 92 | 0) >> 2] = $2_1;
  $5_1 = $1_1 + 80 | 0;
  $4_1 = $1_1 + 104 | 0;
  $13($5_1 | 0, $4_1 | 0);
  HEAP32[($1_1 + 108 | 0) >> 2] = 1;
  HEAP32[($1_1 + 104 | 0) >> 2] = 1049448;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 116 | 0) >> 2] = 1;
  HEAP32[($1_1 + 120 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 52 | 0) >> 2] = 1;
  HEAP32[($1_1 + 112 | 0) >> 2] = $1_1 + 48 | 0;
  HEAP32[($1_1 + 48 | 0) >> 2] = $5_1;
  $13($3_1 | 0, $4_1 | 0);
  $48($3_1 | 0);
  HEAP32[($1_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 88 | 0) >> 2] | 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[($1_1 + 80 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 84 | 0) >> 2] | 0;
  $53_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $1_1;
  HEAP32[($1_1 + 48 | 0) >> 2] = $53_1;
  HEAP32[($1_1 + 52 | 0) >> 2] = i64toi32_i32$1;
  $48($2_1 | 0);
  $28($4_1 | 0, 0 | 0);
  $3_1 = HEAP32[($1_1 + 108 | 0) >> 2] | 0;
  if ((HEAP32[($1_1 + 104 | 0) >> 2] | 0 | 0) != (1 | 0)) {
   HEAP32[($1_1 + 76 | 0) >> 2] = 0;
   $4_1 = HEAP32[($1_1 + 112 | 0) >> 2] | 0;
   HEAP32[($1_1 + 72 | 0) >> 2] = $4_1;
   HEAP32[($1_1 + 68 | 0) >> 2] = $3_1;
   if ($3_1 >>> 0 <= 9 >>> 0) {
    $37($2_1 | 0, 0 | 0, 10 | 0);
    $4_1 = HEAP32[($1_1 + 72 | 0) >> 2] | 0;
    $77 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   } else {
    $77 = 0
   }
   $2_1 = $77 + $4_1 | 0;
   i64toi32_i32$2 = 1049464;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $82 = i64toi32_i32$1;
   i64toi32_i32$1 = $2_1;
   $18_1 = $82;
   HEAP8[$2_1 >> 0] = $18_1;
   HEAP8[($2_1 + 1 | 0) >> 0] = $18_1 >>> 8 | 0;
   HEAP8[($2_1 + 2 | 0) >> 0] = $18_1 >>> 16 | 0;
   HEAP8[($2_1 + 3 | 0) >> 0] = $18_1 >>> 24 | 0;
   HEAP8[($2_1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[($2_1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[($2_1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[($2_1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   $19_1 = 1049472;
   $20_1 = $2_1 + 8 | 0;
   $21_1 = HEAPU8[$19_1 >> 0] | 0 | ((HEAPU8[($19_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   HEAP8[$20_1 >> 0] = $21_1;
   HEAP8[($20_1 + 1 | 0) >> 0] = $21_1 >>> 8 | 0;
   $2_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + 10 | 0;
   HEAP32[($1_1 + 76 | 0) >> 2] = $2_1;
   $4_1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
   if ($3_1 >>> 0 > ((HEAP32[($1_1 + 68 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
    $37($1_1 + 68 | 0 | 0, $2_1 | 0, $3_1 | 0);
    $110 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   } else {
    $110 = $2_1
   }
   $7($110 + (HEAP32[($1_1 + 72 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
   HEAP32[($1_1 + 76 | 0) >> 2] = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + $3_1 | 0;
   HEAP32[($1_1 + 108 | 0) >> 2] = 2;
   HEAP32[($1_1 + 104 | 0) >> 2] = 1049024;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 116 | 0) >> 2] = 1;
   HEAP32[($1_1 + 120 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 84 | 0) >> 2] = 1;
   HEAP32[($1_1 + 112 | 0) >> 2] = $1_1 + 80 | 0;
   HEAP32[($1_1 + 80 | 0) >> 2] = $1_1 + 24 | 0;
   $13($1_1 + 92 | 0 | 0, $1_1 + 104 | 0 | 0);
   $4_1 = HEAP32[($1_1 + 96 | 0) >> 2] | 0;
   $2_1 = HEAP32[($1_1 + 100 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   if ($2_1 >>> 0 > ((HEAP32[($1_1 + 68 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
    $37($1_1 + 68 | 0 | 0, $3_1 | 0, $2_1 | 0);
    $158 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   } else {
    $158 = $3_1
   }
   $7($158 + (HEAP32[($1_1 + 72 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $2_1 | 0) | 0;
   HEAP32[($1_1 + 76 | 0) >> 2] = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + $2_1 | 0;
   $48($1_1 + 92 | 0 | 0);
   $4_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
   $2_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   if ($2_1 >>> 0 > ((HEAP32[($1_1 + 68 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
    $37($1_1 + 68 | 0 | 0, $3_1 | 0, $2_1 | 0);
    $194 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   } else {
    $194 = $3_1
   }
   $7($194 + (HEAP32[($1_1 + 72 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $2_1 | 0) | 0;
   $2_1 = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + $2_1 | 0;
   HEAP32[($1_1 + 76 | 0) >> 2] = $2_1;
   $4_1 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
   $3_1 = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
   if ($3_1 >>> 0 > ((HEAP32[($1_1 + 68 | 0) >> 2] | 0) - $2_1 | 0) >>> 0) {
    $37($1_1 + 68 | 0 | 0, $2_1 | 0, $3_1 | 0);
    $227 = HEAP32[($1_1 + 76 | 0) >> 2] | 0;
   } else {
    $227 = $2_1
   }
   $7($227 + (HEAP32[($1_1 + 72 | 0) >> 2] | 0) | 0 | 0, $4_1 | 0, $3_1 | 0) | 0;
   HEAP32[($1_1 + 76 | 0) >> 2] = (HEAP32[($1_1 + 76 | 0) >> 2] | 0) + $3_1 | 0;
   HEAP32[($1_1 + 108 | 0) >> 2] = 1;
   HEAP32[($1_1 + 104 | 0) >> 2] = 1049488;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 116 | 0) >> 2] = 1;
   HEAP32[($1_1 + 120 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 84 | 0) >> 2] = 1;
   $3_1 = $1_1 + 80 | 0;
   HEAP32[($1_1 + 112 | 0) >> 2] = $3_1;
   $5_1 = $1_1 + 68 | 0;
   HEAP32[($1_1 + 80 | 0) >> 2] = $5_1;
   $2_1 = $1_1 + 92 | 0;
   $4_1 = $1_1 + 104 | 0;
   $13($2_1 | 0, $4_1 | 0);
   $48($2_1 | 0);
   $31($3_1 | 0, HEAP32[($1_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 76 | 0) >> 2] | 0 | 0);
   HEAP32[($1_1 + 108 | 0) >> 2] = 1;
   HEAP32[($1_1 + 104 | 0) >> 2] = 1049508;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 116 | 0) >> 2] = 1;
   HEAP32[($1_1 + 120 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 64 | 0) >> 2] = 1;
   HEAP32[($1_1 + 112 | 0) >> 2] = $1_1 + 60 | 0;
   HEAP32[($1_1 + 60 | 0) >> 2] = $3_1;
   $13($2_1 | 0, $4_1 | 0);
   $48($2_1 | 0);
   HEAP32[($1_1 + 112 | 0) >> 2] = HEAP32[($1_1 + 88 | 0) >> 2] | 0;
   i64toi32_i32$2 = $1_1;
   i64toi32_i32$0 = HEAP32[($1_1 + 80 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 84 | 0) >> 2] | 0;
   $283 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 104 | 0) >> 2] = $283;
   HEAP32[($1_1 + 108 | 0) >> 2] = i64toi32_i32$1;
   $48($5_1 | 0);
   $48($1_1 + 48 | 0 | 0);
   $48($1_1 + 36 | 0 | 0);
   $48($1_1 + 24 | 0 | 0);
   $48($1_1 + 12 | 0 | 0);
   $33($1_1 | 0, $4_1 | 0, 1048692 | 0);
   i64toi32_i32$2 = $1_1;
   i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   $297 = i64toi32_i32$1;
   i64toi32_i32$1 = $0_1;
   HEAP32[i64toi32_i32$1 >> 2] = $297;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   global$0 = $1_1 + 128 | 0;
   return;
  }
  $49($3_1 | 0, HEAP32[($1_1 + 112 | 0) >> 2] | 0 | 0, 1048824 | 0);
  wasm2js_trap();
 }
 
 function $4($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $205 = 0, $134 = 0, $144 = 0, $154 = 0;
  label$1 : {
   label$2 : {
    $3_1 = ($0_1 + 3 | 0) & -4 | 0;
    $8_1 = $3_1 - $0_1 | 0;
    if ($1_1 >>> 0 < $8_1 >>> 0) {
     break label$2
    }
    $6_1 = $1_1 - $8_1 | 0;
    if ($6_1 >>> 0 < 4 >>> 0) {
     break label$2
    }
    $7_1 = $6_1 & 3 | 0;
    $1_1 = 0;
    label$3 : {
     $9_1 = ($0_1 | 0) == ($3_1 | 0);
     if ($9_1) {
      break label$3
     }
     label$4 : {
      $5_1 = $0_1 - $3_1 | 0;
      if ($5_1 >>> 0 > -4 >>> 0) {
       $3_1 = 0;
       break label$4;
      }
      $3_1 = 0;
      label$6 : while (1) {
       $2_1 = $0_1 + $3_1 | 0;
       $1_1 = ((($1_1 + ((HEAP8[$2_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($2_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($2_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($2_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
       $3_1 = $3_1 + 4 | 0;
       if ($3_1) {
        continue label$6
       }
       break label$6;
      };
     }
     if ($9_1) {
      break label$3
     }
     $2_1 = $0_1 + $3_1 | 0;
     label$7 : while (1) {
      $1_1 = $1_1 + ((HEAP8[$2_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
      $2_1 = $2_1 + 1 | 0;
      $5_1 = $5_1 + 1 | 0;
      if ($5_1) {
       continue label$7
      }
      break label$7;
     };
    }
    $0_1 = $0_1 + $8_1 | 0;
    label$8 : {
     if (!$7_1) {
      break label$8
     }
     $3_1 = $0_1 + ($6_1 & -4 | 0) | 0;
     $4_1 = (HEAP8[$3_1 >> 0] | 0 | 0) > (-65 | 0);
     if (($7_1 | 0) == (1 | 0)) {
      break label$8
     }
     $4_1 = $4_1 + ((HEAP8[($3_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
     if (($7_1 | 0) == (2 | 0)) {
      break label$8
     }
     $4_1 = $4_1 + ((HEAP8[($3_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
    }
    $5_1 = $6_1 >>> 2 | 0;
    $4_1 = $1_1 + $4_1 | 0;
    label$9 : while (1) {
     $3_1 = $0_1;
     if (!$5_1) {
      break label$1
     }
     $6_1 = $5_1 >>> 0 >= 192 >>> 0 ? 192 : $5_1;
     $7_1 = $6_1 & 3 | 0;
     $8_1 = $6_1 << 2 | 0;
     $2_1 = 0;
     if ($5_1 >>> 0 >= 4 >>> 0) {
      $9_1 = $0_1 + ($8_1 & 1008 | 0) | 0;
      $1_1 = $0_1;
      label$11 : while (1) {
       $0_1 = HEAP32[$1_1 >> 2] | 0;
       $134 = ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) + $2_1 | 0;
       $0_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       $144 = $134 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
       $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
       $154 = $144 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
       $0_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
       $2_1 = $154 + ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
       $1_1 = $1_1 + 16 | 0;
       if (($1_1 | 0) != ($9_1 | 0)) {
        continue label$11
       }
       break label$11;
      };
     }
     $5_1 = $5_1 - $6_1 | 0;
     $0_1 = $3_1 + $8_1 | 0;
     $4_1 = (Math_imul((($2_1 >>> 8 | 0) & 16711935 | 0) + ($2_1 & 16711935 | 0) | 0, 65537) >>> 16 | 0) + $4_1 | 0;
     if (!$7_1) {
      continue label$9
     }
     break label$9;
    };
    label$12 : {
     $0_1 = $3_1 + (($6_1 & 252 | 0) << 2 | 0) | 0;
     $1_1 = HEAP32[$0_1 >> 2] | 0;
     $1_1 = (($1_1 ^ -1 | 0) >>> 7 | 0 | ($1_1 >>> 6 | 0) | 0) & 16843009 | 0;
     $205 = $1_1;
     if (($7_1 | 0) == (1 | 0)) {
      break label$12
     }
     $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     $1_1 = $205 + ((($1_1 ^ -1 | 0) >>> 7 | 0 | ($1_1 >>> 6 | 0) | 0) & 16843009 | 0) | 0;
     $205 = $1_1;
     if (($7_1 | 0) == (2 | 0)) {
      break label$12
     }
     $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     $205 = ((($0_1 ^ -1 | 0) >>> 7 | 0 | ($0_1 >>> 6 | 0) | 0) & 16843009 | 0) + $1_1 | 0;
    }
    $1_1 = $205;
    return (Math_imul((($1_1 >>> 8 | 0) & 459007 | 0) + ($1_1 & 16711935 | 0) | 0, 65537) >>> 16 | 0) + $4_1 | 0 | 0;
   }
   if (!$1_1) {
    return 0 | 0
   }
   $3_1 = $1_1 & 3 | 0;
   label$14 : {
    if ($1_1 >>> 0 < 4 >>> 0) {
     break label$14
    }
    $5_1 = $1_1 & -4 | 0;
    label$16 : while (1) {
     $1_1 = $0_1 + $2_1 | 0;
     $4_1 = ((($4_1 + ((HEAP8[$1_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($1_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
     $2_1 = $2_1 + 4 | 0;
     if (($5_1 | 0) != ($2_1 | 0)) {
      continue label$16
     }
     break label$16;
    };
   }
   if (!$3_1) {
    break label$1
   }
   $1_1 = $0_1 + $2_1 | 0;
   label$17 : while (1) {
    $4_1 = $4_1 + ((HEAP8[$1_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
    $1_1 = $1_1 + 1 | 0;
    $3_1 = $3_1 - 1 | 0;
    if ($3_1) {
     continue label$17
    }
    break label$17;
   };
  }
  return $4_1 | 0;
 }
 
 function $5($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $6_1 = 0, $5_1 = 0, $39_1 = 0, $7_1 = 0, $8_1 = 0, $77 = 0, $9_1 = 0, $67_1 = 0, $68_1 = 0;
  label$1 : {
   $9_1 = HEAP32[$0_1 >> 2] | 0;
   $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   if ($9_1 | $4_1 | 0) {
    label$3 : {
     if (!($4_1 & 1 | 0)) {
      break label$3
     }
     $7_1 = $1_1 + $2_1 | 0;
     label$4 : {
      $6_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
      if (!$6_1) {
       $4_1 = $1_1;
       break label$4;
      }
      $4_1 = $1_1;
      label$6 : while (1) {
       $3_1 = $4_1;
       if (($3_1 | 0) == ($7_1 | 0)) {
        break label$3
       }
       label$7 : {
        $8_1 = HEAP8[$3_1 >> 0] | 0;
        $39_1 = $3_1 + 1 | 0;
        if (($8_1 | 0) >= (0 | 0)) {
         break label$7
        }
        $39_1 = $3_1 + 2 | 0;
        if ($8_1 >>> 0 < -32 >>> 0) {
         break label$7
        }
        $39_1 = $3_1 + 3 | 0;
        if ($8_1 >>> 0 < -16 >>> 0) {
         break label$7
        }
        $39_1 = $3_1 + 4 | 0;
       }
       $4_1 = $39_1;
       $5_1 = ($4_1 - $3_1 | 0) + $5_1 | 0;
       $6_1 = $6_1 - 1 | 0;
       if ($6_1) {
        continue label$6
       }
       break label$6;
      };
     }
     if (($4_1 | 0) == ($7_1 | 0)) {
      break label$3
     }
     HEAP8[$4_1 >> 0] | 0;
     $67_1 = $5_1;
     $68_1 = $2_1;
     label$8 : {
      label$9 : {
       if (!$5_1) {
        break label$9
       }
       if ($2_1 >>> 0 <= $5_1 >>> 0) {
        if (($2_1 | 0) == ($5_1 | 0)) {
         break label$9
        }
        $77 = 0;
        break label$8;
       }
       if ((HEAP8[($1_1 + $5_1 | 0) >> 0] | 0 | 0) >= (-64 | 0)) {
        break label$9
       }
       $77 = 0;
       break label$8;
      }
      $77 = $1_1;
     }
     $3_1 = $77;
     $2_1 = $3_1 ? $67_1 : $68_1;
     $1_1 = $3_1 ? $3_1 : $1_1;
    }
    if (!$9_1) {
     break label$1
    }
    $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    label$11 : {
     if ($2_1 >>> 0 >= 16 >>> 0) {
      $3_1 = $4($1_1 | 0, $2_1 | 0) | 0;
      break label$11;
     }
     if (!$2_1) {
      $3_1 = 0;
      break label$11;
     }
     $6_1 = $2_1 & 3 | 0;
     label$14 : {
      if ($2_1 >>> 0 < 4 >>> 0) {
       $3_1 = 0;
       $5_1 = 0;
       break label$14;
      }
      $8_1 = $2_1 & 12 | 0;
      $3_1 = 0;
      $5_1 = 0;
      label$16 : while (1) {
       $4_1 = $1_1 + $5_1 | 0;
       $3_1 = ((($3_1 + ((HEAP8[$4_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($4_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($4_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($4_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
       $5_1 = $5_1 + 4 | 0;
       if (($8_1 | 0) != ($5_1 | 0)) {
        continue label$16
       }
       break label$16;
      };
     }
     if (!$6_1) {
      break label$11
     }
     $4_1 = $1_1 + $5_1 | 0;
     label$17 : while (1) {
      $3_1 = $3_1 + ((HEAP8[$4_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
      $4_1 = $4_1 + 1 | 0;
      $6_1 = $6_1 - 1 | 0;
      if ($6_1) {
       continue label$17
      }
      break label$17;
     };
    }
    label$18 : {
     if ($3_1 >>> 0 < $7_1 >>> 0) {
      $6_1 = $7_1 - $3_1 | 0;
      label$20 : {
       label$21 : {
        label$22 : {
         $4_1 = HEAPU8[($0_1 + 24 | 0) >> 0] | 0;
         $3_1 = ($4_1 | 0) != (3 | 0) ? $4_1 : 0;
         switch ($3_1 - 1 | 0 | 0) {
         case 1:
          break label$21;
         case 0:
          break label$22;
         default:
          break label$20;
         };
        }
        $3_1 = $6_1;
        $6_1 = 0;
        break label$20;
       }
       $3_1 = $6_1 >>> 1 | 0;
       $6_1 = ($6_1 + 1 | 0) >>> 1 | 0;
      }
      $3_1 = $3_1 + 1 | 0;
      $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
      $4_1 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
      $0_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
      label$23 : while (1) {
       $3_1 = $3_1 - 1 | 0;
       if (!$3_1) {
        break label$18
       }
       if (!(FUNCTION_TABLE[HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $5_1) | 0)) {
        continue label$23
       }
       break label$23;
      };
      return 1 | 0;
     }
     break label$1;
    }
    if (FUNCTION_TABLE[HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1) | 0) {
     return 1 | 0
    }
    $3_1 = 0;
    label$25 : while (1) {
     if (($3_1 | 0) == ($6_1 | 0)) {
      return 0 | 0
     }
     $3_1 = $3_1 + 1 | 0;
     if (!(FUNCTION_TABLE[HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $5_1) | 0)) {
      continue label$25
     }
     break label$25;
    };
    return ($3_1 - 1 | 0) >>> 0 < $6_1 >>> 0 | 0;
   }
   return FUNCTION_TABLE[HEAP32[((HEAP32[($0_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($0_1 + 28 | 0) >> 2] | 0, $1_1, $2_1) | 0 | 0;
  }
  return FUNCTION_TABLE[HEAP32[((HEAP32[($0_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($0_1 + 28 | 0) >> 2] | 0, $1_1, $2_1) | 0 | 0;
 }
 
 function $6($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $11_1 = 0, $10_1 = 0, $12_1 = 0;
  $8_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
  $6_1 = $8_1 & 1 | 0;
  $12_1 = $6_1 ? 43 : 1114112;
  $6_1 = $4_1 + $6_1 | 0;
  label$1 : {
   if (!($8_1 & 4 | 0)) {
    $1_1 = 0;
    break label$1;
   }
   label$3 : {
    if ($2_1 >>> 0 >= 16 >>> 0) {
     $5_1 = $4($1_1 | 0, $2_1 | 0) | 0;
     break label$3;
    }
    if (!$2_1) {
     break label$3
    }
    $9_1 = $2_1 & 3 | 0;
    label$6 : {
     if ($2_1 >>> 0 < 4 >>> 0) {
      break label$6
     }
     $10_1 = $2_1 & 12 | 0;
     label$8 : while (1) {
      $11_1 = $1_1 + $7_1 | 0;
      $5_1 = ((($5_1 + ((HEAP8[$11_1 >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($11_1 + 1 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($11_1 + 2 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0) + ((HEAP8[($11_1 + 3 | 0) >> 0] | 0 | 0) > (-65 | 0)) | 0;
      $7_1 = $7_1 + 4 | 0;
      if (($10_1 | 0) != ($7_1 | 0)) {
       continue label$8
      }
      break label$8;
     };
    }
    if (!$9_1) {
     break label$3
    }
    $7_1 = $1_1 + $7_1 | 0;
    label$9 : while (1) {
     $5_1 = $5_1 + ((HEAP8[$7_1 >> 0] | 0 | 0) > (-65 | 0)) | 0;
     $7_1 = $7_1 + 1 | 0;
     $9_1 = $9_1 - 1 | 0;
     if ($9_1) {
      continue label$9
     }
     break label$9;
    };
   }
   $6_1 = $5_1 + $6_1 | 0;
  }
  if (!(HEAP32[$0_1 >> 2] | 0)) {
   $6_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
   $0_1 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
   if ($42($6_1 | 0, $0_1 | 0, $12_1 | 0, $1_1 | 0, $2_1 | 0) | 0) {
    return 1 | 0
   }
   return FUNCTION_TABLE[HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0]($6_1, $3_1, $4_1) | 0 | 0;
  }
  label$12 : {
   label$13 : {
    label$14 : {
     $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     if ($6_1 >>> 0 >= $7_1 >>> 0) {
      $6_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
      $0_1 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
      if (!($42($6_1 | 0, $0_1 | 0, $12_1 | 0, $1_1 | 0, $2_1 | 0) | 0)) {
       break label$14
      }
      return 1 | 0;
     }
     if (!($8_1 & 8 | 0)) {
      break label$13
     }
     $8_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
     HEAP32[($0_1 + 16 | 0) >> 2] = 48;
     $10_1 = HEAPU8[($0_1 + 24 | 0) >> 0] | 0;
     $5_1 = 1;
     HEAP8[($0_1 + 24 | 0) >> 0] = 1;
     $9_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
     $11_1 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
     if ($42($9_1 | 0, $11_1 | 0, $12_1 | 0, $1_1 | 0, $2_1 | 0) | 0) {
      break label$12
     }
     $5_1 = ($7_1 - $6_1 | 0) + 1 | 0;
     label$16 : {
      label$17 : while (1) {
       $5_1 = $5_1 - 1 | 0;
       if (!$5_1) {
        break label$16
       }
       if (!(FUNCTION_TABLE[HEAP32[($11_1 + 16 | 0) >> 2] | 0 | 0]($9_1, 48) | 0)) {
        continue label$17
       }
       break label$17;
      };
      return 1 | 0;
     }
     if (FUNCTION_TABLE[HEAP32[($11_1 + 12 | 0) >> 2] | 0 | 0]($9_1, $3_1, $4_1) | 0) {
      return 1 | 0
     }
     HEAP8[($0_1 + 24 | 0) >> 0] = $10_1;
     HEAP32[($0_1 + 16 | 0) >> 2] = $8_1;
     return 0 | 0;
    }
    $5_1 = FUNCTION_TABLE[HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0]($6_1, $3_1, $4_1) | 0;
    break label$12;
   }
   $6_1 = $7_1 - $6_1 | 0;
   label$19 : {
    label$20 : {
     label$21 : {
      $5_1 = HEAPU8[($0_1 + 24 | 0) >> 0] | 0;
      $5_1 = ($5_1 | 0) == (3 | 0) ? 1 : $5_1;
      switch ($5_1 - 1 | 0 | 0) {
      case 1:
       break label$20;
      case 0:
       break label$21;
      default:
       break label$19;
      };
     }
     $5_1 = $6_1;
     $6_1 = 0;
     break label$19;
    }
    $5_1 = $6_1 >>> 1 | 0;
    $6_1 = ($6_1 + 1 | 0) >>> 1 | 0;
   }
   $5_1 = $5_1 + 1 | 0;
   $10_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   $8_1 = HEAP32[($0_1 + 32 | 0) >> 2] | 0;
   $0_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
   label$22 : {
    label$23 : while (1) {
     $5_1 = $5_1 - 1 | 0;
     if (!$5_1) {
      break label$22
     }
     if (!(FUNCTION_TABLE[HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $10_1) | 0)) {
      continue label$23
     }
     break label$23;
    };
    return 1 | 0;
   }
   $5_1 = 1;
   if ($42($0_1 | 0, $8_1 | 0, $12_1 | 0, $1_1 | 0, $2_1 | 0) | 0) {
    break label$12
   }
   if (FUNCTION_TABLE[HEAP32[($8_1 + 12 | 0) >> 2] | 0 | 0]($0_1, $3_1, $4_1) | 0) {
    break label$12
   }
   $5_1 = 0;
   label$24 : while (1) {
    if (($5_1 | 0) == ($6_1 | 0)) {
     return 0 | 0
    }
    $5_1 = $5_1 + 1 | 0;
    if (!(FUNCTION_TABLE[HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $10_1) | 0)) {
     continue label$24
    }
    break label$24;
   };
   return ($5_1 - 1 | 0) >>> 0 < $6_1 >>> 0 | 0;
  }
  return $5_1 | 0;
 }
 
 function $7($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $132 = 0;
  label$1 : {
   if ($2_1 >>> 0 < 16 >>> 0) {
    $3_1 = $0_1;
    break label$1;
   }
   label$3 : {
    $6_1 = (0 - $0_1 | 0) & 3 | 0;
    $5_1 = $0_1 + $6_1 | 0;
    if ($5_1 >>> 0 <= $0_1 >>> 0) {
     break label$3
    }
    $3_1 = $0_1;
    $4_1 = $1_1;
    if ($6_1) {
     $7_1 = $6_1;
     label$5 : while (1) {
      HEAP8[$3_1 >> 0] = HEAPU8[$4_1 >> 0] | 0;
      $4_1 = $4_1 + 1 | 0;
      $3_1 = $3_1 + 1 | 0;
      $7_1 = $7_1 - 1 | 0;
      if ($7_1) {
       continue label$5
      }
      break label$5;
     };
    }
    if (($6_1 - 1 | 0) >>> 0 < 7 >>> 0) {
     break label$3
    }
    label$6 : while (1) {
     HEAP8[$3_1 >> 0] = HEAPU8[$4_1 >> 0] | 0;
     HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($4_1 + 1 | 0) >> 0] | 0;
     HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($4_1 + 2 | 0) >> 0] | 0;
     HEAP8[($3_1 + 3 | 0) >> 0] = HEAPU8[($4_1 + 3 | 0) >> 0] | 0;
     HEAP8[($3_1 + 4 | 0) >> 0] = HEAPU8[($4_1 + 4 | 0) >> 0] | 0;
     HEAP8[($3_1 + 5 | 0) >> 0] = HEAPU8[($4_1 + 5 | 0) >> 0] | 0;
     HEAP8[($3_1 + 6 | 0) >> 0] = HEAPU8[($4_1 + 6 | 0) >> 0] | 0;
     HEAP8[($3_1 + 7 | 0) >> 0] = HEAPU8[($4_1 + 7 | 0) >> 0] | 0;
     $4_1 = $4_1 + 8 | 0;
     $3_1 = $3_1 + 8 | 0;
     if (($3_1 | 0) != ($5_1 | 0)) {
      continue label$6
     }
     break label$6;
    };
   }
   $7_1 = $2_1 - $6_1 | 0;
   $8_1 = $7_1 & -4 | 0;
   $3_1 = $5_1 + $8_1 | 0;
   label$7 : {
    $4_1 = $1_1 + $6_1 | 0;
    if (!($4_1 & 3 | 0)) {
     if ($3_1 >>> 0 <= $5_1 >>> 0) {
      break label$7
     }
     $1_1 = $4_1;
     label$9 : while (1) {
      HEAP32[$5_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      $1_1 = $1_1 + 4 | 0;
      $5_1 = $5_1 + 4 | 0;
      if ($5_1 >>> 0 < $3_1 >>> 0) {
       continue label$9
      }
      break label$9;
     };
     break label$7;
    }
    if ($3_1 >>> 0 <= $5_1 >>> 0) {
     break label$7
    }
    $2_1 = $4_1 << 3 | 0;
    $6_1 = $2_1 & 24 | 0;
    $9_1 = $4_1 & -4 | 0;
    $1_1 = $9_1 + 4 | 0;
    $10_1 = (0 - $2_1 | 0) & 24 | 0;
    $2_1 = HEAP32[$9_1 >> 2] | 0;
    label$10 : while (1) {
     $132 = $2_1 >>> $6_1 | 0;
     $2_1 = HEAP32[$1_1 >> 2] | 0;
     HEAP32[$5_1 >> 2] = $132 | ($2_1 << $10_1 | 0) | 0;
     $1_1 = $1_1 + 4 | 0;
     $5_1 = $5_1 + 4 | 0;
     if ($5_1 >>> 0 < $3_1 >>> 0) {
      continue label$10
     }
     break label$10;
    };
   }
   $2_1 = $7_1 & 3 | 0;
   $1_1 = $4_1 + $8_1 | 0;
  }
  label$11 : {
   $6_1 = $2_1 + $3_1 | 0;
   if ($3_1 >>> 0 >= $6_1 >>> 0) {
    break label$11
   }
   $4_1 = $2_1 & 7 | 0;
   if ($4_1) {
    label$13 : while (1) {
     HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
     $1_1 = $1_1 + 1 | 0;
     $3_1 = $3_1 + 1 | 0;
     $4_1 = $4_1 - 1 | 0;
     if ($4_1) {
      continue label$13
     }
     break label$13;
    }
   }
   if (($2_1 - 1 | 0) >>> 0 < 7 >>> 0) {
    break label$11
   }
   label$14 : while (1) {
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($3_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    HEAP8[($3_1 + 4 | 0) >> 0] = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
    HEAP8[($3_1 + 5 | 0) >> 0] = HEAPU8[($1_1 + 5 | 0) >> 0] | 0;
    HEAP8[($3_1 + 6 | 0) >> 0] = HEAPU8[($1_1 + 6 | 0) >> 0] | 0;
    HEAP8[($3_1 + 7 | 0) >> 0] = HEAPU8[($1_1 + 7 | 0) >> 0] | 0;
    $1_1 = $1_1 + 8 | 0;
    $3_1 = $3_1 + 8 | 0;
    if (($3_1 | 0) != ($6_1 | 0)) {
     continue label$14
    }
    break label$14;
   };
  }
  return $0_1 | 0;
 }
 
 function $8($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $167 = 0, $59_1 = 0;
  $1_1 = $0_1 - 8 | 0;
  $3_1 = HEAP32[($0_1 - 4 | 0) >> 2] | 0;
  $0_1 = $3_1 & -8 | 0;
  $2_1 = $1_1 + $0_1 | 0;
  label$1 : {
   label$2 : {
    if ($3_1 & 1 | 0) {
     break label$2
    }
    if (!($3_1 & 2 | 0)) {
     break label$1
    }
    $3_1 = HEAP32[$1_1 >> 2] | 0;
    $0_1 = $3_1 + $0_1 | 0;
    $1_1 = $1_1 - $3_1 | 0;
    if (($1_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
     if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
      break label$2
     }
     HEAP32[1051576 >> 2] = $0_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
     HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
     HEAP32[$2_1 >> 2] = $0_1;
     return;
    }
    $15($1_1 | 0, $3_1 | 0);
   }
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       label$8 : {
        $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
        if (!($3_1 & 2 | 0)) {
         if (($2_1 | 0) == (HEAP32[1051588 >> 2] | 0 | 0)) {
          break label$7
         }
         if (($2_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
          break label$6
         }
         $59_1 = $2_1;
         $2_1 = $3_1 & -8 | 0;
         $15($59_1 | 0, $2_1 | 0);
         $0_1 = $0_1 + $2_1 | 0;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
         if (($1_1 | 0) != (HEAP32[1051584 >> 2] | 0 | 0)) {
          break label$8
         }
         HEAP32[1051576 >> 2] = $0_1;
         return;
        }
        HEAP32[($2_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
        HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
        HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
       }
       if ($0_1 >>> 0 < 256 >>> 0) {
        break label$5
       }
       $18($1_1 | 0, $0_1 | 0);
       $1_1 = 0;
       $0_1 = (HEAP32[1051608 >> 2] | 0) - 1 | 0;
       HEAP32[1051608 >> 2] = $0_1;
       if ($0_1) {
        break label$1
       }
       $0_1 = HEAP32[1051296 >> 2] | 0;
       if ($0_1) {
        label$11 : while (1) {
         $1_1 = $1_1 + 1 | 0;
         $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         if ($0_1) {
          continue label$11
         }
         break label$11;
        }
       }
       HEAP32[1051608 >> 2] = $1_1 >>> 0 <= 4095 >>> 0 ? 4095 : $1_1;
       return;
      }
      HEAP32[1051588 >> 2] = $1_1;
      $0_1 = (HEAP32[1051580 >> 2] | 0) + $0_1 | 0;
      HEAP32[1051580 >> 2] = $0_1;
      HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
      if ((HEAP32[1051584 >> 2] | 0 | 0) == ($1_1 | 0)) {
       HEAP32[1051576 >> 2] = 0;
       HEAP32[1051584 >> 2] = 0;
      }
      $3_1 = HEAP32[1051600 >> 2] | 0;
      if ($0_1 >>> 0 <= $3_1 >>> 0) {
       break label$1
      }
      $2_1 = HEAP32[1051588 >> 2] | 0;
      if (!$2_1) {
       break label$1
      }
      $0_1 = 0;
      $4_1 = HEAP32[1051580 >> 2] | 0;
      if ($4_1 >>> 0 < 41 >>> 0) {
       break label$4
      }
      $1_1 = 1051288;
      label$13 : while (1) {
       $5_1 = HEAP32[$1_1 >> 2] | 0;
       if ($2_1 >>> 0 >= $5_1 >>> 0) {
        if ($2_1 >>> 0 < ($5_1 + (HEAP32[($1_1 + 4 | 0) >> 2] | 0) | 0) >>> 0) {
         break label$4
        }
       }
       $1_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
       continue label$13;
      };
     }
     HEAP32[1051584 >> 2] = $1_1;
     $0_1 = (HEAP32[1051576 >> 2] | 0) + $0_1 | 0;
     HEAP32[1051576 >> 2] = $0_1;
     HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
     HEAP32[($0_1 + $1_1 | 0) >> 2] = $0_1;
     return;
    }
    $2_1 = ($0_1 & 248 | 0) + 1051304 | 0;
    label$15 : {
     $3_1 = HEAP32[1051568 >> 2] | 0;
     $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
     if (!($3_1 & $0_1 | 0)) {
      HEAP32[1051568 >> 2] = $0_1 | $3_1 | 0;
      $167 = $2_1;
      break label$15;
     }
     $167 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    }
    $0_1 = $167;
    HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
    return;
   }
   $1_1 = HEAP32[1051296 >> 2] | 0;
   if ($1_1) {
    label$18 : while (1) {
     $0_1 = $0_1 + 1 | 0;
     $1_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
     if ($1_1) {
      continue label$18
     }
     break label$18;
    }
   }
   HEAP32[1051608 >> 2] = $0_1 >>> 0 <= 4095 >>> 0 ? 4095 : $0_1;
   if ($3_1 >>> 0 >= $4_1 >>> 0) {
    break label$1
   }
   HEAP32[1051600 >> 2] = -1;
  }
 }
 
 function $9($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $10_1 = 0, $9_1 = 0, $12_1 = 0, $193 = 0, $11_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 44 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 40 | 0) >> 2] = $0_1;
  HEAP8[($3_1 + 36 | 0) >> 0] = 3;
  HEAP32[($3_1 + 28 | 0) >> 2] = 32;
  HEAP32[($3_1 + 32 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $10_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
      if (!$10_1) {
       $0_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
       if (!$0_1) {
        break label$4
       }
       $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
       $4_1 = $1_1 + ($0_1 << 3 | 0) | 0;
       $7_1 = (($0_1 - 1 | 0) & 536870911 | 0) + 1 | 0;
       $0_1 = HEAP32[$2_1 >> 2] | 0;
       label$6 : while (1) {
        $5_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
        if ($5_1) {
         if (FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 44 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 40 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, $5_1) | 0) {
          break label$3
         }
        }
        if (FUNCTION_TABLE[HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0](HEAP32[$1_1 >> 2] | 0, $3_1 + 12 | 0) | 0) {
         break label$3
        }
        $0_1 = $0_1 + 8 | 0;
        $1_1 = $1_1 + 8 | 0;
        if (($1_1 | 0) != ($4_1 | 0)) {
         continue label$6
        }
        break label$6;
       };
       break label$4;
      }
      $0_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
      if (!$0_1) {
       break label$4
      }
      $11_1 = $0_1 << 5 | 0;
      $7_1 = (($0_1 - 1 | 0) & 134217727 | 0) + 1 | 0;
      $5_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
      $0_1 = HEAP32[$2_1 >> 2] | 0;
      label$8 : while (1) {
       $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
       if ($1_1) {
        if (FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 44 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 40 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, $1_1) | 0) {
         break label$3
        }
       }
       $1_1 = $8_1 + $10_1 | 0;
       HEAP32[($3_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
       HEAP8[($3_1 + 36 | 0) >> 0] = HEAPU8[($1_1 + 28 | 0) >> 0] | 0;
       HEAP32[($3_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
       $4_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
       $9_1 = 0;
       $6_1 = 0;
       label$10 : {
        label$11 : {
         switch ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) - 1 | 0 | 0) {
         case 0:
          $12_1 = ($4_1 << 3 | 0) + $5_1 | 0;
          if (HEAP32[$12_1 >> 2] | 0) {
           break label$10
          }
          $4_1 = HEAP32[($12_1 + 4 | 0) >> 2] | 0;
          break;
         case 1:
          break label$10;
         default:
          break label$11;
         };
        }
        $6_1 = 1;
       }
       HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
       HEAP32[($3_1 + 12 | 0) >> 2] = $6_1;
       $4_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       label$13 : {
        label$14 : {
         switch ((HEAP32[$1_1 >> 2] | 0) - 1 | 0 | 0) {
         case 0:
          $6_1 = ($4_1 << 3 | 0) + $5_1 | 0;
          if (HEAP32[$6_1 >> 2] | 0) {
           break label$13
          }
          $4_1 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
          break;
         case 1:
          break label$13;
         default:
          break label$14;
         };
        }
        $9_1 = 1;
       }
       HEAP32[($3_1 + 24 | 0) >> 2] = $4_1;
       HEAP32[($3_1 + 20 | 0) >> 2] = $9_1;
       $1_1 = $5_1 + ((HEAP32[($1_1 + 20 | 0) >> 2] | 0) << 3 | 0) | 0;
       if (FUNCTION_TABLE[HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0](HEAP32[$1_1 >> 2] | 0, $3_1 + 12 | 0) | 0) {
        break label$3
       }
       $0_1 = $0_1 + 8 | 0;
       $8_1 = $8_1 + 32 | 0;
       if (($11_1 | 0) != ($8_1 | 0)) {
        continue label$8
       }
       break label$8;
      };
     }
     if ($7_1 >>> 0 >= (HEAP32[($2_1 + 4 | 0) >> 2] | 0) >>> 0) {
      break label$2
     }
     $0_1 = (HEAP32[$2_1 >> 2] | 0) + ($7_1 << 3 | 0) | 0;
     if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($3_1 + 44 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($3_1 + 40 | 0) >> 2] | 0, HEAP32[$0_1 >> 2] | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0)) {
      break label$2
     }
    }
    $193 = 1;
    break label$1;
   }
   $193 = 0;
  }
  global$0 = $3_1 + 48 | 0;
  return $193 | 0;
 }
 
 function $10($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $99 = 0, $52_1 = 0;
  $2_1 = $0_1 + $1_1 | 0;
  label$1 : {
   label$2 : {
    $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if ($3_1 & 1 | 0) {
     break label$2
    }
    if (!($3_1 & 2 | 0)) {
     break label$1
    }
    $3_1 = HEAP32[$0_1 >> 2] | 0;
    $1_1 = $3_1 + $1_1 | 0;
    $0_1 = $0_1 - $3_1 | 0;
    if (($0_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
     if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
      break label$2
     }
     HEAP32[1051576 >> 2] = $1_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
     HEAP32[$2_1 >> 2] = $1_1;
     break label$1;
    }
    $15($0_1 | 0, $3_1 | 0);
   }
   label$4 : {
    label$5 : {
     label$6 : {
      $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
      if (!($3_1 & 2 | 0)) {
       if (($2_1 | 0) == (HEAP32[1051588 >> 2] | 0 | 0)) {
        break label$5
       }
       if (($2_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
        break label$4
       }
       $52_1 = $2_1;
       $2_1 = $3_1 & -8 | 0;
       $15($52_1 | 0, $2_1 | 0);
       $1_1 = $1_1 + $2_1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
       if (($0_1 | 0) != (HEAP32[1051584 >> 2] | 0 | 0)) {
        break label$6
       }
       HEAP32[1051576 >> 2] = $1_1;
       return;
      }
      HEAP32[($2_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
      HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
     }
     if ($1_1 >>> 0 >= 256 >>> 0) {
      $18($0_1 | 0, $1_1 | 0);
      return;
     }
     $2_1 = ($1_1 & 248 | 0) + 1051304 | 0;
     label$9 : {
      $3_1 = HEAP32[1051568 >> 2] | 0;
      $1_1 = 1 << ($1_1 >>> 3 | 0) | 0;
      if (!($3_1 & $1_1 | 0)) {
       HEAP32[1051568 >> 2] = $1_1 | $3_1 | 0;
       $99 = $2_1;
       break label$9;
      }
      $99 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     }
     $1_1 = $99;
     HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
     return;
    }
    HEAP32[1051588 >> 2] = $0_1;
    $1_1 = (HEAP32[1051580 >> 2] | 0) + $1_1 | 0;
    HEAP32[1051580 >> 2] = $1_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
    if (($0_1 | 0) != (HEAP32[1051584 >> 2] | 0 | 0)) {
     break label$1
    }
    HEAP32[1051576 >> 2] = 0;
    HEAP32[1051584 >> 2] = 0;
    return;
   }
   HEAP32[1051584 >> 2] = $0_1;
   $1_1 = (HEAP32[1051576 >> 2] | 0) + $1_1 | 0;
   HEAP32[1051576 >> 2] = $1_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
   HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
  }
 }
 
 function $11($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0;
  label$1 : {
   if ($1_1 >>> 0 < 16 >>> 0) {
    $2_1 = $0_1;
    break label$1;
   }
   label$3 : {
    $4_1 = (0 - $0_1 | 0) & 3 | 0;
    $3_1 = $0_1 + $4_1 | 0;
    if ($3_1 >>> 0 <= $0_1 >>> 0) {
     break label$3
    }
    $2_1 = $0_1;
    if ($4_1) {
     $5_1 = $4_1;
     label$5 : while (1) {
      HEAP8[$2_1 >> 0] = 0;
      $2_1 = $2_1 + 1 | 0;
      $5_1 = $5_1 - 1 | 0;
      if ($5_1) {
       continue label$5
      }
      break label$5;
     };
    }
    if (($4_1 - 1 | 0) >>> 0 < 7 >>> 0) {
     break label$3
    }
    label$6 : while (1) {
     HEAP8[$2_1 >> 0] = 0;
     HEAP8[($2_1 + 7 | 0) >> 0] = 0;
     HEAP8[($2_1 + 6 | 0) >> 0] = 0;
     HEAP8[($2_1 + 5 | 0) >> 0] = 0;
     HEAP8[($2_1 + 4 | 0) >> 0] = 0;
     HEAP8[($2_1 + 3 | 0) >> 0] = 0;
     HEAP8[($2_1 + 2 | 0) >> 0] = 0;
     HEAP8[($2_1 + 1 | 0) >> 0] = 0;
     $2_1 = $2_1 + 8 | 0;
     if (($2_1 | 0) != ($3_1 | 0)) {
      continue label$6
     }
     break label$6;
    };
   }
   $1_1 = $1_1 - $4_1 | 0;
   $2_1 = $3_1 + ($1_1 & -4 | 0) | 0;
   if ($2_1 >>> 0 > $3_1 >>> 0) {
    label$8 : while (1) {
     HEAP32[$3_1 >> 2] = 0;
     $3_1 = $3_1 + 4 | 0;
     if ($3_1 >>> 0 < $2_1 >>> 0) {
      continue label$8
     }
     break label$8;
    }
   }
   $1_1 = $1_1 & 3 | 0;
  }
  label$9 : {
   $4_1 = $1_1 + $2_1 | 0;
   if ($2_1 >>> 0 >= $4_1 >>> 0) {
    break label$9
   }
   $3_1 = $1_1 & 7 | 0;
   if ($3_1) {
    label$11 : while (1) {
     HEAP8[$2_1 >> 0] = 0;
     $2_1 = $2_1 + 1 | 0;
     $3_1 = $3_1 - 1 | 0;
     if ($3_1) {
      continue label$11
     }
     break label$11;
    }
   }
   if (($1_1 - 1 | 0) >>> 0 < 7 >>> 0) {
    break label$9
   }
   label$12 : while (1) {
    HEAP8[$2_1 >> 0] = 0;
    HEAP8[($2_1 + 7 | 0) >> 0] = 0;
    HEAP8[($2_1 + 6 | 0) >> 0] = 0;
    HEAP8[($2_1 + 5 | 0) >> 0] = 0;
    HEAP8[($2_1 + 4 | 0) >> 0] = 0;
    HEAP8[($2_1 + 3 | 0) >> 0] = 0;
    HEAP8[($2_1 + 2 | 0) >> 0] = 0;
    HEAP8[($2_1 + 1 | 0) >> 0] = 0;
    $2_1 = $2_1 + 8 | 0;
    if (($2_1 | 0) != ($4_1 | 0)) {
     continue label$12
    }
    break label$12;
   };
  }
  return $0_1 | 0;
 }
 
 function $12($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  label$1 : {
   $0_1 = $0_1 >>> 0 <= 16 >>> 0 ? 16 : $0_1;
   if ((-65587 - $0_1 | 0) >>> 0 <= $1_1 >>> 0) {
    break label$1
   }
   $4_1 = $1_1 >>> 0 < 11 >>> 0 ? 16 : ($1_1 + 11 | 0) & -8 | 0;
   $2_1 = $0(($0_1 + $4_1 | 0) + 12 | 0 | 0) | 0;
   if (!$2_1) {
    break label$1
   }
   $1_1 = $2_1 - 8 | 0;
   label$2 : {
    $3_1 = $0_1 - 1 | 0;
    if (!($3_1 & $2_1 | 0)) {
     $0_1 = $1_1;
     break label$2;
    }
    $5_1 = $2_1 - 4 | 0;
    $6_1 = HEAP32[$5_1 >> 2] | 0;
    $2_1 = (($2_1 + $3_1 | 0) & (0 - $0_1 | 0) | 0) - 8 | 0;
    $0_1 = $2_1 + (($2_1 - $1_1 | 0) >>> 0 <= 16 >>> 0 ? $0_1 : 0) | 0;
    $2_1 = $0_1 - $1_1 | 0;
    $3_1 = ($6_1 & -8 | 0) - $2_1 | 0;
    if ($6_1 & 3 | 0) {
     HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $3_1 = $0_1 + $3_1 | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     HEAP32[$5_1 >> 2] = $2_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $3_1 = $1_1 + $2_1 | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     $10($1_1 | 0, $2_1 | 0);
     break label$2;
    }
    $1_1 = HEAP32[$1_1 >> 2] | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
    HEAP32[$0_1 >> 2] = $1_1 + $2_1 | 0;
   }
   label$5 : {
    $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if (!($1_1 & 3 | 0)) {
     break label$5
    }
    $2_1 = $1_1 & -8 | 0;
    if ($2_1 >>> 0 <= ($4_1 + 16 | 0) >>> 0) {
     break label$5
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $4_1 | ($1_1 & 1 | 0) | 0 | 2 | 0;
    $1_1 = $0_1 + $4_1 | 0;
    $4_1 = $2_1 - $4_1 | 0;
    HEAP32[($1_1 + 4 | 0) >> 2] = $4_1 | 3 | 0;
    $2_1 = $0_1 + $2_1 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 1 | 0;
    $10($1_1 | 0, $4_1 | 0);
   }
   $3_1 = $0_1 + 8 | 0;
  }
  return $3_1 | 0;
 }
 
 function $13($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $5_1 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $7_1 = 0, i64toi32_i32$3 = 0, $8_1 = 0, $109 = 0, $114 = 0, $124 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $2_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       if (!$2_1) {
        break label$5
       }
       $6_1 = HEAP32[$1_1 >> 2] | 0;
       $5_1 = $2_1 & 3 | 0;
       label$6 : {
        if ($2_1 >>> 0 < 4 >>> 0) {
         $2_1 = 0;
         break label$6;
        }
        $3_1 = $6_1 + 28 | 0;
        $8_1 = $2_1 & -4 | 0;
        $2_1 = 0;
        label$8 : while (1) {
         $2_1 = (HEAP32[$3_1 >> 2] | 0) + ((HEAP32[($3_1 - 8 | 0) >> 2] | 0) + ((HEAP32[($3_1 - 16 | 0) >> 2] | 0) + ((HEAP32[($3_1 - 24 | 0) >> 2] | 0) + $2_1 | 0) | 0) | 0) | 0;
         $3_1 = $3_1 + 32 | 0;
         $7_1 = $7_1 + 4 | 0;
         if (($8_1 | 0) != ($7_1 | 0)) {
          continue label$8
         }
         break label$8;
        };
       }
       if ($5_1) {
        $3_1 = (($7_1 << 3 | 0) + $6_1 | 0) + 4 | 0;
        label$10 : while (1) {
         $2_1 = (HEAP32[$3_1 >> 2] | 0) + $2_1 | 0;
         $3_1 = $3_1 + 8 | 0;
         $5_1 = $5_1 - 1 | 0;
         if ($5_1) {
          continue label$10
         }
         break label$10;
        };
       }
       if (HEAP32[($1_1 + 12 | 0) >> 2] | 0) {
        if (($2_1 | 0) < (0 | 0)) {
         break label$5
        }
        if (!(HEAP32[($6_1 + 4 | 0) >> 2] | 0) & $2_1 >>> 0 < 16 >>> 0 | 0) {
         break label$5
        }
        $2_1 = $2_1 << 1 | 0;
       }
       $5_1 = 0;
       if (($2_1 | 0) < (0 | 0)) {
        break label$2
       }
       if ($2_1) {
        break label$4
       }
      }
      $3_1 = 1;
      $2_1 = 0;
      break label$3;
     }
     HEAPU8[1051101 >> 0] | 0;
     $5_1 = 1;
     $3_1 = $55($2_1 | 0, 1 | 0) | 0;
     if (!$3_1) {
      break label$2
     }
    }
    HEAP32[($4_1 + 8 | 0) >> 2] = 0;
    HEAP32[($4_1 + 4 | 0) >> 2] = $3_1;
    HEAP32[$4_1 >> 2] = $2_1;
    if (!($9($4_1 | 0, 1050572 | 0, $1_1 | 0) | 0)) {
     break label$1
    }
    $0_1 = global$0 + -64 | 0;
    global$0 = $0_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = 86;
    HEAP32[($0_1 + 8 | 0) >> 2] = 1050728;
    HEAP32[($0_1 + 20 | 0) >> 2] = 1050712;
    HEAP32[($0_1 + 16 | 0) >> 2] = $4_1 + 15 | 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = 2;
    HEAP32[($0_1 + 24 | 0) >> 2] = 1050876;
    i64toi32_i32$1 = $0_1;
    i64toi32_i32$0 = 0;
    HEAP32[($0_1 + 36 | 0) >> 2] = 2;
    HEAP32[($0_1 + 40 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = $0_1 + 16 | 0;
    i64toi32_i32$1 = 28;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
    $109 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
    i64toi32_i32$2 = $0_1;
    HEAP32[($0_1 + 56 | 0) >> 2] = $109;
    HEAP32[($0_1 + 60 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$0 = $0_1 + 8 | 0;
    i64toi32_i32$2 = 29;
    i64toi32_i32$3 = 0;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    $114 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
    i64toi32_i32$0 = $0_1;
    HEAP32[($0_1 + 48 | 0) >> 2] = $114;
    HEAP32[($0_1 + 52 | 0) >> 2] = i64toi32_i32$2;
    HEAP32[($0_1 + 32 | 0) >> 2] = $0_1 + 48 | 0;
    $45($0_1 + 24 | 0 | 0, 1050840 | 0);
    wasm2js_trap();
   }
   $49($5_1 | 0, $2_1 | 0, 1050696 | 0);
   wasm2js_trap();
  }
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$2 = HEAP32[$4_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  $124 = i64toi32_i32$2;
  i64toi32_i32$2 = $0_1;
  HEAP32[$0_1 >> 2] = $124;
  HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
 }
 
 function $14($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $7_1 = 0, $58_1 = 0, $82 = 0;
  $1_1 = global$0 - 80 | 0;
  global$0 = $1_1;
  $2_1 = $1_1 + 12 | 0;
  $19($2_1 | 0, 1049060 | 0, 28 | 0);
  HEAP32[($1_1 + 48 | 0) >> 2] = 1049024;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 60 | 0) >> 2] = 1;
  HEAP32[($1_1 + 64 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 40 | 0) >> 2] = 1;
  HEAP32[($1_1 + 56 | 0) >> 2] = $1_1 + 36 | 0;
  HEAP32[($1_1 + 36 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 52 | 0) >> 2] = 2;
  $2_1 = $1_1 + 48 | 0;
  $13($1_1 + 24 | 0 | 0, $2_1 | 0);
  $19($2_1 | 0, 1048972 | 0, 27 | 0);
  label$1 : {
   label$2 : {
    if ((HEAP32[($1_1 + 56 | 0) >> 2] | 0 | 0) == (2 | 0)) {
     $7_1 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
     if ((HEAPU8[$7_1 >> 0] | 0 | ((HEAPU8[($7_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | 0) == (12406 | 0)) {
      break label$2
     }
    }
    $48($1_1 + 48 | 0 | 0);
    break label$1;
   }
   $2_1 = $1_1 + 48 | 0;
   $48($2_1 | 0);
   HEAP32[($1_1 + 52 | 0) >> 2] = 2;
   HEAP32[($1_1 + 48 | 0) >> 2] = 1049100;
   i64toi32_i32$1 = $1_1;
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 60 | 0) >> 2] = 1;
   HEAP32[($1_1 + 64 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 76 | 0) >> 2] = 1;
   HEAP32[($1_1 + 56 | 0) >> 2] = $1_1 + 72 | 0;
   HEAP32[($1_1 + 72 | 0) >> 2] = $1_1 + 12 | 0;
   $13($1_1 + 36 | 0 | 0, $2_1 | 0);
   $48($1_1 + 24 | 0 | 0);
   HEAP32[($1_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
   $58_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $1_1;
   HEAP32[($1_1 + 24 | 0) >> 2] = $58_1;
   HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$1;
  }
  HEAP32[($1_1 + 52 | 0) >> 2] = 1;
  HEAP32[($1_1 + 48 | 0) >> 2] = 1049132;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 0;
  HEAP32[($1_1 + 60 | 0) >> 2] = 1;
  HEAP32[($1_1 + 64 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1_1 + 76 | 0) >> 2] = 1;
  HEAP32[($1_1 + 56 | 0) >> 2] = $1_1 + 72 | 0;
  HEAP32[($1_1 + 72 | 0) >> 2] = $1_1 + 24 | 0;
  $2_1 = $1_1 + 36 | 0;
  $13($2_1 | 0, $1_1 + 48 | 0 | 0);
  $48($2_1 | 0);
  HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
  $82 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[i64toi32_i32$1 >> 2] = $82;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $48($1_1 + 12 | 0 | 0);
  global$0 = $1_1 + 80 | 0;
 }
 
 function $15($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if ($1_1 >>> 0 >= 256 >>> 0) {
     $3_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
     label$4 : {
      label$5 : {
       if (($0_1 | 0) == ($2_1 | 0)) {
        $2_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
        $1_1 = HEAP32[($0_1 + ($2_1 ? 20 : 16) | 0) >> 2] | 0;
        if ($1_1) {
         break label$5
        }
        $2_1 = 0;
        break label$4;
       }
       $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
       HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
       HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
       break label$4;
      }
      $4_1 = $2_1 ? $0_1 + 20 | 0 : $0_1 + 16 | 0;
      label$7 : while (1) {
       $5_1 = $4_1;
       $2_1 = $1_1;
       $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
       $4_1 = $1_1 ? $2_1 + 20 | 0 : $2_1 + 16 | 0;
       $1_1 = HEAP32[($2_1 + ($1_1 ? 20 : 16) | 0) >> 2] | 0;
       if ($1_1) {
        continue label$7
       }
       break label$7;
      };
      HEAP32[$5_1 >> 2] = 0;
     }
     if (!$3_1) {
      break label$1
     }
     $1_1 = ((HEAP32[($0_1 + 28 | 0) >> 2] | 0) << 2 | 0) + 1051160 | 0;
     if (($0_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
      HEAP32[($3_1 + ((HEAP32[($3_1 + 16 | 0) >> 2] | 0 | 0) == ($0_1 | 0) ? 16 : 20) | 0) >> 2] = $2_1;
      if (!$2_1) {
       break label$1
      }
      break label$2;
     }
     HEAP32[$1_1 >> 2] = $2_1;
     if ($2_1) {
      break label$2
     }
     (wasm2js_i32$0 = 1051572, wasm2js_i32$1 = (HEAP32[1051572 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     break label$1;
    }
    $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if (($0_1 | 0) != ($2_1 | 0)) {
     HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
     HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
     return;
    }
    (wasm2js_i32$0 = 1051568, wasm2js_i32$1 = (HEAP32[1051568 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1_1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    return;
   }
   HEAP32[($2_1 + 24 | 0) >> 2] = $3_1;
   $1_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
   if ($1_1) {
    HEAP32[($2_1 + 16 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
   }
   $0_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
   if (!$0_1) {
    break label$1
   }
   HEAP32[($2_1 + 20 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = $2_1;
  }
 }
 
 function $16($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $32_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  label$1 : {
   if ($1_1 >>> 0 >= 128 >>> 0) {
    HEAP32[($2_1 + 12 | 0) >> 2] = 0;
    label$3 : {
     if ($1_1 >>> 0 >= 2048 >>> 0) {
      if ($1_1 >>> 0 >= 65536 >>> 0) {
       $4_1 = $2_1 + 12 | 0 | 3 | 0;
       HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 18 | 0 | 240 | 0;
       HEAP8[($2_1 + 14 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
       HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
       $32_1 = 4;
       break label$3;
      }
      $4_1 = $2_1 + 12 | 0 | 2 | 0;
      HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
      HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      $32_1 = 3;
      break label$3;
     }
     $4_1 = $2_1 + 12 | 0 | 1 | 0;
     HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
     $32_1 = 2;
    }
    $3_1 = $32_1;
    HEAP8[$4_1 >> 0] = $1_1 & 63 | 0 | 128 | 0;
    $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if ($3_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $1_1 | 0) >>> 0) {
     $23($0_1 | 0, $1_1 | 0, $3_1 | 0);
     $1_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    }
    $7((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $1_1 | 0 | 0, $2_1 + 12 | 0 | 0, $3_1 | 0) | 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = $1_1 + $3_1 | 0;
    break label$1;
   }
   $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   if (($3_1 | 0) == (HEAP32[$0_1 >> 2] | 0 | 0)) {
    $24($0_1 | 0, 1050856 | 0)
   }
   HEAP32[($0_1 + 8 | 0) >> 2] = $3_1 + 1 | 0;
   HEAP8[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0) >> 0] = $1_1;
  }
  global$0 = $2_1 + 16 | 0;
  return 0 | 0;
 }
 
 function $17($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $32_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  label$1 : {
   if ($1_1 >>> 0 >= 128 >>> 0) {
    HEAP32[($2_1 + 12 | 0) >> 2] = 0;
    label$3 : {
     if ($1_1 >>> 0 >= 2048 >>> 0) {
      if ($1_1 >>> 0 >= 65536 >>> 0) {
       HEAP8[($2_1 + 15 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
       HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 18 | 0 | 240 | 0;
       HEAP8[($2_1 + 14 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
       HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
       $32_1 = 4;
       break label$3;
      }
      HEAP8[($2_1 + 14 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
      HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 12 | 0 | 224 | 0;
      HEAP8[($2_1 + 13 | 0) >> 0] = ($1_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      $32_1 = 3;
      break label$3;
     }
     HEAP8[($2_1 + 13 | 0) >> 0] = $1_1 & 63 | 0 | 128 | 0;
     HEAP8[($2_1 + 12 | 0) >> 0] = $1_1 >>> 6 | 0 | 192 | 0;
     $32_1 = 2;
    }
    $1_1 = $32_1;
    $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if ($1_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $3_1 | 0) >>> 0) {
     $21($0_1 | 0, $3_1 | 0, $1_1 | 0);
     $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    }
    $7((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0 | 0, $2_1 + 12 | 0 | 0, $1_1 | 0) | 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = $1_1 + $3_1 | 0;
    break label$1;
   }
   $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   if (($3_1 | 0) == (HEAP32[$0_1 >> 2] | 0 | 0)) {
    $24($0_1 | 0, 1050072 | 0)
   }
   HEAP8[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0) >> 0] = $1_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $3_1 + 1 | 0;
  }
  global$0 = $2_1 + 16 | 0;
  return 0 | 0;
 }
 
 function $18($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $10_1 = 0, $5_1 = 0, $7_1 = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = 0;
  $7_1 = $0_1;
  label$1 : {
   $10_1 = 0;
   if ($1_1 >>> 0 < 256 >>> 0) {
    break label$1
   }
   $10_1 = 31;
   if ($1_1 >>> 0 > 16777215 >>> 0) {
    break label$1
   }
   $3_1 = Math_clz32($1_1 >>> 8 | 0);
   $10_1 = ((($1_1 >>> (6 - $3_1 | 0) | 0) & 1 | 0) - ($3_1 << 1 | 0) | 0) + 62 | 0;
  }
  $2_1 = $10_1;
  HEAP32[($7_1 + 28 | 0) >> 2] = $2_1;
  $4_1 = ($2_1 << 2 | 0) + 1051160 | 0;
  $3_1 = 1 << $2_1 | 0;
  if (!($3_1 & (HEAP32[1051572 >> 2] | 0) | 0)) {
   HEAP32[$4_1 >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = $4_1;
   HEAP32[($0_1 + 12 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[1051572 >> 2] = HEAP32[1051572 >> 2] | 0 | $3_1 | 0;
   return;
  }
  label$3 : {
   label$4 : {
    $3_1 = HEAP32[$4_1 >> 2] | 0;
    if (($1_1 | 0) == ((HEAP32[($3_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0)) {
     $2_1 = $3_1;
     break label$4;
    }
    $5_1 = $1_1 << (($2_1 | 0) != (31 | 0) ? 25 - ($2_1 >>> 1 | 0) | 0 : 0) | 0;
    label$6 : while (1) {
     $4_1 = ($3_1 + (($5_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0;
     $2_1 = HEAP32[$4_1 >> 2] | 0;
     if (!$2_1) {
      break label$3
     }
     $5_1 = $5_1 << 1 | 0;
     $3_1 = $2_1;
     if (((HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) != ($1_1 | 0)) {
      continue label$6
     }
     break label$6;
    };
   }
   $1_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
   HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
   HEAP32[($2_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = 0;
   HEAP32[($0_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
   return;
  }
  HEAP32[$4_1 >> 2] = $0_1;
  HEAP32[($0_1 + 24 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $0_1;
 }
 
 function $19($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $60_1 = 0, $94 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  $5_1 = $3_1 + 36 | 0;
  $28($5_1 | 0, $2_1 | 0);
  $4_1 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
  label$1 : {
   if ((HEAP32[($3_1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
    $1_1 = $7(HEAP32[($3_1 + 44 | 0) >> 2] | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
    HEAP32[($3_1 + 44 | 0) >> 2] = $2_1;
    HEAP32[($3_1 + 40 | 0) >> 2] = $1_1;
    HEAP32[($3_1 + 36 | 0) >> 2] = $4_1;
    $33($3_1 + 16 | 0 | 0, $5_1 | 0, 1048692 | 0);
    $2_1 = fimport$0(HEAP32[($3_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 20 | 0) >> 2] | 0 | 0) | 0;
    fimport$1($3_1 + 8 | 0 | 0, $2_1 | 0);
    label$3 : {
     label$4 : {
      $5_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
      if ($5_1) {
       $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
       $1_1 = global$0 - 32 | 0;
       global$0 = $1_1;
       HEAP32[($1_1 + 28 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 24 | 0) >> 2] = $5_1;
       HEAP32[($1_1 + 20 | 0) >> 2] = $4_1;
       $33($1_1 + 8 | 0 | 0, $1_1 + 20 | 0 | 0, 1049908 | 0);
       i64toi32_i32$0 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
       $60_1 = i64toi32_i32$0;
       i64toi32_i32$0 = $3_1;
       HEAP32[$3_1 >> 2] = $60_1;
       HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
       global$0 = $1_1 + 32 | 0;
       $4_1 = HEAP32[$3_1 >> 2] | 0;
       $1_1 = $3_1 + 24 | 0;
       $5_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       HEAP32[($1_1 + 8 | 0) >> 2] = $5_1;
       HEAP32[($1_1 + 4 | 0) >> 2] = $4_1;
       HEAP32[$1_1 >> 2] = $5_1;
       if ((HEAP32[($3_1 + 24 | 0) >> 2] | 0 | 0) != (-2147483648 | 0)) {
        break label$4
       }
      }
      $28($3_1 + 36 | 0 | 0, 0 | 0);
      $1_1 = HEAP32[($3_1 + 40 | 0) >> 2] | 0;
      if ((HEAP32[($3_1 + 36 | 0) >> 2] | 0 | 0) == (1 | 0)) {
       break label$1
      }
      $4_1 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
      HEAP32[($0_1 + 8 | 0) >> 2] = 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = $4_1;
      HEAP32[$0_1 >> 2] = $1_1;
      break label$3;
     }
     i64toi32_i32$1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
     $94 = i64toi32_i32$1;
     i64toi32_i32$1 = $0_1;
     HEAP32[$0_1 >> 2] = $94;
     HEAP32[($0_1 + 4 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($3_1 + 32 | 0) >> 2] | 0;
    }
    if ($2_1 >>> 0 >= 132 >>> 0) {
     fimport$2($2_1 | 0)
    }
    global$0 = $3_1 + 48 | 0;
    return;
   }
   $49($4_1 | 0, HEAP32[($3_1 + 44 | 0) >> 2] | 0 | 0, 1048824 | 0);
   wasm2js_trap();
  }
  $49($1_1 | 0, HEAP32[($3_1 + 44 | 0) >> 2] | 0 | 0, 1048824 | 0);
  wasm2js_trap();
 }
 
 function $20($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2_1 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, $4_1 = 0, $5$hi = 0, $24_1 = 0, $29_1 = 0, $32_1 = 0, $71 = 0;
  $2_1 = global$0 + -64 | 0;
  global$0 = $2_1;
  if ((HEAP32[$1_1 >> 2] | 0 | 0) == (-2147483648 | 0)) {
   $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
   $4_1 = $2_1 + 36 | 0;
   HEAP32[$4_1 >> 2] = 0;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = 1;
   HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = i64toi32_i32$0;
   $3_1 = HEAP32[$3_1 >> 2] | 0;
   i64toi32_i32$2 = $3_1 + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $24_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1 + 48 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $24_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $3_1 + 16 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $29_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $2_1 + 56 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $29_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = $3_1;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $32_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1;
   HEAP32[(i64toi32_i32$0 + 40 | 0) >> 2] = $32_1;
   HEAP32[(i64toi32_i32$0 + 44 | 0) >> 2] = i64toi32_i32$1;
   $9(i64toi32_i32$0 + 28 | 0 | 0, 1050180 | 0, i64toi32_i32$0 + 40 | 0 | 0) | 0;
   $3_1 = HEAP32[$4_1 >> 2] | 0;
   HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = $3_1;
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$0 + 32 | 0) >> 2] | 0;
   $5_1 = i64toi32_i32$1;
   $5$hi = i64toi32_i32$0;
   i64toi32_i32$1 = $2_1;
   HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $5_1;
   HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 8 | 0) >> 2] = $3_1;
   i64toi32_i32$1 = $1_1;
   HEAP32[i64toi32_i32$1 >> 2] = $5_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  }
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $5_1 = i64toi32_i32$0;
  $5$hi = i64toi32_i32$1;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$1 = 1;
  HEAP32[i64toi32_i32$0 >> 2] = 0;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  $3_1 = $2_1 + 8 | 0;
  $1_1 = i64toi32_i32$0 + 8 | 0;
  HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[$1_1 >> 2] = 0;
  HEAPU8[1051101 >> 0] | 0;
  i64toi32_i32$1 = $5$hi;
  i64toi32_i32$0 = $2_1;
  HEAP32[i64toi32_i32$0 >> 2] = $5_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  $1_1 = $55(12 | 0, 4 | 0) | 0;
  if (!$1_1) {
   $69(4 | 0, 12 | 0);
   wasm2js_trap();
  }
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = HEAP32[$2_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
  $71 = i64toi32_i32$1;
  i64toi32_i32$1 = $1_1;
  HEAP32[i64toi32_i32$1 >> 2] = $71;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1050476;
  HEAP32[$0_1 >> 2] = i64toi32_i32$1;
  global$0 = $2_1 - -64 | 0;
 }
 
 function $21($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $5_1 = 0, i64toi32_i32$3 = 0, $16_1 = 0, $6_1 = 0, $50_1 = 0, $7_1 = 0, $7$hi = 0, i64toi32_i32$2 = 0, $41_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    $2_1 = $1_1 + $2_1 | 0;
    if ($1_1 >>> 0 > $2_1 >>> 0) {
     $1_1 = 0;
     break label$2;
    }
    $1_1 = 0;
    $5_1 = HEAP32[$0_1 >> 2] | 0;
    $4_1 = $5_1 << 1 | 0;
    $2_1 = $2_1 >>> 0 < $4_1 >>> 0 ? $4_1 : $2_1;
    $4_1 = $2_1 >>> 0 < 8 >>> 0 ? 8 : $2_1;
    i64toi32_i32$0 = 0;
    $7_1 = $4_1;
    $7$hi = i64toi32_i32$0;
    i64toi32_i32$2 = $4_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 32;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $16_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $16_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    if (!!($16_1 | i64toi32_i32$1 | 0)) {
     break label$2
    }
    i64toi32_i32$1 = $7$hi;
    $6_1 = $7_1;
    if ($6_1 >>> 0 > 2147483647 >>> 0) {
     break label$2
    }
    $41_1 = $3_1;
    if ($5_1) {
     HEAP32[($3_1 + 28 | 0) >> 2] = $5_1;
     HEAP32[($3_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     $50_1 = 1;
    } else {
     $50_1 = 0
    }
    HEAP32[($41_1 + 24 | 0) >> 2] = $50_1;
    $30($3_1 + 8 | 0 | 0, $6_1 | 0, $3_1 + 20 | 0 | 0);
    if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
    $2_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
    $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
   }
   $49($1_1 | 0, $2_1 | 0, 1050164 | 0);
   wasm2js_trap();
  }
  $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $4_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  global$0 = $3_1 + 32 | 0;
 }
 
 function $22($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  $3_1 = global$0 + -64 | 0;
  global$0 = $3_1;
  $3_1 = $11($3_1 | 0, 64 | 0) | 0;
  $5_1 = HEAP32[($0_1 + 80 | 0) >> 2] | 0;
  $4_1 = $5_1 + ($2_1 << 3 | 0) | 0;
  HEAP32[($0_1 + 80 | 0) >> 2] = $4_1;
  HEAP32[($0_1 + 84 | 0) >> 2] = ((HEAP32[($0_1 + 84 | 0) >> 2] | 0) + ($2_1 >>> 29 | 0) | 0) + ($4_1 >>> 0 < $5_1 >>> 0) | 0;
  if ($2_1) {
   $4_1 = $1_1 + $2_1 | 0;
   $6_1 = $0_1 - -64 | 0;
   $2_1 = ($5_1 >>> 3 | 0) & 63 | 0;
   label$2 : while (1) {
    HEAP8[($0_1 + $2_1 | 0) >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($2_1 | 0) == (64 | 0)) {
     $2_1 = 0;
     label$4 : while (1) {
      HEAP32[($2_1 + $3_1 | 0) >> 2] = HEAP32[($0_1 + $2_1 | 0) >> 2] | 0;
      $2_1 = $2_1 + 4 | 0;
      if (($2_1 | 0) != (64 | 0)) {
       continue label$4
      }
      break label$4;
     };
     $2($6_1 | 0, $3_1 | 0);
     $2_1 = 0;
    }
    $1_1 = $1_1 + 1 | 0;
    if (($1_1 | 0) != ($4_1 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  global$0 = $3_1 - -64 | 0;
 }
 
 function $23($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $14_1 = 0, $43_1 = 0, $33_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    $2_1 = $1_1 + $2_1 | 0;
    $14_1 = 0;
    if ($1_1 >>> 0 > $2_1 >>> 0) {
     break label$2
    }
    $1_1 = HEAP32[$0_1 >> 2] | 0;
    $4_1 = $1_1 << 1 | 0;
    $2_1 = $2_1 >>> 0 < $4_1 >>> 0 ? $4_1 : $2_1;
    $4_1 = $2_1 >>> 0 <= 8 >>> 0 ? 8 : $2_1;
    $14_1 = 0;
    if (($4_1 | 0) < (0 | 0)) {
     break label$2
    }
    $2_1 = 0;
    $33_1 = $3_1;
    if ($1_1) {
     HEAP32[($3_1 + 28 | 0) >> 2] = $1_1;
     HEAP32[($3_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     $43_1 = 1;
    } else {
     $43_1 = $2_1
    }
    HEAP32[($33_1 + 24 | 0) >> 2] = $43_1;
    $30($3_1 + 8 | 0 | 0, $4_1 | 0, $3_1 + 20 | 0 | 0);
    if ((HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
    $0_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
    $14_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
   }
   $49($14_1 | 0, $0_1 | 0, 1050652 | 0);
   wasm2js_trap();
  }
  $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $4_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  global$0 = $3_1 + 32 | 0;
 }
 
 function $24($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $41_1 = 0, $31_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  $4_1 = HEAP32[$0_1 >> 2] | 0;
  if (($4_1 | 0) == (-1 | 0)) {
   $49(0 | 0, 0 | 0, $1_1 | 0);
   wasm2js_trap();
  }
  $3_1 = $4_1 << 1 | 0;
  $5_1 = $4_1 + 1 | 0;
  $3_1 = $3_1 >>> 0 > $5_1 >>> 0 ? $3_1 : $5_1;
  $3_1 = $3_1 >>> 0 <= 8 >>> 0 ? 8 : $3_1;
  if (($3_1 | 0) < (0 | 0)) {
   $49(0 | 0, 0 | 0, $1_1 | 0);
   wasm2js_trap();
  }
  $5_1 = 0;
  $31_1 = $2_1;
  if ($4_1) {
   HEAP32[($2_1 + 28 | 0) >> 2] = $4_1;
   HEAP32[($2_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   $41_1 = 1;
  } else {
   $41_1 = $5_1
  }
  HEAP32[($31_1 + 24 | 0) >> 2] = $41_1;
  $30($2_1 + 8 | 0 | 0, $3_1 | 0, $2_1 + 20 | 0 | 0);
  if ((HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0) == (1 | 0)) {
   $49(HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 16 | 0) >> 2] | 0 | 0, $1_1 | 0);
   wasm2js_trap();
  }
  $1_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
  global$0 = $2_1 + 32 | 0;
 }
 
 function $25($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $24_1 = 0, $29_1 = 0, $32_1 = 0;
  $2_1 = global$0 - 48 | 0;
  global$0 = $2_1;
  if ((HEAP32[$1_1 >> 2] | 0 | 0) == (-2147483648 | 0)) {
   $3_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
   $4_1 = $2_1 + 20 | 0;
   HEAP32[$4_1 >> 2] = 0;
   i64toi32_i32$1 = $2_1;
   i64toi32_i32$0 = 1;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = i64toi32_i32$0;
   $3_1 = HEAP32[$3_1 >> 2] | 0;
   i64toi32_i32$2 = $3_1 + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $24_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1 + 32 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $24_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $3_1 + 16 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $29_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $2_1 + 40 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $29_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = $3_1;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $32_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1;
   HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = $32_1;
   HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$1;
   $9(i64toi32_i32$0 + 12 | 0 | 0, 1050180 | 0, i64toi32_i32$0 + 24 | 0 | 0) | 0;
   $3_1 = HEAP32[$4_1 >> 2] | 0;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $3_1;
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0;
   $5_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $2_1;
   HEAP32[i64toi32_i32$1 >> 2] = $5_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($1_1 + 8 | 0) >> 2] = $3_1;
   i64toi32_i32$1 = $1_1;
   HEAP32[i64toi32_i32$1 >> 2] = $5_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = 1050476;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 48 | 0;
 }
 
 function $26($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $6_1 = 0, $15_1 = 0, $62_1 = 0, i64toi32_i32$1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  $6_1 = HEAP32[1051156 >> 2] | 0;
  HEAP32[1051156 >> 2] = $6_1 + 1 | 0;
  label$1 : {
   label$2 : {
    $15_1 = 0;
    if (($6_1 | 0) < (0 | 0)) {
     break label$2
    }
    $15_1 = 1;
    if (HEAPU8[1051616 >> 0] | 0) {
     break label$2
    }
    HEAP8[1051616 >> 0] = 1;
    HEAP32[1051612 >> 2] = (HEAP32[1051612 >> 2] | 0) + 1 | 0;
    $15_1 = 2;
   }
   $6_1 = $15_1 & 255 | 0;
   if (($6_1 | 0) != (2 | 0)) {
    if (!($6_1 & 1 | 0)) {
     break label$1
    }
    FUNCTION_TABLE[HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0]($5_1 + 8 | 0, $0_1);
    wasm2js_trap();
   }
   $6_1 = HEAP32[1051144 >> 2] | 0;
   if (($6_1 | 0) < (0 | 0)) {
    break label$1
   }
   HEAP32[1051144 >> 2] = $6_1 + 1 | 0;
   if (HEAP32[1051148 >> 2] | 0) {
    FUNCTION_TABLE[HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0]($5_1, $0_1);
    HEAP8[($5_1 + 29 | 0) >> 0] = $4_1;
    HEAP8[($5_1 + 28 | 0) >> 0] = $3_1;
    HEAP32[($5_1 + 24 | 0) >> 2] = $2_1;
    i64toi32_i32$1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
    HEAP32[($5_1 + 16 | 0) >> 2] = HEAP32[$5_1 >> 2] | 0;
    HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$1;
    FUNCTION_TABLE[HEAP32[((HEAP32[1051152 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0](HEAP32[1051148 >> 2] | 0, $5_1 + 16 | 0);
    $62_1 = (HEAP32[1051144 >> 2] | 0) - 1 | 0;
   } else {
    $62_1 = $6_1
   }
   HEAP32[1051144 >> 2] = $62_1;
   HEAP8[1051616 >> 0] = 0;
   if (!$3_1) {
    break label$1
   }
   wasm2js_trap();
  }
  wasm2js_trap();
 }
 
 function $27($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, $20_1 = 0;
  $1_1 = global$0 + -64 | 0;
  global$0 = $1_1;
  $2_1 = $1_1 + 8 | 0;
  $19($2_1 | 0, 1048999 | 0, 24 | 0);
  HEAP32[($1_1 + 36 | 0) >> 2] = 2;
  HEAP32[($1_1 + 32 | 0) >> 2] = 1049024;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 44 | 0) >> 2] = 1;
  HEAP32[($1_1 + 48 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 24 | 0) >> 2] = 1;
  $3_1 = $1_1 + 20 | 0;
  HEAP32[($1_1 + 40 | 0) >> 2] = $3_1;
  HEAP32[($1_1 + 20 | 0) >> 2] = $2_1;
  $20_1 = $0_1;
  $0_1 = $1_1 + 32 | 0;
  $13($20_1 | 0, $0_1 | 0);
  HEAP32[($1_1 + 36 | 0) >> 2] = 1;
  HEAP32[($1_1 + 32 | 0) >> 2] = 1049052;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 44 | 0) >> 2] = 1;
  HEAP32[($1_1 + 48 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 60 | 0) >> 2] = 1;
  HEAP32[($1_1 + 40 | 0) >> 2] = $1_1 + 56 | 0;
  HEAP32[($1_1 + 56 | 0) >> 2] = $2_1;
  $13($3_1 | 0, $0_1 | 0);
  $48($3_1 | 0);
  $48($2_1 | 0);
  global$0 = $1_1 - -64 | 0;
 }
 
 function $28($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $19_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $13_1 = 0, $3_1 = 0, $5_1 = 0, $4_1 = 0, $4$hi = 0, i64toi32_i32$2 = 0;
  $5_1 = $0_1;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = 0;
    $4_1 = $1_1;
    $4$hi = i64toi32_i32$0;
    i64toi32_i32$2 = $1_1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 32;
    i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $13_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     $13_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    if ($13_1) {
     break label$2
    }
    i64toi32_i32$1 = $4$hi;
    $2_1 = $4_1;
    if ($2_1 >>> 0 > 2147483647 >>> 0) {
     break label$2
    }
    if (!$2_1) {
     HEAP32[($0_1 + 8 | 0) >> 2] = 1;
     HEAP32[($0_1 + 4 | 0) >> 2] = 0;
     $19_1 = 0;
     break label$1;
    }
    HEAPU8[1051101 >> 0] | 0;
    $3_1 = $55($2_1 | 0, 1 | 0) | 0;
    if ($3_1) {
     HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $1_1;
     $19_1 = 0;
     break label$1;
    }
    HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = 1;
    $19_1 = 1;
    break label$1;
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
   $19_1 = 1;
  }
  HEAP32[$5_1 >> 2] = $19_1;
 }
 
 function $29($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $3_1 = 0, $4_1 = 0;
  $2_1 = global$0 - 80 | 0;
  global$0 = $2_1;
  $3_1 = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
  $4_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
  $1_1 = 0;
  label$1 : while (1) {
   label$2 : {
    HEAP32[($2_1 + 12 | 0) >> 2] = $0_1 + $1_1 | 0;
    HEAP32[($2_1 + 44 | 0) >> 2] = 5;
    HEAP32[($2_1 + 36 | 0) >> 2] = 1;
    HEAP32[($2_1 + 20 | 0) >> 2] = 1;
    HEAP32[($2_1 + 16 | 0) >> 2] = 1049988;
    HEAP32[($2_1 + 28 | 0) >> 2] = 1;
    HEAP32[($2_1 + 40 | 0) >> 2] = $2_1 + 12 | 0;
    HEAP8[($2_1 + 76 | 0) >> 0] = 3;
    HEAP32[($2_1 + 72 | 0) >> 2] = 8;
    i64toi32_i32$0 = 0;
    HEAP32[($2_1 + 64 | 0) >> 2] = 32;
    HEAP32[($2_1 + 68 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = 2;
    HEAP32[($2_1 + 56 | 0) >> 2] = 0;
    HEAP32[($2_1 + 60 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($2_1 + 48 | 0) >> 2] = 2;
    HEAP32[($2_1 + 32 | 0) >> 2] = $2_1 + 48 | 0;
    HEAP32[($2_1 + 24 | 0) >> 2] = $2_1 + 40 | 0;
    $5_1 = $9($4_1 | 0, $3_1 | 0, $2_1 + 16 | 0 | 0) | 0;
    if ($5_1) {
     break label$2
    }
    $1_1 = $1_1 + 1 | 0;
    if (($1_1 | 0) != (16 | 0)) {
     continue label$1
    }
   }
   break label$1;
  };
  global$0 = $2_1 + 80 | 0;
  return $5_1 | 0;
 }
 
 function $30($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $16_1 = 0, $3_1 = 0;
  label$1 : {
   if (($1_1 | 0) >= (0 | 0)) {
    label$3 : {
     if (HEAP32[($2_1 + 4 | 0) >> 2] | 0) {
      $3_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
      if ($3_1) {
       $16_1 = $50(HEAP32[$2_1 >> 2] | 0 | 0, $3_1 | 0, 1 | 0, $1_1 | 0) | 0;
       break label$3;
      }
     }
     $16_1 = 1;
     if (!$1_1) {
      break label$3
     }
     HEAPU8[1051101 >> 0] | 0;
     $16_1 = $55($1_1 | 0, 1 | 0) | 0;
    }
    $2_1 = $16_1;
    if ($2_1) {
     HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
     HEAP32[$0_1 >> 2] = 0;
     return;
    }
    HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = 1;
    break label$1;
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
  }
  HEAP32[$0_1 >> 2] = 1;
 }
 
 function $31($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0, i64toi32_i32$2 = 0, $78 = 0, $83 = 0;
  $3_1 = global$0 - 192 | 0;
  global$0 = $3_1;
  $6_1 = $3_1 + 16 | 0;
  $11($6_1 | 0, 64 | 0) | 0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 271733878;
  HEAP32[(i64toi32_i32$1 + 88 | 0) >> 2] = -1732584194;
  HEAP32[(i64toi32_i32$1 + 92 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -271733879;
  HEAP32[(i64toi32_i32$1 + 80 | 0) >> 2] = 1732584193;
  HEAP32[(i64toi32_i32$1 + 84 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 96 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 100 | 0) >> 2] = i64toi32_i32$0;
  $22($6_1 | 0, $1_1 | 0, $2_1 | 0);
  $1_1 = i64toi32_i32$1 + 104 | 0;
  $7($1_1 | 0, $6_1 | 0, 88 | 0) | 0;
  $2_1 = 0;
  $4_1 = global$0 - 80 | 0;
  global$0 = $4_1;
  $4_1 = $11($4_1 | 0, 56 | 0) | 0;
  $5_1 = HEAP32[($1_1 + 80 | 0) >> 2] | 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 84 | 0) >> 2] | 0;
  $5_1 = ($5_1 >>> 3 | 0) & 63 | 0;
  $22($1_1 | 0, 1049924 | 0, ($5_1 >>> 0 < 56 >>> 0 ? 56 : 120) - $5_1 | 0 | 0);
  label$1 : while (1) {
   HEAP32[($2_1 + $4_1 | 0) >> 2] = HEAP32[($1_1 + $2_1 | 0) >> 2] | 0;
   $2_1 = $2_1 + 4 | 0;
   if (($2_1 | 0) != (56 | 0)) {
    continue label$1
   }
   break label$1;
  };
  $5_1 = $1_1 - -64 | 0;
  $2($5_1 | 0, $4_1 | 0);
  i64toi32_i32$1 = $4_1 + 72 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 64 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 68 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = -16;
  label$2 : while (1) {
   $12_1 = ($2_1 + $4_1 | 0) + 80 | 0;
   $13_1 = HEAP32[(($2_1 + $5_1 | 0) + 16 | 0) >> 2] | 0;
   HEAP8[$12_1 >> 0] = $13_1;
   HEAP8[($12_1 + 1 | 0) >> 0] = $13_1 >>> 8 | 0;
   HEAP8[($12_1 + 2 | 0) >> 0] = $13_1 >>> 16 | 0;
   HEAP8[($12_1 + 3 | 0) >> 0] = $13_1 >>> 24 | 0;
   $2_1 = $2_1 + 4 | 0;
   if ($2_1) {
    continue label$2
   }
   break label$2;
  };
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$0 = HEAP32[($4_1 + 64 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 68 | 0) >> 2] | 0;
  $78 = i64toi32_i32$0;
  i64toi32_i32$0 = $3_1;
  $14_1 = $78;
  HEAP8[$3_1 >> 0] = $14_1;
  HEAP8[($3_1 + 1 | 0) >> 0] = $14_1 >>> 8 | 0;
  HEAP8[($3_1 + 2 | 0) >> 0] = $14_1 >>> 16 | 0;
  HEAP8[($3_1 + 3 | 0) >> 0] = $14_1 >>> 24 | 0;
  HEAP8[($3_1 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[($3_1 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[($3_1 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[($3_1 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $4_1 + 72 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $83 = i64toi32_i32$1;
  i64toi32_i32$1 = $3_1 + 8 | 0;
  $15_1 = $83;
  HEAP8[i64toi32_i32$1 >> 0] = $15_1;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $15_1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $15_1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $15_1 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  global$0 = $4_1 + 80 | 0;
  HEAP32[($3_1 + 108 | 0) >> 2] = 1;
  HEAP32[($3_1 + 104 | 0) >> 2] = 1049456;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 116 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 120 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = 2;
  HEAP32[(i64toi32_i32$1 + 112 | 0) >> 2] = $6_1;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = i64toi32_i32$1;
  $13($0_1 | 0, $1_1 | 0);
  global$0 = i64toi32_i32$1 + 192 | 0;
 }
 
 function $32($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $2_1 = 0, $16_1 = 0, $24_1 = 0, $29_1 = 0, $32_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  label$1 : {
   if ((HEAP32[$0_1 >> 2] | 0 | 0) != (-2147483648 | 0)) {
    $16_1 = $52($1_1 | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) | 0;
    break label$1;
   }
   $0_1 = HEAP32[(HEAP32[($0_1 + 12 | 0) >> 2] | 0) >> 2] | 0;
   i64toi32_i32$2 = $0_1 + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $24_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1 + 16 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $24_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $0_1 + 16 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $29_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $2_1 + 24 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $29_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$0 = HEAP32[$0_1 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   $32_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $2_1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $32_1;
   HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$1;
   $16_1 = $9(HEAP32[($1_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 32 | 0) >> 2] | 0 | 0, i64toi32_i32$0 + 8 | 0 | 0) | 0;
  }
  global$0 = $2_1 + 32 | 0;
  return $16_1 | 0;
 }
 
 function $33($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $55_1 = 0, $13_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  label$1 : {
   $13_1 = $0_1;
   $3_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   if ($3_1 >>> 0 < (HEAP32[$1_1 >> 2] | 0) >>> 0) {
    $6_1 = $5_1 + 8 | 0;
    $7_1 = 1;
    $8_1 = 1;
    label$3 : {
     $4_1 = HEAP32[$1_1 >> 2] | 0;
     if ($4_1) {
      $9_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      label$5 : {
       if (!$3_1) {
        $61($9_1 | 0, $4_1 | 0);
        $4_1 = 1;
        break label$5;
       }
       $7_1 = $3_1;
       $4_1 = $50($9_1 | 0, $4_1 | 0, 1 | 0, $3_1 | 0) | 0;
       if (!$4_1) {
        break label$3
       }
      }
      HEAP32[$1_1 >> 2] = $3_1;
      HEAP32[($1_1 + 4 | 0) >> 2] = $4_1;
     }
     $8_1 = -2147483647;
    }
    HEAP32[($6_1 + 4 | 0) >> 2] = $7_1;
    HEAP32[$6_1 >> 2] = $8_1;
    $3_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
    if (($3_1 | 0) != (-2147483647 | 0)) {
     break label$1
    }
    $55_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   } else {
    $55_1 = $3_1
   }
   HEAP32[($13_1 + 4 | 0) >> 2] = $55_1;
   HEAP32[$0_1 >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   global$0 = $5_1 + 16 | 0;
   return;
  }
  $49($3_1 | 0, HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0, $2_1 | 0);
  wasm2js_trap();
 }
 
 function $34($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  $0_1 = global$0 - 48 | 0;
  global$0 = $0_1;
  if (HEAPU8[1051100 >> 0] | 0) {
   HEAP32[($0_1 + 12 | 0) >> 2] = 2;
   HEAP32[($0_1 + 8 | 0) >> 2] = 1050420;
   i64toi32_i32$1 = $0_1;
   i64toi32_i32$0 = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 1;
   HEAP32[($0_1 + 24 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($0_1 + 44 | 0) >> 2] = $1_1;
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 6;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   HEAP32[($0_1 + 32 | 0) >> 2] = $0_1 + 44 | 0 | 0 | 0;
   HEAP32[($0_1 + 36 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[($0_1 + 16 | 0) >> 2] = $0_1 + 32 | 0;
   $45($0_1 + 8 | 0 | 0, 1050460 | 0);
   wasm2js_trap();
  }
  global$0 = $0_1 + 48 | 0;
 }
 
 function $35($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $17_1 = 0, $17$hi = 0, $2_1 = 0;
  if (!(HEAP32[1051104 >> 2] | 0)) {
   label$2 : {
    label$3 : {
     if (!$0_1) {
      break label$3
     }
     $2_1 = HEAP32[$0_1 >> 2] | 0;
     HEAP32[$0_1 >> 2] = 0;
     if (!($2_1 & 1 | 0)) {
      break label$3
     }
     i64toi32_i32$0 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     $17_1 = i64toi32_i32$0;
     $17$hi = i64toi32_i32$1;
     break label$2;
    }
    i64toi32_i32$1 = 0;
    $17_1 = 0;
    $17$hi = i64toi32_i32$1;
   }
   i64toi32_i32$1 = $17$hi;
   i64toi32_i32$0 = 1051108;
   HEAP32[i64toi32_i32$0 >> 2] = $17_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[1051104 >> 2] = 1;
  }
  return 1051108 | 0;
 }
 
 function $36($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  if ($2_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $3_1 | 0) >>> 0) {
   $21($0_1 | 0, $3_1 | 0, $2_1 | 0);
   $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  }
  $7((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $2_1 + $3_1 | 0;
  return 0 | 0;
 }
 
 function $37($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $5_1 = 0, $4_1 = 0, $7_1 = 0, $6_1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $77 = 0, $8_1 = 0, i64toi32_i32$3 = 0, $22_1 = 0, $58_1 = 0, $9_1 = 0, $90 = 0, $10_1 = 0, $10$hi = 0, i64toi32_i32$2 = 0, $49_1 = 0, $64_1 = 0;
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  $8_1 = $6_1 + 8 | 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  label$1 : {
   $2_1 = $1_1 + $2_1 | 0;
   if ($2_1 >>> 0 < $1_1 >>> 0) {
    break label$1
   }
   $1_1 = 8;
   $5_1 = HEAP32[$0_1 >> 2] | 0;
   $7_1 = $5_1 << 1 | 0;
   $2_1 = $2_1 >>> 0 < $7_1 >>> 0 ? $7_1 : $2_1;
   $7_1 = $2_1 >>> 0 < 8 >>> 0 ? $1_1 : $2_1;
   i64toi32_i32$0 = 0;
   $10_1 = $7_1;
   $10$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $7_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = 0;
    $22_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   } else {
    i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
    $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
   }
   if ($22_1) {
    break label$1
   }
   i64toi32_i32$1 = $10$hi;
   $2_1 = $10_1;
   if ($2_1 >>> 0 > 2147483647 >>> 0) {
    break label$1
   }
   $49_1 = $3_1;
   if ($5_1) {
    HEAP32[($3_1 + 28 | 0) >> 2] = $5_1;
    HEAP32[($3_1 + 20 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    $58_1 = 1;
   } else {
    $58_1 = 0
   }
   HEAP32[($49_1 + 24 | 0) >> 2] = $58_1;
   $5_1 = $3_1 + 20 | 0;
   $4_1 = $3_1 + 8 | 0;
   $64_1 = $4_1;
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       if (($2_1 | 0) >= (0 | 0)) {
        if (HEAP32[($5_1 + 4 | 0) >> 2] | 0) {
         $9_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
         if ($9_1) {
          $77 = $50(HEAP32[$5_1 >> 2] | 0 | 0, $9_1 | 0, 1 | 0, $2_1 | 0) | 0;
          break label$6;
         }
        }
        if (!$2_1) {
         break label$7
        }
        HEAPU8[1051101 >> 0] | 0;
        $77 = $55($2_1 | 0, 1 | 0) | 0;
        break label$6;
       }
       HEAP32[($4_1 + 4 | 0) >> 2] = 0;
       break label$5;
      }
      $77 = 1;
     }
     $5_1 = $77;
     if ($5_1) {
      HEAP32[($4_1 + 8 | 0) >> 2] = $2_1;
      HEAP32[($4_1 + 4 | 0) >> 2] = $5_1;
      $90 = 0;
      break label$4;
     }
     HEAP32[($4_1 + 8 | 0) >> 2] = $2_1;
     HEAP32[($4_1 + 4 | 0) >> 2] = 1;
    }
    $90 = 1;
   }
   HEAP32[$64_1 >> 2] = $90;
   if (!(HEAP32[($3_1 + 8 | 0) >> 2] | 0)) {
    $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
    HEAP32[$0_1 >> 2] = $7_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
    $4_1 = -2147483647;
    break label$1;
   }
   $1_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
   $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  }
  HEAP32[($8_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[$8_1 >> 2] = $4_1;
  global$0 = $3_1 + 32 | 0;
  $0_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
  if (($0_1 | 0) != (-2147483647 | 0)) {
   $49($0_1 | 0, HEAP32[($6_1 + 12 | 0) >> 2] | 0 | 0, 1048956 | 0);
   wasm2js_trap();
  }
  global$0 = $6_1 + 16 | 0;
 }
 
 function $38($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  HEAPU8[1051101 >> 0] | 0;
  $2_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $3_1 = HEAP32[$1_1 >> 2] | 0;
  $1_1 = $55(8 | 0, 4 | 0) | 0;
  if (!$1_1) {
   $69(4 | 0, 8 | 0);
   wasm2js_trap();
  }
  HEAP32[($1_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$1_1 >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1050492;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $39($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  if ($2_1 >>> 0 > ((HEAP32[$0_1 >> 2] | 0) - $3_1 | 0) >>> 0) {
   $23($0_1 | 0, $3_1 | 0, $2_1 | 0);
   $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  }
  $7((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $3_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $2_1 + $3_1 | 0;
  return 0 | 0;
 }
 
 function $40($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 16 | 0) >> 2] = 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = 1;
  HEAP32[($2_1 + 8 | 0) >> 2] = 4;
  HEAP32[($2_1 + 12 | 0) >> 2] = 0;
  HEAP32[($2_1 + 28 | 0) >> 2] = 46;
  HEAP32[($2_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[$2_1 >> 2] = $2_1 + 24 | 0;
  $45($2_1 | 0, $1_1 | 0);
  wasm2js_trap();
 }
 
 function $41($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (!$1_1 | !($46($0_1 | 0, $1_1 | 0) | 0) | 0) {
    break label$1
   }
   if ($0_1) {
    HEAPU8[1051101 >> 0] | 0;
    $1_1 = $55($0_1 | 0, $1_1 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
   }
   return $1_1 | 0;
  }
  wasm2js_trap();
 }
 
 function $42($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  label$1 : {
   if (($2_1 | 0) == (1114112 | 0)) {
    break label$1
   }
   if (!(FUNCTION_TABLE[HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0]($0_1, $2_1) | 0)) {
    break label$1
   }
   return 1 | 0;
  }
  if (!$3_1) {
   return 0 | 0
  }
  return FUNCTION_TABLE[HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0]($0_1, $3_1, $4_1) | 0 | 0;
 }
 
 function $43($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!(!$3_1 | !($46($1_1 | 0, $3_1 | 0) | 0) | 0)) {
    $0_1 = $50($0_1 | 0, $1_1 | 0, $3_1 | 0, $2_1 | 0) | 0;
    if ($0_1) {
     break label$1
    }
   }
   wasm2js_trap();
  }
  return $0_1 | 0;
 }
 
 function $44($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $29_1 = 0, $3_1 = 0, $26_1 = 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  $3_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($1_1 + 28 | 0) >> 2] | 0, 1050372, 11) | 0;
  $2_1 = $0_1 + 8 | 0;
  HEAP8[($2_1 + 5 | 0) >> 0] = 0;
  HEAP8[($2_1 + 4 | 0) >> 0] = $3_1;
  HEAP32[$2_1 >> 2] = $1_1;
  $1_1 = $2_1;
  $2_1 = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
  if (HEAPU8[($1_1 + 5 | 0) >> 0] | 0) {
   $26_1 = $1_1;
   label$2 : {
    $29_1 = 1;
    if ($2_1 & 1 | 0) {
     break label$2
    }
    $1_1 = HEAP32[$1_1 >> 2] | 0;
    if (!((HEAPU8[($1_1 + 20 | 0) >> 0] | 0) & 4 | 0)) {
     $29_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($1_1 + 28 | 0) >> 2] | 0, 1050893, 2) | 0;
     break label$2;
    }
    $29_1 = FUNCTION_TABLE[HEAP32[((HEAP32[($1_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($1_1 + 28 | 0) >> 2] | 0, 1050892, 1) | 0;
   }
   $2_1 = $29_1;
   HEAP8[($26_1 + 4 | 0) >> 0] = $2_1;
  }
  global$0 = $0_1 + 16 | 0;
  return $2_1 & 1 | 0 | 0;
 }
 
 function $45($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $23_1 = 0, $46_1 = 0, $59_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP16[($2_1 + 12 | 0) >> 1] = 1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 4 | 0) >> 2] = $0_1;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  $0_1 = $2_1 + 4 | 0;
  i64toi32_i32$0 = HEAP32[$0_1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
  $23_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $1_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = $23_1;
  HEAP32[($1_1 + 8 | 0) >> 2] = i64toi32_i32$1;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  $1_1 = $1_1 + 4 | 0;
  $2_1 = HEAP32[$1_1 >> 2] | 0;
  $3_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     switch (HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 0) {
     case 0:
      if ($3_1) {
       break label$2
      }
      $2_1 = 1;
      $3_1 = 0;
      break label$1;
     case 1:
      break label$3;
     default:
      break label$2;
     };
    }
    if ($3_1) {
     break label$2
    }
    $2_1 = HEAP32[$2_1 >> 2] | 0;
    $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
    $2_1 = HEAP32[$2_1 >> 2] | 0;
    break label$1;
   }
   HEAP32[$0_1 >> 2] = -2147483648;
   HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
   $46_1 = $0_1;
   $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   $26($46_1 | 0, 1050536 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0, HEAPU8[($0_1 + 8 | 0) >> 0] | 0 | 0, HEAPU8[($0_1 + 9 | 0) >> 0] | 0 | 0);
   wasm2js_trap();
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $2_1;
  $59_1 = $0_1;
  $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  $26($59_1 | 0, 1050508 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0, HEAPU8[($0_1 + 8 | 0) >> 0] | 0 | 0, HEAPU8[($0_1 + 9 | 0) >> 0] | 0 | 0);
  wasm2js_trap();
 }
 
 function $46($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  return ((__wasm_popcnt_i32($1_1 | 0) | 0 | 0) == (1 | 0) ? (-2147483648 - $1_1 | 0) >>> 0 >= $0_1 >>> 0 : $2_1) | 0;
 }
 
 function $47($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if (($1_1 | -2147483648 | 0 | 0) != (-2147483648 | 0)) {
   $61(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, $1_1 | 0)
  }
 }
 
 function $48($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = HEAP32[$0_1 >> 2] | 0;
  if ($1_1) {
   $61(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, $1_1 | 0)
  }
 }
 
 function $49($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  if (!$0_1) {
   $0_1 = global$0 - 32 | 0;
   global$0 = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = 0;
   HEAP32[($0_1 + 12 | 0) >> 2] = 1;
   HEAP32[($0_1 + 8 | 0) >> 2] = 1050616;
   HEAP32[($0_1 + 16 | 0) >> 2] = 4;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   $45($0_1 + 8 | 0 | 0, $2_1 | 0);
   wasm2js_trap();
  }
  $69($0_1 | 0, $1_1 | 0);
  wasm2js_trap();
 }
 
 function $50($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $6_1 = 0, $5_1 = 0, $7_1 = 0, $38_1 = 0, $8_1 = 0, $9_1 = 0, $210 = 0, $10_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $5_1 = $0_1 - 4 | 0;
        $6_1 = HEAP32[$5_1 >> 2] | 0;
        $4_1 = $6_1 & -8 | 0;
        $7_1 = $6_1 & 3 | 0;
        if ($4_1 >>> 0 >= (($7_1 ? 4 : 8) + $1_1 | 0) >>> 0) {
         $9_1 = $1_1 + 39 | 0;
         if ($9_1 >>> 0 < $4_1 >>> 0 ? $7_1 : 0) {
          break label$6
         }
         label$8 : {
          label$9 : {
           if ($2_1 >>> 0 >= 9 >>> 0) {
            $8_1 = $12($2_1 | 0, $3_1 | 0) | 0;
            if ($8_1) {
             break label$9
            }
            $38_1 = 0;
            break label$1;
           }
           if ($3_1 >>> 0 > -65588 >>> 0) {
            break label$8
           }
           $1_1 = $3_1 >>> 0 < 11 >>> 0 ? 16 : ($3_1 + 11 | 0) & -8 | 0;
           label$11 : {
            if (!$7_1) {
             if ($1_1 >>> 0 < 256 >>> 0 | $4_1 >>> 0 < ($1_1 | 4 | 0) >>> 0 | 0 | ($4_1 - $1_1 | 0) >>> 0 >= 131073 >>> 0 | 0) {
              break label$11
             }
             break label$2;
            }
            $2_1 = $0_1 - 8 | 0;
            $7_1 = $2_1 + $4_1 | 0;
            label$13 : {
             label$14 : {
              label$15 : {
               label$16 : {
                if ($1_1 >>> 0 > $4_1 >>> 0) {
                 if (($7_1 | 0) == (HEAP32[1051588 >> 2] | 0 | 0)) {
                  break label$13
                 }
                 if (($7_1 | 0) == (HEAP32[1051584 >> 2] | 0 | 0)) {
                  break label$15
                 }
                 $6_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
                 if ($6_1 & 2 | 0) {
                  break label$11
                 }
                 $6_1 = $6_1 & -8 | 0;
                 $4_1 = $6_1 + $4_1 | 0;
                 if ($4_1 >>> 0 < $1_1 >>> 0) {
                  break label$11
                 }
                 $15($7_1 | 0, $6_1 | 0);
                 $3_1 = $4_1 - $1_1 | 0;
                 if ($3_1 >>> 0 < 16 >>> 0) {
                  break label$16
                 }
                 HEAP32[$5_1 >> 2] = $1_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
                 $1_1 = $1_1 + $2_1 | 0;
                 HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
                 $2_1 = $2_1 + $4_1 | 0;
                 HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0 | 1 | 0;
                 $10($1_1 | 0, $3_1 | 0);
                 break label$2;
                }
                $3_1 = $4_1 - $1_1 | 0;
                if ($3_1 >>> 0 > 15 >>> 0) {
                 break label$14
                }
                break label$2;
               }
               HEAP32[$5_1 >> 2] = $4_1 | ((HEAP32[$5_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
               $1_1 = $2_1 + $4_1 | 0;
               HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
               break label$2;
              }
              $4_1 = (HEAP32[1051576 >> 2] | 0) + $4_1 | 0;
              if ($4_1 >>> 0 < $1_1 >>> 0) {
               break label$11
              }
              label$18 : {
               $3_1 = $4_1 - $1_1 | 0;
               if ($3_1 >>> 0 <= 15 >>> 0) {
                HEAP32[$5_1 >> 2] = $6_1 & 1 | 0 | $4_1 | 0 | 2 | 0;
                $1_1 = $2_1 + $4_1 | 0;
                HEAP32[($1_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 1 | 0;
                $3_1 = 0;
                $1_1 = 0;
                break label$18;
               }
               HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
               $1_1 = $1_1 + $2_1 | 0;
               HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
               $2_1 = $2_1 + $4_1 | 0;
               HEAP32[$2_1 >> 2] = $3_1;
               HEAP32[($2_1 + 4 | 0) >> 2] = (HEAP32[($2_1 + 4 | 0) >> 2] | 0) & -2 | 0;
              }
              HEAP32[1051584 >> 2] = $1_1;
              HEAP32[1051576 >> 2] = $3_1;
              break label$2;
             }
             HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
             $1_1 = $1_1 + $2_1 | 0;
             HEAP32[($1_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
             HEAP32[($7_1 + 4 | 0) >> 2] = HEAP32[($7_1 + 4 | 0) >> 2] | 0 | 1 | 0;
             $10($1_1 | 0, $3_1 | 0);
             break label$2;
            }
            $4_1 = (HEAP32[1051580 >> 2] | 0) + $4_1 | 0;
            if ($4_1 >>> 0 > $1_1 >>> 0) {
             break label$3
            }
           }
           $1_1 = $0($3_1 | 0) | 0;
           if (!$1_1) {
            break label$8
           }
           $210 = $1_1;
           $1_1 = HEAP32[$5_1 >> 2] | 0;
           $1_1 = ($1_1 & 3 | 0 ? -4 : -8) + ($1_1 & -8 | 0) | 0;
           $10_1 = $7($210 | 0, $0_1 | 0, ($1_1 >>> 0 < $3_1 >>> 0 ? $1_1 : $3_1) | 0) | 0;
           $8($0_1 | 0);
           $38_1 = $10_1;
           break label$1;
          }
          $7($8_1 | 0, $0_1 | 0, ($1_1 >>> 0 < $3_1 >>> 0 ? $1_1 : $3_1) | 0) | 0;
          $2_1 = HEAP32[$5_1 >> 2] | 0;
          $3_1 = $2_1 & -8 | 0;
          $2_1 = $2_1 & 3 | 0;
          if ($3_1 >>> 0 < ($1_1 + ($2_1 ? 4 : 8) | 0) >>> 0) {
           break label$5
          }
          if ($3_1 >>> 0 > $9_1 >>> 0 ? $2_1 : 0) {
           break label$4
          }
          $8($0_1 | 0);
         }
         $38_1 = $8_1;
         break label$1;
        }
        $40(1050245 | 0, 1050292 | 0);
        wasm2js_trap();
       }
       $40(1050308 | 0, 1050356 | 0);
       wasm2js_trap();
      }
      $40(1050245 | 0, 1050292 | 0);
      wasm2js_trap();
     }
     $40(1050308 | 0, 1050356 | 0);
     wasm2js_trap();
    }
    HEAP32[$5_1 >> 2] = $1_1 | ($6_1 & 1 | 0) | 0 | 2 | 0;
    $2_1 = $1_1 + $2_1 | 0;
    $1_1 = $4_1 - $1_1 | 0;
    HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
    HEAP32[1051580 >> 2] = $1_1;
    HEAP32[1051588 >> 2] = $2_1;
    $38_1 = $0_1;
    break label$1;
   }
   $38_1 = $0_1;
  }
  return $38_1 | 0;
 }
 
 function $51($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  if ($1_1) {
   $61($0_1 | 0, $1_1 | 0)
  }
 }
 
 function $52($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return FUNCTION_TABLE[HEAP32[((HEAP32[($0_1 + 32 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[($0_1 + 28 | 0) >> 2] | 0, $1_1, $2_1) | 0 | 0;
 }
 
 function $53($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return FUNCTION_TABLE[HEAP32[((HEAP32[($0_1 + 4 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0 | 0](HEAP32[$0_1 >> 2] | 0, $1_1) | 0 | 0;
 }
 
 function $54($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $5($1_1 | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $55($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $7_1 = 0;
  label$1 : {
   if ($1_1 >>> 0 >= 9 >>> 0) {
    $7_1 = $12($1_1 | 0, $0_1 | 0) | 0;
    break label$1;
   }
   $7_1 = $0($0_1 | 0) | 0;
  }
  return $7_1 | 0;
 }
 
 function $56($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 423374643;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = -222248789;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -348009273;
  HEAP32[i64toi32_i32$1 >> 2] = -1223923506;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $57($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 1676365868;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = -691315347;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = -1182065807;
  HEAP32[i64toi32_i32$1 >> 2] = 1470513528;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $58($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 1050492;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $59($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $52($1_1 | 0, HEAP32[$0_1 >> 2] | 0 | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $60($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $5($1_1 | 0, HEAP32[$0_1 >> 2] | 0 | 0, HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $61($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  label$1 : {
   label$2 : {
    $2_1 = HEAP32[($0_1 - 4 | 0) >> 2] | 0;
    $3_1 = $2_1 & -8 | 0;
    $2_1 = $2_1 & 3 | 0;
    if ($3_1 >>> 0 >= (($2_1 ? 4 : 8) + $1_1 | 0) >>> 0) {
     if ($3_1 >>> 0 > ($1_1 + 39 | 0) >>> 0 ? $2_1 : 0) {
      break label$2
     }
     $8($0_1 | 0);
     break label$1;
    }
    $40(1050245 | 0, 1050292 | 0);
    wasm2js_trap();
   }
   $40(1050308 | 0, 1050356 | 0);
   wasm2js_trap();
  }
 }
 
 function $62($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0, $4_1 = 0, $6_1 = 0, $7_1 = 0, $5_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0, $16_1 = 0, $17_1 = 0, $18_1 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $8_1 = 0, $9_1 = 0;
  $2_1 = HEAP32[$0_1 >> 2] | 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $3_1 = 10;
  label$1 : {
   if ($2_1 >>> 0 < 1e4 >>> 0) {
    $0_1 = $2_1;
    break label$1;
   }
   label$3 : while (1) {
    $6_1 = ($4_1 + 6 | 0) + $3_1 | 0;
    $0_1 = ($2_1 >>> 0) / (1e4 >>> 0) | 0;
    $7_1 = $2_1 - Math_imul($0_1, 1e4) | 0;
    $5_1 = (($7_1 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
    $10_1 = ($5_1 << 1 | 0) + 1050897 | 0;
    $11_1 = $6_1 - 4 | 0;
    $12_1 = HEAPU8[$10_1 >> 0] | 0 | ((HEAPU8[($10_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$11_1 >> 0] = $12_1;
    HEAP8[($11_1 + 1 | 0) >> 0] = $12_1 >>> 8 | 0;
    $13_1 = ((($7_1 - Math_imul($5_1, 100) | 0) & 65535 | 0) << 1 | 0) + 1050897 | 0;
    $14_1 = $6_1 - 2 | 0;
    $15_1 = HEAPU8[$13_1 >> 0] | 0 | ((HEAPU8[($13_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$14_1 >> 0] = $15_1;
    HEAP8[($14_1 + 1 | 0) >> 0] = $15_1 >>> 8 | 0;
    $3_1 = $3_1 - 4 | 0;
    $8_1 = $2_1 >>> 0 > 99999999 >>> 0;
    $2_1 = $0_1;
    if ($8_1) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   if ($0_1 >>> 0 <= 99 >>> 0) {
    $2_1 = $0_1;
    break label$4;
   }
   $3_1 = $3_1 - 2 | 0;
   $2_1 = (($0_1 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
   $16_1 = ((($0_1 - Math_imul($2_1, 100) | 0) & 65535 | 0) << 1 | 0) + 1050897 | 0;
   $17_1 = $3_1 + ($4_1 + 6 | 0) | 0;
   $18_1 = HEAPU8[$16_1 >> 0] | 0 | ((HEAPU8[($16_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   HEAP8[$17_1 >> 0] = $18_1;
   HEAP8[($17_1 + 1 | 0) >> 0] = $18_1 >>> 8 | 0;
  }
  label$6 : {
   if ($2_1 >>> 0 >= 10 >>> 0) {
    $3_1 = $3_1 - 2 | 0;
    $19_1 = ($2_1 << 1 | 0) + 1050897 | 0;
    $20_1 = $3_1 + ($4_1 + 6 | 0) | 0;
    $21_1 = HEAPU8[$19_1 >> 0] | 0 | ((HEAPU8[($19_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$20_1 >> 0] = $21_1;
    HEAP8[($20_1 + 1 | 0) >> 0] = $21_1 >>> 8 | 0;
    break label$6;
   }
   $3_1 = $3_1 - 1 | 0;
   HEAP8[($3_1 + ($4_1 + 6 | 0) | 0) >> 0] = $2_1 | 48 | 0;
  }
  $9_1 = $6($1_1 | 0, 1 | 0, 0 | 0, ($4_1 + 6 | 0) + $3_1 | 0 | 0, 10 - $3_1 | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $63($0_1) {
  $0_1 = $0_1 | 0;
  global$0 = $0_1 + global$0 | 0;
  return global$0 | 0;
 }
 
 function $64($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $4_1 = 0, $2_1 = 0, $5_1 = 0, $6_1 = 0;
  $5_1 = HEAP32[$0_1 >> 2] | 0;
  $4_1 = global$0 - 128 | 0;
  global$0 = $4_1;
  $0_1 = HEAPU8[$5_1 >> 0] | 0;
  label$1 : while (1) {
   $3_1 = $0_1 & 15 | 0;
   HEAP8[(($2_1 + $4_1 | 0) + 127 | 0) >> 0] = $3_1 >>> 0 < 10 >>> 0 ? $3_1 | 48 | 0 : $3_1 + 87 | 0;
   $2_1 = $2_1 - 1 | 0;
   $3_1 = $0_1;
   $0_1 = $3_1 >>> 4 | 0;
   if ($3_1 >>> 0 > 15 >>> 0) {
    continue label$1
   }
   break label$1;
  };
  $6_1 = $6($1_1 | 0, 1050895 | 0, 2 | 0, ($2_1 + $4_1 | 0) + 128 | 0 | 0, 0 - $2_1 | 0 | 0) | 0;
  global$0 = $4_1 + 128 | 0;
  return $6_1 | 0;
 }
 
 function $65($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $9($0_1 | 0, 1050180 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $66($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $4_1 = 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $4_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $4_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
 }
 
 function $67($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $9($0_1 | 0, 1050572 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $68($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $52($1_1 | 0, 1050564 | 0, 5 | 0) | 0 | 0;
 }
 
 function $69($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $0_1;
  $0_1 = HEAP32[1051140 >> 2] | 0;
  FUNCTION_TABLE[($0_1 ? $0_1 : 7) | 0]($2_1, $1_1);
  wasm2js_trap();
 }
 
 function $70($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[$0_1 >> 2] = 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_popcnt_i32(var$0) {
  var$0 = var$0 | 0;
  var var$1 = 0, $5_1 = 0;
  label$1 : {
   label$2 : while (1) {
    $5_1 = var$1;
    if (!var$0) {
     break label$1
    }
    var$0 = var$0 & (var$0 - 1 | 0) | 0;
    var$1 = var$1 + 1 | 0;
    continue label$2;
   };
  }
  return $5_1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = [null, $54, $29, $44, $35, $64, $62, $34, $48, $36, $17, $65, $56, $57, $59, $38, $58, $66, $47, $32, $20, $25, $70, $48, $39, $16, $67, $68, $53, $60];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "get_token_rnd": $3, 
  "get_signature": $1, 
  "__wbindgen_malloc": $41, 
  "__wbindgen_realloc": $43, 
  "__wbindgen_free": $51, 
  "__wbindgen_add_to_stack_pointer": $63
 };
}

var retasmFunc = asmFunc({
  "wbg": wbg,
});

memory=retasmFunc.memory;
function invoke(name,s){state=s;var out=retasmFunc.__wbindgen_add_to_stack_pointer(-16),p=0,n=0;try{retasmFunc[name](out);var d=new DataView(memory.buffer);p=d.getInt32(out,true);n=d.getInt32(out+4,true);return text(p,n);}finally{retasmFunc.__wbindgen_add_to_stack_pointer(16);if(p)retasmFunc.__wbindgen_free(p,n,1);}}
return {rnd:function(s){return invoke("get_token_rnd",s);},sign:function(s){return invoke("get_signature",s);}};
})();

var YspResolver=(function(){
  var HOST="https://www.yangshipin.cn",BASE="https://player-api.yangshipin.cn/v1/player/",APPID="519748109";
  var UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";
  var KEY="48e5918a74ae21c972b90cce8af6c8be",IV="9a7e7d23610266b1d9fbf98581384d92";
  var KS="6a70e9ac007ccc384c28a88dfd2211decb66494bca83bd6178f85732b2eacc9594e4e5ab720ec3a43e87b3c72b86192ff0dfea8fa8f47794d8792668438c";
  function random(n){var s="",a="ABCDEFGHIJKlMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";while(s.length<n)s+=a.charAt(Math.floor(Math.random()*a.length));return s;}
  function query(d,locale){return Object.keys(d).sort(locale?function(a,b){return a.localeCompare(b);}:undefined).map(function(k){return k+"="+decodeURI(String(d[k]));}).join("&");}
  function form(d){return Object.keys(d).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(String(d[k]));}).join("&");}
  function sign(d,salt){return YspCrypto.md5(query(d,false)+salt);}
  function ckey(id,ts,guid){var raw="|"+id+"|"+ts+"|mg3c3b04ba|V1.0.0|"+guid+"|5910204|https://www.yangshipin.c|"+UA.toLowerCase().slice(0,24)+"||Mozilla|Netscape|MacIntel|",h=0;for(var i=0;i<raw.length;i++)h=(h*31+raw.charCodeAt(i))|0;return "--01"+YspCrypto.encrypt("|"+h+raw,KEY,IV).toUpperCase();}
  function ticket(pid,ts,guid){var raw=pid+"&"+ts+"&"+guid+"&"+APPID+"&bSCz8SqH8T",out="";if(raw.length>KS.length/2)throw Error("直播设备标识长度不受支持");for(var i=0;i<raw.length;i++)out+=("0"+(raw.charCodeAt(i)^parseInt(KS.slice(i*2,i*2+2),16)).toString(16)).slice(-2);return out;}
  function body(r,label){var status=r.statusCode||r.status||200;if(status<200||status>=300)throw Error(label+" HTTP "+status);var d=r.data;if(typeof d==="string"){try{d=JSON.parse(d);}catch(e){throw Error(label+" 返回格式异常");}}if(!d||typeof d!=="object")throw Error(label+" 空响应");return d;}
  function payload(r,label){var d=body(r,label);if(d.code!==undefined&&d.code!==0)throw Error(label+"："+(d.msg||d.code));if(!d.data)throw Error(label+" 缺少数据");return d.data;}
  async function resolve(ch){
    if(!ch||!/^\d{9}$/.test(String(ch.pid))||!/^\d{10}$/.test(String(ch.cnlid)))throw Error("无效的直播频道");
    var guid=Date.now().toString(36)+"_"+random(11);
    var headers={"User-Agent":UA,"Referer":HOST+"/","Origin":HOST,"yspappid":APPID,"Cookie":"guid="+guid+"; nseqId=1; vplatform=109; versionName=99.99.99; versionCode=999999; platformVersion=Safari; deviceModel=18.0; newLogin=1"};
    var a={pid:ch.pid,guid:guid,appid:"ysp_pc",rand_str:random(10)};a.signature=sign(a,"n@7QKk%YeSjfw%22");
    var ah=Object.assign({},headers,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"});
    var params={cnlid:ch.cnlid,livepid:ch.pid,stream:"2",guid:guid,cKey:ckey(ch.cnlid,String(Math.round(Date.now()/1000)),guid),adjust:1,sphttps:"1",platform:"5910204",cmd:"2",encryptVer:"8.1",dtype:"1",devid:"devid",otype:"ojson",appVer:"V1.0.0",app_version:"V1.0.0",channel:"ysp_tx",defn:"fhd"};
    var state={guid:guid,token:"",yspappid:APPID,input:"",ts:String(Date.now()),version:"v1",query:"object"};
    var openParams={yspappid:APPID,guid:guid,vappid:"59306155",vsecret:"b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801",raw:1,version:"v1",ts:state.ts,rnd:YspKeygen.rnd(state)};
    var pair=await Promise.all([Widget.http.post(BASE+"auth",form(a),{headers:ah}),Widget.http.get("https://h5access.yangshipin.cn/web/open/token",{params:openParams,headers:headers})]);
    var auth=payload(pair[0],"直播鉴权");if(!auth.token||!auth.ts)throw Error("直播鉴权缺少凭据");
    var open=payload(pair[1],"匿名签名凭据");
    if(!open.token)throw Error("匿名签名凭据为空");
    var input=YspCrypto.md5(query(params,true)),requestid="999999"+random(10)+Date.now(),composite=input+"-"+guid+"-1-"+requestid;
    state.token=open.token;state.input=composite;
    var ph=Object.assign({},headers,{"Content-Type":"application/json;charset=UTF-8","yspsdkinput":input,"yspsdksign":YspKeygen.sign(state)+"-"+composite,"seqId":"1","request-id":requestid,"yspPlayerToken":auth.token,"yspticket":ticket(ch.pid,String(auth.ts),guid)});
    params.rand_str=random(10);params.signature=sign(params,"0f$IVHi9Qno?G");
    var info=payload(await Widget.http.post(BASE+"get_live_info",params,{headers:ph}),"直播取流");
    if(Number(info.iretcode)!==0)throw Error("频道不可用："+(info.errinfo||info.iretcode));
    if(info.chanll)throw Error("该频道需要网页专用播放校验，未返回未经验证的线路");
    if(!/^https?:\/\//i.test(String(info.playurl||"")))throw Error("直播接口未返回有效地址");
    return {url:info.playurl+(info.extended_param||""),headers:{"User-Agent":UA,"Referer":HOST+"/"},description:String(info.defn||"直播").toUpperCase()};
  }
  return {resolve:resolve};
})();

var YspRelay=(function(){
  var endpoint="https://emby-media.suil.dpdns.org:18763",token="w2JK6BsxgmL3Q44wQa6ptwrcpKb__1q-zjNGeS-N8_I";
  async function resolve(ch,source){
    var r=await Widget.http.post(endpoint+"/v1/session",{pid:ch.pid,cnlid:ch.cnlid,url:source.url},{headers:{"Content-Type":"application/json","Authorization":"Bearer "+token}});
    var status=r.statusCode||r.status||200,d=r.data;if(typeof d==="string"){try{d=JSON.parse(d);}catch(e){throw Error("甲骨文中转返回格式异常");}}
    if(status!==200||!d||!d.url)throw Error("甲骨文中转："+(d&&d.error?d.error:"HTTP "+status));
    if(d.url.indexOf(endpoint+"/live/")!==0)throw Error("中转播放地址不匹配");
    return {url:d.url,headers:{"User-Agent":"Rex-Yangshipin-Private/1.3.0"},verified:d.verified===true,expiresIn:Number(d.expiresIn||0),description:source.description+" · 预缓冲"};
  }
  function accept(r){return !!(r&&typeof r.url==="string"&&r.url.indexOf(endpoint+"/live/")===0&&r.headers&&r.verified===true);}
  return {resolve:resolve,accept:accept};
})();
var YspPlaybackCache=(function(){
  var memory={},pending={};
  function key(ch){return "ysp-live-relay:1.3.0:"+ch.pid+":"+ch.cnlid;}
  function read(k){var v=memory[k];if(!v&&typeof Widget!=="undefined"&&Widget.storage&&typeof Widget.storage.get==="function"){try{v=Widget.storage.get(k);if(typeof v==="string")v=JSON.parse(v);}catch(e){v=null;}}if(v&&v.expires>Date.now()&&YspRelay.accept(v.resource)){memory[k]=v;return v.resource;}return null;}
  function write(k,r){if(!YspRelay.accept(r))return;var ttl=Math.min(90,Math.max(0,r.expiresIn-60));if(ttl<5)return;var v={expires:Date.now()+ttl*1000,resource:r};memory[k]=v;if(Widget.storage&&typeof Widget.storage.set==="function"){try{Widget.storage.set(k,JSON.stringify(v));}catch(e){}}}
  async function get(ch){var k=key(ch),cached=read(k);if(cached)return cached;if(pending[k])return pending[k];var job=(async function(){var source=await YspResolver.resolve(ch),r=await YspRelay.resolve(ch,source);if(!r.verified)r=await yspProbe(r);write(k,r);return r;})();pending[k]=job;try{return await job;}finally{delete pending[k];}}
  return {get:get};
})();

function yspJoin(base,ref){
  ref=String(ref||"").trim();if(/^https?:\/\//i.test(ref))return ref;
  var m=/^(https?):\/\/([^\/]+)([^?#]*)/.exec(String(base));if(!m)throw Error("无效直播地址");
  if(ref.indexOf("//")===0)return m[1]+":"+ref;
  if(ref.charAt(0)==="?")return m[1]+"://"+m[2]+(m[3]||"/")+ref;
  var raw=ref.charAt(0)==="/"?ref:(m[3]||"/").replace(/[^\/]*$/,"")+ref;
  var q=raw.search(/[?#]/),suffix=q<0?"":raw.slice(q),parts=(q<0?raw:raw.slice(0,q)).split("/"),out=[];
  for(var i=0;i<parts.length;i++){if(parts[i]===".."){if(out.length)out.pop();}else if(parts[i]&&parts[i]!==".")out.push(parts[i]);}
  return m[1]+"://"+m[2]+"/"+out.join("/")+suffix;
}
function yspHttpOK(r){var s=r.statusCode||r.status||200;if(s<200||s>=300)throw Error("直播媒体 HTTP "+s);}
async function yspProbe(resource){
  var url=resource.url,seen={},headers=resource.headers||{};
  for(var depth=0;depth<4;depth++){
    if(seen[url])throw Error("直播播放列表循环");seen[url]=true;
    var r=await Widget.http.get(url,{headers:headers});yspHttpOK(r);
    var text=String(r.data||"").replace(/^\uFEFF/,"").trim();if(text.indexOf("#EXTM3U")!==0)throw Error("频道未返回标准 HLS 播放列表");
    var lines=text.split(/\r?\n/).map(function(x){return x.trim();}).filter(Boolean),variants=[];
    for(var i=0;i<lines.length;i++)if(lines[i].indexOf("#EXT-X-STREAM-INF:")===0){var bw=/BANDWIDTH=(\d+)/.exec(lines[i]);for(var j=i+1;j<lines.length;j++)if(lines[j].charAt(0)!=="#"){variants.push({url:yspJoin(url,lines[j]),bw:bw?Number(bw[1]):0});break;}}
    if(variants.length){variants.sort(function(a,b){return b.bw-a.bw;});url=variants[0].url;continue;}
    var segment=null,key=null,map=null;
    for(var k=0;k<lines.length;k++){
      var line=lines[k];if(line.charAt(0)!=="#"){segment=line;break;}
      if(line.indexOf("#EXT-X-KEY:")===0)key=line;
      if(line.indexOf("#EXT-X-MAP:")===0)map=line;
    }
    if(!segment)throw Error("频道暂未提供直播媒体片段");
    if(key&&!/METHOD=NONE(?:,|$)/.test(key)){
      if(!/METHOD=AES-128(?:,|$)/.test(key)||/KEYFORMAT="(?!identity")/.test(key))throw Error("该频道使用播放器不支持的加密方式");
      var ku=/URI="([^"]+)"/.exec(key);if(!ku)throw Error("直播密钥地址缺失");
      var kr=await Widget.http.get(yspJoin(url,ku[1]),{headers:Object.assign({},headers,{Range:"bytes=0-16"})});yspHttpOK(kr);
    }
    if(map){var mu=/URI="([^"]+)"/.exec(map);if(!mu)throw Error("直播初始化片段缺失");var mr=await Widget.http.get(yspJoin(url,mu[1]),{headers:Object.assign({},headers,{Range:"bytes=0-1023"})});yspHttpOK(mr);}
    var sr=await Widget.http.get(yspJoin(url,segment),{headers:Object.assign({},headers,{Range:"bytes=0-1023"})});yspHttpOK(sr);
    if(typeof sr.data==="string"&&/^\s*(?:<html|<!doctype|\{"(?:code|error)")/i.test(sr.data))throw Error("直播片段返回错误页面");
    resource.url=url;return resource;
  }
  throw Error("直播播放列表层级过深");
}
async function yspResource(ch){return YspPlaybackCache.get(ch);}
async function loadDetail(link){
  var ch=yspFindChannel(link);if(!ch)return null;
  var r=await yspResource(ch),item=yspChannelItem(ch);item.videoUrl=r.url;item.customHeaders=r.headers;item.headers=r.headers;item.description=ch.title+" · "+r.description+" 直播";return item;
}
async function loadResource(params){
  params=params||{};var ch=yspFindChannel(params.link||params.id||"");if(!ch)return [];
  var r=await yspResource(ch);return [{name:ch.title+" · 系统播放器",description:r.description+" · 直播 · 推荐",url:r.url,customHeaders:r.headers,headers:r.headers,playerType:"system"},{name:ch.title+" · App 播放器",description:r.description+" · 直播 · 备用",url:r.url,customHeaders:r.headers,headers:r.headers,playerType:"app"}];
}
