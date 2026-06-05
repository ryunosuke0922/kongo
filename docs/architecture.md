# アーキテクチャ

このリポジトリは単一パッケージの Next.js Pages Router アプリです。

## 構成

```txt
src/
  components/
  constants/
  data/
  hooks/
  i18n/
  pages/
  styles/
  types/
public/
docs/
```

## `src/pages`

ページルーティングを担当します。

主なページ:

- `index.tsx`: 日本百名山100座のトップページ
- `local/index.tsx`: 地方別一覧
- `local/[region]/index.tsx`: 地方ごとの山一覧
- `lists/[listId].tsx`: 日本百名山 / 二百名山 / 三百名山 / 百低山のリスト別ページ
- `mountains/[slug].tsx`: 山詳細ページ
- `guides/[guideId].tsx`: 目的別ガイドページ
- `404.tsx`: Not Found ページ
- `sitemap.xml.tsx`: 動的 sitemap

Pages Router の i18n 設定により、日本語 / 英語 / 簡体字 / 繁体字の URL を扱います。

## `src/components`

画面表示を担当します。

主な分類:

- `layouts/`: ページ単位の大枠
- `features/`: header、footer、sidebar、mountain explorer などの画面機能
- `molecules/`: card、filter、search、SEO などの再利用 UI
- `atoms/`: テキストなどの小さい部品

## `src/data`

山データを管理します。

主なファイル:

- `mountains.json`: 日本百名山の表示・検索・構造化データの元になる山一覧
- `hyakuteizan.json`: 日本百低山データ
- `nihyakumeizan.json`: 日本二百名山データ
- `sambyakumeizan.json`: 日本三百名山データ

緯度 / 経度や外部サービス URL など、信頼性が SEO や構造化データに影響する値は慎重に更新します。

## `src/i18n`

日本語 / 英語 / 簡体字 / 繁体字の表示文言を管理します。

表示文言を追加する場合は、原則として `ja.ts`、`en.ts`、`zhCN.ts`、`zhTW.ts` を同じ変更で更新します。

## `src/constants`

サイト全体で共有する値を置きます。

主なファイル:

- `regionLinks.ts`: 地方ページへのリンク
- `seoContent.ts`: 地方ページごとの SEO 文言
- `site.ts`: 本番 origin、OG image、Google site verification などの SEO 固定値
- `mountainLists.ts`: 名山リスト統合、slug 生成、別ページ用のリスト別抽出
- `ui.ts`: UI 色・余白・半径などの共通値
- `breakpoints.ts`: レスポンシブ breakpoint

## SEO の流れ

```txt
山データ / i18n / SEO constants
  ↓
Seo component
  ↓
title / description / canonical / hreflang
  ↓
JSON-LD
  ↓
Search Console / Google 検索
```

## デプロイの流れ

```txt
Pull Request
  ↓
GitHub Actions
  ↓
format / typecheck / lint / build
  ↓
Vercel deploy
  ↓
Search Console / Analytics 確認
```
