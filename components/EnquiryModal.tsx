'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function EnquiryModal() {
  const { isOpen, selectedCourse, closeEnquiry } = useEnquiry();
  
  // Form State
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

  // Synchronize course with global state
  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      setCourse('');
    }
  }, [selectedCourse, isOpen]);

  // Handle escape key to close
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
// Handle escape key to close modal
  useEffect(() => {
    if (!isClient) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiry();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeEnquiry, isClient]);

  if (!isOpen) return null;

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!studentName.trim()) tempErrors.studentName = 'Student name is required';
    if (!parentName.trim()) tempErrors.parentName = 'Parent/Guardian name is required';
    
    // Mobile: 10 digits
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile) {
      tempErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(mobile)) {
      tempErrors.mobile = 'Enter a valid 10-digit mobile number starting with 6-9';
    }

    // Email format
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        tempErrors.email = 'Enter a valid email address';
      }
    }

    if (!course) tempErrors.course = 'Please select a course';
    
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
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
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
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-blue-950/75 backdrop-blur-sm transition-opacity" 
        onClick={closeEnquiry}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-brand-blue-800 border border-slate-200 dark:border-brand-blue-700 animate-fade-in-up">
        {/* Header */}
        <div className="bg-brand-blue-600 dark:bg-brand-blue-900 px-6 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold">Admission & Course Enquiry</h3>
            <p className="text-xs text-brand-yellow-300 font-medium">Take the first step towards a brighter future</p>
          </div>
          <button
            onClick={closeEnquiry}
            className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center animate-fade-in">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Enquiry Submitted Successfully!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-6">
                Thank you for contacting DSB KKC Academy. Our admissions representative will call you within 24 hours to guide you further.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  closeEnquiry();
                }}
                className="px-6 py-2.5 rounded-lg bg-brand-blue-600 text-white font-semibold shadow-md hover:bg-brand-blue-500 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                  Student Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm ${
                    errors.studentName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                  }`}
                  placeholder="Enter student's name"
                />
                {errors.studentName && <span className="text-xs text-rose-500 mt-1 block">{errors.studentName}</span>}
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                  Parent / Guardian Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm ${
                    errors.parentName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                  }`}
                  placeholder="Enter parent's name"
                />
                {errors.parentName && <span className="text-xs text-rose-500 mt-1 block">{errors.parentName}</span>}
              </div>

              {/* Two columns: Mobile & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm ${
                      errors.mobile ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                    }`}
                    placeholder="10-digit number"
                  />
                  {errors.mobile && <span className="text-xs text-rose-500 mt-1 block">{errors.mobile}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                    }`}
                    placeholder="optional@domain.com"
                  />
                  {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Two columns: Standard & Course */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                    Standard / Class
                  </label>
                  <select
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-brand-blue-700 bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm"
                  >
                    <option value="" className="text-slate-800">Select Standard</option>
                    <option value="Preschool" className="text-slate-800">Preschool / Kindergarten</option>
                    <option value="1st-4th" className="text-slate-800">1st to 4th Standard</option>
                    <option value="5th-7th" className="text-slate-800">5th to 7th Standard</option>
                    <option value="8th-10th" className="text-slate-800">8th to 10th Standard</option>
                    <option value="Other" className="text-slate-800">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                    Course Interested In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm ${
                      errors.course ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                    }`}
                  >
                    <option value="" className="text-slate-800">Select Course</option>
                    <option value="Abacus" className="text-slate-800">Abacus Program</option>
                    <option value="English Speaking" className="text-slate-800">English Speaking Program</option>
                    <option value="Vedic Maths" className="text-slate-800">Vedic Mathematics</option>
                    <option value="Handwriting" className="text-slate-800">Handwriting Improvement</option>
                    <option value="Robotics" className="text-slate-800">Robotics for Kids</option>
                    <option value="Tuition Classes" className="text-slate-800">Tuition (1st to 10th Standard)</option>
                    <option value="General Inquiry" className="text-slate-800">General Inquiry</option>
                  </select>
                  {errors.course && <span className="text-xs text-rose-500 mt-1 block">{errors.course}</span>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                  Message / Queries
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-brand-blue-700 bg-slate-50 dark:bg-brand-blue-900/40 text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue-500 outline-none transition-all text-sm resize-none"
                  placeholder="Enter any questions or requirements here..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-yellow-500 text-brand-blue-950 font-bold hover:bg-brand-yellow-400 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 hover:scale-[1.01] transition-all cursor-pointer shadow-lg mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
