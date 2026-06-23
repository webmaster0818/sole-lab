import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "基礎代謝とインソールの関係【2026年】姿勢・歩行で消費を増やす考え方",
  description:
    "基礎代謝を上げたい方へ。姿勢・歩行と消費エネルギーの関係、体幹や下半身を使いやすくするインソールの考え方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/metabolism-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "基礎代謝とインソールの関係｜姿勢・歩行でエネルギー消費を増やす考え方",
  description:
    "基礎代謝を上げたい方へ。姿勢・歩行と消費エネルギーの関係、体幹や下半身を使いやすくするインソールの考え方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールで基礎代謝は上がりますか？", "a": "直接上げるものではありません。姿勢・歩行を整えて日常で使う筋肉を増やし、消費を高める土台づくりの補助です。効果には個人差があり、食事・運動との併用が前提です。"}, {"q": "年齢とともに代謝が落ちました。対策は？", "a": "筋肉量の維持が鍵です。インソールで歩行・姿勢を整えつつ、筋トレと活動量アップを組み合わせるのが効果的です。インソールはあくまで土台づくりの補助と考えましょう。"}, {"q": "ながらで代謝を上げられますか？", "a": "姿勢を整えて日常の活動で筋肉を使うこと（NEATの増加）は、ながらでも消費アップに役立ちます。インソールはその土台づくりを助けますが、履くだけで痩せるものではありません。"}, {"q": "履くだけで痩せますか？", "a": "いいえ。インソールは姿勢・歩行を整えるサポート用品で、履くだけで体重が減ったり代謝が上がると断定できるものではありません。消費を増やしたい場合は食事の見直しや運動と組み合わせてください。"}, {"q": "血行がよくなると代謝も上がりますか？", "a": "一般に、体を動かして筋肉を使うと血液の巡りや手足の冷えに変化を感じる方もいますが、感じ方には個人差があります。インソールで足元を安定させて活動量を増やすことは、こうした日常の動きをしやすくする一助となり得ます。"}, {"q": "どのくらい続ければよいですか？", "a": "代謝や体型の変化は短期間では分かりにくいものです。インソールは継続して使うことが前提のため、まずは普段の靴に入れて毎日無理なく履ける快適なものを選びましょう。体調に違和感があれば使用を中止してください。"}];

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
    { "@type": "ListItem", position: 3, name: "基礎代謝", item: "https://sole-laboratory.com/articles/metabolism-insole/" },
  ],
};

const points = [{"t": "姿勢を支える安定性", "b": "足元が安定すると体幹を使った正しい姿勢を保ちやすく、日常で筋肉が働きやすくなります。"}, {"t": "歩行で下半身を使うアーチサポート", "b": "蹴り出す歩き方を促し、大きな筋肉が集まる下半身を使う助けになります。"}, {"t": "毎日続けられる快適さ", "b": "代謝アップは継続が前提。長時間快適で普段の靴に入るものを選びましょう。"}];
const related = [{"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}, {"href": "/articles/core-training-insole/", "label": "体幹インソール"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツ用とダイエット用の違い"}];

export default function MetabolismPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "基礎代謝" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">基礎代謝とインソールの関係｜姿勢・歩行でエネルギー消費を増やす考え方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">年齢とともに落ちる基礎代謝。代謝を上げるには筋肉を使うことが大切です。姿勢や歩行を整えるインソールは、日常の動作で使う筋肉を増やし、消費エネルギーを高める土台づくりをサポートします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールが直接基礎代謝を上げるわけではありませんが、足元を安定させて姿勢・歩行を整えると、日常で使われる筋肉が増え、エネルギー消費を高める助けになります。筋トレ・有酸素運動と組み合わせましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">基礎代謝と姿勢・歩行の関係</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">基礎代謝は安静時に消費されるエネルギーで、その多くを筋肉が占めます。姿勢が崩れて一部の筋肉しか使わない状態だと、日常の活動で使われる筋肉が減り、消費エネルギーも増えにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させ、正しい姿勢・歩行を促すと、体幹や下半身の筋肉が日常的に使われやすくなります。『ながら』で筋肉を使う土台が整うことで、活動量による消費（NEAT）を高める助けになります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">血行についても、一般に体を動かして筋肉を使うとふくらはぎなどがポンプのように働き、下半身に滞りやすい血液の巡りをサポートすると言われます。足元が不安定だと一部の筋肉に偏った負担がかかりやすく、長時間の立ち姿勢や歩行で疲れやむくみを感じる方もいます。足裏のアーチを支えて重心を整えると、立つ・歩くといった基本動作で全身の筋肉をバランスよく使いやすくなり、こうした日常の動きをしやすくする一助となり得ます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ただし、これらはあくまで姿勢・歩行のサポートが期待できる範囲の話です。インソールを履くだけで代謝が上がる・痩せるといった効果を保証するものではなく、感じ方には個人差があります。エネルギー消費を増やしたい場合は、食事の見直しや適度な運動と組み合わせて考えることが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">基礎代謝の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">基礎代謝におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">姿勢と歩行を整え、日常で筋肉を使いやすくするアーチサポートのあるインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">代謝を意識した使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、姿勢を立てて歩く・階段を使う・こまめに動くなど、日常の活動量を増やす意識を持ちましょう。これが消費エネルギーの底上げにつながります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">特別な運動の時間を取りにくい方は、まず「日常の移動」を見直すのがおすすめです。具体的には、1駅手前で降りて歩く、エレベーターより階段を使う、通勤・買い物の道のりを少し遠回りにする、といった工夫です。アーチを支えるインソールで足元が安定すると、こうした「ながら」の動きを続けやすくなり、無理なく活動量を積み重ねられます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立ち姿勢の意識も大切です。座りっぱなしの時間が長いと下半身の筋肉が使われにくくなるため、1時間に一度は立ち上がる、信号待ちでは背筋を伸ばすなど、小さな習慣を重ねましょう。基礎代謝を本格的に上げるには筋トレが効果的です。インソールは姿勢・歩行を整える補助として、こうした運動・食事の見直しと組み合わせて活用するのが現実的な使い方です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">使う前に知っておきたい注意点</h2>
          <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed list-disc pl-5">
            <li><span className="font-bold">「履くだけで痩せる」は誤解。</span>インソールは姿勢・歩行を整えるサポート用品であり、それだけで代謝が上がる・体重が減ると断定できるものではありません。誇大な表現の宣伝には注意しましょう。</li>
            <li><span className="font-bold">効果の感じ方には個人差があります。</span>体格・歩き方・生活習慣によって実感は異なります。食事・運動と併用してこそ意味のある補助と考えてください。</li>
            <li><span className="font-bold">サイズと靴との相性を確認。</span>普段履く靴に入るか、厚みで窮屈にならないかを事前にチェックしましょう。合わないものを無理に使うと逆に疲れやすくなります。</li>
            <li><span className="font-bold">違和感や痛みがあれば中止を。</span>足や膝に痛み・しびれを感じたら使用をやめ、症状が続く場合は医療機関に相談してください。持病がある方は事前に医師へ確認を。</li>
          </ul>
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
          <p className="text-white/90 text-sm mb-5">姿勢と歩行を整えるインソールで、日常の消費アップをサポートしましょう。</p>
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
