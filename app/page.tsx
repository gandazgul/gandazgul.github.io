import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectCard } from "@/components/ProjectCard";
import { RunWieldAttribution } from "@/components/RunWieldAttribution";
import { SkillMatrix } from "@/components/SkillMatrix";
import { TerminalPanel } from "@/components/TerminalPanel";
import { experience, impacts, profile, projects, skills } from "@/data/profile";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-grid" aria-labelledby="intro-title">
        <TerminalPanel title="resume.portfolio" command={profile.command} className="hero-panel">
          <p className="eyebrow">{profile.location} · currently looking for new opportunities</p>
          <h1 id="intro-title">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="action-row" aria-label="Primary links">
            {profile.links.map((link) => (
              <ExternalLink
                key={link.href}
                className="button-like"
                href={link.href}
                download={link.kind === "download"}
              >
                <span className="link-icon" aria-hidden="true">{link.label === "LinkedIn" ? "in" : link.label === "GitHub" ? "<>" : "↓"}</span>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </TerminalPanel>
        <RunWieldAttribution />
      </section>

      <TerminalPanel title="selected-impact" command="grep -E 'scale|cost|reliability|AI' ./resume.md">
        <div className="impact-grid">
          {impacts.map((impact) => (
            <article className="impact-card" key={impact.label} {...{ "box-": "square" }}>
              <strong>{impact.metric}</strong>
              <h3>{impact.label}</h3>
              <p>{impact.detail}</p>
            </article>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="projects" command="gh repo list gandazgul --curated --not-forks">
        <div className="section-heading">
          <h2>Project showcase</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="experience" command="tail -n +1 ./experience.timeline">
        <ExperienceTimeline entries={experience} />
      </TerminalPanel>

      <TerminalPanel title="skills" command="ls ./skills --grouped">
        <SkillMatrix categories={skills} />
      </TerminalPanel>

      <TerminalPanel title="contact.me" command="send-message --via linkedin --fallback github --attach resume.pdf">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">contact me</p>
            <p>Message me on LinkedIn or GitHub. Check out the downloadable PDF for complete resume details.</p>
          </div>
          <div className="footer-links">
            {profile.links.map((link) => (
              <ExternalLink key={link.href} href={link.href} download={link.kind === "download"}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </TerminalPanel>

      <footer className="proper-footer" {...{ "box-": "square" }}>
        <p>
          Copyright © 2026 Carlos Ravelo. ❯ Built with{" "}
          <ExternalLink href="https://github.com/gandazgul/runwield">RunWield</ExternalLink>. Powered by Next.js and
          deployed on Vercel.
        </p>
      </footer>
    </main>
  );
}
