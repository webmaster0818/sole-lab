import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "扁平足・浮き指にインソールは効果ある？おすすめ3選｜ソールラボ",
  description:
    "扁平足や浮き指の原因・症状を分かりやすく解説し、インソールによる改善効果・選び方・おすすめ3選を紹介。日常でできるセルフケアやよくある質問まで網羅した完全ガイドです。",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "扁平足・浮き指にインソールは効果ある？おすすめ3選",
  description:
    "扁平足や浮き指の原因と症状を解説し、インソールの改善効果・選び方・おすすめ商品を紹介する完全ガイド。",
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
      name: "扁平足はインソールで治りますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソールだけで骨格そのものを変えることは難しいですが、アーチサポート付きインソールを継続使用することで足裏アーチが正しい位置に導かれ、痛みや疲れの軽減が期待できます。軽度〜中等度の扁平足であれば、インソールと足指トレーニングの併用で大幅な改善が見込めます。",
      },
    },
    {
      "@type": "Question",
      name: "浮き指かどうかはどうやって確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "簡単なセルフチェック方法があります。まっすぐ立った状態で、誰かに足の指の下に薄い紙を差し込んでもらいましょう。抵抗なくスッと入る指があれば、その指は浮き指の可能性があります。また、足裏に薄くインクを塗って紙の上に立つフットプリントでも確認できます。指の跡がつかない場合は浮き指です。",
      },
    },
    {
      "@type": "Question",
      name: "扁平足用インソールはどのくらいで効果を感じますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差がありますが、足裏の疲労軽減は1〜2週間で実感する方が多いです。アーチの回復や歩行バランスの改善には2〜3ヶ月の継続使用が目安になります。最初は短時間の使用から始め、徐々に慣らしていくことが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "子どもの扁平足にもインソールは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "小児扁平足の多くは成長とともに自然にアーチが形成されますが、7歳を過ぎてもアーチができない場合はインソールの使用が有効です。成長期の足は変化が大きいため、3〜6ヶ月ごとにサイズを見直しましょう。ピットソールはXSサイズ（21cm〜）から対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "扁平足と浮き指を同時にケアできるインソールはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、足裏の3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）すべてをサポートするインソールであれば、扁平足と浮き指の両方に効果が期待できます。本記事で紹介しているピットソールは、特許技術で3点のアーチを同時にサポートする設計になっています。",
      },
    },
  ],
};

