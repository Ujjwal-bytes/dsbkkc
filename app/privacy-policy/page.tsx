'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20 font-sans">
      
      {/* 1. Header */}
      <section className="bg-brand-blue-900 text-white py-16 text-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Privacy Policy</h1>
          <div className="h-1 bg-brand-yellow-400 w-20 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
            Last Updated: June 26, 2026
          </p>
        </div>
      </section>

      {/* 2. Content */}
      <section className="py-16 text-left max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="bg-white dark:bg-brand-blue-800 p-8 rounded-3xl border border-slate-200 dark:border-brand-blue-700 shadow-sm space-y-6 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
          
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">1. Information We Collect</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              When you submit an admission form, course enquiry, newsletter subscription, or testimonial on our website, we collect personal details like student name, parent name, contact mobile number, email address, school standard, and course interests. This information is voluntary and supplied directly by you.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              The collected information is solely used to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-2">
              <li>Process your child's academic admission and demo session scheduling.</li>
              <li>Respond to your course inquiries, doubts, and message queries.</li>
              <li>Provide regular session notifications, announcements, and newsletters.</li>
              <li>Improve our educational programs, materials, and digital services.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">3. Data Security & Sharing</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Your privacy is extremely important to us. **DSB KKC Academy** does NOT sell, trade, rent, or lease your personal information to third-party marketing companies. All data resides securely on our database servers and is accessible only to authorized admissions administrators.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">4. Cookies & Analytics</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Our website may use basic temporary cookies to enhance performance, memorize your newsletter preferences, and analyze anonymized visitor traffic patterns to optimize layout responsiveness. You can adjust your browser settings to decline cookies if preferred.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">5. Contact Us</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              If you have any questions about this privacy policy, data removal, or information updating, please feel free to reach out to us at <a href="mailto:info@dsbkcc.com" className="text-brand-blue-600 dark:text-brand-yellow-400 hover:underline">info@dsbkcc.com</a> or call our administration desk at +91 98765 43210.
            </p>
          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}
