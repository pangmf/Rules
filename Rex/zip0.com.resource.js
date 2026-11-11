WidgetMetadata = {
  id: "zip0.com.resource",
  title: "ZIP0影视播放源",
  description: "ZIP0.com 多线路影视播放资源",
  author: "TG@ZenMoFiShi",
  site: "https://zip0.com",
  version: "1.1.1",
  requiredVersion: "0.0.1",
  modules: [
    {
      id: "loadResource",
      title: "ZIP0影视播放源",
      description: "搜索 ZIP0 多线路资源并返回当前集播放地址",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      requiresWebView: false,
      params: []
    }
  ]
};

const SITE = "https://zip0.com";
const SEARCH_API = SITE + "/api/videos/search";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";

function text(value) {
  return String(value == null ? "" : value).trim();
}

function toInt(value, fallback) {
  const number = parseInt(value, 10);
  return isNaN(number) ? (fallback || 0) : number;
}

function decodeJsString(value) {
  const raw = String(value || "");
  try {
    return JSON.parse('"' + raw + '"');
  } catch (error) {
    return raw
      .replace(/\\u([0-9a-fA-F]{4})/g, function (_, hex) { return String.fromCharCode(parseInt(hex, 16)); })
      .replace(/\\(["\\/bfnrt])/g, function (_, code) {
        return { b: "\\b", f: "\\f", n: "\\n", r: "\\r", t: "\\t" }[code] || code;
      });
  }
}

function extractField(html, key) {
  const pattern = new RegExp(key + "\\s*:\\s*\\\"((?:\\\\.|[^\\\"\\\\])*)\\\"", "i");
  const match = String(html || "").match(pattern);
  return match ? decodeJsString(match[1]) : "";
}

function parseEpisodes(html) {
  const source = String(html || "");
  const start = source.lastIndexOf("episodes:");
  if (start < 0) return [];
  const end = source.indexOf("ssr:", start);
  const section = source.slice(start, end > start ? end : source.length);
  const result = [];
  const pattern = /\bname\s*:\s*"((?:\\.|[^"\\])*)"\s*,\s*url\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let match;
  while ((match = pattern.exec(section))) {
    const name = decodeJsString(match[1]);
    const url = decodeJsString(match[2]);
    if (url && /^https?:\/\//i.test(url)) result.push({ name: name || "正片", url: url });
  }
  return result;
}

function parseJsonResponse(response) {
  if (!response) return {};
  if (response.data && typeof response.data === "object") return response.data;
  const raw = typeof response.data === "string" ? response.data : response;
  try { return JSON.parse(String(raw || "{}")); } catch (error) { return {}; }
}

function stripTitleMeta(value) {
  return text(value)
    .replace(/\[[^\]]*\]/g, "")
    .replace(/【[^】]*】/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/（[^）]*）/g, "")
    .replace(/第\s*\d+\s*[季集部篇]/gi, "")
    .trim();
}

