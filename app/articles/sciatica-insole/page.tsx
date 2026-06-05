import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "坐骨神経痛にインソールは効く？【2026年】歩行の衝撃と姿勢から考える対策",
  description:
    "お尻から脚にかけて痛む坐骨神経痛にインソールは使える？歩行衝撃・脚長差・骨盤の傾きとの関係と、インソールでできる負担軽減、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sciatica-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "坐骨神経痛にインソールは効く？歩行の衝撃と姿勢から考える対策",
  description:
    "お尻から脚にかけて痛む坐骨神経痛にインソールは使える？歩行衝撃・脚長差・骨盤の傾きとの関係と、インソールでできる負担軽減、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "坐骨神経痛はインソールで治りますか？", "a": "インソールは坐骨神経痛を治すものではありません。歩行衝撃の吸収や足元の安定で日常の負担を減らす補助です。原因の特定と治療は整形外科で受けてください。"}, {"q": "どんなインソールが負担軽減に向いていますか？", "a": "クッション性で衝撃を吸収し、アーチサポートで足元を安定させるタイプが向いています。硬い路面を歩く方や立ち仕事の方は特に効果を感じやすい傾向です。"}, {"q": "脚の長さの左右差が気になります。", "a": "脚長差が大きい場合は自己判断で高さを調整すると逆効果になることがあります。整形外科や専門家に相談したうえで補高を検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "坐骨神経痛", item: "https://sole-laboratory.com/articles/sciatica-insole/" },
  ],
};

const points = [{"t": "歩行衝撃を吸収するクッション", "b": "かかとから腰に伝わる衝撃を和らげるため、クッション性のあるインソールが向いています。硬い路面を歩く機会が多い方はとくに重要です。"}, {"t": "アーチサポートで姿勢を安定", "b": "土踏まずを支えると足元が安定し、骨盤や背骨の余計な傾きを抑える助けになります。立ち姿勢・歩行フォームの安定は腰の負担軽減につながります。"}, {"t": "左右バランスへの配慮", "b": "脚長差や片側の崩れがある場合、左右で支え方が偏らない設計を選ぶことが大切です。気になる場合は専門家に相談を。"}];
const related = [{"href": "/articles/pelvis-correction/", "label": "骨盤と姿勢のインソール"}, {"href": "/articles/posture-correction/", "label": "姿勢改善インソール"}, {"href": "/articles/back-pain/", "label": "腰痛のインソール対策"}, {"href": "/articles/hip-pain-insole/", "label": "股関節痛のインソール"}];

export default function SciaticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "坐骨神経痛" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">坐骨神経痛にインソールは効く？歩行の衝撃と姿勢から考える対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">お尻から太もも・ふくらはぎにかけてしびれや痛みが走る坐骨神経痛。原因はさまざまですが、歩行時の衝撃や左右の脚長差・骨盤の傾きが負担を強めることがあり、インソールで衝撃や左右差をやわらげる補助ができる場合があります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">坐骨神経痛そのものはインソールで治るものではありませんが、歩行衝撃の吸収・アーチサポート・左右バランスの補正により腰やお尻への負担を軽くする補助になります。原因特定のため、まず整形外科の受診を優先してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">坐骨神経痛と歩行・足元の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">坐骨神経痛は、腰椎椎間板ヘルニアや脊柱管狭窄症、梨状筋症候群などで坐骨神経が刺激されて起こる症状の総称です。原因は腰や臀部にあることが多く、足元だけで解決するものではありません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で、歩くたびにかかとから伝わる衝撃や、扁平足・脚長差による骨盤の傾きは、腰やお尻まわりの負担を増やすことがあります。インソールで衝撃を吸収し、左右のバランスを整えると、日常動作での負担を減らす補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">坐骨神経痛の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">坐骨神経痛におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">衝撃吸収とアーチサポートで足元を安定させ、腰・お尻への負担を減らすインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">まず受診を。インソールは補助として</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">坐骨神経痛は原因によって適切な治療が異なります。強い痛みやしびれ、力が入らない・排尿障害などがある場合はすぐに整形外科を受診してください。インソールはあくまで日常の負担軽減の補助です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">あわせて、長時間同じ姿勢を避ける・体幹を支える筋力をつける・体重管理を行うと、腰まわりの負担を総合的に減らせます。</p>
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
          <p className="text-white/90 text-sm mb-5">衝撃吸収とアーチサポートに優れたインソールで、歩行時の負担を軽くしましょう。</p>
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
