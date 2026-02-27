# Repo Contract

目的：定義 repo 結構、命名規範與變更邊界。
確保 Cloudinary URL 與 repo 固定資產策略一致。

## 目錄結構與責任邊界
- `docs/`：產品與技術規格文件（本合約與流程文件的唯一來源）。
- `src/content/posts/`：文章內容來源（Markdown/MDX），只放文字與 frontmatter。
- `src/content.config.ts`：Astro Content Collections 與 schema 驗證定義。
- `public/admin/`：Decap CMS 管理介面與 `config.yml`。
- `public/assets/`：固定資產專區，只允許 logo、favicon、UI 圖示等可版本控管素材。
- `public/robots.txt`、`public/llms.txt`：機器可讀入口與爬蟲規範。
- `netlify.toml`：Netlify build、contexts、redirects/headers 規範。

## 命名/slug 規則
- docs 檔案命名：`SSII_文件名.md`（例：`2001_REPO_CONTRACT.md`）。
- 文章檔名建議：`yyyy-mm-dd-slug.md` 或 `slug.md`（擇一後全站一致）。
- `slug` 格式：`^[a-z0-9-]+$`，僅小寫英文、數字、連字號。
- 不使用空白、底線、中文 slug；避免與既有 slug 重複。
- 標題可使用中文；slug 作為 URL 與內容唯一識別。

## 圖片策略（Cloudinary vs repo assets）
- 後台（Decap）上傳圖片必須走 Cloudinary，內容只儲存 URL。
- 文章相關圖片（封面、內文插圖、OG 圖）不得提交至 repo。
- `public/assets/` 僅放固定資產，不作為文章媒體庫。
- schema 需驗證圖片欄位為 `https://res.cloudinary.com/...`。
- PR 審查需檢查是否有誤入 repo 的內容圖片。

## 允許/禁止的變更
- 允許：新增文章、更新文件、調整樣式與版型、優化 schema 與驗證訊息。
- 允許：在不破壞相容前提下擴充 frontmatter 欄位。
- 禁止：移除 `publish_mode: editorial_workflow`。
- 禁止：關閉 Content Collections schema 驗證。
- 禁止：改為將後台圖片寫入 repo。
- 禁止：未經審核直接推送 `main` 進行內容發布。

## AI/自動化限制
- AI 產出內容與程式碼需以 PR 形式提交，需人工審核後合併。
- 自動化流程不得繞過分支保護、審核與 CI 檢查。
- AI 不得新增或修改敏感憑證設定（Token、API Key、Identity 設定）。
- AI 產生文章必須符合 schema，且圖片僅可使用 Cloudinary URL。
