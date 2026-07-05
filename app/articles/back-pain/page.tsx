import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import MedicalDisclaimer from "../../components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "インソールと腰痛の関係｜足元から腰痛を改善する方法",
  description:
    "インソールで腰痛を改善する方法を徹底解説。足元の歪みが腰痛を引き起こすメカニズム、インソールによる改善効果、選び方のポイントを紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/back-pain/",
  },
  openGraph: {
    title: "インソールと腰痛の関係｜足元から腰痛を改善する方法",
    description:
      "インソールで腰痛を改善する方法を徹底解説。足元の歪みが腰痛を引き起こすメカニズムと改善効果を紹介。",
    url: "https://sole-laboratory.com/articles/back-pain/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールと腰痛の関係｜足元から腰痛を改善する方法",
  description:
    "インソールで腰痛を改善する方法を徹底解説。足元の歪みが腰痛を引き起こすメカニズムと改善効果を紹介。",
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
      name: "インソールで腰痛は本当に改善しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "足元の歪みやアーチの崩れが原因の腰痛であれば、インソールによる改善が期待できます。足裏のアライメントを整えることで骨盤の傾きが改善し、腰への負担が軽減されます。ただし椎間板ヘルニアなど構造的な問題が原因の場合は、医療機関での治療が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "腰痛改善にはどんなインソールを選ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "腰痛改善には、足裏のアーチをしっかりサポートし、骨盤のアライメントを整える機能のあるインソールが適しています。特に3点サポート構造（内側縦アーチ・外側縦アーチ・横アーチ）のインソールは、足裏全体のバランスを整え、腰への負担を分散する効果が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "インソールで腰痛が改善するまでどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差がありますが、一般的に2〜4週間程度で変化を感じ始める方が多いです。ただし足が新しいインソールに慣れるまでの最初の数日は、逆に違和感や軽い筋肉痛を感じることもあります。焦らず、短時間の使用から始めて徐々に使用時間を延ばしていくことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "立ち仕事で腰が痛い場合もインソールは有効ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "立ち仕事による腰痛にインソールは非常に有効です。長時間の立位では足裏のアーチが崩れやすく、それが骨盤の歪みや腰への負担増加につながります。アーチサポートと衝撃吸収機能のあるインソールを使うことで、足裏の疲労を軽減し、正しい姿勢を維持しやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "腰痛持ちにおすすめのインソールはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "腰痛持ちの方には、足裏のアライメントを整える機能に優れたピットソールがおすすめです。世界特許の3点サポート構造が足裏全体のバランスを最適化し、骨盤の傾きを改善することで腰への負担を軽減します。まずは短時間の使用から始めてください。",
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
      name: "インソールと腰痛の関係",
      item: "https://sole-laboratory.com/articles/back-pain/",
    },
  ],
};

