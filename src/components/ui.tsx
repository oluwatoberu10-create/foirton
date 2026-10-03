import Link from "next/link";
import { ArrowRight } from "./Icon";

type ButtonVariant = "primary" | "outline-light" | "outline-dark" | "dark";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gold text-ink hover:bg-gold-light shadow-[0_10px_30px_-12px_rgba(201,161,74,0.7)]",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white/10",
  "outline-dark": "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
  dark: "bg-charcoal text-white hover:bg-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase ${light ? "text-gold-light" : "text-gold-dark"}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div data-reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[3.25rem] ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed text-pretty ${light ? "text-white/70" : "text-charcoal/70"}`}>{text}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
