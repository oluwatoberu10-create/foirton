import { industries } from "@/data/site";
import { Icon } from "./Icon";
import { Container, SectionHeading } from "./ui";

export function IndustryCard({ title, text, icon, index }: (typeof industries)[number] & { index: number }) {
  return (
    <li
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
      className="group flex gap-5 rounded-sm border border-charcoal/10 bg-white p-6 transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-30px_rgba(11,13,16,0.4)] sm:p-7"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
        <Icon name={icon} />
      </span>
      <div>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 leading-relaxed text-charcoal/65">{text}</p>
      </div>
    </li>
  );
}

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="industries-title"
          eyebrow="Industries"
          title="Supporting Businesses Across Heavy-Equipment Industries"
          align="center"
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.title} {...ind} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
