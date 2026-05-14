import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left */}
          <div className="space-y-6">
            <Link href="#hero" className="flex items-center space-x-1 group">
              <span className="font-mono font-bold tracking-wider text-[15px] text-[#f0ede8]">
                HERMES
              </span>
              <span className="font-mono font-bold tracking-wider text-[15px] text-[#f0ede8] relative">
                GUI
                <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[var(--color-violet)]"></span>
              </span>
            </Link>
            <p className="text-[#f0ede8]/50 text-sm leading-relaxed max-w-[280px]">
              A desktop interface for Nous Research Hermes Agent.
            </p>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#f0ede8]/40">
              MIT License
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/docs" className="text-[#f0ede8]/50 hover:text-white transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui" target="_blank" rel="noopener noreferrer" className="text-[#f0ede8]/50 hover:text-white transition-colors text-sm">
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link href="#changelog" className="text-[#f0ede8]/50 hover:text-white transition-colors text-sm">
                  Changelog
                </Link>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui/issues" target="_blank" rel="noopener noreferrer" className="text-[#f0ede8]/50 hover:text-white transition-colors text-sm">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/vaguemit/hermes-gui/discussions" target="_blank" rel="noopener noreferrer" className="text-[#f0ede8]/50 hover:text-white transition-colors text-sm">
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stack</h4>
            <ul className="space-y-4">
              <li className="text-[#f0ede8]/50 text-sm">
                <span className="text-white/30 mr-2">Built with:</span>
                Tauri, React, Rust, Tailwind
              </li>
              <li className="text-[#f0ede8]/50 text-sm">
                <span className="text-white/30 mr-2">Based on:</span>
                NousResearch/hermes-agent
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#f0ede8]/30 font-mono text-center sm:text-left">
          <p>© 2025 Hermes GUI Contributors · MIT License</p>
          <p>Not affiliated with Anthropic or OpenAI</p>
        </div>
      </div>
    </footer>
  );
}
