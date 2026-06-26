'use client';

import React, { useState, useEffect } from 'react';
import { X, Megaphone } from 'lucide-react';
import Link from 'next/link';

export default function NoticeTicker() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user dismissed the announcement in this session
    const isDismissed =
      typeof sessionStorage !== 'undefined'
        ? sessionStorage.getItem('announcement-dismissed')
        : null;
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('announcement-dismissed', 'true');
    }
    setIsVisible(false);
  };

  // Don't hide on server or initial client render
  if (isClient && !isVisible) return null;

  return (
    <div className="relative z-50 bg-brand-yellow-400 text-brand-blue-950 font-semibold py-2.5 px-4 text-sm shadow-md flex items-center justify-between transition-all duration-300">
      <div className="flex-1 flex items-center justify-center gap-2 overflow-hidden">
        <Megaphone className="h-4 w-4 shrink-0 animate-bounce" />
        <div className="whitespace-nowrap overflow-hidden relative w-full text-center">
          <span className="inline-block animate-pulse md:animate-none">
            🚀 Admissions Open for Academic Year 2026-2027! 
            <span className="hidden md:inline"> Book a Free Demo Class for Abacus, Vedic Maths, or Robotics. </span>
            <Link 
              href="/admission" 
              className="ml-2 underline hover:text-black transition-colors"
            >
              Enroll Now &rarr;
            </Link>
          </span>
        </div>
      </div>
      <button
        onClick={handleDismiss}
        className="text-brand-blue-950 hover:text-black p-1 hover:bg-brand-yellow-500/50 rounded transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
