import { hero } from "@/data/content";
import Button from "./ui/Button";
import HeroVisual from "./HeroVisual";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./ui/Icons";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-28 pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
          {hero.title}
        </p>
        <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          Hi, I&apos;m {hero.name}.
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
          {hero.tagline} {hero.subtext}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={hero.ctas.resume.href} variant="primary">
            <DownloadIcon />
            {hero.ctas.resume.label}
          </Button>
          <Button href={hero.ctas.viewProjects.href} variant="secondary">
            {hero.ctas.viewProjects.label}
          </Button>
          {hero.ctas.github.href ? (
            <Button href={hero.ctas.github.href} variant="icon">
              <GitHubIcon />
            </Button>
          ) : (
            <Button disabled disabledLabel="Add your GitHub URL" variant="icon">
              <GitHubIcon />
            </Button>
          )}
          {hero.ctas.linkedin.href ? (
            <Button href={hero.ctas.linkedin.href} variant="icon">
              <LinkedInIcon />
            </Button>
          ) : (
            <Button disabled disabledLabel="Add your LinkedIn URL" variant="icon">
              <LinkedInIcon />
            </Button>
          )}
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <HeroVisual />
      </div>
    </section>
  );
}
