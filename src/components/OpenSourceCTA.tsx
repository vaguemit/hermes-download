"use client";

import { motion } from "framer-motion";

interface OpenSourceCTAProps {
  stars?: number;
}

export function OpenSourceCTA({ stars }: OpenSourceCTAProps) {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "96px 24px" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            textAlign: "center",
            border: "1px solid #1f1f1f",
            borderRadius: "12px",
            padding: "64px",
            backgroundColor: "#111",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
            Free and open source.
          </h2>
          <p style={{ color: "#888", marginBottom: "32px", maxWidth: "448px", margin: "0 auto 32px", lineHeight: 1.6 }}>
            Hermes GUI is MIT licensed. It runs locally, doesn&apos;t collect telemetry, and its source code is fully transparent.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://github.com/vaguemit/hermes-gui"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background-color 150ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6e6e6")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              Star on GitHub {stars ? `★ ${stars}` : ""}
            </a>
            <a
              href="/docs"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #1f1f1f",
                color: "#888",
                padding: "10px 20px",
                borderRadius: "6px",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 150ms, border-color 150ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#333";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.borderColor = "#1f1f1f";
              }}
            >
              Read Docs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
