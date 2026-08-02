import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title) && (
          <div className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
