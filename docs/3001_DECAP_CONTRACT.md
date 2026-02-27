# Decap Contract

目的：定義 Decap /admin 檔案責任與配置邊界。
採用 git-gateway、publish_mode: editorial_workflow、cloudinary。

## /admin 檔案位置與責任範圍
- `public/admin/index.html`：載入 Decap CMS 管理介面。
- `public/admin/config.yml`：Decap 單一設定檔（backend、collections、media）。
- `/admin` 僅供授權編輯者登入與操作，不作公開導覽入口。
- 任何 CMS 流程改動需同步更新本文件與 `2002_CONTENT_MODEL_SPEC.md`。

## config.yml 關鍵設定（git-gateway + editorial_workflow + cloudinary）
- backend：
  - `name: git-gateway`
  - `branch: main`
- publish：
  - `publish_mode: editorial_workflow`（必要，不可移除）
- media：
  - `media_library.name: cloudinary`
  - 文章圖片欄位只儲存 Cloudinary URL
- collections：
  - `posts` 指向 `src/content/posts`
  - 與 Astro schema 欄位名稱保持一致
  - 新建文章 `draft` 預設值為 `true`

參考最小片段：
```yaml
backend:
  name: git-gateway
  branch: main

publish_mode: editorial_workflow

media_library:
  name: cloudinary

collections:
  - name: posts
    label: Posts
    folder: src/content/posts
    create: true
```

## posts collection 欄位對映
- Decap `title` -> frontmatter `title`
- Decap `description` -> frontmatter `description`
- Decap `pubDate` -> frontmatter `pubDate`
- Decap `dateModified` -> frontmatter `dateModified`
- Decap `slug` -> frontmatter `slug`（Astro runtime 以 `entry.slug` 暴露，不在 `data` schema 內）
- Decap `tags` -> frontmatter `tags`
- Decap `draft` -> frontmatter `draft`
- Decap `coverImage`(Cloudinary URL) -> frontmatter `coverImage`
- Decap `coverImageAlt` -> frontmatter `coverImageAlt`
- Decap `canonicalURL` -> frontmatter `canonicalURL`
- Decap `body` -> Markdown 內容主體

## PR 工作流規則（草稿→PR→審核→合併）
- 編輯者在 Decap 建立或更新文章，先存為 Draft。
- 送出 Review 後由 Decap 產生對應 PR。
- PR 必須通過：schema 驗證、build、內容審核。
- 審核通過後合併到 `main`，由 Netlify 自動部署 Production。
- 未通過審核不得手動繞過直接發布。

## 常見錯誤與排查（只列清單）
- `/admin` 可開啟但無法登入（Identity 設定或邀請狀態）。
- 已登入但看不到 collection（config.yml 語法錯誤）。
- Draft 送審後未產生 PR（Git Gateway 未啟用或權限不足）。
- 圖片可選但存檔失敗（Cloudinary 整合或欄位型別不符）。
- 發布失敗（frontmatter 與 Astro schema 不一致）。
