import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "脚痩せしたい人のインソール選び完全ガイド",
  description:
    "脚痩せ・下半身痩せにインソールが効果的な理由を徹底解説。脚が太くなる原因からインソールの選び方、おすすめ商品3選、脚痩せ習慣まで。正しい歩行姿勢で美脚を目指す方法をまとめました。",
  keywords: [
    "脚痩せ インソール",
    "下半身痩せ インソール おすすめ",
    "脚やせ インソール",
    "美脚 インソール",
    "ダイエット インソール 脚",
  ],
  alternates: {
    canonical: "https://sole-laboratory.com/articles/leg-slimming/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "脚痩せしたい人のインソール選び完全ガイド",
  description:
    "脚痩せ・下半身痩せにインソールが効果的な理由を徹底解説。脚が太くなる原因からインソールの選び方、おすすめ商品3選、脚痩せ習慣まで。",
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
      name: "インソールだけで脚痩せできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソール単体で劇的に脚が細くなることは期待できません。ただし、歩行姿勢を整えることで下半身の筋肉バランスが改善され、むくみの軽減や脚のラインが整う効果が期待できます。食事管理やストレッチとの併用がおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "脚痩せインソールの効果はいつ頃から実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差がありますが、歩行時の姿勢変化は数日で感じられることが多いです。脚のラインやむくみの変化は2〜3ヶ月の継続使用で実感する方が多い傾向です。毎日の通勤や日常歩行で使い続けることが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "パンプスやヒールにも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "商品によってはパンプス対応のものもありますが、基本的にはスニーカーやウォーキングシューズなどインソールが取り外せる靴での使用が推奨されます。薄型設計のランウェイキュアソールは比較的パンプスにも使いやすい設計です。",
      },
    },
    {
      "@type": "Question",
      name: "O脚やX脚でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、使用可能です。むしろO脚・X脚は脚が太く見える原因のひとつであり、足裏アーチをサポートするインソールで骨格アライメントを整えることで改善が期待できます。重度の場合は整形外科への相談も併せておすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "男性でも脚痩せインソールの効果はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、男女問わず効果が期待できます。男性の場合も姿勢改善による下半身の筋肉バランス改善やむくみ軽減が見込めます。サイズ展開が豊富な商品を選べば問題なく使用できます。",
      },
    },
  ],
};

const recommendedProducts = [
  {
    rank: 1,
    name: "ピットソール",
    description:
      "世界特許取得のキュボイド理論に基づく骨格矯正インソール。足裏の立方骨を支えることで骨盤の位置を整え、下半身全体の筋肉バランスを改善します。脚痩せに直結する正しい歩行姿勢を根本からサポートするため、本格的に美脚を目指したい方に最適です。",
    points: [
      "世界特許取得の独自構造で骨格から矯正",
      "累計200万足突破の実績",
      "内もも・ヒップの筋肉を効率的に活性化",
    ],
    price: "1,771円〜/月",
    href: "/pitsole/",
    accent: "#0ea5e9",
  },
  {
    rank: 2,
    name: "ランウェイキュアソール",
    description:
      "3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）を同時にサポートする美姿勢インソール。薄型設計で靴を選ばないため、通勤パンプスからスニーカーまで幅広く使えます。日常的にヒールを履く方や、手軽に脚のラインを整えたい方におすすめです。",
    points: [
      "3つのアーチを同時サポート",
      "薄型設計でパンプスにも対応",
      "美しい歩行姿勢をサポート",
    ],
    price: "1,650円〜/月",
    href: "/runway-cure-sole/",
    accent: "#8b5cf6",
  },
  {
    rank: 3,
    name: "スリムアップインソール",
    description:
      "手頃な価格で始められるダイエットインソール。シンプルな設計ながら足裏アーチをしっかりサポートし、正しい歩行を促します。初めてインソールを試す方や、まずはコストを抑えて脚痩せ効果を試したい方にぴったりのエントリーモデルです。",
    points: [
      "手頃な価格で始めやすい",
      "シンプルで使いやすい設計",
      "初めての方にもおすすめ",
    ],
    price: "1,100円〜/月",
    href: "/slim-up-insole/",
    accent: "#10b981",
  },
];

