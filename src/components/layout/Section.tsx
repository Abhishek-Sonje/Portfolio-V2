import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  description,
  action,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t py-12 sm:py-16"
    >
      <div className="mb-7 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2
            id={`${id}-heading`}
            className="text-xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
