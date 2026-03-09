# WSL Node 20 & Collection 降噪進度報告

目的：記錄 2026-03-09 對本地 WSL 執行環境與 Astro 空 collection 提示的修正結果，供後續追蹤。

## 背景
- 問題 1：WSL 非互動 shell 會落到系統 Node 18，與專案 `engines`（Node 20）不一致。
- 問題 2：`projects` / `tools` 目錄為空時，`astro check/build` 會出現 collection 空集合提示。

## 本次完成事項
- 已調整 `~/.bashrc`，在非互動 shell 提前 `return` 前先載入 nvm 並執行 `nvm use --silent default`。
- 已於 `src/content.config.ts` 的 `projects` / `tools` schema 新增 `hidden` 欄位（預設 `false`）。
- 已於首頁與清單頁查詢條件排除 `hidden` 內容：
  - `src/pages/index.astro`
  - `src/pages/projects/index.astro`
  - `src/pages/tools/index.astro`
- 已新增兩筆隱藏 placeholder，避免空 collection 提示但不影響前台顯示：
  - `src/content/projects/placeholder.md`
  - `src/content/tools/placeholder.md`

## 驗證結果
- `bash -lc 'node -v && npm -v'`：`v20.20.1` / `10.8.2`
- `npm run check`：通過（0 errors / 0 warnings / 0 hints）
- `npm run validate:local`：production + preview 皆通過
- 結果：先前 `projects/tools` 空 collection 提示已消失。

## 影響檔案
- `~/.bashrc`
- `src/content.config.ts`
- `src/pages/index.astro`
- `src/pages/projects/index.astro`
- `src/pages/tools/index.astro`
- `src/content/projects/placeholder.md`
- `src/content/tools/placeholder.md`

## 後續追蹤建議
- 若後續新增實際 `projects` / `tools` 內容，可保留 placeholder 作為降噪保險機制。
- 若未來要在 CMS 直接管理 `hidden`，可於 `public/admin/config.yml` 補上對應欄位設定。
