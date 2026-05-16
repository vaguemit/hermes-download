"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useOS } from "@/hooks/use-os";

interface HeroClientProps {
  latestVersion: string;
}

export function HeroClient({ latestVersion }: HeroClientProps) {
  const os = useOS();

  let osName = "macOS";
  let ext = ".dmg";
  if (os === "Windows") { osName = "Windows"; ext = ".msi"; }
  if (os === "Linux") { osName = "Linux"; ext = ".AppImage"; }

  const downloadLabel = `Download for ${osName} ↓`;
  const downloadUrl = `https://github.com/vaguemit/hermes-gui/releases/download/${latestVersion}/hermes-gui_${latestVersion}_${osName === 'macOS' ? 'universal' : 'x64'}${ext}`;

  return (
    <section id="hero" className="w-full">
      <div className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto px-6 pt-32 pb-16">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="inline-flex self-start border border-[#1f1f1f] rounded-full px-3 py-1 text-xs text-[#888] mb-6"
        >
          BUILT ON NOUS RESEARCH HERMES AGENT
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-6xl font-bold tracking-tight leading-none mb-4"
        >
          Everything Hermes. Now with a UI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="text-lg text-[#888] max-w-xl mb-8 leading-relaxed"
        >
          Install, configure, and run Hermes Agent from a native desktop app. No terminal required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={downloadUrl}
            className="inline-flex justify-center items-center bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#e6e6e6] transition-colors duration-150"
          >
            {downloadLabel}
          </a>
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center border border-[#1f1f1f] text-[#888] px-5 py-2.5 rounded-md text-sm hover:text-white hover:border-[#333] transition-colors duration-150"
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Version String */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          className="text-xs text-[#555] mt-4"
        >
          {latestVersion} · macOS · Windows · Linux · MIT
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="mt-12 rounded-xl border border-[#1f1f1f] overflow-hidden w-full aspect-video bg-[#111] relative"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/app-screenshot.avif"
              alt="Hermes GUI"
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
              unoptimized
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
