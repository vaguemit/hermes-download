"use client";

import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Diagram */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="flex flex-col items-center w-full max-w-sm relative">
              
              <div className="w-full border border-[#1f1f1f] rounded px-3 py-4 text-center bg-[#0a0a0a] z-10 relative">
                <div className="text-xs text-[#888] font-mono">React Renderer</div>
              </div>

              <div className="h-10 border-l border-[#1f1f1f] flex items-center justify-center relative my-1">
                <div className="absolute bg-[#0a0a0a] text-[#555] text-[10px] px-2 font-mono ml-12">SSE</div>
                <div className="absolute -bottom-1 w-2 h-2 border-r border-b border-[#1f1f1f] transform rotate-45"></div>
              </div>

              <div className="w-full border border-[#1f1f1f] rounded px-3 py-4 text-center bg-[#0a0a0a] z-10 relative">
                <div className="text-xs text-[#888] font-mono">localhost:8642</div>
              </div>

              <div className="h-10 border-l border-[#1f1f1f] flex items-center justify-center relative my-1">
                <div className="absolute -bottom-1 w-2 h-2 border-r border-b border-[#1f1f1f] transform rotate-45"></div>
              </div>

              <div className="w-full border border-[#1f1f1f] rounded px-3 py-4 text-center bg-[#0a0a0a] z-10 relative">
                <div className="text-xs text-[#888] font-mono">Hermes Agent</div>
              </div>

              <div className="h-10 border-l border-[#1f1f1f] flex items-center justify-center relative my-1">
                <div className="absolute bg-[#0a0a0a] text-[#555] text-[10px] px-2 font-mono ml-16">Tauri IPC</div>
                <div className="absolute -bottom-1 w-2 h-2 border-r border-b border-[#1f1f1f] transform rotate-45"></div>
              </div>

              <div className="w-full border border-[#1f1f1f] rounded px-3 py-4 text-center bg-[#111] z-10 relative">
                <div className="text-xs text-white font-mono font-medium">Rust Backend</div>
              </div>

            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full flex flex-col items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#555] uppercase tracking-widest mb-4"
            >
              HOW IT WORKS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold mb-6 text-white leading-tight"
            >
              Wraps Hermes.<br />
              Doesn't replace it.
            </motion.h2>

            <div className="text-sm text-[#888] leading-7 space-y-4">
              <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                Chat flows through Hermes Agent's OpenAI-compatible API server. The app adds a window, not a model.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                Desktop-only tasks — installation, process management, file I/O — run through Tauri IPC to a Rust backend.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                The React renderer falls back gracefully in browser mode. No Rust required to explore the UI.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                All configuration reads and writes real <code className="bg-[#111] px-1.5 py-0.5 rounded border border-[#1f1f1f]">~/.hermes</code> files. Nothing is duplicated or abstracted away.
              </motion.p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
