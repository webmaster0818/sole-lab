import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ピットソールのクーポン・キャンペーン情報【2026年最新】",
  description:
    "ピットソールを最安値で購入する方法を徹底解説。2026年最新のクーポン・キャンペーン情報、公式サイトのセット割引、楽天・Amazonのポイント活用法、お得な購入方法ランキングを紹介。偽物の見分け方も。",
  openGraph: {
    title:
      "ピットソールのクーポン・キャンペーン情報【2026年最新】｜ソールラボ",
    description:
      "ピットソールを最安値で買う方法は？2026年最新のクーポン・セット割引・ポイント活用法を解説。",
    url: "https://sole-laboratory.com/articles/pitsole-coupon/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pitsole-coupon/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソールのクーポン・キャンペーン情報【2026年最新】",
  description:
    "ピットソールを最安値で購入する方法。クーポン・キャンペーン・セット割引・ポイント活用法を解説。",
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
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
};

const faqs = [
  {
    question: "ピットソールにクーポンコードはありますか？",
    answer:
      "2026年4月現在、ピットソールの公式サイトで常時利用できるクーポンコードは確認されていません。ただし、公式サイトではセット割引（3足セット・5足セット）が常時適用されており、これが実質的な割引となっています。期間限定のキャンペーンで特別クーポンが発行されることがあるため、公式サイトやSNSをチェックしましょう。",
  },
  {
    question: "ピットソールを最安値で買うにはどうすればいいですか？",
    answer:
      "最安値で購入する方法は、公式サイトの3足セット（14,089円、1足あたり4,696円）です。さらにお得なのは5足セット（21,890円、1足あたり4,378円）です。楽天やAmazonはポイント還元がありますが、本体価格は公式サイトより高い場合があるため、ポイント還元率を含めた実質価格で比較しましょう。",
  },
  {
    question: "楽天やAmazonで買ったピットソールは偽物ですか？",
    answer:
      "楽天やAmazonにもピットソールの公式ショップが出店している場合があります。ただし、非正規の出品者が類似品やコピー品を販売しているケースも報告されています。公式ショップかどうかを確認し、極端に安い価格の出品者は避けましょう。確実に正規品を購入するには公式サイトが最も安全です。",
  },
  {
    question: "ピットソールのセット割引は何足セットがお得ですか？",
    answer:
      "コスパ最強は5足セット（1足あたり4,378円、約33%OFF）です。ただし、初めて購入する方は3足セット（1足あたり4,696円、約29%OFF）が無難です。通勤用・プライベート用・予備の3足あれば日常使用には十分で、万が一サイズが合わなかった場合のリスクも抑えられます。",
  },
  {
    question: "ピットソールのキャンペーンはいつ開催されますか？",
    answer:
      "定期的なキャンペーンの開催スケジュールは公表されていませんが、年始セール、春の新生活キャンペーン、夏のダイエット応援セール、年末年始セールなど、季節の変わり目に開催される傾向があります。公式サイトのメルマガ登録やSNSフォローで最新情報をキャッチできます。",
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
      name: "ピットソール",
      item: "https://sole-laboratory.com/pitsole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "クーポン情報",
      item: "https://sole-laboratory.com/articles/pitsole-coupon/",
    },
  ],
};

