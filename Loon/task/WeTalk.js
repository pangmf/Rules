/*

* WeTalk Loon Compatibility Version
* Quantumult X -> Loon compatibility layer
* 原脚本：
* https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/WeTalk.js
* 功能：
* ●	自动抓取 WeTalk 账号参数
* ●	自动签到
* ●	自动领取视频奖励
* ●	多账号支持
* ●	保留原脚本的数据存储结构
        */

const REMOTE_SCRIPT =
“https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/WeTalk.js”;

const SCRIPT_NAME = “WeTalk”;

console.log([${SCRIPT_NAME}] Loon 兼容层启动);

/* ============================================================

* Quantumult X $prefs
* → Loon $persistentStore
* ========================================================== */

if (typeof $prefs === “undefined”) {

var $prefs = {

valueForKey: function (key) {
  try {
    return $persistentStore.read(key);
  } catch (e) {
    console.log(
      `[${SCRIPT_NAME}] 读取存储失败: ${String(e)}`
    );
    return null;
  }
},
setValueForKey: function (value, key) {
  try {
    return $persistentStore.write(
      String(value),
      key
    );
  } catch (e) {
    console.log(
      `[${SCRIPT_NAME}] 写入存储失败: ${String(e)}`
    );
    return false;
  }
}

};
}

/* ============================================================

* Quantumult X $notify
* → Loon $notification
* ========================================================== */

if (typeof $notify === “undefined”) {

var $notify = function (
title,
subtitle,
body
) {

try {
  $notification.post(
    title || SCRIPT_NAME,
    subtitle || "",
    body || ""
  );
} catch (e) {
  console.log(
    `[${SCRIPT_NAME}] 通知失败: ${String(e)}`
  );
}

};
}

/* ============================================================

* Quantumult X $task.fetch
* → Loon $httpClient
* 原脚本主要使用 GET。
* 同时兼容 POST / PUT / DELETE。
* ========================================================== */

if (typeof $task === “undefined”) {

var $task = {

fetch: function (options) {
  return new Promise(
    function (resolve, reject) {
      if (!options) {
        reject({
          error: "Missing request options"
        });
        return;
      }
      const url =
        options.url || "";
      const method =
        String(
          options.method || "GET"
        ).toUpperCase();
      const headers =
        options.headers || {};
      const request = {
        url: url,
        headers: headers,
        timeout: 30000
      };
      function success(
        response,
        body
      ) {
        resolve({
          statusCode:
            response
              ? (
                  response.status ||
                  response.statusCode ||
                  0
                )
              : 0,
          status:
            response
              ? (
                  response.status ||
                  response.statusCode ||
                  0
                )
              : 0,
          headers:
            response
              ? (
                  response.headers || {}
                )
              : {},
          body:
            body || ""
        });
      }
      function failure(error) {
        reject({
          error:
            error
              ? String(error)
              : "Request failed"
        });
      }
      try {
        if (method === "GET") {
          $httpClient.get(
            request,
            function (
              error,
              response,
              body
            ) {
              if (error) {
                failure(error);
                return;
              }
              success(
                response,
                body
              );
            }
          );
          return;
        }
        if (method === "POST") {
          $httpClient.post(
            request,
            function (
              error,
              response,
              body
            ) {
              if (error) {
                failure(error);
                return;
              }
              success(
                response,
                body
              );
            }
          );
          return;
        }
        if (method === "PUT") {
          $httpClient.put(
            request,
            function (
              error,
              response,
              body
            ) {
              if (error) {
                failure(error);
                return;
              }
              success(
                response,
                body
              );
            }
          );
          return;
        }
        if (method === "DELETE") {
          $httpClient.delete(
            request,
            function (
              error,
              response,
              body
            ) {
              if (error) {
                failure(error);
                return;
              }
              success(
                response,
                body
              );
            }
          );
          return;
        }
        failure(
          `Unsupported HTTP method: ${method}`
        );
      } catch (e) {
        failure(e);
      }
    }
  );
}

};
}

/* ============================================================

* 加载原始 Quantumult X 脚本
* ========================================================== */

function loadOriginalScript() {

console.log(
[${SCRIPT_NAME}] 正在加载原始 WeTalk.js
);

$httpClient.get(

{
  url: REMOTE_SCRIPT,
  headers: {
    "User-Agent":
      "Mozilla/5.0 Loon WeTalk",
    "Cache-Control":
      "no-cache"
  },
  timeout: 30000
},
function (
  error,
  response,
  body
) {
  if (error) {
    $notification.post(
      SCRIPT_NAME,
      "脚本加载失败",
      String(error)
    );
    $done();
    return;
  }
  if (!body) {
    $notification.post(
      SCRIPT_NAME,
      "脚本加载失败",
      "GitHub 返回内容为空"
    );
    $done();
    return;
  }
  const status =
    response &&
    (
      response.status ||
      response.statusCode
    );
  if (
    status &&
    status !== 200
  ) {
    $notification.post(
      SCRIPT_NAME,
      "脚本加载失败",
      `HTTP ${status}`
    );
    $done();
    return;
  }
  console.log(
    `[${SCRIPT_NAME}] 原脚本加载成功`
  );
  /*
   * 原 Quantumult X 脚本中使用：
   *
   * $prefs
   * $notify
   * $task.fetch
   *
   * 前面已经提供了 Loon 兼容实现。
   *
   * 直接执行原脚本。
   */
  try {
    eval(body);
  } catch (e) {
    console.log(
      `[${SCRIPT_NAME}] 执行失败`
    );
    console.log(
      String(e)
    );
    $notification.post(
      SCRIPT_NAME,
      "脚本执行失败",
      String(e)
    );
    $done();
  }
}

);
}

/* ============================================================

* 开始执行
* ========================================================== */

loadOriginalScript();
