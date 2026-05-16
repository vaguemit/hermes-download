import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ width: "100%", borderTop: "1px solid #1f1f1f", backgroundColor: "#0a0a0a" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "48px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* Col 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link href="/" style={{ fontSize: "14px", fontWeight: 500, color: "#fff", textDecoration: "none" }}>
              hermes gui
            </Link>
            <p style={{ fontSize: "14px", color: "#555" }}>
              A desktop GUI for Nous Research Hermes Agent.
            </p>
            <div
              style={{
                display: "inline-block",
                border: "1px solid #1f1f1f",
                borderRadius: "4px",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#555",
                padding: "2px 8px",
                width: "max-content",
                marginTop: "8px",
              }}
            >
              MIT License
            </div>
          </div>

          {/* Col 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              RESOURCES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "GitHub Repository", href: "https://github.com/vaguemit/hermes-gui", external: true },
                { label: "Documentation", href: "/docs", external: false },
                { label: "Releases", href: "https://github.com/vaguemit/hermes-gui/releases", external: true },
                { label: "Nous Research", href: "https://nousresearch.com/", external: true },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "14px", color: "#888", textDecoration: "none", transition: "color 150ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ fontSize: "14px", color: "#888", textDecoration: "none", transition: "color 150ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Col 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "12px", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              STACK
            </div>
            <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
              Tauri v2<br />
              React &amp; Next.js<br />
              Rust Backend<br />
              Tailwind CSS
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1f1f1f",
            marginTop: "32px",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "#555",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>&copy; {new Date().getFullYear()} Hermes GUI. Open source software.</div>
          <div>Built with ♥ for the local AI community.</div>
        </div>

        {/* Mobile responsive */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
