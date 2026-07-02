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

## 2026-06-14 ②内部リンク網整備✅（MediaXAI「残タスク進めよう」承認）
- /articles/ を19件→全164記事のカテゴリー別ハブに刷新（10クラスタ: 症状27/スポーツ17/職業15/靴12/属性8/シーン8/ダイエット16/購入14/製品比較26/使い方21）。各記事のmetadata title/descをスクリプト抽出して索引化（カニバ無し・LLM生成なし）。アンカーナビ+CollectionPage ItemList(164)構造化データ
- 全ページ到達性: Header/Footerに「記事一覧」追加、Footer「カテゴリー」の死んだspan3件→ハブ各カテゴリーへのリンク化、トップに「目的から記事を探す」セクション新設（6カテゴリー導線+全記事リンク）
- 🐛切れリンク修正: /slimup-insole/（ハイフン無し=404）が page/ranking×3/Footer の5箇所→正規 /slim-up-insole/ に。スリムアップ製品ページがトップ・ランキング・フッターから到達不能だった重大バグを解消
- sitemap lastmod更新: / /articles/ /ranking/ を2026-06-14に（URL数181不変）。source/deploy両repo push済み、本番反映を全項目curl検証済み（/articles/=164リンク・トップ導線・切れリンク0・sitemap反映）

## 2026-06-18 ①刈り取り：製品名クエリ取り切り（内部リンクハブ完成）✅（MediaXAI「①進めて」承認）
- 課題：3製品ページがスポーク記事(pitsole-*/runway-*/slimup-*)からは被リンクされているのに、製品ページ→クラスタ記事のhub→spokeリンクが欠落（pitsoleは6記事中1記事しかリンク無し）。購買直前クラスタが集約されていなかった
- 対応：各製品ページの「関連ページ」を全クラスタ網羅に拡張。pitsole+5(coupon/all-sizes/mens/timeline/vs-tential)、runway+1(mens-review)、slimup+1(long-review)。これでpitsole=6/runway=4/slimup=4のクラスタ全リンクが製品ページから張られ、「製品名+口コミ/効果/最安値/サイズ/メンズ/比較」の購買直前クエリに対しハブ&スポークが完成
- 並列sub-agent3体。架空価格/口コミ/料金/会社情報は不変更・デザイン維持。sitemap lastmod3件更新(181URL不変)。deploy=sole-lab-deploy・本番200/pitsoleクラスタ6リンクをcurl検証・GSC再送信
- ※GSC取得異常(0表示)のためデータ依存の「11-20位刈り取り」は計測切り分け後。残：②ranking/compare CV / ③一次価値・診断ツール / ④薄ページ品質底上げ

## 2026-06-20 ②収益核強化（ranking/トップ→compare内部リンク導線）✅（MediaXAI「①②進めよう」承認）
- 課題：3つの1対1比較ページ(compare/pitsole-vs-runway,pitsole-vs-slimup,runway-vs-slimup)が、ヘッド語の受け皿であるranking・トップから無リンク＝比較クラスタが評価を受けられていなかった（compare→ranking/productは既存だが逆向きが欠落）
- 対応：ranking比較セクション末尾に「2製品を1対1でさらに詳しく比較する」3カード、トップ製品ハイライト末尾に「気になる2製品を1対1で比較する」3カードを新設。ranking/トップ→compare×3の導線を張り、ヘッド語の受け皿から比較クラスタ(製品A vs B=購買直前)へ評価集約＆回遊強化
- ①製品名クラスタは6/18にハブ化済み。架空データ/料金/会社情報不変更・デザイン維持。sitemap lastmod(/ /ranking/)更新・本番200/compare3リンクをcurl検証・GSC再送信
- 残：①の11-20位刈り取り(GSC取得異常の切り分け後) / ③足型診断ツール(moat) / ④薄ページ品質底上げ

