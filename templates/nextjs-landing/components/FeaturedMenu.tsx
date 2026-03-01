import { Coffee, Croissant, Soup } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Signature Latte',
    description: 'Our award-winning latte with a creamy finish and rich espresso base.',
    price: '$4.50',
    image: 'https://placehold.co/800x600?text=Signature+Latte',
    icon: Coffee,
  },
  {
    id: 2,
    name: 'Artisanal Croissant',
    description: 'Flaky, buttery perfection baked fresh daily. A taste of Paris.',
    price: '$3.75',
    image: 'https://placehold.co/800x600?text=Artisanal+Croissant',
    icon: Croissant,
  },
  {
    id: 3,
    name: 'Cold Brew Delight',
    description: 'Smooth, low-acid cold brew steeped for 18 hours. Refreshingly bold.',
    price: '$5.00',
    image: 'https://placehold.co/800x600?text=Cold+Brew+Delight',
    icon: Coffee,
  },
  {
    id: 4,
    name: 'Avocado Toast',
    description: 'Toasted sourdough, fresh avocado, chili flakes, and a squeeze of lime.',
    price: '$7.00',
    image: 'https://placehold.co/800x600?text=Avocado+Toast',
    icon: Soup, // Using Soup icon as a placeholder for a 'light bite'
  },
];

export default function FeaturedMenu() {
  return (
    <section id="menu" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Crafted Selection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore LATCUP's curated selection of handcrafted coffees, specialty beverages, fresh pastries, and light bites, all made with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 text-amber-600">
                  <item.icon className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-semibold text-stone-900">{item.name}</h3>
                </div>
                <p className="text-gray-700 mb-4 flex-grow leading-relaxed">{item.description}</p>
                <span className="text-2xl font-bold text-green-700 mt-auto">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
          >
            View Our Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
