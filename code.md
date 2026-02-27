# /code 規則讀取要求

目的：規範每次收到 `/code` 指令時，必須先讀取本專案規則，再進行任何修改。

## 強制要求
- 每次遇到 `/code`，先讀取本文件與下列專案規範文件。
- 讀取完成後，依 `docs/9001_EXECUTION_PLAN.md` 的階段與審核機制執行。
- 未完成規則讀取前，不可直接編輯程式或設定檔。
- 若規則衝突，依「優先順序」處理並在回覆中註明。

## 必讀文件清單（/code 觸發時）
- `docs/1001_PRD_AI_Friendly_Blog.md`
- `docs/2001_REPO_CONTRACT.md`
- `docs/2002_CONTENT_MODEL_SPEC.md`
- `docs/2003_EDITOR_GUIDE.md`
- `docs/2004_SEO_AI_DISCOVERY_SPEC.md`
- `docs/3001_DECAP_CONTRACT.md`
- `docs/3002_PR_TEMPLATE.md`
- `docs/4001_NETLIFY_PLAYBOOK.md`
- `docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`
- `docs/4002_ENV_SECRETS_MATRIX.md`
- `docs/4003_CI_QUALITY_GATES.md`
- `docs/5001_SECURITY_RULES.md`
- `docs/5002_ACCESS_CONTROL_MATRIX.md`
- `docs/6001_RUNBOOK_TROUBLESHOOTING.md`
- `docs/6002_RELEASE_ROLLBACK_CHECKLIST.md`
- `docs/9001_EXECUTION_PLAN.md`
- `docs/9002_ADR_ARCHITECTURE_DECISIONS.md`
- `docs/9003_STEP1_AUDIT_REPORT.md`（以及最新 Step 審核報告）
- `docs/9004_PROJECT_CHANGELOG.md`
- `docs/9005_STEP2_AUDIT_REPORT.md`（以及最新 Step 審核報告）
- `docs/9006_STEP3_AUDIT_REPORT.md`（以及最新 Step 審核報告）
- `docs/9007_STEP4_PROGRESS_REPORT.md`（以及最新 Step 進度/審核報告）
- `docs/9008_STEP4_LOCAL_VALIDATION_REPORT.md`（以及最新 Step 進度/審核報告）
- `docs/9009_STEP5_SECURITY_RUNBOOK_REPORT.md`（以及最新 Step 進度/審核報告）

## 規則優先順序
1. 使用者當前指令
2. `docs/9001_EXECUTION_PLAN.md`
3. Repo 合約與安全規範（`2001`、`5001`）
4. 內容模型與 CMS 規範（`2002`、`3001`）
5. 其餘文件

## /code 執行前檢查清單
- [ ] 已讀取本文件與必讀文件
- [ ] 已確認本次變更範圍與禁止項
- [ ] 已列出執行步驟與審核點
- [ ] 已取得使用者確認再進下一階段

## /code 執行後檢查清單
- [ ] 已更新 `docs/9004_PROJECT_CHANGELOG.md`（新增本次變更記錄）
- [ ] 已回報修改摘要與受影響檔案

## 互相引用
- 本文件規範 `/code` 觸發時的必讀與前置檢查。
- 實際執行順序、里程碑與審核節點以 `docs/9001_EXECUTION_PLAN.md` 為準。
