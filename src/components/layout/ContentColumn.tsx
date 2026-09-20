import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ContentColumn({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-3xl px-5 sm:px-8", className)}
    >
      {children}
    </Component>
  );
}
