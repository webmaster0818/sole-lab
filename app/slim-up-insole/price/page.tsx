import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "スリムアップインソールの最安値・販売店情報【2026年】｜ソールラボ",
  description:
    "スリムアップインソールの最安値はどこ？公式サイト・楽天・Amazon・Yahoo!ショッピングの価格比較や販売店情報をまとめました。市販では買えない理由やお得なセット購入も解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/slim-up-insole/price/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "スリムアップインソール",
  description:
    "美容整体師・井上剛志監修の骨格筋サポートインソール。立体サポート構造と抗菌防臭機能を搭載。",
  brand: {
    "@type": "Brand",
    name: "イッティ",
  },
  offers: [
    {
      "@type": "Offer",
      name: "単品",
      priceCurrency: "JPY",
      price: "6980",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "イッティ公式",
      },
    },
    {
      "@type": "Offer",
      name: "2足セット",
      priceCurrency: "JPY",
      price: "11980",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "イッティ公式",
      },
    },
    {
      "@type": "Offer",
      name: "3足セット＋1足無料",
      priceCurrency: "JPY",
      price: "17920",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "イッティ公式",
      },
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "スリムアップインソールの最安値・販売店情報【2026年】",
  description:
    "スリムアップインソールの最安値・販売店情報を徹底調査。公式サイト・楽天・Amazon・Yahooの価格比較やお得なセット購入を解説。",
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
      name: "スリムアップインソールの最安値はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最安値は公式サイトの3足セット＋1足無料プレゼント（17,920円・1足あたり4,480円）です。単品購入の場合はどの販売チャネルでも6,980円（税込）です。",
      },
    },
    {
      "@type": "Question",
      name: "スリムアップインソールはドラッグストアで買えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、ドラッグストアやドンキホーテなどの実店舗では販売されていません。公式サイト・楽天市場・Amazon・Yahoo!ショッピングのオンライン販売のみです。",
      },
    },
    {
      "@type": "Question",
      name: "公式サイトで購入するメリットは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトではセット割引（最大36%OFF）、正規品の保証、在庫の安定供給といったメリットがあります。また、3足セットでは1足無料プレゼントの特典も用意されています。",
      },
    },
    {
      "@type": "Question",
      name: "楽天やAmazonでも正規品を購入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、楽天市場・Amazon・Yahoo!ショッピングでもイッティ公式が出店しており正規品を購入できます。ただし、セット割引の内容は公式サイトと異なる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "何足セットで買うのが一番お得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3足セット＋1足無料プレゼント（17,920円）が最もお得です。実質4足で1足あたり4,480円となり、単品購入より約36%もお得になります。",
      },
    },
  ],
};

