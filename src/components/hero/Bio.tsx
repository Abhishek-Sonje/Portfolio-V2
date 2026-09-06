import { BIO } from "@/lib/data";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Bio() {
  return (
    <div className="bio-block">
      <p className="type-article-body">{BIO}</p>
      <div className="flex flex-wrap items-center gap-5 mt-2">
        <a href="mailto:work.abhishek036@gmail.com" className="primary-cta">
          Get in touch
        </a>
        <div className="flex items-center gap-3.5 text-foreground-secondary">
          <a
            href="https://github.com/Abhishek-Sonje"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-115 duration-200 p-1 flex items-center justify-center"
            aria-label="GitHub"
          >
            <FaGithub className="w-5.5 h-5.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-sonje-83a333209"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-115 duration-200 p-1 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5.5 h-5.5" />
          </a>
          <a
            href="https://x.com/Abhi_SDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-115 duration-200 p-1 flex items-center justify-center"
            aria-label="X"
          >
            <FaXTwitter className="w-5.5 h-5.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
