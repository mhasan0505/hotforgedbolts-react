import { hexHeadBoltImages961 } from '@/assets/Bolts/images';
import ImageGallery from '../ImageGallery';

const Din961 = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          Hex Head Bolt
        </h1>
        <p className="text-violet-100 text-lg">
          DIN 961 ISO 8765 HEXAGON HEAD BOLT
        </p>
      </div>
      {/* Main Content */}
      <div className="p-6 sm:p-8">
        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                DIN 961 ISO 8765 HEXAGON HEAD BOLT
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                DIN 961 ISO 8765 UNI 5740 Hexagon head boltis a fully threaded
                hexagon head bolt with fine pitch metric thread.These attributes
                make them suitable for use in areas that are applications
                requiring precise thread engagement and high clamping force.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-50 rounded-lg p-4 max-w-md">
              <img
                src={hexHeadBoltImages961.mainImage}
                alt="DIN 961 ISO 8765 Hexagon Head Bolt"
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Technical Diagram */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={hexHeadBoltImages961.diagram}
              alt="DIN 961 ISO 8765 Technical Diagram"
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
                Quality Standards
              </h3>
            </div>
            <div className="space-y-2 text-green-700">
              <p>
                <span className="font-semibold">Steel:</span> 8.8, 10.9, 12.9
              </p>
              <p>
                <span className="font-semibold">Stainless Steel:</span> A2, A4
              </p>
              <p>
                <span className="font-semibold">Thread:</span> 6g
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-violet-800">
                Available Coatings
              </h3>
            </div>
            <p className="text-violet-700 leading-relaxed">
              Whether you need Zinc plating, PTFE coatings, or any other surface
              treatment, we've got you covered. Such as: Zinc plating,
              Zinc-Nickel plating, Zinc-Flake coatings like Geomet, Dörken,
              Magni, Corundum, PTFE coatings like Xylan, Xylar, Lubo
              lubrication, Hot dip galvanising, HDG, Sherardising, Passivating,
              Antifricor, Powdercoating, Mechanical Zinc, Zinc-Iron... etc.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery
          images={hexHeadBoltImages961.gallery}
          title="Product Gallery"
        />
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Weight Chart
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <img
              src={hexHeadBoltImages961.weightChart}
              alt="Weight Chart"
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Din961;
