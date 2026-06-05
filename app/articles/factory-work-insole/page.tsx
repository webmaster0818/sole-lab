import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "工場の立ち仕事の足の疲れに！インソールの選び方【2026年】安全靴対応",
  description:
    "コンクリート床で立ちっぱなしの工場勤務・ライン作業の方へ。硬い床の衝撃と足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/factory-work-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "工場の立ち仕事の足の疲れにおすすめのインソール｜安全靴対応の選び方",
  description:
    "コンクリート床で立ちっぱなしの工場勤務・ライン作業の方へ。硬い床の衝撃と足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "安全靴にインソールを入れても大丈夫ですか？", "a": "多くは対応しますが、つま先の保護芯に干渉しないよう薄型を選ぶか、元の中敷きを外して入れましょう。厚すぎると窮屈になり逆効果です。"}, {"q": "コンクリート床の足の疲れに効きますか？", "a": "衝撃吸収性の高いインソールは、硬い床から足裏に伝わる衝撃を和らげ、立ち仕事の疲れを軽減する補助になります。"}, {"q": "どのくらいで交換すべきですか？", "a": "毎日長時間使う工場勤務では、へたりやすいため3〜6ヶ月が交換の目安です。クッションが薄くなったら効果が落ちるサインです。"}];

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
    { "@type": "ListItem", position: 3, name: "工場の立ち仕事", item: "https://sole-laboratory.com/articles/factory-work-insole/" },
  ],
};

const points = [{"t": "コンクリート床の衝撃を吸収", "b": "硬い床対策には衝撃吸収性の高いクッションが重要です。足裏全体で衝撃を受け止めます。"}, {"t": "アーチサポートで立ちを支える", "b": "長時間でアーチが潰れないよう、しっかり支える設計を選びましょう。足裏の痛み・疲れの蓄積を抑えます。"}, {"t": "安全靴に入る薄型・耐久性", "b": "安全靴は中が狭いことが多いため薄型を選び、毎日長時間でもへたりにくい耐久性のあるものを。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/security-guard-insole/", "label": "警備員のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function FactoryWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "工場の立ち仕事" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">工場の立ち仕事の足の疲れにおすすめのインソール｜安全靴対応の選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">コンクリートの硬い床でライン作業や立ち仕事を続ける工場勤務。安全靴の薄い中敷きでは、足裏に衝撃が直に伝わって疲れがたまりがちです。衝撃を吸収しアーチを支えるインソールで、足の負担を軽くしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">工場の立ち仕事には、コンクリート床の衝撃を吸収するクッション性と、長時間の立ちを支えるアーチサポートを備え、安全靴に入る薄型のインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">工場やライン作業では、コンクリートなど非常に硬い床の上で長時間立ち続けることが多く、足裏への衝撃が蓄積しやすい環境です。さらに安全靴は中敷きが薄く硬いことが多く、クッション性が不足しがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">硬い床と立ちっぱなしでアーチが沈むと、衝撃を吸収できず疲れや足裏の痛みが出やすくなります。インソールでアーチを支え、衝撃を吸収すると、足の疲れをやわらげる補助になります。安全靴に入る薄型を選ぶのがポイントです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">硬い床の衝撃を吸収しアーチを支える、安全靴に入る薄型インソールが工場勤務に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴での使い方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴に入れる際は、つま先の保護芯に干渉しないよう厚みを確認し、必要なら元の中敷きを外して入れましょう。フィットしないと靴の中で足が動き、かえって疲れます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">毎日長時間の使用でへたりやすいため、3〜6ヶ月を目安に交換すると効果を保てます。足裏の痛みが続く場合は整形外科に相談を。</p>
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
          <p className="text-white/90 text-sm mb-5">コンクリート床の衝撃と立ちっぱなしの疲れに。衝撃吸収インソールを比較しましょう。</p>
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
