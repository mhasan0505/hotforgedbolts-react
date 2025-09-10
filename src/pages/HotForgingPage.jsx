import React from 'react';
import { ChevronRight, Zap, Thermometer, Hammer, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import hotForging from '../assets/Hotforging.webp';

const HotForgingPage = () => {
  const { t } = useTranslation();

  const processes = [
    {
      icon: Thermometer,
      title: t('hotForgingPage.processes.controlledHeating.title'),
      description: t('hotForgingPage.processes.controlledHeating.description')
    },
    {
      icon: Hammer,
      title: t('hotForgingPage.processes.closedDieForging.title'),
      description: t('hotForgingPage.processes.closedDieForging.description')
    },
    {
      icon: Target,
      title: t('hotForgingPage.processes.qualityControl.title'),
      description: t('hotForgingPage.processes.qualityControl.description')
    }
  ];

  const advantages = [
    t('hotForgingPage.advantages.superiorMechanical'),
    t('hotForgingPage.advantages.enhancedGrainFlow'),
    t('hotForgingPage.advantages.reducedWaste'),
    t('hotForgingPage.advantages.costEffective'),
    t('hotForgingPage.advantages.improvedFatigue'),
    t('hotForgingPage.advantages.consistentQuality')
  ];

  const capabilities = [
    {
      label: t('hotForgingPage.capabilities.materialTypes.label'),
      value: t('hotForgingPage.capabilities.materialTypes.value')
    },
    {
      label: t('hotForgingPage.capabilities.weightRange.label'),
      value: t('hotForgingPage.capabilities.weightRange.value')
    },
    {
      label: t('hotForgingPage.capabilities.temperatureRange.label'),
      value: t('hotForgingPage.capabilities.temperatureRange.value')
    },
    {
      label: t('hotForgingPage.capabilities.productionCapacity.label'),
      value: t('hotForgingPage.capabilities.productionCapacity.value')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 text-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8" />
                <span className="text-gray-600 font-medium">
                  {t('hotForgingPage.hero.subtitle')}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {t('hotForgingPage.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hotForgingPage.hero.description')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                {t('buttons.getQuote')}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={hotForging}
                alt={t('hotForgingPage.hero.imageAlt')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('hotForgingPage.processes.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('hotForgingPage.processes.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-3 bg-orange-100 rounded-full w-fit mb-6">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('hotForgingPage.capabilities.title')}
              </h2>
              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-600 pl-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {capability.label}
                    </h3>
                    <p className="text-gray-600">{capability.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('hotForgingPage.advantages.title')}
              </h2>
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
      <section className="py-20 bg-gray-700 text-black">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            {t('hotForgingPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {t('hotForgingPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              {t('buttons.contactUs')}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              {t('hotForgingPage.cta.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotForgingPage;