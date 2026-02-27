# GitHub Branch Protection Playbook

目的：提供 GitHub 後台逐步操作清單，將 `main` 設為強制審核與 CI 閘門。
範圍：適用本專案 `chingfonlee/chingfonblog` 的 `main` 分支保護設定。

## 適用範圍與前置條件
- 已有可用 CI workflow：`.github/workflows/ci-validate-local.yml`。
- repository 已啟用 GitHub Actions，且 workflow 至少成功執行一次。
- 設定者具備 repository `Admin` 權限。

## 後台路徑（逐步點擊）
1. 進入 `GitHub repo > Settings > Branches`。
2. 於 `Branch protection rules` 點選 `Add rule`（或 `Add classic branch protection rule`）。
3. `Branch name pattern` 輸入 `main`。
4. 依下方規則勾選並儲存。

## 必選規則
- `Require a pull request before merging`
- `Require approvals`：至少 `1`
- `Dismiss stale pull request approvals when new commits are pushed`
- `Require review from Code Owners`（若已配置 CODEOWNERS）
- `Require status checks to pass before merging`
- `Require conversation resolution before merging`
- `Do not allow bypassing the above settings`
- `Restrict who can push to matching branches`（如需白名單）
- `Allow force pushes`：關閉
- `Allow deletions`：關閉

## 必填 Status Checks
- 勾選 workflow check：`CI Validate Local / validate-local`
- 若列表尚未出現，先觸發一次 PR workflow 後再回來勾選。

## 建議規則
- `Require linear history`（選配）
- `Require deployments to succeed before merging`（若未來導入環境保護）
- 管理員也遵守同一套規則（避免緊急時習慣性繞過）

## 設定後驗證步驟
1. 建立測試 PR（可只改 `docs` 一行）。
2. 確認 PR 顯示 CI 檢查正在執行。
3. 在 CI 未完成前嘗試 merge，應被阻擋。
4. CI 全綠且取得 1 個 approve 後，應可 merge。
5. merge 後確認 `main` push 也會觸發同一 CI。

## 常見問題與處理
- 看不到 `CI Validate Local`：
  - 先確認 workflow 檔已在預設分支。
  - 先跑一個 PR 讓 check name 出現在可選清單。
- 設定被改回：
  - 檢查是否有其他 Admin 手動調整。
  - 將本文件納入變更審核與每月稽核清單。

## 參考文件
- `docs/4003_CI_QUALITY_GATES.md`
- `docs/5001_SECURITY_RULES.md`
- `docs/5002_ACCESS_CONTROL_MATRIX.md`
