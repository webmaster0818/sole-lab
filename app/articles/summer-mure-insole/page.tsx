import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "夏のインソールの蒸れ対策【2026年】ニオイ・雑菌を防ぐ選び方とケア",
  description:
    "夏の靴の中は高温多湿。インソールの蒸れ・ニオイが気になる季節の対策を解説。抗菌防臭素材の選び方、乾燥・ローテーションのケア習慣、サンダル時期の使い方、おすすめ3選も紹介。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/summer-mure-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "夏のインソールの蒸れ対策｜ニオイ・雑菌を防ぐ選び方とケア習慣",
  description:
    "夏の靴の中は高温多湿。インソールの蒸れ・ニオイが気になる季節の対策を解説。抗菌防臭素材の選び方、乾燥・ローテーションのケア習慣、サンダル時期の使い方、おすすめ3選も紹介。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "夏はインソールを毎日洗うべきですか？", "a": "毎日の水洗いは乾き切らずかえって雑菌を増やすことがあります。基本は毎日の陰干しと2セットのローテーションで、洗うのは週1回程度を目安に。洗い方は製品の指示に従ってください。"}, {"q": "インソールのニオイが取れません。どうすれば良いですか？", "a": "ニオイが染みついたインソールは雑菌が素材の奥まで入り込んでいる状態で、完全に戻すのは難しいことが多いです。洗って乾かしても改善しない場合は交換し、次からは乾燥とローテーションの習慣で予防しましょう。"}, {"q": "サンダルの季節はインソールをどう使えば良いですか？", "a": "中敷きを固定しにくいサンダルでは、足に直接装着するソックス型（ランウェイキュアソールなど）が組み合わせやすい選択肢です。サンダル用の選び方は別記事でも解説しています。"}, {"q": "抗菌防臭加工があれば洗わなくても大丈夫ですか？", "a": "抗菌防臭加工は雑菌の繁殖を抑える助けにはなりますが、汗や皮脂の汚れ自体は蓄積します。加工があっても乾燥・定期的な洗浄・交換は必要と考えてください。"}, {"q": "夏の蒸れで足がかゆいのですが、インソールで治りますか？", "a": "かゆみや皮むけがすでにある場合は水虫など皮膚疾患の可能性があり、インソールでは治りません。まず皮膚科で診てもらい、再発予防として蒸れにくい素材選びと乾燥の習慣を取り入れましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "夏の蒸れ対策", item: "https://sole-laboratory.com/articles/summer-mure-insole/" },
  ],
};

const points = [{"t": "抗菌防臭への配慮がある素材を選ぶ", "b": "夏のインソールは、雑菌の繁殖を抑える抗菌防臭加工があるかをまずチェック。スリムアップインソールのように抗菌防臭をうたうEVA/PE素材のタイプは、蒸れる季節に扱いやすい選択肢です。"}, {"t": "洗える・乾かしやすいタイプを選ぶ", "b": "夏は洗うサイクルが増えるため、水洗いできるか・乾きやすい素材かが重要です。洗い方は製品の指示に従い、直射日光ではなく陰干しで乾かすと劣化を抑えられます。"}, {"t": "2セットのローテーションで「乾く時間」を確保", "b": "一晩で乾き切らないのが夏のインソールです。2セットを交互に使えば、毎日完全に乾いた状態で履けて、雑菌の増殖もへたりの進行も抑えられます。靴自体も2足で回すのが理想です。"}];
const related = [{"href": "/articles/washing-guide/", "label": "インソールの洗い方ガイド"}, {"href": "/articles/sandals-insole/", "label": "サンダル用インソール"}, {"href": "/articles/material-comparison/", "label": "インソールの素材比較"}, {"href": "/articles/indoor-slippers-insole/", "label": "室内・在宅ワークのインソール"}];

export default function SummerMurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "夏の蒸れ対策" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">夏のインソールの蒸れ対策｜ニオイ・雑菌を防ぐ選び方とケア習慣</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">気温と湿度が上がる夏は、靴の中が一年で最も過酷な環境になります。足は一日でコップ約1杯分の汗をかくといわれ、汗を吸ったインソールを高温の靴内に放置すれば、雑菌が増えてニオイや肌トラブルの原因に。夏こそインソールの素材選びと毎日のケアが効いてきます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">夏の蒸れ対策は「抗菌防臭などニオイに配慮した素材を選ぶこと」と「乾かす習慣をつくること」の2本柱です。インソールは帰宅後に靴から出して風通しの良い場所で乾かし、できれば2セットでローテーションを。汗をかいてもケアしやすい水洗い可能なタイプだと夏は特に扱いやすくなります。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">夏に靴の中が蒸れてニオイやすくなる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴の中のニオイの主な原因は汗そのものではなく、汗と皮脂・角質を栄養にして増える雑菌です。夏は気温と湿度が高く、靴内は雑菌が好む高温多湿の状態が長時間続きます。汗を吸ったインソールは乾きにくく、翌朝も湿ったまま履くと雑菌が増えやすい循環に入ってしまいます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">対策の考え方はシンプルで、「菌の増えにくい素材を選ぶ」「湿気をためない」の2つです。抗菌防臭加工のあるインソールは雑菌の繁殖を抑える助けになり、毎日の乾燥やローテーションは湿気そのものを断ちます。蒸れは足のかゆみや水虫など皮膚トラブルの温床にもなるため、ニオイ対策と同時に足の健康管理でもあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">夏の蒸れ対策の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">夏の蒸れ対策におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">蒸れ対策の観点で特に挙げられるのは、抗菌防臭のEVA/PE素材でカット調整もできるスリムアップインソールです。ピットソール（XS〜L・カット可）は特許取得のアーチサポートが特徴で、日々のケアと組み合わせて夏も使えます。ランウェイキュアソールはソックス型で靴の中敷きを増やさないため、サンダルなど中敷きを入れにくい夏の履き物と組み合わせやすいタイプです。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">夏のインソールケア習慣と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">帰宅したらインソールを靴から取り出し、風通しの良い場所で乾かすのを習慣にしましょう。靴側にも除湿剤や丸めた新聞紙を入れると乾きが早まります。汗の多い日は5本指ソックスや吸湿性の高い靴下を組み合わせると、足とインソールの間の湿気を減らせます。ニオイが取れなくなったり、へたりを感じたりしたら交換のサインです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足の指の間がかゆい・皮がむける・ジュクジュクするといった症状がある場合は、蒸れによる水虫（白癬）など皮膚トラブルの可能性があるため皮膚科を受診してください。また、蒸れとは別に足裏の痛みが続く場合は整形外科で確認を。インソールのケアはあくまで予防の習慣であり、症状が出てからの治療の代わりにはなりません。</p>
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
          <p className="text-white/90 text-sm mb-5">高温多湿の夏を快適に。蒸れ・ニオイに配慮したインソールとケア方法を比較しましょう。</p>
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
