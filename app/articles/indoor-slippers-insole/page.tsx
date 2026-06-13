import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "室内・在宅ワークでのインソール活用法【2026年】スリッパや素足の時間をケアに変える",
  description:
    "在宅ワークで靴を履かない時間が長い方へ。スリッパや素足の室内時間に足のアーチをケアする方法、室内で使いやすいソックス型インソールという選択肢、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/indoor-slippers-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "室内・在宅ワークでのインソール活用法｜靴を履かない時間こそ足のケアを",
  description:
    "在宅ワークで靴を履かない時間が長い方へ。スリッパや素足の室内時間に足のアーチをケアする方法、室内で使いやすいソックス型インソールという選択肢、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スリッパにインソールを入れて使えますか？", "a": "一般的なスリッパは浅くて中敷きが固定できないため、靴用インソールの流用には向きません。室内では足に直接装着するソックス型を使うか、かかとつきでクッション性のあるルームシューズに変えるのが現実的です。"}, {"q": "在宅ワークであまり歩かないのに、足のケアは必要ですか？", "a": "歩数が少なくても、硬いフローリングでの立ち歩きや支えのないスリッパは足裏に負担をかけます。また歩かない生活が続くと足の筋力やアーチを支える力も落ちやすいため、室内でのサポートと軽い散歩の組み合わせがおすすめです。"}, {"q": "ソックス型インソールは靴下と一緒に使えますか？", "a": "ランウェイキュアソールのようなソックス型は足に直接装着するタイプで、上から靴下を重ねる使い方もできます。締め付けがきついと感じる場合は装着時間を短くして様子を見ましょう。"}, {"q": "デスクワークの足のむくみにも役立ちますか？", "a": "座りっぱなしのむくみにはまず「こまめに立って歩くこと」が基本の対策です。ソックス型でアーチを支えつつ、1時間ごとの立ち歩きやかかと上げを組み合わせると効果的です。オフィスでのデスクワーク対策は別記事でも解説しています。"}, {"q": "室内用と外出用で分けて買う必要はありますか？", "a": "必須ではありません。外出が多い方は靴用の中敷き型を優先し、在宅時間が圧倒的に長い方はソックス型を優先するなど、生活時間の長い方から揃えるのがおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "室内・在宅ワーク", item: "https://sole-laboratory.com/articles/indoor-slippers-insole/" },
  ],
};

const points = [{"t": "室内では「足に着ける」タイプが現実的", "b": "スリッパや素足では靴用の中敷きが使えません。足に直接装着するソックス型インソールなら、履き物を選ばず室内のままアーチサポートを続けられます。"}, {"t": "スリッパ・ルームシューズ自体も見直す", "b": "底が薄く平らなスリッパは足を支えません。かかとのあるルームシューズや底にクッション性のあるものに変えるだけでも、フローリングの硬さ対策になります。"}, {"t": "外出時間との組み合わせで考える", "b": "買い物や散歩など靴を履く時間には中敷き型、室内ではソックス型と、生活時間に合わせて使い分けると、一日を通して足のサポートが途切れません。"}];
const related = [{"href": "/articles/desk-work/", "label": "デスクワークのインソール"}, {"href": "/articles/cold-feet/", "label": "足の冷え対策インソール"}, {"href": "/articles/summer-mure-insole/", "label": "夏の蒸れ対策インソール"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function IndoorSlippersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "室内・在宅ワーク" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">室内・在宅ワークでのインソール活用法｜靴を履かない時間こそ足のケアを</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">在宅ワークが中心になると、一日のほとんどを素足やスリッパで過ごし、靴を履く時間が大きく減ります。「歩かないから足は楽なはず」と思いきや、フローリングの硬さや支えのない室内履きは、意外と足裏に負担をかけています。靴用の中敷きが使えない室内時間に、どう足をケアするかを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">室内では靴用インソールの出番がない代わりに、足に直接装着するソックス型なら素足・スリッパ・室内履きのままアーチをサポートできます。在宅ワークで靴を履かない時間が長い方は、「靴に入れる」発想から「足に着ける」発想への切り替えが現実的な選択肢です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">室内・在宅時間が足に負担をかける理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フローリングは屋外のアスファルト同様に硬く、クッション性がほとんどありません。素足や薄いスリッパで立ったり歩いたりすると、かかとへの衝撃や土踏まずへの荷重がダイレクトにかかります。一般的なスリッパは底が平らで足を支える構造がなく、脱げないように指先で引っかけて歩くため、外履きの靴よりむしろ足が疲れるという面もあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また在宅ワークでは、キッチンに立つ・座りっぱなしから急に立ち上がるなど、短い立ち歩きが一日中繰り返されます。一回ごとは短くても、支えのない足元で積み重なれば夕方の足の疲れやだるさにつながります。室内時間が長い人ほど、「靴を履いていない時間」の足のサポートを考える価値があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">室内・在宅ワークの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">室内・在宅ワークにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">室内・在宅シーンで特に相性が良いのは、足に直接装着するソックス型のランウェイキュアソールです。3点アーチ設計で、素足にスリッパでも、靴下の上からでも使えます。外出時の靴にはピットソール（XS〜L・カット可・特許取得のアーチサポート）やスリムアップインソール（EVA/PE素材・カット可）を入れておくと、屋内外でケアがつながります。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">在宅ワーク中の足のケアと注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ソックス型は装着したまま一日過ごすのではなく、まずは数時間から慣らして、足に合っているかを確かめましょう。あわせて、1時間に一度は立ち上がって軽く歩く、足指をグーパーと動かす、ふくらはぎを伸ばすといった小さな習慣を挟むと、座りっぱなしによる血行の滞りやだるさの対策になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">在宅期間が長くなって急に外で長距離を歩くと、足が「歩かない生活」に慣れているぶん疲れやトラブルが出やすくなります。室内でのケアと並行して、短い散歩で歩く力を保っておきましょう。足裏やかかとに痛みが続く場合は、室内生活でも足底腱膜炎などが起こり得るため、整形外科で確認してください。</p>
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
          <p className="text-white/90 text-sm mb-5">靴を履かない時間が長いあなたへ。室内でも使える足元ケアを比較してみましょう。</p>
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
