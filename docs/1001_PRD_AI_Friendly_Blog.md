# PRD：AI Friendly Blog

目的：定義產品目標、範圍與驗收標準。
作為 Astro + Decap + Netlify 的對齊文件。

## 背景與目標
- 以 Astro 建立內容導向 Blog，強調 HTML-first 與語意化結構。
- 使用 Decap CMS 讓非工程角色可在後台編輯，並以 PR 審核發布。
- 以 Netlify 提供 Deploy Preview 與 Production 一致的部署流程。
- 提供 sitemap、RSS/Atom、robots、`/llms.txt`，提升搜尋與 AI 可讀性。

## 使用者角色
- `Reader`：閱讀公開文章與索引內容。
- `Editor`：透過 Decap 建立草稿、送出審核。
- `Reviewer`：審核內容與技術檢查項，核可 PR。
- `Admin`：維護 Netlify Identity、Git Gateway 與安全策略。

## 範圍（In/Out）
- In：
- 以 `src/content/posts/` 為內容來源，使用 Content Collections + schema 驗證。
- Decap backend 採 `git-gateway`，並強制 `publish_mode: editorial_workflow`。
- 後台媒體採 Cloudinary URL；`public/assets/` 僅固定資產。
- Out：
- 不包含會員訂閱、留言系統、付費牆與多語站點。
- 不包含自建 CMS 後端與資料庫。

## 功能需求
- 文章可建立、儲存草稿、送審、產生 PR、合併後上線。
- Draft 內容不得進入 Production 列表與 sitemap/feed。
- 後台選圖需可寫入 Cloudinary URL，且內容圖片不進 repo。
- 站點需提供 `robots.txt`、`llms.txt`、sitemap、RSS/Atom 入口。

## 非功能需求
- 合併前需通過 schema/frontmatter 驗證與 build 檢查。
- `main` 僅允許 PR merge，禁止 direct push。
- Identity 採 Invite only，不開放公開註冊。
- 文件、流程與設定須可追溯，並具回滾機制。

## 里程碑
- M1：文件一致性審核與補差完成（Step 1）。
- M2：核心設定檔骨架落地完成（Step 2）。
- M3：內容模型驗證、部署校準與安全/runbook 定稿（Step 3-5）。

## 驗收標準
- Decap 流程可完成「草稿 -> PR -> 審核 -> 合併 -> 上線」。
- `publish_mode: editorial_workflow` 與 `git-gateway` 已生效。
- Identity/Git Gateway 啟用順序符合：Identity -> Services -> Git Gateway -> Enable。
- 內容圖片皆為 Cloudinary URL，repo 僅保留固定資產圖片。
- Production 可存取 `/robots.txt`、`/llms.txt`、sitemap、RSS/Atom。
