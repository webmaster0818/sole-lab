import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ピットソールのサイズ選び完全ガイド【失敗しない切り方も解説】｜ソールラボ",
  description:
    "ピットソール(Pitsole)のサイズ選び・切り方を徹底解説。XS〜XLの全サイズ一覧、靴別のフィッティング、正しいカット手順、サイズが合わない場合の交換方法まで。迷ったら大きめを選べば失敗しません。",
  alternates: {
    canonical: "https://sole-laboratory.com/pitsole/size/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソールのサイズ選び完全ガイド【失敗しない切り方も解説】",
  description:
    "ピットソール(Pitsole)のサイズ選び・切り方を徹底解説。XS〜XLの全サイズ一覧、靴別のフィッティング、正しいカット手順、サイズが合わない場合の交換方法まで。",
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
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ピットソールのサイズはどう選べばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "普段履いている靴のサイズを基準に、XS（21〜22.5cm）・S（23〜24.5cm）・M（25〜26cm）・L（26.5〜27.5cm）・XL（28〜29cm）の5サイズから選びます。迷った場合は大きめのサイズを選び、カットして調整するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールの切り方を教えてください",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピットソールの裏面にサイズごとのカットラインが印字されています。元のインソールを取り出して型紙として重ね、ボールペンで線を引いてからハサミでカットします。一度に大きく切らず、少しずつ調整するのがコツです。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールを切りすぎた場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "残念ながら切りすぎた場合は元に戻すことができません。靴の中でずれやすくなるため、両面テープやインソール用接着シートで固定する方法があります。大幅に切りすぎた場合は新しいピットソールへの買い替えをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールのサイズ交換はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイト購入の場合、未使用・未カット品に限り交換が可能です。商品到着後7日以内にカスタマーサポートへ連絡してください。楽天やAmazon経由の場合は各プラットフォームの返品ポリシーに従います。カット済み・使用済みは交換対象外となります。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールはパンプスにも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、パンプスにも使用できます。ただしパンプスは先端が細いため、つま先部分のカットを多めに行う必要があります。ヒールが5cm以上のパンプスでは足が前に滑りやすくなるため、サイズ感がタイトになる場合があります。普段のサイズまたは1サイズ下を選ぶケースもあります。",
      },
    },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "トップ",
      item: "https://sole-laboratory.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ピットソール",
      item: "https://sole-laboratory.com/pitsole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "サイズ選び",
      item: "https://sole-laboratory.com/pitsole/size/",
    },
  ],
};

const sizeChart = [
  {
    size: "XS",
    cm: "21〜22.5cm",
    target: "レディース（小さめ）",
    note: "小柄な女性向け",
  },
  {
    size: "S",
    cm: "23〜24.5cm",
    target: "レディース（標準）",
    note: "女性に最も人気のサイズ",
  },
  {
    size: "M",
    cm: "25〜26cm",
    target: "レディース（大きめ）/ メンズ（小さめ）",
    note: "男女兼用サイズ",
  },
  {
    size: "L",
    cm: "26.5〜27.5cm",
    target: "メンズ（標準）",
    note: "男性に最も人気のサイズ",
  },
  {
    size: "XL",
    cm: "28〜29cm",
    target: "メンズ（大きめ）",
    note: "足の大きい男性向け",
  },
];

const shoeTypeSizing = [
  {
    type: "スニーカー",
    advice: "普段通りのサイズでOK",
    detail:
      "最もフィットしやすい靴。インソールを外して入れ替えるだけで快適に使える。",
    sizeAdjust: "±0",
  },
  {
    type: "パンプス",
    advice: "同サイズ or 1つ下も検討",
    detail:
      "先端が細いため、つま先側のカットを多めに。ヒールの高さでサイズ感が変わる。",
    sizeAdjust: "±0〜-1",
  },
  {
    type: "ビジネスシューズ",
    advice: "普段通りのサイズ",
    detail:
      "革靴は幅が狭い場合が多い。甲が圧迫される場合は薄めに調整を。",
    sizeAdjust: "±0",
  },
  {
    type: "ブーツ",
    advice: "1つ上のサイズも検討",
    detail:
      "厚手の靴下を履くことが多いため、余裕のあるサイズを。ロングブーツは足首の収まりも確認。",
    sizeAdjust: "±0〜+1",
  },
];

