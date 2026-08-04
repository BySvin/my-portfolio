"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ label, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs text-ink-soft">{label}</span>
        <span className="font-mono text-[0.65rem] text-ink-soft/60">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/70">
        <div
          className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
