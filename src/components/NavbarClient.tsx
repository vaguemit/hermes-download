"use client";

import { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface NavbarClientProps {
  stars: number;
  latestVersion: string;
}

export function NavbarClient({ stars, latestVersion }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "Features", href: "#features" },
    { name: "Install", href: "#install" },
    { name: "Docs", href: "/docs" },
    { name: "Changelog", href: "#changelog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[56px] z-50 glass-nav border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-16 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#hero" className="flex items-center space-x-1 group">
          <span className="font-mono font-bold tracking-wider text-[15px] text-foreground">
            HERMES
          </span>
          <span className="font-mono font-bold tracking-wider text-[15px] text-foreground relative">
            GUI
            <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[var(--color-violet)]"></span>
          </span>
        </Link>

        {/* Center: Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm text-[#f0ede8]/70 hover:text-[#f0ede8] transition-colors py-2 group font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-violet)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 text-sm text-[#f0ede8]/70 hover:text-[#f0ede8] transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20"
          >
            <Github className="w-4 h-4" />
            <span className="font-mono">{stars.toLocaleString()}</span>
          </a>

          <Link
            href="#install"
            className="hidden sm:inline-flex items-center justify-center bg-[var(--color-violet)] hover:bg-[#8b5cf6] text-white text-sm font-semibold px-4 py-1.5 transition-all hover:scale-[1.02]"
          >
            Download {latestVersion}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#f0ede8] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[56px] left-0 w-full glass-nav border-b border-white/5 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#f0ede8]/80 hover:text-[#f0ede8] py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/vaguemit/hermes-gui"
            className="flex items-center space-x-2 text-[#f0ede8]/80 py-2 border-b border-white/5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub ({stars})</span>
          </a>
          <Link
            href="#install"
            className="inline-flex items-center justify-center bg-[var(--color-violet)] text-white text-sm font-semibold px-4 py-2 mt-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            Download {latestVersion}
          </Link>
        </div>
      )}
    </header>
  );
}
