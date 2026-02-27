# Runbook Troubleshooting

目的：提供常見問題排查入口與處置順序。
降低 /admin、媒體流程與部署中斷時間。

## /admin 空白頁
- 檢查 `public/admin/index.html` 是否正確載入 Decap 腳本。
- 確認 `public/admin/config.yml` YAML 語法無誤。
- 打開瀏覽器 Console 檢查 JS/CORS 錯誤。
- 若為快取問題，清除快取後重整再驗證。

## Identity 登入失敗
- 確認 Netlify Identity 已啟用且站台網址正確。
- 確認帳號已被邀請並完成 email 驗證。
- 檢查 Identity 註冊策略是否為 Invite only。
- 重新發送邀請；必要時刪除舊邀請後重建。

## Git Gateway 啟用但 PR 不生成
- 再次確認啟用順序：Identity -> Git Gateway。
- 確認 `backend.name` 為 `git-gateway`。
- 確認 `publish_mode: editorial_workflow` 已設定。
- 檢查 GitHub repo 權限與 branch protection 是否阻擋機器帳號。

## Cloudinary media library 無法選圖
- 檢查 `media_library.name: cloudinary` 是否存在。
- 檢查 Cloudinary 整合參數（cloud name/API 設定）是否有效。
- 確認欄位型別接受 URL，且 schema 不拒絕該網域。
- 改以直接貼上 Cloudinary URL 驗證是否可寫入。

## Netlify build fail（schema 不合/路徑錯）
- 先在本機執行 `npm run build` 重現錯誤。
- 對照錯誤訊息修正 frontmatter 欄位與型別。
- 檢查文章路徑是否位於 `src/content/posts/`。
- 確認引用資源路徑與檔名大小寫一致。
- 修正後重新推送，確認 Deploy Preview 恢復成功。
