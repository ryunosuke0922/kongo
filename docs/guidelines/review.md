# レビュー観点

## 優先度

1. `yarn format:check`、`yarn typecheck`、`yarn lint`、`yarn build` が通るか。
2. SEO の canonical / hreflang / sitemap / robots に矛盾がないか。
3. 日本語 / 英語の表示文言に抜けや不自然な表現がないか。
4. 山データの変更が表示、検索、構造化データに悪影響を出していないか。
5. デスクトップ / モバイルでテキストや画像が重なっていないか。

## UI

- 既存の色・余白・breakpoint と整合しているか。
- 長い山名、複数都道府県、英語文言で折り返し方針があるか。
- 画像切り替えや hover などの演出が速すぎないか。
- focus-visible が見えるか。

## SEO

- title と description が検索意図に合っているか。
- 英語ページでは `100 Famous Japanese Mountains` の表記が一貫しているか。
- JSON-LD に不正確な緯度 / 経度や空値を出していないか。
- 新規ページが sitemap に入っているか。

## データ

- 外部リンクが存在するか。
- 緯度 / 経度の精度に不安がある値を構造化データへ出していないか。
- 未使用データや重複データを増やしていないか。
