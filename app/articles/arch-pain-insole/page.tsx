import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "土踏まずが痛い時のインソールの選び方【2026年】張り・疲労の原因別対策",
  description:
    "歩くと土踏まずが痛い・張る・つりそうになる方へ。アーチを支える筋肉や腱の使いすぎとの関係、土踏まずの負担を減らすインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/arch-pain-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "土踏まずが痛い時のインソールの選び方｜張り・疲労の原因と対策",
  description:
    "歩くと土踏まずが痛い・張る・つりそうになる方へ。アーチを支える筋肉や腱の使いすぎとの関係、土踏まずの負担を減らすインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "土踏まずの痛みと足底筋膜炎は同じものですか？", "a": "重なる部分はありますが同じではありません。足底筋膜炎はかかと寄りの付着部の炎症が典型で、朝の一歩目の痛みが特徴です。土踏まず全体の張り・疲労感は筋肉や腱の使いすぎによることも多く、本記事はこちらを中心に解説しています。判別がつかない・痛みが続く場合は整形外科で診断を受けてください。"}, {"q": "アーチサポートが土踏まずに当たって痛いのですが。", "a": "アーチが高すぎるか、足の形に合っていない可能性があります。使い始めの数日は違和感が出ることもありますが、痛みが続く場合は使用を中止し、低めのサポートのものに替えるか専門家に相談しましょう。"}, {"q": "扁平足ですが土踏まずが痛みます。関係ありますか？", "a": "扁平足はアーチが沈み込みやすく、支える筋肉・腱に負担がかかり続けるため土踏まずの痛みや疲労が出やすい傾向があります。アーチをしっかり支えるインソールが負担軽減の補助になります。"}, {"q": "運動を始めたら土踏まずが痛くなりました。", "a": "急な運動量の増加はアーチを支える組織の使いすぎを招きます。運動量を一時的に落とし、クッション性のある靴とアーチサポートインソールで負担を減らしましょう。痛みが引かない場合は受診してください。"}, {"q": "土踏まずがつりやすいのですが、インソールは役立ちますか？", "a": "足裏の筋肉の疲労はつりやすさの一因のため、アーチを支えて筋肉の働きすぎを抑えるインソールは予防の補助になります。水分補給やふくらはぎ・足裏のストレッチもあわせて行いましょう。頻繁につる場合は医療機関に相談を。"}];

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
    { "@type": "ListItem", position: 3, name: "土踏まずの痛み", item: "https://sole-laboratory.com/articles/arch-pain-insole/" },
  ],
};

const points = [{"t": "足の形に合ったアーチの高さ", "b": "土踏まずに直接触れる部分なので、高すぎると圧迫感や痛み、低すぎると支え不足になります。扁平足ならしっかり支えるタイプ、ハイアーチなら隙間を埋めて分散するタイプと、自分のアーチの形に合わせて選びましょう。"}, {"t": "アーチに沿って面で支える設計", "b": "一点で押し上げるのではなく、土踏まず全体に沿って面で支える立体形状だと、働きすぎた筋肉・腱の負担を分散できます。足裏に当てて違和感のない滑らかな形状が理想です。"}, {"t": "適度な硬さと衝撃吸収の両立", "b": "柔らかすぎるとアーチを支えられず、硬すぎると土踏まずに当たって痛むことがあります。体重を受けても沈み込みすぎない弾力と、かかとの衝撃吸収を兼ね備えたものを選びましょう。"}];
const related = [{"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール対策"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール"}, {"href": "/articles/high-arch-insole/", "label": "ハイアーチ（凹足）のインソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチと崩れのチェック"}];

export default function ArchPainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "土踏まずの痛み" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">症状・お悩み</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">土踏まずが痛い時のインソールの選び方｜張り・疲労の原因と対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">歩いていると土踏まずが痛む、夕方になると土踏まずが張る・つりそうになる——土踏まずの痛みや疲労感は、アーチを支える筋肉や腱が働きすぎているサインであることが多い症状です。アーチを下から支えるインソールは、土踏まずの負担を直接減らす補助になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">土踏まずの痛み・張りには、内側縦アーチの形に沿って下から支えるアーチサポートインソールが向いています。扁平足・ハイアーチなど足の形に合った高さを選ぶことが重要です。かかと寄りが痛む・朝の一歩目が痛い場合は足底筋膜炎の可能性があるため、足底筋膜炎の記事も参考に、痛みが続くときは整形外科を受診してください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">土踏まずが痛くなる主な原因とインソールの役割</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">土踏まず（内側縦アーチ）は、足底腱膜や後脛骨筋などの筋肉・腱に支えられています。長時間の立ち仕事や歩行、急に運動量を増やしたとき、底の薄い靴で硬い路面を歩いたときなどに、これらの組織が働きすぎて土踏まずの痛みや張り・つり感が出やすくなります。扁平足でアーチが沈み込みやすい方、逆にハイアーチで一部に負担が集中する方も起こりやすい傾向があります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを下から支えると、支える筋肉・腱の仕事を肩代わりして土踏まずの負担を直接減らすことができます。なお、土踏まずの中でもかかと寄りが痛む・朝起きて最初の一歩が痛むという場合は足底筋膜炎（足底腱膜炎）の典型的なパターンに近いため、当サイトの足底筋膜炎の記事もご覧のうえ、痛みが続く場合は整形外科で診断を受けてください。インソールは治療ではなく負担軽減の補助です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">土踏まずの痛みの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">土踏まずの痛みにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">内側縦アーチに沿って面で支え、衝撃も吸収できるインソールが土踏まずの痛み・張りの対策に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">セルフケアと受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールとあわせて、足裏をゴルフボールなどでやさしくほぐす、ふくらはぎとアキレス腱のストレッチを行う、急な運動量アップを避けるといったケアが土踏まずの負担軽減に役立ちます。使い始めは土踏まずに当たる感覚に慣れるまで、短時間から徐々に装着時間を延ばしましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">土踏まずの痛みが2週間以上続く、朝の一歩目に強く痛む、腫れや熱感がある場合は、足底筋膜炎やその他の疾患の可能性があるため整形外科を受診してください。インソールは日常の負担を減らす補助であり、診断や治療の代わりにはなりません。</p>
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
          <p className="text-white/90 text-sm mb-5">土踏まずを面で支えるアーチサポートインソールを比較してみましょう。</p>
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
