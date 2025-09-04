import React from 'react';
import SEOHead from '../components/shared/SEOHead';
import { seoData } from '../data/seoData';

const ContactPage = () => {
  return (
    <>
      <SEOHead
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        url="https://hotforgedbolts.com/contact"
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-violet-600">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Get in touch with our team for quotes, technical support, or any inquiries
            about our hot forged bolts and fastening solutions.
          </p>
        </div>
        <Contact/>
      </div>
    </>
  );
};

export default ContactPage;