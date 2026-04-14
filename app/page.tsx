import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ダイエットインソール比較｜人気3商品の口コミ・効果・最安値を徹底比較【2026年】",
  description: "ダイエットインソール3商品（ピットソール・ランウェイキュアソール・スリムアップインソール）の口コミ・効果・料金を徹底比較。あなたにぴったりのダイエットインソールが見つかるレビューサイトです。",
  alternates: {
    canonical: "https://sole-laboratory.com/",
  },
};

const products = [
  {
    name: "ピットソール",
    tagline: "特許取得の骨格矯正インソール",
    price: "1,771円〜/月",
    points: ["世界特許取得の独自構造", "累計販売数10万足突破", "骨格から姿勢をサポート"],
    href: "/pitsole/",
    accent: "#e8627c",
    badge: "人気No.1",
  },
  {
    name: "ランウェイキュアソール",
    tagline: "美姿勢サポートインソール",
    price: "1,650円〜/月",
    points: ["3つのアーチをサポート", "美姿勢で歩行をサポート", "薄型で靴を選ばない"],
    href: "/runway-cure-sole/",
    accent: "#c9a76c",
    badge: "美姿勢",
  },
  {
    name: "スリムアップインソール",
    tagline: "コスパ重視のダイエットインソール",
    price: "1,100円〜/月",
    points: ["手頃な価格設定", "初めての方におすすめ", "シンプルな設計で使いやすい"],
    href: "/slimup-insole/",
    accent: "#34d399",
    badge: "コスパ◎",
  },
];

const reasons = [
  {
    title: "実際に比較",
    description:
      "3つのダイエットインソールを項目ごとに徹底比較。構造・効果・価格をわかりやすく整理しています。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "正直レビュー",
    description:
      "メリットだけでなくデメリットも正直にお伝え。実際の口コミも含めて偏りのない情報を提供します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "最安値情報",
    description:
      "公式サイト・Amazon・楽天の価格を比較。最もお得に購入できる方法をご紹介しています。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "ダイエットインソールとは何ですか？",
    answer:
      "ダイエットインソールとは、靴の中敷きとして使うことで姿勢や歩行を改善し、日常の歩行で効率的にカロリー消費をサポートするインソールです。骨格の歪みを整えることで、正しい筋肉の使い方を促します。",
  },
  {
    question: "本当に効果はありますか？",
    answer:
      "個人差はありますが、正しい姿勢での歩行を促すことで、普段使われにくい筋肉を活性化させる効果が期待できます。即効性があるものではなく、継続して使用することが大切です。",
  },
  {
    question: "どのインソールを選べばいいですか？",
    answer:
      "効果を重視するならピットソール、バランス重視ならランウェイキュアソール、コスパ重視ならスリムアップインソールがおすすめです。当サイトの比較ページで詳しく解説しています。",
  },
  {
    question: "普段の靴にそのまま入れられますか？",
    answer:
      "はい、いずれの商品もお手持ちの靴に入れて使用できます。サイズ調整が可能なものが多く、スニーカーやパンプスなど幅広い靴に対応しています。",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f4] via-[#fef3e8] to-[#f0fdf4]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#e8627c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#34d399]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c9a76c]/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#f5eed6] px-3 py-1 rounded-full mb-4 tracking-wider">
              DIET INSOLE COMPARISON
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              歩くだけで、
              <br />
              <span className="text-gradient-fresh">キレイは叶う。</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              忙しい毎日でも、いつもの靴に入れるだけ。
              <br className="hidden md:block" />
              人気のダイエットインソール3商品を徹底比較して、
              <br className="hidden md:block" />
              あなたにぴったりの一足を見つけてください。
            </p>
            <Link href="/ranking/" className="btn-cta text-base md:text-lg">
              おすすめランキングを見る
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#e8627c]/20 via-[#c9a76c]/15 to-[#34d399]/20 rounded-3xl blur-2xl" />
            <Image
              src="/images/hero-banner.png"
              alt="自信を持って歩くキャリアウーマン"
              width={400}
              height={400}
              className="relative rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
            比較する3つのダイエットインソール
          </h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            それぞれの特徴をひと目で確認できます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card flex flex-col relative">
                <span
                  className="absolute -top-3 left-4 text-[11px] font-bold text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.badge}
                </span>
                <div
                  className="h-1 rounded-full mb-4 mt-2"
                  style={{ background: `linear-gradient(90deg, ${product.accent}, ${product.accent}80)` }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{product.tagline}</p>
                <p className="text-sm font-semibold mb-4" style={{ color: product.accent }}>
                  {product.price}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-0.5 shrink-0" style={{ color: product.accent }}>
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={product.href} className="btn-outline text-sm w-full">
                  詳しく見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#e8627c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#34d399]/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            ソールラボが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#fdf2f4] to-[#fef3e8] text-[#e8627c] mb-4 shadow-sm">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#f3e0e4] rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#fdf2f4] rounded-xl transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#e8627c] shrink-0 ml-4 group-open:rotate-180 transition-transform"
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

      {/* CTA */}
      <section className="section-primary-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#c9a76c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#e8627c]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 mx-auto w-full max-w-xs">
            <Image
              src="/images/cta-lifestyle.png"
              alt="自信を持って歩く女性"
              width={320}
              height={320}
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              自分に合ったインソールを
              <br />
              見つけよう
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              3つのダイエットインソールを比較して、
              <br className="hidden md:block" />
              あなたの目的・予算に合った商品を見つけてください。
            </p>
            <Link href="/ranking/" className="btn-cta text-base md:text-lg">
              おすすめランキングを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
