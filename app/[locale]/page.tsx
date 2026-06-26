'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  GraduationCap,
  Award,
  Users,
  ShieldCheck,
  Zap,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Star,
  Plus,
  Minus,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import ScrollReveal from '@/components/ScrollReveal';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  course: string;
  avatar: string;
};

type NoticeItem = {
  date: string;
  title: string;
  desc: string;
  badge: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type CourseItem = {
  title: string;
  desc: string;
  age: string;
  benefits: string[];
};

type StatItem = {
  val: string;
  desc: string;
};

export default function HomePage() {
  const { openEnquiry } = useEnquiry();
  const locale = useLocale();
  const t = useTranslations();

  // Hero Carousel Images
  const carouselImages = [
    "/Event_01.jpg",
    "/Event_02.jpg",

    "/Event_04.jpg",

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  // Testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = t.raw('testimonials.items') as Testimonial[];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = t.raw('faq.items') as FaqItem[];
  const toggleFaq = (index: number) =>
    setOpenFaq(openFaq === index ? null : index);

  // Data from translations
  const notices = t.raw('hero.notices') as NoticeItem[];
  const highlightItems = t.raw('highlights.items') as { title: string; desc: string }[];
  const whyUsItems = t.raw('whyUs.items') as { title: string; desc: string }[];
  const featuredCourses = t.raw('featuredCourses.items') as CourseItem[];
  const statItems = t.raw('stats.items') as StatItem[];

  const courseImages = [
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&auto=format&fit=crop&q=80',
  ];

  const highlightIcons = [
    <GraduationCap key="grad" className="h-6 w-6 text-brand-blue-600 dark:text-brand-blue-400" />,
    <Zap key="zap" className="h-6 w-6 text-amber-600" />,
    <ShieldCheck key="shield" className="h-6 w-6 text-emerald-600" />,
    <Users key="users" className="h-6 w-6 text-purple-600" />,
  ];

  const highlightBgs = [
    'bg-blue-50 dark:bg-brand-blue-900/40',
    'bg-amber-50 dark:bg-amber-950/20',
    'bg-emerald-50 dark:bg-emerald-950/20',
    'bg-purple-50 dark:bg-purple-950/20',
  ];

  return (
    <div className="overflow-hidden">

      {/* 1. Hero Section with Carousel Background */}
      <section className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden bg-brand-blue-950 p-6 sm:p-10 lg:p-16">

        {/* ─── BACKGROUND CAROUSEL (Crisp & Blur-Free) ─────────────────── */}
        <div className="absolute inset-0 z-0 bg-brand-blue-950">
          {carouselImages.map((imgUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center will-change-transform transform-gpu transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `url(${imgUrl})`,
                imageRendering: 'auto'
              }}
            />
          ))}
          {/* Lighter clean gradient overlay - Image clear dikhegi */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50" />
        </div>

        {/* ─── TOP LEFT: HEADLINE & BADGE (Semi-Bold & Modern) ─────────── */}
        <div className="relative z-10 w-full max-w-xl lg:max-w-3xl pt-6 lg:pt-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-brand-yellow-400 text-[11px] font-semibold uppercase tracking-widest mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t('common.admissionsOpen')}</span>
          </div>

          {/* Small & Clean Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug text-white/95">
            {t('hero.headline1')}{' '}
            <span className="text-brand-yellow-400 font-medium">{t('hero.headlineAccent')}</span>{' '}
            {t('hero.headline2')}
          </h1>
        </div>

        {/* ─── BOTTOM RIGHT: SUBTITLE & ACTION BUTTONS ─────────────────── */}
        <div className="relative z-10 w-full flex flex-col items-end mt-auto pb-16 lg:pb-4">
          <div className="w-full max-w-md bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openEnquiry()}
                className="w-full sm:w-auto rounded-xl bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-bold px-6 py-3 text-xs tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t('hero.enrollNow')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto rounded-xl border border-white/20 hover:border-white text-white font-medium px-6 py-3 text-xs hover:bg-white/10 transition-all duration-300 text-center"
              >
                {t('hero.contactUs')}
              </Link>
            </div>

          </div>
        </div>

        {/* ─── FLOATING CAROUSEL CONTROLS (Bottom Left Corner) ─────────── */}
        <div className="absolute bottom-6 left-6 sm:left-10 lg:left-16 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-10">
          <button
            onClick={prevSlide}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-1.5">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'w-4 bg-brand-yellow-400'
                  : 'w-1 bg-white/30'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </section>

      {/* 2. Highlights Section */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              {t('highlights.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              {t('highlights.title')}
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightItems.map((highlight, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                className="bg-white dark:bg-brand-blue-800 p-6 rounded-2xl border border-slate-100 dark:border-brand-blue-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`h-12 w-12 rounded-xl ${highlightBgs[index]} flex items-center justify-center mb-5`}>
                  {highlightIcons[index]}
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{highlight.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 bg-white dark:bg-brand-blue-900 border-t border-b border-slate-100 dark:border-brand-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 relative">
              <ScrollReveal className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-blue-800">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=80"
                  alt={t('whyUs.imageAlt')}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-yellow-400 bg-brand-blue-950/60 px-2 py-1 rounded">
                    {t('whyUs.imageCaption')}
                  </span>
                  <h4 className="text-lg font-black mt-2">{t('whyUs.imageCaptionSub')}</h4>
                </div>
              </ScrollReveal>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow-400/20 rounded-2xl -z-0 blur" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue-600/10 rounded-full -z-0 blur-lg" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
                {t('whyUs.eyebrow')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
                {t('whyUs.title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('whyUs.subtitle')}
              </p>

              <div className="space-y-4">
                {whyUsItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-yellow-400 text-brand-blue-950 flex items-center justify-center shrink-0 mt-1">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-md">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-brand-blue-600 dark:text-brand-yellow-400 hover:opacity-80 transition-opacity"
                >
                  <span>{t('whyUs.readMore')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Courses */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              {t('featuredCourses.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              {t('featuredCourses.title')}
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('featuredCourses.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <ScrollReveal
                key={index}
                delay={index * 150}
                className="bg-white dark:bg-brand-blue-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-brand-blue-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={courseImages[index]}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-brand-yellow-400 text-brand-blue-950 font-extrabold text-xs px-3 py-1 rounded-full">
                    {course.age}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-slate-800 dark:text-white">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{course.desc}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-yellow-400">
                      {t('featuredCourses.keyHighlights')}
                    </span>
                    <ul className="space-y-1">
                      {course.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-brand-blue-700">
                    <button
                      onClick={() => openEnquiry(course.title)}
                      className="flex-1 py-2 rounded bg-brand-blue-600 hover:bg-brand-blue-500 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      {t('featuredCourses.enquireNow')}
                    </button>
                    <Link
                      href={`/${locale}/courses`}
                      className="p-2 rounded bg-slate-100 dark:bg-brand-blue-900 hover:bg-slate-200 dark:hover:bg-brand-blue-800 text-slate-700 dark:text-white transition-colors"
                      aria-label="View Course details"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/courses`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue-700 text-brand-yellow-400 font-bold text-sm hover:bg-brand-blue-600 shadow-md hover:scale-[1.02] transition-all"
            >
              <span>{t('featuredCourses.viewAll')}</span>
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Stats */}
      <section className="py-16 bg-brand-blue-900 text-white border-t border-b border-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statItems.map((stat, i) => (
              <div key={i} className="space-y-1.5 group">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-yellow-400 group-hover:scale-105 transition-transform duration-300">
                  {stat.val}
                </h3>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-white dark:bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              {t('testimonials.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              {t('testimonials.title')}
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto relative px-8">
            <ScrollReveal className="bg-slate-50 dark:bg-brand-blue-800 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-brand-blue-700 shadow-xl relative text-left">
              <div className="flex items-center gap-1 text-brand-yellow-500 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-md sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic mb-8">
                &quot;{testimonials[activeTestimonial].text}&quot;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-brand-blue-700 pt-6">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-brand-yellow-400 shadow"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-md">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider bg-brand-blue-100 dark:bg-brand-blue-900 text-brand-blue-700 dark:text-brand-yellow-400 px-2.5 py-0.5 rounded-full">
                    {testimonials[activeTestimonial].course}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white dark:bg-brand-blue-800 rounded-full border border-slate-200 dark:border-brand-blue-700 text-slate-600 dark:text-white shadow hover:bg-slate-50 dark:hover:bg-brand-blue-700 flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white dark:bg-brand-blue-800 rounded-full border border-slate-200 dark:border-brand-blue-700 text-slate-600 dark:text-white shadow hover:bg-slate-50 dark:hover:bg-brand-blue-700 flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center pt-8">
            <Link
              href={`/${locale}/testimonials`}
              className="text-xs font-bold text-brand-blue-600 dark:text-brand-yellow-400 hover:opacity-80 transition-all hover:underline"
            >
              {t('testimonials.readAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950 border-t border-b border-slate-100 dark:border-brand-blue-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              {t('faq.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              {t('faq.title')}
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-brand-blue-800 rounded-xl border border-slate-100 dark:border-brand-blue-700/50 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-800 dark:text-white hover:bg-slate-50/50 dark:hover:bg-brand-blue-800/25 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <span className="ml-4 shrink-0 h-6 w-6 rounded-full bg-brand-blue-50 dark:bg-brand-blue-900 text-brand-blue-600 dark:text-brand-yellow-400 flex items-center justify-center">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-brand-blue-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-20 bg-brand-blue-950 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow-400/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-900 rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 text-xs font-black uppercase tracking-widest">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{t('cta.eyebrow')}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t('cta.title')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => openEnquiry('General Inquiry')}
                className="rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-black px-8 py-4 text-base shadow-lg hover:shadow-brand-yellow-500/20 hover:scale-[1.02] transition-all cursor-pointer"
              >
                {t('cta.bookTrial')}
              </button>
              <Link
                href={`/${locale}/admission`}
                className="rounded-lg border-2 border-white/20 hover:border-white text-white font-bold px-8 py-3.5 text-base hover:bg-white/5 transition-all"
              >
                {t('cta.applyOnline')}
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-2">{t('cta.noCard')}</p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}