"use client";

import { motion } from "framer-motion";

interface OpenSourceCTAProps {
  stars?: number;
}

export function OpenSourceCTA({ stars }: OpenSourceCTAProps) {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center border border-[#1f1f1f] rounded-xl p-16 bg-[#111]"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Free and open source.
          </h2>
          <p className="text-[#888] mb-8 max-w-md mx-auto leading-relaxed">
            Hermes GUI is MIT licensed. It runs locally, doesn't collect telemetry, and its source code is fully transparent.
          </p>
          
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/vaguemit/hermes-gui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#e6e6e6] transition-colors duration-150"
            >
              Star on GitHub {stars && `★ ${stars}`}
            </a>
            <a
              href="/docs"
              className="inline-flex justify-center items-center border border-[#1f1f1f] text-[#888] px-5 py-2.5 rounded-md text-sm hover:text-white hover:border-[#333] transition-colors duration-150"
            >
              Read Docs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
