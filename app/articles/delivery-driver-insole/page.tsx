import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "配達員・ドライバーの足の疲れに！インソールの選び方【2026年】乗降と階段対策",
  description:
    "車の乗り降りの繰り返し、荷物を持っての階段、運転中のペダル操作。配達員・ドライバー特有の足の負担をやわらげるインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/delivery-driver-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "配達員・ドライバーにおすすめのインソール｜乗り降りと階段の負担対策",
  description:
    "車の乗り降りの繰り返し、荷物を持っての階段、運転中のペダル操作。配達員・ドライバー特有の足の負担をやわらげるインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "運転中にインソールが邪魔になりませんか？", "a": "薄型〜標準の厚みでフィット感のあるものなら、ペダル操作への影響は感じにくいです。厚すぎるものや靴の中でズレるものは避け、必要ならカットしてサイズを合わせましょう。"}, {"q": "座っている時間が長くても意味はありますか？", "a": "あります。ドライバーの足の負担は乗り降りや階段など歩行時の衝撃に集中するため、その瞬間の衝撃を吸収できることが重要です。運転中のむくみには休憩時の足首運動を併用しましょう。"}, {"q": "宅配で階段の上り下りが多く膝が心配です。", "a": "アーチサポートと衝撃吸収のあるインソールは、着地時の負担を分散する補助になります。ただし膝の痛みがすでにある場合は、悪化する前に整形外科で診てもらうことをおすすめします。"}];

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
    { "@type": "ListItem", position: 3, name: "配達員・ドライバー", item: "https://sole-laboratory.com/articles/delivery-driver-insole/" },
  ],
};

const points = [{"t": "かかとの衝撃吸収を重視", "b": "車から降りる動作はかかとから着地しがちで、回数が多いほど負担が蓄積します。かかと部分のクッション性が高いものを選びましょう。アスファルトや階段での歩行衝撃の軽減にもつながります。"}, {"t": "荷物を持ったときの踏ん張りを支えるアーチサポート", "b": "荷物のぶん足裏への荷重は増えます。土踏まずをしっかり支える設計なら、増えた荷重を足裏全体に分散させ、疲れの蓄積を抑える助けになります。"}, {"t": "運転を邪魔しないフィット感", "b": "厚すぎるインソールはペダルの感覚に影響したり、靴の中で足が動く原因になります。靴にフィットする薄型〜標準の厚みで、ズレにくいものが向いています。"}];
const related = [{"href": "/articles/warehouse-work-insole/", "label": "倉庫作業のインソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}, {"href": "/articles/back-pain/", "label": "腰痛のインソール対策"}];

export default function DeliveryDriverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "配達員・ドライバー" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">配達員・ドライバーにおすすめのインソール｜乗り降りと階段の負担対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">配達の仕事は『座りっぱなし』でも『立ちっぱなし』でもなく、運転と歩行を細かく繰り返すのが特徴です。一日に何十回もの乗り降り、荷物を持っての階段の上り下り、アスファルトでの小走り——足への負担は断続的に、しかし確実に積み重なります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">配達員・ドライバーには、乗り降りや階段での着地衝撃を吸収するクッション性と、荷物を持ったときの踏ん張りを支えるアーチサポートを両立したインソールが向いています。運転中のペダル操作を邪魔しない、靴にフィットする薄型〜標準の厚みを選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">配達・運転の仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ドライバーの足の負担は独特です。車から降りるたびにかかとへ着地の衝撃がかかり、宅配なら一日に数十回から百回以上の乗降を繰り返します。さらに荷物を抱えての階段や段差では、自分の体重に荷物の重さが加わった負荷が足裏と膝に集中します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、運転中は同じ姿勢で足首から先だけを動かし続けるため、血流が滞ってむくみやだるさが出やすくなります。歩く・座るが細切れに切り替わるこの働き方には、着地の衝撃を受け止めつつ、運転の邪魔にならないインソールが合います。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">配達員・ドライバーの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">配達員・ドライバーにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">乗り降りと階段の衝撃を受け止め、運転の邪魔をしないインソールがドライバーに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">運転と歩行を繰り返す働き方でのケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">長距離運転が続く日は、休憩のたびに車から出て足首を回したり、かかとの上げ下げをすると血流が促され、むくみ・だるさの予防になります。インソールはあくまで衝撃と荷重を分散する補助なので、休憩時のリセットと組み合わせるのが効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">膝や足裏、かかとの痛みが続く場合は、乗降の衝撃の積み重ねによる炎症などの可能性もあります。自己判断で我慢せず、整形外科で相談してください。安全靴指定の現場では、つま先の芯に干渉しない厚みかどうかも確認しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">乗り降り・階段・運転を繰り返す足に。衝撃吸収インソールを比較しましょう。</p>
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
