"use client";

import { useState } from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { SocialProfilePreview } from "@/components/hero/social-profile-preview";

export function SocialLinks() {
  const [openProfile, setOpenProfile] = useState<string | null>(null);
  return (
    <div className="flex items-center gap-0.5">
      {SOCIAL_LINKS.map((social) => (
        <SocialProfilePreview
          key={social.icon}
          social={social}
          open={openProfile === social.icon}
          onOpenChange={(open) =>
            setOpenProfile((current) =>
              open ? social.icon : current === social.icon ? null : current,
            )
          }
        />
      ))}
    </div>
  );
}
