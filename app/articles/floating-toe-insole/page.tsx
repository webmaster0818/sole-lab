import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "浮き指に向くインソールの選び方【2026年】足指が接地しない原因と対策",
  description:
    "立っているとき・歩くときに足指が地面に着かない『浮き指』の方へ。指の付け根とかかとに負担が集中する仕組みと、足指を使える状態を支えるインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/floating-toe-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "浮き指に向くインソールの選び方｜足指が接地する歩きを取り戻す",
  description:
    "立っているとき・歩くときに足指が地面に着かない『浮き指』の方へ。指の付け根とかかとに負担が集中する仕組みと、足指を使える状態を支えるインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "自分が浮き指かどうか確認する方法は？", "a": "立った状態で誰かに足元を見てもらうか、足指の下に紙を差し込んでみて、スッと入るようなら浮いている可能性があります。指の付け根の裏にタコがある、靴の指先部分が減らないのもサインです。"}, {"q": "浮き指はインソールだけで改善しますか？", "a": "インソールは指が接地しやすい環境を整える補助で、それだけで治すものではありません。足指のグーパー運動・タオルギャザーなどの筋力ケアと、サイズの合った靴選びを組み合わせるのが基本です。"}, {"q": "浮き指を放置するとどうなりますか？", "a": "指の付け根とかかとに荷重が集中し続けるため、タコ・足裏の疲れ・バランスの低下につながりやすく、巻き爪や外反母趾などの足トラブルの背景になることもあります。気づいた段階で早めの対策がおすすめです。"}, {"q": "子供の浮き指にも使えますか？", "a": "子供の浮き指はまず靴のサイズ見直しと裸足での足指遊び・運動が基本です。市販インソールはサイズが合わない場合が多いため、気になるときは小児を診る整形外科に相談してください。"}, {"q": "ハイヒールをよく履きますが関係ありますか？", "a": "ヒールの高い靴はつま先に体重が集中し指を縮めやすいため、浮き指や横アーチ低下の一因になりえます。通勤や普段履きはヒールを低めにし、アーチを支えるインソールで足指が使える時間を増やしましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "浮き指", item: "https://sole-laboratory.com/articles/floating-toe-insole/" },
  ],
};

const points = [{"t": "横アーチサポートで指の付け根を支える", "b": "浮き指は横アーチの低下を伴うことが多く、指の付け根の手前を持ち上げるサポートがあると、指が前に伸びて接地しやすくなります。中足骨パッドに相当する盛り上がりのある設計を選びましょう。"}, {"t": "前足部は薄く、指の動きを邪魔しない", "b": "つま先側が厚いと靴内が窮屈になり、指を縮める癖を強めて逆効果です。前足部が薄く、足指がグーパーできる空間を保てるものが向いています。"}, {"t": "かかとの安定と重心バランス", "b": "重心がかかと寄りに崩れていると指は浮きやすくなります。ヒールカップでかかとを安定させ、かかとから指先へ体重移動しやすい設計が理想です。"}];
const related = [{"href": "/articles/ingrown-nail-insole/", "label": "巻き爪とインソールの関係"}, {"href": "/articles/splay-foot-insole/", "label": "開張足のインソール対策"}, {"href": "/articles/corn-callus-insole/", "label": "タコ・魚の目のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック方法"}];

export default function FloatingToePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "浮き指" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">浮き指に向くインソールの選び方｜足指が接地する歩きを取り戻す</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">立ったとき・歩くときに足の指が地面に着いていない『浮き指』。自覚しにくいものの、体重が指の付け根とかかとの2点に集中し、タコ・疲れ・バランスの崩れにつながりやすい状態です。アーチを支えて重心を整えるインソールは、足指が使いやすい状態をつくる補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">浮き指には、横アーチと内側縦アーチを支えて重心の後ろ寄りを整え、足指が自然に接地しやすくするインソールが向いています。前足部は薄く、足指の動きを妨げない設計が条件です。あわせて足指のグーパー運動などのケアを行い、痛みや変形がある場合は整形外科に相談しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">浮き指とは？指が浮くと何が起こるか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">浮き指は、立位や歩行時に足指（とくに小指や親指以外の指）が地面に接していない状態です。サイズの合わない靴の中で指を縮めて歩く癖、足指の筋力低下、横アーチの低下、重心がかかと寄りになる姿勢などが背景にあるといわれます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">本来、体重はかかと・親指の付け根・小指の付け根と足指で分担して支えます。指が浮くと支える面が減り、指の付け根とかかとに荷重が集中して、タコや足裏の疲れ、ふらつきの原因になります。インソールでアーチを支えて重心の偏りを整えると、足指が接地して使いやすい状態をつくる補助になります。インソール自体が浮き指を治すわけではないため、足指の運動と組み合わせるのが基本です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">浮き指の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">浮き指におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチを支えつつ前足部が薄く、足指の動きを妨げないインソールが浮き指対策に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足指の運動と靴の見直しをセットで</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは足指が使いやすい環境を整える補助です。あわせて、足指のグーパー運動やタオルギャザー（タオルを指でたぐり寄せる運動）で足指の筋力を取り戻すと効果的です。サイズの大きすぎる靴・脱げやすいサンダルは指を縮める癖の原因になるため見直しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">浮き指は巻き爪・タコ・外反母趾などのトラブルや、子供では姿勢・運動能力との関連も指摘されています。痛みや変形が出ている場合、子供の足で気になる場合は、整形外科や足の専門外来に相談してください。インソールは治療ではなく予防・負担軽減の手段です。</p>
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
          <p className="text-white/90 text-sm mb-5">足指が使える歩きへ。アーチを支えるインソールを比較してみましょう。</p>
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
