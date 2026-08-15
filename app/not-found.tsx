import Link from "next/link";
export default function NotFound() { return <section className="not-found"><p className="eyebrow">404</p><h1>這一頁還在路上。</h1><Link className="button button-dark" href="/">回到首頁</Link></section>; }
