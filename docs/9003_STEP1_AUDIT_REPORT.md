# Step 1 Audit Report

目的：記錄 Step 1（文件一致性審核與補差）結果。
提供差異清單、修訂項與後續行動依據。

## 審核範圍
- 文件：`1001`~`6002`、`9001`~`9002`、`code.md`。
- 主題：流程約束、欄位定義、權限安全、SEO/AI discovery、CI gate、回滾流程。

## 差異清單（審核前）
- `1001_PRD` 僅骨架，未與現行技術規範對齊。
- `3001_DECAP_CONTRACT` 缺少 `canonicalURL` 對映，與 `2002` 欄位定義不完整一致。
- `2004` 的預覽環境索引策略描述未明確對應 `netlify.toml` context headers。
- `5001` 對 Git Gateway 有「可關閉」描述，與本專案固定流程存在歧義。
- `3002`、`4003`、`6002` 對 feed 用語不一致（feed vs RSS/Atom）。
- `9001` 狀態仍顯示 Step 1 未開始。

## 補差修訂清單（已完成）
- 更新 `1001_PRD_AI_Friendly_Blog.md`：補齊目標、角色、範圍、需求、驗收標準。
- 更新 `2002_CONTENT_MODEL_SPEC.md`：補強 tags 格式驗證規則。
- 更新 `3001_DECAP_CONTRACT.md`：加入 `draft` 預設 `true` 與 `canonicalURL` 欄位對映。
- 更新 `2004_SEO_AI_DISCOVERY_SPEC.md`：明確 Deploy Preview noindex 由 `netlify.toml` headers 控制。
- 更新 `5001_SECURITY_RULES.md`：明確本專案流程下 Git Gateway 維持啟用。
- 更新 `3002_PR_TEMPLATE.md`：加入 `canonicalURL` 檢查，統一為 sitemap/RSS/Atom/llms。
- 更新 `4003_CI_QUALITY_GATES.md`：統一檢查項用語為 sitemap、RSS/Atom。
- 更新 `6002_RELEASE_ROLLBACK_CHECKLIST.md`：統一驗收用語為 sitemap、RSS/Atom。
- 更新 `9001_EXECUTION_PLAN.md`：標記 Step 1 完成並連結本報告。

## 審核結論
- `editorial_workflow` 規則：一致。
- Identity -> Git Gateway 啟用順序：一致。
- Cloudinary-only 圖片策略：一致。
- Astro Content Collections + schema 規則：一致。
- SEO/AI discovery、CI gate、權限矩陣與回滾文件：一致。

## 後續行動
- 進入 Step 2：核心設定檔骨架落地。
- Step 2 完成後，建立對應審核報告（建議 `9004`）。