## 2026-06-21 ④品質底上げ：薄い8記事の事実ベース強化✅（MediaXAI「④を進めよう」承認）
- GSC API直取得(自動レポートは0表示異常): 90日36click/1164imp/平均15.5位=立ち上げ最初期。/ranking208imp/pitsole193imp先頭
- 全164記事のJP文字数を計測→薄い8本(sandals/wide-shoes/safety-shoes/correct-usage/fake-genuine/refund-guarantee/boots/rain-boots、中央値2333に対し1334-1470)を特定
- 並列sub-agent8体で一般的事実ベースの選び方・使い方・FAQを拡充(1400→1900字超に)。STRICT:架空の製品仕様/価格/口コミ/統計/研究を作らない・3製品の事実不変更・景表法配慮・偽物記事は特定業者中傷なし・返金記事は「公式で要確認」誘導。デザイン/内部リンク維持
- sitemap lastmod8件更新・本番200/GSC再送信。残④:他の薄ページ(median以下が他にも)・真の重複は無し。残フェーズ0: ③ranking用途別 ④reviewsテンプレは別途(kimono側で進行中の手法と同様、保護ルール範囲で)

## 2026-06-23 ③moat タイプ診断ツール新設✅（MediaXAI「③進めよう」承認）
- /diagnosis/ 新設: app/diagnosis/Diagnosis.tsx(use client・4問スコアリング→3製品から相性提案)+page.tsx(metadata/FAQ schema/3製品特徴/CTA)。質問=重視点/経験/靴種/予算→pitsole(効果実績)/runway(姿勢薄型)/slimup(コスパ初めて)に加点
- クライアント側完結=コストゼロ。診断結果→製品ページ+ranking送客。トップHero(診断ボタン追加)・ranking早見表(診断リンク)から導線=回遊/滞在/被リンク/指名検索の起点(moat)
- 製品位置づけは既存homepage products配列の事実ベース・架空効果なし・「目安/個人差」明記。本番200/4問動作/home・ranking導線をスクショ+curl検証。sitemap185
- 残: 診断の質問拡充・GSC観測後の刈り取り(11-20位)・④薄ページ第2弾

## 2026-06-23 ③診断質問拡充＋④薄ページ第2弾✅（MediaXAI「診断質問拡充、④を進めよう」承認）
- ③診断ツール 4問→6問に拡充: 「求める装着感(矯正感/薄さ/シンプル)」「選ぶ際の重視点(実績口コミ/使い回し/価格)」を追加し3製品の差別化精度UP。トップ/ranking/メタの「○つの質問」表記も6に統一
- ④薄ページ強化 第2弾8本(nitori/drugstore/muji/core-training/ec-buy/soccer/tennis/diet-period)を並列agentで事実ベース強化(1300台→1900字超)。STRICT:架空の製品仕様/価格/口コミ/統計なし・特定店舗商品価格は「店頭/公式で確認」誘導・景表法配慮(diet-period=履くだけで痩せる否定)・3製品/料金不変更
- 本番200/診断6問/GSC再送信。第1弾8本と合わせ薄ページ16本強化済。残:さらに薄い記事(中央値2368以下が他にも)・GSC観測後の11-20位刈り取り

## 2026-06-24 ④薄ページ強化 第三弾✅（MediaXAI「薄い記事第三弾進めて」）
- CJK文字数計測で中央値(約2,334)以下の未強化記事を抽出→次の薄い8本を並列agentで事実ベース強化(約1,460→本文1,900〜2,500字超): baseball/metabolism/hairdresser/badminton/thickness-guide/lower-body-diet/sales-staff/workman
- STRICT遵守: 架空の製品仕様/価格/口コミ/統計なし。ダイエット系(metabolism/lower-body-diet)=「履くだけで痩せない・個人差・食事/運動併用」明記(景表法)。ワークマン等店舗品=商品名/価格断定せず店頭/公式誘導。3製品の事実/料金/デザイン不変更・追記のみ
- 第1弾8+第2弾8+第三弾8=計24本強化。build185/sitemap lastmod8件・deploy=sole-lab-deploy(rsync)両push・本番8本cjk~4000をcurl検証(全て立上り済)
- ※agent2体がAPI500で最終報告のみ失敗したが、ファイル編集+ローカルbuildは完了済みを確認(badminton2973/workman2461 cjk)。残: 第4弾(中央値以下が他に十数本)・GSC観測後の刈り取り

