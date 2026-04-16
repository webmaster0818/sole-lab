import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "外反母趾にインソールは効果ある？痛みを軽減するおすすめと注意点",
  description:
    "外反母趾の原因・症状・進行度を解説し、インソールで外反母趾が改善するメカニズムを紹介。ダイエットインソール3商品の外反母趾対応を比較し、選び方ポイントと医療機関への受診目安をまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/bunion-insole/",
  },
  openGraph: {
    title:
      "外反母趾にインソールは効果ある？痛みを軽減するおすすめと注意点｜ソールラボ",
    description:
      "外反母趾の原因とインソールによる改善メカニズムを解説。ダイエットインソール3商品の外反母趾対応を比較。",
    url: "https://sole-laboratory.com/articles/bunion-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外反母趾にインソールは効果ある？痛みを軽減するおすすめと注意点",
  description:
    "外反母趾の原因・症状を解説し、インソールによる改善メカニズム・おすすめ商品・選び方・受診目安をまとめたガイド。",
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
    question: "外反母趾はインソールで治りますか？",
    answer:
      "インソールで外反母趾の変形自体を完全に元に戻すことは難しいですが、痛みの軽減・進行の予防・歩行バランスの改善には効果が期待できます。軽度〜中等度の外反母趾であれば、インソールとストレッチの併用で症状の大幅な改善が見込めます。重度の場合は手術が必要になることもあるため、整形外科への受診をおすすめします。",
  },
  {
    question: "外反母趾でもダイエットインソールは使えますか？",
    answer:
      "軽度〜中等度の外反母趾であれば、多くのダイエットインソールは使用可能です。ただし、つま先部分が狭い設計のインソールや、母趾球付近に硬い突起があるタイプは外反母趾を悪化させる可能性があるため注意が必要です。本記事で紹介している3商品のうち、ピットソールとスリムアップインソールは外反母趾の方にも比較的安心して使えます。",
  },
  {
    question: "外反母趾の痛みがある場合、インソールはいつから使えますか？",
    answer:
      "軽い痛みであれば、インソールを使うことで痛みが軽減されることもあります。ただし、炎症を起こして腫れや強い痛みがある場合は、まず痛みが落ち着いてからインソールを使い始めてください。痛みが2週間以上続く場合は、自己判断せず整形外科を受診しましょう。",
  },
  {
    question: "ヒールの靴を履くと外反母趾が悪化しますか？",
    answer:
      "はい、ヒールが高い靴（5cm以上）はつま先に体重が集中し、外反母趾を悪化させるリスクがあります。ただし、仕事上ヒールが必要な場合は、ヒール対応のインソール（ランウェイキュアソールなど）を使用し、アーチサポートで荷重を分散させることで負担を軽減できます。自宅ではフラットな靴に切り替えるなど、メリハリをつけることも大切です。",
  },
  {
    question: "外反母趾予防にインソールは効果がありますか？",
    answer:
      "はい、まだ外反母趾になっていない段階でも、横アーチのサポート機能があるインソールを使うことで予防効果が期待できます。特に、立ち仕事が多い方やヒール靴を頻繁に履く方は、横アーチの崩れ（開張足）から外反母趾に進行しやすいため、早めのインソール使用がおすすめです。",
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
      name: "外反母趾対策",
      item: "https://sole-laboratory.com/articles/bunion-insole/",
    },
  ],
};

