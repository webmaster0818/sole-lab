import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールはAmazon・楽天どっちで買う？【2026年】比較と注意点",
  description:
    "ダイエットインソールをAmazonと楽天で買うときの違いは？価格・ポイント・正規品保証・返金保証の比較と、安全に買うための注意点を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/ec-buy-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールはAmazon・楽天どっちで買う？比較と注意点",
  description:
    "ダイエットインソールをAmazonと楽天で買うときの違いは？価格・ポイント・正規品保証・返金保証の比較と、安全に買うための注意点を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "Amazonと楽天どっちが安いですか？", "a": "タイミングによります。楽天はポイント還元、Amazonはセールやクーポンでお得になることがあります。ポイントを含めた実質価格で比較しましょう。"}, {"q": "ネットで偽物を避けるには？", "a": "メーカー公式ストアや正規販売店から購入することです。販売元・正規品保証・返金保証を確認し、極端に安い非正規出品は避けましょう。"}, {"q": "公式サイトとAmazon・楽天はどちらが良いですか？", "a": "返金保証や最安値を重視するなら公式サイト、ポイントや配送の手軽さなら大手EC。解約条件や保証内容を比較して選びましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "Amazon・楽天", item: "https://sole-laboratory.com/articles/ec-buy-insole/" },
  ],
};

const points = [{"t": "正規販売店かを確認", "b": "公式ストア・正規販売店かを必ず確認。返金保証や正規品保証の対象になります。"}, {"t": "価格とポイントで選ぶ", "b": "到着の速さ重視ならAmazon、ポイント還元重視なら楽天。セール時期も比較しましょう。"}, {"t": "口コミは件数と内容を見る", "b": "評価は件数の多さと具体的な内容を確認。極端な高評価・低評価だけで判断しないことが大切です。"}];
const related = [{"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}, {"href": "/articles/refund-guarantee-insole/", "label": "返金保証・解約の注意"}, {"href": "/articles/fake-genuine-insole/", "label": "偽物・正規品の見分け方"}, {"href": "/articles/pitsole-coupon/", "label": "ピットソールのクーポン"}];

export default function EcBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "Amazon・楽天" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールはAmazon・楽天どっちで買う？比較と注意点</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールをネットで買うなら、Amazonと楽天が定番。それぞれ価格やポイント、保証の面で違いがあります。安心して正規品を手に入れるための比較と注意点を整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">Amazonは到着の速さ、楽天はポイント還元が魅力です。どちらで買う場合も、『正規販売店（公式ストア）か』『返金保証の対象か』を必ず確認しましょう。非正規の格安出品は偽物・保証対象外のリスクがあります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">Amazonと楽天の違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">Amazonは配送の速さと手軽さが強みで、プライム会員なら最短翌日に届きます。楽天はポイント還元率が高く、セールやキャンペーンを活用するとお得に買えるのが魅力です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">どちらにも公式ストアと第三者出品が混在します。ダイエットインソールは正規品保証や返金保証を受けるために、メーカー公式ストアや正規販売店からの購入が安心です。極端に安い非正規出品は、偽物や保証対象外のリスクがあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">Amazon・楽天の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">Amazon・楽天におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">正規販売店から、返金保証の有無を確認して購入するのが安心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全に買うための注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">公式サイトでの定期購入は最安値や返金保証が手厚いことが多い一方、解約条件の確認が必要です。Amazon・楽天は単品購入しやすく、ポイントや配送のメリットがあります。目的に合わせて選びましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">『正規品保証』『返金保証』『販売元』を購入前に必ずチェックし、フリマアプリの中古や非正規格安品は避けるのが安全です。</p>
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
          <p className="text-white/90 text-sm mb-5">正規販売店で、保証を確認しながらダイエットインソールを選びましょう。</p>
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
