'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function TermsConditionsPage() {
  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20 font-sans">
      
      {/* 1. Header */}
      <section className="bg-brand-blue-900 text-white py-16 text-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Terms & Conditions</h1>
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
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">1. Course Enrollment</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Enrollment in courses (Abacus, Vedic Maths, Robotics, Handwriting, Tuitions) at **DSB KKC Academy** is subject to batch slot availability and completion of registration fees. Batch timings are allocated at the time of admission and should be adhered to.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">2. Fee Payment & Refunds</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Fees must be paid on or before the due date (usually the 5th of every month or level start). Level registration fees and course kit charges (Abacus tool, Robotics kits, Worksheets) are non-refundable once materials are issued to the student.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">3. Attendance & Leaves</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Regular attendance is crucial for cognitive progress, especially in cumulative subjects like Abacus and Robotics. If a student is absent, parents must inform the tutor in advance. Compensatory backup classes will be scheduled at the teacher's discretion.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">4. Code of Conduct</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              We maintain a safe, highly respectful, and focused learning environment. Students are expected to respect tutors and fellow batch-mates. Disruptive behavior, damaged property, or non-cooperation may lead to review of enrollment.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">5. Revisions of Terms</h2>
            <p className="leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              **DSB KKC Academy** reserves the right to modify course structures, level contents, timing slots, or fee schedules. Tutors will notify parents at least 15 days in advance regarding any changes.
            </p>
          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}
