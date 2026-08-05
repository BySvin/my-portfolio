# Sarvin Raaj — Portfolio

Personal portfolio site for Sarvin Raaj, built with Next.js (App Router) + Tailwind CSS.

Live at [my-portfolio](https://github.com/BySvin/my-portfolio) · Featured projects: [MyPulse360](https://github.com/BySvin/MyPulse360) · [FoodCalAI](https://github.com/BySvin/foodcal-ai) ([live demo](https://foodcal-ai-app.web.app))

## Content

All site copy lives in [`src/data/content.ts`](src/data/content.ts) — edit that file to update text, links, or project data.

Still open in `content.ts`:
- MyPulse360 screenshots/demo GIF, and FoodCalAI screenshots/demo GIF — drop images in `public/images/projects/`, then swap `PlaceholderImage` in `src/components/ProjectCard.tsx` for a real image
- MyPulse360 "My Role" — describe your specific contribution within the Final Year Project team
- MyPulse360 "Why This Stack"
- MyPulse360 live demo link (repo says it's not deployed yet)
- A third project card, if/when you have one — currently just MyPulse360 and FoodCalAI

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
