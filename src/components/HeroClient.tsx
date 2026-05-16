"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/hooks/use-os";

export function HeroClient({ latestVersion }: { latestVersion: string }) {
  const os = useOS();
  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);
  const fullText = "A desktop GUI for Hermes Agent.";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) { clearInterval(iv); setDone(true); }
    }, 40);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center font-mono overflow-x-hidden"
    >
      <div className="relative z-10 w-full max-w-[860px] px-4 sm:px-8 pt-[100px] pb-[64px] flex flex-col items-center">

        {/* ── Top label bar ── */}
        <div className="w-full text-[var(--color-text-tertiary)] text-[0.75rem] mb-1 select-none">
          ┌─[ hermes-gui ]──────────────────────────────────────────────────────┐
        </div>

        {/* ── Hero box ── */}
        <div className="w-full border-l border-r border-[var(--color-border)] px-6 sm:px-10 py-8 text-left">

          {/* headline */}
          <h1 className="text-[1.875rem] sm:text-[2.5rem] font-bold leading-[1.2] text-[var(--color-text-primary)] mb-6 min-h-[2.5em]">
            {typedText}
            {!done && <span className="cursor">█</span>}
          </h1>

          {/* subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-[0.9375rem] text-[var(--color-text-secondary)] max-w-[520px] leading-[1.7] mb-8"
          >
            Install, configure, and run Hermes Agent from a native desktop app.<br />
            No terminal required.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a
              id="cta-download"
              href="#install"
              className="inline-flex items-center justify-center border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-6 py-2.5 text-[0.9375rem] transition-colors duration-150"
            >
              [ Download for {os !== "Unknown" ? os : "Windows"} ↓ ]
            </a>
            <a
              id="cta-github"
              href="https://github.com/vaguemit/hermes-gui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] px-6 py-2.5 text-[0.9375rem] transition-colors duration-150"
            >
              [ View on GitHub → ]
            </a>
          </motion.div>

          {/* meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            className="text-[0.75rem] text-[var(--color-text-tertiary)]"
          >
            v{latestVersion} · macOS · Windows · Linux · MIT License
          </motion.div>
        </div>

        {/* ── Bottom label bar ── */}
        <div className="w-full text-[var(--color-text-tertiary)] text-[0.75rem] mt-1 select-none">
          └─[ BUILT FOR NOUS RESEARCH HERMES AGENT ]────────────────────────────┘
        </div>

        {/* ── App Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="w-full mt-10 border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          {/* title bar */}
          <div className="flex items-center gap-3 px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-bg)] text-[0.75rem] text-[var(--color-text-tertiary)]">
            <span className="text-[var(--color-border-strong)]">■ ■ ■</span>
            <span className="mx-auto uppercase tracking-widest">hermes-gui — conversation</span>
          </div>

          {/* mock chat */}
          <div className="flex" style={{ minHeight: "260px" }}>
            {/* sidebar */}
            <div className="w-12 border-r border-[var(--color-border)] flex flex-col items-center pt-4 gap-5 text-[var(--color-text-secondary)] text-sm shrink-0">
              <span>≡</span>
              <span className="text-[var(--color-text-tertiary)]">□</span>
              <span className="text-[var(--color-text-tertiary)]">□</span>
            </div>

            {/* messages */}
            <div className="flex-1 flex flex-col justify-end p-5 gap-4">
              {/* user bubble */}
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 shrink-0 bg-[var(--color-border)] flex items-center justify-center text-[0.625rem] text-[var(--color-text-primary)]">U</div>
                <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-3 text-[0.8125rem] text-[var(--color-text-secondary)] max-w-[70%]">
                  What is the difference between Tauri IPC and a standard WebSocket?
                </div>
              </div>
              {/* agent bubble */}
              <div className="flex gap-3 items-start self-end flex-row-reverse">
                <div className="w-7 h-7 shrink-0 bg-[var(--color-text-primary)] text-[var(--color-bg)] flex items-center justify-center text-[0.625rem]">H</div>
                <div className="border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3 text-[0.8125rem] text-[var(--color-text-primary)] max-w-[70%]">
                  Tauri IPC is a direct OS-native channel between the webview and Rust backend — no port binding, no network stack. WebSocket runs over TCP and requires a local listener. IPC is faster and more secure for desktop apps.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
