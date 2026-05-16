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
    <section id="changelog" className="section-padding bg-[var(--color-bg)] font-mono">
      <div className="page-container" style={{ maxWidth: "800px" }}>
        <div className="mb-[64px]">
          <div className="inline-flex items-center gap-[6px] px-[10px] py-[4px] font-mono text-[0.8125rem] text-[var(--color-text-tertiary)] uppercase mb-[24px]">
            ─[ CHANGELOG ]─
          </div>
          <h2 className="section-headline">
            Version history.
          </h2>
        </div>

        <div className="relative border-l border-[var(--color-border-strong)] ml-[4px]">
          {releases.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: idx * 0.08, ease: "easeOut" }}
              className="mb-[64px] last:mb-0 pl-[32px] relative"
            >
              {/* Timeline Connector */}
              <span className="absolute -left-[4px] top-[4px] text-[var(--color-text-secondary)] text-[0.875rem] leading-none bg-[var(--color-bg)] flex items-center justify-center">├</span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-[12px] mb-[16px]">
                <span className="text-[var(--color-text-primary)] text-[0.8125rem] uppercase tracking-[0.04em]">
                  [ {release.tag_name} ]
                </span>
                <span className="text-[0.8125rem] text-[var(--color-text-tertiary)]">
                  {new Date(release.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-[1.125rem] font-medium text-[var(--color-text-primary)] mb-[24px]">
                {release.name || release.tag_name}
              </h3>

              <div className="prose prose-invert prose-p:text-[var(--color-text-secondary)] prose-p:leading-[1.7] prose-li:text-[var(--color-text-secondary)] prose-a:text-[var(--color-text-primary)] hover:prose-a:text-[var(--color-text-primary)] hover:prose-a:bg-[var(--color-border)] prose-a:no-underline max-w-none mb-[24px] text-[0.875rem]">
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
                className="inline-flex items-center text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)] px-[8px] py-[4px] transition-colors"
              >
                [ View full diff → ]
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-[64px] ml-[32px]">
          <a
            href="https://github.com/vaguemit/hermes-gui/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[0.875rem] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)] px-[16px] py-[8px] transition-colors"
          >
            See all releases →
          </a>
        </div>
      </div>
    </section>
  );
}
