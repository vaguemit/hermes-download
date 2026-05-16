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
    <section id="install" style={{ width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "96px 24px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "40px" }}
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "8px", color: "#fff" }}>
            Get running in under a minute.
          </h2>
          <p style={{ color: "#888" }}>
            Download the app and optionally install Hermes Agent. That's the full setup.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: "40px", borderBottom: "1px solid #1f1f1f" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                borderBottom: activeTab === tab ? "2px solid #fff" : "2px solid transparent",
                color: activeTab === tab ? "#fff" : "#555",
                background: "none",
                border: "none",
                borderBottomStyle: "solid",
                borderBottomWidth: "2px",
                borderBottomColor: activeTab === tab ? "#fff" : "transparent",
                cursor: "pointer",
                transition: "color 150ms",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          
          {/* Step 1 - Download */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              01 — DOWNLOAD
            </div>
            <div style={{ backgroundColor: "#111", border: "1px solid #1f1f1f", borderRadius: "8px", padding: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "18px", fontWeight: 500, color: "#fff" }}>{activeTab}</span>
                    <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555" }}>
                      {latestVersion} · {activeTab === "macOS" ? "42 MB" : "38 MB"}
                    </span>
                  </div>
                  <div style={{ fontSize: "14px", color: "#888" }}>
                    {activeTab === "macOS" ? "Apple Silicon (arm64) + Intel (x64)" : activeTab === "Windows" ? "Windows 10/11 (x64)" : "AppImage / Debian (x64)"}
                  </div>
                </div>
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background-color 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6e6e6")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  Download {activeTab === "macOS" ? ".dmg" : activeTab === "Windows" ? ".msi" : ".AppImage"} ↓
                </a>
              </div>
            </div>
          </motion.div>

          {/* Step 2 - Install Agent */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              02 — INSTALL HERMES AGENT
            </div>
            <div style={{ backgroundColor: "#111", border: "1px solid #1f1f1f", borderRadius: "8px", padding: "20px" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "#ccc",
                  backgroundColor: "#0a0a0a",
                  borderRadius: "4px",
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "#555", userSelect: "none" }}>$</span>
                  <span>curl -fsSL https://agent.nous.sh | sh</span>
                </div>
                <button
                  onClick={handleCopy}
                  style={{
                    fontSize: "12px",
                    color: "#555",
                    cursor: "pointer",
                    marginLeft: "16px",
                    flexShrink: 0,
                    transition: "color 150ms",
                    background: "none",
                    border: "none",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  aria-label="Copy to clipboard"
                >
                  {copied ? "COPIED" : "COPY"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Step 3 - Launch */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              03 — LAUNCH HERMES GUI
            </div>
            <div style={{ backgroundColor: "#111", border: "1px solid #1f1f1f", borderRadius: "8px", padding: "20px" }}>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                Open Hermes GUI. The setup wizard detects your Hermes installation, configures API keys, and starts the gateway automatically. The gateway status indicator will turn white when ready.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
