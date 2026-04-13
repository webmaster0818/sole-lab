import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ピットソール vs スリムアップインソール徹底比較！違いと選び方｜ソールラボ",
  description:
    "ピットソールとスリムアップインソールを徹底比較。価格・効果・技術・サイズ展開・口コミの違いを表で整理し、あなたに合うダイエットインソールの選び方を解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/compare/pitsole-vs-slimup/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソール vs スリムアップインソール徹底比較！違いと選び方",
  description:
    "ピットソールとスリムアップインソールを価格・効果・技術・サイズ・口コミの5項目で徹底比較。あなたに合ったダイエットインソールの選び方を解説。",
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
      name: "ピットソールとスリムアップインソールはどっちがおすすめ？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術力・特許の信頼性を重視するならピットソール、コスパやまとめ買いのお得さを重視するならスリムアップインソールがおすすめです。ピットソールはBMZ社の世界特許技術を搭載し累計200万足の実績があります。スリムアップインソールは整体師監修で3足セット購入時に1足無料となりコスパに優れます。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールとスリムアップインソールの価格差はどのくらい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "単品価格はピットソール6,578円、スリムアップインソール6,980円でスリムアップインソールの方がやや高めです。ただしスリムアップインソールは2足セット11,980円（1足5,990円）、3足セット17,920円＋1足無料（実質1足4,480円）とまとめ買い割引が充実しています。",
      },
    },
    {
      "@type": "Question",
      name: "男性が使うならどっちが良い？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも男女兼用ですが、サイズ展開で比較するとピットソールはXS〜L（21〜27.5cm）、スリムアップインソールはS〜L（22〜27.5cm）です。足が小さめの方はピットソールのXSサイズが選べます。男性の標準サイズはどちらもカバーしています。",
      },
    },
    {
      "@type": "Question",
      name: "両方とも洗えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも水洗いは推奨されていません。使用後は陰干しで乾燥させるのが基本のお手入れ方法です。スリムアップインソールには抗菌防臭加工が施されているため、臭いが気になる方にはアドバンテージがあります。",
      },
    },
  ],
};

const comparisonItems = [
  {
    label: "単品価格（税込）",
    pitsole: "6,578円",
    slimup: "6,980円",
    winner: "pitsole" as const,
  },
  {
    label: "2足セット価格",
    pitsole: "12,364円（6,182円/足）",
    slimup: "11,980円（5,990円/足）",
    winner: "slimup" as const,
  },
  {
    label: "3足セット価格",
    pitsole: "16,390円（5,463円/足）",
    slimup: "17,920円＋1足無料（4,480円/足）",
    winner: "slimup" as const,
  },
  {
    label: "技術・特許",
    pitsole: "BMZ社 世界特許取得",
    slimup: "整体師監修（井上剛志）",
    winner: "pitsole" as const,
  },
  {
    label: "サイズ展開",
    pitsole: "XS〜L（21〜27.5cm）",
    slimup: "S〜L（22〜27.5cm）",
    winner: "pitsole" as const,
  },
  {
    label: "累計販売実績",
    pitsole: "200万足突破",
    slimup: "非公開",
    winner: "pitsole" as const,
  },
  {
    label: "抗菌防臭",
    pitsole: "なし",
    slimup: "あり",
    winner: "slimup" as const,
  },
  {
    label: "監修・権威性",
    pitsole: "BMZ社（特許技術企業）",
    slimup: "井上剛志（YouTube136万人）",
    winner: "draw" as const,
  },
  {
    label: "対象",
    pitsole: "男女兼用",
    slimup: "男女兼用",
    winner: "draw" as const,
  },
];

