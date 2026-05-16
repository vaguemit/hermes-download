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
    <section id="hero" style={{ width: "100%" }}>
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "128px 24px 64px",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            border: "1px solid #1f1f1f",
            borderRadius: "9999px",
            padding: "4px 12px",
            fontSize: "12px",
            color: "#888",
            marginBottom: "24px",
          }}
        >
          BUILT ON NOUS RESEARCH HERMES AGENT
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            marginBottom: "16px",
            color: "#f5f5f5",
          }}
        >
          Everything Hermes.<br />Now with a UI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          style={{
            fontSize: "18px",
            color: "#888",
            maxWidth: "560px",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          Install, configure, and run Hermes Agent from a native desktop app. No terminal required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
          style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
        >
          <a
            href={downloadUrl}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#000",
              padding: "10px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background-color 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6e6e6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            {downloadLabel}
          </a>
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1f1f1f",
              color: "#888",
              padding: "10px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              textDecoration: "none",
              transition: "color 150ms, border-color 150ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "#333";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.borderColor = "#1f1f1f";
            }}
          >
            View on GitHub →
          </a>
        </motion.div>

        {/* Version String */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          style={{ fontSize: "12px", color: "#555", marginTop: "16px" }}
        >
          {latestVersion} · macOS · Windows · Linux · MIT
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          style={{
            marginTop: "48px",
            borderRadius: "12px",
            border: "1px solid #1f1f1f",
            overflow: "hidden",
            width: "100%",
            aspectRatio: "16 / 9",
            backgroundColor: "#111",
            position: "relative",
          }}
        >
          <Image
            src="/app-screenshot.png"
            alt="Hermes GUI"
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
