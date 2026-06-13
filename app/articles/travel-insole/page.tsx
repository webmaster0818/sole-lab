import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "旅行の歩き疲れに向くインソールの選び方【2026年】観光2万歩でも快適に",
  description:
    "観光の日は気づけば普段の何倍も歩いています。旅行先での足の疲れ・むくみを軽くするインソールの選び方、旅行前の慣らし方、荷物にならない携行のコツ、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/travel-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "旅行・観光の歩き疲れに向くインソールの選び方｜普段の何倍も歩く日に備える",
  description:
    "観光の日は気づけば普段の何倍も歩いています。旅行先での足の疲れ・むくみを軽くするインソールの選び方、旅行前の慣らし方、荷物にならない携行のコツ、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "旅行のためだけにインソールを買う価値はありますか？", "a": "旅行専用と考えるより、普段のウォーキングや通勤でも使える物を旅行前に導入する、と考えるのがおすすめです。旅行で効果を実感できれば、そのまま日常の歩行習慣のサポートとして使い続けられます。"}, {"q": "旅行先で靴が複数になる場合はどうすれば良いですか？", "a": "メインの歩き用スニーカーに中敷き型を入れておくのが基本です。ソックス型（ランウェイキュアソールなど）なら足に直接装着するため、サンダルやホテルのスリッパに履き替えても使えます。"}, {"q": "テーマパークの行列で立ちっぱなしがつらいです。", "a": "立ちっぱなしは歩行以上にアーチへの負担が一点に集中しやすい状態です。アーチサポートと衝撃吸収のあるインソールは立位の負担軽減にも役立ちます。並んでいる間にかかと上げなど軽く足を動かすのも有効です。"}, {"q": "夕方に足がむくんでパンパンになります。", "a": "一日中足を下げて歩き続けると、どうしてもむくみは出やすくなります。インソールでの歩行サポートに加え、ホテルで足を高くして休む・湯船につかるなどのケアを組み合わせましょう。むくみが片足だけ・痛みを伴う場合は医療機関に相談してください。"}, {"q": "飛行機や新幹線の移動中もインソールは必要ですか？", "a": "座っている移動中は外しても問題ありません。ソックス型なら履いたままでも違和感が少なく、空港や駅構内の長い移動でもそのまま使えます。"}];

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
    { "@type": "ListItem", position: 3, name: "旅行・観光の歩き疲れ", item: "https://sole-laboratory.com/articles/travel-insole/" },
  ],
};

const points = [{"t": "歩き慣れた靴と組み合わせる前提で選ぶ", "b": "旅行の鉄則は「新品の靴で行かない」こと。インソールも同じで、履き慣れたスニーカーやウォーキングシューズに入れて、出発前に慣らしておけるものを選びましょう。"}, {"t": "一日中歩いてもアーチを支え続けるサポート", "b": "観光は朝から夜まで断続的に歩き続けます。柔らかいだけのクッションでは後半に支えが効かなくなるため、土踏まずをしっかり支えるアーチサポートのある設計が向いています。"}, {"t": "荷物にならず複数の靴で使い回せること", "b": "旅行は荷物を増やしたくないもの。カットして靴に合わせられる中敷き型のほか、ホテルでの室内履きやサンダルでも使えるソックス型を選ぶと、旅先で靴が変わっても対応できます。"}];
const related = [{"href": "/articles/hiking-insole/", "label": "ハイキング・登山のインソール"}, {"href": "/articles/sneaker-insole/", "label": "スニーカー用インソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/commute-insole/", "label": "通勤ウォーキングのインソール"}];

export default function TravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "旅行・観光の歩き疲れ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">旅行・観光の歩き疲れに向くインソールの選び方｜普段の何倍も歩く日に備える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">観光の日は、街歩きや美術館、テーマパークなどで気づけば2万歩近く歩いていることも珍しくありません。普段あまり歩かない人ほど、旅行中の急な歩数増加で足裏やふくらはぎに疲れが出やすく、2日目以降の観光がつらくなりがちです。インソールは「歩ける足」を保って旅行を楽しみ切るための準備の一つです。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">旅行には、長時間歩いてもアーチが疲れにくいサポートと着地のクッション性を備え、歩きやすい靴と組み合わせられるインソールが向いています。大切なのは旅行当日にいきなり使わないこと。出発の1〜2週間前から普段の靴で慣らしておくと、本番で違和感なく使えます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">旅行で足が疲れやすい理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">旅行中の歩数は、普段デスクワーク中心の人にとって日常の2〜3倍以上になることがあります。さらに観光では、石畳や坂道、長い階段など普段歩かない路面が多く、立ち止まって展示を見る・行列に並ぶといった「立ちっぱなし」の時間も加わります。歩く・立つが一日中続くことで、足裏のアーチは疲労で沈み込み、衝撃を吸収しにくくなって疲れが加速します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、座っている時間が短く足を下げ続けるため、夕方には足がむくみやすくなります。インソールでアーチを支えると、着地の衝撃が分散されて足裏の疲労がたまりにくくなるほか、歩行時にふくらはぎの筋ポンプが働きやすくなり、むくみ対策の補助にもなります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">旅行・観光の歩き疲れの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">旅行・観光の歩き疲れにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行サポートを目的としたインソールで、旅行のような「歩く量が一時的に増える日」のケアにも取り入れやすいものです。ピットソールは特許取得のアーチサポートで長時間の街歩き向き、ランウェイキュアソールは足に直接装着するソックス型なのでスニーカーからホテルのスリッパまで履き物を選ばず、スリムアップインソールは軽量なEVA/PE素材で携行の負担になりません。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">旅行前の準備と旅先での注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは旅行当日デビューにせず、出発の1〜2週間前から普段の靴に入れて慣らしておきましょう。慣らし期間に違和感や当たりがないか確認しておけば、本番で靴ずれや足裏の痛みに悩まされるリスクを減らせます。あわせて、観光の合間に座って足を休める・夜にふくらはぎを軽くストレッチするだけでも、翌日の疲れの残り方が変わります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">旅行中にかかとや足裏に鋭い痛みが出た場合は、無理に予定を詰め込まず歩く量を減らしてください。帰宅後も痛みが続く場合は、足底腱膜炎など歩きすぎによるトラブルの可能性があるため、整形外科で確認しておくと安心です。</p>
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
          <p className="text-white/90 text-sm mb-5">せっかくの旅行を足の疲れで諦めないために。歩き続けられる足元を準備しましょう。</p>
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
