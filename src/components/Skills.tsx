import { skills } from "@/data/content";
import Section from "./ui/Section";
import SkillBar from "./ui/SkillBar";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-10 sm:grid-cols-2">
        {categories.map(([category, items]) => (
          <div key={category}>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {category}
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {items.map((item, i) => (
                <SkillBar key={item} label={item} delay={i * 90} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
