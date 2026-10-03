import type { IconName } from "@/data/site";

const paths: Record<IconName, React.ReactNode> = {
  // Price tag
  sales: (
    <>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  // Calendar / term
  lease: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 10h18M8 3v4M16 3v4M8 14h3M8 17h6" />
    </>
  ),
  // Handshake-style exchange arrows
  lending: (
    <>
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </>
  ),
  // Magnifier
  sourcing: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.8-4.8" />
    </>
  ),
  // Excavator
  heavy: (
    <>
      <path d="M2 19h12M3 19v-3h10v3M5 16v-4h5l2 4" />
      <path d="M12 12 16 5l5 5-2 2" />
      <path d="m19 12-1 3h3" />
      <circle cx="5" cy="19" r="0.5" />
      <circle cx="11" cy="19" r="0.5" />
    </>
  ),
  // Wrench
  support: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
    </>
  ),
  // Hard hat
  construction: (
    <>
      <path d="M3 18h18M4 18v-2a8 8 0 0 1 16 0v2" />
      <path d="M10 8V5h4v3M8 16v-3M16 16v-3" />
    </>
  ),
  // Bridge
  infrastructure: (
    <>
      <path d="M2 17h20M4 17V9M20 17V9M2 9c4 0 6 4 10 4s6-4 10-4" />
      <path d="M8 17v-4M12 17v-4M16 17v-4" />
    </>
  ),
  // Truck
  logistics: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  // Factory
  industrial: (
    <>
      <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3Z" />
      <path d="M7 17h2M12 17h2" />
    </>
  ),
  // Compass / drafting
  engineering: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="m11 7-6 14M13 7l6 14M7.5 15h9" />
    </>
  ),
  // Briefcase
  business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  flex: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="8" cy="7" r="1.8" />
      <circle cx="15" cy="12" r="1.8" />
      <circle cx="10" cy="17" r="1.8" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
