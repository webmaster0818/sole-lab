import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソールのクーポン・キャンペーン情報【2026年最新】",
  description:
    "ランウェイキュアソールを最安値で購入する方法を徹底解説。2026年最新のクーポン・キャンペーン情報、公式サイトのセット割引、楽天・Amazonのポイント活用法、お得な購入方法を紹介。",
  openGraph: {
    title:
      "ランウェイキュアソールのクーポン・キャンペーン情報【2026年最新】｜ソールラボ",
    description:
      "ランウェイキュアソールを最安値で買う方法は？2026年最新のクーポン・セット割引・ポイント活用法を解説。",
    url: "https://sole-laboratory.com/articles/runway-coupon/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/runway-coupon/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ランウェイキュアソールのクーポン・キャンペーン情報【2026年最新】",
  description:
    "ランウェイキュアソールを最安値で購入する方法。クーポン・キャンペーン・セット割引・ポイント活用法を解説。",
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
    question: "ランウェイキュアソールにクーポンコードはありますか？",
    answer:
      "2026年4月現在、ランウェイキュアソール公式サイトで常時利用できるクーポンコードは確認されていません。ただし、公式サイトではセット割引（3足セット・5足セット）が常時適用されており、これが実質的な割引となっています。期間限定のキャンペーンで特別クーポンが発行される場合もあります。",
  },
  {
    question: "ランウェイキュアソールを最安値で買うにはどうすればいいですか？",
    answer:
      "最安値で購入するなら公式サイトのセット割引がおすすめです。3足セットなら1足あたり約4,000円前後、5足セットならさらに安くなります。楽天やAmazonはポイント還元がありますが、本体価格は公式サイトより高い場合が多いため、ポイント還元を含めた実質価格で比較しましょう。",
  },
  {
    question: "楽天やAmazonで買ったランウェイキュアソールは正規品ですか？",
    answer:
      "楽天やAmazonにも正規の販売チャネルがある場合があります。ただし、非正規の出品者が類似品を販売しているケースも報告されています。販売元が正規取扱店かどうかを必ず確認し、極端に安い出品者は避けましょう。確実に正規品を購入するには公式サイトが最も安全です。",
  },
  {
    question: "ランウェイキュアソールのセット割引は何足セットがお得ですか？",
    answer:
      "コスパ最強は5足セットです。ただし、初めて購入する方は3足セット（約30%OFF）が無難です。通勤用・プライベート用・予備の3足あれば日常使用には十分で、サイズが合わなかった場合のリスクも抑えられます。リピーターなら5足セットで1足あたりの価格をさらに下げるのがお得です。",
  },
  {
    question: "ランウェイキュアソールのキャンペーンはいつ開催されますか？",
    answer:
      "定期的なキャンペーンのスケジュールは公表されていませんが、春の新生活シーズン、夏のダイエットシーズン、年末年始セールなど季節の変わり目に開催される傾向があります。公式サイトのメルマガ登録やSNSフォローで最新情報をキャッチできます。",
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
      name: "ランウェイキュアソール",
      item: "https://sole-laboratory.com/runway-cure-sole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "クーポン情報",
      item: "https://sole-laboratory.com/articles/runway-coupon/",
    },
  ],
};

