import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { WebVitals } from "@/components/WebVitals";
import { site } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.socials.linkedin }],
  creator: site.name,
  keywords: [
    "Juliet Ogbonna",
    "Frontend Developer",
    "UI Designer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Web Developer Nigeria",
    "Enugu",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}/images/juliet.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Enugu", addressCountry: "NG" },
  alumniOf: "University of Nigeria",
  knowsAbout: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} dark antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </head>
      <body className="min-h-dvh font-sans">
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