export default function FlatFeetPage() {
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
          <li className="text-gray-900 font-medium">
            扁平足・浮き指にインソールは効果ある？
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            足のトラブル改善ガイド
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            扁平足・浮き指に
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">インソール</span>は効果ある？
            <br />
            おすすめ3選
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            「足が疲れやすい」「指が地面についていない気がする」——
            <br className="hidden md:block" />
            それは扁平足や浮き指のサインかもしれません。原因・症状からインソールの選び方・おすすめ商品まで徹底解説します。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#what" className="hover:text-[#0ea5e9] transition-colors">
                1. 扁平足・浮き指とは？
              </a>
            </li>
            <li>
              <a href="#cause" className="hover:text-[#0ea5e9] transition-colors">
                2. 原因と症状
              </a>
            </li>
            <li>
              <a href="#effect" className="hover:text-[#0ea5e9] transition-colors">
                3. インソールの効果
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                4. インソールの選び方
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">
                5. おすすめインソール3選
              </a>
            </li>
            <li>
              <a href="#daily-care" className="hover:text-[#0ea5e9] transition-colors">
                6. 日常でできるケア
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

      {/* 扁平足・浮き指とは？ */}
      <section id="what" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          扁平足・浮き指とは？
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          扁平足（へんぺいそく）と浮き指（うきゆび）は、日本人に非常に多い足のトラブルです。どちらも「足裏のアーチの崩れ」が深く関わっており、放置すると膝痛・腰痛・姿勢の悪化など全身の不調につながります。
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              扁平足とは
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              足裏の内側縦アーチ（いわゆる土踏まず）が低下し、足裏全体が地面にべったりとつく状態です。正常な足裏には3つのアーチ（内側縦・外側縦・横）があり、これらがバネのように衝撃を吸収しています。扁平足ではこのバネ機能が失われるため、歩行時に足・膝・腰への負担が大きくなります。日本人の約7割が何らかのアーチ崩れを持っているとされ、自覚のない「隠れ扁平足」の方も少なくありません。
            </p>
          </div>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              浮き指とは
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              立った状態で足の指が地面に接地しない、または十分に荷重がかかっていない状態を指します。足の指が「浮いている」ため、かかとと指の付け根だけで体重を支えることになり、本来の足指のグリップ力が発揮できません。現代では女性の約8割、男性の約6割に浮き指の傾向があるという調査もあり、ハイヒールや先の細い靴の常用が大きな要因とされています。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p className="text-sm font-bold text-gray-900 mb-2">扁平足と浮き指は併発しやすい</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            扁平足と浮き指は同時に起こるケースが非常に多いです。アーチが崩れると足指でしっかり踏ん張れなくなり、浮き指を引き起こします。逆に、浮き指で足指を使えないとアーチを支える筋肉が弱まり、扁平足が進行します。この悪循環を断ち切るためには、足裏全体のアーチを回復させるアプローチが必要です。
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          どちらの症状も「痛みがないから大丈夫」と放置されがちですが、足は身体の土台です。足裏の機能低下は膝・腰・肩など上半身にまで波及し、慢性的な体の不調の原因になり得ます。次のセクションで、具体的な原因と症状を詳しく見ていきましょう。
        </p>
      </section>

      {/* 原因と症状 */}
      <section id="cause" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          原因と症状
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          扁平足・浮き指にはさまざまな原因があります。先天的な骨格の問題だけでなく、日常の生活習慣が大きく影響しています。
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">主な原因</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">1.</span>
              <span><strong>運動不足による足裏筋力の低下</strong> -- 足裏のアーチは筋肉と靭帯で支えられています。歩く機会の減少やデスクワーク中心の生活で筋力が衰えると、アーチが維持できなくなります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">2.</span>
              <span><strong>合わない靴の長期使用</strong> -- 幅の狭い靴やヒールの高い靴は足指の動きを制限し、浮き指を誘発します。一方、大きすぎる靴は足が靴の中で滑り、不安定な歩行パターンを生みます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">3.</span>
              <span><strong>体重の増加</strong> -- 体重が増えると足裏のアーチにかかる荷重が大きくなり、アーチが押しつぶされて扁平足が進行します。特に急激な体重増加は足裏への負担が大きくなります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">4.</span>
              <span><strong>加齢による筋力・靭帯の弱化</strong> -- 年齢とともに後脛骨筋腱や足底腱膜が弱くなり、アーチを支えきれなくなります。40代以降に扁平足が進行するケースが多いのはこのためです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold mt-0.5">5.</span>
              <span><strong>歩き方のクセ</strong> -- 内股歩き・すり足・ペタペタ歩きなど、足指を使わない歩行パターンが続くと、足裏の筋肉が退化し浮き指が進行します。</span>
            </li>
          </ul>
        </div>

        <p className="text-sm font-bold text-gray-900 mb-3">扁平足の主な症状</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>長時間歩くと足裏（特に土踏まず付近）が痛くなる</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>夕方になると足がむくみ、靴がきつく感じる</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>靴底の内側が偏ってすり減る</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>ふくらはぎや膝の内側に痛みが出やすい</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>足底腱膜炎（かかとの痛み）を繰り返す</span>
          </div>
        </div>

        <p className="text-sm font-bold text-gray-900 mb-3">浮き指の主な症状</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>足指の付け根（中足骨頭部）にタコやウオノメができる</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>立っていると前のめりになりやすく、姿勢が安定しない</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>歩行時につまずきやすい</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>外反母趾や巻き爪を併発している</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
            <span>冷え性がひどい（足指の血行不良）</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm font-bold text-gray-900 mb-2">放置するとどうなる？</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            扁平足や浮き指を放置すると、足裏だけの問題では済みません。衝撃吸収力が低下した状態で歩き続けると、膝関節への負担が増大し変形性膝関節症のリスクが高まります。また、足の不安定さを補うために腰や背中の筋肉が過剰に働き、慢性的な腰痛・肩こりの原因にもなります。さらに、歩行効率の低下により疲れやすくなり、活動量が減って体重増加→さらにアーチが崩れるという悪循環に陥ることもあります。
          </p>
        </div>
      </section>

      {/* インソールの効果 */}
      <section id="effect" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          インソールの効果
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          扁平足・浮き指に対するインソールの効果は、医療の現場でも広く認められています。整形外科では「足底板療法」として処方されることもあり、足裏のアーチを外部からサポートすることで症状の改善を図ります。具体的には次の4つの効果が期待できます。
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">1</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">アーチの補整と衝撃吸収</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              低下した土踏まずをインソールのアーチサポートが持ち上げ、本来のアーチ形状に近づけます。これにより足裏のバネ機能が回復し、歩行時の衝撃吸収力が向上。足・膝・腰への負担が軽減されます。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">2</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">足指の接地を促す</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              横アーチをサポートするインソールは、中足骨を持ち上げることで足指が自然と地面に向かう角度を作ります。浮き指の改善には、この横アーチの補整が特に重要です。足指がしっかり接地するようになると、踏ん張る力が回復します。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">3</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">歩行バランスの改善</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              扁平足の方は足が内側に倒れ込む「過回内（オーバープロネーション）」が起こりやすく、これが膝や腰のトラブルを招きます。インソールでアーチを支えることで過回内を抑制し、足首→膝→股関節のアライメントが整います。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-[#0ea5e9] font-bold text-lg">4</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">足裏筋肉の活性化</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              適切なインソールは足裏を「ガチガチに固定」するのではなく、正しい位置に「ガイド」する設計です。そのため、足裏本来の筋肉が正しい位置で使われるようになり、使い続けるうちに自力でアーチを維持する力が育っていきます。
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-2">クッションインソールとの違い</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            100円ショップなどで手に入るクッションインソールは柔らかい素材で足裏の疲れを一時的に緩和しますが、アーチを支える構造がないため扁平足・浮き指の改善効果はほとんど期待できません。むしろ、柔らかすぎる素材は足裏を沈み込ませ、アーチの崩れを助長する場合もあります。<strong>改善を目的とするなら、硬さのある素材でアーチを「支える」設計のインソール</strong>を選ぶことが重要です。
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          なお、インソールの効果を最大限に引き出すには継続使用が欠かせません。最初の1〜2週間は足裏に違和感を覚えることがありますが、これは今まで使われていなかった筋肉が刺激されている証拠です。まずは1日2〜3時間から始め、2週間かけて徐々に終日使用へと移行していきましょう。
        </p>
      </section>

      {/* インソールの選び方 */}
      <section id="how-to-choose" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          扁平足・浮き指向けインソールの選び方
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          「アーチサポート付き」と謳うインソールは多数ありますが、品質はピンキリです。扁平足・浮き指の改善を本気で目指すなら、以下の5つのポイントを確認しましょう。
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">1</span>3つのアーチすべてをサポートしているか
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              足裏には内側縦アーチ・外側縦アーチ・横アーチの3つがあります。扁平足対策には縦アーチの補整が、浮き指対策には横アーチの補整が特に重要です。両方を同時にケアするなら、3つのアーチすべてをサポートする設計のインソールを選びましょう。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">2</span>ヒールカップの深さ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              かかとを包み込むヒールカップは、足全体の安定性を大きく左右します。扁平足の方は足が内側に倒れやすいため、深めのヒールカップでかかとを安定させることが重要です。かかとがブレると、いくらアーチをサポートしても効果が半減します。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">3</span>適度な硬さがあるか
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              柔らかすぎるインソールはアーチを支えきれず、体重で沈んでしまいます。高反発素材や硬質樹脂を使用した、しっかりとした硬さのあるインソールを選びましょう。ただし、硬すぎると足裏が痛くなるため、表面にクッション層を備えた二層構造のものがバランスに優れています。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">4</span>サイズが合っているか
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              インソールのアーチサポートは、足裏の正しい位置に来て初めて効果を発揮します。サイズが合っていないと、アーチの位置がずれて逆に痛みが出ることもあります。サイズ展開が豊富な商品を選び、自分の足に合ったものを見つけることが大切です。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              <span className="text-[#0ea5e9] mr-2">5</span>科学的根拠があるか
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              特許技術の取得、大学や研究機関との共同研究、臨床試験データの公開など、科学的な裏付けがある商品を選びましょう。特にアーチサポートの角度や硬さは人体工学に基づいた設計であることが重要で、根拠のない商品との効果の差は歴然です。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめインソール3選 */}
      <section id="recommend" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          扁平足・浮き指におすすめのインソール3選
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          当サイトで取り扱っているインソール3商品は、いずれも足裏のアーチサポートに優れた設計です。扁平足・浮き指の改善という観点から、それぞれの特徴を詳しく解説します。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          各商品の総合比較は
          <Link href="/ranking" className="text-[#0ea5e9] underline hover:no-underline">
            インソールおすすめランキング
          </Link>
          のページもあわせてご覧ください。
        </p>

        {/* ピットソール */}
        <div className="border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 relative">
          <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
            扁平足・浮き指対策 No.1
          </span>
          <h3 className="font-bold text-gray-900 text-base md:text-lg mt-2 mb-3">
            ピットソール（Pitsole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                世界特許技術「キュボイドバランス理論」を採用し、足裏の3つのアーチすべてを同時にサポートする設計が最大の特徴です。特に<strong>立方骨（キュボイド）を押し上げるパッド</strong>が外側縦アーチを持ち上げ、足全体の骨格バランスを根本から整えます。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                扁平足に対しては内側縦アーチの補整、浮き指に対しては横アーチの補整が同時に行われるため、両方の症状を併発している方に最もおすすめです。臨床試験で足裏バランスの改善効果が確認されており、科学的根拠の面でも高い評価を得ています。
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">スペック</p>
              <ul className="space-y-1">
                <li>特許技術：キュボイドバランス理論</li>
                <li>サイズ展開：XS〜XL（21〜28cm）</li>
                <li>アーチ対応：3点（縦2＋横1）</li>
                <li>ヒールカップ：あり</li>
                <li>厚さ：約2.5mm（つま先部）</li>
              </ul>
            </div>
          </div>
          <Link
            href="/pitsole"
            className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
          >
            ピットソールの詳細を見る
          </Link>
        </div>

        {/* ランウェイキュアソール */}
        <div className="border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3">
            ランウェイキュアソール（Runway Cure Sole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                美容整体師が監修したインソールで、足裏のアーチ補整に加えて<strong>骨盤矯正</strong>にも注力した設計が特徴です。扁平足によって崩れた足→膝→骨盤の連鎖を意識した構造で、足元だけでなく姿勢全体の改善をサポートします。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                かかとから土踏まずにかけてのサポートが手厚く、扁平足で土踏まずの痛みが出やすい方に向いています。やや柔らかめの素材で履き心地がよく、インソール初心者にも取り入れやすい商品です。
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">スペック</p>
              <ul className="space-y-1">
                <li>監修：美容整体師</li>
                <li>サイズ展開：S〜L（22〜27cm）</li>
                <li>アーチ対応：縦アーチ重視</li>
                <li>ヒールカップ：あり</li>
                <li>特徴：骨盤矯正サポート</li>
              </ul>
            </div>
          </div>
          <Link
            href="/runway-cure-sole"
            className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors"
          >
            ランウェイキュアソールの詳細を見る
          </Link>
        </div>

        {/* スリムアップインソール */}
        <div className="border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3">
            スリムアップインソール（Slim Up Insole）
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                低価格で始めやすいエントリーモデルです。<strong>厚さ約1.5mmの超薄型設計</strong>で、パンプスやローファーなど靴内のスペースが限られる靴にも使いやすいのが最大のメリット。ビジネスシーンでインソールを使いたい方に適しています。
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                アーチサポートは控えめなので、軽度の扁平足や予防目的での使用に向いています。重度の扁平足にはサポート力が不足する場合がありますが、まずはインソールを試してみたいという方の入門用としておすすめです。
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">スペック</p>
              <ul className="space-y-1">
                <li>価格帯：お手頃</li>
                <li>サイズ展開：S〜L（22〜27cm）</li>
                <li>アーチ対応：軽めのサポート</li>
                <li>ヒールカップ：浅め</li>
                <li>特徴：超薄型設計</li>
              </ul>
            </div>
          </div>
          <Link
            href="/slim-up-insole"
            className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors"
          >
            スリムアップインソールの詳細を見る
          </Link>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 text-center">
          <p className="text-sm text-gray-700 mb-3">
            3商品の価格・機能を横並びで比較したい方はこちら
          </p>
          <Link
            href="/ranking"
            className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
          >
            インソールおすすめランキングを見る
          </Link>
        </div>
      </section>

      {/* 日常でできるケア */}
      <section id="daily-care" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          日常でできるケア
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          インソールによる足裏サポートに加えて、日常の簡単なエクササイズやケアを組み合わせると改善のスピードが上がります。以下の方法は自宅で手軽に始められるものばかりです。
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              タオルギャザー
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              床にタオルを広げ、足の指だけで手前にたぐり寄せるエクササイズです。足裏の内在筋（アーチを支える小さな筋肉群）を効果的に鍛えられます。左右各20回を1セットとして、1日2〜3セットが目安。テレビを見ながらでもできるので、習慣化しやすいトレーニングです。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              足指じゃんけん
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              足の指でグー（全部曲げる）・チョキ（親指だけ上げる）・パー（全部開く）の動きを繰り返します。浮き指の改善に特に効果的で、足指の可動域と筋力を同時に鍛えられます。入浴後の血行が良い状態で行うと、より効果的です。1日10セットを目標にしましょう。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              カーフレイズ（つま先立ち）
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              両足で立ち、ゆっくりとかかとを上げ下げします。ふくらはぎだけでなく、足裏のアーチを支える後脛骨筋も同時に鍛えられます。壁や椅子に手をついてバランスを取りながら、15回を3セット行いましょう。慣れてきたら片足ずつ行うとさらに効果的です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              ゴルフボールマッサージ
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              ゴルフボールやテニスボールを足裏の下に置き、体重をかけながらコロコロと転がします。足底腱膜のストレッチと足裏の筋膜リリースが同時にできます。特に土踏まず周辺を重点的に行うと、扁平足で硬くなった筋膜がほぐれます。1日3〜5分程度が目安です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              正しい靴の選び方を意識する
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              インソールの効果を最大限に活かすには、靴選びも重要です。つま先に1cm程度の余裕があり、かかと部分がしっかりホールドされる靴を選びましょう。ゆるすぎる靴は足が中で滑り、扁平足を悪化させます。靴のサイズは夕方（足がむくんだ状態）に合わせるのがポイントです。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問（FAQ） */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 扁平足はインソールで治りますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. インソールだけで骨格そのものを変えることは難しいですが、アーチサポート付きインソールを継続使用することで足裏アーチが正しい位置に導かれ、痛みや疲れの軽減が期待できます。軽度〜中等度の扁平足であれば、インソールと足指トレーニングの併用で大幅な改善が見込めます。重度の場合は整形外科への受診も検討しましょう。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 浮き指かどうかはどうやって確認できますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 簡単なセルフチェック方法があります。まっすぐ立った状態で、誰かに足の指の下に薄い紙を差し込んでもらいましょう。抵抗なくスッと入る指があれば、その指は浮き指の可能性があります。また、足裏に薄くインクを塗って紙の上に立つフットプリントでも確認できます。指の跡がつかない場合は浮き指です。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 扁平足用インソールはどのくらいで効果を感じますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 個人差がありますが、足裏の疲労軽減は1〜2週間で実感する方が多いです。アーチの回復や歩行バランスの改善には2〜3ヶ月の継続使用が目安になります。最初は短時間の使用から始め、徐々に慣らしていくことが大切です。3ヶ月使っても変化を感じない場合は、インソールのサイズや種類が合っていない可能性があるので見直してみましょう。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 子どもの扁平足にもインソールは使えますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. 小児扁平足の多くは成長とともに自然にアーチが形成されますが、7歳を過ぎてもアーチができない場合や、歩行時に痛みが出る場合はインソールの使用が有効です。成長期の足は変化が大きいため、3〜6ヶ月ごとにサイズを見直しましょう。ピットソールはXSサイズ（21cm〜）から対応しています。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
              Q. 扁平足と浮き指を同時にケアできるインソールはありますか？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A. はい、足裏の3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）すべてをサポートするインソールであれば、扁平足と浮き指の両方に効果が期待できます。本記事で紹介しているピットソールは、特許技術で3点のアーチを同時にサポートする設計になっており、両方の症状を併発している方にもおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#0ea5e9]">
          まとめ
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          扁平足・浮き指は日本人に非常に多い足のトラブルですが、適切なインソールの使用と日常のケアを組み合わせることで十分に改善が可能です。この記事では、扁平足・浮き指の仕組みから原因・症状、インソールの効果と選び方、おすすめ商品まで詳しく解説してきました。
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 md:p-6 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事のポイント</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>扁平足と浮き指は併発しやすく、足裏アーチの崩れが共通の原因</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>放置すると膝痛・腰痛・姿勢悪化など全身に悪影響が及ぶ</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>アーチサポート付きインソールで足裏のバネ機能を回復できる</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>選ぶ際は3点アーチサポート・ヒールカップ・科学的根拠を重視</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>3つのアーチを同時にケアできるピットソールが総合評価No.1</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0ea5e9] font-bold shrink-0">--</span>
              <span>タオルギャザーや足指じゃんけんなどのセルフケアとの併用が効果的</span>
            </li>
          </ul>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          足は身体を支える土台です。土台が崩れれば全身のバランスが乱れ、さまざまな不調につながります。逆に言えば、足元を整えるだけで身体全体が変わる可能性があるということです。
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
          「たかが扁平足」「浮き指くらい大丈夫」と思わず、今日からインソールとセルフケアで足元のケアを始めてみませんか？靴にインソールを入れるだけという手軽さが、継続のしやすさにつながります。正しいアーチを取り戻した足で歩く毎日は、疲れにくさ・姿勢の改善・膝腰の負担軽減など、想像以上の変化をもたらしてくれるでしょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/ranking"
            className="inline-block bg-[#0ea5e9] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors text-center"
          >
            インソールおすすめランキングを見る
          </Link>
          <Link
            href="/pitsole"
            className="inline-block border border-[#0ea5e9] text-[#0ea5e9] text-sm font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors text-center"
          >
            ピットソールの詳細を見る
          </Link>
        </div>
      </section>
    </>
  );
}
