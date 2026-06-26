'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-40 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-700 text-brand-yellow-400 shadow-lg hover:bg-brand-blue-600 hover:text-brand-yellow-300 transition-all duration-300 hover:scale-110 border border-brand-yellow-400/20 animate-fade-in"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
