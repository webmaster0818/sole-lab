import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ブーツのインソールの選び方【2026年】冬の冷え・足の疲れ対策",
  description:
    "ロングブーツ・ショートブーツの足の疲れや冷えが気になる方へ。ブーツに合うインソールの選び方、防寒・衝撃吸収・サイズ調整のポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/boots-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ブーツのインソールの選び方｜冬の冷え・足の疲れ・ぶかぶか対策",
  description:
    "ロングブーツ・ショートブーツの足の疲れや冷えが気になる方へ。ブーツに合うインソールの選び方、防寒・衝撃吸収・サイズ調整のポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ブーツのぶかぶかはインソールで直せますか？", "a": "やや厚みのあるインソールを入れると容積が埋まり、フィット感が高まります。サイズが大きすぎる場合は厚みのある中敷きで調整しましょう。"}, {"q": "冬のブーツの底冷え対策になりますか？", "a": "保温性のある素材のインソールは、地面からの冷気を遮って足先の冷えを和らげる助けになります。"}, {"q": "ヒールのあるブーツでも使えますか？", "a": "はい。ヒールブーツは前足部に負担が集中するため、アーチサポートと前すべり防止のあるインソールが快適です。"}];

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
    { "@type": "ListItem", position: 3, name: "ブーツ", item: "https://sole-laboratory.com/articles/boots-insole/" },
  ],
};

const points = [{"t": "アーチサポートで疲れを軽減", "b": "ヒールのあるブーツほど前足部やアーチに負担がかかります。土踏まずを支える設計で疲れを抑えましょう。"}, {"t": "保温性で底冷え対策", "b": "冬のブーツには、地面の冷気を遮る保温性のある素材のインソールが快適です。"}, {"t": "ぶかぶかを調整できる厚み", "b": "ブーツが少し大きい場合は、やや厚めのインソールで容積を埋めてフィット感を高められます。"}];
const related = [{"href": "/articles/cold-feet/", "label": "足の冷え対策インソール"}, {"href": "/articles/pumps-insole/", "label": "パンプス用インソール"}, {"href": "/articles/size-adjustment/", "label": "インソールのサイズ調整"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}];

export default function BootsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ブーツ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ブーツのインソールの選び方｜冬の冷え・足の疲れ・ぶかぶか対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">おしゃれなブーツは長時間履くと足が疲れたり、冬は底冷えしたり。サイズがぶかぶかで歩きにくいことも。ブーツに合うインソールで、疲れ・冷え・フィットの悩みをまとめて解決しましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ブーツには、アーチを支えて疲れを軽減し、底冷えを防ぐ保温性や、ぶかぶかを調整できる厚みのインソールが向いています。ブーツの丈や中の広さに合わせて選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツで足が疲れる・冷える理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ブーツは底が硬めの製品やヒールのあるデザインが多く、長時間履くとアーチが沈んで疲れやすくなります。また冬のブーツは地面からの冷気が底に伝わり、足先が冷えやすいのも悩みです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを支えて衝撃を吸収すれば疲れが軽減され、保温性のある素材なら底冷えも和らぎます。ブーツが少し大きい場合は、やや厚みのあるインソールでフィット感を調整できます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチを支えつつ保温性やフィット調整ができるインソールがブーツに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ブーツに合わせる使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ロングブーツは中が湿気やすいので、脱いだ後にインソールを取り出して乾かすと衛生的です。消臭素材を選ぶとニオイ対策にもなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ヒールの高いブーツでは前すべりが起こりやすいため、前足部のフィット感があるものを選ぶと指の痛みを防げます。</p>
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
          <p className="text-white/90 text-sm mb-5">ブーツの疲れ・冷え・フィットの悩みに。アーチを支えるインソールを比較しましょう。</p>
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
