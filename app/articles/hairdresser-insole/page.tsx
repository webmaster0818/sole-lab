import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "美容師の足の疲れに！インソールの選び方【2026年】一日立ちっぱなし対策",
  description:
    "一日中立ちっぱなしの美容師・理容師さんへ。硬い床での足の疲れ・むくみをやわらげるインソールの選び方、見た目に響かない薄型、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/hairdresser-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "美容師の足の疲れにおすすめのインソール｜立ちっぱなしの負担対策",
  description:
    "一日中立ちっぱなしの美容師・理容師さんへ。硬い床での足の疲れ・むくみをやわらげるインソールの選び方、見た目に響かない薄型、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "美容師の足の疲れにインソールは効きますか？", "a": "硬い床の衝撃を吸収しアーチを支えることで、立ちっぱなしの足の疲れ・むくみを軽くする補助になります。合間のストレッチと併用するとより効果的です。"}, {"q": "おしゃれな靴にも入りますか？", "a": "薄型のインソールを選べば、スリムな靴にも収まります。厚みが気になる場合は元の中敷きを外して入れ替えると窮屈になりにくいです。"}, {"q": "どのくらいで疲れの軽減を感じますか？", "a": "個人差はありますが、多くの方が1〜2週間ほどで足の疲れにくさを実感します。まずは2週間継続して試してみましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "美容師", item: "https://sole-laboratory.com/articles/hairdresser-insole/" },
  ],
};

const points = [{"t": "硬い床の衝撃を吸収するクッション", "b": "サロンの硬い床対策には、衝撃吸収性の高いクッションが効果的です。立ちっぱなしの足裏をいたわります。"}, {"t": "アーチサポートで沈み込みを防ぐ", "b": "長時間の立ちでアーチが潰れないよう、土踏まずをしっかり支える設計を選びましょう。"}, {"t": "おしゃれな靴に響かない薄型", "b": "美容師は靴の見た目も大切。スリムな靴にも入る薄型で、アーチサポートのあるものが理想です。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/sales-staff-insole/", "label": "販売員のインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/sneaker-insole/", "label": "スニーカー用インソール"}];

export default function HairdresserPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "美容師" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">美容師の足の疲れにおすすめのインソール｜立ちっぱなしの負担対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">カット・カラー・シャンプーと、一日中立ちっぱなしの美容師さん。サロンの硬い床は足への衝撃が大きく、夕方には足がパンパン…という方も多いはず。アーチを支えるインソールで、立ち仕事の疲れをやわらげましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">美容師さんには、硬い床の衝撃を吸収しつつ土踏まずを支えるインソールが向いています。おしゃれな靴にも響きにくい薄型を選べば、見た目を保ちながら足の疲れを軽減できます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">美容師の足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">美容師の仕事は、ほぼ一日中立ちっぱなしで、施術中はその場で姿勢を保ち続けます。サロンの床はタイルやコンクリートなど硬いことが多く、足裏への衝撃が蓄積しやすい環境です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立ち続けると足裏のアーチが疲労で沈み込み、衝撃を吸収できずに疲れ・むくみが強まります。インソールでアーチを支え、硬い床からの衝撃をクッションで吸収すると、足の疲れを軽くする助けになります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">美容師の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">美容師におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">硬い床の衝撃を吸収し、アーチを支える薄型インソールが美容師さんに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">立ち仕事の疲れをためないコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">施術の合間に足踏みやかかと上げをすると、ふくらはぎの筋ポンプが働いてむくみがたまりにくくなります。インソールと組み合わせると効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">毎日長時間使うとインソールはへたりやすいので、3〜6ヶ月を目安に交換すると効果を保てます。</p>
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
          <p className="text-white/90 text-sm mb-5">硬い床の衝撃と立ちっぱなしの疲れに。アーチを支えるインソールを比較しましょう。</p>
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
