import Image from "next/image";
import { company, images, requestHref } from "@/data/site";
import { Button, Container } from "./ui";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <Image
        src={images.hero}
        alt="Bulldozer pushing material across a heavy industrial site"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 animate-[hero-zoom_18s_ease-out_forwards] object-cover object-[60%_center]"
      />
      {/* Overlays keep the headline readable on any crop. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/60" aria-hidden="true" />

      <Container className="pt-32 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-3xl lg:max-w-5xl">
          <p className="hero-in flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-gold-light uppercase [animation-delay:100ms]">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {company.address.region}, {company.address.country}
          </p>
          <h1
            id="hero-title"
            className="hero-in mt-6 text-[2.6rem] leading-[1.02] font-extrabold tracking-tight text-balance [animation-delay:200ms] sm:text-6xl lg:text-7xl xl:text-[5rem]"
          >
            Heavy Machinery Solutions <span className="text-gold lg:block">Built for Business</span>
          </h1>
          <p className="hero-in mt-7 max-w-2xl text-lg leading-relaxed text-white/75 [animation-delay:350ms] sm:text-xl">
            Foirton Optimum Services Limited provides businesses with reliable solutions for purchasing, leasing, lending, and
            sourcing heavy machinery and equipment.
          </p>
          <div className="hero-in mt-10 flex flex-col gap-3 [animation-delay:500ms] sm:flex-row sm:gap-4">
            <Button href={requestHref()} arrow>
              Request Equipment
            </Button>
            <Button href="/#services" variant="outline-light">
              Explore Our Services
            </Button>
          </div>
        </div>

        <ul className="hero-in mt-16 hidden max-w-3xl grid-cols-4 border-t border-white/15 pt-6 text-sm font-semibold text-white/70 [animation-delay:650ms] md:grid">
          {["Sales", "Leasing", "Lending", "Sourcing"].map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>

      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold tracking-[0.3em] text-white/60 uppercase transition-colors hover:text-white sm:flex"
        aria-label="Scroll to learn more"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/40 pt-1.5">
          <span className="h-2 w-0.5 animate-scroll-cue rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
