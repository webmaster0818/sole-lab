import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールは何日で効果が出る？【2026年】期間の目安と続け方",
  description:
    "ダイエットインソールはどのくらいで効果が出る？姿勢・歩き方の変化と痩せ実感までの期間の目安、続け方のコツ、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/diet-period-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールは何日で効果が出る？期間の目安と続け方",
  description:
    "ダイエットインソールはどのくらいで効果が出る？姿勢・歩き方の変化と痩せ実感までの期間の目安、続け方のコツ、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ダイエットインソールは何日で痩せますか？", "a": "履いてすぐ痩せるものではありません。姿勢・歩き方の変化は数日〜2週間、体型の変化は1〜3ヶ月の継続が目安です。食事・運動との組み合わせが前提です。"}, {"q": "効果を早く出すコツはありますか？", "a": "毎日履き続け、かかと着地→蹴り出しの正しい歩き方を意識し、歩く量を増やすことです。食事管理を併せると変化を実感しやすくなります。"}, {"q": "どのくらい履けば良いですか？", "a": "できるだけ毎日、日常の靴に入れて履き続けるのが理想です。最低でも1〜3ヶ月は継続して様子を見ましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "効果が出る期間", item: "https://sole-laboratory.com/articles/diet-period-insole/" },
  ],
};

const points = [{"t": "毎日履き続けられる快適さ", "b": "効果は継続が前提。長時間快適で、普段の靴に入るものを選ぶと続けやすくなります。"}, {"t": "正しい歩き方とセットで", "b": "インソールを活かすには、かかと着地→蹴り出しの歩き方を意識することが大切です。"}, {"t": "食事・運動との組み合わせ", "b": "インソールは補助です。食事管理と適度な運動を組み合わせると、変化を実感しやすくなります。"}];
const related = [{"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}, {"href": "/articles/insole-expectations/", "label": "インソールへの期待値"}, {"href": "/articles/insole-truth/", "label": "ダイエットインソールの真実"}, {"href": "/articles/correct-usage-insole/", "label": "インソールの効果的な使い方"}];

export default function DietPeriodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "効果が出る期間" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールは何日で効果が出る？期間の目安と続け方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールを買ったけれど、いつ効果が出るの？——結論から言うと、姿勢や歩き方の変化は数日〜数週間、体型の変化はそれ以上の継続が必要です。焦らず続けることが成功の鍵です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ダイエットインソールは、履いてすぐ痩せるものではありません。姿勢・歩き方の改善は数日〜2週間で感じ始め、体型やむくみの変化は1〜3ヶ月の継続が目安です。食事・運動と組み合わせ、毎日履き続けることが大切です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果が出るまでの期間の考え方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットインソールは、足元を安定させて姿勢や歩き方を整え、日常で使う筋肉を増やすことで消費エネルギーを高める『補助』です。脂肪が一気に燃えるわけではないため、即効性を期待すると挫折しがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">目安として、足の疲れにくさや姿勢の変化は使い始めて数日〜2週間、むくみの軽減は数週間、体型の印象の変化は1〜3ヶ月の継続が必要とされます。個人差が大きいため、日々の小さな変化を記録しながら続けるのがおすすめです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果が出る期間の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果が出る期間におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">毎日続けやすく、姿勢と歩行をしっかり整えるインソールが継続のカギです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">挫折しない続け方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">効果を急がず、まずは『毎日履く』習慣をつくりましょう。歩数や体重、足の疲れ具合を記録すると、小さな変化に気づけてモチベーションが続きます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">2週間ほどで足の疲れにくさや姿勢の変化を感じたら、歩く量や運動を少しずつ増やしていくと、体型の変化につながりやすくなります。</p>
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
          <p className="text-white/90 text-sm mb-5">毎日続けやすいインソールで、コツコツとボディメイクを進めましょう。</p>
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
