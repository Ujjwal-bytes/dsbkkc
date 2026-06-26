'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle2, User, Phone, Mail, BookOpen, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function AdmissionPage() {
  // Form States
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [standard, setStandard] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!studentName.trim()) tempErrors.studentName = 'Student name is required';
    if (!parentName.trim()) tempErrors.parentName = 'Parent/Guardian name is required';
    
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile) {
      tempErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(mobile)) {
      tempErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        tempErrors.email = 'Enter a valid email address';
      }
    }

    if (!course) tempErrors.course = 'Please select a course of interest';

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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      // Reset form
      setStudentName('');
      setParentName('');
      setMobile('');
      setEmail('');
      setStandard('');
      setCourse('');
      setMessage('');
    } catch (err) {
      setErrorMsg('Submission failed. Please try again or contact the academy office.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    { step: "1", title: "Online Registration", desc: "Submit the admission form online with correct student and course interests." },
    { step: "2", title: "Free Demo Class", desc: "Receive a call within 24 hours to schedule a free aptitude test and demo class." },
    { step: "3", title: "Batch Finalization", desc: "Choose from flexible weekday or weekend batch slots that match your child's schedule." },
    { step: "4", title: "Confirm Enrollment", desc: "Complete basic documentation, pay the registration fees, and begin your lessons!" }
  ];

  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20">
      
      {/* 1. Banner Section */}
      <section className="bg-brand-blue-900 text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/20" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue-500/10 rounded-full blur-2xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Admission & Enrollment
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Secure your seat at Pune's premier cognitive development and board tutoring academy.
          </p>
        </div>
      </section>

      {/* 2. Main content section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Process & Documents (5 cols) */}
            <div className="lg:col-span-5 space-y-10 text-left">
              
              {/* Admission Flow */}
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-brand-blue-800 dark:text-white">
                  Our Admission Process
                </h2>
                <div className="space-y-6">
                  {processSteps.map((s, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      {/* Left timeline circle */}
                      <div className="flex flex-col items-center">
                        <div className="h-9 w-9 rounded-full bg-brand-blue-600 dark:bg-brand-blue-500 text-white font-extrabold text-sm flex items-center justify-center shrink-0 z-10 shadow-md">
                          {s.step}
                        </div>
                        {idx < processSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-brand-blue-200 dark:bg-brand-blue-800 absolute top-9 left-4.5" />
                        )}
                      </div>
                      {/* Description */}
                      <div className="space-y-1 pt-0.5">
                        <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight">
                          {s.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required documents cards */}
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-blue-800 border border-slate-200 dark:border-brand-blue-700 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-brand-blue-700 pb-3">
                  <FileText className="h-5 w-5 text-brand-blue-600 dark:text-brand-yellow-400" />
                  <h3 className="font-extrabold text-base text-slate-800 dark:text-white">Documents Required at Orientation</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400 shrink-0" />
                    <span>2 Passport-size photographs of the student</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400 shrink-0" />
                    <span>Copy of Student's Aadhaar Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400 shrink-0" />
                    <span>Copy of Parent's Aadhaar Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400 shrink-0" />
                    <span>Previous year's school academic report card (for tuition classes)</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Admission Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal className="bg-white dark:bg-brand-blue-800 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-brand-blue-700 shadow-xl text-left space-y-6">
                
                {isSuccess ? (
                  <div className="py-10 text-center animate-fade-in space-y-6">
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto animate-bounce" />
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white">
                      Online Application Submitted!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for choosing DSB KKC Academy. Your application is successfully registered in our admissions system.
                    </p>
                    
                    <div className="max-w-md mx-auto bg-slate-50 dark:bg-brand-blue-900 p-5 rounded-2xl border border-slate-100 dark:border-brand-blue-700 text-left space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-brand-blue-600 dark:text-brand-yellow-400">
                        What Happens Next:
                      </h4>
                      <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-300 space-y-2">
                        <li>Our admissions representative will call you in 24 hours.</li>
                        <li>We will schedule your child's free diagnostic evaluation.</li>
                        <li>A trial/demo session slot will be locked.</li>
                        <li>Batch timing preferences will be aligned.</li>
                      </ol>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold text-sm rounded-lg shadow-md transition-colors cursor-pointer"
                    >
                      Fill Another Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="border-b border-slate-200 dark:border-brand-blue-700 pb-4">
                      <h3 className="font-black text-xl text-slate-800 dark:text-white">Online Application Form</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Please fill in the required details accurately. Fields marked with asterisk (<span className="text-rose-500">*</span>) are mandatory.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/25 text-rose-600 dark:text-rose-400 border border-rose-150 dark:border-rose-900 text-sm flex items-start gap-2.5">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Student & Parent names */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Student Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all ${
                              errors.studentName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                            }`}
                            placeholder="Enter student's name"
                          />
                        </div>
                        {errors.studentName && <span className="text-xs text-rose-500 block mt-1">{errors.studentName}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Parent / Guardian Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all ${
                              errors.parentName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                            }`}
                            placeholder="Enter parent's name"
                          />
                        </div>
                        {errors.parentName && <span className="text-xs text-rose-500 block mt-1">{errors.parentName}</span>}
                      </div>
                    </div>

                    {/* Contact Mobile & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Contact Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            maxLength={10}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all ${
                              errors.mobile ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                            }`}
                            placeholder="10-digit number"
                          />
                        </div>
                        {errors.mobile && <span className="text-xs text-rose-500 block mt-1">{errors.mobile}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all ${
                              errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                            }`}
                            placeholder="parent@domain.com"
                          />
                        </div>
                        {errors.email && <span className="text-xs text-rose-500 block mt-1">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Standard & Course selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Standard / School Class
                        </label>
                        <select
                          value={standard}
                          onChange={(e) => setStandard(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-brand-blue-700 bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all"
                        >
                          <option value="" className="text-slate-800">Select Standard</option>
                          <option value="Preschool" className="text-slate-800">Preschool / KG</option>
                          <option value="1st-4th" className="text-slate-800">1st to 4th Standard</option>
                          <option value="5th-7th" className="text-slate-800">5th to 7th Standard</option>
                          <option value="8th-10th" className="text-slate-800">8th to 10th Standard</option>
                          <option value="Other" className="text-slate-800">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Course Interested In <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <BookOpen className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all ${
                              errors.course ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                            }`}
                          >
                            <option value="" className="text-slate-800">Select Course</option>
                            <option value="Abacus" className="text-slate-800">Abacus Program</option>
                            <option value="English Speaking" className="text-slate-800">English Speaking Program</option>
                            <option value="Vedic Maths" className="text-slate-800">Vedic Mathematics</option>
                            <option value="Handwriting" className="text-slate-800">Handwriting Improvement</option>
                            <option value="Robotics" className="text-slate-800">Robotics for Kids</option>
                            <option value="Tuition Classes" className="text-slate-800">Coaching (1st to 10th Standard)</option>
                          </select>
                        </div>
                        {errors.course && <span className="text-xs text-rose-500 block mt-1">{errors.course}</span>}
                      </div>
                    </div>

                    {/* Message / Remarks */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Additional Queries / Student Background
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-brand-blue-700 bg-slate-50 dark:bg-brand-blue-900/30 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all resize-none"
                        placeholder="Share details about any specific requirements, current grades, or math difficulties here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-yellow-500 text-brand-blue-950 font-black hover:bg-brand-yellow-400 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 cursor-pointer shadow-lg hover:scale-[1.01] transition-transform mt-2 text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <span>Submit Admission Application</span>
                      )}
                    </button>

                  </form>
                )}

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
