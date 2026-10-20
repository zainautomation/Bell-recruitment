import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { siteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "Bell Recruitment",
    locale: "en_GB",
    images: [{ url: "/images/hero-bg.png", width: 1536, height: 1024, alt: "Julie Bell, Founder and CEO of Bell Recruitment" }],
  },
  twitter: { card: "summary_large_image" },
  title: {
    default: "Bell Recruitment | FMCG Recruitment Specialists | Belfast",
    template: "%s | Bell Recruitment",
  },
  description:
    "Based in Belfast, Northern Ireland, Bell Recruitment is a specialist FMCG recruitment and executive search consultancy led by founder and CEO Julie Bell, with over 25 years' experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint so scroll-reveal content starts hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <JsonLd data={siteSchema()} />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <ScrollReveal />
        <BackToTop />
      </body>
    </html>
  );
}
