"use client";
import { QUICK_DETAILS } from "@/lib/data";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export default function QuickDetails() {
  const [copied, setCopied] = useState<number | null>(null);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };
  const handleCopy = async (text: string,index:number) => {

    await copyToClipboard(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    // The Grid Container: 1 column on mobile, 2 columns on larger screens
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
      {QUICK_DETAILS.map((detail, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-4    bg-background-secondary/50  transition-all duration-300"
        >
          {/* Icon Container: Replaces the text labels completely */}
          <div className="flex shrink-0 items-center justify-center w-6 h-6 text-foreground-secondary  transition-all duration-300">
            {/* The icon itself scales up slightly on hover */}
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg 
  border border-border bg-surface-overlay/80 
  ring-1 ring-border-subtle ring-offset-2 ring-offset-background
  "
            >
              {detail.icon}
            </div>
          </div>

          {/* Value / Link Container */}
          <div className="min-w-0 text-sm font-mono text-foreground group-hover:text-foreground transition-colors duration-300 ">
            {detail.href ? (
              <div className="flex gap-2 justify-center items-center">
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  // 'truncate' ensures long emails or links don't break the bento box layout
                  className="truncate block w-full outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 rounded-sm hover:underline underline-offset-4  "
                >
                  {detail.value}
                </a>
                {detail.isCopyable && (
                  <button
                    className="hidden group-hover:block hover:text-foreground p-1 rounded "
                    onClick={() => handleCopy(detail.value,index)}
                  >
                    {copied === index ? <FiCheck /> : <FiCopy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            ) : (
              <div>
                <span className="truncate block w-full">{detail.value}</span>
                {detail.isCopyable && (
                  <button
                    className="hidden group-hover:block hover:text-foreground p-1 rounded "
                    onClick={() => handleCopy(detail.value,index)}
                  >
                    {copied === index ? <FiCheck /> : <FiCopy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
