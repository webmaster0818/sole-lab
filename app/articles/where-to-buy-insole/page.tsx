import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールは市販でどこで売ってる？【2026年】販売店まとめ",
  description:
    "ダイエットインソールはどこで買える？ドラッグストア・ドンキ・ニトリ・無印・ワークマン・東急ハンズなど市販の販売店と、通販との違いを比較して解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/where-to-buy-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールは市販でどこで売ってる？販売店まとめと選び方",
  description:
    "ダイエットインソールはどこで買える？ドラッグストア・ドンキ・ニトリ・無印・ワークマン・東急ハンズなど市販の販売店と、通販との違いを比較して解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ダイエットインソールはドラッグストアで売っていますか？", "a": "汎用的なアーチサポート・クッションのインソールは購入できます。ただし特許技術採用の本格的なダイエットインソールは公式通販やAmazon・楽天が中心です。"}, {"q": "市販品と通販品はどちらが良いですか？", "a": "疲れ軽減目的なら市販の汎用品でも十分です。本格的なダイエット目的や返金保証を求めるなら、専用設計の製品を正規通販で買うのがおすすめです。"}, {"q": "実店舗で本格的なダイエットインソールは買えますか？", "a": "取り扱いは限られます。ピットソールなどは公式通販やAmazon・楽天が中心で、正規品保証や返金保証を受けやすいのもネットのメリットです。"}];

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
    { "@type": "ListItem", position: 3, name: "市販はどこで売ってる", item: "https://sole-laboratory.com/articles/where-to-buy-insole/" },
  ],
};

const points = [{"t": "すぐ欲しいなら実店舗", "b": "ドラッグストア・ドンキ・ニトリ・ハンズなどで汎用インソールが手に入ります。実物を確認して選べます。"}, {"t": "本格派は公式・正規通販", "b": "特許技術採用のダイエットインソールは公式通販やAmazon・楽天が中心。返金保証や正規品保証を確認しましょう。"}, {"t": "目的で選ぶ", "b": "疲れ軽減なら市販の汎用品でも十分。本格的なダイエット目的なら専用設計の製品が向いています。"}];
const related = [{"href": "/articles/workman-insole/", "label": "ワークマンのインソール"}, {"href": "/articles/drugstore-insole/", "label": "ドラッグストアのインソール"}, {"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での購入"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function WhereToBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "市販はどこで売ってる" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールは市販でどこで売ってる？販売店まとめと選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールを今すぐ買いたいけれど、どこで売っているの？——本記事では、ドラッグストアやドンキ、ニトリ、無印などの市販店と、ネット通販それぞれの取り扱いと違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">一般的なインソールはドラッグストア・ドンキ・ニトリ・東急ハンズなどで購入できますが、特許技術を採用した本格的なダイエットインソール（ピットソール等）は公式通販やAmazon・楽天での取り扱いが中心です。目的に合わせて選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販店とネット通販の違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ドラッグストアやホームセンター、ドンキ、ニトリ、無印良品、東急ハンズなどの実店舗では、汎用的なクッションインソールやアーチサポートのインソールが手に入ります。すぐ買える・実物を確認できるのがメリットです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、特許技術や独自設計を採用した本格的なダイエットインソール（ピットソールなど）は、実店舗での取り扱いが限られ、公式通販やAmazon・楽天が中心です。返金保証や正規品保証を受けたい場合は、公式・正規販売店での購入が安心です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販はどこで売ってるの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">市販はどこで売ってるにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">本格的なダイエットインソールは公式・正規通販での購入が安心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">購入時に確認したいこと</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">市販品はサイズや厚みを実物で確認できる反面、種類が限られます。ネット通販は種類が豊富で口コミも参考にできますが、正規品か・返金保証があるかを必ず確認しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フリマアプリや非正規の格安品は、偽物や保証対象外のリスクがあります。本格的な製品は公式・正規販売店での購入をおすすめします。</p>
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
          <p className="text-white/90 text-sm mb-5">目的に合うダイエットインソールを、正規の販売店で比較して選びましょう。</p>
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
