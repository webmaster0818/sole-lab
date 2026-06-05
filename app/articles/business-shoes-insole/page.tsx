import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ビジネスシューズ・革靴のインソールの選び方【2026年】通勤の足の疲れ対策",
  description:
    "通勤や外回りで足が疲れる・蒸れるビジネスマンへ。革靴に合う薄型でアーチを支えるインソールの選び方、消臭・衝撃吸収のポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/business-shoes-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ビジネスシューズ・革靴のインソールの選び方｜通勤の足の疲れ・蒸れ対策",
  description:
    "通勤や外回りで足が疲れる・蒸れるビジネスマンへ。革靴に合う薄型でアーチを支えるインソールの選び方、消臭・衝撃吸収のポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "革靴に入る薄いインソールはありますか？", "a": "はい、薄型でアーチサポートのあるインソールなら革靴にも入ります。元の中敷きを取り外して入れ替えると窮屈になりにくいです。"}, {"q": "革靴の蒸れ・ニオイ対策になりますか？", "a": "消臭・抗菌素材のインソールは蒸れによるニオイを抑える助けになります。帰宅後の陰干しや靴の履き回しと組み合わせると効果的です。"}, {"q": "外回りで歩く距離が長くても効果はありますか？", "a": "むしろ歩行距離が長いほどアーチサポートと衝撃吸収の効果を実感しやすくなります。底の薄い革靴の弱点を補えます。"}];

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
    { "@type": "ListItem", position: 3, name: "ビジネスシューズ・革靴", item: "https://sole-laboratory.com/articles/business-shoes-insole/" },
  ],
};

const points = [{"t": "革靴に響かない薄型", "b": "革靴はフィットが命。厚すぎると窮屈になるため、薄型でアーチサポートのあるものを。元の中敷きと入れ替えるタイプが便利です。"}, {"t": "アーチサポートと衝撃吸収", "b": "底が薄く硬い革靴の弱点を補うため、土踏まずを支えつつ衝撃を吸収する設計を選びましょう。"}, {"t": "消臭・抗菌機能", "b": "通気性の低い革靴は蒸れやすいので、消臭・抗菌素材のインソールでニオイ対策を。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}, {"href": "/articles/sales-staff-insole/", "label": "販売員のインソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function BusinessShoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ビジネスシューズ・革靴" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ビジネスシューズ・革靴のインソールの選び方｜通勤の足の疲れ・蒸れ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">硬い革靴で一日中歩き回る通勤や外回り。夕方には足が疲れ、靴の中は蒸れてニオイも気になる——そんなビジネスマンには、革靴に響かない薄型でアーチを支えるインソールがおすすめです。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ビジネスシューズには、革靴のフィット感を損なわない薄型で、アーチサポート・衝撃吸収・消臭機能を備えたインソールが向いています。通勤の足の疲れと蒸れをまとめてケアできます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">革靴で足が疲れる・蒸れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ビジネスシューズは見た目重視で底が薄く硬い製品が多く、クッション性が不足しがちです。さらに通気性が低いため靴の中が蒸れやすく、長時間の歩行でアーチが沈むと疲れやニオイが強まります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">薄型のインソールでアーチを支え、衝撃を吸収すると、革靴のシルエットを保ちながら足の疲れを軽減できます。消臭・抗菌素材を選べば蒸れによるニオイ対策にもなります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビジネスシューズ・革靴の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビジネスシューズ・革靴におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">革靴に響かない薄型で、アーチサポートと消臭機能を備えたインソールがビジネスシューズに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">蒸れ・ニオイを抑える使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">帰宅後はインソールを取り出して陰干しすると、蒸れがリセットされニオイがこもりにくくなります。複数枚をローテーションするのも効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">革靴を2足以上で履き回すと靴自体が乾く時間ができ、インソールの消臭効果と相まって快適さが保てます。</p>
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
          <p className="text-white/90 text-sm mb-5">革靴の通勤の足の疲れと蒸れに。薄型インソールを比較しましょう。</p>
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
