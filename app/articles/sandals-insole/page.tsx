import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "サンダルのインソールの選び方【2026年】夏の足の疲れ・滑り対策",
  description:
    "夏のサンダルで足が疲れる・滑る方へ。サンダルに使えるインソールの選び方、滑り止め・衝撃吸収のポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/sandals-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "サンダルのインソールの選び方｜夏の足の疲れ・前すべり対策",
  description:
    "夏のサンダルで足が疲れる・滑る方へ。サンダルに使えるインソールの選び方、滑り止め・衝撃吸収のポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "サンダルにインソールは入れられますか？", "a": "ストラップや甲を覆うタイプのサンダルなら、薄型インソールを敷いて使えます。固定されないビーチサンダルではずれやすいため、フィットするものを選びましょう。"}, {"q": "夏の前すべりは防げますか？", "a": "表面に滑り止めのあるインソールは、汗による足の前すべりを抑える助けになります。指への負担軽減にもつながります。"}, {"q": "サンダルでも足の疲れに効果はありますか？", "a": "平らで底の薄いサンダルこそ、アーチサポートのあるインソールで疲れを軽減しやすくなります。"}];

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
    { "@type": "ListItem", position: 3, name: "サンダル", item: "https://sole-laboratory.com/articles/sandals-insole/" },
  ],
};

const points = [{"t": "薄型で素足感を損なわない", "b": "サンダルは見た目と軽さが大切。薄くて目立ちにくく、アーチサポートのあるものを選びましょう。"}, {"t": "汗による滑りを防ぐ表面", "b": "夏は足裏が汗で滑りがち。グリップのある表面素材で前すべりを防ぎます。"}, {"t": "アーチサポートで疲れを軽減", "b": "平らなサンダルの弱点を補うため、土踏まずを支える設計が疲れ対策になります。"}];
const related = [{"href": "/articles/pumps-insole/", "label": "パンプス用インソール"}, {"href": "/articles/cold-feet/", "label": "足の冷え対策インソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function SandalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "サンダル" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">サンダルのインソールの選び方｜夏の足の疲れ・前すべり対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">夏に活躍するサンダルですが、底が薄く平らな製品が多く、長時間歩くと足が疲れたり、汗で足が前に滑ったり。サンダルに合うインソールで、夏の足の悩みを軽減しましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">サンダルには、薄くて目立ちにくく、アーチを支えつつ汗による前すべりを防ぐ滑り止め付きのインソールが向いています。素足感を保ちながら疲れを軽減できます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サンダルで足が疲れる・滑る理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サンダルは開放的で涼しい反面、底が薄く平らでアーチの支えがない製品が多く、長時間歩くと足裏が疲れやすくなります。さらに夏は汗で足裏が滑り、前にずれて指に負担がかかりがちです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">薄型でアーチを支えるインソールを使えば、サンダルの軽さを保ちつつ足裏の疲れを軽減できます。滑り止め素材なら、汗による前すべりも抑えられます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サンダルの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サンダルにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">薄型でアーチを支え、汗による滑りを防ぐインソールがサンダルに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サンダルでの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ストラップで固定するサンダルなら、インソールがずれにくく安定します。鼻緒タイプのサンダルでは前すべり防止が特に役立ちます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">汗をかいたら拭き取り、使用後に乾かすと衛生的でニオイもこもりません。</p>
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
          <p className="text-white/90 text-sm mb-5">夏のサンダルの疲れ・滑りに。薄型インソールを比較しましょう。</p>
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
