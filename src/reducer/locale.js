import { LOCALE_EN, LOCALE_JA } from "Localisation";
import { getBrowserLocale } from "Localisation/utils";
import { TOGGLE_LANGUAGE } from "../action/locale";

const locale = (state = getBrowserLocale(), action) => {
    switch (action.type) {
        case TOGGLE_LANGUAGE:
            return state === LOCALE_JA ? LOCALE_EN : LOCALE_JA;
        default:
            return state;
    }
};

export default locale;
