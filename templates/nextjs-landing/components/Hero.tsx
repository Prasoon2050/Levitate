"use client";

import { Search } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Discover Your Dream Property with Estatescape</h1>
        <p className="text-lg md:text-2xl mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>Your premium portal for residential and commercial real estate.</p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4 flex items-center">
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
              placeholder="Search by address, city, or ZIP code..."
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg flex items-center transition duration-300">
              <Search className="mr-2" size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
