import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールのサポート強度の選び方【2026年】ソフト・ミディアム・ハードの違い",
  description:
    "インソールのサポート強度（硬さ・アーチの支え）はどう選ぶ？強いほど良いわけではない理由、初心者・立ち仕事・スポーツ別の目安、強すぎるサインと弱すぎるサインを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/support-level-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールのサポート強度の選び方｜ソフト・ミディアム・ハードの違い",
  description:
    "インソールのサポート強度（硬さ・アーチの支え）はどう選ぶ？強いほど良いわけではない理由、初心者・立ち仕事・スポーツ別の目安、強すぎるサインと弱すぎるサインを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "サポートが強いインソールのほうが効果も高いのですか？", "a": "いいえ。サポートは強いほど良いのではなく、足の状態・体重・用途に合っているほど機能します。合わない強さはかえって痛みや疲れの原因になるため、「最強」ではなく「適合」で選びましょう。"}, {"q": "初心者はどの強度から始めればいいですか？", "a": "適度な硬さの芯材にクッション層を組み合わせたミディアム相当からがおすすめです。短時間の使用から徐々に慣らし、物足りなさ・当たりの強さを見ながら次の選択に進みましょう。"}, {"q": "土踏まずが痛いのはサポートが効いている証拠ですか？", "a": "違います。履き始めの軽い違和感は慣れで解消することがありますが、刺すような痛みが続くのは強度やアーチの高さが合っていないサインです。使用を中止し、痛みが続く場合は整形外科に相談してください。"}, {"q": "扁平足ですが、一番硬いタイプを選ぶべきですか？", "a": "扁平足だから最硬で良いとは限りません。沈みやすい分しっかりした支えが必要になる傾向はありますが、痛みを伴う扁平足は市販品の前に整形外科での評価をおすすめします。"}, {"q": "柔らかいインソールでは意味がないのでしょうか？", "a": "目的次第です。硬い床での衝撃緩和や快適性が目的なら柔らかめにも価値があります。ただしアーチを支えて歩行や姿勢をサポートしたい場合は、荷重しても沈み切らない適度な支えが必要です。"}];

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
    { "@type": "ListItem", position: 3, name: "サポート強度", item: "https://sole-laboratory.com/articles/support-level-insole/" },
  ],
};

const points = [{"t": "初めてならミディアム相当から", "b": "サポート付きインソールが初めての方は、硬すぎない芯材＋クッション層の組み合わせ（ミディアム相当）が無難です。慣れていない足にいきなり強い支えを入れると、違和感で続かないことがよくあります。"}, {"t": "体重と使用時間で強度を上乗せする", "b": "体重が掛かるほど、また立ち時間が長いほどアーチは沈みやすく、支えの強さが必要になります。長時間の立ち仕事やスポーツ用途では、荷重しても形状が保たれるしっかりめの設計を検討しましょう。"}, {"t": "「当たって痛い」と「支えられている」を区別する", "b": "履き始めの軽い違和感は慣れで解消することが多い一方、土踏まずに刺すような痛みが続くのは強度やアーチ高が合っていないサイン。逆に数時間で支えの感覚が消えて沈み込むなら弱すぎです。試着と慣らし期間で見極めましょう。"}];
const related = [{"href": "/articles/shock-vs-arch-insole/", "label": "衝撃吸収型とアーチサポート型の違い"}, {"href": "/articles/foot-arch/", "label": "足のアーチと崩れのチェック"}, {"href": "/articles/breaking-in-insole/", "label": "インソールに慣れるまでの対処法"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function SupportLevelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "サポート強度" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールのサポート強度の選び方｜ソフト・ミディアム・ハードの違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">同じ「アーチサポート」でも、ふんわり支える柔らかめから、しっかり押し返す硬めまでサポート強度はさまざま。「強力なサポート」と聞くと良さそうに感じますが、強ければ良いというものではなく、足の状態と用途に合った強度を選ぶことが快適さの分かれ目です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">サポート強度は「強いほど効く」ではなく「合っているほど機能する」が正解です。初めての機能性インソールなら、適度な硬さで支えつつクッション性もあるミディアム相当から始めるのが失敗しにくい選択。土踏まずに痛みが出るなら強すぎ・支えられている感覚がなく沈み込むなら弱すぎのサインです。強い痛みや明らかな足の変形がある場合は、市販品の強度選びではなく整形外科への相談を優先してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サポート強度の違いは何で決まるか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サポート強度を決める主な要素は、(1)芯材の硬さ（しなりにくさ）、(2)アーチの高さ・立体形状、(3)かかとを包むヒールカップの深さです。柔らかい素材中心のソフトタイプは足あたりが優しく違和感が出にくい反面、体重を掛けるとアーチが沈み、支える力は控えめです。硬い芯材で形状を保つハードタイプは荷重下でも支えをキープしますが、足に合っていないと土踏まずへの当たりや疲れの原因になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">重要なのは、適切な強度が「人によって違う」ことです。体重、アーチの高さ（扁平足気味かハイアーチか）、使用シーン（日常か長時間の立ち仕事か運動か）、そしてサポート付きインソールの使用経験によって、心地よく感じる支えの強さは変わります。だからこそ「最強サポート」を探すのではなく、自分の条件に合わせて選ぶ必要があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サポート強度の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サポート強度におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで扱う3製品もサポートの効かせ方に個性があります。自分の足と用途に合うバランスで選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">強度が合っていないときのサインと対処法</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">強すぎるサインは、土踏まずの痛み・押される不快感が2〜3週間の慣らし後も続く、足裏がつる、外側に逃げるような歩き方になる、など。この場合は使用時間を短くして慣らし直すか、より穏やかなサポートの製品に切り替えましょう。弱すぎるサインは、夕方になると支えの感覚がなくなる、アーチ部分がすぐへたる、疲れ軽減を実感できない、など。体重や使用時間に対して設計が軽すぎる可能性があります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、強い痛み・しびれ・進行する変形（外反母趾の悪化など）がある場合や、扁平足で痛みを伴う場合は、市販品の強度調整で対応する段階ではないことがあります。整形外科では足の状態に応じた治療や、必要なら医療用の足底装具という選択肢も検討してもらえます。市販インソールはあくまで日常サポートの範囲で使い、慣らしても合わない場合は無理に使い続けないでください。</p>
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
          <p className="text-white/90 text-sm mb-5">支えの強さとクッションのバランスで選ぶ。3製品のサポート設計を比較してみましょう。</p>
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
