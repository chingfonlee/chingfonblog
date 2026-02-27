# Step 4 Local Validation Report

目的：記錄 Step 4 中 `netlify.toml` 與本地驗證流程校準結果。
聚焦 production / deploy-preview 兩種本地 build 與輸出差異。

## 審核範圍
- `netlify.toml`
- `package.json` scripts
- `scripts/prepare-netlify.mjs`
- `scripts/verify-dist.mjs`
- `astro.config.mjs`
- `src/pages/*`

## 校準內容
- 將 Netlify build command 改為 `npm run build:netlify`。
- 以環境變數控制 `SITE_ENV`、`ENABLE_INDEXING`、`X_ROBOTS_TAG`。
- build 前動態產生 `public/_headers`，避免將 preview/prod 差異硬編碼於單一靜態 headers 設定。
- 建立本地驗證 scripts：
  - `validate:local:production`
  - `validate:local:preview`
  - `validate:local`

## 驗證結果
- `ASTRO_TELEMETRY_DISABLED=1 npm run check`：通過（0 errors / 0 warnings / 0 hints）。
- `npm run validate:local:production`：通過。
- `npm run validate:local:preview`：通過。

## 輸出行為驗證
- Production build：
  - `dist/index.html` 與 `dist/posts/index.html` 存在。
  - draft 文章詳細頁不存在。
  - `dist/_headers` 不含站點級 `noindex`。
- Preview build：
  - draft 文章詳細頁存在。
  - `dist/_headers` 含 `X-Robots-Tag: noindex, nofollow`。
  - `/admin/*` 安全 headers 仍保留。

## 實作發現
- Astro Content Collections 的 `slug` 為保留欄位，實作上需使用 `entry.slug`。
- Astro telemetry 在目前沙箱環境會嘗試寫入使用者偏好目錄，因此本地驗證需加 `ASTRO_TELEMETRY_DISABLED=1`。

## 尚未完成
- 尚未在真實 Netlify 環境驗證 Deploy Preview 觸發。
- 尚未在真實 Netlify 環境驗證 `main` -> Production deploy。
- 尚未驗證 Identity / Git Gateway 在平台上的實際行為。

## 後續行動
- 進入 Netlify 平台層驗證（Deploy Preview / Production / Identity / Git Gateway）。
- 視需求安裝 `@astrojs/sitemap`、`@astrojs/rss`、`netlify-cli`。
