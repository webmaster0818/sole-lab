import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "かかとの角質・ガサガサにインソールは関係ある？【2026年】摩擦と荷重から考える",
  description:
    "かかとの角質が硬くなる・ガサガサ・ひび割れに悩む方へ。乾燥だけでなく摩擦と荷重の偏りも角質を厚くする原因。保湿ケアとあわせたインソールの補助的な使い方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/heel-skin-care-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "かかとの角質・ガサガサにインソールは関係ある？摩擦と荷重から考える対策",
  description:
    "かかとの角質が硬くなる・ガサガサ・ひび割れに悩む方へ。乾燥だけでなく摩擦と荷重の偏りも角質を厚くする原因。保湿ケアとあわせたインソールの補助的な使い方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールでかかとの角質は取れますか？", "a": "いいえ、インソールが角質を取り除くことはありません。角質が厚くなる原因の一つである摩擦・荷重の集中を減らし、保湿ケアの効果を保ちやすくする補助です。すでに厚い角質は保湿と適度なケアで整えましょう。"}, {"q": "毎年かかとがひび割れます。インソールは役立ちますか？", "a": "ひび割れの背景には乾燥に加えて荷重と摩擦の刺激があります。保湿を徹底したうえで、かかとを安定させるインソールで刺激を減らすと、繰り返しにくい環境づくりの補助になります。深いひび割れで痛む場合は皮膚科で相談してください。"}, {"q": "削っても削ってもガサガサが戻ります。なぜですか？", "a": "削りすぎは皮膚の防御反応を強め、かえって角質を厚くすることがあります。また、かかと水虫（角質増殖型）はガサガサが治りにくい原因として知られています。保湿しても改善しない場合は皮膚科で原因を確認しましょう。"}, {"q": "タコ・魚の目とかかとの角質は同じ対策で良いですか？", "a": "どちらも圧・摩擦への防御反応という点は共通ですが、タコ・魚の目は足裏の一点に圧が集中してできるのに対し、かかとの角質は乾燥と広い面への荷重・摩擦が主因です。タコ・魚の目については別記事で詳しく解説しています。"}, {"q": "ストッキングや靴下に引っかかるのが気になります。", "a": "角質が引っかかる状態は乾燥が進んだサインです。入浴後の保湿を毎日続け、靴の中でかかとが擦れないようフィットする靴とインソールを組み合わせると、ガサガサの悪化を防ぎやすくなります。"}];

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
    { "@type": "ListItem", position: 3, name: "かかとの角質・ガサガサ", item: "https://sole-laboratory.com/articles/heel-skin-care-insole/" },
  ],
};

const points = [{"t": "ヒールカップでかかとの横ずれを防ぐ", "b": "靴の中でかかとが動くたびに摩擦が生まれ、角質を厚くする刺激になります。かかとを深く包むヒールカップでフィットさせ、擦れを減らしましょう。靴のかかとが浮かないサイズ選びも重要です。"}, {"t": "かかとのクッションで圧の集中をやわらげる", "b": "かかとへの強い衝撃と荷重の集中は皮膚の防御反応を促します。かかと部に弾力のあるクッションを備えたインソールで、着地の負担を分散しましょう。"}, {"t": "素材の肌当たりと清潔さ", "b": "かかとの肌が敏感になっているときは、表面が滑らかで擦れにくい素材が安心です。抗菌防臭加工や洗える素材だと、靴内を清潔に保ちやすく肌トラブルの予防にも役立ちます。"}];
const related = [{"href": "/articles/corn-callus-insole/", "label": "タコ・魚の目のインソール対策"}, {"href": "/articles/heel-pain-insole/", "label": "かかとの痛みのインソール"}, {"href": "/articles/foot-fatigue-insole/", "label": "足のだるさ・疲れの対策"}, {"href": "/articles/insole-care/", "label": "インソールのお手入れ方法"}];

export default function HeelSkinCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "かかとの角質・ガサガサ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">かかとの角質・ガサガサにインソールは関係ある？摩擦と荷重から考える対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">かかとの角質が硬く分厚くなる、ガサガサしてストッキングが引っかかる、ひどいとひび割れる——その原因は乾燥だけではありません。歩くたびにかかとへかかる摩擦と荷重の偏りも、皮膚が防御反応で厚くなる一因です。保湿ケアを主役に、インソールはかかとへの摩擦・衝撃を減らす補助として使えます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">かかとの角質ケアの基本は保湿（尿素配合クリームなど）と無理に削りすぎないことです。そのうえで、ヒールカップでかかとを安定させて靴内の摩擦を減らし、クッションで荷重の集中をやわらげるインソールが、角質が厚くなる刺激を減らす補助になります。ひび割れて痛い・出血する、水虫が疑われる場合は皮膚科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとの角質が厚く・ガサガサになる原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">かかとの皮膚は皮脂腺が少なく乾燥しやすいうえ、体重を受け止める部位のため、摩擦や圧力という刺激から身を守ろうとして角質が厚くなります。サイズの合わない靴の中でかかとが擦れる、かかと着地の衝撃が強い、立ち仕事で荷重がかかり続ける、素足でサンダルを履く季節の乾燥なども角質を厚くする要因です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールができるのは、このうち『摩擦と荷重』への対策です。ヒールカップでかかとを包んで靴の中の横ずれを減らし、クッションで着地の衝撃と圧の集中をやわらげると、角質が厚くなる刺激そのものを減らす補助になります。すでに厚くなった角質は保湿ケアが主役で、インソールが角質を取り除くわけではありません。ひび割れが深く痛む場合や、ガサガサの原因がかかと水虫（角質増殖型）のこともあるため、治らない場合は皮膚科で確認しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとの角質・ガサガサの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">かかとの角質・ガサガサにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">かかとを安定させて摩擦と衝撃を減らすインソールが、角質ケアの補助に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">保湿ケアが主役。インソールは刺激を減らす補助</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">角質ケアの基本は、入浴後に尿素やワセリンなどの保湿剤を塗る習慣です。やすりで削る場合は削りすぎに注意してください。削りすぎは皮膚の防御反応でかえって角質を厚くすることがあります。インソールはかかとへの摩擦・衝撃という刺激を減らし、ケアの効果を保ちやすくする補助の位置づけです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">保湿しても改善しない、ひび割れが深く痛い・出血する、皮がむける・かゆみがあるという場合は、角質増殖型の水虫や湿疹など皮膚の病気が隠れていることがあります。自己判断で削り続けず、皮膚科を受診してください。糖尿病のある方は足の傷が悪化しやすいため、かかとのひび割れも早めに相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">かかとの摩擦と衝撃を減らすインソールを、保湿ケアの相棒に。</p>
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
