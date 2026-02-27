# Release & Rollback Checklist

目的：標準化發布檢查與回滾步驟。
在部署失敗或內容事故時可快速恢復服務。

## 發布前檢查
- 確認 PR 已通過 CI 與 reviewer 核可。
- 本地先執行 `npm run validate:local` 並通過。
- 確認 frontmatter/schema 無錯誤。
- 確認圖片為 Cloudinary URL、無內容圖片入 repo。
- 確認 `slug` 全站唯一，避免路由衝突。

## Deploy Preview 檢查
- 驗證主要頁面、文章頁、導覽與連結。
- 驗證 `/robots.txt`、`/llms.txt`、sitemap、RSS/Atom 可讀。
- 確認 preview 回應含 `X-Robots-Tag: noindex, nofollow`。
- 確認 draft 內容可於 preview 檢視，但不應在 production 出現。

## Production 發布檢查
- 合併 main 後確認部署成功。
- 驗證首頁、文章頁、feed、管理入口健康狀態。
- 驗證 draft 路由在 production 回應 `404`。
- 監控錯誤率與核心指標是否異常。

## 回滾觸發條件
- Production build 持續失敗。
- 關鍵頁面不可用或大量 5xx/4xx。
- 發現敏感資訊洩漏或重大內容錯誤。
- 發現錯誤內容已被索引且需要立即下架。

## 回滾步驟
- Netlify 回滾：
  - 進入 `Deploys`，選擇最近穩定部署並 `Publish deploy`。
  - 驗證首頁、關鍵文章、`/robots.txt`、`/llms.txt`。
- Git 回滾：
  - 使用 `git revert <bad_commit>` 建立修復 PR。
  - 合併後再次驗證 Deploy Preview 與 Production。
- 將事故版本標記並暫停新發布，直到根因確認。

## 事後復盤與改進
- 記錄事件時間線、影響範圍、根因。
- 更新 `5001`、`6001`、`4003` 規範與檢查項。
- 追蹤改進事項至完成。
- 同步更新 `9004_PROJECT_CHANGELOG.md` 留存追蹤紀錄。
