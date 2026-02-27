# CI Quality Gates

目的：定義 PR 合併前必過的品質檢查。
讓內容與設定在進入 main 前被一致驗證。

## CI 觸發條件
- Workflow 檔案：`.github/workflows/ci-validate-local.yml`。
- `pull_request -> main`（PR 開啟/更新/rebase）觸發。
- `push -> main` 觸發。
- 支援 `workflow_dispatch` 手動執行。

## 必過檢查項
- 安裝：`npm ci`。
- 驗證：`npm run validate:local`（含 check、production/preview build 與 dist verify）。
- 失敗即視為品質閘門未通過。

## 失敗處置流程
- 任一檢查失敗即阻擋合併。
- 由提交者修正後重跑檢查。
- 必要時由 reviewer 指定補充檢查。

## Merge Gate 規則
- 至少 1 位 reviewer 核可。
- 狀態檢查全綠才可 merge。
- 禁止以管理員強制略過常規檢查（除緊急事故）。

## 維護責任
- CI 規則由維護者定期檢視與更新。
- 新增內容模型欄位時同步調整檢查項。
- 規則變更需更新 `3002_PR_TEMPLATE.md` 與相關文件。
