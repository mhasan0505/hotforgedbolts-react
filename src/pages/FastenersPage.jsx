import React from 'react';

import {
  Award,
  CheckCircle,
  ChevronRight,
  Cog,
  Factory,
  Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import fasteners from '../assets/Fasteners.jpg';
import Bolts from './Bolts';
import Nut from './Nut';
import StudBolt from './StudBolt';

const FastenersPage = () => {
  const specifications = [
    { label: 'Material Grades', value: 'A325, A490, 8.8, 10.9, 12.9' },
    { label: 'Size Range', value: 'M6 to M64 (1/4" to 2.5")' },
    { label: 'Thread Types', value: 'Metric, UNC, UNF, BSW' },
    { label: 'Coating Options', value: 'Zinc, HDG, Dacromet, Plain' },
  ];

  const applications = [
    'Structural Steel Construction',
    'Bridge Construction',
    'Industrial Machinery',
    'Automotive Industry',
    'Railway Infrastructure',
    'Power Generation',
  ];

  const features = [
    {
      icon: Shield,
      title: 'Bolts',
      description: 'Advanced coating technologies for long-lasting protection',
      path: '/bolts',
    },
    {
      icon: Cog,
      title: 'Nuts',
      description: 'Manufactured to exact specifications with tight tolerances',
      path: '/nuts',
    },
    {
      icon: Award,
      title: 'Stud Bolts',
      description: 'ISO 9001:2015 certified manufacturing processes',
      path: '/fasteners/stud-bolts',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 text-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-8 h-8" />
                <span className="text-textcolor font-medium">
                  Production Excellence
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                High-Quality Fasteners
              </h1>
              <p className="text-xl text-textcolor mb-8 leading-relaxed">
                Precision-engineered fastening solutions designed for critical
                applications. Our fasteners meet international standards and
                deliver exceptional performance in demanding environments.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-textcolor bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Get Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={fasteners}
                alt="High-Quality Fasteners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Fasteners?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fasteners are engineered for reliability, durability, and
              performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link key={index} to={feature.path}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-3 bg-violet-100 rounded-full w-fit mb-6">
                      <IconComponent className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Technical Specifications
              </h2>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-violet-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {spec.label}
                    </h3>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Applications
              </h2>
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your fastener requirements and
            get a custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastenersPage;
