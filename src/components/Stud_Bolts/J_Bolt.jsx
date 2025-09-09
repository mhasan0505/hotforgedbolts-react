import { Package } from 'lucide-react';
import { J_Bolt_image } from "./StudImage";

const J_Bolt = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-24 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
          <div className="flex items-center mb-2">
            <Package className="w-6 h-6 mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              J TYPE ANCHOR BOLT
            </h1>
          </div>
          <p className="text-violet-100 text-lg">
            A J anchor bolt is a type of fastener shaped like the letter "J",
            commonly used in construction and structural applications
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
                    Quality Standards
                  </h3>
                </div>
                <div className="space-y-2 text-green-700">
                  <p>
                    <span className="font-semibold">Steel:</span> 8.8, 10.9,
                    12.9
                  </p>

                  <p>
                    <span className="font-semibold">Max Length:</span> Up to
                    15000mm
                  </p>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Product Image
                </h3>
                <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={J_Bolt_image.main}
                    alt="J_Bolt"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Technical Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Diagram
                </h3>
                <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={J_Bolt_image.chart}
                    alt="J_Bolt Technical Chart"
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
