import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./static/locales/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: en,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: ["en"],
        // keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export const changLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
};

export default i18n;
