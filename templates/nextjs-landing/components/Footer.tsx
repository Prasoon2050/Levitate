import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-bold text-amber-500 mb-4 block">
              LATCUP
            </a>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your daily escape for artisanal coffee and delightful pastries.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-stone-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#story" className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#visit-us" className="hover:text-amber-500 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold text-stone-50 mb-4">Contact</h3>
            <p className="mb-2">123 Coffee Lane, Brew City, CA 90210</p>
            <p className="mb-2">(123) 456-7890</p>
            <p><a href="mailto:info@latcup.com" className="hover:text-amber-500 transition-colors">info@latcup.com</a></p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} LATCUP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
