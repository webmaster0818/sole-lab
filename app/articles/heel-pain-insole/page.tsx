import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "かかとが痛い時のインソールの選び方【2026年】原因別の対策も解説",
  description:
    "かかとの痛みにインソールは効果がある？足底腱膜炎・踵骨棘など原因別の特徴と、ヒールカップ付きインソールの選び方、おすすめ3選を解説。朝起きた最初の一歩が痛い方必見。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/heel-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "かかとが痛い時のインソールの選び方｜原因別の対策とおすすめ3選",
  description:
    "かかとの痛みにインソールは効果がある？足底腱膜炎・踵骨棘など原因別の特徴と、ヒールカップ付きインソールの選び方、おすすめ3選を解説。朝起きた最初の一歩が痛い方必見。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "かかとの痛みにインソールは本当に効果がありますか？", "a": "インソールは痛みの根本治療ではありませんが、かかとを安定させ衝撃を分散することで日常の負担を軽減する補助になります。足底腱膜炎などが疑われる場合は、医療機関での診断と並行して使うのがおすすめです。"}, {"q": "朝の一歩目が痛いのですが、どんなインソールが良いですか？", "a": "朝の一歩目の痛みは足底腱膜炎のサインのことが多く、ヒールカップとアーチサポートがしっかりしたインソールが向いています。あわせてふくらはぎ・足裏のストレッチも効果的です。"}, {"q": "市販のインソールと整形外科の装具はどう違いますか？", "a": "整形外科で作る足底装具は個人の足型に合わせたオーダーメイドで、症状が重い場合に適しています。市販インソールは手軽に試せる反面、汎用設計です。まず市販で様子を見て、改善しなければ受診を検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "かかとの痛み", item: "https://sole-laboratory.com/articles/heel-pain-insole/" },
  ],
};

const points = [{"t": "かかとを深く包むヒールカップ", "b": "かかとが横ブレせず安定すると、着地の衝撃が一点に集中しにくくなります。かかと部分が深く立ち上がった『ヒールカップ』構造のインソールを選びましょう。"}, {"t": "土踏まずのアーチサポート", "b": "足底腱膜への張力はアーチの崩れで強まります。内側縦アーチをしっかり支える設計なら、かかと付着部への引っ張りをやわらげる助けになります。"}, {"t": "着地衝撃を吸収するクッション", "b": "かかと部に適度なクッションがあると、硬い床やアスファルトでの衝撃が和らぎます。柔らかすぎず、沈み込みすぎない弾力のある素材が理想です。"}];
const related = [{"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール対策"}, {"href": "/articles/foot-arch/", "label": "足のアーチと崩れのチェック"}, {"href": "/articles/standing-work/", "label": "立ち仕事で疲れないインソール"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function HeelPainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "かかとの痛み" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">かかとが痛い時のインソールの選び方｜原因別の対策とおすすめ3選</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">「朝起きて最初の一歩でかかとが痛い」「歩くとかかとにズキッと響く」——その痛みの多くは、かかとへの衝撃や足裏のアーチの崩れが関係しています。インソールはかかとへの負担を分散する補助手段として活用できます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">かかとの痛みには、かかとを深く包む「ヒールカップ」と土踏まずのアーチサポートが付いたインソールが向いています。ただし痛みが強い・長引く場合は足底腱膜炎などの可能性があるため、まず整形外科の受診を優先してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとが痛くなる主な原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">かかとの痛みで多いのは、足裏のアーチを支える「足底腱膜」がかかとの付着部で炎症を起こすケースや、長年の衝撃でかかとの骨に負担が蓄積するケースです。とくに朝の一歩目が痛むのは足底腱膜炎の典型的なサインといわれます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは、かかとを安定させて着地の衝撃を和らげ、崩れたアーチを支えることで足裏全体に荷重を分散させる補助をします。痛みの根本治療ではありませんが、日常生活でのかかとへの負担を減らす目的で使われます。強い痛みや腫れがある場合は自己判断せず医療機関を受診しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとの痛みの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとの痛みにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">かかとの安定とアーチサポートを兼ね備えたインソールを選ぶのがポイントです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">使うときの注意点とセルフケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れても痛みが2週間以上続く、腫れや熱を伴う場合は足底腱膜炎やかかとの疲労骨折などの可能性があるため、整形外科を受診してください。インソールはあくまで日常の負担軽減の補助です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">あわせて、ふくらはぎと足裏のストレッチ、体重管理、クッション性のある靴選びを行うと、かかとへの負担をさらに減らせます。硬い靴で長距離を歩く習慣がある方はとくに見直しを。</p>
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
          <p className="text-white/90 text-sm mb-5">かかとの痛みをやわらげる、アーチサポートの効いたインソールを比較してみましょう。</p>
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
