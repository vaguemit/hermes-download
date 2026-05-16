"use client";

export function TechTicker() {
  const items = [
    "Tauri",
    "React",
    "Rust",
    "Tailwind",
    "Framer Motion",
    "OpenAI API",
    "TypeScript",
    "Next.js",
  ];

  // Double the items so the marquee loop is seamless
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full border-y border-[#1f1f1f] py-3 overflow-hidden bg-[#0a0a0a]">
      <div className="flex w-max animate-marquee">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="text-xs text-[#555] tracking-widest uppercase px-8 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
