import { Coffee } from 'lucide-react';

export default function FoundersStory() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Coffee className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              The Journey of LATCUP: A Founder's Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              LATCUP was born from the passion of its founders, who dreamed of a place where the art of coffee-making meets the warmth of community. Starting from a small pop-up, their dedication to quality beans, masterful brewing, and a welcoming atmosphere quickly resonated with locals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every detail, from the selection of our espresso machines to the design of our cozy interiors, reflects a personal touch and a commitment to creating an unforgettable experience for every guest.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://placehold.co/1200x800?text=Founders+Story"
              alt="Founders of LATCUP sharing a coffee"
              className="w-full h-auto object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}