import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ピットソールの口コミ・効果を徹底検証【累計200万足の実力】",
  description:
    "ピットソール(Pitsole)の口コミ・評判を徹底調査。悪い口コミ「痩せない」の真相、効果の仕組み、最安値情報、偽物の見分け方まで。ダイエットカフェ評価2.7/5の実態を正直にレビュー。",
  openGraph: {
    title: "ピットソールの口コミ・効果を徹底検証【累計200万足の実力】｜ソールラボ",
    description: "ピットソール(Pitsole)の口コミ・評判を徹底調査。悪い口コミ「痩せない」の真相から最安値情報まで。",
    url: "https://sole-laboratory.com/pitsole/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/pitsole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソールの口コミ・効果を徹底検証【累計200万足の実力】",
  description:
    "ピットソール(Pitsole)の口コミ・評判を徹底調査。悪い口コミ・良い口コミの両面から効果を検証し、最安値情報や偽物の見分け方まで解説。",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-08",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ピットソールは本当に痩せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピットソール単体で劇的に体重が落ちることは期待できません。足裏アーチを補整し正しい姿勢での歩行を促すことで、普段使われにくい筋肉を活性化させる設計です。食事管理や適度な運動と併用し、2〜3ヶ月以上継続することで変化を実感する方が多いです。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールの偽物を見分ける方法は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトまたは正規販売ルート（公式楽天・Amazon店舗）で購入するのが最も確実です。フリマアプリや非正規ショップでは偽物・使用済み品のリスクがあります。正規品にはBACCHUSのロゴと製品番号が記載されています。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールのサイズが合わない場合は交換できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトで購入した場合、未使用・未開封品に限りサイズ交換が可能です。到着後7日以内に連絡する必要があります。まとめ買いセットの場合は1足を試してからサイズ変更の相談ができます。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールはどんな靴に使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スニーカー、ウォーキングシューズ、ビジネスシューズなど、インソールが取り外せるタイプの靴であれば使用可能です。パンプスやヒールは靴内の余裕が少ないため、窮屈に感じる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールの世界特許とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMZ社が取得した足裏の立方骨（キュボイド）を支える特許技術です。足の横アーチと縦アーチを同時にサポートすることで、骨格を正しいアライメントに導き、体幹を安定させる構造が国際特許として認められています。",
      },
    },
  ],
};

const badReviews = [
  {
    title: "体重は変わらなかった",
    text: "3ヶ月毎日使いましたが、体重の変化はほぼありませんでした。姿勢が良くなった気はしますが、ダイエット目的だと期待しすぎないほうがいいです。",
    source: "ダイエットカフェ",
    age: "30代女性",
  },
  {
    title: "足が痛くなった",
    text: "最初の1週間は土踏まずが痛くて辛かったです。慣れるまで短時間から始めればよかったと後悔しています。",
    source: "楽天レビュー",
    age: "40代女性",
  },
  {
    title: "値段が高い",
    text: "単品で6,000円以上するのは中敷きとしてはかなり高額。効果が保証されているわけではないので、コスパが気になります。",
    source: "Amazon",
    age: "20代女性",
  },
];

const goodReviews = [
  {
    title: "姿勢が良くなって疲れにくい",
    text: "立ち仕事ですが、ピットソールを入れてから夕方の腰の痛みが軽減しました。体重は大きく変わっていませんが、姿勢が改善された実感があります。",
    source: "楽天レビュー",
    age: "30代女性",
  },
  {
    title: "歩き方が変わった",
    text: "足裏全体を使って歩けるようになり、ふくらはぎの筋肉痛が出ました。普段使えていない筋肉が動いている感覚があります。",
    source: "公式サイト",
    age: "40代女性",
  },
  {
    title: "腰痛が改善された",
    text: "ダイエット目的で購入しましたが、予想外に腰痛が楽になりました。骨盤のサポートが効いているのかもしれません。半年継続中です。",
    source: "ダイエットカフェ",
    age: "50代男性",
  },
  {
    title: "スニーカーにぴったり",
    text: "普段のスニーカーに入れるだけなので続けやすい。ジムに行く時間がない私にはちょうどいいです。ウォーキングの質が上がった気がします。",
    source: "楽天レビュー",
    age: "30代女性",
  },
];

const sizes = [
  { label: "XS", range: "21〜22.5cm", note: "小さめの女性向け" },
  { label: "S", range: "23〜24.5cm", note: "標準的な女性サイズ" },
  { label: "M", range: "25〜26cm", note: "大きめ女性・小さめ男性" },
  { label: "L", range: "26.5〜27.5cm", note: "標準的な男性サイズ" },
];

