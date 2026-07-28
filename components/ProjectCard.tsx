import type { Project } from "@/data/profile";
import { BadgeList } from "./BadgeList";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} {...{ "box-": "square" }}>
      <div className="project-card__topline">
        <h3>{project.name}</h3>
        {project.featured && <span {...{ "is-": "badge", "variant-": "foreground0" }}>featured</span>}
      </div>
      <p>{project.description}</p>
      <p className="project-card__impact">{project.impact}</p>
      <BadgeList items={project.tech} featured={project.featured} />
      <ExternalLink className="text-link" href={project.href}>
        repo --open {project.name}
      </ExternalLink>
    </article>
  );
}
