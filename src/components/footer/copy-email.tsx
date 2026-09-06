"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div>
      <Button variant="ghost" onClick={copy}>
        {status === "copied" ? <Check /> : <Copy />}
        <span aria-live="polite">
          {status === "copied" ? "Email copied" : "Copy email"}
        </span>
      </Button>
      {status === "error" && (
        <p
          role="status"
          className="mt-2 break-all text-xs text-muted-foreground"
        >
          Copy manually: {email}
        </p>
      )}
    </div>
  );
}
