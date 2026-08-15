"use client";
import { useMemo, useState } from "react";
import { PageIntro } from "@/components/site-shell";
import { ProjectCard } from "@/components/project-card";
import { categories, projects } from "@/lib/projects";
export default function WorkPage() { const [category, setCategory] = useState("全部"); const shown = useMemo(() => category === "全部" ? projects : projects.filter((project) => project.category === category), [category]); return <><PageIntro eyebrow="Selected work" title="讓策略與美感，往同一個方向前進。"><p>從品牌網站到數位產品，這些作品記錄了問題、過程，以及帶來的真實改變。</p></PageIntro><section className="work-section"><div className="filters" aria-label="作品分類">{categories.map((item) => <button key={item} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="work-grid">{shown.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section></>; }