## 2026-06-25 ④薄ページ強化 第四弾✅（MediaXAI「第四弾も進めよう」）
- 中央値(約2,402)以下の未強化記事から次の薄い8本を並列agentで事実ベース強化(約1,490→本文2,200〜2,900字): calf-slimming/business-shoes/security-guard/factory-work/breaking-in/corn-callus/basketball/cycling
- STRICT: 架空の製品仕様/価格/口コミ/統計なし。ふくらはぎ痩せ(calf-slimming)=「履くだけで細くならない・個人差・食事運動併用」明記(景表法)。魚の目タコ(corn-callus)=「治療でなく予防/負担軽減・痛み悪化は皮膚科受診」。安全靴(factory-work)=規格断定なし。店舗品=店頭/公式確認。3製品の事実/料金/デザイン不変更・追記のみ
- 第1〜三弾24本＋第四弾8本=計32本強化。build185/sitemap lastmod8件・deploy=sole-lab-deploy両push・本番cjk検証。残: さらに薄い記事(中央値以下が他にも)・GSC観測後の刈り取り

## 2026-06-26 アフィリエイトリンク設置（MediaXAI提供felmat 3製品）✅
- 従来サイトは外部アフィリンク0（公式は本文言及のみ）だった→3製品(pitsole/runway/slimup)のfelmatリンクを全コンバージョン箇所に設置
- 集約: app/lib/affiliate.ts(3製品のfelmat URL)＋app/components/OfficialCTA.tsx(rel="sponsored nofollow noopener"・target=_blank・「PR・公式サイトへ移動します」表記つきCTA)。URLは全てコンポーネント経由＝ハードコード無しで誤設置防止
- 設置箇所: 3製品ページ(結論直後+末尾の2箇所)/ranking(各製品)/diagnosis結果カード(result製品・client描画)/compare3ページ(比較2製品+「該当商品がない3つ目」を追加掲載)/トップ製品カード(3製品)。並列agent4体で実施
- ステマ規制・景表法: Footerに「本サイトはアフィリエイト広告(PR)を利用」開示を追加（content-policyにも既存記載あり）＋各CTAにPR表記
- 製品の事実/価格/3製品記述/デザインは不変更(CTA追加のみ)。build185/sitemap lastmod8件・deploy=sole-lab-deploy両push・本番でfelmatリンク/rel sponsored/正URL/PR開示をcurl検証

## 2026-06-27 フュージョン実行計画 おすすめ順(1)KW抽出→(3)景表法テンプレ→(2)about（MediaXAI「おすすめ順で進めよう」）✅
- 集客実行計画を2モデルfusion(claude+codex)で策定済→おすすめ順で着手
- (1)ストライキングディスタンス刈り取り: gsc-api/striking_distance.py新規(位置low-high×表示順・CTRギャップflag)。GSC実データで最大レバー特定=/runway-cure-sole/ 341imp/0clk@13.8位。0クリックの大半が「どこで買えるか」系(ドンキ86imp@10.1/店舗19@7.6/取扱店舗15@7.7/販売店17/どこで売ってる12/最安値)＝計約149imp。titleが「口コミ・評判」先頭で販売店/ドンキ/最安値語が無くクリックされず→title前出し「ランウェイキュアソールはどこで売ってる？販売店・ドンキ・最安値と口コミを検証【2026年】」+冒頭結論box に販売店直答1行追加+dateModified更新。料金表/公式スペック不変更
- (3)景表法NG-OKテンプレ: app/lib/keihyo.ts(NG⇔OK 7組+統一注記文+方針見出しを一元化)+components/KeihyoNote.tsx。ranking・3製品ページ全CV箇所に定位置配置。content-policyにNG/OK表を公開(透明性=E-E-A-T+将来BtoB被リンク資産の土台)
- (2)/about E-E-A-T: Organization構造化データ追加(運営=MediaX・会社情報保護のまま不変更)。新section「編集・検証体制と情報の確認方法」(公式を一次情報・出典/参照日明記・公式表記なし明示・架空口コミ/統計作らない・NG/OK基準で確認・医療免責)。編集方針に景表法配慮明記+content-policyへ相互リンク。架空監修者は付けない(名義貸し=景表法リスク。実体ある専門家のみ=P3任意)
- 全て追加のみ(料金/公式スペック/3製品事実 不変更)。build/sitemap lastmod6件・deploy=sole-lab-deploy両push・本番curl全項目検証(runway title LIVE / content-policy NG/OK / about検証体制 / ranking注記)。残: (A)残り刈り取り(/ranking根拠透明化+8-10位記事群のページ1の崖) (B)下流CVギャップ(解約/最安値/効果なし検証+向いてない人併記)

