"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full pt-[80px] pb-[48px] px-6 bg-[var(--color-bg)] border-t border-[var(--color-border-subtle)] font-[var(--font-sans)]">
      <div className="w-full max-w-[1080px] mx-auto">
        
        <div className="flex flex-col md:flex-row gap-[64px] md:gap-0 justify-between">
          
          {/* Left Column */}
          <div className="md:w-[40%] flex flex-col">
            <Link
              href="#hero"
              className="text-[0.875rem] font-[500] text-[var(--color-text-primary)] tracking-[0.04em] mb-[12px] hover:opacity-80 transition-opacity"
            >
              hermes gui
            </Link>
            <p className="text-[0.875rem] text-[var(--color-text-tertiary)] leading-[1.6] max-w-[260px]">
              A desktop interface for Nous Research Hermes Agent.<br />
              MIT License.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-[60%] flex gap-[80px]">
            
            {/* Sub-column 1 */}
            <div className="flex flex-col">
              <div className="font-[var(--font-mono)] text-[0.6875rem] tracking-[0.1em] text-[var(--color-text-tertiary)] uppercase mb-[16px]">
                Features
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link href="#install" className="text-[0.875rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Install
                </Link>
                <Link href="/docs" className="text-[0.875rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Docs
                </Link>
              </div>
            </div>

            {/* Sub-column 2 */}
            <div className="flex flex-col">
              <div className="font-[var(--font-mono)] text-[0.6875rem] tracking-[0.1em] text-[var(--color-text-tertiary)] uppercase mb-[16px]">
                GitHub
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link href="#changelog" className="text-[0.875rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Changelog
                </Link>
                <a href="https://github.com/vaguemit/hermes-gui/issues" target="_blank" rel="noopener noreferrer" className="text-[0.875rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Issues
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[48px] pt-[24px] border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-[16px] text-[0.75rem] text-[var(--color-text-tertiary)]">
          <div>© {new Date().getFullYear()} Hermes GUI Contributors</div>
          <div>MIT License · Not affiliated with Anthropic or OpenAI.</div>
        </div>

      </div>
    </footer>
  );
}
