# 給 Codex 的開發執行指南

## 工作原則

1. 先讀 `01-product-and-design-spec.md`、`02-technical-architecture.md`；不明確處列為假設，勿自行擴張功能。
2. 採 TypeScript strict；優先 Server Components，僅互動區塊使用 `use client`。
3. 所有外部輸入都以 Zod 驗證；禁止將 secret 放在 `NEXT_PUBLIC_` 或提交至版控。
4. 先完成可瀏覽的靜態作品體驗，再接資料庫、登入、上傳與後台。
5. 每個里程碑執行 format、lint、typecheck、test、build，並修正自身造成的錯誤。

## 實作里程碑

| 階段 | 交付物 | 完成條件 |
| --- | --- | --- |
| 0. 初始化 | Next.js、Tailwind、lint、環境範本、設計 token | `npm run build` 成功 |
| 1. 公開 UI | layout、導覽、首頁、作品、about、contact | 假資料可呈現，手機／桌面可用 |
| 2. 資料層 | Prisma schema、migration、seed、repository | seed 後由 DB 顯示 |
| 3. 後台 | Auth.js、受保護 admin、CRUD、媒體上傳 | 未登入不可存取，可編修作品 |
| 4. 聯絡與品質 | Zod、rate limit、email、E2E、metadata | 表單安全、CI 綠燈 |
| 5. 上線 | Vercel、DB、環境、Sentry、網域 | production smoke test 通過 |

## 建議 scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "test": "vitest run",
  "test:e2e": "playwright test",
  "db:generate": "prisma generate",
  "db:migrate": "prisma migrate dev",
  "db:seed": "tsx prisma/seed.ts"
}
```

## Code review checklist

- 是否符合設計 token、WCAG AA、鍵盤導覽與 reduced-motion？
- 是否使用 Next Image 與適當 `sizes`，避免不必要 client JavaScript？
- 是否有 loading、empty、error 狀態及可理解的錯誤文案？
- 資料庫查詢與 API 是否都驗證登入／發佈狀態？
- 新功能是否附測試與 metadata？
