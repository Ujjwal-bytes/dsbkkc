import React from 'react';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "DSB KKC (Dnyaneshwar Barate's Academy)",
    "alternateName": "DSB KKC",
    "description": "DSB KKC is a premier educational institute offering Abacus, English Speaking, Vedic Maths, Handwriting, Robotics, and School Tuitions (1st to 10th Standard) in Pune. Empowering students with skills for the future.",
    "url": "https://www.dsbkcc.com",
    "logo": "https://www.dsbkcc.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 4, Barate Complex, Near Shivaji Statue, Katraj",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411046",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "admissions",
      "email": "info@dsbkcc.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "founder": {
      "@type": "Person",
      "name": "Dnyaneshwar Barate"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academy Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Abacus Training",
            "description": "Brain development and mental arithmetic program for children."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "English Speaking Program",
            "description": "Fluency and confidence-building communication classes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Vedic Mathematics",
            "description": "Speed math techniques for quick calculations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Handwriting Improvement",
            "description": "Cursive and print handwriting styling classes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Robotics for Kids",
            "description": "Practical stem training with robot assembly and basic coding."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "School Tuitions (1st to 10th Standard)",
            "description": "Comprehensive academic coaching for school syllabus."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/dsbkcc",
      "https://www.instagram.com/dsbkcc",
      "https://www.youtube.com/dsbkcc"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
