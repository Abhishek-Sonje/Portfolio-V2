import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="work"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="pb-6">
        <h2 className="type-section-heading">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {idx > 0 && <hr className="border-t border-border-subtle pt-4" />}
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="type-bold-body text-foreground-heading">
                {exp.role}
              </h3>
              <span className="type-meta-byline text-foreground-secondary">
                {exp.company} &middot; {exp.period}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {exp.points.map((point, pointIdx) => (
                <p key={pointIdx} className="type-article-body text-foreground leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
