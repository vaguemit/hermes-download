"use client";

import { useState, useEffect } from "react";
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
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[100] font-mono transition-colors duration-300",
        scrolled
          ? "bg-[rgba(13,13,13,0.96)] backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      {/* ── Main bar ── */}
      <div className="page-container flex items-center justify-between h-[52px]">

        {/* Logo */}
        <Link
          href="#hero"
          className="text-[0.875rem] font-bold text-[var(--color-text-primary)] hover:text-white transition-colors tracking-wide"
        >
          hermes_gui
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {stars > 0 && (
            <span className="text-[0.75rem] text-[var(--color-text-tertiary)]">
              ★ {stars.toLocaleString()}
            </span>
          )}
          <Link
            href="#install"
            className="text-[0.8125rem] bg-[var(--color-text-primary)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] px-4 py-1.5 font-medium transition-colors duration-150"
          >
            Download ↓
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[0.8125rem] border border-[var(--color-border)] px-3 py-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {/* Bottom rule */}
      <div
        className="w-full h-px"
        style={{ background: "var(--color-border)" }}
      />

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(13,13,13,0.98)] border-b border-[var(--color-border)] py-5 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.9375rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#install"
            className="mt-1 inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-bg)] text-[0.9375rem] px-5 py-2.5 font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Download ↓
          </Link>
        </div>
      )}
    </header>
  );
}
