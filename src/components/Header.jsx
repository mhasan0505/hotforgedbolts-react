import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo-1-png.png";
import { navLinks } from "../constants";
import LanguageSelector from "../i18n/LanguageSelector";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Hot Forged Bolts Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? isScrolled
                        ? "text-orange-500"
                        : "text-orange-400"
                      : isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-black hover:text-orange-300"
                  }`}
                >
                  {t(`nav.${link.name.toLowerCase()}`)}
                </Link>
              );
            })}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-black hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-orange-600 flex items-center sm:hidden md:flex"
            >
              {t("buttons.getQuote")}
              <ArrowDown className="animate-bounce duration-75 ml-2" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 h-80 ">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                      isActive
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                    }`}
                  >
                    {t(`nav.${link.name.toLowerCase()}`)}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex items-center justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-orange-600 ml-3 flex"
              >
                {t("buttons.getQuote")}
                <ArrowDown className="animate-bounce duration-75" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
