"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarClientProps {
  stars?: number;
  latestVersion?: string;
}

export function NavbarClient({ stars, latestVersion }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Features",  href: "#features"  },
    { name: "Install",   href: "#install"   },
    { name: "Docs",      href: "/docs"      },
    { name: "Changelog", href: "#changelog" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-colors duration-300"
      style={{
        height: "52px",
        background: "var(--color-bg-overlay)",
        backdropFilter: "blur(12px) saturate(1.2)",
        WebkitBackdropFilter: "blur(12px) saturate(1.2)",
        borderBottom: scrolled ? "1px solid var(--color-border-subtle)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="#hero"
          className="text-[0.875rem] font-[500] tracking-[0.04em] text-[var(--color-text-primary)] transition-colors"
        >
          hermes gui
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.875rem] font-[400] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[180ms]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#install"
            className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-[14px] py-[6px] text-[0.8125rem] font-[500] hover:bg-[var(--color-accent-hover)] transition-all duration-150 hover:scale-[1.02] active:scale-95"
          >
            Download ↓
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[1rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[52px] left-0 right-0 h-screen bg-[#1a1a1a] flex flex-col p-8 gap-6 md:hidden -z-10"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[1.5rem] font-[500] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8">
              <Link
                href="#install"
                className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-8 py-4 text-[1.125rem] font-[500] hover:bg-[var(--color-accent-hover)] transition-all duration-150 active:scale-95 w-full"
                onClick={() => setIsOpen(false)}
              >
                Download ↓
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
