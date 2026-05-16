"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

export function Architecture() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="section-padding bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start">
          
          {/* Left: SVG Diagram */}
          <div className="w-full flex justify-center md:justify-start">
            <svg viewBox="0 0 480 320" className="w-full max-w-[480px] overflow-visible">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(232,232,228,0.25)" />
                </marker>
              </defs>

              {/* Paths */}
              <g fill="none" stroke="rgba(232,232,228,0.12)" strokeWidth="1">
                {/* React to SSE */}
                <path d="M 120 70 L 120 120 L 180 120" className={clsx("arch-path", isVisible && "is-visible")} markerEnd="url(#arrow)" />
                {/* SSE to Localhost / Hermes */}
                <path d="M 120 120 L 120 170 L 180 170" className={clsx("arch-path", isVisible && "is-visible")} style={{ transitionDelay: "150ms" }} markerEnd="url(#arrow)" />
                {/* React to Rust */}
                <path d="M 120 170 L 120 240 L 180 240" className={clsx("arch-path", isVisible && "is-visible")} style={{ transitionDelay: "300ms" }} markerEnd="url(#arrow)" />
                {/* Rust methods */}
                <path d="M 330 220 L 350 220" className={clsx("arch-path", isVisible && "is-visible")} style={{ transitionDelay: "450ms" }} />
                <path d="M 330 240 L 350 240" className={clsx("arch-path", isVisible && "is-visible")} style={{ transitionDelay: "500ms" }} />
                <path d="M 330 260 L 350 260" className={clsx("arch-path", isVisible && "is-visible")} style={{ transitionDelay: "550ms" }} />
              </g>

              {/* Node Boxes */}
              <g className="font-[var(--font-mono)] text-[11px] fill-[rgba(232,232,228,0.5)]">
                {/* React Renderer */}
                <rect x="40" y="40" width="160" height="30" fill="rgba(232,232,228,0.03)" stroke="rgba(232,232,228,0.12)" />
                <text x="120" y="60" textAnchor="middle" alignmentBaseline="middle">React Renderer</text>
                
                {/* Localhost */}
                <rect x="190" y="105" width="160" height="30" fill="rgba(232,232,228,0.03)" stroke="rgba(232,232,228,0.12)" />
                <text x="270" y="125" textAnchor="middle" alignmentBaseline="middle">localhost:8642</text>
                
                {/* Hermes Agent */}
                <rect x="190" y="155" width="160" height="30" fill="rgba(232,232,228,0.03)" stroke="rgba(232,232,228,0.12)" />
                <text x="270" y="175" textAnchor="middle" alignmentBaseline="middle">Hermes Agent</text>

                {/* Rust Backend */}
                <rect x="190" y="210" width="140" height="60" fill="rgba(232,232,228,0.03)" stroke="rgba(232,232,228,0.12)" />
                <text x="260" y="235" textAnchor="middle">Rust Backend</text>
              </g>

              {/* Labels */}
              <g className="font-[var(--font-mono)] text-[10px] fill-[rgba(232,232,228,0.25)]">
                <text x="130" y="115">SSE</text>
                <text x="130" y="235">Tauri IPC</text>
                <text x="360" y="223">install_status</text>
                <text x="360" y="243">run_command</text>
                <text x="360" y="263">start_gateway</text>
              </g>
            </svg>
          </div>

          {/* Right: Text */}
          <div className="w-full flex flex-col items-start reveal-stagger is-visible">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-[6px] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-[10px] py-[4px] font-[var(--font-mono)] text-[var(--text-mono-xs)] text-[var(--color-text-tertiary)] uppercase tracking-[0.08em] mb-[28px]"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
              HOW IT WORKS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text-display-lg)] font-[600] leading-[1.05] tracking-[-0.03em] mb-[32px]"
            >
              Wraps Hermes.<br />
              Doesn't replace it.
            </motion.h2>

            <div className="flex flex-col gap-[20px] text-[0.9375rem] text-[var(--color-text-secondary)] leading-[1.7]">
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
                All configuration reads and writes real <code className="font-[var(--font-mono)] text-[var(--color-text-tertiary)] bg-[rgba(232,232,228,0.06)] px-[4px] py-[1px] rounded-[2px]">~/.hermes</code> files. Nothing is duplicated or abstracted away.
              </motion.p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
