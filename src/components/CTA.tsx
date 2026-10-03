import Image from "next/image";
import { images, requestHref } from "@/data/site";
import { Button, Container } from "./ui";

export function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32 lg:py-40">
      <Image
        src={images.cta}
        alt="Large haul truck driving through an open-pit mine"
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" aria-hidden="true" />

      <Container>
        <div data-reveal className="max-w-2xl">
          <span className="block h-1 w-16 bg-gold" aria-hidden="true" />
          <h2 id="cta-title" className="mt-8 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Looking for Heavy Machinery?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Tell Foirton Optimum Services Limited what your business needs and let&apos;s discuss the right equipment solution.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={requestHref()} arrow>
              Request Equipment
            </Button>
            <Button href="/#contact" variant="outline-light">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
