import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "体幹を鍛えるインソールとは？【2026年】バランス・姿勢への効果を解説",
  description:
    "体幹を意識したい方へ。不安定な足元と体幹の関係、バランス・姿勢を整えるインソールの考え方と使い方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/core-training-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "体幹を意識するインソールとは？バランス・姿勢への効果",
  description:
    "体幹を意識したい方へ。不安定な足元と体幹の関係、バランス・姿勢を整えるインソールの考え方と使い方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールで体幹は鍛えられますか？", "a": "単体で鍛えるものではありませんが、足元を安定させて正しい姿勢を促し、日常で体幹を使いやすくする補助になります。トレーニングとの併用が効果的です。"}, {"q": "バランス感覚は良くなりますか？", "a": "足元が安定すると姿勢のブレが減り、バランスを保ちやすくなります。高齢の方の転倒予防の観点でも足元の安定は重要です。"}, {"q": "体幹トレーニングと併用すべきですか？", "a": "はい。インソールで日常の姿勢を整えつつ、プランクなどの体幹トレーニングを行うと相乗効果が期待できます。"}];

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
    { "@type": "ListItem", position: 3, name: "体幹", item: "https://sole-laboratory.com/articles/core-training-insole/" },
  ],
};

const points = [{"t": "足元を安定させるアーチサポート", "b": "土踏まずを支えて姿勢の土台を安定させ、体幹を使いやすくします。"}, {"t": "姿勢を意識しやすい設計", "b": "足元が整うと骨盤・背骨が立ちやすく、正しい姿勢を保つ意識がしやすくなります。"}, {"t": "日常で続けられる", "b": "体幹の意識づけは毎日の積み重ね。普段の靴に入り、長時間快適なものを選びましょう。"}];
const related = [{"href": "/articles/posture-correction/", "label": "姿勢改善インソール"}, {"href": "/articles/metabolism-insole/", "label": "基礎代謝とインソール"}, {"href": "/articles/pelvis-correction/", "label": "骨盤のインソール"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}];

export default function CoreTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "体幹" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">体幹を意識するインソールとは？バランス・姿勢への効果</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">体幹を鍛えたいけれど運動は続かない——そんな方に、日常の立つ・歩くの中で体幹を意識しやすくするインソールという選択肢があります。足元を整えることは、姿勢と体幹の使い方に直結します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソール単体で体幹が劇的に鍛えられるわけではありませんが、足元を安定させて正しい姿勢を促すと、立つ・歩く動作で体幹の筋肉を意識・使用しやすくなります。体幹トレーニングと組み合わせるのが効果的です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足元の安定と体幹の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">体幹は、立つ・歩く・姿勢を保つといった日常動作の土台になる筋肉群です。足元（足裏のアーチ）が不安定だと姿勢が崩れ、体幹をうまく使えずに一部の筋肉に頼った姿勢になりがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させると、骨盤や背骨が整いやすく、立つ・歩く動作で体幹を意識・使用しやすくなります。土台が安定することは、体幹を働かせる前提条件といえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">体幹の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">体幹におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足元を安定させて姿勢と体幹を意識しやすくするアーチサポートのインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">体幹を意識する使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、頭・骨盤・かかとが一直線になる姿勢を意識して立つ・歩くようにしましょう。お腹を軽く引き締める意識を持つと体幹が働きやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">本格的に体幹を鍛えるにはプランクなどの体幹トレーニングが効果的です。インソールは日常での意識づけの補助として活用しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">足元と姿勢を整えるインソールで、日常から体幹を意識しましょう。</p>
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
