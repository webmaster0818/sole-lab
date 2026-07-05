import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ランウェイキュアソールは男性でも使える？サイズ対応の真実と代替案",
  description:
    "ランウェイキュアソールの公式サイズはM（22.5〜23.5cm）/L（24.0〜25.0cm）の女性向け2サイズのみ（公式サイトにて2026年7月確認）。25cmを超える男性は対応外です。足サイズ別の判断基準と、ピットソール・スリムアップインソールなど男性が選べる代替案を公式確認情報のみで解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/runway-mens-review/",
  },
  openGraph: {
    title: "ランウェイキュアソールは男性でも使える？サイズ対応の真実と代替案",
    description:
      "ランウェイキュアソールの公式サイズはM/L（22.5〜25.0cm）の女性向け展開のみ。25cm超の男性は対応外。足サイズ別の代替案を公式確認情報で解説。",
    url: "https://sole-laboratory.com/articles/runway-mens-review/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ランウェイキュアソールは男性でも使える？サイズ対応の真実と代替案",
  description:
    "ランウェイキュアソールの公式サイズはM（22.5〜23.5cm）/L（24.0〜25.0cm）の女性向け2サイズのみ。25cmを超える男性は対応外です。足サイズ別の判断基準と男性向けの代替案を公式確認情報に基づいて解説します。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-05-17",
  dateModified: "2026-07-05",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ランウェイキュアソールは男性でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式のサイズ展開はM（22.5〜23.5cm）とL（24.0〜25.0cm）の女性向け2サイズのみで、対応最大は25.0cmです（公式サイトにて2026年7月確認）。足の実寸が25.0cmを超える男性は対応外となります。実寸が25.0cm以内の男性であれば物理的には装着できますが、公式は女性向け商品として案内しており、男性向けの使用案内はありません。",
      },
    },
    {
      "@type": "Question",
      name: "メンズ用（男性用）のランウェイキュアソールは販売されていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年7月に公式サイトを確認した時点で、メンズ用サイズや男性向けモデルの案内はありません。サイズはM/Lの2サイズ（22.5〜25.0cm）のみの展開です。",
      },
    },
    {
      "@type": "Question",
      name: "足のサイズが26cm・27cmの男性が使う方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ありません。ランウェイキュアソールは足に直接履くソックス型で、対応最大サイズは25.0cmです（公式サイトにて2026年7月確認）。靴の中敷き型と違いカットなどでの調整もできないため、サイズを超える足に無理に合わせる方法はなく、対応サイズの合う別製品を選ぶのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "25cmを超える男性はどのインソールを選べばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "靴に入れる中敷き型のピットソールはXS/S/M/L/XLの5サイズ展開で、21.0〜29.0cmまで対応します（XLはブラック/ピンク限定・公式サイトにて2026年7月確認）。25cm超の男性はM以上が候補です。また、足の実寸が26.5cm以内であればスリムアップインソールのM（25.0〜26.5cm）も選択肢になります。",
      },
    },
    {
      "@type": "Question",
      name: "ランウェイキュアソールの価格はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトでは単品6,980円、2足セット11,980円、3足セット17,960円で案内されています（2026年7月確認）。最新の価格やキャンペーンは公式サイトでご確認ください。",
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
      item: "https://sole-laboratory.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "知識・コラム",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ランウェイキュアソールは男性でも使える？",
      item: "https://sole-laboratory.com/articles/runway-mens-review/",
    },
  ],
};

