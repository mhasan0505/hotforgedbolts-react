import React, { useState } from 'react';
import { ChevronRight, Factory, Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import fasteners from '../assets/Fasteners.jpg';
import hotForging from '../assets/Hotforging.webp';
import machining from '../assets/machining.png';

const Production = () => {
  const [activeCategory, setActiveCategory] = useState('fasteners');

  const productionCategories = [
    {
      id: 'fasteners',
      title: 'Fasteners',
      description: 'High-quality fastening solutions for industrial applications',
      image: fasteners,
      icon: Factory,
      features: ['Precision Engineering', 'Corrosion Resistant', 'Multiple Grades'],
      route: '/fasteners'
    },
    {
      id: 'hotforging',
      title: 'Hot Forging',
      description: 'Advanced hot forging processes for superior strength',
      image: hotForging,
      icon: Zap,
      features: ['Enhanced Strength', 'Grain Flow Optimization', 'Cost Effective'],
      route: '/hot-forging'
    },
    {
      id: 'machining',
      title: 'Machining',
      description: 'Precision machining services with tight tolerances',
      image: machining,
      icon: Wrench,
      features: ['CNC Precision', 'Custom Solutions', 'Quality Assurance'],
      route: '/machining'
    }
  ];

  const activeProduct = productionCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Production
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive manufacturing capabilities and advanced production processes
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productionCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-96 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-violet-100 rounded-full">
                  <activeProduct.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {activeProduct.title}
                </h3>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                {activeProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to={activeProduct.route}
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-fit"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Production Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-violet-600 mb-2">25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-violet-600 mb-2">1000+</div>
            <div className="text-gray-600">Products Delivered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-violet-600 mb-2">99%</div>
            <div className="text-gray-600">Quality Assurance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
