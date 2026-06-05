# kongo

<p align="center">
  <a href="https://www.famous-mountains-in-japan.com">
    <img width="70%" src="./public/images/img04.jpg" alt="Famous Mountains in Japan preview" />
  </a>
</p>

Famous Mountains in Japan は、日本百名山を中心に、日本二百名山、日本三百名山、日本百高山、日本百低山を探せる多言語の山岳一覧サイトです。

山名、都道府県、地方、標高で山を探せます。英語、日本語、簡体字、繁体字に対応し、海外から日本の山を調べるユーザーにも向けた情報設計にしています。

## Production

```txt
https://www.famous-mountains-in-japan.com
```

canonical、Open Graph、robots.txt、sitemap.xml は `https://www.famous-mountains-in-japan.com` を基準にしています。

## Features

- 日本百名山 100 座の一覧
- 日本二百名山 / 日本三百名山 / 日本百高山 / 日本百低山の一覧
- 英語 / 日本語 / 簡体字 / 繁体字の多言語表示
- 山名検索
- 都道府県フィルター
- 標高フィルター
- 番号、標高、50 音 / アルファベット順の並び替え
- 地方別ページ
- 山詳細ページ
- 目的別ガイドページ
- OpenStreetMap による地図表示
- canonical / hreflang / sitemap / robots
- BreadcrumbList / TouristAttraction / ImageObject / FAQPage などの JSON-LD 構造化データ

## Routes

```txt
/                         日本百名山一覧
/en/                      100 Famous Japanese Mountains list
/zh-CN/                   简体中文首页
/zh-TW/                   繁體中文首頁
/local/                   地方別一覧
/local/[region]/          地方別の山一覧
/lists/[listId]/          名山リスト別一覧
/mountains/[slug]/        山詳細
/guides/[guideId]/        目的別ガイド
/sitemap.xml              Dynamic sitemap
```

## Architecture

```txt
src/
  pages/                  Next.js pages, SSG routes, sitemap, and redirects target pages
  components/             Feature, layout, atom, and molecule components
  constants/              Site constants, mountain list definitions, SEO content, and UI constants
  data/                   Mountain list JSON data
  hooks/                  Filtering and tracking hooks
  i18n/                   English, Japanese, Simplified Chinese, and Traditional Chinese strings
  styles/                 Global styles
  types/                  Shared TypeScript types
  utils/                  SEO path helpers
public/
  images/                 Logo, Open Graph, and mountain images
docs/
  architecture.md
  development.md
  deployment.md
  seo.md
  release-checklist.md
  open-questions.md
  guidelines/
  decision-log/
```

## Development

```bash
yarn install
yarn dev
yarn format
yarn format:check
yarn test
yarn lint
yarn typecheck
yarn build
yarn start
yarn run check
```

Makefile shortcuts:

```bash
make dev
make check
make format
```

## Environment

ローカル開発に必須の環境変数はありません。

本番 URL は現在、以下のファイルに固定値として入っています。

```txt
src/constants/site.ts
sitemap.config.js
public/robots.txt
```

GA4 の Measurement ID は `src/hooks/useTracking.ts` で管理しています。

## CI

GitHub Actions runs on pull requests and pushes to `main` / `master`.

CI checks:

- `yarn format:check`
- `yarn test`
- `yarn typecheck`
- `yarn lint`
- `yarn build`

## Documentation

- [Architecture](docs/architecture.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [SEO](docs/seo.md)
- [Release Checklist](docs/release-checklist.md)
- [Open Questions](docs/open-questions.md)
- [Guidelines](docs/guidelines/README.md)
- [Decision Log](docs/decision-log/README.md)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
