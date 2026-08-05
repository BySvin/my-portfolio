// Single source of truth for site copy, mirroring portfolio-content.md.
// Update this file to change what renders across the site.

export const hero = {
  name: "Sarvin Raaj",
  title: "Building Products. Solving Problems. Learning Every Day.",
  tagline: "Building real products with Flutter, React Native & Firebase.",
  subtext:
    "Diploma in Information Technology (Software Development), Politeknik Balik Pulau.",
  ctas: {
    viewProjects: { label: "View Projects", href: "#projects" },
    resume: { label: "Download Resume", href: "/resume/resume.pdf" },
    github: { label: "GitHub", href: "https://github.com/BySvin" },
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvinraaj" },
  },
};

export const about = {
  eyebrow: "About",
  paragraphs: [
    "I'm a final-year Diploma in Information Technology student focused on mobile app development. I like building real, working products rather than tutorial clones — right now that means MyPulse360, a smart digital patient journey system covering Patient, Doctor, and Pharmacist roles, built with Flutter.",
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
  links?: { liveDemo?: string; github?: string };
}

export const projects: Project[] = [
  {
    id: "mypulse360",
    status: "complete",
    title: "MyPulse360",
    subtitle: "Smart Digital Patient Journey Management System",
    problem:
      "Patients navigating clinics and hospitals often face disjointed processes — manual queue tracking, paper-based records, and poor communication between departments. MyPulse360 brings patients, doctors, and pharmacists onto a single role-aware platform — patients use it as a mobile app, doctors and pharmacists as a web app — from one Flutter codebase.",
    role:
      'TODO: describe your specific contribution — e.g. "Built as part of a Final Year Project team; owned the [Patient / Doctor / Pharmacist] flow and the e-prescription scanning feature end-to-end."',
    techStack: [
      "Flutter + Dart",
      "Riverpod for state management",
      "go_router for role-based navigation",
      "Hive for local data persistence",
      "mobile_scanner + Google ML Kit for barcode/QR and on-device OCR",
      "Clean Architecture (domain/data/presentation) per feature",
    ],
    whyThisStack:
      'TODO: e.g. "Flutter let one codebase serve patients as a mobile app and doctors/pharmacists as a web app, instead of maintaining separate builds. Riverpod + go_router centralized role-based redirects in one place rather than checking auth state in every screen."',
    keyFeatures: [
      "Role-based routing across Patient, Doctor, and Pharmacist — mobile for patients, web for doctors/pharmacists, one Flutter codebase",
      "Appointment booking with live queue tracking and automatic doctor-leave awareness",
      "E-prescriptions: doctor-issued, pharmacist-verified, and patient-scanned via barcode/QR or photo + on-device OCR",
      "Pharmacy inventory management — batch tracking, suppliers, wastage logging, multi-location stock, and FEFO-based dispensing",
    ],
    technicalChallenges:
      "Patients needed to digitize paper prescriptions two ways — scanning a barcode/QR code, or just taking a photo — so I integrated mobile_scanner for the barcode/QR path and Google ML Kit's on-device text recognition for the photo/OCR path, keeping both fully on-device instead of relying on a server-side scanning service.",
    whatIdImprove:
      "Add automated integration tests for the booking flow.",
    links: {
      liveDemo: undefined,
      github: "https://github.com/BySvin/MyPulse360",
    },
  },
  {
    id: "foodcalai",
    status: "complete",
    title: "FoodCalAI",
    subtitle: "A clean, minimalist calorie and macro tracker",
    problem:
      "Tracking calories, macros, and water day-to-day usually means a cluttered app or a spreadsheet. FoodCalAI keeps it fast and minimal — onboarding computes personalized daily calorie/macro/water targets (Mifflin-St Jeor), then logging stays quick via catalog search, favorites, and recent foods, all from one Flutter codebase across Android, iOS, and Web.",
    role: "Solo developer — full project lifecycle from scoping to deployment.",
    techStack: [
      "Flutter + Dart",
      "Firebase (Auth, Firestore, Analytics, Crashlytics)",
      "Riverpod for state management",
      "Go Router for navigation",
      "Material 3 design system",
      "fl_chart for weight trend charts",
    ],
    whyThisStack:
      "Reused the Riverpod pattern from MyPulse360 for consistency across projects, but moved to Firebase here for cloud-synced data across devices; Go Router centralizes the auth/onboarding redirect guard instead of checking state in every screen, and Material 3 gave light/dark/system theming for free.",
    keyFeatures: [
      "Email/password + Google Sign-In auth, with password reset and email verification",
      "6-step onboarding flow that computes daily calorie/macro/water targets (Mifflin-St Jeor)",
      "Live dashboard with a calorie progress ring, macro bars, and water card",
      "Food logging via catalog search, manual entries, favorites, and recent foods",
      "Weight tracking with a trend chart, plus 30-day daily history",
    ],
    technicalChallenges:
      "Food search returned nothing until the shared foods Firestore collection was populated, so I built an idempotent seed script that loads ~184 curated foods with stable per-food IDs — safe to re-run during development without duplicating data.",
    whatIdImprove:
      'This is a V1/MVP — a natural next step would be macro/nutrient breakdown beyond calories, or barcode scanning for faster logging.',
    links: {
      liveDemo: "https://foodcal-ai-app.web.app",
      github: "https://github.com/BySvin/foodcal-ai",
    },
  },
];

export interface Skill {
  label: string;
  level: number; // 0-100, self-assessed proficiency — adjust to what you'd defend in an interview
}

export const skills: Record<string, Skill[]> = {
  Languages: [
    { label: "Dart", level: 70 },
    { label: "JavaScript/TypeScript", level: 70 },
    { label: "Python (coursework)", level: 40 },
  ],
  Mobile: [
    { label: "Flutter", level: 80 },
    { label: "React Native / Expo", level: 65 },
  ],
  "Backend & Data": [
    { label: "Firebase (Auth, Firestore, Storage, FCM)", level: 60 },
    { label: "Supabase", level: 65 },
  ],
  "Architecture & State": [
    { label: "Riverpod", level: 40 },
    { label: "Feature-First Clean Architecture", level: 50 },
    { label: "Repository Pattern", level: 50 },
  ],
  Tools: [
    { label: "Git/GitHub", level: 70 },
    { label: "VS Code", level: 85 },
  ],
};

export const contact = {
  heading: "Let's connect.",
  email: "bysvinedits@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarvinraaj",
  github: "https://github.com/BySvin",
  resumeHref: "/resume/resume.pdf",
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
