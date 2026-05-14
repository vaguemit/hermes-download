import { getGithubStars } from "@/lib/api";

export async function OpenSourceCTA() {
  const stars = await getGithubStars();

  return (
    <section className="w-full py-[120px] bg-[rgba(124,58,237,0.08)] border-y border-[rgba(124,58,237,0.2)] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-[40px] font-[800] tracking-tight text-white mb-6">
        Open source. Forever.
      </h2>
      
      <p className="text-[18px] text-[#f0ede8]/70 max-w-[600px] mb-10 leading-relaxed font-sans">
        Hermes GUI is MIT-licensed. PRs welcome. Built on Tauri, React, and the Nous Research Hermes Agent ecosystem.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="https://github.com/vaguemit/hermes-gui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-transparent border border-white/20 hover:border-white/40 text-[#f0ede8] font-semibold px-8 py-3.5 transition-all hover:bg-white/5"
        >
          Star on GitHub ★ <span className="ml-2 opacity-60 font-mono">{stars.toLocaleString()}</span>
        </a>
        <a
          href="/docs"
          className="flex items-center justify-center bg-transparent border border-[var(--color-violet)]/40 hover:border-[var(--color-violet)] text-[var(--color-violet)] hover:bg-[var(--color-violet)]/10 font-semibold px-8 py-3.5 transition-all"
        >
          Read the Docs →
        </a>
      </div>
    </section>
  );
}
