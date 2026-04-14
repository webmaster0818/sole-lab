import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "【2026年最新】ダイエットインソールおすすめ3選を徹底比較！効果・口コミ・料金まで",
  description:
    "2026年最新版。ピットソール・ランウェイキュアソール・スリムアップインソールを6つの基準で徹底比較。特許技術・料金・口コミ・サイズ展開まで、あなたに合ったダイエットインソールが見つかります。",
  alternates: {
    canonical: "https://sole-laboratory.com/ranking/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ダイエットインソールおすすめ3選を徹底比較！効果・口コミ・料金まで",
  description:
    "ピットソール・ランウェイキュアソール・スリムアップインソールを徹底比較。料金・特許技術・口コミ・サイズ展開まで詳しく解説。",
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
      name: "ダイエットインソールは本当に痩せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソール単体で劇的に体重が落ちるものではありません。正しい姿勢や歩行をサポートすることで、日常生活での筋肉の使い方を改善し、長期的にボディラインの変化が期待できます。食事管理や適度な運動との併用が効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいで効果を実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差がありますが、姿勢の変化は1〜2週間、体型への変化は2〜3ヶ月程度の継続使用が目安です。毎日の歩行時間が長い方ほど実感しやすい傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールの世界特許とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMZ社が取得した足裏アーチサポートに関する特許技術です。足の骨格を正しい位置に導くことで、体幹を安定させ、効率的な歩行をサポートする構造が特許として認められています。",
      },
    },
    {
      "@type": "Question",
      name: "男性でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピットソール（XS〜Lサイズ、21〜27.5cm対応）とスリムアップインソールは男女兼用です。ランウェイキュアソールはM（22.5〜23.5cm）とL（24〜25cm）の展開で、主に女性向けの設計となっています。",
      },
    },
    {
      "@type": "Question",
      name: "パンプスやヒールにも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "商品によります。薄型設計のものはパンプスにも対応していますが、靴の中の余裕によっては窮屈になることがあります。スニーカーやウォーキングシューズでの使用が最も効果的です。",
      },
    },
  ],
};

