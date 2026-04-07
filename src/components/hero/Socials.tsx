import { SOCIALS } from "@/lib/data";

export default function Socials() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-background border-y border-border-subtle relative">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center gap-3">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-3 border md:border-x border-border-subtle text-foreground text-lg  hover:bg-surface-raised hover:text-foreground transition-all duration-150"
          >
            {social.icon}
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}
