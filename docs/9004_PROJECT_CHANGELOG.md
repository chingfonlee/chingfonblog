# Project Changelog

目的：集中記錄專案文件與設定變更，作為查詢與追溯依據。
規則：每次完成修改後，需新增一筆記錄（不得覆寫舊記錄）。

## 查詢方式
- 依 `變更ID` 查詢單次變更。
- 依 `日期` 或 `階段` 查詢里程碑進度。
- 依 `影響檔案` 快速定位關聯規範。

## 欄位定義
- `變更ID`：唯一識別（格式：`CHG-YYYYMMDD-XX`）。
- `日期`：變更完成日期（YYYY-MM-DD）。
- `階段`：對應 `9001` 的 Step 或臨時任務。
- `摘要`：本次變更重點。
- `影響檔案`：主要修改檔案清單。
- `備註`：審核結果、後續動作或限制。

## 變更紀錄
### CHG-20260226-01
- 日期：2026-02-26
- 階段：初始化
- 摘要：建立專案資料夾結構與 docs 骨架、必要非 Markdown 檔案。
- 影響檔案：`docs/1001~6001`、`src/content.config.ts`、`public/admin/*`、`netlify.toml`、`public/robots.txt`、`public/llms.txt`
- 備註：完成初始 scaffold。

### CHG-20260226-02
- 日期：2026-02-26
- 階段：文件補齊
- 摘要：依檔名補齊 2001~6001 技術文件內容。
- 影響檔案：`docs/2001`、`2002`、`2003`、`3001`、`3002`、`4001`、`5001`、`6001`
- 備註：納入 `editorial_workflow`、Cloudinary-only、Identity/Git Gateway 路徑。

### CHG-20260226-03
- 日期：2026-02-26
- 階段：規則治理
- 摘要：新增 `/code` 規則文件並與執行計畫互相引用。
- 影響檔案：`code.md`、`docs/9001_EXECUTION_PLAN.md`
- 備註：建立 `/code` 前置檢查流程。

### CHG-20260226-04
- 日期：2026-02-26
- 階段：文件擴充
- 摘要：新增 SEO/AI、Secrets、CI Gate、權限矩陣、發布回滾、ADR 文件。
- 影響檔案：`docs/2004`、`4002`、`4003`、`5002`、`6002`、`9002`、`code.md`、`docs/9001`
- 備註：擴充 `/code` 必讀清單。

### CHG-20260226-05
- 日期：2026-02-26
- 階段：Step 1
- 摘要：完成文件一致性審核與補差，產出審核報告。
- 影響檔案：`docs/1001`、`2002`、`2004`、`3001`、`3002`、`4003`、`5001`、`6002`、`9001`、`9003`、`code.md`
- 備註：Step 1 狀態改為完成。

### CHG-20260226-06
- 日期：2026-02-26
- 階段：治理補強
- 摘要：新增專案變更查詢紀錄文件，並要求每次修改後同步登錄。
- 影響檔案：`docs/9004_PROJECT_CHANGELOG.md`、`code.md`、`docs/9001_EXECUTION_PLAN.md`
- 備註：後續所有修改需新增 changelog 記錄。

### CHG-20260226-07
- 日期：2026-02-26
- 階段：Step 2
- 摘要：完成核心設定檔骨架落地與 Step 2 審核報告。
- 影響檔案：`src/content.config.ts`、`public/admin/config.yml`、`netlify.toml`、`public/admin/index.html`、`public/robots.txt`、`public/llms.txt`、`docs/9001_EXECUTION_PLAN.md`、`docs/9005_STEP2_AUDIT_REPORT.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：Step 2 狀態改為完成，Step 3 待啟動。

### CHG-20260226-08
- 日期：2026-02-26
- 階段：Step 3
- 摘要：建立範例文章並完成內容模型靜態驗證與 Step 3 審核報告。
- 影響檔案：`src/content/posts/2026-02-26-astro-decap-netlify-stack.md`、`docs/9001_EXECUTION_PLAN.md`、`docs/9006_STEP3_AUDIT_REPORT.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：因缺少 Astro 專案 manifest，本階段採靜態驗證；Step 4 待啟動。

### CHG-20260227-01
- 日期：2026-02-27
- 階段：Step 4
- 摘要：完成本地驗證第一批核心套件安裝，Step 4 轉為進行中。
- 影響檔案：`package.json`、`package-lock.json`、`.npm-cache/`、`docs/9001_EXECUTION_PLAN.md`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：安裝採專案內 npm cache 以避開 `~/.npm` 權限衝突；後續繼續做 Netlify 流程校準。

