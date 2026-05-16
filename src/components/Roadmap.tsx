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
    <section id="roadmap" className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold mb-12 text-white"
        >
          What's coming
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmapItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
              className="border border-[#1f1f1f] rounded-lg p-6 bg-[#0a0a0a]"
            >
              <div className="text-[10px] uppercase tracking-widest text-[#555] border border-[#1f1f1f] rounded-full px-2 py-0.5 inline-block mb-4">
                {item.status}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
