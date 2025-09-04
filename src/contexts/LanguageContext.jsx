import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Supported languages from NOTE.md
export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  it: { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  pt: { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ru: { code: 'ru', name: 'Русский', flag: '🇷🇺' }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to English
    const saved = localStorage.getItem('hotforgedbolts-language');
    return saved && SUPPORTED_LANGUAGES[saved] ? saved : 'en';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('hotforgedbolts-language', language);
    // Update document language attribute
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    currentLanguage: SUPPORTED_LANGUAGES[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};