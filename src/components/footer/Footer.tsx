import VisitorCounter from "@/components/footer/VisitorCounter";

export default function Footer() {
  return (
    <footer className="site-footer w-full max-w-[var(--content-max-width)] mx-auto flex flex-col items-center justify-center text-center">
        {/* Signature */}
        <span className="font-cursive text-[#363737] text-[48px] md:text-[56px] select-none leading-none">
          Abhishek
        </span>

        {/* Details */}
        <div className="flex flex-col gap-[var(--space-3)] mt-[var(--space-3)]">
          <p className="type-meta-byline text-[#81807d]">
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
          <p className="type-meta-byline text-[#81807d]">
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
        <VisitorCounter />
    </footer>
  );
}
