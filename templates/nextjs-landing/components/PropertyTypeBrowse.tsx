import React from 'react';

interface PropertyTypeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  colorClass: string;
}

const PropertyTypeCard: React.FC<PropertyTypeCardProps> = ({
  title,
  description,
  imageUrl,
  colorClass,
}) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition duration-300 ${colorClass} hover:shadow-xl`}>
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
          <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const PropertyTypeBrowse: React.FC = () => {
  const propertyTypes = [
    { title: 'Residential', description: 'Find your perfect home.', imageUrl: '/images/residential.jpg', colorClass: 'hover:ring-blue-500' },
    { title: 'Commercial', description: 'Spaces for your business.', imageUrl: '/images/commercial.jpg', colorClass: 'hover:ring-purple-500' },
    { title: 'Rental', description: 'Flexible living options.', imageUrl: '/images/rental.jpg', colorClass: 'hover:ring-teal-500' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>Browse by Property Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <PropertyTypeCard key={index} {...type} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeBrowse;
