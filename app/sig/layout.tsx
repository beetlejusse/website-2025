import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata: Metadata = {
  title: "Special Interest Groups (SIGs)",
  description:
    "Explore IEEE BPIT's Special Interest Groups (SIGs) offering hands-on learning in Machine Learning, Robotics, IoT, Java, Web Development, and more. Join our focused learning sessions led by experienced mentors.",
  keywords: [
    "IEEE BPIT SIG",
    "Special Interest Groups",
    "Machine Learning SIG",
    "Robotics Workshop",
    "IoT Sessions",
    "Java Learning",
    "Web Development",
    "DSA Practice",
    "Technical Training",
    "Skill Development",
    "Peer Learning",
    "IEEE Learning Groups",
  ],
  openGraph: {
    title: "Special Interest Groups (SIGs) | IEEE BPIT",
    description:
      "Explore IEEE BPIT's Special Interest Groups offering hands-on learning in ML, Robotics, IoT, and more.",
    url: `${siteUrl}/sig`,
    images: [
      {
        url: "/events/introrobo.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Special Interest Groups",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Interest Groups (SIGs) | IEEE BPIT",
    description:
      "Explore IEEE BPIT's SIGs offering hands-on learning in ML, Robotics, IoT, and more.",
    images: ["/events/introrobo.png"],
  },
  alternates: {
    canonical: `${siteUrl}/sig`,
  },
};

export default function SigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
