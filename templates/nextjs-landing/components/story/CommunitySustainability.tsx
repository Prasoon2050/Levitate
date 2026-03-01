import { Handshake } from 'lucide-react';

export default function CommunitySustainability() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Handshake className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              Community & Sustainability at Our Core
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              LATCUP is deeply rooted in the belief that a strong community and a healthy planet go hand-in-hand. We actively participate in local events, support local artists, and provide a welcoming space for all to connect and thrive.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our sustainability efforts extend beyond sourcing. We prioritize eco-friendly packaging, minimize waste, and constantly seek innovative ways to reduce our environmental footprint, ensuring that LATCUP is a business that gives back.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://placehold.co/1200x800?text=Community+Sustainability"
              alt="Diverse people interacting in a coffee shop, with nature elements"
              className="w-full h-auto object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}