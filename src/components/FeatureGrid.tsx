"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScramble } from "use-scramble";

function ScrambleWord({ word }: { word: string }) {
  const { ref } = useScramble({
    text: word,
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 5,
  });
  return <span ref={ref} />;
}

const features = [
  {
    title: "Conversation",
    body: "SSE chat against your local Hermes gateway. Tokens stream in real time. Export as Markdown.",
    glyph: ">>"
  },
  {
    title: "Install & Setup",
    body: "Detects Hermes on PATH, streams installer output live, shows active binary and home path.",
    glyph: "//"
  },
  {
    title: "Command Center",
    body: "Every Hermes CLI command in a searchable catalog. Run any command natively with Ctrl+K.",
    glyph: "$_"
  },
  {
    title: "Agent Modes",
    body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all from one panel.",
    glyph: "[]"
  },
  {
    title: "Gateway Control",
    body: "Starts and stops hermes gateway run as a managed process. Live health probe.",
    glyph: "~~"
  },
  {
    title: "Cron Scheduler",
    body: "Create, toggle, and delete recurring Hermes workflows without touching a config file.",
    glyph: "⏱"
  },
  {
    title: "Skills Manager",
    body: "Browse, create, edit, and invoke reusable skills backed by ~/.hermes/skills/.",
    glyph: "±"
  },
  {
    title: "Settings",
    body: "API keys, personality, memory, and workspace — all reading real ~/.hermes files.",
    glyph: "::"
  },
];

export function FeatureGrid() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-[var(--color-bg)] font-mono">
      <div className="page-container">
        <div ref={headerRef} className="text-center mb-[80px]">
          <h2 className="section-headline mb-[16px]">
            Everything Hermes.<br />
            {isInView ? <ScrambleWord word="Now with a UI." /> : <span className="opacity-0">Now with a UI.</span>}
          </h2>
          <p className="text-[0.875rem] text-[var(--color-text-secondary)]">
            Eight panels. One app. Full control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px]">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.06, ease: "easeOut" }}
              className="relative group border border-[var(--color-border)] bg-transparent p-[40px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms] ease-out text-left flex flex-col"
            >
              {/* Standard border covers it */}

              <div className="flex items-start justify-between mb-[20px]">
                <h3 className="text-[0.875rem] font-medium text-[var(--color-text-primary)] leading-[1.4] max-w-[80%]">
                  {feat.title}
                </h3>
                <span className="text-[0.875rem] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors shrink-0">
                  {feat.glyph}
                </span>
              </div>
              <p className="text-[0.8125rem] text-[var(--color-text-secondary)] leading-[1.6]">
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
