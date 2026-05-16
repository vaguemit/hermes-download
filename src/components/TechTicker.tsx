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

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section
      style={{
        width: "100%",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "12px 0",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      <div
        className="animate-marquee"
        style={{ display: "flex", width: "max-content" }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              fontSize: "12px",
              color: "#555",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0 32px",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
