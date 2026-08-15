# Codex Prompts 與開發附件清單

## 交給 Codex 的附件

| 附件 | 檔名建議 | 必要性 |
| --- | --- | --- |
| 本套規格 | `01`–`03` 文件 | 必要 |
| 個人資料 | `content/profile.md`：簡介、經歷、連結、Email | 必要 |
| 作品資料 | `content/projects/*.md`：標題、角色、成果、文案 | 必要 |
| 視覺素材 | `assets/projects/<slug>/cover.webp`、`gallery-01.webp` | 必要 |
| 品牌資產 | `assets/brand/logo.svg`、favicon、字體授權 | 建議 |
| 合作規範 | 隱私政策、服務條款、品牌指南 | 上線前必要 |

## 圖片規格與示例生成提示詞

封面採 WebP／AVIF，目標小於 350 KB（首屏可放寬至 600 KB），保留 2x 原圖；封面比例 4:3 或 3:4，內容圖 16:9／原比例。僅使用自己擁有或已授權的素材。

```text
Editorial product-design case-study hero image, abstract sculptural composition made of translucent cobalt blue acrylic and warm off-white paper, soft directional studio light, refined art direction, generous negative space, no text, no logo, no watermark, 4:3 landscape
```

## 一次性專案初始化 Prompt

```text
你是資深全端工程師與設計系統實作者。請在目前資料夾建立 production-ready 的個人作品集網站。

先閱讀：01-product-and-design-spec.md、02-technical-architecture.md、03-codex-development-guide.md。以它們為最高規格；若衝突，優先產品與視覺規格。使用 Next.js 15、TypeScript strict、Tailwind、Prisma/PostgreSQL、Auth.js、Zod、React Hook Form、Vitest 與 Playwright。

先完成里程碑 0 與 1：建立專案、設計 token、響應式公開頁面與 3 筆可替換的本地假資料。不可先串接需要密鑰的服務。請先列出檔案計畫與假設；實作後執行 lint、typecheck、test 與 build；修正你造成的失敗；最後回報修改檔案、驗證結果與待提供資料。

視覺必須符合規格中的 editorial minimal 方向，繁中優先，手機優先，具備 WCAG AA、鍵盤導覽及 reduced-motion 支援。不要加入規格外的帳號註冊、付款或聊天室功能。
```

## 後端／後台 Prompt

```text
請在既有作品集專案完成里程碑 2–4。依 02-technical-architecture.md 建立 Prisma schema、migration、seed、受 Auth.js 保護的 /admin、專案 CRUD、媒體上傳簽名端點，以及安全的聯絡表單。

要求：所有輸入用 Zod；公開端只可讀 publishedAt 非空的作品；管理端每一條寫入皆驗證 session；聯絡端點實作 honeypot、Turnstile 可設定驗證與 IP+Email 限流；絕不輸出或寫入 secret。新增單元與 Playwright 測試，完成後依序執行格式化、lint、typecheck、test、build。提供 migration 與 .env.example，勿建立真實密鑰。
```

## 視覺 QA Prompt

```text
請審核目前網站是否符合 01-product-and-design-spec.md。於 360px、768px、1024px、1440px 檢查排版溢位、字級、留白、導覽、圖片裁切、鍵盤焦點、對比、reduced-motion、表單錯誤與 loading/empty/error 狀態。直接修正可安全確認的問題；不要改動內容策略或資料模型。最後列出每項驗證與未能自動驗證的項目。
```

## 上線 Prompt

```text
請為既有 Next.js 作品集建立上線前檢查：確認 production build、環境變數文件、安全標頭、metadata/sitemap/robots、Sentry、表單郵件設定與資料庫 migration 流程。不要自行部署、不要建立雲端帳號、不要要求或輸出任何密鑰。請產生可供我逐項完成的部署 checklist，並執行本機可做的驗證。
```
