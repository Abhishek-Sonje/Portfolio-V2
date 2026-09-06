type SectionDividerProps = {
  className?: string;
};

/**
 * Hairline divider between major page blocks.
 */
export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={`section-divider border-0 ${className}`.trim()}
    />
  );
}
