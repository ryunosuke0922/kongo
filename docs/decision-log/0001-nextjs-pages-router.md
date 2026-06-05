# 0001. Next.js Pages Router app

| 項目 | 値         |
| :--- | :--------- |
| 状態 | Accepted   |
| 日付 | 2026-06-05 |

## 背景

このサイトは日本百名山の一覧、地方別ページ、多言語切り替え、SEO メタデータ、sitemap を提供する静的寄りの Web サイトです。

既存実装は Next.js Pages Router と `next.config.js` の i18n 設定を前提にしています。

## 選択肢

### 案 A: Pages Router を維持する

- 概要: 既存の Pages Router 構成を維持し、SEO と UI 改善を進める。
- 利点: 変更範囲が小さい。既存の i18n、sitemap、component 構成を活かせる。
- 欠点: App Router の metadata API などは使えない。

### 案 B: App Router へ移行する

- 概要: `src/app` 構成へ移行し、metadata API や Server Component を使う。
- 利点: 新しい Next.js の標準に寄せられる。
- 欠点: ルーティング、i18n、SEO、layout を広く作り直す必要がある。

## 決定

Pages Router を維持します。

現在の課題は App Router 移行ではなく、Search Console で見えている英語クエリへの対応、表示品質、CI/docs 整備です。移行によるリスクより、既存構成のまま改善を進める価値が高いと判断します。

## 影響

- SEO は `Seo` component と `sitemap.xml.tsx` を中心に管理する。
- 新規ページを追加する場合は Pages Router の `src/pages` に追加する。
- App Router 移行は、ルートやデータ取得の再設計が必要になった時点で別 ADR として検討する。
