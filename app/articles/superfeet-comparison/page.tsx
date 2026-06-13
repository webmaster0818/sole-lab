import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "スーパーフィートのインソールはどんな人向け？【2026年】ダイエット目的との使い分け",
  description:
    "米国発のインソールブランド「スーパーフィート（Superfeet）」はどんな人向け？公式情報に基づくヒールカップ・足病医学由来の設計の特徴と、ダイエット・ボディメイク目的のインソールとの違いを中立に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/superfeet-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "スーパーフィートのインソールはどんな人向け？ダイエット目的との使い分けガイド",
  description:
    "米国発のインソールブランド「スーパーフィート（Superfeet）」はどんな人向け？公式情報に基づくヒールカップ・足病医学由来の設計の特徴と、ダイエット・ボディメイク目的のインソールとの違いを中立に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スーパーフィートのインソールはダイエット向きですか？", "a": "スーパーフィートは公式情報上、足病医学に基づく理論背景とヒールカップによる足骨格の安定を特徴とするブランドです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、姿勢・歩行サポートを軸に設計された専用インソールのほうが目的に合致します。"}, {"q": "スーパーフィートはどんな人に向いていますか？", "a": "登山・ランニング・スキーなどのアクティビティで、かかとの安定や足骨格のサポートを求める方に向くブランドです。用途別の製品ラインが公式サイトで案内されています。"}, {"q": "スーパーフィートとピットソールはどちらが良いですか？", "a": "優劣ではなく目的の違いで選びましょう。足骨格の安定やアウトドア用途ならスーパーフィート、日常の歩行・姿勢からボディメイクしたいならピットソールのような設計が目的に合います。"}, {"q": "スーパーフィートのヒールカップとは何ですか？", "a": "かかとを深く包み込む頑丈な構造のことで、公式説明ではかかとの脂肪層を包み込み足本来の衝撃吸収機能を引き出すとされています（特許取得と公式サイトに記載）。"}, {"q": "硬めのインソールに慣れるまでどれくらいかかりますか？", "a": "個人差がありますが、サポート感の強いインソール全般で、最初の数日〜1週間ほどかけて装着時間を徐々に延ばす慣らし期間を設けるのが一般的です。違和感が続く場合は使用を中止し、サイズや相性を見直しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "スーパーフィートと比較検討するとき", item: "https://sole-laboratory.com/articles/superfeet-comparison/" },
  ],
};

const points = [{"t": "「足の安定」目的か「ボディメイク」目的かを決める", "b": "かかとや足骨格の安定を求めるならスーパーフィートのような後足部サポート系が候補です。歩行や姿勢を整えてスタイルケア・消費カロリーアップを狙うなら、ボディメイク軸で設計されたインソールが目的に合います。"}, {"t": "使う靴・アクティビティに合わせる", "b": "スーパーフィートは登山・ランニング・スキーなど用途別ラインが豊富です。毎日のスニーカーや通勤靴でボディメイク習慣を作りたい場合は、日常使いを前提にした薄型・軽量の姿勢サポート系が扱いやすい選択です。"}, {"t": "硬さ・サポート感の好みを確認する", "b": "骨格をしっかり支えるタイプはサポート感が強い分、慣れるまで違和感を覚える人もいます。初めてなら、徐々に慣らす前提でサポートの強さを選ぶと失敗しにくくなります。"}];
const related = [{"href": "/articles/hiking-insole/", "label": "登山・ハイキング向けインソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用インソールの違い"}, {"href": "/articles/material-comparison/", "label": "インソール素材の徹底比較"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function SuperfeetComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "スーパーフィートと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">スーパーフィートのインソールはどんな人向け？ダイエット目的との使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">登山・ランニングシューズの売り場で定番の「スーパーフィート（Superfeet）」。米国生まれの硬めのインソールとして知られますが、ダイエットやボディメイク目的の場合はどう考えればよいのでしょうか。公式情報に基づいて特徴と使い分けを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">スーパーフィートは足病医学に基づく理論背景を持ち、深く頑丈なヒールカップで後足部を支えて足本来の機能を引き出すことを得意とする米国ブランドです。当サイトの3製品は姿勢・歩行サポートによるボディメイク軸の設計で、目的が異なります。足の骨格サポートやアウトドア・スポーツ用途ならスーパーフィート、日常歩行でのボディメイクなら専用設計品と使い分けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スーパーフィートとはどんなブランド？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スーパーフィート（Superfeet）は米国のインソールブランドで、治療向けオーダーメイドインソールを手がけてきたノースウエスト・ポディアトリック・ラボラトリーの技術がルーツとされています（出典：スーパーフィート公式オンラインストア、2026年6月参照）。公式サイトでは、足病医学に基づく理論背景と、米国内外で40件以上の特許を持つことが紹介されています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">設計の柱は、かかとを深く包み込む頑丈な「ヒールカップ」。公式説明では、かかとの脂肪層を包み込んで足本来の衝撃吸収機能を引き出すこと、内くるぶし下（載距突起）のサポート、高密度フォームとスタビライザーによる足骨格の安定が特徴とされています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">製品ラインはALL PURPOSE（全般）、ACTIVE（ランニング向け）、Easyfit（革靴・パンプス向け）、Hike（登山）、Winter（スキー・スノーボード）など用途別に展開されています。得意領域は「足骨格の安定・後足部のサポート」といえます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スーパーフィートと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スーパーフィートと比較検討するときにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエット・ボディメイクを目的にするなら、姿勢・歩行サポートを軸に設計された以下の3製品が当サイトの比較対象です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">スーパーフィートと当サイト紹介製品の使い分け</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">スーパーフィートは足骨格の安定やアウトドア・スポーツでのサポートを得意とするブランド、当サイトの3製品は日常の歩行・姿勢からのボディメイクが軸で、設計の目的が異なります。登山靴やランニングシューズには用途特化型、毎日履く靴にはボディメイク向けと、靴ごとに使い分けるのが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">どちらのタイプでも、足に合わないサイズで使うと本来の機能を発揮できません。サイズ選びと靴との相性は購入前に必ず確認しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">日常の歩行からボディメイクを狙うインソールを、目的別に比較してみましょう。</p>
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
