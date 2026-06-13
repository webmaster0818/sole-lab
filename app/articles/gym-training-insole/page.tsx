import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ジム・筋トレ時のインソールの選び方【2026年】種目別の足元の考え方",
  description:
    "ジムでのトレーニング中、足元を意識していますか？マシン・フリーウェイト・有酸素マシンそれぞれで足裏に求められる役割と、インソールの選び方・使い分け、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/gym-training-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ジム・筋トレ時のインソールの選び方｜種目で変わる足元の役割",
  description:
    "ジムでのトレーニング中、足元を意識していますか？マシン・フリーウェイト・有酸素マシンそれぞれで足裏に求められる役割と、インソールの選び方・使い分け、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "筋トレ中にインソールを使うと効果は上がりますか？", "a": "筋トレの効果そのものを高めるものではありません。足裏の接地を安定させてフォームの土台を支える補助、およびトレッドミルなど有酸素運動時の足の負担軽減と考えるのが正確です。"}, {"q": "スクワットのとき足元がぐらつきます。インソールで変わりますか？", "a": "アーチサポートで接地が安定するとぐらつきが減る場合がありますが、まずは靴がフラットで安定しているか、足幅に合っているかを確認しましょう。柔らかいランニングシューズはスクワットには不向きです。"}, {"q": "トレッドミルでのウォーキングにも使えますか？", "a": "使えます。むしろ当サイトで扱う3製品は歩行サポートが本来の用途のため、トレッドミルでのウォーキングや傾斜歩行は相性の良い場面です。着地の衝撃分散とアーチの支えが疲労軽減の補助になります。"}, {"q": "ジム用と普段用でインソールを分けるべきですか？", "a": "毎回入れ替えるのは手間なので、ジムシューズと普段履きそれぞれに用意するか、足に直接装着するソックス型（ランウェイキュアソール）で靴をまたいで使う方法もあります。ジムの規定でシューズが指定されている場合はそちらに従ってください。"}, {"q": "運動初心者ですが、まず何から始めれば良いですか？", "a": "急に高強度の運動を始めるより、トレッドミルや日常のウォーキングで歩く習慣を作るのが安全です。インソールで足の疲れを抑えながら、少しずつ運動量を増やしていきましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "ジム・筋トレ", item: "https://sole-laboratory.com/articles/gym-training-insole/" },
  ],
};

const points = [{"t": "沈み込まない適度な硬さ", "b": "フリーウェイトでは、踏ん張ったときに足元が沈むと力が逃げてフォームも乱れます。フワフワのクッションではなく、アーチを支えつつ沈み込みすぎない適度な硬さの素材を選びましょう。"}, {"t": "アーチサポートで接地を安定させる", "b": "スクワットで膝が内に入りやすい、片脚種目でぐらつくという方は、土踏まずを支えて足裏の接地を整えるアーチサポートが補助になります。トレッドミルでの着地の安定にも共通して役立ちます。"}, {"t": "トレーニングシューズに収まる厚みとズレにくさ", "b": "ジムシューズは軽量でタイトなものが多いため、元の中敷きと入れ替えて使える厚みを選びましょう。ステップ系の動きで靴の中でズレないフィット感も大切です。"}];
const related = [{"href": "/articles/core-training-insole/", "label": "体幹トレーニングとインソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用の違い"}, {"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエットとインソール"}];

export default function GymTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ジム・筋トレ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ジム・筋トレ時のインソールの選び方｜種目で変わる足元の役割</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ジムでは上半身や体幹のフォームに意識が向きがちですが、スクワットやランジ、トレッドミルでのウォーキングまで、ほとんどの種目は足裏が土台です。足元が不安定だとフォームのブレや膝・足首への偏った負担につながることがあります。トレーニング内容に合わせた足元の考え方とインソールの選び方を解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ジムでは種目によって足裏に求められる役割が変わります。トレッドミルなど有酸素系では衝撃吸収とアーチサポート、スクワットなどのフリーウェイトでは沈み込まない安定性が大切です。柔らかすぎるクッションは高重量種目では逆に不安定になるため、適度な硬さで支えるタイプを選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">トレーニング中の足元が大切な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スクワットやデッドリフトのようなフリーウェイト種目では、足裏全体で床を踏みしめて力を伝えます。足裏のアーチが崩れて膝が内側に入ると、力が逃げるだけでなく膝への偏った負担にもつながるとされます。一方、トレッドミルでのランニングやウォーキング、スタジオプログラムでは、繰り返しの着地衝撃をどう受け止めるかが足の疲労を左右します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">つまり「筋トレでは安定、有酸素では衝撃吸収」と、求められる機能が種目で異なります。インソールでアーチを支えて足裏の接地を安定させることは、どちらの場面でも土台づくりの補助になります。ただし、極端に柔らかいクッション系は高重量を扱う際に足元が沈んで不安定になるため、トレーニング用途では適度な硬さのある支持型が向いています。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ジム・筋トレの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ジム・筋トレにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品は、日常の歩行・姿勢サポートを目的としたインソールで、競技・トレーニング専用モデルではありません。ジムでは、トレッドミルでのウォーキングや有酸素運動、ジムへの行き帰りの歩行サポートとして取り入れるのが現実的な使い方です。高重量のフリーウェイトでは、まずフラットで安定した靴選びを優先しましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ジムでの使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れた直後は足裏の感覚が変わるため、いきなり高重量や強度の高いプログラムで使わず、ウォームアップや軽い種目から慣らしましょう。トレッドミルでのウォーキングから試すと、感覚の変化を安全に確認できます。なお、筋トレそのものの効果を高める道具ではなく、足元の安定や歩行の快適さを支える補助という位置づけです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">トレーニング中やその後に膝・足首・足裏の痛みが続く場合は、フォームや重量設定の見直しが先決です。痛みが引かない場合はインソールでごまかさず、整形外科で原因を確認してからトレーニングを再開してください。</p>
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
          <p className="text-white/90 text-sm mb-5">トレーニングも日常も、土台は足元から。アーチを支えるインソールを比較してみましょう。</p>
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
