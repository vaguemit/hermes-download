"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface Release {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
}

interface ChangelogClientProps {
  releases: Release[];
}

export function ChangelogClient({ releases }: ChangelogClientProps) {
  if (!releases || releases.length === 0) return null;

  return (
    <section id="changelog" className="py-[160px] max-md:py-[96px] bg-[#0e0e0e]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-16">
        <h2 className="text-[36px] font-[800] tracking-tight text-white mb-16">
          What&apos;s new
        </h2>

        <div className="relative border-l border-[var(--color-violet)] ml-4">
          {releases.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="mb-16 last:mb-0 pl-10 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-[#0e0e0e] border-2 border-[var(--color-violet)] rounded-full -left-[6.5px] top-1.5" />

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--color-violet)]/10 text-[var(--color-violet)] font-mono text-[12px] uppercase tracking-wider">
                  {release.tag_name}
                </span>
                <span className="text-sm text-[#f0ede8]/40">
                  {new Date(release.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {release.name || release.tag_name}
              </h3>

              <div className="prose prose-invert prose-p:text-[#f0ede8]/70 prose-li:text-[#f0ede8]/70 prose-a:text-[var(--color-violet)] max-w-none mb-6">
                <ReactMarkdown>
                  {/* Truncate long bodies or just display the whole thing if it's a short changelog. For this, we'll slice a reasonable amount. */}
                  {release.body?.length > 1000
                    ? release.body.slice(0, 1000) + "..."
                    : release.body || "No release notes provided."}
                </ReactMarkdown>
              </div>

              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--color-violet)] hover:text-[#8b5cf6] transition-colors"
              >
                View full diff →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 ml-14">
          <a
            href="https://github.com/vaguemit/hermes-gui/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            See all releases →
          </a>
        </div>
      </div>
    </section>
  );
}
