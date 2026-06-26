'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

// Custom Type for Testimonials
type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  course: string;
  avatar: string;
};

export default function HomePage() {
  const { openEnquiry } = useEnquiry();

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Meera Deshmukh",
      role: "Parent of Aarav (Age 8)",
      text: "Enrolling Aarav in the Abacus course at DSB KKC was the best decision. His math anxiety has completely disappeared, and he can solve complex additions mentally in seconds! The personal attention here is unmatched.",
      rating: 5,
      course: "Abacus Program",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Rajesh Kulkarni",
      role: "Parent of Tanvi (Age 12)",
      text: "Tanvi attended the English Speaking and Vedic Maths courses. Her speaking confidence has skyrocketed, and her school grades have improved dramatically. Dnyaneshwar Sir and the team are exceptional educators.",
      rating: 5,
      course: "English Speaking & Vedic Maths",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Sneha Patil",
      role: "Parent of Kabir (Age 10)",
      text: "The Robotics course here is so practical. Kabir loves assembling the kits and learning basic programming. It is not just rote learning; they actually teach scientific logic and critical thinking.",
      rating: 5,
      course: "Robotics for Kids",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    }
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the right age to enroll children in the Abacus program?",
      a: "The ideal age for Abacus is between 5 and 14 years. This is the period of maximum brain development, and training at this age boosts memory, visualization, and concentration skills effectively."
    },
    {
      q: "Do you offer demo classes for new students?",
      a: "Yes, we offer 1 free trial/demo class for Abacus, Vedic Maths, and Robotics. This allows parents and students to experience our teaching methodology before committing to a full course."
    },
    {
      q: "How do Vedic Maths techniques benefit students?",
      a: "Vedic Maths provides speed calculation techniques that help students solve math problems 10-15 times faster. It is highly beneficial for school exams, scholarship tests, and competitive examinations."
    },
    {
      q: "Are tuition classes aligned with CBSE and State Board syllabi?",
      a: "Yes! Our tuition classes for 1st to 10th standard cover State Board, CBSE, and ICSE syllabi. We focus on concept clarity, regular tests, and thorough exam preparation."
    },
    {
      q: "What is the student-to-teacher ratio in a batch?",
      a: "To ensure personal attention, we keep our batch sizes small. The maximum number of students per batch is limited to 15, allowing teachers to address each child's individual learning needs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Notice Board Announcements
  const notices = [
    {
      date: "July 01, 2026",
      title: "New Batches Starting soon!",
      desc: "Fresh batches for Abacus (Level 1), Vedic Maths, and Robotics are starting from Monday. Limited seats available. Contact office to reserve.",
      badge: "Batches"
    },
    {
      date: "June 28, 2026",
      title: "Free Handwriting & Rubik's Cube Workshop",
      desc: "A special 2-hour free workshop is organized this Saturday at 10:00 AM. Open for kids aged 6-15. Registration is compulsory.",
      badge: "Workshop"
    },
    {
      date: "June 25, 2026",
      title: "Regular Academic Tuitions Admission Open",
      desc: "Admissions are actively open for school tuitions (1st to 10th Standard) for all subjects. Daily batches, weekly mock tests.",
      badge: "Admissions"
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-800 via-brand-blue-900 to-brand-blue-950 py-20 md:py-28 text-white">
        {/* Background Decorative Circles */}
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-brand-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-brand-blue-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Admissions Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Admissions Open for 2026 - 27</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Empowering Students with <span className="text-brand-yellow-400">Skills</span> for the Future
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Join **DSB KKC (Dnyaneshwar Barate's Academy)** to experience premium academic tutoring and life-changing skill programs like Abacus, Vedic Maths, and Robotics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openEnquiry()}
                  className="rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-black px-7 py-4 text-base shadow-lg hover:shadow-brand-yellow-500/20 hover:scale-[1.03] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-white/20 hover:border-white text-white font-bold px-7 py-3.5 text-base hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mini Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md">
                <div>
                  <h4 className="text-2xl font-extrabold text-brand-yellow-400">2500+</h4>
                  <p className="text-xs text-slate-400 font-semibold">Students Mentored</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-brand-yellow-400">10+</h4>
                  <p className="text-xs text-slate-400 font-semibold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-brand-yellow-400">6+</h4>
                  <p className="text-xs text-slate-400 font-semibold">Expert Courses</p>
                </div>
              </div>

            </div>

            {/* Right Interactive Card / Notice Board */}
            <div className="lg:col-span-5">
              <ScrollReveal className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl space-y-6 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-brand-yellow-500/25 flex items-center justify-center text-brand-yellow-400">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-lg text-white">Notice Board</h3>
                  </div>
                  <span className="text-[10px] bg-brand-blue-700 font-bold px-2 py-0.5 rounded text-slate-300">Live Updates</span>
                </div>

                <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">
                  {notices.map((notice, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-brand-yellow-400 uppercase tracking-wide">
                          {notice.badge}
                        </span>
                        <span className="text-[10px] text-slate-400">{notice.date}</span>
                      </div>
                      <h4 className="font-bold text-sm text-white">{notice.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{notice.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openEnquiry("General Inquiry")}
                  className="w-full text-center text-xs font-bold text-brand-yellow-400 hover:text-brand-yellow-300 hover:underline flex items-center justify-center gap-1 cursor-pointer pt-2"
                >
                  <span>Enquire about upcoming schedules</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Highlights Section */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              Designed to Deliver Educational Excellence
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We focus on building strong cognitive bases and academic foundations for children. Here is what makes us different.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Teachers",
                desc: "Learn from highly trained subject experts, personally mentored and guided by founder Dnyaneshwar Barate.",
                icon: <GraduationCap className="h-6 w-6 text-brand-blue-600 dark:text-brand-blue-400" />,
                bg: "bg-blue-50 dark:bg-brand-blue-900/40"
              },
              {
                title: "Practical Learning",
                desc: "We believe in hands-on learning. Robotics kits, math tools, and interactive conversations drive our modules.",
                icon: <Zap className="h-6 w-6 text-amber-600" />,
                bg: "bg-amber-50 dark:bg-amber-950/20"
              },
              {
                title: "Affordable Fees",
                desc: "Premium training made accessible. We offer top-tier education with flexible, affordable installment payment plans.",
                icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
                bg: "bg-emerald-50 dark:bg-emerald-950/20"
              },
              {
                title: "Small Batch Sizes",
                desc: "Maximum 15 students per batch. This allows personal attention, regular assessments, and tailored pace for every kid.",
                icon: <Users className="h-6 w-6 text-purple-600" />,
                bg: "bg-purple-50 dark:bg-purple-950/20"
              }
            ].map((highlight, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                className="bg-white dark:bg-brand-blue-800 p-6 rounded-2xl border border-slate-100 dark:border-brand-blue-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`h-12 w-12 rounded-xl ${highlight.bg} flex items-center justify-center mb-5`}>
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {highlight.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-brand-blue-900 border-t border-b border-slate-100 dark:border-brand-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual graphic */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-blue-800">
                {/* Visual Placeholder image using high quality educational unsplash */}
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=80"
                  alt="Teacher conducting interactive session"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-yellow-400 bg-brand-blue-950/60 px-2 py-1 rounded">
                    DSB KKC Academy
                  </span>
                  <h4 className="text-lg font-black mt-2">Nurturing Minds, Building Leaders</h4>
                </div>
              </ScrollReveal>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow-400/20 rounded-2xl -z-0 blur" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue-600/10 rounded-full -z-0 blur-lg" />
            </div>

            {/* Right Column: Key details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
                Why Parents Trust Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
                Empowering Kids Beyond the Textbooks
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                At DSB KKC, we don't just focus on school curriculum grades. We focus on enhancing brain power, improving communication confidence, and introducing children to cutting-edge skills.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Holistic Brain Development",
                    desc: "Our Abacus and Vedic Maths programs trigger left-right brain synchronization, improving spatial reasoning and photographic memory."
                  },
                  {
                    title: "Modern STEM Exposure",
                    desc: "Robotics classes spark engineering interest early on, teaching concepts of mechanics, electronics, and algorithms."
                  },
                  {
                    title: "Academic Focus",
                    desc: "Tuition programs follow rigorous concept clearing, revision loops, weekly mock tests, and systematic problem analysis."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-yellow-400 text-brand-blue-950 flex items-center justify-center shrink-0 mt-1">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-md">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-brand-blue-600 dark:text-brand-yellow-400 hover:opacity-80 transition-opacity"
                >
                  <span>Read more about our teaching philosophy</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Courses Section */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              Our Premium Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              Featured Academy Programs
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our structured course tracks designed for children from preschool to high school.
            </p>
          </div>

          {/* Courses Grid (Showing 3 main ones on Home, directing to /courses for all) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Abacus Brain Development",
                desc: "A globally recognized system to speed up arithmetic calculations, improve focus, and develop spatial and mental visual memory in kids.",
                age: "5 to 14 Years",
                benefits: ["Mental Arithmetic Speed", "Enhanced Concentration", "Photographic Memory"],
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&auto=format&fit=crop&q=80"
              },
              {
                title: "Robotics for Kids",
                desc: "An engaging STEM course introducing kids to mechanical assembly, electronic sensor logic, and basic robot programming.",
                age: "8 to 15 Years",
                benefits: ["Hands-on Assembly kits", "Logical & STEM thinking", "Basic Coding Fundamentals"],
                image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&auto=format&fit=crop&q=80"
              },
              {
                title: "1st to 10th Tuitions",
                desc: "Comprehensive school academic support covering Math, Science, English, and Social Studies. Tailored for CBSE & State Boards.",
                age: "6 to 16 Years",
                benefits: ["Daily Concept Clearing", "Weekly mock assessments", "Small Batches, Max Care"],
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&auto=format&fit=crop&q=80"
              }
            ].map((course, index) => (
              <ScrollReveal
                key={index}
                delay={index * 150}
                className="bg-white dark:bg-brand-blue-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-brand-blue-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-brand-yellow-400 text-brand-blue-950 font-extrabold text-xs px-3 py-1 rounded-full">
                    {course.age}
                  </span>
                </div>

                {/* Course Details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-slate-800 dark:text-white">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-600 dark:text-brand-yellow-400">
                      Key Highlights:
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

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-brand-blue-700">
                    <button
                      onClick={() => openEnquiry(course.title)}
                      className="flex-1 py-2 rounded bg-brand-blue-600 hover:bg-brand-blue-500 text-white text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Enquire Now
                    </button>
                    <Link
                      href="/courses"
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

          {/* Direct to all courses */}
          <div className="text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue-700 text-brand-yellow-400 font-bold text-sm hover:bg-brand-blue-600 shadow-md hover:scale-[1.02] transition-all"
            >
              <span>View All Academy Courses</span>
              <BookOpen className="h-4.5 w-4.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Student Achievements & Stats */}
      <section className="py-16 bg-brand-blue-900 text-white border-t border-b border-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "2,500+", desc: "Students Mentored" },
              { val: "10+", desc: "Years of Trust" },
              { val: "15+", desc: "Experienced Mentors" },
              { val: "98%", desc: "Happy Parents" }
            ].map((stat, i) => (
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

      {/* 6. Testimonials Section */}
      <section className="py-20 bg-white dark:bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              Real Stories, Real Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              What Our Parents & Students Say
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
          </div>

          {/* Testimonial slider */}
          <div className="max-w-4xl mx-auto relative px-8">
            <ScrollReveal className="bg-slate-50 dark:bg-brand-blue-800 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-brand-blue-700 shadow-xl relative text-left">
              {/* Star rating */}
              <div className="flex items-center gap-1 text-brand-yellow-500 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-md sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic mb-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Author Info */}
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

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white dark:bg-brand-blue-800 rounded-full border border-slate-200 dark:border-brand-blue-700 text-slate-600 dark:text-white shadow hover:bg-slate-50 dark:hover:bg-brand-blue-700 flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-white dark:bg-brand-blue-800 rounded-full border border-slate-200 dark:border-brand-blue-700 text-slate-600 dark:text-white shadow hover:bg-slate-50 dark:hover:bg-brand-blue-700 flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center pt-8">
            <Link
              href="/testimonials"
              className="text-xs font-bold text-brand-blue-600 dark:text-brand-yellow-400 hover:opacity-80 transition-all hover:underline"
            >
              Read all parent reviews & submit your feedback
            </Link>
          </div>

        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950 border-t border-b border-slate-100 dark:border-brand-blue-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
          </div>

          {/* Accordion List */}
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

      {/* 8. Contact CTA Section */}
      <section className="py-20 bg-brand-blue-950 text-white relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow-400/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-900 rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl text-center space-y-6">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-400 text-xs font-black uppercase tracking-widest">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Invest in Your Child's Future</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Give Your Child an Academic Edge?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Book a free counseling and demo class session with Dnyaneshwar Sir. Let's discuss how we can partner to help your child excel.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => openEnquiry("General Inquiry")}
                className="rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-black px-8 py-4 text-base shadow-lg hover:shadow-brand-yellow-500/20 hover:scale-[1.02] transition-all cursor-pointer"
              >
                Book Free Trial Session
              </button>
              <Link
                href="/admission"
                className="rounded-lg border-2 border-white/20 hover:border-white text-white font-bold px-8 py-3.5 text-base hover:bg-white/5 transition-all"
              >
                Apply Online Now
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              No credit card required. Trial sessions are completely free of charge.
            </p>

          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
