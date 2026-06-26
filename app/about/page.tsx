'use client';

import React from 'react';
import {
  GraduationCap,
  Target,
  Compass,
  Heart,
  Award,
  Users,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  const values = [
    {
      title: "Child-Centric Focus",
      desc: "Every child learns at a different pace. We customize our attention and teaching speed to match the student's absorption capability.",
      icon: <Heart className="h-6 w-6 text-rose-500" />
    },
    {
      title: "Practical STEM Education",
      desc: "We focus on doing over memorizing. Whether assembly in robotics or calculating on the physical abacus, action drives understanding.",
      icon: <Compass className="h-6 w-6 text-brand-yellow-600" />
    },
    {
      title: "Academic Rigor & Trust",
      desc: "We hold ourselves to high tutoring standards. Regular weekly assessments and feedback loops keep parent and tutor in complete alignment.",
      icon: <Target className="h-6 w-6 text-brand-blue-500" />
    },
    {
      title: "Integrity & Value",
      desc: "Honesty in fees, transparent coaching progress, and absolute dedication to children's career advancement are our absolute guidelines.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20">
      
      {/* 1. Page Banner / Header */}
      <section className="bg-brand-blue-900 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/20" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue-500/10 rounded-full blur-2xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            About Our Academy
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Empowering Pune's youth with advanced cognitive skills and strong school academic bases since 2016.
          </p>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="py-20 bg-white dark:bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder image */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-brand-blue-800">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80"
                  alt="Dnyaneshwar Barate - Founder of DSB KKC Academy"
                  className="w-full h-[480px] object-cover"
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <h3 className="text-xl font-extrabold">Dnyaneshwar Barate</h3>
                  <p className="text-xs text-brand-yellow-400 font-bold uppercase tracking-wider">Founder & Director</p>
                </div>
              </ScrollReveal>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-yellow-400/20 rounded-2xl -z-0 blur" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-brand-blue-500/15 rounded-full -z-0 blur-md" />
            </div>

            {/* Founder Story & Message */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
                Meet the Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight leading-tight">
                Dedicated to Igniting Young Minds
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                "Welcome to **DSB KKC**. Over the last decade, I have observed that school textbooks represent only one component of education. In this rapidly evolving world, kids need highly developed analytical brains, self-confidence, and a hands-on technical perspective to thrive."
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
                "Our academy was founded to bridge this gap. By combining basic cognitive enhancers like Abacus and Vedic Mathematics with modern STEM Robotics and robust board tutoring, we ensure your child receives an education that empowers their future."
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Over 10 years of personal teaching experience.",
                  "Pioneered customized Abacus training in Katraj, Pune.",
                  "Mentored 2,500+ kids into math-confident achievers.",
                  "Committed to quality coaching at affordable fees."
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-200">
                    <CheckCircle className="h-5 w-5 text-brand-yellow-500 shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => openEnquiry("General Inquiry")}
                  className="rounded-lg bg-brand-blue-600 hover:bg-brand-blue-500 dark:bg-brand-yellow-500 dark:hover:bg-brand-yellow-400 text-white dark:text-brand-blue-950 font-bold px-6 py-3 text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Book a counseling session
                </button>
                <a
                  href="tel:+919876543210"
                  className="text-sm font-extrabold text-brand-blue-600 dark:text-brand-yellow-400 hover:opacity-80"
                >
                  Call office: +91 98765 43210
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-20 bg-slate-50 dark:bg-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vision */}
            <ScrollReveal className="bg-white dark:bg-brand-blue-800 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-brand-blue-700 text-left space-y-4">
              <div className="h-12 w-12 rounded-xl bg-brand-blue-50 dark:bg-brand-blue-900 text-brand-blue-600 dark:text-brand-yellow-400 flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To build a premier, highly trusted coaching ecosystem that democratizes cognitive skill training and quality school academics. We aim to inspire academic excellence, critical scientific thinking, and communication fluency in children, raising a future generation of skilled and confident problem-solvers.
              </p>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal
              delay={200}
              className="bg-white dark:bg-brand-blue-800 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-brand-blue-700 text-left space-y-4"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-yellow-50 dark:bg-brand-blue-900 text-brand-yellow-600 dark:text-brand-yellow-400 flex items-center justify-center">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Our mission is to deliver comprehensive, child-centric coaching that merges scientific brain training (Abacus, Vedic Mathematics) with cutting-edge STEM literacy (Robotics) and rigorous board coaching (1st to 10th Standard). We strive to maintain small batches, expert instruction, and highly affordable pricing.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-white dark:bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
              What Guides Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue-800 dark:text-white tracking-tight">
              Our Core Institutional Values
            </h2>
            <div className="h-1.5 w-20 bg-brand-yellow-400 rounded-full mx-auto" />
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 100}
                className="bg-slate-50 dark:bg-brand-blue-800 p-6 rounded-2xl border border-slate-100 dark:border-brand-blue-700 text-left hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-brand-blue-900 shadow-sm flex items-center justify-center mb-5 border border-slate-100 dark:border-brand-blue-700">
                  {value.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Trust stats / CTA */}
      <section className="py-16 bg-brand-blue-900 text-white text-center mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/25" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl font-black text-white leading-tight">
            Ready to experience the DSB KKC difference?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Enroll your child in our programs today and witness their transformation into a confident, analytical, and math-friendly achiever.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnquiry("General Inquiry")}
              className="rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-black px-8 py-4 shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
            >
              Get a Free Counselling & Demo Class
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