## 2026-06-29 A 残り刈り取り(MediaXAI「Aで」)✅
- /ranking/を根拠透明な比較編集に転換: ヒーロー直下に「このランキングの評価基準・作成方針」ブロック新設(6評価基準=料金/サイズ/構造/口コミ傾向/効果目安/返品保証 各見方+採点方針「広告でなく目的別向き不向き・順位は効果保証でない」+価格2026年6月公式確認+PR表記[報酬は順位に影響しない]+医薬品医療機器でない/個人差→content-policyへ)。アフィリ色を薄め編集根拠を前面化=刈り取りとthin-affiliate回避を同時
- ページ1の崖8-10位記事に結論先出し: ★GSCでこれら記事の流入クエリは匿名化(lifespan97表示の殆ど匿名)→当て推量のtitle改変は逆効果と判断し、クエリ非依存でCTR/スニペットに効く「結論直答」を最大表示2記事に追加。lifespan(10.3/97)=交換目安3〜6か月、diet-mechanism(8.7/57)=痩せるわけでない/姿勢補助/個人差/食事運動併用(景表法安全)
- slim-up(8.0/0clk)は既にtitle口コミ効果+本文販売店/最安値/ドンキ網羅済+クエリ証拠なしで無理な改変せず(runwayは"どこで売ってる"が明確支配クエリで最適化が効いた)。runwayのwhere-to-buy最適化は順位が動き始め(販売店系7-10位・表示増)
- 追加のみ(料金/公式スペック/3製品事実不変更)。build/sitemap lastmod3件(ranking,lifespan,diet-mechanism)・deploy両push・本番200 cache回避curl検証・GSC再送信。残: B(下流CVギャップ=解約/最安値比較/効果なし中立検証+向いてない人併記)/GSC観測後の追加刈り取り

## 2026-07-01 フルフュージョン集客増策定＋W1刈り取り（MediaXAI「フルフュージョンでやって」→「はい、その順序で進めて」）✅
- フルフュージョンで集客増ネクストアクション策定(codex認証失効+gemini読取タイムアウトで実質claude単独+judge[[reference_fusion_codex_timeout_fix]])。骨子=新規量産でなく既存資産の刈り取り横展開+スニペット/CTR改善+下流CRO。被リンク中期(診断/景表法ガイド/スペック表の資産化)。下流CVギャップ(解約→最安値ハブ→効果なし中立検証→向いてない人)。3製品網羅性=カタログ→意思決定エンジン(比較軸を増やす)。★クエリ匿名化のためtitle改修はSERP実観測ベースで(当て推量しない)
- W1着手: 0クリックのページ1の崖記事3本に結論先出し(強調スニペット)を並列agent3体で追加。washing-guide(洗い方の基本・素材別可否・NG行為)/insole-expectations(期待できる/できない・景表法安全)/kids-insole(サイズ見直し・偏平足・医療は専門医)。本文事実準拠・架空なし。lifespan/diet-mechanismは6/29対応済
- ★title改修は未実施(GSCクエリ匿名化を実測確認+ヘッドレスでSERP実観測困難→当て推量回避)。クエリ非依存で効く結論先出しのみ先行。2-3週後にGSC APIで位置/CTR before/after測定
- build/sitemap lastmod3件・deploy両push・本番3/3 cache回避curl検証・GSC再送信。残: W2下流CV(3製品最安値・販売店比較ハブ or 解約・返金まとめ)・診断/景表法ガイドの資産化

