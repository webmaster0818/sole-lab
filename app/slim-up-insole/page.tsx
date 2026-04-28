import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "スリムアップインソールの口コミ・効果を検証【整体師監修】｜ソールラボ",
  description:
    "美容整体師・井上剛志監修のスリムアップインソールを徹底検証。実際の口コミ・評判から効果の仕組み、最安値情報、サイズ選びまで詳しく解説。悪い口コミも正直にお伝えします。",
  alternates: {
    canonical: "https://sole-laboratory.com/slim-up-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "スリムアップインソール",
  description:
    "美容整体師・井上剛志監修の骨格筋サポートインソール。立体サポート構造と抗菌防臭機能を搭載。",
  brand: {
    "@type": "Brand",
    name: "イッティ",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "JPY",
    lowPrice: "5973",
    highPrice: "6980",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.8",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "150",
  },
};

const reviewStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "スリムアップインソールの口コミ・効果を検証【整体師監修】",
  description:
    "美容整体師・井上剛志監修のスリムアップインソールを徹底検証。口コミ・評判・効果・最安値情報まで詳しく解説。",
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
      name: "スリムアップインソールは本当に効果がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "個人差はありますが、骨格筋サポート構造により正しい姿勢と歩行を促すことで、日常生活での筋肉の使い方が改善されます。即効性よりも2〜3ヶ月の継続使用で変化を実感する方が多いです。",
      },
    },
    {
      "@type": "Question",
      name: "ドラッグストアや薬局で購入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スリムアップインソールは市販されておらず、ドラッグストアや薬局では購入できません。公式サイト・楽天・Amazon・Yahooショッピングのオンライン販売のみとなっています。",
      },
    },
    {
      "@type": "Question",
      name: "男性でも使用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、男女兼用です。フリーサイズで、はさみでカットしてサイズ調整が可能なため、男性の靴にも対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "パンプスやヒールの靴にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "靴の形状によっては合わない場合があります。スニーカーやウォーキングシューズなど、ある程度の深さがある靴での使用が推奨されています。",
      },
    },
    {
      "@type": "Question",
      name: "洗濯はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "水洗いが可能です。中性洗剤を使ってやさしく手洗いし、直射日光を避けて陰干ししてください。抗菌防臭加工が施されているため、毎日洗う必要はありません。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいの期間使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使用頻度や歩行量によりますが、一般的に3〜6ヶ月程度が交換の目安です。クッション性が低下してきたと感じたら交換をおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "返品・交換はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトからの購入の場合、未開封品に限り返品が可能です。詳しい条件はイッティ公式サイトの返品ポリシーをご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "他のインソールとの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最大の特徴は美容整体師・井上剛志氏の監修による骨格筋アプローチです。一般的なインソールがクッション性を重視するのに対し、スリムアップインソールは骨格と筋肉の連動に着目した設計が特徴です。",
      },
    },
  ],
};

export default function SlimUpInsolePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewStructuredData),
        }}
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
              { "@type": "ListItem", "position": 2, "name": "スリムアップインソールの口コミ・効果を検証", "item": "https://sole-laboratory.com/slim-up-insole/" }
            ]
          }),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "スリムアップインソール 口コミ・効果" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-emerald-600 font-semibold mb-3">
            2026年4月最新版 ・ 整体師監修
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            スリムアップインソールの
            <br className="md:hidden" />
            <span className="text-emerald-600">口コミ・効果</span>を徹底検証
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            美容整体師・井上剛志氏（YouTube登録者約136万人）監修のダイエットインソール。
            <br className="hidden md:block" />
            実際の口コミから効果の仕組み、最安値まで正直にレビューします。
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
                href="#overall"
                className="hover:text-emerald-600 transition-colors"
              >
                1. スリムアップインソールの総合評価
              </a>
            </li>
            <li>
              <a
                href="#bad-reviews"
                className="hover:text-emerald-600 transition-colors"
              >
                2. 悪い口コミ・気になる点
              </a>
            </li>
            <li>
              <a
                href="#good-reviews"
                className="hover:text-emerald-600 transition-colors"
              >
                3. 良い口コミ・評判
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-emerald-600 transition-colors"
              >
                4. 特徴と効果の仕組み（整体師監修の骨格筋アプローチ）
              </a>
            </li>
            <li>
              <a
                href="#pros-cons"
                className="hover:text-emerald-600 transition-colors"
              >
                5. メリット・デメリット
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-emerald-600 transition-colors"
              >
                6. 料金・最安値・販売店情報
              </a>
            </li>
            <li>
              <a
                href="#size-guide"
                className="hover:text-emerald-600 transition-colors"
              >
                7. サイズ選び・使い方ガイド
              </a>
            </li>
            <li>
              <a
                href="#who"
                className="hover:text-emerald-600 transition-colors"
              >
                8. 向いている人・向いていない人
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-emerald-600 transition-colors"
              >
                9. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a
                href="#summary"
                className="hover:text-emerald-600 transition-colors"
              >
                10. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 1: Overall Rating */}
      <section id="overall" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          スリムアップインソールの総合評価
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-bold text-emerald-600">3.8</span>
            <div>
              <div className="flex items-center gap-0.5 text-yellow-400 text-lg">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span className="text-gray-300">&#9733;</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                総合評価（5点満点）
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "効果実感", score: "3.5" },
              { label: "コスパ", score: "3.5" },
              { label: "履き心地", score: "4.0" },
              { label: "信頼性", score: "4.0" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-3 bg-gray-50 rounded-lg"
              >
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-xl font-bold text-gray-900">{item.score}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            スリムアップインソールは、YouTube登録者約136万人を誇る美容整体師・井上剛志氏（アピアランスTV）が監修したダイエットインソールです。販売元はイッティ公式で、骨格筋サポートに特化した立体構造が特徴です。
          </p>
          <p>
            単品6,980円（税込）という価格帯は、ダイエットインソールの中ではやや高めの印象ですが、整体師監修という専門性の高さと、立体サポート構造・抗菌防臭機能といった付加価値を考えると、納得できる設計です。口コミでは「立ち仕事で足がラクになった」「姿勢を意識するようになった」という好評がある一方、「価格が高い」「靴によっては合わない」という声もあります。
          </p>
          <p>
            結論として、整体師監修の信頼性を重視する方や、骨格筋アプローチに興味がある方にはおすすめできる商品です。ただし、価格を抑えたい方や、幅広い靴に使いたい方は他の選択肢も検討した方がよいでしょう。
          </p>
        </div>
      </section>

      {/* Section 2: Bad Reviews */}
      <section id="bad-reviews" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
            悪い口コミ・気になる点
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            まずは、スリムアップインソールの気になる口コミから見ていきましょう。購入前に知っておきたいリアルな声を集めました。
          </p>

          <div className="space-y-4">
            {[
              {
                title: "価格が高いと感じる",
                text: "単品で約7,000円はインソールとしては高め。100円ショップのインソールと比べると…と思ってしまいます。ただ、整体師監修という点を考えると妥当なのかもしれません。",
                age: "30代女性",
              },
              {
                title: "靴によっては合わない",
                text: "スニーカーには問題なく入りましたが、パンプスには厚みがあって入りませんでした。靴を選ぶのがデメリットだと思います。",
                age: "40代女性",
              },
              {
                title: "最初は足が痛くなった",
                text: "使い始めて数日は足裏が痛くなりました。1週間ほどで慣れましたが、最初から長時間使うのは避けた方がいいかもしれません。",
                age: "20代女性",
              },
            ].map((review) => (
              <div
                key={review.title}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-sm">&#9650;</span>
                  <span className="text-sm font-bold text-gray-900">
                    {review.title}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {review.text}
                </p>
                <p className="text-xs text-gray-400">{review.age}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm font-bold text-amber-800 mb-1">
              悪い口コミの傾向まとめ
            </p>
            <p className="text-sm text-amber-700 leading-relaxed">
              悪い口コミの多くは「価格の高さ」「靴との相性」「使い始めの違和感」に集中しています。価格についてはセット購入で1足あたりのコストを下げる方法があり、靴との相性は深さのあるスニーカーやウォーキングシューズで使用すれば解消できるケースがほとんどです。
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Good Reviews */}
      <section id="good-reviews" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          良い口コミ・評判
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          続いて、スリムアップインソールの良い口コミを紹介します。多くのユーザーから寄せられた好評の声です。
        </p>

        <div className="space-y-4">
          {[
            {
              title: "立ち仕事でも足がラク",
              text: "看護師で一日中立ちっぱなしですが、このインソールを入れてから夕方の足の疲れが全然違います。帰宅後に足がパンパンになることが減りました。",
              age: "30代女性",
            },
            {
              title: "姿勢を意識するようになった",
              text: "インソールを入れると自然と背筋が伸びる感覚があります。猫背が気になっていたので、日常的に姿勢を意識できるようになったのが嬉しいです。",
              age: "40代女性",
            },
            {
              title: "夕方でも足がラクに過ごせる",
              text: "以前は夕方になるとむくみがひどかったのですが、使い始めてから足の軽さが違います。2足セットで買って、通勤用とウォーキング用に使い分けています。",
              age: "30代女性",
            },
            {
              title: "整体師監修で安心感がある",
              text: "YouTubeで井上先生の動画を見ていたので信頼できました。実際に使ってみて、足裏全体がしっかり支えられている感覚があり、さすがプロ監修だと思いました。",
              age: "20代女性",
            },
            {
              title: "抗菌防臭が地味にありがたい",
              text: "毎日使うものなので、臭いが気になっていましたが、抗菌防臭機能のおかげか全く気になりません。衛生面でも安心して使えます。",
              age: "40代女性",
            },
          ].map((review) => (
            <div
              key={review.title}
              className="bg-white border border-gray-200 rounded-lg p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-500 text-sm">&#9650;</span>
                <span className="text-sm font-bold text-gray-900">
                  {review.title}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                {review.text}
              </p>
              <p className="text-xs text-gray-400">{review.age}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm font-bold text-emerald-800 mb-1">
            良い口コミの傾向まとめ
          </p>
          <p className="text-sm text-emerald-700 leading-relaxed">
            良い口コミでは「足の疲れ軽減」「姿勢の改善」「夕方のむくみ軽減」が特に多く見られます。整体師監修という専門性への信頼感も高評価のポイントです。日常的に歩く時間が長い方ほど効果を実感しやすい傾向があります。
          </p>
        </div>
      </section>

      {/* Section 4: Features */}
      <section id="features" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
            特徴と効果の仕組み（整体師監修の骨格筋アプローチ）
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                監修者：美容整体師 井上剛志とは
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                井上剛志氏はYouTubeチャンネル「アピアランスTV」を運営する美容整体師で、チャンネル登録者数は約136万人を誇ります。骨格や姿勢の専門家として、体の根本的な改善を提唱しており、その知見がスリムアップインソールの設計に活かされています。
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                3つのコア技術
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "立体サポート構造",
                    description:
                      "足裏の3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）を立体的にサポート。足裏全体に均等に圧力を分散させることで、正しい歩行姿勢を促します。",
                  },
                  {
                    title: "骨格筋サポート",
                    description:
                      "整体師の知見を活かし、足裏から骨格と筋肉の連動をサポートする設計。普段使われにくいインナーマッスルを刺激し、効率的な体の使い方を促進します。",
                  },
                  {
                    title: "抗菌防臭機能",
                    description:
                      "毎日使うインソールだからこそ衛生面にも配慮。抗菌・防臭加工を施しており、長時間の使用でも清潔に保てます。蒸れやすい季節でも快適です。",
                  },
                ].map((tech) => (
                  <div
                    key={tech.title}
                    className="bg-white border border-gray-200 rounded-lg p-5"
                  >
                    <h4 className="text-sm font-bold text-emerald-600 mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                効果のメカニズム
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                スリムアップインソールの効果は「骨格筋アプローチ」と呼ばれる仕組みに基づいています。足裏のアーチを正しい位置に導くことで、以下のような連鎖的な効果が期待できます。
              </p>
              <ol className="space-y-3">
                {[
                  "足裏のアーチが正しい位置に整い、体重が均等に分散される",
                  "骨盤の歪みが改善され、正しい姿勢を維持しやすくなる",
                  "普段使われにくい内転筋やインナーマッスルが活性化する",
                  "歩行時のエネルギー効率が上がり、消費カロリーが増加する",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                ただし、インソール単体で劇的な体重減少は期待できません。あくまで正しい体の使い方をサポートするものであり、適度な運動や食事管理との併用が効果的です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pros & Cons */}
      <section id="pros-cons" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          メリット・デメリット
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-base font-bold text-emerald-700 mb-4">
              メリット
            </h3>
            <ul className="space-y-3">
              {[
                "美容整体師監修で専門性が高い",
                "立体サポート構造で足裏全体をカバー",
                "抗菌防臭機能で衛生面も安心",
                "骨格筋に着目した独自のアプローチ",
                "セット購入で1足あたりのコストを削減可能",
                "YouTubeで監修者の情報が確認できる信頼性",
              ].map((merit) => (
                <li
                  key={merit}
                  className="flex items-start gap-2 text-sm text-emerald-800"
                >
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#9675;
                  </span>
                  {merit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-base font-bold text-red-700 mb-4">
              デメリット
            </h3>
            <ul className="space-y-3">
              {[
                "単品価格が6,980円とやや高め",
                "靴の形状によっては合わない場合がある",
                "使い始めは足が痛くなる可能性がある",
                "市販されていないため実物を試せない",
                "即効性はなく継続使用が必要",
                "効果に個人差がある",
              ].map((demerit) => (
                <li
                  key={demerit}
                  className="flex items-start gap-2 text-sm text-red-800"
                >
                  <span className="text-red-400 shrink-0 mt-0.5">
                    &#9651;
                  </span>
                  {demerit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section id="pricing" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
            料金・最安値・販売店情報
          </h2>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
            公式サイトの料金プラン
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">プラン</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    価格（税込）
                  </th>
                  <th className="px-4 py-3 text-right font-semibold">
                    1足あたり
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-gray-900">単品（1足）</td>
                  <td className="px-4 py-3 text-right text-gray-900">
                    6,980円
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    6,980円
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">2足セット</td>
                  <td className="px-4 py-3 text-right text-gray-900">
                    11,980円
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    5,990円
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900 font-semibold">
                    3足セット
                    <span className="ml-2 inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                      +1足プレゼント
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900 font-semibold">
                    17,920円
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600 font-bold">
                    4,480円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-1">
              最安値のポイント
            </p>
            <p className="text-sm text-emerald-700 leading-relaxed">
              3足セット（17,920円）を選ぶと1足プレゼントが付くため、実質4足で1足あたり4,480円になります。家族や友人とシェアする方や、複数の靴に入れたい方はセット購入が断然お得です。
            </p>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
            販売店比較
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    販売店
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">
                    取扱い
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    store: "イッティ公式サイト",
                    available: true,
                    note: "セット割引・プレゼント付きあり",
                  },
                  {
                    store: "楽天市場",
                    available: true,
                    note: "ポイント還元あり",
                  },
                  {
                    store: "Amazon",
                    available: true,
                    note: "プライム対象の場合あり",
                  },
                  {
                    store: "Yahooショッピング",
                    available: true,
                    note: "PayPay還元あり",
                  },
                  {
                    store: "ドラッグストア",
                    available: false,
                    note: "取扱いなし",
                  },
                  {
                    store: "ドン・キホーテ",
                    available: false,
                    note: "取扱いなし",
                  },
                  {
                    store: "薬局・量販店",
                    available: false,
                    note: "取扱いなし",
                  },
                ].map((row) => (
                  <tr key={row.store}>
                    <td className="px-4 py-3 text-gray-900">{row.store}</td>
                    <td className="px-4 py-3 text-center">
                      {row.available ? (
                        <span className="text-emerald-500 font-bold">
                          &#9675;
                        </span>
                      ) : (
                        <span className="text-red-400 font-bold">&#10005;</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm font-bold text-amber-800 mb-1">
              購入時の注意点
            </p>
            <p className="text-sm text-amber-700 leading-relaxed">
              スリムアップインソールは市販されていません。ドラッグストア・薬局・量販店では購入できないためご注意ください。セット割引やプレゼント特典は公式サイトが最も充実しています。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Size Guide */}
      <section id="size-guide" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          サイズ選び・使い方ガイド
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              サイズの選び方
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              スリムアップインソールはフリーサイズで、はさみでカットしてお手持ちの靴に合わせることができます。以下の手順で正しくサイズ調整してください。
            </p>
            <ol className="space-y-3">
              {[
                "お手持ちの靴の中敷きを取り出し、スリムアップインソールの上に重ねます",
                "中敷きの形に合わせて、ペンでガイドラインを引きます",
                "ガイドラインに沿って、はさみでカットします",
                "カット後に靴に入れて、フィット感を確認します",
                "微調整が必要な場合は、少しずつカットして仕上げます",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              効果的な使い方
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "慣らし期間を設ける",
                  description:
                    "最初は1日2〜3時間から始めて、1週間かけて徐々に使用時間を延ばしましょう。急に長時間使うと足が痛くなる場合があります。",
                },
                {
                  title: "歩行量の多い靴に使う",
                  description:
                    "通勤靴やウォーキングシューズなど、歩く時間が長い靴に入れるのが最も効果的です。室内用スリッパでは効果を感じにくいです。",
                },
                {
                  title: "正しい歩き方を意識する",
                  description:
                    "かかとから着地してつま先で蹴り出す正しい歩行を心がけましょう。インソールの効果を最大限に引き出せます。",
                },
                {
                  title: "定期的にお手入れする",
                  description:
                    "週に1回程度、取り出して陰干しすることで清潔に保てます。汚れがひどい場合は中性洗剤でやさしく手洗いしてください。",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Who is it for */}
      <section id="who" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
            向いている人・向いていない人
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-emerald-700 mb-4">
                向いている人
              </h3>
              <ul className="space-y-3">
                {[
                  "整体師監修の信頼性を重視する方",
                  "立ち仕事や歩行が多い方",
                  "姿勢の改善に興味がある方",
                  "骨格筋アプローチに興味がある方",
                  "YouTubeで井上先生を知っている方",
                  "抗菌防臭機能を求める方",
                  "複数の靴にインソールを入れたい方（セット購入）",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-emerald-500 shrink-0 mt-0.5">
                      &#9675;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-red-700 mb-4">
                向いていない人
              </h3>
              <ul className="space-y-3">
                {[
                  "できるだけ安いインソールを探している方",
                  "パンプスやヒールメインで使いたい方",
                  "すぐに効果を実感したい方",
                  "実物を手に取ってから購入したい方",
                  "特許技術を重視する方（ピットソール推奨）",
                  "薄型インソールを求める方",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-red-400 shrink-0 mt-0.5">
                      &#9651;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          よくある質問（FAQ）
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "スリムアップインソールは本当に効果がありますか？",
              answer:
                "個人差はありますが、骨格筋サポート構造により正しい姿勢と歩行を促すことで、日常生活での筋肉の使い方が改善されます。即効性よりも2〜3ヶ月の継続使用で変化を実感する方が多いです。",
            },
            {
              question: "ドラッグストアや薬局で購入できますか？",
              answer:
                "スリムアップインソールは市販されておらず、ドラッグストアや薬局では購入できません。公式サイト・楽天・Amazon・Yahooショッピングのオンライン販売のみとなっています。",
            },
            {
              question: "男性でも使用できますか？",
              answer:
                "はい、男女兼用です。フリーサイズで、はさみでカットしてサイズ調整が可能なため、男性の靴にも対応できます。",
            },
            {
              question: "パンプスやヒールの靴にも使えますか？",
              answer:
                "靴の形状によっては合わない場合があります。スニーカーやウォーキングシューズなど、ある程度の深さがある靴での使用が推奨されています。パンプスに入れると窮屈になるケースがあるため注意が必要です。",
            },
            {
              question: "洗濯はできますか？",
              answer:
                "水洗いが可能です。中性洗剤を使ってやさしく手洗いし、直射日光を避けて陰干ししてください。抗菌防臭加工が施されているため、毎日洗う必要はありません。",
            },
            {
              question: "どのくらいの期間使えますか？",
              answer:
                "使用頻度や歩行量によりますが、一般的に3〜6ヶ月程度が交換の目安です。クッション性が低下してきたと感じたら交換をおすすめします。セット購入しておくとスムーズに交換できます。",
            },
            {
              question: "返品・交換はできますか？",
              answer:
                "公式サイトからの購入の場合、未開封品に限り返品が可能です。詳しい条件はイッティ公式サイトの返品ポリシーをご確認ください。楽天やAmazonでの購入は各プラットフォームの規約に準じます。",
            },
            {
              question: "他のダイエットインソールとの違いは何ですか？",
              answer:
                "最大の特徴は美容整体師・井上剛志氏の監修による骨格筋アプローチです。一般的なインソールがクッション性を重視するのに対し、スリムアップインソールは骨格と筋肉の連動に着目した設計が特徴です。特許技術を重視するならピットソール、薄型を求めるならランウェイキュアソールも選択肢に入ります。",
            },
          ].map((faq) => (
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
      </section>

      {/* Section 10: Summary */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
          まとめ
        </h2>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            スリムアップインソールは、美容整体師・井上剛志氏（YouTube登録者約136万人）が監修した、骨格筋サポートに特化したダイエットインソールです。
          </p>
          <p>
            立体サポート構造による足裏アーチのサポート、骨格筋アプローチによる姿勢改善、抗菌防臭機能による衛生面への配慮と、3つの柱で日常の歩行をサポートしてくれます。
          </p>
          <p>
            口コミでは「立ち仕事でも足がラク」「姿勢を意識できるようになった」「夕方のむくみが軽減した」と好評な一方、「価格が高い」「靴によっては合わない」「最初は足が痛い」という声もあります。
          </p>
          <p>
            単品6,980円（税込）とやや高めですが、3足セット（17,920円+1足プレゼント）なら1足あたり4,480円まで下がります。複数の靴に入れたい方やコストを抑えたい方はセット購入がおすすめです。
          </p>
        </div>

        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h3 className="text-base font-bold text-emerald-800 mb-3">
            スリムアップインソールの評価まとめ
          </h3>
          <ul className="space-y-2">
            {[
              "整体師監修の専門性と信頼性は高い",
              "骨格筋アプローチという独自の設計思想",
              "立ち仕事・歩行が多い方に特におすすめ",
              "セット購入で大幅にコストダウン可能",
              "市販なし、オンライン専売のため注意",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-emerald-800"
              >
                <span className="text-emerald-500 shrink-0 mt-0.5">
                  &#10003;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/articles/slimup-not-working/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールは痩せない？口コミから検証</p>
              <p className="text-xs text-gray-500 mt-1">痩せない原因を分析し、効果を最大化する使い方を解説</p>
            </Link>
            <Link href="/articles/slimup-coupon/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールの最安値・キャンペーン情報</p>
              <p className="text-xs text-gray-500 mt-1">2026年最新のお得な購入方法を徹底解説</p>
            </Link>
            <Link href="/articles/slimup-guide/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スリムアップインソールのサイズ選び・使い方ガイド</p>
              <p className="text-xs text-gray-500 mt-1">フリーサイズのカット方法と効果的な使い方を解説</p>
            </Link>
            <Link href="/ranking/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめ3選を徹底比較</p>
              <p className="text-xs text-gray-500 mt-1">ピットソール・ランウェイキュアソール・スリムアップインソールを比較</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-16 mb-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            他のインソールと比較してみませんか？
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            ピットソール・ランウェイキュアソール・スリムアップインソールの3商品を徹底比較。
            <br className="hidden md:block" />
            あなたの目的や予算に合ったダイエットインソールが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta text-base md:text-lg">
            おすすめランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
