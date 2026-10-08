/**
 * ⛽ 全国实时油价小组件
 *
 * iOS Native Style Edition
 *
 * 环境变量：
 *
 * region
 *   例如：
 *   beijing
 *   shanghai
 *   guangdong/guangzhou
 *
 * SHOW_TREND
 *   true / false
 *
 * FILL_OIL
 *   92 / 95 / 98
 *
 * FILL_LITERS
 *   例如 30 / 50 / 55
 */

export default async function (ctx) {

  /* =========================================================
   * 环境变量
   * ========================================================= */

  const regionParam =
    ctx.env.region || "beijing";

  const SHOW_TREND =
    (ctx.env.SHOW_TREND || "true")
      .trim()
      .toLowerCase() !== "false";


  /*
   * 加油计算参数
   *
   * FILL_OIL：
   * 92 / 95 / 98
   *
   * FILL_LITERS：
   * 例如 50 / 55
   */

  const FILL_OIL =
    String(
      ctx.env.FILL_OIL || "92"
    ).trim();


  const FILL_LITERS =
    parseFloat(
      ctx.env.FILL_LITERS || "50"
    );


  /* =========================================================
   * 时间
   * ========================================================= */

  const now =
    new Date();


  const timeStr =
    `${String(
      now.getHours()
    ).padStart(2, "0")}:` +
    `${String(
      now.getMinutes()
    ).padStart(2, "0")}`;


  const dateStr =
    `${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-` +
    `${String(
      now.getDate()
    ).padStart(2, "0")}`;


  const refreshTime =
    new Date(
      Date.now() +
      6 * 60 * 60 * 1000
    ).toISOString();


  /* =========================================================
   * iOS 默认背景
   *
   * Light:
   * #F2F2F7
   *
   * Dark:
   * #000000
   * ========================================================= */

  const backgroundColor = {

    light: "#F2F2F7",

    dark: "#000000"

  };


  /* =========================================================
   * iOS 风格颜色
   * ========================================================= */

  const COLORS = {

    primary: {

      light: "#000000",

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


    card: {

      light: "#FFFFFF",

      dark: "#1C1C1E"

    },


    infoCard: {

      light: "#FFFFFF",

      dark: "#1C1C1E"

    },


    cardBorder: {

      light: "#E5E5EA",

      dark: "#2C2C2E"

    },


    p92: {

      light: "#F5A900",

      dark: "#FFB340"

    },


    p95: {

      light: "#E94747",

      dark: "#FF6969"

    },


    p98: {

      light: "#4A9BEA",

      dark: "#64B5F6"

    },


    diesel: {

      light: "#22B95A",

      dark: "#30D158"

    },


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


  /* =========================================================
   * 缓存
   * ========================================================= */

  const CACHE_KEY =
    `qiyoujiage_oil_${regionParam}`;


  let prices = {

    p92: null,

    p95: null,

    p98: null,

    diesel: null

  };


  let changes = {

    p92: null,

    p95: null,

    p98: null,

    diesel: null

  };


  let regionName = "";

  let trendInfo = "";

  let hasCache = false;


  /* =========================================================
   * 读取缓存
   * ========================================================= */

  try {

    const cached =
      ctx.storage.getJSON(
        CACHE_KEY
      );


    if (
      cached &&
      cached.prices
    ) {

      prices =
        cached.prices;


      changes =
        cached.changes ||
        changes;


      regionName =
        cached.regionName ||
        "";


      trendInfo =
        cached.trendInfo ||
        "";


      hasCache = true;

    }

  } catch (_) {}


  /* =========================================================
   * 获取油价
   * ========================================================= */

  let fetchError =
    false;


  let errorMsg =
    "";


  try {

    const queryAddr =
      `http://m.qiyoujiage.com/${regionParam}.shtml`;


    const resp =
      await ctx.http.get(
        queryAddr,
        {

          headers: {

            "referer":
              "http://m.qiyoujiage.com/",

            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"

          },

          timeout: 15000

        }
      );


    if (
      resp.status !== 200
    ) {

      throw new Error(
        `HTTP ${resp.status}: 页面不存在`
      );

    }


    const html =
      await resp.text();


    /* =======================================================
     * 地区名称
     * ======================================================= */

    const titleMatch =
      html.match(
        /<title>([^_]+)_/
      );


    if (
      titleMatch &&
      titleMatch[1]
    ) {

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


    /* =======================================================
     * 油价
     * ======================================================= */

    const regPrice =
      /<dl>[\s\S]+?<dt>(.*油)<\/dt>[\s\S]+?<dd>(.*)\(元\)<\/dd>/gm;


    const priceList = [];

    let m = null;


    while (
      (m =
        regPrice.exec(html)) !== null
    ) {

      if (
        m.index ===
        regPrice.lastIndex
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


    if (
      priceList.length >= 3
    ) {

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


      priceList.forEach(
        item => {

          const key =
            Object.keys(
              nameMap
            ).find(
              k =>
                item.name.includes(k)
            );


          if (key) {

            const priceVal =
              parseFloat(
                item.value
              );


            if (
              !isNaN(priceVal)
            ) {

              prices[
                nameMap[key]
              ] =
                priceVal;

            }

          }

        }
      );


      /* =====================================================
       * 解析本轮涨跌
       * ===================================================== */

      const changeKeys = [

        "p92",

        "p95",

        "p98",

        "diesel"

      ];


      const changeNames = [

        [
          "92号",
          "92 号",
          "92#"
        ],

        [
          "95号",
          "95 号",
          "95#"
        ],

        [
          "98号",
          "98 号",
          "98#"
        ],

        [
          "柴油",
          "0号",
          "0 号"
        ]

      ];


      for (
        let i = 0;
        i < changeKeys.length;
        i++
      ) {

        const names =
          changeNames[i];


        for (
          const name of names
        ) {

          const escaped =
            name.replace(
              /[.*+?^${}()|[\]\\]/g,
              "\\$&"
            );


          const areaReg =
            new RegExp(
              `${escaped}[\\s\\S]{0,150}?` +
              `((?:↑|↓|\\+|-|涨|跌|上调|下调)` +
              `\\s*[0-9]+(?:\\.[0-9]+)?)`,
              "i"
            );


          const match =
            html.match(
              areaReg
            );


          if (match) {

            const valueText =
              match[1];


            const numberMatch =
              valueText.match(
                /([0-9]+(?:\.[0-9]+)?)/
              );


            if (
              numberMatch
            ) {

              const value =
                parseFloat(
                  numberMatch[1]
                );


              const direction =
                (
                  valueText.includes("↓") ||
                  valueText.includes("-") ||
                  valueText.includes("跌") ||
                  valueText.includes("下调")
                )
                  ? "down"
                  : "up";


              changes[
                changeKeys[i]
              ] = {

                value,

                direction

              };


              break;

            }

          }

        }

      }


      /* =====================================================
       * 下一轮调价趋势
       * ===================================================== */

      if (
        SHOW_TREND
      ) {

        const regTrend =
          /<div class="tishi">[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<br\/>([\s\S]+?)<br\/>/;


        const trendMatch =
          html.match(
            regTrend
          );


        if (
          trendMatch &&
          trendMatch.length >= 3
        ) {

          const datePart =
            trendMatch[1]
              .split("价")[1]
              ?.slice(0, -2) ||
            "";


          const valuePart =
            trendMatch[2];


          const trend =
            (
              valuePart.includes("下调") ||
              valuePart.includes("下跌")
            )
              ? "↓"
              : "↑";


          let amount =
            "";


          /* 元 / 升 */

          const allPrices =
            valuePart.match(
              /([\d.]+)\s*元\/升/g
            );


          if (
            allPrices &&
            allPrices.length >= 2
          ) {

            const nums =
              allPrices.map(
                p => {

                  const x =
                    p.match(
                      /([\d.]+)/
                    );


                  return x
                    ? x[1]
                    : "";

                }
              );


            amount =
              `${nums[0]}-${nums[1]}`;

          }


          /* 元 / 吨 */

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
                allTons.map(
                  p => {

                    const x =
                      p.match(
                        /([\d]+)/
                      );


                    return x
                      ? x[1]
                      : "";

                  }
                );


              amount =
                `${nums[0]}-${nums[1]}元/吨`;

            }


            else {

              const singleMatch =
                valuePart.match(
                  /([\d.]+)\s*元\/升/
                );


              if (
                singleMatch
              ) {

                amount =
                  `${singleMatch[1]}元/L`;

              }

            }

          }


          trendInfo =
            `${datePart}调整 ${trend} ${amount}`
              .trim();

        }

      }


      /* =====================================================
       * 保存缓存
       * ===================================================== */

      ctx.storage.setJSON(
        CACHE_KEY,
        {

          prices,

          changes,

          regionName,

          trendInfo

        }
      );


      fetchError =
        false;

    }


    else {

      if (
        !hasCache
      ) {

        fetchError =
          true;

        errorMsg =
          "解析失败";

      }

    }

  }


  catch (e) {

    if (
      !hasCache
    ) {

      fetchError =
        true;

      errorMsg =
        e.message ||
        "数据获取失败";

    }

  }


  /* =========================================================
   * 标题
   * ========================================================= */

  const titleText =
    regionName
      ? `${regionName}油价`
      : "实时油价";


  /* =========================================================
   * 油品数据
   * ========================================================= */

  const rows = [

    {

      key: "p92",

      label: "92号",

      price:
        prices.p92,

      change:
        changes.p92,

      color:
        COLORS.p92

    },


    {

      key: "p95",

      label: "95号",

      price:
        prices.p95,

      change:
        changes.p95,

      color:
        COLORS.p95

    },


    {

      key: "p98",

      label: "98号",

      price:
        prices.p98,

      change:
        changes.p98,

      color:
        COLORS.p98

    },


    {

      key: "diesel",

      label: "柴油",

      price:
        prices.diesel,

      change:
        changes.diesel,

      color:
        COLORS.diesel

    }

  ].filter(
    r =>
      r.price !== null
  );


  /* =========================================================
   * 下一轮调价数据
   * ========================================================= */

  let nextDateText =
    "";


  let nextCountdown =
    "";


  let nextTrend =
    "";


  let nextAmountMin =
    null;


  let nextAmountMax =
    null;


  if (
    SHOW_TREND &&
    trendInfo
  ) {

    const dateMatch =
      trendInfo.match(
        /(\d{1,2})月(\d{1,2})日/
      );


    if (
      dateMatch
    ) {

      const month =
        parseInt(
          dateMatch[1],
          10
        );


      const day =
        parseInt(
          dateMatch[2],
          10
        );


      nextDateText =
        `${month}.${day}`;


      /* ===================================================
       * 下一轮日期
       * =================================================== */

      let targetYear =
        now.getFullYear();


      if (
        month <
        now.getMonth() + 1
      ) {

        targetYear++;

      }


      const targetDate =
        new Date(
          targetYear,
          month - 1,
          day + 1,
          0,
          0,
          0
        );


      const diff =
        targetDate.getTime() -
        now.getTime();


      if (
        diff > 0
      ) {

        const totalHours =
          Math.floor(
            diff /
            (1000 * 60 * 60)
          );


        const days =
          Math.floor(
            totalHours / 24
          );


        const hours =
          totalHours % 24;


        if (
          days > 0
        ) {

          nextCountdown =
            `${days}天${hours}时后`;

        }

        else {

          nextCountdown =
            `${hours}时后`;

        }

      }


      /* ===================================================
       * 下调 / 上调
       * =================================================== */

      if (
        trendInfo.includes("↓")
      ) {

        nextTrend =
          "↓";

      }

      else if (
        trendInfo.includes("↑")
      ) {

        nextTrend =
          "↑";

      }


      /* ===================================================
       * 提取 0.11-0.14
       * =================================================== */

      const amountMatch =
        trendInfo.match(
          /([\d.]+)\s*-\s*([\d.]+)/
        );


      if (
        amountMatch
      ) {

        nextAmountMin =
          parseFloat(
            amountMatch[1]
          );


        nextAmountMax =
          parseFloat(
            amountMatch[2]
          );

      }

    }

  }


  /* =========================================================
   * 加油金额
   *
   * FILL_OIL
   * FILL_LITERS
   *
   * 例如：
   *
   * FILL_OIL = 95
   * FILL_LITERS = 55
   *
   * 结果：
   *
   * 95号加满 55L ¥504.4
   * ========================================================= */

  let fillText =
    "";


  let savingText =
    "";


  const fillOilMap = {

    "92":
      prices.p92,

    "95":
      prices.p95,

    "98":
      prices.p98

  };


  const fillOilPrice =
    fillOilMap[
      FILL_OIL
    ];


  if (

    fillOilPrice !== null &&

    fillOilPrice !== undefined &&

    !isNaN(fillOilPrice) &&

    !isNaN(FILL_LITERS) &&

    FILL_LITERS > 0

  ) {

    /* 当前加油金额 */

    const fillAmount =
      fillOilPrice *
      FILL_LITERS;


    fillText =
      `${FILL_OIL}号加满 ${FILL_LITERS}L ¥${fillAmount.toFixed(1)}`;


    /* =====================================================
     * 下轮预计节省
     * ===================================================== */

    if (

      nextTrend === "↓" &&

      nextAmountMin !== null &&

      nextAmountMax !== null

    ) {

      const saveMin =
        nextAmountMin *
        FILL_LITERS;


      const saveMax =
        nextAmountMax *
        FILL_LITERS;


      savingText =
        `下轮预计省 ¥${saveMin.toFixed(1)}-${saveMax.toFixed(1)}`;

    }

  }


  /* =========================================================
   * 下轮预测
   * ========================================================= */

  let forecastText =
    "下轮预测";


  if (

    nextTrend &&

    nextAmountMin !== null &&

    nextAmountMax !== null

  ) {

    forecastText =
      `下轮预测 ${nextTrend}${nextAmountMin.toFixed(2)}-${nextAmountMax.toFixed(2)}`;

  }


  /* =========================================================
   * 价格卡片
   * ========================================================= */

  function priceCard(row) {

    let changeText =
      "";

    let changeColor =
      COLORS.up;

    if (

      row.change &&

      typeof row.change.value === "number"

    ) {

      const prefix =
        row.change.direction === "down"
          ? "▼"
          : "▲";

      changeText =
        `${prefix}${row.change.value.toFixed(2)}`;


      changeColor =
        row.change.direction === "down"

          ? COLORS.down

          : COLORS.up;

    }


    return {

      type: "stack",

      direction: "column",

      alignItems: "center",

      justifyContent: "center",

      flex: 1,

      gap: 1,

      padding: [
        8,
        3,
        7,
        3
      ],

      backgroundColor:
        COLORS.card,

      borderRadius:
        18,

      children: [

        /* ===============================================
         * 油品名称
         * =============================================== */

        {

          type: "stack",

          direction: "row",

          alignItems: "center",

          justifyContent:
            "center",

          gap: 3,

          children: [

            {

              type: "text",

              text:
                "●",

              font: {

                size:
                  "caption2",

                weight:
                  "bold"

              },

              textColor:
                row.color

            },


            {

              type: "text",

              text:
                row.label,

              font: {

                size:
                  "caption1",

                weight:
                  "semibold"

              },

              textColor:
                row.color,

              lineLimit:
                1

            },


            ...(row.subLabel

              ? [

                  {

                    type: "text",

                    text:
                      row.subLabel,

                    font: {

                      size:
                        "caption2"

                    },

                    textColor:
                      COLORS.secondary,

                    lineLimit:
                      1

                  }

                ]

              : [])

          ]

        },


        /* ===============================================
         * 当前价格
         * =============================================== */

        {

          type: "text",

          text:

            row.price !== null

              ? row.price.toFixed(2)

              : "--",

          font: {

            size:
              "title",

            weight:
              "bold"

          },

          textColor:
            COLORS.primary,

          textAlign:
            "center",

          lineLimit:
            1,

          minScale:
            0.65

        },


        /* ===============================================
         * 本轮涨跌
         * =============================================== */

        ...(changeText

          ? [

              {

                type: "text",

                text:
                  changeText,

                font: {

                  size:
                    "caption1",

                  weight:
                    "semibold"

                },

                textColor:
                  changeColor,

                textAlign:
                  "center",

                lineLimit:
                  1

              }

            ]

          : [])

      ]

    };

  }


  /* =========================================================
   * Small 小组件
   * ========================================================= */

  if (
    ctx.widgetFamily ===
    "systemSmall"
  ) {

    const smallRows =
      rows.slice(
        0,
        4
      );


    function smallCard(row) {

      return {

        type: "stack",

        direction: "column",

        alignItems: "center",

        justifyContent:
          "center",

        flex: 1,

        gap: 1,

        padding: [
          4,
          2,
          4,
          2
        ],

        backgroundColor:
          COLORS.card,

        borderRadius:
          13,


        children: [

          {

            type: "stack",

            direction: "row",

            alignItems:
              "center",

            justifyContent:
              "center",

            gap: 2,

            children: [

              {

                type: "text",

                text:
                  "●",

                font: {

                  size:
                    "caption2"

                },

                textColor:
                  row.color

              },


              {

                type: "text",

                text:
                  row.label,

                font: {

                  size:
                    "caption2",

                  weight:
                    "bold"

                },

                textColor:
                  row.color,

                lineLimit:
                  1

              }

            ]

          },


          {

            type: "text",

            text:

              row.price !== null

                ? row.price.toFixed(2)

                : "--",

            font: {

              size:
                "callout",

              weight:
                "bold"

            },

            textColor:
              COLORS.primary,

            textAlign:
              "center",

            lineLimit:
              1,

            minScale:
              0.65

          }

        ]

      };

    }


    const pairs = [];


    for (

      let i = 0;

      i < smallRows.length;

      i += 2

    ) {

      pairs.push(
        smallRows.slice(
          i,
          i + 2
        )
      );

    }


    return {

      type: "widget",

      padding: [
        8,
        8,
        8,
        8
      ],

      gap: 4,

      backgroundColor:
        backgroundColor,

      refreshAfter:
        refreshTime,

      children: [

        /* ===============================================
         * 顶部
         * =============================================== */

        {

          type: "stack",

          direction: "row",

          alignItems:
            "center",

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
                regionName ||
                "油价",

              font: {

                size:
                  "caption2",

                weight:
                  "semibold"

              },

              textColor:
                COLORS.primary,

              lineLimit:
                1,

              minScale:
                0.7

            },


            {

              type: "spacer"

            },


            {

              type: "text",

              text:
                `${dateStr} ${timeStr}`,

              font: {

                size:
                  "caption2"

              },

              textColor:
                COLORS.secondary

            }

          ]

        },


        /* ===============================================
         * 油价
         * =============================================== */

        {

          type: "stack",

          direction:
            "column",

          flex: 1,

          gap: 4,

          children:
            pairs.map(
              pair => ({

                type: "stack",

                direction:
                  "row",

                flex: 1,

                gap: 4,

                children:
                  pair.map(
                    smallCard
                  )

              })
            )

        },


        /* ===============================================
         * 底部
         * =============================================== */

        {

          type: "stack",

          direction:
            "row",

          alignItems:
            "center",

          children: [

            {

              type: "text",

              text:
                nextDateText
                  ? `下轮 ${nextDateText}`
                  : "油价",

              font: {

                size:
                  "caption2"

              },

              textColor:
                COLORS.secondary,

              lineLimit:
                1

            },


            {

              type: "spacer"

            },


            {

              type: "text",

              text:
                "元/升",

              font: {

                size:
                  "caption2"

              },

              textColor:
                COLORS.tertiary

            }

          ]

        }

      ]

    };

  }


  /* =========================================================
   * Medium 中号小组件
   * ========================================================= */

  return {

    type: "widget",

    padding: [
      10,
      10,
      9,
      10
    ],

    gap: 6,

    backgroundColor:
      backgroundColor,

    refreshAfter:
      refreshTime,

    children: [

      /* =====================================================
       * 顶部标题
       * ===================================================== */

      {

        type: "stack",

        direction:
          "row",

        alignItems:
          "center",

        gap: 5,

        padding: [
          0,
          4,
          0,
          4
        ],

        children: [

          {

            type: "image",

            src:
              "sf-symbol:fuelpump.fill",

            width: 17,

            height: 17,

            color:
              COLORS.p92

          },


          {

            type: "text",

            text:
              titleText,

            font: {

              size:
                "title3",

              weight:
                "bold"

            },

            textColor:
              COLORS.primary,

            lineLimit:
              1,

            minScale:
              0.7

          },


          {

            type: "spacer"

          },


          {

            type: "text",

            text:
              `更新 ${dateStr} ${timeStr}`,

            font: {

              size:
                "caption1"

            },

            textColor:
              COLORS.secondary,

            lineLimit:
              1,

            minScale:
              0.65

          }

        ]

      },


      /* =====================================================
       * 四个油价卡片
       * ===================================================== */

      {

        type: "stack",

        direction:
          "row",

        alignItems:
          "center",

        justifyContent:
          "space-between",

        gap: 5,

        flex: 1,

        children:

          rows.length > 0

            ? rows.map(
                priceCard
              )

            : [

                {

                  type: "stack",

                  direction:
                    "column",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  flex: 1,

                  gap: 5,

                  children: [

                    {

                      type: "image",

                      src:
                        "sf-symbol:exclamationmark.triangle.fill",

                      width: 22,

                      height: 22,

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

                        size:
                          "body"

                      },

                      textColor:
                        COLORS.secondary

                    }

                  ]

                }

              ]

      },


      /* =====================================================
       * 底部信息卡片
       * ===================================================== */

      {

        type: "stack",

        direction:
          "column",

        gap: 3,

        padding: [
          8,
          9,
          7,
          9
        ],

        backgroundColor:
          COLORS.infoCard,

        borderRadius:
          14,

        children: [

          /* ===============================================
           * 第一行
           * =============================================== */

          {

            type: "stack",

            direction:
              "row",

            alignItems:
              "center",

            gap: 4,

            children: [

              /* 时钟 */

              {

                type: "image",

                src:
                  "sf-symbol:clock.fill",

                width: 15,

                height: 15,

                color:
                  COLORS.orange

              },


              /* 下轮日期 */

              {

                type: "text",

                text:
                  nextDateText
                    ? `下轮 ${nextDateText}`
                    : "下轮",

                font: {

                  size:
                    "body",

                  weight:
                    "semibold"

                },

                textColor:
                  COLORS.primary,

                lineLimit:
                  1

              },


              /* 橙色进度条 */

              {

                type: "stack",

                direction:
                  "row",

                width: 55,

                height: 6,

                backgroundColor: {

                  light:
                    "#F1E2C4",

                  dark:
                    "#4A3A20"

                },

                borderRadius:
                  5,

                children: [

                  {

                    type: "stack",

                    width: 38,

                    height: 6,

                    backgroundColor:
                      COLORS.orange,

                    borderRadius:
                      5

                  }

                ]

              },


              /* 倒计时 */

              {

                type: "text",

                text:
                  nextCountdown ||
                  "计算中",

                font: {

                  size:
                    "caption1",

                  weight:
                    "semibold"

                },

                textColor:
                  COLORS.orange,

                lineLimit:
                  1,

                minScale:
                  0.65

              },


              {

                type: "spacer"

              },


              /* 下轮预测 */

              {

                type: "text",

                text:
                  forecastText,

                font: {

                  size:
                    "caption1",

                  weight:
                    "semibold"

                },

                textColor:

                  nextTrend === "↓"

                    ? COLORS.down

                    : nextTrend === "↑"

                      ? COLORS.up

                      : COLORS.secondary,

                textAlign:
                  "right",

                lineLimit:
                  1,

                minScale:
                  0.55

              }

            ]

          },


          /* ===============================================
           * 第二行
           *
           * 使用环境变量：
           *
           * FILL_OIL
           * FILL_LITERS
           * =============================================== */

          {

            type: "stack",

            direction:
              "row",

            alignItems:
              "center",

            gap: 4,

            children: [

              /* 火焰 */

              {

                type: "image",

                src:
                  "sf-symbol:flame.fill",

                width: 14,

                height: 14,

                color:
                  COLORS.p95

              },


              /* 加油金额 */

              {

                type: "text",

                text:
                  fillText ||
                  `${FILL_OIL}号加满 ${FILL_LITERS}L`,

                font: {

                  size:
                    "caption1",

                  weight:
                    "medium"

                },

                textColor:
                  COLORS.primary,

                lineLimit:
                  1,

                minScale:
                  0.6

              },


              /* 分隔符 */

              ...(savingText

                ? [

                    {

                      type: "text",

                      text:
                        " · ",

                      font: {

                        size:
                          "caption1"

                      },

                      textColor:
                        COLORS.tertiary

                    },


                    /* 预计节省 */

                    {

                      type: "text",

                      text:
                        savingText,

                      font: {

                        size:
                          "caption1",

                        weight:
                          "semibold"

                      },

                      textColor:
                        COLORS.down,

                      lineLimit:
                        1,

                      minScale:
                        0.55

                    }

                  ]

                : [])

            ]

          }

        ]

      }

    ]

  };

}
