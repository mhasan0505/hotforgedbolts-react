import { ChevronRight, Factory, Wrench, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import fasteners from "../assets/Fasteners.jpg";
import hotForging from "../assets/Hotforging.webp";
import machining from "../assets/machining.png";

const Production = () => {
  const { t, ready, i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  // Wait for both i18n ready and ensure translations are loaded
  useEffect(() => {
    if (ready && i18n.exists("production.categories")) {
      setIsInitialized(true);
    }
  }, [ready, i18n, i18n.language]);

  // Add error handling for missing translations
  const productionCategories = useMemo(() => {
    // Wait for i18n to be ready and initialized
    if (!ready || !isInitialized) {
      return [];
    }

    // Use i18n.exists to check if the key exists before accessing
    if (!i18n.exists("production.categories")) {
      console.warn("production.categories key does not exist in translations");
      return [];
    }

    try {
      const categories = t("production.categories", { returnObjects: true });

      // Debug logging
      console.log(
        "Raw categories from translation:",
        categories,
        typeof categories
      );

      // Check if it's the translation key itself (fallback)
      if (typeof categories === "string") {
        console.warn("Translation returned as string:", categories);
        return [];
      }

      // More robust checking
      if (
        !categories ||
        !Array.isArray(categories) ||
        categories.length === 0
      ) {
        console.warn("Production categories not found or invalid:", categories);
        return [];
      }

      return categories.map((cat, index) => ({
        id: cat.id,
        title: cat.title,
        description: cat.description,
        image: [fasteners, hotForging, machining][index] || fasteners,
        icon: [Factory, Zap, Wrench][index] || Factory, // fallback to Factory
        features: Array.isArray(cat.features) ? cat.features : [],
        route: cat.route,
      }));
    } catch (error) {
      console.error("Error processing categories:", error);
      return [];
    }
  }, [t, ready, isInitialized, i18n]);

  const [activeCategory, setActiveCategory] = useState("fasteners");

  const activeProduct = productionCategories.find(
    (cat) => cat.id === activeCategory
  );

  // Show loading while i18n is initializing
  if (!ready || !isInitialized || productionCategories.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Loading production categories...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Don't render if no active product found
  if (!activeProduct) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              Product category not found...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("production.header.title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {t("production.header.description")}
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
                    ? "bg-violet-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200"
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
                alt={activeProduct.image_alt}
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
                  {t("production.keyfeatures")}
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
                {t("buttons.viewAll")}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Production Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-16">
          {t("production.stats", { returnObjects: true }).map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-violet-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Production;
