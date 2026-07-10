import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの厚みの選び方【2026年】靴のタイプ別の目安を解説",
  description:
    "インソールの厚みはどう選ぶ？薄型・標準・厚型の違いと、革靴・スニーカー・ブーツなど靴タイプ別の目安、選び方のコツを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/thickness-guide-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの厚みの選び方｜靴のタイプ別の目安と注意点",
  description:
    "インソールの厚みはどう選ぶ？薄型・標準・厚型の違いと、革靴・スニーカー・ブーツなど靴タイプ別の目安、選び方のコツを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-10",
};

const faqs = [{"q": "インソールの厚みはどう選べば良いですか？", "a": "靴の内寸とのバランスで選びます。中が浅い革靴・安全靴は薄型、スニーカーは標準、サイズ調整やクッション重視なら厚型が目安です。"}, {"q": "厚いインソールを入れると窮屈になりますか？", "a": "靴によっては窮屈になります。元の中敷きを外して入れ替える、薄型を選ぶなどで調整しましょう。足指が動かせる余裕を残すことが大切です。"}, {"q": "薄型でもアーチサポートはありますか？", "a": "はい、薄型でもアーチサポート設計の製品があります。革靴や安全靴など中が浅い靴には、薄型でサポート力のあるものが向いています。"}, {"q": "ブーツにはどの厚みのインソールが良いですか？", "a": "内寸に余裕のあるブーツなら標準〜厚手も入りますが、履き口が固定されるタイトなブーツでは厚手は甲の圧迫につながりやすくなります。元の中敷きを外せるかを確認し、外せない場合は薄型が無難です。着脱して実際の窮屈さを確かめながら選びましょう。"}, {"q": "厚すぎるインソールを買ってしまったらどうすればいいですか？", "a": "まず元の中敷きを外して入れ替え、それでもきつい場合はカット対応の製品なら先端を少しずつ削って調整します。改善しなければ無理に使い続けず、そのインソールは内寸に余裕のある別の靴に回し、きつかった靴には薄型を選び直すのが安全です。"}];

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
    { "@type": "ListItem", position: 3, name: "厚みの選び方", item: "https://sole-laboratory.com/articles/thickness-guide-insole/" },
  ],
};

