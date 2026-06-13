import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "足がだるい・疲れやすい人のインソールの選び方【2026年】夕方の重だるさ対策",
  description:
    "夕方になると足がだるい・重い・疲れが抜けない方へ。アーチの沈み込みと筋疲労の関係、疲労感をやわらげるインソールの選び方、おすすめ3選を解説。立ち仕事・歩き仕事の方に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/foot-fatigue-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "足がだるい・疲れやすい人のインソールの選び方｜夕方の重だるさをやわらげる",
  description:
    "夕方になると足がだるい・重い・疲れが抜けない方へ。アーチの沈み込みと筋疲労の関係、疲労感をやわらげるインソールの選び方、おすすめ3選を解説。立ち仕事・歩き仕事の方に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "足のだるさにインソールは本当に効きますか？", "a": "アーチを支えて衝撃吸収の働きを助けることで、足裏やふくらはぎの筋肉の働きすぎを抑え、疲労をためにくくする補助になります。疲労そのものを消すものではないため、ストレッチや休息と組み合わせましょう。"}, {"q": "むくみ対策インソールとは何が違いますか？", "a": "重なる部分も多いですが、むくみは水分の滞りが主役で着圧ソックスなどとの併用が中心になるのに対し、だるさ・疲労感はアーチの沈み込みと筋疲労が主因のことが多く、アーチサポートと衝撃吸収を重視して選びます。"}, {"q": "柔らかいクッションだけのインソールではだめですか？", "a": "柔らかいだけのインソールは一時的に心地よくても、アーチを支えないため足が安定せず、かえって筋肉が踏ん張って疲れることがあります。アーチサポートのあるタイプを選びましょう。"}, {"q": "どのくらいで疲れにくさを感じますか？", "a": "個人差がありますが、1〜2週間ほど毎日使って夕方の足の重さの違いを比べてみるのがおすすめです。最初は短時間から慣らすと違和感が出にくいです。"}, {"q": "だるさが何週間も続きます。インソールで様子を見てよいですか？", "a": "休んでも回復しないだるさが続く場合や、片足だけの強いだるさ・腫れ・しびれを伴う場合は、病気が隠れている可能性があるため医療機関を受診してください。インソールは日常の負担軽減の補助です。"}];

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
    { "@type": "ListItem", position: 3, name: "足のだるさ・疲れ", item: "https://sole-laboratory.com/articles/foot-fatigue-insole/" },
  ],
};

const points = [{"t": "アーチサポートで筋肉の踏ん張りを減らす", "b": "だるさ対策の中心は、内側縦アーチをしっかり支えて足裏とふくらはぎの筋肉の働きすぎを抑えることです。長時間でも沈み込みにくい、適度な硬さのサポートを選びましょう。"}, {"t": "着地の衝撃をやわらげるクッション", "b": "硬い床・アスファルトからの衝撃は疲労の蓄積源です。かかと部に弾力のあるクッションを備えたものが向いています。柔らかすぎて沈み込むものは逆に疲れるため注意しましょう。"}, {"t": "毎日履く靴に合う厚みと通気性", "b": "だるさ対策は毎日続けることが大切です。通勤靴・仕事靴に無理なく入る厚みで、蒸れにくい素材だと一日快適に使えます。"}];
const related = [{"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事で疲れないインソール"}, {"href": "/articles/arch-pain-insole/", "label": "土踏まずの痛み・疲れの対策"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}];

export default function FootFatiguePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "足のだるさ・疲れ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">足がだるい・疲れやすい人のインソールの選び方｜夕方の重だるさをやわらげる</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">夕方になると足が重い、寝ても足の疲れが抜けない、休日に歩くとすぐだるくなる——その疲労感には、足裏のアーチの沈み込みによる衝撃吸収力の低下と、足まわりの筋肉の働きすぎが関係していることがあります。アーチを支えるインソールは、足の疲れをためにくくする補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">足のだるさ・疲れには、土踏まずを支えて衝撃吸収の働きを助けるアーチサポートと、着地の負担をやわらげるクッション性を両立したインソールが向いています。むくみを伴う場合はむくみ対策と併用を。だるさが長く続く・片足だけ強い場合は、病気が隠れていることもあるため医療機関に相談してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足がだるく疲れやすくなる仕組みとインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足裏のアーチはバネのように衝撃を吸収・分散する構造です。長時間の立ち仕事や歩行でアーチが疲労して沈み込むと、衝撃を受け流せなくなり、足裏やふくらはぎの筋肉が代わりに働き続けて疲労感・だるさが強まります。扁平足気味の方、硬い床で過ごす時間が長い方はとくにこの悪循環が起きやすいといわれます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで土踏まずを支えるとアーチのバネの働きが保たれ、筋肉の余計な踏ん張りが減って疲れがたまりにくくなります。インソールは疲労を消すものではなく『疲れにくい足元の環境』をつくる補助です。だるさにむくみや冷えを伴う場合はそれぞれの対策との併用が、長引く・悪化する場合は医療機関への相談が必要です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足のだるさ・疲れの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">足のだるさ・疲れにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチサポートとクッション性を両立し、毎日の靴で使い続けやすいインソールが足の疲れ対策に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">疲れをためないセルフケアと相談の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールとあわせて、入浴やふくらはぎ・足裏のストレッチ、就寝時に足を少し高くするなどのケアを行うと、その日の疲れを翌日に持ち越しにくくなります。立ち仕事の方は休憩中のかかと上げ運動もおすすめです。むくみが目立つ場合はむくみ対策インソールの記事もあわせてご覧ください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、休んでも回復しないだるさが続く、片足だけ強くだるい・腫れる、しびれや痛みを伴う場合は、血管や神経の病気が隠れていることもあります。自己判断でインソールだけに頼らず、内科や整形外科に相談してください。</p>
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
          <p className="text-white/90 text-sm mb-5">夕方の重だるさを軽くする、アーチサポートのインソールを比較してみましょう。</p>
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
