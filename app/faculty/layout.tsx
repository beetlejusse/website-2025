import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata: Metadata = {
  title: "Faculty Advisors",
  description:
    "Meet the distinguished faculty advisors of IEEE BPIT including Dr. Monika Sharma, Dr. Achal Kumar, and Dr. Shweta Gupta. Learn about their expertise, research, and contributions to the IEEE Student Branch.",
  keywords: [
    "IEEE BPIT Faculty",
    "Faculty Advisors",
    "Branch Counselor",
    "Dr. Monika Sharma",
    "Dr. Achal Kumar",
    "Dr. Shweta Gupta",
    "BPIT Faculty",
    "IEEE Mentors",
    "Engineering Faculty",
    "Research Faculty",
  ],
  openGraph: {
    title: "Faculty Advisors | IEEE BPIT",
    description:
      "Meet the distinguished faculty advisors of IEEE BPIT guiding students in technology and innovation.",
    url: `${siteUrl}/faculty`,
    images: [
      {
        url: "/achal_sir.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Faculty Advisors",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Advisors | IEEE BPIT",
    description:
      "Meet the distinguished faculty advisors of IEEE BPIT guiding students in technology.",
    images: ["/achal_sir.png"],
  },
  alternates: {
    canonical: `${siteUrl}/faculty`,
  },
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
