"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import { useOS } from "@/hooks/use-os";

const PHRASES = [
  "Hermes Agent.",
  "Local AI.",
  "Your Workflow.",
  "No Terminal.",
  "Open Source.",
];

export function HeroClient({ latestVersion }: { latestVersion: string }) {
  const os = useOS();
  const [phraseIndex, setPhraseIndex] = useState(0);

  const { ref, replay } = useScramble({
    text: PHRASES[phraseIndex],
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 6,
    seed: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3400); // 1.2s scramble + 2.2s hold
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-[52px] overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1080px] px-6 lg:px-16 mt-[240px]">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[28px]"
        >
          <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
          BUILT FOR NOUS RESEARCH HERMES AGENT
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline mb-[24px]"
        >
          <span className="block">A desktop GUI for</span>
          <span ref={ref} className="block" />
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="hero-subhead mb-[36px]"
        >
          Install, configure, and run Hermes Agent from a native desktop app. No terminal.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto mb-[20px]"
        >
          <a
            href="#install"
            className="flex w-full sm:w-auto items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] font-medium text-[0.9375rem] px-[20px] py-[10px] rounded-none hover:bg-[var(--color-accent-hover)] transition-all duration-[180ms] hover:scale-[1.015] active:scale-[0.98] outline-offset-[3px] focus:outline-2 focus:outline-[var(--color-text-primary)]"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            Download for {os !== "Unknown" ? os : "macOS"} ↓
          </a>
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] font-medium text-[0.9375rem] px-[19px] py-[9px] rounded-none transition-all duration-[180ms] outline-offset-[3px] focus:outline-2 focus:outline-[var(--color-text-primary)] active:scale-[0.98]"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Version String */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-[0.75rem] font-mono text-[var(--color-text-tertiary)] tracking-[0.02em] text-center mb-[80px]"
        >
          {latestVersion} · macOS · Windows · Linux · MIT
        </motion.div>

        {/* App Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[960px] mx-auto relative rounded-[4px] border border-[rgba(232,232,228,0.1)] bg-[#121212] aspect-[16/10] overflow-hidden"
          style={{ boxShadow: "var(--shadow-mockup)" }}
        >
          {/* Fake Window Chrome */}
          <div className="h-[28px] border-b border-[rgba(232,232,228,0.06)] flex items-center px-[12px] bg-[#0f0f0f]">
            <div className="flex gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
              <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
              <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
            </div>
            <div className="mx-auto text-[11px] text-[var(--color-text-tertiary)] font-mono">
              hermes-gui — Conversation
            </div>
          </div>
          
          {/* Abstract App Layout (Grayscale) */}
          <div className="flex h-[calc(100%-28px)]">
            <div className="w-[60px] border-r border-[rgba(232,232,228,0.04)] bg-[#0f0f0f] flex flex-col items-center py-4 gap-[24px]">
              <div className="w-8 h-8 rounded-[2px] bg-[rgba(232,232,228,0.08)]" />
              <div className="w-8 h-8 rounded-[2px] bg-[rgba(232,232,228,0.03)]" />
              <div className="w-8 h-8 rounded-[2px] bg-[rgba(232,232,228,0.03)]" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-end pb-8">
              <div className="flex gap-[16px] mb-[24px]">
                <div className="w-8 h-8 rounded-[2px] bg-[rgba(232,232,228,0.1)] shrink-0" />
                <div className="bg-[rgba(232,232,228,0.03)] border border-[rgba(232,232,228,0.06)] rounded-[4px] p-4 max-w-[80%]">
                  <div className="w-32 h-[6px] bg-[rgba(232,232,228,0.2)] rounded-full mb-3" />
                  <div className="w-full h-[6px] bg-[rgba(232,232,228,0.1)] rounded-full mb-2" />
                  <div className="w-48 h-[6px] bg-[rgba(232,232,228,0.1)] rounded-full" />
                </div>
              </div>
              <div className="flex gap-[16px] self-end flex-row-reverse">
                <div className="w-8 h-8 rounded-[2px] bg-[var(--color-text-primary)] shrink-0" />
                <div className="bg-[rgba(232,232,228,0.08)] border border-[rgba(232,232,228,0.12)] rounded-[4px] p-4 max-w-[80%]">
                  <div className="w-24 h-[6px] bg-[rgba(232,232,228,0.5)] rounded-full mb-3" />
                  <div className="w-[180px] h-[6px] bg-[rgba(232,232,228,0.3)] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
