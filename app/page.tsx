import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OfficialCTA from "./components/OfficialCTA";

export const metadata: Metadata = {
  title: "ダイエットインソール比較｜人気3商品の口コミ・効果・最安値を比較【2026年】",
  description: "ダイエットインソール3商品（ピットソール・ランウェイキュアソール・スリムアップインソール）の口コミ・効果・料金を比較。あなたにぴったりのダイエットインソールが見つかるレビューサイトです。",
  alternates: {
    canonical: "https://sole-laboratory.com/",
  },
};

const products = [
  {
    name: "ピットソール",
    key: "pitsole" as const,
    shot: "/images/official-pitsole.jpg",
    tagline: "特許取得の骨格矯正インソール",
    price: "1,771円〜/月",
    points: ["世界特許取得の独自構造", "累計販売数200万足突破（2025年4月時点・公式発表）", "骨格から姿勢をサポート"],
    href: "/pitsole/",
    accent: "#e8627c",
    badge: "人気No.1",
  },
  {
    name: "ランウェイキュアソール",
    key: "runway" as const,
    shot: "/images/official-runway.jpg",
    tagline: "美姿勢サポートインソール",
    price: "1,650円〜/月",
    points: ["3つのアーチをサポート", "美姿勢で歩行をサポート", "薄型で靴を選ばない"],
    href: "/runway-cure-sole/",
    accent: "#c9a76c",
    badge: "美姿勢",
  },
  {
    name: "スリムアップインソール",
    key: "slimup" as const,
    shot: "/images/official-slimup.jpg",
    tagline: "コスパ重視のダイエットインソール",
    price: "1,100円〜/月",
    points: ["手頃な価格設定", "初めての方におすすめ", "シンプルな設計で使いやすい"],
    href: "/slim-up-insole/",
    accent: "#34d399",
    badge: "コスパ◎",
  },
];

