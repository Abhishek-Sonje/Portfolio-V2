import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/technologies";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function TechnologyList({
  items,
  label,
  compact = false,
}: {
  items: string[];
  label: string;
  compact?: boolean;
}) {
  return (
    <ul
      aria-label={label}
      className={cn("flex flex-wrap items-center", compact ? "gap-1" : "gap-2")}
    >
      {items.map((name) => {
        const technology = TECHNOLOGIES[name];
        const Icon = technology?.icon;
        const hasLogo = Icon || technology?.logoSrc;
        return (
          <li key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  tabIndex={0}
                  role="img"
                  aria-label={name}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
                    compact ? "min-h-8 min-w-8" : "min-h-10 min-w-10",
                    !hasLogo &&
                      "border border-border px-2 text-xs text-muted-foreground",
                  )}
                >
                  {technology?.logoSrc ? (
                    <Image
                      src={technology.logoSrc}
                      alt=""
                      width={20}
                      height={20}
                      className={cn(
                        "size-5 object-contain",
                        technology.invertOnDark && "dark:invert",
                      )}
                    />
                  ) : Icon ? (
                    <Icon
                      aria-hidden="true"
                      className={compact ? "size-4" : "size-5"}
                    />
                  ) : (
                    <span aria-hidden="true">{name}</span>
                  )}
                </span>
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
}
