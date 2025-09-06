import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo/logo-1-png.png";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = t("footer.quick_links.items", { returnObjects: true });
  const products = t("footer.products.items", { returnObjects: true });
  const contactInfo = t("footer.contact_info.items", { returnObjects: true });

  // Map icon names to components
  const iconMap = {
    MapPin: MapPin,
    Phone: Phone,
    Mail: Mail,
  };

  return (
    <footer className="bg-primary border-t border-gray-200 mt-10">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12">
          {/* Brand Section */}
          <div className="max-w-sm">
            <img
              src={logo}
              alt={t("footer.brand.image_alt")}
              className="w-32 h-auto mb-6"
            />
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {t("footer.brand.description")}
            </p>
          </div>

          {/* Navigation & Info Sections */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                {t("footer.quick_links.title")}
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="text-gray-600 hover:text-violet-600 transition-colors duration-300 text-sm"
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
                {t("footer.products.title")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {products.map((product) => (
                  <li key={product.path}>
                    <a
                      href={product.path}
                      className="hover:text-violet-600 transition-colors duration-300"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                {t("footer.contact_info.title")}
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent
                        size={16}
                        className="text-violet-600 mt-0.5 flex-shrink-0"
                      />
                      <span>{info.content}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              {t("footer.bottom_bar.copyright")}
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              {t("footer.bottom_bar.links", { returnObjects: true }).map(
                (link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-500 flex items-center">
              <Trans
                i18nKey="footer.bottom_bar.developed_by"
                components={{
                  br: <br />,
                  a: (
                    <a
                      href="https://www.creativeartix.com"
                      className="hover:text-blue-600 transition-colors duration-300 px-2"
                    />
                  ),
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
