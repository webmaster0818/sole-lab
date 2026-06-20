import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "幅広・3Eの靴のインソールの選び方【2026年】開張足・甲高幅広対応",
  description:
    "足の幅が広い・甲高で靴が窮屈な方へ。幅広3Eの靴に合うインソールの選び方、開張足・横アーチサポートのポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/wide-shoes-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "幅広・3Eの靴のインソールの選び方｜開張足・甲高幅広の足に",
  description:
    "足の幅が広い・甲高で靴が窮屈な方へ。幅広3Eの靴に合うインソールの選び方、開張足・横アーチサポートのポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "幅広の靴にもインソールは入りますか？", "a": "はい。元の中敷きと入れ替えるタイプなら、幅広の靴でも窮屈になりにくく使えます。前足部にゆとりのある設計を選びましょう。"}, {"q": "足の幅が広いのはなぜですか？", "a": "横アーチの低下による開張足が一因のことがあります。横アーチを支えるインソールは、広がりの進行を抑える補助になります。"}, {"q": "甲高でもインソールは使えますか？", "a": "薄型のインソールを選び、必要なら元の中敷きを外して厚みを調整すれば、甲高の方でも窮屈になりにくく使えます。"}, {"q": "幅広靴にインソールを入れると窮屈になりませんか？", "a": "元から入っている中敷きを取り出してから敷き直せば、足を入れるスペースは元に近く保てます。中敷きを重ねるとその分だけ容積が減るため、入れ替えて使うのが基本です。厚みが気になる場合は薄型を選ぶと圧迫を抑えられます。"}, {"q": "3Eや4Eの靴でもインソールは使えますか？", "a": "使えます。ウィズ（3E・4Eなどの足囲表記）は靴側の幅の規格で、インソールの可否を直接決めるものではありません。靴の中敷きと交換できるタイプであれば、ウィズの広い靴にも合わせやすくなります。"}];

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
    { "@type": "ListItem", position: 3, name: "幅広・3Eの靴", item: "https://sole-laboratory.com/articles/wide-shoes-insole/" },
  ],
};

const points = [{"t": "横アーチを支える中足骨パッド", "b": "開張足による足幅の広がりには、横アーチを支える中足骨パッド付きが効果的です。パッドは指の付け根の手前に位置するものを選ぶと、横アーチを直接押し上げやすくなります。"}, {"t": "前足部にゆとりのある設計", "b": "幅広の足には、前足部が狭くならない設計が必須。元の中敷きと入れ替えて厚みを調整しましょう。インソールの幅が靴より広い場合は、ふちを靴の形に合わせて少しずつカットすると、つま先や側面の当たりを減らせます。"}, {"t": "甲高の足は薄型で圧迫を避ける", "b": "甲が高い足は、厚みのあるインソールを入れると足の甲が靴の上面に当たって圧迫されやすくなります。甲高の方は薄型を基本にし、足の甲にゆとりを残せる厚みを選びましょう。クッション性とのバランスを見て調整します。"}, {"t": "縦アーチも支える総合サポート", "b": "横アーチに加え内側縦アーチも支えると足全体が安定します。3点支持の設計が理想です。"}, {"t": "素材は通気性とフィット感で選ぶ", "b": "幅広・甲高の足は靴の中で密着しやすく、蒸れやすい傾向があります。通気性のある素材や、足の形になじみやすい柔らかめの表面材を選ぶと、長時間でも快適に履きやすくなります。"}];
const related = [{"href": "/articles/splay-foot-insole/", "label": "開張足のインソール"}, {"href": "/articles/hallux-valgus-prevention/", "label": "外反母趾の予防インソール"}, {"href": "/articles/morton-disease-insole/", "label": "モートン病のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}];

export default function WideShoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "幅広・3Eの靴" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">幅広・3Eの靴のインソールの選び方｜開張足・甲高幅広の足に</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の幅が広い、甲が高い、3Eや4Eの靴を選んでいる——そんな方は、横アーチの低下（開張足）が関係していることがあります。幅広の靴に合うインソールで、足幅と疲れの悩みをケアしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">幅広・甲高の足には、横アーチを支えて足幅の広がりを抑える中足骨パッド付きのインソールが向いています。前足部にゆとりのある設計を選び、幅広の靴と組み合わせましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足の幅が広い・甲が高い原因とインソール</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足の幅が広く感じる原因の一つに、横アーチの低下による『開張足』があります。横アーチが潰れると足の前方が扇状に広がり、幅広の靴が必要になります。甲高の方も含め、足のアーチ構造が関係しています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで横アーチを支えると、足幅の広がりの進行を抑え、前足部への負担を分散できます。幅広の靴に入る設計を選べば、窮屈さを増やさずにサポートできます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">幅広・3Eの靴の選び方のポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">幅広・3Eの靴におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">横アーチを支え、前足部にゆとりのあるインソールが幅広・甲高の足に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">幅広の靴選びとあわせて</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールと同時に、3Eや4Eなど自分の足幅に合った靴を選ぶことが大切です。窮屈な靴に無理に入れると逆効果になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足幅の広がりが進む・痛みがある場合は開張足や外反母趾の可能性があるため、整形外科に相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">横アーチを支えるインソールで、幅広・甲高の足の負担を軽くしましょう。</p>
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
