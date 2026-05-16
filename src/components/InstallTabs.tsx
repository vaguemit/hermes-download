"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useOS, OS } from "@/hooks/use-os";

interface InstallTabsProps {
  latestVersion: string;
}

export function InstallTabs({ latestVersion }: InstallTabsProps) {
  const detectedOs = useOS();
  const [activeTab, setActiveTab] = useState<OS>(detectedOs !== "Unknown" ? detectedOs : "macOS");
  const [copied, setCopied] = useState(false);

  const tabs: OS[] = ["macOS", "Windows", "Linux"];

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL https://agent.nous.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const releaseUrl = `https://github.com/vaguemit/hermes-gui/releases/tag/${latestVersion}`;

  return (
    <section id="install" className="section-padding bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <div className="w-full max-w-[720px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-[40px]"
        >
          <h2 className="section-headline mb-[16px]">
            Get running in<br />under a minute.
          </h2>
          <p className="text-[1rem] font-[400] text-[var(--color-text-secondary)] max-w-[400px] mx-auto">
            Download the app and optionally install Hermes Agent. That's the full setup.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-[2px] mb-[40px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-[var(--font-mono)] text-[11px] tracking-[0.08em] uppercase px-[14px] py-[6px] transition-colors border-b ${
                activeTab === tab
                  ? "text-[var(--color-text-primary)] border-[var(--color-text-primary)]"
                  : "text-[var(--color-text-tertiary)] border-transparent hover:text-[var(--color-text-secondary)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-[var(--color-border)] p-[28px] mb-[48px] flex flex-col sm:flex-row sm:items-center justify-between gap-[24px]"
        >
          <div>
            <div className="flex items-center gap-[12px] mb-[4px]">
              <span className="text-[1.125rem] font-[500] text-[var(--color-text-primary)]">{activeTab}</span>
              <span className="font-[var(--font-mono)] text-[11px] tracking-[0.02em] text-[var(--color-text-tertiary)]">
                {latestVersion} · {activeTab === "macOS" ? "42 MB" : "38 MB"}
              </span>
            </div>
            <div className="text-[0.875rem] text-[var(--color-text-secondary)]">
              {activeTab === "macOS" ? "Apple Silicon (arm64) + Intel (x64)" : activeTab === "Windows" ? "Windows 10/11 (x64)" : "AppImage / Debian (x64)"}
            </div>
          </div>
          <a
            href={releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-[20px] py-[10px] text-[0.9375rem] font-[500] hover:bg-[var(--color-accent-hover)] transition-all duration-150 active:scale-95"
          >
            Download {activeTab === "macOS" ? ".dmg" : activeTab === "Windows" ? ".msi" : ".AppImage"} ↓
          </a>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-[32px]">
          
          {/* Step 1 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.08em] mb-[12px]">
              01 ─ INSTALL HERMES AGENT
            </div>
            <div className="relative bg-[#141414] border border-[var(--color-border)] border-l-[2px] border-l-[rgba(232,232,228,0.2)] rounded-[4px] p-[14px_16px_14px_18px] group">
              <code className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)] block sm:flex items-center gap-[8px] overflow-x-auto whitespace-nowrap scrollbar-hide pr-[40px]">
                <span className="text-[var(--color-text-tertiary)] select-none">$</span>
                <span className="text-[var(--color-text-primary)]">curl</span>
                <span className="text-[rgba(232,232,228,0.35)]">-fsSL</span>
                <span>https://agent.nous.sh | sh</span>
              </code>
              <button
                onClick={handleCopy}
                className={`absolute top-[10px] right-[10px] w-[28px] h-[28px] border border-[var(--color-border)] rounded-[2px] flex items-center justify-center transition-all duration-150 ${
                  copied ? "opacity-100 border-[var(--color-text-primary)]" : "opacity-0 group-hover:opacity-40 hover:!opacity-85"
                }`}
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <span className="text-[var(--color-text-primary)] text-[14px]">✓</span>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-tertiary)]">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                )}
              </button>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.08em] mb-[12px]">
              02 ─ LAUNCH HERMES GUI
            </div>
            <p className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.6]">
              Open Hermes GUI. The setup wizard detects your Hermes installation, configures API keys, and starts the gateway.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.08em] mb-[12px]">
              03 ─ START CHATTING
            </div>
            <p className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.6]">
              The gateway status indicator in the sidebar turns white. Send your first message.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
