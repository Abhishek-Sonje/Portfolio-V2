"use client";

import { FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="content-column flex items-center justify-between h-14 px-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center shrink-0 w-24 overflow-hidden"
        >
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Logo
                  draw={false}
                  className="h-6 w-full text-foreground stroke-foreground"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-1">
          {/* Nav links */}
          <div className="flex items-center mr-1 sm:mr-2 gap-1 sm:gap-0">
            <Link
              href="#stack"
              className="type-ui-label text-foreground-secondary hover:text-accent transition-colors duration-150 px-2 py-1 rounded-md"
            >
              Stack
            </Link>
            <Link
              href="#projects"
              className="type-ui-label text-foreground-secondary hover:text-accent transition-colors duration-150 px-2 py-1 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="#work"
              className="type-ui-label text-foreground-secondary hover:text-accent transition-colors duration-150 px-2 py-1 rounded-md"
            >
              Work
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-border mx-2 shrink-0" />

          {/* Icons */}
          <a
            href="https://github.com/Abhishek-Sonje"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-8 h-8 rounded-md text-foreground-secondary hover:text-foreground hover:bg-surface-raised transition-all duration-150"
          >
            <FiGithub className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
