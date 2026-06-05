# 検証方針

## 必須チェック

```bash
yarn format:check
yarn typecheck
yarn lint
yarn build
```

CI でも同じ順序で実行します。

## 手動スモーク

```txt
/
/en/
/local/
/en/local/
/local/chubu/
/en/local/chubu/
/lists/hyakumeizan/
/lists/hyakuteizan/
/mountains/fuji/
/guides/highest-mountains-in-japan/
/zh-TW/
/zh-CN/
/sitemap.xml
/robots.txt
```

確認すること:

- ページが白紙にならない。
- トップ画像が表示され、切り替えが不自然に速くない。
- 検索、都道府県フィルター、標高フィルター、並び替えが動く。
- 二百名山 / 三百名山 / 百低山の別ページが表示される。
- 地図上の点から詳細ページへ遷移できる。
- 言語切り替えで意図したページに留まる。
- デスクトップ / モバイルで明らかな表示崩れがない。
- `sitemap.xml` と `robots.txt` が `200` を返す。

## SEO 確認

デプロイ後、Search Console で以下を確認します。

- 更新した URL を取得できる。
- canonical が想定 URL になっている。
- 英語クエリで表示回数があるページの title / description が検索意図に合っている。
- 高表示回数・低クリックのクエリが増えていない。
