import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソールの口コミ・効果を検証【美姿勢の実力】",
  description:
    "ランウェイキュアソール（Runway Cure Sole）の口コミ・評判・効果を徹底検証。足裏3点アーチサポートによる美姿勢の仕組み、メリット・デメリット、最安値情報、サイズ選びまで詳しく解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/runway-cure-sole/",
  },
  openGraph: {
    title: "ランウェイキュアソールの口コミ・効果を検証【美姿勢の実力】｜ソールラボ",
    description:
      "ランウェイキュアソールの口コミ・評判・効果を徹底検証。3点アーチサポートの仕組みから最安値情報まで。",
    url: "https://sole-laboratory.com/runway-cure-sole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ランウェイキュアソールの口コミ・効果を検証【美姿勢の実力】",
  description:
    "ランウェイキュアソールの口コミ・評判・効果を徹底検証。足裏3点アーチサポートによる美姿勢の仕組み、メリット・デメリット、最安値情報まで。",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-08",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ランウェイキュアソールは本当に効果がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差はありますが、足裏の3点アーチをサポートすることで正しい姿勢と歩行を促し、普段使われにくい筋肉を活性化させる効果が期待できます。即効性があるものではなく、毎日継続して使用することが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "サイズはどのように選べばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M（22.5〜23.5cm）とL（24.0〜25.0cm）の2サイズ展開です。普段の靴のサイズが23.5cmの方は、Mサイズがおすすめです。迷った場合は大きめのサイズを選ぶと調整しやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "外反母趾でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使用自体は可能ですが、親指と人差し指の間にあるクロス部分が外反母趾の部分に食い込む場合があります。症状が重い方は短時間から試すか、医師に相談されることをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいで効果を実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "姿勢の変化は早い方で1〜2週間程度、体型への変化は2〜3ヶ月の継続使用が目安です。毎日の歩行量が多い方ほど実感しやすい傾向にあります。",
      },
    },
    {
      "@type": "Question",
      name: "男性でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ランウェイキュアソールはM（22.5〜23.5cm）とL（24.0〜25.0cm）の女性向けサイズ展開のため、男性にはサイズが合わない場合が多いです。男性にはピットソール（最大27.5cm対応）がおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "洗えますか？お手入れ方法は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "水洗いは推奨されていません。使用後は風通しの良い場所で陰干しし、汚れが気になる場合は固く絞った布で拭き取ってください。清潔に保つことで長持ちします。",
      },
    },
    {
      "@type": "Question",
      name: "パンプスやヒールにも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "薄型設計のため、ある程度のパンプスには対応可能です。ただし、つま先が極端に細いデザインやヒールが高すぎる靴では窮屈になる場合があります。スニーカーやローヒールの靴での使用が最も効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "公式サイト以外でも購入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイト（FLOReショップ）での購入が最もお得です。セット割引は公式サイト限定となっており、正規品の保証も受けられます。非正規ルートでの購入は類似品のリスクがあるためご注意ください。",
      },
    },
  ],
};

const badReviews = [
  {
    age: "30代女性",
    rating: 2,
    text: "外反母趾気味の私には、親指と人差し指の間のクロス部分が少し食い込んで痛みを感じました。長時間の使用は厳しかったです。",
  },
  {
    age: "40代女性",
    rating: 3,
    text: "夏場に使うと足が蒸れやすく、締め付け感が気になりました。涼しい季節は問題ないのですが、真夏は素足だとやや不快です。",
  },
  {
    age: "20代女性",
    rating: 3,
    text: "サイズがMとLの2つしかないので、足が小さめの私（22cm）にはMでも少し大きかったです。もう少し細かいサイズ展開があれば嬉しいです。",
  },
];

