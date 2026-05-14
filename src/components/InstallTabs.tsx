"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
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
    <section id="install" className="py-[120px] bg-[var(--color-bg)] font-mono">
      <div className="max-w-[800px] mx-auto px-8">
        <div ref={headerRef} className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] font-mono text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            ─[ INSTALLATION ]─
          </div>
          <h2 className="text-[1.5rem] font-bold text-[var(--color-text-primary)]">
            {isInView ? <ScrambleReveal text="Get started in 60 seconds." /> : <span className="opacity-0">Get started in 60 seconds.</span>}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-[40px] border-b border-[var(--color-border)]">
          <div className="flex space-x-[2px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[16px] py-[8px] text-[0.875rem] transition-colors border border-b-0 ${
                  activeTab === tab 
                  ? "text-[var(--color-text-primary)] border-[var(--color-border)] bg-[var(--color-surface)]" 
                  : "text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)]"
                }`}
              >
                {activeTab === tab ? `[ ${tab} ]` : `  ${tab}  `}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-[16px]">
          {/* Step 1 */}
          <div className="relative group border border-[var(--color-border)] bg-transparent p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┌</span>
            <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┐</span>
            <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">└</span>
            <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┘</span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[24px]">
              <div>
                <div className="flex items-center gap-[12px] mb-[8px]">
                  <span className="text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase"># STEP 1</span>
                  <span className="text-[1rem] text-[var(--color-text-primary)]">Download GUI</span>
                </div>
                <div className="text-[0.875rem] text-[var(--color-text-secondary)]">
                  {activeTab === "macOS" ? "Apple Silicon / Intel · .dmg" : activeTab === "Windows" ? "x64 · .msi" : "x64 · .AppImage / .deb"}
                </div>
              </div>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-[20px] py-[10px] text-[0.875rem] hover:bg-[var(--color-accent-hover)] transition-colors whitespace-nowrap"
              >
                Download {latestVersion} ↓
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group border border-[var(--color-border)] bg-transparent p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┌</span>
            <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┐</span>
            <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">└</span>
            <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┘</span>

            <div>
              <div className="flex items-center gap-[12px] mb-[16px]">
                <span className="text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase"># STEP 2</span>
                <span className="text-[1rem] text-[var(--color-text-primary)]">Install CLI (Optional)</span>
              </div>
              
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between border border-[var(--color-border-strong)] bg-[var(--color-surface)] pl-[16px] pr-[8px] py-[12px]">
                <div className="flex text-[0.875rem] overflow-x-auto whitespace-nowrap mb-2 sm:mb-0">
                  <span className="text-[var(--color-text-tertiary)] select-none mr-[12px]">$</span>
                  <code className="text-[var(--color-text-primary)]">
                    curl -fsSL https://agent.nous.sh | sh
                  </code>
                </div>
                <button
                  onClick={handleCopy}
                  className="shrink-0 sm:ml-[16px] text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors px-[12px] py-[6px] border border-[var(--color-border)] hover:border-[var(--color-text-primary)] bg-[var(--color-bg)]"
                  aria-label="Copy code"
                >
                  {copied ? "[ COPIED ]" : "[ COPY ]"}
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group border border-[var(--color-border)] bg-transparent p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms]">
            <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┌</span>
            <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┐</span>
            <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">└</span>
            <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┘</span>

            <div>
              <div className="flex items-center gap-[12px] mb-[8px]">
                <span className="text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase"># STEP 3</span>
                <span className="text-[1rem] text-[var(--color-text-primary)]">Configure</span>
              </div>
              <p className="text-[0.875rem] text-[var(--color-text-secondary)] leading-[1.6]">
                Open Hermes GUI → follow the Setup Wizard. The app automatically detects the CLI, configures keys, and starts the gateway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
