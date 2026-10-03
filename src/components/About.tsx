import Image from "next/image";
import { company, fullAddress, images, requestHref } from "@/data/site";
import { Button, Container, Eyebrow } from "./ui";

export function About() {
  const facts = [
    { label: "Company", value: company.name },
    { label: "Owner", value: company.owner },
    { label: "Location", value: fullAddress },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={images.about}
                alt="Two excavators working side by side on a gravel construction site"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[35%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true" />
            </div>
            {/* Accent frame */}
            <div className="absolute -top-4 -left-4 -z-0 hidden h-28 w-28 border-t-2 border-l-2 border-gold sm:block" aria-hidden="true" />

            <dl className="relative -mt-24 ml-auto w-[92%] rounded-sm bg-ink p-6 text-white shadow-2xl sm:-mt-28 sm:w-[80%] sm:p-8 lg:-mr-10">
              {facts.map((f, i) => (
                <div key={f.label} className={i > 0 ? "mt-5 border-t border-white/10 pt-5" : ""}>
                  <dt className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase">{f.label}</dt>
                  <dd className="mt-1.5 text-base font-semibold text-white sm:text-lg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div data-reveal>
              <Eyebrow>About Us</Eyebrow>
              <h2 id="about-title" className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink sm:text-4xl lg:text-[3.25rem]">
                Built Around Better Equipment Solutions
              </h2>
            </div>
            <div data-reveal className="mt-7 space-y-5 text-lg leading-relaxed text-pretty text-charcoal/70">
              <p className="text-xl font-medium text-charcoal">
                Foirton Optimum Services Limited is a private company focused on helping businesses access heavy machinery and
                equipment solutions.
              </p>
              <p>
                We work with businesses looking to purchase, lease, lend, or source heavy-duty machinery for their operations. Our
                approach is simple: understand what the business needs, identify the right equipment solution, and make the
                process straightforward.
              </p>
            </div>

            <ol data-reveal className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Understand the need", "Identify the right solution", "Keep it straightforward"].map((t, i) => (
                <li key={t} className="border-l-2 border-gold pl-4">
                  <span className="text-xs font-bold tracking-widest text-charcoal/40">0{i + 1}</span>
                  <p className="mt-1 font-semibold text-ink">{t}</p>
                </li>
              ))}
            </ol>

            <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={requestHref()} arrow>
                Request Equipment
              </Button>
              <Button href="/#contact" variant="outline-dark">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
