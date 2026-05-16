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
    { name: "Roadmap",   href: "#roadmap"   },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur border-b border-[#1f1f1f]' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="#hero"
          className="text-sm font-medium text-white transition-colors duration-150"
        >
          hermes gui
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[#888] hover:text-white transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#install"
            className="border border-white/20 px-3 py-1.5 rounded-md text-sm text-[#f5f5f5] hover:bg-white hover:text-black transition-colors duration-150"
          >
            Download ↓
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-sm text-[#888] hover:text-white transition-colors duration-150"
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
            className="absolute top-14 left-0 right-0 h-screen bg-[#0a0a0a] flex flex-col p-8 gap-6 md:hidden -z-10"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-[#888] hover:text-white transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8">
              <Link
                href="#install"
                className="border border-white/20 px-4 py-3 rounded-md text-lg text-center text-[#f5f5f5] hover:bg-white hover:text-black transition-colors duration-150 w-full block"
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
