import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "バドミントンのインソールの選び方【2026年】反復ジャンプ・フットワークに",
  description:
    "バドミントンでフットワークを支えたい・足を守りたい方へ。反復ジャンプと素早い動きの衝撃を吸収するインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/badminton-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "バドミントンのインソールの選び方｜反復ジャンプとフットワークを支える",
  description:
    "バドミントンでフットワークを支えたい・足を守りたい方へ。反復ジャンプと素早い動きの衝撃を吸収するインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "バドミントンでインソールを使うメリットは？", "a": "着地衝撃の吸収と後足部の安定で、素早いフットワークでも踏ん張りやすく、膝・足首・アキレス腱の負担を軽減できます。"}, {"q": "ジャンプの膝への負担は減りますか？", "a": "衝撃吸収性のあるインソールは着地の衝撃を和らげ、膝への負担軽減の補助になります。ウォームアップやトレーニングと併用しましょう。"}, {"q": "バドミントンシューズの中敷きは外すべき？", "a": "フィットと衝撃吸収を保つため、元の中敷きを外してインソールと入れ替えるのがおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "バドミントン", item: "https://sole-laboratory.com/articles/badminton-insole/" },
  ],
};

const points = [{"t": "反復ジャンプの衝撃吸収", "b": "ジャンプスマッシュの着地を繰り返すため、衝撃吸収クッションが膝・足裏の負担を軽減します。"}, {"t": "後足部の安定で素早い切り返し", "b": "前後左右の動きで足がブレないよう、ヒールカップで後足部を安定させます。"}, {"t": "アーチサポートでランジを支える", "b": "深いランジ姿勢からの踏み込みで力が逃げないよう、アーチを支える設計を選びましょう。"}];
const related = [{"href": "/articles/basketball-insole/", "label": "バスケのインソール"}, {"href": "/articles/tennis-insole/", "label": "テニスのインソール"}, {"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}, {"href": "/articles/achilles-pain-insole/", "label": "アキレス腱炎のインソール"}];

export default function BadmintonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "バドミントン" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">スポーツ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">バドミントンのインソールの選び方｜反復ジャンプとフットワークを支える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">前後左右への素早いフットワークと、ジャンプスマッシュの着地を繰り返すバドミントン。足裏・膝・足首への衝撃が大きい競技です。衝撃を吸収し足元を安定させるインソールで、動きの質とケガ予防を高めましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">バドミントンには、反復ジャンプの着地衝撃を吸収するクッションと、素早い切り返しを支える後足部の安定性、アーチサポートを備えたインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バドミントンで足に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">バドミントンは、コートを前後左右に素早く動き、ジャンプスマッシュの着地やランジ姿勢を繰り返す競技です。短時間に多くのストップ＆ゴーとジャンプがあり、足裏・膝・足首・アキレス腱への衝撃と負担が集中します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで着地衝撃を吸収し、かかとを安定させて足のブレを抑えると、素早いフットワークでも踏ん張りやすく、ケガのリスクを減らす補助になります。アーチサポートはランジからの切り返しの力も支えます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バドミントンの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バドミントンにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">着地衝撃の吸収と後足部の安定を両立したインソールがバドミントンに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バドミントンシューズでの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">バドミントンシューズは軽量設計でクッションが薄めなことがあります。元の中敷きと入れ替えると衝撃吸収を補えます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">膝やアキレス腱に不安がある方は、インソールに加えてウォームアップとストレッチを丁寧に行いましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">反復ジャンプとフットワークの衝撃に。クッション性の高いインソールを比較しましょう。</p>
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
