import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ザムストのインソールはどんな人向け？【2026年】ダイエット目的との使い分けを解説",
  description:
    "サポーターで有名なザムスト（ZAMST）のインソール「Footcraft」はどんな人向け？公式情報に基づくアーチタイプ別設計・競技別ラインの特徴と、ダイエット・ボディメイク目的との違いを中立に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/zamst-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ザムストのインソールはどんな人向け？ダイエット目的との使い分けガイド",
  description:
    "サポーターで有名なザムスト（ZAMST）のインソール「Footcraft」はどんな人向け？公式情報に基づくアーチタイプ別設計・競技別ラインの特徴と、ダイエット・ボディメイク目的との違いを中立に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ザムストのインソールはダイエット向きですか？", "a": "ザムストのFootcraftは公式情報上、スポーツシーンでのアーチサポートを軸にした機能性インソールです（2026年6月参照）。ダイエット・ボディメイクを主目的にするなら、姿勢・歩行サポートを軸に設計された専用インソールのほうが目的に合致します。"}, {"q": "ザムストFootcraftはどんな人に向いていますか？", "a": "サッカー・バスケ・テニス・ゴルフなどのスポーツで、足のアーチサポートや安定を求める方に向きます。アーチの高さでLOW・MIDDLE・HIGHから選べる点が公式の特徴です。"}, {"q": "ザムストとピットソールはどちらが良いですか？", "a": "優劣ではなく目的の違いで選びましょう。競技中の足のサポートが目的ならザムスト、日常の歩行・姿勢からボディメイクしたいならピットソールのような設計が目的に合います。"}, {"q": "Footcraftのアーチタイプはどう選びますか？", "a": "公式情報では、店頭の専用チェックや自宅での判別方法でアーチの高さ（LOW・MIDDLE・HIGH）を確認して選ぶ方式が案内されています。詳細はザムスト公式サイト・取扱店で確認してください。"}, {"q": "スポーツ用と日常用でインソールを分けるべきですか？", "a": "設計の目的が異なるため、分けるのがおすすめです。競技用シューズにはスポーツ向け、毎日履く靴には日常・ボディメイク向けと、靴ごとに入れ分けると両方の機能を活かせます。"}];

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
    { "@type": "ListItem", position: 3, name: "ザムストと比較検討するとき", item: "https://sole-laboratory.com/articles/zamst-comparison/" },
  ],
};

const points = [{"t": "競技サポートか、日常のボディメイクかを決める", "b": "部活やスポーツでのアーチサポート・安定が目的ならザムストのような競技別設計が候補です。日常の歩行で姿勢・歩行バランスを整えてボディメイクしたいなら、その目的で設計されたインソールが合います。"}, {"t": "自分のアーチタイプ・足の状態を把握する", "b": "ザムストがアーチ高で3タイプを展開しているように、インソール選びでは自分の足の状態を知ることが重要です。土踏まずの高さや靴のサイズを確認してから選ぶと失敗が減ります。"}, {"t": "使う頻度が高い靴を基準にする", "b": "競技用シューズに入れるのか、毎日のスニーカーに入れるのかで選択は変わります。ボディメイク目的なら、最も長い時間履く日常靴に入れられるものを基準にしましょう。"}];
const related = [{"href": "/articles/basketball-insole/", "label": "バスケットボール向けインソール"}, {"href": "/articles/student-bukatsu-insole/", "label": "中高生の部活向けインソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用インソールの違い"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function ZamstComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ザムストと比較検討するとき" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ザムストのインソールはどんな人向け？ダイエット目的との使い分けガイド</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スポーツサポーターで知られる「ザムスト（ZAMST）」は、機能性インソール「Footcraft（フットクラフト）」シリーズも展開しています。部活やスポーツで定番のブランドですが、ダイエット・ボディメイク目的の場合はどう考えるべきか。公式情報に基づいて整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ザムストのFootcraftは、アーチの高さで選べる3タイプ展開と競技別ラインを持つ、スポーツシーンの足のサポートを得意とするインソールです。当サイトの3製品は姿勢・歩行サポートによるボディメイク軸の設計で、目的が異なります。競技中の足のサポートならザムスト、日常の歩行からのボディメイクなら専用設計品と、シーンで使い分けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ザムスト Footcraftとはどんなインソール？（公式情報まとめ）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ザムスト（ZAMST）は、医療分野の知見をスポーツに応用する日本シグマックス株式会社のスポーツサポートブランドです（出典：ザムスト公式オンラインショップ、2026年6月参照）。機能性インソール「Footcraft」シリーズは2017年に登場し、サポーターで培った知見を足元のサポートに展開しています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">公式サイトによると、Footcraftは足の「ウィンドラスメカニズム」に着目し、足のアーチが強い状態をサポートする設計が特徴です。硬さと面積の異なる3層のパーツを組み合わせた特許構造で、安定性としなやかなサポートの両立をうたっています。アーチの高さに合わせてLOW・MIDDLE・HIGHの3タイプから選べる点も特徴的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ラインナップはスポーツ全般向けのSTANDARD、衝撃吸収を重視したCUSHION+、サッカー向けFOOTBALL STYLE、バスケ・バレー・テニス等向けAGILITY GRIP、ゴルフ向けなど競技別に展開されています。得意領域は「スポーツ時のアーチサポート・競技別設計」です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ザムストと比較検討するときの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ザムストと比較検討するときにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">日常の歩行でボディメイクを狙うなら、姿勢・歩行サポートを軸に設計された以下の3製品が当サイトの比較対象です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ザムストと当サイト紹介製品の使い分け</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ザムストFootcraftはスポーツシーンの足のサポートを目的とした設計、当サイトの3製品は日常の歩行・姿勢からのボディメイクを軸にした設計で、想定シーンが異なります。競技用シューズにはスポーツ向け、毎日の靴にはボディメイク向けと、シーンごとに使い分けるのが現実的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">中高生の部活など成長期のスポーツでは、痛みや違和感がある場合にインソールだけで対処せず、指導者や医療機関に相談することも大切です。</p>
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
