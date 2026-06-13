import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "薬剤師の立ち仕事の疲れに！インソールの選び方【2026年】調剤室の立ちっぱなし対策",
  description:
    "調剤台の前でほとんど動かず立ち続ける薬剤師・医療系スタッフへ。動きの少ない立ち仕事特有のむくみ・足裏の疲れをやわらげるインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pharmacist-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "薬剤師におすすめのインソール｜調剤室の立ちっぱなし・むくみ対策",
  description:
    "調剤台の前でほとんど動かず立ち続ける薬剤師・医療系スタッフへ。動きの少ない立ち仕事特有のむくみ・足裏の疲れをやわらげるインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ほとんど歩かない立ち仕事でもインソールは効果がありますか？", "a": "あります。静止した立位では持続的な荷重でアーチが沈み込みやすく、土踏まずを支えるインソールの恩恵を受けやすい働き方です。むくみ対策には足を動かす習慣との併用が効果的です。"}, {"q": "ナースサンダルのような靴でも使えますか？", "a": "中敷きを固定できる靴なら薄型インソールで対応できる場合があります。形状的に入れにくい靴では、足に直接装着するソックス型（ランウェイキュアソールはM/L・22.5〜25cmの女性向け展開）という選択肢もあります。"}, {"q": "看護師向けのインソールと選び方は違いますか？", "a": "基本は共通ですが、看護師は歩行距離の長さ、薬剤師は静止立位の持続荷重が負担の中心です。薬剤師はクッション性よりも、沈み込みを防ぐアーチサポートの確かさを優先するのがおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "薬剤師・医療系の立ち仕事", item: "https://sole-laboratory.com/articles/pharmacist-insole/" },
  ],
};

const points = [{"t": "沈み込みを防ぐアーチサポート", "b": "静止立位の持続荷重には、土踏まずをしっかり支えて荷重を足裏全体に分散する設計が第一です。柔らかいだけのクッションは沈み込みを止められません。"}, {"t": "立ち姿勢を保ちやすい安定性", "b": "かかとが安定すると重心のブレが減り、長時間の立位でも姿勢を保ちやすくなります。腰や肩への波及的な負担を抑える助けにもなります。"}, {"t": "勤務用の靴に合わせやすい薄型", "b": "薬局やクリニックではナースサンダルやコンフォートシューズなど中の浅い靴も多いため、薄型で靴を選びにくいものが使いやすいです。"}];
const related = [{"href": "/articles/nurse-insole/", "label": "看護師のインソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function PharmacistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "薬剤師・医療系の立ち仕事" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">薬剤師におすすめのインソール｜調剤室の立ちっぱなし・むくみ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">調剤・監査・服薬指導と、薬剤師の一日は立ち時間が長い割に歩く距離は短め。調剤台の前でほとんど足を動かさずに立ち続ける時間が多く、夕方には足がむくんでだるい——そんな『静かな立ち仕事』の疲れには、それに合ったインソール選びがあります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">薬剤師には、動きの少ない立位でアーチが沈み込むのを防ぐサポート力と、立ち姿勢を楽に保てる安定性を備えたインソールが向いています。歩き回る仕事と違い『同じ場所に立ち続ける』負担が中心のため、クッションの柔らかさだけでなく支えの確かさを重視しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">薬剤師の足が疲れる理由は『動かない立ち仕事』</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">看護師のように院内を歩き回る仕事と違い、薬剤師の立ち仕事は調剤台やカウンターの前で静止している時間が長いのが特徴です。足を動かさずに立ち続けると、ふくらはぎの筋ポンプが働かず血流が滞り、むくみやだるさが出やすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、静止した立位では体重がかかと寄りの同じ場所にかかり続け、足裏のアーチがじわじわ沈み込みます。歩行のような衝撃はなくても、持続的な荷重がアーチを疲れさせるのです。この負担には、土踏まずを支えて荷重を分散するインソールと、こまめに足を動かす習慣の組み合わせが有効です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">薬剤師・医療系の立ち仕事の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">薬剤師・医療系の立ち仕事におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">動きの少ない立ち仕事の持続荷重には、アーチを支え続けられるインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">むくみをためない調剤室での過ごし方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">静止立位が中心の薬剤師は、インソールに加えて『足を動かす』工夫が効果を大きく左右します。調剤の合間にかかとの上げ下げや足踏みを数回行うだけでも、ふくらはぎの筋ポンプが働いてむくみがたまりにくくなります。むくみが強い方は着圧ソックスの併用も選択肢です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、足裏の痛みやしびれ、片足だけの強いむくみなど、ただの疲れと違う症状が続く場合は、整形外科など医療機関で相談してください。医療従事者ご自身の身体こそ、早めのケアが大切です。</p>
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
          <p className="text-white/90 text-sm mb-5">調剤室の立ちっぱなしのむくみ・疲れに。アーチを支えるインソールを比較しましょう。</p>
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
