'use client';

import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  rating: number;
  course: string;
  text: string;
  date: string;
  avatar: string;
};

export default function TestimonialsPage() {
  // Static reviews list
  const [reviews, setReviews] = useState<TestimonialItem[]>([
    {
      id: 1,
      name: "Meera Deshmukh",
      role: "Parent of Aarav (Age 8)",
      rating: 5,
      course: "Abacus Program",
      text: "Enrolling Aarav in the Abacus course at DSB KKC was the best decision. His math anxiety has completely disappeared, and he can solve complex additions mentally in seconds! The personal attention here is unmatched.",
      date: "June 18, 2026",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Rajesh Kulkarni",
      role: "Parent of Tanvi (Age 12)",
      rating: 5,
      course: "English Speaking & Vedic Maths",
      text: "Tanvi attended the English Speaking and Vedic Maths courses. Her speaking confidence has skyrocketed, and her school grades have improved dramatically. Dnyaneshwar Sir and the team are exceptional educators.",
      date: "May 29, 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Sneha Patil",
      role: "Parent of Kabir (Age 10)",
      rating: 5,
      course: "Robotics for Kids",
      text: "The Robotics course here is so practical. Kabir loves assembling the kits and learning basic programming. It is not just rote learning; they actually teach scientific logic and critical thinking.",
      date: "May 12, 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Anjali Joshi",
      role: "Parent of Riya (Grade 9)",
      rating: 5,
      course: "Tuition Classes (1st-10th)",
      text: "Riya was struggling with Science and Algebra in 9th standard. The systematic coaching, frequent mock exams, and customized worksheets at DSB KKC helped her score 94% in her final terms! Highly recommended.",
      date: "April 20, 2026",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Vikram Rathi",
      role: "Parent of Neil (Age 7)",
      rating: 4,
      course: "Handwriting Improvement",
      text: "Neil's print handwriting was completely unreadable earlier. Within just two months of the daily styling classes, we saw a massive improvement in letter slants and spacing. Even his school teachers praised it.",
      date: "March 15, 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
    }
  ]);

  // Form State
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [courseTaken, setCourseTaken] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!userName.trim()) tempErrors.userName = 'Your name is required';
    if (!userRole.trim()) tempErrors.userRole = 'Please specify your relation (e.g. Parent of Rohan, Student)';
    if (!courseTaken) tempErrors.courseTaken = 'Please select a course';
    if (!reviewText.trim()) tempErrors.reviewText = 'Review text cannot be empty';
    if (reviewText.length < 10) tempErrors.reviewText = 'Please write a review of at least 10 characters';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Queue feedback
      setIsSuccess(true);
      
      // Optionally prepend the review in state for instant feedback!
      const newReview: TestimonialItem = {
        id: Date.now(),
        name: userName,
        role: userRole,
        rating: userRating,
        course: courseTaken,
        text: reviewText,
        date: "Just now",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80" // Default avatar
      };
      
      setReviews((prev) => [newReview, ...prev]);

      // Reset Form fields
      setUserName('');
      setUserRole('');
      setCourseTaken('');
      setUserRating(5);
      setReviewText('');
    } catch (err) {
      setErrorMsg('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-brand-blue-900 text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/20" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue-500/10 rounded-full blur-2xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Parents & Students Reviews
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read about real experiences of parents and students who have studied at DSB KKC Academy.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Testimonial Cards (7 columns) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <h2 className="text-2xl font-black text-brand-blue-800 dark:text-white mb-6 border-b border-slate-200 dark:border-brand-blue-800 pb-3">
                All Reviews ({reviews.length})
              </h2>

              <div className="space-y-6">
                {reviews.map((rev, idx) => (
                  <ScrollReveal
                    key={rev.id}
                    delay={idx * 50}
                    className="bg-white dark:bg-brand-blue-800 p-6 rounded-2xl border border-slate-200 dark:border-brand-blue-700 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Stars and Date Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-brand-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 fill-current ${
                              i < rev.rating ? 'text-brand-yellow-500' : 'text-slate-200 dark:text-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-semibold">{rev.date}</span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      "{rev.text}"
                    </p>

                    {/* Author metadata */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-brand-blue-700">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="h-11 w-11 rounded-full object-cover border-2 border-brand-yellow-400"
                      />
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">{rev.name}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">{rev.role}</p>
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider bg-brand-blue-50 dark:bg-brand-blue-900 text-brand-blue-600 dark:text-brand-yellow-400 px-2 py-0.5 rounded">
                          {rev.course}
                        </span>
                      </div>
                    </div>

                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right side: Submission Form (5 columns) */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-brand-blue-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-brand-blue-700 shadow-xl sticky top-28 text-left space-y-6">
                
                <div className="border-b border-slate-100 dark:border-brand-blue-700 pb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-brand-blue-600 dark:text-brand-yellow-400" />
                    <h3 className="font-extrabold text-lg text-slate-800 dark:text-white">Submit a Review</h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Your feedback motivates our team and guides other parents in choosing the right academy.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-6 text-center animate-fade-in space-y-4">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto animate-bounce" />
                    <h4 className="font-bold text-slate-800 dark:text-white text-lg">Thank You for Your Feedback!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                      Your review has been successfully posted. We truly appreciate you taking the time to share your experience!
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold text-xs rounded-md transition-colors cursor-pointer"
                    >
                      Write Another Review
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-150 dark:border-rose-900 text-xs flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                          errors.userName ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="e.g. Anita Deshmukh"
                      />
                      {errors.userName && <span className="text-[10px] text-rose-500 mt-1 block">{errors.userName}</span>}
                    </div>

                    {/* Relation/Role */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                        Relation / Role <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                          errors.userRole ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="e.g. Parent of Aarav (Age 8)"
                      />
                      {errors.userRole && <span className="text-[10px] text-rose-500 mt-1 block">{errors.userRole}</span>}
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                        Program Completed <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={courseTaken}
                        onChange={(e) => setCourseTaken(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                          errors.courseTaken ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                      >
                        <option value="" className="text-slate-800">Select Program</option>
                        <option value="Abacus Program" className="text-slate-800">Abacus Program</option>
                        <option value="English Speaking" className="text-slate-800">English Speaking Program</option>
                        <option value="Vedic Mathematics" className="text-slate-800">Vedic Mathematics</option>
                        <option value="Handwriting Improvement" className="text-slate-800">Handwriting Improvement</option>
                        <option value="Robotics for Kids" className="text-slate-800">Robotics for Kids</option>
                        <option value="Tuition Classes" className="text-slate-800">School Tuition (1st-10th)</option>
                      </select>
                      {errors.courseTaken && <span className="text-[10px] text-rose-500 mt-1 block">{errors.courseTaken}</span>}
                    </div>

                    {/* Star Rating selector */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((starVal) => (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setUserRating(starVal)}
                            className="p-1 text-brand-yellow-500 hover:scale-110 transition-transform cursor-pointer"
                            aria-label={`Rate ${starVal} stars`}
                          >
                            <Star
                              className={`h-6 w-6 fill-current ${
                                starVal <= userRating ? 'text-brand-yellow-500' : 'text-slate-200 dark:text-slate-700'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                        Your Review <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all resize-none ${
                          errors.reviewText ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="Write your detailed experience here..."
                      />
                      {errors.reviewText && <span className="text-[10px] text-rose-500 mt-1 block">{errors.reviewText}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-yellow-500 text-brand-blue-950 font-bold hover:bg-brand-yellow-400 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 cursor-pointer shadow transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Submitting review...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Feedback</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
