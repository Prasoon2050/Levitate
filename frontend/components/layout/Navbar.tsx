"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 md:px-10 lg:px-40">
      <div className="flex items-center gap-3">
        <Image src="/Levitate.png" alt="Levitate Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
        <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Levitate</h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          <a href="#product" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Product</a>
          <a href="#solutions" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="h-9 px-4 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm font-semibold rounded-lg transition-all shadow-sm inline-flex items-center">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <span className="material-symbols-outlined text-zinc-600 dark:text-zinc-400">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-zinc-200 dark:border-border-dark p-4 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <a href="#product" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 p-2">Product</a>
          <a href="#solutions" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 p-2">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 p-2">Pricing</a>
          <Link href="/signin" className="w-full h-10 border border-zinc-200 dark:border-border-dark text-zinc-700 dark:text-zinc-200 font-semibold rounded-lg inline-flex items-center justify-center">
            Sign In
          </Link>
          <Link href="/signup" className="w-full h-10 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg inline-flex items-center justify-center">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
