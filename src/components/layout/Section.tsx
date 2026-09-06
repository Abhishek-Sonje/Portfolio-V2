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
      className="-mx-5 scroll-mt-24 border-t px-5 py-8 sm:-mx-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
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
