# Netlify Playbook

目的：定義 Astro 在 Netlify 的部署流程與環境規範。
明確 Identity 與 Git Gateway 的啟用路徑與驗收方式。

## build & publish 設定（Astro）
- Framework：Astro（SSG）。
- Build command：`npm run build`。
- Publish directory：`dist`。
- Node 版本由專案鎖定（建議 `.nvmrc` 或 Netlify UI 同步）。
- Build 失敗視為阻擋發布，需先修正再重試。

## Deploy Preview（PR）與 Production（main）流程
- PR 開啟或更新：觸發 Deploy Preview。
- 合併至 `main`：觸發 Production deploy。
- 編輯流程以 Decap `editorial_workflow` 產生 PR，與一般開發 PR 同規則。
- 審核以 Deploy Preview 為準，禁止未檢視即合併。

## netlify.toml contexts 規範（production / deploy-preview / branch-deploy）
- `[build]`：定義共用 build command 與 publish 目錄。
- `[context.production]`：正式環境參數（可索引、正式網域）。
- `[context.deploy-preview]`：PR 預覽參數（可加上 noindex header）。
- `[context.branch-deploy]`：非 PR 分支部署用途（測試或 staging）。
- contexts 不得覆蓋掉 schema 驗證或內容檢查步驟。
- 本專案以 build 前腳本產生 `_headers`，處理 preview / production 的索引差異。

## 本地驗證流程
- `npm run validate:local:production`：檢查 production build 與輸出規則。
- `npm run validate:local:preview`：檢查 preview build、draft 可見性與 noindex headers。
- `npm run validate:local`：依序執行 production + preview 驗證。
- 本地驗證需加 `ASTRO_TELEMETRY_DISABLED=1`，避免 Astro telemetry 寫入使用者偏好目錄。

## Identity/Git Gateway 啟用步驟（只列路徑）
- 1. `Project configuration > Identity > Enable Identity`
- 2. `Project configuration > Identity > Registration preferences`（設定 Invite only）
- 3. `Project configuration > Identity > Services > Git Gateway > Enable`

## 驗收步驟（只列清單）
- [ ] `/admin` 可開啟且可登入授權帳號。
- [ ] Decap 建立 Draft 後可送審並產生 PR。
- [ ] PR 產生 Deploy Preview，內容可正常檢視。
- [ ] 合併 `main` 後 Production 成功部署。
- [ ] `/robots.txt`、`/llms.txt`、sitemap、RSS/Atom 可存取。
- 詳細後台操作順序請參考 `docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`。
