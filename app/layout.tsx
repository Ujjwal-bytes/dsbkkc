// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DSB KKC Academy",
    default: "DSB KKC Academy - Empowering Students for the Future",
  },
  description: "Abacus, Vedic Maths, Robotics, English Speaking & School Tuitions for 1st to 10th Standard in Katraj, Pune.",
  keywords: [
    "DSB KKC",
    "Dnyaneshwar Barate Academy",
    "Abacus Pune",
    "Vedic Maths Pune",
    "Robotics for kids",
    "English Speaking Classes Pune",
    "1st to 10th Tuitions Katraj",
  ],
  authors: [{ name: "Dnyaneshwar Barate" }],
  robots: "index, follow",
  openGraph: {
    title: "DSB KKC Academy - Empowering Students for the Future",
    description: "Abacus, Vedic Maths, Robotics, English Speaking & School Tuitions for 1st to 10th Standard in Katraj, Pune.",
    url: "https://www.dsbkcc.com",
    siteName: "DSB KKC Academy",
    images: [
      {
        url: "https://www.dsbkcc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DSB KKC Academy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSB KKC Academy - Empowering Students for the Future",
    description: "Abacus, Vedic Maths, Robotics, English Speaking & School Tuitions for 1st to 10th Standard in Katraj, Pune.",
    images: ["https://www.dsbkcc.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${montserrat.variable} ${notoSansDevanagari.variable} h-full antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}