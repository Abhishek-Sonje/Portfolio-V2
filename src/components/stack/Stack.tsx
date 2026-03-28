import { STACK_GROUPS } from "@/lib/data";

export default function Stack() {
  return (
    <section className="flex flex-col w-full bg-background relative border-y border-border-subtle">
      <div className="flex border-b border-border-subtle bg-surface-raised/30">
        <div className="w-full p-3 pl-4 flex items-center">
           <h2 className="text-[10px] font-semibold tracking-widest uppercase text-foreground-tertiary">Technical Stack</h2>
        </div>
      </div>

      <div className="flex flex-col">
        {STACK_GROUPS.map((group, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row border-b border-border-subtle last:border-b-0">
            <div className="w-full sm:w-40 shrink-0 sm:border-r border-border-subtle p-3 pl-4 flex flex-col justify-center border-b sm:border-b-0">
              <span className="font-mono text-sm text-foreground-tertiary">{group.label}</span>
            </div>
            <div className="w-full p-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded-sm bg-surface/30 border border-border-subtle text-foreground-secondary"
                >
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
