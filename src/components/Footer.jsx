import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo/logo.webp";

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
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                {t("footer.products.title")}
              </h3>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.path}>
                    <Link
                      to={product.path}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                {t("footer.contact_info.title")}
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon];
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <IconComponent className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {info.title}
                        </p>
                        <p className="text-sm text-gray-600">{info.content}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              {t("footer.bottom_bar.copyright")}
            </p>
            <div className="flex items-center gap-6">
              {t("footer.bottom_bar.links", { returnObjects: true }).map(
                (link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            <p className="text-sm text-gray-600">
              <Trans
                i18nKey="footer.bottom_bar.developed_by"
                components={{
                  link: (
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
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
