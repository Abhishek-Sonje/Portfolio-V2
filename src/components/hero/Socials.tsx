import { SOCIALS } from "@/lib/data";

export default function Socials() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-background border-y border-border-subtle relative">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 items-center py-4 md:py-0  md:gap-3 gap-4 ">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 md:px-3 md:py-3 md:border md:border-x  text-foreground md:text-lg text-base hover:bg-surface-raised border-border-subtle hover:text-foreground transition-all duration-150"
          >
            {social.icon}
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}
