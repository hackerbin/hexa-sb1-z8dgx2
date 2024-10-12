import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Innovative Software Solutions</h1>
          <p className="text-xl mb-8">Empowering businesses with cutting-edge technology</p>
          <Link to="/contact" className="btn btn-secondary btn-lg">Get Started</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Hexa</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Hexa is a leading software development company specializing in creating innovative solutions for businesses of all sizes. With our expertise in cutting-edge technologies, we help our clients transform their ideas into reality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Custom Software Development</h3>
                <p>Tailored solutions to meet your unique business needs</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Mobile App Development</h3>
                <p>Engaging and intuitive apps for iOS and Android platforms</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Cloud Solutions</h3>
                <p>Scalable and secure cloud infrastructure for your applications</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">IT Consulting</h3>
                <p>Expert advice to optimize your technology strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="mb-4">"Hexa transformed our business with their innovative software solutions. Highly recommended!"</p>
                <p className="font-semibold">- John Doe, CEO of TechCorp</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="mb-4">"The mobile app developed by Hexa exceeded our expectations. Our customers love it!"</p>
                <p className="font-semibold">- Jane Smith, CTO of MobileFirst</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="mb-4">"Hexa's cloud solutions have significantly improved our scalability and reduced costs."</p>
                <p className="font-semibold">- Mike Johnson, CIO of CloudScale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how Hexa can help you achieve your technology goals.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;