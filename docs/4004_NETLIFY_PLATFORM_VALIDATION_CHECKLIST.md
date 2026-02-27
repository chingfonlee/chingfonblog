# Netlify Platform Validation Checklist

目的：提供 Netlify 後台逐步操作清單，用於完成 Step 4 平台層驗證。
範圍：涵蓋 site 建立、Deploy Preview、Production、Identity、Git Gateway、/admin 驗證。

## 前置確認
- [ ] Git repository 已連接到 Netlify site。
- [ ] Netlify site 的 build command 為 `npm run build:netlify`。
- [ ] Publish directory 為 `dist`。
- [ ] 自訂網域若已啟用，HTTPS 已正常。
- [ ] 已知風險：Netlify Identity 與 Git Gateway 官方文件已標示 deprecated；本專案仍依既定方案驗證現行流程。

## A. Site 與 Build 設定
1. 進入 `Project configuration > Build & deploy`。
2. 確認 Continuous Deployment 已連接正確 repo。
3. 確認 Production branch 為 `main`。
4. 確認 Build command 為 `npm run build:netlify`。
5. 確認 Publish directory 為 `dist`。
6. 如 UI 與 `netlify.toml` 衝突，以 repo 內 `netlify.toml` 為準。

## B. Deploy Preview 啟用與驗證
1. 進入 `Project configuration > Build & deploy > Continuous Deployment > Branches and deploy contexts`。
2. 確認 Deploy Previews 為啟用狀態。
3. 建立一個測試 PR。
4. 等待 Netlify 在 PR 上回報 Deploy Preview 狀態。
5. 開啟 Deploy Preview URL。
6. 驗證：
   - [ ] 首頁可開啟
   - [ ] `/posts/` 可開啟
   - [ ] draft 文章詳細頁可見
   - [ ] 回應含 preview noindex 規則

### 測試 PR 執行紀錄（本輪）
- 測試分支：`test/step4-deploy-preview`
- 基準分支：`main`
- 目的：觸發 Netlify Deploy Preview 並驗證 preview 環境行為。
- PR 連結：待建立（建立後回填）。

## C. Production 驗證
1. 合併測試 PR 到 `main`。
2. 進入 Netlify Deploys 檢視最新 Production deploy。
3. 開啟正式站網址。
4. 驗證：
   - [ ] 首頁可開啟
   - [ ] `/posts/` 可開啟
   - [ ] draft 文章詳細頁不可見
   - [ ] `/robots.txt` 可開啟
   - [ ] `/llms.txt` 可開啟

## D. Identity 啟用
1. 進入 `Project configuration > Identity`。
2. 選擇 `Enable Identity`。
3. 進入 `Registration preferences`。
4. 設定為 `Invite only`。
5. 在 `Users` 中邀請測試帳號。
6. 驗證受邀帳號可收到邀請信並完成啟用。

## E. Git Gateway 啟用
1. 確認 Identity 已啟用。
2. 進入 `Project configuration > Identity > Services > Git Gateway`。
3. 選擇 `Enable Git Gateway`。
4. 確認連接的 repository 正確。
5. 如需限制角色，設定 Roles 白名單。
6. 如平台要求，補齊 Git provider access token。

## F. /admin 驗證
1. 開啟 `https://YOUR_SITE/admin/`。
2. 使用受邀 Identity 帳號登入。
3. 驗證 Decap 可正常載入 collection。
4. 建立一篇測試草稿。
5. 送出 Review。
6. 驗證：
   - [ ] 成功建立 Draft
   - [ ] 成功送審
   - [ ] 產生對應 PR
   - [ ] PR 產生 Deploy Preview

## G. 權限與稽核驗證
1. 進入 `Project configuration > Identity > Users`。
2. 確認僅邀請制帳號存在。
3. 視需要進入 `Project configuration > Identity > Identity audit log`。
4. 驗證：
   - [ ] 可查到邀請與登入紀錄
   - [ ] 權限異動流程可追溯
   - [ ] 無公開註冊入口

## H. 驗收結論
- [ ] PR 觸發 Deploy Preview
- [ ] `main` 觸發 Production deploy
- [ ] Identity / Git Gateway 啟用順序正確
- [ ] `/admin` 可登入並完成 Draft -> PR 流程
- [ ] Draft 在 preview 可見、在 production 不可見

## 備註
- Identity 與 Git Gateway 依 Netlify 官方文件屬 deprecated 功能；本專案目前僅驗證既有方案是否仍可運作。
- 若平台層驗證失敗，需更新 `6001_RUNBOOK_TROUBLESHOOTING.md` 與 `5001_SECURITY_RULES.md`。
