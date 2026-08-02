import { hero } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-ink-soft sm:flex-row">
        <p>
          © {year} {hero.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
