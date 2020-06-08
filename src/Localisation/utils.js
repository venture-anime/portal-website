import { DEFAULT_LOCALE, languagesList, LOCALE_STORAGE_KEY } from "./index";

export const getBrowserLocale = () => {
    const normalizeWithDefault = str => {
        const locale = str.toLowerCase().split(/[_-]+/)[0];
        if (locale in languagesList) {
            return locale;
        }

        return DEFAULT_LOCALE;
    };

    if (typeof window !== "undefined" && window.localStorage) {
        const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        if (savedLocale) {
            return normalizeWithDefault(savedLocale);
        }
    }
    if (typeof navigator !== "undefined") {
        if (navigator.languages && navigator.languages[0]) {
            return normalizeWithDefault(navigator.languages[0]);
        }

        if (navigator.language) {
            return normalizeWithDefault(navigator.language);
        }
        if (navigator.userLanguage) {
            return normalizeWithDefault(navigator.userLanguage);
        }
    }

    return DEFAULT_LOCALE;
};

export const saveBrowserLocale = locale => {
    if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
};
