import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./i18n/en/common.json";
import common_vn from "./i18n/vn/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: common_en },
      vn: { translation: common_vn },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
