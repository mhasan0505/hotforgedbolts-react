import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hexagon,
  Shield,
  Cog,
  Wrench,
  Settings,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const NutNavigator = () => {
  const nutTypes = [
    {
      id: 'asme',
      title: 'ASME Heavy Hex Nuts',
      description: 'ASME B18.2.2 standard heavy hex nuts for structural applications',
      icon: Hexagon,
      path: '/nuts',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'din934',
      title: 'DIN 934 Hex Nuts',
      description: 'Standard metric hex nuts for general applications',
      icon: Cog,
      path: '/nuts',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'din935',
      title: 'DIN 935 Castle Nuts',
      description: 'Slotted nuts for cotter pin applications',
      icon: Shield,
      path: '/nuts',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'din936',
      title: 'DIN 936 Jam Nuts',
      description: 'Low profile nuts for locking applications',
      icon: Settings,
      path: '/nuts',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'en14399',
      title: 'EN 14399 Structural Nuts',
      description: 'High-strength structural bolting nuts',
      icon: Wrench,
      path: '/nuts',
      color: 'teal',
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-violet-50 mt-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Explore Our Products
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-slate-800 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Nut Categories
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover our comprehensive range of high-quality nuts,
            engineered for strength and precision in every fastening application.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {nutTypes.map((nut, index) => {
            const IconComponent = nut.icon;
            return (
              <Link
                key={nut.id}
                to={nut.path}
                className="group block animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${nut.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 bg-${nut.color}-100 rounded-2xl flex items-center justify-center group-hover:bg-${nut.color}-200 transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className={`w-6 h-6 text-${nut.color}-600 group-hover:text-${nut.color}-700 transition-colors`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                      {nut.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">
                      {nut.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium text-${nut.color}-600 group-hover:text-${nut.color}-700 transition-colors`}>
                        Learn More
                      </span>
                      <ArrowRight className={`w-4 h-4 text-${nut.color}-600 group-hover:text-${nut.color}-700 transform group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${nut.color}-200 transition-all duration-300`}></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="font-medium">Need Custom Solutions?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Contact our engineering team for specialized requirements
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
};

export default NutNavigator;