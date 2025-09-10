import {
  Award,
  CheckCircle,
  ChevronRight,
  Cog,
  Factory,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { fastenerImage } from "../assets/fastening/image";
import ImageGallery from "../components/ImageGallery";
import { useTranslation } from "react-i18next";

const FastenersPage = () => {
  const { t } = useTranslation();

  const specifications = [
    { label: t("fastenersPage.specifications.materialGrades.label"), value: t("fastenersPage.specifications.materialGrades.value") },
    { label: t("fastenersPage.specifications.sizeRange.label"), value: t("fastenersPage.specifications.sizeRange.value") },
    { label: t("fastenersPage.specifications.threadTypes.label"), value: t("fastenersPage.specifications.threadTypes.value") },
    { label: t("fastenersPage.specifications.coatingOptions.label"), value: t("fastenersPage.specifications.coatingOptions.value") },
  ];

  const applications = [
    t("fastenersPage.applications.structuralSteel"),
    t("fastenersPage.applications.bridgeConstruction"),
    t("fastenersPage.applications.industrialMachinery"),
    t("fastenersPage.applications.automotiveIndustry"),
    t("fastenersPage.applications.railwayInfrastructure"),
    t("fastenersPage.applications.powerGeneration"),
  ];

  const features = [
    {
      icon: Shield,
      title: t("fastenersPage.features.items.bolts.title"),
      description: t("fastenersPage.features.items.bolts.description"),
      path: "/bolts",
    },
    {
      icon: Cog,
      title: t("fastenersPage.features.items.nuts.title"),
      description: t("fastenersPage.features.items.nuts.description"),
      path: "/nuts",
    },
    {
      icon: Award,
      title: t("fastenersPage.features.items.studBolts.title"),
      description: t("fastenersPage.features.items.studBolts.description"),
      path: "/fasteners/stud-bolts",
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
                  {t("common.productionExcellence")}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {t("fastenersPage.hero.title")}
              </h1>
              <p className="text-xl text-textcolor mb-8 leading-relaxed">
                {t("fastenersPage.hero.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-textcolor bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                {t("fastenersPage.hero.getQuote")}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={fastenerImage.main}
                alt={t("fastenersPage.hero.imageAlt")}
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
              {t("fastenersPage.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("fastenersPage.features.description")}
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
                {t("fastenersPage.specifications.title")}
              </h2>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-violet-600 pl-6"
                  >
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
                {t("fastenersPage.applications.title")}
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
      <div className="container mx-auto px-4 max-w-7xl">
        <ImageGallery images={fastenerImage.gallery} title={t("fastenersPage.gallery.title")} />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-violet-400 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t("fastenersPage.cta.title")}</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t("fastenersPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              {t("buttons.contactUs")}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              {t("buttons.viewAll")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastenersPage;
