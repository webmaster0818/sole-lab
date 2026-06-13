import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "マラソンに向くインソールの選び方【2026年】長距離の衝撃とアーチ低下対策",
  description:
    "フルマラソンでは数万回の着地衝撃が足にかかります。レース後半のアーチ低下・足裏のマメ・膝の負担に備えるインソールの選び方とおすすめ3選を解説。長い距離を走る市民ランナーの方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/marathon-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "マラソン・長距離走に向くインソールの選び方｜数万回の着地衝撃に備える",
  description:
    "フルマラソンでは数万回の着地衝撃が足にかかります。レース後半のアーチ低下・足裏のマメ・膝の負担に備えるインソールの選び方とおすすめ3選を解説。長い距離を走る市民ランナーの方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "マラソンのレース本番でインソールを使っても良いですか？", "a": "使えますが、本番でいきなり新しいインソールを使うのは禁物です。練習で数週間慣らし、長い距離でも違和感やマメが出ないことを確認してから使いましょう。"}, {"q": "ランニング用インソールとマラソン用は違うものですか？", "a": "基本は同じですが、長距離では疲労時のアーチ低下とマメ対策の優先度が上がります。支えの持続性とズレにくさをより重視して選びましょう。"}, {"q": "フルマラソンの後半に足裏が痛くなります。インソールで変わりますか？", "a": "後半の足裏の痛みは、アーチの疲労による沈み込みが関係していることがあります。アーチを支えるインソールは負担軽減の補助になりますが、痛みが続く場合は足底腱膜炎などの可能性もあるため整形外科で確認してください。"}, {"q": "交換の目安はどのくらいですか？", "a": "走行距離500〜800kmが一般的な目安です。月100km走る方なら半年前後です。クッションのヘタリを感じたら早めに交換しましょう。"}, {"q": "練習用と本番用でインソールを分けるべきですか？", "a": "同じモデルを練習用・本番用の2枚で運用すると、本番用のヘタリを抑えつつ同じ感覚で走れるためおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "マラソン・長距離走", item: "https://sole-laboratory.com/articles/marathon-insole/" },
  ],
};

const points = [{"t": "疲労時もアーチを支え続けるサポート", "b": "距離が伸びるほどアーチは沈みます。柔らかいだけのクッションではなく、土踏まずをしっかり支え続けられる設計を選びましょう。"}, {"t": "数万回の着地に耐えるクッションと耐久性", "b": "かかと・前足部のクッションに加え、ヘタりにくさも重要です。走行距離500〜800kmを目安に交換しましょう。"}, {"t": "マメを防ぐズレないフィット", "b": "長時間の摩擦はマメの原因になります。足裏に沿ってズレにくく、シューズとの一体感が出るものを選びましょう。"}];
const related = [{"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/trail-running-insole/", "label": "トレイルランニングのインソール"}, {"href": "/articles/shin-splint-insole/", "label": "シンスプリントのインソール"}, {"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール"}];

export default function MarathonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "マラソン・長距離走" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">マラソン・長距離走に向くインソールの選び方｜数万回の着地衝撃に備える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">フルマラソンでは数万歩、ハーフでも2万歩前後の着地を繰り返します。短い距離では問題なくても、距離が伸びるほど足裏のアーチは疲労で沈み込み、後半のフォーム崩れやマメ・膝の痛みにつながります。長距離ならではの視点でのインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">マラソン・長距離走には、疲労してもアーチが沈み込みすぎないように支え続けるサポートと、繰り返しの着地衝撃を受け止めるクッション、長時間でもマメができにくいズレないフィット感が大切です。痛みを我慢して走り続けるのは禁物で、続く痛みは整形外科で確認しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">長距離でこそ足のトラブルが起きやすい理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ランニングの着地では一歩ごとに体重を大きく上回る衝撃がかかるとされ、フルマラソンではそれが数万回繰り返されます。前半は筋肉とアーチが衝撃を吸収できても、後半は疲労でアーチが沈み込み、衝撃を逃がしにくくなります。これが終盤に膝・すね・足裏の痛みが出やすい理由の一つです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを支えると、疲労時の沈み込みを抑えて衝撃分散の機能を保ちやすくなります。また足裏とインソールの間のズレが減ると、長時間の摩擦で起きるマメの予防にもつながります。日々の練習から使って足に馴染ませておくことが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">マラソン・長距離走の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">マラソン・長距離走におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的とした製品です。競技専用モデルではないため、レース本番用というより、日々の練習やウォーキング・通勤での足のケアに取り入れるのがおすすめです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">練習からレースまでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">新しいインソールをいきなりレースで使うのは避け、必ず練習で数週間慣らしてから本番に臨みましょう。長い距離を踏む前に、短いジョグで違和感やマメの兆候がないかを確認するのが基本です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">走行距離が伸びてすね・膝・足裏に痛みが出た場合は、疲労骨折や足底腱膜炎などオーバーユース障害の可能性があります。痛みを我慢して走り続けず、整形外科で確認してから練習を再開してください。</p>
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
          <p className="text-white/90 text-sm mb-5">長い距離を走る足に。アーチを支えるインソールで日々の練習からケアしましょう。</p>
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
