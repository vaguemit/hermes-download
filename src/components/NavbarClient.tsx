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
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-150"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
      }}
    >
      <div
        style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", height: "56px" }}
        className="flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="#hero" className="text-sm font-medium text-white transition-colors duration-150">
          hermes gui
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm transition-colors duration-150"
              style={{ color: "#888" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#install"
            className="text-sm transition-colors duration-150"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "6px 12px",
              borderRadius: "6px",
              color: "#f5f5f5",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#f5f5f5";
            }}
          >
            Download ↓
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-sm transition-colors duration-150"
          style={{ color: "#888" }}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col p-8 gap-6"
            style={{
              position: "absolute",
              top: "56px",
              left: 0,
              right: 0,
              backgroundColor: "#0a0a0a",
              borderBottom: "1px solid #1f1f1f",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium transition-colors duration-150"
                style={{ color: "#888" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#install"
              className="text-center text-sm transition-colors duration-150 mt-4"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 16px",
                borderRadius: "6px",
                color: "#f5f5f5",
                display: "block",
              }}
              onClick={() => setIsOpen(false)}
            >
              Download ↓
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