const faqs = [
  {
    question: "インソールだけで脚痩せできますか？",
    answer:
      "インソール単体で劇的に脚が細くなることは期待できません。ただし、歩行姿勢を整えることで下半身の筋肉バランスが改善され、むくみの軽減や脚のラインが整う効果が期待できます。食事管理やストレッチとの併用で、より効果を実感しやすくなります。",
  },
  {
    question: "脚痩せインソールの効果はいつ頃から実感できますか？",
    answer:
      "個人差がありますが、歩行時の姿勢変化は数日で感じられることが多いです。脚のラインやむくみの変化は2〜3ヶ月の継続使用で実感する方が多い傾向にあります。毎日の通勤や日常歩行で使い続けることが大切です。",
  },
  {
    question: "パンプスやヒールにも使えますか？",
    answer:
      "商品によってはパンプス対応のものもありますが、基本的にはスニーカーやウォーキングシューズなどインソールが取り外せる靴での使用が推奨されます。薄型設計のランウェイキュアソールは比較的パンプスにも使いやすい設計です。",
  },
  {
    question: "O脚やX脚でも使えますか？",
    answer:
      "はい、使用可能です。むしろO脚・X脚は脚が太く見える原因のひとつであり、足裏アーチをサポートするインソールで骨格アライメントを整えることで改善が期待できます。重度の場合は整形外科への相談も併せておすすめします。",
  },
  {
    question: "男性でも脚痩せインソールの効果はありますか？",
    answer:
      "はい、男女問わず効果が期待できます。男性の場合も姿勢改善による下半身の筋肉バランス改善やむくみ軽減が見込めます。サイズ展開が豊富な商品を選べば問題なく使用できます。",
  },
];

const habits = [
  {
    title: "正しいウォーキング",
    description:
      "インソールを入れた靴で1日20〜30分のウォーキングを習慣に。かかとから着地し、つま先で蹴り出す正しい歩行を意識すると、内ももやヒップの筋肉が効率的に使われます。",
  },
  {
    title: "ふくらはぎのマッサージ",
    description:
      "就寝前にふくらはぎを下から上へ揉み上げるマッサージを5分間行いましょう。リンパの流れが改善され、むくみの解消に効果的です。インソールで改善した血行をさらに促進できます。",
  },
  {
    title: "内もものストレッチ",
    description:
      "開脚ストレッチやワイドスクワットで内転筋を刺激しましょう。内ももの筋肉が鍛えられると脚のラインが引き締まり、O脚の改善にもつながります。",
  },
  {
    title: "足首回し・つま先立ち",
    description:
      "デスクワークの合間に足首を回したり、つま先立ちを繰り返す簡単なエクササイズを。ふくらはぎのポンプ機能を活性化し、下半身のむくみを予防できます。",
  },
  {
    title: "塩分・水分バランスの管理",
    description:
      "塩分の摂りすぎはむくみの大敵です。1日の塩分摂取量を6g以下に抑え、水分はこまめに1.5〜2リットルを目安に摂取しましょう。カリウムを多く含むバナナやアボカドもおすすめです。",
  },
];

