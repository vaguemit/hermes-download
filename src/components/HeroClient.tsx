"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOS } from "@/hooks/use-os";

export function HeroClient({ latestVersion }: { latestVersion: string }) {
  const os = useOS();
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "A desktop GUI for\nOpen Source.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 3000);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-[80px] overflow-hidden font-mono"
    >
      <div className="relative z-10 w-full max-w-[1080px] px-8 mt-[120px] mb-[64px] flex flex-col items-center">
        
        {/* Hero ASCII Box */}
        <div className="relative border border-[var(--color-border)] w-full max-w-[720px] p-[32px] sm:p-[48px] text-left mb-[48px]">
          {/* Corners */}
          <span className="absolute -top-[10px] -left-[4px] text-[var(--color-border)] text-[1rem] leading-none bg-[var(--color-bg)] h-[20px] w-[20px] flex items-center justify-center">┌</span>
          <span className="absolute -top-[10px] -right-[4px] text-[var(--color-border)] text-[1rem] leading-none bg-[var(--color-bg)] h-[20px] w-[20px] flex items-center justify-center">┐</span>
          <span className="absolute -bottom-[10px] -left-[4px] text-[var(--color-border)] text-[1rem] leading-none bg-[var(--color-bg)] h-[20px] w-[20px] flex items-center justify-center">└</span>
          <span className="absolute -bottom-[10px] -right-[4px] text-[var(--color-border)] text-[1rem] leading-none bg-[var(--color-bg)] h-[20px] w-[20px] flex items-center justify-center">┘</span>
          
          {/* Eyebrow */}
          <div className="absolute -top-[10px] left-[24px] bg-[var(--color-bg)] px-[8px] text-[var(--color-text-tertiary)] text-[0.8125rem]">
            ─[ BUILT FOR NOUS RESEARCH HERMES AGENT ]─
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.2] text-[var(--color-text-primary)] mb-[32px] min-h-[96px] sm:min-h-[120px] whitespace-pre-line">
            {typedText}
            {showCursor && <span className="cursor text-[var(--color-text-primary)] ml-[4px]">█</span>}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            className="text-[1rem] text-[var(--color-text-secondary)] max-w-[480px] leading-[1.6] mb-[40px]"
          >
            Install, configure, and run Hermes Agent from a native desktop app. No terminal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.7 }}
            className="flex flex-col sm:flex-row gap-[16px] mb-[40px]"
          >
            <a
              href="#install"
              className="group relative flex items-center justify-center bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-[24px] py-[12px] transition-colors duration-[180ms]"
            >
              <span className="absolute inset-0 border border-[var(--color-border)] group-hover:border-[var(--color-text-primary)]" />
              <span className="absolute -top-[6px] -left-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┌</span>
              <span className="absolute -top-[6px] -right-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┐</span>
              <span className="absolute -bottom-[6px] -left-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">└</span>
              <span className="absolute -bottom-[6px] -right-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┘</span>
              <span className="relative z-10 text-[0.9375rem] font-medium">Download for {os !== "Unknown" ? os : "Win"} ↓</span>
            </a>
            
            <a
              href="https://github.com/vaguemit/hermes-gui"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-bg)] hover:bg-[var(--color-text-primary)] px-[24px] py-[12px] transition-colors duration-[180ms]"
            >
              <span className="absolute inset-0 border border-[var(--color-border)] group-hover:border-[var(--color-text-primary)]" />
              <span className="absolute -top-[6px] -left-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┌</span>
              <span className="absolute -top-[6px] -right-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┐</span>
              <span className="absolute -bottom-[6px] -left-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">└</span>
              <span className="absolute -bottom-[6px] -right-[3px] text-[var(--color-border)] group-hover:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┘</span>
              <span className="relative z-10 text-[0.9375rem] font-medium">View on GitHub →</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.9 }}
            className="text-[0.8125rem] text-[var(--color-text-tertiary)]"
          >
            v{latestVersion} · macOS · Windows · Linux · MIT
          </motion.div>
        </div>

        {/* App Mockup (Terminal style styling) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="w-full max-w-[960px] mx-auto relative border border-[var(--color-border-strong)] bg-[var(--color-surface)] aspect-[16/10] overflow-hidden"
        >
          {/* Fake Window Chrome */}
          <div className="h-[28px] border-b border-[var(--color-border)] flex items-center px-[12px] bg-[var(--color-bg)]">
            <div className="flex gap-[6px]">
              <div className="w-[6px] h-[6px] bg-[var(--color-border-strong)]" />
              <div className="w-[6px] h-[6px] bg-[var(--color-border-strong)]" />
              <div className="w-[6px] h-[6px] bg-[var(--color-border-strong)]" />
            </div>
            <div className="mx-auto text-[0.75rem] text-[var(--color-text-tertiary)] uppercase tracking-wider">
              hermes-gui — Conversation
            </div>
          </div>
          
          {/* Abstract App Layout (Grayscale/Monospace) */}
          <div className="flex h-[calc(100%-28px)]">
            <div className="w-[60px] border-r border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col items-center py-4 gap-[24px]">
              <div className="text-[var(--color-text-secondary)] text-[0.875rem]">≡</div>
              <div className="text-[var(--color-text-tertiary)] text-[0.875rem]">□</div>
              <div className="text-[var(--color-text-tertiary)] text-[0.875rem]">□</div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-end pb-8 relative">
              {/* ASCII texture in background */}
              <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none text-[0.6875rem] leading-[1.2] whitespace-pre select-none">
                {Array(40).fill("░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒").join("\n")}
              </div>
              
              <div className="flex gap-[16px] mb-[24px] relative z-10">
                <div className="w-8 h-8 bg-[var(--color-border)] shrink-0 flex items-center justify-center text-[0.6875rem]">U</div>
                <div className="bg-[var(--color-bg)] border border-[var(--color-border-strong)] p-4 max-w-[80%] text-[var(--color-text-secondary)] text-[0.875rem]">
                  What is the difference between Tauri IPC and standard WebSocket?
                </div>
              </div>
              <div className="flex gap-[16px] self-end flex-row-reverse relative z-10">
                <div className="w-8 h-8 bg-[var(--color-text-primary)] text-[var(--color-bg)] shrink-0 flex items-center justify-center text-[0.6875rem]">H</div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border-strong)] p-4 max-w-[80%] text-[var(--color-text-primary)] text-[0.875rem]">
                  Tauri IPC (Inter-Process Communication) provides a direct channel between the frontend webview and the Rust backend, operating over the native OS bindings rather than a network stack like WebSocket. This avoids binding to local ports and has lower overhead.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
