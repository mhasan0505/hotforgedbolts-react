import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import englishFlag from "../assets/Icons/flag/english.png";
import germanFlag from "../assets/Icons/flag/germany.png";
import italianFlag from "../assets/Icons/flag/italy.png";
import russianFlag from "../assets/Icons/flag/russia.png";
import spanishFlag from "../assets/Icons/flag/spain.png";
import turkishFlag from "../assets/Icons/flag/turkey.png";

const languageOptions = [
  {
    language: "English",
    code: "en",
    flag: englishFlag,
  },
  { language: "Italiano", code: "it", flag: italianFlag },
  { language: "Deutsch", code: "de", flag: germanFlag },
  { language: "Español", code: "es", flag: spanishFlag },
  { language: "Русский", code: "ru", flag: russianFlag },
  { language: "Türkçe", code: "tr", flag: turkishFlag },
];

const LanguageSelector = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Use i18n.language directly instead of separate state
  const currentLanguage = languageOptions.find(lang => lang.code === i18n.language);

  const handleLanguageChange = (selectedCode) => {
    i18n.changeLanguage(selectedCode); // This will trigger re-renders
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'w-auto'}`}>
      {/* Selected Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors ${
          isMobile ? 'w-full justify-between' : 'min-w-[120px]'
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={currentLanguage?.flag}
            alt={currentLanguage?.language}
            className="w-5 h-4 object-cover rounded-sm"
          />
          <span className="text-sm font-medium">
            {isMobile ? currentLanguage?.language : currentLanguage?.code.toUpperCase()}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 ${
          isMobile ? 'w-full' : 'min-w-[160px]'
        }`}>
          {languageOptions.map(({ language: langName, code, flag }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors ${
                code === i18n.language ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
              }`}
            >
              <img
                src={flag}
                alt={langName}
                className="w-5 h-4 object-cover rounded-sm"
              />
              <span className="text-sm font-medium">{langName}</span>
              {code === i18n.language && (
                <div className="ml-auto w-2 h-2 bg-indigo-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LanguageSelector;
