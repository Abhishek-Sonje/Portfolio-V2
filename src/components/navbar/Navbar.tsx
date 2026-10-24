import Link from "next/link";
import { NAVIGATION } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-3xl items-center justify-between gap-2 border-b px-5 sm:gap-3 sm:px-8">
        <Link
          href="/"
          aria-label="Abhishek Sonje, home"
          className="flex size-8 shrink-0 items-center font-semibold tracking-tight sm:size-10"
        >
          as<span className="text-link">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex items-center sm:gap-3"
        >
          {NAVIGATION.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-1 py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-2 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className="mx-1 hidden h-4 border-l sm:block"
          />
          <ThemeToggle />
        </nav>
        <ScrollProgress />
      </div>
    </header>
  );
}