const faqs = [
  {
    question: "ピットソールとスリムアップインソールはどっちがおすすめ？",
    answer:
      "一概には言えませんが、技術力と実績を重視するならピットソール、コスパとまとめ買いのお得さを重視するならスリムアップインソールがおすすめです。以下の「タイプ別おすすめ」セクションも参考にしてください。",
  },
  {
    question: "両方を併用することはできますか？",
    answer:
      "構造が異なるため併用はできません。1足の靴にはどちらか一方のインソールを入れて使用してください。靴ごとに使い分けるのは問題ありません。",
  },
  {
    question: "男性が使うならどちらが良いですか？",
    answer:
      "どちらも男女兼用ですが、ピットソールはXSサイズ（21cm〜）からの展開があり、スリムアップインソールはSサイズ（22cm〜）からです。男性の標準サイズ（25〜27.5cm）はどちらもカバーしています。",
  },
  {
    question: "どちらも返品・交換は可能ですか？",
    answer:
      "ピットソールは公式サイト購入で未使用・未開封品に限り7日以内のサイズ交換が可能です。スリムアップインソールも公式サイト購入で一定期間内の返品・交換に対応しています。詳細は各公式サイトでご確認ください。",
  },
  {
    question: "臭いが気になるのですが、どちらがおすすめ？",
    answer:
      "抗菌防臭機能が搭載されているスリムアップインソールがおすすめです。ピットソールには抗菌防臭機能はありませんが、市販の除菌スプレーと併用することで対策可能です。",
  },
];

