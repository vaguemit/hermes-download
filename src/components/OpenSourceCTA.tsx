import { getGithubStars } from "@/lib/api";

export async function OpenSourceCTA() {
  const stars = await getGithubStars();

  return (
    <section className="w-full py-[160px] max-md:py-[96px] bg-[var(--color-bg)] border-t border-[var(--color-border-subtle)] flex flex-col items-center justify-center text-center px-8">
      <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
        <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
        OPEN SOURCE
      </div>
      
      <h2 className="section-headline mb-[24px]">
        Open source. Forever.
      </h2>
      
      <p className="text-[1rem] text-[var(--color-text-secondary)] max-w-[560px] mb-[40px] leading-[1.6]">
        Hermes GUI is MIT-licensed. Built on Tauri, React, and the Nous Research Hermes Agent ecosystem.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto">
        <a
          href="https://github.com/vaguemit/hermes-gui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full sm:w-auto items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] font-medium text-[0.9375rem] px-[20px] py-[10px] rounded-none transition-all duration-[180ms] outline-offset-[3px] focus:outline-2 focus:outline-[var(--color-text-primary)] active:scale-[0.98]"
        >
          Star on GitHub ★ <span className="ml-[8px] font-mono text-[0.875rem] text-[var(--color-text-tertiary)]">{stars.toLocaleString()}</span>
        </a>
        <a
          href="/docs"
          className="flex w-full sm:w-auto items-center justify-center bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] font-medium text-[0.9375rem] px-[20px] py-[10px] rounded-none transition-all duration-[180ms] outline-offset-[3px] focus:outline-2 focus:outline-[var(--color-text-primary)] active:scale-[0.98]"
        >
          Read the Docs →
        </a>
      </div>
    </section>
  );
}
