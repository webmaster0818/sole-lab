import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "下半身痩せにインソールは効く？【2026年】骨盤・歩行フォームから考える",
  description:
    "下半身が痩せにくい方へ。骨盤の傾き・歩行フォームと下半身太りの関係、姿勢を整えるインソールの使い方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/lower-body-diet-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "下半身痩せにインソールは効く？骨盤と歩行フォームから考える方法",
  description:
    "下半身が痩せにくい方へ。骨盤の傾き・歩行フォームと下半身太りの関係、姿勢を整えるインソールの使い方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールで下半身は痩せますか？", "a": "単独で痩せるものではありません。骨盤や歩行フォームを整えて下半身を使いやすくする補助で、食事・運動との組み合わせが前提です。"}, {"q": "下半身だけ痩せにくいのはなぜですか？", "a": "骨盤の傾きや歩き方のクセ、むくみ、冷えなどが複合的に関係します。足元と姿勢を整えることが下半身ケアの土台になります。"}, {"q": "どんな運動と組み合わせると良いですか？", "a": "スクワットやヒップリフトなど下半身・お尻の運動、ウォーキングが効果的です。インソールで歩行フォームを整えると相乗効果が期待できます。"}];

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
    { "@type": "ListItem", position: 3, name: "下半身痩せ", item: "https://sole-laboratory.com/articles/lower-body-diet-insole/" },
  ],
};

const points = [{"t": "骨盤を整える足元の安定", "b": "足裏が安定すると骨盤の傾きが整いやすく、下半身全体の使い方のバランスが改善します。"}, {"t": "歩行フォームを助けるアーチサポート", "b": "蹴り出しやすい歩き方を促し、下半身の筋肉をバランスよく使う助けになります。"}, {"t": "むくみ対策の歩行サポート", "b": "筋ポンプを促して血流を助け、下半身のむくみ軽減をサポートします。"}];
const related = [{"href": "/articles/pelvis-correction/", "label": "骨盤のインソール"}, {"href": "/articles/leg-slimming/", "label": "脚痩せインソールの仕組み"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}, {"href": "/articles/thigh-slimming-insole/", "label": "太もも痩せのインソール"}];

export default function LowerBodyDietPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "下半身痩せ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">下半身痩せにインソールは効く？骨盤と歩行フォームから考える方法</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">上半身は痩せても下半身だけ落ちにくい——下半身太りには、骨盤の傾きや歩行フォームのクセ、むくみが関係していることがあります。足元と姿勢を整えるインソールは、下半身ケアの土台づくりをサポートします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールだけで下半身が痩せるわけではありませんが、足元を安定させて骨盤・歩行フォームを整えると、下半身の筋肉をバランスよく使いやすくなり、むくみの軽減も助けます。食事・運動とあわせて取り組みましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">下半身が痩せにくい原因とインソール</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">下半身太りには、骨盤の傾き（後傾・前傾）や歩行フォームのクセで特定の筋肉ばかり使うこと、長時間の座り・立ちによるむくみ、冷えなどが複合的に関係します。足元が不安定だと姿勢が崩れ、下半身の使い方が偏りがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させると、骨盤の傾きが整いやすく、歩行時にお尻や裏もも、ふくらはぎをバランスよく使えるようになります。むくみの軽減と姿勢改善が、下半身ケアの土台になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">下半身痩せの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">下半身痩せにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">骨盤と歩行フォームを整える、アーチサポートのしっかりしたインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">下半身痩せのための使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、骨盤を立てた姿勢で、かかと着地→蹴り出しの歩き方を意識しましょう。ウォーキングや日常歩行で下半身を使う習慣が大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">下半身痩せには食事管理と下半身・体幹の運動が基本です。インソールは姿勢・歩行を整える補助として活用しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">骨盤と歩行を整えるインソールで、下半身ケアの土台をつくりましょう。</p>
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
