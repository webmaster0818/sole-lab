import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "中高生の部活にインソールは必要？【2026年】成長期の足を守る選び方",
  description:
    "毎日の部活で足を酷使する中高生へ。成長期の足の特徴と注意点、練習量との付き合い方、サイズ対応の正直な情報（21cm〜）を踏まえたインソールの選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/student-bukatsu-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "中高生の部活にインソールは必要？成長期の足を守る選び方",
  description:
    "毎日の部活で足を酷使する中高生へ。成長期の足の特徴と注意点、練習量との付き合い方、サイズ対応の正直な情報（21cm〜）を踏まえたインソールの選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "中学生でも使えますか？サイズはありますか？", "a": "足長21cm以上であればピットソールのXSから対応できます。21cm未満の場合は対応サイズがないため使用を見送ってください。成長期はサイズがすぐ変わるので、購入前に必ず足長を測りましょう。"}, {"q": "部活でかかとが痛いです。インソールで治りますか？", "a": "インソールは治療ではありません。成長期のかかとの痛みはセーバー病の可能性があり、まず練習量の調整と整形外科の受診が必要です。インソールは診断のうえで負担軽減の補助として使いましょう。"}, {"q": "競技用の高機能インソールとは何が違いますか？", "a": "競技用は特定競技の動きに特化した設計のものが多く、この記事で扱うのは日常〜部活の負担軽減を目的とした汎用タイプです。本格的な競技力向上目的なら、スポーツ用品店で足型計測を受ける選択肢もあります。"}, {"q": "毎日の練習で使うと、どのくらいもちますか？", "a": "毎日の部活で使うと消耗は早く、3〜6ヶ月程度でへたりを感じることが多いです。アーチの支えが弱くなった、クッションが潰れたと感じたら交換しましょう。"}, {"q": "通学靴と部活のシューズ、どちらに入れるべきですか？", "a": "負担の大きい部活のシューズが優先ですが、通学の歩行距離が長い場合は通学靴にもあると楽になります。通学靴・上履きへの入れ方は別記事で詳しく解説しています。"}];

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
    { "@type": "ListItem", position: 3, name: "中高生の部活", item: "https://sole-laboratory.com/articles/student-bukatsu-insole/" },
  ],
};

const points = [{"t": "足長に本当に合うサイズか確認する", "b": "この記事で紹介する製品では、ピットソールがXS〜L（21〜27.5cm）でカット調整可能です。ランウェイキュアソールは女性向けM/L（22.5〜25cm）のため男子学生には合わない場合があり、スリムアップインソールはS/Mの2サイズです。成長期は足のサイズがすぐ変わるため、買うたびに足長を測り直しましょう。"}, {"t": "競技シューズに入る厚みと安定性", "b": "部活のシューズは競技ごとにフィット感が重要です。厚すぎるインソールはシューズ内で足が動く原因になるため、元の中敷きと入れ替えられる厚みを選び、練習前に必ず試し履きをしましょう。"}, {"t": "衝撃吸収とアーチサポートのバランス", "b": "ジャンプやダッシュの多い競技では着地衝撃の吸収が、長距離を走る競技ではアーチの支えが特に重要です。柔らかいだけのものはアーチの支えになりにくいため、適度な硬さで支えるタイプが向いています。"}];
const related = [{"href": "/articles/seever-growth-pain-insole/", "label": "成長期のかかと痛（セーバー病）"}, {"href": "/articles/shin-splint-insole/", "label": "シンスプリントのインソール"}, {"href": "/articles/school-shoes-insole/", "label": "通学靴・上履きのインソール"}, {"href": "/articles/kids-insole/", "label": "子供用インソールの選び方"}];

export default function StudentBukatsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "中高生の部活" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">中高生の部活にインソールは必要？成長期の足を守る選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">毎日の練習に朝練、週末は試合——部活に打ち込む中高生の足は、大人のアスリート顔負けの負担を受けています。一方で成長期の足は骨がまだ完成しておらず、大人と同じ感覚で考えるのは危険です。成長期ならではの注意点を踏まえたインソールの選び方を解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">部活で足を酷使する中高生には、アーチサポートと衝撃吸収のあるインソールが負担軽減の補助になります。ただし大前提として、足の痛みがある場合は練習量の調整と医療機関の受診が先です。また市販インソールにはサイズの下限（例：ピットソールXS＝21cm〜）があるため、足長に合うことを必ず確認しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">成長期の部活で足に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">中高生の部活は、ランニング・ジャンプ・ダッシュなどの動作を毎日長時間繰り返すのが特徴です。成長期の骨にはまだ柔らかい成長軟骨が残っており、繰り返しの負担が集中すると、かかとの痛み（セーバー病）やすねの痛み（シンスプリント）、膝下の痛み（オスグッド）など、成長期特有のスポーツ障害につながることがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで足裏のアーチを支えて着地の衝撃をやわらげることは、毎日の練習で積み重なる負担を減らす補助になります。ただしインソールは痛みの治療ではありません。すでに痛みがある場合は、練習量を調整し、整形外科やスポーツ整形で診てもらうことが何より優先です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">中高生の部活の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">中高生の部活におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">成長期の部活には、サイズがきちんと合い、衝撃吸収とアーチサポートを備えたインソールを補助として選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">痛みがあるときは練習より受診を優先</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">運動後にかかとを押すと痛い、走り始めにすねが痛むなどの症状は、成長期特有のスポーツ障害のサインかもしれません。我慢して練習を続けると長引く原因になります。インソールでごまかさず、まず練習量を落とし、整形外科・スポーツ整形を受診してください。インソールは診断を受けたうえで、再発予防や負担軽減の補助として使うのが正しい順番です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、練習量の急な増加・硬いグラウンド・すり減ったシューズは足の負担を増やします。インソールとあわせて、シューズの状態チェックと練習後のストレッチも習慣にしましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">毎日の練習を支える足のために。成長期に合うインソールを比較しましょう。</p>
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
