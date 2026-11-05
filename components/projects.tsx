"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { categories, projects, profile, type Category, type Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
export function Projects() {
  const [category, setCategory] = useState<Category>("All projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = category === "All projects" ? projects : projects.filter(p => p.category === category);
  return <>
    <div className="project-filters" role="group" aria-label="Filter projects">
      {categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={category === item ? "filter active" : "filter"}>{item}{item === "All projects" ? <span>{projects.length}</span> : null}</button>)}
    </div>
    <p className="sr-only" role="status">{visible.length} projects shown</p>
    <div className="projects-grid">
      {visible.map(project => <article key={project.id} className="project-card" data-testid="project-card">
        <button className="project-preview-button" onClick={() => setSelected(project)} aria-label={"View details for " + project.name}><div className="real-project-image"><Image src={project.image} alt={project.name+" website screenshot"} fill unoptimized sizes="(max-width: 767px) 100vw, 50vw" /></div><span className="project-hover"><ArrowUpRight /></span></button>
        <div className="project-meta"><span>{project.type}</span><span>{project.number} / {projects.length}</span></div>
        <div className="project-title"><h3><button onClick={() => setSelected(project)}>{project.name}</button></h3><button className="project-arrow" onClick={() => setSelected(project)} aria-label={"Read about " + project.name}><ArrowUpRight /></button></div>
        <p className="project-subtitle">{project.subtitle}</p>
        <ul className="project-tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </article>)}
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent>
        {selected ? <><p className="eyebrow mb-4">{selected.type}</p><DialogTitle className="pr-5 text-3xl font-semibold tracking-tight">{selected.name}</DialogTitle><DialogDescription className="mt-4 text-sm leading-7 text-muted-foreground">{selected.description}</DialogDescription><ul className="my-7 space-y-4">{selected.details.map(detail => <li key={detail} className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" />{detail}</li>)}</ul><div className="flex flex-wrap gap-3">{selected.href ? <Button asChild><a href={selected.href} target="_blank" rel="noopener noreferrer">{selected.linkLabel}<ArrowUpRight /></a></Button> : <Button asChild><a href={"https://wa.me/"+profile.whatsapp} target="_blank" rel="noopener noreferrer">Request a demo <ArrowUpRight /></a></Button>}<Button variant="outline" asChild><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github /> Browse GitHub</a></Button></div></> : null}
      </DialogContent>
    </Dialog>
  </>;
}
