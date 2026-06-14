@AGENTS.md

## 2026-06-12 成長戦略まとめ依頼（MediaXAI, Discord）
- GSC 28日実績: 17クリック/626表示。主要KWが11〜20位に集中（ダイエットインソール ランキング15位等）。
- 戦略: 既存11-20位ページ強化→一次データ化→拡張の優先順で提案送信済み。

## 2026-06-12 11-20位ページ強化 完了
- 対象4ページ: /runway-cure-sole/（タイトル刷新+どこで売ってる・外反母趾セクション追加）、/ranking/（タイトルに「ランキング」追加+市販チャネル比較セクション）、/pitsole/（知恵袋FAQ追加）、/articles/donki-insole/（製品×ドンキ取扱セクション+FAQ）
- sitemap lastmod 4件を2026-06-12に更新。source/deploy両repoにpush済み、本番反映を検証済み。
- 追加コンテンツは全て既存の確認済み情報ベース（架空の口コミ・取扱情報なし）。

## 2026-06-12 一次データ化フェーズ✅（MediaXAI「次に進もう」承認）
- 3製品の公式スペックを公式ソースのみから調査（リサーチagent、全項目に出典URL紐付け、推測値排除）
- 実装: /ranking/に3製品スペック比較表(id=specs)+TOC更新、/pitsole/ /runway-cure-sole/ /slim-up-insole/ に各公式スペック表（出典・参照日2026-06-12付き）
- 修正: pitsoleお手入れFAQ「水洗い非推奨」→公式は「中性洗剤手洗い可・洗濯機厳禁」に訂正（schema+本文）
- E-E-A-T確認: 症状系12ページ全てに医療免責あり（問題なし）
- ⚠️要承認事項（MediaXAIに報告）: runwayの価格表記が公式現行と不一致（ページ4,980/9,960/14,900円+schema7678 vs 公式現行6,980/11,980/17,960円）。形状も公式ECは「ソックス型」表記。料金保護ルールに従い未変更・承認待ち

## 2026-06-12 runway価格・形状の公式統一✅（MediaXAI承認「公式に即合わせて」）
- 価格: 4,980/9,960(3足)/14,900(5足) → 公式現行 6,980/11,980(2足)/17,960(3足)円に更新（参照日明記）。schema価格7678→6980
- 形状: 「靴にセットする薄型」→「足に直接装着するソックス型」へ統一（runway本体・pitsole-vs-runway・runway-vs-slimupの3ページ+FAQ/schema）
- 比較結論も更新: 単品は両者同額6,980円、セット単価はスリムアップ有利（4,480 vs 約5,987円）
- sitemap lastmod: compare2ページも2026-06-12に更新

## 2026-06-13 ③拡張フェーズ着手（MediaXAI「③進めよう」承認）
- 目標121→200ページ。既存スラッグ棚卸し→カニバリゼロの新規KW設計→solegen.pyパターンで生成。

## 2026-06-13 Phase C バッチ1完了✅（13本: 121→134ページ）
- C1スポーツ6: volleyball/futsal/marathon/table-tennis/ski-snowboard/trail-running
- C2職業7: teacher/chef-kitchen/delivery-driver/warehouse-work/childcare-worker/pharmacist/part-time-standing
- 設計マップ: ~/.openclaw/workspace/sole-lab-kw-expansion-phase-c.md（第1期65本→186p、残14本はGSC実証後に追補で200到達）
- データ: sole-kw-gen/soledata_c1.py c2.py（solegen.py DATE=2026-06-13に更新済み）。ランウェイ=ソックス型を全記事で正確に反映
- sitemap 134URL。残りクラスタ: C3靴3/C4属性4/C5症状7/C6シーン5/C7購入6/C8ブランド比較6/C9知識9/C10ダイエット7=52本

## 2026-06-13 Phase C第1期完了✅（60本: 121→181ページ）
- バッチ2: C5症状7/C6シーン5 / バッチ3: C3靴3/C4属性4/C7購入6 / バッチ4: C8ブランド比較6/C9知識9/C10ダイエット7
- 全60本実データ・出典・YMYL/景表法配慮（症状=受診案内/ダイエット=誇大表現排除/ブランド比較=優劣断定なし公式情報のみ/医療用足底板=制度正確）
- データ: soledata_c1〜c9.py。sitemap181URL。残り=GSC実証後に追補で200目標（設計マップ参照）
