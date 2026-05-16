"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: ">>",
    title: "Conversation",
    body: "SSE chat against your local Hermes gateway. Tokens stream in real time. Export as Markdown.",
  },
  {
    icon: "$_",
    title: "Install & Setup",
    body: "Detects Hermes on PATH, streams installer output live, shows active binary and home path.",
  },
  {
    icon: "[]",
    title: "Command Center",
    body: "Every Hermes CLI command in a searchable catalog. Ctrl+K to run any command natively.",
  },
  {
    icon: "<>",
    title: "Agent Modes",
    body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all from one panel.",
  },
  {
    icon: "{}",
    title: "Gateway Control",
    body: "Starts and stops hermes gateway run. Live health probe to 127.0.0.1:8642.",
  },
  {
    icon: "*/5",
    title: "Cron Scheduler",
    body: "Create, toggle, and delete recurring Hermes workflows without touching a config file.",
  },
  {
    icon: "()",
    title: "Skills Manager",
    body: "Browse, create, edit, and invoke reusable skills backed by ~/.hermes/skills/.",
  },
  {
    icon: "##",
    title: "Settings",
    body: "API keys, personality, memory, and workspace — all reading real ~/.hermes files.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-xs text-[#555] uppercase tracking-widest mb-3">FEATURES</div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Eight panels. One app. Full control.
          </h2>
          <p className="text-[#888] mb-12">
            Everything you can do in the CLI, now with a native graphical interface.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1f1f1f] border border-[#1f1f1f] rounded-lg overflow-hidden">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.06, ease: "easeOut" }}
              className="bg-[#0a0a0a] p-6 flex flex-col gap-2 hover:bg-[#111] transition-colors duration-150"
            >
              <div className="text-[#555] text-xs font-mono mb-2">{feat.icon}</div>
              <h3 className="text-sm font-semibold text-white">
                {feat.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
