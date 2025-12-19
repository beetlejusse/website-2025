import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore IEEE BPIT's exciting events including workshops, hackathons, seminars, tech talks, and competitions. Stay updated with upcoming and past events organized by the IEEE Student Branch at Bhagwan Parshuram Institute of Technology.",
  keywords: [
    "IEEE BPIT Events",
    "Workshops",
    "Hackathons",
    "Tech Talks",
    "Seminars",
    "Competitions",
    "Technical Events",
    "Student Events",
    "BPIT Events",
    "IEEE Delhi Section Events",
    "DataDive",
    "Deep Learning Workshop",
    "Robotics Workshop",
    "WIE Events",
  ],
  openGraph: {
    title: "Events | IEEE BPIT",
    description:
      "Explore IEEE BPIT's exciting events including workshops, hackathons, seminars, and tech talks. Stay updated with technical events at BPIT.",
    url: `${siteUrl}/event`,
    images: [
      {
        url: "/events/datadive.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Events",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | IEEE BPIT",
    description:
      "Explore IEEE BPIT's exciting events including workshops, hackathons, and tech talks.",
    images: ["/events/datadive.png"],
  },
  alternates: {
    canonical: `${siteUrl}/event`,
  },
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
