import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="3" fill="#c9a14a" />
      <path d="M12 10h17v5H17.5v4H27v5h-9.5v6H12V10Z" fill="#0b0d10" />
    </svg>
  );
}

export function Logo({ light = true, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link href="/#home" className="flex items-center gap-3" aria-label="Foirton Optimum Services Limited — home">
      <LogoMark className={`shrink-0 transition-all duration-300 ${compact ? "h-9 w-9" : "h-10 w-10"}`} />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-[0.18em] ${light ? "text-white" : "text-ink"}`}>FOIRTON</span>
        <span className={`mt-1 text-[0.58rem] font-semibold tracking-[0.2em] ${light ? "text-white/60" : "text-charcoal/60"}`}>
          OPTIMUM SERVICES LIMITED
        </span>
      </span>
    </Link>
  );
}
