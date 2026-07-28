import type { ExperienceEntry } from "@/data/profile";

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li className="timeline__item" key={`${entry.company}-${entry.role}`}>
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content" {...{ "box-": "square" }}>
            <p className="eyebrow">{entry.period}</p>
            <h3>{entry.role}</h3>
            <p className="timeline__company">{entry.company}</p>
            <p>{entry.context}</p>
            <ul {...{ "marker-": "tree" }}>
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
