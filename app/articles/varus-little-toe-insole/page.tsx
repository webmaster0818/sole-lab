import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "内反小趾に向くインソールの選び方【2026年】小指側の付け根の痛み対策",
  description:
    "足の小指が内側（親指側）に曲がり、小指の付け根が靴に当たって痛む内反小趾の方へ。横アーチの低下との関係と、進行を抑えるインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/varus-little-toe-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "内反小趾に向くインソールの選び方｜小指の付け根の痛みと変形対策",
  description:
    "足の小指が内側（親指側）に曲がり、小指の付け根が靴に当たって痛む内反小趾の方へ。横アーチの低下との関係と、進行を抑えるインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "内反小趾はインソールで治りますか？", "a": "すでに曲がった小指をインソールで元に戻すことはできません。横アーチを支えて小指の付け根への荷重と摩擦を減らし、痛みの軽減と進行の抑制を助けるのがインソールの役割です。変形や痛みが強い場合は整形外科に相談してください。"}, {"q": "外反母趾と内反小趾は同時に起こりますか？", "a": "はい、どちらも横アーチの低下（開張足）が背景にあるため併発しやすいといわれます。横アーチを支えるインソールと幅にゆとりのある靴は、両方の対策に共通して役立ちます。"}, {"q": "どんな靴を選べばよいですか？", "a": "つま先に1cmほどのゆとりがあり、小指の付け根が当たらない幅広の靴が基本です。先の細いパンプスや革靴は圧迫の原因になるため、履く時間を減らしましょう。"}, {"q": "小指の付け根のタコも内反小趾と関係ありますか？", "a": "小指の付け根の外側や裏にできるタコは、その部分に荷重や摩擦が集中しているサインで、内反小趾や開張足と関係していることが多いです。圧を分散するインソールと靴の見直しが再発予防の補助になります。"}, {"q": "痛みがない場合も対策すべきですか？", "a": "内反小趾は進行性のため、痛みがない軽度のうちから靴の見直しと横アーチのサポートを始めると進行抑制が期待できます。見た目の変形が気になり始めた段階が見直しのタイミングです。"}];

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
    { "@type": "ListItem", position: 3, name: "内反小趾", item: "https://sole-laboratory.com/articles/varus-little-toe-insole/" },
  ],
};

const points = [{"t": "中足骨パッドで横アーチを支える", "b": "内反小趾の背景にある横アーチの低下に対し、指の付け根の手前を持ち上げるパッドで横アーチを支えると、前足部の広がりと小指側への負担を抑える助けになります。"}, {"t": "小指側を圧迫しない前足部のゆとり", "b": "前足部が窮屈なインソール・靴は小指の付け根への圧迫を強めます。前足部が薄くゆとりのある設計を選び、靴も幅広（3E相当以上）を目安にしましょう。"}, {"t": "かかとの安定で小指側への倒れを防ぐ", "b": "足が外側に傾いて着地する癖があると小指側の負担が増えます。ヒールカップでかかとを安定させ、まっすぐ着地できる設計が向いています。"}];
const related = [{"href": "/articles/hallux-valgus-prevention/", "label": "外反母趾の予防インソール"}, {"href": "/articles/bunion-insole/", "label": "外反母趾向けインソールの選び方"}, {"href": "/articles/splay-foot-insole/", "label": "開張足のインソール対策"}, {"href": "/articles/morton-disease-insole/", "label": "モートン病のインソール"}];

export default function VarusLittleToePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "内反小趾" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">内反小趾に向くインソールの選び方｜小指の付け根の痛みと変形対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の小指が内側（親指側）に曲がり、小指の付け根の骨が外に張り出して靴に当たる——『内反小趾』は、外反母趾の小指版ともいわれる変形です。幅の狭い靴や横アーチの低下が関係し、横アーチを支えるインソールが負担軽減と進行抑制の補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">内反小趾には、指の付け根の手前を持ち上げて横アーチを支える中足骨パッド付きのインソールと、小指側を圧迫しない幅にゆとりのある靴の組み合わせが基本です。インソールは変形を元に戻すものではないため、痛みが強い・変形が進む場合は整形外科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">内反小趾の原因と横アーチの関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">内反小趾は、足の小指が付け根から内側へ曲がり、付け根の骨（第5中足骨頭）が外側に張り出した状態です。先の細い靴やサイズの合わない靴による圧迫、横アーチの低下（開張足）で足の前方が広がること、浮き指気味で小指が使えていないことなどが関係するといわれます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">張り出した付け根が靴に擦れると、痛みやタコ、赤み・腫れの原因になります。インソールで横アーチを下から支えると、足の前方の広がりを抑えて小指の付け根への偏った荷重と摩擦を減らす補助になります。外反母趾と同じく進行性の変形のため、軽いうちからの靴・インソールの見直しが有効です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">内反小趾の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">内反小趾におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">横アーチを支えて前足部の広がりを抑えるインソールが、内反小趾の負担軽減に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴の見直しと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールと同時に、先の細い靴・ヒールの高い靴を避け、つま先に余裕のある幅広の靴へ替えることが大切です。足指のグーパー運動で小指を動かす習慣も、足指を使える状態の維持に役立ちます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">小指の付け根の痛みが続く、赤く腫れる、変形が目に見えて進む場合は、整形外科を受診してください。インソールは負担軽減と進行抑制の補助であり、すでに進んだ変形を元に戻す治療ではありません。</p>
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
          <p className="text-white/90 text-sm mb-5">横アーチを支えるインソールで、小指の付け根への負担をやわらげましょう。</p>
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
