import type { StaticImageData } from "next/image";

import heroImg from "@/assets/images/hero.jpg";
import aboutImg from "@/assets/images/about.jpg";
import servicesImg from "@/assets/images/services.jpg";
import ctaImg from "@/assets/images/cta.jpg";
import whyImg from "@/assets/images/why.jpg";
import excavatorsImg from "@/assets/images/excavators.jpg";
import bulldozersImg from "@/assets/images/bulldozers.jpg";
import wheelLoadersImg from "@/assets/images/wheel-loaders.jpg";
import cranesImg from "@/assets/images/cranes.jpg";
import dumpTrucksImg from "@/assets/images/dump-trucks.jpg";
import forkliftsImg from "@/assets/images/forklifts.jpg";
import backhoesImg from "@/assets/images/backhoes.jpg";
import roadImg from "@/assets/images/road-construction.jpg";
import heavyTrucksImg from "@/assets/images/heavy-trucks.jpg";
import industrialImg from "@/assets/images/industrial.jpg";

/**
 * Company details. Phone and email were not provided — replace the
 * bracketed placeholders below once verified contact details are available.
 */
export const company = {
  name: "Foirton Optimum Services Limited",
  shortName: "Foirton",
  tagline: "Heavy Machinery & Equipment Solutions",
  owner: "Felix",
  type: "Private Company",
  address: {
    street: "25 Palm Grove Avenue",
    region: "Rivers State",
    country: "Nigeria",
    countryCode: "NG",
  },
  phone: "[Add Company Phone Number]",
  email: "[Add Company Email]",
} as const;

export const fullAddress = `${company.address.street}, ${company.address.region}, ${company.address.country}`;

/** True once real contact details replace the placeholders above. */
export const isPlaceholder = (value: string) => value.startsWith("[");

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Equipment", href: "/#equipment" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
] as const;

export const serviceOptions = [
  "Purchase Machinery",
  "Lease Machinery",
  "Machinery Lending",
  "Equipment Sourcing",
  "General Inquiry",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];

/** Builds a link to the contact form, optionally pre-filling fields. */
export function requestHref(opts: { service?: ServiceOption; equipment?: string } = {}) {
  const params = new URLSearchParams();
  if (opts.service) params.set("service", opts.service);
  if (opts.equipment) params.set("equipment", opts.equipment);
  const query = params.toString();
  return `${query ? `/?${query}` : "/"}#contact`;
}

export type IconName =
  | "sales"
  | "lease"
  | "lending"
  | "sourcing"
  | "heavy"
  | "support"
  | "construction"
  | "infrastructure"
  | "logistics"
  | "industrial"
  | "engineering"
  | "business"
  | "target"
  | "flex"
  | "gear"
  | "chat";

export const introFeatures: { title: string; text: string; icon: IconName }[] = [
  { title: "Machinery Sales", text: "Access heavy-duty equipment for your business operations.", icon: "sales" },
  { title: "Equipment Leasing", text: "Flexible equipment access for businesses that prefer leasing.", icon: "lease" },
  { title: "Machinery Lending", text: "Explore equipment solutions designed around business needs.", icon: "lending" },
  { title: "Equipment Sourcing", text: "Get support finding the machinery and equipment your operation requires.", icon: "sourcing" },
];

export type Service = {
  number: string;
  title: string;
  text: string;
  cta: string;
  icon: IconName;
  service: ServiceOption;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Heavy Machinery Sales",
    text: "Purchase dependable heavy machinery and equipment for your business operations.",
    cta: "Discuss Your Equipment Needs",
    icon: "sales",
    service: "Purchase Machinery",
  },
  {
    number: "02",
    title: "Machinery Leasing",
    text: "Access the equipment your business needs through leasing solutions designed around your operational requirements.",
    cta: "Ask About Leasing",
    icon: "lease",
    service: "Lease Machinery",
  },
  {
    number: "03",
    title: "Machinery Lending",
    text: "Explore heavy equipment lending solutions for businesses seeking access to machinery for their operations.",
    cta: "Discuss Lending Options",
    icon: "lending",
    service: "Machinery Lending",
  },
  {
    number: "04",
    title: "Equipment Sourcing",
    text: "Need a specific machine? Tell us what you're looking for and our team can help identify the right equipment solution.",
    cta: "Find Equipment",
    icon: "sourcing",
    service: "Equipment Sourcing",
  },
  {
    number: "05",
    title: "Heavy-Duty Equipment Solutions",
    text: "Solutions for businesses that rely on heavy machinery to perform, build, transport, and operate efficiently.",
    cta: "Talk to Our Team",
    icon: "heavy",
    service: "General Inquiry",
  },
  {
    number: "06",
    title: "Business Equipment Support",
    text: "Work with our team to determine the equipment approach that fits your business requirements.",
    cta: "Get Started",
    icon: "support",
    service: "General Inquiry",
  },
];

