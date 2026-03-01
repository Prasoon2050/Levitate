import { Award, Heart, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'We meticulously source the finest beans from ethical farms worldwide, ensuring every sip is a testament to quality and taste.'
  },
  {
    icon: Heart,
    title: 'Inviting Atmosphere',
    description: 'Step into a cozy, modern space designed for comfort and connection. Your perfect spot for work, relaxation, or meeting friends.'
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'LATCUP is more than a coffee shop; it"s a hub. We champion local artists and host events that bring our vibrant community together.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Why Choose <span className="text-amber-600">LATCUP</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the difference that passion, quality, and community make in every aspect of your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-4 rounded-full bg-amber-100 text-amber-600 mb-6">
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
