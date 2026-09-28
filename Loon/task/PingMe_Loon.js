/*
 * PingMe - Loon Compatibility Loader
 *
 * 用途：
 * 将原 Quantumult X 版 PingMe.js 通过兼容层运行在 Loon。
 *
 * 原脚本：
 * https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe.js
 */

const REMOTE_SCRIPT =
  "https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe.js";

const SCRIPT_NAME = "PingMe-Loon";

function log(msg) {
  console.log(`[${SCRIPT_NAME}] ${msg}`);
}

/* ============================================================
 * QX $prefs → Loon $persistentStore
 * ========================================================== */

if (typeof $prefs === "undefined") {
  var $prefs = {
    valueForKey: function (key) {
      return $persistentStore.read(key);
    },

    setValueForKey: function (value, key) {
      return $persistentStore.write(value, key);
    }
  };
}

/* ============================================================
 * QX $notify → Loon $notification
 * ========================================================== */

if (typeof $notify === "undefined") {
  var $notify = function (title, subtitle, body) {

    try {
      $notification.post(
        title || SCRIPT_NAME,
        subtitle || "",
        body || ""
      );
    } catch (e) {
      console.log(
        `[${SCRIPT_NAME}] Notification error: ${String(e)}`
      );
    }
  };
}

/* ============================================================
 * QX $task.fetch → Loon $httpClient
 *
 * QX:
 *
 * $task.fetch({
 *   url,
 *   method,
 *   headers
 * }).then(...)
 *
 * Loon:
 *
 * $httpClient.get(...)
 *
 * 这里转换成 Promise，让原脚本无需修改。
 * ========================================================== */

if (typeof $task === "undefined") {

  var $task = {

    fetch: function (options) {

      return new Promise(function (resolve, reject) {

        if (!options) {
          reject({
            error: "Missing request options"
          });
          return;
        }

        var url = options.url || "";
        var method = String(options.method || "GET").toUpperCase();
        var headers = options.headers || {};

        var requestOptions = {
          url: url,
          headers: headers,
          timeout: 30000
        };

        function success(response, body) {

          resolve({
            statusCode: response
              ? (response.status || response.statusCode || 0)
              : 0,

            status: response
              ? (response.status || response.statusCode || 0)
              : 0,

            headers: response
              ? (response.headers || {})
              : {},

            body: body || ""
          });
        }

        function failure(error) {

          reject({
            error: error
              ? String(error)
              : "Request failed"
          });
        }

        try {

          if (method === "GET") {

            $httpClient.get(
              requestOptions,
              function (error, response, body) {

                if (error) {
                  failure(error);
                  return;
                }

                success(response, body);
              }
            );

            return;
          }

          if (method === "POST") {

            $httpClient.post(
              requestOptions,
              function (error, response, body) {

                if (error) {
                  failure(error);
                  return;
                }

                success(response, body);
              }
            );

            return;
          }

          if (method === "PUT") {

            $httpClient.put(
              requestOptions,
              function (error, response, body) {

                if (error) {
                  failure(error);
                  return;
                }

                success(response, body);
              }
            );

            return;
          }

          if (method === "DELETE") {

            $httpClient.delete(
              requestOptions,
              function (error, response, body) {

                if (error) {
                  failure(error);
                  return;
                }

                success(response, body);
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
      });
    }
  };
}

/* ============================================================
 * Loon / QX $done 兼容
 * ========================================================== */

if (typeof $done === "undefined") {

  var $done = function (result) {

    try {

      if (
        typeof result !== "undefined" &&
        result !== null
      ) {
        console.log(
          `[${SCRIPT_NAME}] $done:`,
          JSON.stringify(result)
        );
      }

    } catch (e) {}

  };
}

/* ============================================================
 * 开始加载原始 PingMe.js
 * ========================================================== */

function loadOriginalScript() {

  log("正在加载 PingMe.js");

  $httpClient.get(
    {
      url: REMOTE_SCRIPT,
      headers: {
        "User-Agent":
          "Mozilla/5.0 Loon PingMe Loader",
        "Cache-Control":
          "no-cache"
      },
      timeout: 30000
    },

    function (error, response, body) {

      if (error) {

        $notification.post(
          "PingMe",
          "脚本加载失败",
          String(error)
        );

        $done();
        return;
      }

      if (!body) {

        $notification.post(
          "PingMe",
          "脚本加载失败",
          "GitHub 返回内容为空"
        );

        $done();
        return;
      }

      var status =
        response &&
        (response.status || response.statusCode);

      if (
        status &&
        status !== 200
      ) {

        $notification.post(
          "PingMe",
          "脚本加载失败",
          `HTTP ${status}`
        );

        $done();
        return;
      }

      log(
        `原脚本加载成功，共 ${body.length} 字符`
      );

      /*
       * 原 QX 脚本中存在 GitHub 原文里的
       * 特殊通知字符串。
       *
       * 这里进行兼容清理，避免 Loon 日志出现
       * 不必要的引用标记。
       */

      body = body.replace(
        /[oai_citation:1‡GitHub](https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe.js)个方案依赖 GitHub 在线获取原始 `PingMe.js`。因此每次执行时都会先请求：

```text
https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/PingMe.js
