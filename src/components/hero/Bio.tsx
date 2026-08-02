import { BIO } from "@/lib/data";

export default function Bio() {
  return (
    <div className="bio-block">
      <p className="type-article-body">{BIO}</p>
      <a href="mailto:work.abhishek036@gmail.com" className="primary-cta">
        Get in touch
      </a>
    </div>
  );
}
