// Single source of truth for site copy, mirroring portfolio-content.md.
// Update this file to change what renders across the site.

export const hero = {
  name: "Sarvin Raaj", // TODO: replace with your real name
  title: "Software Developer — Mobile App Development",
  tagline: "Building real products with Flutter, React Native & Firebase.",
  subtext:
    "Diploma in Information Technology (Software Development), Politeknik Balik Pulau.",
  ctas: {
    viewProjects: { label: "View Projects", href: "#projects" },
    resume: { label: "Download Resume", href: "/resume/resume.pdf" }, // TODO: add resume.pdf to public/resume/
    github: { label: "GitHub", href: "https://github.com/BySvin" }, // TODO: your GitHub URL
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvinraaj" }, // TODO: your LinkedIn URL
  },
};

export const about = {
  eyebrow: "About",
  paragraphs: [
    "I'm a final-year Diploma in Information Technology student focused on mobile app development. I like building real, working products rather than tutorial clones — right now that means MyPulse360, a smart digital patient journey system with five distinct user roles, built with Flutter and Firebase.",
    "I work mainly with Flutter/Dart and React Native/Expo on the frontend, and Firebase/Supabase on the backend, using Riverpod and a feature-first clean architecture to keep things maintainable as apps grow.",
    "I'm currently looking for my first software development internship, ideally in mobile app development, where I can contribute to a real product team.",
  ],
};

export type ProjectStatus = "complete" | "comingSoon";

export interface Project {
  id: string;
  status: ProjectStatus;
  title: string;
  subtitle?: string;
  problem?: string;
  role?: string;
  techStack?: string[];
  whyThisStack?: string;
  keyFeatures?: string[];
  technicalChallenges?: string;
  whatIdImprove?: string;
  links?: { demoVideo?: string; github?: string };
}

export const projects: Project[] = [
  {
    id: "mypulse360",
    status: "complete",
    title: "MyPulse360",
    subtitle: "Smart Digital Patient Journey Management System",
    problem:
      "Patients navigating clinics and hospitals often face disjointed processes — manual queue tracking, paper-based records, and poor communication between departments. MyPulse360 digitizes the entire patient journey across five distinct roles: Patient, Doctor, Receptionist/Triage Nurse, Pharmacist, and Administrator.",
    role: "Solo developer (Final Year Project) — full-stack mobile development from architecture through deployment.",
    techStack: [
      "Flutter + Dart",
      "Firebase (Auth, Cloud Firestore, Storage, Cloud Messaging)",
      "Riverpod for state management",
      "Feature-First Clean Architecture with Repository pattern",
      "VS Code",
    ],
    whyThisStack:
      "TODO: e.g. \"Chose Riverpod over Provider for better testability and compile-time safety across a growing multi-role codebase. Feature-first architecture kept each role's logic isolated, which mattered once the app grew past two roles.\"",
    keyFeatures: [
      "Role-based authentication and routing across 5 user types",
      "Real-time appointment booking and status sync (Patient ↔ Doctor ↔ Receptionist)",
      "Push notifications for appointment updates via FCM",
      "TODO: add pharmacist/admin features if included in final scope",
    ],
    technicalChallenges:
      "TODO: e.g. \"Designing a Firestore data model that supported real-time updates across 3+ roles without excessive read costs.\"",
    whatIdImprove:
      "TODO: e.g. \"Add automated integration tests for the booking flow.\"",
    links: {
      demoVideo: undefined,
      github: "https://github.com/BySvin/MyPulse360",
    },
  },
  {
    id: "project-2",
    status: "comingSoon",
    title: "More projects coming soon",
  },
];

export interface Skill {
  label: string;
  level: number; // 0-100, self-assessed proficiency — adjust to what you'd defend in an interview
}

// TODO: these levels are starting estimates based on how central each tool is
// to your work (e.g. "coursework" skills scored lower) — tune them to your
// own honest self-assessment.
export const skills: Record<string, Skill[]> = {
  Languages: [
    { label: "Dart", level: 85 },
    { label: "JavaScript/TypeScript", level: 70 },
    { label: "Python (coursework)", level: 40 },
  ],
  Mobile: [
    { label: "Flutter", level: 85 },
    { label: "React Native / Expo", level: 65 },
  ],
  "Backend & Data": [
    { label: "Firebase (Auth, Firestore, Storage, FCM)", level: 80 },
    { label: "Supabase", level: 55 },
  ],
  "Architecture & State": [
    { label: "Riverpod", level: 75 },
    { label: "Feature-First Clean Architecture", level: 75 },
    { label: "Repository Pattern", level: 75 },
  ],
  Tools: [
    { label: "Git/GitHub", level: 80 },
    { label: "VS Code", level: 90 },
  ],
};

export const contact = {
  heading: "Let's connect.",
  email: "bysvinedits@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarvinraaj", // TODO: your LinkedIn URL
  github: "https://github.com/BySvin", // TODO: your GitHub URL
  resumeHref: "/resume/resume.pdf", // TODO: add resume.pdf to public/resume/
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

// Badges floating around the signature hero illustration — your real stack,
// not decorative icons.
export const stackBadges = [
  { label: "Flutter", color: "#54C5F8", file: "main.dart" },
  { label: "Firebase", color: "#F0A93C", file: "firebase.json" },
  { label: "React Native", color: "#61DAFB", file: "App.jsx" },
  { label: "Supabase", color: "#3ECF8E", file: "client.ts" },
  { label: "Git", color: "#F1502F", file: ".gitignore" },
  { label: "HTML", color: "#E44D26", file: "index.html" },
  { label: "CSS", color: "#2965F1", file: "style.css" },
  { label: "JavaScript", color: "#F0DB4F", file: "script.js" },
  { label: "Java", color: "#ED8B00", file: "Main.java" },
];
