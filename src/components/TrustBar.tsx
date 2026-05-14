export function TrustBar() {
  const items = [
    "Tauri v2",
    "React 19",
    "TypeScript",
    "Rust",
    "Tailwind CSS",
    "Nous Research",
    "OpenAI-compatible",
    "MIT License",
    "SSE Streaming",
    "Native Desktop",
  ];

  return (
    <section 
      className="w-full h-[48px] border-y border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden flex items-center relative z-10"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.015) 2px,
          rgba(255,255,255,0.015) 4px
        )`
      }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the list twice to create an infinite scroll illusion */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-mono text-[0.6875rem] font-normal tracking-[0.12em] uppercase text-[var(--color-text-tertiary)] mx-[16px]">
              {item}
            </span>
            <span className="text-[var(--color-border)] font-mono text-[0.6875rem]">
              ────
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
