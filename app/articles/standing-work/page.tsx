import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "立ち仕事で足が疲れない最強インソール3選【2026年】",
  description:
    "立ち仕事で足が疲れない最強インソールを厳選紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの特徴・選び方・疲れ軽減の仕組みを徹底解説。足が疲れにくいインソールをお探しの方必見。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/standing-work/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "立ち仕事で足が疲れない最強インソール3選【2026年】",
  description:
    "立ち仕事で足が疲れないインソールを厳選紹介。選び方・疲れ軽減の仕組み・おすすめ3選を徹底解説。",
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
      name: "立ち仕事用のインソールはどのくらいで効果を実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差はありますが、多くの方が1〜2週間で足の疲れの軽減を実感しています。足裏のアーチサポートによる姿勢改善効果は、使い始めた直後から感じられることもあります。ただし、自分の足に馴染むまで数日かかる場合もあるため、最低でも2週間は継続して使用することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "安全靴や作業靴にもインソールは入れられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのインソールは安全靴や作業靴にも対応しています。ただし、安全靴は通常の靴よりも中が狭い場合があるため、薄型設計のインソールを選ぶか、元々の中敷きを取り外してから使用するのがおすすめです。サイズ調整が可能なカットタイプであれば、より幅広い靴に対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "インソールは毎日洗う必要がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "毎日洗う必要はありませんが、週に1回程度のお手入れが理想的です。使用後は靴から取り出して風通しの良い場所で乾かすだけでも、衛生面を保てます。汚れが気になる場合は、ぬるま湯で軽く手洗いし、陰干ししてください。洗濯機の使用は型崩れの原因になるため避けましょう。",
      },
    },
    {
      "@type": "Question",
      name: "扁平足でも立ち仕事用インソールは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "むしろ扁平足の方にこそインソールの使用をおすすめします。扁平足は足裏のアーチが低下している状態のため、立ち仕事での疲労が通常よりも蓄積しやすくなります。アーチサポート機能のあるインソールを使うことで、足裏の荷重バランスが改善され、疲れの軽減が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "インソールの交換時期の目安はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的に3〜6ヶ月が交換の目安です。立ち仕事で毎日使用する場合は、クッション性やサポート力が低下しやすいため、3ヶ月程度での交換をおすすめします。インソールの表面がすり減っている、クッションが薄くなった、サポート感が弱まったと感じたら交換のサインです。",
      },
    },
  ],
};

