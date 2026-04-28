import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "スリムアップインソールの最安値・キャンペーン情報【2026年最新】",
  description:
    "スリムアップインソールを最安値で購入する方法を徹底解説。2026年最新のキャンペーン情報、公式サイトのセット割引、楽天・Amazon・Yahooショッピングの価格比較、お得な購入方法ランキングを紹介。",
  openGraph: {
    title:
      "スリムアップインソールの最安値・キャンペーン情報【2026年最新】｜ソールラボ",
    description:
      "スリムアップインソールを最安値で買う方法は？2026年最新のセット割引・ポイント活用法を解説。",
    url: "https://sole-laboratory.com/articles/slimup-coupon/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/slimup-coupon/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "スリムアップインソールの最安値・キャンペーン情報【2026年最新】",
  description:
    "スリムアップインソールを最安値で購入する方法。セット割引・ポイント活用法を解説。",
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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
};

const faqs = [
  {
    question: "スリムアップインソールにクーポンコードはありますか？",
    answer:
      "2026年4月現在、スリムアップインソールの公式サイトで常時利用できるクーポンコードは確認されていません。ただし、公式サイトではセット割引が常時適用されており、3足セット購入で1足プレゼント（実質4足で17,920円、1足あたり4,480円）となります。不定期でキャンペーンが行われることもあります。",
  },
  {
    question: "スリムアップインソールを最安値で買うにはどうすればいいですか？",
    answer:
      "最安値で購入するなら公式サイトの3足セット+1足プレゼント（実質4足で17,920円、1足あたり4,480円）がおすすめです。楽天やAmazonはポイント還元がありますが、セット割引は公式サイトの方が充実しています。ポイント還元率を含めた実質価格で比較しましょう。",
  },
  {
    question: "スリムアップインソールはドラッグストアで買えますか？",
    answer:
      "スリムアップインソールは市販されておらず、ドラッグストアや薬局では購入できません。公式サイト・楽天・Amazon・Yahooショッピングのオンライン販売のみです。店頭で見かけた類似品は別の商品の可能性があるためご注意ください。",
  },
  {
    question: "スリムアップインソールのセット割引は何足セットがお得ですか？",
    answer:
      "最もお得なのは3足セット+1足プレゼント（実質4足で17,920円、1足あたり4,480円、約36%OFF）です。フリーサイズなのでご家族やパートナーとシェアすることもでき、1人で4足持てば通勤用・プライベート用・運動用・予備と使い分けも可能です。",
  },
  {
    question: "スリムアップインソールのキャンペーンはいつありますか？",
    answer:
      "定期的なキャンペーンのスケジュールは公表されていませんが、春の新生活シーズンや夏前のダイエットシーズンに販促が行われる傾向があります。イッティ公式サイトのメルマガ登録で最新情報を受け取れます。セット割引は常時適用されているため、キャンペーンを待たずに購入しても十分お得です。",
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
      name: "最安値・キャンペーン情報",
      item: "https://sole-laboratory.com/articles/slimup-coupon/",
    },
  ],
};

