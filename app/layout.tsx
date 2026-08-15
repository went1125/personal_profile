import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: { default: "Lin Cheng — 數位設計師與全端開發者", template: "%s — Lin Cheng" }, description: "以品牌思維與完整實作，打造能長久生長的數位體驗。", metadataBase: new URL("https://lincheng.design") };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-Hant"><body><a className="skip-link" href="#main">跳至主要內容</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>; }
