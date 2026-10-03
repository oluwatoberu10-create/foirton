import { requestHref, steps } from "@/data/site";
import { Button, Container, SectionHeading } from "./ui";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-16 bg-paper py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow="The Process"
          title="How It Works"
          text="A straightforward path from your first message to the right equipment solution."
          align="center"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line (desktop) */}
          <span className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0 lg:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <li
              key={s.number}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className="group relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              {/* Connecting line (mobile/tablet) */}
              {i < steps.length - 1 && (
                <span className="absolute top-14 bottom-[-2.5rem] left-7 w-px bg-gold/40 md:hidden" aria-hidden="true" />
              )}
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-paper text-base font-extrabold text-ink transition-colors duration-300 group-hover:bg-gold">
                {s.number}
              </span>
              <div className="lg:mt-7">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/65">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-16 flex justify-center">
          <Button href={requestHref()} variant="dark" arrow>
            Start With Step 01 — Request Equipment
          </Button>
        </div>
      </Container>
    </section>
  );
}
