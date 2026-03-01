export default function Hero() {
  return (
    <section className="relative bg-stone-900 py-24 md:py-32 overflow-hidden">
      <img
        src="https://placehold.co/1200x600?text=hero-bg"
        alt="Inviting modern coffee shop interior with natural light and latte"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-50">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-amber-500">LATCUP</span> - Your Daily Brew
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover LATCUP: your new favorite spot for artisanal coffee, delightful pastries, and a welcoming ambiance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-stone-900 bg-amber-500 hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Menu
          </a>
          <a
            href="#visit-us"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-500 text-base font-medium rounded-full shadow-lg text-amber-500 bg-transparent hover:bg-amber-500 hover:text-stone-900 transition-all duration-300 transform hover:scale-105"
          >
            Find a LATCUP Near You
          </a>
        </div>
      </div>
    </section>
  );
}
