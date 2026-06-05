/** @type {import('next').NextConfig} */
const MOUNTAIN_SLUG_REDIRECTS = [
  ['ishiduchisan', 'ishizuchisan'],
  ['kirisimayama', 'kirishimayama'],
  ['hayachin', 'hayachinesan'],
  ['ch-kaisan', 'chokaisan'],
  ['kurobe-goroudake', 'kurobe-gorodake'],
  ['jounendake', 'jonendake'],
  ['ryoukamisan', 'ryokamisan'],
  ['hououzan', 'houozan'],
  ['takaridake', 'tekaridake'],
  ['oodai-gaharayama', 'odaigaharayama'],
  ['miyano-uradake', 'miyanouradake'],
  ['oobami', 'obamidake'],
  ['ryuuou', 'ryuodake'],
  ['koumori', 'komoridake'],
  ['nosawadake', 'sannosawadake'],
  ['jizou', 'jizodake'],
  ['iou', 'iodake'],
  ['chouga', 'chogatake'],
  ['ookomori', 'okomoridake'],
  ['oosawa', 'osawadake'],
  ['abearakura', 'abe-arakuradake'],
  ['shirouma', 'shiroumadake'],
  ['shiroumayariga', 'shiroumayarigatake'],
  ['hirogouchi', 'hirogochidake'],
  ['ogouchi', 'ogochidake'],
  ['shougikashira', 'shogikashirayama'],
  ['kotarou', 'kotaroyama'],
  ['yokotoushi', 'yokotoshidake'],
]

module.exports = {
  i18n: {
    locales: ['en', 'ja', 'zh-CN', 'zh-TW'],
    defaultLocale: 'ja',
  },
  async redirects() {
    return MOUNTAIN_SLUG_REDIRECTS.flatMap(([sourceSlug, destinationSlug]) => [
      {
        source: `/mountains/${sourceSlug}/`,
        destination: `/mountains/${destinationSlug}/`,
        permanent: true,
      },
      {
        source: `/:locale(en|zh-CN|zh-TW)/mountains/${sourceSlug}/`,
        destination: `/:locale/mountains/${destinationSlug}/`,
        permanent: true,
      },
    ])
  },
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
}
