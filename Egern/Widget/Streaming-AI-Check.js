/**
 * ==========================================================
 * 流媒体 & AI 服务解锁检测
 * 适用于 Egern
 *
 * 功能：
 * 1. 检测流媒体服务的 HTTP 连通性
 * 2. 检测 AI 服务的 HTTP 连通性
 * 3. 查询当前出口 IP 及国家/地区
 * 4. 尝试识别 Netflix 服务地区
 * 5. 支持小号、中号、大号小组件
 *
 * 注意：
 * HTTP 连通不代表账号具备使用资格。
 * 地区识别仅在获得明确证据时展示。
 * ==========================================================
 */

const VERSION = "1.0.0";

const COLORS = {
  background: "#10151F",
  panel: "#1B2432",
  title: "#FFFFFF",
  subtitle: "#A8B3C7",
  green: "#36D399",
  yellow: "#FBBF24",
  red: "#FB7185",
  gray: "#8994A8",
  blue: "#60A5FA",
  divider: "#354052"
};

const SERVICES = [
  // 流媒体
  {
    category: "流媒体服务",
    name: "Netflix",
    url: "https://www.netflix.com/",
    type: "netflix"
  },
  {
    category: "流媒体服务",
    name: "Disney+",
    url: "https://www.disneyplus.com/",
    type: "normal"
  },
  {
    category: "流媒体服务",
    name: "YouTube",
    url: "https://www.youtube.com/",
    type: "normal"
  },
  {
    category: "流媒体服务",
    name: "YouTube Premium",
    url: "https://www.youtube.com/premium",
    type: "normal"
  },
  {
    category: "流媒体服务",
    name: "Prime Video",
    url: "https://www.primevideo.com/",
    type: "normal"
  },
  {
    category: "流媒体服务",
    name: "HBO Max",
    url: "https://www.hbomax.com/",
    type: "normal"
  },
  {
    category: "流媒体服务",
    name: "TikTok",
    url: "https://www.tiktok.com/",
    type: "normal"
  },

  // AI 服务
  {
    category: "AI 服务",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    type: "normal"
  },
  {
    category: "AI 服务",
    name: "OpenAI API",
    url: "https://api.openai.com/v1/models",
    type: "api"
  },
  {
    category: "AI 服务",
    name: "Claude",
    url: "https://claude.ai/",
    type: "normal"
  },
  {
    category: "AI 服务",
    name: "Gemini",
    url: "https://gemini.google.com/",
    type: "normal"
  },
  {
    category: "AI 服务",
    name: "Google AI",
    url: "https://ai.google.dev/",
    type: "normal"
  },
  {
    category: "AI 服务",
    name: "Muse AI",
    url: "https://muse.ai/",
    type: "muse"
  }
];

/**
 * 获取文本形式的 HTTP 响应头。
 */
function getHeader(response, name) {
  try {
    if (response.headers &&
        typeof response.headers.get === "function") {
      return response.headers.get(name) || "";
    }

    return "";
  } catch (_) {
    return "";
  }
}

/**
 * 将 HTTP 状态转换成简明状态。
 */
function classifyStatus(status) {
  if (status >= 200 && status < 400) {
    return {
      label: "可访问",
      color: COLORS.green
    };
  }

  if (status === 401 || status === 403) {
    return {
      label: "访问受限",
      color: COLORS.yellow
    };
  }

  if (status === 404 || status === 405) {
    return {
      label: "端点已响应",
      color: COLORS.yellow
    };
  }

  if (status === 429) {
    return {
      label: "请求受限",
      color: COLORS.yellow
    };
  }

  if (status >= 500) {
    return {
      label: "服务异常",
      color: COLORS.red
    };
  }

  return {
    label: "状态异常",
    color: COLORS.gray
  };
}

/**
 * 检查单个服务。
 *
 * policy 不强制指定，以便遵循 Egern 当前
 * 脚本请求使用的默认网络策略。
 */
async function checkURL(ctx, url) {
  const startedAt = Date.now();

  try {
    const response = await ctx.http.get(url, {
      timeout: 10000,
      redirect: "follow",
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) " +
          "AppleWebKit/605.1.15 (KHTML, like Gecko) " +
          "Version/17.0 Mobile/15E148 Safari/604.1",
        "Accept":
          "text/html,application/json,application/xhtml+xml,*/*"
      }
    });

    const elapsed = Date.now() - startedAt;
    const status = Number(response.status) || 0;
    const result = classifyStatus(status);

    return {
      ok: status >= 200 && status < 400,
      status: status,
      elapsed: elapsed,
      label: result.label,
      color: result.color,
      url: url
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      elapsed: Date.now() - startedAt,
      label: "连接失败",
      color: COLORS.red,
      error: String(error),
      url: url
    };
  }
}