const faqs = [
  {
    question: "ピットソールは本当に痩せますか？",
    answer:
      "ピットソール単体で劇的に体重が落ちることは期待できません。足裏アーチを補整し正しい姿勢での歩行を促すことで、普段使われにくい筋肉を活性化させる設計です。食事管理や適度な運動と併用し、2〜3ヶ月以上継続することで変化を実感する方が多いです。",
  },
  {
    question: "ピットソールの偽物を見分ける方法は？",
    answer:
      "公式サイトまたは正規販売ルート（公式楽天・Amazon店舗）で購入するのが最も確実です。フリマアプリや非正規ショップでは偽物・使用済み品のリスクがあります。正規品にはBACCHUSのロゴと製品番号が記載されています。",
  },
  {
    question: "サイズが合わない場合は交換できますか？",
    answer:
      "公式サイトで購入した場合、未使用・未開封品に限りサイズ交換が可能です。到着後7日以内に連絡する必要があります。まとめ買いセットの場合は1足を試してからサイズ変更の相談ができます。",
  },
  {
    question: "どんな靴に使えますか？",
    answer:
      "スニーカー、ウォーキングシューズ、ビジネスシューズなど、インソールが取り外せるタイプの靴であれば使用可能です。パンプスやヒールは靴内の余裕が少ないため、窮屈に感じる場合があります。",
  },
  {
    question: "男性でも使えますか？",
    answer:
      "はい。XS〜Lサイズ（21〜27.5cm）の展開があり、男女兼用です。Lサイズ（26.5〜27.5cm）が標準的な男性サイズに対応しています。",
  },
  {
    question: "洗えますか？お手入れ方法は？",
    answer:
      "水洗いは推奨されていません。使用後は陰干しで乾燥させ、除菌スプレーなどでケアするのがおすすめです。耐久目安は約3〜6ヶ月で、へたりを感じたら交換時期です。",
  },
];

