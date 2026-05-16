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
    <section id="install" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold mb-2 text-white">
            Get running in under a minute.
          </h2>
          <p className="text-[#888]">
            Download the app and optionally install Hermes Agent. That's the full setup.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-0 mb-10 border-b border-[#1f1f1f]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm border-b-2 transition-colors duration-150 ${
                activeTab === tab
                  ? "border-white text-white"
                  : "border-transparent text-[#555] hover:text-[#888]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          
          {/* Step 1 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="text-xs text-[#555] uppercase tracking-widest mb-1">
              01 — DOWNLOAD
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-lg font-medium text-white">{activeTab}</span>
                    <span className="font-mono text-xs text-[#555]">
                      {latestVersion} · {activeTab === "macOS" ? "42 MB" : "38 MB"}
                    </span>
                  </div>
                  <div className="text-sm text-[#888]">
                    {activeTab === "macOS" ? "Apple Silicon (arm64) + Intel (x64)" : activeTab === "Windows" ? "Windows 10/11 (x64)" : "AppImage / Debian (x64)"}
                  </div>
                </div>
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e6e6e6] transition-colors duration-150"
                >
                  Download {activeTab === "macOS" ? ".dmg" : activeTab === "Windows" ? ".msi" : ".AppImage"} ↓
                </a>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="text-xs text-[#555] uppercase tracking-widest mb-1">
              02 — INSTALL HERMES AGENT
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-5">
              <div className="font-mono text-sm text-[#ccc] bg-[#0a0a0a] rounded px-4 py-3 flex justify-between items-center overflow-x-auto whitespace-nowrap">
                <div className="flex gap-2">
                  <span className="text-[#555] select-none">$</span>
                  <span>curl -fsSL https://agent.nous.sh | sh</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs text-[#555] hover:text-white cursor-pointer ml-4 shrink-0 transition-colors duration-150"
                  aria-label="Copy to clipboard"
                >
                  {copied ? "COPIED" : "COPY"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
            <div className="text-xs text-[#555] uppercase tracking-widest mb-1">
              03 — LAUNCH HERMES GUI
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-5">
              <p className="text-sm text-[#888] leading-relaxed">
                Open Hermes GUI. The setup wizard detects your Hermes installation, configures API keys, and starts the gateway automatically. The gateway status indicator will turn white when ready.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
