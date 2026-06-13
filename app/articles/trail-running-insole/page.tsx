import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "トレイルランニングに向くインソールの選び方【2026年】不整地と下りの衝撃対策",
  description:
    "岩や木の根の不整地を走るトレイルランニング。足首のぐらつきを抑える後足部の安定性と、下りの衝撃吸収を備えたインソールの選び方、おすすめ3選を解説。捻挫が不安な方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/trail-running-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "トレイルランニングに向くインソールの選び方｜不整地と下りの衝撃に備える",
  description:
    "岩や木の根の不整地を走るトレイルランニング。足首のぐらつきを抑える後足部の安定性と、下りの衝撃吸収を備えたインソールの選び方、おすすめ3選を解説。捻挫が不安な方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ロード用と同じインソールでトレイルも走れますか？", "a": "兼用は可能ですが、トレイルでは後足部の安定性とズレにくさの優先度が上がります。かかとの安定感を重視して選びましょう。"}, {"q": "捻挫ぐせがあります。インソールで予防できますか？", "a": "かかとを安定させるインソールは着地のブレを抑える補助になります。ただし靭帯のゆるみが強い場合は、テーピングやサポーター、足首まわりの筋力トレーニングの併用が大切です。"}, {"q": "下りで膝が痛くなります。インソールは役立ちますか？", "a": "下りの衝撃をクッションで吸収し、着地を安定させることで膝への負担を減らす補助になります。痛みが続く場合は整形外科で原因を確認してください。"}, {"q": "登山・ハイキング用インソールとの違いは？", "a": "歩くハイキングより走るトレイルランのほうが一歩の衝撃が大きく、着地も不安定になります。クッション性と後足部の安定性をより重視しましょう。"}, {"q": "泥や汗で汚れた場合のお手入れは？", "a": "泥を落として陰干しでしっかり乾かしましょう。濡れたまま放置すると劣化や臭いの原因になります。お手入れ方法は製品ごとの公式案内に従ってください。"}];

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
    { "@type": "ListItem", position: 3, name: "トレイルランニング", item: "https://sole-laboratory.com/articles/trail-running-insole/" },
  ],
};

const points = [{"t": "後足部の安定性（ヒールカップ）", "b": "不整地で着地がブレないよう、かかとを包んで安定させる形状を最優先に。足首のぐらつき・捻挫リスクの軽減につながります。"}, {"t": "下りの衝撃を受け止めるクッション", "b": "長い下りは衝撃が大きく、膝にも響きます。かかとを中心に弾力のあるクッションを備えたものを選びましょう。"}, {"t": "急斜面でもズレないフィット", "b": "登り下りで足が靴の中で前後に滑ると、マメや爪のトラブルの原因になります。足裏に沿ってズレにくいものを選びましょう。"}];
const related = [{"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/hiking-insole/", "label": "登山用インソール"}, {"href": "/articles/marathon-insole/", "label": "マラソンのインソール"}, {"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}];

export default function TrailRunningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "トレイルランニング" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">トレイルランニングに向くインソールの選び方｜不整地と下りの衝撃に備える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">舗装路と違い、トレイルランニングは岩・木の根・砂利など一歩ごとに路面が変わる不整地を走ります。足首のぐらつきや捻挫のリスク、長い下りでの衝撃など、ロードとは異なる負担に備えたインソール選びが大切です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">トレイルランニングには、不整地でかかとがブレないヒールカップなど後足部の安定性、下りの衝撃を受け止めるクッション、急斜面でも足が靴の中で滑らないフィット感を備えたインソールが向いています。捻挫の後や強い痛みが続くときは、自己判断せず整形外科で確認しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">トレイルの足の負担がロードと違う理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">不整地では、着地のたびに傾いた路面へ足が対応するため、足首まわりは常に細かいバランス調整を強いられます。疲労が溜まると対応が遅れ、捻挫のリスクが高まります。また長い下りでは一歩ごとの衝撃がロード以上に大きく、かかとや膝への負担が増します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで後足部を安定させると、傾いた路面での足のブレを抑える補助になります。さらに登りでは母趾球での蹴り出しを、下りでは衝撃吸収を、アーチサポートとクッションが場面ごとに支えます。足とシューズの一体感を高めることは、不整地での安心感につながります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">トレイルランニングの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">トレイルランニングにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールです。本格的なレース用というより、日々のトレーニングやハイキング寄りのゆるいトレイル、普段履きでの足のケアに取り入れるのがおすすめです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">トレイルでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">トレイルシューズの中敷きと入れ替えたら、まず舗装路や短い距離のトレイルで慣らしてから山に持ち込みましょう。下りで足が前に滑らないか、つま先が当たらないかを事前に確認しておくと安心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">山では捻挫などのトラブルが行動不能に直結します。足首に不安がある方はテーピングやサポーターとの併用も検討し、捻挫をした後や強い痛みが続く場合は、必ず整形外科で確認してから再開してください。</p>
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
          <p className="text-white/90 text-sm mb-5">不整地を走る足に、安定とクッションを。アーチを支えるインソールを比較しましょう。</p>
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
