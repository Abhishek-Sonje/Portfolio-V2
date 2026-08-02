import Image from "next/image";
import { HERO } from "@/lib/data";

export default function Hero() {
  return (
    <header className="hero-block">
      <div className="hero-banner" aria-hidden={!HERO.bannerSrc}>
        {HERO.bannerSrc ? (
          <Image
            src={HERO.bannerSrc}
            alt=""
            fill
            priority
            sizes="680px"
            className="hero-banner-image"
          />
        ) : null}
      </div>

      <div className="hero-identity">
        <div className="hero-avatar">
          <Image
            src={HERO.avatarSrc}
            alt={HERO.name}
            fill
            priority
            sizes="(max-width: 640px) 96px, 128px"
            className="hero-avatar-image"
          />
        </div>

        <div className="hero-name-block">
          <h1 className="type-post-title">{HERO.name}</h1>
          <p className="type-subtitle-deck">{HERO.tagline}</p>
        </div>
      </div>
    </header>
  );
}
