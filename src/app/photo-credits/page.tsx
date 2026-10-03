import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container, Eyebrow } from "@/components/ui";
import credits from "@/data/photo-credits.json";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Attribution for the machinery photography used on the Foirton Optimum Services Limited website.",
  alternates: { canonical: "/photo-credits" },
};

export default function PhotoCreditsPage() {
  return (
    <>
      <Navbar solid />
      <main id="main" className="bg-paper pt-32 pb-24 sm:pt-40">
        <Container className="max-w-4xl">
          <Eyebrow>Attribution</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Photo Credits</h1>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            The machinery photographs on this website are illustrative and sourced from Wikimedia Commons under the licences
            listed below. They do not depict equipment owned or stocked by Foirton Optimum Services Limited, and the appearance of
            any manufacturer&apos;s branding does not imply an affiliation.
          </p>

          <ul className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {credits.map((c) => (
              <li key={c.slug} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-gold-dark">
                    {c.title.replace(/\.(jpe?g)$/i, "")}
                  </a>
                  <p className="mt-1 text-sm text-charcoal/60">Photo: {c.author}</p>
                </div>
                <a
                  href={c.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer license"
                  className="self-center text-sm font-semibold text-charcoal/70 hover:text-gold-dark"
                >
                  {c.license}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-charcoal/55">Images were resized and cropped for web use.</p>

          <Link href="/" className="mt-12 inline-flex font-bold text-gold-dark hover:underline">
            ← Back to home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
