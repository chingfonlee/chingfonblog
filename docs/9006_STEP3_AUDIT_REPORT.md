# Step 3 Audit Report

目的：記錄 Step 3（內容模型驗證流程）結果。
提供範例文章、驗證方法、結果與限制說明。

## 審核範圍
- `src/content/posts/2026-02-26-astro-decap-netlify-stack.md`
- `src/content.config.ts`
- `docs/2002_CONTENT_MODEL_SPEC.md`
- `docs/2003_EDITOR_GUIDE.md`

## 交付物
- 建立 1 份符合規範的範例文章。
- 使用一次性 `node` 靜態驗證腳本檢查 frontmatter 與內容格式。
- 驗證 `draft` 兩種狀態的預期行為矩陣。
- 驗證無效案例會被阻擋（缺必填、slug 不合法、缺 alt）。

## 驗證結果
- 有效範例：`PASS`
- `draft: true`：不進 Production 列表與 RSS/Atom，仍可於 Preview 檢視。
- `draft: false`：可進 Production 列表與 RSS/Atom，仍可於 Preview 檢視。
- 無效案例：
  - 缺少 `title` -> `BLOCKED`
  - 非法 `slug` -> `BLOCKED`
  - 缺少 `coverImageAlt` -> `BLOCKED`

## 審核檢查結果
- [x] `draft: true/false` 行為符合文件
- [x] Cloudinary URL 驗證生效
- [x] 欄位缺漏或型別錯誤可被阻擋

## 限制與備註
- 目前專案內尚無 `package.json` / `astro.config.*`，因此本階段未執行 `astro build` 或 Astro runtime schema 驗證。
- 本次採用與 `src/content.config.ts` 一致的靜態規則進行驗證，足以作為 Step 3 的內容模型檢查依據。
- 若後續補齊 Astro 專案依賴，建議追加一次 build 級驗證並更新本報告。

## 後續行動
- 進入 Step 4：部署流程校準（Netlify）。
- 若要進入真實 build 驗證，需先補專案 manifest 與 Astro 依賴。
