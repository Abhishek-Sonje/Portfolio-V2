import { STACK_GROUPS } from "@/lib/data";

export default function Stack() {
  return (
    <section
      id="stack"
      className="flex flex-col w-full bg-background relative scroll-mt-[calc(var(--nav-height)+var(--space-5))]"
    >
      <div className="pb-6">
        <h2 className="type-section-heading">Tech Stack</h2>
      </div>
      <div className="flex flex-col gap-6">
        {STACK_GROUPS.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
          >
            <span className="type-meta-byline text-foreground-secondary min-w-[120px] shrink-0 font-medium">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIdx) => (
                <span key={itemIdx} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
