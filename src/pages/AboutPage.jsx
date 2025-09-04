import React from 'react';
import SEOHead from '../components/shared/SEOHead';
import { seoData } from '../data/seoData';
import About from '../components/About';

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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-violet-600">
            About Hot Forged Bolts
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Learn more about our company, our mission, and our commitment to delivering
            high-quality fastening solutions to industries worldwide.
          </p>
        </div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;