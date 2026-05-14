export function TrustBar() {
  const items = [
    "Tauri v2",
    "React 19",
    "TypeScript",
    "Rust",
    "Tailwind CSS",
    "Nous Research",
    "OpenAI-compatible API",
    "SSE Streaming",
    "MIT Licensed",
  ];

  return (
    <section className="w-full h-[72px] border-t border-b border-white/5 bg-[#0e0e0e] overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the list twice to create an infinite scroll illusion */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-mono text-[13px] uppercase text-[#f0ede8] opacity-40 mx-6">
              {item}
            </span>
            {/* Don't render the separator after the very last element */}
            <span className="text-[var(--color-violet)] text-[13px] opacity-80">
              &middot;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
