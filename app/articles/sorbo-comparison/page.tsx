import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ソルボのインソールはどんな人向け？【2026年】ダイエット目的との使い分けを解説",
  description:
    "衝撃吸収素材ソルボセインで知られるソルボのインソールはどんな人向け？公式情報に基づくブランドの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違い・使い分けを中立に解説します。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sorbo-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ソルボのインソールはどんな人向け？ダイエット目的との使い分けガイド",
  description:
    "衝撃吸収素材ソルボセインで知られるソルボのインソールはどんな人向け？公式情報に基づくブランドの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違い・使い分けを中立に解説します。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ソルボのインソールはダイエット向きですか？", "a": "ソルボは公式サイト上、衝撃吸収素材ソルボセインによる衝撃吸収・圧力分散や足の悩みケアを特徴とするブランドです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、姿勢・歩行サポートを軸に設計された専用インソールのほうが目的に合致します。"}, {"q": "ソルボはどんな人に向いていますか？", "a": "スポーツや立ち仕事などで足裏・かかとへの衝撃や負担をやわらげたい方に向くブランドです。整形外科医と開発したDSISシリーズなど、足の悩みケアの製品展開も豊富です。"}, {"q": "ソルボとピットソールはどちらが良いですか？", "a": "優劣ではなく目的の違いで選ぶのがおすすめです。衝撃吸収・足の負担ケアが目的ならソルボ、姿勢・歩行を整えてボディメイクしたいならピットソールのような設計が目的に合います。"}, {"q": "ソルボのインソールはどこで買えますか？", "a": "三進興産株式会社が運営する公式オンラインストアのほか、スポーツ用品店などでも取り扱いがあります。最新の製品ラインナップは公式サイトで確認してください。"}, {"q": "衝撃吸収インソールとボディメイク用インソールは併用できますか？", "a": "同じ靴に2枚重ねるのは靴内が窮屈になるため推奨しません。スポーツ用の靴には衝撃吸収系、毎日のウォーキング靴にはボディメイク系と、靴ごとに使い分けましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "ソルボと比較検討するとき", item: "https://sole-laboratory.com/articles/sorbo-comparison/" },
  ],
};

const points = [{"t": "目的が「衝撃緩和」か「ボディメイク」かを決める", "b": "かかとや足裏への衝撃・負担をやわらげたいならソルボのような衝撃吸収系が候補に。一方、姿勢や歩行バランスを整えて消費カロリーアップやスタイルケアを狙うなら、ボディメイク向けの設計思想で作られたインソールが目的に合います。"}, {"t": "使うシーン（スポーツ・立ち仕事・日常）で選ぶ", "b": "ソルボはスポーツ用・快適用などシーン別の展開が豊富です。日常のウォーキングや通勤でボディメイク習慣を作りたい場合は、毎日履く靴に入れっぱなしにできる姿勢・歩行サポート系が使いやすい選択です。"}, {"t": "設計思想（クッション型かサポート型か）を確認する", "b": "衝撃吸収素材で受け止めるクッション型と、アーチや骨格を支えて歩行を整えるサポート型では役割が異なります。商品パッケージや公式サイトでどちらの思想で作られているかを確認してから選びましょう。"}];
const related = [{"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用インソールの違い"}, {"href": "/articles/material-comparison/", "label": "インソール素材の徹底比較"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}, {"href": "/articles/sports-shop-insole/", "label": "スポーツ用品店のインソール事情"}];

export default function SorboComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ソルボと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ソルボのインソールはどんな人向け？ダイエット目的との使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スポーツ店やネット通販でよく見かける「ソルボ（SORBO）」のインソール。衝撃吸収素材で長い実績を持つブランドですが、「ダイエットやボディメイク目的でも使えるの？」と迷う方も多いはず。この記事では、公式情報に基づくソルボの特徴と、目的別の使い分けを中立的に整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ソルボは衝撃吸収素材「ソルボセイン」を核とした、衝撃吸収・圧力分散と足の悩みケアを得意とするブランドです。一方、当サイトで紹介するピットソールなどは姿勢・歩行サポートによるボディメイクを軸に設計されています。どちらが優れているかではなく、「衝撃や足の負担をやわらげたい」のか「姿勢・歩行を整えてボディメイクしたい」のか、目的で選ぶのが正解です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ソルボとはどんなブランド？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ソルボは、衝撃吸収素材「ソルボセイン」を開発・製造する三進興産株式会社のブランドです（出典：ソルボ公式オンラインストア、2026年6月参照）。ソルボセインは英国での研究開発を背景に生まれた素材で、公式サイトでは人の筋肉や皮膚に近い衝撃吸収・圧力分散性能を持つと説明されています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">代表的なシリーズである「DSIS」インソールは、整形外科医とともに開発され、足裏のアーチを支える設計が特徴とされています。公式オンラインストアによれば1996年の発売以来1,000万足以上を販売しており、スポーツ用インソール、立ち仕事などの快適インソール、フットケアサポーターなど幅広いカテゴリを展開しています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まとめると、ソルボの得意領域は「衝撃吸収・圧力分散」と「足の悩みのケア」。スポーツ時や立ち仕事の足への衝撃をやわらげたい方に長く選ばれてきたブランドといえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ソルボと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ソルボと比較検討するときにおすすめのインソール3選</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ソルボと当サイト紹介製品の使い分け</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">両者は競合というより目的が異なる存在です。スポーツや立ち仕事で足への衝撃・負担をやわらげたい靴にはソルボのような衝撃吸収系を、ウォーキングや日常の歩行でボディメイクを狙う靴には姿勢・歩行サポート系を、と靴ごとに使い分けるのが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、1足の靴にインソールを2枚重ねるのは靴内が窮屈になるため基本的におすすめしません。目的別に靴を分けて、それぞれに合ったインソールを入れる使い方が効果的です。</p>
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
