import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの効果的な使い方【2026年】正しい歩き方も解説",
  description:
    "ダイエットインソールの効果を最大化する使い方を解説。入れ方・慣らし方・正しい歩き方・続け方のコツと、やりがちなNGをまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/correct-usage-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールの効果的な使い方｜正しい歩き方と続け方",
  description:
    "ダイエットインソールの効果を最大化する使い方を解説。入れ方・慣らし方・正しい歩き方・続け方のコツと、やりがちなNGをまとめました。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ダイエットインソールは履くだけで痩せますか？", "a": "履くだけで痩せる魔法ではありません。正しい歩き方と毎日の継続、食事・運動との組み合わせで効果が高まります。"}, {"q": "元の中敷きは外すべきですか？", "a": "はい。フィットと効果を保つため、元の中敷きを外してインソールと入れ替えるのがおすすめです。サイズはカットして調整します。"}, {"q": "1日何時間履けば良いですか？", "a": "決まりはありませんが、できるだけ日常的に履くのが理想です。最初は短時間から慣らし、徐々に時間を延ばしましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "効果的な使い方", item: "https://sole-laboratory.com/articles/correct-usage-insole/" },
  ],
};

const points = [{"t": "靴に正しくフィットさせる", "b": "元の中敷きを外し、サイズに合わせてカットして入れます。ズレると効果が落ちるため、しっかりフィットさせましょう。"}, {"t": "かかと着地→蹴り出しの歩き方", "b": "かかとから着地し、足裏全体を通してつま先で地面を蹴る歩き方を意識すると、下半身を使えて効果的です。"}, {"t": "毎日続ける", "b": "効果は継続が前提。普段の靴に入れて毎日履き、まずは習慣化することが大切です。"}];
const related = [{"href": "/articles/breaking-in-insole/", "label": "インソールに慣れるまで"}, {"href": "/articles/diet-period-insole/", "label": "効果が出る期間の目安"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}];

export default function CorrectUsagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "効果的な使い方" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールの効果的な使い方｜正しい歩き方と続け方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">せっかくのダイエットインソール、ただ入れているだけでは効果が半減します。正しい入れ方・歩き方・続け方を押さえることで、姿勢改善やボディメイクのサポート効果を引き出しましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ダイエットインソールは、①靴に正しくフィットさせ、②かかと着地→蹴り出しの歩き方を意識し、③毎日続けることで効果が高まります。履くだけで痩せる魔法ではなく、正しい使い方と継続がカギです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">なぜ使い方で効果が変わるのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットインソールは、足元を安定させて姿勢・歩き方を整え、本来使うべき筋肉を働かせることで消費エネルギーを高める『補助』です。ただ入れているだけでは、歩き方のクセが残ったままで効果を引き出しきれません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴にきちんとフィットさせ、かかとから着地してつま先で蹴り出す歩き方を意識し、毎日継続することで、お尻や裏もも、ふくらはぎといった大きな筋肉が使われやすくなり、姿勢改善やボディメイクの効果が高まります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果的な使い方の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果的な使い方におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">正しい使い方を活かせる、フィット感とアーチサポートに優れたインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">やりがちなNGと対処</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが合わずズレる、慣らさずいきなり長時間履いて痛くなる、数日で諦める——これらはよくある失敗です。サイズを合わせ、最初は短時間から慣らし、最低でも1〜3ヶ月は継続しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">痛みや違和感が強い場合は無理せず使用時間を調整し、合わないと感じたら別の製品も検討してください。</p>
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
          <p className="text-white/90 text-sm mb-5">正しい使い方で効果を引き出せるインソールを選びましょう。</p>
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