### CHG-20260227-02
- 日期：2026-02-27
- 階段：Step 4
- 摘要：補齊 Astro 最小執行骨架並通過 `astro check`、`astro build`。
- 影響檔案：`package.json`、`.gitignore`、`astro.config.mjs`、`tsconfig.json`、`src/layouts/BaseLayout.astro`、`src/pages/index.astro`、`src/pages/posts/index.astro`、`src/pages/posts/[slug].astro`、`src/content.config.ts`、`docs/2002_CONTENT_MODEL_SPEC.md`、`docs/3001_DECAP_CONTRACT.md`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：實測確認 `slug` 為 Astro 保留欄位，取值需用 `entry.slug`；Step 4 仍在進行中，尚未完成 Netlify 流程驗證。

### CHG-20260227-03
- 日期：2026-02-27
- 階段：Step 4
- 摘要：完成 `netlify.toml` 與本地 production / preview 驗證流程校準。
- 影響檔案：`netlify.toml`、`package.json`、`scripts/prepare-netlify.mjs`、`scripts/verify-dist.mjs`、`docs/4001_NETLIFY_PLAYBOOK.md`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9008_STEP4_LOCAL_VALIDATION_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：本地 `validate:local:production` 與 `validate:local:preview` 均通過；平台層 Netlify 驗證尚未完成。

### CHG-20260227-04
- 日期：2026-02-27
- 階段：Step 4
- 摘要：新增 Netlify 後台逐步操作清單，供平台層驗證使用。
- 影響檔案：`docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`、`docs/4001_NETLIFY_PLAYBOOK.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：清單依 Netlify 官方文件與目前專案流程整理。

### CHG-20260227-05
- 日期：2026-02-27
- 階段：Step 4
- 摘要：初始化本地 Git repository、建立 `main` 並設定 GitHub remote，準備第一次 commit。
- 影響檔案：`.git/`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：remote 設為 `https://github.com/chingfonlee/chingfonblog.git`。

### CHG-20260227-06
- 日期：2026-02-27
- 階段：Step 4
- 摘要：建立 Deploy Preview 測試分支並補充測試 PR 執行紀錄。
- 影響檔案：`docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：測試分支為 `test/step4-deploy-preview`，待 push 後建立 PR。

### CHG-20260227-07
- 日期：2026-02-27
- 階段：Step 4
- 摘要：將站點正式網域固定為 `https://leechingfon.netlify.app` 並更新相關設定與內容範例。
- 影響檔案：`astro.config.mjs`、`public/admin/config.yml`、`public/robots.txt`、`public/llms.txt`、`src/content/posts/2026-02-26-astro-decap-netlify-stack.md`、`docs/9005_STEP2_AUDIT_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：移除 `example.com` 占位值，改為固定 Netlify 網域。

### CHG-20260227-08
- 日期：2026-02-27
- 階段：Step 4
- 摘要：完成 Deploy Preview 與 Production 平台層驗證（連結可達、預期行為正確）。
- 影響檔案：`docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：Step 4 尚待 Identity / Git Gateway 與 `/admin` 流程驗證。

### CHG-20260227-09
- 日期：2026-02-27
- 階段：Step 4
- 摘要：完成 `/admin` Draft -> Review -> PR 驗證（PR #5）並關閉 Step 4。
- 影響檔案：`docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`、`docs/9001_EXECUTION_PLAN.md`、`docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：PR #5 已合併至 `main`；Deploy Preview 與 Production 行為符合規範（draft 僅 preview 可見）。

### CHG-20260227-10
- 日期：2026-02-27
- 階段：Step 5
- 摘要：完成安全與 Runbook 定稿，補齊權限、事件處理與故障排查規範。
- 影響檔案：`docs/5001_SECURITY_RULES.md`、`docs/5002_ACCESS_CONTROL_MATRIX.md`、`docs/6001_RUNBOOK_TROUBLESHOOTING.md`、`docs/6002_RELEASE_ROLLBACK_CHECKLIST.md`、`docs/9001_EXECUTION_PLAN.md`、`docs/9009_STEP5_SECURITY_RUNBOOK_REPORT.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：Step 5 狀態改為完成；計畫文件 Step 1~5 全數完成。

### CHG-20260227-11
- 日期：2026-02-27
- 階段：Release
- 摘要：新增 Step 5 完成之 GitHub Release note 草稿文件。
- 影響檔案：`docs/9010_RELEASE_NOTE_STEP5_DRAFT.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：可直接複製草稿內容建立 GitHub Draft Release。

### CHG-20260227-12
- 日期：2026-02-27
- 階段：Step 6
- 摘要：新增 GitHub Actions CI，自動執行 `npm ci` 與 `npm run validate:local`。
- 影響檔案：`.github/workflows/ci-validate-local.yml`、`docs/4003_CI_QUALITY_GATES.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：觸發條件為 `push main`、`pull_request -> main`、`workflow_dispatch`。