export default function BunionInsolePage() {
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
          { label: "外反母趾対策" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#fdf2f4] to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            足のお悩み解決ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            外反母趾にインソールは効果ある？
            <br />
            <span className="text-[#e8627c]">痛みを軽減する</span>
            おすすめと注意点
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「親指の付け根が痛い」「靴を履くと母趾球が当たって辛い」。外反母趾は日本人女性の約30%が抱えると言われる代表的な足のトラブルです。本記事では外反母趾の原因と症状、インソールによる改善メカニズム、ダイエットインソール3商品の外反母趾対応比較、そして整形外科を受診すべき目安まで解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              外反母趾 インソール おすすめ
            </span>
            <span className="bg-[#fdf2f4] text-[#e8627c] px-3 py-1 rounded-full font-medium border border-[#f3e0e4]">
              痛くない
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 外反母趾とは */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            外反母趾とは？原因と症状
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              外反母趾（がいはんぼし）とは、足の親指（母趾）が小指側に曲がり、親指の付け根の関節が内側に突き出した状態を指します。医学的には、母趾の外反角度が20度以上の場合に外反母趾と診断されます。
            </p>
            <p>
              外反母趾は単に見た目の問題だけでなく、歩行時の痛み、靴選びの困難さ、バランスの崩れによる膝・腰への負担など、生活の質に大きく影響します。放置すると進行するケースが多いため、早めの対策が重要です。
            </p>
          </div>

          <div className="card mt-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              外反母趾の進行度
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f3e0e4]">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      段階
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      外反角度
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      症状
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      対策
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      stage: "正常",
                      angle: "15度未満",
                      symptom: "痛みなし。見た目の変形もなし。",
                      action: "予防としてインソールの使用が推奨",
                    },
                    {
                      stage: "軽度",
                      angle: "15〜25度",
                      symptom: "軽い痛みが時々ある。靴によっては当たる。",
                      action: "インソール＋ストレッチで改善が期待できる",
                    },
                    {
                      stage: "中等度",
                      angle: "25〜40度",
                      symptom: "歩行時に痛みが出る。母趾球の赤み・腫れ。",
                      action: "インソール＋整形外科の受診を推奨",
                    },
                    {
                      stage: "重度",
                      angle: "40度以上",
                      symptom: "常に痛み。第2趾の上に親指が乗る。",
                      action: "整形外科での治療（手術含む）が必要",
                    },
                  ].map((row) => (
                    <tr
                      key={row.stage}
                      className="border-b border-gray-100"
                    >
                      <td className="py-2 text-gray-900 font-medium">
                        {row.stage}
                      </td>
                      <td className="py-2 text-gray-600">{row.angle}</td>
                      <td className="py-2 text-gray-600">{row.symptom}</td>
                      <td className="py-2 text-gray-600">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <h3 className="text-lg font-bold text-gray-900">
              外反母趾の主な原因
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "横アーチの崩れ（開張足）",
                desc: "足裏の横アーチが崩れて足の前部が横に広がる「開張足」が、外反母趾の最大の原因です。横アーチが崩れると中足骨が扇状に広がり、親指が小指側に引っ張られます。長時間の立ち仕事や加齢、筋力低下が横アーチ崩壊の引き金になります。",
              },
              {
                title: "合わない靴（特にヒール・先の細い靴）",
                desc: "つま先が狭い靴やヒールの高い靴は、足の前部に過度な荷重をかけ、親指を小指側に圧迫します。特にヒール5cm以上の靴は、体重の約75%がつま先に集中するため、外反母趾のリスクが大幅に高まります。",
              },
              {
                title: "遺伝的要因",
                desc: "外反母趾には遺伝的な素因があることが研究で示されています。親や祖父母に外反母趾の方がいる場合、リスクが高くなります。足の骨格構造（中足骨の長さや関節の柔軟性）が遺伝するためです。",
              },
              {
                title: "筋力低下・加齢",
                desc: "足裏の筋肉や靱帯が加齢とともに弱くなると、横アーチを支える力が低下して開張足が進行します。特に40代以降は注意が必要です。運動不足も筋力低下を加速させます。",
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

      {/* インソールで外反母趾が改善するメカニズム */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールで外反母趾が改善するメカニズム
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              外反母趾の改善にインソールが効果的な理由は、「横アーチのサポート」と「荷重分散」の2つのメカニズムにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "横アーチのサポートで開張足を補整",
                desc: "外反母趾の根本原因である横アーチの崩れ（開張足）をインソールでサポートすることで、中足骨の広がりを抑制します。横アーチが持ち上げられることで、親指を小指側に引っ張る力が弱まり、外反の進行を防ぎます。これは外反母趾の「原因」に対するアプローチです。",
              },
              {
                title: "内側縦アーチのサポートで回内を防止",
                desc: "扁平足や回内足（足首が内側に倒れる状態）は外反母趾を悪化させます。内側縦アーチをサポートすることで、歩行時の過度な回内を防ぎ、親指への負担を軽減します。足全体のアライメントが整うことで、母趾球への集中荷重も分散されます。",
              },
              {
                title: "荷重の分散で母趾球の痛みを軽減",
                desc: "アーチサポートにより、歩行時の荷重が足裏全体に分散されます。これにより、母趾球に集中していた圧力が軽減され、歩行時の痛みが和らぎます。特にメタタルサルパッド（横アーチサポート）のあるインソールは、母趾球の除圧効果が高いです。",
              },
              {
                title: "正しい歩行パターンへの誘導",
                desc: "アーチサポートとヒールカップにより、歩行時の足の動きが正常なパターンに近づきます。かかと着地→足裏全体で荷重→つま先で蹴り出す、という正しい歩行パターンにより、親指への不自然な力のかかり方が軽減されます。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              ただし、重要な注意点があります。インソールで外反母趾の変形自体を元に戻すことは難しいです。骨の位置が変わってしまった場合は、インソールでは矯正できません。インソールの効果は「痛みの軽減」「進行の予防」「歩行の改善」であり、「変形の治癒」ではありません。この点を理解した上で使用しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 3商品の外反母趾対応比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール3商品の外反母趾対応を比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ダイエットインソールとして人気の3商品が、外反母趾の方にも使えるかどうかを検証しました。外反母趾対応の観点では、製品によって適性が異なるため、自分の状態に合ったものを選ぶことが重要です。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                verdict: "外反母趾対応：良好",
                verdictColor: "text-[#34d399]",
                reason:
                  "3点アーチサポート（内側縦・外側縦・横アーチ）を搭載しているため、外反母趾の根本原因である横アーチの崩れに直接アプローチできます。横アーチサポートが開張足を補整し、母趾球への荷重を分散させる効果が期待できます。つま先部分のスペースも比較的余裕があり、外反母趾の方にも使いやすい設計です。",
                points: [
                  "横アーチサポートで開張足を補整",
                  "3点アーチサポートで荷重を分散",
                  "つま先部分に余裕のある設計",
                ],
                caution:
                  "アーチサポートが強めのため、初期は足裏に違和感がある場合があります。最初は短時間から慣らしましょう。",
              },
              {
                rank: "2",
                name: "スリムアップインソール",
                verdict: "外反母趾対応：概ね良好",
                verdictColor: "text-[#c9a76c]",
                reason:
                  "傾斜設計により足裏の筋肉を活性化させるアプローチで、足裏の筋力強化が横アーチの維持に間接的に貢献します。つま先部分にも比較的ゆとりがあり、外反母趾の方でも圧迫感が少ない設計です。価格が手頃なため、外反母趾対策を気軽に始めたい方に向いています。",
                points: [
                  "傾斜設計で足裏の筋力を活性化",
                  "つま先部分に圧迫感が少ない",
                  "手頃な価格で始めやすい",
                ],
                caution:
                  "横アーチのサポート力はピットソールほど強力ではありません。中等度以上の外反母趾にはサポートが不十分な場合があります。",
              },
              {
                rank: "3",
                name: "ランウェイキュアソール",
                verdict: "外反母趾対応：要注意",
                verdictColor: "text-[#e8627c]",
                reason:
                  "整体師監修の骨盤補整設計で姿勢改善効果は高いのですが、外反母趾の方は注意が必要です。薄型設計のためヒール靴にも対応しますが、その分アーチサポートの厚みが限定的です。また、ヒール靴自体が外反母趾を悪化させるリスクがあるため、外反母趾の方がヒール靴で使用する場合はかえって逆効果になる可能性があります。",
                points: [
                  "骨盤補整による姿勢改善効果はある",
                  "薄型でヒール靴に対応するが、外反母趾にはリスクも",
                  "フラットシューズでの使用であれば問題は少ない",
                ],
                caution:
                  "外反母趾がある方がヒール靴で使用すると、つま先への荷重集中を助長する可能性があります。外反母趾の方はフラットシューズでの使用を推奨します。",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#e8627c] shrink-0">
                    {item.rank}位
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className={`text-sm font-medium ${item.verdictColor}`}>
                      {item.verdict}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.reason}
                </p>
                <ul className="space-y-1 mb-4">
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
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 mb-1">
                    注意点
                  </p>
                  <p className="text-sm text-amber-800">{item.caution}</p>
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

      {/* 選び方ポイント */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            外反母趾向けインソールの選び方ポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "横アーチサポートの有無を確認",
                desc: "外反母趾の改善に最も重要なのは横アーチ（中足骨頭部パッド/メタタルサルパッド）のサポートです。内側縦アーチだけでなく、横アーチもサポートするインソールを選びましょう。横アーチが持ち上がることで中足骨の広がりが抑制され、親指への圧力が軽減されます。",
              },
              {
                title: "つま先部分にゆとりがあるか確認",
                desc: "外反母趾の方にとって、つま先が窮屈なインソールは厳禁です。特に母趾球部分が圧迫されないよう、つま先に適度なゆとりがあるインソールを選んでください。インソールを靴に入れた状態で、親指が自然に動かせるか確認しましょう。",
              },
              {
                title: "クッション性のある素材を選ぶ",
                desc: "母趾球部分にクッション性のある素材（ジェルやEVAフォーム）が使われているインソールは、歩行時の衝撃を吸収して痛みを軽減します。硬すぎるインソールは母趾球に直接圧力がかかるため、外反母趾には向きません。",
              },
              {
                title: "靴との相性を考慮する",
                desc: "外反母趾の方は、先の細い靴やヒールの高い靴は避けるのが原則です。つま先が広く、足の甲を適度にホールドする靴にインソールを入れるのが最も効果的です。インソールの厚みで靴が窮屈にならないか、事前に確認しましょう。",
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

      {/* 外反母趾のセルフケア */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールと併用したい外反母趾セルフケア
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールに加えて、以下のセルフケアを取り入れることで、外反母趾の改善・予防効果がさらに高まります。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "足指じゃんけん（グー・チョキ・パー）",
                desc: "足の指でグー（全部曲げる）・チョキ（親指だけ上げる）・パー（全部広げる）の動きを繰り返します。足指の筋力が向上し、横アーチの維持力が高まります。1日3セット（各10回）が目安です。特に「パー」の動きが外反母趾の改善に効果的です。",
              },
              {
                title: "タオルギャザー",
                desc: "床にタオルを敷き、足の指でタオルをたぐり寄せます。足裏の内在筋が鍛えられ、アーチの維持力が向上します。外反母趾では親指の力が弱くなっていることが多いため、親指を意識的に使うことがポイントです。",
              },
              {
                title: "ゴムバンドストレッチ",
                desc: "両足の親指にゴムバンドをかけ、足を開く方向に引っ張ります。外反母趾で内側に寄った親指を元の位置に戻す力を鍛えるエクササイズです。30秒×5セット、1日2回が目安です。",
              },
              {
                title: "母趾球のマッサージ",
                desc: "ゴルフボールやテニスボールを母趾球の下に置き、ゆっくり体重をかけてマッサージします。母趾球周辺の血流が改善され、痛みの軽減や筋肉の柔軟性向上につながります。痛みが強い場合は無理をしないでください。",
              },
              {
                title: "正しい靴選びの実践",
                desc: "つま先に1〜1.5cmの余裕がある靴を選びましょう。ヒールは3cm以下が理想です。靴を買うときは夕方（足がむくむ時間帯）に試着し、幅広のデザインを選ぶことが大切です。おしゃれと足の健康は両立が難しいですが、普段使いの靴だけでも足に優しいものを選びましょう。",
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

      {/* 外反母趾とインソールの正しい使い方 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            外反母趾の方のインソール正しい使い方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              外反母趾がある方がインソールを使う場合、通常の使い方に加えていくつかの注意点があります。正しい使い方を守ることで、効果を最大化し、悪化のリスクを防ぎましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "靴に入れる前にフィッティングを確認",
                desc: "インソールを靴に入れた状態で、母趾球部分が靴の壁に当たっていないか確認しましょう。外反母趾の方は足幅が広がっていることが多いため、幅広設計の靴を選ぶことも重要です。インソールの厚みで靴内が窮屈になる場合は、0.5cm大きいサイズの靴を検討してください。",
              },
              {
                title: "最初は短時間から慣らす",
                desc: "外反母趾の方は足裏の筋肉バランスが崩れていることが多いため、いきなり長時間使用すると足裏の痛みや違和感が出ることがあります。最初は1日2〜3時間から始め、1週間かけて徐々に使用時間を延ばしていきましょう。痛みが出たら一旦中止し、翌日から再開してください。",
              },
              {
                title: "夜間のケアも忘れずに",
                desc: "日中のインソール使用に加えて、就寝前に足指のストレッチやマッサージを行うと効果的です。日中にインソールで正しい位置にサポートされた足を、ストレッチでさらに柔軟にすることで、改善のスピードが上がります。",
              },
              {
                title: "定期的にインソールの状態を確認",
                desc: "インソールのアーチサポート部分がへたってくると、サポート力が低下します。特に外反母趾の方はアーチサポートの効果が重要なため、3〜6ヶ月ごとにインソールの状態を確認し、必要に応じて交換しましょう。母趾球部分のクッションが潰れていないかも要チェックです。",
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

      {/* 医療機関への受診目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            整形外科を受診すべき目安
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              軽度の外反母趾であればインソールとセルフケアで十分に対応できますが、以下のような場合は自己判断せず、整形外科を受診することを強くおすすめします。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "歩行時に常に痛みがある場合",
                desc: "日常の歩行で常に痛みを感じる状態は、外反母趾が中等度以上に進行している可能性があります。痛み止めを飲みながら歩いているような場合は、早めの受診が必要です。",
              },
              {
                title: "親指が第2趾の上または下に重なっている場合",
                desc: "親指が隣の指と重なるほど変形が進んでいる場合は、重度の外反母趾です。インソールだけでの対応は困難であり、矯正具や場合によっては手術が検討されます。",
              },
              {
                title: "母趾球が赤く腫れて炎症を起こしている場合",
                desc: "バニオン（母趾球の滑液嚢炎）を起こしている場合は、炎症が治まるまでインソールの使用は控え、整形外科で適切な治療を受けてください。",
              },
              {
                title: "インソールを3ヶ月使用しても痛みが改善しない場合",
                desc: "適切なインソールとセルフケアを3ヶ月続けても痛みが改善しない場合は、医療用のオーダーメイドインソール（オルソティクス）の作成が必要かもしれません。整形外科で足の状態を詳しく検査してもらいましょう。",
              },
              {
                title: "左右で外反の程度が大きく異なる場合",
                desc: "片方だけが急速に悪化している場合は、関節リウマチなど他の疾患が隠れている可能性があります。早めの受診で原因を特定しましょう。",
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              外反母趾の改善にインソールは効果的なアプローチです。特に横アーチサポートによる開張足の補整と、荷重分散による母趾球の除圧は、痛みの軽減と進行の予防に大きく貢献します。
            </p>
            <p>
              ダイエットインソール3商品の中では、3点アーチサポートを搭載したピットソールが外反母趾にも最も適しています。スリムアップインソールも概ね良好ですが、ランウェイキュアソールはヒール靴での使用時に外反母趾を悪化させるリスクがあるため注意が必要です。
            </p>
            <p>
              ただし、インソールで変形自体を元に戻すことは難しく、あくまで「痛みの軽減・進行の予防・歩行の改善」がインソールの役割です。中等度以上の外反母趾や、痛みが強い場合は整形外科を受診しましょう。早めの対策が、将来の足の健康を守ります。
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
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/o-leg-insole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                O脚改善にインソールは効果ある？おすすめと選び方ガイド
              </p>
            </Link>
            <Link
              href="/articles/flat-feet/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                扁平足・浮き指にインソールは効果ある？おすすめ3選
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
