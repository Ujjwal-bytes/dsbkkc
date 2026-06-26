'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { GraduationCap, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function Footer() {
  const { openEnquiry } = useEnquiry();
  const locale = useLocale();
  const t = useTranslations('footer');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorMsg(t('emailRequired'));
      setStatus('error');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMsg(t('emailInvalid'));
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg(t('subscribeError'));
      setStatus('error');
    }
  };

  const currentYear = new Date().getFullYear();

  type ProgramItem = string;
  const programs = t.raw('programs') as ProgramItem[];

  return (
    <footer className="bg-brand-blue-950 text-slate-300 border-t border-brand-blue-800/60 pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-700 text-brand-yellow-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-md font-extrabold text-white tracking-tight">DSB KKC</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-brand-yellow-400">
                  Dnyaneshwar Barate&apos;s Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">{t('tagline')}</p>
            <div className="flex items-center gap-3 pt-3">
              {['facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://www.${social}.com/dsbkcc`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-900 hover:bg-brand-yellow-500 hover:text-brand-blue-950 transition-all duration-300 border border-brand-blue-800"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    {social === 'facebook' && (
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    )}
                    {social === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                    {social === 'youtube' && (
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                    {social === 'linkedin' && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-md font-bold uppercase tracking-wider mb-5 border-l-4 border-brand-yellow-400 pl-3">
              {t('quickLinksTitle')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {([
                { key: 'home', href: `/${locale}` },
                { key: 'about', href: `/${locale}/about` },
                { key: 'courses', href: `/${locale}/courses` },
                { key: 'gallery', href: `/${locale}/gallery` },
                { key: 'testimonials', href: `/${locale}/testimonials` },
                { key: 'admission', href: `/${locale}/admission` },
                { key: 'contact', href: `/${locale}/contact` },
              ] as const).map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="hover:text-brand-yellow-400 hover:pl-1 transition-all">
                    {t(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="text-white text-md font-bold uppercase tracking-wider mb-5 border-l-4 border-brand-yellow-400 pl-3">
              {t('programsTitle')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {programs.map((programName) => (
                <li key={programName}>
                  <button
                    onClick={() => openEnquiry(programName)}
                    className="text-left hover:text-brand-yellow-400 hover:pl-1 transition-all cursor-pointer"
                  >
                    {programName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter + Contact */}
          <div className="space-y-5">
            <div>
              <h3 className="text-white text-md font-bold uppercase tracking-wider mb-5 border-l-4 border-brand-yellow-400 pl-3">
                {t('newsletterTitle')}
              </h3>
              <p className="text-xs text-slate-400 mb-3">{t('newsletterSubtitle')}</p>

              {status === 'success' ? (
                <div className="p-2 rounded bg-brand-blue-900/50 text-emerald-400 text-xs flex items-center gap-2 border border-emerald-500/30">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{t('subscribeSuccess')}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder={t('emailPlaceholder')}
                      className="w-full bg-brand-blue-900 border border-brand-blue-800 focus:border-brand-yellow-400 text-white rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-yellow-400 pr-10"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1 top-1 bottom-1 px-2 text-brand-yellow-400 hover:text-brand-yellow-300 flex items-center justify-center cursor-pointer"
                      aria-label="Subscribe"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  {status === 'error' && (
                    <span className="text-[11px] text-rose-400 block">{errorMsg}</span>
                  )}
                </form>
              )}
            </div>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-yellow-400 shrink-0 mt-0.5" />
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-yellow-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-yellow-400 shrink-0" />
                <a href="mailto:info@dsbkcc.com" className="hover:text-white">info@dsbkcc.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-yellow-400 shrink-0" />
                <span>{t('hours')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-brand-blue-800/40 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <span>
            &copy; {currentYear} {t('copyright')}
          </span>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-slate-300 transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href={`/${locale}/terms-conditions`} className="hover:text-slate-300 transition-colors">
              {t('termsConditions')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
