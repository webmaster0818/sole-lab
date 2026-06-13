import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "スポーツ用品店のインソールはダイエットに使える？【2026年】競技用との目的の違い",
  description:
    "スポーツ用品店のインソールはダイエット目的に合う？競技パフォーマンス向け機能性インソールが中心という量販スポーツ店の一般的な特徴と、ダイエット専用設計との違い、選び分けを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sports-shop-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "スポーツ用品店のインソールはダイエットに使える？競技用との目的の違い",
  description:
    "スポーツ用品店のインソールはダイエット目的に合う？競技パフォーマンス向け機能性インソールが中心という量販スポーツ店の一般的な特徴と、ダイエット専用設計との違い、選び分けを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スポーツ用品店のインソールはダイエットに使えますか？", "a": "競技中のパフォーマンスやケガ予防を目的とした設計が中心で、日常の姿勢・歩行を整えるダイエット用とは目的が異なります。日常のボディメイクが目的なら専用設計のほうが向いています。"}, {"q": "ピットソールはスポーツ用品店で買えますか？", "a": "スポーツ用品店でのピットソールの取り扱いは確認されていません。公式サイトと正規のAmazon・楽天店舗が主な購入ルートです。"}, {"q": "スポーツ用の高機能インソールのほうが効果も高いのでは？", "a": "「効果が高い」かどうかは目的次第です。競技中の衝撃吸収や反発性ではスポーツ用が優れる一方、日常の歩行・姿勢サポートはダイエット用の設計領域です。価格や機能の高さではなく目的で選びましょう。"}, {"q": "運動用と日常用でインソールを分けるべきですか？", "a": "使い分けるのが現実的です。運動中は競技向け、日常の歩行はダイエット向けと、靴ごとに入れ分ければ入れ替えの手間もありません。"}, {"q": "スポーツ用品店の品揃えはどの店でも同じですか？", "a": "店舗の規模や時期によって取扱ブランド・在庫は異なります。目当ての商品がある場合は事前に在庫を確認するのが確実です。"}];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://sole-laboratory.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://sole-laboratory.com/articles/" },
    { "@type": "ListItem", position: 3, name: "スポーツ用品店", item: "https://sole-laboratory.com/articles/sports-shop-insole/" },
  ],
};

