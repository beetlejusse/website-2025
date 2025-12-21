import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover innovative projects by IEEE BPIT members including DataDive Analytics Platform, Deep Learning Playground, RoboSoccer Simulation, and more. Explore cutting-edge technology projects in AI, ML, Web Development, and Robotics.",
  keywords: [
    "IEEE BPIT Projects",
    "Student Projects",
    "Technical Projects",
    "DataDive",
    "Deep Learning",
    "Robotics Projects",
    "AI Projects",
    "Machine Learning",
    "Web Development",
    "IoT Projects",
    "BPIT Innovation",
    "Engineering Projects",
  ],
  openGraph: {
    title: "Projects | IEEE BPIT",
    description:
      "Discover innovative projects by IEEE BPIT members including AI, ML, Web Development, and Robotics projects.",
    url: `${siteUrl}/projects`,
    images: [
      {
        url: "/events/deeplearning.png",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | IEEE BPIT",
    description:
      "Discover innovative projects by IEEE BPIT members in AI, ML, and Robotics.",
    images: ["/events/deeplearning.png"],
  },
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
