import { Package, Ruler } from "lucide-react";
import { DIN529_image } from "./StudImage";

const DIN529 = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl mt-24 p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
            <div className="flex items-center mb-2">
              <Package className="w-6 h-6 mr-3" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                DIN 529 ANCHOR BOLT
              </h1>
            </div>
            <p className="text-violet-100 text-lg">
              DIN 529 is a German standard that defines various types of anchor
              bolts (also called foundation bolts), which are used to embed in
              concrete for securing structural components such as columns, steel
              frames, and machinery.{" "}
            </p>
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
                      Diameter Range
                    </h3>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-2xl font-bold text-violet-600 mb-1">
                      M 20 – M 72
                    </p>
                    <p className="text-gray-600 font-medium">(7/8" – 3")</p>
                  </div>
                </div>

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
                    <span className="font-semibold">Stainless Steel:</span>ASTM A193,ASTM A320,ASTM A453
                  </p>
                  <p>
                    <span className="font-semibold">Grade:</span> B7, B16,B7M,L7,L7M,B8,B8M
                  </p>
                  <p>
                    <span className="font-semibold">Max Length:</span> Up to 15000mm
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
                      src={DIN529_image.main}
                      alt="DIN934 Hex Nut"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Technical Chart */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Dimensional Chart
                  </h3>
                  <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={DIN529_image.chart}
                      alt="DIN934 Dimensional Chart"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIN529;
