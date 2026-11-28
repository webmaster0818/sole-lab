import type { Metadata } from "next";
import VerificationNote from "../../components/VerificationNote";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import MedicalDisclaimer from "../../components/MedicalDisclaimer";
import FootArchDiagram from "../../components/FootArchDiagram";
import InsoleTypeGuide from "../../components/InsoleTypeGuide";

export const metadata: Metadata = {
  title:
    "足のむくみとインソール｜原因・対策と3商品の公式情報",
  description:
    "足のむくみの原因と、歩く・足首を回すなどの対策をまとめました。インソール3商品の公式サイトにむくみへの効果の記載があるか（2026年11月28日確認）も整理しています。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/swelling-insole/",
  },
  openGraph: { images: ["/og-default.png"],
    title:
      "足のむくみとインソール｜原因・対策と3商品の公式情報｜ソールラボ",
    description:
      "足のむくみの原因と対策、インソール3商品の公式情報をまとめました。",
    url: "https://sole-laboratory.com/articles/swelling-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline:
    "足のむくみとインソール｜原因・対策と3商品の公式情報",
  description:
    "足のむくみの原因と対策、インソール3商品の公式情報をまとめたガイド。",
  author: { "@type": "Organization", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-11-28",
};

const faqs = [
  {
    question: "インソールで足のむくみは改善しますか？",
    answer:
      "当サイトで紹介している3商品の公式サイトには、むくみの軽減を示す試験結果や効果の説明はありません（2026年11月28日確認）。スリムアップインソールの公式サイトには「凹凸による刺激が指圧効果となり血行をよくします（※指圧代用器としての効果）」との記載があります。当サイトは商品を使用しておらず、インソールでむくみがどの程度変わるかは示せません。むくみが続く場合や片足だけむくむ場合は医療機関を受診してください。",
  },
  {
    question: "むくみ対策として、インソール以外にできることはありますか？",
    answer:
      "このページ後半の「インソール以外のむくみ対策」で、歩く・足首を回す・足を高くして休む・着圧ソックスなどの方法をまとめています。着圧ソックスは医療用と一般用で圧の強さが異なるため、医療用を使う場合は医師に相談してください。",
  },
  {
    question: "むくみがひどいのですが、病院に行くべきですか？",
    answer:
      "以下の場合は早めに医療機関を受診してください。片足だけが急にむくむ場合（深部静脈血栓症の可能性）、むくみが数日経っても全く引かない場合、むくみとともに息苦しさや胸の痛みがある場合、押すとへこんだまま戻らない圧痕性浮腫が強い場合。これらは心臓・腎臓・肝臓の疾患や血管障害のサインである可能性があります。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sole-laboratory.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "知識・コラム一覧",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "むくみ改善",
      item: "https://sole-laboratory.com/articles/swelling-insole/",
    },
  ],
};