export default function SlimUpInsolePricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
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
          <li>
            <Link
              href="/slim-up-insole/"
              className="hover:text-[#0ea5e9] transition-colors"
            >
              スリムアップインソール
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">最安値・販売店情報</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-emerald-600 font-semibold mb-3">
            2026年4月最新版 ・ 価格徹底調査
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            スリムアップインソールの
            <br className="md:hidden" />
            <span className="text-emerald-600">最安値・販売店情報</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            美容整体師・井上剛志監修のスリムアップインソールをどこで買うのが一番お得か、
            <br className="hidden md:block" />
            公式サイト・楽天・Amazon・Yahoo!の価格を徹底比較しました。
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
                href="#conclusion"
                className="hover:text-emerald-600 transition-colors"
              >
                1. 【結論】最安値で買えるのはここ！
              </a>
            </li>
            <li>
              <a
                href="#price-comparison"
                className="hover:text-emerald-600 transition-colors"
              >
                2. 販売チャネル別の価格比較表
              </a>
            </li>
            <li>
              <a
                href="#official-benefits"
                className="hover:text-emerald-600 transition-colors"
              >
                3. 公式サイトで買うメリット
              </a>
            </li>
            <li>
              <a
                href="#marketplace-comparison"
                className="hover:text-emerald-600 transition-colors"
              >
                4. 楽天・Amazon・Yahoo比較
              </a>
            </li>
            <li>
              <a
                href="#no-retail"
                className="hover:text-emerald-600 transition-colors"
              >
                5. 市販では買えない！
              </a>
            </li>
            <li>
              <a
                href="#set-simulation"
                className="hover:text-emerald-600 transition-colors"
              >
                6. セット購入がお得！価格シミュレーション
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-emerald-600 transition-colors"
              >
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a
                href="#summary"
                className="hover:text-emerald-600 transition-colors"
              >
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 1: Conclusion */}
      <section id="conclusion" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          【結論】最安値で買えるのはここ！
        </h2>

        <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-6 md:p-8 mb-6">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            スリムアップインソールの<strong className="text-emerald-700">最安値は公式サイトの3足セット＋1足無料プレゼント</strong>です。
            17,920円（税込）で実質4足手に入り、<strong className="text-emerald-700">1足あたり4,480円</strong>と単品購入の約36%OFFになります。
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            販売元はイッティ公式で、購入できるのは<strong>公式サイト・楽天市場・Amazon・Yahoo!ショッピング</strong>の4つのオンラインチャネルのみ。
            ドラッグストアやドンキホーテなど市販の実店舗では取り扱いがありません。
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            単品で1足だけ試したい場合はどのショップでも6,980円（税込）ですが、
            継続使用を見据えるならセット購入が圧倒的にお得です。以下で詳しく比較していきます。
          </p>
        </div>
      </section>

      {/* Section 2: Price Comparison Table */}
      <section id="price-comparison" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          販売チャネル別の価格比較表
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          スリムアップインソールを購入できる全チャネルの価格を一覧でまとめました。
          すべて税込価格で、2026年4月時点の情報です。
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-emerald-600 text-white">
                <th className="py-3 px-4 text-left font-semibold rounded-tl-lg">
                  販売チャネル
                </th>
                <th className="py-3 px-4 text-right font-semibold">単品</th>
                <th className="py-3 px-4 text-right font-semibold">
                  2足セット
                </th>
                <th className="py-3 px-4 text-right font-semibold rounded-tr-lg">
                  3足セット
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-50 border-b border-emerald-200">
                <td className="py-3 px-4 font-semibold text-emerald-700">
                  公式サイト
                </td>
                <td className="py-3 px-4 text-right">6,980円</td>
                <td className="py-3 px-4 text-right">11,980円</td>
                <td className="py-3 px-4 text-right font-bold text-emerald-700">
                  17,920円
                  <br />
                  <span className="text-xs text-emerald-600">
                    +1足無料
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-3 px-4 font-semibold text-gray-700">
                  楽天市場
                </td>
                <td className="py-3 px-4 text-right">6,980円</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Amazon
                </td>
                <td className="py-3 px-4 text-right">6,980円</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Yahoo!ショッピング
                </td>
                <td className="py-3 px-4 text-right">6,980円</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
                <td className="py-3 px-4 text-right text-gray-400">--</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 px-4 font-semibold text-gray-400 rounded-bl-lg">
                  ドラッグストア等
                </td>
                <td className="py-3 px-4 text-right text-gray-400">取扱なし</td>
                <td className="py-3 px-4 text-right text-gray-400">取扱なし</td>
                <td className="py-3 px-4 text-right text-gray-400 rounded-br-lg">
                  取扱なし
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500">
          ※「--」はセット販売の取り扱いが確認できなかったチャネルです。楽天・Amazon・Yahooでのセット販売は時期により変動する可能性があります。
        </p>
      </section>

      {/* Section 3: Official Site Benefits */}
      <section id="official-benefits" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          公式サイトで買うメリット
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          スリムアップインソールは複数のショップで購入できますが、
          公式サイトならではのメリットがいくつかあります。
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {[
            {
              title: "セット割引が充実",
              desc: "2足セット・3足セットの割引価格は公式サイト限定。3足セットなら1足無料プレゼントで実質4足分が手に入ります。",
            },
            {
              title: "正規品の保証",
              desc: "イッティ公式が直接販売するため、類似品・模倣品のリスクがありません。品質面で安心して購入できます。",
            },
            {
              title: "在庫の安定供給",
              desc: "人気商品のためAmazonや楽天では在庫切れになることもありますが、公式サイトは比較的安定して在庫が確保されています。",
            },
            {
              title: "最新キャンペーン情報",
              desc: "期間限定のキャンペーンや特典情報は公式サイトが最も早く反映されます。お得なタイミングを逃しにくいのもメリットです。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-yellow-700">注意点：</strong>
            公式サイト以外のショップでも正規品は購入できますが、
            セット割引や特典の内容は公式サイトと異なる場合があります。
            まとめ買いを検討している方は公式サイトの価格を確認してから購入することをおすすめします。
          </p>
        </div>
      </section>

      {/* Section 4: Marketplace Comparison */}
      <section
        id="marketplace-comparison"
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          楽天・Amazon・Yahoo比較
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          公式サイト以外の大手ECモールでも購入できます。
          それぞれの特徴を比較してみましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
              楽天市場
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              単品6,980円（税込）で購入可能。楽天ポイントが貯まる・使えるのが最大のメリットです。
              楽天スーパーSALEやお買い物マラソンのタイミングでポイント還元率がアップするため、
              楽天経済圏をよく利用する方は実質的にお得になる場合があります。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
              Amazon
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              単品6,980円（税込）で購入可能。Amazonプライム会員なら配送が早く、
              翌日届く場合もあります。普段からAmazonをよく利用する方にはポイント還元や
              配送スピードの面で便利です。ただし、在庫状況によっては一時的に品切れになることがあります。
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
              Yahoo!ショッピング
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              単品6,980円（税込）で購入可能。PayPayポイントが貯まるため、
              PayPayユーザーにはメリットがあります。5のつく日やゾロ目の日など
              ポイントアップキャンペーンを活用すると実質的な負担を抑えられます。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>ポイント：</strong>
            どのECモールでも単品価格は同じ6,980円です。
            普段よく使うショップのポイント還元を活用するのがスマートな選び方といえます。
            ただし、<strong>セット割引は公式サイト限定</strong>のため、
            2足以上の購入を検討しているなら公式サイトが最もお得です。
          </p>
        </div>
      </section>

      {/* Section 5: No Retail */}
      <section id="no-retail" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          市販では買えない！
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          「スリムアップインソールはドラッグストアやドンキで買える？」というお問い合わせが多いですが、
          残念ながら実店舗での市販はされていません。
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
          <h3 className="text-sm md:text-base font-bold text-gray-900 mb-4">
            取り扱いが確認できなかった店舗
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "マツモトキヨシ",
              "ウエルシア",
              "ツルハドラッグ",
              "ドン・キホーテ",
              "ロフト",
              "東急ハンズ",
              "イオン",
              "ヨドバシカメラ",
              "ビックカメラ",
            ].map((store) => (
              <div
                key={store}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <span className="text-red-400 text-base" aria-hidden="true">
                  &#10005;
                </span>
                {store}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          美容整体師・井上剛志氏が監修した専門的な商品のため、
          一般的な小売店での流通ルートを持たず、オンライン限定販売となっています。
        </p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          フリマアプリ（メルカリ・ラクマ等）での出品が見つかることもありますが、
          品質の保証がないため公式の販売チャネルからの購入をおすすめします。
        </p>
      </section>

      {/* Section 6: Set Purchase Simulation */}
      <section id="set-simulation" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          セット購入がお得！価格シミュレーション
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          スリムアップインソールは毎日使用するもの。インソールの寿命（3〜6ヶ月）を考えると、
          交換用を含めてまとめ買いするのが賢い選択です。セットごとの価格を詳しく見てみましょう。
        </p>

        <div className="space-y-4 mb-8">
          {/* Single */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm md:text-base font-bold text-gray-900">
                単品（1足）
              </h3>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                お試し
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              6,980<span className="text-sm font-normal text-gray-500">円（税込）</span>
            </p>
            <p className="text-xs text-gray-500">1足あたり 6,980円</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              まずは1足試してみたい方向け。効果を実感してからセット購入に切り替えるのもありです。
            </p>
          </div>

          {/* 2-Set */}
          <div className="bg-white border border-emerald-200 rounded-xl p-5 md:p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm md:text-base font-bold text-gray-900">
                2足セット
              </h3>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                14%OFF
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              11,980<span className="text-sm font-normal text-gray-500">円（税込）</span>
            </p>
            <p className="text-xs text-gray-500">
              1足あたり 5,990円
              <span className="text-emerald-600 ml-2">
                （単品より990円お得）
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              普段使い用と交換用の2足。単品を2回購入するより1,980円お得です。
            </p>
          </div>

          {/* 3-Set */}
          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-5 md:p-6 relative">
            <div className="absolute -top-3 left-5 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              最安値
            </div>
            <div className="flex items-start justify-between mb-3 mt-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900">
                3足セット ＋ 1足無料プレゼント
              </h3>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                36%OFF
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
              17,920<span className="text-sm font-normal text-gray-500">円（税込）</span>
            </p>
            <p className="text-xs text-gray-500">
              実質4足 → 1足あたり 4,480円
              <span className="text-emerald-600 ml-2">
                （単品より2,500円お得）
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              最もお得なプラン。3足分の料金で4足届くため、
              家族や友人とシェアしたり、長期間の交換用としてストックするのに最適です。
              単品で4足買うと27,920円なので、<strong className="text-emerald-700">10,000円もお得</strong>になります。
            </p>
          </div>
        </div>

        {/* Comparison Summary */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <h3 className="text-sm md:text-base font-bold text-gray-900 mb-4">
            単品購入 vs セット購入の差額まとめ
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-3 text-left font-semibold text-gray-700">
                    プラン
                  </th>
                  <th className="py-2 px-3 text-right font-semibold text-gray-700">
                    合計額
                  </th>
                  <th className="py-2 px-3 text-right font-semibold text-gray-700">
                    1足単価
                  </th>
                  <th className="py-2 px-3 text-right font-semibold text-gray-700">
                    単品比 節約額
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3 text-gray-700">単品 x1</td>
                  <td className="py-2 px-3 text-right">6,980円</td>
                  <td className="py-2 px-3 text-right">6,980円</td>
                  <td className="py-2 px-3 text-right text-gray-400">--</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3 text-gray-700">2足セット</td>
                  <td className="py-2 px-3 text-right">11,980円</td>
                  <td className="py-2 px-3 text-right">5,990円</td>
                  <td className="py-2 px-3 text-right text-emerald-600 font-semibold">
                    1,980円
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-emerald-700 font-semibold">
                    3足+1足無料
                  </td>
                  <td className="py-2 px-3 text-right font-semibold">
                    17,920円
                  </td>
                  <td className="py-2 px-3 text-right font-semibold text-emerald-700">
                    4,480円
                  </td>
                  <td className="py-2 px-3 text-right text-emerald-600 font-bold">
                    10,000円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "スリムアップインソールの最安値はどこですか？",
              a: "最安値は公式サイトの3足セット＋1足無料プレゼント（17,920円・1足あたり4,480円）です。単品購入の場合はどの販売チャネルでも6,980円（税込）で同一価格となっています。",
            },
            {
              q: "スリムアップインソールはドラッグストアで買えますか？",
              a: "いいえ、ドラッグストア（マツモトキヨシ、ウエルシア、ツルハ等）やドンキホーテなどの実店舗では販売されていません。公式サイト・楽天市場・Amazon・Yahoo!ショッピングのオンライン販売のみです。",
            },
            {
              q: "公式サイトで購入するメリットは何ですか？",
              a: "公式サイトではセット割引（最大36%OFF）、正規品の保証、在庫の安定供給といったメリットがあります。3足セットでは1足無料プレゼントの特典も付きます。単品であればどのショップでも同価格のため、ポイント還元の高いショップを選ぶのもありです。",
            },
            {
              q: "楽天やAmazonでも正規品を購入できますか？",
              a: "はい、楽天市場・Amazon・Yahoo!ショッピングでもイッティ公式が出店しており正規品を購入できます。ただし、セット割引の内容は公式サイトと異なる場合があるため、まとめ買いの際は公式サイトの価格と比較することをおすすめします。",
            },
            {
              q: "何足セットで買うのが一番お得ですか？",
              a: "3足セット＋1足無料プレゼント（17,920円）が最もお得です。実質4足で1足あたり4,480円、単品で4足購入する場合と比べて10,000円の節約になります。インソールの交換目安は3〜6ヶ月のため、長期的な使用を考えるとまとめ買いが経済的です。",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="bg-white border border-gray-200 rounded-xl group"
            >
              <summary className="p-5 cursor-pointer text-sm md:text-base font-semibold text-gray-900 list-none flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span
                  className="text-gray-400 group-open:rotate-180 transition-transform shrink-0"
                  aria-hidden="true"
                >
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 8: Summary */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          まとめ
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 mb-6">
          <ul className="space-y-3 text-sm md:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
              <span>
                <strong>最安値</strong>は公式サイトの3足セット＋1足無料（17,920円/1足あたり4,480円）
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
              <span>
                <strong>単品価格</strong>はどのショップでも6,980円（税込）で同一
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
              <span>
                <strong>購入先</strong>は公式サイト・楽天・Amazon・Yahoo!の4チャネルのみ
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
              <span>
                <strong>市販なし</strong> - ドラッグストア・ドンキ等の実店舗では買えない
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
              <span>
                <strong>セット購入</strong>が圧倒的にお得（3足セットなら単品比で最大10,000円節約）
              </span>
            </li>
          </ul>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          スリムアップインソール（美容整体師・井上剛志監修）は、どこで買っても単品価格は変わりません。
          まずは1足試してみたい方はお好みのショップで、
          継続利用を考えている方は公式サイトのセット割引を活用するのがベストな選択です。
        </p>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          インソールの効果を実感するには2〜3ヶ月の継続使用が推奨されています。
          交換サイクルも考慮すると、最初からまとめ買いしておくのが結果的に一番お得で手間もかかりません。
        </p>

        {/* Internal link */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            スリムアップインソールの口コミや効果の詳細は
            <Link
              href="/slim-up-insole/"
              className="text-emerald-600 hover:text-emerald-700 underline transition-colors font-semibold"
            >
              スリムアップインソールの口コミ・効果を徹底検証
            </Link>
            のページで詳しく解説しています。
          </p>
        </div>
      </section>
    </>
  );
}