const points = [{"t": "中が浅い靴は薄型", "b": "革靴・パンプス・安全靴・スパイクなど内寸が狭い靴は、薄型でアーチサポートのあるものを選びましょう。"}, {"t": "スニーカーは標準", "b": "余裕のあるスニーカーには標準的な厚みが向き、クッションとサポートのバランスが取れます。"}, {"t": "調整・クッション重視は厚型", "b": "靴がぶかぶか・クッションを重視したい場合は厚型が有効。ただし窮屈にならないか確認を。"}];
const related = [{"href": "/articles/size-adjustment/", "label": "インソールのサイズ調整"}, {"href": "/articles/business-shoes-insole/", "label": "革靴のインソール"}, {"href": "/articles/pumps-insole/", "label": "パンプスのインソール"}, {"href": "/articles/boots-insole/", "label": "ブーツのインソール"}, {"href": "/articles/safety-shoes-insole/", "label": "安全靴のインソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function ThicknessGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "厚みの選び方" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールの厚みの選び方｜靴のタイプ別の目安と注意点</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">インソールには薄型から厚型まで様々な厚みがあります。厚すぎると靴が窮屈に、薄すぎるとサポートや調整が不十分に。靴のタイプに合った厚みの選び方を知っておきましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールの厚みは、靴の内寸とのバランスで選びます。革靴・パンプス・安全靴・スパイクなど中が浅い靴は薄型、スニーカーは標準、サイズ調整やクッション重視なら厚型が目安です。元の中敷きを外すかどうかも考慮しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厚みで何が変わるのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールの厚みは、サポート力・クッション性・靴の中の窮屈さに影響します。厚いほどクッションやサイズ調整の効果は高まりますが、靴の中が狭くなり、合わないと窮屈で痛くなります。薄いほど靴を選びませんが、サポートやクッションは控えめになります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴の内寸とのバランスが重要で、中が浅い革靴やパンプス、安全靴には薄型が、余裕のあるスニーカーには標準が向きます。元の中敷きを外して入れ替えれば、その分厚みに余裕が生まれます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厚みの選び方の選び方3つのポイント</h2>
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

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">薄型・標準・厚手の特徴と向く靴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールの厚みは大きく薄型・標準・厚手の3タイプに分けられます。明確な規格があるわけではなく、製品ごとに「薄型」「フルレングス」などの表記で示されるのが一般的です。それぞれの特徴と向く靴・用途を整理すると、次のように考えられます。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-[#f0f9ff] text-gray-900">
                  <th className="p-3 text-left border-b border-gray-200">タイプ</th>
                  <th className="p-3 text-left border-b border-gray-200">特徴</th>
                  <th className="p-3 text-left border-b border-gray-200">向く靴・用途</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border-b border-gray-200 font-medium">薄型</td><td className="p-3 border-b border-gray-200">かさばらず靴を選びにくい。クッションやサイズ調整の効果は控えめ。</td><td className="p-3 border-b border-gray-200">革靴・パンプス・安全靴・スパイクなど中が浅い靴。サポートだけ加えたいとき。</td></tr>
                <tr><td className="p-3 border-b border-gray-200 font-medium">標準</td><td className="p-3 border-b border-gray-200">サポートとクッションのバランスが取りやすい中間的な厚み。</td><td className="p-3 border-b border-gray-200">余裕のあるスニーカー・運動靴。日常使い全般。</td></tr>
                <tr><td className="p-3 font-medium">厚手</td><td className="p-3">クッション性・サイズ調整効果が高い。靴の中が狭くなりやすい。</td><td className="p-3">ぶかぶかの靴のサイズ調整、衝撃をやわらげたい用途。元の中敷きを外して使うことが多い。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">※厚みの呼び方や効果の感じ方には個人差があります。実際の厚みは各製品の表記をご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厚みとフィット感・つま先の余裕の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れると、その厚みの分だけ足の位置が持ち上がり、靴の中の空間が狭くなります。とくに甲の高さやつま先の余裕に影響しやすく、厚いものほど甲がきつく感じたり、つま先が靴の先端に当たりやすくなったりします。逆に薄型は元のフィット感をほとんど変えずにサポートだけを足せるのが利点です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フィット感を保つ目安として、立った状態でつま先が靴の先端に当たらず、足指が軽く動かせる余裕を残せているかを確認しましょう。かかとが浮く、甲が圧迫される、指先が窮屈といった場合は、厚みが合っていないサインです。元の中敷きを外して入れ替えると、その分の余裕が生まれ、厚手でも収まりやすくなります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴のサイズへの影響と選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">厚いインソールは靴の内寸を実質的に小さくするため、サイズ調整として使えます。少し大きい靴のフィットを高めたいときは厚手が役立ち、ジャストサイズの靴には薄型〜標準が無難です。これから靴を新調する場合に厚手のインソールを使う予定があるなら、その分を見込んで靴を選ぶと失敗しにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">多くのインソールはサイズ展開があり、靴やつま先の形に合わせて先端をハサミでカットして調整できるタイプもあります。購入前に対応サイズを確認し、必要に応じてカット可否もチェックしておきましょう。サイズ調整の具体的な手順は<Link href="/articles/size-adjustment/" className="text-[#e8627c] underline font-medium">インソールのサイズ調整</Link>もあわせてご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴の種類別に見る厚みの目安（一般論）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">同じ「薄型・標準・厚手」でも、靴の構造によって収まり方は大きく変わります。代表的な靴のタイプ別に、一般的な厚みの考え方を整理します。いずれも目安であり、最終的には実際に履いて窮屈さを確認してください。</p>
          <div className="space-y-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">スニーカー：標準が基本、中敷きを外せば厚手も</h3>
              <p className="text-sm text-gray-700 leading-relaxed">内寸に余裕があり、元の中敷きを取り外せるモデルが多いため、もっとも厚みの自由度が高い靴です。標準的な厚みを基本に、クッションやサイズ調整を重視する場合は中敷きと入れ替える前提で厚手も選べます。ひもで甲の高さをある程度調整できるのも利点です。詳しくは<Link href="/articles/sneaker-insole/" className="text-[#e8627c] underline">スニーカー用インソール</Link>もご覧ください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">革靴・ビジネスシューズ：薄型が無難</h3>
              <p className="text-sm text-gray-700 leading-relaxed">内寸が浅く、中敷きが接着されていて外せないものも多いため、厚手を重ねると甲やつま先がきつくなりがちです。薄型でアーチサポートのある設計を選ぶのが基本です。ひもで調整できる範囲も限られるため、購入前に中敷きが外せるかを確認しましょう。<Link href="/articles/business-shoes-insole/" className="text-[#e8627c] underline">革靴のインソール</Link>で詳しく解説しています。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">パンプス：極薄・部分タイプが中心</h3>
              <p className="text-sm text-gray-700 leading-relaxed">内寸の余裕がほとんどなく、フルレングスの厚いタイプはまず入りません。極薄タイプや、前足部だけ・かかとだけに敷くハーフ／部分タイプが現実的な選択肢です。前滑りを抑える目的なら前足部用パッドという方法もあります。<Link href="/articles/pumps-insole/" className="text-[#e8627c] underline">パンプスのインソール</Link>もあわせてご覧ください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">ブーツ：余裕次第で標準〜厚手、タイトなら薄型</h3>
              <p className="text-sm text-gray-700 leading-relaxed">筒で足首まで覆われるため着脱時の確認がしにくく、厚みの失敗に気づきにくい靴です。内寸に余裕のあるワークブーツ系なら標準〜厚手でフィットを高められますが、タイトなブーツでは薄型が無難です。冬用にはクッションと保温を兼ねる素材もあります。詳しくは<Link href="/articles/boots-insole/" className="text-[#e8627c] underline">ブーツのインソール</Link>をご覧ください。</p>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">どのタイプのインソールが自分に合うか迷う場合は、<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">6つの質問でわかるタイプ診断</Link>も参考にしてください。</p>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厚みの選び方におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">靴の内寸に合う厚みで、アーチサポートのあるインソールを選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">よくある失敗と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">厚みでよくある失敗は、サポート力を期待して厚手を選んだ結果、靴が窮屈になってしまうケースです。サポート力は必ずしも厚みに比例するわけではなく、薄型でもアーチサポート設計の製品があります。中が浅い靴には、無理に厚手を入れず薄型を選ぶ方が快適です。</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li>元の中敷きを外さずに厚手を重ねて、甲やつま先がきつくなる。</li>
            <li>左右で入れ方が違い、フィット感や歩き心地に左右差が出る。</li>
            <li>サイズが合わず先端が浮く・たわむ。カット対応の製品なら少しずつ削って調整する。</li>
            <li>窮屈なまま履き続け、痛みや疲れ、足のトラブルにつながる。</li>
          </ul>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">迷ったら、まず元の中敷きを外してインソールを入れ替え、実際に履いて窮屈さを確認しましょう。つま先や甲がきつい場合は薄型に変えるか、サイズをカットして調整します。厚手でサイズ調整をする場合も、足指が動かせる余裕を残すことが大切です。痛みや違和感が続くときは無理をせず、使用を見直しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厚みで失敗したときのリカバリー</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">「買ってみたら窮屈だった」「薄すぎて物足りない」という場合も、すぐに買い直す前にできる調整があります。次の順で試すのが一般的です。</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li><span className="font-bold">元の中敷きを外して入れ替える：</span>厚くて窮屈な場合の最初の対処です。取り外せる中敷きなら、その厚みの分だけ余裕が生まれます。</li>
            <li><span className="font-bold">カットで微調整する：</span>先端が浮く・たわむ・つま先が当たる場合は、カット対応の製品なら切りすぎないよう少しずつ削って合わせます。手順は<Link href="/articles/size-adjustment/" className="text-[#e8627c] underline">インソールのサイズ調整</Link>を参考にしてください。</li>
            <li><span className="font-bold">別の靴に回して選び直す：</span>それでも合わない場合は無理に使い続けないことが大切です。厚すぎたものは内寸に余裕のある別の靴（スニーカーやブーツなど）で活用し、その靴には薄型を選び直しましょう。薄すぎて物足りない場合は、厚みを足すよりアーチサポートやクッション素材など設計面を見直すほうが解決につながることもあります。</li>
          </ol>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">調整しても痛みや違和感が続く場合は、そのままの使用は避けてください。厚みだけでなく足と靴の相性自体に原因があることもあるため、選び直しの際は<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">タイプ診断</Link>や<Link href="/articles/how-to-choose/" className="text-[#e8627c] underline">インソールの選び方</Link>も参考にしてください。</p>
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
          <p className="text-white/90 text-sm mb-5">靴に合う厚みのインソールで、快適なフィットを実現しましょう。</p>
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
