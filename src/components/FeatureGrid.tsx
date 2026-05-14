"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import {
  MessageSquare,
  Zap,
  Wrench,
  Bot,
  Globe,
  Clock,
  Brain,
  Settings,
} from "lucide-react";

function ScrambleWord({ word }: { word: string }) {
  const { ref } = useScramble({
    text: word,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 5,
  });
  return <span ref={ref} />;
}

const features = [
  {
    icon: MessageSquare,
    title: "Conversation",
    body: "OpenAI-compatible SSE chat against your local Hermes gateway. Tokens stream in real time. Export sessions as Markdown.",
  },
  {
    icon: Zap,
    title: "Install & Setup",
    body: "Auto-detects Hermes, shows your active binary and home path, runs the official installer, and streams live output.",
  },
  {
    icon: Wrench,
    title: "Command Center",
    body: "Searchable catalog of every Hermes CLI command. Run any command natively with Ctrl+K.",
  },
  {
    icon: Bot,
    title: "Agent Modes",
    body: "Main, one-shot, scripted, worktree, background, goal, and ACP — all launchable from one panel.",
  },
  {
    icon: Globe,
    title: "Gateway Control",
    body: "Start and stop `hermes gateway run` as a managed process. Live health probe to `127.0.0.1:8642`.",
  },
  {
    icon: Clock,
    title: "Cron Scheduler",
    body: "Schedule and manage recurring Hermes workflows. Toggle, add, and remove cron tasks without touching a config file.",
  },
  {
    icon: Brain,
    title: "Skills Manager",
    body: "Browse, create, edit, and invoke reusable Hermes skills backed by `~/.hermes/skills/`.",
  },
  {
    icon: Settings,
    title: "Settings",
    body: "API keys, personality, memory, workspace, and auto-start — all reading and writing real `~/.hermes` files.",
  },
];

export function FeatureGrid() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-[160px] max-md:py-[96px] bg-[#0e0e0e]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-16">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-[48px] font-[800] tracking-tight text-white mb-4">
            Everything Hermes.{" "}
            {isInView ? <ScrambleWord word="Now with a UI." /> : <span className="opacity-0">Now with a UI.</span>}
          </h2>
          <p className="text-[18px] text-[#f0ede8]/55 max-w-[600px] mx-auto">
            Eight panels. One app. Full control over your local AI agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group border border-white/5 bg-white/2 p-[28px] rounded-[4px] hover:border-[rgba(124,58,237,0.4)] hover:bg-[rgba(124,58,237,0.04)] hover:-translate-y-[3px] transition-all duration-200 ease-out"
            >
              <feat.icon className="w-8 h-8 text-[var(--color-violet)] mb-6" />
              <h3 className="text-[16px] font-semibold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-[14px] text-[#f0ede8]/55 leading-relaxed">
                {feat.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
