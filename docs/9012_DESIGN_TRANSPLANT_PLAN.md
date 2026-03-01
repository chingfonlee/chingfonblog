# 9012 Design Transplant Plan

目的：將 `index.html` 的品牌視覺系統移植到 Astro 網站，並以參考站資訊架構重組首頁。
範圍：本輪只調整 `BaseLayout`、首頁、文章列表與 content schema；不變更 CMS 欄位設定。

## 可行性分析
- 保留既有內容資料流：Astro Content Collections 不改 collection 名稱與讀取方式。
- 保留既有部署流程：Netlify `build:netlify`、`validate:local`、PR/CI 不變。
- 保留既有 CMS 流程：Decap `publish_mode: editorial_workflow` 不變。
- 前端可用 `window.location.search` 在靜態站實作 `?category=` 客端篩選。

## 限制邊界
- 目前為 `output: "static"`，不做伺服器端 query filtering。
- 本輪不調整 `public/admin/config.yml`，CMS 後台暫不新增 category 欄位。
- 本輪不新增 `/blog` 路由與重導，維持 `/posts` 為唯一內容路徑。
- 不新增破壞性依賴，沿用現有 Astro 與 TypeScript 套件。

## 介面與資料變更
- `src/content.config.ts`
  - 新增 `category: z.enum(["ai-practice", "productivity-system", "life-thinking"]).default("life-thinking")`。
- `src/pages/posts/index.astro`
  - 新增 query 介面：`/posts/?category=ai-practice|productivity-system|life-thinking`。
  - 無效 query 回退為「全部文章」並顯示提示。
- Featured 規則
  - `tags` 包含 `featured` 的文章顯示在首頁精選區塊。

## 實施步驟
1. 新增本文件，鎖定本輪範圍、限制與驗收標準。
2. 更新 content schema，加入 category enum 與 default。
3. 調整 BaseLayout 共用樣式：token、元件、互動節奏、可讀性。
4. 重構首頁為 5 區塊：Hero、三大主題、精選、最新、About/CTA。
5. 在 posts 列表頁加入 category chips 與 client-side query filtering。
6. 執行本地驗證後送 PR，使用 Netlify Deploy Preview 檢查 UI。

## 驗收標準
- 版面驗收
  - 首頁呈現 5 區塊，語氣與 token 與 `index.html` 一致。
  - 文章列表頁可透過 `?category=` 篩選，無效值會回退並提示。
- 技術驗收
  - `npm run validate:local` 通過。
  - PR 檢查 `CI Validate Local / validate-local` 綠燈。
  - Netlify Deploy Preview 可正常渲染首頁與文章頁。

## 回滾策略
- 若分類篩選造成 UI 或流程問題，先回退 `src/pages/posts/index.astro` 到上一版。
- 若 schema 變更引發內容相容問題，暫時移除 `category` 欄位或保留 default 但不啟用前端篩選 UI。
- 所有變更皆透過 feature branch + PR，必要時可 revert 該 PR。
