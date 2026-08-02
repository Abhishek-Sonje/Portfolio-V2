import { EXPERIENCE, RESUME_URL } from "@/lib/data";
import { FaBuilding } from "react-icons/fa6";

export default function Experience() {
  return (
    <section
      id="work"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="mb-8 section-title-container">
        <h2 className="type-section-heading">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-8 mt-2">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {idx > 0 && <hr className="border-t border-border-subtle pt-2" />}

            <div className="flex items-start gap-4">
              {/* Logo Frame */}
              <div className="w-12 h-12 rounded-lg border border-border-subtle bg-white flex-shrink-0 flex items-center justify-center overflow-hidden p-1 shadow-sm">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <FaBuilding className="w-5 h-5 text-foreground-secondary" />
                )}
              </div>

              {/* Role & Company Details */}
              <div className="flex-grow flex flex-col gap-1.5 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="type-bold-body text-foreground-heading truncate">
                    {exp.role}
                  </h3>
                  <span className="type-meta-byline text-foreground-secondary shrink-0">
                    {exp.company} &middot; {exp.period}
                  </span>
                </div>

                <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
                  {exp.points.map((point, pointIdx) => (
                    <li
                      key={pointIdx}
                      className="font-serif text-[16px] leading-[26px] text-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
