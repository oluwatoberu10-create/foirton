import { company, fullAddress, isPlaceholder } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Container, Eyebrow } from "./ui";

function DetailRow({ label, children, icon }: { label: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/5 text-gold">{icon}</span>
      <div>
        <dt className="text-[0.7rem] font-bold tracking-[0.2em] text-white/45 uppercase">{label}</dt>
        <dd className="mt-1 leading-relaxed font-semibold text-white">{children}</dd>
      </div>
    </div>
  );
}

const svg = (d: string) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

/** Shows a real link once a value is provided; otherwise a clearly-marked placeholder. */
function ContactValue({ value, href }: { value: string; href: string }) {
  if (isPlaceholder(value)) return <span className="font-medium text-gold-light/80 italic">{value}</span>;
  return (
    <a href={href} className="hover:text-gold-light">
      {value}
    </a>
  );
}

export function Contact() {
  const mapQuery = encodeURIComponent(fullAddress);

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-mist py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div data-reveal>
              <Eyebrow>Contact</Eyebrow>
              <h2 id="contact-title" className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-balance text-ink sm:text-4xl lg:text-[3.1rem]">
                Let&apos;s Talk About Your Equipment Needs
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-charcoal/70">
                Whether you&apos;re looking to purchase, lease, lend, or source heavy machinery, contact our team to discuss what
                your business requires.
              </p>
            </div>

            <div data-reveal className="mt-10 overflow-hidden rounded-sm bg-ink text-white">
              <div className="p-7 sm:p-8">
                <p className="text-lg font-extrabold tracking-wide">{company.name}</p>
                <dl className="mt-7 space-y-6">
                  <DetailRow label="Address" icon={svg("M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z")}>
                    {company.address.street}
                    <br />
                    {company.address.region}, {company.address.country}
                  </DetailRow>
                  <DetailRow label="Owner" icon={svg("M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0")}>
                    {company.owner}
                  </DetailRow>
                  <DetailRow
                    label="Phone"
                    icon={svg("M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z")}
                  >
                    <ContactValue value={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
                  </DetailRow>
                  <DetailRow label="Email" icon={svg("M3 6h18v12H3zM3 7l9 6 9-6")}>
                    <ContactValue value={company.email} href={`mailto:${company.email}`} />
                  </DetailRow>
                </dl>
              </div>
              {/* Map is located by the street address. Swap the src for an exact Google Maps embed once available. */}
              <iframe
                title={`Map showing ${fullAddress}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
                className="block h-56 w-full border-0 grayscale-[0.6] invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div data-reveal className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
