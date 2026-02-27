# Security Rules

目的：定義後台登入、發布權限與分支保護規則。
涵蓋撤權、回滾與稽核的事件處理流程。

## Identity 邀請制策略（禁止公開註冊）
- Netlify Identity 採 `Invite only`，禁止公開註冊。
- 只邀請必要角色（Editor/Reviewer/Admin），最小權限原則。
- 新增/離職/轉調人員需在 24 小時內完成權限調整。
- 不共用帳號，所有操作需可追溯到個人身份。

## Git Gateway 啟用規則與注意事項
- 啟用順序必須為：先 Identity，再 Git Gateway。
- 路徑：`Project configuration > Identity > Services > Git Gateway > Enable`。
- 本專案使用 Decap 發布流程時，Git Gateway 維持啟用。
- 若需停用 Git Gateway，需先完成 ADR/流程變更評估並更新相關文件。
- 啟用後需立即驗證 PR 生成與權限是否符合預期。

## GitHub branch protection 建議
- `main` 強制 PR merge，禁止 direct push。
- 至少 1 位 reviewer 核准後才可合併。
- 必須通過狀態檢查（build/schema/link check）。
- 禁止 force push 與刪除受保護分支。
- 建議啟用 CODEOWNERS 管理關鍵檔審核責任。

## /admin 入口加固建議（選配）
- 以 `_headers` 對 `/admin/*` 增加安全標頭（CSP、X-Frame-Options）。
- 僅揭露必要腳本來源，限制第三方注入風險。
- 避免在公開頁面主導覽顯示 `/admin` 入口。
- 定期檢查 Decap 與相依套件版本安全更新。

## 事件處理流程（撤權、回滾、稽核）
- 撤權：發現風險帳號立即停權並重設相關 Token。
- 回滾：以最近穩定 commit/部署版本快速回復服務。
- 稽核：保留 PR、deploy、Identity 操作紀錄，定期檢視。
- 復盤：事件結束後更新本文件與 runbook，補上預防措施。
