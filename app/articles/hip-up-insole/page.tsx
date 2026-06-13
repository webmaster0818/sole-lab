import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールでヒップアップは可能？【2026年】姿勢・歩き方から見た見た目の変化",
  description:
    "インソールでヒップアップできる？お尻の筋肉を直接鍛えるものではないが、姿勢や歩き方が整うと見た目の印象が変わることはある。部分痩せは断定せず、現実的な範囲と選び方を正直に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/hip-up-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールでヒップアップは可能？姿勢・歩き方から見た見た目の変化",
  description:
    "インソールでヒップアップできる？お尻の筋肉を直接鍛えるものではないが、姿勢や歩き方が整うと見た目の印象が変わることはある。部分痩せは断定せず、現実的な範囲と選び方を正直に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールでお尻は引き締まりますか？", "a": "インソールにお尻を直接引き締めたり部分痩せさせたりする効果はありません。足元が安定して姿勢が整うことで、後ろ姿の印象が変わる範囲とお考えください。お尻そのものを変えるには筋トレが必要です。"}, {"q": "ヒップアップしたい場合、何をすれば良いですか？", "a": "お尻の見た目を変えるにはヒップ周りの筋トレ（スクワットやヒップリフトなど）が主役です。インソールは姿勢・歩行を支える脇役として、それらを後押しする位置づけになります。"}, {"q": "姿勢が整うとお尻の見え方は変わりますか？", "a": "骨盤が安定し猫背や反り腰がやわらぐと、後ろ姿の印象が変わることがあります。これはお尻が小さくなるのではなく、姿勢を通じた見た目の変化です。"}, {"q": "どんなインソールが姿勢のサポートに向いていますか？", "a": "土踏まずを支えるアーチサポートと、かかとを安定させるヒールカップのあるものが向いています。足元が安定すると姿勢を保ちやすくなります。"}, {"q": "『ヒップアップインソール』という商品は効果がありますか？", "a": "商品名にかかわらず、インソールが部分痩せや筋肉増強を起こすことはありません。期待できるのは姿勢・歩行のサポートまでで、見た目を変えたい場合は筋トレと併用しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "ヒップアップ", item: "https://sole-laboratory.com/articles/hip-up-insole/" },
  ],
};

const points = [{"t": "骨盤・姿勢を支えるアーチサポート", "b": "姿勢を通じた見た目の変化を狙うなら、土踏まずを支えて足元を安定させ、骨盤の傾きを保ちやすくする設計を選びましょう。"}, {"t": "歩行が安定するヒールカップ", "b": "かかとが安定すると歩き方のブレが減り、立ち姿・歩き姿が整いやすくなります。後足部を包む設計が向いています。"}, {"t": "毎日履ける快適さ", "b": "姿勢の習慣づくりには継続が必要です。日常の靴で無理なく履ける快適なものを選びましょう。"}];
const related = [{"href": "/articles/posture-correction/", "label": "姿勢改善インソール"}, {"href": "/articles/pelvis-correction/", "label": "骨盤と姿勢のインソール"}, {"href": "/articles/lower-body-diet-insole/", "label": "下半身ダイエットとインソール"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}];

export default function HipUpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ヒップアップ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールでヒップアップは可能？姿勢・歩き方から見た見た目の変化</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">『インソールでヒップアップ』と聞くと期待が膨らみますが、インソールはお尻の筋肉を直接鍛えたり脂肪を落としたりするものではありません。ただし、姿勢や歩き方が整うことで後ろ姿の印象が変わることはあります。現実的な範囲を正直にお伝えします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールにお尻を引き締める・部分痩せさせるといった直接の効果はありません。期待できるのは、足元が安定して骨盤・姿勢が整い、立ち姿や歩き方の印象が変わる範囲です。お尻そのものを変えたいなら、ヒップ周りの筋トレが主役で、インソールは姿勢を支える脇役になります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールとお尻の見た目の関係を正直に</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">お尻の形は主に筋肉量と脂肪のつき方で決まり、これを変えるにはヒップ周りの筋トレや全身の体組成の変化が必要です。インソールが特定の部位の脂肪を落とす『部分痩せ』を起こすことはなく、お尻の筋肉を直接鍛えるものでもありません。この点は誤解されやすいので、はっきりお伝えしておきます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で、足元が不安定だと骨盤が前後に傾いたり、猫背気味になって後ろ姿の印象が損なわれることがあります。アーチを支えるインソールで足元が安定すると、骨盤や姿勢を保ちやすくなり、立ち姿や歩き方が整って後ろ姿の印象が変わることがあります。これは『お尻が小さくなる』のではなく、姿勢を通じた見た目の変化です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ヒップアップの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ヒップアップにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足元を安定させて骨盤・姿勢を支える、アーチサポートとヒールカップのあるインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">見た目を変えたいときの現実的な進め方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">後ろ姿やお尻の見た目を本当に変えたいなら、スクワットやヒップリフトなどお尻周りの筋トレが主役です。インソールは姿勢を支える脇役として、トレーニングや日常の立ち・歩きを後押しする位置づけで活用してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">『インソールでヒップアップ』『お尻が引き締まる』といった断定的な表現には注意が必要です。インソールにできるのは姿勢・歩行のサポートを通じた見た目の印象の変化までで、部分痩せや筋肉増強の効果はうたえません。</p>
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
          <p className="text-white/90 text-sm mb-5">足元を安定させて姿勢を整える。立ち姿・歩き姿を支えるインソールを比較しましょう。</p>
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
