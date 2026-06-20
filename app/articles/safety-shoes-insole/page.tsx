import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "安全靴のインソールの選び方【2026年】薄型で足の疲れ・痛み対策",
  description:
    "安全靴で足が疲れる・痛い方へ。中が狭い安全靴に入る薄型インソールの選び方、衝撃吸収・耐久性のポイント、おすすめ3選を解説。工場・建設・物流に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/safety-shoes-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "安全靴のインソールの選び方｜薄型で足の疲れ・痛みを軽くする",
  description:
    "安全靴で足が疲れる・痛い方へ。中が狭い安全靴に入る薄型インソールの選び方、衝撃吸収・耐久性のポイント、おすすめ3選を解説。工場・建設・物流に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "安全靴に入る薄いインソールはありますか？", "a": "はい、薄型でアーチサポートのあるインソールなら安全靴にも入ります。つま先の保護芯に干渉しないよう、必要なら元の中敷きを外して使いましょう。"}, {"q": "安全靴の足の疲れに効果はありますか？", "a": "硬い靴底と硬い床の衝撃を吸収し、アーチを支えることで足裏の疲れ・痛みを軽減する補助になります。"}, {"q": "安全靴の元の中敷きは外すべきですか？", "a": "必ずしも外す必要はありません。インソールを重ねてつま先がきつくなる場合や、保護芯に当たる場合は元の中敷きを外して厚みを調整します。余裕があれば外さずに上に敷いても問題ありません。"}, {"q": "鉄板（踏み抜き防止インソール）入りの安全靴でも使えますか？", "a": "底に踏み抜き防止板が入った安全靴でも、その上に敷く市販インソールは併用できます。ただし元々中の厚みが増えている分、薄型を選ぶか元の中敷きと入れ替えて、つま先やかかとが窮屈にならないか履いて確認しましょう。"}, {"q": "どのくらいで交換すべきですか？", "a": "毎日長時間使う現場作業では、3〜6ヶ月が交換の目安です。クッションが薄くなったら効果低下のサインです。"}];

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
    { "@type": "ListItem", position: 3, name: "安全靴", item: "https://sole-laboratory.com/articles/safety-shoes-insole/" },
  ],
};

const points = [{"t": "保護芯に干渉しない薄型", "b": "安全靴はつま先に保護芯（先芯）が入り中が狭いため、厚すぎるとつま先が窮屈になり保護芯に当たることも。薄型を選ぶか、元の中敷きを外して厚みを調整しましょう。サイズに余裕がないと逆に足を締め付け、長時間履くと痛みやしびれの原因になります。"}, {"t": "長時間の立ち仕事に向くクッションとアーチ", "b": "コンクリートなど硬い床の上で1日中立つ・歩く作業では、踵への着地衝撃が繰り返し足裏に伝わります。踵（ヒール）部のクッションで衝撃を和らげ、土踏まず（アーチ）を支える設計だと、アーチの落ち込みを防ぎ足裏全体の負担を分散できます。"}, {"t": "汗・蒸れ対策で快適さと衛生を保つ", "b": "安全靴は通気性が低く、長時間履くと内部に汗がこもりがちです。吸湿性のある表面素材や通気を意識したインソールを選び、こまめに乾燥させると、蒸れ・においや皮膚トラブルを抑えやすくなります。"}, {"t": "毎日使える耐久性", "b": "作業現場で毎日長時間使うため、へたりにくい耐久性のある素材を選びましょう。クッションがつぶれてくると衝撃吸収やアーチサポートの効果が落ちます。"}];
const related = [{"href": "/articles/factory-work-insole/", "label": "工場の立ち仕事インソール"}, {"href": "/articles/security-guard-insole/", "label": "警備員のインソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function SafetyShoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "安全靴" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">安全靴のインソールの選び方｜薄型で足の疲れ・痛みを軽くする</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">つま先に保護芯の入った安全靴は、底が硬く中敷きも薄いため、長時間履くと足が疲れたり痛くなりがち。中が狭い安全靴に入る薄型インソールで、足裏の負担を軽くしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">安全靴には、つま先の保護芯に干渉しない薄型で、衝撃吸収とアーチサポート、毎日の使用に耐える耐久性を備えたインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴で足が疲れる・痛む理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴は安全性を優先した設計で、底が硬く、つま先には保護芯が入っているため中の空間が狭めです。標準の中敷きは薄く硬いことが多く、クッション性とアーチサポートが不足しがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">硬い床での立ち仕事や歩行で足裏のアーチが沈むと、衝撃を吸収できず疲れ・痛みが出やすくなります。薄型のインソールでアーチを支え衝撃を吸収すると、安全靴の弱点を補えます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴の選び方4つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">安全靴に入る薄型で、衝撃吸収とアーチサポートを両立したインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴での使い方と注意</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴に入れる際は、つま先の保護芯に当たらないか、靴を履いて確認しましょう。きつい場合は元の中敷きを外して厚みを調整します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">毎日長時間の使用でへたりやすいため、3〜6ヶ月を目安に交換すると効果を保てます。足裏の痛みが続く場合は受診を。</p>
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
          <p className="text-white/90 text-sm mb-5">安全靴の足の疲れ・痛みに。薄型の衝撃吸収インソールを比較しましょう。</p>
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
