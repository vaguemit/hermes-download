"use client";

import { motion } from "framer-motion";

export function Architecture() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration: 1.5, ease: [0.25, 1, 0.5, 1] },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <section className="py-[160px] bg-[var(--color-bg)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start">
          {/* Left: Diagram */}
          <div className="w-full relative overflow-hidden font-mono text-[11px]">
            <div className="relative z-10 text-[rgba(232,232,228,0.5)]">
              {/* This is a stylized representation of the diagram */}
              <div className="mb-4 text-[rgba(232,232,228,0.5)] bg-[rgba(232,232,228,0.03)] border border-[rgba(232,232,228,0.12)] inline-block px-[12px] py-[6px] rounded-none">
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
                      stroke="rgba(232,232,228,0.12)"
                      strokeWidth="1"
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
                        stroke="rgba(232,232,228,0.12)"
                        strokeWidth="1"
                        fill="none"
                        custom={1}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <motion.polygon
                        points="35,6 40,10 35,14"
                        fill="rgba(232,232,228,0.12)"
                        custom={1.2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                    <div className="pl-6 flex items-center space-x-3">
                      <span className="text-[rgba(232,232,228,0.25)]">SSE</span>
                      <span className="text-[rgba(232,232,228,0.12)]">──►</span>
                      <span className="text-[rgba(232,232,228,0.25)]">
                        localhost:8642
                      </span>
                    </div>
                    <div className="pl-6 mt-4">
                      <div className="ml-[120px] border-l border-[rgba(232,232,228,0.12)] pl-4 py-2">
                        <span className="text-[rgba(232,232,228,0.5)] bg-[rgba(232,232,228,0.03)] border border-[rgba(232,232,228,0.12)] inline-block px-[12px] py-[6px] rounded-none">
                          Hermes Agent
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
                        stroke="rgba(232,232,228,0.12)"
                        strokeWidth="1"
                        fill="none"
                        custom={2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      <motion.polygon
                        points="35,6 40,10 35,14"
                        fill="rgba(232,232,228,0.12)"
                        custom={2.2}
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                    <div className="pl-6 flex items-center space-x-3">
                      <span className="text-[rgba(232,232,228,0.25)]">Tauri IPC</span>
                      <span className="text-[rgba(232,232,228,0.12)]">──►</span>
                      <span className="bg-[rgba(232,232,228,0.03)] border border-[rgba(232,232,228,0.12)] px-[12px] py-[6px] rounded-none text-[rgba(232,232,228,0.5)]">
                        Rust Backend
                      </span>
                    </div>
                    <div className="pl-6 mt-4 ml-[120px] relative text-[rgba(232,232,228,0.25)]">
                      <motion.svg
                        className="absolute top-0 -left-4 w-[20px] h-full"
                        viewBox="0 0 20 120"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 10 0 L 10 105"
                          stroke="rgba(232,232,228,0.12)"
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
                          stroke="rgba(232,232,228,0.12)"
                          strokeWidth="1"
                          fill="none"
                          custom={3.2}
                          variants={draw}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </motion.svg>
                      <div className="space-y-[13px] pl-2">
                        <div>├── install_status</div>
                        <div>├── run_command</div>
                        <div>├── start_gateway</div>
                        <div>└── gateway_status</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full">
            <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
              HOW IT WORKS
            </div>
            
            <h2 className="section-headline text-left mb-[32px]">
              Wraps Hermes.<br />
              Doesn&apos;t replace it.
            </h2>
            
            <div className="space-y-[20px]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.7]"
              >
                Chat flows through Hermes Agent&apos;s OpenAI-compatible API server. The app adds a window, not a model.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.7]"
              >
                Desktop-only tasks — installation, process management, file I/O — run through Tauri IPC to a Rust backend.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.7]"
              >
                The React renderer falls back gracefully in browser mode. No Rust required to explore the UI.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.7]"
              >
                All configuration reads and writes real <code className="font-mono text-[var(--color-text-tertiary)] bg-[rgba(232,232,228,0.06)] px-[4px] py-[1px] rounded-[2px]">~/.hermes</code> files. Nothing is duplicated or abstracted away.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
