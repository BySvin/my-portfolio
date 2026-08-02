import { skills } from "@/data/content";
import Section from "./ui/Section";
import Tag from "./ui/Tag";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map(([category, items]) => (
          <div key={category}>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
