# Security Rules

目的：定義後台登入、發布權限與分支保護規則。
涵蓋撤權、回滾與稽核的事件處理流程。

## Identity 邀請制策略（禁止公開註冊）
- Netlify Identity 必須設定為 `Invite only`，禁止公開註冊。
- 僅允許必要角色（`Editor`、`Reviewer`、`Admin`）登入 `/admin`。
- 帳號生命週期：
  - 建立：由 `Admin` 發送 Invite。
  - 啟用：受邀者完成信件啟用後才可登入。
  - 變更/撤銷：人員異動 24 小時內完成調整。
- 信件流程規則：
  - 狀態為 `Invited/Unconfirmed` 時，使用 `Resend invite`。
  - 狀態為 `Active` 時，才使用 `Send reset password email`。
- 禁止共用帳號；所有內容與部署操作需可追溯到個人身份。

## Git Gateway 啟用規則與注意事項
- 啟用順序必須為：先 Identity，再 Git Gateway。
- 路徑：`Project configuration > Identity > Services > Git Gateway > Enable`。
- `public/admin/config.yml` 必須維持：
  - `backend.name: git-gateway`
  - `publish_mode: editorial_workflow`
- 本專案使用 Decap 發布流程時，Git Gateway 維持啟用。
- 若需停用 Git Gateway，需先完成 ADR/流程變更評估並更新文件。
- 啟用後立即驗證：
  - `/admin` 可登入
  - Draft -> In Review 會建立 PR
  - PR 會觸發 Deploy Preview

## GitHub branch protection 建議
- `main` 強制 PR merge，禁止 direct push。
- 至少 1 位 reviewer 核准後才可合併。
- 必須通過狀態檢查（至少覆蓋 `check`、build、內容驗證）。
- 禁止 force push 與刪除受保護分支。
- 建議啟用 CODEOWNERS 管理關鍵檔審核責任。
- 建議啟用「Dismiss stale approvals」與「Require conversation resolution」。

## /admin 入口加固建議（選配）
- 以 `_headers` 對 `/admin/*` 增加安全標頭（CSP、X-Frame-Options）。
- 僅揭露必要腳本來源，限制第三方注入風險。
- `robots.txt` 必須維持 `Disallow: /admin/`。
- 可保留 `/admin` 導覽連結於測試期；正式期可改為不在主導覽顯示。
- 定期檢查 Decap 與相依套件版本安全更新。

## 事件處理流程（撤權、回滾、稽核）
- 撤權（P0）：發現可疑帳號時，15 分鐘內停用 Identity 與對應 Git 權限。
- 回滾：以最近穩定 commit/部署版本快速回復服務（見 `6002`）。
- 稽核：
  - 保留 PR、Deploy、Identity 操作紀錄。
  - 每月至少 1 次檢查 Invite 名單與實際成員是否一致。
- 復盤：事件結束 48 小時內完成根因與改進項，更新 `5001`、`6001`、`9004`。
