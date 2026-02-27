---
title: "Astro + Decap + Netlify 最小流程"
description: "以 Astro 作為 SSG、Decap 作為 CMS、Netlify 作為部署平台的內容工作流範例。"
pubDate: 2026-02-26
dateModified: 2026-02-26
slug: "astro-decap-netlify-stack"
tags:
  - astro
  - decap
  - netlify
draft: true
coverImage: "https://res.cloudinary.com/example/image/upload/v1700000000/blog/astro-decap-cover.jpg"
coverImageAlt: "Astro、Decap 與 Netlify 的內容發布流程圖"
canonicalURL: "https://example.com/posts/astro-decap-netlify-stack"
---

## 為什麼使用這個組合

這篇文章作為 Step 3 的內容模型驗證範例，示範符合 schema 的 frontmatter 與基本寫作格式。

## 內容結構檢查

文章內文從 H2 開始，避免重複 H1，並保留語意化段落結構。

### 圖片與 metadata

內容圖片應使用 Cloudinary URL；固定 UI 資產則維持在 repo 的 `public/assets/`。
