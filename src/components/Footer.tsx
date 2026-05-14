import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] pt-[80px] pb-[40px] font-mono">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] mb-[64px]">
          {/* Left */}
          <div className="space-y-[24px]">
            <Link href="#hero" className="flex items-center group">
              <span className="font-bold tracking-[0.04em] text-[1rem] text-[var(--color-text-primary)]">
                hermes_gui
              </span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-[0.875rem] leading-[1.6] max-w-[280px]">
              A desktop interface for the Nous Research Hermes Agent.
            </p>
            <div className="inline-block text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase tracking-[0.04em]">
              [ MIT License ]
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-[0.8125rem] font-bold uppercase text-[var(--color-text-primary)] mb-[24px]">
              // RESOURCES
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <Link href="/docs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-[0.875rem] hover:bg-[var(--color-border)] px-[4px] -ml-[4px]">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-[0.875rem] hover:bg-[var(--color-border)] px-[4px] -ml-[4px]">
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link href="#changelog" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-[0.875rem] hover:bg-[var(--color-border)] px-[4px] -ml-[4px]">
                  Changelog
                </Link>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui/issues" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-[0.875rem] hover:bg-[var(--color-border)] px-[4px] -ml-[4px]">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui/discussions" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-[0.875rem] hover:bg-[var(--color-border)] px-[4px] -ml-[4px]">
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-[0.8125rem] font-bold uppercase text-[var(--color-text-primary)] mb-[24px]">
              // STACK
            </h4>
            <ul className="space-y-[12px]">
              <li className="text-[var(--color-text-secondary)] text-[0.875rem]">
                <span className="text-[var(--color-text-tertiary)] mr-[8px]">Built with:</span>
                Tauri, React, Rust, Tailwind
              </li>
              <li className="text-[var(--color-text-secondary)] text-[0.875rem]">
                <span className="text-[var(--color-text-tertiary)] mr-[8px]">Based on:</span>
                NousResearch/hermes-agent
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[32px] border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-[16px] text-[0.8125rem] text-[var(--color-text-tertiary)] text-center sm:text-left">
          <p>© 2026 Hermes GUI Contributors</p>
          <p>Not affiliated with Anthropic or OpenAI</p>
        </div>
      </div>
    </footer>
  );
}
