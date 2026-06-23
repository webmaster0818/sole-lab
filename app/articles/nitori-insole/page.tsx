import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ニトリのインソールはダイエットに使える？【2026年】取り扱いと選び方",
  description:
    "ニトリにダイエットインソールはある？ニトリのインソールの特徴と、ダイエット目的の専用品との違い、目的別の選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/nitori-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ニトリのインソールはダイエットに使える？取り扱いと専用品の違い",
  description:
    "ニトリにダイエットインソールはある？ニトリのインソールの特徴と、ダイエット目的の専用品との違い、目的別の選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ニトリにダイエットインソールはありますか？", "a": "ニトリのインソールは日常の快適さ向けが中心で、ダイエット専用設計ではありません。ダイエット目的には専用品が向いています。"}, {"q": "ニトリのインソールは安いですか？", "a": "低価格でコスパが良いのが特徴です。日常の靴を手軽に快適にしたい方に向いています。具体的な価格や在庫は店舗・公式サイトでご確認ください。"}, {"q": "専用品との違いは何ですか？", "a": "目的が異なります。ニトリ品は日常の快適さ重視、ダイエットインソールは姿勢・歩行を整える設計です。"}, {"q": "ニトリのインソールでダイエットできますか？", "a": "インソールはあくまで履き心地や歩きやすさを補助するものです。汎用インソールに体重を減らす機能はなく、ダイエットは食事や運動など生活習慣全体で取り組むのが基本です。歩く姿勢を意識したい場合はアーチサポート付きの専用設計が選択肢になります。"}, {"q": "サイズが合わないときは調整できますか？", "a": "インソールはハサミでカットしてサイズを合わせるタイプが一般的です。カットラインや調整可否は製品ごとに異なるため、購入前にパッケージや店舗・公式の表示を確認しましょう。靴のサイズや形状によって入れたときの感触も変わります。"}];

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
    { "@type": "ListItem", position: 3, name: "ニトリ", item: "https://sole-laboratory.com/articles/nitori-insole/" },
  ],
};

const points = [{"t": "コスパ重視の日常使いならニトリ", "b": "低価格でクッション・消臭など日常の快適さを求めるならニトリの製品が手軽です。"}, {"t": "ダイエット目的は専用設計", "b": "姿勢・歩き方を整えてボディメイクを狙うなら、専用ダイエットインソールが向いています。"}, {"t": "目的で選び分ける", "b": "『日常の快適さ』か『ダイエット』かで選ぶ製品が変わります。"}];
const related = [{"href": "/articles/muji-insole/", "label": "無印のインソール"}, {"href": "/articles/donki-insole/", "label": "ドンキのインソール"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}];

export default function NitoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ニトリ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ニトリのインソールはダイエットに使える？取り扱いと専用品の違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">お、ねだん以上でおなじみのニトリ。生活雑貨の一つとしてインソールも扱われていますが、ダイエット目的にはどうなのか——ニトリのインソールの特徴と専用品との違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ニトリのインソールは、低価格でクッション性や消臭など日常の快適さを高めるタイプが中心です。姿勢・歩き方を整える本格的なダイエット設計とは目的が異なるため、ダイエット重視なら専用インソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ニトリのインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ニトリは生活雑貨を低価格で展開しており、インソールもクッション性や消臭・抗菌など日常の快適さを重視した手頃な製品が中心です。気軽に試せてコスパが良いのが魅力です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">市販の汎用インソールには、衝撃を吸収するクッションタイプ、消臭・抗菌で蒸れを抑えるタイプ、サイズ調整や底冷え対策など用途別のものがあります。立ち仕事や長時間歩く日の疲れ対策には厚みのあるクッション系、靴の中の臭いが気になるなら消臭・抗菌系と、目的に合わせて選ぶのが基本です。多くは差し込むだけで使え、ハサミでカットしてサイズを合わせられます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、ダイエットインソールは足元を安定させ姿勢・歩き方を整える専用設計です。ニトリ品は日常の快適さには向きますが、ボディメイクを狙うなら専用品のほうが目的に合います。なお具体的な取り扱い品目・価格・在庫は変わることがあるため、最新情報は店舗または公式サイトでご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ニトリの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ニトリにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエットや姿勢改善が目的なら、専用設計のインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">目的別の選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">とにかく安く日常の靴を快適にしたいならニトリの汎用インソールが手軽です。姿勢や歩き方を整えてダイエットにつなげたいなら、専用設計の製品を選びましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">価格も目的も異なるため、自分の目的に合うかで選ぶのがポイントです。選ぶ際は、まず使う靴の種類（スニーカー・革靴・パンプスなど）と、求める機能（クッション・消臭・サイズ調整・姿勢サポート）を整理しておくと迷いにくくなります。汎用品は手頃に試せる反面、姿勢や歩行を積極的に整える設計ではない点を踏まえて選びましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">ダイエット目的なら、姿勢と歩行を整える専用インソールを比較しましょう。</p>
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
