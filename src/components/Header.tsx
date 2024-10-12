import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Hexagon className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">Hexa</span>
          </Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-secondary">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;