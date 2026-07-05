import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールで身長アップ？シークレットインソールの効果と注意点",
  description:
    "シークレットインソールの効果と注意点を徹底解説。身長アップの仕組み、バレないための選び方、姿勢改善との関係まで。ピットソール・ランウェイキュアソール・スリムアップインソールとの比較も紹介。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/height-up/",
  },
  openGraph: {
    title: "インソールで身長アップ？シークレットインソールの効果と注意点",
    description:
      "シークレットインソールの効果と注意点を徹底解説。身長アップの仕組み、バレないための選び方、姿勢改善との関係まで。",
    url: "https://sole-laboratory.com/articles/height-up/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールで身長アップ？シークレットインソールの効果と注意点",
  description:
    "シークレットインソールの効果と注意点を徹底解説。身長アップの仕組み、バレないための選び方、姿勢改善との関係まで。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "シークレットインソールは何cm身長が盛れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的なシークレットインソールは2〜9cm程度の身長アップが可能です。日常使いで自然なのは2〜4cm程度で、5cm以上になると歩行時の違和感や靴からかかとが浮きやすくなるため注意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "シークレットインソールはバレますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2〜3cm程度であればほぼバレません。ハイカットの靴やブーツと組み合わせれば4〜5cmでも自然に見えます。ただしローカットのスニーカーに高いインソールを入れると、かかとが靴から浮いて不自然になるため靴選びが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "シークレットインソールは足に悪いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "適切な高さと品質のものを選べば、足への悪影響は最小限です。ただし高すぎるもの（5cm以上）を長時間使用すると、つま先への荷重集中、アキレス腱の短縮、足首の不安定性などの問題が生じる可能性があります。アーチサポート付きの製品を選ぶことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "シークレットインソールとダイエットインソールは併用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的に2枚重ねての使用は推奨されません。靴内部が窮屈になり、足の健康を損なうリスクがあります。姿勢改善とスタイルアップの両方を求める場合は、アーチサポート機能付きのシークレットインソールを選ぶか、ピットソールのように姿勢改善効果のある一体型インソールがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "女性もシークレットインソールを使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろん使えます。女性用のシークレットインソールも多数販売されています。ただし女性の場合、ヒールのある靴に追加すると足への負担が大きくなるため、フラットシューズやスニーカーでの使用がおすすめです。スタイルアップが目的であれば、姿勢改善型のインソールも効果的です。",
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
      name: "シークレットインソールの効果と注意点",
      item: "https://sole-laboratory.com/articles/height-up/",
    },
  ],
};

