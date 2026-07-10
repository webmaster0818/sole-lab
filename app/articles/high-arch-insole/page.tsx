import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ハイアーチ（凹足）に向くインソールの選び方【2026年】衝撃集中を防ぐコツ",
  description:
    "土踏まずが高いハイアーチ・凹足の方へ。扁平足とは逆に衝撃が一点に集中しやすい足の特徴と、クッション重視のインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/high-arch-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ハイアーチ（凹足）に向くインソールの選び方｜衝撃集中をやわらげる",
  description:
    "土踏まずが高いハイアーチ・凹足の方へ。扁平足とは逆に衝撃が一点に集中しやすい足の特徴と、クッション重視のインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-10",
};

const faqs = [{"q": "ハイアーチに扁平足用のインソールは使えますか？", "a": "扁平足用は硬めでアーチを押し上げる設計が多く、ハイアーチには合わないことがあります。ハイアーチには高いアーチを埋めて衝撃を吸収するクッション性重視のタイプが向いています。"}, {"q": "自分がハイアーチか確認する方法は？", "a": "濡れた足で紙に足跡をつけたとき、土踏まず部分がほとんど写らず外側が細くつながる場合はハイアーチの傾向です。気になる場合は整形外科で確認しましょう。"}, {"q": "ハイアーチだと何が起こりやすいですか？", "a": "かかとと指の付け根に体重が集中し、タコ・痛み・疲れやすさ・足首のぐらつきが起こりやすくなります。衝撃を分散するインソールで負担を軽くできます。"}, {"q": "ハイアーチと開張足は同時に起こりますか？", "a": "起こり得ます。縦アーチが高いハイアーチの方でも、前足部に荷重が集中し続けることで横アーチが低下し、開張足の傾向を併せ持つことがあります。指の付け根のタコはどちらにも共通するサインのため、見た目だけでは区別しにくい場合は整形外科で確認してください。"}, {"q": "ハイアーチはインソールで治りますか？", "a": "インソールは骨格の形そのものを変える治療器具ではありません。あくまで接地面を増やして衝撃や荷重の集中をやわらげる補助です。痛み・しびれ・タコの悪化が続く場合は、整形外科で原因の確認や装具の相談をすることをおすすめします。"}];

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
    { "@type": "ListItem", position: 3, name: "ハイアーチ（凹足）", item: "https://sole-laboratory.com/articles/high-arch-insole/" },
  ],
};