### CHG-20260227-13
- 日期：2026-02-27
- 階段：Step 6
- 摘要：新增 GitHub branch protection 後台操作清單，並將 Step 6 納入執行計畫。
- 影響檔案：`docs/5003_GITHUB_BRANCH_PROTECTION_PLAYBOOK.md`、`docs/9001_EXECUTION_PLAN.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：下一步為依 playbook 完成 `main` 保護規則實際設定與阻擋測試。

### CHG-20260228-01
- 日期：2026-02-28
- 階段：Documentation
- 摘要：新增 GitHub 首頁導向與 AI 架構總覽，讓外部 AI 可快速理解專案設計。
- 影響檔案：`README.md`、`docs/9011_AI_ARCHITECTURE_OVERVIEW.md`、`code.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：提供架構邊界、流程、約束、驗證指令與文件閱讀順序。

### CHG-20260228-02
- 日期：2026-02-28
- 階段：Design Review P0
- 摘要：依設計審查先行執行命名一致、文字對比提升、Hero 主次強化與本地字體目錄準備。
- 影響檔案：`index.html`、`public/assets/fonts/.gitkeep`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：`gray` 提升為 `#6F6A65`；Hero 新增 value proposition 與 CTA；字體改為 `@font-face` 本地優先策略。

### CHG-20260228-03
- 日期：2026-02-28
- 階段：Design Review P0
- 摘要：導入 Swei Spring 字體（CJK TC）並更新品牌頁字體設定為本地自託管。
- 影響檔案：`index.html`、`public/assets/fonts/SweiSpringCJKtc-Regular.woff2`、`public/assets/fonts/SweiSpringCJKtc-SemiBold.woff2`、`public/assets/fonts/SIL_Open_Font_License_1.1.txt`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：字體來源為 `max32002/swei-spring`（OFL 1.1），目前使用 400 與 600 字重。

### CHG-20260228-04
- 日期：2026-02-28
- 階段：Design Integration
- 摘要：將 `index.html` 品牌視覺風格整合到 Astro 正式頁面與版型。
- 影響檔案：`src/layouts/BaseLayout.astro`、`src/pages/index.astro`、`src/pages/posts/index.astro`、`src/pages/posts/[slug].astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：套用同色彩與質感背景、Swei Spring 字體、Hero/CTA 與卡片風格，確保部署站風格一致。

### CHG-20260301-01
- 日期：2026-03-01
- 階段：Design System Transplant
- 摘要：完成設計系統移植第一輪，新增 category schema、首頁 IA 重構與 posts query 篩選。
- 影響檔案：`docs/9012_DESIGN_TRANSPLANT_PLAN.md`、`src/content.config.ts`、`src/layouts/BaseLayout.astro`、`src/pages/index.astro`、`src/pages/posts/index.astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：維持 Decap/CI/Netlify 流程不變；`?category=` 採 static + client-side filtering 實作。

### CHG-20260301-02
- 日期：2026-03-01
- 階段：Decap Alignment
- 摘要：調整 Decap CMS 後台欄位，對齊 posts schema 的 category enum 與 featured/tag 規則。
- 影響檔案：`public/admin/config.yml`、`public/admin/index.html`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：保留 `publish_mode: editorial_workflow` 與 `git-gateway`；新增欄位提示以降低編輯錯誤。

### CHG-20260301-05
- 日期：2026-03-01
- 階段：Decap Cloudinary Setup
- 摘要：填入 Cloudinary cloud name、api key 與預設上傳資料夾。
- 影響檔案：`public/admin/config.yml`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：僅使用前端可公開參數；`api_secret` 不入版控。

### CHG-20260301-06
- 日期：2026-03-01
- 階段：Cover Fallback
- 摘要：導入半自動預設封面：Decap 新文章預設 coverImage/coverImageAlt，前台列表頁缺圖時自動 fallback。
- 影響檔案：`public/admin/config.yml`、`src/pages/index.astro`、`src/pages/posts/index.astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：採用 Cloudinary sample 圖作為預設，後續可替換成品牌專用封面 URL。

### CHG-20260301-03
- 日期：2026-03-01
- 階段：Structural Redesign
- 摘要：新增 `projects` 與 `tools` Content Collections，並重構首頁為三大區塊架構。更新 Decap CMS 與導覽列。
- 影響檔案：`src/content.config.ts`、`src/pages/projects/index.astro`、`src/pages/tools/index.astro`、`src/pages/index.astro`、`src/layouts/BaseLayout.astro`、`public/admin/config.yml`、`docs/2002_CONTENT_MODEL_SPEC.md`
- 備註：配合設計要求將單一文章流改為以專案/工具並重的展示架構。

### CHG-20260301-04
- 日期：2026-03-01
- 階段：UI Layout Redesign 
- 摘要：更新 Blog 與首頁的文章列表，採用三欄式 (3-column grid) 圖片卡片設計，並支援絕對定位標籤 (Featured/Category)。
- 影響檔案：`src/layouts/BaseLayout.astro`、`src/pages/index.astro`、`src/pages/posts/index.astro`
- 備註：為符合參考設計的視覺呈現所作的排版與 CSS 重構。

### CHG-20260301-07
- 日期：2026-03-01
- 階段：Content Cleanup
- 摘要：移除非本人內容的專案條目 `NeatToolkit`。
- 影響檔案：`src/content/projects/neat-toolkit.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：依使用者要求刪除 `2026-03-01` 的該筆 projects 內容。

