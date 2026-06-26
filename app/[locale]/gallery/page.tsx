'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type GalleryImage = {
  id: number;
  title: string;
  category: 'classroom' | 'activity' | 'workshop';
  url: string;
  description: string;
};

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'classroom' | 'activity' | 'workshop'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Interactive Math Session",
      category: "classroom",
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
      description: "Founder Dnyaneshwar Sir explaining math concepts using visual tools."
    },
    {
      id: 2,
      title: "Mental Abacus Training",
      category: "activity",
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
      description: "Students practicing speed math calculations using the Soroban abacus."
    },
    {
      id: 3,
      title: "Robotics STEM Kit Assembly",
      category: "activity",
      url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop&q=80",
      description: "Young innovators assembling their smart bluetooth controlled robot cars."
    },
    {
      id: 4,
      title: "Modern Classrooms",
      category: "classroom",
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
      description: "Our air-conditioned, well-lit classrooms equipped with digital resources."
    },
    {
      id: 5,
      title: "Weekend Science Workshop",
      category: "workshop",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
      description: "A collaborative workshop focusing on physics experiments and logic."
    },
    {
      id: 6,
      title: "Public Speaking Contest",
      category: "workshop",
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      description: "Students showcasing English communication skills during a debate event."
    },
    {
      id: 7,
      title: "Creative Handwriting Improvement",
      category: "activity",
      url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
      description: "Interactive tracing worksheets designed to perfect hand posture and lettering."
    },
    {
      id: 8,
      title: "Vedic Mathematics Seminar",
      category: "workshop",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      description: "High school students learning Vedic calculation shortcuts for board exams."
    },
    {
      id: 9,
      title: "Focus & Reading Exercises",
      category: "classroom",
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
      description: "Interactive library corner encouraging creative story writing and vocabulary building."
    }
  ];

  // Filtered list
  const filteredImages = images.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, filteredImages.length]);

  const openLightbox = (imageIndexInFiltered: number) => {
    setLightboxIndex(imageIndexInFiltered);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  };

  const categories: { key: 'all' | 'classroom' | 'activity' | 'workshop'; label: string }[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'classroom', label: 'Classrooms' },
    { key: 'activity', label: 'Student Activities' },
    { key: 'workshop', label: 'Events & Workshops' },
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
            Academy Photo Gallery
          </h1>
          <div className="h-1 bg-brand-yellow-400 w-24 rounded-full mx-auto" />
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Take a visual tour of our campus, classrooms, high-tech robotics kits, and active student workshops.
          </p>
        </div>
      </section>

      {/* 2. Photo Gallery & Filters */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filters Tab Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-200 dark:border-brand-blue-800 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setFilter(cat.key);
                  setLightboxIndex(null); // Reset lightbox when filter changes
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  filter === cat.key
                    ? 'bg-brand-blue-600 dark:bg-brand-yellow-500 text-white dark:text-brand-blue-950 shadow'
                    : 'bg-white dark:bg-brand-blue-800 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-blue-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, idx) => (
              <ScrollReveal
                key={img.id}
                delay={idx * 80}
                className="bg-white dark:bg-brand-blue-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-brand-blue-700/50 shadow-md group relative"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay Icon */}
                  <button
                    onClick={() => openLightbox(idx)}
                    className="absolute inset-0 bg-brand-blue-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white cursor-pointer"
                    aria-label={`View ${img.title}`}
                  >
                    <div className="h-12 w-12 rounded-full bg-brand-yellow-500 text-brand-blue-950 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </button>
                </div>

                {/* Info Text */}
                <div className="p-4 text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue-600 dark:text-brand-yellow-400">
                    {img.category === 'classroom' && 'Classroom Session'}
                    {img.category === 'activity' && 'Student Activity'}
                    {img.category === 'workshop' && 'Workshop & Events'}
                  </span>
                  <h3 className="font-bold text-base text-slate-800 dark:text-white mt-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 mt-1 line-clamp-1">
                    {img.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="py-16 text-center text-slate-500 space-y-2">
              <Camera className="h-12 w-12 mx-auto text-slate-400" />
              <h4 className="text-lg font-bold">No Photos Found</h4>
              <p className="text-sm">We are adding new photos regularly. Check back soon!</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-white animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white/80 hover:text-white backdrop-blur-sm cursor-pointer transition-transform hover:scale-105"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-4xl max-h-[80vh] px-4 flex flex-col items-center select-none">
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            />
            {/* Details */}
            <div className="text-center mt-6 max-w-xl space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow-400">
                Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <h3 className="text-lg md:text-xl font-black">{filteredImages[lightboxIndex].title}</h3>
              <p className="text-xs sm:text-sm text-slate-300">{filteredImages[lightboxIndex].description}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white/80 hover:text-white backdrop-blur-sm cursor-pointer transition-transform hover:scale-105"
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

    </div>
  );
}
