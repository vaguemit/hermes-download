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
    <section className="section-padding bg-[var(--color-bg)] border-t border-[var(--color-border)] font-mono">
      <div className="page-container">
        <div className="text-center mb-[64px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] font-mono text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            ─[ ROADMAP ]─
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
              transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
              className="relative group border border-[var(--color-border)] bg-transparent p-[24px] hover:border-[var(--color-border-strong)] transition-colors duration-200"
            >
              <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┌</span>
              <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┐</span>
              <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">└</span>
              <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┘</span>
              
              <div className="absolute top-[16px] right-[16px] text-[0.6875rem] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                [ TBD ]
              </div>
              
              <h3 className="text-[0.875rem] font-medium text-[var(--color-text-primary)] mb-[12px] pr-[40px] leading-[1.4]">
                {item.title}
              </h3>
              <p className="text-[0.8125rem] text-[var(--color-text-secondary)] leading-[1.6]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
