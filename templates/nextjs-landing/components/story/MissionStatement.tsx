import { Target } from 'lucide-react';

export default function MissionStatement() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Target className="w-12 h-12 text-amber-600 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
          Our Guiding Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At LATCUP, our mission is to enrich lives one cup at a time. We strive to be more than just a coffee shop; we are a community hub dedicated to providing exceptional coffee, fostering genuine connections, and creating a positive impact through sustainable practices and unwavering quality.
        </p>
      </div>
    </section>
  );
}