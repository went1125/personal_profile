# 個人作品集網站：產品與視覺設計規格

## 目標與成功指標

服務對象是潛在客戶、招募者與合作夥伴。核心目標是以清楚的作品敘事建立信任，導向「查看作品」與「開始合作」。衡量：作品點擊率、聯絡轉換、閱讀深度、Core Web Vitals 與 Lighthouse（效能、無障礙、SEO 各 90+）。

## 資訊架構

```text
/                         首頁：定位、精選作品、服務、CTA
/work                     作品列表，可依領域／年份／服務篩選
/work/[slug]              作品個案研究
/about                    個人簡介、能力、經歷
/services                 服務內容與合作流程
/contact                  聯絡表單與社群連結
/journal                  （選配）文章列表
/admin                    受保護的內容管理後台
```

首頁順序：品牌宣言 → 精選 3 件作品 → 服務 → 個人／合作信任訊號 → CTA。每件作品都回答背景、問題、角色、過程、成果與下一步。

## 視覺方向

風格為「編輯感極簡」：深墨綠／暖白底色、電藍作為唯一強調色；圖片為主、留白大、排版精準。避免輪播、自動播放與過度玻璃擬態。

| 元素 | 規格 |
| --- | --- |
| 字體 | 標題 `DM Sans` 或 `Manrope`；內文 `Noto Sans TC`；用 `next/font` |
| 色彩 | Ink `#11201D`、Paper `#F8F6F1`、Accent `#3478F6`、Muted `#65716D`、Line `#DDE2DE` |
| 字級 | Hero 56–96px、H1 48–72px、H2 32–48px、內文 16–18px；行高 1.6 |
| 網格 | 最大寬 1280px；桌面 12 欄、平板 8 欄、手機 4 欄；邊距 24／20／16px |
| 圓角 | 12px；僅卡片懸停使用極淡陰影 |

## 響應式、互動與無障礙

- 斷點：`sm 640`、`md 768`、`lg 1024`、`xl 1280`；手機優先。
- 手機導覽收合為可鍵盤操作的選單，焦點永遠可見。
- 動畫限用於進場、圖片懸停與區塊 reveal，遵從 `prefers-reduced-motion`。
- 圖片有描述性 alt；色彩對比至少 WCAG AA；表單錯誤必須含文字提示。

## 頁面規格

**首頁：** 首屏含姓名／職稱、20 字內價值主張、主要 CTA「查看作品」、次要 CTA「開始合作」，以及一張 3:4 主視覺。精選作品使用不等高 editorial grid，顯示領域、名稱、年份與圖片。

**作品：** 列表可 client-side 篩選並保留 URL query。詳情順序：Hero、摘要、挑戰、策略、過程、成果指標、媒體、下一件作品、聯絡 CTA。每篇可設定 `isFeatured`、`publishedAt`、SEO description、OG image。

**聯絡：** 欄位為姓名、Email、公司（選填）、預算、專案類型、訊息、隱私政策同意。使用 honeypot、速率限制與正式環境 CAPTCHA；成功訊息不洩露系統細節。

## 內容、SEO、分析

繁中優先、英文可選；短句、具體、用成果說明能力。按鈕採動詞：查看案例、討論專案、下載履歷。每頁有唯一 title、description、canonical、Open Graph／Twitter metadata，並建立 sitemap、robots、Person／CreativeWork JSON-LD。分析僅記錄 `work_view`、`contact_submit`、`cta_click`，不記錄表單內容。
