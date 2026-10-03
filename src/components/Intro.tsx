import { introFeatures } from "@/data/site";
import { Icon } from "./Icon";
import { Container, Eyebrow } from "./ui";

export function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="scroll-mt-16 bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <Eyebrow>Who We Serve</Eyebrow>
            <h2 id="intro-title" className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.9rem]">
              Equipment Solutions for Businesses That Keep Moving
            </h2>
          </div>
          <p data-reveal className="text-lg leading-relaxed text-pretty text-charcoal/70 lg:col-span-6 lg:col-start-7 lg:self-end">
            From construction and infrastructure to industrial operations and logistics, Foirton Optimum Services Limited helps
            businesses access the heavy machinery they need to operate, expand, and get the job done.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {introFeatures.map((f, i) => (
            <li
              key={f.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group relative bg-white p-7 transition-colors duration-300 hover:bg-ink sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-charcoal/15 text-gold-dark transition-colors duration-300 group-hover:border-gold/40 group-hover:text-gold">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-white">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-charcoal/65 transition-colors duration-300 group-hover:text-white/65">{f.text}</p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
