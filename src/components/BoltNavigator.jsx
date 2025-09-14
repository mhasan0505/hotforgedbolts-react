import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Wrench,
  Zap,
  Eye,
  Hexagon,
  Square,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const BoltNavigator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const boltTypes = [
    {
      id: 'allen',
      title: t('boltNavigator.boltTypes.allen.title'),
      description: t('boltNavigator.boltTypes.allen.description'),
      icon: Wrench,
      path: '/bolts',
      anchor: '#allen-bolts',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'countersunk',
      title: t('boltNavigator.boltTypes.countersunk.title'),
      description: t('boltNavigator.boltTypes.countersunk.description'),
      icon: Zap,
      path: '/bolts/countersunk-bolts',
      anchor: '#countersunk-header',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'eye',
      title: t('boltNavigator.boltTypes.eye.title'),
      description: t('boltNavigator.boltTypes.eye.description'),
      icon: Eye,
      path: '/bolts/eye-bolts',
      anchor: '#eye-header',
      color: 'violet',
      gradient: 'from-violet-500 to-pink-600'
    },
    {
      id: 'hex',
      title: t('boltNavigator.boltTypes.hex.title'),
      description: t('boltNavigator.boltTypes.hex.description'),
      icon: Hexagon,
      path: '/bolts/hex-head-bolts',
      anchor: '#hex-header',
      color: 'violet',
      gradient: 'from-violet-500 to-cyan-600'
    },
    {
      id: 'square',
      title: t('boltNavigator.boltTypes.square.title'),
      description: t('boltNavigator.boltTypes.square.description'),
      icon: Square,
      path: '/bolts/square-bolts',
      anchor: '#square-header',
      color: 'violet',
      gradient: 'from-violet-500 to-green-600'
    }
  ];

  const handleNavigation = (bolt) => {
    // Navigate to the page first
    navigate(bolt.path);
    // Then scroll to the specific section after a short delay
    setTimeout(() => {
      const element = document.querySelector(bolt.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-violet-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            {t('boltNavigator.badge')}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-slate-800 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {t('boltNavigator.title')}
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('boltNavigator.description')}
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {boltTypes.map((bolt, index) => {
            const IconComponent = bolt.icon;
            return (
              <div
                key={bolt.id}
                onClick={() => handleNavigation(bolt)}
                className="group block animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bolt.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 bg-${bolt.color}-100 rounded-2xl flex items-center justify-center group-hover:bg-${bolt.color}-200 transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className={`w-6 h-6 text-${bolt.color}-600 group-hover:text-${bolt.color}-700 transition-colors`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                      {bolt.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">
                      {bolt.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium text-${bolt.color}-600 group-hover:text-${bolt.color}-700 transition-colors`}>
                        {t('boltNavigator.cta.learnMore')}
                      </span>
                      <ArrowRight className={`w-4 h-4 text-${bolt.color}-600 group-hover:text-${bolt.color}-700 transform group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${bolt.color}-200 transition-all duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="font-medium">{t('boltNavigator.cta.title')}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <p className="text-sm text-slate-500 mt-2">
            {t('boltNavigator.cta.subtitle')}
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

export default BoltNavigator;
