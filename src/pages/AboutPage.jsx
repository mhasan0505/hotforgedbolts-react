import About from "../components/About";
import SEOHead from "../components/shared/SEOHead";
import { seoData } from "../data/seoData";

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        url="https://hotforgedbolts.com/about"
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 text-orange-700">
            About Hot Forged Bolts
          </h1>
          <p className="text-lg text-gray-900 text-center mb-12 max-w-3xl mx-auto">
            Learn more about our company, our mission, and our commitment to
            delivering high-quality fastening solutions to industries worldwide.
          </p>
        </div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