/**
 * 查询出口 IP。
 *
 * 使用多个公开接口作为备用。
 */
async function getExitIP(ctx) {
  const endpoints = [
    "https://ipinfo.io/json",
    "https://ipwho.is/"
  ];

  for (const url of endpoints) {
    try {
      const response = await ctx.http.get(url, {
        timeout: 8000,
        credentials: "omit",
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.status < 200 ||
          response.status >= 300) {
        continue;
      }

      const data = await response.json();

      const ip =
        data.ip ||
        data.ip_address ||
        "";

      const country =
        data.country ||
        data.country_code ||
        "";

      const region =
        data.region ||
        data.region_name ||
        "";

      const city =
        data.city ||
        "";

      if (ip) {
        return {
          ip: String(ip),
          country: String(country || "未知"),
          region: String(region || ""),
          city: String(city || "")
        };
      }
    } catch (_) {
      // 继续尝试备用接口
    }
  }

  return {
    ip: "获取失败",
    country: "未知",
    region: "",
    city: ""
  };
}

/**
 * 尝试检测 Netflix 的地区信息。
 *
 * Netflix 的公开首页并不保证返回可用片库地区。
 * 只有获取到明确的地区信息才展示地区代码。
 */
async function checkNetflix(ctx) {
  const base = await checkURL(
    ctx,
    "https://www.netflix.com/"
  );

  let region = "";

  try {
    const response = await ctx.http.get(
      "https://www.netflix.com/title/80018499",
      {
        timeout: 10000,
        redirect: "follow",
        credentials: "omit",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) " +
            "AppleWebKit/605.1.15 (KHTML, like Gecko) " +
            "Version/17.0 Mobile/15E148 Safari/604.1"
        }
      }
    );

    const location = getHeader(response, "location");

    // 只从明确包含地区代码的 URL 中提取信息。
    const match = location.match(
      /netflix\.com\/([a-z]{2})\//i
    );

    if (match) {
      region = match[1].toUpperCase();
    }
  } catch (_) {
    // 地区信息不可用时不猜测
  }

  base.region = region || "";
  base.regionLabel = region
    ? "检测到地区代码：" + region
    : "地区未确认";

  return base;
}

/**
 * 检查 Muse / Skiv。
 * 域名的连通性不等同于账号可用性。
 */
async function checkMuse(ctx) {
  const primary = await checkURL(
    ctx,
    "https://muse.ai/"
  );

  if (primary.ok) {
    primary.label = "Muse 可访问";
    primary.color = COLORS.green;
    primary.detail = "muse";
    return primary;
  }
  primary.label = "无法访问";
  primary.color = COLORS.red;
  primary.detail = "访问失败";

  return primary;
}

/**
 * 执行全部检测。
 */
async function runChecks(ctx) {
  const results = [];
  const exitIP = await getExitIP(ctx);

  for (const service of SERVICES) {
    let result;

    if (service.type === "netflix") {
      result = await checkNetflix(ctx);
    } else if (service.type === "muse") {
      result = await checkMuse(ctx);
    } else {
      result = await checkURL(ctx, service.url);
    }

    results.push({
      name: service.name,
      category: service.category,
      result: result
    });
  }

  return {
    exitIP: exitIP,
    results: results,
    time: new Date().toLocaleString(),
    version: VERSION
  };
}

/**
 * 创建文本元素。
 */
function textNode(
  text,
  size,
  color,
  weight
) {
  return {
    type: "text",
    text: String(text),
    font: {
      size: size || "body",
      weight: weight || "regular"
    },
    textColor: color || COLORS.title
  };
}

/**
 * 创建横向服务状态行。
 */
function serviceRow(item) {
  const status = item.result;
  const suffix = status.status
    ? " · HTTP " + status.status
    : "";

  const detail = status.elapsed != null
    ? " · " + status.elapsed + "ms"
    : "";

  return {
    type: "stack",
    direction: "horizontal",
    spacing: 6,
    children: [
      {
        type: "text",
        text: "●",
        font: {
          size: "caption1",
          weight: "bold"
        },
        textColor: status.color
      },
      {
        type: "stack",
        direction: "vertical",
        spacing: 1,
        children: [
          textNode(
            item.name,
            "subheadline",
            COLORS.title,
            "medium"
          ),
          textNode(
            status.label + suffix + detail,
            "caption2",
            status.color,
            "regular"
          )
        ]
      }
    ]
  };
}

/**
 * 按类别过滤结果。
 */
