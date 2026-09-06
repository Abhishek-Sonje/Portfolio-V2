import { ArrowUpRight, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/footer/copy-email";
import Section from "@/components/layout/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      title={PROFILE.contactHeading}
      description={PROFILE.contactDescription}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${PROFILE.email}`}>
            <Mail />
            Say hello
            <ArrowUpRight />
          </a>
        </Button>
        <CopyEmail email={PROFILE.email} />
      </div>
    </Section>
  );
}
