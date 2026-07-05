import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "60代からのインソールの選び方【2026年】歩行の安定と健康維持の補助に",
  description:
    "60代以上の方のインソール選びを解説。加齢で扁平になりやすい足のアーチを支え、毎日のウォーキングや外出の歩行をサポート。バランスの補助や膝・腰への負担軽減の考え方も。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/senior-60s-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "60代からのインソールの選び方｜歩行の安定と毎日の外出をサポート",
  description:
    "60代以上の方のインソール選びを解説。加齢で扁平になりやすい足のアーチを支え、毎日のウォーキングや外出の歩行をサポート。バランスの補助や膝・腰への負担軽減の考え方も。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールで転倒予防になりますか？", "a": "インソールは足裏のアーチを支えて歩行の安定を補助しますが、転倒を防ぐことを保証するものではありません。筋力維持の運動、住まいの段差・滑り対策、合った靴選びと組み合わせることが大切です。"}, {"q": "膝が痛いのですがインソールで楽になりますか？", "a": "クッションとアーチサポートで歩行時の衝撃をやわらげる補助にはなりますが、膝の痛みは変形性膝関節症などの可能性もあるため、まず整形外科で原因を確認してください。"}, {"q": "どんな靴に入れるのがいいですか？", "a": "かかとが安定して着脱しやすいウォーキングシューズやスニーカーがおすすめです。底が薄い靴やゆるすぎる靴は、インソールを入れても歩行が安定しにくいため見直しを。"}, {"q": "50代向けの記事との違いは何ですか？", "a": "50代向けの記事はダイエットの観点を中心にしていますが、この記事は60代からの歩行の安定と健康維持の観点でまとめています。目的に合わせて参考にしてください。"}, {"q": "毎日使うと、どのくらいで交換が必要ですか？", "a": "毎日使う場合、へたりによる機能低下を考えると3〜6ヶ月が交換の目安です。アーチ部分が潰れてきた、クッションが薄く感じるようになったら交換時期です。"}];

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
    { "@type": "ListItem", position: 3, name: "60代からの歩行サポート", item: "https://sole-laboratory.com/articles/senior-60s-insole/" },
  ],
};

const points = [{"t": "アーチサポートで歩行を安定させる", "b": "低下しやすい土踏まずのアーチを支えると、着地のブレが減り歩行の安定の補助になります。ウォーキング習慣のある方は特に、疲れにくさの違いを感じやすいポイントです。"}, {"t": "つまずきにくさに配慮した厚みを選ぶ", "b": "厚すぎるインソールは靴の中で足の位置を変え、履き慣れた靴の感覚を狂わせることがあります。薄型から試し、入れた後に必ず室内で歩いて違和感がないか確認しましょう。"}, {"t": "クッションで膝・腰への衝撃をやわらげる", "b": "加齢とともに足裏の脂肪も薄くなり、衝撃が関節に伝わりやすくなります。適度なクッション性のあるインソールは、毎日の歩行で膝や腰にかかる負担をやわらげる補助になります。"}];
const related = [{"href": "/articles/insole-50s-diet/", "label": "50代のダイエットとインソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}, {"href": "/articles/knee-pain/", "label": "膝の痛みのインソール対策"}, {"href": "/articles/foot-fatigue-insole/", "label": "足のだるさ・疲れのインソール"}];

export default function Senior60sPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "60代からの歩行サポート" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">60代からのインソールの選び方｜歩行の安定と毎日の外出をサポート</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">歩くのが前より疲れる、長く歩くと膝や腰にくる、ちょっとした段差が気になる——60代からのそんな変化には、足裏のアーチの衰えが関わっていることがあります。毎日のウォーキングや外出を支えるインソールの選び方を、健康維持の観点から解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">60代からは、加齢で低下しやすい足裏のアーチを支え、歩行を安定させるインソールが向いています。バランスや歩きやすさの『補助』として活用し、膝や腰の痛み・足のしびれなど気になる症状がある場合は、まず整形外科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">60代からの足の変化とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">年齢を重ねると、足裏のアーチを支える筋力や腱の弾力が少しずつ低下し、土踏まずが扁平になりやすくなります。アーチが下がると着地の衝撃を吸収しにくくなり、同じ距離を歩いても疲れやすく、膝や腰への負担も増えがちです。足幅が広がる、外反母趾が進むといった変化が出る方もいます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで土踏まずを支えると、足裏全体で体重を受け止めやすくなり、歩行時の安定感を補助します。これは転ばないことを保証するものではなく、あくまでバランスと歩きやすさを支える補助です。筋力を保つウォーキングや体操、住まいの段差対策と組み合わせて、総合的に足元の安心を整えましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">60代からの歩行サポートの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">60代からの歩行サポートにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">60代からは、アーチサポートと衝撃吸収で毎日の歩行を支えるインソールが向いています。ピットソールはXS〜XL（21〜29cm・XLはブラック/ピンク限定）から足長に合わせて選べてカット調整も可能です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">健康維持のための使い方と受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールはあくまで歩行を支える補助です。足の筋力を保つには歩く習慣そのものが大切なので、無理のない距離のウォーキングと組み合わせましょう。初めて使う日は室内で慣らし、違和感がないことを確認してから外出に使うと安心です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">膝・腰の痛みが続く、足がしびれる、歩ける距離が急に短くなったなどの変化がある場合は、加齢のせいと自己判断せず整形外科を受診してください。糖尿病などで足のケアに注意が必要な方は、インソールの使用前にかかりつけ医に相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">いつまでも自分の足で歩くために。毎日の歩行を支えるインソールを比較しましょう。</p>
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
