import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title = "Foirton Optimum Services Limited | Heavy Machinery & Equipment Solutions";
const description =
  "Foirton Optimum Services Limited provides heavy machinery and equipment solutions for businesses, including machinery sales, leasing, lending, and equipment sourcing in Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Foirton Optimum Services Limited",
  },
  description,
  keywords: [
    "heavy machinery Nigeria",
    "heavy equipment Nigeria",
    "machinery leasing Nigeria",
    "heavy equipment sales",
    "construction equipment Nigeria",
    "industrial machinery Nigeria",
    "heavy machinery leasing",
    "equipment sourcing Nigeria",
    "Rivers State",
  ],
  applicationName: "Foirton Optimum Services Limited",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Foirton Optimum Services Limited",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${manrope.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript is running. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[100] rounded-sm bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
