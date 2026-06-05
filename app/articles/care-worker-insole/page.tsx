import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "介護士の足腰の負担に！インソールの選び方【2026年】中腰・移乗対策",
  description:
    "立ち仕事に加え中腰や移乗介助で足腰に負担がかかる介護士さんへ。腰・足の負担をやわらげるインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/care-worker-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "介護士の足腰の負担におすすめのインソール｜中腰・移乗の負担対策",
  description:
    "立ち仕事に加え中腰や移乗介助で足腰に負担がかかる介護士さんへ。腰・足の負担をやわらげるインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "介護士の腰痛にインソールは効果がありますか？", "a": "足元を安定させて姿勢のブレを減らすことで、腰への負担を分散する補助になります。ただし移乗時の正しい姿勢とあわせることが大切で、痛みが強い場合は受診しましょう。"}, {"q": "どんな靴に入れるのが良いですか？", "a": "滑りにくく安定した介護用シューズやスニーカーが向いています。インソールが入る深さがあるか確認し、必要なら元の中敷きを外して使いましょう。"}, {"q": "立ち仕事用インソールとの違いは？", "a": "基本は共通ですが、介護は中腰・移乗など踏ん張る動作が多いため、安定性と衝撃吸収をより重視するのがポイントです。"}];

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
    { "@type": "ListItem", position: 3, name: "介護士", item: "https://sole-laboratory.com/articles/care-worker-insole/" },
  ],
};

const points = [{"t": "足元を安定させるアーチサポート", "b": "中腰や踏ん張りの多い介護では、足裏が安定していることが腰の負担軽減につながります。アーチをしっかり支える設計を選びましょう。"}, {"t": "衝撃吸収と踏ん張りやすさ", "b": "移乗時の踏み込みや長時間の立ちに対応する、衝撃吸収と安定性を両立した適度な硬さのものが向いています。"}, {"t": "靴に合う厚みと耐久性", "b": "介護用シューズに入る厚みで、毎日長時間使ってもへたりにくい耐久性のある製品を選びましょう。"}];
const related = [{"href": "/articles/nurse-insole/", "label": "看護師のインソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/back-pain/", "label": "腰痛のインソール対策"}, {"href": "/articles/factory-work-insole/", "label": "工場の立ち仕事インソール"}];

export default function CareWorkerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "介護士" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">介護士の足腰の負担におすすめのインソール｜中腰・移乗の負担対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">立ち仕事に加えて、中腰での介助や利用者さんの移乗など、介護の現場は足腰への負担が大きい仕事です。アーチを支えて足元を安定させるインソールは、足の疲れだけでなく腰への負担軽減の補助にもなります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">介護士さんには、足元を安定させて姿勢を支えるアーチサポートと、中腰・移乗の衝撃をやわらげるクッション性を備えたインソールが向いています。足の疲れと腰の負担をまとめてケアしましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">介護の仕事で足腰に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">介護の現場では、長時間の立ち仕事に加え、ベッドや車椅子への移乗、入浴・排泄介助での中腰姿勢など、足腰に大きな負担がかかる動作が繰り返されます。足元が不安定だと、その負担が腰や膝に集中しやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで足裏のアーチを支えて足元を安定させると、立ち姿勢・中腰姿勢のブレが減り、腰や膝への負担を分散する助けになります。衝撃吸収性があれば、移乗時の踏ん張りもサポートします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">介護士の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">介護士におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足元を安定させて腰の負担も軽くする、アーチサポートと衝撃吸収のインソールが介護士さんに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">腰を守る使い方のコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは足元の安定をサポートしますが、腰を守るには移乗時のボディメカニクス（膝を使い腰を落とす）も重要です。インソールと正しい介助姿勢を組み合わせることで、腰への負担をより減らせます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">すでに腰や膝に痛みがある場合は無理をせず、整形外科に相談しましょう。インソールは負担軽減の補助です。</p>
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
          <p className="text-white/90 text-sm mb-5">足元を安定させ腰の負担も軽くするインソールで、介護の毎日をサポートしましょう。</p>
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
