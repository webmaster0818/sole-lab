import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ピットソールの最安値は？どこで買える？販売店比較【2026年】｜ソールラボ",
  description:
    "ピットソール(Pitsole)の最安値・販売店を徹底比較。公式サイト・楽天・Amazonの価格差、セット割引の詳細、偽物リスクまで解説。最安は3足セットで実質1足4,934円。",
  alternates: {
    canonical: "https://sole-laboratory.com/pitsole/price/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソールの最安値は？どこで買える？販売店比較【2026年】",
  description:
    "ピットソール(Pitsole)の最安値・販売店を徹底比較。公式サイト・楽天・Amazonの価格差、セット割引の詳細、偽物リスクまで解説。",
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
      name: "ピットソールの最安値はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最安値は3足セットまたは6足セットの購入で、実質1足あたり4,934円（税込）です。公式サイトまたは楽天の公式ショップで購入できます。単品購入の場合は6,578円（税込）です。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールはどこで買えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイト（BACCHUS ONLINE SHOP）、楽天市場（公式ショップ）、Amazonで購入できます。ドラッグストアやドンキホーテなどの実店舗では販売されていません。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールは楽天とAmazonどちらがお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "楽天は公式ショップ（BACCHUS ONLINE SHOP）が出店しており、セット割引に加えてポイント還元があるためお得です。Amazonは単品販売のみでセット割引がないため、複数足購入する場合は楽天の方がお得です。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールの偽物はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "メルカリなどのフリマアプリや非正規ショップでは偽物・使用済み品が出回っている可能性があります。正規品保証があるのは公式サイト、楽天公式ショップ、Amazon公式ストアのみです。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールのセット購入は本当にお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3足セット（19,734円）は1足無料プレゼントで計4足届くため、1足あたり4,934円と単品より約1,644円お得です。6足セット（39,468円）は2足無料で計8足届き、同じく1足4,934円です。洗い替えやサイズ違いを揃えたい方にはセット購入がおすすめです。",
      },
    },
  ],
};

const priceComparison = [
  {
    channel: "公式サイト",
    shopName: "BACCHUS ONLINE SHOP",
    single: "6,578円",
    set3: "19,734円（+1足無料）",
    set6: "39,468円（+2足無料）",
    shipping: "送料無料",
    guarantee: true,
    points: false,
    note: "正規品保証あり",
  },
  {
    channel: "楽天市場",
    shopName: "BACCHUS ONLINE SHOP",
    single: "6,578円",
    set3: "19,734円（+1足無料）",
    set6: "39,468円（+2足無料）",
    shipping: "送料無料",
    guarantee: true,
    points: true,
    note: "ポイント還元あり",
  },
  {
    channel: "Amazon",
    shopName: "単品販売のみ",
    single: "6,578円",
    set3: "取扱なし",
    set6: "取扱なし",
    shipping: "条件付き送料無料",
    guarantee: true,
    points: false,
    note: "セット割引なし",
  },
  {
    channel: "メルカリ等",
    shopName: "個人出品",
    single: "変動あり",
    set3: "—",
    set6: "—",
    shipping: "出品者による",
    guarantee: false,
    points: false,
    note: "偽物・中古リスクあり",
  },
];

