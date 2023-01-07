// import de from 'js-yaml-loader!./translations.ja.yaml';
// import en from 'js-yaml-loader!./translations.en.yaml';

var en = require('./translations.en.json')
var ja = require('./translations.ja.json')

const i18n = {
  translations: {
    en: en.i18n,
    ja: ja.i18n,
  },
  defaultLang: 'ja',
  useBrowserDefault: true,
}

module.exports = i18n
