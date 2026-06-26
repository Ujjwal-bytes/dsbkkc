import type { Metadata, Viewport } from "next";
import { Montserrat, Noto_Sans_Devanagari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";

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

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const locales = ["en", "mr"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return {
    title: t("title"),
    description: t("description"),
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
      title: t("title"),
      description: t("description"),
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
      locale: locale === "mr" ? "mr_IN" : "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://www.dsbkcc.com/og-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Load translated messages for the client provider
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <EnquiryProvider>
            {/* Schema Markup for SEO */}
            <SchemaMarkup />

            {/* Dismissible top notification banner */}
            <NoticeTicker />

            {/* Sticky Header Navigation */}
            <Navbar />

            {/* Main page content */}
            <main className="flex-grow">{children}</main>

            {/* Educational Footer */}
            <Footer />

            {/* Fixed WhatsApp & Call Contact Hub */}
            <FloatingButtons />

            {/* Scroll to Top Arrow */}
            <BackToTop />

            {/* Global Course Enquiry Modal */}
            <EnquiryModal />
          </EnquiryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
