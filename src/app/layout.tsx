import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ledgerstack Technologies | Driving Efficiency Through Technology",
  description:
    "Ledgerstack Technologies provides business software implementation (TallyPrime, QuickBooks, ERPNext, Odoo, Zoho Books), practical training, web development, graphic design, business email, and ongoing technology support in Ghana.",
  keywords: [
    "Ledgerstack Technologies",
    "Business software Ghana",
    "TallyPrime implementation Accra",
    "QuickBooks training Ghana",
    "ERPNext Ghana",
    "Odoo ERP implementation",
    "Zoho Books Ghana",
    "Corporate accounting training",
    "Business email Google Workspace Ghana",
    "Ghana technology solutions",
    "Accounting software support Accra",
  ],
  authors: [{ name: "Ledgerstack Technologies" }],
  creator: "Ledgerstack Technologies",
  publisher: "Ledgerstack Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ledgerstacktechnologies.com"),
  openGraph: {
    title: "Ledgerstack Technologies | Driving Efficiency Through Technology",
    description:
      "Modern Ghanaian business technology solutions: business management software implementation, hands-on training, web development, and 24/7 technical support.",
    url: "https://ledgerstacktechnologies.com",
    siteName: "Ledgerstack Technologies",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ledgerstack Technologies | Driving Efficiency Through Technology",
    description:
      "Ghanaian technology & business solutions company: business software implementation, training, web engineering, and dependable technical care.",
  },
  icons: {
    icon: "/images/llogo.png",
    shortcut: "/images/llogo.png",
    apple: "/images/llogo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Ledgerstack Technologies",
    alternateName: "Ledgerstack",
    url: "https://ledgerstacktechnologies.com",
    logo: "https://ledgerstacktechnologies.com/logo.png",
    description:
      "Ghanaian business technology solutions company specializing in business management software, capacity building, web development, and dedicated support.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tema Community 18, Block Factory",
      addressRegion: "Greater Accra Region",
      addressCountry: "GH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233267342160",
      contactType: "customer service",
      areaServed: "GH",
      availableLanguage: "en",
    },
    sameAs: [
      "https://linkedin.com/company/ledgerstack-technologies",
      "https://twitter.com/ledgerstacktech",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-amber-500/20 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
