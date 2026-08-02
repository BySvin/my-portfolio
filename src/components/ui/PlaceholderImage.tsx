interface PlaceholderImageProps {
  label: string;
  aspectClassName?: string;
}

export default function PlaceholderImage({
  label,
  aspectClassName = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex ${aspectClassName} w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink/20 bg-bg-card text-center`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-ink-soft"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16.5 16 11l-4.5 5-2-2L3 19" />
      </svg>
      <p className="max-w-[16rem] px-4 font-mono text-xs uppercase tracking-wide text-ink-soft">
        {label}
      </p>
    </div>
  );
}
