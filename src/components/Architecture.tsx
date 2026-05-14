"use client";

import { motion } from "framer-motion";

export function Architecture() {
  const bullets = [
    "The app wraps Hermes — it does not reimplement it.",
    "Chat flows through Hermes Agent's OpenAI-compatible API.",
    "Desktop-only tasks (install, process management) use Tauri IPC.",
    "Falls back gracefully in browser preview mode — no Rust required to explore the UI.",
  ];

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration: 1.5 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <section className="py-[160px] max-md:py-[96px] bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-16">
        <h2 className="text-[36px] font-[800] tracking-tight text-white mb-16">
          How it works
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Diagram */}
          <div className="w-full lg:w-[55%] bg-[#121212] border border-white/10 rounded-lg p-8 relative overflow-hidden font-mono text-[12px] sm:text-[14px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-violet)]/10 blur-[80px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 text-[#f0ede8]">
              {/* This is a stylized representation of the diagram */}
              <div className="mb-4 text-white font-bold bg-white/5 border border-white/10 inline-block px-3 py-1 rounded">
                React Renderer
              </div>
              
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-[20px] shrink-0 relative ml-[14px]">
                  <motion.svg
                    className="absolute top-0 left-0 h-[280px] w-full"
                    viewBox="0 0 20 280"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M 1 0 L 1 280"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                      fill="none"
                      custom={0}
                      variants={draw}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </motion.svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-12 py-8">
                  {/* Branch 1 */}
                  <div className="relative">
                    <motion.svg
                      className="absolute top-[10px] -left-[20px] w-[40px] h-[20px]"
                      viewBox="0 0 40 20"
                    >
                      <motion.path
                        d="M 0 0 L 0 10 L 35 10"
                        stroke="rgba(124,58,237,0.6)"
                        strokeWidth="2"
                        fill="none"
                        custom={1}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <motion.polygon
                        points="35,6 40,10 35,14"
                        fill="rgba(124,58,237,0.6)"
                        custom={1.2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                    <div className="pl-6 flex items-center space-x-3">
                      <span className="text-[var(--color-violet)]">fetch/SSE</span>
                      <span className="opacity-50">──►</span>
                      <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/80">
                        localhost:8642/v1/chat/completions
                      </span>
                    </div>
                    <div className="pl-6 mt-4">
                      <div className="ml-32 border-l-2 border-white/10 pl-4 py-2 opacity-80">
                        <span className="text-white font-bold bg-white/5 border border-white/10 inline-block px-3 py-1 rounded">
                          Hermes Agent (local)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Branch 2 */}
                  <div className="relative pt-6">
                    <motion.svg
                      className="absolute top-[16px] -left-[20px] w-[40px] h-[20px]"
                      viewBox="0 0 40 20"
                    >
                      <motion.path
                        d="M 0 0 L 0 10 L 35 10"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                        fill="none"
                        custom={2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <motion.polygon
                        points="35,6 40,10 35,14"
                        fill="rgba(255,255,255,0.4)"
                        custom={2.2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                    <div className="pl-6 flex items-center space-x-3">
                      <span className="text-white/60">Tauri IPC</span>
                      <span className="opacity-50">──►</span>
                      <span className="bg-[#1a1a1a] border border-white/20 px-3 py-1 rounded font-bold text-white">
                        Rust Backend
                      </span>
                    </div>
                    <div className="pl-6 mt-4 opacity-70 ml-24 relative">
                      <motion.svg
                        className="absolute top-0 -left-4 w-[20px] h-full"
                        viewBox="0 0 20 120"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 10 0 L 10 105"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="1"
                          fill="none"
                          custom={3}
                          variants={draw}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                        <motion.path
                          d="M 10 15 L 18 15 M 10 45 L 18 45 M 10 75 L 18 75 M 10 105 L 18 105"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="1"
                          fill="none"
                          custom={3.2}
                          variants={draw}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </motion.svg>
                      <div className="space-y-[13px] pl-2 text-white/50">
                        <div>├── hermes_install_status</div>
                        <div>├── hermes_run_command</div>
                        <div>├── hermes_start_gateway</div>
                        <div>└── hermes_gateway_status</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bullets */}
          <div className="w-full lg:w-[45%]">
            <ul className="space-y-6">
              {bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start"
                >
                  <span className="mr-4 mt-1 text-[var(--color-violet)] shrink-0 opacity-80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-[16px] text-[#f0ede8]/80 leading-relaxed">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
