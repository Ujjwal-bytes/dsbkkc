'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Globe } from 'lucide-react';

const locales = [
   { code: 'mr', label: 'मर', nativeLabel: 'मराठी' },
  { code: 'en', label: 'EN', nativeLabel: 'English' },
 
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);

    // Replace the current locale segment in the path
    // e.g. /en/about → /mr/about
    const segments = pathname.split('/');
    // segments[1] is the current locale
    segments[1] = newLocale;
    const newPath = segments.join('/') || `/${newLocale}`;

    // Set cookie so server middleware persists the choice
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer
          ${isPending ? 'opacity-50 cursor-wait' : ''}
          border-slate-200 dark:border-brand-blue-700
          text-slate-700 dark:text-slate-200
          hover:border-brand-blue-400 dark:hover:border-brand-yellow-400
          hover:text-brand-blue-600 dark:hover:text-brand-yellow-400
          bg-white/80 dark:bg-brand-blue-800/80 backdrop-blur-sm`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{current.label}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 w-36 rounded-xl border border-slate-200 dark:border-brand-blue-700 bg-white dark:bg-brand-blue-800 shadow-xl overflow-hidden animate-fade-in">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer text-left
                  ${locale === loc.code
                    ? 'bg-brand-blue-50 dark:bg-brand-blue-700 text-brand-blue-600 dark:text-brand-yellow-400'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-brand-blue-700/50'
                  }`}
              >
                <span className="text-base leading-none">{loc.code === 'mr' ? '🇮🇳' : '🇬🇧'}</span>
                <div>
                  <div>{loc.nativeLabel}</div>
                  <div className="text-[10px] font-normal text-slate-400 dark:text-slate-500">{loc.label}</div>
                </div>
                {locale === loc.code && (
                  <svg className="ml-auto h-3.5 w-3.5 text-brand-blue-600 dark:text-brand-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