const points = [{"t": "高いアーチを埋めるサポート", "b": "アーチの下の隙間を支えて接地面積を増やせる、アーチ部分がしっかり立ち上がった設計を選びましょう。荷重を足裏全体に分散させます。"}, {"t": "衝撃吸収クッションを重視", "b": "かかと・前足部に衝撃が集中するため、クッション性が高い素材が向いています。扁平足向けの硬めタイプより、弾力のあるものが合います。"}, {"t": "足首を安定させる設計", "b": "ハイアーチは足首がぐらつきやすい傾向があります。ヒールカップで後足部を安定させるものが安心です。"}];
const related = [{"href": "/articles/splay-foot-insole/", "label": "開張足のインソール"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}, {"href": "/articles/corn-callus-insole/", "label": "タコ・魚の目のインソール"}, {"href": "/articles/heel-pain-insole/", "label": "かかとが痛い時のインソール"}, {"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}];

export default function HighArchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ハイアーチ（凹足）" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ハイアーチ（凹足）に向くインソールの選び方｜衝撃集中をやわらげる</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">土踏まずのアーチが高すぎる『ハイアーチ（凹足）』は、扁平足とは逆に、かかとと指の付け根に体重が集中しやすい足です。接地面積が少ないぶん衝撃を受けやすく、クッション性のあるインソールが負担軽減に役立ちます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ハイアーチには、高いアーチに沿って隙間を埋め、かかとと前足部に集中する衝撃を分散・吸収するクッション性の高いインソールが向いています。タコ・痛みが続く場合は整形外科に相談しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ハイアーチ（凹足）の特徴と負担のかかり方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ハイアーチは土踏まずが通常より高く持ち上がった足の形で、足裏が地面に接する面積が少なくなります。その結果、かかとと指の付け根（母趾球・小趾球）の2点に体重が集中し、衝撃を吸収しにくい状態になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">接地が少ないため、タコや痛み、疲れやすさ、足首の不安定さが起こりやすいのが特徴です。インソールで高いアーチの隙間を支えて接地面を増やし、集中する衝撃を分散・吸収すると負担をやわらげる補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ハイアーチ（凹足）の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ハイアーチ（凹足）におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">高いアーチを支えつつ衝撃を吸収する、クッション性の高いインソールがハイアーチに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴選びとケアのポイント</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ハイアーチの方は、クッション性のある靴と組み合わせると効果的です。底が薄く硬い靴は衝撃が直に伝わるため避けましょう。タコや痛みがある部分は無理に削らず、圧の分散を優先します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">痛みやしびれが続く、変形が進む場合は、足の形に合った装具が必要なこともあるため整形外科を受診してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ハイアーチ（凹足）のセルフチェック（一般的な目安）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">次のような項目に当てはまるほど、土踏まずのアーチが高い（ハイアーチの傾向がある）可能性があります。あくまで一般的な目安であり、自己診断はできません。確定的な判断や治療の要否は整形外科で確認してください。</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li>濡れた足で床や紙に立ったとき、足跡の土踏まず部分がほとんど写らず、かかとと前足部が細い線でつながる、または途切れて見える</li>
            <li>立った状態で土踏まずの下に指がすっと入るほど大きな隙間がある</li>
            <li>甲が高く、靴ひもを緩めないと履き口がきつい・甲が当たって痛い</li>
            <li>かかとと指の付け根にタコや角質ができやすく、土踏まず部分にはできない</li>
            <li>靴底のかかと外側と前足部ばかりが極端にすり減る</li>
            <li>捻挫を繰り返す・足首がぐらつきやすいと感じる</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed"><span className="font-bold text-amber-700">受診の目安：</span>ハイアーチには生まれつきの足の形によるもののほか、まれに神経や筋肉の病気が背景にある場合もあるとされています。足の変形が進んでいる、痛みやしびれが強い・続く、捻挫を何度も繰り返すといった場合は、インソールでの対策より先に整形外科を受診してください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">クッション重視の選び方と開張足系との違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ハイアーチのインソール選びで軸になるのは「矯正」ではなく「クッションと接地面の確保」です。扁平足向けのように硬い素材でアーチを押し上げる設計は、高いアーチをさらに突き上げて痛みの原因になることがあります。弾力のある素材で高いアーチの下の隙間をやさしく埋め、かかとと前足部に集中する衝撃を吸収・分散するタイプを優先しましょう。ヒールカップで後足部を包んで安定させる設計なら、足首のぐらつき対策にもなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">混同されやすいのが<Link href="/articles/splay-foot-insole/" className="text-[#e8627c] underline">開張足</Link>です。ハイアーチは「縦アーチが高すぎる」状態、開張足は「横アーチ（指の付け根の横方向のアーチ）が低下して前足部が広がる」状態で、方向の異なる崩れ方です。開張足系には横アーチを支えるパッド設計が向くのに対し、ハイアーチにはクッション重視の設計が向くという違いがあります。一方で、指の付け根のタコ・前足部の痛みという共通のサインが出るうえ、ハイアーチの方が前足部への荷重集中から横アーチの低下を併発することもあります。どちらの傾向か判断がつかない場合は自己判断で決めつけず、整形外科で足の状態を確認してもらうのが確実です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">市販インソールをどれから試すか迷う場合は、<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">6つの質問でわかるタイプ診断</Link>も参考にしてください。いずれも足への負担をやわらげる補助であり、効果の感じ方には個人差があります。</p>
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
          <p className="text-white/90 text-sm mb-5">衝撃を分散するクッション性の高いインソールで、ハイアーチの負担を軽くしましょう。</p>
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
