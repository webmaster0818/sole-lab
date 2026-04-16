import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "足のむくみ改善にインソールが効果的な理由｜おすすめと対策",
  description:
    "足のむくみの原因を解説し、インソールでむくみが改善するメカニズム（アーチサポート→筋ポンプ機能促進→血流改善）を紹介。おすすめ3商品のむくみへの効果比較とインソール以外の対策も網羅。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/swelling-insole/",
  },
  openGraph: {
    title:
      "足のむくみ改善にインソールが効果的な理由｜おすすめと対策｜ソールラボ",
    description:
      "足のむくみの原因とインソールによる改善メカニズムを解説。おすすめ3商品のむくみへの効果を比較。",
    url: "https://sole-laboratory.com/articles/swelling-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "足のむくみ改善にインソールが効果的な理由｜おすすめと対策",
  description:
    "足のむくみの原因とインソールによる改善メカニズムを解説し、おすすめ商品とむくみ対策をまとめたガイド。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
};

const faqs = [
  {
    question: "インソールで足のむくみは本当に改善しますか？",
    answer:
      "足裏アーチサポート付きインソールは、歩行時のふくらはぎの筋ポンプ機能を促進し、下肢の血液・リンパ液の循環を改善する効果が期待できます。これにより、夕方の足のむくみや疲労感が軽減される方が多いです。ただし、病的なむくみ（心臓・腎臓・肝臓の疾患が原因）の場合はインソールでは改善しないため、医療機関の受診が必要です。",
  },
  {
    question: "むくみ対策にインソールを使う場合、どれくらいで効果を感じますか？",
    answer:
      "個人差がありますが、夕方の足のだるさ・むくみ感の軽減は1〜2週間で実感する方が多いです。これはアーチサポートにより歩行効率が上がり、ふくらはぎの筋ポンプが正常に機能するようになるためです。継続使用でさらに効果が実感しやすくなります。",
  },
  {
    question: "立ち仕事のむくみにもインソールは効果がありますか？",
    answer:
      "はい、立ち仕事の方にはインソールが特に効果的です。長時間の立位姿勢は重力の影響で下肢に血液・リンパ液が溜まりやすくなります。アーチサポートインソールは足裏の姿勢を正し、少しの体重移動でもふくらはぎの筋ポンプが効率的に働くようサポートします。",
  },
  {
    question: "むくみ対策のインソールと着圧ソックスは併用できますか？",
    answer:
      "はい、インソールと着圧ソックスの併用は相乗効果が期待できます。インソールが足裏のアーチと歩行効率を改善し、着圧ソックスが外側から静脈還流を促進するため、ダブルのアプローチでむくみを軽減できます。特にデスクワークや立ち仕事が長い方におすすめの組み合わせです。",
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
      <section className="bg-gradient-to-b from-[#fdf2f4] to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            足のお悩み解決ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            足のむくみ改善にインソールが
            <br />
            <span className="text-[#e8627c]">効果的な理由</span>
            ｜おすすめと対策
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「夕方になると足がパンパン」「靴がきつくなる」「脚が重だるい」。足のむくみは多くの方が日常的に感じている悩みです。本記事ではむくみの原因を分かりやすく解説し、インソールがなぜむくみ改善に効果的なのかそのメカニズムを紐解きます。おすすめ3商品のむくみへの効果と、インソール以外のむくみ対策もまとめました。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              むくみ 改善 インソール
            </span>
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              足 浮腫み 対策
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* むくみの原因 */}
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
                desc: "冷えは末梢血管を収縮させ、血行不良を引き起こします。血行が悪くなると静脈還流が滞り、むくみやすくなります。冷房の効いたオフィスで長時間過ごす方や、冬場に足が冷える方は特にむくみが出やすいです。",
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
                desc: "女性は月経前や妊娠中にホルモンバランスが変化し、体が水分を溜め込みやすくなります。生理前のむくみはプロゲステロン（黄体ホルモン）の影響で、月経が始まると自然に改善されることが多いです。",
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

      {/* インソールでむくみが改善するメカニズム */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールでむくみが改善するメカニズム
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              「インソールでむくみが改善する」と聞くと意外に思うかもしれませんが、そのメカニズムは明確です。アーチサポートによる筋ポンプ機能の促進と血流改善がキーポイントです。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "STEP 1",
                title: "アーチサポートで足裏の姿勢を正す",
                desc: "足裏のアーチが崩れた状態（扁平足・開張足）では、足裏の筋肉が正しく機能せず、歩行効率が低下しています。インソールのアーチサポートが足裏を正しい位置に導き、足の筋肉が本来の機能を発揮できる状態を作ります。これが「むくみ改善の土台」になります。",
              },
              {
                step: "STEP 2",
                title: "歩行効率の向上でふくらはぎの筋ポンプが活性化",
                desc: "足裏のアーチが正しい位置にサポートされると、歩行時の「かかと着地→足裏全体で荷重→つま先蹴り出し」のローリング動作がスムーズになります。この正しい歩行パターンでは、ふくらはぎの筋肉が効率的に収縮・弛緩を繰り返し、筋ポンプ機能が最大化されます。ふくらはぎが「第二の心臓」として正常に機能することで、静脈血の心臓への還流が促進されます。",
              },
              {
                step: "STEP 3",
                title: "血液・リンパ液の循環が改善",
                desc: "筋ポンプ機能が活性化されることで、下肢に滞留していた静脈血やリンパ液が効率的に心臓に戻ります。組織間液（むくみの原因となる余分な水分）も回収されやすくなり、結果として足のむくみが軽減されます。特に夕方に悪化するむくみは、この循環改善の恩恵を受けやすいです。",
              },
              {
                step: "STEP 4",
                title: "疲労軽減で活動量の維持・向上",
                desc: "アーチサポートは歩行時の足裏への衝撃を吸収し、疲労を軽減する効果もあります。足が疲れにくくなることで、活動量が自然に増え、さらに筋ポンプ機能が働く機会が増えます。この好循環がむくみを根本的に改善する方向に導きます。",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-start gap-3">
                  <span className="bg-[#e8627c] text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              つまり、インソールは「足裏のアーチサポート→歩行効率の向上→ふくらはぎの筋ポンプ機能の促進→血流・リンパ循環の改善→むくみの軽減」という一連の連鎖反応を引き起こします。直接的にむくみを「吸い取る」わけではなく、身体が持つ循環機能を正常化させるアプローチです。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ3商品のむくみへの効果 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            おすすめ3商品のむくみ改善効果を比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              むくみ改善の観点から、ダイエットインソール3商品の効果を比較しました。いずれもアーチサポート機能を持っていますが、むくみ改善に対するアプローチにはそれぞれ特徴があります。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                swellingEffect: "むくみ改善効果：高い",
                points: [
                  "3点アーチサポートで足裏の筋肉を最大限に活性化",
                  "世界特許のキュボイドサポートで歩行効率を高め、ふくらはぎの筋ポンプを促進",
                  "高い剛性のアーチサポートが歩行中も維持され、持続的な効果が期待できる",
                  "クッション性も確保されており、長時間使用でも疲労しにくい",
                ],
                price: "6,578円（税込）〜",
                best: "立ち仕事・ウォーキング習慣のある方",
              },
              {
                rank: "2",
                name: "ランウェイキュアソール",
                swellingEffect: "むくみ改善効果：中〜高",
                points: [
                  "骨盤補整設計で姿勢を改善し、全身の血流をスムーズに",
                  "薄型でヒール靴にも対応するため、通勤中もむくみ対策ができる",
                  "整体師監修の設計で身体の巡りを意識したアプローチ",
                  "パンプスで使えるため、オフィスワークの方にも実用的",
                ],
                price: "4,378円（税込）〜",
                best: "オフィスワーク・パンプス使用の方",
              },
              {
                rank: "3",
                name: "スリムアップインソール",
                swellingEffect: "むくみ改善効果：中程度",
                points: [
                  "傾斜設計でふくらはぎの筋肉を自然に刺激",
                  "手頃な価格で気軽にむくみ対策を始められる",
                  "男女兼用で家族で共有も可能",
                  "基本的なアーチサポート機能でむくみ軽減をサポート",
                ],
                price: "2,178円（税込）〜",
                best: "コスパ重視でむくみ対策を始めたい方",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#e8627c] shrink-0">
                    {item.rank}位
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-[#e8627c] mb-3">
                      {item.swellingEffect}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-[#e8627c] shrink-0 mt-0.5">
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
                        おすすめ：
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
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
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
            インソール以外のむくみ改善対策
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールはむくみ改善の有効なツールですが、他の対策と組み合わせることでさらに効果が高まります。以下のむくみ対策を日常生活に取り入れましょう。
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
                    desc: "椅子に座った状態で、片足ずつ足首をゆっくり大きく回します。足首周辺の血管やリンパ管の流れが改善されます。時計回り・反時計回り各10回を左右行いましょう。",
                  },
                  {
                    title: "ウォーキング",
                    desc: "1日30分以上のウォーキングは、ふくらはぎの筋ポンプを最も効果的に活性化する方法です。インソールを入れた靴でウォーキングすれば、むくみ改善とダイエットの両方に効果が期待できます。",
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
                    desc: "足首から上に向かって段階的に圧力をかけることで、静脈還流を物理的にサポートします。医療用（20〜30mmHg）と一般用（10〜20mmHg）があり、初めての方は一般用から始めるのがおすすめ。インソールとの併用で相乗効果が期待できます。",
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
                    desc: "意外に思うかもしれませんが、水分不足もむくみの原因になります。体が脱水状態を感知すると、水分を溜め込もうとするためです。1日1.5〜2リットルの水をこまめに飲みましょう。一度に大量に飲むのではなく、少量ずつが理想です。",
                  },
                  {
                    title: "塩分を控える",
                    desc: "塩分（ナトリウム）の過剰摂取はむくみの大きな原因です。加工食品・外食・インスタント食品は塩分が多いため注意。カリウムを多く含む食材（バナナ・アボカド・ほうれん草・納豆）は塩分の排出を促進するため、積極的に摂りましょう。",
                  },
                  {
                    title: "タンパク質を十分に摂る",
                    desc: "血液中のアルブミン（タンパク質）が不足すると、血管内の水分保持力が低下し、組織に水分が漏れ出してむくみが悪化します。肉・魚・大豆・卵など良質なタンパク質を毎食摂ることが重要です。",
                  },
                  {
                    title: "アルコールを控える",
                    desc: "アルコールは利尿作用がある一方で、血管を拡張させて水分が組織に漏れやすくなります。飲酒後のむくみは脱水と水分の再分布が原因です。むくみが気になる方は飲酒量を控えめにし、飲む場合は同量以上の水を一緒に飲みましょう。",
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
                  "インソール装着の靴で出勤（アーチサポートで筋ポンプを常時サポート）",
                  "休憩時に足首回し・かかと上げ下げを行う",
                  "着圧ソックスを併用（インソール＋着圧のダブルケア）",
                  "帰宅後に足上げ10分＋ふくらはぎマッサージ",
                ],
              },
              {
                scene: "デスクワークの方",
                plan: [
                  "インソール装着の靴を使用（通勤時の歩行効率を最大化）",
                  "1時間に1回は立ち上がって歩く（トイレ・給湯室まで歩く等）",
                  "座ったまま足首回し・つま先上げ下げを頻繁に行う",
                  "昼休みに10分のウォーキングを習慣化",
                ],
              },
              {
                scene: "在宅勤務の方",
                plan: [
                  "室内用スリッパにインソールを入れるか、室内履き対応のインソールを使用",
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
                      <span className="text-[#e8627c] font-bold shrink-0">
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
              むくみ対策を頑張っていても、知らず知らずのうちにむくみを悪化させる行動をしている場合があります。以下のNG行動に心当たりがないかチェックしてみましょう。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "水分を控えすぎる",
                desc: "「水を飲むとむくむ」と思って水分を控えるのは逆効果です。脱水状態になると、体は水分を溜め込もうとしてむくみが悪化します。適切な水分摂取（1日1.5〜2リットル）がむくみ改善の基本です。一度に大量に飲むのではなく、こまめに少量ずつ飲みましょう。",
              },
              {
                title: "足を組む",
                desc: "足を組むと、上になった脚の鼠径部（太ももの付け根）が圧迫され、静脈やリンパ管の流れが妨げられます。デスクワーク中に無意識で足を組む癖がある方は、意識的に足を下ろし、両足を床につけるようにしましょう。",
              },
              {
                title: "きつい靴やヒールの長時間着用",
                desc: "きつい靴は足の血流を妨げ、ハイヒールはふくらはぎの筋ポンプ機能を低下させます。仕事でヒールが必要な場合は、デスク下で靴を脱ぐ、通勤はスニーカーにするなど、メリハリをつけましょう。インソールで足裏をサポートすることも重要です。",
              },
              {
                title: "寝る前の大量の水分やアルコール",
                desc: "就寝前の大量の水分摂取は、翌朝のむくみの原因になります。寝ている間は腎臓の機能が低下するため、余分な水分が排出されにくくなります。就寝2時間前からは水分摂取を控えめにしましょう。アルコールは特にむくみを悪化させます。",
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

      {/* 足底内在筋トレーニング */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            足底内在筋を鍛えてむくみを根本改善
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            むくみの根本的な改善には、インソールの使用に加えて足底内在筋のトレーニングが効果的です。インソールで正しい足の使い方をサポートしつつ、筋力強化で根本改善を目指しましょう。
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-1">タオルギャザー運動</h4>
              <p className="text-gray-700 text-sm">床に広げたタオルを足指でつかんで引き寄せる運動です。毎日3セット行うことで、足底の筋力が強化され、血流の改善につながります。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-1">足首回し運動</h4>
              <p className="text-gray-700 text-sm">足首をゆっくり大きく回すことで、ふくらはぎの筋ポンプ機能を促進します。座ったままできるので、デスクワーク中にもおすすめです。</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg">
            インソールで正しい足の使い方をサポートしつつ、これらのトレーニングで筋力を強化することで、むくみの根本改善が期待できます。
          </p>
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
                    <span className="text-[#e8627c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#e8627c] font-bold">A.</span>{" "}
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
              足のむくみの改善にインソールは効果的なアプローチです。足裏アーチサポートにより歩行効率が向上し、ふくらはぎの筋ポンプ機能が促進されることで、下肢の血液・リンパ循環が改善されます。
            </p>
            <p>
              おすすめ3商品の中では、3点アーチサポートで筋ポンプを最大限に活性化するピットソールがむくみ改善にも最も効果的です。オフィスワークでパンプスを使う方にはランウェイキュアソール、コスパ重視で気軽に始めたい方にはスリムアップインソールが適しています。
            </p>
            <p>
              さらに効果を高めるには、ストレッチ（かかと上げ下げ・足首回し）、着圧ソックス、適切な水分・塩分管理を併用しましょう。インソールは「身体の循環機能を正常化するサポートツール」として、むくみのない軽やかな脚を目指す第一歩にしてください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d14d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
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
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                立ち仕事の疲れにインソールは効く？おすすめと選び方
              </p>
            </Link>
            <Link
              href="/articles/leg-slimming/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                脚痩せしたい人のインソール選び完全ガイド
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"
            >
              <p className="text-sm font-semibold text-[#e8627c]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
