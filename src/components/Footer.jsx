import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo/logo-1-png.png";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12">
          {/* Brand Section */}
          <div className="max-w-sm">
            <img
              src={logo}
              alt="Hot Forged Bolts Logo"
              className="w-32 h-auto mb-6"
            />
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Leading manufacturer of high-quality hot forged bolts, fasteners,
              and precision machined components for industrial applications
              worldwide.
            </p>
            {/* <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-violet-50 rounded-full hover:bg-violet-100 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} className="text-violet-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} className="text-violet-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={18} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} className="text-blue-600" />
              </a>
            </div> */}
          </div>

          {/* Navigation & Info Sections */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                Our Products
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="/hot-forging"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Hot Forged Bolts
                  </a>
                </li>
                <li>
                  <a
                    href="/fasteners"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Fasteners
                  </a>
                </li>
                <li>
                  <a
                    href="/machining"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Precision Machining
                  </a>
                </li>
                <li>
                  <a
                    href="/bolts"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Bolts
                  </a>
                </li>
                <li>
                  <a
                    href="/nuts"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Nuts
                  </a>
                </li>
                <li>
                  <a
                    href="/studs-bolts"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Studs Bolts
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    3. Kazan Sk. 7/AAltınova <br /> 16250 Osmangazi̇/Bursa,
                    Türkiye
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-violet-600 flex-shrink-0" />
                  <span>+905435533387</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-violet-600 flex-shrink-0" />
                  <span>info@hotforgedbolts.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Brkkol Alüminyum Metal Endüstri Tic Ltd. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-500 flex items-center">
              Design & Developed by <br />
              <a
                href="https://www.creativeartix.com"
                className="hover:text-blue-600 transition-colors duration-300 px-2"
              >
                Creative Artix
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
