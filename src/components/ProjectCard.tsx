import type { Project } from "@/data/content";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import { ArrowUpRightIcon, GitHubIcon } from "./ui/Icons";

function isDraft(value?: string) {
  return !value || value.trim().toUpperCase().startsWith("TODO");
}

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  const draft = isDraft(value);
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
        {label}
      </p>
      <p
        className={`mt-2 text-sm leading-relaxed sm:text-base ${
          draft ? "italic text-ink-soft/70" : "text-ink-soft"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  if (project.status === "comingSoon") {
    return (
      <div className="flex min-h-[16rem] flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-ink/20 bg-bg/60 p-8 text-center">
        <p className="font-display text-2xl text-ink-soft">{project.title}</p>
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft/70">
          Next case study in progress
        </p>
      </div>
    );
  }

  const hasFeatures = Boolean(project.keyFeatures?.length);

  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-line bg-bg-card p-6 sm:p-8">
      <header>
        <h3 className="font-display text-2xl text-ink sm:text-3xl">
          {project.title}
        </h3>
        {project.subtitle && (
          <p
            className={`mt-1 text-sm sm:text-base ${
              isDraft(project.subtitle)
                ? "italic text-ink-soft/70"
                : "text-ink-soft"
            }`}
          >
            {project.subtitle}
          </p>
        )}
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="The Problem" value={project.problem} />
        <Field label="My Role" value={project.role} />
      </div>

      {project.techStack && project.techStack.length > 0 && (
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            Tech Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      )}

      <Field label="Why This Stack" value={project.whyThisStack} />

      {hasFeatures && (
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            Key Features
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {project.keyFeatures!.map((feature) => {
              const draft = isDraft(feature);
              return (
                <li
                  key={feature}
                  className={`flex gap-2 text-sm leading-relaxed sm:text-base ${
                    draft ? "italic text-ink-soft/70" : "text-ink-soft"
                  }`}
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Technical Challenges" value={project.technicalChallenges} />
        <Field label="What I'd Improve" value={project.whatIdImprove} />
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6">
        {project.links?.liveDemo && (
          <Button href={project.links.liveDemo} variant="secondary">
            Live demo <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Button>
        )}
        {project.links?.github ? (
          <Button href={project.links.github} variant="icon">
            <GitHubIcon />
          </Button>
        ) : (
          <Button disabled disabledLabel="GitHub link coming soon" variant="icon">
            <GitHubIcon />
          </Button>
        )}
      </div>
    </article>
  );
}
