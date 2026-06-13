import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "スリッポンに合うインソールの選び方【2026年】かかと脱げ・前滑り対策",
  description:
    "ひもがなくサッと履けるスリッポンは、フィット調整ができず足が中で滑りやすい靴。かかと脱げ・前滑りを抑えるインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/slip-on-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "スリッポンに合うインソールの選び方｜かかと脱げと前滑りを抑える",
  description:
    "ひもがなくサッと履けるスリッポンは、フィット調整ができず足が中で滑りやすい靴。かかと脱げ・前滑りを抑えるインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スリッポンにインソールを入れるとかかと脱げは直りますか？", "a": "アーチサポートで足裏が安定すると靴の中の遊びが減り、かかとの浮きをやわらげる補助になります。ただし靴自体が大きすぎる場合は解決しないため、サイズの見直しも併せて検討してください。"}, {"q": "インソールが靴の中でズレてしまいます。", "a": "ひもで締められない靴は中敷きがズレやすいため、カットして靴の形に正確に合わせることが大切です。それでもズレる場合は、足に直接装着するソックス型インソールを検討しましょう。"}, {"q": "素足で履くことが多いのですが大丈夫ですか？", "a": "素足での使用は汗でインソールが傷みやすく、衛生面でも不利です。浅履きソックスの着用と、陰干しなどのこまめなお手入れをおすすめします。抗菌防臭加工付きのタイプも選択肢です。"}, {"q": "厚底タイプのスリッポンにも使えますか？", "a": "使えます。ただし履き口の深さは変わらないため、薄型を選ぶ原則は同じです。入れた後に甲がきつくないか、かかとが浮かないかを必ず確認しましょう。"}, {"q": "スニーカーとスリッポンでは選び方が違いますか？", "a": "アーチサポート重視という基本は同じですが、スリッポンはひもで固定できないぶん、薄さ・カット精度・ズレ対策の優先度が高くなります。"}];

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
    { "@type": "ListItem", position: 3, name: "スリッポン", item: "https://sole-laboratory.com/articles/slip-on-insole/" },
  ],
};

const points = [{"t": "アーチサポートで前滑りを抑える", "b": "土踏まずを下から支えると足裏とインソールの接地面が増え、靴の中で足が前に滑りにくくなります。フラットな底のスリッポンにこそ効果的な機能です。"}, {"t": "カットで靴の形に正確に合わせる", "b": "スリッポンは中敷きがズレると一気に履き心地が悪くなります。ハサミでカットできるタイプを選び、元の中敷きに合わせて正確にサイズ調整しましょう。"}, {"t": "甲のスペースを奪わない薄さ", "b": "スリッポンは履き口の高さが固定されているため、厚いインソールを入れると甲がきつくなりがちです。薄型設計で、入れた後も楽に足が入るかを確認しましょう。"}];
const related = [{"href": "/articles/sneaker-insole/", "label": "スニーカー用インソール"}, {"href": "/articles/loafers-insole/", "label": "ローファーのインソール"}, {"href": "/articles/sandals-insole/", "label": "サンダルのインソール"}, {"href": "/articles/foot-fatigue-insole/", "label": "足のだるさ・疲れのインソール"}];

export default function SlipOnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "スリッポン" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">スリッポンに合うインソールの選び方｜かかと脱げと前滑りを抑える</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">サッと履けて楽なスリッポン。その手軽さの裏で、ひもやベルトでフィットを調整できないため、歩くとかかとが浮く・足が中で前に滑るといった悩みが起こりやすい靴でもあります。スリッポンの弱点を補うインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">スリッポンには、足裏とのフィット感を高めるアーチサポート付きで、靴の形にカットして合わせられる薄型インソールが向いています。靴の中で中敷きごとズレるのが心配な方は、足に直接装着するソックス型という選択肢もあります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スリッポンで足が疲れる・脱げやすい理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スリッポンはひもがないぶん、甲を押さえる力が弱く、歩行のたびにかかとがわずかに浮きやすい構造です。足はそれを防ごうと無意識に指を曲げて踏ん張るため、長く歩くと足裏や指の付け根が疲れやすくなります。また底が薄くフラットなモデルが多く、アーチを支える機能はほとんど期待できません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで土踏まずを支えて足裏との接地面を増やすと、靴の中での前滑りや足のブレが減り、踏ん張りによる疲れをやわらげる補助になります。ただしひもで締められない靴は中敷き自体もズレやすいため、靴の形に正確に合わせることが他の靴以上に重要です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スリッポンの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スリッポンにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">フィット調整できないスリッポンの弱点は、アーチサポートと正確なサイズ合わせで補えます。中敷きのズレ自体が気になる方には、靴ではなく足に直接装着するソックス型のランウェイキュアソール（女性向けM/L・22.5〜25cm）という手もあります。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スリッポンで使うときの注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">入れた直後は甲のきつさとかかとの浮きを室内で確認しましょう。元の中敷きが外せるモデルなら外してから入れると、高さが変わりにくくフィット感を保てます。キャンバス地など柔らかいスリッポンは特に、厚みの変化が履き心地に直結します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れても足裏の疲れや痛みが続く場合は、靴のサイズや形が足に合っていない可能性があります。痛みやしびれが長引く場合は、無理に履き続けず整形外科に相談してください。</p>
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
          <p className="text-white/90 text-sm mb-5">楽に履けるスリッポンを、もっと歩きやすく。フィット感を高めるインソールを比較しましょう。</p>
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
