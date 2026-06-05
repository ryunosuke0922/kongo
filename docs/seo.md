# SEO

## 現在の重点

Search Console では英語の山関連クエリで表示回数が出ています。以下の検索意図に合うページと本文を優先します。

```txt
japan mountains
japanese mountains
mountains in japan
famous mountains in japan
100 famous japanese mountains
japanese alps mountains
mountains near tokyo
mount fuji
```

## 実装済みの基本対応

- locale ごとの title / meta description
- canonical URL
- 日本語 / 英語 / 簡体字 / 繁体字の `hreflang`
- Open Graph / Twitter metadata
- `WebSite`、`Organization`、`BreadcrumbList`、`ItemList`、`FAQPage` の JSON-LD
- 地方ページごとの SEO 文言
- 動的な `sitemap.xml`
- `robots.txt`
- 山詳細ページ
- 目的別ガイドページ
- locale ごとの sitemap alternate link
- 本番 origin と URL 生成の共通化

## コンテンツ方針

- 英語ページでは、ユーザーが検索する自然な英語表現を優先する。
- 英語名は `100 Famous Japanese Mountains` に統一する。
- 地方ページでは、一覧が小さい場合に代表的な山名を本文に含める。
- キーワードの詰め込みは避け、ページ本文として役に立つ内容にする。
- 日本語 / 英語 / 簡体字 / 繁体字の文字列は既存の i18n ファイルで管理する。

## Search Console の確認

週次、またはデプロイ後に確認します。

1. Search Console の検索パフォーマンスを開く。
2. 期間を直近 3 か月にする。
3. クエリを表示回数順に並べる。
4. 表示回数が多く、クリックがないクエリを確認する。
5. 該当ページの title、description、表示本文、内部リンクを調整する。

## 次の候補

- 山ごとの本文追加と写真追加。
- 目的別ガイドページの拡張:
  - beginner-friendly mountains in Japan
  - mountains for Japan travel itineraries
  - famous volcanoes in Japan
- `Place` 構造化データを拡張する前に、緯度 / 経度データの精度を上げる。
