# Step 4 Progress Report

目的：記錄 Step 4（部署流程校準 / Netlify）目前進度。
說明本地驗證前置套件安裝結果與後續工作項。

## 目前進度
- 已建立 `package.json` 與 `package-lock.json`。
- 已初始化本地 Git repository，預設 branch 為 `main`，並已設定 GitHub remote。
- 已安裝本地驗證第一批核心套件：`astro`、`typescript`、`@types/node`、`@astrojs/check`。
- 已確認可在專案目錄以 npm 識別這些依賴。
- 已補齊 Astro 最小執行骨架：`astro.config.mjs`、`tsconfig.json`、最小 layout/pages、npm scripts。
- 已完成 `astro check` 與 `astro build` 本地驗證。
- 已完成 `netlify.toml` 與本地 production / preview 驗證流程校準。
- 已完成 `/admin` 實流程驗證（Draft -> In Review -> PR -> Deploy Preview）。
- 已完成 PR #5 合併與 production 行為驗證（draft 路由在 production 為 404）。

## 安裝結果
- `astro@5.18.0`
- `typescript@5.9.3`
- `@types/node@25.3.2`
- `@astrojs/check@0.9.6`

## 安裝限制與處理方式
- 使用者全域 npm cache（`~/.npm/_cacache`）存在權限/殘留檔衝突。
- 本次以專案內 cache 方式完成安裝：`npm install --cache ./.npm-cache ...`
- 目前已可繼續進行 Step 4 的本地部署流程校準。

## 尚未完成項目
- 尚未安裝 sitemap / RSS / Atom 相關套件。
- 尚未完成 Step 5（安全與 Runbook 定稿）文件更新。

## 本地驗證結果
- `ASTRO_TELEMETRY_DISABLED=1 npm run check`：通過（0 errors）。
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`：通過。
- `npm run validate:local:production`：通過。
- `npm run validate:local:preview`：通過。
- Production build 僅輸出公開頁面；目前唯一文章為 `draft: true`，因此未生成文章詳細頁，符合規範。
- 實測發現 `slug` 為 Astro Content Collections 保留欄位，需以 `entry.slug` 取用，不可放入 `data` schema 驗證。

## 下一步
- 進入 Step 5：完成安全策略與 runbook 定稿。
- 規劃 sitemap / RSS / Atom 套件安裝與整合時點。
- 依需求新增 CI 自動驗證與 branch protection 落地設定。

## 平台層驗證進展（本輪）
- Deploy Preview：已驗證通過。
- Production deploy：已驗證通過。
- Identity / Git Gateway：已啟用並可支持 Decap 送審產生 PR。
- `/admin` 流程：已完成驗證（PR #5）。
- 結論：Step 4 已完成，可進入 Step 5。
