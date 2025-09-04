import { Package, Ruler } from "lucide-react";
import { DIN6915_image } from "./NutImage";
const DIN6915 = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-24">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white p-6 sm:p-8">
          <div className="flex items-center mb-2">
            <Package className="w-6 h-6 mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Nuts</h1>
          </div>
          <p className="text-violet-100 text-lg">DIN 6915 Nut</p>
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
                    M 12 –M 36 
                  </p>
                </div>
              </div>

              {/* Quantity/Grades Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <Package className="w-5 h-5 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Material Grades
                  </h3>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    5-6-8-10-12-ASTM A194 2H-ASTM A194 Gr8-A563
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
                    src={DIN6915_image.main}
                    alt="DIN6915 Hex Nut"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
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
                    src={DIN6915_image.chart}
                    alt="DIN6915 Dimensional Chart"
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

export default DIN6915;
