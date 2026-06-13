import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "BMZのインソールはどんな人向け？【2026年】ピットソールとの関係と使い分けも解説",
  description:
    "キュボイドバランス理論で知られるBMZのインソールはどんな人向け？公式情報に基づく立方骨サポートの特徴、ピットソールとの関係（特許技術の採用）、ダイエット目的との使い分けを中立に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/bmz-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "BMZのインソールはどんな人向け？ピットソールとの関係と使い分けガイド",
  description:
    "キュボイドバランス理論で知られるBMZのインソールはどんな人向け？公式情報に基づく立方骨サポートの特徴、ピットソールとの関係（特許技術の採用）、ダイエット目的との使い分けを中立に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "BMZのインソールはダイエット向きですか？", "a": "BMZは公式情報上、立方骨を支えるキュボイドバランス理論でアスリートの足の安定性と運動性の両立を目指すブランドです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、同じ理論をベースにその目的で展開されたピットソールのような製品が目的に合致します。"}, {"q": "BMZとピットソールの関係は？", "a": "ピットソールの販売元セレスの公式リリースに、BMZ社の特許技術（特許第4733957号等）を採用していることが記載されています（2026年6月参照）。同じ理論的ルーツを持ち、BMZはスポーツ向け、ピットソールはダイエット・ボディメイク向けに展開されています。"}, {"q": "キュボイドバランス理論とは何ですか？", "a": "BMZ公式サイトによると、土踏まずではなく足の外側にある立方骨（キュボイド）を支えることで足のアーチバランスを整え、足の動きを制限せずに安定性と運動性を両立させる特許取得の独自理論です。"}, {"q": "BMZはどんな人に向いていますか？", "a": "公式には多くのスポーツ選手が愛用するアスリート向けの高機能インソールとして紹介されており、競技でのパフォーマンスや足の運動性を重視する方に向く展開です。"}, {"q": "BMZとピットソールはどちらが良いですか？", "a": "優劣ではなく用途の違いで選びましょう。競技・スポーツシーンでのサポートが目的ならBMZ、日常の歩行・姿勢からのボディメイクが目的ならピットソールが、それぞれの設計目的に合致します。"}];

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
    { "@type": "ListItem", position: 3, name: "BMZと比較検討するとき", item: "https://sole-laboratory.com/articles/bmz-comparison/" },
  ],
};

const points = [{"t": "スポーツ用途か、日常のボディメイク用途かを決める", "b": "競技でのパフォーマンスや足の運動性を重視するならBMZのスポーツ向けラインが候補です。日常の歩行や姿勢からボディメイクを狙うなら、同系の理論をボディメイク向けに展開した製品が目的に合います。"}, {"t": "理論・設計思想の共通点と違いを知る", "b": "立方骨を支えて足の安定性と運動性を両立させる考え方は共通のルーツです。そのうえで、想定シーン（競技か日常か）と訴求目的（パフォーマンスかボディメイクか）の違いで選び分けましょう。"}, {"t": "毎日続けられる形を選ぶ", "b": "ボディメイク目的では毎日の歩行で使い続けることが前提になります。普段履く靴に入れて違和感なく使えるか、交換やお手入れがしやすいかも判断材料にしましょう。"}];
const related = [{"href": "/articles/patent-technology/", "label": "ダイエットインソールの特許技術解説"}, {"href": "/articles/pitsole-vs-tential/", "label": "ピットソール vs TENTIAL比較"}, {"href": "/articles/diet-mechanism/", "label": "インソールでダイエットできる仕組み"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用インソールの違い"}];

export default function BmzComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "BMZと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">BMZのインソールはどんな人向け？ピットソールとの関係と使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">「キュボイドバランス理論」で知られるインソールブランド「BMZ」。アスリート向けの高機能インソールとして知られる一方、当サイトで紹介しているピットソールとも技術的な関係があります。公式情報に基づいて、BMZの特徴とダイエット目的での使い分けを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">BMZは、土踏まずではなく立方骨（キュボイド）を支える独自の特許理論で、足の安定性と運動性の両立を目指すアスリート向け色の強いブランドです。ピットソールは販売元の公式リリースでBMZ社の特許技術の採用が記載されており、同じ理論をベースにダイエット・ボディメイク向けに展開された製品といえます。スポーツでのパフォーマンス重視ならBMZ、日常の歩行からのボディメイク重視ならピットソールという使い分けが目安です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">BMZとはどんなブランド？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">BMZは「キュボイドバランス理論」を掲げる日本のインソールブランドです。公式サイトによると、一般的なインソールのように土踏まずを支えるのではなく、足の外側にある立方骨（キュボイド）を支えることで足のアーチバランスを整え、足の動きを制限せずに「安定性」と「運動性」を両立させる考え方とされています（出典：BMZ公式サイト、2026年6月参照）。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">この理論は特許を取得した独自技術で、公式サイトでは国内特許（特許第6799881号）のほか海外でも特許を取得していることが紹介されています。多くのスポーツ選手が愛用するアスリート向けの高機能インソールとして展開されており、競技用のラインナップが中心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、当サイトで紹介しているピットソールは、販売元セレスの公式リリースにBMZ社の特許技術（特許第4733957号等）を採用していることが記載されています（2026年6月参照）。つまり両者は対立する関係ではなく、同じ理論的ルーツを持ちながら、BMZはスポーツ向け、ピットソールはダイエット・ボディメイク向けと、目的の異なる展開をしているブランド・製品といえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">BMZと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">BMZと比較検討するときにおすすめのインソール3選</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">BMZとピットソール、どう使い分ける？</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">BMZはアスリート・スポーツシーンの足のサポートを軸に展開するブランド、ピットソールはBMZ社の特許技術を採用しつつ日常の歩行・姿勢からのダイエット・ボディメイクを軸にした製品です。競技用シューズにはスポーツ向け、毎日のウォーキングや通勤靴にはボディメイク向けと、シーンで使い分けるのが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">キュボイドバランス理論など特許技術の詳細は、当サイトの特許技術解説の記事でも整理しています。技術的な背景を理解してから選びたい方はあわせてご覧ください。</p>
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
          <p className="text-white/90 text-sm mb-5">BMZの理論をボディメイク向けに展開した製品を含め、目的別に比較してみましょう。</p>
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
