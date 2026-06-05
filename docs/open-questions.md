# 検討事項

- Google Analytics は固定値ではなく `NEXT_PUBLIC_GA_MEASUREMENT_ID` を使うべきか。
- 本番 origin の一元管理を `robots.txt`、`sitemap.config.js`、`package.json` まで広げるべきか。
- 山詳細ページに、写真、登山口、アクセス、季節、難易度などの本文情報を追加すべきか。
- 山の緯度 / 経度データの出典と精度をどう検証・記録するか。
- UI の挙動が安定したら、CI にブラウザスモークテストを追加すべきか。
