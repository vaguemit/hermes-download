"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScramble } from "use-scramble";
import { Copy, Check, Apple, Monitor, Terminal } from "lucide-react";
import { useOS, OS } from "@/hooks/use-os";

function ScrambleReveal({ text }: { text: string }) {
  const { ref } = useScramble({
    text,
    speed: 0.6,
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
    <section id="install" className="py-[160px] max-md:py-[96px] bg-[#0e0e0e]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-16">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-[48px] font-[800] tracking-tight text-white mb-4">
            {isInView ? <ScrambleReveal text="Get started in 60 seconds" /> : <span className="opacity-0">Get started in 60 seconds</span>}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white/5 p-1 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab ? "text-white" : "text-[#f0ede8]/60 hover:text-[#f0ede8]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-[var(--color-violet)]"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Step 1 */}
          <div className="bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-violet)]/50 group-hover:bg-[var(--color-violet)] transition-colors" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pl-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-[12px] font-mono text-[var(--color-violet)] uppercase tracking-wider">Step 1</span>
                  <span className="text-white font-semibold">Download</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[#f0ede8]/60">
                  {activeTab === "macOS" && <Apple className="w-4 h-4" />}
                  {activeTab === "Windows" && <Monitor className="w-4 h-4" />}
                  {activeTab === "Linux" && <Terminal className="w-4 h-4" />}
                  <span>
                    {activeTab === "macOS" ? "Apple Silicon / Intel · .dmg" : activeTab === "Windows" ? "x64 · .msi" : "x64 · .AppImage / .deb"}
                  </span>
                </div>
              </div>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded font-medium transition-colors whitespace-nowrap"
              >
                Download {latestVersion}
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-violet)]/50 group-hover:bg-[var(--color-violet)] transition-colors" />
            <div className="pl-4">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[12px] font-mono text-[var(--color-violet)] uppercase tracking-wider">Step 2</span>
                <span className="text-white font-semibold">Install Hermes Agent (Optional)</span>
              </div>
              
              <div className="relative group/code rounded-[4px] border border-white/10 bg-[#1a1a1a] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--color-violet)]" />
                <button
                  onClick={handleCopy}
                  className="absolute right-2 top-2 p-1.5 rounded text-white/40 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover/code:opacity-100"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <div className="flex text-sm font-mono overflow-x-auto py-4 px-6">
                  <span className="text-white/30 select-none mr-4">1</span>
                  <code className="text-white">
                    <span className="text-[var(--color-violet)]">curl</span> <span className="text-white/60">-fsSL</span> https://agent.nous.sh | <span className="text-[var(--color-violet)]">sh</span>
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-violet)]/50 group-hover:bg-[var(--color-violet)] transition-colors" />
            <div className="pl-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-[12px] font-mono text-[var(--color-violet)] uppercase tracking-wider">Step 3</span>
                <span className="text-white font-semibold">Launch and configure</span>
              </div>
              <p className="text-[#f0ede8]/70 text-sm leading-relaxed">
                Open Hermes GUI → follow the Setup Wizard → the app detects Hermes, configures your API keys, and starts the gateway automatically.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
