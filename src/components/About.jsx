import React from 'react';
import aboutBanner from '../assets/aboutus.jpg';
import { Award, Users, Factory, Target, Star, Lightbulb, Heart, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Factory size={24} />, value: '25+', label: 'Years Experience' },
    { icon: <Users size={24} />, value: '500+', label: 'Satisfied Clients' },
    { icon: <Award size={24} />, value: '99%', label: 'Quality Assurance' },
    { icon: <Target size={24} />, value: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: <Star size={24} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every product we manufacture, ensuring superior performance and reliability.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'Cutting-edge technology and continuous improvement drive our manufacturing processes and product development.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Customer Focus',
      description: 'Our client\'s success is our priority. We provide tailored solutions to meet specific industrial requirements.',
    },
    {
      icon: <Leaf size={24} />,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible manufacturing practices and sustainable business operations.',
    },
  ];

  return (
    <section className="bg-white py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We increase the power of industries with our innovative
                <span className="text-violet-600"> hot forging solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Hot Forged Bolts, we specialize in the production of
                high-strength hot forged bolts designed to meet the most
                demanding industrial requirements. With decades of experience in
                metal forming and precision forging, we manufacture fastening
                solutions that deliver unmatched performance, durability, and
                reliability.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-violet-50 transition-colors duration-200"
                >
                  <div className="text-violet-600 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutBanner}
                alt="About Us - Hot Forging Manufacturing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a
            company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-600 mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-r from-violet-600 to-violet-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-violet-100 leading-relaxed max-w-4xl mx-auto">
            To be the leading provider of premium hot forged fastening
            solutions, empowering industries worldwide with products that exceed
            expectations in quality, performance, and reliability. We are
            committed to innovation, sustainability, and building lasting
            partnerships with our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About