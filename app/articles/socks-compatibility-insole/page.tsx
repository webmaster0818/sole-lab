import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールと靴下の相性ガイド【2026年】5本指ソックス・厚手・ストッキング別",
  description:
    "インソールの効果は靴下で変わる？厚手靴下・5本指ソックス・ストッキング・素足それぞれの相性と注意点、ソックス型インソールと靴下の関係まで解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/socks-compatibility-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールと靴下の相性ガイド｜5本指ソックス・厚手・ストッキング別の注意点",
  description:
    "インソールの効果は靴下で変わる？厚手靴下・5本指ソックス・ストッキング・素足それぞれの相性と注意点、ソックス型インソールと靴下の関係まで解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールは素足と靴下、どちらで使うのが正解ですか？", "a": "中敷きタイプは靴下着用での使用が一般的です。素足だと汗や皮脂が直接付着して劣化やニオイが進みやすくなります。フィット確認は実際に合わせる靴下で行いましょう。"}, {"q": "厚手の靴下だとインソールの効果は落ちますか？", "a": "アーチサポートの感触は厚みの分マイルドになり、靴内の容積も圧迫されます。効果がゼロになるわけではありませんが、きつさを感じるなら靴下を薄手にするか、靴に余裕を持たせてください。"}, {"q": "5本指ソックスとインソールは併用できますか？", "a": "併用できます。足指が独立して動かしやすい5本指ソックスは、アーチサポート系インソールと相性が良い組み合わせです。つま先の生地が増える分、靴の余裕だけ確認しましょう。"}, {"q": "ストッキングでもインソールを使えますか？", "a": "使えますが、滑りやすい素材のため足がインソール上でずれやすくなります。パンプス用の薄型を選ぶ、滑り止め付きのフットカバーを併用するなど、ずれ対策をすると快適です。"}, {"q": "ソックス型インソールの上に靴下を履いてもいいですか？", "a": "製品によって推奨される着用方法が異なるため、公式の案内に従ってください。重ね方によっては圧迫やずれの原因になります。購入前に装着方法を確認しておくと安心です。"}];

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
    { "@type": "ListItem", position: 3, name: "靴下派・5本指ソックス派", item: "https://sole-laboratory.com/articles/socks-compatibility-insole/" },
  ],
};

const points = [{"t": "いつも履く靴下の厚みを基準にフィットを確認", "b": "インソール選び・サイズ調整は、実際に合わせる靴下を履いた状態で行いましょう。仕事で厚手、休日は薄手など使い分けるなら、よく使う組み合わせを基準にします。"}, {"t": "滑りにくく蒸れにくい素材の靴下を合わせる", "b": "綿やウール混など吸湿性のある靴下は、足裏のずれと蒸れの両方を抑えられます。ストッキングで使う場合は、足がずれないか・かかとが浮かないかを入念に確認しましょう。"}, {"t": "5本指ソックスは足指の使いやすさで好相性", "b": "5本指ソックスは足指が独立して動かしやすく、地面をつかむ感覚を妨げにくいため、アーチサポート系インソールとの併用に向いています。ただしつま先部分の生地が増える分、靴の捨て寸に余裕があるか確認を。"}];
const related = [{"href": "/articles/summer-mure-insole/", "label": "夏の蒸れ対策インソール"}, {"href": "/articles/thickness-guide-insole/", "label": "インソールの厚みの選び方"}, {"href": "/articles/deodorize-insole/", "label": "インソールの防臭・消臭ケア"}, {"href": "/articles/correct-usage-insole/", "label": "ダイエットインソールの効果的な使い方"}];

export default function SocksCompatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "靴下派・5本指ソックス派" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールと靴下の相性ガイド｜5本指ソックス・厚手・ストッキング別の注意点</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">同じインソールでも、合わせる靴下によってフィット感は意外なほど変わります。厚手の靴下でアーチサポートの感触が鈍くなったり、滑りやすいストッキングで足がずれたり。インソールの性能を引き出すには、靴下との組み合わせにも目を向けましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールは「いつも履く靴下」とセットでフィットを確認するのが基本です。厚手靴下は容積を圧迫しサポートの感触を弱め、滑りやすい素材は足のずれの原因になります。5本指ソックスは足指を使いやすくインソールとの相性は良好ですが、つま先の厚みが増す分、靴の余裕は確認を。ソックス型インソールの場合は装着方法が中敷きタイプと異なるため、公式の案内に従ってください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴下でインソールのフィットが変わる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールのアーチサポートは、足裏とインソールが適切に密着してはじめて機能します。間に挟まる靴下が厚いほどサポートの感触はマイルドになり、逆に薄いほどダイレクトに伝わります。「店で素足に近い状態で試したら良かったのに、厚手の靴下で履いたら印象が違う」というのは典型的なミスマッチです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、靴下の滑りやすさも重要です。ナイロン系のストッキングやツルツルした化繊靴下は足裏がインソール上で滑りやすく、せっかくのサポート位置から足がずれてしまうことがあります。汗をかく季節は吸湿性の低い靴下だと蒸れやニオイも進みやすくなるため、素材選びはフィットと衛生の両方に効いてきます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴下派・5本指ソックス派の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴下派・5本指ソックス派におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">中敷きタイプは靴下の厚みごとのフィット確認を。ソックス型は装着方法そのものが異なる点に注意しましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ソックス型インソールと靴下の関係｜注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ランウェイキュアソールのようなソックス型インソールは、中敷きとして靴に入れるのではなく足に直接装着するタイプです。靴下のように足に履いて使う設計のため、「インソールと靴下の相性」の前提がそもそも中敷きタイプと異なります。靴下と重ねる場合の着用順序や組み合わせは自己流にせず、製品公式の案内に従ってください。重ね方によっては圧迫感やずれ、蒸れの原因になることがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">中敷きタイプ（ピットソール・スリムアップインソールなど）は、靴下を替えてもインソール自体の位置は安定しているのが利点です。いずれのタイプでも、しびれ・強い圧迫感・皮膚トラブルなどが出た場合は使用を中止し、症状が続くようなら皮膚科や整形外科など医療機関に相談してください。</p>
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
          <p className="text-white/90 text-sm mb-5">靴下との相性も踏まえて、自分の使い方に合うタイプのインソールを比較してみましょう。</p>
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
