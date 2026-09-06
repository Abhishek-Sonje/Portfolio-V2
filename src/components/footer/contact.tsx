import { ArrowUpRight, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/footer/copy-email";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t py-12 sm:py-16"
    >
      <h2
        id="contact-heading"
        className="text-2xl font-semibold tracking-tight"
      >
        {PROFILE.contactHeading}
      </h2>
      <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
        {PROFILE.contactDescription}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${PROFILE.email}`}>
            <Mail />
            Say hello
            <ArrowUpRight />
          </a>
        </Button>
        <CopyEmail email={PROFILE.email} />
      </div>
    </section>
  );
}
