"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Conversation",
    body: "SSE chat against your local Hermes gateway. Tokens stream in real time. Export as Markdown.",
  },
  {
    title: "Install & Setup",
    body: "Detects Hermes on PATH, streams installer output live, shows active binary and home path.",
  },
  {
    title: "Command Center",
    body: "Every Hermes CLI command in a searchable catalog. Ctrl+K to run any command natively.",
  },
  {
    title: "Agent Modes",
    body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all from one panel.",
  },
  {
    title: "Gateway Control",
    body: "Starts and stops hermes gateway run. Live health probe to 127.0.0.1:8642.",
  },
  {
    title: "Cron Scheduler",
    body: "Create, toggle, and delete recurring Hermes workflows without touching a config file.",
  },
  {
    title: "Skills Manager",
    body: "Browse, create, edit, and invoke reusable skills backed by ~/.hermes/skills/.",
  },
  {
    title: "Settings",
    body: "API keys, personality, memory, and workspace — all reading real ~/.hermes files.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="section-padding bg-[var(--color-bg)]">
      <div className="page-container">
        
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="section-headline mb-[16px]">
            Everything Hermes.<br />Now with a UI.
          </h2>
          <p className="text-[1rem] font-[400] text-[var(--color-text-secondary)] mb-[64px]">
            Eight panels. One app. Full control.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.06, ease: "easeOut" }}
              className="relative z-[var(--z-base)] hover:z-[var(--z-raised)] group bg-transparent p-[28px] text-left flex flex-col border border-[var(--color-border)] -mt-px -ml-px transition-colors duration-[200ms] hover:border-[var(--color-border-strong)]"
            >
              {/* The Dot Icon */}
              <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-text-secondary)] transition-colors duration-[200ms] mb-[20px]" />
              
              <h3 className="text-[1rem] font-[500] text-[var(--color-text-primary)] leading-[1.4] tracking-[-0.01em] mb-[10px]">
                {feat.title}
              </h3>
              
              <p className="text-[0.875rem] font-[400] text-[var(--color-text-secondary)] leading-[1.6]">
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
