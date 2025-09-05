import { useTranslation, Trans } from "react-i18next";
import aboutBanner from "../assets/aboutus.jpg";
import {
  Award,
  Users,
  Factory,
  Target,
  Star,
  Lightbulb,
  Heart,
  Leaf,
} from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Factory size={24} />,
      value: "25+",
      label: t("about.stats.years_experience"),
    },
    {
      icon: <Users size={24} />,
      value: "500+",
      label: t("about.stats.satisfied_clients"),
    },
    {
      icon: <Award size={24} />,
      value: "99%",
      label: t("about.stats.quality_assurance"),
    },
    {
      icon: <Target size={24} />,
      value: "24/7",
      label: t("about.stats.customer_support"),
    },
  ];

  // Move values array inside render to recalculate on language change
  const valuesData = t("about.values.items", { returnObjects: true });
  const values = valuesData.map((item, index) => ({
    icon: [
      <Star size={24} />,
      <Lightbulb size={24} />,
      <Heart size={24} />,
      <Leaf size={24} />,
    ][index],
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="bg-white py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <Trans
                  i18nKey="about.hero.title"
                  components={{ span: <span className="text-violet-600" /> }}
                />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.hero.description")}
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
                alt={t("about.hero.image_alt")}
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
            {t("about.values.title")}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("about.values.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-600 mb-4">{value.icon}</div>
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
          <h3 className="text-3xl font-bold text-white mb-6">
            {t("about.mission.title")}
          </h3>
          <p className="text-xl text-violet-100 leading-relaxed max-w-4xl mx-auto">
            {t("about.mission.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
