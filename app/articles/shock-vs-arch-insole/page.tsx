import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "衝撃吸収型とアーチサポート型インソールの違い【2026年】どっちを選ぶべき？",
  description:
    "インソールの2大タイプ「衝撃吸収型」と「アーチサポート型」は何が違う？仕組み・向いている人・デメリットを比較し、目的別の選び方と両立タイプの考え方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/shock-vs-arch-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "衝撃吸収型とアーチサポート型インソールの違い｜どっちを選ぶべき？",
  description:
    "インソールの2大タイプ「衝撃吸収型」と「アーチサポート型」は何が違う？仕組み・向いている人・デメリットを比較し、目的別の選び方と両立タイプの考え方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "衝撃吸収型とアーチサポート型、結局どちらが良いのですか？", "a": "目的次第です。硬い床での疲れ・かかとへの突き上げ対策なら衝撃吸収型、アーチの崩れや歩き方・姿勢へのアプローチならアーチサポート型。迷うならアーチサポート軸の複合タイプが失敗しにくい選択です。"}, {"q": "柔らかいインソールのほうが足に優しいのではないですか？", "a": "瞬間の快適さと長時間のサポートは別物です。柔らかすぎる素材はアーチが沈み込んで支えにならず、長時間ではかえって疲れる場合があります。適度な硬さで支える設計も検討しましょう。"}, {"q": "ダイエット目的のインソールはどちらのタイプですか？", "a": "ダイエットインソールの多くはアーチサポート型が軸です。アーチを支えて荷重バランスと歩行をサポートする発想で、ピットソールやランウェイキュアソールもアーチ設計を核にしています。なお履くだけで痩せるわけではなく、運動・食事と組み合わせるのが前提です。"}, {"q": "両方の機能を持つインソールはありますか？", "a": "あります。現在の機能性インソールの多くは、アーチサポート構造にEVAなどのクッション素材を組み合わせた複合設計です。支えの感覚とクッションのバランスを試着で確認しましょう。"}, {"q": "アーチサポート型を使うと土踏まずが痛いのですが不良品ですか？", "a": "使い始めの違和感は珍しくなく、短時間から慣らすのが基本です。ただし数週間経っても痛みが続く・悪化する場合はアーチ高やサイズが合っていない可能性があります。使用を中止し、症状が強ければ整形外科に相談してください。"}];

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
    { "@type": "ListItem", position: 3, name: "衝撃吸収型とアーチサポート型", item: "https://sole-laboratory.com/articles/shock-vs-arch-insole/" },
  ],
};

const points = [{"t": "目的で選ぶ：疲れ軽減か、土台づくりか", "b": "「硬い床で足裏やかかとがジンジンする」なら衝撃吸収重視、「扁平足気味・歩き方や姿勢から整えたい」ならアーチサポート重視。ダイエットや姿勢を意識した歩行のサポートが目的なら、アーチサポートが軸になります。"}, {"t": "柔らかさ＝正義ではないと知る", "b": "ふかふかのインソールは試した瞬間は快適ですが、柔らかすぎるとアーチが沈んで支えにならず、長時間では逆に疲れることもあります。適度な硬さで支え、要所にクッションがある設計が理想です。"}, {"t": "複合タイプは「支え7：クッション3」の感覚で確認", "b": "複合設計の製品は、土踏まずを押し返す支えの感覚がしっかりあるか、かかと・前足部に適度なクッションがあるかを試着で確認しましょう。支えが弱いものはただの柔らかい中敷きになりがちです。"}];
const related = [{"href": "/articles/support-level-insole/", "label": "インソールのサポート強度の選び方"}, {"href": "/articles/material-comparison/", "label": "インソールの素材比較"}, {"href": "/articles/foot-arch/", "label": "足のアーチと崩れのチェック"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function ShockVsArchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "衝撃吸収型とアーチサポート型" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">衝撃吸収型とアーチサポート型インソールの違い｜どっちを選ぶべき？</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">インソール売り場には「衝撃を吸収」「アーチをサポート」と異なる訴求の製品が並びます。この2つは似ているようで設計思想がまったく違うもの。自分の目的に合わないタイプを選ぶと「思っていたのと違う」となりがちです。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">衝撃吸収型は柔らかい素材で着地の衝撃を和らげる「守り」のインソール、アーチサポート型は土踏まずの構造を支えて荷重バランスを整える「土台づくり」のインソールです。立ち仕事の足裏の疲れ・硬い床対策なら衝撃吸収寄り、アーチの崩れ・姿勢や歩き方を整えたい目的ならアーチサポート寄りが基本。迷う場合は、アーチサポートを軸にクッション層を組み合わせた複合タイプから始めるのが失敗しにくい選び方です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">2つのタイプの仕組みの違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">衝撃吸収型は、ジェルや低反発フォームなど柔らかい素材を使い、着地時に足裏へ伝わる衝撃エネルギーを素材の変形で受け止めるタイプです。硬い床での立ち仕事やかかとへの突き上げ感には心強い一方、柔らかさは「支える力」とは別物で、アーチの崩れ自体には働きかけません。沈み込みが大きすぎると、かえって足元が不安定になることもあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチサポート型は、土踏まず（内側縦アーチ）や横アーチを立体形状で下から支え、足裏全体に荷重を分散させるタイプです。足のアーチはバネと衝撃分散の役割を持つため、アーチが機能する状態を保つこと自体が結果的に衝撃対策にもなります。ただし、支えるためにある程度の硬さが必要で、慣れるまで土踏まずに当たる感覚が出る場合があります。現在の機能性インソールの多くは、アーチサポートを軸にクッション素材を組み合わせた複合設計です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">衝撃吸収型とアーチサポート型の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">衝撃吸収型とアーチサポート型におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで扱う3製品はいずれもアーチサポートを軸にした設計で、クッション性とのバランスに個性があります。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">タイプ選びで失敗しないための注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチサポート型は、使い始めに土踏まずへの当たりや違和感が出ることがあります。短時間から慣らし、数週間しても痛みが続く場合はサイズやアーチ高が合っていない可能性があるため使用を見直してください。足底の強い痛み・しびれ・明らかな変形がある場合は、市販品のタイプ選び以前に整形外科での診断を優先しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">衝撃吸収型を選ぶ場合も、かかと部分だけのパッドか全面タイプかで靴内の容積への影響が変わります。どちらのタイプでも「靴とのセットで機能する」のがインソールです。普段履く靴に入れた状態（ソックス型は装着した状態）で、かかとの安定感とつま先の余裕を確認してから本格使用に移りましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">アーチサポートとクッション性のバランスで選ぶ。3製品の設計の違いを比較してみましょう。</p>
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
