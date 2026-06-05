import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "開張足に向くインソールの選び方【2026年】横アーチを支えて足幅の広がりを抑える",
  description:
    "足の幅が広がる・足裏の前方にタコができる開張足の方へ。低下した横アーチを支えるインソールの選び方と、外反母趾やモートン病との関係、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/splay-foot-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "開張足に向くインソールの選び方｜横アーチを支えて足幅の広がりを抑える",
  description:
    "足の幅が広がる・足裏の前方にタコができる開張足の方へ。低下した横アーチを支えるインソールの選び方と、外反母趾やモートン病との関係、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "開張足はインソールで改善しますか？", "a": "低下した横アーチを支えることで、広がりの進行を抑え前足部の負担を減らす補助になります。完全に元に戻すものではないため、早めの対策と靴の見直しが大切です。"}, {"q": "開張足かどうか確認するには？", "a": "足の幅が以前より広がった、指の付け根の裏にタコができる、足が疲れやすい場合は開張足の傾向です。外反母趾を併発していることも多いです。"}, {"q": "外反母趾とも関係ありますか？", "a": "はい。横アーチの低下（開張足）は外反母趾の主要な要因の一つです。横アーチを支えるインソールは、外反母趾の予防・進行抑制の補助にもなります。"}];

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
    { "@type": "ListItem", position: 3, name: "開張足", item: "https://sole-laboratory.com/articles/splay-foot-insole/" },
  ],
};

const points = [{"t": "中足骨パッドで横アーチを支える", "b": "開張足対策の中心は、指の付け根の手前を持ち上げて横アーチを作る中足骨パッドです。位置が合うものを選びましょう。"}, {"t": "前足部のフィットと幅", "b": "足幅が広がっているため、前足部がきつくない設計が大切です。靴も幅広（3E以上）を選ぶと相乗効果があります。"}, {"t": "縦アーチも含めた全体サポート", "b": "横アーチだけでなく内側縦アーチも支えると足全体が安定します。3点支持の設計が理想です。"}];
const related = [{"href": "/articles/hallux-valgus-prevention/", "label": "外反母趾の予防インソール"}, {"href": "/articles/morton-disease-insole/", "label": "モートン病のインソール"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}];

export default function SplayFootPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "開張足" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">開張足に向くインソールの選び方｜横アーチを支えて足幅の広がりを抑える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の幅が広がってきた、足裏の指の付け根あたりにタコができる——それは横アーチが低下した『開張足』のサインかもしれません。横アーチを支えるインソールは、開張足の負担軽減や外反母趾の予防の補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">開張足には、足の指の付け根の手前を持ち上げて横アーチを再現する『中足骨パッド』付きインソールが向いています。放置すると外反母趾やモートン病につながることがあるため、早めの対策がおすすめです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">開張足とは？横アーチ低下が招くトラブル</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">開張足は、足の指の付け根を横に結ぶ『横アーチ』が低下し、足の前方が扇状に広がった状態です。加齢や筋力低下、ハイヒール・幅の狭い靴、立ち仕事などが原因になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">横アーチが潰れると、指の付け根に体重が集中してタコができたり、外反母趾やモートン病を併発しやすくなります。インソールで横アーチを下から支えると、広がりや前足部への負担をやわらげる補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">開張足の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">開張足におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">横アーチを支える中足骨パッド付きで、前足部にゆとりが出るインソールが開張足に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴の見直しと早めの対策</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">開張足は進行すると外反母趾やモートン病につながるため、早めの対策が有効です。幅の狭い靴やハイヒールを避け、幅広で足指が動かせる靴に替えましょう。足指のグーパー運動など筋力ケアも効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">変形や痛みが進む場合は整形外科で相談し、必要に応じてオーダーメイドの装具を検討してください。</p>
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
          <p className="text-white/90 text-sm mb-5">横アーチを支えるインソールで、開張足の広がりと前足部の負担を抑えましょう。</p>
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