export default function SwellingInsolePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Breadcrumb
        items={[
          { label: "知識・コラム", href: "/articles/" },
          { label: "むくみ改善" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#faf7f3] to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#8a6a4f] font-medium mb-2">
            足のお悩み解決ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            足のむくみとインソール
            <br />
            <span className="text-[#8a6a4f]">原因・対策と3商品の公式情報</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「夕方になると足がパンパン」「靴がきつくなる」「脚が重だるい」。足のむくみは多くの方が日常的に感じている悩みです。本記事ではむくみの原因と日常でできる対策をまとめ、インソール3商品の公式サイトにむくみへの効果の記載があるかも整理しました。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-[#faf7f3] text-[#8a6a4f] px-3 py-1 rounded-full font-medium border border-[#e8ded6]">
              むくみ 改善 インソール
            </span>
            <span className="bg-[#faf7f3] text-[#8a6a4f] px-3 py-1 rounded-full font-medium border border-[#e8ded6]">
              足 浮腫み 対策
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年11月更新
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <FootArchDiagram />
        <InsoleTypeGuide />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      {/* むくみの原因 */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <VerificationNote />
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            足がむくむ原因とは？
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              足のむくみ（浮腫）は、皮下組織に余分な水分（リンパ液や血漿成分）が溜まった状態です。心臓から送り出された血液は動脈を通って足先まで届きますが、戻りの静脈血やリンパ液は重力に逆らって心臓まで上がる必要があります。この「戻り」がうまくいかないときに、むくみが発生します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "立ち仕事による筋ポンプ機能の低下",
                desc: "長時間の立位姿勢は、ふくらはぎの筋肉（腓腹筋・ヒラメ筋）が収縮・弛緩を繰り返す「筋ポンプ作用」が低下し、静脈血の心臓への還流が滞ります。販売員・美容師・工場勤務・看護師など立ち仕事の方に足のむくみが多いのはこのためです。足裏のアーチが崩れるとさらにポンプ効率が低下します。",
              },
              {
                title: "デスクワークによる長時間座位",
                desc: "座りっぱなしの姿勢は、膝裏や鼠径部（太ももの付け根）の静脈・リンパ管が圧迫され、血流が滞ります。特に足を組む癖がある方は片側のむくみが強くなりがちです。1時間に1回は立ち上がって歩くことが推奨されています。",
              },
              {
                title: "冷え・血行不良",
                desc: "冷えは末梢血管を収縮させ、血行不良を引き起こします。血行が悪くなると静脈還流が滞り、むくみやすくなります。冷房の効いたオフィスで長時間過ごす方や、冬場に足が冷える方は特にむくみが出やすい傾向があります。",
              },
              {
                title: "塩分の過剰摂取",
                desc: "塩分（ナトリウム）を摂りすぎると、体は塩分濃度を薄めるために水分を溜め込もうとします。これが全身のむくみ、特に下半身のむくみにつながります。外食やインスタント食品が多い方は注意が必要です。1日の塩分摂取目標は男性7.5g未満、女性6.5g未満です。",
              },
              {
                title: "運動不足による筋力低下",
                desc: "ふくらはぎの筋力が低下すると、筋ポンプ機能が弱まります。特にテレワークの普及で通勤歩行が減った方は、以前よりむくみやすくなっているかもしれません。ふくらはぎは「第二の心臓」と呼ばれるほど、血液循環に重要な役割を果たしています。",
              },
              {
                title: "ホルモンバランスの変化",
                desc: "女性は月経前や妊娠中にホルモンバランスが変化し、体が水分を溜め込みやすくなります。生理前のむくみはプロゲステロン（黄体ホルモン）の影響で、月経が始まると自然に改善されることが多く見られます。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インソールとむくみの関係 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールとむくみの関係（公式に記載があること）
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              当サイトで紹介している3商品の公式サイトを確認したところ、むくみの軽減を示す試験結果や、むくみに効く仕組みの説明はありませんでした（2026年11月28日確認）。当サイトは商品を使用しておらず、インソールでむくみがどの程度変わるかを示すことはできません。
            </p>
            <p>
              スリムアップインソールの公式サイトには「アーチを押し上げ血流対策！凹凸による刺激が指圧効果となり血行をよくします。（※指圧代用器としての効果）」との記載があります（出典：
              <a href="https://ichiban-boshi.com/shop/products/B_sui_s" target="_blank" rel="noopener noreferrer" className="text-[#8a6a4f] underline">ロッピング公式ショップ 一番星</a>
              、2026年11月28日確認）。むくみへの効果としての記載ではありません。
            </p>
            <p>
              むくみの対策としては、このページ後半でまとめている、ふくらはぎを動かす（歩く・足首を回す）、足を高くして休むなどの方法があります。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ3商品のむくみへの効果 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3商品の公式情報（むくみへの効果の記載の有無）
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              3商品とも、公式サイトにむくみへの効果の記載はありません（2026年11月28日確認）。下の一覧は、公式サイトで確認できる構造と価格です。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                swellingEffect: "むくみへの効果：公式に記載なし",
                points: [
                  "公式の表記は「3つの構造」（拇趾球・小趾球・踵骨の3支点）",
                ],
                price: "6,578円（税込）〜",
                best: "公式ショップ（BACCHUS ONLINE SHOP）で単品から購入できます",
              },
              {
                rank: "2",
                name: "ランウェイキュアソール",
                swellingEffect: "むくみへの効果：公式に記載なし",
                points: [
                  "公式の表記は「3点アーチサポート設計」",
                ],
                price: "6,980円（税込）〜",
                best: "FLORe公式ショップ 楽天市場店で購入できます",
              },
              {
                rank: "3",
                name: "スリムアップインソール",
                swellingEffect: "むくみへの効果：公式に記載なし",
                points: [
                  "公式の表記は「フリーフィンガーサポート」「アーチプッシュアップ」「スリーアップバランス」の3つの構造",
                  "公式に「凹凸による刺激が指圧効果となり血行をよくします（※指圧代用器としての効果）」の記載あり",
                ],
                price: "6,980円（税込）〜",
                best: "ロッピング公式ショップ 一番星で購入できます",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#8a6a4f] shrink-0">
                    {item.rank}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-[#8a6a4f] mb-3">
                      {item.swellingEffect}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-[#8a6a4f] shrink-0 mt-0.5">
                            &#10003;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500">
                        価格：
                        <span className="text-gray-900 font-medium">
                          {item.price}
                        </span>
                      </span>
                      <span className="text-gray-500">
                        購入先：
                        <span className="text-gray-900 font-medium">
                          {item.best}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#8a6a4f] hover:bg-[#6f543c] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* インソール以外のむくみ対策 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソール以外のむくみ対策
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              むくみの対策として、日常生活に取り入れやすい方法をまとめました。むくみが続く場合や片足だけがむくむ場合は、自己判断せず医療機関を受診してください。
            </p>
          </div>

          <div className="space-y-6">
            {/* ストレッチ・運動 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                ストレッチ・運動
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "ふくらはぎのストレッチ（かかと上げ下げ）",
                    desc: "立った状態でゆっくりかかとを上げ下げします。ふくらはぎの筋ポンプを活性化させ、血流を促進します。デスクワーク中も椅子に座ったままできます。1セット20回、1日3〜5セットが目安です。",
                  },
                  {
                    title: "足首回し",
                    desc: "椅子に座った状態で、片足ずつ足首をゆっくり大きく回します。足首周辺の血管やリンパ管の流れが改善されます。時計回り・反時計回り各10回を左右行ってください。",
                  },
                  {
                    title: "ウォーキング",
                    desc: "歩くとふくらはぎの筋肉が動きます。長時間同じ姿勢が続く日は、こまめに歩く時間をつくってください。",
                  },
                  {
                    title: "足上げ（エレベーション）",
                    desc: "帰宅後、壁に足をつけて仰向けに寝る「足上げ」を10〜15分行います。重力を利用して下肢に溜まった血液やリンパ液を心臓に戻します。寝る前の習慣にすると翌朝の足の軽さが変わります。",
                  },
                ].map((item) => (
                  <div key={item.title} className="card">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 着圧アイテム */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                着圧アイテム
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "着圧ソックス・ストッキング",
                    desc: "足首から上に向かって段階的に圧力をかけることで、静脈還流を物理的にサポートします。医療用（20〜30mmHg）と一般用（10〜20mmHg）があり、初めての方は一般用から始めるのがおすすめです。",
                  },
                  {
                    title: "着圧レギンス・スパッツ",
                    desc: "ふくらはぎだけでなく太もも全体をカバーするタイプです。就寝中に着用する夜用と、日中用があります。冷え対策も兼ねられるため、寒い季節のむくみ対策に特に効果的です。",
                  },
                ].map((item) => (
                  <div key={item.title} className="card">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 食事・水分 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                食事・水分管理
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "適切な水分摂取",
                    desc: "意外に思うかもしれませんが、水分不足もむくみの原因になります。体が脱水状態を感知すると、水分を溜め込もうとするためです。1日1.5〜2リットルの水をこまめに飲んでください。一度に大量に飲むのではなく、少量ずつが理想です。",
                  },
                  {
                    title: "塩分を控える",
                    desc: "塩分（ナトリウム）の過剰摂取はむくみの大きな原因です。加工食品・外食・インスタント食品は塩分が多いため注意。カリウムを多く含む食材（バナナ・アボカド・ほうれん草・納豆）は塩分の排出を促進するため、積極的に摂ってください。",
                  },
                  {
                    title: "タンパク質を十分に摂る",
                    desc: "血液中のアルブミン（タンパク質）が不足すると、血管内の水分保持力が低下し、組織に水分が漏れ出してむくみが悪化します。肉・魚・大豆・卵など良質なタンパク質を毎食摂ることが重要です。",
                  },
                  {
                    title: "アルコールを控える",
                    desc: "アルコールは利尿作用がある一方で、血管を拡張させて水分が組織に漏れやすくなります。飲酒後のむくみは脱水と水分の再分布が原因です。むくみが気になる方は飲酒量を控えめにし、飲む場合は同量以上の水を一緒に飲んでください。",
                  },
                ].map((item) => (
                  <div key={item.title} className="card">
                    <h4 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 生活シーン別むくみ対策 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            生活シーン別むくみ対策プラン
          </h2>
          <div className="space-y-4">
            {[
              {
                scene: "立ち仕事の方",
                plan: [
                  "休憩時に足首回し・かかと上げ下げを行う",
                  "着圧ソックスを使う（医療用は医師に相談）",
                  "帰宅後に足上げ10分＋ふくらはぎマッサージ",
                ],
              },
              {
                scene: "デスクワークの方",
                plan: [
                  "1時間に1回は立ち上がって歩く（トイレ・給湯室まで歩く等）",
                  "座ったまま足首回し・つま先上げ下げを頻繁に行う",
                  "昼休みに10分のウォーキングを習慣化",
                ],
              },
              {
                scene: "在宅勤務の方",
                plan: [
                  "30分に1回はスタンディングデスクに切り替えるか、立ち上がってストレッチ",
                  "朝と夕方に15分のウォーキングを習慣化",
                  "着圧レギンスを日中に着用（室内なのでファッションを気にせず使える）",
                ],
              },
            ].map((item) => (
              <div key={item.scene} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {item.scene}
                </h3>
                <ol className="space-y-2">
                  {item.plan.map((step, i) => (
                    <li
                      key={step}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-[#8a6a4f] font-bold shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* むくみ改善のNG行動 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            むくみを悪化させるNG行動
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              むくみ対策を頑張っていても、知らず知らずのうちにむくみを悪化させる行動をしている場合があります。以下のNG行動に心当たりがないかチェックしてみてください。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "水分を控えすぎる",
                desc: "「水を飲むとむくむ」と思って水分を控えるのは逆効果です。脱水状態になると、体は水分を溜め込もうとしてむくみが悪化します。適切な水分摂取（1日1.5〜2リットル）がむくみ改善の基本です。一度に大量に飲むのではなく、こまめに少量ずつ飲んでください。",
              },
              {
                title: "足を組む",
                desc: "足を組むと、上になった脚の鼠径部（太ももの付け根）が圧迫され、静脈やリンパ管の流れが妨げられます。デスクワーク中に無意識で足を組む癖がある方は、意識的に足を下ろし、両足を床につけるようにしてください。",
              },
              {
                title: "きつい靴やヒールの長時間着用",
                desc: "きつい靴は足の血流を妨げ、ハイヒールはふくらはぎの筋ポンプ機能を低下させます。仕事でヒールが必要な場合は、デスク下で靴を脱ぐ、通勤はスニーカーにするなど、メリハリをつけてください。",
              },
              {
                title: "寝る前の大量の水分やアルコール",
                desc: "就寝前の大量の水分摂取は、翌朝のむくみの原因になります。寝ている間は腎臓の機能が低下するため、余分な水分が排出されにくくなります。就寝2時間前からは水分摂取を控えめにしてください。アルコールは特にむくみを悪化させます。",
              },
              {
                title: "運動不足を「明日やろう」と先延ばしにする",
                desc: "むくみ改善には継続的な運動が最も効果的です。「週末にまとめて運動しよう」ではなく、毎日少しずつ歩く・ストレッチするという習慣が重要です。インソールを入れた靴で通勤するだけでも、毎日の運動習慣になります。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-[#8a6a4f] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#8a6a4f] font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              足のむくみの対策としては、歩く・足首を回す・足を高くして休む・着圧ソックスを使う・水分と塩分を見直すといった方法があります。むくみが続く場合や片足だけがむくむ場合は、医療機関を受診してください。
            </p>
            <p>
              インソール3商品の公式サイトには、むくみへの効果の記載はありません（2026年11月28日確認）。3商品の違いは、
              <Link href="/ranking/" className="text-[#8a6a4f] underline">ランキング</Link>
              で公式の仕様・価格をもとに比較しています。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#8a6a4f] hover:bg-[#6f543c] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/standing-work/"
              className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                立ち仕事の疲れにインソールは効く？おすすめと選び方
              </p>
            </Link>
            <Link
              href="/articles/leg-slimming/"
              className="block p-4 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                脚痩せしたい人のインソール選びガイド
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#8a6a4f] rounded-xl hover:bg-[#faf7f3] transition-colors bg-[#faf7f3]/50"
            >
              <p className="text-sm font-semibold text-[#8a6a4f]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
