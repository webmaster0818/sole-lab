import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "野球のインソールの選び方【2026年】スパイク対応・走塁と守備の安定に",
  description:
    "野球でパフォーマンスを上げたい・足を守りたい方へ。スパイクに合うインソールの選び方、走塁・守備・打撃の踏ん張りを支えるポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/baseball-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "野球のインソールの選び方｜スパイク対応で走塁・守備・打撃の安定に",
  description:
    "野球でパフォーマンスを上げたい・足を守りたい方へ。スパイクに合うインソールの選び方、走塁・守備・打撃の踏ん張りを支えるポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "野球スパイクにインソールは入りますか？", "a": "薄型〜標準のインソールなら入ります。スパイクは内寸が決まっているため、元の中敷きを外して入れ替えるのがおすすめです。"}, {"q": "走塁や打撃に効果はありますか？", "a": "アーチを支えると踏み込みの力が伝わりやすくなり、安定したダッシュやスイングの土台になります。劇的ではありませんが足元の安定感が高まります。"}, {"q": "試合後半の足の疲れも軽減できますか？", "a": "クッションとアーチサポートのないスパイクの弱点を補い、長時間の試合・練習での足裏の疲れを軽減します。"}];

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
    { "@type": "ListItem", position: 3, name: "野球", item: "https://sole-laboratory.com/articles/baseball-insole/" },
  ],
};

const points = [{"t": "スパイクに入る厚み", "b": "野球スパイクの内寸に合う薄型〜標準を選び、元の中敷きと入れ替えてフィットを保ちましょう。"}, {"t": "アーチサポートで踏み込みを支える", "b": "打撃・投球・走塁の踏み込みで力が逃げないよう、アーチをしっかり支える設計が向いています。"}, {"t": "衝撃吸収と後足部の安定", "b": "守備の構えやダッシュ・ストップの衝撃を和らげ、かかとを安定させるものを選びましょう。"}];
const related = [{"href": "/articles/soccer-insole/", "label": "サッカーのインソール"}, {"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}];

export default function BaseballPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "野球" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">スポーツ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">野球のインソールの選び方｜スパイク対応で走塁・守備・打撃の安定に</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダッシュ、ストップ、踏ん張りの多い野球は、足元の安定がプレーの質に直結します。スパイクに合うアーチサポート付きのインソールは、走塁・守備・打撃の踏み込みを支え、足の疲れも軽減します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">野球には、スパイクに入る薄型〜標準で、打撃や投球の踏み込み・走塁のダッシュを支えるアーチサポートと、衝撃を吸収するクッション、後足部の安定性を備えたインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">野球で足元の安定が重要な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">野球は、打撃や投球での踏み込み、守備でのダッシュとストップ、走塁での全力疾走と、足元の安定が求められる動作が多い競技です。スパイクはグリップ重視でクッションやアーチサポートが少なく、足裏が疲れやすい構造です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを支えると、踏み込みやダッシュの力が地面に伝わりやすくなり、安定したプレーにつながります。衝撃吸収性は守備の構えや長時間の試合での足の疲れも軽減します。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">野球の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">野球におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">スパイクに入り、踏み込みを支えるアーチサポート付きインソールが野球に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スパイクでの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スパイクに入れる際は元の中敷きを外し、フィットを確認しましょう。グラウンドで汚れやすいため、使用後は乾かすと長持ちします。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">長時間の試合・練習では足裏が疲れやすいので、クッション性のあるものを選ぶと後半まで安定したプレーがしやすくなります。</p>
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
          <p className="text-white/90 text-sm mb-5">野球の踏ん張りと足の疲れに。アーチを支えるインソールを比較しましょう。</p>
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