const points = [{"t": "競技用途なら専門店の強みを活かす", "b": "ランニングや球技など競技中の足のサポートが目的なら、競技別の機能系が揃い相談もできるスポーツ用品店が適しています。"}, {"t": "日常のダイエット目的は設計を確認", "b": "日常の歩行・姿勢サポートが目的なら、競技用ではなくダイエット向けの設計か（アーチサポートの考え方・対応する靴）を確認しましょう。"}, {"t": "使う場面で選び分ける", "b": "運動中はスポーツ用、通勤や日常の歩行はダイエット用と、場面ごとに使い分けるのも現実的な方法です。"}];
const related = [{"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用の違い"}, {"href": "/articles/abc-mart-insole/", "label": "靴量販店のインソール"}, {"href": "/articles/workman-insole/", "label": "ワークマンのインソール"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function SportsShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "スポーツ用品店" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">スポーツ用品店のインソールはダイエットに使える？競技用との目的の違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スポーツ用品店のインソール売り場には、ランニングやサッカーなど競技向けの機能性インソールが並び、専門性の高さでは実店舗随一です。ただ「機能性が高い＝ダイエットに向く」とは限りません。スポーツ用品店のインソールの一般的な特徴と、ダイエット専用設計との目的の違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">スポーツ用品店のインソールは、競技中のパフォーマンスやケガ予防を目的とした機能系が中心です。品質は高い一方、日常の姿勢・歩き方を整えてボディメイクを狙うダイエットインソールとは設計の目的が異なります。競技用なら専門店、日常のダイエットサポートなら専用設計、と目的で選び分けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スポーツ用品店のインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スポーツ用品店では、ランニング・サッカー・バスケットボールなど競技別の機能性インソールが充実しています。衝撃吸収やエネルギーリターン、足の熱成形フィッティングに対応する店舗もあり、競技中の足のサポートという点では実店舗の中で最も専門性が高いチャネルです。スタッフに競技や足の悩みを相談しながら選べるのも利点です。なお、取扱ブランドや品揃えは店舗の規模・時期によって異なります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ただし、これらは「競技中のパフォーマンス・ケガ予防」を主目的とした設計です。ダイエットインソールが目指すのは、日常の歩行や立ち姿勢でアーチを支え、姿勢・歩き方を整えること。使う場面も目的も異なるため、「高機能なスポーツ用を買えばダイエットにもなる」とは考えないほうが正確です。両者の違いは別記事「スポーツ用とダイエット用の違い」でも詳しく解説しています。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スポーツ用品店の選び方3つのポイント</h2>
          {points.map((p, i) => (
            <div key={p.t} className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{p.t}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{p.b}</p>
            </div>
          ))}
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スポーツ用品店におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">日常の歩行・姿勢サポートが目的なら、ダイエット向けの専用設計が選択肢になります。なお、当サイトで紹介する3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）は、スポーツ用品店を含む実店舗での取り扱いは確認されておらず、公式通販が中心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">商品</th>
                  <th className="p-3 text-left border-b border-gray-200">評価</th>
                  <th className="p-3 text-left border-b border-gray-200">特徴</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/pitsole/" className="text-[#e8627c] underline">ピットソール</Link></td><td className="p-3 border-b border-gray-200">★3.8</td><td className="p-3 border-b border-gray-200">特許取得のアーチサポート。累計200万足の実績で安定感。</td></tr>
                <tr><td className="p-3 border-b border-gray-200 font-medium"><Link href="/runway-cure-sole/" className="text-[#e8627c] underline">ランウェイキュアソール</Link></td><td className="p-3 border-b border-gray-200">★3.6</td><td className="p-3 border-b border-gray-200">3点アーチ設計で姿勢サポート。薄型で靴を選びにくい。</td></tr>
                <tr><td className="p-3 font-medium"><Link href="/slim-up-insole/" className="text-[#e8627c] underline">スリムアップインソール</Link></td><td className="p-3">★3.5</td><td className="p-3">クッション性重視。コスパよく初めての方に。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">※評価はユーザーの口コミ傾向をもとにした編集部独自の目安です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ダイエットインソールはスポーツ用品店で売ってる？</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ピットソール・ランウェイキュアソール・スリムアップインソールの<strong>スポーツ用品店での取り扱いは確認されていません</strong>。ピットソールは公式サイトと正規のAmazon・楽天店舗、ランウェイキュアソールは公式サイト（FLOReショップ）、スリムアップインソールも通販が主な購入ルートです。店頭の機能性インソールとは設計目的が異なる別商品です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">選び分けの目安は「いつ使うか」です。部活やマラソン大会など競技中の足を支えたいならスポーツ用品店で競技に合ったものを、通勤・買い物・ウォーキングなど日常の歩行で姿勢や歩き方を整えたいならダイエット専用設計を選びましょう。どちらか一方が優れているのではなく、目的が違うだけです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-bold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#0ea5e9] group-open:rotate-45 transition-transform">＋</span></summary>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-[#e8627c] rounded-xl p-6 md:p-8 text-center mb-12">
          <p className="text-white font-bold text-lg mb-2">自分に合うインソールを見つけよう</p>
          <p className="text-white/90 text-sm mb-5">日常の歩行で姿勢を整えたいなら、ダイエット専用設計のインソールを比較しましょう。</p>
          <Link href="/ranking/" className="inline-block bg-white text-[#e8627c] font-bold px-6 py-3 rounded-lg hover:bg-[#fdf2f4] transition-colors">おすすめインソールランキングを見る</Link>
        </div>

        <section className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
                <p className="text-sm font-bold text-gray-900">{r.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
