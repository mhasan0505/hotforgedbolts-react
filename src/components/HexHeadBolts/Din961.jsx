import { hexHeadBoltImages961 } from '@/assets/Bolts/images';
import ImageGallery from '../ImageGallery';
import { useTranslation } from 'react-i18next';

const Din961 = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          {t('Hexdin961.header.title')}
        </h1>
        <p className="text-violet-100 text-lg">
          {t('Hexdin961.header.subtitle')}
        </p>
      </div>
      {/* Main Content */}
      <div className="p-6 sm:p-8">
        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {t('Hexdin961.overview.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {t('Hexdin961.overview.description')}
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-50 rounded-lg p-4 max-w-md">
              <img
                src={hexHeadBoltImages961.mainImage}
                alt={t('Hexdin961.overview.imageAlt')}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Technical Diagram */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('Hexdin961.technicalSpecs.title')}
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={hexHeadBoltImages961.diagram}
              alt={t('Hexdin961.technicalSpecs.altText')}
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
                {t('Hexdin961.qualityStandards.title')}
              </h3>
            </div>
            <div className="space-y-2 text-green-700">
              <p>
                <span className="font-semibold">{t('Hexdin961.qualityStandards.steel')}</span> {t('Hexdin961.qualityStandards.steelGrades')}
              </p>
              <p>
                <span className="font-semibold">{t('Hexdin961.qualityStandards.stainlessSteel')}</span> {t('Hexdin961.qualityStandards.stainlessGrades')}
              </p>
              <p>
                <span className="font-semibold">{t('Hexdin961.qualityStandards.thread')}</span> {t('Hexdin961.qualityStandards.threadSpec')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-violet-800">
                {t('Hexdin961.coatings.title')}
              </h3>
            </div>
            <p className="text-violet-700 leading-relaxed">
              {t('Hexdin961.coatings.description')}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery
          images={hexHeadBoltImages961.gallery}
          title={t('Hexdin961.gallery.title')}
        />
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('Hexdin961.weightChart.title')}
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={hexHeadBoltImages961.weightChart}
              alt={t('Hexdin961.weightChart.altText')}
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Din961;
