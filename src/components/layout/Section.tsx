import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** When true, adds top padding for scroll-margin under fixed nav */
  anchored?: boolean;
};

/**
 * Vertical section wrapper with design-system spacing.
 */
export default function Section({
  children,
  id,
  className = "",
  anchored = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "w-full",
        anchored ? "scroll-mt-[calc(var(--space-10)+3.5rem)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
