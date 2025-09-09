import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translation files directly
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import ru from "./locales/ru.json";
import tr from "./locales/tr.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
  es: { translation: es },
  it: { translation: it },
  ru: { translation: ru },
  tr: { translation: tr },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Force Turkish as default language
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
