import { Package, Ruler } from "lucide-react";
import { ASME_image } from "../../assets/Nuts/NutImage";
import { useTranslation } from 'react-i18next';

const ASME = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-7xl mt-24">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
          <div className="flex items-center mb-2">
            <Package className="w-6 h-6 mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t('nutASME.header.title')}
            </h1>
          </div>
          <p className="text-violet-100 text-lg">{t('nutASME.header.subtitle')}</p>
        </div>

        {/* Main Content */}
        <div className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Specifications */}
            <div className="space-y-6">
              {/* Diameter Section */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-6 border border-violet-100">
                <div className="flex items-center mb-4">
                  <Ruler className="w-5 h-5 text-violet-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t('common.diameterrange')}
                  </h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-violet-600 mb-1">
                    {t('nutASME.specifications.diameter.metric')}
                  </p>
                  <p className="text-gray-600 font-medium">{t('nutASME.specifications.diameter.imperial')}</p>
                </div>
              </div>

              {/* Quantity/Grades Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <Package className="w-5 h-5 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t('nutASME.specifications.grades.title')}
                  </h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {t('nutASME.specifications.grades.value')}
                  </p>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {t('common.productImage')}
                </h3>
                <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={ASME_image.main}
                    alt={t('nutASME.images.main.alt')}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Technical Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {t('common.dimensionalChart')}
                </h3>
                <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={ASME_image.diagram}
                    alt={t('nutASME.images.diagram.alt')}
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

export default ASME;