const reasons = [
  {
    title: "公開情報で比較",
    description:
      "3つのダイエットインソールを項目ごとに比較。構造・効果・価格をわかりやすく整理しています。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "公開情報にもとづくレビュー",
    description:
      "メリットだけでなくデメリットもお伝えします。実際の口コミも含め、偏りのない情報を掲載します。",
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
      {/* Hero：画像は左右を切らずに全幅で出す（width:100% / height:auto） */}
      <section className="relative">
        <Image
          src="/images/hero-walk.jpg"
          alt=""
          width={2000}
          height={1334}
          sizes="100vw"
          priority
          className="w-full h-auto block"
        />
        {/* 文字を読ませるための控えめな覆い */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-3xl px-5 text-center">
            <h1 className="font-mincho text-white leading-[1.9] tracking-[0.08em] text-[clamp(1.05rem,3.2vw,2.1rem)] [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
              いつもの靴に入れるだけで
              <br />
              毎日の一歩が変わる。
              <br />
              もっと自分輝ける
            </h1>

            <div className="mt-[clamp(1rem,3vw,2.25rem)] flex flex-wrap gap-3 justify-center">
              <Link
                href="/ranking/"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/80 bg-white/95 px-[clamp(1rem,2.6vw,2rem)] py-[clamp(0.5rem,1.4vw,0.85rem)] text-[clamp(0.75rem,1.5vw,0.95rem)] text-[#3d2b2f] transition-colors hover:bg-white"
              >
                おすすめ3選を見る
              </Link>
              <Link
                href="/diagnosis/"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/80 px-[clamp(1rem,2.6vw,2rem)] py-[clamp(0.5rem,1.4vw,0.85rem)] text-[clamp(0.75rem,1.5vw,0.95rem)] text-white transition-colors hover:bg-white/15"
              >
                自分に合う1足を診断
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ヒーロー直下のリード */}
      <section className="bg-[#faf7f3]">
        <div className="max-w-3xl mx-auto px-5 py-12 md:py-16 text-center">
          <p className="font-mincho text-[#3d2b2f] text-lg md:text-2xl leading-[2] tracking-[0.06em]">
            無意識の一歩を、意識する一歩に
          </p>
          <p className="mt-5 text-sm md:text-base text-[#6b5b5e] leading-[2]">
            ダイエットインソール3商品を、公式サイトの情報と実在する口コミをもとに比較しています。
            <br className="hidden md:block" />
            誇張のない事実だけを並べて、あなたに合う一足を選べるようにしました。
          </p>
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
          {/* 横に並べた比較表。縦に伸びないよう、狭い画面では横スクロールにする */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[680px] border-collapse bg-white border border-[#e8ded6] text-left">
              <thead>
                <tr>
                  <th className="w-[92px] border-b border-[#e8ded6] bg-[#faf7f3] px-3 py-2 text-xs font-medium text-[#6b5b5e]">
                    &nbsp;
                  </th>
                  {products.map((product) => (
                    <th key={product.name} className="border-b border-l border-[#e8ded6] px-3 py-3 align-top">
                      <Image
                        src={product.shot}
                        alt={`${product.name}の公式サイト`}
                        width={900}
                        height={570}
                        sizes="(max-width: 768px) 33vw, 240px"
                        className="w-full h-auto border border-[#e8ded6]"
                      />
                      <p className="mt-2 text-sm font-semibold text-[#3d2b2f]">{product.name}</p>
                      <p className="mt-0.5 text-xs font-normal text-[#8a7b7e]">{product.tagline}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-b border-[#e8ded6] bg-[#faf7f3] px-3 py-2 align-top text-xs font-medium text-[#6b5b5e]">
                    価格の目安
                  </th>
                  {products.map((product) => (
                    <td key={product.name} className="border-b border-l border-[#e8ded6] px-3 py-2 text-sm text-[#3d2b2f]">
                      {product.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border-b border-[#e8ded6] bg-[#faf7f3] px-3 py-2 align-top text-xs font-medium text-[#6b5b5e]">
                    特徴
                  </th>
                  {products.map((product) => (
                    <td key={product.name} className="border-b border-l border-[#e8ded6] px-3 py-2 align-top text-sm text-[#6b5b5e]">
                      <ul className="space-y-1.5">
                        {product.points.map((point) => (
                          <li key={point} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="bg-[#faf7f3] px-3 py-2 align-top text-xs font-medium text-[#6b5b5e]">
                    詳しく見る
                  </th>
                  {products.map((product) => (
                    <td key={product.name} className="border-l border-[#e8ded6] px-3 py-3 align-top">
                      <Link
                        href={product.href}
                        className="block rounded-full border border-[#c3a68f] px-3 py-2 text-center text-xs text-[#6b4c3a] transition-colors hover:bg-[#faf3ec]"
                      >
                        検証をよむ
                      </Link>
                      {/* OfficialCTA の外側の span を横幅いっぱいにして、上のボタンと幅をそろえる */}
                      <div className="mt-2 [&>span]:flex [&>span]:w-full [&>span>a]:w-full">
                        <OfficialCTA
                          product={product.key}
                          label="公式サイト"
                          className="block rounded-full bg-[#b98f6b] px-3 py-2 text-center text-xs text-white transition-colors hover:bg-[#a67a56]"
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#8a7b7e] leading-relaxed">
            表の画像は各製品の公式サイトの画面です（2026年10月21日に取得）。
            出典：
            <a href="https://bacchus-inc.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">BACCHUS ONLINE SHOP</a>
            ／
            <a href="https://flore-inc.co.jp/brand/runwaycuresole/" target="_blank" rel="noopener noreferrer nofollow" className="underline">FLORe</a>
            ／
            <a href="https://ichiban-boshi.com/shop/products/B_sui_s" target="_blank" rel="noopener noreferrer nofollow" className="underline">一番星</a>
            。価格は各製品ページに記載の公式確認値です。
          </p>

          {/* 1対1の比較への導線 */}
          <div className="mt-12">
            <h3 className="text-base md:text-lg font-bold text-center text-gray-900 mb-5">
              気になる2製品を1対1で比較する
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Link href="/compare/pitsole-vs-runway/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors text-center">
                <p className="text-sm font-semibold text-gray-900">ピットソール vs ランウェイ</p>
              </Link>
              <Link href="/compare/pitsole-vs-slimup/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors text-center">
                <p className="text-sm font-semibold text-gray-900">ピットソール vs スリムアップ</p>
              </Link>
              <Link href="/compare/runway-vs-slimup/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors text-center">
                <p className="text-sm font-semibold text-gray-900">ランウェイ vs スリムアップ</p>
              </Link>
            </div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f3ece4] text-[#8a6a4f] mb-4 shadow-sm">
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

      {/* Browse by theme */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
            目的から記事を探す
          </h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            症状・スポーツ・職業・靴・販売店など、テーマ別に選び方ガイドを用意しています
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { label: "足の症状・お悩み別", href: "/articles/#symptom" },
              { label: "スポーツ別の選び方", href: "/articles/#sports" },
              { label: "職業・立ち仕事別", href: "/articles/#job" },
              { label: "靴の種類別", href: "/articles/#shoes" },
              { label: "ダイエット・脚痩せ", href: "/articles/#diet" },
              { label: "購入・販売店ガイド", href: "/articles/#buy" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block border border-[#e8ded6] bg-white px-4 py-3 text-sm text-[#3d2b2f] transition-colors hover:bg-[#faf7f3]"
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/articles/" className="btn-outline text-sm">
              すべての記事を見る
            </Link>
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
                    className="w-5 h-5 text-[#8a6a4f] shrink-0 ml-4 group-open:rotate-180 transition-transform"
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
