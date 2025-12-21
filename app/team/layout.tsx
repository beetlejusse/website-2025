import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team behind IEEE BPIT - our Executive Committee, Senior Council, Junior Council, and Coordinators. Discover the passionate individuals driving innovation and technology at Bhagwan Parshuram Institute of Technology.",
  keywords: [
    "IEEE BPIT Team",
    "IEEE BPIT Members",
    "Executive Committee",
    "Senior Council",
    "Junior Council",
    "Coordinators",
    "Student Leaders",
    "BPIT Students",
    "IEEE Volunteers",
  ],
  openGraph: {
    title: "Our Team | IEEE BPIT",
    description:
      "Meet the dedicated team behind IEEE BPIT - our Executive Committee, Senior Council, Junior Council, and Coordinators driving innovation at BPIT.",
    url: `${siteUrl}/team`,
    images: [
      {
        url: "/team.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | IEEE BPIT",
    description:
      "Meet the dedicated team behind IEEE BPIT driving innovation and technology.",
    images: ["/team.png"],
  },
  alternates: {
    canonical: `${siteUrl}/team`,
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
