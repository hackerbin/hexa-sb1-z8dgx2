import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', title: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Bob Smith', title: 'CTO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Carol Williams', title: 'Lead Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'David Brown', title: 'UX Designer', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const milestones = [
  { year: 2015, event: 'Hexa founded' },
  { year: 2017, event: 'Launched first major project' },
  { year: 2019, event: 'Expanded to international markets' },
  { year: 2021, event: 'Reached 100 employees milestone' },
  { year: 2023, event: 'Opened new headquarters' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Hexa</h1>

      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg mb-4">
          Hexa was founded in 2015 with a vision to revolutionize the software development industry. Our journey began with a small team of passionate developers and has since grown into a global company serving clients across various industries.
        </p>
        <p className="text-lg mb-4">
          We believe in the power of technology to transform businesses and improve lives. Our commitment to innovation, quality, and client satisfaction has been the driving force behind our success.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Hexa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="card-title">Expert Team</h3>
              <p>Our team consists of highly skilled professionals with diverse expertise in various technologies.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="card-title">Quality Assurance</h3>
              <p>We follow rigorous quality control processes to ensure the highest standards in our deliverables.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="card-title">Industry Experience</h3>
              <p>With years of experience across various sectors, we bring valuable insights to every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member.image} alt={member.name} className="rounded-xl w-32 h-32 object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Our Journey</h2>
        <div className="relative">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-xl font-semibold">{milestone.year}</h3>
                <p>{milestone.event}</p>
              </div>
              <div className="absolute left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
            </div>
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;