export default function PitsolePage() {
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://sole-laboratory.com/" },
              { "@type": "ListItem", "position": 2, "name": "ピットソールの口コミ・効果を徹底検証", "item": "https://sole-laboratory.com/pitsole/" }
            ]
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#0ea5e9] font-medium mb-2">
            レビュー記事
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソールの口コミ・効果を徹底検証
            <br />
            <span className="text-[#0ea5e9]">累計200万足</span>の実力とは？
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            世界特許取得のインソール「Pitsole（ピットソール）」の口コミ・評判を徹底調査。
            「痩せない」という悪い口コミの真相から、効果の仕組み、最安値情報、偽物の見分け方まで正直にレビューします。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              世界特許技術
            </span>
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              累計200万足突破
            </span>
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              楽天ランキング1位
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              ダイエットカフェ 2.7/5
            </span>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールの総合評価
          </h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  基本情報
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-500 w-28">正式名称</td>
                      <td className="py-2 text-gray-900 font-medium">
                        Pitsole（ピットソール）
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-500">販売元</td>
                      <td className="py-2 text-gray-900">
                        BACCHUS（バッカス）
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-500">技術提供</td>
                      <td className="py-2 text-gray-900">
                        BMZ社（世界特許取得）
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-500">累計販売</td>
                      <td className="py-2 text-gray-900 font-medium">
                        200万足突破
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-500">価格</td>
                      <td className="py-2 text-gray-900">
                        6,578円（税込）〜
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  当サイトの評価
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "効果の実感度", score: 3.0 },
                    { label: "コストパフォーマンス", score: 2.5 },
                    { label: "使いやすさ", score: 4.0 },
                    { label: "技術力・信頼性", score: 4.5 },
                    { label: "口コミ評価", score: 2.7 },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-32 shrink-0">
                        {item.label}
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0ea5e9] rounded-full"
                          style={{ width: `${(item.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-900 w-8 text-right">
                        {item.score.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  ※ 口コミ評価はダイエットカフェの評価（52件）を参考にしています
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-amber-700">
                  正直な総評：
                </span>
                特許技術による足裏アーチサポートの品質は高く、姿勢改善や歩行サポートの効果は期待できます。
                ただし「履くだけで痩せる」という過度な期待は禁物。
                ダイエット効果を実感するには、食事管理や運動との併用が前提です。
                口コミ評価が2.7/5と低めなのは、「痩せない」という期待とのギャップが原因と考えられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 悪い口コミ */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            ピットソールの悪い口コミ・評判
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            まずはネガティブな声から確認しましょう
          </p>
          <div className="space-y-4">
            {badReviews.map((review) => (
              <div
                key={review.title}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                    !
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {review.text}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.age} / 出典: {review.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              悪い口コミの傾向まとめ
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                「痩せない」という声が最も多い。インソール単体でのダイエット効果には限界がある
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                使い始めに足が痛くなるケースがある（慣らし期間が必要）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                単品6,578円という価格に対して、効果が見合わないと感じる人も
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 良い口コミ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            ピットソールの良い口コミ・評判
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            ポジティブな声も多数あります
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goodReviews.map((review) => (
              <div
                key={review.title}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 bg-sky-100 text-[#0ea5e9] rounded-full flex items-center justify-center text-sm font-bold">
                    &#10003;
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {review.text}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.age} / 出典: {review.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              良い口コミの傾向まとめ
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                  &#9679;
                </span>
                姿勢改善・腰痛軽減を実感する声が多い
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                  &#9679;
                </span>
                普段使えていない筋肉の活性化を感じる人が多数
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                  &#9679;
                </span>
                靴に入れるだけの手軽さが継続のしやすさにつながっている
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 特徴と効果の仕組み */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールの特徴と効果の仕組み
          </h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                1. 世界特許取得の足裏アーチサポート
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                BMZ社が開発した特許技術により、足裏の「立方骨（キュボイド）」を的確に支えます。
                これにより足の横アーチと縦アーチの両方をサポートし、足本来の骨格バランスを取り戻します。
                一般的なインソールが土踏まずだけを持ち上げるのに対し、ピットソールは骨格全体のアライメントに着目した設計です。
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                2. 骨盤サポートによる姿勢補整
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                足裏のアーチが崩れると、膝・骨盤・背骨と連鎖的に歪みが生じます。
                ピットソールは足元から骨格のバランスを整えることで、骨盤の傾きを改善し、正しい姿勢での歩行を促します。
                姿勢が改善されることで、普段使われにくい体幹や下半身の筋肉が正しく使われるようになります。
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                3. 衝撃吸収と歩行効率の向上
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                適度なクッション性により、歩行時の衝撃を吸収。
                足・膝・腰への負担を軽減しながら、効率的な重心移動をサポートします。
                立ち仕事や長時間の歩行による疲労軽減にも効果が期待できます。
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">注意点：</span>
              ピットソールの仕組みは「正しい姿勢・歩行を促す → 筋肉の使い方が変わる → 長期的な体型変化」というメカニズムです。
              脂肪を燃焼させる薬理作用があるわけではないため、「履くだけですぐ痩せる」ことはありません。
            </p>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールのメリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base font-bold text-[#0ea5e9] mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-xs">
                  &#9675;
                </span>
                メリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  世界特許取得の技術で信頼性が高い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  靴に入れるだけで手軽に始められる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  サイズ展開が広く男女兼用（21〜27.5cm）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  姿勢改善・腰痛軽減の副次的効果
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  まとめ買いで実質無料分がつくお得なセット
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-red-500 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs">
                  &#9651;
                </span>
                デメリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  単品価格が高い（6,578円）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  即効性はなく、最低2〜3ヶ月の継続が必要
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  使い始めに足が痛くなることがある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  インソール単体でのダイエット効果は限定的
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  市販されておらず通販でしか購入できない
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 料金・最安値情報 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールの料金・最安値情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    プラン
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    価格（税込）
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    1足あたり
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-900">単品</td>
                  <td className="px-4 py-3 text-gray-900">6,578円</td>
                  <td className="px-4 py-3 text-gray-900">6,578円</td>
                  <td className="px-4 py-3 text-gray-500">お試しに</td>
                </tr>
                <tr className="border-b border-gray-100 bg-sky-50">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    3足セット
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    19,734円
                  </td>
                  <td className="px-4 py-3 text-[#0ea5e9] font-bold">
                    4,934円
                  </td>
                  <td className="px-4 py-3 text-[#0ea5e9] font-medium">
                    +1足無料
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    6足セット
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    39,468円
                  </td>
                  <td className="px-4 py-3 text-[#0ea5e9] font-bold">
                    4,934円
                  </td>
                  <td className="px-4 py-3 text-[#0ea5e9] font-medium">
                    +2足無料
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <div className="card">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                購入先別の比較
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 w-20 shrink-0">
                    公式サイト
                  </span>
                  まとめ買い割引・無料分が最もお得。正規品保証あり。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 w-20 shrink-0">
                    楽天
                  </span>
                  公式ショップあり。ポイント還元を考慮するとお得な場合も。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 w-20 shrink-0">
                    Amazon
                  </span>
                  公式出品あり。ただし非正規出品者も存在するため注意。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 w-20 shrink-0">
                    市販
                  </span>
                  ドラッグストア・靴屋などでの市販はなし。
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              ※ 価格は2026年4月時点の情報です。最新の価格は各販売サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ選びガイド */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールのサイズ選び完全ガイド
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    サイズ
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    対応cm
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">
                    目安
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr
                    key={size.label}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="px-4 py-3 text-gray-900 font-bold">
                      {size.label}
                    </td>
                    <td className="px-4 py-3 text-gray-900">{size.range}</td>
                    <td className="px-4 py-3 text-gray-500">{size.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <div className="card">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                サイズ選びのポイント
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">1.</span>
                  <span>
                    <span className="font-medium text-gray-900">
                      普段の靴のサイズを基準に選ぶ。
                    </span>
                    足の実寸ではなく、いつも履いている靴のサイズで選びましょう。
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">2.</span>
                  <span>
                    <span className="font-medium text-gray-900">
                      境界サイズは大きめを選ぶ。
                    </span>
                    例：24.5cmの方はSでもMでも対応していますが、靴の中が窮屈になるのを避けたい場合はMがおすすめ。
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">3.</span>
                  <span>
                    <span className="font-medium text-gray-900">
                      靴に合わせてカットも可能。
                    </span>
                    大きめを購入してハサミでカットし、靴に合わせて微調整する方法もあります。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 偽物・転売品の見分け方 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            【注意】偽物・転売品の見分け方
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <p className="text-sm text-red-700 leading-relaxed font-medium">
              ピットソールの人気に伴い、フリマアプリやオークションサイトで偽物・使用済み品が出回っています。
              正規品でないと特許技術の効果は得られず、返品・交換の保証も受けられません。
            </p>
          </div>
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                安全な購入先
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  BACCHUS公式サイト（最も確実）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  楽天市場のBACCHUS公式ショップ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  AmazonのBACCHUS公式出品
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                避けるべき購入先
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  メルカリ・ラクマなどのフリマアプリ（使用済み・偽物リスク）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  ヤフオク等のオークションサイト
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  Amazon・楽天の非公式出品者（販売元名を必ず確認）
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                正規品チェックポイント
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  BACCHUSのロゴと製品番号の記載がある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  専用パッケージに封入されている
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  極端な値引きがされていない（定価の半額以下は要注意）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールが向いている人・向いていない人
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-[#0ea5e9]">
              <h3 className="text-base font-bold text-[#0ea5e9] mb-4">
                向いている人
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  姿勢の悪さや骨盤の歪みが気になる方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  日常の歩行をダイエットに活かしたい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  立ち仕事で腰痛・足の疲れに悩んでいる方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  食事管理や運動も並行して取り組める方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  特許技術など科学的根拠のある商品を選びたい方
                </li>
              </ul>
            </div>
            <div className="card border-red-300">
              <h3 className="text-base font-bold text-red-500 mb-4">
                向いていない人
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  「履くだけですぐ痩せたい」という方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  インソールに6,000円以上かけるのが負担な方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  2〜3ヶ月の継続が難しい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  足に持病がある方（医師に相談を推奨）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    &#10005;
                  </span>
                  パンプスやヒール中心の方（スニーカー推奨）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-gray-200 rounded-lg bg-white"
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

      {/* まとめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ピットソールは、BMZ社の世界特許技術を採用した本格的な足裏アーチサポートインソールです。
              累計200万足の販売実績と楽天ランキング1位獲得は、一定の品質と信頼性を示しています。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              一方で、ダイエットカフェの評価が2.7/5と低めなのも事実です。
              これは「履くだけで痩せる」という過度な期待と現実のギャップが主な原因と考えられます。
              口コミを分析すると、姿勢改善や腰痛軽減といった効果は多くの方が実感している一方で、
              体重減少については限定的な結果にとどまるケースが多いです。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              ピットソールを最大限に活かすなら、適度な運動や食事管理と組み合わせて、
              最低2〜3ヶ月は継続して使用することをおすすめします。
              「楽に痩せる魔法のアイテム」ではなく、「正しい姿勢・歩行をサポートするツール」として捉えることが大切です。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ranking/" className="btn-outline text-sm text-center">
                他のインソールと比較する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピットソール関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/pitsole/size/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ピットソールのサイズ選び完全ガイド</p>
              <p className="text-xs text-gray-500 mt-1">失敗しない切り方も解説</p>
            </Link>
            <Link href="/pitsole/price/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ピットソールの最安値・販売店まとめ</p>
              <p className="text-xs text-gray-500 mt-1">公式・楽天・Amazonを徹底比較</p>
            </Link>
            <Link href="/compare/pitsole-vs-runway/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ピットソール vs ランウェイ比較</p>
              <p className="text-xs text-gray-500 mt-1">どちらが自分に合う？違いを解説</p>
            </Link>
            <Link href="/compare/pitsole-vs-slimup/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ピットソール vs スリムアップ比較</p>
              <p className="text-xs text-gray-500 mt-1">効果・価格・口コミで徹底比較</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors md:col-span-2">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめランキング</p>
              <p className="text-xs text-gray-500 mt-1">人気インソールを比較して選ぶ</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
