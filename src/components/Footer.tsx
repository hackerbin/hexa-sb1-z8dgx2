import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Hexagon className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">Hexa</span>
            </Link>
            <p className="text-sm">Innovative software solutions for your business needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About</Link></li>
              <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-secondary">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Tech Street, Silicon Valley, CA 94000</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@hex6a.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary"><Facebook /></a>
              <a href="#" className="hover:text-secondary"><Twitter /></a>
              <a href="#" className="hover:text-secondary"><Linkedin /></a>
              <a href="#" className="hover:text-secondary"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Hexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;