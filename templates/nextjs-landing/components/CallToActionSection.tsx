import { MapPin, Utensils } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section id="visit-us" className="bg-stone-900 text-stone-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-amber-500">
          Ready for Your Perfect Brew?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Whether you're craving a quick pick-me-up or a cozy spot to unwind, LATCUP awaits. Find us or explore our menu today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-stone-900 bg-amber-500 hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 gap-2"
          >
            <Utensils className="w-6 h-6" /> View Full Menu
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-green-700 text-lg font-medium rounded-full shadow-lg text-green-700 bg-transparent hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:scale-105 gap-2"
          >
            <MapPin className="w-6 h-6" /> Find Our Locations
          </a>
        </div>
      </div>
    </section>
  );
}
