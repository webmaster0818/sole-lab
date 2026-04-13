import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ピットソール vs ランウェイキュアソール徹底比較！どっちがおすすめ？",
  description:
    "ピットソールとランウェイキュアソールを料金・サイズ・特許技術・口コミで徹底比較。世界特許のBMZ社ピットソールと3点アーチのランウェイキュアソール、あなたに合うのはどっち？",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソール vs ランウェイキュアソール徹底比較！どっちがおすすめ？",
  description:
    "ピットソールとランウェイキュアソールを料金・サイズ・技術・口コミの4軸で徹底比較。それぞれの強みと弱みを正直に解説します。",
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
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ピットソールとランウェイキュアソールの一番の違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最大の違いは技術基盤です。ピットソールはBMZ社の世界特許技術（立方骨サポート）を採用し、骨格から姿勢を矯正するアプローチ。ランウェイキュアソールは3点アーチサポートで足裏全体のバランスを整えるアプローチです。",
      },
    },
    {
      "@type": "Question",
      name: "男性が使うならどちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "男性にはピットソール一択です。ランウェイキュアソールはM/Lサイズ（22.5〜25cm）の女性向け展開のみで、男性サイズに対応していません。ピットソールはXS〜L（21〜27.5cm）の男女兼用です。",
      },
    },
    {
      "@type": "Question",
      name: "コスパが良いのはどちらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "単品購入ではランウェイキュアソールがやや手頃です。ただしピットソールも公式サイトのまとめ買い（3足セット・5足セット）を利用すれば1足あたりの単価を大幅に抑えられます。長期利用を考えるならまとめ買い割引の大きいピットソールがコスパ面で有利になるケースもあります。",
      },
    },
    {
      "@type": "Question",
      name: "両方とも普段のスニーカーに入れられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、どちらもお手持ちの靴に入れて使用できます。ピットソールはスニーカー・ビジネスシューズ・ウォーキングシューズに幅広く対応。ランウェイキュアソールは薄型設計で、パンプスにも比較的入れやすい点が特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "効果を実感するまでの期間に違いはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも個人差がありますが、姿勢の変化は1〜2週間、体型への実感は2〜3ヶ月が目安です。いずれも即効性を期待するものではなく、日常的に継続使用することが大切です。食事管理や適度な運動との併用で効果を実感しやすくなります。",
      },
    },
  ],
};

const faqs = [
  {
    question: "ピットソールとランウェイキュアソールの一番の違いは？",
    answer:
      "最大の違いは技術基盤です。ピットソールはBMZ社の世界特許技術（立方骨サポート）を採用し、骨格から姿勢を矯正するアプローチ。ランウェイキュアソールは3点アーチサポートで足裏全体のバランスを整えるアプローチです。",
  },
  {
    question: "男性が使うならどちらがおすすめですか？",
    answer:
      "男性にはピットソール一択です。ランウェイキュアソールはM/Lサイズ（22.5〜25cm）の女性向け展開のみで、男性サイズに対応していません。ピットソールはXS〜L（21〜27.5cm）の男女兼用です。",
  },
  {
    question: "コスパが良いのはどちらですか？",
    answer:
      "単品購入ではランウェイキュアソールがやや手頃です。ただしピットソールも公式サイトのまとめ買い（3足セット・5足セット）を利用すれば1足あたりの単価を大幅に抑えられます。長期利用を考えるならまとめ買い割引の大きいピットソールがコスパ面で有利になるケースもあります。",
  },
  {
    question: "両方とも普段のスニーカーに入れられますか？",
    answer:
      "はい、どちらもお手持ちの靴に入れて使用できます。ピットソールはスニーカー・ビジネスシューズ・ウォーキングシューズに幅広く対応。ランウェイキュアソールは薄型設計で、パンプスにも比較的入れやすい点が特徴です。",
  },
  {
    question: "効果を実感するまでの期間に違いはありますか？",
    answer:
      "どちらも個人差がありますが、姿勢の変化は1〜2週間、体型への実感は2〜3ヶ月が目安です。いずれも即効性を期待するものではなく、日常的に継続使用することが大切です。食事管理や適度な運動との併用で効果を実感しやすくなります。",
  },
];

