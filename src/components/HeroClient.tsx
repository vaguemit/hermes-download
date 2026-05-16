"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useScramble } from "use-scramble";
import { useOS } from "@/hooks/use-os";

function ScrambleHero() {
  const phrases = [
    "Hermes Agent.",
    "LOCAL AI.",
    "YOUR WORKFLOW.",
    "NO TERMINAL.",
    "OPEN SOURCE.",
  ];
  const [index, setIndex] = useState(0);

  const { ref, replay } = useScramble({
    text: phrases[index],
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 5,
    onAnimationEnd: () => {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2200);
    },
  });

  useEffect(() => {
    replay();
  }, [index, replay]);

  return <span ref={ref} />;
}

interface HeroClientProps {
  latestVersion: string;
}

export function HeroClient({ latestVersion }: HeroClientProps) {
  const os = useOS();

  let osName = "macOS";
  let ext = ".dmg";
  if (os === "Windows") { osName = "Windows"; ext = ".msi"; }
  if (os === "Linux") { osName = "Linux"; ext = ".AppImage"; }

  const downloadLabel = `Download for ${osName} ↓`;
  const downloadUrl = `https://github.com/vaguemit/hermes-gui/releases/download/${latestVersion}/hermes-gui_${latestVersion}_${osName === 'macOS' ? 'universal' : 'x64'}${ext}`;

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-[120px] pb-[80px] px-6 min-h-[100dvh]"
    >
      <div className="w-full max-w-[1080px] mx-auto flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-[6px] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-[10px] py-[4px] font-[var(--font-mono)] text-[var(--text-mono-xs)] text-[var(--color-text-tertiary)] uppercase tracking-[0.08em] mb-[28px]"
        >
          <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
          BUILT ON NOUS RESEARCH HERMES AGENT
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hero-headline flex flex-col items-center mb-[24px]"
        >
          <span>A desktop GUI for</span>
          <span className="min-h-[1.2em]"><ScrambleHero /></span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="hero-subhead mb-[36px]"
        >
          Install, configure, and run Hermes Agent from a native desktop app. No terminal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-[12px] mb-[20px]"
        >
          <a
            href={downloadUrl}
            className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-[20px] py-[10px] text-[0.9375rem] font-[500] tracking-[-0.01em] hover:bg-[var(--color-accent-hover)] transition-all duration-180 hover:scale-[1.015] active:scale-98 w-full sm:w-auto"
          >
            {downloadLabel}
          </a>
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] px-[19px] py-[9px] text-[0.9375rem] font-[500] tracking-[-0.01em] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] transition-all duration-180 active:scale-98 w-full sm:w-auto"
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Version String */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          className="version-badge mb-[80px]"
        >
          {latestVersion} · macOS · Windows · Linux · MIT
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="w-full max-w-[960px] mx-auto rounded-[4px] border border-[rgba(232,232,228,0.1)] overflow-hidden"
          style={{ boxShadow: "var(--shadow-mockup)" }}
        >
          <div className="h-[28px] bg-[#0f0f0f] border-b border-[rgba(232,232,228,0.06)] flex items-center px-[12px] gap-[6px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[rgba(232,232,228,0.15)]" />
          </div>
          <div className="relative w-full aspect-[16/10] bg-[#111]">
            <Image
              src="/app-screenshot.avif"
              alt="Hermes GUI"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
              unoptimized
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
