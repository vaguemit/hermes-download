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
    <section className="w-full h-[48px] border-y border-[var(--color-border-subtle)] bg-[var(--color-bg)] overflow-hidden flex items-center relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the list twice to create an infinite scroll illusion */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-mono text-[0.6875rem] font-normal tracking-[0.12em] uppercase text-[var(--color-text-tertiary)] mx-3">
              {item}
            </span>
            <span className="text-[var(--color-text-tertiary)] font-mono text-[0.6875rem]">
              &middot;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
