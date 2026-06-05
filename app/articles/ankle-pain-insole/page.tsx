import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "足首が痛い時のインソールの選び方【2026年】捻挫ぐせ・ぐらつき対策も",
  description:
    "足首が痛い・捻挫を繰り返す方へ。足首の不安定さとインソールの関係、後足部を安定させるヒールカップの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/ankle-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "足首が痛い時のインソールの選び方｜ぐらつき・捻挫ぐせの対策",
  description:
    "足首が痛い・捻挫を繰り返す方へ。足首の不安定さとインソールの関係、後足部を安定させるヒールカップの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "捻挫を繰り返します。インソールで予防できますか？", "a": "かかとを安定させるインソールは足首の横ブレを抑え、再発予防の補助になります。ただし靭帯のゆるみが強い場合は、サポーターや専門的なリハビリも併用しましょう。"}, {"q": "足首が痛い時、インソールはどんなものが良いですか？", "a": "深いヒールカップで後足部を固定し、アーチを支える安定性重視のインソールが向いています。柔らかいだけのクッション系は支えになりにくいです。"}, {"q": "インソールとサポーター、どちらが良いですか？", "a": "役割が違い、併用も可能です。インソールは着地の安定、サポーターは足首関節の固定が得意です。痛みが強い時期はサポーター、日常の予防にはインソールが向いています。"}];

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
    { "@type": "ListItem", position: 3, name: "足首の痛み", item: "https://sole-laboratory.com/articles/ankle-pain-insole/" },
  ],
};

const points = [{"t": "深いヒールカップで後足部を固定", "b": "かかとが横にブレないよう、深く包み込むヒールカップ付きを選びましょう。足首の安定の土台になります。"}, {"t": "アーチサポートで着地を安定", "b": "アーチが崩れると足全体が傾きやすくなります。土踏まずを支える設計で着地のブレを抑えます。"}, {"t": "適度な硬さで支える", "b": "柔らかすぎると支えになりません。後足部を安定させられる、しっかりした硬さの素材が向いています。"}];
const related = [{"href": "/articles/heel-pain-insole/", "label": "かかとの痛みのインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}, {"href": "/articles/sneaker-insole/", "label": "スニーカー用インソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function AnklePainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "足首の痛み" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">足首が痛い時のインソールの選び方｜ぐらつき・捻挫ぐせの対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">歩くと足首が痛む、何度も捻挫を繰り返す——足首の不安定さは、足の着地のブレやアーチの崩れと関係することがあります。インソールで後足部を安定させると、足首にかかる横方向の負担をやわらげる補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">足首の痛みやぐらつきには、かかとをしっかり包んで横ブレを抑える『ヒールカップ』とアーチサポートが付いたインソールが向いています。捻挫直後や強い痛みがある場合は、まず整形外科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首が痛む・ぐらつく原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足首の痛みは、捻挫の後遺症による靭帯のゆるみ、足の着地時の過度な内・外への倒れ込み、アーチの崩れによる不安定さなどが関係します。とくに捻挫を繰り返すと足首が『ぐらつきやすい』状態になりがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでかかとを包み込み、足の着地を安定させると、足首にかかる横方向の負担が減り、捻挫の再発予防や歩行時の安心感につながります。あくまで安定の補助であり、靭帯損傷の治療ではありません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首の痛みの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首の痛みにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">かかとを安定させるヒールカップとアーチサポートを備えたインソールが足首の負担軽減に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">捻挫ぐせのケアと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">捻挫直後は安静・冷却・圧迫・挙上（RICE）が基本で、無理に歩かないことが大切です。インソールは回復後の再発予防や日常の安定の補助として使いましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">腫れや内出血が強い、体重をかけられない場合は靭帯損傷や骨折の可能性があるため、整形外科を受診してください。あわせて足首まわりのバランス・筋力トレーニングも再発予防に有効です。</p>
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
          <p className="text-white/90 text-sm mb-5">後足部を安定させるインソールで、足首のぐらつき・負担を軽くしましょう。</p>
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
