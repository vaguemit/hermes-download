"use client";

import { motion } from "framer-motion";

const features = [
  { icon: ">>", title: "Conversation", body: "SSE chat against your local Hermes gateway. Tokens stream in real time. Export as Markdown." },
  { icon: "$_", title: "Install & Setup", body: "Detects Hermes on PATH, streams installer output live, shows active binary and home path." },
  { icon: "[]", title: "Command Center", body: "Every Hermes CLI command in a searchable catalog. Ctrl+K to run any command natively." },
  { icon: "<>", title: "Agent Modes", body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all from one panel." },
  { icon: "{}", title: "Gateway Control", body: "Starts and stops hermes gateway run. Live health probe to 127.0.0.1:8642." },
  { icon: "*/5", title: "Cron Scheduler", body: "Create, toggle, and delete recurring Hermes workflows without touching a config file." },
  { icon: "()", title: "Skills Manager", body: "Browse, create, edit, and invoke reusable skills backed by ~/.hermes/skills/." },
  { icon: "##", title: "Settings", body: "API keys, personality, memory, and workspace — all reading real ~/.hermes files." },
];

export function FeatureGrid() {
  return (
    <section id="features" style={{ width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "96px 24px" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
            FEATURES
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
            Eight panels. One app. Full control.
          </h2>
          <p style={{ color: "#888", marginBottom: "48px" }}>
            Everything you can do in the CLI, now with a native graphical interface.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "#1f1f1f",
            border: "1px solid #1f1f1f",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.06, ease: "easeOut" }}
              style={{
                backgroundColor: "#0a0a0a",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "background-color 150ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0a0a0a")}
            >
              <div style={{ color: "#555", fontSize: "12px", fontFamily: "monospace", marginBottom: "8px" }}>{feat.icon}</div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{feat.title}</h3>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>{feat.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile 2-col fallback via media query is handled by the CSS grid auto-fit */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