export default function PitsoleVsSlimupPage() {
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
      <section className="bg-gradient-to-b from-violet-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-violet-600 font-medium mb-2">
            比較記事
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソール vs スリムアップインソール
            <br />
            <span className="text-violet-600">徹底比較</span>
            ！違いと選び方
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            人気ダイエットインソール「ピットソール」と「スリムアップインソール」を価格・効果・技術・サイズ・口コミの5項目で徹底比較。
            それぞれの強み・弱みを整理し、あなたに合った1足の選び方を解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              ピットソール
            </span>
            <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-medium">
              スリムアップインソール
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月最新
            </span>
          </div>
        </div>
      </section>

      {/* 結論ファースト */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            【結論】ピットソールとスリムアップインソール、どっちを選ぶ？
          </h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              先に結論をお伝えすると、<span className="font-bold text-gray-900">両商品は「技術アプローチ」と「コスト構造」に明確な違いがあります。</span>どちらが優れているというよりも、あなたが何を重視するかで選ぶべき商品が変わります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg">
                <h3 className="text-base font-bold text-[#0ea5e9] mb-2">
                  ピットソールが向いている人
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    特許技術の信頼性を重視したい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    累計200万足の実績に安心感を感じる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    まずは単品で試したい（単品価格はピットソールが安い）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    21cmからの小さめサイズが必要
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <h3 className="text-base font-bold text-emerald-600 mb-2">
                  スリムアップインソールが向いている人
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    複数足をまとめ買いしてコスパ良く使いたい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    整体師監修という専門家のお墨付きが欲しい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    抗菌防臭機能が欲しい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    3足+1足無料でお得にまとめ買いしたい
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本情報比較 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            基本情報を比較
          </h2>
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-2 text-left text-gray-500 font-medium w-1/3">
                    項目
                  </th>
                  <th className="py-3 px-2 text-center font-bold text-[#0ea5e9] w-1/3">
                    ピットソール
                  </th>
                  <th className="py-3 px-2 text-center font-bold text-emerald-600 w-1/3">
                    スリムアップインソール
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">販売元</td>
                  <td className="py-3 px-2 text-center text-gray-900">BACCHUS（バッカス）</td>
                  <td className="py-3 px-2 text-center text-gray-900">イッティ</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">監修・技術</td>
                  <td className="py-3 px-2 text-center text-gray-900">BMZ社（世界特許）</td>
                  <td className="py-3 px-2 text-center text-gray-900">井上剛志（整体師）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">累計販売数</td>
                  <td className="py-3 px-2 text-center text-gray-900 font-medium">200万足</td>
                  <td className="py-3 px-2 text-center text-gray-900">非公開</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">ランキング実績</td>
                  <td className="py-3 px-2 text-center text-gray-900">楽天ランキング1位</td>
                  <td className="py-3 px-2 text-center text-gray-900">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">サイズ</td>
                  <td className="py-3 px-2 text-center text-gray-900">XS〜L（21〜27.5cm）</td>
                  <td className="py-3 px-2 text-center text-gray-900">S〜L（22〜27.5cm）</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 text-gray-600">対象</td>
                  <td className="py-3 px-2 text-center text-gray-900">男女兼用</td>
                  <td className="py-3 px-2 text-center text-gray-900">男女兼用</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-gray-600">抗菌防臭</td>
                  <td className="py-3 px-2 text-center text-gray-400">-</td>
                  <td className="py-3 px-2 text-center text-emerald-600 font-medium">あり</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 価格比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            価格を徹底比較 - どっちがお得？
          </h2>
          <div className="space-y-4">
            <div className="card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-2 text-left text-gray-500 font-medium">
                      購入プラン
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-[#0ea5e9]">
                      ピットソール
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-emerald-600">
                      スリムアップインソール
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">単品</td>
                    <td className="py-3 px-2 text-center text-gray-900 font-medium">
                      <span className="text-[#0ea5e9]">6,578円</span>
                    </td>
                    <td className="py-3 px-2 text-center text-gray-900">6,980円</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">2足セット</td>
                    <td className="py-3 px-2 text-center text-gray-900">12,364円<br /><span className="text-xs text-gray-500">（6,182円/足）</span></td>
                    <td className="py-3 px-2 text-center text-gray-900 font-medium">
                      <span className="text-emerald-600">11,980円</span><br /><span className="text-xs text-gray-500">（5,990円/足）</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">3足セット</td>
                    <td className="py-3 px-2 text-center text-gray-900">16,390円<br /><span className="text-xs text-gray-500">（5,463円/足）</span></td>
                    <td className="py-3 px-2 text-center text-gray-900 font-medium">
                      <span className="text-emerald-600">17,920円＋1足無料</span><br /><span className="text-xs text-gray-500">（実質4,480円/足）</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-amber-700">価格比較のポイント：</span>
                単品購入ならピットソールが402円安くお得です。しかし2足以上のまとめ買いではスリムアップインソールに軍配が上がります。
                特に3足セットは1足無料の特典があり、4足分を17,920円（1足あたり4,480円）で購入できるため、
                家族で使いたい方や靴ごとに入れ替えたい方にはスリムアップインソールのコスパが光ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 技術・効果の違い */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            技術・効果の仕組みを比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base font-bold text-[#0ea5e9] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-xs font-bold">
                  P
                </span>
                ピットソールの技術
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#9679;</span>
                  BMZ社の世界特許技術「キュボイドバランス理論」を採用
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#9679;</span>
                  足裏の立方骨（キュボイド）を的確に支え、横アーチ・縦アーチを同時サポート
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#9679;</span>
                  骨格全体のアライメントに着目し、骨盤の傾きを改善
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#9679;</span>
                  体幹の安定化により、普段使われにくい筋肉を活性化
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-emerald-600 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold">
                  S
                </span>
                スリムアップインソールの技術
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
                  美容整体師・井上剛志監修の「骨格筋サポート構造」
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
                  3つのアーチ（内側縦・外側縦・横）を立体的にサポート
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
                  正しい重心移動を促し、歩行時の筋肉の使い方を改善
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
                  抗菌防臭加工で長時間の使用でも快適さを維持
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 card">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              技術アプローチの違い
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ピットソールは<span className="font-bold text-gray-900">「特許技術」</span>がセールスポイント。BMZ社が開発した立方骨サポートは国際特許を取得しており、科学的なエビデンスに基づいた設計です。
              一方、スリムアップインソールは<span className="font-bold text-gray-900">「整体師の知見」</span>がベース。YouTube登録者136万人の井上剛志氏が監修しており、整体の現場で培った骨格矯正のノウハウが詰まっています。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              どちらも「足裏アーチをサポートして正しい姿勢・歩行を促す」という基本コンセプトは共通しています。
              違いは、ピットソールが工学的（特許技術）アプローチ、スリムアップインソールが臨床的（整体師監修）アプローチという点です。
            </p>
          </div>
        </div>
      </section>

      {/* 項目別比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            9項目で徹底比較
          </h2>
          <div className="space-y-3">
            {comparisonItems.map((item) => (
              <div
                key={item.label}
                className="card flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
              >
                <span className="text-sm font-bold text-gray-900 md:w-36 shrink-0">
                  {item.label}
                </span>
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div
                    className={`text-sm text-center p-2 rounded-lg ${
                      item.winner === "pitsole"
                        ? "bg-sky-50 text-[#0ea5e9] font-bold"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {item.pitsole}
                    {item.winner === "pitsole" && (
                      <span className="ml-1 text-xs">&#9733;</span>
                    )}
                  </div>
                  <div
                    className={`text-sm text-center p-2 rounded-lg ${
                      item.winner === "slimup"
                        ? "bg-emerald-50 text-emerald-600 font-bold"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {item.slimup}
                    {item.winner === "slimup" && (
                      <span className="ml-1 text-xs">&#9733;</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ &#9733;は該当項目で優位な方を示しています。「引き分け」の項目は強調なしで表示。
          </p>
        </div>
      </section>

      {/* メリット・デメリット比較 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            メリット・デメリットを比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ピットソール */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#0ea5e9]">ピットソール</h3>
              <div className="card">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center text-xs text-[#0ea5e9]">
                    &#9675;
                  </span>
                  メリット
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    世界特許の技術で信頼性が高い
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    累計200万足の販売実績
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    楽天ランキング1位獲得
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                    XS（21cm〜）からの幅広いサイズ展開
                  </li>
                </ul>
              </div>
              <div className="card">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs text-red-500">
                    &#9651;
                  </span>
                  デメリット
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    まとめ買い時の割引率がやや控えめ
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    抗菌防臭機能がない
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    慣らし期間に足の痛みを感じるケースあり
                  </li>
                </ul>
              </div>
            </div>
            {/* スリムアップインソール */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-emerald-600">スリムアップインソール</h3>
              <div className="card">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs text-emerald-500">
                    &#9675;
                  </span>
                  メリット
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    3足セットで1足無料、コスパ抜群
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    YouTube136万人の整体師が監修
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    抗菌防臭機能を搭載
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    骨格筋サポートに特化した立体構造
                  </li>
                </ul>
              </div>
              <div className="card">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs text-red-500">
                    &#9651;
                  </span>
                  デメリット
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    単品価格はピットソールより402円高い
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    特許技術ではなく監修ベースの設計
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                    累計販売数が非公開で実績が見えにくい
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* タイプ別おすすめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            タイプ別おすすめ - あなたに合うのはどっち？
          </h2>
          <div className="space-y-4">
            <div className="card border-l-4 border-l-[#0ea5e9]">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                技術力・実績重視なら → ピットソール
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                BMZ社の世界特許技術は、ダイエットインソール業界の中でも群を抜いた信頼性があります。
                累計200万足の販売実績と楽天ランキング1位の獲得は、多くのユーザーから支持されている証拠です。
                「しっかりとしたエビデンスのある商品を選びたい」「実績がある商品のほうが安心」という方にはピットソールが最適です。
              </p>
            </div>
            <div className="card border-l-4 border-l-emerald-500">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                コスパ・まとめ買い重視なら → スリムアップインソール
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                複数足をまとめ買いするなら、スリムアップインソールのコスパは圧倒的です。
                3足セット購入で1足無料になるため、実質1足4,480円。通勤靴・ウォーキングシューズ・休日用と使い分けたい方や、
                家族で使いたい方にはスリムアップインソールがおすすめです。
              </p>
            </div>
            <div className="card border-l-4 border-l-violet-500">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                臭い対策も兼ねたいなら → スリムアップインソール
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                スリムアップインソールには抗菌防臭加工が施されています。ダイエット効果だけでなく、
                足の臭い対策も同時に行いたいという方には実用的なメリットが大きい商品です。
                ピットソールには抗菌防臭機能がないため、別途除菌スプレーなどでケアする必要があります。
              </p>
            </div>
            <div className="card border-l-4 border-l-orange-400">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                まずは1足試してみたいなら → ピットソール
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                「ダイエットインソール自体が初めてで、まずは1足だけ試したい」という方には、
                単品価格が6,578円と安いピットソールから始めるのが無難です。
                効果を実感できてから複数足に移行する段階で、スリムアップインソールのまとめ買いを検討するのも賢い選択です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 口コミ傾向の比較 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            口コミ傾向を比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base font-bold text-[#0ea5e9] mb-4">
                ピットソールの口コミ傾向
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">良い口コミ</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                      姿勢が改善された・腰痛が軽減した
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                      普段使えていない筋肉の活性化を実感
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                      立ち仕事の疲労が軽減した
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">悪い口コミ</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      「痩せない」という声が多い
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      使い始めに足が痛くなるケースあり
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      単品6,578円は高いという意見
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-emerald-600 mb-4">
                スリムアップインソールの口コミ傾向
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">良い口コミ</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                      歩き方が変わった・意識が変わった
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                      まとめ買いのコスパが良い
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                      臭いが気にならなくなった（抗菌防臭）
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">悪い口コミ</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      即効性は感じられないという声
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      靴によっては窮屈に感じる場合がある
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#9679;</span>
                      市販されておらず実物を確認できない
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">口コミ比較のまとめ：</span>
              どちらの商品も「すぐには痩せない」という声が共通しています。これはダイエットインソール全般に言えることで、
              正しい姿勢・歩行を促すことで長期的に体型変化を目指す商品です。
              ピットソールは姿勢改善・腰痛軽減の実感、スリムアップインソールは歩き方の変化・コスパの良さが高評価のポイントです。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ：ピットソール vs スリムアップインソール
          </h2>
          <div className="card">
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-2 text-left text-gray-500 font-medium">重視するポイント</th>
                    <th className="py-3 px-2 text-center font-bold text-gray-900">おすすめ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">特許技術・エビデンス</td>
                    <td className="py-3 px-2 text-center text-[#0ea5e9] font-bold">ピットソール</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">販売実績・知名度</td>
                    <td className="py-3 px-2 text-center text-[#0ea5e9] font-bold">ピットソール</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">単品購入の安さ</td>
                    <td className="py-3 px-2 text-center text-[#0ea5e9] font-bold">ピットソール</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">まとめ買いのコスパ</td>
                    <td className="py-3 px-2 text-center text-emerald-600 font-bold">スリムアップインソール</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-gray-600">抗菌防臭</td>
                    <td className="py-3 px-2 text-center text-emerald-600 font-bold">スリムアップインソール</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-gray-600">専門家監修</td>
                    <td className="py-3 px-2 text-center text-emerald-600 font-bold">スリムアップインソール</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              ピットソールとスリムアップインソールは、どちらも「足裏アーチのサポートにより正しい姿勢と歩行を促す」という基本設計は共通しています。
              大きな違いは、ピットソールが<span className="font-bold text-gray-900">世界特許の技術力と200万足の販売実績</span>を武器にしているのに対し、
              スリムアップインソールは<span className="font-bold text-gray-900">整体師監修の専門性とまとめ買いの圧倒的コスパ</span>を強みにしている点です。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              どちらを選んでも、継続使用が効果実感の鍵です。まずは自分の優先順位を明確にして、合った1足を選んでみてください。
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/pitsole/" className="btn-cta text-center flex-1">
              ピットソールの詳細を見る
            </Link>
            <Link href="/slim-up-insole/" className="btn-outline text-center flex-1">
              スリムアップインソールの詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-violet-600 shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            関連ページ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/pitsole/"
              className="card block text-center hover:border-[#0ea5e9] transition-colors"
            >
              <p className="text-sm font-bold text-gray-900 mb-1">ピットソール</p>
              <p className="text-xs text-gray-500">口コミ・効果を徹底検証</p>
            </Link>
            <Link
              href="/slim-up-insole/"
              className="card block text-center hover:border-emerald-500 transition-colors"
            >
              <p className="text-sm font-bold text-gray-900 mb-1">スリムアップインソール</p>
              <p className="text-xs text-gray-500">口コミ・効果を検証</p>
            </Link>
            <Link
              href="/ranking/"
              className="card block text-center hover:border-violet-500 transition-colors"
            >
              <p className="text-sm font-bold text-gray-900 mb-1">総合ランキング</p>
              <p className="text-xs text-gray-500">ダイエットインソール比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