export default function SlimupCouponPage() {
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
          { label: "最安値・キャンペーン情報" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#c9a76c] font-medium mb-2">
            お得な購入情報
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            スリムアップインソールの
            <span className="text-[#c9a76c]">最安値</span>・
            <span className="text-[#c9a76c]">キャンペーン</span>情報
            <br />
            <span className="text-lg md:text-2xl text-gray-600">
              【2026年最新】
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            スリムアップインソールを少しでもお得に購入したい方へ。2026年最新のキャンペーン情報から、セット割引の比較、楽天・Amazon・Yahooショッピングとの価格比較まで、最安値で買う方法を徹底解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-amber-100 text-[#c9a76c] px-3 py-1 rounded-full font-medium">
              スリムアップインソール 最安値
            </span>
            <span className="bg-amber-100 text-[#c9a76c] px-3 py-1 rounded-full font-medium">
              キャンペーン
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 現在のキャンペーン情報 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            2026年4月現在のキャンペーン・割引情報
          </h2>

          <div className="bg-amber-50 border-2 border-[#c9a76c] rounded-xl p-5 md:p-6 mb-6">
            <h3 className="text-base font-bold text-[#c9a76c] mb-3">
              公式サイト：3足セット+1足プレゼントが常時適用中
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                2026年4月現在、スリムアップインソール公式サイト（イッティ）では<strong>3足セット購入で1足プレゼント</strong>のキャンペーンが常時適用されています。実質4足で17,920円（1足あたり4,480円）と非常にお得です。
              </p>
              <p>
                フリーサイズのため、ご家族やパートナーとシェアすることもできます。男女兼用なので、ご夫婦での使用にもおすすめです。
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              一部のサイトでは「期間限定」と煽っていますが、この3足+1足プレゼントは常時行われているキャンペーンです。焦って購入する必要はありませんが、内容が予告なく変更される可能性はあります。
            </p>
          </div>
        </div>
      </section>

      {/* 公式サイトのセット割引 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            公式サイトのセット割引を徹底比較
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      購入パターン
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      総額（税込）
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      実質足数
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      1足あたり
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      割引率
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      おすすめ度
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">1足単品</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-900">1足</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-500">-</td>
                    <td className="py-3 px-4 text-gray-500">△</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">2足セット</td>
                    <td className="py-3 px-4 text-gray-900">12,800円</td>
                    <td className="py-3 px-4 text-gray-900">2足</td>
                    <td className="py-3 px-4 text-gray-700">6,400円</td>
                    <td className="py-3 px-4 text-gray-700">約8%OFF</td>
                    <td className="py-3 px-4 text-gray-500">○</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      3足セット+1足
                    </td>
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      17,920円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      4足
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      4,480円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      約36%OFF
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              圧倒的にお得なのは<strong>3足セット+1足プレゼント（実質4足で17,920円、1足あたり4,480円）</strong>です。単品購入と比べると1足あたり2,500円もお得になります。
            </p>
            <p>
              2足セットは割引率が低く、あまりメリットがありません。購入するなら単品か3足セットかの二択で考えるのが合理的です。
            </p>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-[#c9a76c] mb-2">
              編集部おすすめ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              フリーサイズなのでご家族やパートナーとシェアできるのが大きなメリット。夫婦で2足ずつ分けて使えば、1人あたり約9,000円で2足分のインソールが手に入ります。男女兼用のスリムアップインソールならではの活用法です。
            </p>
          </div>
        </div>
      </section>

      {/* 販売チャネル比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            公式サイト vs 楽天 vs Amazon vs Yahoo 価格比較
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      購入先
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      単品価格（税込）
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      セット割引
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      ポイント還元
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      総合評価
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      公式サイト（イッティ）
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      3足+1足プレゼント
                    </td>
                    <td className="py-3 px-4 text-gray-500">なし</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">楽天市場</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-700">セット割あり</td>
                    <td className="py-3 px-4 text-gray-700">1〜10%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">Amazon</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-700">セット割あり</td>
                    <td className="py-3 px-4 text-gray-700">1〜3%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">Yahooショッピング</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-700">セット割あり</td>
                    <td className="py-3 px-4 text-gray-700">1〜5%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールは公式サイト（イッティ）、楽天、Amazon、Yahooショッピングのいずれでも購入可能です。単品価格は同じですが、<strong>3足セット+1足プレゼントの特典は公式サイトが最も充実</strong>しています。
            </p>
            <p>
              楽天スーパーセールやAmazonプライムデーのタイミングでポイント大量還元が狙える場合は、ECサイト経由の方がお得になることもあります。ただし、そうしたセールの開催を待つよりも、セット割引ですぐ購入する方が結果的にお得な場合が多いです。
            </p>
          </div>
        </div>
      </section>

      {/* お得な購入方法ランキング */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            お得な購入方法ランキング
          </h2>

          <div className="space-y-4">
            {[
              {
                rank: "1",
                title: "公式サイト 3足セット+1足プレゼント",
                desc: "1足あたり4,480円で最安値。実質4足手に入るため、家族やパートナーとシェアも可能。複数の靴に入れたい方に最適。",
                price: "総額17,920円（1足あたり4,480円）",
                badge: "最安値",
              },
              {
                rank: "2",
                title: "楽天市場（ポイント10倍デー）",
                desc: "楽天スーパーセールやお買い物マラソンでポイント10倍の時に購入すれば、実質6,000円前後に。楽天経済圏の方はこちらも検討。",
                price: "6,980円（ポイント還元後 実質約6,000円）",
                badge: "ポイント狙い",
              },
              {
                rank: "3",
                title: "Amazon（プライムデー）",
                desc: "プライムデーやタイムセール祭りで割引される場合あり。送料無料で翌日届く利便性が魅力。急いでいる方向け。",
                price: "6,980円（セール時5,500〜6,500円）",
                badge: "利便性重視",
              },
              {
                rank: "4",
                title: "Yahooショッピング（5のつく日）",
                desc: "5のつく日やPayPay祭りでポイント還元率がアップ。PayPayユーザーならこちらが有利な場合も。",
                price: "6,980円（ポイント還元後 実質約6,200円）",
                badge: "PayPay派",
              },
            ].map((item) => (
              <div key={item.rank} className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-[#c9a76c] shrink-0">
                    {item.rank}位
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-xs bg-amber-100 text-[#c9a76c] px-2 py-0.5 rounded-full font-medium">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {item.desc}
                    </p>
                    <p className="text-sm font-medium text-[#c9a76c]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ドラッグストアでは買えない */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ドラッグストア・薬局では購入できません
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              「スリムアップインソール ドラッグストア」「スリムアップインソール 薬局」で検索される方も多いですが、スリムアップインソールは<strong>市販されていません</strong>。オンライン専売の商品です。
            </p>
            <p>
              ドラッグストアや100円ショップで販売されているインソールは別の商品です。見た目が似ていても、美容整体師・井上剛志氏監修の骨格筋サポート構造は正規品のみの設計です。
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-600">注意：</span>
              フリマサイト（メルカリ、ラクマ等）での購入は偽物や使用済み品のリスクがあるため推奨しません。インソールは衛生面も重要なため、必ず正規ルート（公式サイト・楽天・Amazon・Yahoo）から新品を購入してください。
            </p>
          </div>
        </div>
      </section>

      {/* 他製品との価格比較 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール3社の価格比較
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      商品名
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      単品価格
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      セット最安値
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      特徴
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      スリムアップインソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-900">4,480円/足</td>
                    <td className="py-3 px-4 text-gray-700">整体師監修・男女兼用</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ピットソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,578円</td>
                    <td className="py-3 px-4 text-gray-900">4,378円/足</td>
                    <td className="py-3 px-4 text-gray-700">世界特許・臨床データ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ランウェイキュアソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,380円</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">3,938円/足</td>
                    <td className="py-3 px-4 text-gray-700">薄型・女性向け</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              セット購入時の1足あたり最安値ではランウェイキュアソールが最も安いですが、スリムアップインソールは3足+1足プレゼントで実質4足手に入る点が大きな魅力です。
            </p>
            <p>
              また、スリムアップインソールはフリーサイズ・男女兼用のため、ご家族で共有できるのも独自のメリット。男性がダイエットインソールを使いたい場合、ランウェイキュアソール（女性向け）は選択肢に入らないため、スリムアップインソールかピットソールの二択となります。
            </p>
          </div>
        </div>
      </section>

      {/* コスパで選ぶならスリムアップ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            コスパ重視なら3足セット+1足プレゼントが最強
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              ダイエットインソールで効果を出すには「毎日使う」ことが大切です。毎日使うためには、複数の靴にインソールを入れておくのが理想的です。3足セット+1足プレゼントなら4足分を確保できるため、日常使いに十分対応できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "通勤用のスニーカーに1足",
                desc: "毎日の通勤で使うメインの靴に装着。歩行時間が最も長いため、ここが最重要ポイント。",
              },
              {
                title: "プライベートの靴に1足",
                desc: "休日の外出時にも使えるよう、プライベート用の靴にも装着。週末の歩行もダイエットに活用。",
              },
              {
                title: "運動用のシューズに1足",
                desc: "ウォーキングやジム用のシューズに装着。運動時にも骨格筋サポートの効果を発揮。",
              },
              {
                title: "予備として1足",
                desc: "洗濯・乾燥中の代替用や、靴の入れ替え用として。インソールのローテーションで長持ちします。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
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

      {/* 関連ページ */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/slim-up-insole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールの口コミ・効果を徹底検証</p>
              <p className="text-xs text-gray-500 mt-1">骨格筋サポート構造の仕組みから最安値情報まで詳しく解説</p>
            </Link>
            <Link href="/articles/slimup-not-working/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールは痩せない？口コミから検証</p>
              <p className="text-xs text-gray-500 mt-1">痩せない原因を分析し、効果を最大化する使い方を解説</p>
            </Link>
            <Link href="/articles/slimup-guide/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールのサイズ選び・使い方ガイド</p>
              <p className="text-xs text-gray-500 mt-1">フリーサイズのカット方法と効果的な使い方を解説</p>
            </Link>
            <Link href="/ranking/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめ3選を徹底比較</p>
              <p className="text-xs text-gray-500 mt-1">ピットソール・ランウェイキュアソール・スリムアップインソールを比較</p>
            </Link>
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
              <details key={faq.question} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2 px-5 py-4">
                  <span className="flex items-start gap-2">
                    <span className="text-[#c9a76c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed pl-10">
                  <span className="text-[#c9a76c] font-bold">A.</span>{" "}
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
            まとめ：スリムアップインソールは公式3足セットが最安値
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールを最もお得に購入するなら、<strong>公式サイトの3足セット+1足プレゼント（実質4足で17,920円、1足あたり4,480円）</strong>が最安値です。
            </p>
            <p>
              楽天・Amazon・Yahooショッピングでも購入できますが、セット割引の充実度では公式サイトが一歩リードしています。ポイント大量還元のセール時期を狙うのも手ですが、セット割引で即購入する方が確実にお得です。
            </p>
            <p>
              フリーサイズ・男女兼用で家族やパートナーとシェアできるのは、スリムアップインソールならではの強み。コスパ重視の方は、ぜひ3足セットでお得にスタートしてみてください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/slim-up-insole/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              スリムアップインソールの詳細レビューを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
