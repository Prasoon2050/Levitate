"use client";

import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
      <img src={imageUrl} alt={author} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200" />
      <blockquote className="text-xl italic text-gray-700 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{author}</p>
      <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>{role}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Estatescape made finding our dream home a breeze. The interface was intuitive, and the listings were top-notch.",
      author: 'Sarah J.',
      role: 'Home Buyer',
      imageUrl: '/images/testimonial1.jpg',
    },
    {
      quote: "Selling our commercial property was faster than we ever expected thanks to Estatescape's wide reach and excellent agent network.",
      author: 'Mark L.',
      role: 'Property Seller',
      imageUrl: '/images/testimonial2.jpg',
    },
    {
      quote: "As an agent, Estatescape provides a fantastic platform to showcase listings and connect with serious buyers.",
      author: 'Emily R.',
      role: 'Real Estate Agent',
      imageUrl: '/images/testimonial3.jpg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>What Our Clients Say</h2>
        <div className="relative">
          <TestimonialCard {...testimonials[currentIndex]} />
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none hover:bg-blue-600"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none hover:bg-blue-600"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
