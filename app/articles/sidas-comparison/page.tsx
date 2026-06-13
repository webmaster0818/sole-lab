import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "シダスのインソールはどんな人向け？【2026年】ダイエット目的との使い分けを解説",
  description:
    "フランス発のインソールブランド「シダス（SIDAS）」はどんな人向け？公式情報に基づく熱成型カスタムやスポーツ別ラインの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違いを中立に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sidas-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "シダスのインソールはどんな人向け？ダイエット目的との使い分けガイド",
  description:
    "フランス発のインソールブランド「シダス（SIDAS）」はどんな人向け？公式情報に基づく熱成型カスタムやスポーツ別ラインの特徴と、ダイエット・ボディメイク目的のインソールとの目的の違いを中立に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "シダスのインソールはダイエット向きですか？", "a": "シダスは公式情報上、スポーツでのパフォーマンスや快適さ、足型へのフィットを軸にしたブランドです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、姿勢・歩行サポートを軸に設計された専用インソールのほうが目的に合致します。"}, {"q": "シダスはどんな人に向いていますか？", "a": "スキー・ランニング・アウトドアなど特定のスポーツで、足型に合ったフィットとパフォーマンスを求める方に向くブランドです。熱成型によるカスタムが代表的な特徴です。"}, {"q": "シダスとピットソールはどちらが良いですか？", "a": "優劣ではなく目的の違いで選びましょう。競技シーンのフィット・サポートが目的ならシダス、日常の歩行・姿勢からボディメイクしたいならピットソールのような設計が目的に合います。"}, {"q": "シダスの熱成型インソールとは何ですか？", "a": "熱を加えて足の形に合わせて成型するシダスの代表的な技術で、公式情報では世界で初めて熱成型インソールを開発したブランドと紹介されています。詳細は公式サイト・取扱店で確認してください。"}, {"q": "スポーツ用インソールでもダイエット効果は期待できますか？", "a": "スポーツ用は競技時のフィットや安定を目的に設計されており、ボディメイク目的とは設計思想が異なります。日常の歩行で姿勢・歩行バランスを整えたい場合は、その目的で設計された製品を選ぶのが近道です。"}];

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
    { "@type": "ListItem", position: 3, name: "シダスと比較検討するとき", item: "https://sole-laboratory.com/articles/sidas-comparison/" },
  ],
};

const points = [{"t": "競技用か、毎日のボディメイク用かを分ける", "b": "スキーやランニングなど特定競技でのフィット・パフォーマンスを求めるならシダスのようなスポーツ特化ブランドが候補です。日常の歩行や通勤でボディメイク習慣を作るのが目的なら、姿勢・歩行サポート軸の設計が目的に合います。"}, {"t": "フィッティングにかけられる手間で選ぶ", "b": "熱成型カスタムは足型に合わせられる反面、取扱店でのフィッティングなど一定の手間がかかります。手軽に始めたい場合は、サイズを選んで靴に入れるだけのタイプから試すのも一つの方法です。"}, {"t": "使う靴とシーンを具体的にイメージする", "b": "競技シューズに入れるのか、毎日のスニーカーやビジネスシューズに入れるのかで最適解は変わります。使う時間が最も長い靴を基準に選ぶと、目的とのズレが起きにくくなります。"}];
const related = [{"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用インソールの違い"}, {"href": "/articles/ski-snowboard-insole/", "label": "スキー・スノボ向けインソール"}, {"href": "/articles/running-insole/", "label": "ランニング用インソールの選び方"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function SidasComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "シダスと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">シダスのインソールはどんな人向け？ダイエット目的との使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スキーやランニングのショップでよく見かける「シダス（SIDAS）」。フランス発のインソールブランドとして世界的に知られていますが、ダイエット・ボディメイク目的の場合はどう考えればよいのでしょうか。公式情報に基づく特徴と使い分けを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">シダスは1975年にフランスで生まれ、熱成型による足型フィットとスポーツ別ラインナップを得意とするスポーツインソールの世界的ブランドです。一方、当サイトの3製品は姿勢・歩行サポートによるボディメイクを軸にしています。競技パフォーマンスや足型フィットを求めるならシダス、日常の歩行で姿勢・ボディメイクを狙うなら専用設計品と、目的で使い分けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シダスとはどんなブランド？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">シダス（SIDAS)は1975年にフランスで誕生したインソールブランドで、スキー競技者の足のサポートから始まり、世界で初めて熱成型によるインソールを開発したとされています（出典：シダスジャパン公式プレスリリース・公式サイト、2026年6月参照）。現在は世界45か国以上で販売され、日本ではシダスジャパン株式会社が展開しています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">公式サイトでは「様々なスポーツ、様々な日常生活で快適さとパフォーマンス、トラブル予防を実現する足周り360°のプロダクト」と説明されており、スキー・ランニング・アウトドアなどスポーツ別のラインナップや、熱成型で足型に合わせるカスタムインソールが特徴です。トップアスリートのサポート実績も公式に紹介されています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まとめると、シダスの得意領域は「スポーツでのパフォーマンスと足型へのフィット」。競技シーンで足をしっかり支えたい方に向けたブランド展開といえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シダスと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シダスと比較検討するときにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">日常の歩行でボディメイクを狙うなら、姿勢・歩行サポートを軸に設計された以下の3製品が当サイトの比較対象です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シダスと当サイト紹介製品の使い分け</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">シダスはスポーツ・競技シーンの足のサポートを得意とするブランド、当サイトの3製品は日常の歩行・姿勢からのボディメイクを軸にした製品で、目的が異なります。競技用シューズにはスポーツ特化型、毎日履く靴にはボディメイク向けと、シーンごとの使い分けが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエット目的でインソールを選ぶ際の考え方は、スポーツ用との違いを整理した記事でも詳しく解説しています。自分の目的を先に決めてから製品を絞り込みましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">日常の歩行からボディメイクを狙うインソールを、目的別に比較してみましょう。</p>
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
