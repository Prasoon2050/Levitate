import React from 'react';

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: string;
  type: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  location,
  price,
  type,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
        <p className="text-gray-600 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>{location}</p>
        <p className="text-blue-600 font-bold text-lg mb-3" style={{ fontFamily: 'Open Sans, sans-serif' }}>{price}</p>
        <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded" style={{ fontFamily: 'Open Sans, sans-serif' }}>{type}</span>
      </div>
    </div>
  );
};

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      imageUrl: '/images/property1.jpg',
      title: 'Luxury Penthouse with City View',
      location: '123 Main St, Anytown, CA',
      price: '$1,500,000',
      type: 'Residential',
    },
    {
      id: 2,
      imageUrl: '/images/property2.jpg',
      title: 'Modern Commercial Office Space',
      location: '456 Business Ave, Anytown, CA',
      price: '$800,000',
      type: 'Commercial',
    },
    {
      id: 3,
      imageUrl: '/images/property3.jpg',
      title: 'Charming Family Home',
      location: '789 Oak Ln, Anytown, CA',
      price: '$650,000',
      type: 'Residential',
    },
    {
      id: 4,
      imageUrl: '/images/property4.jpg',
      title: 'Spacious Apartment for Rent',
      location: '101 Pine St, Anytown, CA',
      price: '$2,500/month',
      type: 'Rental',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
