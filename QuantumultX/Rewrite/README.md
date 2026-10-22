# Loon 插件 → QuantumultX 配置转换

源目录：<https://github.com/pangmf/Rules/tree/master/Loon/Plugin>（master 分支，共 9 个 `.lpx`）
转换时间：2026-10-21

## 文件对照

| 原文件 | QX 配置 | 规则数 | 说明 |
|---|---|---|---|
| `CADReader.lpx` | `CADReader.conf` | 1 | 请求体解密，解锁会员 |
| `CamScanner.lpx` | `CamScanner.conf` | 1 | 响应体修改，解锁黄金会员 |
| `dbss.lpx` | `dbss.conf` | 1 | 响应体修改（RevenueCat 回执） |
| `mgtv.lpx` | `mgtv.conf` | 1 | 请求体修改，芒果 TV 会员 |
| `zeekr.lpx` | `zeekr.conf` | 1 | 抓 Token + 注释掉的定时签到 |
| `wps.lpx` | `wps.conf` | 1 | 抓 Cookie + 注释掉的定时签到 |
| `PingMe&WeTalk.lpx` | `PingMe&WeTalk.conf` | 2 | 两个 App 抓包 + 注释掉的 cron |
| `Google-Redirect.lpx` | `Google-Redirect.conf` | 18 | 各区域域名 302 到 google.com |
| `Cookie.lpx` | `Cookie.conf` | 9  | 合集 |
| — | `All-In-One.conf` | 26 | 上面 8 个文件的合并版，含 45 个 MITM 域名 |

## 语法映射

| Loon | QuantumultX |
|---|---|
| `[Script]` + `http-request` + `requires-body=true` | `url script-request-body <js>` |
| `[Script]` + `http-request` + `requires-body=false/0` | `url script-request-header <js>` |
| `[Script]` + `http-response` + `requires-body=true` | `url script-response-body <js>` |
| `[Script]` + `http-response` + `requires-body=false` | `url script-response-header <js>` |
| `[Rewrite]` 的 `<regex> <target> 302` | `<regex> url 302 <target>` |
| `[MITM]` 的 `hostname = %APPEND% ...` | 原样保留（QX 同样支持 `%APPEND%`） |
| `[Argument]` 的 switch 开关 | **无对应机制**，改为注释行，用不到就不启用 |

## 使用方法

**方式一：整份引用（推荐）**

把 `All-In-One.conf` 放到可访问的地址（或你自己的 Git 仓库），在 QuantumultX：

```
设置 → 重写 → 引用 → 添加资源 → 填入该文件的 raw 地址
```

**方式二：单插件引用**

同上，只引用需要的单个 `.conf`。

**方式三：手动并入主配置**

把文件里的 `[rewrite_local]` 与 `[mitm]` 两段内容，分别追加到主配置同名段落末尾。

> 定时任务（cron）无法放进远程重写资源，必须写进主配置的 `[task_local]` 段。相关行已在各文件中以注释形式给出，取消注释并移到主配置即可。


## 验证结果

- 26 条重写规则全部通过结构校验：`url` 分隔符完整、动作关键字合法、正则可正常编译
- 所有 `[mitm]` hostname 已归并去重，共 45 个域名
- 与 9 个源文件逐条比对，规则数量与匹配路径一致

## 风险提示

- **脚本兼容性**：Loon 与 QX 都遵循 Surge 脚本 API（`$request` / `$response` / `$done` / `$notify`），绝大多数脚本可跨客户端运行。但若某个脚本调用了 Loon 独有接口（如 `$httpClient` 的特定参数、`$environment` 等），在 QX 里会失效，需要另找 QX 版脚本。
- **MITM 隐私**：启用后相关域名的 HTTPS 流量会在本机解密。请只启用你确实需要的插件。
- 所有脚本仍指向原作者的远程地址，脚本内容更新不受本目录控制。

## 附：辅助脚本

- `../fetch_loon.sh` — 重新拉取上游 9 个 `.lpx`（上游更新后执行）
- `../merge_qx.py` — 重新生成 `All-In-One.conf`
- `../validate_qx.py` — 校验所有 `.conf` 的语法结构
- `../src_loon/` — 上游原始 `.lpx` 文件，供比对
