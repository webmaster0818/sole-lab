import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ドクターショールのインソールはどんな人向け？【2026年】ダイエット目的との使い分け",
  description:
    "フットケアブランド「ドクターショール（Dr.Scholl）」のインソールはどんな人向け？公式情報に基づくジェルアクティブの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違いを中立に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/scholl-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ドクターショールのインソールはどんな人向け？ダイエット目的との使い分けガイド",
  description:
    "フットケアブランド「ドクターショール（Dr.Scholl）」のインソールはどんな人向け？公式情報に基づくジェルアクティブの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違いを中立に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ドクターショールのインソールはダイエット向きですか？", "a": "ドクターショールのジェルアクティブは公式情報上、ジェルによるクッション性・衝撃吸収で足の負担をやわらげることを特徴とするシリーズです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、姿勢・歩行サポートを軸に設計された専用インソールのほうが目的に合致します。"}, {"q": "ドクターショールはどんな人に向いていますか？", "a": "立ち仕事や長時間の歩行で足の疲れ・衝撃をやわらげたい方に向くブランドです。日常向け・立ち仕事向け・スポーツ向けなど用途別のジェルアクティブシリーズが公式に展開されています。"}, {"q": "ドクターショールとピットソールはどちらが良いですか？", "a": "優劣ではなく目的の違いで選びましょう。ジェルクッションで足の疲れをケアしたいならドクターショール、姿勢・歩行を整えてボディメイクしたいならピットソールのような設計が目的に合います。"}, {"q": "ジェルアクティブはサイズ調整できますか？", "a": "公式情報では、ハサミでカットしてサイズ調整できる設計と案内されています。お使いの靴のインソールに合わせて調整する方法が紹介されています。"}, {"q": "クッション系インソールとサポート系インソールは何が違いますか？", "a": "クッション系は衝撃や圧力を受け止めて疲れをやわらげる役割、サポート系はアーチや骨格を支えて姿勢・歩行を整える役割が中心です。目的に応じて選び、必要なら靴ごとに使い分けましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "ドクターショールと比較検討するとき", item: "https://sole-laboratory.com/articles/scholl-comparison/" },
  ],
};

const points = [{"t": "「足の疲れケア」か「ボディメイク」かを決める", "b": "立ち仕事や日常の足の疲れ・衝撃をやわらげたいならドクターショールのようなジェルクッション系が候補です。姿勢・歩行を整えてボディメイクを狙うなら、その目的で設計されたサポート系インソールが合います。"}, {"t": "クッション型とサポート型の違いを理解する", "b": "ジェルで衝撃を受け止めるクッション型と、アーチや骨格を支えて歩行を整えるサポート型では役割が異なります。求める変化がどちらなのかを先に決めると選びやすくなります。"}, {"t": "入手のしやすさと続けやすさで考える", "b": "インソールは毎日使ってこそ意味があります。購入チャネルや交換のしやすさ、毎日履く靴に入れられるかという「続けやすさ」も選択基準に加えましょう。"}];
const related = [{"href": "/articles/drugstore-insole/", "label": "ドラッグストアのインソール事情"}, {"href": "/articles/foot-fatigue-insole/", "label": "足のだるさ・疲れ対策インソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事で疲れないインソール"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function SchollComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ドクターショールと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ドクターショールのインソールはどんな人向け？ダイエット目的との使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ドラッグストアでもおなじみの「ドクターショール（Dr.Scholl）」。フットケアの老舗ブランドとして知られますが、ダイエット・ボディメイク目的でインソールを探している場合はどう考えればよいのでしょうか。公式情報に基づいて特徴と使い分けを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ドクターショールは1904年創業のフットケア専門ブランドで、ジェルによるクッション・衝撃吸収と日常の足の快適さを得意としています。当サイトの3製品は姿勢・歩行サポートによるボディメイク軸の設計で、目的が異なります。立ち仕事や日常の足の疲れ対策ならドクターショール、歩行・姿勢からのボディメイクなら専用設計品と使い分けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ドクターショールとはどんなブランド？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ドクターショール（Dr.Scholl）は、1904年に米国の医師ウィリアム・ショールが設立したフットケア＆レッグケアの総合ブランドで、公式サイトでは100ヵ国以上で愛用されていると紹介されています（出典：ドクター・ショール公式サイト、2026年6月参照）。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールの代表シリーズ「ジェルアクティブ（Gel Activ）」は、2層のジェルによるクッション性と、ソフトジェルパッドでかかとへの衝撃を吸収する設計が公式の特徴です。日常向けの「エブリデイ」、立ち仕事向けの「ワーク」、スポーツ向けのラインなど用途別に展開され、ハサミでカットしてサイズ調整できる手軽さも案内されています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まとめると、ドクターショールの得意領域は「ジェルによるクッション・衝撃吸収」と「フットケア全般の手軽さ」。足の疲れをやわらげる日常ケアの定番ブランドといえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ドクターショールと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ドクターショールと比較検討するときにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエット・ボディメイクを目的にするなら、姿勢・歩行サポートを軸に設計された以下の3製品が当サイトの比較対象です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ドクターショールと当サイト紹介製品の使い分け</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ドクターショールはジェルクッションによる足の疲れケアを得意とするブランド、当サイトの3製品は姿勢・歩行サポートからのボディメイクが軸で、設計の目的が異なります。立ち仕事用の靴にはクッション系、ウォーキングや通勤でボディメイクを狙う靴にはサポート系と、靴ごとに使い分けるのが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足の痛みやトラブルが続く場合は、どのインソールを使うかにかかわらず、整形外科など医療機関への相談を優先してください。</p>
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
          <p className="text-white/90 text-sm mb-5">姿勢・歩行サポート軸のインソールを比較して、目的に合う1枚を見つけましょう。</p>
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
