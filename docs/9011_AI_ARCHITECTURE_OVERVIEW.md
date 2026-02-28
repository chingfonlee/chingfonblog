# AI Architecture Overview

目的：提供其他 AI 代理快速理解本專案設計的單一入口。
範圍：整理架構、流程、約束、驗證與文件索引。

## 系統邊界與目標
- 以 Astro 產生靜態 HTML，優先內容可讀與可索引。
- 以 Decap CMS 提供內容編輯，採 PR 審核式發布。
- 以 Netlify 提供部署、Identity、Git Gateway。
- 以 Cloudinary URL 管理內容圖片，避免內容圖片進 repo。

## 核心技術架構
- SSG：Astro（`src/pages/` + Content Collections）。
- 內容模型：`src/content.config.ts` 定義 posts schema。
- CMS：`public/admin/index.html` + `public/admin/config.yml`。
- 平台：`netlify.toml` 定義 production / preview / branch contexts。
- AI 探索入口：`public/robots.txt`、`public/llms.txt`。

## 內容與發布流程
1. 編輯者登入 `/admin`。
2. 建立或更新文章（Draft）。
3. 送到 In Review 產生 GitHub PR。
4. CI 執行 `npm ci` + `npm run validate:local`。
5. 審核通過後合併 `main`。
6. Netlify 觸發 production deploy。

## 不可違反的規範
- `publish_mode: editorial_workflow` 必須存在。
- Git Gateway 啟用順序：Identity -> Git Gateway。
- posts 由 Astro Content Collections + schema 管理。
- 內容圖片只能是 Cloudinary URL。
- `public/assets/` 只存固定資產（logo/favicon/UI）。

## 環境行為差異
- Preview：可看到 draft，且 `X-Robots-Tag: noindex, nofollow`。
- Production：draft 不可見（文章路由應為 404）。
- 正式網域：`https://leechingfon.netlify.app`。

## 品質閘門與保護
- GitHub Actions workflow：`.github/workflows/ci-validate-local.yml`
- 必過檢查：`validate-local`
- `main` branch protection 啟用，PR + review + required checks 生效。

## 快速定位索引
- 產品需求：`docs/1001_PRD_AI_Friendly_Blog.md`
- Repo 契約：`docs/2001_REPO_CONTRACT.md`
- 內容模型：`docs/2002_CONTENT_MODEL_SPEC.md`
- CMS 契約：`docs/3001_DECAP_CONTRACT.md`
- 部署手冊：`docs/4001_NETLIFY_PLAYBOOK.md`
- CI Gate：`docs/4003_CI_QUALITY_GATES.md`
- 安全規範：`docs/5001_SECURITY_RULES.md`
- branch protection：`docs/5003_GITHUB_BRANCH_PROTECTION_PLAYBOOK.md`
- 故障排查：`docs/6001_RUNBOOK_TROUBLESHOOTING.md`
- 執行計畫：`docs/9001_EXECUTION_PLAN.md`
- 變更追蹤：`docs/9004_PROJECT_CHANGELOG.md`