export default function PitsoleCouponPage() {
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
          { label: "ピットソール", href: "/pitsole/" },
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
            ピットソールの
            <span className="text-[#c9a76c]">クーポン</span>・
            <span className="text-[#c9a76c]">キャンペーン</span>情報
            <br />
            <span className="text-lg md:text-2xl text-gray-600">
              【2026年最新】
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ピットソールを少しでもお得に購入したい方へ。2026年最新のクーポン・キャンペーン情報から、セット割引の比較、楽天・Amazonのポイント活用法まで、最安値で買う方法を徹底解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-amber-100 text-[#c9a76c] px-3 py-1 rounded-full font-medium">
              ピットソール クーポン
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

          <div className="card border-2 border-[#c9a76c] bg-amber-50 mb-6">
            <h3 className="text-base font-bold text-[#c9a76c] mb-3">
              公式サイト：セット割引が常時適用中
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                2026年4月現在、ピットソール公式サイトでは<strong>セット割引が常時適用</strong>されています。専用のクーポンコードは不要で、セット購入を選ぶだけで自動的に割引価格が適用されます。
              </p>
              <p>
                これは期間限定ではなく常時開催の割引のため、焦って購入する必要はありません。ただし、価格の改定や割引率の変更は予告なく行われる可能性があるため、購入を検討中の方は早めのチェックをおすすめします。
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              多くの競合サイトでは「限定クーポン配布中」「今だけの特別価格」といった煽り文句を使っていますが、実際にはピットソール公式サイトのセット割引は常時行われているものです。当サイトでは正確な情報をお伝えします。
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

          <div className="card mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      購入パターン
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      総額（税込）
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      1足あたり
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      割引率
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      おすすめ度
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">1足単品</td>
                    <td className="py-3 text-gray-900">6,578円</td>
                    <td className="py-3 text-gray-900">6,578円</td>
                    <td className="py-3 text-gray-500">-</td>
                    <td className="py-3 text-gray-500">△</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 text-gray-900 font-bold">
                      3足セット
                    </td>
                    <td className="py-3 text-gray-900 font-bold">
                      14,089円
                    </td>
                    <td className="py-3 text-[#c9a76c] font-bold">
                      4,696円
                    </td>
                    <td className="py-3 text-[#c9a76c] font-bold">
                      約29%OFF
                    </td>
                    <td className="py-3 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-bold">
                      5足セット
                    </td>
                    <td className="py-3 text-gray-900 font-bold">
                      21,890円
                    </td>
                    <td className="py-3 text-[#e8627c] font-bold">
                      4,378円
                    </td>
                    <td className="py-3 text-[#e8627c] font-bold">
                      約33%OFF
                    </td>
                    <td className="py-3 text-emerald-600 font-bold">◎◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 2026年4月時点の価格です。価格は変更される場合があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-2 border-[#c9a76c]">
              <h3 className="text-base font-bold text-[#c9a76c] mb-3">
                初めての方におすすめ：3足セット
              </h3>
              <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <p>
                  初めてピットソールを購入する方には3足セットがおすすめです。1足あたり4,696円と単品より約1,900円お得になります。
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    通勤用・プライベート用・予備の3足が確保できる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    万が一サイズが合わなくても他のサイズで使える
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    毎日入れ替える手間が省ける
                  </li>
                </ul>
              </div>
            </div>

            <div className="card border-2 border-[#e8627c]">
              <h3 className="text-base font-bold text-[#e8627c] mb-3">
                最安値を求める方：5足セット
              </h3>
              <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <p>
                  1足あたりの単価が最安になるのは5足セットです。1足あたり4,378円で、単品より約2,200円お得になります。
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    すべての靴にピットソールを入れられる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    家族でシェアする使い方にも最適
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    交換用の予備も確保できて安心
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 楽天・Amazonの活用法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            楽天・Amazonのクーポン・ポイント活用法
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ピットソールは公式サイト以外にも、楽天やAmazonで購入できる場合があります。ただし、販売者によって価格や正規品の保証が異なるため注意が必要です。
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                楽天市場での購入ポイント
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <ul className="space-y-2">
                  {[
                    "楽天スーパーSALE期間中は割引クーポンが配布されることがある",
                    "お買い物マラソンでの買い回りポイント倍率アップが狙い目",
                    "楽天カード利用でさらにポイント加算（通常+2倍）",
                    "5と0のつく日はポイント5倍（楽天カード利用時）",
                    "楽天ポイントが貯まっている場合は実質価格が下がる",
                    "レビューを書くとポイントがもらえるショップもある",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-[#c9a76c]">注意：</span>
                    楽天市場での販売価格は公式サイトよりも高く設定されている場合があります。ポイント還元を含めた実質価格で比較しましょう。また、非公式の出品者から購入すると偽物のリスクがあるため、公式ショップかどうかを必ず確認してください。
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Amazonでの購入ポイント
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <ul className="space-y-2">
                  {[
                    "Amazonプライムデー（7月頃）やブラックフライデー（11月）で割引の可能性",
                    "Amazon定期おトク便が利用できる場合は追加割引あり",
                    "Amazonポイントやギフトカード残高が使える",
                    "Amazonクーポン（商品ページに表示）を忘れずにチェック",
                    "タイムセール祭りで対象になることもある",
                    "Amazonプライム会員なら送料無料（公式サイトも送料無料の場合が多い）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-[#c9a76c]">注意：</span>
                    Amazonには複数の出品者がいる場合があります。「販売元」と「出荷元」を確認し、公式の販売元から購入しましょう。レビューが極端に少ない出品者や、価格が通常より大幅に安い場合は偽物のリスクが高まります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お得な購入方法ランキング */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            お得な購入方法ランキング
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              総合的にお得な購入方法をランキング形式でまとめました。価格だけでなく、正規品の保証やアフターサポートも含めた総合評価です。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                rank: "1位",
                method: "公式サイト 5足セット",
                price: "1足あたり4,378円",
                pros: [
                  "最安値の1足単価",
                  "100%正規品保証",
                  "公式サポート対応",
                  "全靴に装着可能な足数",
                ],
                cons: [
                  "初期投資額が21,890円と高め",
                  "サイズが合わないリスクが5足分",
                ],
                color: "border-l-[#c9a76c]",
              },
              {
                rank: "2位",
                method: "公式サイト 3足セット",
                price: "1足あたり4,696円",
                pros: [
                  "初めてでも手が出しやすい価格帯",
                  "100%正規品保証",
                  "通勤・プライベート・予備の3足で十分",
                ],
                cons: [
                  "5足セットより1足あたり約300円高い",
                ],
                color: "border-l-[#e8627c]",
              },
              {
                rank: "3位",
                method: "楽天市場（セール時）",
                price: "実質4,500〜5,500円程度",
                pros: [
                  "楽天ポイントが大量に貯まる",
                  "お買い物マラソンの買い回り対象",
                  "楽天カード利用でさらにお得",
                ],
                cons: [
                  "本体価格は公式より高い場合が多い",
                  "公式ショップかどうかの確認が必要",
                  "在庫切れの場合がある",
                ],
                color: "border-l-emerald-500",
              },
              {
                rank: "4位",
                method: "Amazon（セール時）",
                price: "実質5,000〜6,000円程度",
                pros: [
                  "Amazonポイント・ギフトカードが使える",
                  "プライム会員なら翌日届く",
                  "セール時に割引の可能性",
                ],
                cons: [
                  "非公式出品者による偽物リスクあり",
                  "セット割引が公式ほど充実していない",
                  "価格変動が大きい",
                ],
                color: "border-l-blue-500",
              },
              {
                rank: "5位",
                method: "公式サイト 1足単品",
                price: "6,578円",
                pros: [
                  "最小限のリスクで試せる",
                  "100%正規品保証",
                ],
                cons: [
                  "1足あたりの単価が最も高い",
                  "セット割引の恩恵を受けられない",
                  "複数の靴で使う場合に追加購入が必要",
                ],
                color: "border-l-gray-400",
              },
            ].map((item) => (
              <div
                key={item.rank}
                className={`card border-l-4 ${item.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="text-xl font-bold text-gray-900 block">
                      {item.rank}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {item.method}
                    </h3>
                    <p className="text-sm text-[#c9a76c] font-bold mb-3">
                      {item.price}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-emerald-600 font-bold mb-1">
                          メリット
                        </p>
                        <ul className="space-y-1">
                          {item.pros.map((pro) => (
                            <li
                              key={pro}
                              className="text-xs text-gray-600 flex items-start gap-1"
                            >
                              <span className="text-emerald-500 shrink-0">
                                +
                              </span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-[#e8627c] font-bold mb-1">
                          デメリット
                        </p>
                        <ul className="space-y-1">
                          {item.cons.map((con) => (
                            <li
                              key={con}
                              className="text-xs text-gray-600 flex items-start gap-1"
                            >
                              <span className="text-[#e8627c] shrink-0">
                                -
                              </span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 偽物・非正規品の注意点 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            偽物・非正規品に注意
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ピットソールは人気商品のため、偽物や類似品が出回っています。「安くてもいい」と非正規品を購入すると、効果が得られないだけでなく、足のトラブルの原因にもなりかねません。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "偽物・非正規品の特徴",
                items: [
                  "公式サイトの販売価格より極端に安い（半額以下など）",
                  "パッケージやロゴが微妙に異なる",
                  "販売者の情報が不明確・レビューが極端に少ない",
                  "フリマアプリやオークションでの出品",
                  "海外からの発送（到着に2〜3週間かかる）",
                  "「限定品」「在庫処分」などの煽り文句",
                ],
              },
              {
                title: "正規品の確認方法",
                items: [
                  "公式サイトから直接購入するのが最も確実",
                  "楽天・Amazonでは公式ショップかどうかを確認",
                  "正規品にはシリアルナンバーや正規品シールが付いている場合がある",
                  "公式サイトに掲載されている販売先以外は避ける",
                  "不自然に安い価格のものは警戒する",
                  "レビューの数と質をチェック（偽レビューに注意）",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-[#e8627c] shrink-0 mt-0.5">
                        !
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card mt-6 bg-red-50 border-red-200">
            <h3 className="text-base font-bold text-[#e8627c] mb-3">
              フリマアプリでの購入は要注意
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              メルカリやラクマなどのフリマアプリで「新品未使用」として出品されているピットソールがありますが、正規品の保証がないためおすすめしません。使用済みの中古品の場合、衛生面のリスクに加え、アーチサポートの効果が低下している可能性もあります。数百円〜千円の節約のために、効果のない偽物や劣化した中古品を掴むリスクを取る必要はありません。
            </p>
          </div>
        </div>
      </section>

      {/* 賢い買い方のコツ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールを賢く買う5つのコツ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "まず3足セットで試す",
                desc: "初回は3足セットが最もバランスの良い選択です。1足あたり約29%OFFで、万が一サイズが合わなかった場合のリスクも5足セットより低く抑えられます。効果を実感してからリピート購入で5足セットにステップアップするのが賢い方法です。",
              },
              {
                num: "02",
                title: "楽天のポイント倍率が高い日を狙う",
                desc: "楽天で購入する場合は、お買い物マラソン × 5と0のつく日 × 楽天カード利用の組み合わせでポイント還元率を最大化しましょう。これだけで実質10%以上のポイント還元が見込める場合があります。",
              },
              {
                num: "03",
                title: "公式メルマガ・SNSをフォロー",
                desc: "期間限定のキャンペーンやクーポン情報は、公式サイトのメルマガやSNS（Instagram・Twitter/X）で配信されることがあります。購入予定がある方は事前にフォローしておくと、お得な情報を見逃しません。",
              },
              {
                num: "04",
                title: "季節のセールを待つ",
                desc: "年始・春・夏・年末のタイミングでキャンペーンが開催される傾向があります。急ぎでなければ、次のセール時期まで待つのも一つの戦略です。ただし、待っている間にダイエットが遅れるコストも考慮しましょう。",
              },
              {
                num: "05",
                title: "他の製品も検討する",
                desc: "予算が限られている場合は、スリムアップインソール（2,178円〜）という選択肢もあります。効果はピットソールに劣りますが、3分の1の価格でダイエットインソールを試すことができます。まず安い製品で効果を体感してから、ピットソールにステップアップするのもアリです。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#c9a76c] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-[#c9a76c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#c9a76c] font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ：ピットソールの最安値は公式3足セット
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              2026年4月現在、ピットソールを最もお得に購入する方法は、公式サイトの3足セット（1足あたり4,696円、約29%OFF）または5足セット（1足あたり4,378円、約33%OFF）です。
            </p>
            <p>
              楽天やAmazonでもポイント還元を活用すれば実質価格を下げることはできますが、本体価格は公式より高い場合が多く、偽物のリスクもあるため注意が必要です。確実に正規品を最安値で手に入れるなら、公式サイトのセット購入が最もおすすめです。
            </p>
            <p>
              「限定クーポン」「今だけの特別価格」といった煽り文句に惑わされず、冷静に比較して自分に合った購入方法を選びましょう。大切なのは、お得に買うことだけでなく、正規品を確実に手に入れて効果を実感することです。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pitsole/price/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ピットソールの最安値・価格比較を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/pitsole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールの口コミ・効果を徹底検証【累計200万足の実力】
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"
            >
              <p className="text-sm font-semibold text-[#e8627c]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
            <Link
              href="/pitsole/price/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールの最安値は？公式・楽天・Amazon価格比較
              </p>
            </Link>
            <Link
              href="/articles/pitsole-not-working/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールは痩せない？やめた理由の真相と正しい使い方
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
