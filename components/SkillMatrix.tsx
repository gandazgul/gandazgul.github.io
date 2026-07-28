import type { SkillCategory } from "@/data/profile";

export function SkillMatrix({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="skill-matrix">
      {categories.map((category) => (
        <section className="skill-card" key={category.name} {...{ "box-": "square" }}>
          <h3>{category.name}</h3>
          <p className="skill-list">
            {category.skills.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < category.skills.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </section>
      ))}
    </div>
  );
}
