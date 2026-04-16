import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "スリムアップインソールのサイズ選び・痩せる使い方ガイド",
  description:
    "スリムアップインソールのサイズ展開・サイズ選びのコツ・効果的な使い方を徹底解説。正しい歩き方と使用時間の目安、ピットソール・ランウェイキュアソールとの違いも比較。",
  openGraph: {
    title:
      "スリムアップインソールのサイズ選び・痩せる使い方ガイド｜ソールラボ",
    description:
      "スリムアップインソールのサイズ展開・使い方・他社比較を徹底解説。コスパ最強インソールの活用法。",
    url: "https://sole-laboratory.com/articles/slimup-guide/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/slimup-guide/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "スリムアップインソールのサイズ選び・痩せる使い方ガイド",
  description:
    "スリムアップインソールのサイズ展開・使い方・他社との違いを解説。コスパ最強インソールの活用法。",
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
    question: "スリムアップインソールは本当に痩せますか？",
    answer:
      "スリムアップインソール単体で劇的に痩せることはありません。傾斜設計により歩行時の筋肉活動量を高めるサポートアイテムです。毎日装着して歩くことで、通常より効率的なカロリー消費が期待できます。食事管理や適度な運動と併用することで、より高い効果が見込めます。",
  },
  {
    question: "スリムアップインソールのサイズが合わなかったらどうすればいいですか？",
    answer:
      "スリムアップインソールはつま先部分をカットして調整できます。大きすぎる場合はカットで対応可能ですが、小さすぎる場合は交換が必要です。迷った場合は大きめのサイズを選び、カットで調整するのがおすすめです。",
  },
  {
    question: "スリムアップインソールは1日何時間使えばいいですか？",
    answer:
      "最初は1日2〜3時間から始め、1〜2週間かけて徐々に使用時間を延ばしましょう。慣れてきたら終日使用が理想です。少なくとも1日4〜6時間の使用で、歩行時の筋肉活性化効果が期待できます。就寝時の使用は不要です。",
  },
  {
    question: "スリムアップインソールとピットソールはどちらがおすすめですか？",
    answer:
      "予算に余裕があり、科学的根拠と実績を重視する方にはピットソール（6,578円〜）がおすすめです。まずは手頃な価格でダイエットインソールを試したい方には、スリムアップインソール（2,178円〜）が良い入口になります。技術力ではピットソールが上ですが、コスパではスリムアップインソールが優れています。",
  },
  {
    question: "スリムアップインソールは男性でも使えますか？",
    answer:
      "はい、スリムアップインソールは男女兼用です。S（22〜24cm）・M（24〜26cm）・L（26〜28cm）の3サイズ展開で、最大28cmまで対応しています。ピットソールの最大サイズ（27.5cm）では足りない男性にも対応できる点がメリットです。",
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
      name: "スリムアップインソール",
      item: "https://sole-laboratory.com/slim-up-insole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "サイズ・使い方",
      item: "https://sole-laboratory.com/articles/slimup-guide/",
    },
  ],
};

