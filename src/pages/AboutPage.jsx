import { Sparkles } from 'lucide-react';
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
      <div className="pt-40">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            About Bkk Bolts
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-slate-800 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              About Bkk Bolts
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            About Bkk Bolts is a leading provider of high-quality hot forged bolts,
            engineered for strength and precision in every application.
          </p>
        </div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
