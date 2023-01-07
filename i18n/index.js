// import de from 'js-yaml-loader!./translations.ja.yaml';
// import en from 'js-yaml-loader!./translations.en.yaml';

import { i18n as _i18n } from './translations.en.json'
import { i18n as __i18n } from './translations.ja.json'

const i18n = {
  translations: {
    en: _i18n,
    ja: __i18n,
  },
  defaultLang: 'ja',
  useBrowserDefault: true,
}

export default i18n