export type Equipment = {
  name: string;
  singular: string;
  text: string;
  image: StaticImageData;
  alt: string;
};

export const equipment: Equipment[] = [
  {
    name: "Excavators",
    singular: "Excavator",
    text: "Heavy-duty earthmoving equipment for construction and infrastructure operations.",
    image: excavatorsImg,
    alt: "Tracked excavator digging into a mound of earth",
  },
  {
    name: "Bulldozers",
    singular: "Bulldozer",
    text: "Crawler dozers for clearing, grading, and pushing material across demanding sites.",
    image: bulldozersImg,
    alt: "Crawler bulldozer with front blade on a dirt site",
  },
  {
    name: "Wheel Loaders",
    singular: "Wheel Loader",
    text: "Loading and material-handling machines for aggregates, earth, and bulk materials.",
    image: wheelLoadersImg,
    alt: "Wheel loader raising a bucket full of gravel",
  },
  {
    name: "Cranes",
    singular: "Crane",
    text: "Lifting equipment for construction, infrastructure, and heavy industrial work.",
    image: cranesImg,
    alt: "Lattice-boom crane with hooks against a blue sky",
  },
  {
    name: "Dump Trucks",
    singular: "Dump Truck",
    text: "Haulage trucks for moving earth, rock, and bulk material on and off site.",
    image: dumpTrucksImg,
    alt: "Articulated dump truck on a gravel site",
  },
  {
    name: "Forklifts",
    singular: "Forklift",
    text: "Heavy-capacity forklifts for yards, warehouses, and industrial handling.",
    image: forkliftsImg,
    alt: "Large industrial forklift parked on a paved yard",
  },
  {
    name: "Backhoes",
    singular: "Backhoe",
    text: "Versatile backhoe loaders for digging, trenching, and loading in one machine.",
    image: backhoesImg,
    alt: "Backhoe loader working on a construction site",
  },
  {
    name: "Road Construction Equipment",
    singular: "Road Construction Equipment",
    text: "Pavers, rollers, and compaction equipment for road and surfacing projects.",
    image: roadImg,
    alt: "Asphalt paver and road roller on a road surfacing job",
  },
  {
    name: "Heavy Trucks",
    singular: "Heavy Truck",
    text: "Prime movers and heavy-haulage trucks for transporting equipment and loads.",
    image: heavyTrucksImg,
    alt: "Heavy-haulage truck transporting an oversized load",
  },
  {
    name: "Industrial Equipment",
    singular: "Industrial Equipment",
    text: "Machinery for industrial, energy, and oil & gas operating environments.",
    image: industrialImg,
    alt: "Offshore drilling rigs at an industrial waterfront facility",
  },
];

export const industries: { title: string; text: string; icon: IconName }[] = [
  { title: "Construction", text: "Equipment solutions for construction projects and contractors.", icon: "construction" },
  { title: "Infrastructure", text: "Machinery support for infrastructure development and large-scale projects.", icon: "infrastructure" },
  { title: "Logistics & Transportation", text: "Heavy equipment and vehicles supporting logistics operations.", icon: "logistics" },
  { title: "Industrial Operations", text: "Equipment solutions for businesses operating in industrial environments.", icon: "industrial" },
  { title: "Engineering", text: "Machinery for engineering and technical operations.", icon: "engineering" },
  { title: "Other Business Operations", text: "Flexible equipment solutions based on specific business requirements.", icon: "business" },
];

export const reasons: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Business-Focused",
    text: "We focus on understanding what your business actually needs before recommending an equipment solution.",
    icon: "target",
  },
  {
    title: "Flexible Access",
    text: "Purchase, lease, lending, and sourcing options give businesses different ways to access equipment.",
    icon: "flex",
  },
  {
    title: "Equipment-Focused",
    text: "Our business is centered around heavy machinery and equipment solutions.",
    icon: "gear",
  },
  {
    title: "Direct Communication",
    text: "Speak directly with our team about your machinery requirements.",
    icon: "chat",
  },
];

export const steps = [
  { number: "01", title: "Tell Us What You Need", text: "Share the type of machinery or equipment your business requires." },
  {
    number: "02",
    title: "Discuss Your Requirements",
    text: "Our team learns more about your project, operational needs, and preferred equipment solution.",
  },
  { number: "03", title: "Explore Your Options", text: "We discuss available purchase, leasing, lending, or sourcing options." },
  {
    number: "04",
    title: "Move Forward",
    text: "Once you've selected the appropriate solution, our team helps you move toward the next stage.",
  },
];

export const images = {
  hero: heroImg,
  about: aboutImg,
  services: servicesImg,
  cta: ctaImg,
  why: whyImg,
};
