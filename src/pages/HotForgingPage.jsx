import React from 'react';
import { ChevronRight, Zap, Thermometer, Hammer, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hotForging from '../assets/Hotforging.webp';

const HotForgingPage = () => {
  const processes = [
    {
      icon: Thermometer,
      title: 'Controlled Heating',
      description: 'Precise temperature control for optimal material properties'
    },
    {
      icon: Hammer,
      title: 'Closed Die Forging',
      description: 'Advanced die technology for complex geometries'
    },
    {
      icon: Target,
      title: 'Quality Control',
      description: 'Rigorous testing and inspection at every stage'
    }
  ];

  const advantages = [
    'Superior mechanical properties',
    'Enhanced grain flow structure',
    'Reduced material waste',
    'Cost-effective production',
    'Improved fatigue resistance',
    'Consistent quality output'
  ];

  const capabilities = [
    { label: 'Material Types', value: 'Carbon Steel, Alloy Steel, Stainless Steel' },
    { label: 'Weight Range', value: '0.1 kg to 50 kg per piece' },
    { label: 'Temperature Range', value: '950°C to 1250°C' },
    { label: 'Production Capacity', value: '10,000+ pieces per month' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-400 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8" />
                <span className="text-orange-200 font-medium">Advanced Manufacturing</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Hot Forging Excellence</h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                State-of-the-art hot forging processes that deliver superior strength,
                durability, and precision. Our advanced techniques ensure optimal grain
                flow and exceptional mechanical properties.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-900 px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Get Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={hotForging}
                alt="Hot Forging Process"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Forging Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced hot forging techniques for superior component performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities & Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Manufacturing Capabilities</h2>
              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.label}</h3>
                    <p className="text-gray-600">{capability.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Advantages</h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-400 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Hot Forging Excellence</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Partner with us for superior hot forged components that meet your exact specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotForgingPage;