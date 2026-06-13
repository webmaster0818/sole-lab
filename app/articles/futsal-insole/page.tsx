import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "フットサルに向くインソールの選び方【2026年】切り返しと足裏の負担対策",
  description:
    "狭いコートでストップとターンを繰り返すフットサル。薄くフラットなフットサルシューズに合うインソールの選び方、母趾球の負担対策、おすすめ3選を解説。足裏が痛くなりやすい方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/futsal-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "フットサルに向くインソールの選び方｜細かい切り返しと足裏の負担対策",
  description:
    "狭いコートでストップとターンを繰り返すフットサル。薄くフラットなフットサルシューズに合うインソールの選び方、母趾球の負担対策、おすすめ3選を解説。足裏が痛くなりやすい方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "フットサルシューズにインソールは入りますか？", "a": "薄型を選び、元の中敷きと入れ替えれば多くのフットサルシューズで使えます。カットできるタイプなら、元の中敷きを型紙にしてサイズを合わせられます。"}, {"q": "サッカー用と同じインソールで良いですか？", "a": "基本的な機能は共通で兼用も可能です。フットサルは切り返しの頻度が高く床も硬いため、薄さ・ズレにくさ・前足部の荷重分散をより重視しましょう。"}, {"q": "足の親指の付け根が痛くなります。インソールで防げますか？", "a": "母趾球への荷重集中は、アーチサポートで分散する補助ができます。ただし痛みが続く場合は種子骨炎などの可能性もあるため、整形外科で確認してください。"}, {"q": "ソックス型のインソールはフットサルに使えますか？", "a": "ソックス型（ランウェイキュアソールなど）は足に直接装着する日常向けのタイプです。急なストップやターンが多いフットサルでは、シューズに収まる中敷き型のほうがズレずに扱いやすいでしょう。"}, {"q": "インソールを入れると床やボールの感覚は変わりますか？", "a": "薄型であれば影響は小さめですが、入れた直後は感覚が変わります。軽い練習から慣らして、違和感がないことを確認してからゲームで使いましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "フットサル", item: "https://sole-laboratory.com/articles/futsal-insole/" },
  ],
};

const points = [{"t": "シューズを圧迫しない薄型", "b": "フットサルシューズは内寸が狭くタイトです。薄型でアーチサポートのあるタイプを選び、元の中敷きと入れ替えて使いましょう。"}, {"t": "切り返しでズレないフィット感", "b": "ターンのたびに足が靴の中で滑ると、踏ん張りが効かずマメや爪のトラブルの原因にもなります。足裏に沿ってズレにくいものを選びましょう。"}, {"t": "母趾球まわりの荷重分散", "b": "縦・横のアーチを支えて、踏ん張りで母趾球に集中する荷重を足裏全体に分散できる設計が向いています。"}];
const related = [{"href": "/articles/soccer-insole/", "label": "サッカーのインソール"}, {"href": "/articles/volleyball-insole/", "label": "バレーボールのインソール"}, {"href": "/articles/basketball-insole/", "label": "バスケのインソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用の違い"}];

export default function FutsalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "フットサル" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">フットサルに向くインソールの選び方｜細かい切り返しと足裏の負担対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">フットサルはサッカーより狭いコートで、ストップ・ターン・短いダッシュを高い頻度で繰り返す競技です。ソールが薄くフラットなフットサルシューズは床の硬さが足裏に伝わりやすく、足裏や指の付け根の痛みにつながることも。フットサルの動きに合ったインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">フットサルには、シューズの内寸を圧迫しない薄型で、切り返しで足がズレないフィット感と、母趾球（親指の付け根）まわりの荷重を分散するアーチサポートを備えたインソールが向いています。足裏に強い痛みが続く場合は整形外科で確認しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フットサルで足裏に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フットサルのコートはサッカーよりずっと狭く、その分ストップ・ターン・方向転換の回数が多くなります。切り返しのたびに母趾球（親指の付け根）で強く踏ん張るため、前足部に荷重が集中しやすいのが特徴です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">またフットサルシューズは、ボールタッチと床へのグリップを優先した薄くフラットなソールが主流で、屋内コートの硬さが足裏に直接伝わりがちです。インソールでアーチを支えて荷重を分散すると、足裏の一点に負担が集中するのを抑える補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フットサルの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フットサルにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールです。競技専用モデルではないため、プレー用シューズに加えて、練習の行き帰りや普段履きで足をケアする使い方も含めて検討しましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フットサルシューズでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">元の中敷きを外して入れ替え、つま先が当たらないかを確認します。カットできるタイプは元の中敷きを型紙にして少しずつ調整しましょう。入れた直後は感覚が変わるため、軽い練習で足を慣らしてからゲームに使うのが安全です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">指の付け根の痛みやしびれが続く場合は、種子骨炎やモートン病など別の原因が隠れていることもあります。強い痛みがあるときは無理にプレーを続けず、整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">切り返しの多いフットサルの足裏に。薄型でアーチを支えるインソールを比較しましょう。</p>
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
