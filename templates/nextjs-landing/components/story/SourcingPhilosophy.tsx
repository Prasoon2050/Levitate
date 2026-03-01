import { Leaf } from 'lucide-react';

export default function SourcingPhilosophy() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Leaf className="w-12 h-12 text-green-700 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
          Our Ethical Sourcing Philosophy
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          We believe truly great coffee starts at the source. Our commitment to ethical sourcing means we partner directly with farms that uphold fair labor practices, practice sustainable farming, and produce exceptional beans. We meticulously select each bean for its unique flavor profile and story.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          This direct trade approach not only guarantees the highest quality for your cup but also supports the livelihoods of coffee growers and their communities, ensuring a sustainable future for everyone involved in the coffee journey.
        </p>
      </div>
    </section>
  );
}