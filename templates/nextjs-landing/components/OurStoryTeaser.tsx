import { Coffee, Leaf } from 'lucide-react';

export default function OurStoryTeaser() {
  return (
    <section id="story" className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              Our Story: Passion in Every Cup
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              LATCUP began with a simple dream: to create a space where exceptional coffee meets genuine community. We believe in the power of a perfectly brewed cup to start conversations, inspire creativity, and bring joy.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From meticulously sourced beans to the artistry of our baristas, every detail at LATCUP is crafted with passion and purpose. Join us on our journey to redefine your coffee experience.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-base font-medium rounded-full text-amber-600 hover:bg-amber-500 hover:text-stone-900 transition-all duration-300 transform hover:scale-105"
            >
              <Leaf className="w-5 h-5" /> Read Our Full Story
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://placehold.co/1200x600?text=community-illustration"
              alt="Stylized illustration of coffee beans forming a tree with people representing community"
              className="w-full h-auto object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
