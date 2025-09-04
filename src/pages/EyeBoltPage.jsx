import { eyeBoltImages, liftingEyeBoltImages } from '@/assets/Bolts/images';
import ImageGallery from '@/components/ImageGallery';
import BoltNavigator from '@/components/BoltNavigator';

const EyeBoltPage = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <BoltNavigator />
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Eye Bolts & Lifting Bolts
            </h1>
            <p className="text-violet-100 text-lg">DIN 444 EYE BOLTS</p>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    DIN 444 EYE BOLTS
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    DIN 444 UNI 6058 eye bolt is used in mechanical linkages,
                    lifting applications, and as connecting elements
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gray-50 rounded-lg p-4 max-w-md">
                  <img
                    src={eyeBoltImages.mainImage}
                    alt="DIN 444 Eye Bolt" // Fixed alt text
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
                  src={eyeBoltImages.diagram}
                  alt="DIN 444 Eye Bolt Technical Diagram" // Fixed alt text
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
                    <span className="font-semibold">Steel:</span> 8.8, 10.9,
                    12.9
                  </p>
                  <p>
                    <span className="font-semibold">Stainless Steel:</span> A2,
                    A4
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
                  Whether you need Zinc plating, PTFE coatings, or any other
                  surface treatment, we've got you covered. Such as: Zinc
                  plating, Zinc-Nickel plating, Zinc-Flake coatings like Geomet,
                  Dörken, Magni, Corundum, PTFE coatings like Xylan, Xylar, Lubo
                  lubrication, Hot dip galvanising, HDG, Sherardising,
                  Passivating, Antifricor, Powdercoating, Mechanical Zinc,
                  Zinc-Iron... etc.
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <ImageGallery
              images={eyeBoltImages.gallery}
              title="Product Gallery"
            />
          </div>
        </div>

        {/* diin 580 */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Eye Bolts & Lifting Bolts
            </h1>
            <p className="text-violet-100 text-lg underline-offset-2 ">
              DIN 580 LIFTING EYE BOLT
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    DIN 580 LIFTING EYE BOLT
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    DIN 580 ISO 3266 UNI 2947 lifting eye bolt is used in
                    lifting and hoisting heavy loads in a safe and standardized
                    way.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gray-50 rounded-lg p-4 max-w-md">
                  <img
                    src={eyeBoltImages.mainImage}
                    alt="DIN 580 Lifting Eye Bolt" // Fixed alt text
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
                  src={liftingEyeBoltImages.diagram}
                  alt="DIN 580 Lifting Eye Bolt Technical Diagram" // Fixed alt text
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
                    <span className="font-semibold">Steel:</span> 8.8, 10.9,
                    12.9
                  </p>
                  <p>
                    <span className="font-semibold">Stainless Steel:</span> A2,
                    A4
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
                  Whether you need Zinc plating, PTFE coatings, or any other
                  surface treatment, we've got you covered. Such as: Zinc
                  plating, Zinc-Nickel plating, Zinc-Flake coatings like Geomet,
                  Dörken, Magni, Corundum, PTFE coatings like Xylan, Xylar, Lubo
                  lubrication, Hot dip galvanising, HDG, Sherardising,
                  Passivating, Antifricor, Powdercoating, Mechanical Zinc,
                  Zinc-Iron... etc.
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <ImageGallery
              images={liftingEyeBoltImages.gallery}
              title="Product Gallery"
            />

            {/* Weight Chart */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Weight Chart
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <img
                  src={liftingEyeBoltImages.weightChart}
                  alt="DIN 580 Lifting Eye Bolt Weight Chart" // Fixed alt text
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

export default EyeBoltPage;
