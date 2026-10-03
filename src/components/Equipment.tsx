import Image from "next/image";
import Link from "next/link";
import { equipment, requestHref, type Equipment as EquipmentItem } from "@/data/site";
import { ArrowRight } from "./Icon";
import { Container, SectionHeading } from "./ui";

export function EquipmentCard({ item, index, featured = false }: { item: EquipmentItem; index: number; featured?: boolean }) {
  return (
    <li
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
      className={`group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_40px_-28px_rgba(11,13,16,0.45)] transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,13,16,0.55)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-charcoal ${featured ? "aspect-[4/3] md:aspect-[16/8.4] lg:aspect-[8/3]" : "aspect-[4/3]"}`}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          placeholder="blur"
          sizes={featured ? "(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute top-4 left-4 rounded-sm bg-ink/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-gold-light uppercase backdrop-blur">
          Category {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold text-ink">{item.name}</h3>
        <p className="mt-2.5 flex-1 leading-relaxed text-charcoal/65">{item.text}</p>
        <Link
          href={requestHref({ equipment: item.name })}
          className="mt-6 inline-flex min-h-11 items-center justify-between gap-3 border-t border-charcoal/10 pt-4 text-sm font-bold text-ink transition-colors after:absolute after:inset-0 group-hover:text-gold-dark"
        >
          Request {item.singular} Information
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </li>
  );
}

export function Equipment() {
  return (
    <section id="equipment" aria-labelledby="equipment-title" className="scroll-mt-16 bg-paper py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="equipment-title"
            eyebrow="Equipment Categories"
            title="Heavy Equipment for Serious Operations"
            text="Explore the categories of machinery and equipment businesses may require across construction, infrastructure, logistics, and industrial operations."
          />
          <p data-reveal className="max-w-sm border-l-2 border-gold pl-4 text-sm leading-relaxed text-charcoal/60">
            These are categories we can help businesses source, purchase, lease, or access. Availability depends on your specific
            requirements — tell us what you need.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, i) => (
            <EquipmentCard key={item.name} item={item} index={i} featured={i === 0 || i === equipment.length - 1} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
