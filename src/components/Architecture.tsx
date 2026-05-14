"use client";

import { motion } from "framer-motion";

const diagramLines = [
  "  ┌────────────────────┐",
  "  │   React Renderer   │",
  "  └─────────┬──────────┘",
  "            │",
  "            │  SSE ──────────────────→ localhost:8642",
  "            │",
  "            ▼",
  "  ┌────────────────────┐",
  "  │    Hermes Agent    │",
  "  └─────────┬──────────┘",
  "            │",
  "            │  Tauri IPC ─────────────────────────→",
  "            │",
  "            ▼",
  "  ┌────────────────────┐",
  "  │    Rust Backend    │",
  "  ├────────────────────┤",
  "  │  install_status    │",
  "  │  run_command       │",
  "  │  start_gateway     │",
  "  │  gateway_status    │",
  "  └────────────────────┘",
];

export function Architecture() {
  return (
    <section className="py-[120px] bg-[var(--color-bg)] text-[var(--color-text-primary)] font-mono">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          {/* Left: Diagram */}
          <div className="w-full overflow-hidden text-[0.8125rem] leading-[1.4] text-[var(--color-text-secondary)] whitespace-pre select-none">
            {diagramLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.04, duration: 0.01 }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Right: Text */}
          <div className="w-full flex justify-center md:justify-start">
            <pre className="ascii-box text-[0.8125rem] sm:text-[0.875rem] text-[var(--color-text-secondary)] overflow-x-auto max-w-full">
              {`┌─[ HOW IT WORKS ]─────────────────────────────────┐
│                                                  │
│  Wraps Hermes.                                   │
│  Doesn't replace it.                             │
│                                                  │
│  Chat flows through Hermes Agent's OpenAI-       │
│  compatible API server. The app adds a window,   │
│  not a model.                                    │
│                                                  │
│  Desktop-only tasks — installation, process      │
│  management, file I/O — run through Tauri IPC    │
│  to a Rust backend.                              │
│                                                  │
│  The React renderer falls back gracefully in     │
│  browser mode. No Rust required to explore the   │
│  UI.                                             │
│                                                  │
│  All config reads and writes real `}
              <span className="bg-[var(--color-surface)] px-[4px] text-[var(--color-text-primary)]">~/.hermes</span>
              {`      │
│  files. Nothing is duplicated or abstracted.     │
│                                                  │
└──────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
