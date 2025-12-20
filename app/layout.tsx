import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL!;
const siteName = "IEEE BPIT - Student Branch";
const siteDescription =
  "IEEE BPIT is the official student branch of the Institute of Electrical and Electronics Engineers at Bhagwan Parshuram Institute of Technology, Delhi. Join us for workshops, hackathons, technical events, and professional development opportunities in engineering and technology.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00629B" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IEEE BPIT - Student Branch | Bhagwan Parshuram Institute of Technology",
    template: "%s | IEEE BPIT",
  },
  description: siteDescription,
  keywords: [
    "IEEE",
    "IEEE BPIT",
    "IEEE Student Branch",
    "BPIT",
    "Bhagwan Parshuram Institute of Technology",
    "Delhi",
    "India",
    "Engineering",
    "Technology",
    "Electronics",
    "Computer Science",
    "Workshops",
    "Hackathons",
    "Technical Events",
    "Student Organization",
    "IEEE Delhi Section",
    "WIE",
    "Women in Engineering",
    "ComSoc",
    "Communication Society",
    "Machine Learning",
    "Robotics",
    "Data Science",
    "Web Development",
  ],
  authors: [
    { name: "IEEE BPIT", url: siteUrl },
    { name: "IEEE BPIT Web Team" },
  ],
  creator: "IEEE BPIT",
  publisher: "IEEE BPIT",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Education",
  classification: "Student Organization",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/ieee-logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/ieee-logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: ["/ieee-logo.jpg"],
    apple: [
      { url: "/ieee-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/ieee-logo.jpg",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "IEEE BPIT - Student Branch | Bhagwan Parshuram Institute of Technology",
    description: siteDescription,
    images: [
      {
        url: "/ieee-cover.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT - Empowering Students Through Technology",
        type: "image/png",
      },
      {
        url: "/ieee-logo.jpg",
        width: 512,
        height: 512,
        alt: "IEEE BPIT Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE BPIT - Student Branch",
    description: siteDescription,
    images: ["/ieee-cover.png"],
    creator: "@ieeebpit",
    site: "@ieeebpit",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "en-US": siteUrl,
    },
  },
  other: {
    "msapplication-TileColor": "#00629B",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "IEEE BPIT",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "IEEE BPIT",
      alternateName: "IEEE Student Branch - Bhagwan Parshuram Institute of Technology",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/ieee-logo.jpg`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/ieee-cover.png`,
      description: siteDescription,
      foundingDate: "2015",
      parentOrganization: {
        "@type": "Organization",
        name: "IEEE",
        url: "https://www.ieee.org",
      },
      memberOf: {
        "@type": "Organization",
        name: "IEEE Delhi Section",
        url: "https://ieeedelhi.org",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bhagwan Parshuram Institute of Technology, PSP-4, Sector 17",
        addressLocality: "Rohini",
        addressRegion: "Delhi",
        postalCode: "110089",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Student Organization",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "CollegeOrUniversity",
      "@id": `${siteUrl}/#college`,
      name: "Bhagwan Parshuram Institute of Technology",
      alternateName: "BPIT",
      url: process.env.NEXT_PUBLIC_COLLEGE_URL!,
      address: {
        "@type": "PostalAddress",
        streetAddress: "PSP-4, Sector 17",
        addressLocality: "Rohini",
        addressRegion: "Delhi",
        postalCode: "110089",
        addressCountry: "IN",
      },
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#educational-org`,
      name: "IEEE BPIT Student Branch",
      url: siteUrl,
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
      department: [
        {
          "@type": "Organization",
          name: "IEEE WIE BPIT",
          description: "Women in Engineering Affinity Group",
        },
        {
          "@type": "Organization",
          name: "IEEE ComSoc BPIT",
          description: "Communications Society Chapter",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${press.variable} bg-background antialiased`}>
        {children}
        <Toaster />
        <Analytics/>
      </body>
    </html>
  );
}
