import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ABCマートなど靴量販店のインソールはダイエットに使える？【2026年】専用品との違い",
  description:
    "ABCマートをはじめとする靴量販店のインソールはダイエットに使える？靴と同時に選べる量販店ならではの特徴と、姿勢・歩行を整えるダイエット専用設計との目的の違い、選び分けを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/abc-mart-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "靴量販店（ABCマート等）のインソールはダイエットに使える？専用品との違い",
  description:
    "ABCマートをはじめとする靴量販店のインソールはダイエットに使える？靴と同時に選べる量販店ならではの特徴と、姿勢・歩行を整えるダイエット専用設計との目的の違い、選び分けを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ABCマートなどの靴量販店にダイエットインソールはありますか？", "a": "靴量販店はクッション・消臭・フィット調整など靴の快適性を高める汎用インソールが中心です。姿勢・歩行を整えるダイエット専用設計の取り扱いは一般的ではなく、品揃えは店舗・時期で変わります。"}, {"q": "ピットソールはABCマートで買えますか？", "a": "靴量販店でのピットソールの取り扱いは確認されていません。公式サイトと正規のAmazon・楽天店舗が主な購入ルートです。ランウェイキュアソール・スリムアップインソールも同様に公式通販が中心です。"}, {"q": "靴量販店でインソールを買うメリットは何ですか？", "a": "靴と同じ売り場で選べることです。新しい靴のサイズ微調整やフィット感の改善が目的なら、実物を見ながら選べる量販店は便利です。"}, {"q": "靴を買うときにインソールも一緒に替えるべきですか？", "a": "必須ではありませんが、サイズが微妙に大きい場合や立ち時間が長い場合は、中敷きでの調整が快適さにつながることがあります。目的（フィット調整かダイエットサポートか）で選ぶ製品は変わります。"}, {"q": "ダイエットインソールはどこで買うのが確実ですか？", "a": "公式サイトなどの正規通販ルートが確実です。正規品保証や返金保証などは公式ルート限定の場合が多いため、購入前に条件を確認しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "靴量販店（ABCマート等）", item: "https://sole-laboratory.com/articles/abc-mart-insole/" },
  ],
};

const points = [{"t": "靴と同時に選ぶなら量販店が便利", "b": "新しい靴のフィット調整やサイズ合わせが目的なら、靴と同じ売り場で実物を確かめながら選べる量販店は合理的な選択です。"}, {"t": "ダイエット目的は専用設計を確認", "b": "姿勢・歩行サポートをうたうダイエットインソールは設計が別物です。アーチサポートの構造や対応サイズを確認して選びましょう。"}, {"t": "品揃えは店舗・時期で変わる前提で", "b": "量販店の在庫・取扱ブランドは店舗の規模や時期によって異なります。確実に欲しい商品が決まっている場合は、公式通販などの確実なルートも検討しましょう。"}];
const related = [{"href": "/articles/sports-shop-insole/", "label": "スポーツ用品店のインソール"}, {"href": "/articles/sneaker-insole/", "label": "スニーカー用インソール"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}, {"href": "/articles/donki-insole/", "label": "ドンキのインソール"}];

export default function AbcMartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "靴量販店（ABCマート等）" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">靴量販店（ABCマート等）のインソールはダイエットに使える？専用品との違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ABCマートに代表される靴量販店は、スニーカーや革靴を買うついでにインソール売り場も覗ける身近な存在です。靴とセットで選べるのは量販店ならではの利点ですが、ダイエット目的にはどうなのか——靴量販店のインソールの一般的な特徴と、専用品との違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">靴量販店のインソールは、クッション・消臭・フィット調整など靴の履き心地を高める汎用品が中心で、靴と同時に選べるのが最大の利点です。ただし品揃えは店舗や時期で変わり、姿勢・歩き方を整える本格的なダイエット設計とは目的が異なります。ダイエット重視なら専用インソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴量販店のインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴量販店の強みは、なんといっても靴の専門売り場と同じ場所でインソールを選べることです。新しい靴に合わせて中敷きを試したり、サイズが大きめだった靴のフィット調整に使ったりと、「靴ありき」で選べるのは量販店ならではです。クッション系・消臭系・かかとフィット系など、履き心地を高める汎用インソールが中心に並びます。なお、具体的な取扱ブランドや品揃えは店舗の規模や時期によって変わるため、目当ての商品がある場合は事前に確認するのが確実です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、ダイエットインソールは足裏のアーチを支えて姿勢・歩き方を整えることを目的とした専用設計です。靴量販店のインソールは「靴を快適に履く」ことが主目的のため、ボディメイクを狙うなら設計思想の異なる専用品のほうが目的に合います。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴量販店（ABCマート等）の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴量販店（ABCマート等）におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエットや姿勢改善が目的なら、専用設計のインソールが向いています。なお、当サイトで紹介する3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）は、靴量販店を含む実店舗での取り扱いは確認されておらず、公式通販が中心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ピットソールなどのダイエットインソールは靴量販店で売ってる？</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">「ピットソール ABCマート」のように店頭での購入を考えて検索する方もいますが、<strong>ピットソール・ランウェイキュアソール・スリムアップインソールの靴量販店での取り扱いは確認されていません</strong>。いずれも公式サイトなどの通販が主な購入ルートで、ピットソールは公式サイトと正規のAmazon・楽天店舗が中心、ランウェイキュアソールは公式サイト（FLOReショップ）が中心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使い分けの目安はシンプルで、「靴のフィット感・快適さを今すぐ調整したい」なら靴量販店、「姿勢や歩き方を整えてダイエットにつなげたい」なら専用設計の通販品です。量販店の店頭にもアーチサポートをうたう商品はありますが、設計や目的が異なる別商品なので、混同しないようにしましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">ダイエット目的なら、姿勢と歩行を整える専用インソールを比較しましょう。</p>
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
