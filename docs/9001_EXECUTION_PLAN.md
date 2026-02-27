# 執行計畫與步驟

目的：先確認可執行的落地順序與審核節點，再逐步實作。
範圍：以現有 PRD 與技術文件為準，分階段建立可運行的網站基礎架構。

## 執行原則
- 每次收到 `/code` 指令時，必須先讀取專案根目錄 `code.md` 再開始任何實作。
- 先文件對齊，再做設定檔與流程落地。
- 每一階段完成後先審核，再進入下一階段。
- 不跳步、不一次性大改；所有變更可追蹤、可回滾。
- 每次完成修改後，需同步更新 `docs/9004_PROJECT_CHANGELOG.md` 供查詢追溯。

## 階段與步驟
### Step 1：文件一致性審核與補差（已完成：2026-02-26）
- 動作：檢查 `1001`~`6002` 與 `9001`~`9002` 是否彼此一致（欄位命名、流程、約束）。
- 交付物：差異清單與必要修訂。
- 審核點：
  - [x] `editorial_workflow` 規則一致
  - [x] Identity -> Git Gateway 啟用順序一致
  - [x] Cloudinary-only 圖片策略一致
  - [x] Astro Content Collections + schema 規則一致
  - [x] SEO/AI discovery、CI gate、權限矩陣與回滾清單一致

### Step 2：核心設定檔骨架落地（已完成：2026-02-26）
- 動作：建立/補齊 `src/content.config.ts`、`public/admin/config.yml`、`netlify.toml`、`public/admin/index.html`、`public/robots.txt`、`public/llms.txt` 最小可用版本。
- 交付物：可通過基本解析與啟動的設定檔骨架。
- 審核點：
  - [x] Decap backend 使用 `git-gateway`
  - [x] `publish_mode: editorial_workflow` 已設定
  - [x] posts collection 與 schema 欄位對齊
  - [x] `llms.txt`、`robots.txt` 入口可用

### Step 3：內容模型驗證流程（已完成：2026-02-26）
- 動作：以測試文章驗證 frontmatter schema（必填欄位、URL、draft 行為）。
- 交付物：一份符合規範的範例 post 與驗證紀錄。
- 審核點：
  - [x] `draft: true/false` 行為符合文件
  - [x] Cloudinary URL 驗證生效
  - [x] 欄位缺漏或型別錯誤可被阻擋

### Step 4：部署流程校準（Netlify）（已完成：2026-02-27）
- 動作：對齊 Deploy Preview/Production/branch deploy 的 context 規則與檢查流程。
- 交付物：可操作的部署流程清單與驗收結果。
- 審核點：
  - [x] PR 觸發 Deploy Preview
  - [x] main 觸發 Production deploy
  - [x] Identity/Git Gateway 路徑與安全策略一致

### Step 5：安全與 Runbook 定稿（已完成：2026-02-27）
- 動作：將事件處理、故障排查、回滾與稽核流程對齊實作現況。
- 交付物：更新後 `5001`、`6001` 實用版 runbook。
- 審核點：
  - [x] 撤權與回滾流程可執行
  - [x] 常見故障有對應排查步驟
  - [x] 分支保護與審核要求明確

## 里程碑與確認機制
- M1：Step 1 完成並核可。
- M2：Step 2 完成並核可。
- M3：Step 3~5 已完成並核可。
- 每個里程碑完成後，先回報「變更摘要 + 審核結果」，經你確認再進下一步。

## 本次先行審核結果
- 狀態：Step 1、Step 2、Step 3、Step 4、Step 5 已完成。
- 備註：Step 1 見 `docs/9003_STEP1_AUDIT_REPORT.md`；Step 2 見 `docs/9005_STEP2_AUDIT_REPORT.md`；Step 3 見 `docs/9006_STEP3_AUDIT_REPORT.md`；Step 4 見 `docs/9007_STEP4_PROGRESS_REPORT.md`、`docs/9008_STEP4_LOCAL_VALIDATION_REPORT.md`、`docs/4004_NETLIFY_PLATFORM_VALIDATION_CHECKLIST.md`；Step 5 見 `docs/9009_STEP5_SECURITY_RUNBOOK_REPORT.md`。

## 文件互相引用
- `/code` 執行前置規則、必讀清單與檢查項目，請參考專案根目錄 `code.md`。
- 本文件定義分階段步驟、里程碑與審核節點；`code.md` 與本文件需同步維護。
- 專案修改歷史查詢請參考 `docs/9004_PROJECT_CHANGELOG.md`。
