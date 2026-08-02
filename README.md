# Portfolio

Personal portfolio site built with Next.js (App Router) + Tailwind CSS.

## Content

All site copy lives in [`src/data/content.ts`](src/data/content.ts) — edit that file to update text, links, or project data. It was transcribed from the original content draft at `portfolio-content.md`; treat `content.ts` as the live source of truth going forward.

Items still marked `TODO` or `null` in `content.ts`:
- Your real name (`hero.name`)
- GitHub / LinkedIn URLs
- Resume PDF — drop it at `public/resume/resume.pdf`
- MyPulse360 screenshots/demo GIF — drop in `public/images/projects/`, then swap `PlaceholderImage` in `src/components/ProjectCard.tsx` for a real image
- MyPulse360 "Why This Stack", "Technical Challenges", "What I'd Improve", and live/demo/GitHub links
- Project 2 case study (currently a "coming soon" placeholder card)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
