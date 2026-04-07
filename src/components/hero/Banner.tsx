import Logo from "../logo";
import Watermark from "../watermark";

export default function Banner() {
  return (
    <div className="relative w-full h-32 md:h-44 bg-background overflow-hidden flex items-center justify-center border-b border-border-subtle pointer-events-none select-none">
      {/* Watermark — centered behind */}
      <div className="absolute inset-0 flex items-center justify-center mt-25 z-0">
        <Watermark className="h-24 md:h-40 w-auto shrink-0 opacity-5 text-foreground-secondary" />
      </div>

      {/* Logo — on top */}
      <div className="relative z-10">
        <Logo className="h-10 md:h-12 w-auto text-foreground-secondary stroke-foreground-secondary" />
      </div>
    </div>
  );
}
