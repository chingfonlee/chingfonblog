# Access Control Matrix

目的：定義角色權限與審批邊界。
確保 Netlify Identity、Git Gateway、GitHub 權限一致。

## 角色定義
- `Admin`：管理 Netlify Identity/Git Gateway 與 repo 保護規則。
- `Reviewer`：審核內容、核可 PR、確認部署結果。
- `Editor`：撰寫內容、送審、修正審查意見。
- `Viewer`（選配）：唯讀檢視，不可改動內容。

## Netlify Identity 權限矩陣
| 能力 | Admin | Reviewer | Editor | Viewer |
|---|---|---|---|---|
| 登入 `/admin` | Y | Y | Y | N |
| 建立/編輯 Draft | Y | Y | Y | N |
| 送出 In Review | Y | Y | Y | N |
| 發送 Invite / 停用帳號 | Y | N | N | N |
| 啟用/停用 Git Gateway | Y | N | N | N |
| 註冊策略設為 Invite only | Y | N | N | N |

## GitHub 權限矩陣
| 能力 | Admin | Reviewer | Editor | Viewer |
|---|---|---|---|---|
| 建立內容分支 | Y | Y | Y | N |
| 建立 PR | Y | Y | Y | N |
| Review / Approve PR | Y | Y | N | N |
| Merge PR | Y | Y | N | N |
| Direct push 到 `main` | N | N | N | N |
| 修改 branch protection | Y | N | N | N |

## 最小權限與審批機制
- 權限採最小必要原則，定期盤點。
- 重要權限提升需有申請與核准紀錄。
- 臨時權限需設定到期時間。
- 緊急例外（break-glass）需在 24 小時內補齊審核與復盤。

## 權限異動流程
- 新增：提出需求 -> 核准 -> 發送 Invite -> 啟用完成後驗證登入。
- 調整：依職責變更更新角色，並記錄生效時間。
- 撤銷：離職/轉調 24 小時內完成停權與權限回收。
- 重設：僅 `Active` 狀態帳號可發送 reset password。

## 稽核與例外處理
- 每月/每季檢查帳號與角色一致性。
- 發現異常立即撤權並啟動事件流程。
- 例外權限需有期限與事後復原。
- 稽核證據來源：Identity Users、Identity audit log、GitHub PR 歷史、Netlify Deploys。
