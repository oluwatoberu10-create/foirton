import Image from "next/image";
import { images, reasons } from "@/data/site";
import { Icon } from "./Icon";
import { Container, SectionHeading } from "./ui";

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="relative isolate scroll-mt-16 overflow-hidden bg-ink py-20 text-white sm:py-28 lg:py-32">
      <Image
        src={images.why}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover opacity-35 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden="true" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="why-title"
              eyebrow="Why Choose Us"
              title="A Practical Approach to Heavy Equipment"
              text="No unnecessary complexity — just a clear conversation about the machinery your business needs and the best way to access it."
              light
            />
          </div>

          <ul className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group bg-ink/90 p-7 transition-colors duration-500 hover:bg-graphite sm:p-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110">
                  <Icon name={r.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
