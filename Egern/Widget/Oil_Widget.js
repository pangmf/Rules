/**
 * ⛽ 全国实时油价 Liquid Glass 小组件
 *
 * 数据源：http://m.qiyoujiage.com/
 *
 * 环境变量：
 *
 * region
 * 例如：
 * jiangsu/taizhou
 * hainan/haikou
 * beijing
 *
 * SHOW_TREND
 * true / false
 *
 * FILL_OIL
 * 92 / 95 / 98 / diesel
 *
 * FILL_LITERS
 * 50
 *
 * 示例：
 *
 * region = zhejiang/taizhou
 * SHOW_TREND = true
 * FILL_OIL = 92
 * FILL_LITERS = 50
 */

export default async function (ctx) {

  // =========================================================
  // 环境变量
  // =========================================================

  const regionParam = ctx.env.region || "zhejiang/taizhou";

  const SHOW_TREND =
    (ctx.env.SHOW_TREND || "true").trim().toLowerCase() !== "false";

  const FILL_OIL =
    (ctx.env.FILL_OIL || "92").trim().toLowerCase();

  const FILL_LITERS =
    parseFloat(ctx.env.FILL_LITERS || "50") || 50;


  // =========================================================
  // 时间
  // =========================================================

  const now = new Date();

  const timeStr =
    `${String(now.getHours()).padStart(2, "0")}:` +
    `${String(now.getMinutes()).padStart(2, "0")}`;

  const refreshTime =
    new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString();


  // =========================================================
  // iOS 背景
  //
  // Liquid Glass 的关键：
  // 背景不要做成卡片色，而是作为玻璃后面的环境。
  // =========================================================

  const backgroundColor = {
    light: "#F2F2F7",
    dark: "#000000"
  };


  // =========================================================
  // 颜色
  // =========================================================

  const COLORS = {

    primary: {
      light: "#111111",
      dark: "#FFFFFF"
    },

    secondary: {
      light: "#8E8E93",
      dark: "#98989D"
    },

    tertiary: {
      light: "#AEAEB2",
      dark: "#636366"
    },


    // -------------------------------------------------------
    // Liquid Glass
    // -------------------------------------------------------

    glass: {
      light: "#FFFFFFB8",
      dark: "#FFFFFF1C"
    },

    glassHighlight: {
      light: "#FFFFFFE8",
      dark: "#FFFFFF28"
    },

    glassBottom: {
      light: "#FFFFFF88",
      dark: "#FFFFFF0D"
    },

    infoGlass: {
      light: "#FFFFFFCC",
      dark: "#1C1C1ECC"
    },


    // -------------------------------------------------------
    // 油价颜色
    // -------------------------------------------------------

    p92: {
      light: "#FF9F0A",
      dark: "#FFB340"
    },

    p95: {
      light: "#EF4050",
      dark: "#FF6675"
    },

    p98: {
      light: "#4598E8",
      dark: "#64B5F6"
    },

    diesel: {
      light: "#20B957",
      dark: "#30D158"
    },


    // -------------------------------------------------------
    // 趋势
    // -------------------------------------------------------

    up: {
      light: "#FF3B30",
      dark: "#FF453A"
    },

    down: {
      light: "#34C759",
      dark: "#30D158"
    },

    orange: {
      light: "#FF9F0A",
      dark: "#FF9F0A"
    }
  };


  // =========================================================
  // 数据
  // =========================================================

  const CACHE_KEY =
    `qiyoujiage_oil_${regionParam}`;

  let prices = {
    p92: null,
    p95: null,
    p98: null,
    diesel: null
  };

  let regionName = "";

  let trendInfo = "";

  let trendDirection = "";

  let trendDate = "";

  let trendAmount = "";

  let hasCache = false;

  let fetchError = false;

  let errorMsg = "";


  // =========================================================
  // 读取缓存
  // =========================================================

  try {

    const cached =
      ctx.storage.getJSON(CACHE_KEY);

    if (cached && cached.prices) {

      prices = cached.prices;

      regionName =
        cached.regionName || "";

      trendInfo =
        cached.trendInfo || "";

      trendDirection =
        cached.trendDirection || "";

      trendDate =
        cached.trendDate || "";

      trendAmount =
        cached.trendAmount || "";

      hasCache = true;
    }

  } catch (_) {}


  // =========================================================
  // 获取油价
  // =========================================================

  try {

    const queryAddr =
      `http://m.qiyoujiage.com/${regionParam}.shtml`;


    const resp =
      await ctx.http.get(queryAddr, {

        headers: {

          "referer":
            "http://m.qiyoujiage.com/",

          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        },

        timeout: 15000
      });


    if (resp.status !== 200) {

      throw new Error(
        `HTTP ${resp.status}: 页面不存在`
      );
    }


    const html =
      await resp.text();


    // =======================================================
    // 地区名称
    // =======================================================

    const titleMatch =
      html.match(/<title>([^_]+)_/);


    if (titleMatch && titleMatch[1]) {

      let rawName =
        titleMatch[1].trim();

      regionName =
        rawName
          .replace(
            /(油价|实时|今日|最新|查询|价格)/g,
            ""
          )
          .trim();
    }


    // =======================================================
    // 油价
    // =======================================================

    const regPrice =
      /<dl>[\s\S]+?<dt>(.*油)<\/dt>[\s\S]+?<dd>(.*)\(元\)<\/dd>/gm;


    const priceList = [];

    let m = null;


    while (
      (m = regPrice.exec(html)) !== null
    ) {

      if (
        m.index === regPrice.lastIndex
      ) {
        regPrice.lastIndex++;
      }

      priceList.push({

        name:
          m[1].trim(),

        value:
          m[2].trim()
      });
    }


    if (priceList.length >= 3) {

      const nameMap = {

        "92 号": "p92",
        "92": "p92",

        "95 号": "p95",
        "95": "p95",

        "98 号": "p98",
        "98": "p98",

        "0 号": "diesel",
        "柴油": "diesel"
      };


      prices = {

        p92: null,
        p95: null,
        p98: null,
        diesel: null
      };


      priceList.forEach(item => {

        const key =
          Object.keys(nameMap)
            .find(k =>
              item.name.includes(k)
            );


        if (key) {

          const priceVal =
            parseFloat(item.value);


          if (!isNaN(priceVal)) {

            prices[
              nameMap[key]
            ] = priceVal;
          }
        }
      });


      // =====================================================
      // 调价趋势
      // =====================================================

      if (SHOW_TREND) {

        const regTrend =
          /<div class="tishi">[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<br\/>([\s\S]+?)<br\/>/;


        const trendMatch =
          html.match(regTrend);


        if (
          trendMatch &&
          trendMatch.length >= 3
        ) {

          const datePart =
            trendMatch[1]
              .split("价")[1]
              ?.slice(0, -2) || "";


          const valuePart =
            trendMatch[2];


          // -------------------------------------------------
          // 上调 / 下调
          // -------------------------------------------------

          trendDirection =
            (
              valuePart.includes("下调") ||
              valuePart.includes("下跌")
            )
              ? "down"
              : "up";


          // -------------------------------------------------
          // 日期
          // -------------------------------------------------

          trendDate =
            datePart;


          // -------------------------------------------------
          // 元 / 升
          // -------------------------------------------------

          let amount = "";


          const allPrices =
            valuePart.match(
              /([\d.]+)\s*元\/升/g
            );


          if (
            allPrices &&
            allPrices.length >= 2
          ) {

            const nums =
              allPrices.map(p => {

                const x =
                  p.match(/([\d.]+)/);

                return x
                  ? parseFloat(x[1])
                  : 0;
              });


            amount =
              `${nums[0]}-${nums[1]}`;
          }


          // -------------------------------------------------
          // 元 / 吨
          // -------------------------------------------------

          else {

            const allTons =
              valuePart.match(
                /([\d]+)\s*元(?:\/吨)?/g
              );


            if (
              allTons &&
              allTons.length >= 2
            ) {

              const nums =
                allTons.map(p => {

                  const x =
                    p.match(/([\d]+)/);

                  return x
                    ? x[1]
                    : "";
                });


              amount =
                `${nums[0]}-${nums[1]}元/吨`;
            }


            // -------------------------------------------------
            // 单个元/L
            // -------------------------------------------------

            else {

              const singleMatch =
                valuePart.match(
                  /([\d.]+)\s*元\/升/
                );


              if (singleMatch) {

                amount =
                  `${singleMatch[1]}元/L`;
              }
            }
          }


          trendAmount =
            amount;


          trendInfo =
            `${datePart}调整 ` +
            `${trendDirection === "down" ? "↓" : "↑"} ` +
            `${amount}`.trim();
        }
      }


      // =====================================================
      // 保存缓存
      // =====================================================

      ctx.storage.setJSON(
        CACHE_KEY,
        {

          prices,

          regionName,

          trendInfo,

          trendDirection,

          trendDate,

          trendAmount
        }
      );


      fetchError = false;

    } else {

      if (!hasCache) {

        fetchError = true;

        errorMsg =
          "解析失败";
      }
    }


  } catch (e) {

    if (!hasCache) {

      fetchError = true;

      errorMsg =
        e.message || "数据获取失败";
    }
  }


  // =========================================================
  // 标题
  // =========================================================

  const titleText =
    regionName
      ? `${regionName}实时油价`
      : "实时油价";


  // =========================================================
  // 油价列表
  // =========================================================

  const rows = [

    {
      key: "p92",
      label: "92 号",
      price: prices.p92,
      color: COLORS.p92
    },

    {
      key: "p95",
      label: "95 号",
      price: prices.p95,
      color: COLORS.p95
    },

    {
      key: "p98",
      label: "98 号",
      price: prices.p98,
      color: COLORS.p98
    },

    {
      key: "diesel",
      label: "柴油",
      price: prices.diesel,
      color: COLORS.diesel
    }

  ].filter(
    r => r.price !== null
  );


  // =========================================================
  // 当前加油价格
  // =========================================================

  let fillPrice = null;


  if (
    FILL_OIL === "92"
  ) {

    fillPrice =
      prices.p92;

  } else if (
    FILL_OIL === "95"
  ) {

    fillPrice =
      prices.p95;

  } else if (
    FILL_OIL === "98"
  ) {

    fillPrice =
      prices.p98;

  } else if (
    FILL_OIL === "diesel" ||
    FILL_OIL === "0"
  ) {

    fillPrice =
      prices.diesel;
  }


  // =========================================================
  // 加满金额
  // =========================================================

  const fillCost =
    fillPrice !== null
      ? fillPrice * FILL_LITERS
      : null;


  // =========================================================
  // 预计节省
  //
  // 只有下调才显示
  // =========================================================

  let savingText = "";


  if (
    trendDirection === "down" &&
    trendAmount &&
    fillPrice !== null
  ) {

    const match =
      trendAmount.match(
        /([\d.]+)-([\d.]+)/
      );


    if (match) {

      const min =
        parseFloat(match[1]);

      const max =
        parseFloat(match[2]);


      if (
        !isNaN(min) &&
        !isNaN(max)
      ) {

        const saveMin =
          min * FILL_LITERS;

        const saveMax =
          max * FILL_LITERS;


        savingText =
          `下轮预计省 ¥` +
          `${saveMin.toFixed(1)}-${saveMax.toFixed(1)}`;
      }
    }
  }


  // =========================================================
  // Liquid Glass：玻璃卡片
  // =========================================================

  function glassBackground() {

    return {

      type: "linear",

      colors: [

        COLORS.glassHighlight,

        COLORS.glass,

        COLORS.glassBottom

      ],

      startPoint: {
        x: 0,
        y: 0
      },

      endPoint: {
        x: 0,
        y: 1
      }
    };
  }


  // =========================================================
  // 油价卡片
  // =========================================================

  function priceCard(row) {

    return {

      type: "stack",

      direction: "column",

      alignItems: "center",

      justifyContent: "center",

      flex: 1,

      padding: [
        8,
        4,
        8,
        4
      ],


      // Liquid Glass
      backgroundGradient:
        glassBackground(),


      borderRadius: 20,


      // 柔和阴影
      shadowColor: {

        light: "#00000018",

        dark: "#00000055"
      },

      shadowRadius: 10,

      shadowOffset: {
        x: 0,
        y: 3
      },


      children: [

        // ---------------------------------------------------
        // 油号标签
        // ---------------------------------------------------

        {

          type: "stack",

          direction: "row",

          alignItems: "center",

          justifyContent: "center",

          width: 48,

          height: 24,

          backgroundColor: {

            light:
              row.color.light + "20",

            dark:
              row.color.dark + "25"
          },

          borderRadius: 12,

          children: [

            {

              type: "text",

              text:
                row.label,

              font: {

                size: "caption2",

                weight: "bold"
              },

              textColor:
                row.color,

              textAlign:
                "center"
            }

          ]
        },


        // ---------------------------------------------------
        // 价格
        // ---------------------------------------------------

        {

          type: "text",

          text:
            row.price !== null
              ? row.price.toFixed(2)
              : "--",

          font: {

            size: "title3",

            weight: "semibold"
          },

          textColor:
            COLORS.primary,

          textAlign:
            "center",

          lineLimit: 1,

          minScale: 0.7
        }
      ]
    };
  }


  // =========================================================
  // Small 小组件
  // =========================================================

  if (
    ctx.widgetFamily === "systemSmall"
  ) {


    function smallCard(row) {

      return {

        type: "stack",

        direction: "column",

        alignItems: "center",

        justifyContent: "center",

        flex: 1,

        gap: 1,

        padding: [
          4,
          2,
          4,
          2
        ],


        backgroundGradient:
          glassBackground(),


        borderRadius: 14,


        shadowColor: {

          light: "#00000014",

          dark: "#00000050"
        },

        shadowRadius: 7,

        shadowOffset: {
          x: 0,
          y: 2
        },


        children: [

          {

            type: "stack",

            direction: "row",

            alignItems: "center",

            justifyContent: "center",

            width: 44,

            height: 21,

            backgroundColor: {

              light:
                row.color.light + "20",

              dark:
                row.color.dark + "25"
            },

            borderRadius: 10,


            children: [

              {

                type: "text",

                text:
                  row.label,

                font: {

                  size: "caption2",

                  weight: "bold"
                },

                textColor:
                  row.color,

                textAlign:
                  "center"
              }

            ]
          },


          {

            type: "text",

            text:
              row.price.toFixed(2),

            font: {

              size: "callout",

              weight: "semibold"
            },

            textColor:
              COLORS.primary,

            textAlign:
              "center",

            lineLimit: 1,

            minScale: 0.7
          }
        ]
      };
    }


    // -------------------------------------------------------
    // 两两排列
    // -------------------------------------------------------

    const pairs = [];


    for (
      let i = 0;
      i < rows.length;
      i += 2
    ) {

      pairs.push(
        rows.slice(i, i + 2)
      );
    }


    // -------------------------------------------------------
    // 日期
    // -------------------------------------------------------

    let dateText = "";


    const dm =
      trendInfo.match(
        /(\d{1,2})月(\d{1,2})日/
      );


    if (
      SHOW_TREND &&
      dm
    ) {

      dateText =
        `${dm[1].padStart(2, "0")}-` +
        `${dm[2].padStart(2, "0")}`;
    }


    return {

      type: "widget",

      padding: [
        8,
        8,
        8,
        8
      ],

      gap: 5,

      backgroundColor:
        backgroundColor,

      refreshAfter:
        refreshTime,


      children: [

        // ===================================================
        // 顶部
        // ===================================================

        {

          type: "stack",

          direction: "row",

          alignItems: "center",

          gap: 4,

          children: [

            {

              type: "image",

              src:
                "sf-symbol:fuelpump.fill",

              width: 13,

              height: 13,

              color:
                COLORS.p92
            },


            {

              type: "text",

              text:
                regionName || "油价",

              font: {

                size: "caption2",

                weight: "semibold"
              },

              textColor:
                COLORS.secondary,

              lineLimit: 1,

              minScale: 0.7
            },


            {
              type: "spacer"
            },


            ...(dateText
              ? [

                  {

                    type: "text",

                    text:
                      dateText,

                    font: {

                      size: "caption2"
                    },

                    textColor:
                      COLORS.secondary,

                    lineLimit: 1
                  }

                ]

              : [])
          ]
        },


        // ===================================================
        // 油价
        // ===================================================

        rows.length > 0

          ? {

              type: "stack",

              direction: "column",

              flex: 1,

              gap: 5,

              children:

                pairs.map(pair => ({

                  type: "stack",

                  direction: "row",

                  flex: 1,

                  gap: 5,

                  children:
                    pair.map(smallCard)
                }))
            }

          : {

              type: "stack",

              direction: "column",

              alignItems: "center",

              justifyContent: "center",

              flex: 1,

              gap: 5,

              children: [

                {

                  type: "image",

                  src:
                    "sf-symbol:exclamationmark.triangle.fill",

                  width: 20,

                  height: 20,

                  color:
                    COLORS.p98
                },

                {

                  type: "text",

                  text:
                    fetchError
                      ? errorMsg
                      : "暂无数据",

                  font: {

                    size: "caption2"
                  },

                  textColor:
                    COLORS.secondary
                }
              ]
            },


        // ===================================================
        // 底部
        // ===================================================

        {

          type: "stack",

          direction: "row",

          alignItems: "center",

          children: [

            {

              type: "text",

              text:
                `${timeStr} 更新`,

              font: {

                size: "caption2"
              },

              textColor:
                COLORS.tertiary
            },

            {
              type: "spacer"
            },

            {

              type: "text",

              text:
                "元/升",

              font: {

                size: "caption2"
              },

              textColor:
                COLORS.tertiary
            }
          ]
        }
      ]
    };
  }


  // =========================================================
  // Medium 小组件
  // =========================================================

  return {

    type: "widget",

    padding: [
      10,
      10,
      10,
      10
    ],

    gap: 7,

    backgroundColor:
      backgroundColor,

    refreshAfter:
      refreshTime,


    children: [

      // =====================================================
      // 标题栏
      // =====================================================

      {

        type: "stack",

        direction: "row",

        alignItems: "center",

        gap: 5,

        padding: [
          0,
          3,
          0,
          3
        ],

        children: [

          {

            type: "image",

            src:
              "sf-symbol:fuelpump.fill",

            width: 15,

            height: 15,

            color:
              COLORS.p92
          },


          {

            type: "text",

            text:
              titleText,

            font: {

              size: "headline",

              weight: "semibold"
            },

            textColor:
              COLORS.primary,

            lineLimit: 1,

            minScale: 0.7
          },


          {
            type: "spacer"
          },


          ...(SHOW_TREND && trendInfo
            ? [

                {

                  type: "text",

                  text:
                    trendInfo,

                  font: {

                    size: "caption2",

                    weight: "medium"
                  },

                  textColor:
                    trendDirection === "down"
                      ? COLORS.down
                      : COLORS.up,

                  textAlign:
                    "right",

                  lineLimit: 1,

                  minScale: 0.7
                }

              ]

            : []),


          ...(fetchError
            ? [

                {

                  type: "text",

                  text:
                    errorMsg,

                  font: {

                    size: "caption2"
                  },

                  textColor:
                    COLORS.p98,

                  lineLimit: 1,

                  minScale: 0.6
                }

              ]

            : [])
        ].filter(Boolean)
      },


      // =====================================================
      // 油价卡片
      // =====================================================

      rows.length > 0

        ? {

            type: "stack",

            direction: "row",

            alignItems: "center",

            justifyContent: "space-between",

            gap: 6,

            flex: 1,

            children:
              rows.map(priceCard)
          }

        : {

            type: "stack",

            direction: "column",

            alignItems: "center",

            justifyContent: "center",

            flex: 1,

            gap: 6,

            children: [

              {

                type: "image",

                src:
                  "sf-symbol:exclamationmark.triangle.fill",

                width: 24,

                height: 24,

                color:
                  COLORS.p98
              },


              {

                type: "text",

                text:
                  fetchError
                    ? "数据获取失败"
                    : "暂无数据",

                font: {

                  size: "body"
                },

                textColor:
                  COLORS.secondary
              }
            ]
          },


      // =====================================================
      // 底部 Liquid Glass 信息卡
      // =====================================================

      {

        type: "stack",

        direction: "column",

        gap: 5,

        padding: [
          8,
          11,
          8,
          11
        ],


        backgroundGradient: {

          type: "linear",

          colors: [

            COLORS.glassHighlight,

            COLORS.infoGlass,

            COLORS.glassBottom

          ],

          startPoint: {
            x: 0,
            y: 0
          },

          endPoint: {
            x: 0,
            y: 1
          }
        },


        borderRadius: 18,


        shadowColor: {

          light: "#00000014",

          dark: "#00000045"
        },

        shadowRadius: 10,

        shadowOffset: {

          x: 0,

          y: 3
        },


        children: [

          // -------------------------------------------------
          // 第一行
          // -------------------------------------------------

          {

            type: "stack",

            direction: "row",

            alignItems: "center",

            children: [

              {

                type: "image",

                src:
                  "sf-symbol:flame.fill",

                width: 14,

                height: 14,

                color:
                  COLORS.orange
              },


              {

                type: "text",

                text:
                  fillPrice !== null

                    ? `${FILL_OIL === "diesel" ? "柴油" : FILL_OIL + "号"}加满 ${FILL_LITERS}L`

                    : `${FILL_OIL}号加满 ${FILL_LITERS}L`,

                font: {

                  size: "caption1",

                  weight: "semibold"
                },

                textColor:
                  COLORS.primary,

                lineLimit: 1,

                minScale: 0.7
              },


              {
                type: "spacer"
              },


              {

                type: "text",

                text:
                  fillCost !== null

                    ? `¥${fillCost.toFixed(1)}`

                    : "--",

                font: {

                  size: "callout",

                  weight: "bold"
                },

                textColor:
                  COLORS.primary,

                textAlign:
                  "right",

                lineLimit: 1,

                minScale: 0.7
              }
            ]
          },


          // -------------------------------------------------
          // 第二行：预计节省
          // -------------------------------------------------

          ...(savingText
            ? [

                {

                  type: "stack",

                  direction: "row",

                  alignItems: "center",

                  children: [

                    {

                      type: "image",

                      src:
                        "sf-symbol:arrow.down.right",

                      width: 11,

                      height: 11,

                      color:
                        COLORS.down
                    },


                    {

                      type: "text",

                      text:
                        savingText,

                      font: {

                        size: "caption2",

                        weight: "medium"
                      },

                      textColor:
                        COLORS.down,

                      lineLimit: 1,

                      minScale: 0.7
                    },


                    {
                      type: "spacer"
                    },


                    ...(trendDate
                      ? [

                          {

                            type: "text",

                            text:
                              `${trendDate} 调整`,

                            font: {

                              size: "caption2"
                            },

                            textColor:
                              COLORS.tertiary,

                            lineLimit: 1
                          }

                        ]

                      : [])
                  ]
                }

              ]

            : [])
        ]
      },


      // =====================================================
      // 更新时间
      // =====================================================

      {

        type: "stack",

        direction: "row",

        alignItems: "center",

        padding: [
          0,
          3,
          0,
          3
        ],

        children: [

          {

            type: "text",

            text:
              `${timeStr} 更新`,

            font: {

              size: "caption2"
            },

            textColor:
              COLORS.tertiary
          },


          {
            type: "spacer"
          },


          {

            type: "text",

            text:
              "元/升",

            font: {

              size: "caption2"
            },

            textColor:
              COLORS.tertiary
          }
        ]
      }
    ]
  };
}
