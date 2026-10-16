//2024/03/10
/*
App: 读不舍手（iOS · App Store id1662413517 · 开发者 Chengdu Jinlin Software）
原版: Quantumult X — https://github.com/AlookB/qx/blob/main/dbss.js

Loon 配置（加入配置文件的 [Script] 与 [MITM] 段）：

[Script]
http-response ^https?:\/\/api\.revenuecat\.com\/v1\/receipts script-path=https://raw.githubusercontent.com/AlookB/qx/main/dbss_Loon.js, tag=读不舍手解锁, requires-body=true, timeout=10

[MITM]
hostname = %APPEND% api.revenuecat.com

说明：
1. script-path 换成你自己的脚本地址（本地文件或远程链接均可）。
2. requires-body=true 必须保留，否则脚本读不到 $response.body。
3. Loon 3.5.1(983) 及以上也可使用新版 Script 语法：
   response if ${url} ~= /^https?:\/\/api\.revenuecat\.com\/v1\/receipts/ then script("dbss_Loon.js") with tag="读不舍手解锁", requires_body=true
4. 使用方法：安装并开启 MitM 证书信任后，打开 App 进入「我的-会员」
   （或点一次恢复购买）触发一次会员校验，即可看到会员已生效。

—— 相对 QX 原版的改动（仅平台配置，脚本逻辑零改动）——
QX 的 $response.body 读取与 $done({body}) 回写在 Loon 中用法完全一致，
无需适配；仅将 [rewrite_local]/[mitm] 配置改写为 Loon [Script]/[MITM] 语法，
并显式声明 requires-body=true。响应体替换内容与原版完全一致。
*/

var objc = JSON.parse($response.body);

objc = {
  "request_date_ms": 1710065048540,
  "request_date": "2024-03-10T10:04:08Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-01-07T02:26:07Z",
    "original_application_version": "1.0",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.valo.reader.vip2.year": {
        "original_purchase_date": "2024-01-07T02:27:16Z",
        "expires_date": "2099-09-30T11:04:03Z",
        "is_sandbox": true,
        "refunded_at": null,
        "store_transaction_id": "2000000544649818",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2024-03-10T10:04:03Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "com.valo.reader.vip2.year": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-03-10T10:04:03Z",
        "product_identifier": "com.valo.reader.vip2.year",
        "expires_date": "2099-09-30T11:04:03Z"
      }
    },
    "original_purchase_date": "2024-01-07T02:27:16Z",
    "original_app_user_id": "$RCAnonymousID:cb1253c7edc045bb80d88cc8b45b37ec",
    "last_seen": "2024-03-10T01:01:04Z"
  }
};

$done({ body: JSON.stringify(objc) });
