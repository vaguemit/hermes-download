"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    status: "IN PROGRESS",
    title: "Plugin System",
    description: "Write your own UI panels in React and inject them into the workspace. Perfect for custom tools and agent views.",
  },
  {
    status: "UPCOMING",
    title: "Multi-Agent Canvas",
    description: "A node-based visual editor to chain multiple Hermes agents together for complex workflows.",
  },
  {
    status: "PLANNED",
    title: "Remote Sync",
    description: "Sync your settings, skills, and chat history across multiple machines using a secure backend.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" style={{ width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "96px 24px" }}>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: "48px", color: "#fff" }}
        >
          What&apos;s coming
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {roadmapItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
              style={{
                border: "1px solid #1f1f1f",
                borderRadius: "8px",
                padding: "24px",
                backgroundColor: "#0a0a0a",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#555",
                  border: "1px solid #1f1f1f",
                  borderRadius: "9999px",
                  padding: "2px 8px",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                {item.status}
              </div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