### CHG-20260301-08
- 日期：2026-03-01
- 階段：Content Cleanup
- 摘要：移除非本人內容的工具條目 `Microsoft for Startups：免費 Azure 額度申請攻略`。
- 影響檔案：`src/content/tools/azure-credits.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：依使用者要求刪除 `2026-03-01` 的該筆 tools 內容。

### CHG-20260301-09
- 日期：2026-03-01
- 階段：Documentation
- 摘要：新增 Anthropic Agent Skills 參考指南，記錄 Skills 系統的使用方式、檔案結構、安裝步驟與自訂 Skill 範例。
- 影響檔案：`docs/9013_ANTHROPIC_SKILLS_REFERENCE.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：來源為 `https://github.com/anthropics/skills`，供未來專案導入 Skill 時參考。

### CHG-20260301-10
- 日期：2026-03-01
- 階段：Tooling
- 摘要：下載官方 Anthropic Skills 至專案本機 `skills/` 資料夾。
- 影響檔案：`skills/*`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：依據 `docs/9013_ANTHROPIC_SKILLS_REFERENCE.md` 的指引，將官方開源的 Skills（如 docx, examples 等）匯入專案，以備後續自動化使用。

### CHG-20260301-11
- 日期：2026-03-01
- 階段：IA (Information Architecture) Refactor
- 摘要：優化了首頁 (`index.astro`) 與文章頁 (`posts/index.astro`) 的資訊架構，對齊單一聚焦點的置中排版。
- 影響檔案：`src/pages/index.astro`、`src/pages/posts/index.astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：純粹搬移 HTML 結構節點 (Node)，首頁的 Navigation 轉換為置中篩選列型態、精選文章卡片移除干擾標題；無新增文案、無修改視覺風格。

### CHG-20260301-09
- 日期：2026-03-01
- 階段：Homepage Copy Update
- 摘要：更新首頁主文案與分類標籤文案。
- 影響檔案：`src/pages/index.astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：依使用者手動調整內容同步記錄。

### CHG-20260302-01
- 日期：2026-03-02
- 階段：Code Refactor
- 摘要：將分散於多個頁面的分類與 UI 文案抽離到 `src/constants/siteText.ts`，統一由頁面 import 使用。
- 影響檔案：`src/constants/siteText.ts`、`src/pages/index.astro`、`src/pages/posts/index.astro`、`src/pages/projects/index.astro`、`src/pages/tools/index.astro`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：同步收斂 posts 篩選腳本中的分類字串，降低後續維護時的多處修改風險。

### CHG-20260302-02
- 日期：2026-03-02
- 階段：SSOT Alignment
- 摘要：建立分類常數單一來源 `src/constants/postCategories.ts`，並讓 content schema 與文件規範對齊；CMS 設定檔加入 SSOT 註記。
- 影響檔案：`src/constants/postCategories.ts`、`src/constants/siteText.ts`、`src/content.config.ts`、`public/admin/config.yml`、`docs/2002_CONTENT_MODEL_SPEC.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：`config.yml` 因格式限制無法直接 import TS，維持手動同步並以註解與規格文件強化治理。

### CHG-20260309-01
- 日期：2026-03-09
- 階段：Tooling / Content Collections
- 摘要：固定 WSL 預設 Node 20，並降低空 `projects/tools` collection 的建置提示噪音（不影響前台顯示行為）。
- 影響檔案：`~/.bashrc`、`src/content.config.ts`、`src/pages/index.astro`、`src/pages/projects/index.astro`、`src/pages/tools/index.astro`、`src/content/projects/placeholder.md`、`src/content/tools/placeholder.md`、`docs/9014_WSL_NODE20_COLLECTION_NOISE_PROGRESS.md`、`docs/9004_PROJECT_CHANGELOG.md`
- 備註：`npm run validate:local` 已通過，`projects/tools` 空集合提示已消失。