export default function RunwayCouponPage() {
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
          { label: "ランウェイキュアソール", href: "/runway-cure-sole/" },
          { label: "クーポン情報" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#c9a76c] font-medium mb-2">
            お得な購入情報
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールの
            <span className="text-[#c9a76c]">クーポン</span>・
            <span className="text-[#c9a76c]">キャンペーン</span>情報
            <br />
            <span className="text-lg md:text-2xl text-gray-600">
              【2026年最新】
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ランウェイキュアソールを少しでもお得に購入したい方へ。2026年最新のクーポン・キャンペーン情報から、セット割引の比較、楽天・Amazonとの価格比較まで、最安値で買う方法を徹底解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-amber-100 text-[#c9a76c] px-3 py-1 rounded-full font-medium">
              ランウェイキュアソール クーポン
            </span>
            <span className="bg-amber-100 text-[#c9a76c] px-3 py-1 rounded-full font-medium">
              最安値
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
              公式サイト：セット割引が常時適用中
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                2026年4月現在、ランウェイキュアソール公式サイトでは<strong>セット割引が常時適用</strong>されています。クーポンコードは不要で、セット購入を選ぶだけで自動的に割引価格が適用されます。
              </p>
              <p>
                これは期間限定ではなく常時開催の割引のため、焦って購入する必要はありません。ただし、価格の改定や割引率の変更は予告なく行われる可能性があります。
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              多くの競合サイトでは「限定クーポン配布中」「今だけの特別価格」といった煽り文句を使っていますが、実際にはセット割引は常時行われているものです。当サイトでは正確な情報をお伝えします。
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
                    <td className="py-3 px-4 text-gray-900">6,380円</td>
                    <td className="py-3 px-4 text-gray-900">6,380円</td>
                    <td className="py-3 px-4 text-gray-500">-</td>
                    <td className="py-3 px-4 text-gray-500">△</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      3足セット
                    </td>
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      13,134円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      4,378円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      約31%OFF
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      5足セット
                    </td>
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      19,690円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      3,938円
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      約38%OFF
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              初めての方には<strong>3足セット（1足あたり4,378円、約31%OFF）</strong>がおすすめです。通勤用・プライベート用・予備の3足あれば日常使用に十分対応できます。
            </p>
            <p>
              リピーターやご家族で使う方には5足セット（1足あたり3,938円、約38%OFF）がコスパ最強です。1足あたりの価格が4,000円を切るのは5足セットだけです。
            </p>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-[#c9a76c] mb-2">
              編集部おすすめ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              初めての方は3足セットがベストバランス。ダイエットインソールは毎日使うことが大切なので、通勤靴・プライベート靴それぞれに入れられる3足が最適です。万が一サイズが合わなくても1足あたりのコストが抑えられます。
            </p>
          </div>
        </div>
      </section>

      {/* 楽天・Amazon比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            公式サイト vs 楽天 vs Amazon 価格比較
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
                      1足あたり（税込）
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      ポイント還元
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      正規品保証
                    </th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">
                      総合評価
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 px-4 text-gray-900 font-bold">
                      公式サイト（3足）
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      4,378円
                    </td>
                    <td className="py-3 px-4 text-gray-500">なし</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">
                      &#10003; 確実
                    </td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">楽天市場</td>
                    <td className="py-3 px-4 text-gray-900">5,500〜6,500円</td>
                    <td className="py-3 px-4 text-gray-700">1〜10%</td>
                    <td className="py-3 px-4 text-gray-500">要確認</td>
                    <td className="py-3 px-4 text-gray-500">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">Amazon</td>
                    <td className="py-3 px-4 text-gray-900">5,500〜6,800円</td>
                    <td className="py-3 px-4 text-gray-700">1〜3%</td>
                    <td className="py-3 px-4 text-gray-500">要確認</td>
                    <td className="py-3 px-4 text-gray-500">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">メルカリ等</td>
                    <td className="py-3 px-4 text-gray-900">3,000〜5,000円</td>
                    <td className="py-3 px-4 text-gray-500">なし</td>
                    <td className="py-3 px-4 text-red-500 font-bold">
                      &#10007; リスク大
                    </td>
                    <td className="py-3 px-4 text-red-500">×</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              価格と正規品保証の両方を考慮すると、<strong>公式サイトの3足セット</strong>が最もお得です。楽天やAmazonはポイント還元がありますが、本体価格が高いため実質価格でも公式が安くなることがほとんどです。
            </p>
            <p>
              メルカリなどのフリマサイトは安い価格で出品されていますが、偽物やコピー品、使用済み品のリスクがあるため推奨しません。衛生面を考えても、インソールは新品を公式から購入するのが安心です。
            </p>
          </div>
        </div>
      </section>

      {/* お得に買う方法ランキング */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            お得な購入方法ランキング
          </h2>

          <div className="space-y-4">
            {[
              {
                rank: "1",
                title: "公式サイト 5足セット",
                desc: "1足あたり3,938円で最安値。家族やリピーターに最適。5足あれば全ての靴に対応でき、予備も確保できます。",
                price: "総額19,690円（1足あたり3,938円）",
                badge: "最安値",
              },
              {
                rank: "2",
                title: "公式サイト 3足セット",
                desc: "1足あたり4,378円で約31%OFF。初めての方に最もおすすめ。通勤用・プライベート用・予備の3足構成がベスト。",
                price: "総額13,134円（1足あたり4,378円）",
                badge: "おすすめ",
              },
              {
                rank: "3",
                title: "楽天市場（ポイント10倍デー）",
                desc: "楽天スーパーセールやお買い物マラソン中にポイント10倍で購入すれば、実質5,000円前後に。ただし開催時期は不定期。",
                price: "約6,000円（ポイント還元後 実質約5,000円）",
                badge: "条件付き",
              },
              {
                rank: "4",
                title: "Amazon（プライム会員）",
                desc: "送料無料で翌日届く利便性が魅力。ただし本体価格は公式サイトより高め。急ぎの方向け。",
                price: "約6,000〜6,800円",
                badge: "利便性重視",
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

      {/* 偽物の見分け方 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            偽物・コピー品の見分け方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ランウェイキュアソールの人気が高まるにつれ、フリマサイトやECモールでの偽物・コピー品の出品が増えています。以下のポイントで正規品かどうかを見分けましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "パッケージの確認",
                desc: "正規品には公式のロゴとパッケージが施されています。安すぎる価格やパッケージ写真がない出品は要注意。",
              },
              {
                title: "販売元の確認",
                desc: "公式サイト以外で購入する場合は、出品者が正規販売店かどうかを必ず確認。正規販売店リストは公式サイトで確認できます。",
              },
              {
                title: "価格の確認",
                desc: "定価6,380円の商品が2,000〜3,000円で売られている場合は偽物の可能性が高い。安すぎる価格には理由があります。",
              },
              {
                title: "素材と品質",
                desc: "正規品は3点アーチサポート構造がしっかりしており、足裏にフィットします。コピー品はサポート力が弱く、フィット感が異なります。",
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

          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-600">注意：</span>
              偽物のインソールは3点アーチサポート構造が正確に再現されておらず、効果が期待できないだけでなく、足や姿勢に悪影響を与える可能性があります。価格だけで判断せず、必ず正規ルートから購入してください。
            </p>
          </div>
        </div>
      </section>

      {/* クーポンが出やすいタイミング */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            クーポン・セールが出やすいタイミング
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ランウェイキュアソールの公式サイトでは不定期にキャンペーンが開催されます。過去の傾向から、クーポンやセールが出やすいタイミングをまとめました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                season: "春（3〜4月）",
                desc: "新生活応援キャンペーン。新年度の靴新調に合わせてインソールの需要が増えるシーズン。",
                chance: "高",
              },
              {
                season: "夏前（5〜6月）",
                desc: "ダイエット応援キャンペーン。薄着の季節に向けてダイエット需要が高まる時期。",
                chance: "高",
              },
              {
                season: "秋（9〜10月）",
                desc: "秋の健康キャンペーン。ウォーキングシーズンに合わせたプロモーション。",
                chance: "中",
              },
              {
                season: "年末年始（12〜1月）",
                desc: "年末セール・福袋キャンペーン。お正月太り対策としてのプロモーションも。",
                chance: "高",
              },
            ].map((item) => (
              <div key={item.season} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {item.season}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.chance === "高" ? "bg-amber-100 text-[#c9a76c]" : "bg-gray-100 text-gray-600"}`}>
                    可能性：{item.chance}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#c9a76c]">ポイント：</span>
              キャンペーンを待つのも一つの手ですが、セット割引は常時適用されているため、必要な時に購入するのが最も効率的です。ダイエットは「始めたい時が始め時」。キャンペーン待ちで開始が遅れるデメリットの方が大きい場合もあります。
            </p>
          </div>
        </div>
      </section>

      {/* 他製品との価格比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール3社の価格比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            <p>
              ランウェイキュアソールの価格は、他のダイエットインソールと比較してどのポジションにあるのでしょうか。3社の価格を比較します。
            </p>
          </div>

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
                      コスパ評価
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ランウェイキュアソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,380円</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">
                      3,938円/足
                    </td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      ピットソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,578円</td>
                    <td className="py-3 px-4 text-gray-700">4,378円/足</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      スリムアップインソール
                    </td>
                    <td className="py-3 px-4 text-gray-900">6,980円</td>
                    <td className="py-3 px-4 text-gray-700">4,480円/足</td>
                    <td className="py-3 px-4 text-gray-700">○</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              セット購入時の1足あたり最安値ではランウェイキュアソールが最も安く、コスパに優れています。ピットソールはエビデンスの強さ、スリムアップインソールは整体師監修という強みがあるため、価格だけでなく総合的に判断するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/runway-cure-sole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ランウェイキュアソールの口コミ・効果を徹底検証</p>
              <p className="text-xs text-gray-500 mt-1">3点アーチサポートの仕組みから最安値情報まで詳しく解説</p>
            </Link>
            <Link href="/articles/runway-not-working/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ランウェイキュアソールは痩せない？効果の真相</p>
              <p className="text-xs text-gray-500 mt-1">痩せない原因を分析し、正しい期待値を解説</p>
            </Link>
            <Link href="/articles/runway-size-guide/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ランウェイキュアソールのサイズ選びガイド</p>
              <p className="text-xs text-gray-500 mt-1">外反母趾でも使える？サイズ別フィッティング解説</p>
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
            まとめ：ランウェイキュアソールを最安値で購入する方法
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ランウェイキュアソールを最もお得に購入する方法は、<strong>公式サイトのセット割引</strong>を利用することです。3足セットなら1足あたり4,378円（約31%OFF）、5足セットなら1足あたり3,938円（約38%OFF）で購入できます。
            </p>
            <p>
              楽天やAmazonはポイント還元がありますが、本体価格が高いため実質価格でも公式サイトが安いケースがほとんどです。正規品保証という安心感も含めると、公式サイトでの購入が最もおすすめです。
            </p>
            <p>
              キャンペーンを待つよりも、セット割引を活用して早めに始めた方が、ダイエット効果を早く実感できます。気になっている方は、まず公式サイトで最新の価格をチェックしてみてください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/runway-cure-sole/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ランウェイキュアソールの詳細レビューを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
