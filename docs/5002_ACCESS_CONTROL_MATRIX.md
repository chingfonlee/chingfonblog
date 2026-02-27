# Access Control Matrix

目的：定義角色權限與審批邊界。
確保 Netlify Identity、Git Gateway、GitHub 權限一致。

## 角色定義
- `Admin`：平台設定與權限管理。
- `Reviewer`：內容審核與合併核可。
- `Editor`：內容建立與送審。
- `Viewer`（選配）：唯讀檢視。

## Netlify Identity 權限矩陣
- Admin：可邀請/停用使用者、管理 Identity 設定。
- Reviewer：可登入後台、審核內容流程。
- Editor：可建立與更新草稿，送出審核。
- 禁止公開註冊，僅 Invite only。

## GitHub 權限矩陣
- Admin：維護 branch protection 與 repo 設定。
- Reviewer：審核 PR、建議修正。
- Editor：提交內容變更 PR，不可直接 push main。
- 所有角色遵守 branch protection。

## 最小權限與審批機制
- 權限採最小必要原則，定期盤點。
- 重要權限提升需有申請與核准紀錄。
- 臨時權限需設定到期時間。

## 權限異動流程
- 新增：提出需求 -> 核准 -> 建立帳號與角色。
- 調整：依職責變更更新角色。
- 撤銷：離職/轉調 24 小時內完成停權。

## 稽核與例外處理
- 每月/每季檢查帳號與角色一致性。
- 發現異常立即撤權並啟動事件流程。
- 例外權限需有期限與事後復原。
