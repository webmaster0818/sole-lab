import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの2足持ち・ローテーション活用術【2026年】寿命と衛生面のメリット",
  description:
    "インソールは2足持ちでローテーションすると長持ちする？乾燥時間の確保による衛生面のメリット、複数の靴で使い回す場合の注意点、ローテーション向きインソールの選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/rotation-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの2足持ち・ローテーション活用術｜寿命と衛生面のメリット",
  description:
    "インソールは2足持ちでローテーションすると長持ちする？乾燥時間の確保による衛生面のメリット、複数の靴で使い回す場合の注意点、ローテーション向きインソールの選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールは2足持ちすると本当に長持ちしますか？", "a": "1足あたりの使用頻度が半分になり、使わない日に内部までしっかり乾燥させられるため、ニオイや素材のへたりの進行を抑えやすくなります。「2倍長持ち」と断定はできませんが、衛生面・快適さの維持には明確なメリットがあります。"}, {"q": "1枚のインソールを毎日違う靴に入れ替えて使ってもいいですか？", "a": "可能ですが、靴ごとに内寸が違うためフィットが安定せず、出し入れの繰り返しで縁が傷みやすくなります。よく履く靴にはそれぞれ専用の1枚を割り当てるほうがおすすめです。"}, {"q": "ローテーション用の2枚目は同じ製品が良いですか？", "a": "履き心地を一定に保ちたいなら同じ製品・同じサイズが無難です。一方で、仕事用はサポート重視・休日用はクッション重視など、シーンに合わせて使い分けるのも合理的です。"}, {"q": "休ませている間のインソールはどう保管すればいいですか？", "a": "靴に入れたままにせず取り出して、直射日光を避けた風通しのよい場所で陰干ししてください。直射日光やドライヤーでの乾燥は素材の変形・劣化の原因になることがあります。"}, {"q": "ローテーションしていれば交換しなくていいですか？", "a": "いいえ。へたり・剥がれ・クッション性の低下を感じたら、使用期間にかかわらず交換のタイミングです。サポート力が落ちたインソールを使い続けると本来の役割を果たせません。"}];

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
    { "@type": "ListItem", position: 3, name: "2足持ち・ローテーション", item: "https://sole-laboratory.com/articles/rotation-insole/" },
  ],
};

const points = [{"t": "靴ごとに専用の1枚を割り当てる", "b": "1枚を毎日違う靴に入れ替えると、カット調整が靴ごとに合わず、出し入れで縁が傷みやすくなります。よく履く靴2〜3足それぞれに専用のインソールを入れて、靴ごとローテーションするのが手間なく確実です。"}, {"t": "乾きやすさ・手入れのしやすさで選ぶ", "b": "ローテーション運用では「休ませている間にしっかり乾くか」が重要です。陰干しで乾きやすい構造か、手入れ方法が公式に案内されているか（手洗い可・拭き取りのみ等）を確認しましょう。"}, {"t": "同じモデルで揃えるか役割分担するか", "b": "同じモデルを2枚なら感覚が変わらず続けやすいのがメリット。通勤用はアーチサポート重視、室内用はクッション重視など、シーンで役割分担するのも実用的です。"}];
const related = [{"href": "/articles/lifespan/", "label": "インソールの寿命と交換時期"}, {"href": "/articles/washing-guide/", "label": "インソールの洗い方・お手入れガイド"}, {"href": "/articles/deodorize-insole/", "label": "インソールの防臭・消臭ケア"}, {"href": "/articles/insole-care/", "label": "インソールの正しい使い方・お手入れまとめ"}];

export default function RotationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "2足持ち・ローテーション" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールの2足持ち・ローテーション活用術｜寿命と衛生面のメリット</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">毎日同じインソールを使い続けると、汗が乾き切らないまま翌日を迎え、ニオイや劣化が早く進みがちです。靴と同じように、インソールも2足以上を交互に使う「ローテーション」が長持ちと衛生の両面で理にかなった使い方です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールを2足持ちして1日おきに交互に使うと、内部の湿気を完全に乾かす時間が確保でき、ニオイ・劣化の進行を抑えやすくなります。1つのインソールを複数の靴へ毎日入れ替えるより、靴ごとに専用のインソールを用意するほうがフィット調整の手間もなくおすすめです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">なぜローテーションでインソールが長持ちするのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足は1日でコップ1杯程度の汗をかくといわれ、その多くを靴の中でインソールが受け止めています。湿ったままの状態が続くと、雑菌が繁殖してニオイの原因になるだけでなく、素材のへたり・剥がれといった劣化も早まります。一晩置いただけでは内部まで乾き切らないことも多く、連日使用は消耗を加速させます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">2足を交互に使えば、使わない日に丸1日以上の乾燥時間を確保できます。1足あたりの使用日数が半分になるぶん物理的な消耗も分散されるため、トータルで見ると「2足を長く使う」ほうが快適な状態を保ちやすいのです。革靴を毎日履き替えるのと同じ発想です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">2足持ち・ローテーションの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">2足持ち・ローテーションにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ローテーション前提なら、手入れ方法が明確で日常使いしやすいインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ローテーション運用のコツと交換時期</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使い終わったインソールは靴から取り出し（ソックス型は脱いで）、風通しのよい日陰で干すのが基本です。手入れ方法は製品ごとに異なり、ピットソールは中性洗剤での手洗い（洗濯機は厳禁）、ランウェイキュアソールは水洗い非推奨で布拭き＋陰干しが公式の案内です。詳しくは各製品の説明に従ってください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ローテーションしていても、アーチ部分のへたり・表面の剥がれ・クッションの薄れを感じたら交換のサインです。また、足の痛みや変形など気になる症状がある場合は、インソールの使い回しで様子を見るのではなく、整形外科など医療機関への相談を優先してください。</p>
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
          <p className="text-white/90 text-sm mb-5">ローテーション用の2枚目にも。手入れしやすく長く使えるインソールを比較してみましょう。</p>
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
