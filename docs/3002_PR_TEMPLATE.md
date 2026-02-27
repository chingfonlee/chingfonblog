# PR Template

目的：統一內容變更 PR 資訊格式。
確保 Deploy Preview 與必要檢查清單完整。

## 變更摘要
- 文章/頁面：
- 變更類型：`new` / `update` / `fix` / `refactor`
- 影響範圍：
- 風險與回滾方式：

## Deploy Preview 連結
- Netlify Deploy Preview URL：
- 檢查時間（UTC+8）：

## 文章檢查清單（metadata/圖片/連結）
- [ ] `title` / `description` / `slug` / `pubDate` 完整
- [ ] `draft` 狀態正確（上線內容需為 `false`）
- [ ] `canonicalURL`（若有跨站需求）已正確填寫
- [ ] 圖片皆為 Cloudinary URL，無內容圖片進 repo
- [ ] `coverImage` 有對應 `coverImageAlt`
- [ ] 內外部連結可用、無明顯破圖
- [ ] 標題層級符合 H2/H3 規則

## 是否需更新 sitemap/RSS/Atom/llms.txt
- [ ] 不需要（內容未上線或不影響索引）
- [ ] 需要，原因：
- [ ] 已在 Deploy Preview 驗證 robots 與 llms 入口