export default function BackPainPage() {
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

      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールと腰痛の関係" }]} />

      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            インソール 腰痛 改善
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールと<span className="text-[#0ea5e9]">腰痛</span>の関係
            <br className="md:hidden" />
            足元から腰痛を改善する方法
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            腰痛の原因は腰だけにあるとは限りません。足元の歪みが骨盤を通じて腰に悪影響を与えることも。
            <br className="hidden md:block" />
            インソールで足元から整えて、腰痛を根本的にケアする方法を解説します。
          </p>
        </div>
      </section>

      {/* AI Overviews 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-sky-50 border-l-4 border-[#0ea5e9] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>インソールで腰痛が改善する可能性はあります。足裏の3つのアーチが崩れると姿勢が乱れ腰に負担がかかりますが、アーチサポート付きインソールで足元から姿勢を整えることで腰への負担を軽減できます。ただし重度の腰痛は必ず医師にご相談ください。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li><a href="#mechanism" className="hover:text-[#0ea5e9] transition-colors">1. 足元の歪みが腰痛を引き起こすメカニズム</a></li>
            <li><a href="#types" className="hover:text-[#0ea5e9] transition-colors">2. インソールが効果的な腰痛のタイプ</a></li>
            <li><a href="#improvement" className="hover:text-[#0ea5e9] transition-colors">3. インソールによる腰痛改善の仕組み</a></li>
            <li><a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">4. 腰痛改善のためのインソール選び</a></li>
            <li><a href="#exercise" className="hover:text-[#0ea5e9] transition-colors">5. インソールと併用したい腰痛対策</a></li>
            <li><a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">6. おすすめインソール3選</a></li>
            <li><a href="#faq" className="hover:text-[#0ea5e9] transition-colors">7. よくある質問（FAQ）</a></li>
            <li><a href="#summary" className="hover:text-[#0ea5e9] transition-colors">8. まとめ</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section id="mechanism" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            足元の歪みが腰痛を引き起こすメカニズム
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「腰が痛い」というと、多くの方は腰そのものに問題があると考えます。しかし実際には、足元の歪みが骨盤や背骨のアライメントに影響し、結果として腰に過度な負担がかかっているケースが少なくありません。人体は足から頭までが一つの運動連鎖でつながっているためです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足裏アーチの崩れと骨盤の関係
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足裏のアーチが崩れると、足首が内側に倒れ込む「過回内（オーバープロネーション）」が起こります。足首が内側に倒れると、膝が内側に引っ張られ（ニーイン）、さらに骨盤が前傾して腰椎の前弯が強くなります。この一連の連鎖反応により、腰の筋肉や椎間板に過度なストレスがかかり、腰痛を引き起こします。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            左右のバランス崩れによる影響
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            左右の足のアーチ高さや歩き方に差があると、骨盤が左右に傾きます。例えば右足のアーチが左足より低い場合、右側の骨盤が下がり、背骨が代償的にカーブして左の腰に負担が集中します。このような非対称性は、片側だけに現れる腰痛の原因となることがあります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            衝撃吸収不足と腰への振動
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足裏のクッション機能が不十分だと、歩行時の衝撃が膝や股関節を経由して腰に直接伝わります。コンクリートの上を薄い靴底で長時間歩くと腰が痛くなるのはこの理由です。インソールの衝撃吸収機能は、この振動を足元で緩和し、腰への負担を軽減します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            歩行姿勢の乱れと慢性的な腰痛
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            足元が不安定だと、身体は無意識にバランスを取ろうとして不自然な歩き方になります。腰を反らせたり、骨盤を左右に揺らしたりする歩行パターンは、腰椎周辺の筋肉に慢性的な疲労を蓄積させます。この状態が長く続くと、筋筋膜性腰痛や椎間関節の摩耗につながるリスクがあります。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              腰痛の約8割は「非特異的腰痛」と呼ばれ、画像検査で明確な原因が見つからないものです。この多くに足元の歪みや歩行姿勢の問題が関係していると考えられています。
            </p>
          </div>
        </section>

        <section id="types" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールが効果的な腰痛のタイプ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            すべての腰痛にインソールが有効なわけではありません。以下のタイプの腰痛にはインソールによる改善が特に期待できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">長時間歩くと腰が痛くなる</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                歩行時間に比例して腰痛が悪化する場合、足裏の衝撃吸収不足や歩行姿勢の問題が考えられます。インソールによるアーチサポートと衝撃吸収で改善が期待できるタイプです。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">立ち仕事で腰が疲れる</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                長時間の立位で足裏のアーチが崩れ、骨盤が前傾することで腰の筋肉に負担がかかります。
                <Link href="/articles/standing-work/" className="text-[#0ea5e9] hover:underline">立ち仕事とインソール</Link>
                の組み合わせは非常に効果的です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">扁平足や外反母趾がある方の腰痛</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                足の構造的な問題がある方は、歩行時のアライメント異常を通じて腰痛が生じやすい傾向があります。足の問題を
                <Link href="/articles/flat-feet/" className="text-[#0ea5e9] hover:underline">インソールで補正</Link>
                することで、腰痛の改善も見込めます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">反り腰タイプの腰痛</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                骨盤が過度に前傾し、腰椎が反りすぎている方の腰痛です。足裏のバランスを整えることで骨盤の角度が改善し、腰椎への負担が軽減されます。
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-700">注意：</span>
              椎間板ヘルニア、脊柱管狭窄症、圧迫骨折など、構造的な問題が原因の腰痛は、インソールだけでは改善が困難です。強い痛みやしびれがある場合は、必ず医療機関を受診してください。
            </p>
          </div>
        </section>

        <section id="improvement" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールによる腰痛改善の仕組み
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールがどのようにして腰痛を改善するのか、そのメカニズムを詳しく解説します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            アーチサポートによる骨盤アライメントの改善
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            アーチサポート機能のあるインソールは、足裏の3つのアーチ（内側縦アーチ、外側縦アーチ、横アーチ）を適切な高さで支えます。アーチが正しく保たれることで、足首の過回内が防止され、膝のアライメントが改善し、結果として骨盤が正しい角度に導かれます。骨盤の角度が適正になれば、腰椎への過度な負担が解消されます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            衝撃吸収による腰への負荷軽減
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            歩行時の着地衝撃をインソールの素材が吸収することで、膝や股関節を経由して腰に伝わる振動を大幅に軽減します。特にコンクリートやタイルなど硬い地面を歩くことが多い方には、衝撃吸収機能の高いインソールが腰痛予防に効果的です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            歩行姿勢の改善による筋肉バランスの最適化
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足元が安定することで、歩行時の重心移動がスムーズになり、不必要な筋肉の緊張が解消されます。腰を反らせたり左右に揺れたりする代償動作がなくなることで、腰周りの筋肉が均等に使われるようになり、慢性的な筋肉疲労が軽減されます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            荷重分散による特定部位への負担軽減
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールは足裏全体で均等に体重を支えるよう設計されています。一部の骨や筋肉に集中していた荷重が分散されることで、連鎖的に膝、股関節、腰椎への負担も均等化されます。これにより、特定の関節や筋肉に過度なストレスがかかることを防ぎます。
          </p>
        </section>

        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            腰痛改善のためのインソール選び
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            腰痛改善を目的にインソールを選ぶ際は、以下のポイントに注目しましょう。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">3つのアーチを全てサポートする設計</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                腰痛改善には、内側縦アーチだけでなく、外側縦アーチと横アーチも含めた3点サポートが重要です。3つのアーチを全て支えることで、足裏全体のバランスが最適化され、骨盤のアライメントが効果的に改善されます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">適度な硬さと衝撃吸収のバランス</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                柔らかすぎるインソールは足が沈み込んで安定性を失い、硬すぎるインソールは衝撃を十分に吸収できません。腰痛改善には、適度な硬さでアーチを支えながら、かかとや前足部で衝撃を吸収する設計のものが最適です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">ヒールカップの深さ</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                深めのヒールカップはかかとを安定させ、着地時の左右のブレを防ぎます。かかとが安定することで、その上の膝、骨盤、腰椎のアライメントも安定し、腰痛改善に寄与します。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">使用シーンに合った設計</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                通勤用、立ち仕事用、スポーツ用など、主に使用するシーンに合ったインソールを選びましょう。薄型のビジネスシューズ向け、厚手のスニーカー向けなど、靴のタイプに合った設計のものを選ぶことが快適な使用の鍵です。
              </p>
            </div>
          </div>
        </section>

        <section id="exercise" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールと併用したい腰痛対策
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールだけでなく、以下のセルフケアを併用することで、腰痛改善効果をさらに高めることができます。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">骨盤周りのストレッチ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                腸腰筋、大殿筋、梨状筋のストレッチを毎日行いましょう。骨盤周りの筋肉の柔軟性を維持することで、インソールによるアライメント改善効果がより発揮されやすくなります。起床時と就寝前の2回、各筋肉30秒ずつ伸ばすことを習慣にしてください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">体幹トレーニング</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                プランクやドローインなどの体幹トレーニングは、腰椎を安定させる深層筋（インナーマッスル）を鍛えます。インソールで足元を安定させつつ、体幹を強化することで、腰痛に対する二重の予防効果が得られます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">正しい歩き方の意識</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                インソールを入れたら、歩き方も意識しましょう。かかとから着地し、足裏全体でローリングするように重心を移動させ、母趾球で蹴り出す。この基本的な歩行パターンをインソールがサポートしてくれますが、自身でも意識することでより効果的です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ウォーキングの習慣化</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                適度な歩行は腰痛改善に効果的です。インソールで足元を安定させた状態でのウォーキングは、腰周りの血流を改善し、筋肉の柔軟性を維持します。1日20〜30分程度、自分のペースで歩くことから始めましょう。
                <Link href="/articles/effective-walking/" className="text-[#0ea5e9] hover:underline">効果的なウォーキング方法</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            おすすめインソール3選
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            腰痛改善に適した機能を備えたおすすめインソールを3つ紹介します。
          </p>

          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">腰痛対策に最適</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ピットソール（Pitsole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              世界特許の3点サポート構造が足裏のアライメントを最適化し、骨盤の傾きを改善します。足元から腰椎までの運動連鎖を整えることで、腰への負担を根本的に軽減。累計200万足の販売実績が効果の高さを裏付けています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>3つのアーチを全てサポートし骨盤アライメントを改善</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>衝撃吸収素材で歩行時の腰への振動を軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>まとめ買い割引で継続使用のコストを抑制</span></li>
            </ul>
            <Link href="/pitsole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ピットソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">姿勢改善で腰をケア</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">ランウェイキュアソール（RUNWAY CURE SOLE）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美姿勢サポート機能により、歩行時の姿勢を改善し、腰への負担を軽減します。骨盤周りの筋肉を効率的に使えるよう設計されているため、腰を支える筋力の活性化にも寄与。薄型設計でビジネスシューズにも対応可能です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>姿勢改善機能で腰への代償負担を軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>骨盤周りの筋肉を活性化し腰のサポート力を向上</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>薄型でビジネスシューズにも対応</span></li>
            </ul>
            <Link href="/runway-cure-sole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">ランウェイキュアソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">重心改善で腰痛予防</span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">スリムアップインソール（Slim Up Insole）</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師監修のもと、正しい重心移動を促す設計が特徴です。重心が適正な位置に導かれることで、腰を反らせたり丸めたりする不良姿勢を改善し、腰椎への過度な負担を防ぎます。男女兼用で幅広いサイズに対応。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>美容整体師監修で重心位置を最適化</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>不良姿勢の改善で腰椎への負担を軽減</span></li>
              <li className="flex items-start gap-2"><span className="text-[#0ea5e9] font-bold mt-0.5">+</span><span>男女兼用の幅広いサイズ展開</span></li>
            </ul>
            <Link href="/slim-up-insole/" className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline">スリムアップインソールの詳細レビューを見る &rarr;</Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は
              <Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキングページ</Link>
              をご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールで腰痛は本当に改善しますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">足元の歪みやアーチの崩れが原因の腰痛であれば、インソールによる改善が期待できます。足裏のアライメントを整えることで骨盤の傾きが改善し、腰への負担が軽減されます。ただし椎間板ヘルニアなど構造的な問題が原因の場合は、医療機関での治療が必要です。</div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">腰痛改善にはどんなインソールを選ぶべきですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">腰痛改善には、足裏のアーチをしっかりサポートし、骨盤のアライメントを整える機能のあるインソールが適しています。特に3点サポート構造（内側縦アーチ・外側縦アーチ・横アーチ）のインソールは、足裏全体のバランスを整え、腰への負担を分散する効果が期待できます。</div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">インソールで腰痛が改善するまでどのくらいかかりますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">個人差がありますが、一般的に2〜4週間程度で変化を感じ始める方が多いです。最初の数日は違和感を感じることもあります。短時間の使用から始めて徐々に使用時間を延ばしていくことが重要です。</div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">立ち仕事で腰が痛い場合もインソールは有効ですか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">立ち仕事による腰痛にインソールは非常に有効です。長時間の立位では足裏のアーチが崩れやすく、それが骨盤の歪みや腰への負担増加につながります。アーチサポートと衝撃吸収機能のあるインソールを使うことで、正しい姿勢を維持しやすくなります。</div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">腰痛持ちにおすすめのインソールはありますか？<span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">腰痛持ちの方には、足裏のアライメントを整える機能に優れたピットソールがおすすめです。世界特許の3点サポート構造が足裏全体のバランスを最適化し、骨盤の傾きを改善することで腰への負担を軽減します。</div>
            </details>
          </div>
        </section>

        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まとめ</h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            腰痛の多くは足元の歪みや歩行姿勢の問題と密接に関連しています。足裏のアーチが崩れることで骨盤が傾き、腰椎に過度な負担がかかるという運動連鎖を理解することが、根本的な改善への第一歩です。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソールは足裏のアライメントを整え、骨盤の角度を改善し、歩行時の衝撃を吸収することで、腰への負担を多角的に軽減します。ストレッチや体幹トレーニングと併用することで、より高い効果が期待できます。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">腰痛改善におすすめのインソール</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><Link href="/pitsole/" className="text-[#0ea5e9] font-bold hover:underline">ピットソール</Link>：3点サポート構造で骨盤アライメントを最適化。腰痛の根本改善に。</li>
              <li><Link href="/runway-cure-sole/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソール</Link>：美姿勢サポートで歩行姿勢を改善。薄型でビジネスにも。</li>
              <li><Link href="/slim-up-insole/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソール</Link>：重心改善で不良姿勢を矯正。腰椎への負担を軽減。</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/ranking/" className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md">
              3商品の詳細比較ランキングを見る
            </Link>
          </div>
        </section>
      </article>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/knee-pain/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールと膝痛の関係</p>
            </Link>
            <Link href="/articles/pelvis-correction/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">骨盤矯正インソールの効果を科学的に解説</p>
            </Link>
            <Link href="/articles/posture-correction/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">姿勢矯正インソールの効果</p>
            </Link>
            <Link href="/articles/standing-work/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">立ち仕事のインソール対策</p>
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