export default function PitsolePricePage() {
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
      <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-amber-600 font-medium mb-2">
            価格比較ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソールの最安値は？
            <br />
            <span className="text-amber-600">販売店を徹底比較</span>
            【2026年最新】
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ピットソール（Pitsole）はどこで買えるのか、最安値はいくらなのかを徹底調査。
            公式サイト・楽天・Amazonの価格差、セット割引の仕組み、偽物・転売品のリスクまで詳しく解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <time dateTime="2026-04-08">2026年4月8日</time>
            <span>|</span>
            <span>ソールラボ編集部</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* 目次 */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="font-bold text-gray-900 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-[#0ea5e9]">
            <li>
              <a href="#conclusion" className="hover:underline">
                1. 【結論】最安値で買えるのはここ！
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 販売チャネル別の価格比較表
              </a>
            </li>
            <li>
              <a href="#official" className="hover:underline">
                3. 公式サイトで買うメリット
              </a>
            </li>
            <li>
              <a href="#rakuten" className="hover:underline">
                4. 楽天で買うメリット（ポイント還元）
              </a>
            </li>
            <li>
              <a href="#amazon" className="hover:underline">
                5. Amazonで買う場合の注意点
              </a>
            </li>
            <li>
              <a href="#retail" className="hover:underline">
                6. 市販では買えない！実店舗の状況
              </a>
            </li>
            <li>
              <a href="#fake" className="hover:underline">
                7. 【要注意】偽物・転売品のリスク
              </a>
            </li>
            <li>
              <a href="#simulation" className="hover:underline">
                8. セット購入がお得！価格シミュレーション
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                9. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:underline">
                10. まとめ
              </a>
            </li>
          </ol>
        </nav>

        {/* H2: 結論 */}
        <section id="conclusion">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            【結論】最安値で買えるのはここ！
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <p className="text-lg font-bold text-amber-800 mb-3">
              最安値は「3足セット」または「6足セット」で実質1足4,934円（税込）
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ピットソールの最安値は、公式サイトまたは楽天公式ショップの<strong>セット購入</strong>です。
              3足セット（19,734円）なら1足無料プレゼントで計4足届くため、
              <strong>1足あたり4,934円</strong>と単品より約25%もお得になります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">単品購入</p>
                <p className="text-2xl font-bold text-gray-900">6,578円</p>
                <p className="text-xs text-gray-500">1足あたり6,578円</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center ring-2 ring-amber-400">
                <p className="text-xs text-amber-600 font-bold mb-1">おすすめ</p>
                <p className="text-2xl font-bold text-amber-600">19,734円</p>
                <p className="text-xs text-gray-700 font-medium">3足+1足無料 = 実質4,934円/足</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">6足セット</p>
                <p className="text-2xl font-bold text-gray-900">39,468円</p>
                <p className="text-xs text-gray-700">6足+2足無料 = 実質4,934円/足</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            結論として、<strong>初めての方には3足セット</strong>がおすすめです。
            洗い替え用やサイズ違いも揃えられるうえ、1足無料で実質25%オフ。
            家族でシェアしたい方は6足セットも同じ単価でさらにお得です。
          </p>
        </section>

        {/* H2: 価格比較表 */}
        <section id="comparison">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            販売チャネル別の価格比較表
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールが購入できる販売チャネルと価格を一覧にまとめました。
            2026年4月時点の最新情報です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold text-gray-900 border-b-2 border-gray-300">
                    販売チャネル
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-gray-300">
                    単品
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-gray-300">
                    3足セット
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-gray-300">
                    正規品保証
                  </th>
                  <th className="text-center p-3 font-bold text-gray-900 border-b-2 border-gray-300">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((item) => (
                  <tr
                    key={item.channel}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium text-gray-900">
                      {item.channel}
                      <br />
                      <span className="text-xs text-gray-500">
                        {item.shopName}
                      </span>
                    </td>
                    <td className="p-3 text-center text-gray-700">
                      {item.single}
                    </td>
                    <td className="p-3 text-center text-gray-700">
                      {item.set3}
                    </td>
                    <td className="p-3 text-center">
                      {item.guarantee ? (
                        <span className="text-green-600 font-bold">○</span>
                      ) : (
                        <span className="text-red-500 font-bold">×</span>
                      )}
                    </td>
                    <td className="p-3 text-center text-xs text-gray-600">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 価格はすべて税込表示。2026年4月時点の情報です。
          </p>
        </section>

        {/* H2: 公式サイトのメリット */}
        <section id="official">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            公式サイトで買うメリット
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールの公式販売元は<strong>BACCHUS ONLINE SHOP</strong>です。
            公式サイトで購入する最大のメリットは、確実に正規品が届く安心感とセット割引の適用です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 text-sm mb-2">メリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>正規品保証で偽物リスクなし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>全品送料無料</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>3足・6足セットの無料プレゼント特典</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>サイズ交換対応（未使用品・7日以内）</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 text-sm mb-2">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>楽天のようなポイント還元はなし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>支払い方法が限られる場合がある</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            楽天ポイントを使わない方や、確実に公式ルートで購入したい方は公式サイトがベストです。
            セット割引は公式サイトと楽天で同額なので、純粋に「安心感」で選ぶなら公式サイトが最適でしょう。
          </p>
        </section>

        {/* H2: 楽天のメリット */}
        <section id="rakuten">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            楽天で買うメリット（ポイント還元）
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            楽天市場には公式販売元の<strong>BACCHUS ONLINE SHOP</strong>が出店しています。
            つまり、楽天で購入しても公式サイトと同じ正規品が届きます。
          </p>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-rose-800 mb-3">楽天で買う最大のメリットはポイント還元</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0">1.</span>
                <span>
                  <strong>通常ポイント1%</strong> + SPU倍率でさらにアップ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0">2.</span>
                <span>
                  <strong>お買い物マラソン</strong>期間なら最大+9倍のチャンス
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0">3.</span>
                <span>
                  <strong>5と0のつく日</strong>はポイント+2倍
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0">4.</span>
                <span>
                  楽天カード利用で<strong>ポイント+2倍</strong>
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            例えば、3足セット（19,734円）をお買い物マラソン中に楽天カードで購入すると、
            数百円〜数千円分のポイントが還元される場合があります。
            価格自体は公式サイトと同じですが、<strong>ポイント分を考慮すると楽天が実質最安値</strong>になる可能性があります。
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            楽天経済圏を活用している方は、タイミングを見計らって楽天で購入するのが最もお得な買い方です。
          </p>
        </section>

        {/* H2: Amazon */}
        <section id="amazon">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            Amazonで買う場合の注意点
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Amazonでもピットソールは購入可能ですが、公式サイトや楽天と比べていくつかの注意点があります。
          </p>
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-yellow-800 mb-3">Amazonで購入する際の注意点</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold shrink-0">!</span>
                <span>
                  <strong>セット割引がない</strong> — 3足セット・6足セットの取り扱いがなく、単品（6,578円）のみ。
                  複数足が必要な場合は割高になります。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold shrink-0">!</span>
                <span>
                  <strong>出品者の確認が必要</strong> — Amazon Marketplaceには複数の出品者がいる場合があります。
                  必ず販売元が正規店であることを確認してください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold shrink-0">!</span>
                <span>
                  <strong>送料条件あり</strong> — 一定金額以上で送料無料ですが、条件を満たさない場合は送料がかかります。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            「とにかくAmazonで買い物をまとめたい」「Amazonギフト券の残高がある」という方以外は、
            公式サイトまたは楽天での購入がおすすめです。特に複数足を購入する場合、
            Amazonではセット割引が適用されないため<strong>最大で数千円の差</strong>が生まれます。
          </p>
        </section>

        {/* H2: 市販 */}
        <section id="retail">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            市販では買えない！実店舗の状況
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            「ドラッグストアやドンキで見かけたことがない」という声は多いですが、
            それもそのはず、ピットソールは<strong>通販限定</strong>の商品です。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              "ドラッグストア（マツキヨ等）",
              "ドン・キホーテ",
              "東急ハンズ",
              "ロフト",
              "イオン",
              "ABCマート",
            ].map((store) => (
              <div
                key={store}
                className="bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-600"
              >
                <span className="text-red-500 font-bold text-lg block mb-1">
                  &#10007;
                </span>
                {store}
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            いずれの実店舗でも取り扱いはありません。
            ピットソールは公式サイト・楽天・Amazonの<strong>オンライン販売のみ</strong>です。
            「店頭で実物を見てから買いたい」という方には残念ですが、
            公式サイトではサイズ交換にも対応しているので、ネット購入でもサイズの心配は少ないでしょう。
          </p>
        </section>

        {/* H2: 偽物リスク */}
        <section id="fake">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            【要注意】偽物・転売品のリスク
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールは人気商品のため、<strong>メルカリやヤフオクなどのフリマアプリ</strong>では
            偽物や使用済み品が出回っている可能性があります。安さに飛びつくと思わぬトラブルに巻き込まれることも。
          </p>
          <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-red-800 mb-3">フリマアプリ・非正規ショップのリスク</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">1.</span>
                <span>
                  <strong>偽物の可能性</strong> — 見た目が似ていても、世界特許の骨格補整構造が再現されていない模倣品が存在します。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">2.</span>
                <span>
                  <strong>使用済み・劣化品</strong> — 一度使用されたインソールは衛生面でも機能面でも問題があります。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">3.</span>
                <span>
                  <strong>返品・交換不可</strong> — 個人間取引では初期不良やサイズ交換に対応してもらえません。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">4.</span>
                <span>
                  <strong>保証対象外</strong> — 正規販売ルート以外の購入はメーカー保証の対象外です。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            数百円〜千円程度の差額で偽物リスクを負うのは割に合いません。
            <strong>必ず公式サイト・楽天公式ショップ・Amazon公式ストア</strong>から購入しましょう。
            正規品にはBACCHUSのロゴと製品番号が記載されています。
          </p>
        </section>

        {/* H2: 価格シミュレーション */}
        <section id="simulation">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            セット購入がお得！価格シミュレーション
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            「何足買えばどれくらいお得なのか？」を具体的な数字でシミュレーションしてみましょう。
          </p>
          <div className="space-y-4 mb-6">
            {/* 単品 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">単品購入（1足）</h3>
                <span className="text-lg font-bold text-gray-900">6,578円</span>
              </div>
              <p className="text-sm text-gray-600">
                1足あたり: 6,578円 — まずは1足試したい方向け。
              </p>
            </div>

            {/* 3足セット */}
            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 relative">
              <span className="absolute -top-3 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ
              </span>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">3足セット + 1足無料</h3>
                <span className="text-lg font-bold text-amber-600">19,734円</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                支払いは3足分 → <strong>計4足届く</strong>（1足あたり4,934円）
              </p>
              <div className="bg-white rounded-lg p-3 text-sm">
                <p className="text-gray-600">
                  単品4足分との比較: 6,578円 × 4 = 26,312円
                </p>
                <p className="text-amber-700 font-bold">
                  → セットなら6,578円お得！（約25%オフ）
                </p>
              </div>
            </div>

            {/* 6足セット */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">6足セット + 2足無料</h3>
                <span className="text-lg font-bold text-gray-900">39,468円</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                支払いは6足分 → <strong>計8足届く</strong>（1足あたり4,934円）
              </p>
              <div className="bg-white rounded-lg p-3 text-sm">
                <p className="text-gray-600">
                  単品8足分との比較: 6,578円 × 8 = 52,624円
                </p>
                <p className="text-green-700 font-bold">
                  → セットなら13,156円お得！（約25%オフ）
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            3足セットと6足セットは<strong>1足あたりの単価は同じ（4,934円）</strong>です。
            家族で使いたい方や、靴ごとに入れ替えたい方は6足セットが便利ですが、
            まずは3足セットで試すのが無難でしょう。インソールの耐久目安は約3〜6ヶ月なので、
            セット購入なら交換用のストックとしても活用できます。
          </p>
        </section>

        {/* H2: FAQ */}
        <section id="faq">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "ピットソールの最安値はいくらですか？",
                a: "最安値は3足セットまたは6足セットの購入で、実質1足あたり4,934円（税込）です。公式サイトまたは楽天の公式ショップで購入できます。単品購入の場合は6,578円（税込）です。",
              },
              {
                q: "ピットソールはどこで買えますか？",
                a: "公式サイト（BACCHUS ONLINE SHOP）、楽天市場（公式ショップ）、Amazonで購入できます。ドラッグストアやドンキホーテなどの実店舗では販売されていません。通販限定の商品です。",
              },
              {
                q: "楽天とAmazonどちらがお得ですか？",
                a: "楽天は公式ショップが出店しており、セット割引に加えてポイント還元があるためお得です。Amazonは単品販売のみでセット割引がないため、複数足購入する場合は楽天の方がお得です。",
              },
              {
                q: "メルカリで安く買っても大丈夫ですか？",
                a: "おすすめしません。フリマアプリでは偽物・使用済み品のリスクがあり、返品・交換・メーカー保証の対象外です。数百円〜千円の差額で偽物リスクを負うのは割に合いません。",
              },
              {
                q: "セット購入で届いたインソールのサイズは変更できますか？",
                a: "セット購入の場合、まず1足を試してからサイズ変更の相談ができます。未使用・未開封品に限り、到着後7日以内に公式サイトへ連絡すればサイズ交換が可能です。",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-gray-50 border border-gray-200 rounded-lg"
              >
                <summary className="p-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* H2: まとめ */}
        <section id="summary">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-400">
            まとめ
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">&#9733;</span>
                <span>
                  <strong>最安値は3足・6足セット</strong>で1足あたり4,934円（税込）。
                  単品は6,578円。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">&#9733;</span>
                <span>
                  <strong>購入できるのはオンラインのみ</strong>（公式サイト・楽天・Amazon）。
                  実店舗での販売はなし。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">&#9733;</span>
                <span>
                  <strong>楽天ポイント還元</strong>を考慮すると、楽天公式ショップが実質最安になる可能性あり。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">&#9733;</span>
                <span>
                  <strong>Amazonはセット割引なし</strong>。単品購入のみで複数足購入には不向き。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">&#9733;</span>
                <span>
                  <strong>メルカリ等のフリマアプリは非推奨</strong>。偽物・中古品のリスクあり。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            ピットソールをお得に購入するなら、<strong>公式サイトまたは楽天公式ショップの3足セット</strong>が最もバランスの良い選択肢です。
            楽天経済圏を活用している方はお買い物マラソンなどのキャンペーンを狙うとさらにお得。
            大切なのは、<strong>必ず正規販売ルートで購入すること</strong>。
            数百円の節約のために偽物リスクを負うのは賢い買い物とは言えません。
          </p>
        </section>

        {/* 関連記事 */}
        <section className="bg-sky-50 border border-sky-200 rounded-xl p-6">
          <h2 className="font-bold text-gray-900 mb-3">関連記事</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/pitsole"
                className="text-[#0ea5e9] hover:underline"
              >
                ピットソールの口コミ・効果を徹底検証【累計200万足の実力】
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
