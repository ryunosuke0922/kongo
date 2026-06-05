# Git 運用

## ブランチ

- 作業ブランチは `codex/` prefix を基本にする。
- 目的外の変更を混ぜない。
- データ更新、UI 変更、CI/docs 整備は、可能なら変更単位を分ける。

## コミット

コミットメッセージは短く、変更の目的が分かるものにします。

例:

```txt
Improve English SEO metadata
Document deployment checks
Smooth top slideshow transition
```

## Pull Request

PR には以下を含めます。

- 変更概要
- 画面 / SEO / データへの影響
- 検証コマンド
- 未対応事項
- Search Console や Analytics を見て判断した場合は、その根拠
