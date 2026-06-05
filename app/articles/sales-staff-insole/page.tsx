import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "販売員・アパレル店員の足の疲れに！インソールの選び方【2026年】",
  description:
    "接客で一日中立ちっぱなしの販売員・アパレル店員さんへ。足の疲れ・むくみをやわらげ、おしゃれな靴に響かない薄型インソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sales-staff-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "販売員・アパレル店員の足の疲れにおすすめのインソール",
  description:
    "接客で一日中立ちっぱなしの販売員・アパレル店員さんへ。足の疲れ・むくみをやわらげ、おしゃれな靴に響かない薄型インソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "パンプスやおしゃれな靴にも入りますか？", "a": "薄型インソールを選べばパンプスにも入ります。前すべりが気になる場合は、前足部のフィット感がある設計を選ぶと快適です。"}, {"q": "立ちっぱなしのむくみに効果はありますか？", "a": "アーチを支えると歩行時にふくらはぎの筋ポンプが働きやすくなり、むくみの軽減を助けます。休憩中のストレッチとあわせると効果的です。"}, {"q": "一日中立ち仕事でも大丈夫ですか？", "a": "はい。むしろ長時間の立ち仕事こそインソールの効果を感じやすい場面です。衝撃吸収とアーチサポートで疲れの蓄積を抑えます。"}];

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
    { "@type": "ListItem", position: 3, name: "販売員・アパレル", item: "https://sole-laboratory.com/articles/sales-staff-insole/" },
  ],
};

const points = [{"t": "おしゃれな靴に響かない薄型", "b": "デザイン性の高い靴やパンプスにも入る薄型が必須。元の中敷きと入れ替えるタイプが便利です。"}, {"t": "アーチサポートで立ち・歩きを支える", "b": "立ちっぱなしと歩き回りの両方に効くよう、土踏まずをしっかり支える設計を選びましょう。"}, {"t": "前すべりを防ぐフィット感", "b": "ヒールやパンプスでは前すべりで指が痛くなりがち。フィットしてズレにくいものを選ぶと快適です。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/pumps-insole/", "label": "パンプス用インソール"}, {"href": "/articles/hairdresser-insole/", "label": "美容師のインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}];

export default function SalesStaffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "販売員・アパレル" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">販売員・アパレル店員の足の疲れにおすすめのインソール</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">接客で立ちっぱなし、店内を歩き回り、時にはヒールやおしゃれな靴で勤務——販売員・アパレル店員さんの足は想像以上に疲れています。見た目に響かない薄型インソールで、立ち仕事の疲れをやわらげましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">販売員さんには、おしゃれな靴やパンプスにも入る薄型で、アーチを支えて衝撃を吸収するインソールが向いています。立ちっぱなし・歩き回りの疲れとむくみの軽減に役立ちます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">販売・接客の仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">販売員・アパレル店員は、接客で立ち続けるうえに、品出しやレジ、フロアの歩き回りなど動きも多い仕事です。さらにヒールやデザイン重視の靴で勤務することもあり、足裏への負担が大きくなりがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立ちっぱなしと歩き回りでアーチが疲れて沈み込むと、衝撃を吸収できず疲れ・むくみが強まります。薄型でアーチを支えるインソールなら、おしゃれな靴のままで足の負担をやわらげられます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">販売員・アパレルの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">販売員・アパレルにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">おしゃれな靴に響かない薄型で、アーチを支えるインソールが販売員さんに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">立ち仕事の疲れ・むくみ対策</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">休憩中にかかと上げや足首回しをすると、ふくらはぎの筋ポンプでむくみがたまりにくくなります。むくみが強い方は着圧ソックスの併用もおすすめです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ヒール勤務が多い方は、パンプス用インソールの記事もあわせて参考にしてください。</p>
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
          <p className="text-white/90 text-sm mb-5">おしゃれな靴のままで足の疲れを軽減。薄型インソールを比較しましょう。</p>
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
