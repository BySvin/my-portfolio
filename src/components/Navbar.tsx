import { nav, hero } from "@/data/content";
import { DownloadIcon, LogoMark } from "./ui/Icons";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-line bg-bg-nav/90 px-2 py-2 shadow-sm backdrop-blur">
        <a
          href="#hero"
          aria-label="Back to top"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink"
        >
          <LogoMark className="h-4 w-4" />
        </a>
        <div className="mx-1 flex shrink-0 items-center gap-0.5">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs text-ink-soft transition-colors hover:bg-bg hover:text-ink sm:px-3 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={hero.ctas.resume.href}
          className="ml-0.5 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-bg transition-colors hover:bg-ink/85 sm:px-4 sm:text-sm"
        >
          <DownloadIcon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </nav>
    </header>
  );
}
