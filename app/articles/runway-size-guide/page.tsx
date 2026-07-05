import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソールのサイズ選び｜M・Lどっち？対応表つき解説",
  description:
    "ランウェイキュアソールはM（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開・女性向けのソックス型。M/Lの選び方、境目サイズの考え方、対応外サイズの方向けの代替製品対応表、よくある質問まで公式情報ベースで解説します。",
  openGraph: {
    title:
      "ランウェイキュアソールのサイズ選び｜M・Lどっち？対応表つき解説｜ソールラボ",
    description:
      "ランウェイキュアソールのサイズ展開はM/Lの2サイズ（女性向け・ソックス型）。選び方と対応外サイズの代替案を公式情報ベースで解説。",
    url: "https://sole-laboratory.com/articles/runway-size-guide/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/runway-size-guide/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline:
    "ランウェイキュアソールのサイズ選び｜M・Lどっち？対応表つき解説",
  description:
    "ランウェイキュアソールのサイズ展開（M/Lの2サイズ・女性向けソックス型）と選び方、対応外サイズの方向けの代替案を公式情報ベースで解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-07-05",
};

const faqs = [
  {
    question: "ランウェイキュアソールのサイズ展開を教えてください。",
    answer:
      "M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開です（公式サイトにて2026年7月確認）。女性向けの設計で、対応範囲は最大25.0cmまでです。靴に入れる中敷きタイプではなく、足に直接装着するソックス型のため、ご自身の足のサイズに合わせて選びます。",
  },
  {
    question: "足のサイズが23.5〜24.0cmの場合、MとLどちらを選べばいいですか？",
    answer:
      "公式FAQでは、普段の靴のサイズが23.5cmの方にはMサイズが案内されています。23.5cmと24.0cmの間はちょうどM/Lの境目にあたるため、該当する方は購入前に公式サイトのサイズ案内を確認するのが確実です。また、3足以上のセット購入であればMとLを混ぜて注文できる場合があると公式サイトに記載されています。",
  },
  {
    question: "ランウェイキュアソールはハサミでのカット調整ができますか？",
    answer:
      "できません。ランウェイキュアソールは靴に入れる中敷き（インソール）ではなく、足に直接装着するソックス型のため、カットによる調整という概念自体がありません。M（22.5〜23.5cm）またはL（24.0〜25.0cm）の中から、ご自身の足のサイズに合うほうを選んでください。",
  },
  {
    question: "男性でもランウェイキュアソールを使えますか？",
    answer:
      "M（22.5〜23.5cm）とL（24.0〜25.0cm）の女性向けサイズ展開のため、男性にはサイズが合わない場合が多いです。男性には、XS〜XLの5サイズで21〜29cmに対応するピットソール（XLはブラック/ピンク限定）が選択肢になります。",
  },
  {
    question: "ランウェイキュアソールは外反母趾でも使えますか？",
    answer:
      "使用自体は可能ですが、親指と人差し指の間にあるクロス部分が外反母趾の部分に食い込む場合があります。症状が重い方は短時間から試すか、医師に相談されることをおすすめします。なお、ランウェイキュアソールは外反母趾の治療を目的とした医療機器ではありません。",
  },
  {
    question: "サイズが合わなかった場合の保証はありますか？",
    answer:
      "公式サイトには、90日間使用して実感がない場合の全額返金保証の記載があります（2026年7月確認時点）。適用条件や対象となる購入形態は変更される場合があるため、購入前に必ず公式サイトで最新の保証条件をご確認ください。",
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
      name: "ランウェイキュアソール",
      item: "https://sole-laboratory.com/runway-cure-sole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "サイズ選びガイド",
      item: "https://sole-laboratory.com/articles/runway-size-guide/",
    },
  ],
};