export default function PitsoleVsRunwayPage() {
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#0ea5e9] font-medium mb-2">
            比較記事
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソール vs ランウェイキュアソール
            <br />
            <span className="text-[#0ea5e9]">徹底比較</span>！どっちがおすすめ？
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            世界特許を持つBMZ社の「ピットソール」と、3点アーチサポートの「ランウェイキュアソール」。
            どちらもダイエットインソールとして人気ですが、料金・サイズ・技術・口コミの観点から比較すると明確な違いがあります。
            この記事では両商品を徹底比較し、あなたにぴったりなのはどちらかを解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              2商品を徹底比較
            </span>
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              料金・技術・口コミ
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 比較結果サマリー */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            比較結果サマリー（比較表）
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            まずは両商品の主要スペックを一覧で確認しましょう。それぞれの強みが一目でわかります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700 w-1/4">
                    比較項目
                  </th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-[#0ea5e9] w-[37.5%]">
                    ピットソール
                  </th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-[#8b5cf6] w-[37.5%]">
                    ランウェイキュアソール
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">単品価格</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">6,578円（税込）</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">セット割引あり</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">サイズ展開</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">XS/S/M/L（21〜27.5cm）</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">M/L（22.5〜25cm）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">対象</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">男女兼用</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">女性向け</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">特許・技術</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">世界特許（BMZ社）</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">3点アーチサポート</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">販売元</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">BMZ社（BACCHUS）</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">FLOReショップ</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">販売実績</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">累計200万足・楽天1位</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">雑誌掲載あり</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">口コミ評価</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">ダイエットカフェ 2.7/5</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">雑誌・SNSで話題</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 card bg-sky-50 border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#0ea5e9]">ざっくりまとめると：</span>
              ピットソールは世界特許の技術力・サイズ展開の広さ・販売実績で優位。ランウェイキュアソールはセット割引と薄型設計で、女性がパンプスなどに使いやすい点が強みです。
            </p>
          </div>
        </div>
      </section>

      {/* 料金・コスパ比較 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            料金・コスパ比較
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ダイエットインソールは数ヶ月単位で継続するものだからこそ、料金とコスパは重要なポイントです。両商品の料金体系を詳しく見てみましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#0ea5e9]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ピットソールの料金</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>単品購入</span>
                  <span className="font-semibold text-gray-900">6,578円</span>
                </li>
                <li className="flex justify-between">
                  <span>3足セット</span>
                  <span className="font-semibold text-gray-900">1足あたり約4,000円台</span>
                </li>
                <li className="flex justify-between">
                  <span>5足セット</span>
                  <span className="font-semibold text-gray-900">1足あたり約3,000円台</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                ※公式サイトのまとめ買いで大幅割引。楽天・Amazonでも購入可能。
              </p>
            </div>
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#8b5cf6]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ランウェイキュアソールの料金</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>セット割引</span>
                  <span className="font-semibold text-gray-900">あり</span>
                </li>
                <li className="flex justify-between">
                  <span>販売元</span>
                  <span className="font-semibold text-gray-900">FLOReショップ</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                ※セット割引を活用することでお得に購入可能。公式ショップでの購入推奨。
              </p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-base font-bold text-gray-900 mb-3">コスパの判定</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ピットソールは単品6,578円と一見高めですが、まとめ買いセットを利用すれば1足あたりの単価を大幅に下げられます。家族で使いたい場合や、靴ごとに入れ替えたい場合はまとめ買いが断然お得です。
              ランウェイキュアソールもセット割引が用意されており、単品よりお得に購入できます。
              どちらもインソールの耐久目安は3〜6ヶ月。月額換算で1,000〜2,000円程度と考えれば、ジム通いなどと比較してコスパは良好です。
              長期的に継続利用するなら、まとめ買い割引が充実しているピットソールがコスパ面では有利になる場合が多いでしょう。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ・対応力比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ・対応力比較
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            インソールはサイズが合わなければ意味がありません。自分の足に合うかどうかは購入前に必ず確認しておきましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#0ea5e9]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ピットソールのサイズ展開</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">XS</span>
                  <span className="text-gray-600">21〜22.5cm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">S</span>
                  <span className="text-gray-600">23〜24.5cm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">M</span>
                  <span className="text-gray-600">25〜26cm</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">L</span>
                  <span className="text-gray-600">26.5〜27.5cm</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">4サイズ展開・男女兼用</p>
            </div>
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#8b5cf6]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ランウェイキュアソールのサイズ展開</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">M</span>
                  <span className="text-gray-600">22.5〜23.5cm</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">L</span>
                  <span className="text-gray-600">24〜25cm</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">2サイズ展開・女性向け</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-base font-bold text-gray-900 mb-3">サイズ対応力の判定</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              サイズ展開ではピットソールが圧倒的に有利です。XS〜Lの4サイズで21〜27.5cmをカバーし、男女兼用で使えます。
              足の小さい女性から標準的な男性サイズまで幅広く対応しているため、「自分のサイズがない」という心配がほとんどありません。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              ランウェイキュアソールはM/Lの2サイズ（22.5〜25cm）で、女性の標準サイズに特化しています。
              足のサイズが21cm台の小さめの方や、25cm以上の方、そして男性は対象外となります。
              ただし、女性向けに特化している分、パンプスなど女性の靴に合わせやすい薄型設計になっている点はメリットです。
            </p>
          </div>
        </div>
      </section>

      {/* 技術・特許比較 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            技術・特許比較
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ダイエットインソールの効果を左右するのは、足裏をどのようにサポートするかという技術です。両商品のアプローチの違いを見てみましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#0ea5e9]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ピットソールの技術</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                  <span><span className="font-semibold text-gray-900">世界特許取得</span>（BMZ社の立方骨サポート技術）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                  <span>足の横アーチと縦アーチを同時にサポート</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                  <span>骨格を正しいアライメントに導く設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                  <span>体幹を安定させ、効率的な歩行を促進</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#8b5cf6]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ランウェイキュアソールの技術</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span><span className="font-semibold text-gray-900">3点アーチサポート</span>構造</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>足裏の3つのアーチをバランスよくサポート</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>美姿勢をサポートする設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>薄型設計で靴を選ばない</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 className="text-base font-bold text-gray-900 mb-3">技術力の判定</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              技術面ではピットソールに明確なアドバンテージがあります。BMZ社が取得した世界特許は、足裏の立方骨（キュボイド）を支えるという独自のアプローチで、国際的にその技術が認められたものです。
              累計200万足という販売実績と楽天ランキング1位の獲得は、この特許技術の裏付けと言えるでしょう。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              ランウェイキュアソールの3点アーチサポートも理にかなったアプローチです。足裏には内側縦アーチ・外側縦アーチ・横アーチの3つのアーチがあり、これらをバランスよく支えることで正しい重心移動を促します。
              特許こそ取得していませんが、雑誌にも掲載されるなど一定の評価を受けています。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              客観的な技術の裏付け（特許）を重視するならピットソール、シンプルで実用的なアーチサポートを求めるならランウェイキュアソールが適しています。
            </p>
          </div>
        </div>
      </section>

      {/* 口コミ・評判比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            口コミ・評判比較
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            実際に使った人の声は商品選びの重要な判断材料です。両商品の口コミ傾向をまとめました。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#0ea5e9]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ピットソールの口コミ傾向</h3>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">良い口コミ</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>姿勢が改善されて疲れにくくなった</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>腰痛が軽減された</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>歩き方が変わり、普段使わない筋肉に効く</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">悪い口コミ</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>体重変化は感じられなかった</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>最初の数日は足が痛い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>単品価格が高い</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  ダイエットカフェ評価：<span className="font-semibold text-gray-700">2.7/5</span>（ダイエット効果に対する厳しめの評価基準）
                </p>
              </div>
            </div>
            <div className="card">
              <div className="h-1 rounded-full mb-4 bg-[#8b5cf6]" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">ランウェイキュアソールの口コミ傾向</h3>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">良い口コミ</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>薄型でパンプスにも入れやすい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>歩くときの姿勢が自然と良くなる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">+</span>
                    <span>デザインがおしゃれで気分が上がる</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">悪い口コミ</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>サイズ展開が少ない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>口コミ数が少なく判断しづらい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span>特許などの客観的な裏付けが弱い</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  雑誌掲載実績あり。SNSでの口コミが中心。
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-base font-bold text-gray-900 mb-3">口コミの判定</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              口コミの量と信頼性ではピットソールが上回ります。累計200万足の販売実績があるため、楽天・Amazon・ダイエットカフェなど複数のプラットフォームに豊富な口コミが蓄積されています。
              ダイエットカフェの評価が2.7/5と低めに見えますが、これはダイエット効果に特化した厳しい評価基準のため。
              姿勢改善や腰痛軽減については高評価の口コミが多い点に注目すべきです。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              ランウェイキュアソールは雑誌掲載やSNSでの評判が中心で、ピットソールほどの口コミ数はありません。
              ただし、薄型で靴を選ばないという使い勝手の良さについては好意的な声が多く、特に女性からの支持を集めています。
            </p>
          </div>
        </div>
      </section>

      {/* こんな人はピットソール */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            こんな人はピットソール
          </h2>
          <div className="card">
            <ul className="space-y-4">
              {[
                {
                  title: "特許技術の裏付けを重視する方",
                  desc: "BMZ社の世界特許技術は、足の骨格を科学的にサポートする構造が国際的に認められたもの。「なんとなく良さそう」ではなく、技術的な根拠のある商品を選びたい方に最適です。",
                },
                {
                  title: "男性や足の大きい方",
                  desc: "XS〜L（21〜27.5cm）の4サイズ展開で男女兼用。ランウェイキュアソールでは対応できない25cm以上の方は、ピットソール一択です。",
                },
                {
                  title: "口コミや実績を確認してから買いたい方",
                  desc: "累計200万足の販売実績、楽天ランキング1位獲得。楽天・Amazon・ダイエットカフェに豊富な口コミがあるため、購入前に十分な情報収集が可能です。",
                },
                {
                  title: "家族やカップルで使いたい方",
                  desc: "男女兼用・幅広いサイズ展開のため、家族で共有可能。まとめ買いセットを活用すれば1足あたりのコストも抑えられます。",
                },
                {
                  title: "腰痛や姿勢の悩みがある方",
                  desc: "骨格を正しいアライメントに導く設計のため、ダイエット目的だけでなく姿勢改善・腰痛軽減を実感している口コミが多数あります。",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0 font-bold">&#10003;</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link href="/pitsole/" className="btn-cta text-sm inline-block">
                ピットソールの詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* こんな人はランウェイキュアソール */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            こんな人はランウェイキュアソール
          </h2>
          <div className="card">
            <ul className="space-y-4">
              {[
                {
                  title: "パンプスやヒールにも使いたい女性",
                  desc: "薄型設計が最大の特徴。パンプスやローヒールなど、靴内のスペースが限られる靴でも窮屈になりにくい設計です。通勤靴にインソールを入れたい方に向いています。",
                },
                {
                  title: "足のサイズが22.5〜25cmの女性",
                  desc: "M/Lの2サイズ展開は女性の標準サイズをカバー。女性向けに特化しているため、フィット感に定評があります。",
                },
                {
                  title: "雑誌やSNSで話題の商品を試したい方",
                  desc: "各種メディアに掲載された実績があり、トレンドに敏感な女性を中心に注目を集めています。",
                },
                {
                  title: "見た目やデザインにもこだわりたい方",
                  desc: "FLOReショップが手がける商品だけに、見た目のデザイン性にも配慮されています。「インソールもおしゃれなものが良い」という方に。",
                },
                {
                  title: "セット割引でお得に始めたい方",
                  desc: "セット割引が用意されているため、まずはお得にスタートしたい方にとって手が出しやすい商品です。",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0 font-bold">&#10003;</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link href="/runway-cure-sole/" className="btn-outline text-sm inline-block">
                ランウェイキュアソールの詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            結論：どっちを選ぶべき？
          </h2>
          <div className="card mb-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              総合的に見ると、<span className="font-bold text-[#0ea5e9]">多くの方にはピットソールがおすすめ</span>です。
              世界特許の技術力、XS〜Lの幅広いサイズ展開、累計200万足の販売実績、楽天ランキング1位という圧倒的な実績は、初めてのダイエットインソール選びにおいて大きな安心材料になります。
              男女兼用でサイズの心配が少なく、口コミも豊富なため、購入前に十分な情報を集めた上で判断できる点も強みです。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              一方、<span className="font-bold text-[#8b5cf6]">パンプスに入れたい女性にはランウェイキュアソールも有力な選択肢</span>です。
              薄型設計で靴を選ばない使いやすさは、通勤時にパンプスを履く女性にとって大きなメリット。
              22.5〜25cmのサイズに該当する女性で、日常の靴にさりげなく入れたいなら検討の価値があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card text-center">
              <p className="text-xs text-gray-500 mb-1">迷ったらこちら</p>
              <p className="text-lg font-bold text-[#0ea5e9] mb-2">ピットソール</p>
              <p className="text-xs text-gray-500 mb-4">技術力・サイズ展開・実績で選ぶなら</p>
              <Link href="/pitsole/" className="btn-cta text-sm inline-block w-full">
                ピットソールの詳細を見る
              </Link>
            </div>
            <div className="card text-center">
              <p className="text-xs text-gray-500 mb-1">パンプス派の女性に</p>
              <p className="text-lg font-bold text-[#8b5cf6] mb-2">ランウェイキュアソール</p>
              <p className="text-xs text-gray-500 mb-4">薄型設計・女性特化で選ぶなら</p>
              <Link href="/runway-cure-sole/" className="btn-outline text-sm inline-block w-full">
                ランウェイキュアソールの詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-gray-200 rounded-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            他の商品も比較してみませんか？
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            ソールラボでは、ピットソール・ランウェイキュアソール・スリムアップインソールの3商品を徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta text-base md:text-lg">
            おすすめランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
