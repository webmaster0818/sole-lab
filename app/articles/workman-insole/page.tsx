import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークマンのインソールはダイエットに使える？【2026年】特徴と比較",
  description:
    "ワークマンのインソールはコスパ抜群？立ち仕事・作業向けの特徴と、ダイエット目的のインソールとの違いを比較。目的別の選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/workman-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ワークマンのインソールはダイエットに使える？特徴と専用品との違い",
  description:
    "ワークマンのインソールはコスパ抜群？立ち仕事・作業向けの特徴と、ダイエット目的のインソールとの違いを比較。目的別の選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ワークマンのインソールでダイエットできますか？", "a": "ワークマン品は主に疲れ軽減・衝撃吸収向けで、ダイエット専用設計ではありません。姿勢・歩き方を整えるダイエット目的には専用品が向いています。"}, {"q": "立ち仕事の疲れ対策には十分ですか？", "a": "はい。コスパよく衝撃吸収や疲労軽減に対応できるため、立ち仕事や作業の疲れ対策には十分実用的です。"}, {"q": "専用ダイエットインソールとの一番の違いは？", "a": "目的の違いです。ワークマン品は疲れ軽減重視、ダイエットインソールは姿勢・歩行を整えて使う筋肉を増やす設計です。"}];

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
    { "@type": "ListItem", position: 3, name: "ワークマン", item: "https://sole-laboratory.com/articles/workman-insole/" },
  ],
};

const points = [{"t": "疲れ軽減・作業ならコスパ良好", "b": "立ち仕事や作業の疲れ対策には、ワークマンの低価格インソールが手軽でおすすめです。"}, {"t": "ダイエット目的なら専用設計", "b": "姿勢・歩き方を整えてボディメイクを狙うなら、特許技術などの専用ダイエットインソールが向いています。"}, {"t": "目的で使い分ける", "b": "『疲れ軽減』か『ダイエット』かで選ぶ製品が変わります。目的を明確にしましょう。"}];
const related = [{"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/100kin-comparison/", "label": "100均インソールの比較"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}];

export default function WorkmanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ワークマン" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ワークマンのインソールはダイエットに使える？特徴と専用品との違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">作業着で人気のワークマンは、コスパの良いインソールも扱っています。立ち仕事や作業の疲れ対策には魅力的ですが、ダイエット目的にはどうなのか——特徴と専用品との違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ワークマンのインソールは、立ち仕事・作業の疲れ軽減や衝撃吸収にコスパよく対応できます。ただし姿勢や歩き方を整える本格的なダイエット設計とは目的が異なるため、ダイエット重視なら専用インソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ワークマンのインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ワークマンは作業者向けに、衝撃吸収や疲労軽減、消臭などを重視した低価格のインソールを展開しています。立ち仕事や歩き回る作業の疲れ対策として、コストパフォーマンスに優れているのが魅力です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で、ダイエットインソールは、足元を安定させて姿勢・歩き方を整え、使う筋肉を増やすことを目的にした設計です。ワークマン品は疲れ軽減には十分ですが、姿勢改善やボディメイクを狙うなら専用設計の製品のほうが目的に合います。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ワークマンの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ワークマンにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエットや姿勢改善が目的なら、専用設計のインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">目的別の選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">とにかく安く疲れを軽減したい・作業靴に入れたいならワークマンの汎用インソールが手軽です。一方、姿勢や歩き方を整えてダイエットにつなげたいなら、専用設計の製品を選びましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">両者は価格帯も目的も異なります。どちらが優れているかではなく、自分の目的に合うかで選ぶのがポイントです。</p>
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