function normalizeTitle(value) {
  return stripTitleMeta(value)
    .toLowerCase()
    .replace(/[\s\-_·:：,，.。!！?？/\\'"“”‘’]/g, "");
}

function isExcludedItem(item) {
  return /解说|预告|花絮|片段/.test(text(item && item.category)) || /解说|预告/.test(text(item && item.title));
}

function titleScore(item, wanted) {
  const left = normalizeTitle(item && item.title);
  const right = normalizeTitle(wanted);
  if (!left || !right) return 0;
  const excluded = isExcludedItem(item);
  const wantedExcluded = /解说|预告|花絮|片段/.test(text(wanted));
  if (excluded && !wantedExcluded) return left === right ? 80 : 10;
  if (left === right) return 1000;
  if (left.indexOf(right) >= 0 || right.indexOf(left) >= 0) return 700;
  if (excluded) return 10;
  return 0;
}

function parseWatchKey(url) {
  const value = text(url);
  const match = value.match(/[?&]source=([^&]+).*?[?&]id=([^&]+)/i);
  if (!match) return value;
  let source = match[1];
  let id = match[2];
  try { source = decodeURIComponent(source); } catch (error) {}
  try { id = decodeURIComponent(id); } catch (error) {}
  return source + ":" + id;
}

function episodeNumber(value) {
  const source = text(value);
  const patterns = [
    /(?:第\s*)0*(\d+)\s*(?:集|话|話|期)/i,
    /\bS\d+\s*E0*(\d+)\b/i,
    /\bE0*(\d+)\b/i,
    /^\s*0*(\d+)\s*$/
  ];
  for (let index = 0; index < patterns.length; index++) {
    const match = source.match(patterns[index]);
    if (match) return toInt(match[1], 0);
  }
  return 0;
}

function chooseEpisode(episodes, wantedEpisode, wantedEpisodeName) {
  if (!episodes.length) return null;
  const namedNumber = episodeNumber(wantedEpisodeName);
  const paramNumber = episodeNumber(wantedEpisode);
  const number = namedNumber || paramNumber;
  if (number <= 0) return episodes[0];
  for (let index = 0; index < episodes.length; index++) {
    if (episodeNumber(episodes[index].name) === number) return episodes[index];
  }
  return episodes[number - 1] || null;
}

function getPlayHeaders(pageUrl) {
  return {
    "User-Agent": UA,
    "Referer": pageUrl || SITE + "/"
  };
}

function responseStatus(response) {
  return Number(response && (response.status || response.statusCode)) || 0;
}

function responseOkay(response) {
  const status = responseStatus(response);
  return !status || (status >= 200 && status < 400);
}

function responseText(response) {
  if (!response) return "";
  if (typeof response.data === "string") return response.data;
  return "";
}

function resolveUrl(base, target) {
  let value = text(target).replace(/^["']|["']$/g, "");
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  if (/^\/\//.test(value)) {
    const protocol = String(base).match(/^(https?):/i);
    return (protocol ? protocol[1] : "https") + ":" + value;
  }
  const cleanBase = String(base || "").split(/[?#]/)[0];
  const originMatch = cleanBase.match(/^(https?:\/\/[^\/]+)/i);
  if (!originMatch) return value;
  const origin = originMatch[1];
  const basePath = cleanBase.slice(origin.length);
  let path = value.charAt(0) === "/" ? value : basePath.slice(0, basePath.lastIndexOf("/") + 1) + value;
  const suffixMatch = value.match(/[?#].*$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  path = path.split(/[?#]/)[0];
  const stack = [];
  path.split("/").forEach(function (part) {
    if (!part || part === ".") return;
    if (part === "..") stack.pop();
    else stack.push(part);
  });
  return origin + "/" + stack.join("/") + suffix;
}

function playlistLines(body) {
  return String(body || "")
    .split(/\r?\n/)
    .map(function (line) { return line.trim(); })
    .filter(function (line) { return !!line; });
}

function extractVariantUrls(body, baseUrl) {
  const lines = playlistLines(body);
  const result = [];
  for (let index = 0; index < lines.length; index++) {
    if (lines[index].indexOf("#EXT-X-STREAM-INF") !== 0) continue;
    for (let next = index + 1; next < lines.length; next++) {
      if (lines[next].charAt(0) === "#") continue;
      const url = resolveUrl(baseUrl, lines[next]);
      if (url && result.indexOf(url) < 0) result.push(url);
      break;
    }
  }
  for (let index = 0; index < lines.length; index++) {
    if (lines[index].indexOf("#EXT-X-I-FRAME-STREAM-INF") !== 0) continue;
    const match = lines[index].match(/URI\s*=\s*["']([^"']+)["']/i);
    const url = match ? resolveUrl(baseUrl, match[1]) : "";
    if (url && result.indexOf(url) < 0) result.push(url);
  }
  return result;
}

function extractMediaUrl(body, baseUrl) {
  const lines = playlistLines(body);
  for (let index = 0; index < lines.length; index++) {
    const map = lines[index].match(/^#EXT-X-MAP:.*URI\s*=\s*["']([^"']+)["']/i);
    if (map) return resolveUrl(baseUrl, map[1]);
  }
  for (let index = 0; index < lines.length; index++) {
    if (lines[index].charAt(0) === "#") continue;
    const url = resolveUrl(baseUrl, lines[index]);
    if (url) return url;
  }
  return "";
}

async function getPlaylist(url, pageUrl) {
  const response = await Widget.http.get(url, {
    headers: getPlayHeaders(pageUrl),
    allow_redirects: true
  });
  const body = responseText(response);
  if (!responseOkay(response) || body.indexOf("#EXTM3U") < 0) throw new Error("HLS playlist unavailable");
  return { response: response, body: body };
}

async function probeHls(url, pageUrl) {
  const startedAt = Date.now();
  try {
    const master = await getPlaylist(url, pageUrl);
    const variants = extractVariantUrls(master.body, url).slice(0, 3);
    const playlists = variants.length ? variants : [url];
    for (let index = 0; index < playlists.length; index++) {
      try {
        const playlistUrl = playlists[index];
        const playlist = playlistUrl === url ? master : await getPlaylist(playlistUrl, pageUrl);
        const mediaUrl = extractMediaUrl(playlist.body, playlistUrl);
        if (!mediaUrl) return { ok: true, latency: Date.now() - startedAt };
        const segment = await Widget.http.get(mediaUrl, {
          headers: Object.assign({}, getPlayHeaders(pageUrl), { Range: "bytes=0-1023" }),
          allow_redirects: true
        });
        if (responseOkay(segment)) return { ok: true, latency: Date.now() - startedAt };
      } catch (error) {}
    }
  } catch (error) {}
  return { ok: false, latency: Date.now() - startedAt };
}

async function loadResource(params = {}) {
  const wanted = text(params.seriesName || params.title || params.episodeName);
  if (!wanted) return [];

  const response = await Widget.http.get(SEARCH_API, {
    headers: { "User-Agent": UA, "Referer": SITE + "/" },
    params: { query: stripTitleMeta(wanted), page: 1, limit: 50 }
  });
  const payload = parseJsonResponse(response);
  const rows = Array.isArray(payload.data) ? payload.data : [];
  if (!rows.length) return [];

  const wantedIsExcluded = /解说|预告|花絮|片段/.test(wanted);
  const ranked = rows
    .filter(function (item) {
      return item && text(item.url) && (wantedIsExcluded || !isExcludedItem(item));
    })
    .map(function (item, index) { return { item: item, score: titleScore(item, wanted), index: index }; })
    .sort(function (a, b) { return b.score - a.score || a.index - b.index; });
  const matched = ranked.filter(function (entry) { return entry.score > 0; });
  const candidates = (matched.length ? matched : ranked).slice(0, 12);
  const seen = {};
  const unique = candidates.filter(function (entry) {
    const key = parseWatchKey(entry.item.url);
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });

  const resources = await Promise.all(unique.map(async function (entry) {
    const item = entry.item;
    try {
      const detailResponse = await Widget.http.get(item.url, {
        headers: { "User-Agent": UA, "Referer": SITE + "/" }
      });
      const html = typeof detailResponse.data === "string" ? detailResponse.data : "";
      const episodes = parseEpisodes(html);
      const episode = chooseEpisode(episodes, params.episode, params.episodeName);
      if (!episode) return null;
      const probe = await probeHls(episode.url, item.url);
      if (!probe.ok) return null;
      const sourceName = extractField(html, "sourceName") || ("ZIP0 " + parseWatchKey(item.url).split(":")[0]);
      const title = extractField(html, "title") || text(item.title) || wanted;
      const remarks = text(item.remarks);
      const description = [
        title,
        item.year ? String(item.year) : "",
        remarks,
        episode.name || "正片",
        "探测 " + probe.latency + " ms"      ].filter(Boolean).join(" · ");
      const headers = getPlayHeaders(item.url);
      return {
        name: sourceName + (episode.name ? " · " + episode.name : ""),
        description: description,
        url: episode.url,
        customHeaders: headers,
        headers: headers
      };
    } catch (error) {
      console.error("[zip0] 线路解析失败:", error && error.message ? error.message : error);
      return null;
    }
  }));

  return resources.filter(function (resource) { return !!resource; }).sort(function (left, right) {
    const a = parseInt((left.description.match(/探测 (\d+) ms/) || ["", "999999"])[1], 10);
    const b = parseInt((right.description.match(/探测 (\d+) ms/) || ["", "999999"])[1], 10);
    return a - b;
  });
}
