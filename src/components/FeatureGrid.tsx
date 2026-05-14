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
  },
  {
    title: "Install & Setup",
    body: "Detects Hermes on PATH, streams installer output live, shows active binary and home path.",
  },
  {
    title: "Command Center",
    body: "Every Hermes CLI command in a searchable catalog. Run any command natively with Ctrl+K.",
  },
  {
    title: "Agent Modes",
    body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all from one panel.",
  },
  {
    title: "Gateway Control",
    body: "Starts and stops hermes gateway run as a managed process. Live health probe.",
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
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-[160px] max-md:py-[96px] bg-[var(--color-bg)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div ref={headerRef} className="text-center mb-[64px]">
          <h2 className="section-headline mb-[16px]">
            Everything Hermes.<br />
            {isInView ? <ScrambleWord word="Now with a UI." /> : <span className="opacity-0">Now with a UI.</span>}
          </h2>
          <p className="text-[1rem] text-[var(--color-text-secondary)] font-sans tracking-[0em]">
            Eight panels. One app. Full control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-[var(--color-border)] bg-transparent p-[28px] rounded-none hover:border-[var(--color-border-strong)] transition-colors duration-[200ms] ease-out"
            >
              <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-text-secondary)] transition-colors duration-[200ms] mb-[20px]" />
              <h3 className="text-[1rem] font-medium text-[var(--color-text-primary)] mb-[10px] tracking-[-0.01em]">
                {feat.title}
              </h3>
              <p className="text-[0.875rem] text-[var(--color-text-secondary)] leading-[1.6]">
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
