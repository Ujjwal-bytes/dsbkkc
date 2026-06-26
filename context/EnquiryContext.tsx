'use client';

import React, { createContext, useContext, useState } from 'react';

type EnquiryContextType = {
  isOpen: boolean;
  selectedCourse: string;
  openEnquiry: (courseName?: string) => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openEnquiry = (courseName?: string) => {
    setSelectedCourse(courseName || '');
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setSelectedCourse('');
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, selectedCourse, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
