import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "スリムアップインソールの最安値・キャンペーン情報【2026年最新】",
  description:
    "スリムアップインソールを最安値で購入する方法を解説。2026年最新のキャンペーン情報、公式サイトの価格、楽天・Amazon・Yahooショッピングの価格比較、お得な購入方法ランキングを紹介。",
  openGraph: { images: ["/og-default.png"],
    title:
      "スリムアップインソールの最安値・キャンペーン情報【2026年最新】｜ソールラボ",
    description:
      "スリムアップインソールを最安値で買う方法は？2026年最新の公式価格・ポイント活用法を解説。",
    url: "https://sole-laboratory.com/articles/slimup-coupon/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/slimup-coupon/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline:
    "スリムアップインソールの最安値・キャンペーン情報【2026年最新】",
  description:
    "スリムアップインソールを最安値で購入する方法。公式価格・ポイント活用法を解説。",
  author: { "@type": "Organization", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-28",
  dateModified: "2026-11-06",
};

const faqs = [
  {
    question: "スリムアップインソールにクーポンコードはありますか？",
    answer:
      "当サイトでは、スリムアップインソールの公式サイトで常時利用できるクーポンコードを確認できていません（2026年10月17日時点）。割引の有無・内容は時期によって変わるため、最新の条件は公式サイトでご確認ください。不定期でキャンペーンが行われることもあります。",
  },
  {
    question: "スリムアップインソールを最安値で買うにはどうすればいいですか？",
    answer:
      "公式通販「一番星」の価格はSサイズ・Mサイズとも1足6,980円（税込）で、セット販売の記載はありません（2026年11月2日確認）。モールの価格はショップごとに違い、2026年11月6日の確認ではAmazon（販売元はメーカー公式の一番星）が1足2,792円で最も安い価格でした。",
  },
  {
    question: "スリムアップインソールはドラッグストアで買えますか？",
    answer:
      "スリムアップインソールは市販されておらず、ドラッグストアや薬局では購入できません。公式サイト・楽天・Amazon・Yahooショッピングのオンライン販売のみです。店頭で見かけた類似品は別の商品の可能性があるためご注意ください。",
  },
  {
    question: "スリムアップインソールのセット割引は何足セットがお得ですか？",
    answer:
      "公式通販にセット販売の記載はありません（2026年11月2日確認）。価格はSサイズ・Mサイズとも1足6,980円（税込）です。サイズはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズ選択式のため（公式サイトにて2026年7月確認）、家族で使う場合は使う方の足の実寸に合うかご確認ください。",
  },
  {
    question: "スリムアップインソールのキャンペーンはいつありますか？",
    answer:
      "定期的なキャンペーンのスケジュールは公表されていませんが、春の新生活シーズンや夏前のダイエットシーズンに販促が行われる傾向があります。イッティ公式サイトのメルマガ登録で最新情報を受け取れます。なお、公式通販にセット販売の記載はありません（2026年11月2日確認）。",
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
            スリムアップインソールを少しでもお得に購入したい方へ。2026年最新のキャンペーン情報から、公式価格の確認、楽天・Amazon・Yahooショッピングとの価格比較まで、最安値で買う方法を解説します。
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
            キャンペーン・割引情報について
          </h2>
            <p className="text-xs text-gray-500 mt-3">※ 以前に掲載していた割引内容（2026年4月時点）は、2026年10月17日の再確認で当サイトから内容を確認できませんでした。そのため具体的な割引条件の記載を取り下げています。最新のキャンペーン・割引は、スリムアップインソールの公式サイトでご確認ください。</p>

          <div className="bg-amber-50 border-2 border-[#c9a76c] rounded-xl p-5 md:p-6 mb-6">
            <h3 className="text-base font-bold text-[#c9a76c] mb-3">
              公式サイトの価格：1足6,980円（税込）
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                公式通販「一番星」の価格は、SサイズとMサイズのどちらも1足6,980円（税込）です。2026年11月2日の確認では、セット販売や特典の記載はありませんでした。割引の有無・内容は時期によって変わるため、最新の条件は公式サイトでご確認ください。
              </p>
              <p>
                サイズはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズ選択式です（公式サイトにて2026年7月確認）。ご家族やパートナーとシェアする場合は、使う方それぞれの足の実寸に合うサイズかをご確認ください。
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              公式通販にはセット販売や特典の記載がないため（2026年11月2日確認）、セット割引を前提にした情報にはご注意ください。価格や販売内容は予告なく変更される可能性があります。
            </p>
          </div>
        </div>
      </section>

      {/* 公式サイトの価格（購入数別） */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            公式サイトの価格（購入数別）
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      購入数
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      総額（税込）
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      1足あたり
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">1足</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">2足</td>
                    <td className="py-3 px-4 text-gray-900">13,960円</td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">セット販売</td>
                    <td className="py-3 px-4 text-gray-500" colSpan={2}>
                      公式通販にセット販売の記載なし（2026年11月2日確認）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              公式通販「一番星」の価格は、SサイズとMサイズのどちらも1足6,980円（税込）です。公式通販にセット販売の記載はないため（2026年11月2日確認）、複数購入しても1足あたりの価格は変わりません。総額は送料や支払い手数料を含まない目安です。
            </p>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-[#c9a76c] mb-2">
              家族で使う場合
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              サイズはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズ選択式です（公式サイトにて2026年7月確認）。ご家族やパートナーと使う場合は、それぞれの足の実寸に合うサイズを選んでください。
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
                    <td className="py-3 px-4 text-gray-700">
                      公式通販にセット販売の記載なし（2026年11月2日確認）
                    </td>
                    <td className="py-3 px-4 text-gray-500">なし</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">楽天市場</td>
                    <td className="py-3 px-4 text-gray-900">6,980円（送料無料）</td>
                    <td className="py-3 px-4 text-gray-700">確認できず</td>
                    <td className="py-3 px-4 text-gray-700">1〜10%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">Amazon</td>
                    <td className="py-3 px-4 text-gray-900">2,792円（2枚セット4,792円・Sサイズで確認）</td>
                    <td className="py-3 px-4 text-gray-700">確認できず</td>
                    <td className="py-3 px-4 text-gray-700">1〜3%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">Yahooショッピング</td>
                    <td className="py-3 px-4 text-gray-900">6,980円（別途送料880円）</td>
                    <td className="py-3 px-4 text-gray-700">確認できず</td>
                    <td className="py-3 px-4 text-gray-700">1〜5%</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールは公式サイト（イッティ）、楽天、Amazon、Yahooショッピングのいずれでも購入可能です。<strong>公式通販にはセット販売の記載がありません</strong>（2026年11月2日確認）。モールの価格はショップごとに違います。2026年11月6日の確認では、Amazon（販売元：＜メーカー公式＞株式会社ロッピングライフ（一番星））がSサイズ・Mサイズとも1足2,792円、楽天市場（イッティ公式 楽天市場店）が6,980円（送料無料）、Yahoo!ショッピング（一番星）が6,980円＋送料880円と表示されていました。価格は変わることがあるため、購入前に各ショップでご確認ください。
            </p>
            <p>
              楽天スーパーセールやAmazonプライムデーのタイミングでポイント大量還元が狙える場合は、ECサイト経由の方がお得になることもあります。セールの開催時期は不定期のため、購入時期とあわせてご検討ください。
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
                title: "Amazon（販売元：メーカー公式の一番星）",
                desc: "販売元は＜メーカー公式＞株式会社ロッピングライフ（一番星）。2026年11月6日の確認ではSサイズ・Mサイズとも1足2,792円、2枚セット4,792円（Sサイズで確認）と表示されていました。価格は変わることがあるため、購入前に商品ページでご確認ください。",
                price: "1足2,792円（2026年11月6日確認）",
                badge: "最安",
              },
              {
                rank: "2",
                title: "楽天市場（イッティ公式 楽天市場店）",
                desc: "1足6,980円（税込）・送料無料（2026年11月6日確認）。楽天ポイントを使う方向けです。",
                price: "6,980円（送料無料）",
                badge: "楽天ポイント",
              },
              {
                rank: "3",
                title: "公式サイト（一番星）",
                desc: "SサイズとMサイズのどちらも1足6,980円（税込）です。公式通販にセット販売や特典の記載はありません（2026年11月2日確認）。",
                price: "6,980円（税込）",
                badge: "公式",
              },
              {
                rank: "4",
                title: "Yahooショッピング（一番星）",
                desc: "1足6,980円（税込）に別途送料880円（2026年11月6日確認）。PayPayポイントを使う方向けです。",
                price: "6,980円＋送料880円",
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
              ドラッグストアや100円ショップで販売されているインソールは別の商品です。見た目が似ていても、美容整体師・井上剛志氏監修の3つの構造（フリーフィンガーサポート・アーチプッシュアップ・スリーアップバランス）は正規品だけのものです。
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
                    <td className="py-3 px-4 text-gray-900">公式通販にセット販売の記載なし（2026年11月2日確認）</td>
                    <td className="py-3 px-4 text-gray-700">整体師監修・S/M 2サイズ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ピットソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,578円</td>
                    <td className="py-3 px-4 text-gray-900">4,026円/足（6足セット）</td>
                    <td className="py-3 px-4 text-gray-700">世界特許・臨床データ</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ランウェイキュアソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">約5,987円/足</td>
                    <td className="py-3 px-4 text-gray-700">薄型・女性向け</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              セット購入時の1足あたり単価ではピットソール（6足セット時4,026円/足・公式サイトにて2026年7月確認）が最も安くなります。スリムアップインソールは公式通販にセット販売の記載がなく、1足6,980円（税込）です（2026年11月2日確認）。
            </p>
            <p>
              また、スリムアップインソールはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズ展開で、最大26.5cmまで対応します（公式サイトにて2026年7月確認）。男性がダイエットインソールを使いたい場合、ランウェイキュアソール（女性向け）は選択肢に入らないため、足のサイズが26.5cm以内ならスリムアップインソール、それを超えるならピットソール（最大29cm・XLはブラック/ピンク限定）が候補となります。
            </p>
          </div>
        </div>
      </section>

      {/* コスパで選ぶならスリムアップ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            複数の靴で使う場合の考え方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              ダイエットインソールで効果を出すには「毎日使う」ことが大切です。毎日使うためには、複数の靴にインソールを入れておく方法があります。公式通販にセット販売の記載はないため（2026年11月2日確認）、必要な足数を1足6,980円（税込）で購入する形になります。
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
                desc: "ウォーキングやジム用のシューズに装着。歩く時間の長い靴に入れると、公式の説明どおり歩き「ながら」で使えます。",
              },
              {
                title: "予備として1足",
                desc: "手入れ後に影干ししている間の代替用や、靴の入れ替え用として。インソールのローテーションで長持ちします。",
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
            <Link href="/slim-up-insole/" className="block p-3 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールの口コミ・効果を検証</p>
              <p className="text-xs text-gray-500 mt-1">3つの構造の仕組みから最安値情報まで詳しく解説</p>
            </Link>
            <Link href="/articles/slimup-not-working/" className="block p-3 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールは痩せない？口コミから検証</p>
              <p className="text-xs text-gray-500 mt-1">痩せない原因を分析し、効果を最大化する使い方を解説</p>
            </Link>
            <Link href="/articles/slimup-guide/" className="block p-3 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールのサイズ選び・使い方ガイド</p>
              <p className="text-xs text-gray-500 mt-1">S/M 2サイズの選び方と効果的な使い方を解説</p>
            </Link>
            <Link href="/ranking/" className="block p-3 border border-[#e8ded6] rounded-xl hover:bg-[#faf7f3] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめ3選を比較</p>
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
            まとめ：スリムアップインソールの価格と購入先
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールの公式通販「一番星」の価格は、<strong>SサイズとMサイズのどちらも1足6,980円（税込）</strong>です。公式通販にセット販売の記載はありません（2026年11月2日確認）。
            </p>
            <p>
              楽天・Amazon・Yahooショッピングでも購入できます。2026年11月6日の確認では、Amazon（販売元：＜メーカー公式＞株式会社ロッピングライフ（一番星））がSサイズ・Mサイズとも1足2,792円、楽天市場（イッティ公式 楽天市場店）が6,980円（送料無料）、Yahoo!ショッピング（一番星）が6,980円＋送料880円と表示されていました。価格は変わることがあるため、購入前に各ショップでご確認ください。
            </p>
            <p>
              サイズはS（23.0〜24.5cm）・M（25.0〜26.5cm）の2サイズ選択式です（公式サイトにて2026年7月確認）。家族やパートナーと使う場合は、それぞれの足の実寸に合うサイズかを確認したうえでご購入ください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/slim-up-insole/"
              className="inline-block bg-[#8a6a4f] hover:bg-[#6f543c] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              スリムアップインソールの詳細レビューを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
