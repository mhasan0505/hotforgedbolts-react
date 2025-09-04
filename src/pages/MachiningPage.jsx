import { ChevronRight, Wrench, Cog, Target, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import machining from '../assets/machining.png';
import image1 from '../assets/machinig/gallery1.jpg';
import image2 from '../assets/machinig/gallery 2.jpg';
import image3 from '../assets/machinig/gallery 3.jpg';
import ImageGallery from '../components/ImageGallery';

const machinImage = [
  { src: image1, alt: 'Machining Process 1' },
  { src: image2, alt: 'Machining Process 2' },
  { src: image3, alt: 'Machining Process 3' },
];

const machiningServices = [
  {
    icon: Cog,
    title: "CNC Turning",
    description: "Precision turning operations for cylindrical components with tight tolerances and superior surface finish."
  },
  {
    icon: Target,
    title: "CNC Milling",
    description: "Complex milling operations for creating precise geometries and features on various workpiece materials."
  },
  {
    icon: Wrench,
    title: "Drilling & Threading",
    description: "Accurate hole drilling and thread cutting operations to meet exact specifications and standards."
  },
  {
    icon: Award,
    title: "Surface Finishing",
    description: "Professional surface finishing techniques to achieve required surface roughness and appearance."
  }
];

const capabilities = [
  "Tolerance: ±0.01mm precision",
  "Surface finish: Ra 0.8 μm or better",
  "Material compatibility: All steel grades",
  "Size range: M6 to M100",
  "Threading: Metric and Imperial",
  "Quality control: 100% inspection"
];

const MachiningPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 text-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8" />
                <span className="text-gray-600 font-medium">
                  Precision Manufacturing
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Precision Machining Services
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                To meet precise dimensional and functional requirements, we
                offer comprehensive machining services following the hot forging
                process. Our in-house machining capabilities include CNC
                turning, milling, drilling, and threading operations, ensuring
                complete control over final turned part accuracy and surface
                finish.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Get Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={machining}
                alt="Precision Machining"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Machining Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive machining solutions to transform your hot forged
              components into precision-engineered parts that meet the most
              demanding specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machiningServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technical Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art machining equipment and skilled technicians
                ensure that every component meets the highest standards of
                precision and quality.
              </p>

              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Machining?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Complete Integration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Seamless transition from hot forging to precision
                      machining
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Assurance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rigorous quality control at every stage of production
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fast Turnaround
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Efficient production processes for quick delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto relative py-20 bg-gray-50  px-4 max-w-7xl">
        <div className=" px-4 max-w-7xl items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Machining Gallery
            </h2>
            <p className="text-lg text-gray-600">
              See our precision machining capabilities in action
            </p>
          </div>
          <ImageGallery
            images={machinImage}
            title="Machining Process Gallery"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Precision You Can Trust</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that precision machining makes for your
            critical components. Get a quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachiningPage;
