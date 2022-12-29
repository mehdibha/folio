import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./assets/translations/en.json";
import fr from "./assets/translations/fr.json";
import ur from "./assets/translations/ur.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      ur: {
        translation: ur,
      },
    },

    // default languaage
    lng: "ur",
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    interpolation: {
        escapeValue: false,
    },
  });

export default i18n;
