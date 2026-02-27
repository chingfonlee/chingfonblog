# ADR Architecture Decisions

目的：記錄關鍵架構決策與其理由。
確保未來調整有可追溯依據。

## ADR 使用方式
- 每個重大決策使用一筆 ADR 記錄。
- ADR 需包含背景、決策、替代方案、影響。
- ADR 狀態建議：Proposed / Accepted / Superseded。

## 決策索引（初始化）
- ADR-001：Astro 作為主要 SSG。
- ADR-002：Decap 採 `publish_mode: editorial_workflow`。
- ADR-003：部署平台採 Netlify + Identity + Git Gateway。
- ADR-004：內容圖片採 Cloudinary URL，repo 僅固定資產。

## ADR 樣板
- `標題`：
- `日期`：
- `狀態`：
- `背景`：
- `決策`：
- `替代方案`：
- `影響與風險`：
- `後續動作`：

## 變更與淘汰流程
- 新決策先提案、經審核後標記 Accepted。
- 舊決策被取代時，標記 Superseded 並連結新 ADR。
- 與既有文件衝突時，需同步更新相關規範文件。

## 與執行計畫的關係
- `9001_EXECUTION_PLAN.md` 定義「如何執行」。
- 本文件定義「為何這樣設計」。
- 重大實作方向變更時需先更新 ADR。
