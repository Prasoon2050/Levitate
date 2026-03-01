export default function TeamIntroduction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
          Meet the LATCUP Team
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Behind every perfect brew is a team passionate about coffee, community, and creating unforgettable experiences. Learn more about the individuals who make LATCUP special.
        </p>
        {/* Placeholder for team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <img src="https://placehold.co/150x150?text=John+Doe" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-stone-900">John Doe</h3>
            <p className="text-amber-600 text-sm mb-2">Founder & Head Roaster</p>
            <p className="text-gray-700 text-sm">John's journey started with a single bean and a dream to bring exceptional coffee to everyone.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <img src="https://placehold.co/150x150?text=Jane+Smith" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-stone-900">Jane Smith</h3>
            <p className="text-amber-600 text-sm mb-2">Lead Barista & Trainer</p>
            <p className="text-gray-700 text-sm">With years of experience, Jane crafts every drink into a work of art and trains our baristas.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <img src="https://placehold.co/150x150?text=Peter+Jones" alt="Peter Jones" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-stone-900">Peter Jones</h3>
            <p className="text-amber-600 text-sm mb-2">Community Manager</p>
            <p className="text-gray-700 text-sm">Peter ensures LATCUP is a welcoming hub, organizing events and fostering local connections.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
