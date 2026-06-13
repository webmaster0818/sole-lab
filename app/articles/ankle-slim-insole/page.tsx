import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールで足首すっきり？【2026年】むくみケアと歩き方から見た見た目のサポート",
  description:
    "インソールで足首はすっきりする？脂肪を落とすものではないが、歩行が安定してふくらはぎが働きやすくなるとむくみケアの助けに。部分痩せは断定せず現実的な範囲と選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/ankle-slim-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールで足首すっきり？むくみケアと歩き方からのサポート",
  description:
    "インソールで足首はすっきりする？脂肪を落とすものではないが、歩行が安定してふくらはぎが働きやすくなるとむくみケアの助けに。部分痩せは断定せず現実的な範囲と選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールで足首は細くなりますか？", "a": "足首の脂肪や骨格を変える効果はなく、細くする部分痩せもできません。期待できるのは、歩行の安定でふくらはぎが働きやすくなり、むくみがたまりにくくなるサポートです。"}, {"q": "足首がすっきり見えることはありますか？", "a": "むくみがやわらぐと足首まわりがすっきり見えることはあります。ただしこれは脂肪が減るのではなく、むくみが引くことによる見た目の変化です。"}, {"q": "どうしてインソールがむくみケアに関係するのですか？", "a": "歩行が安定するとふくらはぎの筋ポンプが働きやすくなり、下半身の血液やリンパの巡りを助けます。これがむくみのたまりにくさにつながります。インソールは歩行を安定させる補助です。"}, {"q": "むくみが取れない時はどうすれば良いですか？", "a": "片足だけ急にむくむ、痛みや赤みがある、押して戻りにくい場合は病気が隠れていることがあります。むくみが続く・強い時は自己判断せず医療機関を受診してください。"}, {"q": "着圧ソックスとどちらが良いですか？", "a": "役割が違い、併用も可能です。着圧ソックスは外から圧をかけてむくみを抑え、インソールは歩行を安定させてふくらはぎを働かせます。組み合わせると相乗的にケアできます。"}];

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
    { "@type": "ListItem", position: 3, name: "足首すっきり", item: "https://sole-laboratory.com/articles/ankle-slim-insole/" },
  ],
};

const points = [{"t": "歩行を安定させるアーチサポート", "b": "ふくらはぎを働かせるには歩行の安定が鍵です。土踏まずを支えて着地を安定させる設計を選びましょう。"}, {"t": "一日履いて疲れにくいクッション", "b": "夕方のむくみケアには、日中ずっと快適に歩けることが大切。衝撃を吸収するクッション性のあるものが向いています。"}, {"t": "毎日の靴に合う汎用性", "b": "むくみケアは日々の歩行の積み重ねです。通勤や買い物など普段の靴で履ける汎用タイプを選びましょう。"}];
const related = [{"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/calf-slimming-insole/", "label": "ふくらはぎとインソール"}, {"href": "/articles/leg-slimming/", "label": "脚やせとインソール"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエットとインソール"}];

export default function AnkleSlimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "足首すっきり" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールで足首すっきり？むくみケアと歩き方からのサポート</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">『足首をすっきりさせたい』という願いにインソールは役立つのか——インソールが足首の脂肪を落とすことはありませんが、歩き方が安定してふくらはぎが働きやすくなることで、むくみのケアを助ける場合があります。現実的な範囲を正直にお伝えします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールに足首を細くする・部分痩せさせる効果はありません。期待できるのは、歩行が安定してふくらはぎの筋ポンプが働きやすくなり、夕方のむくみがたまりにくくなるサポートです。むくみが引くと足首まわりがすっきり見えることはありますが、脂肪が減るわけではない点を正直にお伝えします。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首の太さの原因と、インソールにできること</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足首まわりが太く見える原因はさまざまで、脂肪のつき方、骨格、そして『むくみ』が関係します。このうち脂肪や骨格はインソールで変えられるものではなく、足首を細くする部分痩せ効果もありません。まずこの点を正直に押さえておくことが、誇大な期待を避けるうえで大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、立ち仕事や運動不足で歩行が不安定になると、ふくらはぎの筋ポンプ（血液やリンパを押し上げる働き）が十分に使われず、夕方に足首まわりがむくみやすくなります。アーチを支えるインソールで歩行が安定すると、歩くときにふくらはぎが働きやすくなり、むくみのケアを助ける場合があります。むくみが引けば足首がすっきり見えることはあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首すっきりの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足首すっきりにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">歩行を安定させてふくらはぎを働かせやすくする、アーチサポート付きインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">むくみケアを助ける使い方とセルフケア</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで歩行を安定させつつ、こまめに歩く・かかと上げをする・着圧ソックスを併用するなどを組み合わせると、ふくらはぎのポンプ作用が働いてむくみがたまりにくくなります。インソールはあくまでこうしたケアを支える脇役です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">片足だけ急にむくむ、痛みや赤みを伴う、押すとへこんで戻りにくいといった場合は、静脈やリンパ・心臓腎臓などの病気が隠れていることがあります。むくみが続く・強い場合は自己判断せず医療機関を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">歩行を安定させてむくみケアを後押し。アーチを支えるインソールを比較しましょう。</p>
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