export default function StandingWorkPage() {
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
          <li>
            <Link
              href="/ranking/"
              className="hover:text-[#0ea5e9] transition-colors"
            >
              ランキング
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">
            立ち仕事向けインソール
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            2026年最新版
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            立ち仕事で足が疲れない
            <br className="md:hidden" />
            最強インソール<span className="text-[#0ea5e9]">3選</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            看護師・販売員・工場勤務など、立ち仕事で足の疲れに悩む方へ。
            <br className="hidden md:block" />
            足が疲れにくいインソールの選び方とおすすめ3選を徹底解説します。
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
                href="#cause"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                1. 立ち仕事で足が疲れる原因
              </a>
            </li>
            <li>
              <a
                href="#mechanism"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                2. インソールが立ち仕事の疲れを軽減する仕組み
              </a>
            </li>
            <li>
              <a
                href="#how-to-choose"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                3. 立ち仕事向けインソールの選び方3つのポイント
              </a>
            </li>
            <li>
              <a
                href="#recommend"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                4. 立ち仕事におすすめのインソール3選
              </a>
            </li>
            <li>
              <a
                href="#other-tips"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                5. 立ち仕事の疲れを軽減するその他の方法
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                6. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a
                href="#summary"
                className="hover:text-[#0ea5e9] transition-colors"
              >
                7. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ===== H2: 立ち仕事で足が疲れる原因 ===== */}
        <section id="cause" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            立ち仕事で足が疲れる原因
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            立ち仕事をしていると、夕方には足がパンパンにむくみ、足裏やふくらはぎに強い疲労感を覚える方は少なくありません。まずは、なぜ立ち仕事で足が疲れるのか、その原因を理解しておきましょう。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            1. 長時間の同じ姿勢による血行不良
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            立ちっぱなしの状態が続くと、ふくらはぎの筋肉ポンプ機能が十分に働かず、血液やリンパ液が足に滞留します。これがむくみや疲労感の大きな原因です。デスクワークと比べ、立ち仕事では重力に逆らって血液を心臓に戻す負担が常にかかり続けるため、疲れが蓄積しやすくなります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            2. 足裏アーチの崩れ
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足裏には「内側縦アーチ」「外側縦アーチ」「横アーチ」の3つのアーチがあり、歩行時の衝撃吸収やバランス維持の役割を果たしています。長時間の立ち仕事や加齢、運動不足などによりこのアーチが崩れると、足裏全体で体重を支えきれなくなり、特定の部分に負荷が集中して疲れやすくなります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            3. 靴との相性が悪い
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            仕事で使用する靴のクッション性が低い、サイズが合っていない、あるいは足裏のアーチをサポートする機能がないといった場合、足への負担は大きくなります。特に安全靴やナースシューズなど、業種によって靴の選択肢が限られる場合、靴自体の機能だけでは足の疲労を防ぎきれないことが多いのです。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              足の疲れは単一の原因ではなく、血行不良・アーチの崩れ・靴の問題が複合的に絡み合って生じます。インソールはこれらの原因に直接アプローチできる有効な対策のひとつです。
            </p>
          </div>
        </section>

        {/* ===== H2: インソールが立ち仕事の疲れを軽減する仕組み ===== */}
        <section id="mechanism" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールが立ち仕事の疲れを軽減する仕組み
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「中敷きを変えるだけで本当に疲れが変わるの？」と疑問に思う方もいるでしょう。ここでは、インソールがどのようなメカニズムで立ち仕事の疲れを軽減するのかを解説します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足裏アーチのサポートで荷重を分散
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            高機能インソールの最大の特徴は、足裏の3つのアーチを適切にサポートする設計です。アーチが正しい位置で支えられることで、足裏全体に荷重が均等に分散され、特定の部位への過度な負荷を防ぎます。これにより足裏の痛みや疲労感が大幅に軽減されます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            衝撃吸収で関節への負担を軽減
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            立ち仕事では、歩行時だけでなく立っている間も常に足裏に体重の負荷がかかります。クッション性に優れたインソールは、この持続的な圧力を吸収・分散し、足裏だけでなく膝や腰への負担も軽減してくれます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            姿勢改善による全身の疲労軽減
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足裏は身体の土台です。インソールによって足元が安定すると、自然と姿勢が正しくなり、体幹のバランスが改善されます。姿勢が良くなると、特定の筋肉への偏った負荷が減り、足だけでなく腰や背中の疲れも軽減される効果が期待できます。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#0ea5e9]">まとめると：</span>
              インソールは「荷重分散」「衝撃吸収」「姿勢改善」の3つの働きで、立ち仕事の足の疲れにアプローチします。靴を買い替えるよりも手軽に導入でき、今の靴のまま快適さをアップできるのが大きなメリットです。
            </p>
          </div>
        </section>

        {/* ===== H2: 立ち仕事向けインソールの選び方3つのポイント ===== */}
        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            立ち仕事向けインソールの選び方3つのポイント
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            立ち仕事向けのインソールを選ぶ際に、必ずチェックしたい3つのポイントを紹介します。
          </p>

          {/* Point 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                アーチサポートの有無と設計
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              立ち仕事で最も重要なのは、足裏のアーチをしっかりサポートしてくれるかどうかです。特に、内側縦アーチ（土踏まず）のサポートは必須。加えて、横アーチや外側縦アーチもサポートする3点支持構造のインソールであれば、長時間立っていても足裏全体でバランスよく体重を支えることができます。特許技術を採用した製品は、サポート力の根拠が明確なため信頼性が高いと言えます。
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                クッション性と耐久性のバランス
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              クッション性は足の疲れ軽減に直結しますが、柔らかすぎるインソールは安定性に欠け、逆に疲れやすくなることがあります。適度な硬さでしっかり足を支えつつ、衝撃を吸収してくれる素材を使ったものを選びましょう。また、立ち仕事では毎日長時間使用するため、へたりにくい耐久性も重要です。交換時期の目安（3〜6ヶ月）を考慮し、コストパフォーマンスも確認しておくと良いでしょう。
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                自分の靴・仕事環境に合うサイズ展開
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              どんなに高機能でも、自分の靴に合わなければ意味がありません。サイズ展開が豊富で、カットして微調整できるタイプが理想的です。また、安全靴・ナースシューズ・スニーカーなど、普段の仕事で使う靴に入れたときの厚みも要チェック。厚すぎると靴の中が窮屈になり、かえって足が痛くなることもあります。
            </p>
          </div>
        </section>

        {/* ===== H2: 立ち仕事におすすめのインソール3選 ===== */}
        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            立ち仕事におすすめのインソール3選
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            上記の選び方を踏まえ、立ち仕事で足が疲れにくいと評判のインソールを3つ厳選しました。それぞれの特徴を詳しく見ていきましょう。
          </p>

          {/* Pitsole */}
          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 1
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ピットソール（Pitsole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              累計販売数200万足を突破した実績を持つ、世界特許取得のダイエットインソールです。BMZ社の特許技術「足の骨格アライメント理論」に基づく設計で、足裏の3つのアーチを的確にサポート。立ち仕事においても、足裏全体で体重を効率的に支え、長時間の使用でも疲れにくい構造になっています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>
                  世界特許取得の3点サポート構造でアーチをしっかり支える
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>XS〜Lの4サイズ展開（21〜27.5cm対応）で男女兼用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>
                  まとめ買い割引あり。2足セット以降で1足あたりの価格がお得に
                </span>
              </li>
            </ul>
            <Link
              href="/pitsole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ピットソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Runway Cure Sole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 2
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ランウェイキュアソール（RUNWAY CURE SOLE）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美姿勢サポートに特化したインソールで、立ち仕事中の姿勢改善効果に定評があります。足裏のアーチサポートに加え、骨盤周りの筋肉を正しく使えるよう設計されており、足の疲れだけでなく腰への負担軽減も期待できます。特に女性の立ち仕事従事者から高い支持を得ています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>
                  美姿勢サポート設計で足だけでなく腰や背中の疲れにもアプローチ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>M（22.5〜23.5cm）・L（24〜25cm）の2サイズ展開</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>
                  薄型設計のためナースシューズやパンプスにも入れやすい
                </span>
              </li>
            </ul>
            <Link
              href="/runway-cure-sole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ランウェイキュアソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Slim Up Insole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 3
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              スリムアップインソール（Slim Up Insole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師が監修した機能性インソールです。足裏のアーチサポートに加え、正しい重心移動を促す設計が特徴。立ち仕事で崩れがちな姿勢を足元から整え、効率的な筋肉の使い方をサポートします。男女兼用で幅広いサイズに対応しており、さまざまな職種の方に使いやすい設計です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>美容整体師監修で身体全体のバランス改善を考慮した設計</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>男女兼用で幅広いサイズに対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>正しい重心移動を促し、長時間立っていても疲れにくい</span>
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

        {/* ===== H2: 立ち仕事の疲れを軽減するその他の方法 ===== */}
        <section id="other-tips" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            立ち仕事の疲れを軽減するその他の方法
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールと合わせて実践すると、さらに足の疲れを軽減できる方法を紹介します。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                着圧ソックスの活用
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                段階的な圧力設計の着圧ソックスは、ふくらはぎの筋肉ポンプ機能を補助し、血液の循環を促進します。インソールと併用することで、足裏のサポートと血行改善の両方にアプローチでき、むくみ対策としても効果的です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                休憩時のストレッチ
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                休憩中にふくらはぎのストレッチや足首回し、つま先立ちの運動を行いましょう。血流が促進され、疲労物質の排出が早まります。1回5分程度でも、やらないのとでは大きな差が出ます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                靴の見直し
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                インソールの効果を最大限に発揮するには、靴自体の選び方も重要です。つま先に余裕があり、かかとがしっかりホールドされる靴を選びましょう。職場の規定の範囲内で、できるだけ足に合った靴を選ぶことが疲労軽減の第一歩です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                帰宅後のフットケア
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                入浴時にぬるめのお湯で足を温め、血行を促進しましょう。お風呂上がりにテニスボールや専用のフットローラーで足裏をほぐすのも効果的です。翌日に疲れを持ち越さないためにも、日々のフットケアを習慣化することが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ===== H2: よくある質問（FAQ） ===== */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                立ち仕事用のインソールはどのくらいで効果を実感できますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                個人差はありますが、多くの方が1〜2週間で足の疲れの軽減を実感しています。足裏のアーチサポートによる姿勢改善効果は、使い始めた直後から感じられることもあります。ただし、自分の足に馴染むまで数日かかる場合もあるため、最低でも2週間は継続して使用することをおすすめします。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                安全靴や作業靴にもインソールは入れられますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                はい、多くのインソールは安全靴や作業靴にも対応しています。ただし、安全靴は通常の靴よりも中が狭い場合があるため、薄型設計のインソールを選ぶか、元々の中敷きを取り外してから使用するのがおすすめです。サイズ調整が可能なカットタイプであれば、より幅広い靴に対応できます。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールは毎日洗う必要がありますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                毎日洗う必要はありませんが、週に1回程度のお手入れが理想的です。使用後は靴から取り出して風通しの良い場所で乾かすだけでも、衛生面を保てます。汚れが気になる場合は、ぬるま湯で軽く手洗いし、陰干ししてください。洗濯機の使用は型崩れの原因になるため避けましょう。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                扁平足でも立ち仕事用インソールは使えますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                むしろ扁平足の方にこそインソールの使用をおすすめします。扁平足は足裏のアーチが低下している状態のため、立ち仕事での疲労が通常よりも蓄積しやすくなります。アーチサポート機能のあるインソールを使うことで、足裏の荷重バランスが改善され、疲れの軽減が期待できます。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールの交換時期の目安はどのくらいですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                一般的に3〜6ヶ月が交換の目安です。立ち仕事で毎日使用する場合は、クッション性やサポート力が低下しやすいため、3ヶ月程度での交換をおすすめします。インソールの表面がすり減っている、クッションが薄くなった、サポート感が弱まったと感じたら交換のサインです。
              </div>
            </details>
          </div>
        </section>

        {/* ===== H2: まとめ ===== */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            立ち仕事で足が疲れる原因は、血行不良・足裏アーチの崩れ・靴との相性の3つが大きく関係しています。インソールは「荷重分散」「衝撃吸収」「姿勢改善」の3つの仕組みで、これらの原因に直接アプローチできる有効な対策です。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            選ぶ際は、アーチサポートの設計・クッション性と耐久性のバランス・自分の靴に合うサイズ展開の3つを必ずチェックしましょう。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">
              今回紹介した3商品のまとめ
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link
                  href="/pitsole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ピットソール
                </Link>
                ：世界特許技術の3点サポートで安定感抜群。男女兼用で幅広いサイズに対応。
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ランウェイキュアソール
                </Link>
                ：美姿勢サポート設計で腰への負担も軽減。薄型でナースシューズにも対応。
              </li>
              <li>
                <Link
                  href="/slim-up-insole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  スリムアップインソール
                </Link>
                ：美容整体師監修。正しい重心移動を促し、全身の疲れを軽減。
              </li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールは1日あたり数十円のコストで立ち仕事の足の疲れを大幅に軽減できる、コストパフォーマンスに優れたアイテムです。着圧ソックスやストレッチとの併用で、さらに効果を高められます。足の疲れに悩んでいる方は、まずはインソールの導入を検討してみてください。
          </p>

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
      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/flat-feet/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">扁平足・浮き指にインソールは効果ある？おすすめ3選</p>
            </Link>
            <Link href="/articles/how-to-choose/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールの選び方5つのポイント【失敗しない】</p>
            </Link>
            <Link href="/articles/leg-slimming/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">脚痩せしたい人のインソール選び完全ガイド</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50">
              <p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る →</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
