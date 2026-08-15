# AGENTS.md — personal_profile

## 專案目的

這是 Lin Cheng 的專業個人作品集網站。目標是以清楚的個案敘事建立信任，將潛在客戶、招募者與合作夥伴導向「查看作品」與「開始合作」。繁體中文優先，必要時可加入英文內容。

## 先讀的文件

每次開始工作前，依序閱讀：

1. `outputs/01-product-and-design-spec.md`：產品、資訊架構、視覺與無障礙規格。
2. `outputs/02-technical-architecture.md`：未來資料庫、API、安全與部署規格。
3. `outputs/03-codex-development-guide.md`：里程碑、測試與 review 標準。
4. `outputs/04-prompts-and-assets.md`：素材規格與可重用開發提示詞。

若規格衝突，優先順序為產品與視覺規格 → 技術架構 → 本檔案。不要自行加入帳號註冊、付款、聊天功能或其他未被要求的範圍。

## 目前狀態與技術基線

目前完成里程碑 0–1：Next.js 15、TypeScript strict、Tailwind CSS、React Hook Form、Zod、Vitest、Playwright 設定；公開頁面與 3 筆可替換的本地作品資料已完成。

- 公開頁：`/`、`/work`、`/work/[slug]`、`/about`、`/services`、`/contact`。
- 可替換內容：`lib/projects.ts`；不要把真實內容散落在元件中。
- 設計 token 與響應式規則：`app/globals.css`。
- 第一階段不使用資料庫、Auth.js、媒體上傳、Email 或任何需要密鑰的服務。
- 未來後端依 `outputs/02-technical-architecture.md` 實作 PostgreSQL、Prisma、Auth.js、Cloudinary/S3、Turnstile 與 Sentry。

## 設計與內容規則

- 風格：editorial minimal；深墨綠 `#11201D`、暖白 `#F8F6F1`、電藍 `#3478F6`；強調留白、清楚排版與可讀性。
- 手機優先；從 360px 至 1440px 不可出現內容溢位。
- 維持 WCAG AA、可見鍵盤焦點、描述性 alt、可理解的表單錯誤，並支援 `prefers-reduced-motion`。
- 元件優先使用 Server Components；只有互動區塊可使用 `use client`。
- 使用具體、短句、以成果說明能力的繁中內容。

## 工程、Git 與發布規則

- 使用 TypeScript strict；外部輸入均以 Zod 驗證；不得把密鑰放進 `NEXT_PUBLIC_*` 或 Git。
- 修改功能時處理 loading、empty、error 狀態，並補充測試。
- 完成後執行：`npm run lint`、`npm run typecheck`、`npm run test`、`npm run build`。
- `.github/workflows/quality.yml` 會在 `main` 與 PR 上檢查；維護 package lockfile 同步，使 `npm ci` 可用。
- 僅提交當前需求的檔案；不要提交 `.env`、`node_modules`、`.next` 或編譯輸出。
- 大改動用 `agent/<簡短描述>` 分支與 Draft PR；回報修改、驗證及待提供資料。

## 使用者待提供內容

真實姓名／職稱、個人簡介、作品案例文案、已授權圖片、聯絡 Email、社群連結、隱私政策與服務條款。提供後，將假資料與抽象 CSS 視覺依序替換。
