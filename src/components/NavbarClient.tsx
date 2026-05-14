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
        "fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 font-mono",
        scrolled ? "bg-[rgba(10,10,10,0.95)]" : "bg-transparent"
      )}
    >
      <div className="max-w-[1080px] mx-auto px-8 pt-4 pb-2 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          {/* Left: Logo */}
          <Link href="#hero" className="flex items-center group text-[var(--color-text-primary)] text-[0.8125rem]">
            hermes gui<span className="opacity-0 group-hover:opacity-100">_</span>
          </Link>

          {/* Center: Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-[16px] text-[0.8125rem] text-[var(--color-text-secondary)]">
            {links.map((link, index) => (
              <div key={link.name} className="flex items-center gap-[16px]">
                <Link
                  href={link.href}
                  className="group hover:text-[var(--color-text-primary)] transition-colors duration-[180ms] ease-in-out"
                >
                  {link.name}<span className="opacity-0 group-hover:opacity-100">_</span>
                </Link>
                {index < links.length - 1 && <span>·</span>}
              </div>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="#install"
              className="hidden md:inline-flex relative group items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] hover:border-[var(--color-text-primary)] text-[0.8125rem] px-[16px] py-[4px] rounded-none transition-colors duration-150"
            >
              <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] leading-none">┌</span>
              <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] leading-none">┐</span>
              <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] leading-none">└</span>
              <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] leading-none">┘</span>
              Download ↓
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[var(--color-text-primary)] text-[0.8125rem] border border-[var(--color-border)] px-2 py-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? "[X]" : "[MENU]"}
            </button>
          </div>
        </div>
        
        {/* Full-width ASCII Rule */}
        <div className="w-full overflow-hidden whitespace-nowrap text-[var(--color-border)] text-[0.8125rem] select-none leading-none opacity-50">
          {"─".repeat(200)}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-[rgba(10,10,10,0.98)] border-b border-[var(--color-border)] py-4 px-8 flex flex-col gap-4 font-mono">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group text-[1rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}<span className="opacity-0 group-hover:opacity-100">_</span>
            </Link>
          ))}
          <Link
            href="#install"
            className="inline-flex items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] text-[1rem] px-[16px] py-[8px] mt-2 rounded-none transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Download ↓
          </Link>
        </div>
      )}
    </header>
  );
}
