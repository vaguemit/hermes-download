import { getGithubStars } from "@/lib/api";

export async function OpenSourceCTA() {
  const stars = await getGithubStars();

  return (
    <section className="w-full py-[120px] bg-[var(--color-bg)] flex flex-col items-center justify-center text-center px-8 font-mono">
      <div className="relative group border border-[var(--color-border)] bg-transparent w-full max-w-[800px] p-[40px] sm:p-[64px] hover:border-[var(--color-border-strong)] transition-colors duration-[200ms] ease-out">
        <span className="absolute -top-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┌</span>
        <span className="absolute -top-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┐</span>
        <span className="absolute -bottom-[1px] -left-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">└</span>
        <span className="absolute -bottom-[1px] -right-[1px] text-[var(--color-border)] group-hover:text-[var(--color-border-strong)] leading-none transition-colors">┘</span>

        <div className="absolute -top-[10px] left-[32px] bg-[var(--color-bg)] px-[8px] text-[var(--color-text-tertiary)] text-[0.8125rem]">
          ─[ OPEN SOURCE ]─
        </div>
        
        <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-[var(--color-text-primary)] mb-[24px]">
          Open source. Forever.
        </h2>
        
        <p className="text-[0.875rem] text-[var(--color-text-secondary)] max-w-[560px] mx-auto mb-[48px] leading-[1.6]">
          Hermes GUI is MIT-licensed. Built on Tauri, React, and the Nous Research Hermes Agent ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full">
          <a
            href="https://github.com/vaguemit/hermes-gui"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex items-center justify-center bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-[24px] py-[12px] transition-colors duration-[180ms] w-full sm:w-auto"
          >
            <span className="absolute inset-0 border border-[var(--color-border)] group-hover/btn:border-[var(--color-text-primary)]" />
            <span className="absolute -top-[6px] -left-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┌</span>
            <span className="absolute -top-[6px] -right-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┐</span>
            <span className="absolute -bottom-[6px] -left-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">└</span>
            <span className="absolute -bottom-[6px] -right-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┘</span>
            <span className="relative z-10 text-[0.9375rem] font-medium flex items-center">
              Star on GitHub ★ <span className="ml-[8px] text-[0.875rem] opacity-70 group-hover/btn:opacity-100">{stars.toLocaleString()}</span>
            </span>
          </a>
          <a
            href="/docs"
            className="group/btn relative flex items-center justify-center bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-[24px] py-[12px] transition-colors duration-[180ms] w-full sm:w-auto"
          >
            <span className="absolute inset-0 border border-[var(--color-border)] group-hover/btn:border-[var(--color-text-primary)]" />
            <span className="absolute -top-[6px] -left-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┌</span>
            <span className="absolute -top-[6px] -right-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┐</span>
            <span className="absolute -bottom-[6px] -left-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">└</span>
            <span className="absolute -bottom-[6px] -right-[3px] text-[var(--color-border)] group-hover/btn:text-[var(--color-text-primary)] text-[0.75rem] leading-none bg-[var(--color-bg)] group-hover/btn:bg-[var(--color-text-primary)] px-[1px] py-[2px]">┘</span>
            <span className="relative z-10 text-[0.9375rem] font-medium">Read the Docs →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
