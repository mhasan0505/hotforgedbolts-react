import { countersunkBoltImages } from '@/assets/Bolts/images';
import BoltNavigator from '@/components/BoltNavigator';
import ImageGallery from '@/components/ImageGallery';

const CounterSunkPage = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <BoltNavigator/>
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Counter Sunk Allen Bolts
            </h1>
            <p className="text-violet-100 text-lg">
              DIN 7991 COUNTERSUNK ALLEN BOLT
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    DIN 7991 COUNTERSUNK ALLEN BOLT
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    ISO-10642-DIN-7991-UNI5933 Hexalobular Socket Countersunk
                    Head Bolt Used when a flush surface is needed after
                    installation.These attributes make them suitable for use in
                    areas that are common in machinery, automotive, furniture,
                    electronics, and structural assemblies
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gray-50 rounded-lg p-4 max-w-md">
                  <img
                    src={countersunkBoltImages.mainImage}
                    alt="DIN 7991 Countersunk Allen Bolt"
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
                  src={countersunkBoltImages.diagram}
                  alt="DIN 7991 Technical Diagram"
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
              images={countersunkBoltImages.gallery}
              title="Product Gallery"
            />

            {/* Weight Chart */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Weight Chart
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <img
                  src={countersunkBoltImages.weightChart}
                  alt="Weight Chart"
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

export default CounterSunkPage;
