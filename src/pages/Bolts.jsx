import { allenBoltImages } from "../assets/Bolts/images";
import BoltNavigator from "../components/BoltNavigator";
import ImageGallery from "../components/ImageGallery";
import { useTranslation } from 'react-i18next';

function Bolts() {
  const { t } = useTranslation();

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      {/* navigate section  */}

      <BoltNavigator />

      {/* Allen Bolts Section */}
      <div id='allen-bolts' className="container mx-auto max-w-7xl">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              {t('boltsPage.header.title')}
            </h1>
            <p className="text-violet-100 text-lg">
              {t('boltsPage.header.subtitle')}
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {t('boltsPage.overview.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {t('boltsPage.overview.description')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gray-50 rounded-lg p-4 max-w-md">
                  <img
                    src={allenBoltImages.mainImage}
                    alt={t('boltsPage.overview.imageAlt')}
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Technical Diagram */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                {t('boltsPage.technicalSpecs.title')}
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <img
                  src={allenBoltImages.diagram}
                  alt={t('boltsPage.technicalSpecs.diagramAlt')}
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
                    {t('boltsPage.qualityStandards.title')}
                  </h3>
                </div>
                <div className="space-y-2 text-green-700">
                  <p>
                    <span className="font-semibold">{t('boltsPage.qualityStandards.steel.label')}:</span> {t('boltsPage.qualityStandards.steel.value')}
                  </p>
                  <p>
                    <span className="font-semibold">{t('boltsPage.qualityStandards.stainlessSteel.label')}:</span> {t('boltsPage.qualityStandards.stainlessSteel.value')}
                  </p>
                  <p>
                    <span className="font-semibold">{t('boltsPage.qualityStandards.thread.label')}:</span> {t('boltsPage.qualityStandards.thread.value')}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-violet-800">
                    {t('boltsPage.coatings.title')}
                  </h3>
                </div>
                <p className="text-violet-700 leading-relaxed">
                  {t('boltsPage.coatings.description')}
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <ImageGallery
              images={allenBoltImages.gallery}
              title={t('boltsPage.gallery.title')}
            />

            {/* Weight Chart */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                {t('boltsPage.weightChart.title')}
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <img
                  src={allenBoltImages.weightChart}
                  alt={t('boltsPage.weightChart.alt')}
                  className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bolts;