export default function SlimupGuidePage() {
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
          { label: "スリムアップインソール", href: "/slim-up-insole/" },
          { label: "サイズ・使い方" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-teal-600 font-medium mb-2">
            スリムアップインソール特集
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            スリムアップインソールの
            <br />
            <span className="text-teal-600">サイズ選び</span>・
            <span className="text-teal-600">痩せる使い方</span>ガイド
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            手頃な価格で始められるスリムアップインソールのサイズ選び・効果的な使い方を完全解説。ピットソール・ランウェイキュアソールとの違いも徹底比較します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
              スリムアップインソール サイズ
            </span>
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
              痩せる使い方
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* スリムアップインソールとは */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            スリムアップインソールとは
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールは、傾斜設計で歩行時の筋肉を自然に刺激するダイエットサポートインソールです。2,178円（税込）〜という手頃な価格で、ダイエットインソール入門として人気があります。
            </p>
            <p>
              多くの競合記事ではスリムアップインソールの情報が断片的で、サイズ選びから効果的な使い方までを体系的にまとめたガイドはほとんどありません。この記事では、購入前に知っておくべき情報から、購入後の使いこなし方まで一つの記事で完結するよう網羅しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "手頃な価格",
                desc: "1足2,178円〜と、ピットソール（6,578円〜）の約3分の1の価格。初めてダイエットインソールを試す方にとって、リスクの少ない入口となります。",
              },
              {
                title: "傾斜設計",
                desc: "かかと部分が少し高くなった傾斜設計により、自然と前傾姿勢になり、歩行時にふくらはぎや太ももの筋肉が活性化されます。特別な意識をしなくても筋肉が使われる設計です。",
              },
              {
                title: "男女兼用・豊富なサイズ",
                desc: "S/M/Lの3サイズで22〜28cmまで対応。ピットソールの最大27.5cmでは足りない大きめサイズの方にも対応できる点が強みです。",
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
        </div>
      </section>

      {/* サイズ展開 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ展開一覧
          </h2>
          <div className="card mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      対応cm
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      おすすめの方
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      カット調整
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      size: "S",
                      cm: "22〜24cm",
                      target: "小さめの足の女性",
                      cut: "可能",
                    },
                    {
                      size: "M",
                      cm: "24〜26cm",
                      target: "標準的な女性・小さめの男性",
                      cut: "可能",
                    },
                    {
                      size: "L",
                      cm: "26〜28cm",
                      target: "標準的な男性・大きめの足の方",
                      cut: "可能",
                    },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-bold">
                        {row.size}
                      </td>
                      <td className="py-3 text-gray-900">{row.cm}</td>
                      <td className="py-3 text-gray-600">{row.target}</td>
                      <td className="py-3 text-emerald-600">{row.cut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ ピットソールやランウェイキュアソール（4サイズ）と比べ、3サイズ展開のため1サイズのカバー範囲が広くなっています。
            </p>
          </div>

          <div className="card bg-amber-50 border-[#c9a76c]">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              サイズ選びの注意点
            </h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>
                スリムアップインソールは3サイズ展開のため、1サイズあたりのカバー範囲が広い（各2cm幅）のが特徴です。例えばMサイズは24〜26cmと幅が広いため、カットでの調整が前提となっています。
              </p>
              <p>
                <strong>サイズの境目の方は要注意：</strong>24cmの方はSとMどちらも候補になります。パンプスなどタイトな靴で使う場合はSサイズ、スニーカーなどゆとりのある靴ならMサイズを選びましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サイズ選びのコツ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ選びの4つのコツ
          </h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "靴のサイズに合わせる（足のサイズではなく）",
                desc: "足の実寸ではなく、普段履いている靴のサイズを基準にしましょう。足の実寸が23cmでも24cmの靴を履いているなら、24cmに対応するSまたはMサイズを選びます。インソールは靴の中に入れるため、靴に合うかどうかが最重要です。",
              },
              {
                num: "02",
                title: "迷ったら大きめを選んでカット",
                desc: "サイズの境目で迷った場合は大きいサイズを選びましょう。スリムアップインソールはつま先部分をカットして調整できるため、大きめから小さくすることは可能ですが、小さいものを大きくすることはできません。ハサミでガイドラインに沿ってカットするだけで簡単に調整できます。",
              },
              {
                num: "03",
                title: "使う靴の中敷きを確認する",
                desc: "元の中敷きが取り外せる靴であれば、取り外してからスリムアップインソールを入れましょう。元の中敷きの上に重ねると厚みが出すぎて靴がきつくなります。取り外した中敷きはカットのテンプレートとしても使えます。",
              },
              {
                num: "04",
                title: "複数の靴で使い分ける場合はサイズ注意",
                desc: "異なるサイズの靴で使い回す場合、靴ごとにインソールを用意するのが理想です。25cmのスニーカーと24.5cmのパンプスでは最適なカット位置が異なります。セット購入で複数枚確保すれば、靴ごとに最適な状態で使えます。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-teal-600 shrink-0">
                    {item.num}
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
        </div>
      </section>

      {/* 効果的な使い方 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            痩せる効果を最大化する使い方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              スリムアップインソールを入れて歩くだけでも一定の効果は期待できますが、使い方を工夫することで効果を大幅にアップさせることができます。ここでは、効果を最大化する具体的な方法を解説します。
            </p>
          </div>

          <div className="space-y-6">
            <div className="card border-l-4 border-l-teal-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                正しい歩き方を意識する
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  スリムアップインソールの傾斜設計は、正しい歩行フォームと組み合わせることで最大の効果を発揮します。以下の3ステップを意識しましょう。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="font-bold text-teal-700 text-xs mb-1">
                      STEP 1
                    </p>
                    <p className="text-gray-700">
                      かかとから着地する。インソールの傾斜がかかとの高さを補助してくれるため、自然とかかとから着地しやすくなります。
                    </p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="font-bold text-teal-700 text-xs mb-1">
                      STEP 2
                    </p>
                    <p className="text-gray-700">
                      足裏全体で体重を受け止める。足の外側や内側に偏らず、足裏全体で均等に体重をかける意識を持ちましょう。
                    </p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="font-bold text-teal-700 text-xs mb-1">
                      STEP 3
                    </p>
                    <p className="text-gray-700">
                      つま先で蹴り出す。最後に親指の付け根あたりで力強く蹴り出すことで、ふくらはぎの筋肉がしっかり使われます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-l-teal-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                使用時間の目安
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 text-left text-gray-500 font-medium">
                          期間
                        </th>
                        <th className="py-2 text-left text-gray-500 font-medium">
                          推奨使用時間
                        </th>
                        <th className="py-2 text-left text-gray-500 font-medium">
                          備考
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">1〜3日目</td>
                        <td className="py-2 text-gray-900">2〜3時間</td>
                        <td className="py-2 text-gray-500">
                          慣らし期間。違和感を確認
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">4〜7日目</td>
                        <td className="py-2 text-gray-900">4〜6時間</td>
                        <td className="py-2 text-gray-500">
                          徐々に時間を延ばす
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-gray-900">2週間目〜</td>
                        <td className="py-2 text-gray-900">終日使用</td>
                        <td className="py-2 text-gray-500">
                          靴を履いている間は常時装着
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  最初から終日使用すると足裏が痛くなる場合があります。特に傾斜設計に慣れていない方は、ふくらはぎに筋肉痛が出ることがあるため、段階的に使用時間を延ばすことが大切です。
                </p>
              </div>
            </div>

            <div className="card border-l-4 border-l-teal-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                歩行量の目安
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  スリムアップインソールの効果は「歩く」ことで発揮されます。最低でも1日5,000歩、できれば8,000歩以上を目指しましょう。
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    歩数の目安と消費カロリー
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      ・3,000歩（約20分）：約100kcal ← 最低ライン
                    </li>
                    <li>
                      ・5,000歩（約35分）：約165kcal ← 効果実感の目安
                    </li>
                    <li>
                      ・8,000歩（約55分）：約260kcal ← 理想的
                    </li>
                    <li>
                      ・10,000歩（約70分）：約330kcal ← 最大効果
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    ※ 体重60kgの場合の概算値。インソール使用時はさらに10〜15%の上乗せが期待できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社との比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソール・ランウェイキュアソールとの徹底比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              スリムアップインソールを検討中の方が最も気になるのは「他の製品とどう違うのか」でしょう。ここでは、ピットソールとランウェイキュアソールとの違いを項目別に比較します。
            </p>
          </div>

          <div className="card mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      比較項目
                    </th>
                    <th className="py-3 text-left text-teal-600 font-medium">
                      スリムアップ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      ピットソール
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      ランウェイ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "価格（1足）",
                      slimup: "2,178円〜",
                      pitsole: "6,578円〜",
                      runway: "4,378円〜",
                    },
                    {
                      item: "サイズ展開",
                      slimup: "S/M/L（3種）",
                      pitsole: "XS/S/M/L（4種）",
                      runway: "XS/S/M/L（4種）",
                    },
                    {
                      item: "最大対応cm",
                      slimup: "28cm",
                      pitsole: "27.5cm",
                      runway: "27.5cm",
                    },
                    {
                      item: "特許技術",
                      slimup: "なし",
                      pitsole: "世界特許あり",
                      runway: "なし",
                    },
                    {
                      item: "アーチサポート",
                      slimup: "簡易的",
                      pitsole: "3点アーチ",
                      runway: "3点アーチ",
                    },
                    {
                      item: "設計の特徴",
                      slimup: "傾斜設計",
                      pitsole: "キュボイドサポート",
                      runway: "骨盤補整（整体師監修）",
                    },
                    {
                      item: "臨床試験",
                      slimup: "なし",
                      pitsole: "筑波大学共同研究",
                      runway: "なし",
                    },
                    {
                      item: "おすすめ対象",
                      slimup: "初心者・コスパ重視",
                      pitsole: "効果重視・実績重視",
                      runway: "姿勢改善重視",
                    },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-medium">
                        {row.item}
                      </td>
                      <td className="py-3 text-teal-600 font-medium">
                        {row.slimup}
                      </td>
                      <td className="py-3 text-gray-600">{row.pitsole}</td>
                      <td className="py-3 text-gray-600">{row.runway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-teal-50 border-teal-200">
              <h3 className="text-sm font-bold text-teal-700 mb-2">
                スリムアップがおすすめの人
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・初めてダイエットインソールを試す方</li>
                <li>・コストを抑えたい方</li>
                <li>・足のサイズが28cmまでの方</li>
                <li>・気軽に始めたい方</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-bold text-[#e8627c] mb-2">
                ピットソールがおすすめの人
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・科学的根拠を重視する方</li>
                <li>・最大限の効果を求める方</li>
                <li>・特許技術に価値を感じる方</li>
                <li>・予算に余裕がある方</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-bold text-purple-700 mb-2">
                ランウェイがおすすめの人
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・姿勢改善を最重視する方</li>
                <li>・パンプスで使いたい方</li>
                <li>・中間価格帯を希望する方</li>
                <li>・整体師監修に安心感を覚える方</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              結論として、スリムアップインソールは「ダイエットインソールの入門編」に最適です。手頃な価格で効果を体感し、もっと本格的にしたいと思ったらピットソールへのステップアップを検討するのが賢い選び方です。
            </p>
            <p>
              一方で、スリムアップインソールには特許技術や臨床試験データがない点は理解しておく必要があります。効果の科学的根拠はピットソールが最も充実しており、価格差には相応の理由があります。
            </p>
          </div>
        </div>
      </section>

      {/* お手入れ方法 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            長持ちさせるためのお手入れ方法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "毎日のケア",
                desc: "使用後は靴から取り出して風通しの良い場所で乾燥させましょう。靴の中に入れっぱなしにすると湿気がたまり、雑菌の繁殖やインソールの劣化の原因になります。帰宅後に取り出すだけでも大きな違いがあります。",
              },
              {
                title: "週1回のクリーニング",
                desc: "週に1回程度、ウェットティッシュで表面を拭くか、ぬるま湯と中性洗剤で軽く手洗いしましょう。洗った後は必ず陰干しで完全に乾かしてから使用してください。直射日光は変形の原因になります。",
              },
              {
                title: "交換時期の目安",
                desc: "一般的にインソールの交換目安は3〜6ヶ月です。表面のすり減り、クッション性の低下、サポート力の減少を感じたら交換のサインです。効果を維持するためにも、定期的な交換を心がけましょう。",
              },
              {
                title: "NGなお手入れ",
                desc: "洗濯機・乾燥機の使用は型崩れの原因になるため避けてください。また、ドライヤーやヒーターでの急速乾燥もインソールの素材を傷めます。必ず自然乾燥で対応しましょう。",
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
                    <span className="text-teal-600 shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-teal-600 font-bold">A.</span>{" "}
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
              スリムアップインソールは、S/M/Lの3サイズ展開で22〜28cmまで対応する、手頃な価格のダイエットインソールです。傾斜設計により歩行時の筋肉を自然に刺激し、日常の歩行を効率的なエクササイズに変えてくれます。
            </p>
            <p>
              サイズ選びでは「靴のサイズに合わせる」「迷ったら大きめを選んでカット」の2つが基本ルールです。効果を最大化するためには、かかとからつま先への正しい歩行フォームを意識し、1日5,000歩以上歩くことが重要です。
            </p>
            <p>
              ピットソールやランウェイキュアソールと比較すると、科学的根拠や技術力では劣りますが、価格の手軽さは最大の魅力です。「まずダイエットインソールとはどんなものか試してみたい」という方に最適な入門モデルと言えるでしょう。
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/slim-up-insole/"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
            >
              スリムアップインソールの詳細レビュー
            </Link>
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
            >
              インソールランキングを見る
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
              href="/slim-up-insole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                スリムアップインソールの口コミ・効果を徹底検証
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
            <Link
              href="/compare/pitsole-vs-slimup/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソール vs スリムアップインソール 徹底比較
              </p>
            </Link>
            <Link
              href="/articles/how-to-choose/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ダイエットインソールの選び方完全ガイド
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
