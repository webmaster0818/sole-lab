import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "スキー・スノボに向くインソールの選び方【2026年】ブーツ内の疲れ対策",
  description:
    "ブーツに固定された足が疲れる・足裏がつる・つま先が冷える——スキー・スノーボードのブーツ内環境に合うインソールの選び方、サイズ調整のコツ、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/ski-snowboard-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "スキー・スノーボードに向くインソールの選び方｜ブーツ内の足の疲れ対策",
  description:
    "ブーツに固定された足が疲れる・足裏がつる・つま先が冷える——スキー・スノーボードのブーツ内環境に合うインソールの選び方、サイズ調整のコツ、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スキーブーツ・スノボブーツにインソールを入れられますか？", "a": "多くのブーツはインナーの中敷きを取り外せるため入れ替え可能です。外した中敷きを型紙にして、カットできるインソールを調整するのが基本です。"}, {"q": "インソールを入れるとつま先の冷えはましになりますか？", "a": "アーチを支えて踏ん張りが減ると足の緊張がやわらぎますが、冷えの主因はブーツの圧迫や環境です。厚すぎるインソールはかえって圧迫して冷えを悪化させるため、薄めを選びましょう。"}, {"q": "ソックス型のインソールはブーツで使えますか？", "a": "ソックス型（ランウェイキュアソールなど）は足に直接装着する日常向けのタイプで、タイトなブーツ内では圧迫感が出ることがあります。ブーツには中敷き型をカット調整して入れるほうが扱いやすいでしょう。"}, {"q": "シーズン中しか使わないのはもったいない気がします。", "a": "中敷き型はスニーカーなど普段の靴に移して使えます。日常の歩行・姿勢サポートが本来の用途のため、オフシーズンは普段履きでの活用がおすすめです。"}, {"q": "滑っていると足の裏がつります。インソールで防げますか？", "a": "アーチが支えられず踏ん張り続けることが一因の場合、アーチサポートで負担を減らす補助になります。頻繁につる・しびれを伴う場合は、ブーツのフィッティングや体の状態を専門家に相談しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "スキー・スノーボード", item: "https://sole-laboratory.com/articles/ski-snowboard-insole/" },
  ],
};

const points = [{"t": "アーチを支えて踏ん張りを減らす", "b": "ブーツ内で足が踏ん張り続けないよう、土踏まずをしっかり支える設計を選びましょう。足裏のつり・疲れの軽減につながります。"}, {"t": "ブーツの内寸に合わせられる薄め設計", "b": "ブーツはもともとタイトです。厚すぎると圧迫して冷えや痛みの原因になるため、薄めでカット調整できるものが扱いやすいでしょう。"}, {"t": "ヒールカップでかかとを安定", "b": "かかとが安定するとブーツ内での足のズレが減り、操作も安定します。かかとを包む形状のものがおすすめです。"}];
const related = [{"href": "/articles/hiking-insole/", "label": "登山用インソール"}, {"href": "/articles/trail-running-insole/", "label": "トレイルランニングのインソール"}, {"href": "/articles/cold-feet/", "label": "冷え性対策インソール"}, {"href": "/articles/thickness-guide-insole/", "label": "インソールの厚みの選び方"}];

export default function SkiSnowboardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "スキー・スノーボード" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">スキー・スノーボードに向くインソールの選び方｜ブーツ内の足の疲れ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スキー・スノーボードは、硬いブーツに足を固定したまま長時間滑る独特の環境です。足裏のアーチが支えられていないと、ブーツの中で足が踏ん張り続けることになり、足裏のつり・疲れ・冷えにつながります。ブーツ内環境に合わせたインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">スキー・スノーボードには、アーチを支えてブーツ内で足が無駄に踏ん張らずに済む安定感と、ブーツの内寸に合わせて調整できる薄め設計のインソールが向いています。中敷きが取り外せるブーツか確認してから入れ替えましょう。足の強い痛みやしびれが続く場合は整形外科へ。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツの中で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スキーやスノーボードでは、エッジを効かせるために足裏で細かく荷重をコントロールします。アーチが支えられていないと、足は指やアーチで踏ん張り続けることになり、足裏のつりや疲れの原因になります。また足がブーツの中でわずかに動くと、操作のロスや当たりによる痛みにもつながります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを下から支えると、足裏が安定して余計な踏ん張りが減り、荷重の伝達も安定します。足とブーツの一体感は、疲れにくさと操作のしやすさの両方に関わります。なお血行を妨げるほどきついフィットは冷えを悪化させるため、適度なゆとりも大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スキー・スノーボードの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スキー・スノーボードにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールで、ウィンタースポーツ専用モデルではありません。ピットソール（XS〜L・21〜27.5cm対応）とスリムアップインソール（S・M）はカットしてサイズ調整できるため、ブーツの中敷きを型紙にして合わせやすいタイプです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツへの入れ方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まずブーツ（インナーブーツ）の中敷きが取り外せるか確認し、外した中敷きを型紙にしてカット調整してから入れ替えます。厚みが増すと足の甲やつま先が圧迫されて血行が悪くなり、冷えやしびれの原因になるため、履いた状態で圧迫感がないか必ず確認しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">滑走中や滑走後に足のしびれ・強い痛みが続く場合は、ブーツのサイズや形状が合っていない可能性や、足のトラブルが隠れている可能性があります。無理に滑り続けず、ブーツフィッティングの見直しや整形外科への相談を検討してください。</p>
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
          <p className="text-white/90 text-sm mb-5">ブーツの中の足をアーチから支えて、疲れにくいスノーシーズンを過ごしましょう。</p>
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
