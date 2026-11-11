# CatPaw 合集 · REXENC 解密与重打包

来源合集：`https://rex.20110827.xyz/api/collections/catpaw.rex`（标题 `𝓒𝓪𝓽𝓟𝓪𝔀`，19 个模块，均为 v2.2.8）
解密服务：`https://rex-decrypt.pages.dev/` → `https://rex-decrypt.jsforbaby.workers.dev/decrypt`
重打包服务：`https://api.rexnow.tv/api/widgets/encrypt`（REX 官方模块加密接口）

## 一、文件结构

```
catpaw-rex-decompiled/
├── decompiled/                 # 19 个解密后的明文模块源码（.js）
├── repacked/                   # 19 个重新加密打包的模块（.rex，REXENC v2）
├── collection.original.json    # 原始合集清单（URL 指向原服务器）
├── collection.repacked.json    # 重打包合集清单（URL 指向 ./repacked/）
├── manifest.json               # 模块清单：id / 标题 / 版本 / 体积 / SHA-256 前 16 位
└── README.md
```

## 二、模块清单

| # | 模块 ID | 名称 | 作者 | 明文 JS | 重打包 .rex |
|---|---------|------|------|--------:|-----------:|
| 1 | catpaw.drive.accounts | 猫 · 通用配置 | balge | 151.9 KB | 341.6 KB |
| 2 | catpaw.muou | 猫 · 木偶 | VLE | 491.4 KB | 1274.9 KB |
| 3 | catpaw.huajuan | 猫 · 花卷 | VLE | 499.1 KB | 1269.2 KB |
| 4 | catpaw.zhizhen | 猫 · 至臻 | VLE | 490.9 KB | 1255.4 KB |
| 5 | catpaw.woniu | 猫 · 蜗牛 | Operit | 507.5 KB | 1320.5 KB |
| 6 | catpaw.tgsou | 猫 · TG搜 | VLE | 499.4 KB | 1284.3 KB |
| 7 | catpaw.tg-channels | 猫 · TG 频道 | VLE | 508.1 KB | 1299.4 KB |
| 8 | catpaw.wogg | 猫 · 玩偶 | VLE | 495.3 KB | 1288.7 KB |
| 9 | catpaw.labi | 猫 · 蜡笔 | VLE | 510.8 KB | 1302.6 KB |
| 10 | catpaw.shandian | 猫 · 闪电 | VLE | 506.0 KB | 1303.7 KB |
| 11 | catpaw.duoduo | 猫 · 多多 | VLE | 510.1 KB | 1308.7 KB |
| 12 | catpaw.ouge | 猫 · 欧哥 | VLE | 510.0 KB | 1309.6 KB |
| 13 | catpaw.huban | 猫 · 虎斑 | VLE | 507.7 KB | 1304.8 KB |
| 14 | catpaw.xiaoban | 猫 · 小斑 | VLE | 506.7 KB | 1299.9 KB |
| 15 | forward.quanpan.rex | 猫 · 全盘搜索 | balge | 478.9 KB | 1244.2 KB |
| 16 | catpaw.miniyingshi | 猫 · 迷你影视 | balge | 598.3 KB | 1676.2 KB |
| 17 | catpaw.seedhub | 猫 · SeedHub | balge | 754.2 KB | 2247.1 KB |
| 18 | catpaw.cyndog | 猫 · 次元狗 | balge | 737.6 KB | 2175.9 KB |
| 19 | catpaw.zhinan4k | 猫 · 4K指南 | balge | 731.1 KB | 2161.5 KB |

合计：明文 9.76 MB，重打包 26.04 MB。

## 三、REXENC 格式与解密过程

模块文件为纯文本三段式：

```
REXENC
{"v":2,"alg":"A256GCM","mkv":"rex-1","kb":"<base64>","iv":"<base64>"}
<base64 密文>
```

- `iv`：12 字节 AES-GCM 随机 IV
- `kb`：60 字节的被包裹数据密钥（由服务端主密钥解包，本地无密钥无法解密）
- 密文体：AES-256-GCM 密文 + 16 字节认证标签

因为数据密钥由服务端包裹，解密必须走 `rex-decrypt` 服务：

```bash
# 传 URL
curl -X POST https://rex-decrypt.jsforbaby.workers.dev/decrypt \
  -H 'content-type: application/json' \
  -d '{"url":"https://rex.20110827.xyz/api/modules/<uuid>/raw"}'

# 传文件内容（整段 REXENC 文本）
curl -X POST https://rex-decrypt.jsforbaby.workers.dev/decrypt \
  -H 'content-type: application/json' \
  -d '{"content":"REXENC\n{...}\n..."}'
```

返回 `{"plaintext": "..."}`。注意：传合集 URL 会返回 400 和 `widgets` 列表，需要逐个模块解密。

## 四、重打包说明

把解密后的 `.js` 原文直接 `POST` 给官方加密接口（`Content-Type: text/plain`），服务端会重新 **混淆 + 加密**：

```bash
curl -X POST https://api.rexnow.tv/api/widgets/encrypt \
  -H 'Content-Type: text/plain; charset=utf-8' \
  --data-binary @decompiled/catpaw.muou.js \
  -o repacked/catpaw.muou.rex
```

接口从源码顶部的 `var WidgetMetadata = {...}` 中读取 `id / title / version / requiredVersion / author`，因此重打包后元数据与原版一致。**体积约为明文的 2.5~3 倍**，这是服务端混淆（字符串数组化、控制流平坦化）造成的，属于正常现象；单模块上限 4 MiB（源码），重打包后均未超限。

已校验：19 个 `.rex` 全部为合法 REXENC v2 结构（magic、JSON 头、AES-256-GCM 参数、IV 12B、包裹密钥 60B、密文可完整 base64 解码）。

## 五、使用方式

1. **直接用明文**：REX 类客户端一般同时支持 `.js` 与 `.rex`，可直接导入 `decompiled/*.js` 调试或二次开发。
2. **安装重打包版**：把 `repacked/*.rex` 放到自己的 HTTP 服务（需允许跨域），再把 `collection.repacked.json` 里的 `./repacked/xxx.rex` 替换成实际地址，导入该合集即可。
3. **只装合集**：直接导入 `collection.original.json` 则仍指向原服务器，等同原版合集。

## 六、注意事项

- 源码版权归各模块作者（VLE / balge / Operit）所有，解密结果仅建议用于本地学习、调试与个人备份，**请勿二次分发或商用**。
- 模块内可能包含作者内置的共享网盘账号、Cookie 或接口凭据，属敏感信息，勿公开张贴。
- 重新加密后的模块与原版行为一致（未修改任何逻辑），仅混淆策略不同，因此体积更大、首次加载解析稍慢。
