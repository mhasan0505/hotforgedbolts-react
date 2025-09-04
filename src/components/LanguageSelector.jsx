import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-violet-purple transition-colors duration-200 rounded-lg hover:bg-gray-50"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{supportedLanguages[language].name}</span>
        <span className="sm:hidden">{supportedLanguages[language].flag}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {Object.entries(supportedLanguages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                  language === code ? 'bg-violet-50 text-violet-purple font-medium' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {language === code && (
                  <div className="ml-auto w-2 h-2 bg-violet-purple rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;