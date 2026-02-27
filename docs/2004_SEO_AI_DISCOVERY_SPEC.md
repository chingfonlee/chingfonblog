# SEO & AI Discovery Spec

目的：定義 sitemap、RSS/Atom、robots、llms 的產出與驗收規範。
確保搜尋引擎與 AI 代理可穩定發現、理解並索引內容。

## 適用範圍與目標
- 適用於 Astro 產生的所有公開內容路徑。
- 目標是讓 Production 站具備完整機器可讀入口。

## sitemap 規範
- 使用 Astro 整合產生 sitemap。
- 僅收錄 `draft: false` 的公開內容。
- 每次部署後驗證 sitemap 可存取。

## RSS/Atom 規範
- 至少提供 RSS；需要時額外提供 Atom。
- feed 僅收錄公開文章，排序以發布時間為主。
- metadata（title/description/link）需與站點設定一致。

## robots.txt 規範
- `public/robots.txt` 為唯一來源。
- 明確宣告 sitemap 位置。
- 非公開路徑採限制索引策略。
- Deploy Preview 的 noindex 以 `netlify.toml` context headers 控制，不修改 Production robots 內容。

## llms.txt 規範
- 採固定檔案方案：`public/llms.txt`。
- 列出站點定位、主要內容入口與使用限制。
- 每次資訊架構變更時同步更新。

## 驗收與變更流程
- PR 需檢查 sitemap/feed/robots/llms 是否可讀。
- Deploy Preview 驗證通過後再合併。
- 規範變更需同步更新 `3002_PR_TEMPLATE.md` 檢查項。