export default function HeightUpPage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "シークレットインソールの効果と注意点" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            シークレットインソール 効果
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールで<span className="text-[#0ea5e9]">身長アップ</span>？
            <br className="md:hidden" />
            シークレットインソールの効果と注意点
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            シークレットインソールの仕組みから選び方、注意点まで徹底解説。
            <br className="hidden md:block" />
            身長を盛りつつ足の健康も守る、賢い選択法をお伝えします。
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
              <a href="#mechanism" className="hover:text-[#0ea5e9] transition-colors">
                1. シークレットインソールの仕組み
              </a>
            </li>
            <li>
              <a href="#effect" className="hover:text-[#0ea5e9] transition-colors">
                2. シークレットインソールの効果
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                3. バレないための選び方と靴の組み合わせ
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:text-[#0ea5e9] transition-colors">
                4. 使用上の注意点とリスク
              </a>
            </li>
            <li>
              <a href="#posture" className="hover:text-[#0ea5e9] transition-colors">
                5. 姿勢改善インソールという選択肢
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">
                6. おすすめのスタイルアップインソール
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
        <section id="mechanism" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            シークレットインソールの仕組み
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            シークレットインソールとは、靴の中に入れることで外見からはわからないように身長を高く見せることができるインソールです。通常のインソールと異なり、かかと部分が厚く設計されており、足のかかとを持ち上げることで身長をプラスします。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            基本構造と身長アップの原理
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            シークレットインソールは、かかと部分が最も厚く、つま先に向かって徐々に薄くなるウェッジ形状になっています。この傾斜によって足全体が前方に傾き、かかとの位置が高くなることで身長がプラスされます。見た目はハイヒールと同じ原理ですが、靴の外観からはわからないのが特徴です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            身長アップの目安（高さ別）
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            シークレットインソールは高さによって用途が異なります。2〜3cmは日常使いに最適で、自然な身長アップが可能です。4〜5cmはハイカットシューズやブーツと合わせることで違和感なく使えます。6cm以上は専用のシークレットシューズとの組み合わせが推奨されますが、歩行への影響が大きくなります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            フルインソール型とハーフインソール型
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            シークレットインソールにはフルインソール型（足裏全体をカバー）とハーフインソール型（かかと部分のみ）の2種類があります。フルインソール型は安定性に優れ、足裏全体を均一にサポートできます。ハーフインソール型は既存のインソールの上に重ねて使えるため手軽ですが、つま先との段差が大きくなり安定性に欠ける場合があります。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              シークレットインソールはあくまで物理的に足の位置を高くするアイテムです。2〜3cmなら日常使いでほぼバレず、快適に使用できます。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="effect" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            シークレットインソールの効果
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            身長アップ以外にも、シークレットインソールにはさまざまな効果があります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            見た目の印象アップ
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            身長が2〜3cm高くなるだけで、全身のシルエットが大きく変わります。頭身バランスが改善され、スタイルが良く見えるようになります。特にスーツやジャケットを着用する際は、身長アップによってシルエットがきれいに見え、堂々とした印象を与えることができます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            自信・メンタル面への好影響
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            身長にコンプレックスを感じている方にとって、シークレットインソールは心理的な支えになります。「背が高く見える」という安心感が自信につながり、姿勢も自然と良くなる傾向があります。ビジネスシーンやデートなど、自信を持ちたい場面で活用する方が多いです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足長効果と脚線美
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            かかとが高くなることで、足が長く見える効果もあります。パンツの丈感が変わり、特にスキニーパンツやストレートパンツを着用する際に脚長効果が顕著に現れます。女性の場合はスニーカーやフラットシューズで使用することで、ヒールを履かずにスタイルアップが可能です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            姿勢の変化
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            かかとが持ち上がることで、骨盤の角度が変化し、自然と背筋が伸びやすくなります。猫背の改善にもつながる場合がありますが、過度な高さのインソールは逆に腰への負担を増やす可能性もあるため、適切な高さ選びが重要です。姿勢改善が主目的であれば、専用の姿勢矯正インソールの方が効果的です。
          </p>
        </section>

        {/* Section 3 */}
        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            バレないための選び方と靴の組み合わせ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            シークレットインソールで最も気になるのが「バレないか」という点です。以下のポイントを押さえれば、自然な身長アップが実現できます。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  靴のタイプに合った高さを選ぶ
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                ローカットスニーカーなら2〜3cmが限界です。それ以上の高さを入れるとかかとが靴から浮いてしまいます。ハイカットスニーカーやブーツであれば4〜5cmまで自然に使えます。靴の深さとインソールの高さのバランスが最も重要なポイントです。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  靴のサイズを0.5〜1cm大きめにする
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                シークレットインソールを入れると靴内部の空間が狭くなるため、通常より0.5〜1cm大きめの靴を選ぶと快適です。特に甲高の方は余裕を持ったサイズ選びが重要です。ただし大きすぎると歩行時に靴が脱げそうになるため、実際に試着して確認しましょう。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  フルインソール型を選ぶ
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                ハーフインソール型（かかとだけ）は手軽ですが、靴を脱いだときに見えやすく、バレるリスクが高まります。フルインソール型であれば靴の中敷きと見分けがつかず、万が一靴を脱ぐ場面でもバレにくいです。安定性の面でもフルインソール型が優れています。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  歩き方を意識する
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                高さのあるインソールを入れると、かかとからつま先への重心移動が変わります。最初は短い距離から慣らし、自然な歩き方ができるまで練習しましょう。つま先立ちになったり、足を引きずったりする歩き方は不自然に見えてバレの原因になります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="caution" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            使用上の注意点とリスク
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            シークレットインソールは便利なアイテムですが、不適切な使用は足の健康を損なうリスクがあります。以下の注意点を必ず把握しておきましょう。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            つま先への荷重集中
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            かかとが高くなると、重心が前方に移動し、つま先への荷重が増加します。長時間の使用でつま先や中足骨頭部に痛みが出ることがあります。特に5cm以上のインソールでは、ハイヒールと同様の負荷がかかるため、外反母趾のリスクも高まります。
            <Link href="/articles/hallux-valgus-prevention/" className="text-[#0ea5e9] hover:underline">外反母趾の予防法</Link>
            も参考にしてください。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足首の不安定性
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            かかとの位置が高くなることで足首の安定性が低下し、捻挫のリスクが高まります。特に段差のある場所や不整地での歩行時は注意が必要です。ローカットの靴にハイインソールを入れる場合は特にリスクが高いため、足首をしっかり固定できるハイカットシューズとの組み合わせを推奨します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            アキレス腱への影響
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            かかとが常に高い位置にあると、アキレス腱が短縮した状態に慣れてしまい、素足やフラットな靴に戻したときにアキレス腱に過度なストレスがかかることがあります。毎日長時間使用する方は、1日の中でシークレットインソールを使わない時間を設けることが重要です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            腰への負担
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            かかとが高くなることで骨盤が前傾し、腰椎のカーブが強くなります。これが
            <Link href="/articles/back-pain/" className="text-[#0ea5e9] hover:underline">腰痛</Link>
            の原因になることがあります。特に元々反り腰の方は、高いシークレットインソールの使用に注意が必要です。腰に負担を感じたら高さを下げるか、使用時間を短くしましょう。
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-700">注意：</span>
              シークレットインソールの高さは「自然に歩ける範囲」に留めることが鉄則です。見た目の身長より足の健康を優先し、無理のない高さを選びましょう。初めての方は2〜3cmから始めることを推奨します。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="posture" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            姿勢改善インソールという選択肢
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「スタイルを良く見せたい」という目的であれば、シークレットインソール以外にも選択肢があります。それが姿勢改善型のインソールです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            姿勢改善による自然な身長アップ
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            猫背や骨盤の歪みがある方は、姿勢を正すだけで1〜3cm程度身長が高くなることがあります。姿勢改善型のインソールは足裏のアーチを適切にサポートし、骨盤のアライメントを整えることで、自然な姿勢を促します。物理的にかかとを高くするのではなく、本来あるべき姿勢に導くアプローチです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足の健康を保ちながらスタイルアップ
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            姿勢改善型インソールはフラットな設計のため、つま先への荷重集中やアキレス腱の短縮といったリスクがありません。足の健康を維持しながらスタイルアップできるため、長期間の使用に適しています。シークレットインソールのように「バレる」リスクもありません。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            ダイエット効果との両立
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            姿勢改善型のインソールは正しい筋肉の使い方を促すため、歩行時のカロリー消費が向上する効果も期待できます。スタイルアップしながらダイエット効果も得られるという、一石二鳥のアプローチです。
            <Link href="/articles/posture-correction/" className="text-[#0ea5e9] hover:underline">姿勢矯正とインソールの記事</Link>
            で詳しく解説しています。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-sky-700">比較：</span>
              シークレットインソールは「即効性」が魅力ですが、姿勢改善インソールは「持続性」と「健康面の安全性」で勝ります。目的や使用シーンに応じて使い分けるのが賢い選択です。
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            おすすめのスタイルアップインソール
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            スタイルアップと足の健康を両立できるインソールを紹介します。物理的な身長アップだけでなく、姿勢改善による美しいシルエットを目指せる製品です。
          </p>

          {/* Product 1: Pitsole */}
          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
              姿勢改善で自然にスタイルアップ
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ピットソール（Pitsole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              世界特許の3点サポート構造により、足裏のアーチを適切に支えて正しい姿勢を促します。骨盤のアライメントが整うことで、猫背の改善と自然な身長アップ効果が期待できます。シークレットインソールのリスクなく、スタイルアップと健康維持を両立できる選択肢です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>世界特許の3点サポートで自然な姿勢改善</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>足の健康を維持しながらスタイルアップ可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>XS〜XLの5サイズ展開（21〜29cm）で男女問わず使用可能</span>
              </li>
            </ul>
            <Link
              href="/pitsole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ピットソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Product 2: Runway Cure Sole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              美姿勢で脚長効果
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ランウェイキュアソール（RUNWAY CURE SOLE）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              「ランウェイを歩くような美しい姿勢」をコンセプトに設計されたインソールです。骨盤周りの筋肉を効率的に使えるよう設計されており、歩行姿勢の改善を通じて脚長効果とスタイルアップを実現します。薄型設計のためパンプスやローファーなど、さまざまな靴に対応しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>美姿勢サポートで自然な脚長効果</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>薄型設計でパンプスにも対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>骨盤周りの筋肉を活性化してスタイルアップ</span>
              </li>
            </ul>
            <Link
              href="/runway-cure-sole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ランウェイキュアソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Product 3: Slim Up Insole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              重心改善でスリム見え
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              スリムアップインソール（Slim Up Insole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師が監修し、正しい重心移動を促す設計が特徴です。歩行時に適切な筋肉を使いやすくすることで、自然と脚のラインが整い、スリムに見える効果が期待できます。ダイエット効果とスタイルアップを同時に追求する方におすすめです。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>美容整体師監修で正しい重心移動を実現</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>脚のライン改善でスリム見え効果</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>ダイエット効果とスタイルアップを同時に追求</span>
              </li>
            </ul>
            <Link
              href="/slim-up-insole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              スリムアップインソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は
              <Link
                href="/ranking/"
                className="text-[#0ea5e9] font-bold hover:underline"
              >
                おすすめランキングページ
              </Link>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                シークレットインソールは何cm身長が盛れますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                一般的なシークレットインソールは2〜9cm程度の身長アップが可能です。日常使いで自然なのは2〜4cm程度で、5cm以上になると歩行時の違和感や靴からかかとが浮きやすくなるため注意が必要です。初めての方は2〜3cmから始めることを推奨します。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                シークレットインソールはバレますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                2〜3cm程度であればほぼバレません。ハイカットの靴やブーツと組み合わせれば4〜5cmでも自然に見えます。ただしローカットのスニーカーに高いインソールを入れると、かかとが靴から浮いて不自然になるため靴選びが重要です。フルインソール型を選ぶとバレにくさが向上します。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                シークレットインソールは足に悪いですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                適切な高さと品質のものを選べば、足への悪影響は最小限です。ただし高すぎるもの（5cm以上）を長時間使用すると、つま先への荷重集中、アキレス腱の短縮、足首の不安定性などの問題が生じる可能性があります。アーチサポート付きの製品を選び、適切な高さを守ることが重要です。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                シークレットインソールとダイエットインソールは併用できますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                基本的に2枚重ねての使用は推奨されません。靴内部が窮屈になり、足の健康を損なうリスクがあります。姿勢改善とスタイルアップの両方を求める場合は、ピットソールのような姿勢改善効果のあるインソールを選ぶのがおすすめです。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                女性もシークレットインソールを使えますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                もちろん使えます。女性用のシークレットインソールも多数販売されています。ただし女性の場合、ヒールのある靴に追加すると足への負担が大きくなるため、フラットシューズやスニーカーでの使用がおすすめです。スタイルアップが目的であれば、姿勢改善型のインソールも効果的です。
              </div>
            </details>
          </div>
        </section>

        {/* Section 8: Summary */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            シークレットインソールは手軽に身長アップができる便利なアイテムですが、高さの選び方や使用上の注意点をしっかり理解して使うことが重要です。2〜3cm程度であれば日常使いでもリスクは低く、自然なスタイルアップが可能です。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            一方で、「見た目のスタイルを良くしたい」「脚を長く見せたい」という目的であれば、姿勢改善型のインソールも有力な選択肢です。足の健康を維持しながら、正しい姿勢による自然なスタイルアップを実現できます。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">
              目的別おすすめインソール
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link
                  href="/pitsole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ピットソール
                </Link>
                ：世界特許の3点サポートで姿勢改善。自然な身長アップとダイエット効果を同時に実現。
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ランウェイキュアソール
                </Link>
                ：美姿勢サポートで脚長効果。薄型設計でパンプスにも対応。
              </li>
              <li>
                <Link
                  href="/slim-up-insole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  スリムアップインソール
                </Link>
                ：美容整体師監修。正しい重心移動で脚のラインを整えスリム見え。
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md"
            >
              3商品の詳細比較ランキングを見る
            </Link>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/posture-correction/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">姿勢矯正インソールの効果</p>
            </Link>
            <Link href="/articles/leg-slimming/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールで美脚を目指す</p>
            </Link>
            <Link href="/articles/sneaker-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スニーカー用インソールおすすめ</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50">
              <p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
