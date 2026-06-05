# 開発

## セットアップ

```bash
yarn install
```

## 開発サーバー

```bash
yarn dev
```

デフォルト URL:

```txt
http://localhost:3000
```

必要に応じて別ポートで起動します。

```bash
yarn dev -p 3001
```

ページが白紙で `/_next/static/chunks/*.js` が 404 を返す場合は、開発サーバーを止めて `.next` を削除し、起動し直します。

```bash
rm -rf .next
yarn dev -p 3001
```

## 検証

```bash
yarn format:check
yarn typecheck
yarn lint
yarn build
```

Or:

```bash
make check
```

## フォーマット

```bash
yarn format
```

## 補足

- 単一パッケージの Next.js アプリです。
- パッケージマネージャーは Yarn 1 です。
- CI では Node 22 を使います。
- アプリ本体のコードは `src` 配下です。
- 山データは `src/data/mountains.json`、`src/data/nihyakumeizan.json`、`src/data/sambyakumeizan.json`、`src/data/hyakukozan.json`、`src/data/hyakuteizan.json` にあります。
- 機能 PR では、目的外の一括整形やファイル移動を混ぜないでください。
