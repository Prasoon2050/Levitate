import React from 'react';

const CtaAgentsSellers: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>List Your Property With Us</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>Join thousands of agents and sellers who trust Estatescape to reach a wider audience and sell properties faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200 transition duration-300">
            Sell Your Property
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition duration-300">
            Become an Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaAgentsSellers;
