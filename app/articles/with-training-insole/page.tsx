import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレとインソールの併用は効果ある？【2026年】姿勢を整えて運動の質を高める",
  description:
    "ダイエットの筋トレとインソールを併用するとどうなる？インソールは痩せる道具ではなく、立ち方・歩き方を整えて日常活動と運動を支える補助。併用の考え方と選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/with-training-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "筋トレとインソールの併用｜姿勢を整えて運動の質を高める考え方",
  description:
    "ダイエットの筋トレとインソールを併用するとどうなる？インソールは痩せる道具ではなく、立ち方・歩き方を整えて日常活動と運動を支える補助。併用の考え方と選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "筋トレ用インソールを使えば筋肉がつきやすくなりますか？", "a": "いいえ。筋肉はトレーニングの負荷と栄養・休養でつくもので、インソールが直接増やすものではありません。インソールは足元を安定させて立位種目のフォームを意識しやすくしたり、日常の移動を楽にする補助です。"}, {"q": "インソールを履くだけで痩せますか？", "a": "履くだけで痩せることはありません。ダイエットは消費と摂取のエネルギーバランスで決まります。インソールは姿勢・歩行を支え、運動や日常活動を続けやすくする環境づくりの補助とお考えください。"}, {"q": "トレーニングシューズに入れても大丈夫ですか？", "a": "軽い有酸素やジムでの移動なら問題ありませんが、高重量のスクワット等では足裏感覚が重要なため、厚いクッションは不向きなことがあります。普段履きでの活用を中心にすると良いでしょう。"}, {"q": "どんな運動と相性が良いですか？", "a": "ウォーキングや立位の自重トレーニング、日常の移動など『立つ・歩く』動作と相性が良いです。足元が安定すると疲れにくく、運動を継続しやすくなります。"}, {"q": "効果はどのくらいで実感できますか？", "a": "足の疲れにくさは多くの方が1〜2週間で感じますが、体型の変化はインソール単体では生まれません。あくまで運動・食事管理を続けるための足元のサポートとお考えください。"}];

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
    { "@type": "ListItem", position: 3, name: "筋トレとの併用", item: "https://sole-laboratory.com/articles/with-training-insole/" },
  ],
};

const points = [{"t": "立位種目で足元が安定する設計", "b": "スクワットやランジなど立って行う種目では、足裏が安定していると重心を意識しやすくなります。土踏まずをしっかり支えるアーチサポート付きを選びましょう。"}, {"t": "普段履きに入る汎用性", "b": "効果を生むのは継続です。トレーニング前後の移動や日常の歩行でも履ける、スニーカーに合う汎用タイプだと使う機会が増えます。"}, {"t": "長時間でも疲れにくいクッション", "b": "ジムへの行き帰りや立ち仕事と兼用するなら、衝撃を吸収するクッション性があると一日を通して足が疲れにくくなります。"}];
const related = [{"href": "/articles/gym-training-insole/", "label": "ジム・筋トレ用インソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツとダイエットのインソール"}, {"href": "/articles/metabolism-insole/", "label": "代謝とインソールの関係"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}];

export default function WithTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "筋トレとの併用" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">筋トレとインソールの併用｜姿勢を整えて運動の質を高める考え方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットで筋トレに取り組むとき、インソールは何の役に立つのか——結論から言えば、インソールは体重を落とす道具ではなく、立ち方・歩き方を安定させて運動や日常生活を支える『脇役』です。主役はあくまで筋トレと生活習慣です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールを履くだけで痩せたり筋肉がついたりすることはありません。ただし足元が安定するとトレーニングのフォームが安定しやすく、日常の歩行も楽になります。インソールは筋トレを続けやすくする環境づくりの補助、と考えるのが現実的です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールは筋トレの「主役」ではなく「土台」</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットの基本は、消費エネルギーを増やし摂取エネルギーを適切に管理することです。筋トレは筋肉量を保ち基礎代謝を支える有効な手段ですが、その効果はトレーニング内容と継続によるもので、インソールが直接もたらすものではありません。この点を正直に押さえておくことが、過度な期待で遠回りしないコツです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で、足元が不安定だと立ち姿勢や歩行のバランスが崩れ、足の疲れがたまりやすくなります。アーチをサポートするインソールで足元の土台を整えると、立ち仕事や移動が楽になり、結果として『動くことが億劫になりにくい』という間接的な後押しになります。スクワットなど立位の種目で姿勢を意識しやすくなる、という声もあります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">筋トレとの併用の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">筋トレとの併用におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足元を安定させて立位トレーニングや日常の歩行を支える、アーチサポート付きインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">併用するときの考え方と注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールはトレーニングの代わりにはなりません。痩せたい・体型を変えたいなら、筋トレ・有酸素運動・食事管理が主役で、インソールは『動きやすい足元を整える脇役』と位置づけてください。器具に頼って運動量を減らしては本末転倒です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">高重量のスクワットやデッドリフトなど、足裏の感覚が重要な種目では、厚みのあるクッションがかえって不安定に感じることがあります。トレーニングシューズはソールが薄く硬めのものが基本で、インソールは普段履きを中心に活用するのがおすすめです。</p>
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
          <p className="text-white/90 text-sm mb-5">足元を安定させて運動と日常の質を高める。アーチを支えるインソールを比較しましょう。</p>
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
