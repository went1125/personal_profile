export type Project = { slug: string; title: string; year: string; category: string; services: string; excerpt: string; challenge: string; outcome: string; featured: boolean; tone: "blue" | "rose" | "lime" };

export const projects: Project[] = [
  { slug: "aura-health", title: "Aura Health", year: "2025", category: "數位產品", services: "品牌策略 · 產品設計", excerpt: "讓日常照護變得更直覺、更有人味的健康平台。", challenge: "將複雜的健康資訊轉換為能每日採取的溫柔行動。", outcome: "完成由研究至上線的產品系統，試用完成率提升 32%。", featured: true, tone: "blue" },
  { slug: "mori-house", title: "Mori House", year: "2024", category: "品牌網站", services: "藝術指導 · 網頁設計", excerpt: "一個以光影、材質與留白說故事的室內設計品牌。", challenge: "讓作品本身成為第一句品牌語言，而不是裝飾。", outcome: "建立可持續擴充的個案敘事系統與雙語網站。", featured: true, tone: "rose" },
  { slug: "atlas-archive", title: "Atlas Archive", year: "2024", category: "文化科技", services: "體驗策略 · 前端開發", excerpt: "為獨立出版與研究者打造的數位典藏閱讀體驗。", challenge: "讓大量資料仍能保留探索與發現的樂趣。", outcome: "設計篩選、閱讀與收藏流程，讓檔案成為可親近的內容。", featured: true, tone: "lime" }
];

export const categories = ["全部", ...new Set(projects.map((project) => project.category))];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
