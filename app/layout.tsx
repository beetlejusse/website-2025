import type { Metadata } from "next";
import "./globals.css";
import { Borel, Condiment, Great_Vibes, Oswald, Press_Start_2P, Rye } from "next/font/google";


const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
});

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
      <body className={` ${press.variable} bg-background antialiased`}>{children}</body>
    </html>
  );
}
