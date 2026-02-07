import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Properties', url: '/search' },
    { label: 'Agents', url: '/agents' },
    { label: 'About Us', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Estatescape</h3>
          <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            The most trusted name in premium real estate. Discover your next property with us.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:text-white transition duration-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Info</h4>
          <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>123 Estate Road, Suite 100, Anytown, CA 90210</p>
          <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>Email: info@estatescape.com</p>
          <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:text-white transition duration-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        © {new Date().getFullYear()} Estatescape. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
