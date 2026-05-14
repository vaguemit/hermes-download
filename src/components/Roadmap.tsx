"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Sessions & Profiles",
    body: "Multi-profile support with --profile flag, session browser, and memory viewer.",
  },
  {
    title: "PTY Terminal",
    body: "Fully interactive embedded terminal for commands like hermes setup model.",
  },
  {
    title: "Auto-Updater",
    body: "Signed native installers with one-click in-app update via Tauri updater plugin.",
  },
];

export function Roadmap() {
  return (
    <section className="py-[160px] max-md:py-[96px] bg-[var(--color-bg)] border-t border-[var(--color-border-subtle)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="text-center mb-[64px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
            ROADMAP
          </div>
          <h2 className="section-headline">
            What&apos;s coming.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border border-[var(--color-border-strong)] bg-transparent p-[28px] rounded-none hover:border-[var(--color-text-secondary)] transition-colors duration-200"
            >
              <div className="absolute top-[20px] right-[20px] px-[8px] py-[2px] border border-[var(--color-border)] bg-transparent text-[0.6875rem] font-mono uppercase tracking-[0.04em] text-[var(--color-text-tertiary)]">
                Coming soon
              </div>
              
              <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-text-secondary)] transition-colors duration-[200ms] mb-[20px]" />
              <h3 className="text-[1rem] font-medium text-[var(--color-text-primary)] mb-[10px] tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="text-[0.875rem] text-[var(--color-text-secondary)] leading-[1.6]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
