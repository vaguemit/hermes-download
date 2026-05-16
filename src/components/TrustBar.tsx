"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  const items = [
    "TAURI V2",
    "REACT 19",
    "TYPESCRIPT",
    "RUST",
    "TAILWIND CSS",
    "NOUS RESEARCH",
    "OPENAI-COMPATIBLE",
    "MIT LICENSE",
    "SSE STREAMING",
    "NATIVE DESKTOP",
  ];

  // Join items with the centered dot separator
  const content = items.join(" · ") + " · ";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      className="w-full h-[48px] border-y border-[var(--color-border-subtle)] bg-transparent overflow-hidden flex items-center relative z-[var(--z-base)]"
    >
      <div className="flex w-[200%] animate-marquee">
        {/* We need two identical spans to create a seamless loop */}
        <span className="flex-1 whitespace-nowrap font-[var(--font-mono)] text-[var(--text-mono-xs)] text-[var(--color-text-tertiary)] tracking-[0.12em] uppercase select-none">
          {content}
          {content}
        </span>
        <span className="flex-1 whitespace-nowrap font-[var(--font-mono)] text-[var(--text-mono-xs)] text-[var(--color-text-tertiary)] tracking-[0.12em] uppercase select-none">
          {content}
          {content}
        </span>
      </div>
    </motion.section>
  );
}
