import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "子供の成長期のかかと痛（セーバー病）とインソール【2026年】まず整形外科へ",
  description:
    "運動後に子供がかかとの痛みを訴える——成長期に多いセーバー病（踵骨骨端症）は、まず整形外科の受診と運動量の調整が第一選択です。インソールができる負担軽減の補助と、市販品のサイズの注意点を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/seever-growth-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "子供の成長期のかかと痛（セーバー病）とインソール｜まず整形外科へ、補助としての使い方",
  description:
    "運動後に子供がかかとの痛みを訴える——成長期に多いセーバー病（踵骨骨端症）は、まず整形外科の受診と運動量の調整が第一選択です。インソールができる負担軽減の補助と、市販品のサイズの注意点を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "子供がかかとを痛がります。すぐインソールを買うべきですか？", "a": "いいえ、まず整形外科の受診をおすすめします。セーバー病かどうかの診断と、運動量をどの程度調整すべきかの指導を受けることが先です。インソールは診断後の負担軽減の補助として、医師に相談のうえ検討しましょう。"}, {"q": "セーバー病はインソールで治りますか？", "a": "インソールでセーバー病が治るわけではありません。多くは運動量の調整と成長にともなって軽快するとされ、インソールはかかとへの衝撃をやわらげる補助です。治療方針は整形外科の指導に従ってください。"}, {"q": "子供の足は20cmですが、紹介されている製品は使えますか？", "a": "当サイトで扱う3製品はいずれも21cm未満に対応していないため、20cmの足には使えません。最小はピットソールのXSサイズで21cm〜です。サイズが合わない場合は、医療機関や子供靴専門店でお子さんの足に合う方法を相談してください。"}, {"q": "練習は完全に休ませるべきですか？", "a": "痛みの程度によって対応が異なるため、整形外科で運動量の指導を受けるのが確実です。痛みを我慢して続けると長引きやすいとされるため、自己判断で無理をさせないことが大切です。"}, {"q": "再発を防ぐためにできることはありますか？", "a": "医師の指導のもとで、ふくらはぎ・アキレス腱のストレッチ、クッション性のある靴選び、サイズの合った靴をこまめに見直すことなどが負担軽減に役立ちます。インソールはサイズが合う場合の補助手段の一つです。"}];

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
    { "@type": "ListItem", position: 3, name: "成長期のかかと痛（セーバー病）", item: "https://sole-laboratory.com/articles/seever-growth-pain-insole/" },
  ],
};

const points = [{"t": "まず受診。インソールは診断の後で", "b": "かかとを押すと痛がる、運動後に痛みを繰り返す場合は、まず整形外科で診断と運動量の指導を受けましょう。インソールの使用も、可能であれば受診時に相談したうえで取り入れるのが安心です。"}, {"t": "かかとのクッションとヒールカップ", "b": "かかとへの着地衝撃をやわらげる弾力のあるクッションと、かかとを包んで安定させるヒールカップのある設計が、患部への繰り返しの負担を減らす補助になります。"}, {"t": "子供の足にサイズが合うかを必ず確認", "b": "市販インソールは大人向け設計が中心で、小さいサイズに対応しない製品が多くあります。当サイトで扱う3製品も対応は21cm以上（最小はピットソールのXSサイズで21cm〜）のため、お子さんの足がそれ未満の場合は無理に使わず、医療機関や子供靴専門店で相談してください。"}];
const related = [{"href": "/articles/kids-insole/", "label": "子供用インソールの選び方"}, {"href": "/articles/heel-pain-insole/", "label": "かかとの痛みのインソール"}, {"href": "/articles/achilles-pain-insole/", "label": "アキレス腱炎のインソール"}, {"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール対策"}];

export default function SeeverGrowthPainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "成長期のかかと痛（セーバー病）" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">子供の成長期のかかと痛（セーバー病）とインソール｜まず整形外科へ、補助としての使い方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">サッカーや野球などの練習後に、お子さんが『かかとが痛い』と訴える——成長期（おおよそ小学生年代）のかかとの痛みで知られるのがセーバー病（シーバー病・踵骨骨端症）です。成長期特有のかかとの骨の構造に負担がかかって起こるとされ、対応の第一選択は整形外科の受診と運動量の調整です。インソールはその後の負担軽減の補助として位置づけてください。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">子供のかかとの痛みは、自己判断せずまず整形外科を受診し、診断と運動量の指導を受けることが第一選択です。そのうえで、かかとのクッションとヒールカップを備えたインソールが、復帰後や日常での衝撃をやわらげる補助になります。ただし市販インソールは小さいサイズに対応しない製品が多く、当サイトで扱う3製品も21cm未満には対応していません。足のサイズが合う場合のみ選択肢になります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">セーバー病とは？成長期のかかとに負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">セーバー病（踵骨骨端症）は、成長期の子供のかかとの骨にある成長軟骨（骨端線）の部分に、運動による衝撃やアキレス腱・足底側からの引っ張りが繰り返しかかって痛みが出る状態とされています。走る・跳ぶ動作の多いスポーツをしている小学生年代に多く、運動後や運動中にかかとを痛がる、かかとを浮かせてつま先歩きになる、といった様子が見られます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">成長期特有の構造に起因するため、対応の中心は整形外科での診断と、痛みの程度に応じた運動量の調整・休養です。多くは成長とともに軽快するとされますが、似た症状で他の原因が隠れていることもあるため、自己判断は禁物です。インソールは、かかとへの衝撃をやわらげアキレス腱側の引っ張りを少し緩める『負担軽減の補助』として、医師の指導と並行して検討するものと考えてください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">成長期のかかと痛（セーバー病）の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">成長期のかかと痛（セーバー病）におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">以下は当サイトで扱う3製品ですが、いずれも21cm未満のサイズには対応していません。お子さんの足のサイズが合う場合のみ、かかとのクッション性を目安に検討してください。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">運動量の調整とケアが主役。インソールは補助</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">セーバー病への対応の主役は、医師の指導にもとづく運動量の調整・休養と、ふくらはぎ・アキレス腱のストレッチなどのケアです。痛みがあるのに練習を続けると長引きやすいため、本人・保護者・指導者で痛みの情報を共有することが大切です。インソールはかかとへの衝撃を減らす補助で、治療の代わりにはなりません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、底が薄くかかとの硬いシューズは衝撃が伝わりやすいため、クッション性のある靴を選び、サイズアウトした靴を履き続けないことも重要です。痛みが強い・休んでも繰り返す・腫れがある場合は、必ず再度整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">お子さんの足のサイズが合う場合の選択肢として、クッション性の高いインソールを比較できます。</p>
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
