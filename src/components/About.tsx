import { about } from "@/data/content";
import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} title="A bit about how I work.">
      <div className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:gap-12">
        <div className="hidden sm:block">
          <div className="h-px w-12 bg-ink/30" />
        </div>
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
