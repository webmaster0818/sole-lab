import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "バレーボールに向くインソールの選び方【2026年】連続ジャンプの着地対策",
  description:
    "スパイク・ブロックで連続ジャンプを繰り返すバレーボールに向くインソールは？着地衝撃の吸収と踏み切りを支える選び方、体育館シューズでの使い方、おすすめ3選を解説。膝や足裏の負担が気になる方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/volleyball-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "バレーボールに向くインソールの選び方｜連続ジャンプの着地衝撃をやわらげる",
  description:
    "スパイク・ブロックで連続ジャンプを繰り返すバレーボールに向くインソールは？着地衝撃の吸収と踏み切りを支える選び方、体育館シューズでの使い方、おすすめ3選を解説。膝や足裏の負担が気になる方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "バレーボールにインソールは必要ですか？", "a": "必須ではありませんが、連続ジャンプの着地衝撃が膝や足裏に蓄積しやすい競技のため、クッションとアーチサポートのあるインソールは負担軽減の補助になります。練習量が多い方や硬い床の体育館で練習する方にとくに向いています。"}, {"q": "ジャンパー膝（膝の痛み）にも効果がありますか？", "a": "着地衝撃をやわらげることで膝への負担を減らす補助にはなりますが、ジャンパー膝は腱のオーバーユース障害のため、痛みがある場合は練習量の調整と整形外科での診断が優先です。"}, {"q": "バスケ用のインソールと同じで良いですか？", "a": "求められる機能は近く、兼用できることが多いです。バスケは切り返し、バレーは真上への全力ジャンプの繰り返しが中心のため、バレーではかかと・前足部のクッションをより重視すると良いでしょう。"}, {"q": "ソックス型のインソールでも使えますか？", "a": "ソックス型（ランウェイキュアソールなど）は足に直接装着するタイプで、日常の歩行・姿勢サポートが主な用途です。ジャンプや急な動きの多い競技では、シューズに収まる中敷き型のほうがズレにくく扱いやすいでしょう。"}, {"q": "体育館シューズに入れると窮屈になりませんか？", "a": "元の中敷きと入れ替えれば窮屈になりにくいです。カットできるタイプ（ピットソールはXS〜L・21〜27.5cm対応、スリムアップインソールはS・M）なら、つま先側を調整してフィットさせられます。"}];

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
    { "@type": "ListItem", position: 3, name: "バレーボール", item: "https://sole-laboratory.com/articles/volleyball-insole/" },
  ],
};

const points = [{"t": "かかとと前足部の衝撃吸収", "b": "ジャンプの着地はかかとだけでなく前足部にも衝撃がかかります。両方に弾力のあるクッションを備えたインソールを選びましょう。"}, {"t": "踏み切りを支えるアーチサポート", "b": "アーチが潰れると踏み切りの力が逃げ、足裏も疲れやすくなります。土踏まずをしっかり支える設計が向いています。"}, {"t": "体育館シューズに収まる厚みとフィット", "b": "バレーシューズは軽量でタイトな設計が多いため、厚すぎないものを。元の中敷きと入れ替えて、靴の中でズレないフィット感を確認しましょう。"}];
const related = [{"href": "/articles/basketball-insole/", "label": "バスケのインソール"}, {"href": "/articles/badminton-insole/", "label": "バドミントンのインソール"}, {"href": "/articles/futsal-insole/", "label": "フットサルのインソール"}, {"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}];

export default function VolleyballPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "バレーボール" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">バレーボールに向くインソールの選び方｜連続ジャンプの着地衝撃をやわらげる</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スパイク・ブロック・サーブと、バレーボールは1試合で何十回もジャンプを繰り返す競技です。着地のたびに大きな衝撃が足裏から膝へ伝わり、疲労が蓄積しやすくなります。クッション性とアーチサポートのあるインソールは、練習を続ける足の負担をやわらげる補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">バレーボールには、かかとと前足部の衝撃を吸収するクッションと、踏み切りの力を逃さないアーチサポートを備え、体育館シューズに収まる厚みのインソールが向いています。膝や足首に強い痛みがある場合は、まず整形外科で診てもらいましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バレーボールで足と膝に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">バレーボールの特徴は、真上への全力ジャンプを短い間隔で繰り返すことです。スパイクやブロックの着地では大きな力が一瞬で足にかかり、これが膝のオーバーユース（いわゆるジャンパー膝）や足裏・かかとの痛みの一因になるといわれます。さらにレシーブでは低い姿勢を保ち続けるため、足裏とふくらはぎにも負担がかかります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは、着地の衝撃をクッションで吸収・分散し、アーチを支えて踏み切り時の力の伝わりを安定させる補助をします。体育館の硬い床で長時間練習する人ほど、足元のクッションの差が疲労の蓄積に影響します。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バレーボールの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バレーボールにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールです。競技専用モデルではないため、激しいプレー用というより、練習用シューズや普段履きに入れて足の負担をケアする使い方がおすすめです。なおランウェイキュアソールは靴の中敷きではなく足に直接装着するソックス型のため、ジャンプの多い競技では中敷き型のピットソールやスリムアップインソールのほうが扱いやすいでしょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">体育館シューズでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">体育館シューズに入れる際は、元の中敷きを取り外して入れ替えるのが基本です。入れた直後はいきなり試合強度で使わず、軽い練習で足を慣らしましょう。カットできるタイプなら、元の中敷きを型紙にしてつま先側を少しずつ調整するとフィットします。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">膝の皿の下が痛む、着地のたびにかかとや足首が痛むなど、強い痛みや長引く痛みがある場合はオーバーユース障害の可能性があります。インソールは負担軽減の補助なので、無理をせず整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">ジャンプの多い練習を続ける足に。クッションとアーチサポートのインソールを比較してみましょう。</p>
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
