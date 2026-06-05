import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "モートン病に向くインソールの選び方【2026年】中足骨パッドの位置も解説",
  description:
    "モートン病の足指の付け根のしびれ・痛みにインソールは使える？横アーチを支える中足骨パッドの役割と選び方、おすすめ3選を解説。ハイヒールや幅の狭い靴が多い方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/morton-disease-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "モートン病に向くインソールの選び方｜横アーチを支えてしびれを和らげる",
  description:
    "モートン病の足指の付け根のしびれ・痛みにインソールは使える？横アーチを支える中足骨パッドの役割と選び方、おすすめ3選を解説。ハイヒールや幅の狭い靴が多い方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "モートン病にインソールは効きますか？", "a": "横アーチを支える中足骨パッド付きインソールは、神経が圧迫される部分の負担を減らす補助になります。ただし神経症状のため、改善しない場合は整形外科での診断・治療が必要です。"}, {"q": "中足骨パッドはどこに来るのが正しいですか？", "a": "痛む部分の真下ではなく、その少し手前（かかと寄り）に来るのが基本です。位置がずれると逆に圧迫が強まることがあるため、調整できるタイプが安心です。"}, {"q": "どんな靴と組み合わせるべきですか？", "a": "つま先に余裕のある幅広で、ヒールの低い靴がおすすめです。先の細い靴やハイヒールは横アーチに負担をかけるため避けましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "モートン病", item: "https://sole-laboratory.com/articles/morton-disease-insole/" },
  ],
};

const points = [{"t": "中足骨パッドの有無と位置", "b": "モートン病対策の要は、指の付け根の『手前』を持ち上げて横アーチを作る中足骨パッドです。パッドが痛む部分の真下ではなく少し後ろに来る位置のものを選びましょう。"}, {"t": "前足部のゆとりと薄さ", "b": "つま先側がきつい靴では効果が半減します。前足部に余裕ができる薄型設計で、靴の中で足指が動かせるものが理想です。"}, {"t": "適度な硬さでアーチを保持", "b": "柔らかすぎるとアーチが潰れて支えになりません。横アーチをしっかり保持できる適度な硬さの素材を選びましょう。"}];
const related = [{"href": "/articles/splay-foot-insole/", "label": "開張足のインソール対策"}, {"href": "/articles/hallux-valgus-prevention/", "label": "外反母趾の予防インソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック方法"}, {"href": "/articles/pumps-insole/", "label": "パンプスで疲れないインソール"}];

export default function MortonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "モートン病" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">モートン病に向くインソールの選び方｜横アーチを支えてしびれを和らげる</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の指の付け根（とくに3・4趾の間）がしびれる・焼けるように痛む——モートン病はこうした症状が特徴です。原因の一つに横アーチの低下があり、横アーチを支えるインソールが負担軽減に役立つことがあります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">モートン病には、足指の付け根の手前を持ち上げる『中足骨パッド（メタタルザルパッド）』付きのインソールが向いています。幅の狭い靴やヒールを避け、改善しない場合は整形外科での診断を受けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">モートン病の原因と横アーチの関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">モートン病は、足指の付け根を通る神経が圧迫されて起こる神経症状で、3趾と4趾の間に多く見られます。横アーチ（足の指の付け根を結ぶ弓状の構造）が低下して中足骨の間が狭まると、神経が挟み込まれやすくなると考えられています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ハイヒールや先の細い靴、長時間の立ち仕事は横アーチに負担をかけます。インソールで横アーチを下から支え、神経が圧迫される部分の手前で荷重を受け止めることで、しびれや痛みをやわらげる補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">モートン病の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">モートン病におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">横アーチを支え、前足部にゆとりが出る薄型インソールがモートン病には向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴の見直しと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールと同時に、先の細い靴やヒールの高い靴を避け、足指が動かせる幅広・低めの靴に替えると効果的です。痛みが強い、しびれが広がる場合は神経の問題のため、整形外科で診断を受けてください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは症状緩和の補助であり、進行した場合は注射や手術が必要になることもあります。早めの受診が改善への近道です。</p>
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
          <p className="text-white/90 text-sm mb-5">横アーチを支える設計のインソールで、足指の付け根の負担を軽くしましょう。</p>
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
