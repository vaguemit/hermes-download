"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScramble } from "use-scramble";
import { useOS } from "@/hooks/use-os";

const PHRASES = [
  "Hermes Agent.",
  "AI Agents.",
  "Your workflow.",
  "Local LLMs.",
];

export function HeroClient({ latestVersion }: { latestVersion: string }) {
  const os = useOS();
  const [phraseIndex, setPhraseIndex] = useState(0);

  const { ref, replay } = useScramble({
    text: PHRASES[phraseIndex],
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3700); // 1.2s scramble + 2.5s hold = 3.7s total cycle
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none hero-radial-glow z-0" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1120px] px-6 lg:px-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="px-3 py-1 rounded-full border border-[var(--color-violet)] text-[var(--color-violet)] font-mono text-[11px] uppercase tracking-wider mb-8 bg-[var(--color-violet)]/10 backdrop-blur-md"
        >
          ⬡ Built on Nous Research Hermes Agent
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center font-[800] leading-[1.05] tracking-tight text-balance text-white mb-6"
          style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
        >
          <span className="block opacity-90">A desktop GUI for</span>
          <span ref={ref} className="block text-[var(--color-violet)]" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[18px] text-[#f0ede8]/55 max-w-[560px] text-center mb-10 leading-relaxed font-sans"
        >
          Install, configure, and control Hermes Agent from a native Tauri
          desktop app. No terminal required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a
            href="#install"
            className="flex items-center justify-center bg-[var(--color-violet)] hover:bg-[#8b5cf6] text-white font-semibold px-8 py-3.5 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(124,58,237,0.3)] min-w-[220px]"
          >
            ⬇ Download for {os !== "Unknown" ? os : "macOS"}
          </a>
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-transparent border border-white/20 hover:border-white/40 text-[#f0ede8] font-semibold px-8 py-3.5 transition-all hover:bg-white/5"
          >
            View on GitHub →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-[12px] font-mono text-[#f0ede8]/30 text-center mb-16"
        >
          {latestVersion} · macOS, Windows, Linux · MIT License
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div
          style={{ y: yParallax }}
          className="w-full max-w-[960px] mx-auto mt-8 perspective-[1200px]"
        >
          <motion.div
            initial={{ opacity: 0, rotateX: 0, y: 40 }}
            animate={{ opacity: 1, rotateX: 4, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-lg overflow-hidden border border-white/10 bg-[#121212] shadow-[0_40px_120px_rgba(0,0,0,0.6)] aspect-[16/10] sm:aspect-[16/9]"
          >
            {/* Titlebar */}
            <div className="h-10 border-b border-white/5 flex items-center px-4 bg-[#0a0a0a]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-[11px] text-white/30 font-mono">
                hermes-gui — Conversation
              </div>
            </div>
            {/* Mock App Content */}
            <div className="flex h-[calc(100%-40px)]">
              <div className="w-[60px] border-r border-white/5 bg-[#0a0a0a] flex flex-col items-center py-4 space-y-6">
                <div className="w-8 h-8 rounded bg-white/5" />
                <div className="w-8 h-8 rounded bg-white/5" />
                <div className="w-8 h-8 rounded bg-white/5" />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex space-x-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                  <div className="bg-white/5 border border-white/5 rounded-lg p-4 max-w-[80%]">
                    <div className="w-32 h-2 bg-white/20 rounded mb-3" />
                    <div className="w-full h-2 bg-white/10 rounded mb-2" />
                    <div className="w-48 h-2 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="flex space-x-4 mb-6 self-end flex-row-reverse space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-violet)]/30 border border-[var(--color-violet)]/50 shrink-0" />
                  <div className="bg-[var(--color-violet)]/10 border border-[var(--color-violet)]/20 rounded-lg p-4 max-w-[80%]">
                    <div className="w-24 h-2 bg-white/30 rounded mb-3" />
                    <div className="w-full h-2 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* We can place an actual image here instead if the user provides one,
                for now this CSS mockup serves as a very solid placeholder. */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
