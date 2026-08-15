import Link from "next/link";
import { ProjectCard, ProjectArtwork } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() { return <>
  <section className="hero"><div className="hero-copy"><p className="eyebrow">Independent designer & developer</p><h1>將複雜，<br /><em>化為清晰。</em></h1><p className="hero-description">我協助有想法的團隊，從品牌策略、數位體驗到可維護的產品實作，做出值得被記住的作品。</p><div className="hero-actions"><Link className="button button-dark" href="/work">查看作品 <span>↓</span></Link><Link className="text-link" href="/contact">開始合作 <span>↗</span></Link></div></div><div className="hero-art"><ProjectArtwork tone="blue" title="Lin Cheng 的抽象主視覺" /><p>Based in Taipei<br />Working worldwide</p></div></section>
  <section className="featured section"><div className="section-heading"><p className="eyebrow">Selected work · 2024—2025</p><h2>精選作品</h2><Link className="text-link" href="/work">所有作品 <span>↗</span></Link></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}</div></section>
  <section className="statement section"><p className="eyebrow">How I work</p><h2>把每個選擇，<br />做成有意義的系統。</h2><div><p>好的數位體驗不只是看起來漂亮。它讓人理解、信任，並願意持續回來。</p><Link className="text-link" href="/about">認識我的方法 <span>↗</span></Link></div></section>
  <section className="cta-section"><p className="eyebrow">Have a thoughtful project?</p><h2>一起做點<br /><em>值得的事。</em></h2><Link className="button button-light" href="/contact">聊聊你的專案 <span>↗</span></Link></section>
</>; }
