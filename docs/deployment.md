# デプロイ

本番環境は Vercel での運用を想定しています。

## 本番 URL

```txt
https://www.famous-mountains-in-japan.com
```

## ビルド設定

```txt
Framework: Next.js
Install Command: yarn install --frozen-lockfile
Build Command: yarn build
Output Directory: empty
```

## 本番 URL の固定参照

本番 origin は現在、以下のファイルに固定値として入っています。

```txt
src/constants/site.ts
public/robots.txt
sitemap.config.js
package.json
```

ドメインを変更する場合は、同じ PR で全て更新してください。

## Google Analytics

GA4 は以下で初期化しています。

```txt
src/hooks/useTracking.ts
```

measurement ID は現在固定値です。preview / staging 環境を追加してそこで Analytics を有効化する場合は、先に環境変数へ移してください。

## 本番スモーク確認

```bash
curl -I https://www.famous-mountains-in-japan.com/
curl -I https://www.famous-mountains-in-japan.com/en/
curl -I https://www.famous-mountains-in-japan.com/zh-CN/
curl -I https://www.famous-mountains-in-japan.com/zh-TW/
curl -I https://www.famous-mountains-in-japan.com/robots.txt
curl -I https://www.famous-mountains-in-japan.com/sitemap.xml
curl -I https://www.famous-mountains-in-japan.com/local/chubu/
```

確認項目:

- ホームと各 locale ホームが `200` を返す。
- `robots.txt` が本番 sitemap を指している。
- `sitemap.xml` に日本語 / 英語 / 簡体字 / 繁体字のルートが含まれている。
- canonical / hreflang の URL が `https://www.famous-mountains-in-japan.com` になっている。
- Google Analytics タグが想定したページだけに入っている。
