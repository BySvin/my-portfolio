import { stackBadges } from "@/data/content";

const badgePositions = [
  "top-0 left-[-6px] -rotate-3",
  "top-0 right-[-2px] rotate-2",
  "top-20 left-[-26px] rotate-1",
  "top-20 right-[-22px] -rotate-2",
  "top-1/2 left-[-34px] -translate-y-1/2 rotate-2",
  "top-1/2 right-[-30px] -translate-y-1/2 -rotate-1",
  "bottom-20 left-[-24px] -rotate-1",
  "bottom-20 right-[-20px] rotate-2",
  "bottom-0 left-1/2 -translate-x-1/2 rotate-1",
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[26rem] w-full max-w-sm sm:h-[30rem] sm:max-w-md">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/5 blur-2xl"
      />

      <svg
        viewBox="0 0 220 320"
        className="relative z-10 mx-auto h-full w-auto max-h-full"
        role="img"
        aria-label="Illustration of a mobile phone screen, representing mobile app development"
      >
        <defs>
          <pattern
            id="halftone"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.3" className="fill-ink" opacity="0.9" />
          </pattern>
          <clipPath id="phoneClip">
            <rect x="10" y="10" width="200" height="300" rx="34" />
          </clipPath>
        </defs>

        <rect
          x="10"
          y="10"
          width="200"
          height="300"
          rx="34"
          className="fill-none stroke-ink"
          strokeWidth="2"
        />

        <g clipPath="url(#phoneClip)">
          <rect x="10" y="10" width="200" height="300" fill="url(#halftone)" />
          <rect
            x="26"
            y="46"
            width="168"
            height="228"
            rx="8"
            className="fill-bg"
          />
          <rect x="40" y="66" width="90" height="8" rx="4" className="fill-ink" />
          <rect
            x="40"
            y="86"
            width="140"
            height="6"
            rx="3"
            className="fill-ink"
            opacity="0.35"
          />
          <rect
            x="40"
            y="100"
            width="120"
            height="6"
            rx="3"
            className="fill-ink"
            opacity="0.35"
          />
          <rect
            x="40"
            y="128"
            width="140"
            height="62"
            rx="8"
            className="fill-ink stroke-ink"
            opacity="0.08"
            strokeOpacity="0.25"
          />
          <circle cx="60" cy="159" r="10" className="fill-ink" opacity="0.55" />
          <rect
            x="80"
            y="151"
            width="80"
            height="6"
            rx="3"
            className="fill-ink"
            opacity="0.45"
          />
          <rect
            x="80"
            y="163"
            width="60"
            height="6"
            rx="3"
            className="fill-ink"
            opacity="0.25"
          />
          <rect x="40" y="210" width="140" height="34" rx="17" className="fill-ink" />
        </g>

        <rect x="90" y="20" width="40" height="6" rx="3" className="fill-bg" />
      </svg>

      {stackBadges.map((badge, i) => (
        <div
          key={badge.label}
          className={`animate-float absolute z-20 flex items-center gap-1.5 rounded-full border border-line bg-bg-card px-2.5 py-1 shadow-sm ${badgePositions[i % badgePositions.length]}`}
          style={{
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 3) * 0.6}s`,
          }}
        >
          <span
            aria-hidden
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: badge.color }}
          />
          <span className="whitespace-nowrap font-mono text-[0.7rem] text-ink-soft">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
