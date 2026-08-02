"use client";

import { useState } from "react";
import { stackBadges } from "@/data/content";
import FolderIcon from "./ui/FolderIcon";

const openTransforms = [
  { x: -118, y: -168, rotate: -6 },
  { x: 118, y: -168, rotate: 5 },
  { x: -168, y: -70, rotate: 3 },
  { x: 168, y: -70, rotate: -4 },
  { x: -190, y: 24, rotate: 4 },
  { x: 190, y: 24, rotate: -3 },
  { x: -150, y: 128, rotate: -3 },
  { x: 150, y: 128, rotate: 4 },
  { x: 0, y: 190, rotate: 2 },
];

export default function HeroVisual() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative mx-auto flex h-[26rem] w-full max-w-sm items-center justify-center sm:h-[30rem] sm:max-w-md">
      <div
        aria-hidden
        className="absolute h-56 w-56 rounded-full bg-ink/5 blur-2xl"
      />

      {stackBadges.map((badge, i) => {
        const t = openTransforms[i % openTransforms.length];
        return (
          <div
            key={badge.label}
            className="absolute left-1/2 top-1/2 z-10 transition-all duration-500 ease-out"
            style={{
              transform: open
                ? `translate(-50%, -50%) translate(${t.x}px, ${t.y}px) rotate(${t.rotate}deg) scale(1)`
                : "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.3)",
              opacity: open ? 1 : 0,
              transitionDelay: open ? `${i * 45}ms` : "0ms",
              pointerEvents: open ? "auto" : "none",
            }}
          >
            <div
              className="animate-float flex flex-col items-center gap-1.5 rounded-xl border border-line bg-bg-card px-3 py-2 shadow-sm"
              style={{
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 3) * 0.6}s`,
              }}
            >
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-md text-[0.6rem] font-semibold text-white"
                style={{ backgroundColor: badge.color }}
              >
                {badge.label.slice(0, 1)}
              </span>
              <span className="whitespace-nowrap font-mono text-[0.65rem] text-ink-soft">
                {badge.file}
              </span>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-pressed={open}
        aria-label={
          open ? "Collapse tech stack folder" : "Expand tech stack folder"
        }
        className="group relative z-20 flex flex-col items-center gap-3"
      >
        <FolderIcon open={open} />
        <span className="font-mono text-xs text-ink-soft transition-colors group-hover:text-ink">
          ~/dev/portfolio {open ? "▾" : "▸"}
        </span>
      </button>
    </div>
  );
}
