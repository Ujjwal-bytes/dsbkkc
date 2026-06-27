import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NoticeTicker from "@/components/NoticeTicker";
import BackToTop from "@/components/BackToTop";
import EnquiryModal from "@/components/EnquiryModal";
import SchemaMarkup from "@/components/SchemaMarkup";

const locales = ["en", "mr"] as const;

// ✅ MAINTENANCE MODE CONTROL
const MAINTENANCE_MODE = true; // true = Maintenance ON, false = Normal

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
          alt: "DSB KKC Academy",
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

  // ✅ MAINTENANCE MODE CHECK - NO EVENT HANDLERS
  if (MAINTENANCE_MODE) {
    return (
      <html lang={locale}>
        <head>
          <title>Under Maintenance - DSB KKC Academy</title>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #0f172a)',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '20px',
            textAlign: 'center',
            margin: 0
          }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
              {/* Logo/Icon */}
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '1.5rem',
                display: 'inline-block',
                animation: 'bounce 2s infinite'
              }}>
                🏗️
              </div>
              
              {/* Heading */}
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                background: 'linear-gradient(to right, #fbbf24, #f59e0b, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Under Maintenance
              </h1>
              
              {/* Divider */}
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
                margin: '1rem auto',
                borderRadius: '999px'
              }} />
              
              {/* Main Message */}
              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
                opacity: 0.9,
                marginBottom: '0.5rem',
                lineHeight: '1.6'
              }}>
                We're working hard to improve your experience.
              </p>
              
              <p style={{ 
                opacity: 0.6,
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                marginBottom: '2rem'
              }}>
                Please check back soon!
              </p>
              
              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '999px',
                overflow: 'hidden',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '0%',
                  height: '100%',
                  background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
                  borderRadius: '999px',
                  animation: 'progress 2.5s ease-in-out infinite'
                }} />
              </div>
              
              {/* Contact Section - NO EVENT HANDLERS */}
              <div style={{ 
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                opacity: 0.9,
                fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {/* Ujjwal Tech Link */}
                  <div>
                    <span style={{ opacity: 0.6 }}>Website by </span>
                    <a 
                      href="https://www.ujjwaltech.site/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#fbbf24',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        borderBottom: '1px solid rgba(251, 191, 36, 0.3)',
                        paddingBottom: '2px'
                      }}
                    >
                      Ujjwal Tech
                    </a>
                    <span style={{ opacity: 0.6 }}> — Best Web Development Company in Mumbai</span>
                  </div>
                  
                  {/* Phone Number */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ opacity: 0.6 }}>📞 Contact:</span>
                    <a 
                      href="tel:+917770074667"
                      style={{
                        color: '#fbbf24',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      +91 77700 74667
                    </a>
                    <span style={{ opacity: 0.4 }}>|</span>
                    <a 
                      href="mailto:info@dsbkkc.com"
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(148, 163, 184, 0.3)',
                        paddingBottom: '2px'
                      }}
                    >
                      info@dsbkkc.com
                    </a>
                  </div>
                  
                  {/* Services Note */}
                  <div style={{ 
                    opacity: 0.5, 
                    fontSize: '0.75rem',
                    marginTop: '0.3rem',
                    lineHeight: '1.5'
                  }}>
                    Professional Web Development • E-commerce • SEO • Digital Marketing
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animations */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
              @keyframes progress {
                0% { width: 0%; }
                50% { width: 70%; }
                100% { width: 100%; }
              }
            `
          }} />
        </body>
      </html>
    );
  }

  // ✅ NORMAL WEBSITE
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SchemaMarkup />
      {/* <NoticeTicker /> */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
      <EnquiryModal />
    </NextIntlClientProvider>
  );
}