'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Your name is required';
    
    // Phone validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!phone) {
      tempErrors.phone = 'Mobile number is required';
    } else if (!mobileRegex.test(phone)) {
      tempErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      tempErrors.email = 'Enter a valid email address';
    }

    if (!subject.trim()) tempErrors.subject = 'Subject is required';
    if (!message.trim()) tempErrors.message = 'Message is required';

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
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Academy Office",
      detail: "+91 98765 43210",
      subDetail: "Mon-Sat: 9:00 AM to 7:00 PM",
      link: "tel:+919876543210"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Admissions",
      detail: "info@dsbkcc.com",
      subDetail: "Quick responses in 12 hours",
      link: "mailto:info@dsbkcc.com"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "WhatsApp Helpline",
      detail: "Chat Live on Mobile",
      subDetail: "Available for urgent queries",
      link: "https://wa.me/919876543210"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Campus",
      detail: "Katraj, Pune, MH",
      subDetail: "Shop No. 4, Barate Complex",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-brand-blue-950 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-brand-blue-900 text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-950/20" />
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue-500/10 rounded-full blur-2xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Contact DSB KKC
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have questions about fees, batches, or schedules? Get in touch with our team directly.
          </p>
        </div>
      </section>

      {/* 2. Contact cards row */}
      <section className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="bg-white dark:bg-brand-blue-850 p-5 rounded-2xl border border-slate-200 dark:border-brand-blue-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all flex flex-col items-center text-center space-y-3 group"
            >
              <div className="h-11 w-11 rounded-xl bg-brand-blue-50 dark:bg-brand-blue-900 text-brand-blue-600 dark:text-brand-yellow-400 flex items-center justify-center group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-950 transition-colors">
                {info.icon}
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-300">
                  {info.title}
                </h4>
                <p className="font-extrabold text-slate-800 dark:text-white text-sm sm:text-base mt-1">
                  {info.detail}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-455">
                  {info.subDetail}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Form & Map split panel */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left pane: Office info & Maps (5 cols) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-brand-blue-800 dark:text-white">
                  Visit Our Academy
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Parents are always welcome to visit our physical office during working hours to check our classrooms, abacus desks, and robotics assembly tables in person.
                </p>
              </div>

              {/* Office card details */}
              <div className="bg-white dark:bg-brand-blue-800 p-6 rounded-3xl border border-slate-200 dark:border-brand-blue-750 shadow-sm space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-brand-yellow-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Headquarters</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed mt-0.5">
                      Shop No. 4, Barate Complex, Near Shivaji Statue, Katraj, Pune, Maharashtra 411046
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="h-5 w-5 text-brand-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mt-0.5">
                      Monday to Saturday: 9:00 AM to 7:00 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Iframe */}
              <div className="rounded-3xl overflow-hidden border border-slate-250 dark:border-brand-blue-700 shadow-md aspect-[4/3] w-full">
                {/* Embed standard Google map for Pune Katraj */}
                <iframe
                  title="DSB KKC Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8453412534575!2d73.8543431!3d18.4452123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eab16c52b2df%3A0xe21fdfbf3aebae8a!2sKatraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719245362911!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Right pane: Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal className="bg-white dark:bg-brand-blue-800 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-brand-blue-700 shadow-xl text-left space-y-6">
                
                {isSuccess ? (
                  <div className="py-12 text-center animate-fade-in space-y-4">
                    <CheckCircle className="h-14 w-14 text-emerald-500 mx-auto animate-bounce" />
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white">Message Sent Successfully!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting DSB KKC Academy. Your message has been received. A representative will review your query and email or call you back shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold text-xs rounded-md shadow transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="border-b border-slate-100 dark:border-brand-blue-700 pb-4">
                      <h3 className="font-black text-xl text-slate-800 dark:text-white">Leave Us a Message</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Fill in the details below and we will get back to you as soon as possible.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-150 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-slate-55 dark:bg-brand-blue-900/30 text-slate-850 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="e.g. Rahul Patil"
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 block mt-0.5">{errors.name}</span>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-2.5 rounded-lg border bg-slate-55 dark:bg-brand-blue-900/30 text-slate-850 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                            errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                          }`}
                          placeholder="parent@example.com"
                        />
                        {errors.email && <span className="text-[10px] text-rose-500 block mt-0.5">{errors.email}</span>}
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          className={`w-full px-4 py-2.5 rounded-lg border bg-slate-55 dark:bg-brand-blue-900/30 text-slate-850 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                            errors.phone ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                          }`}
                          placeholder="10-digit number"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 block mt-0.5">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-slate-55 dark:bg-brand-blue-900/30 text-slate-850 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all ${
                          errors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="e.g. Enquiry regarding Abacus levels & fee details"
                      />
                      {errors.subject && <span className="text-[10px] text-rose-500 block mt-0.5">{errors.subject}</span>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Your Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-slate-55 dark:bg-brand-blue-900/30 text-slate-850 dark:text-white text-xs outline-none focus:ring-1 focus:ring-brand-blue-500 transition-all resize-none ${
                          errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-brand-blue-700'
                        }`}
                        placeholder="Write your detailed questions or remarks here..."
                      />
                      {errors.message && <span className="text-[10px] text-rose-500 block mt-0.5">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-yellow-500 text-brand-blue-950 font-black hover:bg-brand-yellow-400 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 cursor-pointer shadow transition-all hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
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
