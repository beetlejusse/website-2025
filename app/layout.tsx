import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEEE BPIT",
  keywords: [
    "IEEE",
    "BPIT",
    "Institute of Electrical and Electronics Engineers",
    "Delhi",
    "India",
  ],
  authors: [{ name: "IEEE BPIT" }],
  description:
    "IEEE BPIT is the student branch of the Institute of Electrical and Electronics Engineers at Bharatiya Vidya Bhavan's P.G. Institute of Technology, Delhi.",
  openGraph: {
    title: "IEEE BPIT",
    description:
      "IEEE BPIT is the student branch of the Institute of Electrical and Electronics Engineers at Bharatiya Vidya Bhavan's P.G. Institute of Technology, Delhi.",
    url: "https://ieeebpit.org",
    siteName: "IEEE BPIT",
    images: [
      {
        url: "/ieee-logo.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE BPIT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
