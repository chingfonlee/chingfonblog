# Anthropic Agent Skills 參考指南

目的：記錄 Anthropic 官方 Agent Skills 系統的使用方式，作為本專案未來導入 Skill 的參考依據。
來源：[anthropics/skills](https://github.com/anthropics/skills)

---

## 什麼是 Skills？

Skills 是由**資料夾 + 指令檔**組成的模組化能力擴充包，讓 Claude 能動態載入特定領域的知識與流程，以更可靠、可重複的方式完成專門任務。

典型應用場景：
- 依公司品牌指南產出文件
- 用組織特定的工作流分析資料
- 自動化個人重複性任務
- 產出特定格式文件（PDF、PPTX、XLSX、DOCX）

---

## Skill 的檔案結構

每個 Skill 都是一個**獨立資料夾**，至少包含一個 `SKILL.md` 檔案：

```
my-skill/
├── SKILL.md          # (必要) 主指令檔：YAML frontmatter + Markdown 指令
├── scripts/          # (選用) 輔助腳本與工具
├── examples/         # (選用) 參考實作與使用範例
└── resources/        # (選用) 額外檔案、模板或素材
```

### SKILL.md 格式

```markdown
---
name: my-skill-name
description: 清楚描述此 Skill 的功能與使用時機
---

# My Skill Name

[在此撰寫 Claude 執行此 Skill 時需遵循的指令]

## Examples
- 使用範例 1
- 使用範例 2

## Guidelines
- 準則 1
- 準則 2
```

**YAML Frontmatter 必填欄位：**

| 欄位 | 說明 |
| --- | --- |
| `name` | Skill 的唯一識別名稱（小寫、用連字號分隔） |
| `description` | 完整描述 Skill 做什麼、何時該被使用 |

Markdown 正文部分包含：指令、範例、準則等，Claude 會在 Skill 被啟用時遵循這些內容。

---

## Antigravity 使用方式

在專案中使用這些 Skills 時，您不需要安裝特定的外掛或調用 API。Antigravity 可以自然地理解與應用您放入專案資料夾內的 Skills：

1. **放置 Skill 資料夾：**
   確保您要使用的 Skill 資料夾已經放在專案的目錄中（例如本專案剛下載的 `skills/` 或 `.agent/skills/` 之中）。
2. **在對話中呼叫：**
   當您有相關需求時，只要在對話視窗中提示 Antigravity 參考該特定的 `SKILL.md`，例如：
   > 「請參考 `skills/docx/SKILL.md` 來幫我產出 Word 檔」
   > 或
   > 「請根據 `skills/blog-post-generator/` 這個 skill 來寫一篇新的部落格文章」
3. **自動讀取與執行：**
   如果接收到指令，或是 Antigravity 判斷發現某個定義好的 Skill 與當前任務高度相關，它會呼叫檔案讀取工具去細看該資料夾下的 `SKILL.md` 內容。在閱讀完內部詳細的 Markdown 指示、規範與範例後，就會完美精準地按照您定義的 Skill 去執行剩下的實作。

---

## 官方提供的 Skill 分類

| 類別 | 說明 |
| --- | --- |
| Creative & Design | 藝術、音樂、設計相關任務 |
| Development & Technical | Web App 測試、MCP Server 產生等技術任務 |
| Enterprise & Communication | 企業通訊、品牌經營等工作流 |
| Document Skills | PDF、PPTX、XLSX、DOCX 文件的建立與編輯（Source-available） |

---

## 為本專案建立自訂 Skill 的步驟

如果未來需要為本專案建立自訂的 Skill（例如：自動依據 `docs/2002_CONTENT_MODEL_SPEC.md` 產出符合 schema 的文章 frontmatter），可依以下步驟：

1. **建立資料夾：** 在專案的 `skills/` 或隱藏資料夾（如 `.agent/skills/`）建立一個新目錄。
2. **建立 SKILL.md：** 在子資料夾中撰寫 `SKILL.md`，包含 YAML frontmatter 與詳細的 Markdown 指令。
3. **放入輔助資源：** 將相關的知識庫、範本、腳本、圖檔放入同一資料夾。
4. **測試與執行：** 直接要求 Antigravity 閱讀並根據該 Skill 試著完成您的任務，並確認執行的結果是否符合預期。

### 範例：Blog Post Generator Skill

```markdown
---
name: blog-post-generator
description: 依據 lee-chingfon 部落格的 Content Model 規格，產出符合 Zod schema 的文章 frontmatter 與初始內容。
---

# Blog Post Generator

依據 `docs/2002_CONTENT_MODEL_SPEC.md` 的欄位定義與限制產出文章。

## 必填欄位
- title: 8-80 字元
- description: 30-160 字元
- category: ai-practice | productivity-system | life-thinking
- pubDate: YYYY-MM-DD
- slug: ^[a-z0-9-]+$
- tags: 小寫 slug 格式陣列
- draft: true (預設)
- coverImage: Cloudinary URL
- coverImageAlt: 圖片替代文字

## 產出格式
輸出完整的 Markdown 檔案，包含 YAML frontmatter 與文章骨架。
```

---

## 官方參考連結
- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Equipping agents for the real world with Agent Skills](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [GitHub: anthropics/skills](https://github.com/anthropics/skills)

## 文件互相引用
- 內容模型規格：`docs/2002_CONTENT_MODEL_SPEC.md`
- 專案修改歷史：`docs/9004_PROJECT_CHANGELOG.md`
- `/code` 觸發規則：`code.md`
