"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface NavbarClientProps {
  stars: number;
  latestVersion: string;
}

export function NavbarClient({ stars, latestVersion }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Install", href: "#install" },
    { name: "Docs", href: "/docs" },
    { name: "Changelog", href: "#changelog" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 h-[52px] z-[100] glass-nav transition-colors duration-300",
        scrolled ? "border-b border-[rgba(232,232,228,0.04)]" : "border-b border-transparent"
      )}
    >
      <div className="max-w-[1080px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#hero" className="flex items-center space-x-1 group">
          <span className="font-sans font-medium tracking-[0.04em] text-[0.875rem] text-[var(--color-text-primary)]">
            hermes gui
          </span>
        </Link>

        {/* Center: Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.875rem] font-sans font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[180ms] ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <Link
            href="#install"
            className="hidden sm:inline-flex items-center justify-center bg-[var(--color-text-primary)] hover:bg-[var(--color-accent-hover)] text-[var(--color-text-inverse)] text-[0.8125rem] font-medium px-[14px] py-[6px] rounded-none transition-all duration-[180ms] hover:scale-[1.015] active:scale-[0.98] outline-offset-2 focus:outline-2 focus:outline-[var(--color-text-primary)]"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            Download ↓
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[var(--color-text-primary)] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[52px] left-0 w-full glass-nav border-b border-[var(--color-border-subtle)] py-4 px-8 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2 duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[1.5rem] font-medium text-[var(--color-text-primary)] py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#install"
            className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] text-[1rem] font-medium px-4 py-3 mt-4 w-full rounded-none"
            onClick={() => setIsOpen(false)}
          >
            Download ↓
          </Link>
        </div>
      )}
    </header>
  );
}
