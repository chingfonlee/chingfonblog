# Step 5 Security & Runbook Report

目的：記錄 Step 5（安全與 Runbook 定稿）完成結果。
範圍：對齊 `5001`、`5002`、`6001`、`6002` 與實際運維流程。

## 本次更新摘要
- 補齊 Identity 邀請制與密碼重設操作邏輯（Invited vs Active）。
- 明確 Git Gateway 啟用後必驗項（/admin 登入、Draft -> PR、Deploy Preview）。
- 補齊 branch protection 建議與審核門檻。
- 將實際故障案例納入 runbook（信件流程、PR 不生成、slug 衝突、npm cache 權限）。
- 強化 release/rollback 清單（local validate、preview noindex、production draft 404 驗證）。

## 審核結果
- [x] 撤權與回滾流程可執行。
- [x] 常見故障有對應排查步驟。
- [x] 分支保護與審核要求明確。

## 影響檔案
- `docs/5001_SECURITY_RULES.md`
- `docs/5002_ACCESS_CONTROL_MATRIX.md`
- `docs/6001_RUNBOOK_TROUBLESHOOTING.md`
- `docs/6002_RELEASE_ROLLBACK_CHECKLIST.md`
- `docs/9001_EXECUTION_PLAN.md`

## 後續建議
- 將 branch protection 實際設定值截圖/紀錄補到附錄文件。
- 建立 CI workflow（GitHub Actions）對應 `validate:local` 的自動化版本。
