import Link from "next/link";
import { PageIntro } from "@/components/site-shell";
const services = [["01", "品牌與網站", "從定位、視覺語言到一個真正能承載內容與成長的網站。"], ["02", "數位產品", "釐清需求、建立流程，將複雜服務轉換為易用的產品體驗。"], ["03", "設計系統", "建立可共用的元件與原則，讓品質不隨著產品規模而流失。"]];
export default function ServicesPage() { return <><PageIntro eyebrow="Services" title="需要的不只是畫面，而是一個前進的方向。"><p>依據團隊的階段與問題，我可以加入一段明確的專案，也可以成為長期的設計夥伴。</p></PageIntro><section className="services-list">{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</section><section className="process section"><p className="eyebrow">Process</p><h2>理解 → 定義 → 製作 → 持續優化</h2><Link className="button button-dark" href="/contact">討論合作方式 ↗</Link></section></>; }
