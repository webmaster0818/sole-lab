import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "50代のダイエットにインソールは効く？【2026年】代謝低下と関節への配慮",
  description:
    "50代で痩せにくくなった方へ。加齢による代謝低下・筋力低下とインソールの関係、関節に優しく日常から取り組む方法、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/insole-50s-diet/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "50代のダイエットにインソールは効く？代謝低下と関節への配慮",
  description:
    "50代で痩せにくくなった方へ。加齢による代謝低下・筋力低下とインソールの関係、関節に優しく日常から取り組む方法、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "50代でもインソールでダイエットできますか？", "a": "インソール単体で痩せるわけではありませんが、関節に優しく姿勢・歩行を整え、日常の活動量を増やす土台づくりに役立ちます。食事の見直しと組み合わせましょう。"}, {"q": "膝が痛いのですが使えますか？", "a": "衝撃吸収性のあるインソールは膝への負担を和らげる補助になります。ただし痛みが強い場合は無理せず、整形外科に相談してください。"}, {"q": "運動が苦手でも大丈夫ですか？", "a": "はい。激しい運動でなく、日常の歩く・立つの質を高めるアプローチなので、運動が苦手な方や50代以降の方にも取り組みやすい方法です。"}];

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
    { "@type": "ListItem", position: 3, name: "50代のダイエット", item: "https://sole-laboratory.com/articles/insole-50s-diet/" },
  ],
};

const points = [{"t": "関節に優しい衝撃吸収", "b": "膝・腰に不安のある年代には、着地衝撃を吸収するクッション性が大切です。関節をいたわりながら歩けます。"}, {"t": "姿勢・歩行を整えるアーチサポート", "b": "足元を安定させて下半身を使いやすくし、日常の活動量アップを助けます。"}, {"t": "毎日無理なく続けられる", "b": "激しい運動でなく日常で取り組めるのが利点。普段の靴に入り快適なものを選びましょう。"}];
const related = [{"href": "/articles/knee-pain/", "label": "膝の痛みのインソール"}, {"href": "/articles/metabolism-insole/", "label": "基礎代謝とインソール"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}, {"href": "/articles/lower-body-diet-insole/", "label": "下半身痩せのインソール"}];

export default function Insole50sPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "50代のダイエット" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">50代のダイエットにインソールは効く？代謝低下と関節への配慮</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">50代になって若い頃より痩せにくくなった、運動はしたいけれど膝や腰が心配——そんな方に、日常の歩く・立つの中で取り組めるインソールという選択肢があります。関節に優しく代謝にアプローチする考え方を解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">50代のダイエットでは、無理な運動より日常の活動量を増やすことが続けやすく安全です。姿勢・歩行を整えるインソールは、関節に優しく下半身を使う土台づくりに役立ちます。食事の見直しとあわせて取り組みましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">50代が痩せにくい理由とインソール</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">50代になると、加齢で筋肉量が減り基礎代謝が落ちるため、若い頃と同じ生活でも体重が増えやすく、痩せにくくなります。一方で、膝や腰、股関節に不安が出てくる年代でもあり、激しい運動はかえって負担になりがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させ、姿勢・歩き方を整えると、関節への負担を抑えつつ下半身の筋肉を使いやすくなります。無理な運動でなく、日常の歩く・立つの質を高めることが、続けやすく安全なアプローチです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">50代のダイエットの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">50代のダイエットにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">関節に優しく、姿勢と歩行を整えるクッション性のあるインソールが50代に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">50代の無理しない取り組み方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、まずは毎日少し多めに歩く・階段を使うなど、日常の活動量を無理なく増やしましょう。関節に不安がある方は、痛みのない範囲で行うことが大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットには食事の見直しも欠かせません。インソールは関節に優しく日常で取り組む補助として、食事管理と組み合わせましょう。膝・腰に痛みがある場合は医師に相談を。</p>
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
          <p className="text-white/90 text-sm mb-5">関節に優しいインソールで、50代から無理なくボディメイクを始めましょう。</p>
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
