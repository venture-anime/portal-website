import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import enMessages from './translations/en.json';
import jaMessages from './translations/ja.json';

// Constants
export const LOCALE_STORAGE_KEY = 'REMEMBER_LOCALE';

export const LOCALE_JA = 'ja';
export const LOCALE_EN = 'en';
export const DEFAULT_LOCALE = LOCALE_JA;

export const languagesList = {
    [LOCALE_EN]: 'English',
    [LOCALE_JA]: '日本語',
};

export const messages = {
    [LOCALE_EN]: enMessages,
    [LOCALE_JA]: jaMessages,
};

const ConnectedIntlProvider = connect(({ locale = DEFAULT_LOCALE }) => ({
    locale,
    messages: messages[locale],
}))(IntlProvider);

export default ConnectedIntlProvider;
