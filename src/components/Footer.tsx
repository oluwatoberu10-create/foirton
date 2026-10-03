import Link from "next/link";
import { company, fullAddress, navLinks, requestHref, services } from "@/data/site";
import { LogoMark } from "./Logo";
import { Button, Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark />
              <p className="text-sm leading-tight font-extrabold tracking-[0.16em]">
                FOIRTON OPTIMUM
                <br />
                SERVICES LIMITED
              </p>
            </div>
            <p className="mt-5 font-semibold text-gold-light">{company.tagline}</p>
            <p className="mt-3 max-w-sm leading-relaxed text-white/55">
              Helping businesses purchase, lease, lend, and source heavy machinery and equipment.
            </p>
            <Button href={requestHref()} className="mt-8" arrow>
              Request Equipment
            </Button>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 transition-colors hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Services</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 4).map((s) => (
                <li key={s.number}>
                  <Link href={requestHref({ service: s.service })} className="text-white/75 transition-colors hover:text-gold-light">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Location</p>
            <p className="mt-5 leading-relaxed text-white/75">{fullAddress}</p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Foirton Optimum Services Limited. All rights reserved.</p>
          <Link href="/photo-credits" className="transition-colors hover:text-white/80">
            Photo credits
          </Link>
        </Container>
      </div>
    </footer>
  );
}
