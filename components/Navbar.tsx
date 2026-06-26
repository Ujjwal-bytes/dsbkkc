'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, GraduationCap, PhoneCall } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const locale = useLocale();
  const t = useTranslations('nav');

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isClient]);

  const navLinks = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('courses'), href: `/${locale}/courses` },
    { name: t('gallery'), href: `/${locale}/gallery` },
    { name: t('testimonials'), href: `/${locale}/testimonials` },
    { name: t('admission'), href: `/${locale}/admission` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-brand-blue-900/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-white dark:bg-brand-blue-800 py-5 border-b border-slate-100 dark:border-brand-blue-700/40'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-600 dark:bg-brand-yellow-500 shadow-md group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white dark:text-brand-blue-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-brand-blue-600 dark:text-white leading-tight">
                DSB KKC
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow-600 dark:text-brand-yellow-400 mt-0.5 whitespace-nowrap">
                {t('academyTagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 justify-center flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-all relative py-1 hover:text-brand-blue-500 dark:hover:text-brand-yellow-400 whitespace-nowrap ${isActive
                    ? 'text-brand-blue-600 dark:text-brand-yellow-400 font-bold'
                    : 'text-slate-600 dark:text-slate-200'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-blue-600 dark:bg-brand-yellow-400 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <LanguageSwitcher />
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-brand-yellow-400 hover:text-brand-blue-600 dark:hover:text-brand-yellow-300 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="h-4 w-4 text-brand-blue-600 dark:text-brand-yellow-500" />
              <span>{t('callUs')}</span>
            </a>
            <button
              onClick={() => openEnquiry()}
              className="rounded-xl bg-brand-blue-600 hover:bg-brand-blue-500 dark:bg-brand-yellow-500 dark:hover:bg-brand-yellow-400 px-5 py-2.5 text-sm font-bold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-white dark:text-brand-blue-950 whitespace-nowrap"
            >
              {t('enrollNow')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => openEnquiry()}
              className="rounded-lg bg-brand-blue-600 dark:bg-brand-yellow-500 px-4 py-2 text-xs font-bold shadow-md active:scale-95 transition-transform text-white dark:text-brand-blue-950"
            >
              {t('enroll')}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-200 hover:text-brand-blue-600 dark:hover:text-brand-yellow-400 p-2 rounded-lg bg-slate-50 dark:bg-brand-blue-700/50 focus:outline-none"
              aria-label={t('toggleMenu')}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-brand-blue-950/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-brand-blue-800 p-6 shadow-2xl flex flex-col justify-between animate-slide-in-right">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-brand-blue-700">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-6 w-6 text-brand-blue-600 dark:text-brand-yellow-400" />
                  <span className="font-black text-brand-blue-600 dark:text-white text-lg">DSB KKC</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-slate-800 dark:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-brand-blue-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive
                        ? 'bg-brand-blue-50 dark:bg-brand-blue-700 text-brand-blue-600 dark:text-brand-yellow-400'
                        : 'text-slate-600 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-blue-700/30'
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-brand-blue-700/80">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-brand-yellow-400 hover:text-brand-blue-600 mb-4 transition-colors"
              >
                <PhoneCall className="h-5 w-5 text-brand-blue-600 dark:text-brand-yellow-500" />
                <span>{t('callUs')}</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openEnquiry();
                }}
                className="w-full rounded-xl bg-brand-blue-600 hover:bg-brand-blue-500 dark:bg-brand-yellow-500 dark:hover:bg-brand-yellow-400 px-3 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer text-center text-white dark:text-brand-blue-950"
              >
                {t('enrollNow')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}