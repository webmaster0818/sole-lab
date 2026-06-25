import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "タコ・魚の目にインソールは効く？【2026年】圧の偏りを分散する選び方",
  description:
    "足裏のタコ・魚の目を繰り返す方へ。タコができる原因＝荷重の偏りと、圧を分散するインソールの選び方、おすすめ3選を解説。再発を防ぎたい方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/corn-callus-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "タコ・魚の目にインソールは効く？圧の偏りを分散する選び方",
  description:
    "足裏のタコ・魚の目を繰り返す方へ。タコができる原因＝荷重の偏りと、圧を分散するインソールの選び方、おすすめ3選を解説。再発を防ぎたい方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールでタコ・魚の目は治りますか？", "a": "すでにできたタコ自体を消すものではありませんが、原因である荷重の偏りを整えることで再発を防ぐ補助になります。今あるものは皮膚科でのケアが安全です。"}, {"q": "同じ場所に何度もできます。なぜですか？", "a": "その部分に体重や摩擦が集中しているためです。アーチの崩れや合わない靴が原因のことが多く、インソールと靴の見直しで圧の集中を減らせます。"}, {"q": "魚の目は自分で削っても良いですか？", "a": "芯のある魚の目を自分で削ると傷や感染のリスクがあります。とくに糖尿病など持病のある方は皮膚科で処置を受けてください。"}];

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
    { "@type": "ListItem", position: 3, name: "タコ・魚の目", item: "https://sole-laboratory.com/articles/corn-callus-insole/" },
  ],
};

const points = [{"t": "アーチサポートで荷重を分散", "b": "タコの根本原因は荷重の偏りです。崩れたアーチを支えて足裏全体で体重を受けられる設計を選びましょう。"}, {"t": "圧が集中する部分のクッション", "b": "タコができやすい指の付け根・かかとに、衝撃と摩擦をやわらげるクッションがあるものが向いています。"}, {"t": "靴とのフィット", "b": "インソールで足が靴の中で滑ると摩擦が増えます。フィット感が出てズレにくいものを選び、サイズの合った靴と組み合わせましょう。"}];
const related = [{"href": "/articles/splay-foot-insole/", "label": "開張足のインソール"}, {"href": "/articles/high-arch-insole/", "label": "ハイアーチのインソール"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function CornCallusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "タコ・魚の目" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">タコ・魚の目にインソールは効く？圧の偏りを分散する選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足裏の同じ場所にタコや魚の目が繰り返しできる——それは、その部分に体重（圧）が集中しているサインです。インソールで荷重を足裏全体に分散すると、タコ・魚の目の再発予防の補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">タコ・魚の目は荷重の偏りが原因のことが多く、アーチを支えて圧を分散するインソールが再発予防の補助になります。削っても繰り返す・痛みが強い場合は、皮膚科や整形外科で原因を確認しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">タコ・魚の目ができる原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">タコ（胼胝）や魚の目（鶏眼）は、足裏の特定の部分に圧（体重）や摩擦が繰り返しかかることで、皮膚が自分を守ろうとして厚く硬くなる現象です。一般的に、次のような要因が重なって起こりやすいと考えられています。</p>
          <ul className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 space-y-2 list-disc pl-5">
            <li><span className="font-bold">圧（荷重）の偏り：</span>アーチの崩れ（扁平足・開張足・ハイアーチ）があると、足裏の一部に体重が集中し、その部分の皮膚が厚くなりやすくなります。</li>
            <li><span className="font-bold">摩擦：</span>サイズの合わない靴や、足が靴の中で前後左右にずれる状態が続くと、特定の場所が繰り返しこすれてタコ・魚の目の原因になります。</li>
            <li><span className="font-bold">歩き方のクセ：</span>つま先重心・外側重心など接地のバランスが偏ると、同じ場所にばかり負担がかかり続けます。</li>
          </ul>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">こうした「圧と摩擦の集中」が続く限り、表面を削るだけでは元の負担が残るため再発しやすくなります。そこでインソールの出番です。インソールはアーチを下から支えて接地のバランスを整え、一点に集まりがちな荷重を足裏全体へ分散させる役割を担います。靴の中での足のズレを抑えることで、摩擦をやわらげる助けにもなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ただし、インソールはタコ・魚の目を<span className="font-bold">「治す」治療器具ではありません</span>。あくまで原因となる圧や摩擦の偏りを軽減し、再発予防をサポートする手段として位置づけ、過度な期待をせずに取り入れることが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">タコ・魚の目の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">タコ・魚の目におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチを支えて圧を分散し、摩擦を抑えるインソールがタコ・魚の目の再発予防に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">使うときの注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを取り入れる際は、次の点に気をつけると失敗しにくくなります。まず、インソールを入れると靴の中が窮屈になり、かえって圧や摩擦が増えてしまうことがあります。サイズに少し余裕のある靴と組み合わせ、必要なら厚みの薄いタイプを選びましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、足は新しいインソールに慣れるまで時間がかかります。最初は短時間から使い始め、違和感や痛みがないかを確かめながら徐々に使用時間を延ばすのが安心です。使ってみて痛みが出る・かえって悪化する場合は無理に続けず、使用を中止してください。インソールはあくまで負担を軽減するサポートであり、効果の感じ方には個人差があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ケアと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">できてしまったタコ・魚の目は、自分で無理に削ると傷や感染の原因になります。とくに芯のある魚の目や、糖尿病など持病がある方は、自己処置を避け、皮膚科で処置を受けるのが安全です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">削っても繰り返す、痛みが強い、赤く腫れる・歩くのがつらいといった場合は、自己判断で対処を続けず、早めに皮膚科や整形外科を受診しましょう。インソールはあくまで荷重の偏りという『原因』に働きかける再発予防のサポートであり、医療的な処置に代わるものではありません。あわせて、サイズの合った靴選びと足のアーチケアを行い、必要に応じて専門家の診断を受けることをおすすめします。</p>
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
          <p className="text-white/90 text-sm mb-5">荷重を分散するインソールで、タコ・魚の目の繰り返しを防ぎましょう。</p>
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