const goodReviews = [
  {
    age: "30代女性",
    rating: 5,
    text: "使い始めて2週間ほどで、姿勢が良くなったと周りに言われるようになりました。意識しなくても自然と背筋が伸びる感覚があります。",
  },
  {
    age: "40代女性",
    rating: 5,
    text: "立ち仕事で毎日足がパンパンだったのが、このインソールを入れてから足の疲れが軽くなりました。夕方になっても足が軽いのが嬉しいです。",
  },
  {
    age: "50代女性",
    rating: 4,
    text: "有名雑誌で紹介されていたのがきっかけで購入。履くだけで骨盤周りが安定する感じがあり、歩き方が変わったと実感しています。",
  },
  {
    age: "20代女性",
    rating: 5,
    text: "通勤用のスニーカーに入れています。薄型なので靴がきつくならず、見た目も変わらないのが良いです。3ヶ月使って下半身がすっきりしてきました。",
  },
  {
    age: "30代女性",
    rating: 4,
    text: "産後の体型戻しに購入。骨盤が安定する感じがあり、腰痛も少し楽になりました。毎日の家事や買い物で無理なく使えるのが続けやすいポイントです。",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}点（5点満点）`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: { age: string; rating: number; text: string };
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
      <div className="flex items-center gap-3 mb-2">
        <StarRating rating={review.rating} />
        <span className="text-xs text-gray-500">{review.age}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
    </div>
  );
}

export default function RunwayCureSolePage() {
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "トップ", "item": "https://sole-laboratory.com/" },
              { "@type": "ListItem", "position": 2, "name": "ランウェイキュアソールの口コミ・効果を検証", "item": "https://sole-laboratory.com/runway-cure-sole/" }
            ]
          }),
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
            ランウェイキュアソール
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#8b5cf6] font-semibold mb-3">
            2026年4月最新版
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールの
            <br className="md:hidden" />
            口コミ・効果を<span className="text-[#8b5cf6]">徹底検証</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Runway Cure Sole（ランウェイキュアソール）の口コミ・評判から効果の仕組みまで、
            <br className="hidden md:block" />
            購入前に知っておきたい情報をすべてまとめました。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#overall" className="hover:text-[#8b5cf6] transition-colors">
                1. ランウェイキュアソールの総合評価
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:text-[#8b5cf6] transition-colors">
                2. 悪い口コミ・気になる点
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:text-[#8b5cf6] transition-colors">
                3. 良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#8b5cf6] transition-colors">
                4. 特徴と効果の仕組み（3点アーチ解説）
              </a>
            </li>
            <li>
              <a href="#pros-cons" className="hover:text-[#8b5cf6] transition-colors">
                5. メリット・デメリット
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#8b5cf6] transition-colors">
                6. 料金・最安値・販売店情報
              </a>
            </li>
            <li>
              <a href="#sizing" className="hover:text-[#8b5cf6] transition-colors">
                7. サイズ選びのポイント
              </a>
            </li>
            <li>
              <a href="#for-whom" className="hover:text-[#8b5cf6] transition-colors">
                8. 向いている人・向いていない人
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#8b5cf6] transition-colors">
                9. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#8b5cf6] transition-colors">
                10. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 1: Overall Rating */}
      <section id="overall" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
          ランウェイキュアソールの総合評価
        </h2>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 mb-1">総合評価</p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-3xl font-bold text-[#8b5cf6]">4.1</span>
                <span className="text-sm text-gray-500">/ 5.0</span>
              </div>
              <StarRating rating={4} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                <span className="text-gray-600">姿勢サポート力</span>
                <span className="font-bold text-[#8b5cf6]">4.5</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                <span className="text-gray-600">履き心地</span>
                <span className="font-bold text-[#8b5cf6]">4.0</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                <span className="text-gray-600">コスパ</span>
                <span className="font-bold text-[#8b5cf6]">3.5</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                <span className="text-gray-600">サイズ展開</span>
                <span className="font-bold text-[#8b5cf6]">3.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            <strong>Runway Cure Sole（ランウェイキュアソール）</strong>は、FLOReショップが販売する美姿勢サポートインソールです。
            足裏の3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）を同時にサポートする独自設計が特徴で、履くだけで自然と正しい姿勢へ導いてくれます。
          </p>
          <p>
            有名雑誌でも特集が組まれるなど注目度が高く、特に「姿勢改善」「足の疲れ軽減」に関する口コミで高い評価を得ています。
            一方で、サイズ展開がM・Lの2サイズのみ（女性向け）という点や、外反母趾の方には注意が必要な点もあります。
          </p>
          <p>
            総合的に見ると、美姿勢を意識したい女性にとってバランスの良い選択肢といえます。以下、口コミや効果の仕組みを詳しく見ていきましょう。
          </p>
        </div>
      </section>

      {/* Section 2: Bad Reviews */}
      <section id="bad-reviews" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
            悪い口コミ・気になる点
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            まずはネガティブな口コミから確認しましょう。購入前にデメリットを把握しておくことが大切です。
          </p>
          <div className="space-y-4">
            {badReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 md:p-5">
            <p className="text-sm font-bold text-gray-900 mb-2">
              悪い口コミの傾向まとめ
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9650;</span>
                外反母趾の方はクロス部分の食い込みに注意
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9650;</span>
                夏場は蒸れ・締め付けが気になる場合がある
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9650;</span>
                M・Lの2サイズのみで足が小さい方・大きい方には合わないことも
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Good Reviews */}
      <section id="good-reviews" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
          良い口コミ・評判
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          次に好意的な口コミを見ていきましょう。特に「姿勢改善」と「足の軽さ」に関する声が多く見られます。
        </p>
        <div className="space-y-4">
          {goodReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 md:p-5">
          <p className="text-sm font-bold text-gray-900 mb-2">
            良い口コミの傾向まとめ
          </p>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
              2週間程度で姿勢の変化を実感する人が多い
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
              足の疲れが軽減され、夕方でも足が軽い
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
              薄型設計で靴を選ばず使いやすい
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
              骨盤の安定感を実感する声も
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Features & Mechanism */}
      <section id="features" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
            特徴と効果の仕組み（3点アーチ解説）
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                足裏3点アーチサポートとは
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                人間の足裏には「内側縦アーチ」「外側縦アーチ」「横アーチ」の3つのアーチ構造があります。
                この3つのアーチが正常に機能することで、体重を効率的に分散し、正しい姿勢と安定した歩行が可能になります。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                しかし、運動不足や加齢、ヒールの多用などによってアーチが崩れると、姿勢が歪み、
                膝や腰への負担が増え、本来使うべき筋肉が使われなくなってしまいます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-[#8b5cf6] mb-3">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">内側縦アーチ</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  いわゆる「土踏まず」の部分。衝撃吸収とバネの役割を果たし、歩行時のエネルギー効率を高めます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-[#8b5cf6] mb-3">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">外側縦アーチ</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  足の外側のアーチ。体の横方向のバランスを保ち、安定した歩行をサポートします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-[#8b5cf6] mb-3">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">横アーチ</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  足指の付け根を横切るアーチ。足指の動きを助け、踏み出しの力を効率よく地面に伝えます。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                ランウェイキュアソールの効果の仕組み
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                ランウェイキュアソールは、この3つのアーチを同時にサポートする設計になっています。
                インソールを靴にセットするだけで、崩れたアーチを本来の位置に近づけ、自然と正しい姿勢を促します。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  正しい姿勢を促すことで、体幹の筋肉が自然に使われるようになる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  骨盤の位置が安定し、下半身の筋肉バランスが改善される
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  歩行効率が向上し、足への負担が軽減される
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  日常の歩行がエクササイズに近い効果をもたらす
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pros & Cons */}
      <section id="pros-cons" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
          メリット・デメリット
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-sm font-bold text-[#8b5cf6] mb-4">メリット</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                足裏3点アーチを同時にサポートし、美姿勢を促進
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                履くだけの手軽さで、特別な運動は不要
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                薄型設計で手持ちの靴にそのまま使える
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                公式サイトのセット購入で1枚あたりの価格がお得に
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                有名雑誌での掲載実績があり信頼性が高い
              </li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-sm font-bold text-red-500 mb-4">デメリット</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                サイズがM・Lの2種類のみ（女性向け）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                外反母趾の方はクロス部分が痛む場合がある
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                夏場は締め付け・蒸れが気になることがある
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                男性は使用できない（サイズ非対応）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                即効性はなく、継続使用が必要
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section id="pricing" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
            料金・最安値・販売店情報
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ランウェイキュアソールは、販売元であるFLOReショップの公式サイトで購入するのが最もお得です。
            セット購入で1足あたりの単価が下がる割引が用意されています。
          </p>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">購入プラン</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-900">価格（税込）</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-900">1足あたり</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">1足（単品）</td>
                  <td className="px-4 py-3 text-right text-gray-900 font-medium">4,980円</td>
                  <td className="px-4 py-3 text-right text-gray-500">4,980円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">3足セット</td>
                  <td className="px-4 py-3 text-right text-gray-900 font-medium">9,960円</td>
                  <td className="px-4 py-3 text-right text-[#8b5cf6] font-bold">3,320円</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="px-4 py-3 text-gray-600 font-medium">
                    5足セット
                    <span className="ml-2 text-xs text-white bg-[#8b5cf6] px-2 py-0.5 rounded-full">
                      最安値
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900 font-medium">14,900円</td>
                  <td className="px-4 py-3 text-right text-[#8b5cf6] font-bold">2,980円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
            <p className="text-sm font-bold text-gray-900 mb-2">販売店について</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                公式サイト（FLOReショップ）：セット割引あり・正規品保証
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5 shrink-0">-</span>
                Amazon・楽天：出品状況は時期により変動。セット割引は公式サイト限定
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5 shrink-0">-</span>
                実店舗：一般的なドラッグストアや靴店での取り扱いは確認されていません
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Sizing */}
      <section id="sizing" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
          サイズ選びのポイント
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-900">サイズ</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">対応cm</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">こんな方に</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Mサイズ</td>
                <td className="px-4 py-3 text-gray-600">22.5〜23.5cm</td>
                <td className="px-4 py-3 text-gray-600">小さめ〜標準の足の方</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Lサイズ</td>
                <td className="px-4 py-3 text-gray-600">24.0〜25.0cm</td>
                <td className="px-4 py-3 text-gray-600">標準〜大きめの足の方</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            <strong>23.5cmの方：</strong>MサイズとLサイズの境目ですが、Mサイズがおすすめです。
            インソールは多少小さめの方がズレにくく、フィット感も良くなります。
          </p>
          <p>
            <strong>迷った場合のコツ：</strong>靴下の厚みや靴の種類によってもフィット感は変わります。
            迷った場合は大きめのサイズを選ぶと、靴の中で調整がしやすくなります。
          </p>
          <p>
            <strong>セット購入で両サイズ試す方法：</strong>3足以上のセット購入であれば、
            MとLを混ぜて注文できる場合があります。初めての方はサイズ違いで試すのも一つの方法です。
          </p>
        </div>
      </section>

      {/* Section 8: Who It's For */}
      <section id="for-whom" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
            向いている人・向いていない人
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#8b5cf6] mb-4">向いている人</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                  姿勢の悪さが気になっている女性
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                  立ち仕事や歩行が多く、足の疲れを感じている方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                  激しい運動なしで日常生活の中でケアしたい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                  産後の骨盤ケアを日常的に行いたい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                  足のサイズが22.5〜25.0cmの女性
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-red-500 mb-4">向いていない人</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                  外反母趾の症状が重い方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                  足のサイズが22.5cm未満または25.0cmを超える方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                  男性（サイズ非対応）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                  即効性のあるダイエット効果を求めている方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                  夏場に素足でサンダルを多用する方
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {faqStructuredData.mainEntity.map((faq) => (
            <details
              key={faq.name}
              className="group border border-gray-200 rounded-lg"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                <span>{faq.name}</span>
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
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 10: Summary */}
      <section id="summary" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8b5cf6]">
            まとめ
          </h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              ランウェイキュアソールは、足裏3点アーチサポートにより美姿勢をサポートするインソールとして、
              多くの女性から支持を集めています。「姿勢が良くなった」「足が軽くなった」という口コミが多く、
              有名雑誌でも特集されるなど信頼性の高い商品です。
            </p>
            <p>
              一方で、サイズ展開がM・Lの2サイズのみである点、外反母趾の方には注意が必要な点など、
              購入前に確認しておくべきポイントもあります。
            </p>
            <p>
              美姿勢を意識したい女性、足の疲れを軽減したい方、日常生活の中で手軽に体のケアをしたい方には、
              試す価値のある選択肢といえるでしょう。特にセット購入であれば1足あたりの価格もお手頃になるため、
              まずは公式サイトで詳細をチェックしてみてください。
            </p>
          </div>

          <div className="mt-8 bg-white border border-purple-200 rounded-xl p-5 md:p-6 text-center">
            <p className="text-sm font-bold text-gray-900 mb-2">
              ランウェイキュアソールの評価まとめ
            </p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <StarRating rating={4} />
              <span className="text-lg font-bold text-[#8b5cf6]">4.1</span>
              <span className="text-sm text-gray-500">/ 5.0</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              美姿勢サポート力と手軽さが魅力。サイズ展開の少なさが惜しい。
            </p>
            <Link href="/ranking/" className="btn-cta text-sm md:text-base">
              他のインソールと比較する
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
          関連記事
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/ranking/"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-sm font-bold text-gray-900 mb-1">
              ダイエットインソールおすすめ3選を徹底比較
            </p>
            <p className="text-xs text-gray-500">
              ピットソール・ランウェイキュアソール・スリムアップインソールを比較
            </p>
          </Link>
          <Link
            href="/pitsole/"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-sm font-bold text-gray-900 mb-1">
              ピットソールの口コミ・効果を徹底検証
            </p>
            <p className="text-xs text-gray-500">
              世界特許取得の骨格矯正インソールの実力を検証
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
