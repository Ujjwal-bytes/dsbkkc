'use client';

import React from 'react';
import {
  GraduationCap,
  MessageSquare,
  Binary,
  PenTool,
  Cpu,
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import ScrollReveal from '@/components/ScrollReveal';

type CourseDetail = {
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  benefits: string[];
  image: string;
};

export default function CoursesPage() {
  const { openEnquiry } = useEnquiry();

  const courses: CourseDetail[] = [
    {
      title: "Abacus",
      description: "A complete mental arithmetic and brain development program using the Japanese Soroban Abacus. It trains children to perform calculations mentally, improving spatial visualization, photographic memory, and logic.",
      ageGroup: "5 to 14 Years",
      duration: "8 Levels (3 months per level)",
      icon: <GraduationCap className="h-6 w-6" />,
      colorClass: "text-blue-600 dark:text-blue-400",
      bgClass: "bg-blue-50 dark:bg-blue-950/40",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Perform rapid addition, subtraction, multiplication & division mentally",
        "Dramatically improves concentration and focus span",
        "Enhances visualization skills and photographic memory",
        "Eliminates fear of numbers, boosting mathematical confidence"
      ]
    },
    {
      title: "English Speaking",
      description: "Our comprehensive communication and English speaking program focuses on conversational grammar, vocabulary building, pronunciation correction, public speaking, and body language styling.",
      ageGroup: "6 to 16 Years",
      duration: "3 Months (Basic / Advanced)",
      icon: <MessageSquare className="h-6 w-6" />,
      colorClass: "text-emerald-600 dark:text-emerald-400",
      bgClass: "bg-emerald-50 dark:bg-emerald-950/20",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Develop fluent, grammatically correct speaking habits",
        "Build massive confidence through mock presentations and speeches",
        "Enrich vocabulary and master standard phonetic pronunciation",
        "Overcome stage fear and improve overall classroom participation"
      ]
    },
    {
      title: "Vedic Maths",
      description: "Learn speed calculation methods originating from ancient Indian systems. This course teaches shortcut mental tricks to solve complex algebraic, arithmetic, and square root operations in seconds.",
      ageGroup: "10 to 16 Years",
      duration: "4 Months (Foundation & Advanced)",
      icon: <Binary className="h-6 w-6" />,
      colorClass: "text-amber-600 dark:text-amber-400",
      bgClass: "bg-amber-50 dark:bg-amber-950/20",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Calculate 10 to 15 times faster than standard school methods",
        "Excellent for solving cross-checking answers in school boards",
        "Essential mental asset for competitive and scholarship exams",
        "Reduces scratch calculations, saving precious exam time"
      ]
    },
    {
      title: "Handwriting",
      description: "Improve writing neatness, lettering symmetry, word spacing, and pen grip through our specialized print and cursive handwriting styling class. Perfect for children who struggle with readable school notes.",
      ageGroup: "6 to 15 Years",
      duration: "2 Months (Daily batches)",
      icon: <PenTool className="h-6 w-6" />,
      colorClass: "text-purple-600 dark:text-purple-400",
      bgClass: "bg-purple-50 dark:bg-purple-950/20",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Correct writing grip, preventing finger strain and hand fatigue",
        "Standardize font size, letter slants, and consistent word spacing",
        "Substantially improves writing speed without losing clarity",
        "Better readable handwriting directly impacts examiner scoring"
      ]
    },
    {
      title: "Robotics",
      description: "An engaging STEM (Science, Technology, Engineering, Math) course where students learn robot building, sensor mechanics, electrical connections, and basic drag-and-drop algorithmic coding.",
      ageGroup: "8 to 15 Years",
      duration: "3 Levels (3 months per level)",
      icon: <Cpu className="h-6 w-6" />,
      colorClass: "text-sky-600 dark:text-sky-400",
      bgClass: "bg-sky-50 dark:bg-sky-950/20",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Hands-on assembly of smart mechanical and sensor-based robots",
        "Teaches structural physics, circuit science, and algorithmic logic",
        "Encourages creative engineering thinking and teamwork",
        "Highly engaging STEM certificate to highlight scientific curiosity"
      ]
    },
    {
      title: "Tuition Classes",
      description: "Comprehensive daily academic coaching for students from 1st to 10th Standard. Covering all core school subjects like Mathematics, Science, English, Social Studies, and Local Languages.",
      ageGroup: "6 to 16 Years (1st to 10th Std)",
      duration: "Full Academic Year",
      icon: <BookOpen className="h-6 w-6" />,
      colorClass: "text-rose-600 dark:text-rose-400",
      bgClass: "bg-rose-50 dark:bg-rose-950/20",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&auto=format&fit=crop&q=80",
      benefits: [
        "Complete alignment with State Board, CBSE, and ICSE curricula",
        "Small batch sizes (Max 15) to guarantee personal learning care",
        "Regular weekly assessments and comprehensive progress reports",
        "Special exam preparation, revisions, and board question reviews"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20">
      
      {/* 1. Header banner */}
      <section className="bg-brand-blue-900 text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/20" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue-500/10 rounded-full blur-2xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Educational Programs
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Nurturing young minds with a perfect blend of cognitive skill-building modules and expert school tuitions.
          </p>
        </div>
      </section>

      {/* 2. Courses Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {courses.map((course, idx) => (
              <ScrollReveal
                key={idx}
                delay={(idx % 3) * 100}
                className="bg-white dark:bg-brand-blue-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-brand-blue-700 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={`${course.title} Classroom`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Float Tag */}
                  <span className="absolute top-4 right-4 bg-brand-yellow-400 text-brand-blue-950 font-black text-xs px-3.5 py-1 rounded-full shadow-md">
                    {course.ageGroup}
                  </span>
                  
                  {/* Duration Float Tag */}
                  <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/95 flex items-center gap-1 bg-brand-blue-950/65 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    <Clock className="h-3.5 w-3.5 text-brand-yellow-400" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                {/* Course Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left space-y-6">
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl ${course.bgClass} ${course.colorClass} flex items-center justify-center`}>
                        {course.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-brand-yellow-400 transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {course.description}
                    </p>
                  </div>

                  {/* Bullet Benefits */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-brand-yellow-400 flex items-center gap-1.5">
                      <Award className="h-4 w-4 shrink-0" />
                      <span>Key Benefits & Outcomes</span>
                    </span>
                    <ul className="space-y-2">
                      {course.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <div className="pt-6 border-t border-slate-100 dark:border-brand-blue-700">
                    <button
                      onClick={() => openEnquiry(course.title)}
                      className="w-full py-3.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-500 dark:bg-brand-yellow-500 dark:hover:bg-brand-yellow-400 text-white dark:text-brand-blue-950 font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                    >
                      <span>Submit Enquiry</span>
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Counselling Banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollReveal className="bg-gradient-to-r from-brand-blue-850 to-brand-blue-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center md:text-left md:flex items-center justify-between gap-8 text-white">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
              Unsure which program fits your child best?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dnyaneshwar Sir offers a personalized 15-minute counseling session to assess your child's aptitude and suggest the perfect learning track.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <button
              onClick={() => openEnquiry("Free Counseling Session")}
              className="px-6 py-3.5 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-950 font-black rounded-lg shadow-md hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap text-sm"
            >
              Request Call Back
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