export default function RankingPage() {
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

      {/* Breadcrumb */}
      <nav
        aria-label="パンくずリスト"
        className="max-w-4xl mx-auto px-4 py-3 text-xs text-gray-500"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-[#0ea5e9] transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">
            ダイエットインソールおすすめランキング
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            2026年4月最新版
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ダイエットインソール
            <br className="md:hidden" />
            おすすめ<span className="text-[#0ea5e9]">3選</span>を
            <br className="md:hidden" />
            徹底比較！
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            累計200万足のピットソール、美姿勢サポートのランウェイキュアソール、美容整体師監修のスリムアップインソール。
            <br className="hidden md:block" />
            効果・口コミ・料金まで、6つの基準で徹底比較しました。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#about" className="hover:text-[#0ea5e9] transition-colors">
                1. ダイエットインソールとは？本当に効果ある？
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:text-[#0ea5e9] transition-colors">
                2. 【結論】おすすめダイエットインソールBEST3
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:text-[#0ea5e9] transition-colors">
                3. 3商品を6つの基準で徹底比較
              </a>
            </li>
            <li>
              <a href="#type" className="hover:text-[#0ea5e9] transition-colors">
                4. タイプ別おすすめはコレ！
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                5. ダイエットインソールの正しい選び方5つのポイント
              </a>
            </li>
            <li>
              <a href="#maximize" className="hover:text-[#0ea5e9] transition-colors">
                6. 効果を最大化する使い方
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                7. よくある質問（FAQ）10選
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#0ea5e9] transition-colors">
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 1: About Diet Insoles */}
      <section id="about" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0ea5e9]">
          ダイエットインソールとは？本当に効果ある？
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              インソールでダイエットできる仕組み
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ダイエットインソールは、足裏のアーチ構造をサポートすることで、正しい姿勢と歩行を促す機能性インソールです。
              人間の足裏には「内側縦アーチ」「外側縦アーチ」「横アーチ」の3つのアーチがあり、これらが崩れると姿勢が歪み、本来使うべき筋肉が使われなくなります。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ダイエットインソールは、この足裏アーチを正しい位置に戻すことで、以下のような効果が期待できます。
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  <strong>体幹の安定化：</strong>
                  骨盤が正しい位置に戻ることで、腹筋・背筋・インナーマッスルが自然に使われるようになる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  <strong>歩行効率の改善：</strong>
                  正しいフォームでの歩行により、下半身の筋肉がバランスよく使われる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0">&#10003;</span>
                <span>
                  <strong>姿勢改善：</strong>
                  猫背やO脚の改善をサポートし、見た目のスタイルアップにつながる
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              科学的根拠と特許技術
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              今回比較する3商品のうち、ピットソールはBMZ社が世界特許を取得した足裏アーチサポート技術を採用しています。
              これは足の骨格を正しい位置に導く独自構造で、特許として認められた技術です。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              また、ランウェイキュアソールは足裏3点アーチサポート構造、スリムアップインソールは美容整体師の知見に基づく骨格筋サポート設計と、
              それぞれ異なるアプローチで足裏からの姿勢改善を目指しています。
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              「履くだけで痩せる」の正しい期待値
            </h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-700 font-semibold mb-1">
                正直にお伝えします
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                「履くだけで何キロも痩せる」という過度な期待は禁物です。ダイエットインソールはあくまで「姿勢改善」「正しい筋肉の使い方をサポート」するためのツールです。
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              期待できる効果は、正しい姿勢での歩行による消費カロリーの効率化、体幹強化によるボディラインの変化、むくみの軽減などです。
              食事管理や適度な運動と組み合わせることで、より効果を実感しやすくなります。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              逆に言えば、「普段の靴に入れて歩くだけ」という手軽さが最大のメリット。
              運動が苦手な方や、ジムに通う時間がない方にとって、日常生活の中で無理なく取り入れられるダイエットサポートアイテムと言えます。
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Ranking */}
      <section id="ranking" className="section-primary-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-[#0ea5e9]">
            【結論】おすすめダイエットインソールBEST3
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10 -mx-4 px-4">
            <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#0ea5e9] text-white">
                  <th className="px-3 py-3 text-left font-semibold whitespace-nowrap">
                    項目
                  </th>
                  <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">
                    1位 ピットソール
                  </th>
                  <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">
                    2位 ランウェイキュアソール
                  </th>
                  <th className="px-3 py-3 text-center font-semibold whitespace-nowrap">
                    3位 スリムアップインソール
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                    単品価格
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    6,578円（税込）
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    セット割引あり
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    6,980円（税込）
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                    お得なセット
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    3足セットで1足無料
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    セット割引あり
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    3足17,920円+1足無料
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                    サイズ展開
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    XS〜L（21〜27.5cm）
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    M/L（22.5〜25cm）
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    複数サイズ対応
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                    特徴
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    世界特許取得
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    3点アーチサポート
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    整体師監修
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                    対象
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    男女兼用
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    主に女性向け
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    男女兼用
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rank 1: Pitsole */}
          <div className="mb-10">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white text-sm font-bold shrink-0">
                1
              </span>
              ピットソール（Pitsole）
            </h3>
            <div className="card">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-sky-100 text-[#0ea5e9] text-xs font-semibold px-2.5 py-1 rounded-full">
                  累計200万足突破
                </span>
                <span className="inline-block bg-sky-100 text-[#0ea5e9] text-xs font-semibold px-2.5 py-1 rounded-full">
                  世界特許取得
                </span>
                <span className="inline-block bg-sky-100 text-[#0ea5e9] text-xs font-semibold px-2.5 py-1 rounded-full">
                  楽天ランキング1位
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                BMZ社が開発・販売するダイエットインソールで、累計販売数200万足を突破した人気商品です。
                世界特許を取得した足裏アーチサポート技術により、骨格を正しい位置に導き、体幹を安定させることで姿勢改善・ダイエットサポートを目指します。
                楽天ランキングでも1位を獲得した実績があり、知名度・販売実績ともにトップクラスです。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">
                    メリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      世界特許取得の信頼性
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      累計200万足の販売実績
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      サイズ展開が豊富（21〜27.5cm）
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      3足セットで1足無料のコスパ
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 mb-2">
                    デメリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      口コミ評価は賛否両論（ダイエットカフェ平均2.7）
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      単品価格6,578円はやや高め
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      即効性は期待できない
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  口コミの傾向
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ダイエットカフェでの口コミ平均は2.7点。「姿勢が良くなった」「歩きやすくなった」というポジティブな声がある一方、
                  「体重の変化は感じられなかった」「価格に見合うか微妙」といった厳しい意見も。
                  短期間での体重減少よりも、姿勢改善や歩行の快適さを重視する方に向いています。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/pitsole/" className="btn-cta text-sm">
                  ピットソールの詳細レビューを見る
                </Link>
              </div>
            </div>
          </div>

          {/* Rank 2: Runway Cure Sole */}
          <div className="mb-10">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white text-sm font-bold shrink-0">
                2
              </span>
              ランウェイキュアソール（Runway Cure Sole）
            </h3>
            <div className="card">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  足裏3点アーチサポート
                </span>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  美姿勢・美脚サポート
                </span>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  FLOReショップ販売
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                FLOReショップが販売する女性向けダイエットインソールです。
                足裏の3点（内側縦アーチ・外側縦アーチ・横アーチ）をバランスよくサポートする構造で、姿勢改善と美脚を目指します。
                セット購入での割引があり、複数足でお得に購入できる点も魅力です。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">
                    メリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      3点アーチサポートで姿勢改善に特化
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      女性の足に最適化された設計
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      セット割引でお得に購入可能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      美脚・美姿勢サポートに重点
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 mb-2">
                    デメリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      サイズ展開がM/Lの2サイズのみ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      男性や足の大きい方には非対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      外反母趾の方は使用に注意が必要
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-amber-700 mb-1">
                  注意点
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  外反母趾の方は、アーチサポートにより痛みが出る場合があります。
                  購入前に医師への相談をおすすめします。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/runway-cure-sole/"
                  className="btn-cta text-sm"
                  style={{ background: "#8b5cf6" }}
                >
                  ランウェイキュアソールの詳細レビューを見る
                </Link>
              </div>
            </div>
          </div>

          {/* Rank 3: Slimup Insole */}
          <div className="mb-4">
            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-400 text-white text-sm font-bold shrink-0">
                3
              </span>
              スリムアップインソール
            </h3>
            <div className="card">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  美容整体師 井上剛志 監修
                </span>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  YouTube登録者136万人
                </span>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  抗菌防臭
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                YouTube登録者数136万人を誇る美容整体師・井上剛志氏が監修したダイエットインソールです。
                骨格筋サポートをコンセプトに、足裏から体全体の骨格バランスを整える設計。
                抗菌防臭機能も備えており、毎日の使用でも清潔に保てます。
                3足セットなら17,920円で+1足無料と、まとめ買いでのコスパも良好です。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">
                    メリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      人気美容整体師による専門的な監修
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      骨格筋に着目した独自の設計思想
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      抗菌防臭機能で衛生的
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        &#9675;
                      </span>
                      3足セットで+1足無料
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 mb-2">
                    デメリット
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      単品6,980円はやや高め
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      ピットソールほどの販売実績はまだない
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">
                        &#9651;
                      </span>
                      特許技術の取得はなし
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  料金の目安
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>単品：6,980円（税込）</li>
                  <li>2足セット：11,980円（税込）/ 1足あたり5,990円</li>
                  <li>
                    3足セット：17,920円（税込）+1足無料 / 実質1足あたり4,480円
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/slimup-insole/"
                  className="btn-cta text-sm"
                  style={{ background: "#10b981" }}
                >
                  スリムアップインソールの詳細レビューを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Comparison */}
      <section id="comparison" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-[#0ea5e9]">
          3商品を6つの基準で徹底比較
        </h2>

        <div className="space-y-10">
          {/* 1. Price */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (1) 料金・コスパ比較
            </h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 text-sm mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-900 whitespace-nowrap">
                      商品名
                    </th>
                    <th className="px-3 py-2.5 text-center font-semibold text-gray-900 whitespace-nowrap">
                      単品価格
                    </th>
                    <th className="px-3 py-2.5 text-center font-semibold text-gray-900 whitespace-nowrap">
                      最安（1足あたり）
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      ピットソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      6,578円
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      約4,386円（3足セット+1足無料時）
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      ランウェイキュアソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      セット割引あり
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      セット購入がお得
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      スリムアップインソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      6,980円
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      約4,480円（3足+1足無料時）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              単品価格ではピットソールがやや安く、セット購入時の1足あたりのコスパも優秀です。
              スリムアップインソールも3足セットなら+1足無料で実質4,480円/足と健闘しています。
              いずれの商品もセット購入が圧倒的にお得なため、継続使用を前提にまとめ買いをおすすめします。
            </p>
          </div>

          {/* 2. Size */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (2) サイズ展開・対応靴
            </h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200 text-sm mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-900 whitespace-nowrap">
                      商品名
                    </th>
                    <th className="px-3 py-2.5 text-center font-semibold text-gray-900 whitespace-nowrap">
                      サイズ展開
                    </th>
                    <th className="px-3 py-2.5 text-center font-semibold text-gray-900 whitespace-nowrap">
                      対応cm
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      ピットソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      XS / S / M / L
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      21〜27.5cm
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      ランウェイキュアソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      M / L
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      22.5〜25cm
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">
                      スリムアップインソール
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      複数サイズ対応
                    </td>
                    <td className="px-3 py-2.5 text-center text-gray-700">
                      幅広いサイズに対応
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              サイズ展開ではピットソールが最も充実しており、21〜27.5cmと男女問わず対応できます。
              ランウェイキュアソールはM（22.5〜23.5cm）とL（24〜25cm）の2サイズで、主に女性向けの展開です。
              男性や足のサイズが大きい方はピットソールまたはスリムアップインソールが適しています。
            </p>
          </div>

          {/* 3. Technology */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (3) 特許・独自技術
            </h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  ピットソール
                </p>
                <p className="text-sm text-gray-600">
                  BMZ社が世界特許を取得した足裏アーチサポート技術を採用。骨格を正しい位置に導く独自構造により、体幹強化と姿勢改善をサポートします。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  ランウェイキュアソール
                </p>
                <p className="text-sm text-gray-600">
                  足裏3点アーチサポート構造を採用。内側縦アーチ・外側縦アーチ・横アーチの3つを同時にサポートし、美姿勢と美脚をサポートする設計です。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  スリムアップインソール
                </p>
                <p className="text-sm text-gray-600">
                  美容整体師・井上剛志氏（YouTube登録者136万人）の監修による骨格筋サポート設計。整体の知見を活かした足裏アプローチが特徴です。さらに抗菌防臭機能を搭載しています。
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              技術的な裏付けという点では、世界特許を取得しているピットソールが一歩リードしています。
              ただし、特許の有無が直接効果の優劣を意味するわけではありません。
              それぞれ異なるアプローチで足裏からの姿勢改善を目指しており、自分に合った設計思想の商品を選ぶことが大切です。
            </p>
          </div>

          {/* 4. Reviews */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (4) 口コミ評価の傾向
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ダイエットインソールの口コミは、全般的に「姿勢が良くなった」「歩きやすくなった」という声と、
              「体重は変わらなかった」「期待ほどではなかった」という声に分かれる傾向があります。
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                ピットソールの口コミ傾向
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ダイエットカフェでの平均評価は2.7点。口コミ数が多いため信頼性のある数値です。
                「姿勢が良くなった気がする」「足の疲れが軽減された」という声がある一方、
                「ダイエット効果は実感できなかった」という厳しい評価も一定数あります。
                体重減少よりも姿勢・歩行の変化を実感している方が多い印象です。
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              ランウェイキュアソール・スリムアップインソールについても、姿勢改善の実感に関するポジティブな声は見られますが、
              いずれの商品も「履くだけで痩せた」という口コミは少数派です。
              インソールはあくまで日常の歩行を改善するサポートツールとして、現実的な期待値を持って使用することが大切です。
            </p>
          </div>

          {/* 5. Time to Effect */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (5) 効果実感までの期間
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              効果実感までの期間は個人差が大きいですが、口コミを分析すると以下の傾向が見られます。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0 font-bold">
                  1〜2週間
                </span>
                <span>
                  歩行時の感覚の変化、姿勢の意識向上を実感する方が多い時期
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0 font-bold">
                  1〜2ヶ月
                </span>
                <span>
                  足の疲れの軽減、歩行の安定感を実感。周囲から姿勢の変化を指摘されるケースも
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 shrink-0 font-bold">
                  2〜3ヶ月
                </span>
                <span>
                  ボディラインの変化を感じ始める方も。ただし食事管理・運動との併用が前提
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              いずれの商品も「最低1〜3ヶ月の継続使用」が推奨されています。
              毎日の通勤や買い物など、歩く機会が多い方ほど効果を実感しやすい傾向があります。
            </p>
          </div>

          {/* 6. Return Policy */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              (6) 返品・保証制度
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              各商品の返品・保証制度は購入先や時期によって異なります。
              購入前に必ず公式サイトで最新の保証内容を確認してください。
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                一般的に、インソールは衛生商品の性質上、開封後の返品が難しいケースがあります。
                サイズに不安がある場合は、まず単品で試してからセット購入するのも一つの方法です。
                各公式サイトのFAQや問い合わせ窓口で、返品条件を事前に確認しておくことをおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Recommendations by Type */}
      <section id="type" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-[#0ea5e9]">
            タイプ別おすすめはコレ！
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="h-1.5 rounded-full bg-[#0ea5e9] mb-4" />
              <h3 className="text-base font-bold text-gray-900 mb-2">
                コスパ重視なら
              </h3>
              <p className="text-lg font-bold text-[#0ea5e9] mb-3">
                ピットソール
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                3足セットで1足無料のコスパの良さに加え、世界特許取得の信頼性、累計200万足の販売実績。
                サイズ展開も豊富で、迷ったらまずピットソールを選べば間違いありません。
              </p>
              <Link href="/pitsole/" className="btn-outline text-sm w-full">
                詳しく見る
              </Link>
            </div>

            <div className="card text-center">
              <div className="h-1.5 rounded-full bg-purple-500 mb-4" />
              <h3 className="text-base font-bold text-gray-900 mb-2">
                姿勢改善重視なら
              </h3>
              <p className="text-lg font-bold text-purple-600 mb-3">
                ランウェイキュアソール
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                足裏3点アーチサポートに特化した設計で、姿勢改善と美脚を同時に目指したい女性におすすめ。
                体重を落とすことよりも、美しい立ち姿・歩き姿を目指す方に最適です。
              </p>
              <Link
                href="/runway-cure-sole/"
                className="btn-outline text-sm w-full"
              >
                詳しく見る
              </Link>
            </div>

            <div className="card text-center">
              <div className="h-1.5 rounded-full bg-emerald-500 mb-4" />
              <h3 className="text-base font-bold text-gray-900 mb-2">
                専門家監修にこだわるなら
              </h3>
              <p className="text-lg font-bold text-emerald-600 mb-3">
                スリムアップインソール
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                YouTube登録者136万人の美容整体師・井上剛志氏が監修。骨格筋に着目した専門的なアプローチで、
                抗菌防臭機能も備えた実用的なインソールです。
              </p>
              <Link
                href="/slimup-insole/"
                className="btn-outline text-sm w-full"
              >
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How to Choose */}
      <section id="how-to-choose" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0ea5e9]">
          ダイエットインソールの正しい選び方5つのポイント
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shrink-0 mt-0.5">
              1
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                サイズが自分の足に合うか確認する
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                インソールの効果はフィット感に大きく左右されます。自分の足のサイズに対応した商品を選びましょう。
                足幅が広い方や甲が高い方は、靴との相性も考慮してください。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                使用する靴のタイプを考える
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                スニーカー、パンプス、ビジネスシューズなど、主にどの靴で使うかを想定しましょう。
                厚みのあるインソールはスニーカー向き、薄型はパンプスにも対応しやすいです。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                技術的な裏付けを確認する
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                特許技術の有無、専門家の監修、臨床データの有無など、技術的な裏付けがある商品は信頼性が高いと言えます。
                ただし、特許があるから必ず効果があるというわけではない点にも注意が必要です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shrink-0 mt-0.5">
              4
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                継続できる価格帯かどうか
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ダイエットインソールは最低2〜3ヶ月の継続使用が推奨されます。
                消耗品でもあるため、複数足をローテーションで使用することを考えると、セット価格やコスパも重要な選択基準です。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0ea5e9] text-white text-sm font-bold shrink-0 mt-0.5">
              5
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                口コミは「姿勢・歩行の変化」に注目する
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                「何キロ痩せた」という口コミよりも、「姿勢が良くなった」「歩きやすくなった」「足の疲れが減った」
                という声に注目しましょう。これらの変化がダイエットインソール本来の効果であり、
                体型の変化はその延長線上にあるものです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Maximize Effect */}
      <section id="maximize" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0ea5e9]">
            効果を最大化する使い方
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">
                毎日の通勤・通学で使う
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                効果を実感するためには、できるだけ毎日使用することが大切です。
                通勤や通学の靴にインソールを入れておけば、意識しなくても毎日使い続けることができます。
                1日の歩行時間が30分以上ある方は特に効果を実感しやすいでしょう。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">
                複数足をローテーションする
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                衛生面を考慮して、2〜3足をローテーションで使用するのがおすすめです。
                セット購入が安くなる商品が多いのは、このローテーション使用を想定しているためです。
                乾燥させながら交互に使うことで、インソールの寿命も延びます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">
                正しい歩き方を意識する
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                インソールを入れるだけでなく、「かかとから着地し、つま先で蹴り出す」正しい歩行を意識しましょう。
                背筋を伸ばし、やや大股で歩くことで、インソールの効果をさらに引き出せます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">
                食事管理・運動と組み合わせる
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                インソール単体に頼るのではなく、バランスの良い食事や適度な運動と組み合わせることで、
                より効果的なダイエットにつながります。
                インソールで姿勢が改善されると、運動のフォームも改善され、トレーニング効果もアップします。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">
                最低3ヶ月は継続する
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                1〜2週間で効果が感じられなくても、すぐに諦めないでください。
                姿勢の変化は徐々に起こるものです。多くの口コミでも、効果を実感するまでに2〜3ヶ月かかったという声が多数あります。
                まずは3ヶ月間、毎日使い続けることを目標にしましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0ea5e9]">
          よくある質問（FAQ）10選
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Q1. ダイエットインソールは本当に痩せますか？",
              a: "インソール単体で劇的に体重が落ちるものではありません。正しい姿勢や歩行をサポートすることで、日常生活での筋肉の使い方を改善し、長期的にボディラインの変化が期待できます。食事管理や適度な運動との併用が効果的です。",
            },
            {
              q: "Q2. どのくらいの期間で効果を実感できますか？",
              a: "個人差がありますが、姿勢の変化は1〜2週間、体型への変化は2〜3ヶ月程度の継続使用が目安です。毎日の歩行時間が長い方ほど実感しやすい傾向があります。",
            },
            {
              q: "Q3. ピットソールの世界特許とは何ですか？",
              a: "BMZ社が取得した足裏アーチサポートに関する特許技術です。足の骨格を正しい位置に導くことで、体幹を安定させ、効率的な歩行をサポートする構造が特許として認められています。",
            },
            {
              q: "Q4. 男性でも使えますか？",
              a: "ピットソール（XS〜Lサイズ、21〜27.5cm対応）とスリムアップインソールは男女兼用です。ランウェイキュアソールはM（22.5〜23.5cm）とL（24〜25cm）の展開で、主に女性向けの設計となっています。",
            },
            {
              q: "Q5. パンプスやヒールにも使えますか？",
              a: "商品によります。薄型設計のものはパンプスにも対応していますが、靴の中の余裕によっては窮屈になることがあります。スニーカーやウォーキングシューズでの使用が最も効果的です。",
            },
            {
              q: "Q6. 外反母趾でも使えますか？",
              a: "ピットソール・スリムアップインソールは外反母趾の方でも使用可能ですが、ランウェイキュアソールは外反母趾の方は注意が必要と記載があります。痛みがある場合は使用を中止し、医師に相談してください。",
            },
            {
              q: "Q7. インソールの寿命はどのくらいですか？",
              a: "使用頻度や体重にもよりますが、一般的には3〜6ヶ月が目安です。クッション性や形状が変形してきたら交換時期です。複数足をローテーションで使うことで寿命を延ばせます。",
            },
            {
              q: "Q8. 他のインソールと併用できますか？",
              a: "基本的にインソールの重ね使いは推奨されていません。靴の中が窮屈になり、逆効果になる可能性があります。元々靴に入っているインソールを取り外してから使用してください。",
            },
            {
              q: "Q9. 洗えますか？お手入れ方法は？",
              a: "多くのインソールは水洗い可能ですが、商品ごとに推奨のお手入れ方法が異なります。一般的には、中性洗剤で手洗いし、陰干しで乾燥させるのが基本です。スリムアップインソールは抗菌防臭機能を搭載しています。",
            },
            {
              q: "Q10. セット購入と単品購入、どちらがおすすめですか？",
              a: "継続使用を前提にするなら、セット購入が圧倒的にお得です。ピットソールは3足セットで1足無料、スリムアップインソールは3足セットで+1足無料と、実質1足あたりの価格が大幅に下がります。ただし、初めて試す方はまず単品で自分の足に合うか確認するのも手です。",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 rounded-lg bg-white"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                <span>{item.q}</span>
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
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 8: Summary */}
      <section id="summary" className="section-primary-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0ea5e9]">
            まとめ
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ダイエットインソールは「履くだけで魔法のように痩せる」ものではありませんが、
            正しい姿勢と歩行をサポートすることで、日常生活の中で無理なく体づくりを目指せる優れたアイテムです。
            今回比較した3商品には、それぞれ明確な強みがあります。
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-white text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong>ピットソール</strong> -
                  世界特許・累計200万足・サイズ展開の豊富さで総合力No.1。迷ったらコレ。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 text-white text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong>ランウェイキュアソール</strong> -
                  3点アーチサポートで姿勢改善・美脚を目指す女性に。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-400 text-white text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>スリムアップインソール</strong> -
                  美容整体師監修の専門的アプローチ。抗菌防臭機能も魅力。
                </span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            大切なのは、自分の目的・足のサイズ・予算に合った商品を選び、最低3ヶ月は継続して使うこと。
            各商品の詳細レビューも参考にしながら、あなたにぴったりの一足を見つけてください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pitsole/" className="btn-cta text-sm">
              1位 ピットソールの詳細を見る
            </Link>
            <Link
              href="/runway-cure-sole/"
              className="btn-outline text-sm"
            >
              2位 ランウェイキュアソールを見る
            </Link>
            <Link href="/slimup-insole/" className="btn-outline text-sm">
              3位 スリムアップインソールを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
