'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Home, BookOpen, HelpCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] bg-slate-50 dark:bg-brand-blue-950 flex items-center justify-center px-4 py-20 font-sans">
      <div className="max-w-md w-full bg-white dark:bg-brand-blue-800 p-8 rounded-3xl border border-slate-200 dark:border-brand-blue-700 shadow-xl text-center space-y-6">
        
        {/* Animated Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-yellow-400 text-brand-blue-900 shadow-lg mx-auto animate-bounce">
          <GraduationCap className="h-10 w-10" />
        </div>

        {/* Error Code & Message */}
        <div className="space-y-2">
          <span className="text-sm font-black uppercase tracking-wider text-brand-blue-600 dark:text-brand-yellow-400">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            Oops! This Page is on Recess
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-350 leading-relaxed max-w-sm mx-auto">
            The page you are looking for has taken a break, skipped class, or was moved to another classroom. Let's get you back on track!
          </p>
        </div>

        {/* Action Options */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold text-xs sm:text-sm shadow transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home Classroom</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/courses"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-brand-blue-900 hover:bg-slate-200 dark:hover:bg-brand-blue-750 text-slate-700 dark:text-white font-bold text-xs transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Our Courses</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-brand-blue-900 hover:bg-slate-200 dark:hover:bg-brand-blue-750 text-slate-700 dark:text-white font-bold text-xs transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Contact Office</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
