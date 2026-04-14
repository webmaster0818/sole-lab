import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソールの最安値・販売店情報【2026年】｜ソールラボ",
  description:
    "ランウェイキュアソール（Runway Cure Sole）の最安値・販売店情報を徹底調査。FLOReショップ公式サイトの価格、セット割引、楽天・Amazonの取り扱い状況、購入前の注意点まで詳しく解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/runway-cure-sole/price/",
  },
  openGraph: {
    title:
      "ランウェイキュアソールの最安値・販売店情報【2026年】｜ソールラボ",
    description:
      "ランウェイキュアソールを最安値で買えるのはどこ？公式サイトのセット割引や販売チャネル別の価格比較をまとめました。",
    url: "https://sole-laboratory.com/runway-cure-sole/price/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ランウェイキュアソールの最安値・販売店情報【2026年】",
  description:
    "ランウェイキュアソールの最安値・販売店情報を徹底調査。公式サイトのセット割引から楽天・Amazonの取り扱い状況まで。",
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
      name: "ランウェイキュアソールはどこで買えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ランウェイキュアソールはFLOReショップ公式サイトで購入できます。実店舗（ドラッグストア・靴屋など）では販売されていません。公式サイトではセット割引も利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "ランウェイキュアソールの最安値はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最安値はFLOReショップ公式サイトのセット購入です。まとめ買いするほど1足あたりの単価が下がるため、継続使用を考えている方はセット購入がお得です。",
      },
    },
    {
      "@type": "Question",
      name: "楽天やAmazonで購入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "楽天市場やAmazonでは正規の取り扱いがない場合があります。類似品や転売品のリスクがあるため、正規品を確実に手に入れたい場合はFLOReショップ公式サイトからの購入をおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "サイズはどれを選べばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開です。普段の靴のサイズが23.5cmの方はMサイズ、24.0cm以上の方はLサイズがおすすめです。迷った場合は大きめを選ぶと調整しやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "セット割引は公式サイト限定ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、セット割引はFLOReショップ公式サイト限定の特典です。他の販売チャネルではセット割引は適用されません。まとめ買いを検討している方は公式サイトが最もお得です。",
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
      name: "最安値・販売店情報",
      item: "https://sole-laboratory.com/runway-cure-sole/price/",
    },
  ],
};

