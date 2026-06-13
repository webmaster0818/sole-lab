import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "卓球に向くインソールの選び方【2026年】低い姿勢と前足部の負担対策",
  description:
    "前後左右の細かいフットワークを繰り返す卓球。低い姿勢での前足部荷重と横ステップに対応するインソールの選び方、軽量な卓球シューズに合う薄型、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/table-tennis-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "卓球に向くインソールの選び方｜低い姿勢と前足部の負担をやわらげる",
  description:
    "前後左右の細かいフットワークを繰り返す卓球。低い姿勢での前足部荷重と横ステップに対応するインソールの選び方、軽量な卓球シューズに合う薄型、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "卓球にインソールは必要ですか？", "a": "必須ではありませんが、前足部に荷重が集中する競技のため、長時間練習する方や足裏が疲れやすい方には負担軽減の補助になります。"}, {"q": "卓球シューズは薄くて軽いのですが、インソールを入れても大丈夫ですか？", "a": "薄型を選び、元の中敷きと入れ替えれば重さや窮屈さはほとんど気になりません。厚手のクッションタイプは内寸を圧迫するため避けましょう。"}, {"q": "バドミントン用のインソールと兼用できますか？", "a": "どちらも前足部荷重と細かいステップが多い競技のため、兼用しやすい組み合わせです。シューズごとの内寸の違いだけ確認しましょう。"}, {"q": "足の指の付け根が痛みます。卓球が原因ですか？", "a": "前足部に荷重が集中する競技のため負担はかかりやすいですが、痛みやしびれが続く場合はモートン病など別の原因のこともあります。整形外科で確認してください。"}, {"q": "普段履きにも同じインソールを使えますか？", "a": "使えます。日常の歩行でもアーチサポートは働くため、練習日以外も含めて足をケアしたい方は普段履きでの使用もおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "卓球", item: "https://sole-laboratory.com/articles/table-tennis-insole/" },
  ],
};

const points = [{"t": "前足部のクッション", "b": "かかと寄りではなく、つま先寄りに荷重が集中する競技です。指の付け根まわりにクッション性のあるものを選びましょう。"}, {"t": "床の感覚を損なわない薄型", "b": "細かいステップの感覚が変わらないよう、薄型で軽いものが向いています。軽量な卓球シューズの内寸も圧迫しません。"}, {"t": "横ステップでズレないフィット", "b": "左右への素早い動きで足が靴の中で滑らないよう、足裏に沿ってフィットしズレにくい設計を選びましょう。"}];
const related = [{"href": "/articles/badminton-insole/", "label": "バドミントンのインソール"}, {"href": "/articles/tennis-insole/", "label": "テニスのインソール"}, {"href": "/articles/futsal-insole/", "label": "フットサルのインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}];

export default function TableTennisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "卓球" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">卓球に向くインソールの選び方｜低い姿勢と前足部の負担をやわらげる</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">卓球は一見足への負担が少なそうに見えますが、低い姿勢を保ちながら前後左右へ細かいステップを踏み続ける競技です。荷重はつま先寄り（前足部）に集中し、体育館の硬い床で長時間練習すると足裏の疲れや痛みにつながります。卓球の動きに合ったインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">卓球には、床の感覚を損なわない薄型で、前足部のクッションと横ステップでズレないフィット感を備えたインソールが向いています。軽量な卓球シューズの内寸を圧迫しない厚みを選びましょう。足裏の強い痛みが続く場合は整形外科で確認を。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">卓球で足裏が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">卓球の基本姿勢は、膝を曲げてかかとをやや浮かせ、前足部に体重を乗せた構えです。この姿勢のまま左右のフットワークや踏み込みを繰り返すため、荷重は指の付け根まわりに集中し続けます。ラリーや多球練習が続くほど、ふくらはぎと足裏の疲労が蓄積します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また卓球シューズは、軽さと床へのグリップを優先したソールの薄い設計が多く、体育館の床の硬さが伝わりやすい面があります。インソールで前足部の衝撃をやわらげ、アーチを支えて荷重を分散すると、長時間の練習での足裏の負担を減らす補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">卓球の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">卓球におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールです。競技専用モデルではないため、練習用シューズのほか、立ち時間の長い練習日の普段履きに入れて足をケアする使い方もおすすめです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">卓球シューズでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">卓球シューズは中敷きが薄いものが多いため、元の中敷きを外して入れ替えるのが基本です。カットできるタイプは元の中敷きを型紙にして調整しましょう。入れた直後はフットワーク練習などの軽いメニューで慣らすと安心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">指の付け根の痛みやしびれが続く場合は、モートン病や種子骨のトラブルなど別の原因が隠れている可能性もあります。強い痛みがあるときは練習を控え、整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">細かいフットワークを支える足元へ。薄型でアーチを支えるインソールを比較しましょう。</p>
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
