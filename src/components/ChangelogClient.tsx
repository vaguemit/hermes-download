"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

interface Release {
  id: number;
  name: string;
  tag_name: string;
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
      <div className="page-container">
        
        <div className="flex flex-col md:flex-row gap-[80px]">
          
          {/* Left Column */}
          <div className="md:w-[35%] shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-[6px] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-[10px] py-[4px] font-[var(--font-mono)] text-[var(--text-mono-xs)] text-[var(--color-text-tertiary)] uppercase tracking-[0.08em] mb-[28px]"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-text-tertiary)] shrink-0" />
              CHANGELOG
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text-display-lg)] font-[600] leading-[1.05] tracking-[-0.03em] text-[var(--color-text-primary)]"
            >
              What ships.
            </motion.h2>
          </div>

          {/* Right Column (Timeline) */}
          <div className="md:w-[65%] relative">
            
            {/* The Vertical Line */}
            <div className="absolute left-[3px] top-[10px] bottom-0 w-[1px] bg-[var(--color-border)]" />

            <div className="flex flex-col gap-[64px] reveal-stagger is-visible">
              {releases.map((release, i) => {
                const dateStr = release.published_at
                  ? format(new Date(release.published_at), "MMMM yyyy")
                  : "Draft";
                
                // Extremely simple markdown bullet parser for the body
                const lines = release.body.split('\n');
                const bulletLines = lines
                  .filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'))
                  .map(line => line.replace(/^[-*]\s/, '').trim())
                  .slice(0, 5); // limit to 5 bullets for cleanliness
                  
                return (
                  <motion.div
                    key={release.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-[32px]"
                  >
                    {/* The Dot */}
                    <div className="absolute left-0 top-[6px] w-[7px] h-[7px] rounded-full bg-[var(--color-text-primary)]" />
                    
                    {/* Metadata */}
                    <div className="font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-tertiary)] tracking-[0.02em] mb-[12px]">
                      {release.tag_name} · {dateStr}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-[var(--font-sans)] text-[1rem] font-[500] text-[var(--color-text-primary)] mb-[16px] tracking-[-0.01em]">
                      {release.name || release.tag_name}
                    </h3>
                    
                    {/* Bullets */}
                    <ul className="flex flex-col gap-[8px]">
                      {bulletLines.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-[0.875rem] text-[var(--color-text-secondary)] leading-[1.7]">
                          <span className="text-[var(--color-text-tertiary)] mr-[16px]">·</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
              
              <div className="relative pl-[32px] mt-[-16px]">
                <div className="absolute left-0 top-[10px] w-[7px] h-[7px] rounded-full bg-[var(--color-border-strong)]" />
                <a
                  href="https://github.com/vaguemit/hermes-gui/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-sans)] text-[0.875rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[180ms] flex items-center"
                >
                  See all releases →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
