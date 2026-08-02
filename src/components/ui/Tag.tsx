export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg-card px-3 py-1 font-mono text-xs text-ink-soft">
      {children}
    </span>
  );
}
