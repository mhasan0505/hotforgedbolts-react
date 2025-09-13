import { Package } from 'lucide-react';
import { J_Bolt_image } from "./StudImage";
import { useTranslation } from 'react-i18next';

const J_Bolt = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-7xl mt-24 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
          <div className="flex items-center mb-2">
            <Package className="w-6 h-6 mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t('jBolt.header.title')}
            </h1>
          </div>
          <p className="text-violet-100 text-lg">
            {t('jBolt.header.description')}
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Specifications */}
            <div className="space-y-6">
              {/* Quantity/Grades Section */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800">
                    {t('jBolt.quality.heading')}
                  </h3>
                </div>
                <div className="space-y-2 text-green-700">
                  <p>
                    <span className="font-semibold">{t('jBolt.quality.steel')}:</span> {t('jBolt.quality.steelGrades')}
                  </p>

                  <p>
                    <span className="font-semibold">{t('jBolt.quality.maxLength')}:</span> {t('jBolt.quality.maxLengthValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {t('jBolt.images.productImageHeading')}
                </h3>
                <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={J_Bolt_image.main}
                    alt={t('jBolt.images.mainImageAlt')}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Technical Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {t('jBolt.images.diagramHeading')}
                </h3>
                <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={J_Bolt_image.chart}
                    alt={t('jBolt.images.chartAlt')}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default J_Bolt;
