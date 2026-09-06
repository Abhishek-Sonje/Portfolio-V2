import Link from "next/link";
import { NAVIGATION } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 border-b px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Abhishek Sonje, home"
          className="flex size-10 items-center font-semibold tracking-tight"
        >
          as<span className="text-link">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-3"
        >
          {NAVIGATION.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2 py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              {item.label}
            </a>
          ))}
          <span aria-hidden="true" className="mx-1 h-4 border-l" />
          <ThemeToggle />
        </nav>
        <ScrollProgress />
      </div>
    </header>
  );
}
