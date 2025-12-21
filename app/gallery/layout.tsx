import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;


export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the IEEE BPIT photo gallery showcasing memorable moments from our events, workshops, hackathons, team gatherings, and celebrations. Relive the experiences of our vibrant community.",
  keywords: [
    "IEEE BPIT Gallery",
    "Event Photos",
    "Workshop Images",
    "Team Photos",
    "BPIT Events Gallery",
    "IEEE Events Pictures",
    "Technical Events Gallery",
    "Student Activities",
    "Campus Events",
  ],
  openGraph: {
    title: "Gallery | IEEE BPIT",
    description:
      "Browse the IEEE BPIT photo gallery showcasing memorable moments from our events, workshops, and team gatherings.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: "/team_about.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Gallery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | IEEE BPIT",
    description:
      "Browse the IEEE BPIT photo gallery showcasing memorable moments from events and workshops.",
    images: ["/team_about.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
