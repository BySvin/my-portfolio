"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  delay?: number;
}

export default function SkillBar({ label, delay = 0 }: SkillBarProps) {
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
      <span className="font-mono text-xs text-ink-soft">{label}</span>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/70">
        <div
          className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out"
          style={{
            width: visible ? "100%" : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
