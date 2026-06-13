import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "巻き爪にインソールは使える？【2026年】まず受診、足指を使う歩きの補助に",
  description:
    "巻き爪・陥入爪が痛む方へ。まず皮膚科・形成外科の受診が第一選択です。そのうえで、足指が地面に接して歩ける状態を支えるインソールの補助的な役割と選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/ingrown-nail-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "巻き爪にインソールは使える？まず受診、そして足指を使う歩きの補助に",
  description:
    "巻き爪・陥入爪が痛む方へ。まず皮膚科・形成外科の受診が第一選択です。そのうえで、足指が地面に接して歩ける状態を支えるインソールの補助的な役割と選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "巻き爪はインソールで治りますか？", "a": "いいえ、インソールで巻き爪そのものは治りません。食い込みや痛みがある場合は皮膚科・形成外科での処置が第一選択です。インソールは足指が接地する歩き方を支え、爪への偏った圧を減らす補助として位置づけてください。"}, {"q": "なぜ歩き方が巻き爪に関係するのですか？", "a": "爪は歩行時に足指が地面を踏みしめる下からの圧で平らな形が保たれると考えられています。浮き指などで足指を使わずに歩くと下からの支えが減り、爪が巻きやすくなるといわれます。インソールで重心を整えると足指が使いやすくなります。"}, {"q": "どんな靴と組み合わせるべきですか？", "a": "つま先に1cmほどのゆとりがあり、足指が動かせる幅の靴が基本です。先の細い靴は爪を横から圧迫し、大きすぎる靴は中で足が滑って指先がぶつかるため、どちらも巻き爪には不向きです。"}, {"q": "痛みはないのですが受診すべきですか？", "a": "痛みがない軽い彎曲なら、爪の切り方（スクエアオフ）と靴・歩き方の見直しで様子を見る方法もあります。ただし食い込み・腫れ・痛みが出てきたら早めに受診してください。糖尿病など持病のある方は早めの相談が安全です。"}, {"q": "子供の巻き爪にもインソールは使えますか？", "a": "子供の巻き爪はまず小児科・皮膚科で相談してください。市販インソールはサイズが合わないことが多く、成長期の足には慎重な対応が必要です。靴のサイズ確認と爪の切り方の見直しを優先しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "巻き爪", item: "https://sole-laboratory.com/articles/ingrown-nail-insole/" },
  ],
};

const points = [{"t": "足指が接地しやすいアーチサポート", "b": "巻き爪の背景に浮き指やアーチの崩れが隠れていることがあります。内側縦アーチと横アーチを支えて重心を整え、足指が自然に地面に着く歩きを助ける設計を選びましょう。"}, {"t": "前足部を圧迫しない薄型設計", "b": "つま先側が厚いインソールは靴内で爪への圧迫を強めて逆効果です。前足部は薄く、足指が動かせるゆとりを保てるものを選びましょう。靴自体もつま先に余裕のある形が前提です。"}, {"t": "かかとの安定で歩行フォームを整える", "b": "かかとがブレると足指で蹴り出せず、指を使わない歩きになりがちです。ヒールカップでかかとを安定させ、かかとから足指へ体重が流れる歩行を支えるものが向いています。"}];
const related = [{"href": "/articles/floating-toe-insole/", "label": "浮き指のインソール対策"}, {"href": "/articles/hallux-valgus-prevention/", "label": "外反母趾の予防インソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチと崩れのチェック"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function IngrownNailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "巻き爪" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">巻き爪にインソールは使える？まず受診、そして足指を使う歩きの補助に</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の親指の爪が内側に巻き込んで食い込む、押すと痛い——巻き爪（彎曲爪）や陥入爪は、放置すると痛みや炎症が悪化しやすいトラブルです。痛みや化膿がある場合は、まず皮膚科・形成外科などの医療機関を受診してください。インソールは治療の代わりにはなりませんが、足指がしっかり接地して歩ける状態を支えることで、爪への偏った圧を減らす補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">巻き爪の痛み・食い込み・化膿は、まず皮膚科・形成外科での診察と処置が第一選択です。インソールは巻き爪を治すものではありませんが、浮き指などで足指が使えていない歩き方を整え、爪が受ける圧のバランスを保つ補助として活用できます。あわせて靴のサイズ・形の見直しを行いましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">巻き爪の主な原因とインソールにできること</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">爪はもともと巻く性質があり、歩行時に足指が地面を踏みしめて下から圧がかかることで平らな形が保たれると考えられています。浮き指などで足指を使わない歩き方が続くと下からの支えが減り、爪が巻き込みやすくなるといわれます。ほかにも深爪、先の細い靴やサイズの合わない靴による圧迫、爪の切り方などが関係します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールはこのうち『足指が接地して歩ける状態』を支える部分で役立ちます。アーチを支えて重心の偏りを整えると、足指が使いやすくなり、爪に下からの自然な圧がかかる歩き方をサポートします。ただし、すでに食い込んで痛い・腫れている・膿が出ている巻き爪は医療機関での処置が必要です。インソールはあくまで負担軽減と再発予防の補助と考えてください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">巻き爪の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">巻き爪におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足指が使いやすくなるアーチサポートと、前足部を圧迫しない薄さを両立したインソールが巻き爪対策の補助に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">受診を最優先に。インソールと靴の見直しは補助</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">巻き爪が皮膚に食い込んで痛む、赤く腫れている、膿が出ている場合は、自分で爪を切り込んだりせず、皮膚科・形成外科を受診してください。ワイヤー矯正など専門的な処置が必要なことがあります。インソールは治療ではなく、歩き方と荷重のバランスを整える補助です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">あわせて、爪は短く切りすぎず角を残す『スクエアオフ』に整える、先の細い靴やサイズの大きすぎる靴を避ける、といった基本のケアが再発予防に大切です。糖尿病など持病のある方は、足のトラブル全般を自己処置せず必ず医療機関に相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">足指を使った歩きを支えるアーチサポートインソールを比較してみましょう。</p>
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
