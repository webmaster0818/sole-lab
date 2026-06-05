import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールのデメリット・注意点【2026年】向かない人も解説",
  description:
    "ダイエットインソールのデメリットや注意点を正直に解説。効果が出にくい人の特徴、合わない場合のリスク、後悔しないための選び方をまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/insole-demerit-risk/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールのデメリット・注意点｜向かない人と後悔しない選び方",
  description:
    "ダイエットインソールのデメリットや注意点を正直に解説。効果が出にくい人の特徴、合わない場合のリスク、後悔しないための選び方をまとめました。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ダイエットインソールのデメリットは何ですか？", "a": "履くだけで痩せる即効性はなく、食事・運動の見直しが前提です。また足に合わない製品は痛みの原因になります。仕組みを理解して選ぶことが大切です。"}, {"q": "効果が出にくいのはどんな人ですか？", "a": "即効性を期待する人、毎日続けない人、食事・運動を見直さない人は効果を感じにくい傾向です。継続と生活習慣の見直しが鍵です。"}, {"q": "使わないほうが良い人はいますか？", "a": "足・膝・腰に強い痛みや変形がある方、糖尿病などの持病がある方は、自己判断を避け医師に相談してから使いましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "デメリット・注意点", item: "https://sole-laboratory.com/articles/insole-demerit-risk/" },
  ],
};

const points = [{"t": "即効性を期待しない", "b": "履いてすぐ痩せるものではありません。数週間〜数ヶ月の継続と、食事・運動の見直しが前提です。"}, {"t": "足に合わないと痛みの原因に", "b": "アーチの高さやサイズが合わないと痛み・違和感が出ます。調整できる製品を選び、合わなければ見直しましょう。"}, {"t": "持病がある人は医師に相談", "b": "足・膝・腰に痛みや変形がある方、糖尿病などの持病がある方は、自己判断せず医師に相談を。"}];
const related = [{"href": "/articles/insole-truth/", "label": "ダイエットインソールの真実"}, {"href": "/articles/insole-expectations/", "label": "インソールへの期待値"}, {"href": "/articles/diet-period-insole/", "label": "効果が出る期間の目安"}, {"href": "/articles/correct-usage-insole/", "label": "効果的な使い方"}];

export default function DemeritRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "デメリット・注意点" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールのデメリット・注意点｜向かない人と後悔しない選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">メリットばかりが目立つダイエットインソールですが、デメリットや注意点も知っておくことが、後悔しない選び方につながります。効果が出にくい人の特徴や、合わない場合のリスクを正直に解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ダイエットインソールは『履くだけで痩せる』ものではなく、姿勢・歩行を整える補助です。即効性を期待する人、運動・食事を見直さない人には効果が出にくく、足に合わない製品は痛みの原因にもなります。仕組みを理解して選ぶことが大切です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">知っておきたいデメリット・注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">最大の注意点は、ダイエットインソールが『履くだけで痩せる魔法』ではないことです。あくまで足元を安定させ姿勢・歩き方を整えて消費を高める補助であり、食事や運動を見直さなければ大きな変化は期待しにくいです。即効性を求めると『効果がない』と感じやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、足に合わないアーチの高さやサイズの製品は、痛みや違和感の原因になります。もともと足や膝・腰に痛みや変形がある方は、自己判断で使うと悪化することもあるため注意が必要です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">デメリット・注意点の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">デメリット・注意点におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">仕組みを理解し、足に合う調整しやすいインソールを選ぶことが後悔しないコツです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">向かない人・後悔しないために</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">『何もせず痩せたい』『すぐ結果が欲しい』という方には、ダイエットインソールは向きません。逆に、日常の姿勢・歩き方を整えながらコツコツ取り組める方には、続けやすい補助になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">後悔しないためには、仕組みを理解し、返金保証のある正規品を選び、足に合うか試しながら使うことが大切です。強い痛みや持病がある場合は医療機関に相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">仕組みを理解して、自分に合うインソールを正規品で選びましょう。</p>
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
