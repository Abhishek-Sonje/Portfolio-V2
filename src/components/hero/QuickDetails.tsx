import { QUICK_DETAILS } from "@/lib/data";

export default function QuickDetails() {
  return (
    <div className="flex flex-col w-full bg-background relative border-y border-border-subtle">
      {QUICK_DETAILS.map((detail, index) => (
        <div key={index} className="flex border-b border-border-subtle last:border-b-0">
          <div className="w-40 shrink-0 border-r border-border-subtle p-3 pl-4 flex items-center justify-between">
            <span className="font-mono text-foreground-tertiary text-sm">{detail.label}</span>
            <span className="text-base leading-none pr-1">{detail.icon}</span>
          </div>
          <div className="w-full py-3 px-4 flex items-center text-sm text-foreground-secondary">
            {detail.href ? (
              <a
                href={detail.href}
                target={detail.href.startsWith("http") ? "_blank" : "_self"}
                rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-foreground hover:underline underline-offset-4 decoration-border-strong transition-all duration-150"
              >
                {detail.value}
              </a>
            ) : (
              detail.value
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
