import { getGithubStars } from "@/lib/api";

export async function OpenSourceCTA() {
  const stars = await getGithubStars();

  return (
    <section className="w-full section-padding bg-[var(--color-bg)] flex flex-col items-center justify-center text-center font-mono">
      <div className="page-container flex justify-center">
        <div className="w-full max-w-[800px] text-left">
          {/* ── Top label bar ── */}
          <div className="w-full text-[var(--color-text-tertiary)] text-[0.75rem] mb-1 select-none">
            ┌─[ OPEN SOURCE ]─────────────────────────────────────────────────────┐
          </div>

          {/* ── CTA box ── */}
          <div className="w-full border-l border-r border-[var(--color-border)] px-6 sm:px-10 py-12 text-center flex flex-col items-center">
            
            <h2 className="section-headline mb-6">
              Open source. Forever.
            </h2>
            
            <p className="text-[0.9375rem] text-[var(--color-text-secondary)] max-w-[560px] mx-auto mb-10 leading-[1.7]">
              Hermes GUI is MIT-licensed. Built on Tauri, React, and the Nous Research Hermes Agent ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
              <a
                href="https://github.com/vaguemit/hermes-gui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-6 py-2.5 text-[0.9375rem] transition-colors duration-150 w-full sm:w-auto min-w-[200px]"
              >
                [ Star on GitHub ★ {stars.toLocaleString()} ]
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] px-6 py-2.5 text-[0.9375rem] transition-colors duration-150 w-full sm:w-auto min-w-[200px]"
              >
                [ Read the Docs → ]
              </a>
            </div>
          </div>

          {/* ── Bottom label bar ── */}
          <div className="w-full text-[var(--color-text-tertiary)] text-[0.75rem] mt-1 select-none">
            └─────────────────────────────────────────────────────────────────────┘
          </div>
        </div>
      </div>
    </section>
  );
}
