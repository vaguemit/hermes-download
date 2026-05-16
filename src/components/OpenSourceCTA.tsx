"use client";

import { motion } from "framer-motion";

interface OpenSourceCTAProps {
  stars?: number;
}

export function OpenSourceCTA({ stars = 0 }: OpenSourceCTAProps) {
  return (
    <section className="w-full py-[80px] border-y border-[var(--color-border-subtle)] bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-[var(--text-display-md)] font-[600] tracking-[-0.03em] text-[var(--color-text-primary)] text-center mb-[20px]">
          open source. forever.
        </h2>
        
        <p className="text-[var(--text-body-md)] text-[var(--color-text-secondary)] text-center max-w-[460px] leading-[1.6] mb-[32px]">
          MIT-licensed. PRs welcome. Built on Tauri, React, and the Nous Research Hermes Agent ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-[12px] w-full sm:w-auto">
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-[20px] py-[10px] text-[0.9375rem] font-[500] hover:bg-[var(--color-accent-hover)] transition-all duration-150 active:scale-95 w-full sm:w-auto shrink-0"
          >
            Star on GitHub {stars > 0 && `★ ${stars.toLocaleString()}`}
          </a>
          <a
            href="/docs"
            className="inline-flex items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] px-[19px] py-[9px] text-[0.9375rem] font-[500] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] transition-colors duration-150 active:scale-95 w-full sm:w-auto shrink-0"
          >
            Read the Docs →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
