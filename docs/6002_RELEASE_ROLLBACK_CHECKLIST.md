# Release & Rollback Checklist

目的：標準化發布檢查與回滾步驟。
在部署失敗或內容事故時可快速恢復服務。

## 發布前檢查
- 確認 PR 已通過 CI 與 reviewer 核可。
- 確認 frontmatter/schema 無錯誤。
- 確認圖片為 Cloudinary URL、無內容圖片入 repo。

## Deploy Preview 檢查
- 驗證主要頁面、文章頁、導覽與連結。
- 驗證 `/robots.txt`、`/llms.txt`、sitemap、RSS/Atom 可讀。
- 確認 draft 內容不會誤出現在公開列表。

## Production 發布檢查
- 合併 main 後確認部署成功。
- 驗證首頁、文章頁、feed、管理入口健康狀態。
- 監控錯誤率與核心指標是否異常。

## 回滾觸發條件
- Production build 持續失敗。
- 關鍵頁面不可用或大量 5xx/4xx。
- 發現敏感資訊洩漏或重大內容錯誤。

## 回滾步驟
- 選擇最近穩定部署版本進行還原。
- 驗證還原後站點與關鍵入口可用。
- 將事故版本標記並停止繼續發布。

## 事後復盤與改進
- 記錄事件時間線、影響範圍、根因。
- 更新 `5001`、`6001`、`4003` 規範與檢查項。
- 追蹤改進事項至完成。
