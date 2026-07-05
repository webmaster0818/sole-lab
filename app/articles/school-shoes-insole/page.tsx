import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "通学靴・上履きに合うインソールの選び方【2026年】成長期の足への配慮も",
  description:
    "毎日の通学と一日中履く上履きは、成長期の足に意外と大きな負担。薄い上履きの底を補い、通学の歩き疲れをやわらげるインソールの選び方とサイズの注意点を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/school-shoes-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "通学靴・上履きに合うインソールの選び方｜成長期の足への配慮とサイズの注意",
  description:
    "毎日の通学と一日中履く上履きは、成長期の足に意外と大きな負担。薄い上履きの底を補い、通学の歩き疲れをやわらげるインソールの選び方とサイズの注意点を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "上履きにインソールを入れても大丈夫ですか？", "a": "薄型のものなら多くの上履きに入ります。中が浅いため、入れた後に甲がきつくないか・かかとが浮かないかを確認してください。学校によっては上履きの規定があるため、事前に確認すると安心です。"}, {"q": "子どもの足のサイズが21cm未満です。使える製品はありますか？", "a": "この記事で紹介している3製品では、ピットソールの最小がXS（21cm〜）です。21cm未満の足には対応サイズがないため、無理に使わず、子ども靴専門店などでサイズに合う子ども用インソールを探すことをおすすめします。"}, {"q": "通学でかかとが痛いと言います。インソールで様子を見ていいですか？", "a": "成長期のかかとの痛みはセーバー病など成長軟骨の問題のことがあり、まず整形外科での確認をおすすめします。インソールは診断のうえで負担軽減の補助として使うのが安全です。"}, {"q": "ローファー通学の場合はどう選べばいいですか？", "a": "ローファーは甲のスペースが狭いため、より薄型を選ぶ必要があります。詳しくはローファー用インソールの記事で解説しています。"}, {"q": "インソールで身長は伸びますか？成長に影響はありますか？", "a": "インソールで身長が伸びる・成長が促進されるといった効果はありません。あくまで歩行時の負担をやわらげる補助です。誇大な宣伝をうたう製品には注意してください。"}];

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
    { "@type": "ListItem", position: 3, name: "通学靴・上履き", item: "https://sole-laboratory.com/articles/school-shoes-insole/" },
  ],
};

const points = [{"t": "足のサイズに本当に合うかを最優先", "b": "市販インソールには対応サイズの下限があります。ピットソールの最小サイズはXS（21〜22.5cm）で、カット調整も可能ですが、21cm未満の足には対応していません。大きいサイズを無理にカットして使うとアーチの位置がずれるため、足長に合う製品がない場合は使用を見送りましょう。"}, {"t": "上履きに入る薄型・カット調整できるもの", "b": "上履きは中のスペースが浅いため、厚いインソールは窮屈になります。薄型で、上履きの形に合わせてハサミでカットできるタイプを選びましょう。元の中敷きが外せる場合は外して入れ替えます。"}, {"t": "通学用とは別に、買い替え時期を意識する", "b": "成長期は足のサイズが数ヶ月単位で変わります。靴のサイズが変わったらインソールのサイズも見直しが必要です。靴だけ買い替えてインソールが小さいままだと、アーチサポートの位置が合わなくなります。"}];
const related = [{"href": "/articles/kids-insole/", "label": "子供用インソールの選び方"}, {"href": "/articles/student-bukatsu-insole/", "label": "中高生の部活のインソール"}, {"href": "/articles/seever-growth-pain-insole/", "label": "成長期のかかと痛（セーバー病）"}, {"href": "/articles/loafers-insole/", "label": "ローファーのインソール"}];

export default function SchoolShoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "通学靴・上履き" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">通学靴・上履きに合うインソールの選び方｜成長期の足への配慮とサイズの注意</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">片道20〜30分の徒歩通学に、学校では一日中上履き——生徒・学生の足は、大人が思う以上に長い時間靴の中で働いています。とくに上履きは底が薄くフラットで、足を支える機能がほとんどありません。成長期の足に配慮したインソールの選び方を解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">通学靴・上履きには、薄型でカットしてサイズを合わせられるインソールが向いています。ただし市販インソールには対応サイズの下限があり（例：ピットソールはXS＝21cm〜）、足がまだ小さいお子さんには合いません。また、かかとや足の痛みを訴える場合は成長期特有の症状の可能性があるため、まず整形外科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">通学と上履きで足に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一般的な上履きは、薄く平らな底にゴムバンドというシンプルな構造で、土踏まずを支える機能やクッション性はほとんどありません。硬い校舎の床の上でそれを一日中履き続けると、足裏への負担が積み重なります。さらに通学では、荷物の重いリュックやカバンを背負って毎日まとまった距離を歩きます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">成長期の足は骨や軟骨がまだ柔らかく、過度な負担が痛みにつながることがあります。インソールで土踏まずを支え、着地の衝撃をやわらげることは、毎日の負担を減らす補助になります。ただし、成長期の足の痛みは大人と原因が異なる場合があるため、痛みがあるときは自己判断でインソールに頼らず、医療機関での確認を優先しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">通学靴・上履きの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">通学靴・上履きにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">通学靴・上履きには、薄型でサイズ調整しやすいインソールが向いています。いずれもダイエット目的ではなく、毎日の歩行と立ち時間の負担をやわらげる補助として選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">成長期の足の痛みは受診を優先</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">運動のあとや歩き始めにかかとを痛がる場合、成長期特有のかかとの痛み（セーバー病）の可能性があります。これは成長軟骨への負担が原因で、まず運動量の調整と医療機関での確認が必要です。インソールは医師に相談のうえ、負担軽減の補助として使いましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、足の形や歩き方が気になる（極端な扁平足・よく転ぶなど）場合も、市販品で対処する前に整形外科や学校の健診で相談するのが安心です。成長期の足は変化が大きいため、定期的にサイズと状態を確認してあげてください。</p>
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
          <p className="text-white/90 text-sm mb-5">底の薄い上履きと毎日の通学路。成長期の足の負担をやわらげるインソールを比較しましょう。</p>
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
