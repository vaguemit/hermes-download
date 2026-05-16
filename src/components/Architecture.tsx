"use client";

import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "96px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left: Diagram */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "360px" }}>
              
              {[
                { label: "React Renderer", bg: "#0a0a0a" },
                { label: "localhost:8642", bg: "#0a0a0a" },
                { label: "Hermes Agent", bg: "#0a0a0a" },
                { label: "Rust Backend", bg: "#111" },
              ].map((node, idx) => (
                <div key={idx}>
                  {idx > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: "1px", height: "32px", backgroundColor: "#1f1f1f" }} />
                      <div style={{ fontSize: "10px", color: "#555", fontFamily: "monospace", margin: "4px 0" }}>
                        {idx === 1 ? "SSE" : idx === 3 ? "Tauri IPC" : "↓"}
                      </div>
                      <div style={{ width: "1px", height: "8px", backgroundColor: "#1f1f1f" }} />
                    </div>
                  )}
                  <div
                    style={{
                      width: "100%",
                      minWidth: "280px",
                      border: "1px solid #1f1f1f",
                      borderRadius: "4px",
                      padding: "16px 12px",
                      textAlign: "center",
                      backgroundColor: node.bg,
                    }}
                  >
                    <div style={{
                      fontSize: "12px",
                      color: idx === 3 ? "#fff" : "#888",
                      fontFamily: "monospace",
                      fontWeight: idx === 3 ? 500 : 400,
                    }}>
                      {node.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}
            >
              HOW IT WORKS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)", fontWeight: 700, marginBottom: "24px", color: "#fff", lineHeight: 1.2 }}
            >
              Wraps Hermes.<br />
              Doesn&apos;t replace it.
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Chat flows through Hermes Agent's OpenAI-compatible API server. The app adds a window, not a model.",
                "Desktop-only tasks — installation, process management, file I/O — run through Tauri IPC to a Rust backend.",
                "The React renderer falls back gracefully in browser mode. No Rust required to explore the UI.",
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  style={{ fontSize: "14px", color: "#888", lineHeight: 1.8 }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ fontSize: "14px", color: "#888", lineHeight: 1.8 }}
              >
                All configuration reads and writes real{" "}
                <code style={{ backgroundColor: "#111", padding: "2px 6px", borderRadius: "4px", border: "1px solid #1f1f1f", fontSize: "13px" }}>
                  ~/.hermes
                </code>{" "}
                files. Nothing is duplicated or abstracted away.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Mobile responsive override */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