export default function LegSlimmingArticlePage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "脚痩せインソール" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#0ea5e9] font-medium mb-2">
            お悩み別ガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            脚痩せしたい人の
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">インソール選び</span>
            完全ガイド
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「脚が太い」「下半身だけ痩せない」と悩んでいませんか？
            実はその原因、歩き方や姿勢の崩れにあるかもしれません。
            この記事では、インソールで脚痩せを目指す方法を徹底解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              脚痩せ
            </span>
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              下半身痩せ
            </span>
            <span className="bg-sky-100 text-[#0ea5e9] px-3 py-1 rounded-full font-medium">
              むくみ改善
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-base font-bold text-gray-900 mb-4">
              この記事の内容
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li>
                  <a
                    href="#cause"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    1. 脚が太くなる原因とインソールの関係
                  </a>
                </li>
                <li>
                  <a
                    href="#mechanism"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    2. インソールで脚痩せできる仕組み
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-choose"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    3. 脚痩せ向けインソールの選び方
                  </a>
                </li>
                <li>
                  <a
                    href="#recommended"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    4. 脚痩せにおすすめのインソール3選
                  </a>
                </li>
                <li>
                  <a
                    href="#habits"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    5. インソールと合わせたい脚痩せ習慣
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#0ea5e9] hover:underline">
                    6. よくある質問（FAQ）
                  </a>
                </li>
                <li>
                  <a
                    href="#summary"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    7. まとめ
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 脚が太くなる原因とインソールの関係 */}
      <section id="cause" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            脚が太くなる原因とインソールの関係
          </h2>
          <div className="prose-custom space-y-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              脚が太くなる原因は単純に「脂肪が多い」だけではありません。多くの場合、以下の複数の要因が絡み合っています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  筋肉のアンバランス
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  歩き方の癖や姿勢の崩れにより、前ももや外ももばかりに負荷がかかり、筋肉が張って太く見えてしまいます。本来使うべき内ももやヒップの筋肉が弱くなり、脚全体のバランスが崩れます。
                </p>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  むくみ・血行不良
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  足裏アーチの崩れや歩行時の着地不良により、ふくらはぎのポンプ機能が低下します。血液やリンパの循環が滞り、下半身に水分や老廃物が溜まりやすくなります。
                </p>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  骨盤の歪み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  骨盤が前傾・後傾していると、下半身の重心バランスが崩れます。その結果、太ももの前面や外側に余計な筋肉がつきやすくなり、O脚やX脚の原因にもなります。
                </p>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  足裏アーチの崩れ
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  扁平足や開張足により足裏の衝撃吸収力が低下すると、膝や股関節に余計な負担がかかります。これが脚全体の筋肉の使い方を歪ませ、太く見える原因になります。
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ここで重要なのが、これらの原因の多くが<strong>足元から始まっている</strong>という点です。足は体の土台であり、足裏のバランスが崩れることで、膝・骨盤・背骨と上に向かって影響が連鎖します。インソールは足裏から骨格を正しい位置に導くことで、脚が太くなる根本原因にアプローチできるのです。
            </p>
          </div>
        </div>
      </section>

      {/* インソールで脚痩せできる仕組み */}
      <section
        id="mechanism"
        className="section-light py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールで脚痩せできる仕組み
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ダイエットインソールは「履くだけで脂肪が燃える」という魔法のアイテムではありません。しかし、足裏から体の使い方を変えることで、脚痩せにつながる複数のメカニズムが働きます。
            </p>

            <div className="space-y-4">
              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-sky-100 text-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      足裏アーチの補整で正しい体重分散
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      インソールが内側縦アーチ・外側縦アーチ・横アーチの3つを支えることで、足裏全体で体重を均等に分散させます。これにより、特定の筋肉への過度な負担が軽減され、脚全体の筋肉をバランスよく使えるようになります。前ももや外ももの張りが和らぎ、すっきりとした脚のラインに近づきます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-sky-100 text-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      骨盤の安定で内もも・ヒップを活性化
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      足裏から骨格アライメントが整うと、骨盤が正しい位置に安定します。骨盤が安定することで内転筋（内もも）や大殿筋（ヒップ）が正しく機能し、歩くたびにこれらの筋肉が効率的に使われます。普段使われにくい筋肉を活性化させることで、引き締まった美脚ラインを目指せます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-sky-100 text-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      血行促進でむくみを軽減
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      正しい歩行姿勢により、ふくらはぎの筋肉が効率的に収縮・弛緩を繰り返します。ふくらはぎは「第二の心臓」と呼ばれ、このポンプ作用が下半身の血液やリンパを心臓に戻す役割を担っています。ポンプ機能が正常に働くことで、夕方の脚のだるさやパンパンなむくみの軽減が期待できます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-sky-100 text-[#0ea5e9] rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      歩行効率の向上でカロリー消費をサポート
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      正しい姿勢で歩くことで、体幹を含めた全身の筋肉が連動して動きます。普段の通勤や買い物など日常歩行の質が上がり、同じ歩数でもより多くの筋肉を使うことになります。即効性はありませんが、毎日の積み重ねが下半身全体の引き締めにつながります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>注意：</strong>
                インソールは医療機器ではなく、効果には個人差があります。「履くだけで痩せる」という過度な期待は禁物です。正しい歩行習慣と合わせて使用することで、脚のラインが整う効果が期待できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 脚痩せ向けインソールの選び方 */}
      <section id="how-to-choose" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            脚痩せ向けインソールの選び方
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              脚痩せを目的にインソールを選ぶ際は、以下の5つのポイントを確認しましょう。
            </p>

            <div className="space-y-4">
              <div className="card border-l-4 border-l-[#0ea5e9]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  1. 足裏アーチのサポート力
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  最も重要なのが3つのアーチ（内側縦・外側縦・横）をしっかり支える構造かどうかです。特に脚痩せには内側縦アーチのサポートが重要で、これが崩れると膝が内側に倒れ、O脚やX脚の原因になります。特許技術やエビデンスのある商品を選ぶと安心です。
                </p>
              </div>

              <div className="card border-l-4 border-l-[#0ea5e9]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  2. 骨盤サポート機能
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  足裏だけでなく、骨盤の安定まで考慮された設計かどうかをチェックしましょう。立方骨（キュボイド）を支える構造や、かかとのカップ形状が深い商品は骨盤の安定性が高く、下半身全体の筋肉バランス改善に効果的です。
                </p>
              </div>

              <div className="card border-l-4 border-l-[#0ea5e9]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  3. 使用シーンとの相性
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  毎日使い続けることが脚痩せの鍵です。通勤で使うなら薄型設計のもの、ウォーキング用ならクッション性の高いものを選びましょう。普段履く靴に合うかどうかを事前に確認することが大切です。
                </p>
              </div>

              <div className="card border-l-4 border-l-[#0ea5e9]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  4. サイズ調整のしやすさ
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  インソールが靴の中でズレると効果が半減します。カット可能なタイプや、サイズ展開が細かい商品を選ぶと、自分の足にぴったりフィットさせられます。合わない場合の交換対応があるかも確認しましょう。
                </p>
              </div>

              <div className="card border-l-4 border-l-[#0ea5e9]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  5. コストパフォーマンス
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  インソールの耐久性は一般的に3〜6ヶ月です。月額に換算して無理のない価格帯の商品を選びましょう。まとめ買い割引がある商品は長期的にお得です。
                  <Link
                    href="/ranking/"
                    className="text-[#0ea5e9] hover:underline ml-1"
                  >
                    価格比較はランキングページ
                  </Link>
                  で詳しく解説しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 脚痩せにおすすめのインソール3選 */}
      <section
        id="recommended"
        className="section-light py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            脚痩せにおすすめのインソール3選
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            当サイトで紹介しているダイエットインソールを、脚痩せの観点から評価しました
          </p>
          <div className="space-y-6">
            {recommendedProducts.map((product) => (
              <div key={product.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: product.accent }}
                  >
                    {product.rank}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#0ea5e9] ml-auto">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="btn-outline text-sm inline-block"
                >
                  {product.name}の詳細レビューを見る
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ranking/" className="btn-cta text-base">
              3商品の比較ランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* インソールと合わせたい脚痩せ習慣 */}
      <section id="habits" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールと合わせたい脚痩せ習慣
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの効果を最大限に引き出すために、日常生活に取り入れたい習慣を紹介します。どれも特別な道具は不要で、今日から始められるものばかりです。
          </p>
          <div className="space-y-4">
            {habits.map((habit, index) => (
              <div key={habit.title} className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {habit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {habit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-sky-800 leading-relaxed">
              <strong>ポイント：</strong>
              インソールで歩行姿勢を整えながら、上記の習慣を2〜3つ組み合わせることで、より早く脚のラインの変化を実感できます。無理のない範囲で続けることが最も大切です。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-gray-200 rounded-lg bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section id="summary" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              脚が太くなる原因の多くは、足裏のアーチ崩れや歩行姿勢の乱れから始まっています。インソールで足元から骨格バランスを整えることで、筋肉の使い方が変わり、むくみの軽減や脚のラインの改善が期待できます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ただし、インソールは魔法のアイテムではありません。正しい歩行習慣やストレッチ、食事管理と組み合わせてこそ、本当の脚痩せ効果を発揮します。まずは自分の悩みや生活スタイルに合ったインソールを選び、毎日の歩行から変えていきましょう。
            </p>

            <div className="card bg-gray-50">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                この記事のポイント
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  脚太りの原因は筋肉のアンバランス・むくみ・骨盤の歪みが複合的に絡む
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  インソールは足裏から骨格を整え、正しい筋肉の使い方を促す
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  選び方はアーチサポート力・骨盤サポート・使用シーンの3つが重要
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  ストレッチやウォーキングとの併用で効果を最大化
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#0ea5e9] mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  2〜3ヶ月の継続使用が脚痩せ実感の目安
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            あなたに合ったインソールで美脚を目指そう
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            3つのダイエットインソールを比較して、脚痩せに最適な一足を見つけてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ranking/" className="btn-cta text-base">
              おすすめランキングを見る
            </Link>
            <Link href="/pitsole/" className="btn-outline text-base">
              一番人気のピットソールを見る
            </Link>
          </div>
        </div>
      </section>
      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/walking-diet/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">歩くだけダイエットは本当に効果ある？インソールで効率UP</p>
            </Link>
            <Link href="/articles/pelvis-correction/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">骨盤矯正インソールの効果を科学的に解説</p>
            </Link>
            <Link href="/articles/insole-truth/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールは嘘？効果の科学的根拠を検証</p>
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