export default function PitsoleSizePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-[#e8627c] transition-colors">
              トップ
            </Link>
            <span>/</span>
            <Link
              href="/pitsole/"
              className="hover:text-[#e8627c] transition-colors"
            >
              ピットソール
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">サイズ選び</span>
          </nav>

          <p className="text-sm text-[#e8627c] font-medium mb-2">
            サイズ選び完全ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソールのサイズ選び完全ガイド
            <br />
            <span className="text-[#e8627c]">
              【失敗しない切り方も解説】
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ピットソール（Pitsole）のサイズ選びで迷っていませんか？
            この記事では、全5サイズの一覧から靴別のフィッティング、
            正しいカット手順、サイズが合わない場合の交換方法まで、
            サイズに関する疑問をすべて解決します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <time dateTime="2026-04-15">2026年4月15日</time>
            <span>|</span>
            <span>ソールラボ編集部</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* 目次 */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-[#e8627c]">
            <li>
              <a href="#size-lineup" className="hover:underline">
                1. ピットソールのサイズ展開
              </a>
            </li>
            <li>
              <a href="#size-tips" className="hover:underline">
                2. サイズ選びで失敗しないための3つのポイント
              </a>
            </li>
            <li>
              <a href="#how-to-cut" className="hover:underline">
                3. ピットソールの正しい切り方【完全手順】
              </a>
            </li>
            <li>
              <a href="#fitting-guide" className="hover:underline">
                4. 靴別のフィッティングガイド
              </a>
            </li>
            <li>
              <a href="#exchange" className="hover:underline">
                5. サイズが合わない場合の交換・返品
              </a>
            </li>
            <li>
              <a href="#effect" className="hover:underline">
                6. サイズ選びが効果に与える影響
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:underline">
                8. まとめ
              </a>
            </li>
          </ol>
        </nav>

        {/* ==================== */}
        {/* H2: サイズ展開 */}
        {/* ==================== */}
        <section id="size-lineup">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            ピットソールのサイズ展開
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールは<strong>XS・S・M・L・XLの全5サイズ</strong>
            で展開されています。
            自分の足のサイズに合ったものを選び、必要に応じてカットして微調整する仕組みです。
            まずは全サイズの対応表を確認しましょう。
          </p>

          {/* H3: サイズ一覧 */}
          <h3
            className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#e8627c]"
          >
            全サイズ一覧（XS〜XL）
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-pink-50">
                  <th className="text-left p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    サイズ
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    対応cm
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    対象
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((item) => (
                  <tr
                    key={item.size}
                    className="border-b border-gray-200 hover:bg-[#fdf2f4] transition-colors"
                  >
                    <td className="p-3 font-bold text-[#e8627c] text-center">
                      {item.size}
                    </td>
                    <td className="p-3 text-center text-gray-900 font-medium">
                      {item.cm}
                    </td>
                    <td className="p-3 text-center text-gray-700">
                      {item.target}
                    </td>
                    <td className="p-3 text-center text-gray-500 text-xs">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#e8627c]">ポイント：</strong>
              各サイズには0.5cm刻みの対応範囲があります。
              たとえば足のサイズが24.5cmの方はSサイズ（23〜24.5cm）の上限ですが、
              靴によってはMサイズ（25〜26cm）の方がフィットする場合もあります。
            </p>
          </div>

          {/* H3: メンズ・レディース */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#e8627c]">
            メンズ・レディースの選び方
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            ピットソールは男女兼用の商品です。
            サイズ表記がXS〜XLと靴のcm表記と異なるため、
            以下のように覚えておくと便利です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-[#e8627c] mb-2 text-sm">
                レディース
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  21〜22.5cm → XS
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  23〜24.5cm → S（人気No.1）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  25〜26cm → M
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-[#e8627c] mb-2 text-sm">
                メンズ
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  25〜26cm → M
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  26.5〜27.5cm → L（人気No.1）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] mt-0.5 shrink-0">
                    ・
                  </span>
                  28〜29cm → XL
                </li>
              </ul>
            </div>
          </div>

          {/* H3: 迷ったら大きめ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#e8627c]">
            迷ったら大きめを選ぶべき理由
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            サイズ選びで最も重要なルールは
            <strong>「迷ったら大きい方を選ぶ」</strong>ことです。
            その理由は3つあります。
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                1. カットで小さくできる
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                ピットソールは裏面のカットラインに沿って簡単にカットできます。
                大きめを購入してカットすれば、ジャストサイズに仕上がります。
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                2. 小さいと取り返しがつかない
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                小さすぎるインソールは靴の中でずれてしまい、
                効果が半減します。切り足すことはできても、
                小さいものを大きくすることは不可能です。
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                3. 靴による差を吸収できる
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                同じ足サイズでも、靴のメーカーや種類によってインソールのサイズは異なります。
                大きめを選んでおけば、複数の靴に合わせて調整が可能です。
              </p>
            </div>
          </div>

          <div className="bg-[#e8627c] text-white rounded-xl p-5 mb-4">
            <p className="text-sm font-bold mb-1">
              サイズの境界にいる方へ
            </p>
            <p className="text-xs leading-relaxed opacity-90">
              たとえば足のサイズが24.5cmの方は、SサイズでもMサイズでも対応範囲内です。
              この場合は<strong>Mサイズ（25〜26cm）を選んでカット</strong>
              するのが安全。つま先部分を少しカットするだけで完璧にフィットします。
            </p>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: 失敗しない3つのポイント */}
        {/* ==================== */}
        <section id="size-tips">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            サイズ選びで失敗しないための3つのポイント
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            ピットソールのサイズ選びで失敗しないために、
            必ず押さえておきたい3つのポイントを解説します。
          </p>

          {/* ポイント1 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            ポイント1：普段履く靴のサイズで選ぶ
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            ピットソールのサイズは「足の実寸」ではなく、
            <strong>普段履いている靴のサイズ</strong>で選ぶのが基本です。
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            足の実寸は靴のサイズと一致しないことが多く、
            実寸を基準にすると小さすぎるインソールを選んでしまう可能性があります。
            いつも履いているスニーカーやパンプスのサイズ表記を確認し、
            そのサイズに合ったピットソールを選びましょう。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#c9a76c]">例：</strong>
              普段24.5cmのスニーカーを履いている方 →
              Sサイズ（23〜24.5cm）を選択。
              もし複数の靴で使い回したい場合は、最も大きいサイズの靴に合わせて選ぶのがおすすめです。
            </p>
          </div>

          {/* ポイント2 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            ポイント2：靴の種類で変わるサイズ感
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            靴の種類によって内部の形状が異なるため、
            同じ足サイズでもフィット感が変わります。
            以下の表を参考にしてください。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-pink-50">
                  <th className="text-left p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    靴の種類
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    サイズ調整
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    アドバイス
                  </th>
                  <th className="text-left p-3 font-bold text-gray-900 border-b-2 border-[#f3e0e4]">
                    詳細
                  </th>
                </tr>
              </thead>
              <tbody>
                {shoeTypeSizing.map((item) => (
                  <tr
                    key={item.type}
                    className="border-b border-gray-200 hover:bg-[#fdf2f4] transition-colors"
                  >
                    <td className="p-3 font-medium text-gray-900">
                      {item.type}
                    </td>
                    <td className="p-3 text-center font-bold text-[#e8627c]">
                      {item.sizeAdjust}
                    </td>
                    <td className="p-3 text-center text-gray-700 text-xs">
                      {item.advice}
                    </td>
                    <td className="p-3 text-gray-600 text-xs">
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ポイント3 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            ポイント3：足幅・甲の高さも考慮
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            足の長さだけでなく、<strong>足幅（ワイズ）や甲の高さ</strong>
            もサイズ選びに影響します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-gray-900 text-sm mb-2">
                足幅が広い方（3E以上）
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                幅広の足の場合、インソールが靴の中で窮屈になることがあります。
                サイドを少しカットするか、1つ上のサイズを選んで
                長さ方向をカットする方法が有効です。
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-gray-900 text-sm mb-2">
                甲が高い方
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                甲が高い方はインソールを入れることで靴の中がさらに
                窮屈になりやすいです。靴ひもの調整や、ゆとりのある靴での使用が
                おすすめです。サイズ自体は通常通りで問題ありません。
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#e8627c]">重要：</strong>
              ピットソールの厚みは約3〜5mm程度。
              元のインソールと入れ替えて使用するため、
              通常は靴の中のスペースが大きく変わることはありません。
              ただし元のインソールが薄い靴の場合は、
              わずかにフィット感がタイトになる可能性があります。
            </p>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: 正しい切り方 */}
        {/* ==================== */}
        <section id="how-to-cut">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            ピットソールの正しい切り方【完全手順】
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            ピットソールは大きめのサイズを購入し、
            自分の靴に合わせてカットするのが基本です。
            裏面にサイズごとのカットラインが印字されているため、
            特別な道具は不要。以下の手順で誰でも簡単にカットできます。
          </p>

          {/* 用意するもの */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            用意するもの
          </h3>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#34d399] font-bold shrink-0">
                  1.
                </span>
                <span>
                  <strong>よく切れるハサミ</strong> -
                  布用や万能ハサミがおすすめ。文具用の小さいハサミは切りにくい
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34d399] font-bold shrink-0">
                  2.
                </span>
                <span>
                  <strong>ボールペン</strong> -
                  カットラインを書き込む用。消えにくい油性が最適
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34d399] font-bold shrink-0">
                  3.
                </span>
                <span>
                  <strong>元のインソール</strong> -
                  靴から取り出して型紙として使用
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34d399] font-bold shrink-0">
                  4.
                </span>
                <span>
                  <strong>新聞紙やマット</strong> -
                  テーブルを傷つけないための下敷き（あると便利）
                </span>
              </li>
            </ul>
          </div>

          {/* 手順1 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            手順1：元のインソールを取り出す
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            まず、ピットソールを入れたい靴から元のインソール（中敷き）を
            取り出します。これを型紙として使用します。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#34d399]">TIPS：</strong>
              インソールが接着されていて取り外せない靴もあります。
              その場合は、靴の中にピットソールを直接入れてみて、
              はみ出す部分を確認してからカットしましょう。
              別の同サイズの靴のインソールを型紙に使う方法もあります。
            </p>
          </div>

          {/* 手順2 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            手順2：サイズラインを確認
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            ピットソールの裏面（底面）を見ると、
            <strong>サイズごとのカットライン</strong>
            が点線で印字されています。
            自分のサイズに合ったラインを確認してください。
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            たとえばMサイズ（25〜26cm）を購入した場合、
            裏面に25.0cm、25.5cm、26.0cmなどの
            ラインが描かれています。
            靴のサイズに合ったラインがカットの基準になります。
          </p>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#e8627c]">注意：</strong>
              カットラインはあくまで目安です。
              靴のメーカーによってインソールの形状が異なるため、
              必ず元のインソールと照らし合わせて確認してください。
            </p>
          </div>

          {/* 手順3 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            手順3：型を写す（元インソールに合わせる方法）
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            元のインソールをピットソールの上に重ねて、
            はみ出す部分にボールペンで線を引きます。
            この方法が最も正確にカットできます。
          </p>

          <div className="space-y-3 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Step A：</strong>
                ピットソールの表面を上にしてテーブルに置く
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Step B：</strong>
                元のインソールを重ねる。
                <strong>かかと部分を揃える</strong>のがポイント
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Step C：</strong>
                ピットソールがはみ出している部分（主につま先側）に
                ボールペンで線を引く
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Step D：</strong>
                左右の幅も確認し、はみ出す部分があれば同様にマーキング
              </p>
            </div>
          </div>

          <div className="bg-[#c9a76c] text-white rounded-xl p-5 mb-8">
            <p className="text-sm font-bold mb-1">
              プロのコツ
            </p>
            <p className="text-xs leading-relaxed opacity-90">
              カットラインを引くときは、元のインソールより
              <strong>1〜2mm内側</strong>に線を引くのがコツです。
              ピットソールの素材は弾力性があるため、
              ぴったり同じサイズだと靴の中でやや窮屈に感じることがあります。
              少し小さめにカットすることで、きれいに収まります。
            </p>
          </div>

          {/* 手順4 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            手順4：ハサミでカット
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            マーキングしたラインに沿ってハサミでカットします。
            以下の注意点を守りましょう。
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="bg-[#34d399] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </span>
              <span>
                <strong>一度に大きくカットしない。</strong>
                少しずつ、こまめに確認しながら切り進めましょう。
                切りすぎると元に戻せません。
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="bg-[#34d399] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </span>
              <span>
                <strong>曲線部分はハサミを細かく動かす。</strong>
                つま先のカーブは直線的に切ると形が崩れます。
                ハサミを少しずつ回転させながらカットします。
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="bg-[#34d399] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </span>
              <span>
                <strong>左右をセットでカット。</strong>
                片方だけカットしてしまうと左右差が出やすくなります。
                交互に少しずつカットして、バランスを保ちましょう。
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="bg-[#34d399] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                4
              </span>
              <span>
                <strong>かかと側はカットしない。</strong>
                ピットソールの特許構造はかかと付近に集中しています。
                かかと部分をカットすると効果が損なわれる可能性があります。
                調整はつま先側のみで行いましょう。
              </span>
            </li>
          </ul>

          {/* 手順5 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            手順5：靴に入れてフィット確認
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            カットしたピットソールを靴に入れて、以下のポイントを確認します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4 text-center">
              <p className="text-[#e8627c] font-bold text-2xl mb-2">
                1
              </p>
              <p className="font-bold text-gray-900 text-sm mb-1">
                フラットに収まるか
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                インソールが波打たず、靴底にフラットに収まっているか確認
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4 text-center">
              <p className="text-[#e8627c] font-bold text-2xl mb-2">
                2
              </p>
              <p className="font-bold text-gray-900 text-sm mb-1">
                端がめくれないか
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                サイドやつま先の端が靴壁に干渉してめくれていないか確認
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-lg p-4 text-center">
              <p className="text-[#e8627c] font-bold text-2xl mb-2">
                3
              </p>
              <p className="font-bold text-gray-900 text-sm mb-1">
                歩いて違和感がないか
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                実際に靴を履いて数歩あるき、ずれや突き上げ感がないか確認
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            フィットが不十分な場合は、問題のある部分をさらに少しだけカットして
            再度確認します。一度に大きく切らず、
            <strong>「少しカット → 確認」を繰り返す</strong>
            のが失敗しないコツです。
          </p>

          {/* 切りすぎた場合 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            切りすぎた場合の対処法
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            残念ながら、切りすぎてしまった場合は元に戻すことができません。
            ただし、以下の方法で応急処置が可能です。
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                両面テープで固定
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                インソールが小さくなってずれる場合は、
                裏面に両面テープを貼って靴底に固定します。
                ずれ防止にはかなり効果的です。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                別の靴で使用する
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                予定していた靴には合わなくなっても、
                より小さいサイズの靴にフィットする可能性があります。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 text-sm mb-1">
                買い替えを検討
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                大幅に切りすぎた場合は、効果が損なわれるため新しいピットソールの
                購入をおすすめします。
                <Link
                  href="/pitsole/price/"
                  className="text-[#e8627c] hover:underline"
                >
                  セット購入なら1足あたりの価格を抑えられます
                </Link>
                。
              </p>
            </div>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: 靴別フィッティング */}
        {/* ==================== */}
        <section id="fitting-guide">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            靴別のフィッティングガイド
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            ピットソールはさまざまな靴に使用できますが、
            靴の種類によってフィッティングのコツが異なります。
            ここでは代表的な4種類の靴について、
            それぞれのポイントを解説します。
          </p>

          {/* スニーカー */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            スニーカーに入れる場合
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            スニーカーはピットソールと最も相性が良い靴です。
            多くのスニーカーは元のインソールが取り外し可能なため、
            入れ替えるだけで使用できます。
          </p>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <p className="font-bold text-gray-900 text-sm mb-2">
              スニーカーのポイント
            </p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>・普段通りのサイズでOK。カットが不要なケースも多い</li>
              <li>
                ・ナイキやアディダスなど海外ブランドはインソールが大きめの傾向。
                カットラインを参考に微調整を
              </li>
              <li>
                ・ランニングシューズの場合、元のインソールにアーチサポートが
                ある場合はピットソールとの二重サポートに注意
              </li>
              <li>
                ・紐靴なら締め具合でフィット感の微調整が可能
              </li>
            </ul>
          </div>

          {/* パンプス */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            パンプスに入れる場合
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            パンプスはつま先が細い形状のため、
            カットの調整が特に重要になります。
          </p>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <p className="font-bold text-gray-900 text-sm mb-2">
              パンプスのポイント
            </p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>
                ・つま先部分のカットを多めに行う必要がある。先端の細いデザインに合わせて
                丁寧にカーブをカット
              </li>
              <li>
                ・ヒールが5cm以上の場合、足が前方に滑りやすくなるため
                サイズ感がタイトに感じることがある
              </li>
              <li>
                ・パンプスのインソールは薄いことが多く、
                ピットソールに替えるとやや厚みが増す。
                履き口がきつくなる場合は少し歩いて馴染ませる
              </li>
              <li>
                ・ポインテッドトゥの場合は特につま先を細めにカット
              </li>
            </ul>
          </div>

          {/* ビジネスシューズ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            ビジネスシューズに入れる場合
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            革靴やビジネスシューズは横幅が狭い傾向があるため、
            サイドのフィット感にも注意が必要です。
          </p>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <p className="font-bold text-gray-900 text-sm mb-2">
              ビジネスシューズのポイント
            </p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>
                ・サイズは普段通りでOK。ただしイタリア製など細身の革靴は
                サイド部分のカットが必要になることがある
              </li>
              <li>
                ・革靴は元のインソールが接着されていて取り外せない場合が多い。
                その場合は上から重ねて使用する
              </li>
              <li>
                ・重ねて使用する場合はフィット感がタイトになるため、
                0.5cmほど大きめの靴での使用がおすすめ
              </li>
              <li>
                ・甲の圧迫感が出る場合は靴紐を緩めるか、
                元のインソールが外せる靴での使用を検討
              </li>
            </ul>
          </div>

          {/* ブーツ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            ブーツに入れる場合
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            ブーツは靴の中に余裕があることが多く、
            ピットソールとの相性は比較的良好です。
          </p>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-4">
            <p className="font-bold text-gray-900 text-sm mb-2">
              ブーツのポイント
            </p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>
                ・厚手の靴下を履く前提でサイズを選ぶ。
                普段よりワンサイズ上のピットソールを選ぶのも一つの手
              </li>
              <li>
                ・ロングブーツはふくらはぎの圧迫感が変わることがある。
                インソールの厚み分だけ足の位置が高くなるため
              </li>
              <li>
                ・ブーツはインソールが取り外しやすい靴が多く、
                入れ替えがスムーズ
              </li>
              <li>
                ・UGGなどのムートンブーツはインソールが分厚いため、
                ピットソールに替えると足元がスッキリすることも
              </li>
            </ul>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: 交換・返品 */}
        {/* ==================== */}
        <section id="exchange">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            サイズが合わない場合の交換・返品
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            「買ったけどサイズが合わなかった」という場合の
            対処法をまとめました。購入先によって対応が異なるため、
            事前に確認しておきましょう。
          </p>

          {/* 公式サイト */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            公式サイトの交換ポリシー
          </h3>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-[#e8627c] text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">
                  条件
                </span>
                <p className="text-sm text-gray-700">
                  未使用・未カット品に限り、商品到着後7日以内に連絡で交換可能
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">
                  送料
                </span>
                <p className="text-sm text-gray-700">
                  サイズ交換の場合、返送料は購入者負担。
                  再発送料は公式側で負担されるケースが多い
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gray-500 text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">
                  手順
                </span>
                <p className="text-sm text-gray-700">
                  カスタマーサポートへメールまたは問い合わせフォームから連絡
                  → 指示に従って返送 → 新しいサイズを発送
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            公式サイト（BACCHUS ONLINE SHOP）での購入が
            最も交換がスムーズです。サイズに不安がある方は、
            公式サイトからの購入をおすすめします。
          </p>

          {/* 楽天・Amazon */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            楽天・Amazonで購入した場合
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-[#e8627c] mb-2 text-sm">
                楽天市場の場合
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                楽天の公式ショップ（BACCHUS ONLINE SHOP）で購入した場合は、
                ショップの返品ポリシーに従います。
                基本的に未使用・未カット品に限り交換対応。
                楽天の「あんしん返品」対象外の場合が多いため、
                ショップに直接問い合わせてください。
              </p>
            </div>
            <div className="bg-white border border-[#f3e0e4] rounded-xl p-5">
              <p className="font-bold text-[#e8627c] mb-2 text-sm">
                Amazonの場合
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Amazon経由の場合は、Amazonの返品ポリシーが適用されます。
                商品到着後30日以内であれば未使用品の返品・交換が可能です。
                ただし開封済みの場合は返金額が減額されるケースがあります。
                Amazonアカウントの注文履歴から手続きできます。
              </p>
            </div>
          </div>

          {/* 交換時の注意点 */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#c9a76c]">
            交換時の注意点
          </h3>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-6">
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  1.
                </span>
                <span>
                  <strong>カット済み・使用済みは交換不可。</strong>
                  一度でもカットしたり使用した場合は、
                  どの販売チャネルでも交換の対象外となります。
                  サイズに不安がある場合は、
                  試着してからカットするようにしましょう。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  2.
                </span>
                <span>
                  <strong>パッケージは捨てないで。</strong>
                  外箱やパッケージが必要な場合があります。
                  サイズを確認するまでは捨てずに保管してください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  3.
                </span>
                <span>
                  <strong>セット購入の部分交換は要確認。</strong>
                  3足セットや6足セットの場合、
                  1足だけサイズ交換できるかはショップによって対応が異なります。
                  事前にカスタマーサポートに確認しましょう。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  4.
                </span>
                <span>
                  <strong>メルカリ等での購入は交換不可。</strong>
                  フリマアプリや非正規ショップでの購入品は、
                  公式のサイズ交換対象外です。
                  正規販売店での購入が安心です。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: 効果への影響 */}
        {/* ==================== */}
        <section id="effect">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            サイズ選びが効果に与える影響
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            ピットソールは特許取得の足裏アーチサポート構造により、
            姿勢改善やダイエットサポート効果が期待できます。
            しかし、サイズが合っていないと
            この効果が十分に発揮されません。
            適切なサイズ選びが効果を最大化するカギです。
          </p>

          {/* 大きすぎ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#e8627c]">
            サイズが大きすぎると起こる問題
          </h3>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  靴の中でインソールが波打ち、歩行時にずれやすくなる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  アーチサポートの位置がずれて、本来の効果が半減する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  端がめくれて靴ずれの原因になることがある
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  見た目にも靴の中がゴワつき、履き心地が悪化する
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              ※大きすぎる場合はカットで調整可能なため、
              致命的な問題にはなりにくいです。
            </p>
          </div>

          {/* 小さすぎ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#e8627c]">
            サイズが小さすぎると起こる問題
          </h3>

          <div className="bg-white border border-[#f3e0e4] rounded-xl p-5 mb-8">
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  かかとや足裏の一部しかインソールに乗らず、
                  サポート機能が不十分になる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  インソールの端が靴の中で動き回り、
                  位置が安定しない
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  特許構造のアーチサポートが正しい位置に来ないため、
                  姿勢改善効果が期待できない
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] shrink-0">・</span>
                <span>
                  足の一部がインソールからはみ出し、
                  段差で不快感が生じる
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              ※小さすぎる場合はカットで大きくすることができないため、
              大きすぎるよりも深刻です。
            </p>
          </div>

          {/* ぴったりサイズ */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 pl-3 border-l-4 border-[#34d399]">
            ぴったりサイズで最大効果を引き出す
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            ピットソールのサイズが靴にぴったり合っていると、
            以下のような効果が最大限に発揮されます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="font-bold text-gray-900 text-sm mb-2">
                骨格バランスの最適化
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                特許取得の3点アーチサポートが正しい位置に来ることで、
                足裏から骨格のバランスを整えます
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="font-bold text-gray-900 text-sm mb-2">
                歩行姿勢の改善
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                かかとの安定感が増し、正しい歩行フォームを
                自然にサポート。長時間歩いても疲れにくくなります
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="font-bold text-gray-900 text-sm mb-2">
                ダイエットサポート
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                正しい姿勢で歩くことで筋肉の使い方が変わり、
                日常生活でのカロリー消費アップが期待できます
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#e8627c]">まとめ：</strong>
              サイズ選びはピットソールの効果を左右する最も重要なステップです。
              「だいたい合っていればいい」ではなく、
              <strong>靴ごとにしっかりフィッティングする</strong>
              ことで、ピットソール本来の力を引き出せます。
              複数の靴で使用したい場合はセット購入がおすすめです。
            </p>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: FAQ */}
        {/* ==================== */}
        <section id="faq">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-3">
            <details className="group bg-white border border-[#f3e0e4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf2f4] transition-colors">
                <span className="font-bold text-gray-900 text-sm pr-4">
                  Q. ピットソールのサイズはどう選べばいいですか？
                </span>
                <span className="text-[#e8627c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  普段履いている靴のサイズを基準に、XS（21〜22.5cm）・S（23〜24.5cm）・
                  M（25〜26cm）・L（26.5〜27.5cm）・XL（28〜29cm）の5サイズから選びます。
                  迷った場合は大きめのサイズを選び、カットして調整するのがおすすめです。
                  靴の種類によってサイズ感が変わるため、
                  複数の靴で使用したい場合はそれぞれに合わせたサイズが理想です。
                </p>
              </div>
            </details>

            <details className="group bg-white border border-[#f3e0e4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf2f4] transition-colors">
                <span className="font-bold text-gray-900 text-sm pr-4">
                  Q. ピットソールの切り方を教えてください
                </span>
                <span className="text-[#e8627c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  ピットソールの裏面にサイズごとのカットラインが印字されています。
                  元のインソールを取り出してピットソールに重ね、かかとを揃えて
                  はみ出す部分にボールペンでマーキングします。
                  マーキングに沿ってハサミでカットし、靴に入れてフィットを確認。
                  少しずつカットして調整するのが失敗しないコツです。
                </p>
              </div>
            </details>

            <details className="group bg-white border border-[#f3e0e4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf2f4] transition-colors">
                <span className="font-bold text-gray-900 text-sm pr-4">
                  Q. 切りすぎた場合はどうすればいいですか？
                </span>
                <span className="text-[#e8627c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  残念ながら切りすぎた場合は元に戻すことができません。
                  応急処置として、裏面に両面テープを貼って固定する方法があります。
                  また、別の小さいサイズの靴にフィットする可能性もあるので試してみてください。
                  大幅に切りすぎた場合は効果が損なわれるため、新しいピットソールの購入をおすすめします。
                </p>
              </div>
            </details>

            <details className="group bg-white border border-[#f3e0e4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf2f4] transition-colors">
                <span className="font-bold text-gray-900 text-sm pr-4">
                  Q. サイズ交換はできますか？
                </span>
                <span className="text-[#e8627c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  公式サイト購入の場合、未使用・未カット品に限り商品到着後7日以内に
                  カスタマーサポートへ連絡すれば交換可能です。
                  楽天やAmazon経由の場合は各プラットフォームの返品ポリシーに従います。
                  カット済み・使用済みの場合はどの販売チャネルでも交換対象外となるため、
                  カットする前にサイズを確認しましょう。
                </p>
              </div>
            </details>

            <details className="group bg-white border border-[#f3e0e4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf2f4] transition-colors">
                <span className="font-bold text-gray-900 text-sm pr-4">
                  Q. パンプスにも使えますか？サイズはどう選びますか？
                </span>
                <span className="text-[#e8627c] text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  はい、パンプスにも使用できます。ただしパンプスは先端が細いため、
                  つま先部分のカットを多めに行う必要があります。
                  ヒールが5cm以上のパンプスでは足が前に滑りやすくなり、
                  サイズ感がタイトに感じる場合があります。
                  普段のサイズまたは同サイズのピットソールを選び、
                  元のインソールに合わせて丁寧にカットしてください。
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* ==================== */}
        {/* H2: まとめ */}
        {/* ==================== */}
        <section id="summary">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#e8627c]">
            まとめ
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールのサイズ選びと切り方について解説しました。
            最後に重要なポイントをおさらいします。
          </p>

          <div className="bg-pink-50 border border-[#f3e0e4] rounded-xl p-6 mb-6">
            <p className="font-bold text-[#e8627c] mb-3 text-sm">
              サイズ選びのポイントまとめ
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  1.
                </span>
                <span>
                  全5サイズ展開（XS〜XL）。普段の靴サイズで選ぶ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  2.
                </span>
                <span>
                  迷ったら大きめを選ぶ。カットで小さくできるが、
                  小さいものを大きくはできない
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  3.
                </span>
                <span>
                  靴の種類によってフィット感が異なるため、
                  靴別に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  4.
                </span>
                <span>
                  カットは少しずつ。「少しカット → 確認」を繰り返す
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e8627c] font-bold shrink-0">
                  5.
                </span>
                <span>
                  ぴったりサイズで効果が最大化。サイズが合わないと
                  特許構造の恩恵を受けられない
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            サイズ選びはピットソールの効果を最大限に引き出すための
            最初の重要なステップです。この記事を参考に、
            あなたにぴったりのサイズを見つけてください。
            複数の靴で使い回したい方は、セット購入がお得です。
          </p>

          <div className="bg-[#e8627c] text-white rounded-xl p-6 text-center">
            <p className="font-bold text-lg mb-2">
              ピットソールの最安値をチェック
            </p>
            <p className="text-sm opacity-90 mb-4">
              3足セットなら1足無料プレゼント。実質1足4,934円で始められます。
            </p>
            <Link
              href="/pitsole/price/"
              className="inline-block bg-white text-[#e8627c] font-bold text-sm px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
            >
              価格比較ページを見る
            </Link>
          </div>
        </section>

        {/* ==================== */}
        {/* 関連記事 */}
        {/* ==================== */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            関連記事
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/pitsole/"
              className="block bg-white border border-[#f3e0e4] rounded-xl p-5 hover:bg-[#fdf2f4] transition-colors group"
            >
              <p className="text-xs text-[#e8627c] font-medium mb-1">
                レビュー
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#e8627c] transition-colors">
                ピットソールの口コミ・評判を徹底検証
              </p>
              <p className="text-xs text-gray-500 mt-1">
                実際の使用者の声から効果の真相に迫ります
              </p>
            </Link>

            <Link
              href="/pitsole/price/"
              className="block bg-white border border-[#f3e0e4] rounded-xl p-5 hover:bg-[#fdf2f4] transition-colors group"
            >
              <p className="text-xs text-[#e8627c] font-medium mb-1">
                価格比較
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#e8627c] transition-colors">
                ピットソールの最安値・販売店比較
              </p>
              <p className="text-xs text-gray-500 mt-1">
                公式・楽天・Amazonの価格差を徹底比較
              </p>
            </Link>

            <Link
              href="/articles/insole-care/"
              className="block bg-white border border-[#f3e0e4] rounded-xl p-5 hover:bg-[#fdf2f4] transition-colors group"
            >
              <p className="text-xs text-[#c9a76c] font-medium mb-1">
                お手入れ
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#e8627c] transition-colors">
                インソールのお手入れ・洗い方ガイド
              </p>
              <p className="text-xs text-gray-500 mt-1">
                長持ちさせるための正しいケア方法を解説
              </p>
            </Link>

            <Link
              href="/ranking/"
              className="block bg-white border border-[#f3e0e4] rounded-xl p-5 hover:bg-[#fdf2f4] transition-colors group"
            >
              <p className="text-xs text-[#c9a76c] font-medium mb-1">
                ランキング
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#e8627c] transition-colors">
                ダイエットインソールおすすめランキング
              </p>
              <p className="text-xs text-gray-500 mt-1">
                人気インソールを比較してランキング形式で紹介
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
