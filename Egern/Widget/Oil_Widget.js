/**
 * ⛽ 油价 Liquid Glass Widget
 * 环境变量：
 * region = zhejiang/taizhou
 * SHOW_TREND = true
 * FILL_OIL = 90
 * FILL_LITERS = 50
 */
export default async function(ctx) {
  const regionParam = ctx.env.region || "zhejiang/taizhou";
  const SHOW_TREND = (ctx.env.SHOW_TREND || "true").trim().toLowerCase() !== "false";
  const FILL_OIL = (ctx.env.FILL_OIL || "90").trim().toLowerCase();
  const FILL_LITERS = parseFloat(ctx.env.FILL_LITERS || "50") || 55;
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
  const refreshTime = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString();
  const backgroundColor = {light:"#F2F2F7",dark:"#000000"};
  const COLORS = {
    primary:{light:"#111111",dark:"#FFFFFF"},
    secondary:{light:"#8E8E93",dark:"#98989D"},
    tertiary:{light:"#AEAEB2",dark:"#636366"},
    glass:{light:"#FFFFFFB8",dark:"#FFFFFF1C"},
    glassHighlight:{light:"#FFFFFFE8",dark:"#FFFFFF28"},
    glassBottom:{light:"#FFFFFF88",dark:"#FFFFFF0D"},
    infoGlass:{light:"#FFFFFFCC",dark:"#1C1C1ECC"},
    p92:{light:"#FF9F0A",dark:"#FFB340"},
    p95:{light:"#EF4050",dark:"#FF6675"},
    p98:{light:"#4598E8",dark:"#64B5F6"},
    diesel:{light:"#20B957",dark:"#30D158"},
    up:{light:"#FF3B30",dark:"#FF453A"},
    down:{light:"#34C759",dark:"#30D158"},
    orange:{light:"#FF9F0A",dark:"#FF9F0A"}
  };
  const CACHE_KEY = `qiyoujiage_oil_${regionParam}`;
  let prices = {p92:null,p95:null,p98:null,diesel:null};
  let regionName = "";
  let trendInfo = "";
  let trendDirection = "";
  let trendDate = "";
  let trendAmount = "";
  let hasCache = false;
  let fetchError = false;
  let errorMsg = "";
  try {
    const cached = ctx.storage.getJSON(CACHE_KEY);
    if (cached && cached.prices) {
      prices = cached.prices;
      regionName = cached.regionName || "";
      trendInfo = cached.trendInfo || "";
      trendDirection = cached.trendDirection || "";
      trendDate = cached.trendDate || "";
      trendAmount = cached.trendAmount || "";
      hasCache = true;
    }
  } catch (_) {}
  try {
    const queryAddr = `http://m.qiyoujiage.com/${regionParam}.shtml`;
    const resp = await ctx.http.get(queryAddr,{
      headers:{
        referer:"http://m.qiyoujiage.com/",
        "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      timeout:15000
    });
    if (resp.status !== 200) throw new Error(`HTTP ${resp.status}`);
    const html = await resp.text();
    const titleMatch = html.match(/<title>([^_]+)_/);
    if (titleMatch && titleMatch[1]) {
      regionName = titleMatch[1].trim().replace(/(油价|实时|今日|最新|查询|价格)/g,"").trim();
    }
    const regPrice = /<dl>[\s\S]+?<dt>(.*油)<\/dt>[\s\S]+?<dd>(.*)\(元\)<\/dd>/gm;
    const priceList = [];
    let m = null;
    while ((m = regPrice.exec(html)) !== null) {
      if (m.index === regPrice.lastIndex) regPrice.lastIndex++;
      priceList.push({name:m[1].trim(),value:m[2].trim()});
    }
    if (priceList.length >= 3) {
      const nameMap = {"92 号":"p92","92":"p92","95 号":"p95","95":"p95","98 号":"p98","98":"p98","0 号":"diesel","柴油":"diesel"};
      prices = {p92:null,p95:null,p98:null,diesel:null};
      priceList.forEach(item => {
        const key = Object.keys(nameMap).find(k => item.name.includes(k));
        if (key) {
          const value = parseFloat(item.value);
          if (!isNaN(value)) prices[nameMap[key]] = value;
        }
      });
      if (SHOW_TREND) {
        const regTrend = /<div class="tishi">[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<br\/>([\s\S]+?)<br\/>/;
        const trendMatch = html.match(regTrend);
        if (trendMatch && trendMatch.length >= 3) {
          const datePart = trendMatch[1].split("价")[1]?.slice(0,-2) || "";
          const valuePart = trendMatch[2];
          trendDirection = valuePart.includes("下调") || valuePart.includes("下跌") ? "down" : "up";
          trendDate = datePart;
          let amount = "";
          const allPrices = valuePart.match(/([\d.]+)\s*元\/升/g);
          if (allPrices && allPrices.length >= 2) {
            const nums = allPrices.map(p => {
              const x = p.match(/([\d.]+)/);
              return x ? parseFloat(x[1]) : 0;
            });
            amount = `${nums[0]}-${nums[1]}`;
          } else {
            const singleMatch = valuePart.match(/([\d.]+)\s*元\/升/);
            if (singleMatch) amount = `${singleMatch[1]}元/L`;
          }
          trendAmount = amount;
          trendInfo = `${datePart}调整 ${trendDirection === "down" ? "↓" : "↑"} ${amount}`.trim();
        }
      }
      ctx.storage.setJSON(CACHE_KEY,{prices,regionName,trendInfo,trendDirection,trendDate,trendAmount});
      fetchError = false;
    } else if (!hasCache) {
      fetchError = true;
      errorMsg = "解析失败";
    }
  } catch (e) {
    if (!hasCache) {
      fetchError = true;
      errorMsg = e.message || "数据获取失败";
    }
  }
  const titleText = regionName ? `${regionName}实时油价` : "实时油价";
  const rows = [
    {key:"p92",label:"92号",price:prices.p92,color:COLORS.p92},
    {key:"p95",label:"95号",price:prices.p95,color:COLORS.p95},
    {key:"p98",label:"98号",price:prices.p98,color:COLORS.p98},
    {key:"diesel",label:"柴油",price:prices.diesel,color:COLORS.diesel}
  ].filter(r => r.price !== null);
  let fillPrice = null;
  if (FILL_OIL === "92") fillPrice = prices.p92;
  else if (FILL_OIL === "95") fillPrice = prices.p95;
  else if (FILL_OIL === "98") fillPrice = prices.p98;
  else if (FILL_OIL === "diesel" || FILL_OIL === "0") fillPrice = prices.diesel;
  const fillCost = fillPrice !== null ? fillPrice * FILL_LITERS : null;
  let savingText = "";
  if (trendDirection === "down" && trendAmount && fillPrice !== null) {
    const match = trendAmount.match(/([\d.]+)-([\d.]+)/);
    if (match) {
      const min = parseFloat(match[1]);
      const max = parseFloat(match[2]);
      if (!isNaN(min) && !isNaN(max)) {
        savingText = `下轮预计省 ¥${(min * FILL_LITERS).toFixed(1)}-${(max * FILL_LITERS).toFixed(1)}`;
      }
    }
  }
  function glassBackground() {
    return {
      type:"linear",
      colors:[COLORS.glassHighlight,COLORS.glass,COLORS.glassBottom],
      startPoint:{x:0,y:0},
      endPoint:{x:0,y:1}
    };
  }
  function priceCard(row) {
    return {
      type:"stack",
      direction:"column",
      alignItems:"center",
      justifyContent:"center",
      flex:1,
      height:58,
      padding:[5,3,5,3],
      backgroundGradient:glassBackground(),
      borderRadius:17,
      shadowColor:{light:"#00000012",dark:"#00000045"},
      shadowRadius:8,
      shadowOffset:{x:0,y:2},
      children:[
        {
          type:"stack",
          direction:"row",
          alignItems:"center",
          justifyContent:"center",
          height:21,
          padding:[2,7,2,7],
          backgroundColor:{light:row.color.light+"18",dark:row.color.dark+"20"},
          borderRadius:11,
          children:[
            {
              type:"text",
              text:row.label,
              font:{size:"caption2",weight:"bold"},
              textColor:row.color,
              textAlign:"center"
            }
          ]
        },
        {
          type:"text",
          text:row.price !== null ? row.price.toFixed(2) : "--",
          font:{size:"title3",weight:"semibold"},
          textColor:COLORS.primary,
          textAlign:"center",
          lineLimit:1,
          minScale:0.7
        }
      ]
    };
  }
  if (ctx.widgetFamily === "systemSmall") {
    function smallCard(row) {
      return {
        type:"stack",
        direction:"column",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        height:45,
        padding:[3,2,3,2],
        backgroundGradient:glassBackground(),
        borderRadius:14,
        shadowColor:{light:"#00000010",dark:"#00000040"},
        shadowRadius:6,
        shadowOffset:{x:0,y:2},
        children:[
          {
            type:"stack",
            direction:"row",
            alignItems:"center",
            justifyContent:"center",
            height:18,
            padding:[1,6,1,6],
            backgroundColor:{light:row.color.light+"18",dark:row.color.dark+"20"},
            borderRadius:9,
            children:[
              {
                type:"text",
                text:row.label,
                font:{size:"caption2",weight:"bold"},
                textColor:row.color,
                textAlign:"center"
              }
            ]
          },
          {
            type:"text",
            text:row.price.toFixed(2),
            font:{size:"callout",weight:"semibold"},
            textColor:COLORS.primary,
            textAlign:"center",
            lineLimit:1,
            minScale:0.7
          }
        ]
      };
    }
    const pairs = [];
    for (let i=0;i<rows.length;i+=2) pairs.push(rows.slice(i,i+2));
    return {
      type:"widget",
      padding:[7,7,7,7],
      gap:4,
      backgroundColor:backgroundColor,
      refreshAfter:refreshTime,
      children:[
        {
          type:"stack",
          direction:"row",
          alignItems:"center",
          height:19,
          gap:4,
          children:[
            {
              type:"image",
              src:"sf-symbol:fuelpump.fill",
              width:13,
              height:13,
              color:COLORS.p92
            },
            {
              type:"text",
              text:regionName || "油价",
              font:{size:"caption2",weight:"semibold"},
              textColor:COLORS.secondary,
              lineLimit:1,
              minScale:0.7
            },
            {type:"spacer"},
            {
              type:"text",
              text:timeStr,
              font:{size:"caption2"},
              textColor:COLORS.tertiary,
              lineLimit:1
            }
          ]
        },
        rows.length > 0 ? {
          type:"stack",
          direction:"column",
          flex:1,
          gap:4,
          children:pairs.map(pair => ({
            type:"stack",
            direction:"row",
            flex:1,
            gap:4,
            children:pair.map(smallCard)
          }))
        } : {
          type:"stack",
          direction:"column",
          alignItems:"center",
          justifyContent:"center",
          flex:1,
          gap:5,
          children:[
            {
              type:"image",
              src:"sf-symbol:exclamationmark.triangle.fill",
              width:20,
              height:20,
              color:COLORS.p98
            },
            {
              type:"text",
              text:fetchError ? errorMsg : "暂无数据",
              font:{size:"caption2"},
              textColor:COLORS.secondary
            }
          ]
        },
        {
          type:"stack",
          direction:"row",
          alignItems:"center",
          height:14,
          children:[
            {
              type:"text",
              text:SHOW_TREND && trendInfo ? trendInfo : `${timeStr} 更新`,
              font:{size:"caption2"},
              textColor:trendDirection === "down" ? COLORS.down : COLORS.tertiary,
              lineLimit:1,
              minScale:0.65
            },
            {type:"spacer"},
            {
              type:"text",
              text:"元/升",
              font:{size:"caption2"},
              textColor:COLORS.tertiary
            }
          ]
        }
      ]
    };
  }
  return {
    type:"widget",
    padding:[6,8,6,8],
    gap:5,
    backgroundColor:backgroundColor,
    refreshAfter:refreshTime,
    children:[
      {
        type:"stack",
        direction:"row",
        alignItems:"center",
        height:21,
        gap:5,
        children:[
          {
            type:"image",
            src:"sf-symbol:fuelpump.fill",
            width:15,
            height:15,
            color:COLORS.p92
          },
          {
            type:"text",
            text:titleText,
            font:{size:"headline",weight:"semibold"},
            textColor:COLORS.primary,
            lineLimit:1,
            minScale:0.7
          },
          {type:"spacer"},
          ...(SHOW_TREND && trendInfo ? [{
            type:"text",
            text:trendInfo,
            font:{size:"caption2",weight:"medium"},
            textColor:trendDirection === "down" ? COLORS.down : COLORS.up,
            textAlign:"right",
            lineLimit:1,
            minScale:0.6
          }] : []),
          {
            type:"text",
            text:timeStr,
            font:{size:"caption2"},
            textColor:COLORS.tertiary,
            lineLimit:1
          }
        ]
      },
      rows.length > 0 ? {
        type:"stack",
        direction:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:5,
        height:58,
        children:rows.map(priceCard)
      } : {
        type:"stack",
        direction:"column",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        gap:6,
        children:[
          {
            type:"image",
            src:"sf-symbol:exclamationmark.triangle.fill",
            width:22,
            height:22,
            color:COLORS.p98
          },
          {
            type:"text",
            text:fetchError ? "数据获取失败" : "暂无数据",
            font:{size:"body"},
            textColor:COLORS.secondary
          }
        ]
      },
      {
        type:"stack",
        direction:"column",
        gap:3,
        height:43,
        padding:[6,10,6,10],
        backgroundGradient:{
          type:"linear",
          colors:[COLORS.glassHighlight,COLORS.infoGlass,COLORS.glassBottom],
          startPoint:{x:0,y:0},
          endPoint:{x:0,y:1}
        },
        borderRadius:15,
        shadowColor:{light:"#00000010",dark:"#00000040"},
        shadowRadius:7,
        shadowOffset:{x:0,y:2},
        children:[
          {
            type:"stack",
            direction:"row",
            alignItems:"center",
            children:[
              {
                type:"image",
                src:"sf-symbol:flame.fill",
                width:13,
                height:13,
                color:COLORS.orange
              },
              {
                type:"text",
                text:`${FILL_OIL === "diesel" || FILL_OIL === "0" ? "柴油" : FILL_OIL + "号"}加满 ${FILL_LITERS}L`,
                font:{size:"caption1",weight:"semibold"},
                textColor:COLORS.primary,
                lineLimit:1,
                minScale:0.65
              },
              {type:"spacer"},
              {
                type:"text",
                text:fillCost !== null ? `¥${fillCost.toFixed(1)}` : "--",
                font:{size:"callout",weight:"bold"},
                textColor:COLORS.primary,
                textAlign:"right",
                lineLimit:1,
                minScale:0.7
              }
            ]
          },
          ...(savingText ? [{
            type:"stack",
            direction:"row",
            alignItems:"center",
            children:[
              {
                type:"image",
                src:"sf-symbol:arrow.down.right",
                width:10,
                height:10,
                color:COLORS.down
              },
              {
                type:"text",
                text:savingText,
                font:{size:"caption2",weight:"medium"},
                textColor:COLORS.down,
                lineLimit:1,
                minScale:0.65
              },
              {type:"spacer"},
              ...(trendDate ? [{
                type:"text",
                text:`${trendDate} 调整`,
                font:{size:"caption2"},
                textColor:COLORS.tertiary,
                lineLimit:1
              }] : [])
            ]
          }] : [])
        ]
      }
    ]
  };
}
