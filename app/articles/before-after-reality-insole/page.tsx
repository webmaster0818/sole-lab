import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールのビフォーアフターの現実【2026年】写真の見方と正しい期待値",
  description:
    "ダイエットインソールのビフォーアフター写真は信じていい？劇的な変化をうたう画像の注意点と、インソールで現実的に期待できる変化を正直に解説。誇大広告に惑わされないための知識。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/before-after-reality-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールのビフォーアフターの現実｜写真の見方と正しい期待値",
  description:
    "ダイエットインソールのビフォーアフター写真は信じていい？劇的な変化をうたう画像の注意点と、インソールで現実的に期待できる変化を正直に解説。誇大広告に惑わされないための知識。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ビフォーアフター写真は信じても良いですか？", "a": "写真は姿勢・照明・服装で印象が変わるため、それだけで効果を判断するのは避けましょう。本当の変化があっても、食事管理や運動の影響を含むのが普通で、インソール単体の成果とは限りません。"}, {"q": "インソールでビフォーアフターのように体型は変わりますか？", "a": "インソール単体で短期に体型が劇的に変わることはありません。期待できるのは姿勢・歩行の安定や足の疲れにくさで、体型の変化は運動・食事管理と併用して長期で見るものです。"}, {"q": "なぜこのサイトはビフォーアフター画像を載せないのですか？", "a": "根拠の不確かな画像や誤解を招く加工は、正しい期待値を妨げると考えるためです。私たちはインソールを姿勢・歩行を支える補助として正直にご紹介することを大切にしています。"}, {"q": "『履くだけで痩せる』という商品は本当ですか？", "a": "履くだけで痩せると断定する表現には根拠がなく、注意が必要です。インソールは運動・食事管理を支える脇役であり、それ単体で痩せる器具ではありません。"}, {"q": "現実的にはどんな変化が期待できますか？", "a": "足が疲れにくくなる、歩くのが楽になる、立ち姿勢が安定するといった変化が中心です。これらが活動量の維持を助け、運動・食事管理と組み合わさって長期的な体型変化の土台になります。"}];

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
    { "@type": "ListItem", position: 3, name: "ビフォーアフターの現実", item: "https://sole-laboratory.com/articles/before-after-reality-insole/" },
  ],
};

const points = [{"t": "『見た目』でなく機能で選ぶ", "b": "ビフォーアフター画像の派手さではなく、アーチサポートやクッション性など、足元を支える機能で選ぶのが失敗しないコツです。"}, {"t": "継続して使える快適さを重視", "b": "現実的な変化は継続から生まれます。毎日無理なく履ける快適さ・フィット感のあるものを選びましょう。"}, {"t": "運動・食事と併用する前提で選ぶ", "b": "体型を変えたいなら主役は運動と食事管理。それを支える脇役として、日常を楽にしてくれるインソールを選びましょう。"}];
const related = [{"href": "/articles/one-month-result-insole/", "label": "1ヶ月でどこまで変わる？"}, {"href": "/articles/insole-truth/", "label": "インソールの本当のところ"}, {"href": "/articles/insole-expectations/", "label": "インソールに期待できること"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}];

export default function BeforeAfterRealityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ビフォーアフターの現実" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールのビフォーアフターの現実｜写真の見方と正しい期待値</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ネットで見かける『インソールでこんなに変わった』というビフォーアフター。魅力的に見えますが、インソール単体で短期間に体型が劇的に変わることはありません。この記事では、そうした画像の見方と、現実的に期待できることを正直にお伝えします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">派手なビフォーアフター画像は、撮影条件（姿勢・光・服装）や他のダイエット努力の影響を含むことが多く、インソールだけの成果とは限りません。インソールで現実的に期待できるのは、姿勢・歩行の安定や足の疲れにくさ。体型の変化は運動・食事管理と併用して長期で見るものです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビフォーアフター画像で起こりがちなこと</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ビフォーアフター写真は、立ち方・姿勢・撮影角度・照明・服装を変えるだけでも印象が大きく変わります。お腹を引っ込める、姿勢を正す、明るさを変えるといった工夫で『痩せて見える』写真は作れてしまうため、画像だけで効果を判断するのは危険です。当サイトでは、こうした誤解を招く加工や、根拠のないビフォーアフターは掲載しません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、本当に体型が変わった場合でも、それはインソール単体ではなく、同時期に行った食事管理・運動・生活習慣の改善が大きく寄与しているのが普通です。インソールはあくまで姿勢・歩行を支える脇役であり、『これを履いただけで変わった』という説明は実態と異なることが多い、と理解しておきましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビフォーアフターの現実の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビフォーアフターの現実におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">派手な画像ではなく、姿勢・歩行を支える機能で選べる実在のインソールを比較するのがおすすめです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">誇大広告に惑わされないために</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">『履くだけで激痩せ』『1週間でこの変化』といった表現や、出どころの不確かなビフォーアフター画像には注意してください。インソールは姿勢・歩行をサポートし、運動・食事管理を続けやすくする補助であって、それ単体で短期に体型を変える道具ではありません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">現実的な期待値を持つことは、遠回りを避ける近道でもあります。インソールで足元を整え、ウォーキングや食事の見直しを地道に続けることが、結局いちばん確かな変化につながります。</p>
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
          <p className="text-white/90 text-sm mb-5">画像の派手さでなく機能で選ぶ。姿勢・歩行を支えるインソールを比較しましょう。</p>
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
