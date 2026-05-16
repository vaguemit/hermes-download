import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-white hover:text-[#ccc] transition-colors duration-150">
              hermes gui
            </Link>
            <p className="text-sm text-[#555]">
              A desktop GUI for Nous Research Hermes Agent.
            </p>
            <div className="inline-block border border-[#1f1f1f] rounded text-[10px] uppercase text-[#555] px-2 py-0.5 mt-2 w-max">
              MIT License
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <div className="text-xs text-[#555] uppercase tracking-widest">RESOURCES</div>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/vaguemit/hermes-gui" target="_blank" rel="noopener noreferrer" className="text-sm text-[#888] hover:text-white transition-colors duration-150">GitHub Repository</a>
              <Link href="/docs" className="text-sm text-[#888] hover:text-white transition-colors duration-150">Documentation</Link>
              <a href="https://github.com/vaguemit/hermes-gui/releases" target="_blank" rel="noopener noreferrer" className="text-sm text-[#888] hover:text-white transition-colors duration-150">Releases</a>
              <a href="https://nousresearch.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#888] hover:text-white transition-colors duration-150">Nous Research</a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <div className="text-xs text-[#555] uppercase tracking-widest">STACK</div>
            <div className="text-sm text-[#555] leading-relaxed">
              Tauri v2<br />
              React & Next.js<br />
              Rust Backend<br />
              Tailwind CSS
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#1f1f1f] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555]">
          <div>&copy; {new Date().getFullYear()} Hermes GUI. Open source software.</div>
          <div>Built with ♥ for the local AI community.</div>
        </div>

      </div>
    </footer>
  );
}
