import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative flex flex-row border-border-subtle border-b">
      <div className="relative flex justify-center md:block">
        {/* Inner circle mask */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative md:border-r border-border-subtle mt-4 md:mt-0 flex items-center justify-center">
          <Image
            src="/me.png"
            alt="Abhishek Sonje"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top rounded-full border border-border-subtle p-1"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col w-full justify-end text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-medium text-foreground border-y md:border-t-0 border-border-subtle md:pl-4 py-2  ">
          Abhishek Sonje
        </h1>
        <p className="text-sm font-mono py-2 md:pl-4 text-transparent bg-clip-text bg-[linear-gradient(110deg,var(--color-foreground-secondary)_35%,var(--color-foreground)_50%,var(--color-foreground-secondary)_65%)] bg-size-[200%_100%] animate-shimmer">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
