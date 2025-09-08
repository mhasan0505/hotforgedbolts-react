import { ArrowDown, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo-1-png.png";
import { navLinks } from "../constants";
import LanguageSelector from "../i18n/LanguageSelector";

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductionDropdownOpen, setIsProductionDropdownOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleProductionDropdown = useCallback(() => {
    setIsProductionDropdownOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsProductionDropdownOpen(false);
  }, []);

  const productionItems = [
    { name: 'Fastening', path: '/fasteners' },
    { name: 'Hot Forging', path: '/hot-forging' },
    { name: 'Machining', path: '/machining' }
  ];

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

              if (link.name === 'Production') {
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={toggleProductionDropdown}
                      className={`font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        isActive || productionItems.some(item => location.pathname === item.path)
                          ? isScrolled
                            ? "text-orange-500"
                            : "text-orange-400"
                          : isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-black hover:text-orange-300"
                      }`}
                    >
                      <span>{t(`nav.${link.name.toLowerCase()}`)}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isProductionDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProductionDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {productionItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeDropdown}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

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
          <div className="flex items-center">
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? t('buttons.closeMenu') : t('buttons.openMenu')}
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

                if (link.name === 'Production') {
                  return (
                    <div key={link.name} className="px-4">
                      <button
                        onClick={toggleProductionDropdown}
                        className={`font-medium transition-colors duration-200 py-2 rounded-lg flex items-center justify-between w-full ${
                          isActive || productionItems.some(item => location.pathname === item.path)
                            ? "text-orange-500 bg-orange-50"
                            : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        }`}
                      >
                        <span>{t(`nav.${link.name.toLowerCase()}`)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isProductionDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Dropdown */}
                      {isProductionDropdownOpen && (
                        <div className="mt-2 ml-4 space-y-1">
                          {productionItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsProductionDropdownOpen(false);
                              }}
                              className="block py-2 px-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
})

export default Header;
