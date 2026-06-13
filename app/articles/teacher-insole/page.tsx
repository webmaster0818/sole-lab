import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "教員・先生の立ち仕事の疲れに！インソールの選び方【2026年】上履き対応",
  description:
    "授業で立ちっぱなし、校内を歩き回る教員・先生へ。中敷きが薄い上履きでも使えるインソールの選び方と、足の疲れ・むくみ対策、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/teacher-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "教員・先生の立ち仕事におすすめのインソール｜上履きの薄い中敷き対策",
  description:
    "授業で立ちっぱなし、校内を歩き回る教員・先生へ。中敷きが薄い上履きでも使えるインソールの選び方と、足の疲れ・むくみ対策、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "上履きにインソールは入りますか？", "a": "薄型のインソールなら多くの上履きに入ります。中が浅い場合は元の中敷きを外して入れ替えると窮屈になりにくいです。カットできるタイプならサイズの微調整もしやすいです。"}, {"q": "教壇に立ちっぱなしの疲れにも効きますか？", "a": "アーチサポートで土踏まずの沈み込みを防ぐと、立ち続けたときの足裏の疲れを軽減する補助になります。合間のかかと上げなど、足を動かす工夫と併用するとより効果的です。"}, {"q": "通勤靴と上履き、どちらに入れるべきですか？", "a": "校内で過ごす時間が長いため、まずは上履きがおすすめです。両方で使いたい場合は入れ替えの手間を考えて2枚用意するか、足に直接装着するソックス型を検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "教員・先生の立ち仕事", item: "https://sole-laboratory.com/articles/teacher-insole/" },
  ],
};

const points = [{"t": "上履きに収まる薄型設計", "b": "上履きやスクールシューズは中のスペースが浅めです。厚いインソールは窮屈になるため、薄型でアーチサポートのあるものを選び、元の中敷きが外せる場合は入れ替えて使いましょう。"}, {"t": "立ち姿勢を支えるアーチサポート", "b": "板書や監督業務など『その場に立ち続ける』時間が長い教員には、土踏まずの沈み込みを防ぐアーチサポートが重要です。立ち姿勢が安定すると腰への負担軽減も助けます。"}, {"t": "校内移動・階段に効く衝撃吸収", "b": "硬い床の廊下や階段の上り下りでは、かかとへの衝撃が積み重なります。適度なクッション性で着地の衝撃をやわらげるものが向いています。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/childcare-worker-insole/", "label": "保育士のインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function TeacherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "教員・先生の立ち仕事" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">教員・先生の立ち仕事におすすめのインソール｜上履きの薄い中敷き対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">授業中は教壇に立ちっぱなし、休み時間や移動教室では校内や階段を歩き回る——教員の一日は想像以上に足を酷使します。しかも校内で履く上履きはクッションの薄いフラットなものが多く、足裏への負担がたまりがち。インソールで上履きの弱点を補いましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">教員には、クッションが薄くフラットな上履きに入れられる薄型で、立ち姿勢を支えるアーチサポートのあるインソールが向いています。授業の立ちっぱなしと校内移動の両方の疲れをやわらげる補助になります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">教員の足が疲れる理由と上履きの落とし穴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">教員の仕事は、授業中の板書や机間指導でほぼ立ちっぱなしのうえ、休み時間ごとの教室移動、階段の上り下り、行事の立ち番など、立つ・歩くが一日中続きます。学校の床はリノリウムやコンクリート系の硬い素材が多く、足裏への衝撃が蓄積しやすい環境です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに見落とされがちなのが校内履きの問題です。学校指定や定番の上履き・スクールシューズは、中敷きが薄く平らでアーチサポートがほとんどありません。長時間履き続けると土踏まずが沈み込み、衝撃を吸収できずに疲れやむくみが強まります。インソールで薄い中敷きを補うことが、教員の足の疲れ対策の近道です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">教員・先生の立ち仕事の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">教員・先生の立ち仕事におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">クッションの薄い上履きを補える薄型で、アーチサポートを備えたインソールが教員に向いています。ピットソールとスリムアップはカットしてサイズ調整できるため上履きにも合わせやすく、ソックス型のランウェイキュアソールは履き替えても効果が続くのが特徴です（M/L・22.5〜25cmの女性向け展開）。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">通勤靴と上履きの使い分けのコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">教員は通勤靴と上履きを毎日履き替えるため、インソールを上履きに入れっぱなしにするのが手軽です。通勤でも使いたい場合は2枚目を用意するか、足に直接装着するソックス型なら履き替えの影響を受けません。体育館での行事や部活指導が多い方は、体育館シューズ側にもクッションがあると安心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">あわせて、授業の合間にかかとの上げ下げをするとふくらはぎの筋ポンプが働き、夕方のむくみがたまりにくくなります。足裏やかかとの痛みが続く場合は足底腱膜炎などの可能性もあるため、無理せず整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">立ちっぱなしの授業と校内移動の疲れに。上履きに合うインソールを比較しましょう。</p>
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