function categoryItems(data, category) {
  return data.results.filter(function(item) {
    return item.category === category;
  });
}

/**
 * 统计检测结果。
 */
function countOK(data) {
  return data.results.filter(function(item) {
    return item.result.ok;
  }).length;
}

/**
 * 生成 Egern Widget DSL。
 */
function buildWidget(data, family) {
  const small = family === "systemSmall";
  const medium = family === "systemMedium";
  const large = family === "systemLarge" ||
                family === "systemExtraLarge";

  const children = [];

  children.push({
    type: "stack",
    direction: "horizontal",
    spacing: 6,
    children: [
      textNode(
        "流媒体 & AI",
        "headline",
        COLORS.title,
        "bold"
      ),
      {
        type: "spacer"
      },
      textNode(
        "v" + data.version,
        "caption2",
        COLORS.gray
      )
    ]
  });

  children.push(
    textNode(
      "服务解锁检测",
      "caption1",
      COLORS.subtitle
    )
  );

  children.push({
    type: "stack",
    direction: "vertical",
    spacing: 4,
    children: [
      textNode(
        "出口 IP",
        "caption2",
        COLORS.subtitle
      ),
      textNode(
        data.exitIP.ip,
        "subheadline",
        COLORS.blue,
        "semibold"
      ),
      textNode(
        "地区：" +
          data.exitIP.country +
          (
            data.exitIP.region
              ? " · " + data.exitIP.region
              : ""
          ),
        "caption2",
        COLORS.subtitle
      )
    ]
  });

  children.push({
    type: "stack",
    direction: "horizontal",
    spacing: 4,
    children: [
      textNode(
        "可访问 " + countOK(data) +
          "/" + data.results.length,
        "caption1",
        COLORS.green,
        "semibold"
      ),
      {
        type: "spacer"
      },
      textNode(
        "HTTP 连通性",
        "caption2",
        COLORS.gray
      )
    ]
  });

  if (small) {
    const important = [
      "Netflix",
      "YouTube",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Muse / Skiv"
    ];

    const filtered = data.results.filter(function(item) {
      return important.indexOf(item.name) !== -1;
    });

    children.push({
      type: "stack",
      direction: "vertical",
      spacing: 7,
      children: filtered.map(function(item) {
        return serviceRow(item);
      })
    });
  } else if (medium) {
    children.push(
      textNode(
        "重点服务",
        "subheadline",
        COLORS.title,
        "semibold"
      )
    );

    const important = [
      "Netflix",
      "Disney+",
      "YouTube",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Muse / Skiv"
    ];

    const filtered = data.results.filter(function(item) {
      return important.indexOf(item.name) !== -1;
    });

    children.push({
      type: "stack",
      direction: "vertical",
      spacing: 6,
      children: filtered.map(function(item) {
        return serviceRow(item);
      })
    });
  } else {
    children.push(
      textNode(
        "🎬 流媒体服务",
        "subheadline",
        COLORS.title,
        "semibold"
      )
    );

    children.push({
      type: "stack",
      direction: "vertical",
      spacing: 7,
      children: categoryItems(
        data,
        "流媒体服务"
      ).map(function(item) {
        return serviceRow(item);
      })
    });

    children.push(
      textNode(
        "🤖 AI 服务",
        "subheadline",
        COLORS.title,
        "semibold"
      )
    );

    children.push({
      type: "stack",
      direction: "vertical",
      spacing: 7,
      children: categoryItems(
        data,
        "AI 服务"
      ).map(function(item) {
        return serviceRow(item);
      })
    });
  }

  children.push({
    type: "spacer",
    length: 2
  });

  children.push(
    textNode(
      "HTTP 可访问 ≠ 账号已解锁",
      "caption2",
      COLORS.gray
    )
  );

  children.push(
    textNode(
      "检测时间：" + data.time,
      "caption2",
      COLORS.gray
    )
  );

  return {
    type: "widget",
    children: children,
    backgroundColor: COLORS.background,
    padding: 14,
    gap: 10
  };
}

/**
 * Egern 通用脚本入口。
 */
export default async function(ctx) {
  try {
    const data = await runChecks(ctx);

    return buildWidget(
      data,
      ctx.widgetFamily || "systemLarge"
    );
  } catch (error) {
    return {
      type: "widget",
      backgroundColor: COLORS.background,
      padding: 16,
      children: [
        textNode(
          "流媒体 & AI 检测",
          "headline",
          COLORS.title,
          "bold"
        ),
        textNode(
          "检测执行失败",
          "body",
          COLORS.red
        ),
        textNode(
          String(error),
          "caption2",
          COLORS.subtitle
        )
      ]
    };
  }
}
