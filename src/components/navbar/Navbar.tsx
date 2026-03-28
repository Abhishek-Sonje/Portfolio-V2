"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex items-center justify-between h-14 max-w-3xl mx-auto px-5">
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-foreground text-lg tracking-tighter">
          AS
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground-secondary">
          <Link href="#work" className="hover:text-foreground transition-all duration-150">
            Work
          </Link>
          <Link href="#projects" className="hover:text-foreground transition-all duration-150">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-all duration-150">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhishek036"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-all duration-150"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground-secondary hover:text-foreground transition-all duration-150 flex items-center justify-center w-8 h-8 rounded-md hover:bg-surface-raised"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" /> /* Placeholder to prevent layout shift */
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
