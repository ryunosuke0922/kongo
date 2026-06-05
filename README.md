<p align="center">
  <a href="https://www.famous-mountains-in-japan.com">
    <img width="70%" src="./public/images/img04.jpg" alt="Famous mountains in Japan" />
  </a>
</p>

<h1 align="center">日本百名山の一覧</h1>

<p align="center">website: https://www.famous-mountains-in-japan.com</p>

## 概要

日本百名山を日本語 / 英語 / 簡体字 / 繁体字で閲覧できる Next.js サイトです。

山名、都道府県、地方、標高で日本百名山を探せます。英語ページでは `mountains in Japan`、`100 Famous Japanese Mountains`、`Japanese Alps` などの検索意図に対応する情報設計を重視します。

## 本番環境

```txt
https://www.famous-mountains-in-japan.com
```

## 機能

- トップページで日本百名山 100 座の一覧
- 日本二百名山 / 日本三百名山 / 日本百高山 / 日本百低山の別ページ
- 日本語 / 英語 / 簡体字 / 繁体字切り替え
- 山名検索
- 都道府県絞り込み
- 標高絞り込み
- 番号、標高、50音/アルファベット順の並び替え
- 地方別ページ
- 山詳細ページ
- 目的別ガイドページ
- OpenStreetMap による地図表示
- canonical / hreflang / sitemap / robots
- JSON-LD 構造化データ

## ルート

```txt
/                         日本百名山一覧
/en/                      100 Famous Japanese Mountains list
/local/                   地方別一覧
/en/local/                Regional list
/local/[region]/          地方別の山一覧
/en/local/[region]/       Regional mountain list
/lists/[listId]/          名山リスト別一覧
/mountains/[slug]/        山詳細
/guides/[guideId]/        目的別ガイド
/sitemap.xml              Dynamic sitemap
```

## セットアップ

```bash
yarn install
```

## コマンド

```bash
yarn dev
yarn format
yarn format:check
yarn lint
yarn typecheck
yarn build
yarn start
yarn check
```

Makefile のショートカット:

```bash
make dev
make check
make format
```

## CI

GitHub Actions は Pull Request と `main` / `master` への push で実行します。

CI で確認する項目:

- `yarn format:check`
- `yarn typecheck`
- `yarn lint`
- `yarn build`

## ドキュメント

- [アーキテクチャ](docs/architecture.md)
- [開発](docs/development.md)
- [デプロイ](docs/deployment.md)
- [SEO](docs/seo.md)
- [リリースチェックリスト](docs/release-checklist.md)
- [検討事項](docs/open-questions.md)
- [ガイドライン](docs/guidelines/README.md)
- [Decision Log](docs/decision-log/README.md)

## 補足

本番 URL は現在、以下のファイルに固定値として入っています。

```txt
src/components/molecules/seo/index.tsx
src/pages/sitemap.xml.tsx
public/robots.txt
sitemap.config.js
```

## ライセンス

このプロジェクトは MIT License です。  
詳細は [LICENSE](./LICENSE) を確認してください。