export default function RunwayCureSolePricePage() {
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

      {/* Breadcrumb */}
      <nav
        aria-label="パンくずリスト"
        className="max-w-4xl mx-auto px-4 py-3 text-xs text-gray-500"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-[#8b5cf6] transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/runway-cure-sole/"
              className="hover:text-[#8b5cf6] transition-colors"
            >
              ランウェイキュアソール
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">最安値・販売店情報</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#8b5cf6] font-semibold mb-3">
            2026年4月最新版
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールの
            <br className="md:hidden" />
            <span className="text-[#8b5cf6]">最安値・販売店</span>情報
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ランウェイキュアソールはどこで買えるのか、最もお得に購入できる方法を徹底調査しました。
            <br className="hidden md:block" />
            公式サイトの割引情報や各販売チャネルの比較をまとめています。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">
            この記事の内容
          </p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a
                href="#cheapest"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                1. 最安値で買えるのはここ！
              </a>
            </li>
            <li>
              <a
                href="#comparison"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                2. 販売チャネル別の価格比較
              </a>
            </li>
            <li>
              <a
                href="#set-discount"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                3. 公式サイトのセット割引詳細
              </a>
            </li>
            <li>
              <a
                href="#rakuten-amazon"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                4. 楽天・Amazonでの取り扱い状況
              </a>
            </li>
            <li>
              <a
                href="#no-store"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                5. 実店舗では買えない
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                6. 購入前のチェックポイント
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a
                href="#summary"
                className="hover:text-[#8b5cf6] transition-colors"
              >
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-14">
        {/* Section 1: 最安値で買えるのはここ！ */}
        <section id="cheapest">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            最安値で買えるのはここ！
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールを最安値で購入できるのは、販売元である<strong>FLOReショップ公式サイト</strong>です。
            公式サイトでは単品購入に加え、セット購入による割引が用意されており、まとめ買いするほど1足あたりの価格が安くなります。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 md:p-6">
            <p className="text-sm font-bold text-[#8b5cf6] mb-2">
              結論：公式サイトのセット購入が最安
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              FLOReショップ公式サイトのセット割引は他のどの販売チャネルよりもお得です。
              セット割引は公式サイト限定の特典で、楽天やAmazonでは適用されません。
              継続使用を前提に考えると、最初からセット購入しておくのが賢い選択です。
            </p>
          </div>
        </section>

        {/* Section 2: 販売チャネル別の価格比較 */}
        <section id="comparison">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            販売チャネル別の価格比較
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールの購入先ごとの特徴を比較しました。
            価格面・安心面ともに公式サイトが最も優れています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    販売チャネル
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    取り扱い
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    セット割引
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    正規品保証
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-purple-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-[#8b5cf6]">
                    FLOReショップ公式
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    あり
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    あり（限定）
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    あり
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    楽天市場
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    出品による
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    なし
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    保証なし
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    Amazon
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    出品による
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    なし
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    保証なし
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    実店舗
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    なし
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    -
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 2026年4月時点の情報です。最新の状況は各サイトでご確認ください。
          </p>
        </section>

        {/* Section 3: 公式サイトのセット割引詳細 */}
        <section id="set-discount">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            公式サイトのセット割引詳細
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            FLOReショップ公式サイトでは、まとめ買いによるセット割引が用意されています。
            インソールは消耗品のため、使い分けや買い替えを考慮すると、複数セットでの購入がおすすめです。
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                単品購入
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                1足分から購入可能。まずは試してみたいという方に向いています。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                セット購入（公式サイト限定）
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                複数足をまとめて購入すると、1足あたりの単価が割引されます。
                通勤用・プライベート用など靴ごとに使い分けたい方や、家族・友人と一緒に購入したい方におすすめです。
                セット割引は公式サイト限定のため、他のショップでは適用されません。
              </p>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>ポイント：</strong>インソールは毎日使うものなので、
              衛生面を考えると数ヶ月ごとの交換が理想です。
              長く使い続けるならセット購入のほうがトータルでお得になります。
            </p>
          </div>
        </section>

        {/* Section 4: 楽天・Amazonでの取り扱い状況 */}
        <section id="rakuten-amazon">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            楽天・Amazonでの取り扱い状況
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            楽天市場やAmazonで「ランウェイキュアソール」と検索すると、出品がヒットすることがあります。
            しかし、これらはFLOReショップの公式出品ではない場合があり、注意が必要です。
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-5">
              <p className="text-sm font-semibold text-red-700 mb-2">
                楽天・Amazonで購入する際の注意点
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">!</span>
                  <span>
                    転売品の場合、定価より高く設定されている可能性がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">!</span>
                  <span>類似品・模倣品が混在しているリスクがある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">!</span>
                  <span>
                    公式のセット割引が適用されないため、割高になる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">!</span>
                  <span>
                    正規品の品質保証やサポートが受けられない場合がある
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            楽天ポイントやAmazonポイントを使いたい気持ちはわかりますが、
            正規品の確実な入手とセット割引のメリットを考えると、やはり<strong>公式サイトからの購入が安心</strong>です。
          </p>
        </section>

        {/* Section 5: 実店舗では買えない */}
        <section id="no-store">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            実店舗では買えない
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールは<strong>通販限定の商品</strong>です。
            以下のような実店舗では取り扱いがありません。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "ドラッグストア",
              "薬局",
              "靴屋・シューズショップ",
              "ドン・キホーテ",
              "ロフト・東急ハンズ",
              "百貨店",
            ].map((store) => (
              <div
                key={store}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
              >
                <p className="text-xs text-gray-400 mb-1">取扱なし</p>
                <p className="text-sm font-medium text-gray-700">{store}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            「店頭で実物を見てから買いたい」という方には残念ですが、
            ランウェイキュアソールはオンライン購入のみとなっています。
            公式サイトにはサイズガイドや商品の詳細情報が掲載されているので、
            購入前にしっかり確認しておきましょう。
          </p>
        </section>

        {/* Section 6: 購入前のチェックポイント */}
        <section id="checklist">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            購入前のチェックポイント
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールを購入する前に、以下のポイントを確認しておくとスムーズです。
          </p>
          <div className="space-y-3">
            {[
              {
                title: "サイズの確認",
                text: "M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開です。普段履いている靴のサイズを基準に選びましょう。迷ったら大きめのサイズが安心です。",
              },
              {
                title: "使用する靴との相性",
                text: "薄型設計ですが、つま先が極端に細いパンプスや、すでにインソールが厚い靴には入らない場合があります。スニーカーやローヒールの靴との相性が良好です。",
              },
              {
                title: "購入先の確認",
                text: "FLOReショップ公式サイトが正規の販売元です。セット割引は公式サイト限定なので、まとめ買いを検討している方は必ず公式サイトから購入しましょう。",
              },
              {
                title: "女性向け商品であること",
                text: "ランウェイキュアソールは女性向けのサイズ展開（最大25.0cm）です。男性の方は、より大きなサイズに対応した別商品の検討をおすすめします。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-5"
              >
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: よくある質問 */}
        <section id="faq">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "ランウェイキュアソールはどこで買えますか？",
                a: "FLOReショップ公式サイトが正規の販売元です。実店舗（ドラッグストア・靴屋など）では販売されていません。公式サイトではセット割引も利用できます。",
              },
              {
                q: "最安値で買う方法は？",
                a: "FLOReショップ公式サイトのセット購入が最もお得です。まとめ買いするほど1足あたりの単価が下がります。セット割引は公式サイト限定の特典です。",
              },
              {
                q: "楽天やAmazonで買っても大丈夫？",
                a: "楽天市場やAmazonでは正規の取り扱いがない場合があります。転売品や類似品のリスクがあるため、正規品を確実に手に入れたい方は公式サイトからの購入がおすすめです。",
              },
              {
                q: "サイズはどう選べばいい？",
                a: "M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズです。普段の靴のサイズに合わせて選びましょう。サイズに迷った場合は大きめのLサイズをおすすめします。",
              },
              {
                q: "セット割引はどこで使える？",
                a: "セット割引はFLOReショップ公式サイト限定の特典です。楽天やAmazonなど他の販売チャネルでは適用されません。まとめ買いを考えている方は必ず公式サイトから購入しましょう。",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-gray-200 rounded-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 text-sm font-semibold text-gray-900">
                  <span>{faq.q}</span>
                  <span className="ml-2 text-[#8b5cf6] group-open:rotate-180 transition-transform">
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 8: まとめ */}
        <section id="summary">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#8b5cf6]">
            まとめ
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールの購入先と最安値情報をまとめると、以下のとおりです。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 md:p-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] font-bold mt-0.5 shrink-0">
                  1.
                </span>
                <span>
                  <strong>最安値はFLOReショップ公式サイトのセット購入</strong>
                  。セット割引は公式限定の特典です。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] font-bold mt-0.5 shrink-0">
                  2.
                </span>
                <span>
                  楽天・Amazonでは転売品や類似品のリスクがあるため、<strong>公式サイトが最も安心</strong>。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] font-bold mt-0.5 shrink-0">
                  3.
                </span>
                <span>
                  実店舗では一切販売されていない<strong>通販限定商品</strong>です。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] font-bold mt-0.5 shrink-0">
                  4.
                </span>
                <span>
                  サイズは<strong>M（22.5〜23.5cm）とL（24.0〜25.0cm）</strong>の2種類。女性向けの商品です。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] font-bold mt-0.5 shrink-0">
                  5.
                </span>
                <span>
                  継続使用を考えるなら、最初からセット購入しておくのがトータルでお得です。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            ランウェイキュアソールは毎日の歩行に取り入れることで効果を実感しやすい商品です。
            お得に購入して、正しい姿勢と美しい歩き方を手に入れましょう。
          </p>
        </section>

        {/* Related Link */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            ランウェイキュアソールの口コミ・効果を詳しく知りたい方はこちら
          </p>
          <Link
            href="/runway-cure-sole/"
            className="inline-block bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            口コミ・効果の詳細を見る
          </Link>
        </div>
      </div>
    </>
  );
}
