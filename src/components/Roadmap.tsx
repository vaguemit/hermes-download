"use client";

import { motion } from "framer-motion";
import { Users, TerminalSquare, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Sessions & Profiles",
    body: "Multi-profile support with `--profile` flag, session browser, and memory viewer.",
  },
  {
    icon: TerminalSquare,
    title: "PTY Terminal",
    body: "Fully interactive embedded terminal for commands like `hermes setup model`.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Updater",
    body: "Signed native installers with one-click in-app update via Tauri updater plugin.",
  },
];

export function Roadmap() {
  return (
    <section className="py-[160px] max-md:py-[96px] bg-[#0e0e0e] border-t border-white/5">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-16">
        <h2 className="text-[36px] font-[800] tracking-tight text-white mb-16 text-center">
          What&apos;s coming
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group border border-dashed border-white/15 bg-white/[0.01] p-[28px] rounded-[4px] hover:border-white/30 transition-colors duration-200"
            >
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-wider text-white/60">
                Coming soon
              </div>
              
              <item.icon className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-[16px] font-semibold text-white/80 mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#f0ede8]/40 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