export default function RunwaySizeGuidePage() {
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
          { label: "ランウェイキュアソール", href: "/runway-cure-sole/" },
          { label: "サイズ選びガイド" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            ランウェイキュアソール特集
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールの
            <span className="text-[#e8627c]">サイズ選び</span>
            <br />
            M・Lどっちを選ぶ？対応表つき解説
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ランウェイキュアソールはM（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開・女性向けのソックス型です。M/Lの選び方、境目サイズの考え方、対応外サイズの方向けの代替案まで、公式サイトの情報（2026年7月確認）をもとに解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-pink-100 text-[#e8627c] px-3 py-1 rounded-full font-medium">
              ランウェイキュアソール サイズ
            </span>
            <span className="bg-pink-100 text-[#e8627c] px-3 py-1 rounded-full font-medium">
              M・Lの選び方
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年7月更新
            </span>
          </div>
        </div>
      </section>

      {/* まず知っておきたい前提 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まず知っておきたい：ソックス型＝「靴」ではなく「足」に合わせて選ぶ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ランウェイキュアソールは、靴の中に入れて使う中敷き（インソール）ではなく、
              <strong>足に直接装着するソックス型</strong>のアイテムです（公式サイトにて2026年7月確認）。
              そのため、サイズ選びの基準は「靴の大きさ」ではなく「ご自身の足のサイズ」になります。
            </p>
            <p>
              また、中敷きタイプのようにハサミで形を整えて合わせるという発想は、ソックス型のランウェイキュアソールには当てはまりません。
              <strong>M・Lの2サイズの中から足に合うサイズを選ぶ</strong>のが唯一の調整方法です。この記事では、その選び方を順に整理します。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ展開一覧 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ展開一覧（M・Lの2サイズ）
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      対応サイズ（cm）
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      目安
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      size: "M",
                      cm: "22.5〜23.5",
                      target: "足のサイズが22.5〜23.5cmの女性",
                    },
                    {
                      size: "L",
                      cm: "24.0〜25.0",
                      target: "足のサイズが24.0〜25.0cmの女性",
                    },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-bold">
                        {row.size}
                      </td>
                      <td className="py-3 text-gray-900">{row.cm}</td>
                      <td className="py-3 text-gray-600">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 公式サイトにて2026年7月確認。女性向けのサイズ展開で、対応範囲は最大25.0cmです。仕様は変更される場合があるため、購入前に公式サイトの最新情報をご確認ください。
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
            <p>
              サイズはM・Lの2種類のみで、22.5cm未満の方・25.0cmを超える方・男性の多くは対応範囲外となります。
              対応範囲外の方向けの代替案は、この記事の
              <a href="#out-of-range" className="text-[#e8627c] underline">
                「対応外サイズの方への代替案」
              </a>
              で製品別に整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ選びのポイント */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            M・Lの選び方 3つのポイント
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "足のサイズ（実寸）を基準に選ぶ",
                desc: "ソックス型のため、選ぶ基準は靴のサイズではなくご自身の足のサイズです。足のサイズが22.5〜23.5cmならM、24.0〜25.0cmならLが対応範囲です。普段の靴のサイズと足の実寸が異なる方もいるため、足のサイズが曖昧な場合は一度測ってから選ぶと確実です。",
              },
              {
                num: "02",
                title: "境目（23.5〜24.0cm）の方は公式のサイズ案内を確認する",
                desc: "公式FAQでは、普段の靴のサイズが23.5cmの方にはMサイズが案内されています。一方、23.5cmと24.0cmの間はM/Lの区分の境目にあたるため、該当する方は購入前に公式サイトのサイズ案内を確認するのが確実です。公式FAQには「迷った場合は大きめのサイズを選ぶと調整しやすい」という案内もあります。",
              },
              {
                num: "03",
                title: "セット購入ならM/Lを混ぜられる場合がある",
                desc: "公式サイトには、3足以上のセット購入であればMとLを混ぜて注文できる場合があるという記載があります。境目のサイズでどちらか判断がつかない方は、セット購入時にサイズ違いで注文できるか公式サイトで確認するのも一つの方法です。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#e8627c] shrink-0">
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

      {/* ソックス型と靴の相性 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ソックス型ならではの靴との相性
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ランウェイキュアソールは足に直接装着するソックス型のため、中敷きの入れ替えが必要なインソールと違い、
              <strong>靴の形状を選びにくい</strong>のが特徴です（公式サイトにて2026年7月確認）。
              ただし公式サイトでは、靴のタイプによって向き不向きがあることも案内されています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-emerald-50 border-emerald-200">
              <h3 className="text-sm font-bold text-emerald-700 mb-3">
                相性が良いとされる靴
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  スニーカー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  ローヒールの靴
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  手持ちの靴をそのまま使える（中敷きの入れ替え不要）
                </li>
              </ul>
            </div>

            <div className="card bg-amber-50 border-[#c9a76c]">
              <h3 className="text-sm font-bold text-[#c9a76c] mb-3">
                窮屈になる場合がある靴
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  つま先が極端に細いデザインの靴
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  ヒールが高すぎる靴
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  タイトなサイズ感の靴（足＋装着分のゆとりが必要になる場合）
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              公式サイトでは、スニーカーやローヒールの靴での使用が最も効果的とされています。パンプスなどつま先が細い靴やハイヒールを日常的に履く方は、装着した状態で窮屈にならないかを考慮したうえで検討してください。
            </p>
          </div>
        </div>
      </section>

      {/* 対応外サイズの方への代替案 */}
      <section id="out-of-range" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            対応外サイズの方への代替案
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ランウェイキュアソールの対応範囲は22.5〜25.0cm（女性向け）のため、
              <strong>22.5cm未満の方・25.0cmを超える方・男性の多く</strong>は対応外となります。
              その場合は、当サイトで扱っている他の2製品（いずれも靴に入れる中敷きタイプ）のサイズ展開が参考になります。
            </p>
          </div>

          <div className="card mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              ピットソール（中敷きタイプ・XS〜XLの5サイズ）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      対応サイズ（cm）
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", cm: "21〜22.5", note: "-" },
                    { size: "S", cm: "23〜24.5", note: "-" },
                    { size: "M", cm: "25〜26", note: "-" },
                    { size: "L", cm: "26.5〜27.5", note: "-" },
                    {
                      size: "XL",
                      cm: "28〜29",
                      note: "ブラック/ピンク限定",
                    },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-bold">
                        {row.size}
                      </td>
                      <td className="py-3 text-gray-900">{row.cm}</td>
                      <td className="py-3 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 21〜29cmに対応するXS〜XLの5サイズ展開。男性や25.0cm超の方の選択肢になります。
            </p>
          </div>

          <div className="card mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              スリムアップインソール（中敷きタイプ・S/Mの2サイズ）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      対応サイズ（cm）
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "S", cm: "23.0〜24.5" },
                    { size: "M", cm: "25.0〜26.5" },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-bold">
                        {row.size}
                      </td>
                      <td className="py-3 text-gray-900">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 最大26.5cmまで。25.0〜26.5cmの方の選択肢になります。
            </p>
          </div>

          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-sm font-bold text-blue-700 mb-3">
              足のサイズ別・早見メモ
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0 mt-0.5">&#10003;</span>
                22.5cm未満の方 → ピットソールXS（21〜22.5cm）が候補
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0 mt-0.5">&#10003;</span>
                22.5〜25.0cmの女性 → ランウェイキュアソールの対応範囲
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0 mt-0.5">&#10003;</span>
                25.0cm超の方 → ピットソールM以上、またはスリムアップインソールM（26.5cmまで）が候補
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0 mt-0.5">&#10003;</span>
                男性 → ランウェイキュアソールはサイズ非対応が多く、ピットソール（最大29cm）が候補
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
            <p>
              各サイズ・仕様は公式サイトにて確認した情報です（2026年7月時点）。変更される場合があるため、購入前に必ず各公式サイトの最新情報をご確認ください。製品ごとの詳しい比較は
              <Link href="/ranking/" className="text-[#e8627c] underline">
                ランキングページ
              </Link>
              も参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* 価格と返金保証 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            価格と返金保証（サイズ選びの失敗リスクに備える）
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      購入形態
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      価格（税込）
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      1足あたり
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "単品（1足）", price: "6,980円", per: "6,980円" },
                    { plan: "2足セット", price: "11,980円", per: "5,990円" },
                    {
                      plan: "3足セット",
                      price: "17,960円",
                      per: "約5,987円",
                    },
                  ].map((row) => (
                    <tr key={row.plan} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-medium">
                        {row.plan}
                      </td>
                      <td className="py-3 text-gray-900">{row.price}</td>
                      <td className="py-3 text-gray-600">{row.per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 公式サイトにて2026年7月確認。価格は変更される場合があります。
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
            <p>
              公式サイトには、<strong>90日間使用して実感がない場合の全額返金保証</strong>の記載があります（2026年7月確認時点）。ソックス型でカットによる微調整ができない分、サイズ選びに不安がある方は、購入前に保証の適用条件（対象となる購入形態・申請方法など）を公式サイトで確認しておくと安心です。
            </p>
            <p>
              なお、3足以上のセット購入でM/Lを混ぜられる場合がある点（公式サイト記載）も、境目サイズの方にとっては失敗リスクを下げる選択肢になります。
            </p>
          </div>
        </div>
      </section>

      {/* 外反母趾の方への注意点 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            外反母趾の方への注意点
          </h2>
          <div className="card border-2 border-amber-200 bg-amber-50 mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              クロス部分の食い込みに注意
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ランウェイキュアソールには親指と人差し指の間にかかるクロス構造があり、<strong>外反母趾の出っ張り部分に当たって食い込みを感じる場合があります</strong>。使用自体は可能とされていますが、症状が重い方は短時間から試すか、医師に相談されることをおすすめします。
            </p>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              また、ランウェイキュアソールは外反母趾の治療を目的とした医療機器ではありません。外反母趾の症状に不安がある方や痛みが続く方は、整形外科など専門医への相談を優先してください。外反母趾との付き合い方については
              <Link
                href="/runway-cure-sole/"
                className="text-[#e8627c] underline"
              >
                ランウェイキュアソールの詳細ページ
              </Link>
              でも解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
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
              ランウェイキュアソールは足に直接装着するソックス型で、サイズはM（22.5〜23.5cm）とL（24.0〜25.0cm）の2種類・女性向けです（公式サイトにて2026年7月確認）。中敷きタイプと違いカットによる調整はできないため、ご自身の足のサイズを基準にM/Lを選ぶことがすべてです。
            </p>
            <p>
              23.5〜24.0cmの境目にあたる方は、購入前に公式サイトのサイズ案内を確認してください。公式FAQでは23.5cmの方にはMが案内されており、迷った場合は大きめを選ぶ・3足以上のセットでM/Lを混ぜて注文できる場合がある、といった案内もあります。
            </p>
            <p>
              22.5cm未満・25.0cm超の方や男性は対応外となる場合が多いため、ピットソール（XS〜XL・21〜29cm）やスリムアップインソール（S/M・最大26.5cm）など、中敷きタイプの製品を検討するのが現実的です。仕様・価格・保証条件は変更される場合があるため、購入前に必ず公式サイトの最新情報をご確認ください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/runway-cure-sole/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ランウェイキュアソールの詳細レビューを見る
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
              href="/runway-cure-sole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ランウェイキュアソールの口コミ・効果を徹底検証
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
              href="/articles/flat-feet/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                扁平足の方のインソール選び完全ガイド
              </p>
            </Link>
            <Link
              href="/compare/pitsole-vs-runway/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソール vs ランウェイキュアソール 徹底比較
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
