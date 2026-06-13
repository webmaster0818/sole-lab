import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "倉庫作業・ピッキングの足の疲れに！インソールの選び方【2026年】歩き回り対策",
  description:
    "広いコンクリート床の倉庫を一日中歩き回るピッキング・仕分け作業の方へ。長距離歩行と重量物の負担をやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/warehouse-work-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "倉庫作業・ピッキングにおすすめのインソール｜コンクリ床の歩き回り対策",
  description:
    "広いコンクリート床の倉庫を一日中歩き回るピッキング・仕分け作業の方へ。長距離歩行と重量物の負担をやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "工場用のインソール選びと何が違いますか？", "a": "工場のライン作業は『その場に立ち続ける』負担が中心ですが、倉庫のピッキングは『硬い床を長距離歩く』負担が中心です。倉庫作業では歩行の繰り返し衝撃に耐えるクッション性と、へたりにくさをより重視しましょう。"}, {"q": "安全靴にも入りますか？", "a": "薄型を選ぶか、元の中敷きを外して入れれば多くの安全靴で使えます。つま先の保護芯に干渉して窮屈にならないか、装着後に必ず確認してください。"}, {"q": "重い荷物を持つ日に足裏が痛くなります。", "a": "荷物のぶん足裏への荷重が増えるためです。アーチサポートで荷重を分散すると負担軽減の補助になりますが、痛みが続く場合は足底腱膜炎などの可能性もあるため整形外科で相談しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "倉庫作業・ピッキング", item: "https://sole-laboratory.com/articles/warehouse-work-insole/" },
  ],
};

const points = [{"t": "長距離歩行に耐える衝撃吸収", "b": "コンクリート床の歩行は一歩ごとの衝撃が大きく、距離が長いほど蓄積します。かかとから足裏全体で衝撃を受け止められるクッション性を重視しましょう。"}, {"t": "荷重に負けないアーチサポート", "b": "重い荷物を持つと足裏への荷重が増え、アーチが潰れやすくなります。歩行距離が長くても沈み込まない、しっかりした支えのある設計が向いています。"}, {"t": "安全靴に入る厚みと耐久性", "b": "安全靴指定の倉庫では、つま先の保護芯に干渉しない薄型を選ぶか、元の中敷きを外して入れましょう。毎日長時間・長距離で使うため、へたりにくさも大切です。"}];
const related = [{"href": "/articles/factory-work-insole/", "label": "工場の立ち仕事インソール"}, {"href": "/articles/safety-shoes-insole/", "label": "安全靴用インソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function WarehouseWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "倉庫作業・ピッキング" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">倉庫作業・ピッキングにおすすめのインソール｜コンクリ床の歩き回り対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ピッキングや仕分けの仕事は、広い倉庫のコンクリート床を一日中歩き回るのが特徴です。気づけば一日で相当な距離を歩いていた、という方も多いはず。硬い床×長距離歩行×重い荷物という条件が重なる倉庫作業の足には、歩行の衝撃を受け止めるインソールが役立ちます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">倉庫作業・ピッキングには、コンクリート床を歩き続ける衝撃を吸収するクッション性と、歩行距離が長くてもアーチが沈み込まないサポート力を備えたインソールが向いています。安全靴指定の現場では、つま先の芯に干渉しない薄型を選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">倉庫の仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">同じ『現場系の立ち仕事』でも、ラインの前に立ち続ける工場作業と違い、倉庫のピッキングは歩行が主体です。広い倉庫内を棚から棚へ移動し続けるため一日の歩行距離が長く、その一歩一歩がクッション性のないコンクリート床への着地になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに荷物を持ち上げる・運ぶ動作では、体重に荷物の重さが加わった負荷が足裏にかかります。歩行の繰り返し衝撃と重量物の荷重、この2つを受け止めるには、クッション性とアーチサポートを兼ね備えたインソールが合理的です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">倉庫作業・ピッキングの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">倉庫作業・ピッキングにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">コンクリート床の長距離歩行と重量物の荷重を受け止めるインソールが倉庫作業に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴での使い方と疲れをためないコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴に入れる場合は、つま先の保護芯まわりが窮屈にならないか必ず確認し、カットできるタイプでサイズを合わせると失敗しにくいです。フィットしないと靴の中で足が滑り、長距離歩行ではかえって疲れや靴ずれの原因になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">休憩時にふくらはぎと足裏を伸ばすと、歩き回りの疲れがリセットしやすくなります。毎日長距離を歩く使い方ではインソールがへたりやすいため、3〜6ヶ月を目安に交換を。足裏やかかとの痛みが続く場合は我慢せず整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">コンクリ床を歩き続ける足の疲れに。衝撃吸収とアーチサポートのインソールを比較しましょう。</p>
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
