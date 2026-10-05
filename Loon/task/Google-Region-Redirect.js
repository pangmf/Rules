/*

* Google Region Redirect for Loon
* 功能：
* 1.	Google 各地区站 → google.com
* 2.	google.cn → google.com
* 3.	保留原 URL 的完整路径和 Query 参数
* 示例：
* https://www.google.cn/search?q=OpenAI
* ↓
* https://www.google.com/search?q=OpenAI
* https://www.google.co.jp/search?q=ChatGPT&udm=2
* ↓
* https://www.google.com/search?q=ChatGPT&udm=2
    */

(function () {

const url = $request.url;

if (!url) {
$done({});
return;
}

/*

* 明确需要重定向的 Google 域名
* google.cn 单独列出。
* google.com 不匹配，因此不会产生循环重定向。
    */

const googleRegionRegex =
/^https?://(?:www.)?google.(?:cn|[a-z]{2,3}(?:.[a-z]{2})?)(?=/|$)/i;

const match = url.match(googleRegionRegex);

if (!match) {
$done({});
return;
}

/*

* 仅替换 hostname。
* Path、Query、Fragment 全部保留。
    */

const newURL = url.replace(
googleRegionRegex,
“https://www.google.com”
);

console.log(
“[Google-Region-Redirect]”
);

console.log(
“原地址: “ + url
);

console.log(
“重定向: “ + newURL
);

$done({
url: newURL
});

})();
