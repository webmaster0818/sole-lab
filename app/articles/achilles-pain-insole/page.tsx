import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "アキレス腱炎に向くインソールの選び方【2026年】ヒールアップの効果も解説",
  description:
    "アキレス腱の痛み・アキレス腱炎にインソールは使える？かかとを少し上げてアキレス腱の張力を和らげるヒールアップの仕組みと選び方、おすすめ3選を解説。ランナーにも。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/achilles-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "アキレス腱炎に向くインソールの選び方｜ヒールアップで腱の負担を軽く",
  description:
    "アキレス腱の痛み・アキレス腱炎にインソールは使える？かかとを少し上げてアキレス腱の張力を和らげるヒールアップの仕組みと選び方、おすすめ3選を解説。ランナーにも。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "アキレス腱炎にインソールは効果がありますか？", "a": "かかとを上げてアキレス腱の張力を和らげ、衝撃を吸収する補助になります。ただし炎症が強い時期は安静が第一で、インソールは回復をサポートする位置づけです。"}, {"q": "ランニング用と普段用、どちらに入れるべきですか？", "a": "痛みがある間は普段履きにも入れて日常の負担を減らすのがおすすめです。運動再開時はクッション性の高いランニングシューズと組み合わせましょう。"}, {"q": "どのくらいで改善しますか？", "a": "個人差が大きく、軽度でも数週間かかることがあります。改善しない・悪化する場合は自己判断を続けず整形外科を受診してください。"}];

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
    { "@type": "ListItem", position: 3, name: "アキレス腱の痛み", item: "https://sole-laboratory.com/articles/achilles-pain-insole/" },
  ],
};

const points = [{"t": "かかとを上げるヒールアップ構造", "b": "かかとが数mm高くなるとアキレス腱の張力が緩みます。左右同じ高さで持ち上がる設計を選び、片足だけ高くしないようにしましょう。"}, {"t": "かかとの衝撃吸収クッション", "b": "着地の衝撃が腱に響くため、かかと部に弾力のあるクッションがあるものが向いています。硬すぎる素材は避けましょう。"}, {"t": "足全体の安定性", "b": "かかとが内外にブレるとアキレス腱に捻れの負担がかかります。ヒールカップで後足部を安定させる設計が理想です。"}];
const related = [{"href": "/articles/heel-pain-insole/", "label": "かかとの痛みのインソール対策"}, {"href": "/articles/running-insole/", "label": "ランニング用インソールおすすめ"}, {"href": "/articles/shin-splint-insole/", "label": "シンスプリントのインソール"}, {"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール"}];

export default function AchillesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "アキレス腱の痛み" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">アキレス腱炎に向くインソールの選び方｜ヒールアップで腱の負担を軽く</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">歩き始めや運動後にアキレス腱（かかとの上）が痛む——アキレス腱炎は、ランナーや立ち仕事の方に多い症状です。かかとをわずかに上げるインソールは、アキレス腱の張力をやわらげる補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">アキレス腱炎には、かかとを数mm持ち上げてふくらはぎ〜アキレス腱の引っ張りを軽くする『ヒールアップ』機能と、着地衝撃を吸収するクッションが有効です。炎症が強い時期は安静を優先し、医療機関に相談しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アキレス腱が痛む原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アキレス腱炎は、ふくらはぎの筋肉とかかとをつなぐアキレス腱に繰り返し負担がかかって炎症が起きる状態です。ランニングの急な距離・強度アップ、硬い路面、ふくらはぎの柔軟性不足などが引き金になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでかかとをわずかに高くすると、足首が底屈方向になりアキレス腱の引っ張りが軽減されます。さらにかかとのクッションで着地衝撃を吸収すれば、腱への繰り返し負荷を減らす補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アキレス腱の痛みの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">アキレス腱の痛みにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">かかとのクッションとアーチサポートで後足部を安定させるインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">運動時の注意とセルフケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">痛みが強い急性期はまず安静とアイシングを優先し、無理に運動を続けないことが大切です。インソールは負担軽減の補助であり、ふくらはぎのストレッチや段階的な運動再開とあわせて使いましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">症状が長引く・腫れがある場合は、アキレス腱断裂の前兆のこともあるため整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">かかとのクッション性に優れたインソールで、アキレス腱の負担をやわらげましょう。</p>
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
