import Image from "next/image";
import { Building2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import Section from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Building for clients, learning with teams."
    >
      <Accordion type="single" collapsible>
        {EXPERIENCE.map((item) => (
          <AccordionItem key={item.company} value={item.company}>
            <AccordionTrigger className="px-2">
              <span className="flex min-w-0 flex-1 items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-card">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-md object-contain"
                    />
                  ) : (
                    <Building2
                      aria-hidden="true"
                      className="size-5 text-muted-foreground"
                    />
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:justify-between sm:gap-4">
                  <span>
                    <span className="block text-sm font-semibold">
                      {item.company}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                  <span className="text-xs leading-6 text-muted-foreground sm:text-right">
                    <span className="block tabular-nums">{item.period}</span>
                    <span className="hidden sm:block">{item.type}</span>
                  </span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-2 sm:pl-17">
              <ul className="list-disc space-y-2 pl-4 leading-6 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                {item.stack.join(" · ")}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
