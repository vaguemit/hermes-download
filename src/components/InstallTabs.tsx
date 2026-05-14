"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScramble } from "use-scramble";
import { useOS, OS } from "@/hooks/use-os";

function ScrambleReveal({ text }: { text: string }) {
  const { ref } = useScramble({
    text,
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 5,
  });
  return <span ref={ref} />;
}

interface InstallTabsProps {
  latestVersion: string;
}

export function InstallTabs({ latestVersion }: InstallTabsProps) {
  const detectedOs = useOS();
  const [activeTab, setActiveTab] = useState<OS>(detectedOs !== "Unknown" ? detectedOs : "macOS");
  const [copied, setCopied] = useState(false);

  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const tabs: OS[] = ["macOS", "Windows", "Linux"];

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL https://agent.nous.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const releaseUrl = `https://github.com/vaguemit/hermes-gui/releases/tag/${latestVersion}`;

  return (
    <section id="install" className="py-[160px] max-md:py-[96px] bg-[var(--color-bg)]">
      <div className="max-w-[800px] mx-auto px-8">
        <div ref={headerRef} className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
            INSTALLATION
          </div>
          <h2 className="section-headline">
            {isInView ? <ScrambleReveal text="Get started in 60 seconds." /> : <span className="opacity-0">Get started in 60 seconds.</span>}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-[40px] border-b border-[var(--color-border)]">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-[0.875rem] font-medium transition-colors ${
                  activeTab === tab ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="installTabIndicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[var(--color-text-primary)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-[16px]"
        >
          {/* Step 1 */}
          <div className="bg-transparent border border-[var(--color-border)] rounded-none p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[24px]">
              <div>
                <div className="flex items-center gap-[12px] mb-[8px]">
                  <span className="text-[0.6875rem] font-mono text-[var(--color-text-tertiary)] tracking-[0.08em] uppercase">Step 1</span>
                  <span className="text-[1rem] text-[var(--color-text-primary)] font-medium">Download GUI</span>
                </div>
                <div className="text-[0.875rem] text-[var(--color-text-secondary)]">
                  {activeTab === "macOS" ? "Apple Silicon / Intel · .dmg" : activeTab === "Windows" ? "x64 · .msi" : "x64 · .AppImage / .deb"}
                </div>
              </div>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--color-text-primary)] hover:bg-[var(--color-accent-hover)] text-[var(--color-text-inverse)] px-[20px] py-[10px] rounded-none font-medium text-[0.9375rem] transition-all duration-[180ms] hover:scale-[1.015] active:scale-[0.98] whitespace-nowrap"
              >
                Download {latestVersion} ↓
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-transparent border border-[var(--color-border)] rounded-none p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <div>
              <div className="flex items-center gap-[12px] mb-[16px]">
                <span className="text-[0.6875rem] font-mono text-[var(--color-text-tertiary)] tracking-[0.08em] uppercase">Step 2</span>
                <span className="text-[1rem] text-[var(--color-text-primary)] font-medium">Install CLI (Optional)</span>
              </div>
              
              <div className="relative group/code rounded-[2px] border border-[var(--color-border)] bg-[rgba(232,232,228,0.03)] overflow-hidden flex items-center justify-between pl-[16px] pr-[8px] py-[12px]">
                <div className="flex text-[0.875rem] font-mono overflow-x-auto whitespace-nowrap">
                  <span className="text-[var(--color-text-tertiary)] select-none mr-[12px]">$</span>
                  <code className="text-[var(--color-text-secondary)]">
                    curl -fsSL https://agent.nous.sh | sh
                  </code>
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 ml-[16px] text-[0.6875rem] font-mono uppercase tracking-[0.04em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors px-[8px] py-[4px] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] bg-[var(--color-bg)]"
                  aria-label="Copy code"
                >
                  {copied ? "COPIED" : "COPY"}
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-transparent border border-[var(--color-border)] rounded-none p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <div>
              <div className="flex items-center gap-[12px] mb-[8px]">
                <span className="text-[0.6875rem] font-mono text-[var(--color-text-tertiary)] tracking-[0.08em] uppercase">Step 3</span>
                <span className="text-[1rem] text-[var(--color-text-primary)] font-medium">Configure</span>
              </div>
              <p className="text-[0.875rem] text-[var(--color-text-secondary)] leading-[1.6]">
                Open Hermes GUI → follow the Setup Wizard. The app automatically detects the CLI, configures keys, and starts the gateway.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
