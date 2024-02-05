import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    fallbackLng: "en",
    lng: "en",
    backend: {
      loadPath: "src/i18n/locales/{{lng}}.json",
      addPath: "src/i18n/locales/add/{{lng}}",
    },
    interpolation: { escapeValue: false },
    debug: true,
  });

export default i18n;
