import React from 'react';

interface AgentProfileProps {
  name: string;
  photoUrl: string;
  agency: string;
  specialty: string;
  bio: string;
}

const AgentCard: React.FC<AgentProfileProps> = ({
  name,
  photoUrl,
  agency,
  specialty,
  bio,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6 transition duration-300 hover:shadow-xl">
      <img src={photoUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</h3>
      <p className="text-blue-600 font-medium mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>{agency}</p>
      <p className="text-gray-600 mb-4 italic" style={{ fontFamily: 'Open Sans, sans-serif' }}>{specialty}</p>
      <p className="text-gray-700 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>{bio}</p>
      <button className="mt-6 px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
        View Profile
      </button>
    </div>
  );
};

const AgentSpotlight: React.FC = () => {
  const agents = [
    {
      name: 'Alice Wonderland',
      photoUrl: '/images/agent1.jpg',
      agency: 'Dream Homes Realty',
      specialty: 'Luxury Residential Properties',
      bio: 'With over 10 years of experience, Alice is dedicated to finding the perfect luxury home for her clients.'
    },
    {
      name: 'Bob The Builder',
      photoUrl: '/images/agent2.jpg',
      agency: 'Commercial Solutions Inc.',
      specialty: 'Commercial Real Estate Investments',
      bio: 'Bob specializes in identifying lucrative commercial investment opportunities across the city.'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>Agent Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSpotlight;
