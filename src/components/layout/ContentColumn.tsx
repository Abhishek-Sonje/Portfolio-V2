import { ReactNode } from "react";

type ContentColumnProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "main" | "section" | "article";
};

/**
 * Centered editorial column — max-width from --content-max-width.
 */
export default function ContentColumn({
  children,
  className = "",
  as: Tag = "div",
}: ContentColumnProps) {
  return (
    <Tag className={`content-column w-full ${className}`.trim()}>
      {children}
    </Tag>
  );
}
