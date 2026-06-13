import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ロフト・ハンズのインソールはダイエットに使える？【2026年】雑貨系との違い",
  description:
    "ロフトや東急ハンズなどバラエティショップのインソールはダイエットに使える？フットケア雑貨が中心という売り場の一般的な特徴と、ダイエット専用設計との目的の違い、選び分けを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/loft-hands-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ロフト・ハンズ等バラエティショップのインソールはダイエットに使える？雑貨系との違い",
  description:
    "ロフトや東急ハンズなどバラエティショップのインソールはダイエットに使える？フットケア雑貨が中心という売り場の一般的な特徴と、ダイエット専用設計との目的の違い、選び分けを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ロフトやハンズにダイエットインソールはありますか？", "a": "フットケア雑貨（消臭・クッション・冷え対策など）が中心で、姿勢・歩行を整えるダイエット専用設計の取り扱いは一般的ではありません。品揃えは店舗・時期によって変わります。"}, {"q": "ピットソールはロフトで買えますか？", "a": "バラエティショップでのピットソールの取り扱いは確認されていません。公式サイトと正規のAmazon・楽天店舗が主な購入ルートです。"}, {"q": "バラエティショップのインソールはどんな人に向いていますか？", "a": "足のムレ・ニオイ・ちょっとした疲れや冷えを手軽にケアしたい人に向いています。実物を見比べて選べるのも利点です。"}, {"q": "インソールはプレゼントになりますか？", "a": "フットケア雑貨は立ち仕事の家族へのちょっとしたギフトとしても選ばれます。サイズ調整できるタイプだと贈りやすいです。詳しくは別記事「ギフトに向くインソール」をご覧ください。"}, {"q": "雑貨系インソールとダイエットインソールはどちらが良いですか？", "a": "優劣ではなく目的の違いです。快適さのケアなら雑貨系、姿勢・歩行を整えてボディメイクを狙うならダイエット専用設計が目的に合います。"}];

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
    { "@type": "ListItem", position: 3, name: "ロフト・ハンズ等バラエティショップ", item: "https://sole-laboratory.com/articles/loft-hands-insole/" },
  ],
};

const points = [{"t": "フットケア雑貨ならバラエティショップが楽しい", "b": "消臭・クッション・冷え対策などの快適グッズは、実物を見比べながら選べるバラエティショップが向いています。"}, {"t": "ダイエット目的は設計の中身で選ぶ", "b": "パッケージの印象ではなく、アーチサポートの構造や姿勢・歩行サポートの設計があるかで判断しましょう。雑貨系とは目的が異なります。"}, {"t": "品揃えは店舗・時期で変わる前提で", "b": "バラエティショップの売り場は入れ替わりが早く、店舗ごとの差も大きめです。確実に欲しい商品が決まっているなら通販ルートも検討しましょう。"}];
const related = [{"href": "/articles/muji-insole/", "label": "無印良品のインソール"}, {"href": "/articles/donki-insole/", "label": "ドンキのインソール"}, {"href": "/articles/gift-insole/", "label": "ギフトに向くインソール"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function LoftHandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ロフト・ハンズ等バラエティショップ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ロフト・ハンズ等バラエティショップのインソールはダイエットに使える？雑貨系との違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ロフトや東急ハンズなどのバラエティショップは、フットケア雑貨の売り場が充実していて、ついで買いでインソールを手に取る機会も多い場所です。デザインやアイデアが楽しい商品が並びますが、ダイエット目的にはどうなのか——バラエティショップのインソールの一般的な特徴と専用品との違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">バラエティショップのインソールは、消臭・クッション・冷え対策などフットケア雑貨としての商品が中心で、見て選ぶ楽しさと手軽さが魅力です。ただし品揃えは店舗・時期で変わり、姿勢・歩き方を整える本格的なダイエット設計とは目的が異なります。ダイエット重視なら専用インソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バラエティショップのインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ロフトやハンズに代表されるバラエティショップは、生活雑貨の文脈でフットケア用品を扱っています。消臭・抗菌系、クッション系、冷え対策、立ち仕事向けのリフレッシュ系など、「足まわりの悩みを雑貨で解決する」タイプの商品が並びやすいのが特徴です。実物を見比べながら選べて、ギフトついでに探せるのも魅力です。なお、具体的な品揃えや取扱ブランドは店舗の規模・時期によって異なります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、ダイエットインソールは足裏のアーチを支えて姿勢・歩行を整えることを目的にした設計で、雑貨系の快適グッズとは狙いが異なります。「足のムレやニオイ、ちょっとした疲れをケアしたい」ならバラエティショップで十分選べますが、ボディメイク目的なら専用設計を確認して選ぶほうが目的に合います。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ロフト・ハンズ等バラエティショップの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ロフト・ハンズ等バラエティショップにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエットや姿勢改善が目的なら、専用設計のインソールが向いています。なお、当サイトで紹介する3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）は、バラエティショップを含む実店舗での取り扱いは確認されておらず、公式通販が中心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ダイエットインソールはロフトやハンズで売ってる？</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ピットソール・ランウェイキュアソール・スリムアップインソールの<strong>ロフト・ハンズなどバラエティショップでの取り扱いは確認されていません</strong>。ピットソールは公式サイトと正規のAmazon・楽天店舗、ランウェイキュアソールは公式サイト（FLOReショップ）が主な購入ルートです。店頭にもアーチサポートをうたうフットケア商品はありますが、設計の異なる別商品です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使い分けの目安は、「足まわりの快適グッズが欲しい」「プレゼントついでに探したい」ならバラエティショップ、「姿勢や歩き方を整えてダイエットにつなげたい」なら専用設計の通販品です。どちらも足のための商品ですが、解決したい悩みが違います。</p>
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
