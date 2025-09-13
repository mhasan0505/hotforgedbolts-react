import { useTranslation } from 'react-i18next';
import ImageGallery from "../ImageGallery";
import { StudImageDin939 } from "./StudImage";

const DIN939 = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-7xl mt-24 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          {t('StudDIN939.header.title')}
        </h1>
        <p className="text-violet-100 text-lg">{t('StudDIN939.header.subtitle')}</p>
      </div>
      {/* Main Content */}
      <div className="p-6 sm:p-8">
        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {t('StudDIN939.productOverview.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {t('StudDIN939.productOverview.description')}
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-50 rounded-lg p-4 max-w-md">
              <img
                src={StudImageDin939.mainImage}
                alt={t('StudDIN939.productOverview.imageAlt')}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                srcset=""
              />
            </div>
          </div>
        </div>

        {/* Technical Diagram */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('StudDIN939.technicalSpecifications.title')}
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={StudImageDin939.diagram}
              alt={t('StudDIN939.technicalSpecifications.diagramAlt')}
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Quality & Coatings */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-800">
                {t('StudDIN939.qualityStandards.title')}
              </h3>
            </div>
            <div className="space-y-2 text-green-700">
              <p>
                <span className="font-semibold">{t('StudDIN939.qualityStandards.steel')}:</span> 8.8, 10.9, 12.9
              </p>
              <p>
                <span className="font-semibold">{t('StudDIN939.qualityStandards.stainlessSteel')}:</span> ASTM
                A193,ASTM A320,ASTM A453
              </p>
              <p>
                <span className="font-semibold">{t('StudDIN939.qualityStandards.grade')}:</span> B7,
                B16,B7M,L7,L7M,B8,B8M
              </p>
              <p>
                <span className="font-semibold">{t('StudDIN939.qualityStandards.maxLength')}:</span> {t('StudDIN939.qualityStandards.maxLengthValue')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-violet-800">
                {t('StudDIN939.availableCoatings.title')}
              </h3>
            </div>
            <p className="text-violet-700 leading-relaxed">
              {t('StudDIN939.availableCoatings.description')}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery
          images={StudImageDin939.gallery}
          title={t('StudDIN939.productGallery.title')}
        />
        {/* Weight Chart */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('StudDIN939.weightChart.title')}
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={StudImageDin939.weightChart}
              alt={t('StudDIN939.weightChart.alt')}
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIN939;
