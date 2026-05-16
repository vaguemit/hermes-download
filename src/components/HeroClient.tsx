"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/hooks/use-os";

export function HeroClient({ latestVersion }: { latestVersion: string }) {
  const os = useOS();
  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);

  // Full headline — typewriter reveals it character by character
  const fullText = "A desktop GUI for\nHermes Agent.";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) { clearInterval(iv); setDone(true); }
    }, 45);
    return () => clearInterval(iv);
  }, []);

  // Fix vv0.1.0 — tag_name from GitHub already includes the "v" prefix
  const ver = latestVersion.startsWith("v") ? latestVersion : `v${latestVersion}`;

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center font-mono"
    >
      {/* ── Centered container ── */}
      <div className="page-container flex flex-col items-center text-center pt-[88px] pb-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="inline-block text-[var(--color-text-tertiary)] text-[0.6875rem] border border-[var(--color-border)] px-4 py-1.5 mb-8 uppercase tracking-widest select-none"
        >
          [ HERMES-GUI · {ver} · MIT License ]
        </motion.div>

        {/* Headline — typewriter */}
        <h1
          className="font-bold text-[var(--color-text-primary)] leading-[1.1] mb-6 whitespace-pre-line"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", minHeight: "2.4em" }}
        >
          {typedText}
          {!done && <span className="cursor text-[var(--color-text-primary)]">█</span>}
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-[1rem] text-[var(--color-text-secondary)] max-w-[580px] leading-[1.8] mb-10"
        >
          Install, configure, and run Hermes Agent from a native desktop app.
          No terminal required.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          {/* Primary — white fill */}
          <a
            id="cta-download"
            href="#install"
            className="select-none inline-flex items-center justify-center
              bg-[var(--color-text-primary)] text-[var(--color-bg)]
              hover:bg-[var(--color-accent-hover)]
              px-8 py-3 text-[0.9375rem] font-semibold
              transition-colors duration-150 min-w-[220px]"
          >
            Download for {os !== "Unknown" ? os : "Windows"} ↓
          </a>

          {/* Secondary — outline */}
          <a
            id="cta-github"
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="select-none inline-flex items-center justify-center
              border border-[var(--color-border)]
              text-[var(--color-text-secondary)]
              hover:border-[var(--color-border-strong)]
              hover:text-[var(--color-text-primary)]
              px-8 py-3 text-[0.9375rem]
              transition-colors duration-150 min-w-[220px]"
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Version meta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="text-[0.75rem] text-[var(--color-text-tertiary)] mb-16 select-none"
        >
          {ver} · macOS · Windows · Linux · MIT License
        </motion.p>

        {/* ── App Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.55 }}
          className="w-full border border-[var(--color-border)] bg-[var(--color-surface)]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.7)",
          }}
        >
          {/* ── Window chrome ── */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
            {/* Traffic lights (square, terminal style) */}
            <div className="flex gap-2">
              <div className="w-3 h-3 border border-[var(--color-border)]" />
              <div className="w-3 h-3 border border-[var(--color-border)]" />
              <div className="w-3 h-3 border border-[var(--color-border)]" />
            </div>
            <span className="mx-auto text-[0.6875rem] text-[var(--color-text-tertiary)] uppercase tracking-[0.15em]">
              hermes-gui — conversation
            </span>
          </div>

          {/* ── App body ── */}
          <div className="flex" style={{ minHeight: "300px" }}>

            {/* Sidebar with labels */}
            <div className="w-16 border-r border-[var(--color-border)] flex flex-col items-center py-5 gap-6 shrink-0">
              {[
                { icon: "≡", label: "Chat" },
                { icon: "⌘", label: "Cmds" },
                { icon: "◈", label: "Setup" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-[var(--color-text-secondary)] text-base leading-none">{icon}</span>
                  <span className="text-[0.5rem] text-[var(--color-text-tertiary)] uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>

            {/* Message area */}
            <div className="flex-1 flex flex-col justify-end px-6 py-6 gap-5">
              {/* User message */}
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 shrink-0 border border-[var(--color-border)] flex items-center justify-center text-[0.5625rem] text-[var(--color-text-tertiary)] select-none">
                  U
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[0.8125rem] text-[var(--color-text-secondary)] max-w-[60%]">
                  What is the difference between Tauri IPC and a standard WebSocket?
                </div>
              </div>

              {/* Agent reply */}
              <div className="flex gap-3 items-start self-end flex-row-reverse">
                <div className="w-7 h-7 shrink-0 bg-[var(--color-text-primary)] text-[var(--color-bg)] flex items-center justify-center text-[0.5625rem] font-bold select-none">
                  H
                </div>
                <div className="border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-[0.8125rem] text-[var(--color-text-primary)] max-w-[60%]">
                  Tauri IPC is a direct OS-native channel between the webview and Rust
                  backend — no port binding, no network stack. WebSocket runs over TCP
                  and requires a local listener. IPC is faster and more secure for
                  desktop apps.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
