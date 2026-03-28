import { SOCIALS } from "@/lib/data";

export default function Socials() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-background border-y border-border-subtle relative">
      <div className="w-full sm:w-40 shrink-0 sm:border-r border-b sm:border-b-0 border-border-subtle p-3 pl-4 flex items-center justify-between sm:justify-start">
        <span className="font-mono text-foreground-tertiary text-sm">Socials</span>
      </div>
      <div className="w-full p-4 flex flex-wrap items-center gap-3">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-foreground-secondary text-sm font-medium hover:border-border-strong hover:bg-surface-raised hover:text-foreground transition-all duration-150"
          >
            {social.icon}
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}
