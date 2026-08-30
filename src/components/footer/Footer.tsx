"use client";

import ScrollReveal from "@/components/layout/ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal>
      <footer className="w-full max-w-[var(--content-max-width)] mx-auto px-[var(--content-gutter)] pt-4 pb-16 sm:pb-20 flex flex-col items-center justify-center text-center">
        <div className="flex max-w-xl flex-col items-center gap-4 pb-10">
          <h2 className="type-section-heading text-balance">
            Building something technically ambitious?
          </h2>
          <p className="type-article-body text-foreground-secondary text-balance">
            I enjoy turning difficult product ideas into clear, dependable software.
          </p>
          <a href="mailto:work.abhishek036@gmail.com" className="primary-cta min-h-11">
            Start a conversation
          </a>
        </div>

        {/* Signature */}
        <span className="font-cursive text-foreground-heading text-[48px] md:text-[56px] select-none leading-none">
          Abhishek
        </span>

        {/* Details */}
        <div className="flex flex-col gap-[var(--space-3)] mt-[var(--space-3)]">
          <p className="type-meta-byline text-foreground-secondary">
            Built by yours truly. Check out the{" "}
            <a
              href="https://github.com/Abhishek-Sonje/Portfolio-V2"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline"
            >
              code
            </a>{" "}
            and see how it came together.
          </p>
          <p className="type-meta-byline text-foreground-secondary">
            Find me on{" "}
            <a
              href="https://github.com/Abhishek-Sonje"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/abhishek-sonje-83a333209"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline"
            >
              LinkedIn
            </a>
            , and{" "}
            <a
              href="https://x.com/Abhi_SDev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline"
            >
              X
            </a>
            .
          </p>
        </div>
      </footer>
    </ScrollReveal>
  );
}
