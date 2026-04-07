import { STACK_ITEMS } from "@/lib/data";
import Image from "next/image";

export default function Stack() {
  return (
    <section className="flex flex-col w-full bg-background relative border-y border-border-subtle">
      <div className="flex border-b border-border-subtle ">
        <div className="w-full pl-4 flex py-2">
          <h2 className="text-3xl font-semibold text-foreground tracking-tight leading-tight">
            Stack
          </h2>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-start items-center">
          {STACK_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center transition-transform md:hover:-translate-y-1 duration-300 w-12 h-12 md:w-14 md:h-14 "
            >
              <Image
                src={item.icon}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-contain shadow-sm rounded"
              />
              <div className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-surface/90 backdrop-blur-sm border border-border-subtle text-foreground text-sm font-medium px-2.5 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-10 translate-y-2 group-hover:translate-y-0">
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
