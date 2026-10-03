import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Equipment } from "@/components/Equipment";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { RevealObserver } from "@/components/Reveal";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { company, equipment, services } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

// Structured data uses only the details provided by the business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: company.name,
  description:
    "Heavy machinery and equipment solutions for businesses, including machinery sales, leasing, lending, and equipment sourcing in Nigeria.",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.jpg`,
  founder: { "@type": "Person", name: company.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressRegion: company.address.region,
    addressCountry: company.address.countryCode,
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: equipment.map((e) => e.name),
  makesOffer: services.slice(0, 4).map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.text },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <About />
        <Services />
        <Equipment />
        <Industries />
        <WhyUs />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
