# Step 2 Audit Report

目的：記錄 Step 2（核心設定檔骨架落地）結果。
提供設定檔落地清單、審核結果與後續行動。

## 審核範圍
- `src/content.config.ts`
- `public/admin/config.yml`
- `netlify.toml`
- `public/admin/index.html`
- `public/robots.txt`
- `public/llms.txt`

## 落地內容
- 建立 Astro Content Collections `posts` schema，含 slug、draft、Cloudinary URL、日期與 alt 驗證。
- 建立 Decap config：`backend: git-gateway`、`publish_mode: editorial_workflow`、Cloudinary media library、posts 欄位對映。
- 建立 Netlify build/context 骨架（production / deploy-preview / branch-deploy）與 `/admin/*` 安全 header。
- 建立 `/admin` 入口 HTML，載入 Decap CMS 與 Netlify Identity widget。
- 建立 `robots.txt`、`llms.txt` 固定檔案方案。

## 審核檢查結果
- [x] Decap backend 使用 `git-gateway`
- [x] `publish_mode: editorial_workflow` 已設定
- [x] posts collection 與 schema 欄位對齊
- [x] `llms.txt`、`robots.txt` 入口可用

## 注意事項
- `site_url`、`display_url` 與公開入口網域已固定為 `https://leechingfon.netlify.app`。
- Cloudinary `cloud_name`、`api_key` 需改為實際值（敏感值請放安全管道管理）。
- Deploy Preview noindex 以 `netlify.toml` context 環境變數提供，後續需在實作層接入。

## 後續行動
- 進入 Step 3：內容模型驗證流程。
- 建議建立 `9006_STEP3_AUDIT_REPORT.md` 作為下一階段審核紀錄。
