import Link from "next/link";
import type { ReactNode } from "react";

const links = [{ href: "/work", label: "作品" }, { href: "/about", label: "關於我" }, { href: "/services", label: "服務" }];

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="Lin Cheng 首頁">LC<span>.</span></Link><nav aria-label="主要導覽"><div className="nav-links">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link className="nav-contact" href="/contact">開始合作 <span aria-hidden>↗</span></Link></div></nav></header>;
}

export function SiteFooter() {
  return <footer className="footer"><p>© {new Date().getFullYear()} Lin Cheng. Designed with intention.</p><div><a href="mailto:hello@lincheng.design">Email</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></div></footer>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <div className="intro-copy">{children}</div>}</section>;
}
