import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "シンスプリントに向くインソールの選び方【2026年】過回内を抑える設計とは",
  description:
    "すねの内側が痛むシンスプリントにインソールは有効？オーバープロネーション（過回内）を抑えるアーチサポートの役割と選び方、おすすめ3選を解説。ランナー・部活生に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/shin-splint-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "シンスプリントに向くインソールの選び方｜過回内を抑えてすねの痛みを軽減",
  description:
    "すねの内側が痛むシンスプリントにインソールは有効？オーバープロネーション（過回内）を抑えるアーチサポートの役割と選び方、おすすめ3選を解説。ランナー・部活生に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "シンスプリントにインソールは効きますか？", "a": "足の過回内を抑えてすね内側の牽引ストレスを減らす補助になります。ただし痛みが強い時は運動量の調整が最優先で、インソールは再発予防・負担軽減の位置づけです。"}, {"q": "扁平足だとシンスプリントになりやすいですか？", "a": "扁平足や過回内があると足が内側に倒れ込みやすく、すね内側の負担が増えるためなりやすい傾向があります。アーチを支えるインソールが対策の一つになります。"}, {"q": "疲労骨折との見分け方は？", "a": "シンスプリントは広い範囲が痛むのに対し、疲労骨折は一点を押すと鋭く痛むのが特徴です。安静時も痛む・夜間痛がある場合は整形外科で画像検査を受けましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "シンスプリント", item: "https://sole-laboratory.com/articles/shin-splint-insole/" },
  ],
};

const points = [{"t": "内側縦アーチの強いサポート", "b": "過回内を抑える鍵は土踏まずをしっかり支えることです。内側縦アーチのサポートが高く、潰れにくい設計を選びましょう。"}, {"t": "後足部の安定（ヒールカップ）", "b": "かかとが内側に傾くのを防ぐため、かかとを包んで安定させるヒールカップ付きが効果的です。"}, {"t": "衝撃吸収と適度な硬さ", "b": "クッションで着地衝撃を和らげつつ、アーチが潰れない硬さを両立した素材が理想。柔らかすぎる製品は支えになりません。"}];
const related = [{"href": "/articles/flat-feet/", "label": "扁平足のインソール対策"}, {"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/achilles-pain-insole/", "label": "アキレス腱炎のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}];

export default function ShinSplintPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "シンスプリント" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">シンスプリントに向くインソールの選び方｜過回内を抑えてすねの痛みを軽減</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">走ったり跳んだりするとすねの内側が痛む——シンスプリントは、ランナーや部活動の学生に多い症状です。足が内側に倒れ込む『過回内』が一因とされ、アーチを支えるインソールが負担軽減に役立つことがあります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">シンスプリントには、内側縦アーチをしっかり支えて足の過回内（内側への倒れ込み）を抑えるインソールが向いています。練習量の調整や路面の見直しとあわせ、痛みが続く場合は整形外科に相談しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シンスプリントの原因と過回内の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">シンスプリント（脛骨過労性骨膜炎）は、すねの内側の骨膜や筋肉の付着部に繰り返し負担がかかって炎症が起こる状態です。急な運動量の増加、硬い路面、扁平足や過回内（足が内側に倒れ込む動き）が関係するとされます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足が過度に内側へ倒れ込むと、すねの内側の筋肉が引っ張られ続けます。インソールでアーチを支えて過回内を抑えると、この繰り返しの牽引ストレスを減らす補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シンスプリントの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シンスプリントにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチサポートが高く、過回内を抑えられる安定性の高いインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">練習環境の見直しと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールと同時に、練習量を急に増やさない・硬い路面を避ける・ふくらはぎや足首のストレッチを行うことが再発予防に重要です。クッション性のあるシューズへの買い替えも有効です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">すねを押すと強く痛む、安静でも痛む場合は疲労骨折の可能性があるため、運動を中止して整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">過回内を抑えるアーチサポートの強いインソールで、すねの負担を軽くしましょう。</p>
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
