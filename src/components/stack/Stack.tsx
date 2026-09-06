import { STACK_GROUPS } from "@/lib/data";
import Section from "@/components/layout/Section";

export default function Stack() {
  return (
    <Section
      id="stack"
      title="Tools I work with"
      description="The stack changes. The curiosity stays."
    >
      <dl className="divide-y divide-border">
        {STACK_GROUPS.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-4"
          >
            <dt className="text-sm font-medium">{group.label}</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6 text-muted-foreground sm:col-span-3">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
