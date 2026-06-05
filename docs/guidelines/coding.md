# コーディング規約

## TypeScript

- `any` は原則使わない。
- 山データの型は `src/types` に寄せる。
- SEO や URL 生成に関わる値は、文字列を散らさず `src/constants` へ寄せる。
- 表示文言は直接書かず、既存の i18n 方針に合わせる。

## Next.js

- 内部リンクは `next/link` を使う。
- SEO メタデータは `Seo` component に集約する。
- 新しい公開ページを追加したら `sitemap.xml.tsx` と `robots.txt` への影響を確認する。
- 本番 origin を追加・変更する場合は、SEO、sitemap、robots、package metadata を同じ変更で確認する。

## UI

- 色、余白、角丸、breakpoint は既存の `src/constants` を優先する。
- テキストを含む領域に不用意な固定高さを付けない。
- 長い英語、長い山名、複数都道府県名で折り返しが破綻しないようにする。
- ボタンやリンクはタップ領域と focus-visible を確認する。
- トップ画像などの視覚演出は、表示速度よりも読みやすさと落ち着きを優先する。

## コメント

- WHAT を説明するコメントは避ける。
- WHY が必要な制約、fallback、回避策にだけ短く書く。
