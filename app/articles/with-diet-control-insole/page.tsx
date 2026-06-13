import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "食事管理とインソールの併用｜【2026年】痩せる主役は食事、足元は活動を支える脇役",
  description:
    "ダイエットの食事管理とインソールはどう関係する？体重を左右するのは食事、インソールは歩行や日常活動を支える補助。両者の役割分担と現実的な活用法、選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/with-diet-control-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "食事管理とインソールの併用｜痩せる主役は食事、足元は活動を支える脇役",
  description:
    "ダイエットの食事管理とインソールはどう関係する？体重を左右するのは食事、インソールは歩行や日常活動を支える補助。両者の役割分担と現実的な活用法、選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールを履けば食べても太りにくくなりますか？", "a": "いいえ。インソールは摂取エネルギーにも消費エネルギーの量にも直接作用しません。体重管理の主役は食事です。インソールは歩行や日常活動を楽にして活動量を保つ補助とお考えください。"}, {"q": "食事管理だけでなくインソールも使う意味はありますか？", "a": "食事管理が主役であることは変わりませんが、足元が整うと歩くのが楽になり、階段を使う・歩く距離を増やすといった日常の活動を続けやすくなります。その意味で活動面の後押しになります。"}, {"q": "運動が苦手でも併用できますか？", "a": "はい。激しい運動でなくても、通勤・買い物・家事といった日常動作で活動量は保てます。足元を支えるインソールはそうした日常の動きを楽にする補助として使えます。"}, {"q": "どのくらいで体重に変化が出ますか？", "a": "インソール単体で体重が変わることはありません。変化は食事管理と活動量の積み重ねによるもので、個人差が大きいです。焦らず続けられる食習慣づくりを優先してください。"}, {"q": "食事制限中は足元のケアも必要ですか？", "a": "減量中は活動量を保つことが大切なので、足が疲れて動きたくなくなるのは避けたいところです。歩行を楽にするインソールは、活動を続けやすくする一助になります。"}];

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
    { "@type": "ListItem", position: 3, name: "食事管理との併用", item: "https://sole-laboratory.com/articles/with-diet-control-insole/" },
  ],
};

const points = [{"t": "毎日の歩行を楽にするアーチサポート", "b": "食事管理と並行して活動量を保つには、日常の歩行が苦にならないことが大切。土踏まずを支えて疲れにくくする設計を選びましょう。"}, {"t": "通勤・買い物で使える汎用性", "b": "特別な運動でなく、通勤や買い物といった日常動作で履けるタイプだと活動量を無理なく増やせます。普段の靴に合うものを。"}, {"t": "一日を通して疲れにくいクッション", "b": "活動量を保つには、夕方に足が疲れすぎないことが重要です。衝撃を吸収するクッション性のあるものが向いています。"}];
const related = [{"href": "/articles/diet-period-insole/", "label": "ダイエットで効果が出る期間"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエットとインソール"}, {"href": "/articles/metabolism-insole/", "label": "代謝とインソールの関係"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}];

export default function WithDietControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "食事管理との併用" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">食事管理とインソールの併用｜痩せる主役は食事、足元は活動を支える脇役</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットで結果を左右する最大の要因は食事管理です。では、インソールはどう関わるのか——インソールは食欲や体重に直接働きかけるものではなく、歩行や日常の活動量を支える脇役です。役割をはっきり分けて考えるのが近道です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">体重を動かす主役は食事管理（摂取エネルギーの調整）です。インソールは痩せる器具ではありませんが、足元を整えて『歩くのが億劫になりにくい』状態をつくり、日常の活動量を保つ後押しになります。食事を整えたうえで活動を支える補助、と位置づけましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">体重を決めるのは食事、インソールの役割は別にある</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットの体重変化は、摂取エネルギーと消費エネルギーの差で決まります。研究や指導の現場でも、減量に最も影響するのは食事管理だと広く言われています。インソールはこの摂取側にも、運動による消費の『量そのもの』にも直接は関与しません。まずこの事実を押さえることが、誇大な期待を避け着実に進める出発点です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールが担えるのは、歩行や立ち仕事など日常の活動を楽にすることです。足元が安定して疲れにくくなれば、エレベーターより階段、一駅歩く、といった『非運動性の活動』を続けやすくなります。食事管理で土台を作りつつ、こうした日々の活動量を保つ脇役としてインソールを使うのが現実的です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">食事管理との併用の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">食事管理との併用におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">日常の歩行を楽にして活動量を保つ、アーチサポートとクッション性を備えたインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">食事管理を主役にした併用の進め方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットの軸はあくまで食事管理です。記録アプリで摂取エネルギーを把握する、たんぱく質や野菜を意識する、極端な制限を避けるなど、続けられる食習慣づくりを最優先にしてください。インソールはその努力を活動面で支える脇役です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">『インソールを履いているから多少食べても大丈夫』という考え方は逆効果です。インソールは消費を増やす器具ではありません。食事管理と日常の活動を地道に続けることが、結局いちばんの近道になります。</p>
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
          <p className="text-white/90 text-sm mb-5">食事管理を主役に、日常の活動を支える足元づくり。アーチを支えるインソールを比較しましょう。</p>
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
