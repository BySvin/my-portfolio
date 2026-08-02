import { contact } from "@/data/content";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="mt-4 text-base text-ink-soft sm:text-lg">
          Reach out if you&apos;re hiring for an internship, or just want to
          talk about mobile app development.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={`mailto:${contact.email}`} variant="primary">
            <MailIcon />
            {contact.email}
          </Button>
          <Button href={contact.resumeHref} variant="secondary">
            <DownloadIcon />
            Download Resume
          </Button>
          {contact.linkedin ? (
            <Button href={contact.linkedin} variant="icon">
              <LinkedInIcon />
            </Button>
          ) : (
            <Button disabled disabledLabel="Add your LinkedIn URL" variant="icon">
              <LinkedInIcon />
            </Button>
          )}
          {contact.github ? (
            <Button href={contact.github} variant="icon">
              <GitHubIcon />
            </Button>
          ) : (
            <Button disabled disabledLabel="Add your GitHub URL" variant="icon">
              <GitHubIcon />
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
