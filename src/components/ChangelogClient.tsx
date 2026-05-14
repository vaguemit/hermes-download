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
    <section id="changelog" className="py-[160px] max-md:py-[96px] bg-[var(--color-bg)]">
      <div className="max-w-[800px] mx-auto px-8">
        <div className="mb-[64px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-[var(--color-border)] rounded-[2px] font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
            CHANGELOG
          </div>
          <h2 className="section-headline">
            Version history.
          </h2>
        </div>

        <div className="relative border-l border-[var(--color-border-strong)] ml-[6px]">
          {releases.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-[64px] last:mb-0 pl-[40px] relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-[11px] h-[11px] bg-[var(--color-bg)] border-[2px] border-[var(--color-text-secondary)] rounded-full -left-[6px] top-[6px]" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-[12px] mb-[16px]">
                <span className="inline-flex items-center justify-center px-[8px] py-[2px] border border-[var(--color-border)] rounded-[2px] text-[var(--color-text-primary)] font-mono text-[0.6875rem] uppercase tracking-[0.04em]">
                  {release.tag_name}
                </span>
                <span className="text-[0.875rem] text-[var(--color-text-tertiary)] font-mono">
                  {new Date(release.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-medium text-[var(--color-text-primary)] mb-[24px] tracking-[-0.01em]">
                {release.name || release.tag_name}
              </h3>

              <div className="prose prose-invert prose-p:text-[var(--color-text-secondary)] prose-p:leading-[1.7] prose-li:text-[var(--color-text-secondary)] prose-a:text-[var(--color-text-primary)] hover:prose-a:text-[var(--color-accent-hover)] prose-a:underline prose-a:underline-offset-[3px] prose-a:decoration-[var(--color-border-strong)] max-w-none mb-[24px]">
                <ReactMarkdown>
                  {/* Truncate long bodies or just display the whole thing if it's a short changelog. */}
                  {release.body?.length > 1000
                    ? release.body.slice(0, 1000) + "..."
                    : release.body || "No release notes provided."}
                </ReactMarkdown>
              </div>

              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[0.875rem] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-hover)] transition-colors underline underline-offset-[3px] decoration-[var(--color-border-strong)]"
              >
                View full diff →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-[64px] ml-[40px]">
          <a
            href="https://github.com/vaguemit/hermes-gui/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[0.875rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors border border-[var(--color-border)] hover:border-[var(--color-border-strong)] px-[16px] py-[8px] rounded-none"
          >
            See all releases →
          </a>
        </div>
      </div>
    </section>
  );
}
