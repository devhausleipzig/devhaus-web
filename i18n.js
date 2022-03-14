import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import copyEN from './copy/en.js'
import copyDE from './copy/de.js'

const resources = {
  'en': copyEN,
  'de': copyDE
}

i18n
.use(initReactI18next)
.init(
  {
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
});

export default i18n;