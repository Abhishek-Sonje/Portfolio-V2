"use client";

import React, { useRef, useState } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full px-4 pb-4 mt-12">
      <footer
        id="contact"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[50vh]  bg-background flex flex-col justify-between overflow-hidden cursor-crosshair group"
      >
        {/* ========================================================
          BACKGROUND / DIM STATE
          ======================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-20"}`}
        >
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <text
              x="51%"
              y="80%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              className="font-serif text-foreground-tertiary"
              style={{ fontSize: "260px", fontWeight: 500 }}
              transform="center"
            >
              ABHISHEK
            </text>
          </svg>
        </div>

        {/* ========================================================
          THE SILVER SPOTLIGHT REVEAL LAYER
          ======================================================== */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            // The flashlight effect: completely visible at the center, fading out to transparent
            WebkitMaskImage: `radial-gradient(circle 250px at ${position.x}px ${position.y}px, black 10%, transparent 80%)`,
            maskImage: `radial-gradient(circle 250px at ${position.x}px ${position.y}px, black 10%, transparent 80%)`,
          }}
        >
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <defs>
              {/* Metallic Silver Gradient */}
              <linearGradient
                id="silver-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#e5e5e5" />
                <stop offset="50%" stopColor="#a3a3a3" />{" "}
                {/* Darker silver center */}
                <stop offset="70%" stopColor="#e5e5e5" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <text
              x="51%"
              y="80%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#silver-gradient)"
              className="font-serif drop-shadow-lg"
              style={{ fontSize: "260px", fontWeight: 500 }}
              transform="center"
            >
              ABHISHEK
            </text>
          </svg>
        </div>

        <div className="flex-grow"></div>

        {/* ========================================================
          FOOTER BOTTOM BAR
          ======================================================== */}
        <div className="relative z-10 w-full mt-auto border-t border-border-subtle bg-background/60 backdrop-blur-md p-6 sm:px-10 rounded-b-[2.5rem]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-foreground-tertiary">
              Abhishek Sonje · 2026
            </p>

            <div className="flex items-center gap-6 text-sm font-mono text-foreground-tertiary">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-border-strong animate-pulse" />
                Crafting interfaces
              </span>
              <a
                href="https://github.com/Abhishek-Sonje"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sonje-83a333209"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
