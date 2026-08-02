interface FolderIconProps {
  open: boolean;
  className?: string;
}

export default function FolderIcon({
  open,
  className = "h-28 w-32 sm:h-32 sm:w-36",
}: FolderIconProps) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden>
      <path
        d="M8 30 a8 8 0 0 1 8-8 h40 l12 14 h76 a8 8 0 0 1 8 8 v64 a8 8 0 0 1-8 8 H16 a8 8 0 0 1-8-8 Z"
        fill="#8FC7EF"
        stroke="#1b1a17"
        strokeWidth="2"
      />
      <path
        d="M8 46 a8 8 0 0 1 8-8 h128 a8 8 0 0 1 8 8 v50 a8 8 0 0 1-8 8 H16 a8 8 0 0 1-8-8 Z"
        fill="#5FA8E0"
        stroke="#1b1a17"
        strokeWidth="2"
        style={{
          transformOrigin: "8px 104px",
          transform: open ? "rotate(-16deg) translate(-3px, 5px)" : "rotate(0deg)",
          transition: "transform 500ms ease",
        }}
      />
    </svg>
  );
}
