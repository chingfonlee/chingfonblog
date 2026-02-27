# Content Model Spec

目的：定義 posts frontmatter 與欄位型別規範。
以 Astro Content Collections + schema 驗證內容一致性。

## posts 欄位定義（必填/選填/型別）
| 欄位 | 必填 | 型別 | 規則 |
| --- | --- | --- | --- |
| `title` | 是 | `string` | 文章標題，建議 8-80 字元 |
| `description` | 是 | `string` | 摘要，建議 30-160 字元 |
| `pubDate` | 是 | `date` | 發布日期 |
| `dateModified` | 否 | `date` | 更新日期，需大於等於 `pubDate` |
| `slug` | 是 | `string` | `^[a-z0-9-]+$`，全站唯一；Astro 以保留欄位方式處理 |
| `tags` | 否 | `string[]` | 可為空陣列；值採小寫英文與連字號，建議 1-5 個 |
| `draft` | 否 | `boolean` | 預設 `true`（新稿），審核後改為 `false` |
| `coverImage` | 否 | `string(url)` | 僅允許 Cloudinary HTTPS URL |
| `coverImageAlt` | 否 | `string` | 有 `coverImage` 時必填 |
| `canonicalURL` | 否 | `string(url)` | 需要跨站正規化時使用 |

## draft 行為
- `draft: true`：
  - 不進 Production 文章列表。
  - 不進 sitemap、RSS、Atom。
  - 可於 PR 與 Deploy Preview 檢視。
- `draft: false`：
  - 合併 `main` 後進入正式站內容索引與 feed。

## schema 驗證原則
- 使用 Astro `defineCollection` + `zod` 作為單一驗證來源。
- `slug` 為 Astro Content Collections 保留欄位，實際由 Astro 解析為 `entry.slug`，不在 `data` schema 內驗證。
- 日期、URL、tags 長度等規則在 schema 層先行擋下。
- `tags` 項目建議以 `^[a-z0-9-]+$` 驗證，避免同義格式混用。
- `coverImage` 必須符合 Cloudinary 網域白名單。
- 當 `coverImage` 存在時，`coverImageAlt` 必填。
- CI 與 Netlify build 必須執行 schema 驗證，失敗即中止部署。

## 範例 frontmatter
```yaml
---
title: "Astro + Decap 架構筆記"
description: "以 Astro 建站、Decap 編輯、Netlify 部署的最小可行流程。"
pubDate: 2026-02-26
dateModified: 2026-02-26
slug: "astro-decap-netlify-stack"
tags: ["astro", "decap", "netlify"]
draft: true
coverImage: "https://res.cloudinary.com/example/image/upload/v1700000000/blog/cover.jpg"
coverImageAlt: "Astro 與 Decap 流程示意圖"
---
```

## 內容格式規範（標題層級、圖片 alt）
- 文章標題由 frontmatter `title` 提供；內文不再重複 `# H1`。
- 內文章節從 `## H2` 開始，必要時再使用 `### H3`。
- 圖片必填替代文字（alt），描述資訊而非僅寫「圖片」。
- 內文引用外部圖片建議附來源說明或 caption。
- 優先使用語意化 HTML/Markdown 結構，提升機器可讀性。
