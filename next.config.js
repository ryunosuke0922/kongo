/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'ja', 'zh-CN', 'zh-TW'],
    defaultLocale: 'ja',
  },
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
}
