import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NoticeTicker from "@/components/NoticeTicker";
import BackToTop from "@/components/BackToTop";
import EnquiryModal from "@/components/EnquiryModal";
import SchemaMarkup from "@/components/SchemaMarkup";

// Context
import { EnquiryProvider } from "@/context/EnquiryContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "DSB KKC | Dnyaneshwar Barate's Academy - Pune",
  description: "DSB KKC is a premium educational academy in Pune offering Abacus, English Speaking, Vedic Mathematics, Handwriting, Robotics, and Tuitions (1st to 10th Standard). Build skills for the future.",
  keywords: ["DSB KKC", "Dnyaneshwar Barate Academy", "Abacus Pune", "Vedic Maths Pune", "Robotics for kids", "English Speaking Classes Pune", "1st to 10th Tuitions Katraj"],
  authors: [{ name: "Dnyaneshwar Barate" }],
  robots: "index, follow",
  openGraph: {
    title: "DSB KKC | Dnyaneshwar Barate's Academy - Pune",
    description: "Premium coaching & skill-building institute. Admissions open for Abacus, Vedic Maths, Robotics, English Speaking, Handwriting, & Tuitions.",
    url: "https://www.dsbkcc.com",
    siteName: "DSB KKC Academy",
    images: [
      {
        url: "https://www.dsbkcc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DSB KKC Academy - Empowering Students for the Future",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSB KKC | Dnyaneshwar Barate's Academy - Pune",
    description: "Empowering students with essential academic coaching and modern cognitive skills. Abacus, Vedic Maths, Robotics, and school tuitions.",
    images: ["https://www.dsbkcc.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <EnquiryProvider>
          {/* Schema Markup for SEO */}
          <SchemaMarkup />

          {/* Dismissible top notification banner */}
          <NoticeTicker />

          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Main page content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Educational Footer */}
          <Footer />

          {/* Fixed WhatsApp & Call Contact Hub */}
          <FloatingButtons />

          {/* Scroll to Top Arrow */}
          <BackToTop />

          {/* Global Course Enquiry Modal */}
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
