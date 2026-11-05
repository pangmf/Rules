/*

* Google Region Redirect
* Loon
* 功能：
* 1.	Google 各地区域站 -> google.com
* 2.	google.cn -> google.com
* 3.	拦截 Google 302/303/307/308 区域跳转
* 4.	保留搜索路径和 Query 参数
        */

const GOOGLE_REGION =
/^(?:www.)?google.(?!com(?:$|:|/))[a-z]{2,}(?:.[a-z]{2})?$/i;

/* ============================================================

* URL 判断
* ========================================================== */

function isGoogleRegion(host) {

if (!host) {
return false;
}

host = host
.toLowerCase()
.replace(/.$/, “”);

if (host === “google.com”) {
return false;
}

return GOOGLE_REGION.test(host);
}

/* ============================================================

* 请求阶段
* google.cn/search?q=test
* ↓
* google.com/search?q=test
* ========================================================== */

if (
typeof $request !== “undefined” &&
$request
) {

let url = $request.url;

try {

const parsed = new URL(url);
if (isGoogleRegion(parsed.hostname)) {
  parsed.hostname = "www.google.com";
  console.log(
    "[Google Redirect] Request:"
  );
  console.log(
    url + " -> " + parsed.toString()
  );
  $done({
    url: parsed.toString()
  });
  return;
}

} catch (e) {

console.log(
  "[Google Redirect] URL解析失败: " +
  String(e)
);

}

$done({});
return;
}

/* ============================================================

* 响应阶段
* 如果 Google 返回：
* Location:
* https://www.google.co.jp/search?q=test
* 则改成：
* https://www.google.com/search?q=test
* ========================================================== */

if (
typeof $response !== “undefined” &&
$response
) {

let headers = $response.headers || {};

let location =
headers[“Location”] ||
headers[“location”];

if (!location) {
$done({});
return;
}

try {

const parsed = new URL(location);
if (isGoogleRegion(parsed.hostname)) {
  parsed.hostname = "www.google.com";
  const newLocation =
    parsed.toString();
  if (headers["Location"]) {
    headers["Location"] = newLocation;
  } else {
    headers["location"] = newLocation;
  }
  console.log(
    "[Google Redirect] Response:"
  );
  console.log(
    location +
    " -> " +
    newLocation
  );
  $done({
    response: {
      status: $response.status,
      headers: headers,
      body: $response.body
    }
  });
  return;
}

} catch (e) {

/*
 * Location 有可能是相对路径，例如：
 *
 * /search?q=test
 *
 * 这种情况不需要修改。
 */
console.log(
  "[Google Redirect] Location解析失败: " +
  String(e)
);

}

$done({});
return;
}

$done({});
