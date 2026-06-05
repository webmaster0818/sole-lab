import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "太もも痩せにインソールは効く？【2026年】姿勢・歩き方から考える方法",
  description:
    "太もも痩せにダイエットインソールは使える？前ももの張り・歩き方のクセとの関係、姿勢を整えるインソールの使い方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/thigh-slimming-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "太もも痩せにインソールは効く？姿勢と歩き方から考える方法",
  description:
    "太もも痩せにダイエットインソールは使える？前ももの張り・歩き方のクセとの関係、姿勢を整えるインソールの使い方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールだけで太ももは痩せますか？", "a": "インソール単独で痩せるわけではありません。姿勢や歩き方を整えて前ももへの偏りをやわらげる補助で、食事・運動と組み合わせることが大切です。"}, {"q": "前ももの張りはなぜ起こりますか？", "a": "姿勢の崩れや歩き方のクセで前ももばかり使うことが一因です。足元を安定させて蹴り出す歩き方にすると、負担の偏りがやわらぎます。"}, {"q": "どのくらい続ければ良いですか？", "a": "姿勢や歩き方の改善は継続が前提です。最低でも数週間〜数ヶ月、日常の歩行で意識しながら続けると変化を感じやすくなります。"}];

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
    { "@type": "ListItem", position: 3, name: "太もも痩せ", item: "https://sole-laboratory.com/articles/thigh-slimming-insole/" },
  ],
};

const points = [{"t": "アーチサポートで蹴り出しを助ける", "b": "土踏まずを支えると地面を蹴り出しやすくなり、前ももに頼らない歩き方の助けになります。"}, {"t": "姿勢を整える安定性", "b": "足元が安定すると骨盤の傾きが整いやすく、立ち姿・歩き姿のバランスが改善する補助になります。"}, {"t": "毎日続けられる快適さ", "b": "痩せ効果は継続が前提。長時間履いても快適で、普段の靴に入る設計を選びましょう。"}];
const related = [{"href": "/articles/leg-slimming/", "label": "脚痩せインソールの仕組み"}, {"href": "/articles/calf-slimming-insole/", "label": "ふくらはぎ痩せのインソール"}, {"href": "/articles/lower-body-diet-insole/", "label": "下半身痩せのインソール"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}];

export default function ThighSlimmingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "太もも痩せ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">太もも痩せにインソールは効く？姿勢と歩き方から考える方法</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">前ももが張って太く見える、頑張っても太ももが細くならない——その原因は、姿勢や歩き方のクセで太ももの前側ばかり使っていることかもしれません。姿勢を整えるインソールは、太もも痩せのサポートになり得ます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールだけで太ももが痩せるわけではありませんが、足元を安定させて姿勢・歩き方を整えると、前ももに偏った負担がやわらぎ、お尻や裏ももも使いやすくなります。食事・運動と組み合わせることが大切です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">太ももが張る・太く見える原因とインソール</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">前ももが張って見える原因の一つに、姿勢の崩れや歩き方のクセで太ももの前側（大腿四頭筋）ばかり使ってしまうことがあります。骨盤が後傾し、足が地面を蹴れずに前ももで引き上げる歩き方になると、前ももが発達・緊張しやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させると、地面をしっかり蹴り出す歩き方がしやすくなり、お尻や裏もも、ふくらはぎといった本来使うべき筋肉が働きやすくなります。前ももへの偏りがやわらぐと、脚のラインの印象が変わることがあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">太もも痩せの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">太もも痩せにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">姿勢と歩き方を整える、アーチサポートのしっかりしたインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">太もも痩せのための使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、かかとから着地してつま先で地面を蹴る歩き方を意識すると、前ももに頼らず脚全体を使えます。ウォーキングや日常の歩行で実践しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">太もも痩せには食事管理と下半身の運動が基本です。インソールはあくまで姿勢・歩き方を整える補助であり、単独で痩せる魔法ではありません。</p>
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
          <p className="text-white/90 text-sm mb-5">姿勢と歩き方を整えるインソールで、下半身ケアをサポートしましょう。</p>
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
