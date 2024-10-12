import React, { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully-featured e-commerce solution with inventory management and payment integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'ShopEasy Inc.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    problemSolved: 'Streamlined order processing and improved customer experience, resulting in a 30% increase in sales.',
    metrics: '99.9% uptime, 50% reduction in cart abandonment rate',
  },
  {
    title: 'Healthcare Management System',
    description: 'An integrated system for managing patient records, appointments, and billing for a network of clinics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'MediCare Group',
    technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Docker'],
    problemSolved: 'Centralized patient data and automated administrative tasks, reducing operational costs by 25%.',
    metrics: '40% reduction in appointment scheduling time, 99% data accuracy',
  },
  {
    title: 'Smart Home IoT Platform',
    description: 'A cloud-based platform for managing and controlling smart home devices with real-time data analytics.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'HomeSmart Technologies',
    technologies: ['React Native', 'Node.js', 'AWS IoT', 'TensorFlow'],
    problemSolved: 'Enabled seamless integration of various smart devices and provided actionable insights for energy savings.',
    metrics: '20% average reduction in energy consumption for users, 1M+ connected devices',
  },
  {
    title: 'Supply Chain Management Solution',
    description: 'An end-to-end supply chain management solution with real-time tracking and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'GlobalLogistics Corp',
    technologies: ['Vue.js', 'Python Django', 'PostgreSQL', 'Elasticsearch'],
    problemSolved: 'Optimized inventory management and improved delivery times, resulting in a 15% reduction in operational costs.',
    metrics: '99.7% on-time delivery rate, 30% reduction in inventory holding costs',
  },
];

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      <p className="text-xl text-center mb-12">
        Explore some of our recent projects and see how we've helped businesses achieve their goals through innovative software solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(index)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{projects[selectedProject].title}</h2>
            <img
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4"><strong>Client:</strong> {projects[selectedProject].client}</p>
            <p className="mb-4"><strong>Description:</strong> {projects[selectedProject].description}</p>
            <p className="mb-4"><strong>Technologies Used:</strong></p>
            <ul className="list-disc list-inside mb-4">
              {projects[selectedProject].technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <p className="mb-4"><strong>Problem Solved:</strong> {projects[selectedProject].problemSolved}</p>
            <p className="mb-4"><strong>Key Metrics:</strong> {projects[selectedProject].metrics}</p>
            <button
              className="btn btn-primary"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;