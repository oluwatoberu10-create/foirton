import Image from "next/image";
import Link from "next/link";
import { images, requestHref, services, type Service } from "@/data/site";
import { ArrowRight, Icon } from "./Icon";
import { Button, Container, SectionHeading } from "./ui";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <li
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
      className="group relative flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06] sm:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold">
          <Icon name={service.icon} />
        </span>
        <span className="text-4xl font-extrabold text-white/10 transition-colors duration-500 group-hover:text-gold/30">
          {service.number}
        </span>
      </div>
      <h3 className="mt-7 text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-white/65">{service.text}</p>
      <Link
        href={requestHref({ service: service.service })}
        className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-gold-light transition-colors after:absolute after:inset-0 hover:text-white"
      >
        {service.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </li>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative scroll-mt-16 overflow-hidden bg-navy py-20 text-white sm:py-28 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="What We Do"
            text="Flexible ways for businesses to access heavy machinery — whether you want to buy, lease, borrow, or need help finding a specific machine."
            light
          />
          <div data-reveal className="shrink-0">
            <Button href={requestHref()} arrow>
              Request Equipment
            </Button>
          </div>
        </div>

        <div data-reveal className="relative mt-14 aspect-[16/9] overflow-hidden rounded-sm sm:aspect-[21/8]">
          <Image
            src={images.services}
            alt="Excavator working on a rocky mountain road project"
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-end p-6 sm:justify-center sm:p-12">
            <p className="text-xl leading-snug font-bold text-balance sm:text-3xl">Purchase. Lease. Lend. Source.</p>
            <p className="mt-2 hidden text-white/70 sm:block">One team for the different ways your business can access equipment.</p>
          </div>
        </div>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
