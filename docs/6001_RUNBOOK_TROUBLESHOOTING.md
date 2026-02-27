# Runbook Troubleshooting

目的：提供常見問題排查入口與處置順序。
降低 /admin、媒體流程與部署中斷時間。

## /admin 空白頁
- 先確認網址為 `https://leechingfon.netlify.app/admin/`（非 localhost）。
- 檢查 `public/admin/index.html` 是否正確載入 Decap 腳本。
- 確認 `public/admin/config.yml` YAML 語法無誤。
- 打開瀏覽器 Console 檢查 JS / CORS / 401 錯誤。
- 清除瀏覽器快取與 Cookie 後重試；必要時改無痕模式。

## Identity 登入失敗
- 確認 Netlify Identity 已啟用且站台網址正確。
- 確認帳號已被邀請並完成 email 驗證。
- 檢查 Identity 註冊策略是否為 Invite only。
- 若使用者狀態為 `Invited/Unconfirmed`，請使用 `Resend invite`。
- 若使用者狀態為 `Active`，才使用 `Send reset password email`。
- 收不到信時先檢查 Spam/Junk，再刪除舊邀請後重建帳號。

## Git Gateway 啟用但 PR 不生成
- 再次確認啟用順序：Identity -> Git Gateway。
- 確認 `backend.name` 為 `git-gateway`。
- 確認 `publish_mode: editorial_workflow` 已設定。
- 確認操作為 `In Review`，而非僅 `Save Draft`。
- 檢查 GitHub repo 權限與 branch protection 是否阻擋合併機制。
- 檢查 PR 是否已自動關閉/合併（`/pulls?q=is%3Apr+is%3Aclosed`）。

## Cloudinary media library 無法選圖
- 檢查 `media_library.name: cloudinary` 是否存在。
- 檢查 Cloudinary 整合參數（cloud name/API 設定）是否有效。
- 確認欄位型別接受 URL，且 schema 不拒絕該網域。
- 改以直接貼上 Cloudinary URL 驗證是否可寫入。

## Netlify build fail（schema 不合/路徑錯）
- 先在本機執行 `npm run validate:local` 重現錯誤。
- 對照錯誤訊息修正 frontmatter 欄位與型別。
- 檢查文章路徑是否位於 `src/content/posts/`。
- 確認引用資源路徑與檔名大小寫一致。
- 修正後重新推送，確認 Deploy Preview 恢復成功。

## Slug 衝突（兩篇文章使用相同路徑）
- 症狀：`/posts/<slug>/` 只顯示其中一篇，另一篇被覆蓋。
- 排查：檢查所有文章 `slug` 是否全站唯一。
- 修正：調整重複文章 slug（例如 `test` -> `test-again`）後重建 PR。
- 驗證：在 Deploy Preview 檢查 `/posts/` 列表是否同時出現兩篇。

## npm 安裝失敗（ENOENT / EACCES / EEXIST）
- `ENOENT package.json`：代表不在專案目錄，先 `cd` 到 repo root。
- `EACCES/EEXIST ~/.npm/_cacache`：改用專案內 cache 安裝。
- 建議命令：`npm install --cache ./.npm-cache <packages...>`。
- 安裝後檢查：`npm run check`、`npm run build`。
