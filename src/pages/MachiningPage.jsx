import { Award, CheckCircle, ChevronRight, Cog, Target, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import image2 from '../assets/machinig/gallery 2.jpg';
import image3 from '../assets/machinig/gallery 3.jpg';
import image1 from '../assets/machinig/gallery1.jpg';
import machining from '../assets/machining.png';
import ImageGallery from '../components/ImageGallery';

const MachiningPage = () => {
  const { t } = useTranslation();

  const machinImage = [
    { src: image1, alt: t('machiningPage.gallery.alt1') },
    { src: image2, alt: t('machiningPage.gallery.alt2') },
    { src: image3, alt: t('machiningPage.gallery.alt3') },
  ];

  const machiningServices = [
    {
      icon: Cog,
      title: t('machiningPage.services.cncTurning.title'),
      description: t('machiningPage.services.cncTurning.description')
    },
    {
      icon: Target,
      title: t('machiningPage.services.cncMilling.title'),
      description: t('machiningPage.services.cncMilling.description')
    },
    {
      icon: Wrench,
      title: t('machiningPage.services.drillingThreading.title'),
      description: t('machiningPage.services.drillingThreading.description')
    },
    {
      icon: Award,
      title: t('machiningPage.services.surfaceFinishing.title'),
      description: t('machiningPage.services.surfaceFinishing.description')
    }
  ];

  const capabilities = [
    t('machiningPage.capabilities.tolerance'),
    t('machiningPage.capabilities.surfaceFinish'),
    t('machiningPage.capabilities.materialCompatibility'),
    t('machiningPage.capabilities.sizeRange'),
    t('machiningPage.capabilities.threading'),
    t('machiningPage.capabilities.qualityControl')
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 text-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8" />
                <span className="text-gray-600 font-medium">
                  {t("machiningPage.hero.subtitle")}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {t("machiningPage.hero.title")}
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                {t("machiningPage.hero.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                {t("buttons.getQuote")}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={machining}
                alt={t("machiningPage.hero.imageAlt")}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("machiningPage.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("machiningPage.services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machiningServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t("machiningPage.capabilities.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t("machiningPage.capabilities.description")}
              </p>

              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("machiningPage.whyChoose.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("machiningPage.whyChoose.integration.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("machiningPage.whyChoose.integration.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("machiningPage.whyChoose.qualityAssurance.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t(
                        "machiningPage.whyChoose.qualityAssurance.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("machiningPage.whyChoose.fastTurnaround.title")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("machiningPage.whyChoose.fastTurnaround.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto relative py-20 bg-gray-50  px-4 max-w-7xl">
        <div className=" px-4 max-w-7xl items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("machiningPage.gallery.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("machiningPage.gallery.description")}
            </p>
          </div>
          <ImageGallery
            images={machinImage}
            title={t("machiningPage.gallery.galleryTitle")}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("machiningPage.cta.title")}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t("machiningPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
              {t("buttons.contactUs")}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              {t("machiningPage.cta.viewAllServices")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachiningPage;
