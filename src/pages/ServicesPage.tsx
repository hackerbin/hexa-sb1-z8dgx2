import React from 'react';
import { Code, Smartphone, Cloud, Users, Database, Shield } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions to meet your unique business needs, from web applications to enterprise software.',
    icon: Code,
    technologies: ['Python', 'Java', 'JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Mobile App Development',
    description: 'Engaging and intuitive apps for iOS and Android platforms, built with the latest technologies.',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your applications, ensuring high availability and performance.',
    icon: Cloud,
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to optimize your technology strategy and drive digital transformation in your organization.',
    icon: Users,
    technologies: ['Digital Strategy', 'Technology Roadmap', 'Process Optimization'],
  },
  {
    title: 'Database Management',
    description: 'Efficient design, implementation, and optimization of database systems to handle your data effectively.',
    icon: Database,
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
  },
  {
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
    icon: Shield,
    technologies: ['Penetration Testing', 'Security Audits', 'Encryption', 'Firewall Configuration'],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-xl text-center mb-12">
        At Hexa, we offer a wide range of software development and IT services to help your business thrive in the digital age.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="card-title text-2xl mb-4">{service.title}</h2>
              <p className="mb-4">{service.description}</p>
              <div>
                <h3 className="font-semibold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge badge-primary">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Development Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
            <div className="rounded-full bg-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Requirements Gathering</h3>
            <p>We work closely with you to understand your needs and goals.</p>
          </div>
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
            <div className="rounded-full bg-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Design & Planning</h3>
            <p>Our team creates detailed plans and designs for your project.</p>
          </div>
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
            <div className="rounded-full bg-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Development & Testing</h3>
            <p>We build and rigorously test your solution to ensure quality.</p>
          </div>
          <div className="w-full md:w-1/4 text-center">
            <div className="rounded-full bg-primary text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">4</div>
            <h3 className="font-semibold mb-2">Deployment & Support</h3>
            <p>We launch your project and provide ongoing support and maintenance.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Let's discuss how we can help bring your ideas to life.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </section>
    </div>
  );
};

export default ServicesPage;