import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectArtwork({ tone, title }: Pick<Project, "tone" | "title">) {
  return <div className={`artwork artwork-${tone}`} role="img" aria-label={`${title} 專案概念視覺`}><div className="artwork-orb" /><div className="artwork-panel" /><div className="artwork-line" /></div>;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={`project-card ${featured ? "featured-card" : ""}`}><Link href={`/work/${project.slug}`} className="project-link"><ProjectArtwork tone={project.tone} title={project.title} /><div className="project-meta"><p>{project.category} <span>—</span> {project.year}</p><h2>{project.title}</h2><span className="arrow" aria-hidden>↗</span></div></Link></article>;
}
