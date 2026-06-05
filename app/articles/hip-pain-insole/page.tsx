import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "股関節痛にインソールは効く？【2026年】脚長差・左右バランスから考える対策",
  description:
    "歩くと股関節が痛む方へ。脚長差や足元の崩れが股関節に与える影響と、インソールでできる負担軽減・左右バランスの補正、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/hip-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "股関節痛にインソールは効く？脚長差と左右バランスから考える対策",
  description:
    "歩くと股関節が痛む方へ。脚長差や足元の崩れが股関節に与える影響と、インソールでできる負担軽減・左右バランスの補正、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "股関節痛にインソールは効果がありますか？", "a": "歩行衝撃の吸収や足元の安定で股関節への負担を和らげる補助になります。ただし関節そのものの問題は治療が必要なため、整形外科での診断を優先してください。"}, {"q": "脚の長さが左右で違う気がします。", "a": "脚長差がある場合、インソールでの補高が有効なことがありますが、自己判断は禁物です。整形外科で計測してもらい、適切な高さを指導してもらいましょう。"}, {"q": "どんな靴と合わせるのが良いですか？", "a": "クッション性があり、かかとが安定する歩きやすい靴が向いています。ヒールの高い靴や底の薄い靴は股関節の負担を増やすため避けましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "股関節の痛み", item: "https://sole-laboratory.com/articles/hip-pain-insole/" },
  ],
};

const points = [{"t": "衝撃吸収で関節をいたわる", "b": "着地衝撃が股関節に響くため、かかとのクッション性が高いインソールが向いています。"}, {"t": "アーチサポートで歩行を安定", "b": "土踏まずを支えると足元が安定し、骨盤・股関節の余計な傾きを抑える助けになります。"}, {"t": "左右差への配慮は専門家と", "b": "脚長差が疑われる場合、自己流の補高は逆効果になりがちです。整形外科や義肢装具士の指導のもとで調整しましょう。"}];
const related = [{"href": "/articles/o-leg-insole/", "label": "O脚改善インソール"}, {"href": "/articles/pelvis-correction/", "label": "骨盤のインソール"}, {"href": "/articles/sciatica-insole/", "label": "坐骨神経痛のインソール"}, {"href": "/articles/knee-pain/", "label": "膝の痛みのインソール"}];

export default function HipPainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "股関節の痛み" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">股関節痛にインソールは効く？脚長差と左右バランスから考える対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">歩いたり立ち上がったりすると股関節（脚の付け根）が痛む——その負担には、足元の崩れや左右の脚の長さの差が関係していることがあります。インソールで衝撃をやわらげ、左右のバランスを整える補助ができる場合があります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">股関節痛は変形性股関節症などが原因のこともあり、まず整形外科での診断が大切です。そのうえで、衝撃吸収とアーチサポート、必要に応じた左右差の補正ができるインソールが、歩行時の負担軽減の補助になります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">股関節への負担と足元の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">股関節の痛みは、変形性股関節症や臼蓋形成不全など関節そのものの問題で起こることが多く、原因の特定には診察が欠かせません。一方で、歩行時の衝撃や、扁平足・脚長差による骨盤の傾きは、股関節への負担を左右どちらかに偏らせることがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでかかとからの衝撃を吸収し、アーチを支えて足元を安定させると、歩行フォームのブレが減り、股関節への偏った負担を和らげる補助になります。脚長差が明らかな場合は、専門家の指導のもとで補高を検討します。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">股関節の痛みの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">股関節の痛みにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">衝撃吸収とアーチサポートで歩行を安定させるインソールが股関節の負担軽減に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">受診を優先し、インソールは補助に</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">股関節痛は関節の問題のことが多いため、痛みが続く・歩きにくい場合は整形外科を受診してください。インソールは日常の負担を軽くする補助で、治療の代わりにはなりません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">体重管理や股関節まわりの筋力維持、長時間の立ちっぱなしを避けることも、股関節への負担軽減に役立ちます。</p>
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
          <p className="text-white/90 text-sm mb-5">クッション性とアーチサポートに優れたインソールで、歩行時の股関節の負担を軽くしましょう。</p>
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
