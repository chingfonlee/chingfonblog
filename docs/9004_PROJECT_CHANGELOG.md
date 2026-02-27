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
