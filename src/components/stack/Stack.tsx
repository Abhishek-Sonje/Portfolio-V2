import { STACK_GROUPS } from "@/lib/data";
import Section from "@/components/layout/Section";
import { TechnologyList } from "@/components/stack/technology-list";

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
            <dd className="sm:col-span-3">
              <TechnologyList
                items={group.items}
                label={`${group.label} technologies`}
              />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
