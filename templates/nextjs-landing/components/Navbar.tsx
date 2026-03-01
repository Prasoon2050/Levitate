"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-900 text-stone-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 text-2xl font-bold text-amber-500">
              LATCUP
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-lg font-medium hover:text-amber-500 transition-colors">
              Home
            </a>
            <a href="#menu" className="text-lg font-medium hover:text-amber-500 transition-colors">
              Menu
            </a>
            <a href="#story" className="text-lg font-medium hover:text-amber-500 transition-colors">
              Story
            </a>
            <a href="#visit-us" className="text-lg font-medium hover:text-amber-500 transition-colors">
              Visit Us
            </a>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-50 hover:text-amber-500 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-800">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-50 hover:text-amber-500 hover:bg-stone-700"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-50 hover:text-amber-500 hover:bg-stone-700"
            >
              Menu
            </a>
            <a
              href="#story"
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-50 hover:text-amber-500 hover:bg-stone-700"
            >
              Story
            </a>
            <a
              href="#visit-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-50 hover:text-amber-500 hover:bg-stone-700"
            >
              Visit Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