## 2026-07-02 W2下流CV 両方（MediaXAI「両方進めて！」）✅
- ★カニバリ回避判断: 既にwhere-to-buy-insole/cheap-insole/refund-guarantee-insole/donki-insoleが存在→新規"最安値ハブ""解約まとめ"は自社カニバリ。新規作らず既存を横断比較ハブに強化(役割=ハブ横断/個別指名)。並列agent2体
- ①where-to-buy-insole強化: 3製品×販売チャネル取扱可否表A＋3製品×単品/セット最安値(1足あたり)/返金保証 表B。価格・保証・取扱は各製品ページの公式確認値のみ転記(参照日つき・新規創作なし)。実店舗取扱なし等正直整理＋各製品ページ導線
- ②refund-guarantee-insole強化: 3製品×返金保証×返品交換×購入形態×定期縛り の比較表。★3製品とも都度購入=定期縛りなしを公式記述に基づき正直明記(解約不安解消)。返金保証はランウェイ90日のみ・他は公式要確認。架空の定期/解約ルール創作なし
- 料金/公式スペック/3製品事実不変更(比較表追加のみ・全て公式確認値)。景表法注記/PR開示。build/sitemap lastmod2件・deploy両push・本番2/2 cache回避curl検証・GSC再送信。残: 「効果なし」中立検証強化/向いてない人・デメリット併記強化/診断・景表法ガイドの被リンク資産化

## 2026-07-02 W2③ 効果なし中立検証強化（MediaXAI「③を進めて」）✅
- ★カニバリ回避: 既にinsole-truth(ダイエットインソールは嘘？科学的根拠検証・631行の強い中立検証)が存在→新規作らず既存強化
- 「『痩せなかった・効果がなかった』と感じる主な理由」5つ(食事運動変えず/即効期待で期間短/サイズ使い方/歩行量少/過度な期待)+対策 と「向いていない人」(楽して短期痩せ/継続併用困難/既に十分運動/医療的減量=医師相談)のsection追加。懐疑層の信頼獲得→CV、アフィリ都合でない証明
- 景表法/YMYL安全: 履くだけで痩せるを否定・補助/個人差/併用/非医療/医師相談明記・架空口コミなし。料金/3製品事実/既存内容不変更(section追加のみ)。build/sitemap lastmod・deploy両push・本番curl検証・GSC再送信
- ★W2下流CV(最安値販売店ハブ/解約返品/効果なし中立検証)一通り強化完了。残: 向いてない人の他ページ展開/診断・景表法ガイドの被リンク資産化(診断共有URL・OG/景表法ガイド独立リソース化)/GSC観測後刈り取り効果測定

## 2026-07-02 戦略v2①: runway販売店クラスタ上位化+🐛旧価格残存6ファイル是正（MediaXAI「1進めてください」）✅
- 🐛重要発見: 6/12承認の公式価格統一(6,980/11,980[2足]/17,960[3足]円)から漏れた**旧価格が6ファイルに残存**(旧6,380円単品・存在しない5足セット3,938円/足・19,690円等): cheap-insole(価格表/コスパランキング/タイプ別/1日コスト全再計算・セット最安をピットソール4,378円/足に順位訂正)/runway-coupon(FAQ・購入パターン表・お得ランキングを単品/2足/3足の現行ラインナップへ全面是正)/walking-insole/slimup-coupon/desk-work/slimup-not-working。runway旧価格の残存はgrepで0確認
- 内部リンク集中: runway本体は6/27改修済み(販売店系7-10位上昇中)のため不変更。リンク0だったcheap-insole(公式限定の文脈で#where-to-buy深リンク)+100kin-comparison(関連記事導線)を追加。donki/drugstore/ec-buy等は既にリンク済み確認
- pitsole/slimup価格は不変更(pitsole 5足セット21,890円等は当時記載を維持=**次回公式再確認を推奨**とMediaXAIに報告済み)
- sitemap lastmod7件(182URL)・deploy=sole-lab-deploy両push・本番3指標(新価格反映/旧価格0/リンク)cache回避curl検証・GSC再送信。残: 戦略v2②ピットソール奪還(口コミ出典整理+類似品見分け)→③ranking top10化→④moat資産化2本