export default function RunwayMensReviewPage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "ランウェイキュアソールは男性でも使える？" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            公式サイトにて2026年7月確認
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールは
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">男性でも使える？</span>
            <br />
            サイズ対応の真実と代替案
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            結論：公式サイズはM（22.5〜23.5cm）/L（24.0〜25.0cm）の女性向け2サイズのみ。
            <br className="hidden md:block" />
            25cmを超える男性は対応外です。足サイズ別の判断基準と代替案を公式確認情報で解説します。
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
              <a href="#conclusion" className="hover:text-[#0ea5e9] transition-colors">
                1. 結論：公式サイズは女性向けM/Lの2サイズのみ
              </a>
            </li>
            <li>
              <a href="#size" className="hover:text-[#0ea5e9] transition-colors">
                2. 公式サイズ展開と男性の足サイズの関係
              </a>
            </li>
            <li>
              <a href="#under25" className="hover:text-[#0ea5e9] transition-colors">
                3. 足の実寸が25.0cm以内の男性の場合
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:text-[#0ea5e9] transition-colors">
                4. 25cmを超える男性の代替案
              </a>
            </li>
            <li>
              <a href="#chart" className="hover:text-[#0ea5e9] transition-colors">
                5. 足サイズ別の選択肢早見表
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-[#0ea5e9] transition-colors">
                6. 3製品の価格比較（公式確認値）
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                7. よくある質問（FAQ）
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

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Section 1 */}
        <section id="conclusion" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            結論：公式サイズは女性向けM/Lの2サイズのみ
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">結論：</span>
              ランウェイキュアソール（RUNWAY CURE SOLE）の公式サイズ展開は
              <span className="font-bold">M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズのみ</span>
              で、対応最大は25.0cmです（公式サイトにて2026年7月確認）。公式は女性向け商品として案内しており、
              <span className="font-bold">足の実寸が25.0cmを超える男性は対応外</span>です。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「ランウェイキュアソール メンズ」「男性でも使える？」と検索される方は多いのですが、まずこの事実を押さえてください。ランウェイキュアソールは靴に入れる中敷き型のインソールではなく、<span className="font-bold">足に直接履くソックス型</span>の製品です。ソックス型である以上、足の実寸がサイズ範囲に収まらなければ正しく装着できず、中敷き型のようにカットして調整する余地もありません。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            経済産業省・JIS等で用いられる一般的な靴サイズの分布として、成人男性の足サイズは25cm以上が中心です。つまり、<span className="font-bold">一般的な足サイズの成人男性の多くは、ランウェイキュアソールの対応範囲（最大25.0cm）に収まりません</span>。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            当サイトの<Link href="/runway-cure-sole/" className="text-[#0ea5e9] hover:underline">ランウェイキュアソール製品ページ</Link>でも、公式確認済みのサイズ情報として「男性はサイズ非対応のため使用できない」旨を明記しています。本記事はこの公式情報を前提に、「では男性はどうすればよいのか」に正面から答えます。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">お詫びと訂正（2026年7月5日）：</span>
              本記事は以前「男性も使用できる」前提の内容を掲載していましたが、公式サイトの再確認により、サイズ展開が女性向けM/L（22.5〜25.0cm）のみであることを確認したため、全面的に訂正しました。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="size" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            公式サイズ展開と男性の足サイズの関係
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            公式サイトに掲載されているサイズ展開は次の2つだけです（公式サイトにて2026年7月確認）。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            ランウェイキュアソール公式サイズ表
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">サイズ表記</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">対応サイズ（cm）</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">男性の足サイズとの関係</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">M</td>
                  <td className="border border-gray-200 px-4 py-3">22.5〜23.5</td>
                  <td className="border border-gray-200 px-4 py-3">一般的な男性の足サイズより小さい</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">L</td>
                  <td className="border border-gray-200 px-4 py-3">24.0〜25.0</td>
                  <td className="border border-gray-200 px-4 py-3">足の実寸25.0cm以内の男性のみ範囲内</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            出典：ランウェイキュアソール公式サイト（2026年7月確認）。S・XLなどのサイズや、メンズ用モデルの案内はありません。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            なぜ「サイズ超えでも無理に使う」ができないのか
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランウェイキュアソールはソックスのように足へ直接履くタイプです。中敷き型インソールであれば「大きめを買ってカットする」「かかとを合わせて余りを許容する」といった調整の余地がありますが、ソックス型は足全体を包む構造のため、対応サイズを超える足に合わせる手段がありません。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            自分の足の実寸を正確に測る方法は、<Link href="/articles/runway-size-guide/" className="text-[#0ea5e9] hover:underline">ランウェイキュアソールサイズガイド</Link>で解説しています。靴のサイズ（足入れサイズ）と足の実寸は異なることが多いため、判断は必ず実寸で行ってください。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              判断基準は「足の実寸が25.0cm以内かどうか」の一点です。25.0cmを超える男性は、次のセクションで紹介する代替製品を検討してください。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="under25" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            足の実寸が25.0cm以内の男性の場合
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足の実寸が25.0cm以内（Lサイズ範囲：24.0〜25.0cm）であれば、サイズのうえでは物理的に装着できます。ただし、次の点を理解したうえで判断してください。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                公式は女性向け商品として案内している
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                公式サイトの商品説明・サイズ展開は女性を想定したものです（2026年7月確認）。男性向けの使用案内・推奨は公式にはなく、男性が使用した場合のフィット感や効果について公式の情報はありません。当サイトも男性の使用を推奨する立場は取りません。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                足囲（ワイズ）・甲の高さは実寸と別問題
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                足長が範囲内でも、一般に男性は女性より足囲や甲の高さが大きい傾向があります。女性の足を想定したソックス型製品では、足長が合っても圧迫感が生じる可能性は否定できません。この点についても公式の男性向け情報はないため、確実なことは言えません。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                迷ったら対応サイズが明確な製品を選ぶ
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                足の実寸が25.0cm以内の男性でも、「男性の足サイズを含む対応表を公式が明示している製品」を選ぶ方が、サイズ選びの失敗リスクは小さくなります。後述のピットソールは公式サイズ表に男性の一般的な足サイズ範囲が含まれています。
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            サイズ選び全般の考え方は<Link href="/articles/size-adjustment/" className="text-[#0ea5e9] hover:underline">インソールサイズ調整の記事</Link>も参考になります（カット調整の話は中敷き型が対象で、ソックス型のランウェイキュアソールには適用できません）。
          </p>
        </section>

        {/* Section 4 */}
        <section id="alternatives" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            25cmを超える男性の代替案
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            足の実寸が25.0cmを超える男性がランウェイキュアソールと同系統（姿勢サポート・足元ケア系）の製品を探す場合、当サイトで公式情報を確認済みの選択肢は次の2つです。いずれも数値は公式サイトにて2026年7月確認のものです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            ピットソール：21.0〜29.0cmの5サイズ展開
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <Link href="/pitsole/" className="text-[#0ea5e9] hover:underline">ピットソール</Link>は靴に入れる中敷き型のインソールで、公式サイズ展開はXS/S/M/L/XLの5サイズ。男性の一般的な足サイズを含む広い範囲をカバーしています。
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">サイズ表記</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">対応サイズ（cm）</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">XS</td>
                  <td className="border border-gray-200 px-4 py-3">21.0〜22.5</td>
                  <td className="border border-gray-200 px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">S</td>
                  <td className="border border-gray-200 px-4 py-3">23.0〜24.5</td>
                  <td className="border border-gray-200 px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">M</td>
                  <td className="border border-gray-200 px-4 py-3">25.0〜26.0</td>
                  <td className="border border-gray-200 px-4 py-3">25cm超の男性の第一候補</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">L</td>
                  <td className="border border-gray-200 px-4 py-3">26.5〜27.5</td>
                  <td className="border border-gray-200 px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">XL</td>
                  <td className="border border-gray-200 px-4 py-3">28.0〜29.0</td>
                  <td className="border border-gray-200 px-4 py-3">カラーはブラック/ピンクのみ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            出典：ピットソール公式サイト（2026年7月確認）。詳細は<Link href="/pitsole/size/" className="text-[#0ea5e9] hover:underline">ピットソールのサイズ情報ページ</Link>をご覧ください。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            スリムアップインソール：最大26.5cmまで
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <Link href="/slim-up-insole/" className="text-[#0ea5e9] hover:underline">スリムアップインソール</Link>の公式サイズ展開はS（23.0〜24.5cm）とM（25.0〜26.5cm）の2サイズで、対応最大は26.5cmです（公式サイトにて2026年7月確認）。足の実寸が26.5cm以内の男性であれば選択肢になりますが、それを超える場合は対応外です。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              足の実寸が26.5cmを超える男性の場合、当サイトで公式サイズを確認済みの3製品のうち対応するのは<span className="font-bold">ピットソール（L/XL）のみ</span>です。3製品の詳しい比較は<Link href="/compare/pitsole-vs-runway/" className="text-[#0ea5e9] hover:underline">ピットソール vs ランウェイキュアソール比較</Link>や<Link href="/ranking/" className="text-[#0ea5e9] hover:underline">おすすめランキングページ</Link>をご覧ください。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="chart" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            足サイズ別の選択肢早見表
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            男性が足の実寸から選択肢を判断するための早見表です。各製品の対応範囲はすべて公式サイトにて2026年7月確認の数値に基づきます。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">足の実寸</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">ランウェイキュアソール</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">ピットソール</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">スリムアップインソール</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">〜25.0cm</td>
                  <td className="border border-gray-200 px-4 py-3">L範囲内（ただし公式は女性向け案内）</td>
                  <td className="border border-gray-200 px-4 py-3">対応（S〜M）</td>
                  <td className="border border-gray-200 px-4 py-3">対応（S〜M）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">25.0cm超〜26.5cm</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                  <td className="border border-gray-200 px-4 py-3">対応（M〜L）</td>
                  <td className="border border-gray-200 px-4 py-3">対応（M）</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">26.5cm超〜29.0cm</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                  <td className="border border-gray-200 px-4 py-3">対応（L〜XL ※XLはブラック/ピンクのみ）</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">29.0cm超</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">対応外</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            境界値（各範囲の区切り）付近の方は、必ず各製品の公式サイズ表の刻みで判断してください。製品タイプも異なる点に注意が必要です（ランウェイキュアソール＝足に履くソックス型、ピットソール・スリムアップインソール＝靴に入れる中敷き型）。
          </p>
        </section>

        {/* Section 6 */}
        <section id="price" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            3製品の価格比較（公式確認値）
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            参考として、各製品の公式サイト価格を掲載します（いずれも公式サイトにて2026年7月確認・税込表示に基づく）。最新の価格・キャンペーンは各公式サイトでご確認ください。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">製品</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">単品</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">セット価格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">ランウェイキュアソール</td>
                  <td className="border border-gray-200 px-4 py-3">6,980円</td>
                  <td className="border border-gray-200 px-4 py-3">2足11,980円 / 3足17,960円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">ピットソール</td>
                  <td className="border border-gray-200 px-4 py-3">6,578円</td>
                  <td className="border border-gray-200 px-4 py-3">2足12,364円 / 4足18,120円 / 6足24,156円</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">スリムアップインソール</td>
                  <td className="border border-gray-200 px-4 py-3">6,980円</td>
                  <td className="border border-gray-200 px-4 py-3">公式サイトでご確認ください</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            ランウェイキュアソールの価格・購入方法の詳細は<Link href="/runway-cure-sole/price/" className="text-[#0ea5e9] hover:underline">ランウェイキュアソール料金ページ</Link>で解説しています。ただし前述のとおり、25cmを超える男性はサイズ対応外である点にご注意ください。
          </p>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. ランウェイキュアソールは男性でも使えますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. 公式のサイズ展開はM（22.5〜23.5cm）とL（24.0〜25.0cm）の女性向け2サイズのみで、対応最大は25.0cmです（公式サイトにて2026年7月確認）。足の実寸が25.0cmを超える男性は対応外となります。実寸が25.0cm以内の男性であれば物理的には装着できますが、公式は女性向け商品として案内しており、男性向けの使用案内はありません。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. メンズ用（男性用）のランウェイキュアソールは販売されていますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. 2026年7月に公式サイトを確認した時点で、メンズ用サイズや男性向けモデルの案内はありません。サイズはM/Lの2サイズ（22.5〜25.0cm）のみの展開です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. 足のサイズが26cm・27cmの男性が使う方法はありますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. ありません。ランウェイキュアソールは足に直接履くソックス型で、対応最大サイズは25.0cmです（公式サイトにて2026年7月確認）。靴の中敷き型と違いカットなどでの調整もできないため、サイズを超える足に無理に合わせる方法はなく、対応サイズの合う別製品を選ぶのが現実的です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. 25cmを超える男性はどのインソールを選べばよいですか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. 靴に入れる中敷き型のピットソールはXS/S/M/L/XLの5サイズ展開で、21.0〜29.0cmまで対応します（XLはブラック/ピンク限定・公式サイトにて2026年7月確認）。25cm超の男性はM以上が候補です。また、足の実寸が26.5cm以内であればスリムアップインソールのM（25.0〜26.5cm）も選択肢になります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. ランウェイキュアソールの価格はいくらですか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. 公式サイトでは単品6,980円、2足セット11,980円、3足セット17,960円で案内されています（2026年7月確認）。最新の価格やキャンペーンは公式サイトでご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Summary */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「ランウェイキュアソールは男性でも使えるのか」という疑問への答えを、公式確認済みの事実のみで整理します。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3">
              男性向けの結論（公式サイトにて2026年7月確認）
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><span className="font-bold">サイズ展開：</span>M（22.5〜23.5cm）/L（24.0〜25.0cm）の女性向け2サイズのみ。メンズ用モデルはない。</li>
              <li><span className="font-bold">25cm超の男性：</span>対応外。ソックス型のためカット等での調整も不可。</li>
              <li><span className="font-bold">実寸25.0cm以内の男性：</span>物理的には装着できるが、公式は女性向けとして案内しており男性向けの使用案内はない。</li>
              <li><span className="font-bold">代替案：</span>ピットソール（5サイズ・21.0〜29.0cm、XLはブラック/ピンク限定）。実寸26.5cm以内ならスリムアップインソールMも選択肢。</li>
              <li><span className="font-bold">価格：</span>ランウェイ単品6,980円/2足11,980円/3足17,960円。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            足の実寸が25cmを超える男性は、対応サイズが公式に明示されている<Link href="/pitsole/" className="text-[#0ea5e9] hover:underline">ピットソール</Link>を第一候補として検討してください。サイズの詳細は<Link href="/pitsole/size/" className="text-[#0ea5e9] hover:underline">ピットソールのサイズ情報ページ</Link>で確認できます。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              ランウェイキュアソールの製品情報・公式スペックは
              <Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール製品ページ</Link>で、3製品の総合比較は<Link href="/ranking/" className="text-[#0ea5e9] hover:underline">おすすめランキングページ</Link>で確認できます。
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
