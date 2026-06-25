import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ふくらはぎ痩せにインソールは効く？【2026年】むくみ・歩き方との関係",
  description:
    "ふくらはぎが太い・むくむ方へ。ふくらはぎの張りやむくみとインソールの関係、筋ポンプを促す歩き方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/calf-slimming-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ふくらはぎ痩せにインソールは効く？むくみと歩き方から考える方法",
  description:
    "ふくらはぎが太い・むくむ方へ。ふくらはぎの張りやむくみとインソールの関係、筋ポンプを促す歩き方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-25",
};

const faqs = [{"q": "インソールでふくらはぎは細くなりますか？", "a": "直接細くするものではありませんが、歩き方を整えて筋ポンプを促し、むくみの軽減を助けます。生活習慣の見直しと組み合わせましょう。"}, {"q": "ふくらはぎのむくみに効果はありますか？", "a": "アーチを支えて歩行時の筋ポンプを働きやすくすることで、むくみの軽減を助けます。着圧ソックスやストレッチの併用も効果的です。"}, {"q": "立ち仕事でふくらはぎが張ります。", "a": "立ち仕事はふくらはぎに負担がかかります。アーチサポートのインソールに加え、合間の足踏みやかかと上げで筋ポンプを促しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "ふくらはぎ痩せ", item: "https://sole-laboratory.com/articles/calf-slimming-insole/" },
  ],
};

const points = [{"t": "アーチサポートで歩行を整える", "b": "正しい体重移動を促し、ふくらはぎに余計な力が入りにくくなります。"}, {"t": "筋ポンプを助ける安定性", "b": "足元が安定すると歩行のリズムが整い、ふくらはぎのポンプ作用が働きやすくなります。"}, {"t": "毎日履ける快適さ", "b": "むくみケアは継続が前提。普段の靴に入り、長時間快適なものを選びましょう。"}];
const related = [{"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/leg-slimming/", "label": "脚痩せインソールの仕組み"}, {"href": "/articles/thigh-slimming-insole/", "label": "太もも痩せのインソール"}, {"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}];

export default function CalfSlimmingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ふくらはぎ痩せ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ふくらはぎ痩せにインソールは効く？むくみと歩き方から考える方法</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ふくらはぎがパンパンに張る、夕方になるとむくんで太く見える——その一因は、歩き方のクセやむくみです。足元を整えて筋ポンプを促すインソールは、ふくらはぎのケアをサポートします。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールでふくらはぎが直接細くなるわけではありませんが、アーチを支えて正しい歩き方を促すと、ふくらはぎの筋ポンプが働きやすくなり、むくみの軽減を助けます。継続と生活習慣の見直しが大切です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ふくらはぎが張る・むくむ原因とインソール</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ふくらはぎの張りやむくみは、長時間の立ち仕事やデスクワークで血流が滞ること、つま先重心や蹴り出し不足の歩き方でふくらはぎに余計な力が入ることなどが関係します。ふくらはぎは『第二の心臓』とも呼ばれ、歩行時の筋ポンプで血液を心臓に戻す役割があります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">姿勢や歩き方のクセは、ふくらはぎへの負担と関係すると一般的に言われます。たとえば猫背で重心が前に偏ると、バランスを取るためにふくらはぎが常に緊張しやすくなります。反対に、骨盤が立って体重がかかと寄りに乗ると、歩くたびにふくらはぎが伸び縮みしてポンプ作用が働きやすい、と説明されることが多いです。むくみは血液やリンパの流れの滞りが一因とされ、同じ姿勢を長く続けることや運動不足が背景にあると考えられています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチを支えるインソールで足元を安定させ、かかとから着地して蹴り出す歩き方を促すと、ふくらはぎの筋ポンプが働きやすくなり、血流が促されてむくみの軽減を助けます。張りの原因となる不自然な力みもやわらぎます。ただしインソールは歩行や姿勢のサポートを期待するものであり、履くだけでふくらはぎが細くなったり痩せたりするわけではありません。感じ方には個人差があり、食事や運動など生活習慣の見直しと併せて取り組むことが前提です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">重心・歩き方を整えるという考え方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールに期待できるのは「ふくらはぎを直接細くすること」ではなく、「足元を整えて、ふくらはぎが働きやすい歩き方を後押しすること」です。土踏まずのアーチが崩れて足が内側に倒れ込むと、重心が偏って一部の筋肉だけに負担が集中しがちになります。アーチサポートで足裏全体に体重を分散させると、左右のバランスや体重移動が安定し、結果として歩行リズムが整いやすくなる、という考え方です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">歩行リズムが整うと、かかと着地から足裏全体、つま先での蹴り出しという一連の動きが自然に行いやすくなります。この蹴り出しの動作がふくらはぎの筋ポンプを使うきっかけになるため、インソールはあくまで「正しく歩くためのきっかけづくり」として捉えるのが現実的です。インソールを入れたからといって意識せず歩けば効果は限られます。足元のサポートと歩き方の意識は、セットで考えることが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">日常の歩行習慣と組み合わせる</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ふくらはぎのケアは継続が前提です。インソールを使うこと自体が目的ではなく、毎日の歩行量や生活習慣と組み合わせて初めて意味を持ちます。エレベーターより階段を選ぶ、一駅分歩く、通勤や買い物のついでに歩幅を少し広げて歩く——こうした小さな積み重ねが、ふくらはぎを動かす機会を増やします。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">デスクワークや立ち仕事で同じ姿勢が続くときは、合間にかかとの上げ下げや足踏みを取り入れると、ふくらはぎのポンプを意識的に働かせられます。入浴やストレッチで脚をほぐす、水分や塩分のとり方に気を配る、睡眠をしっかりとるといった生活面の工夫も、むくみのケアでは欠かせません。インソールはこうした習慣を支える一要素として位置づけ、過度な期待をせずコツコツ続けることがポイントです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">使う前に知っておきたい注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールはふくらはぎを細くする医療機器や痩身グッズではありません。「履くだけで細くなる」「短期間で脚痩せできる」といった表現を見かけても、鵜呑みにせず冷静に判断しましょう。実感には個人差が大きく、合う・合わないも人それぞれです。むくみが長く続く、左右差が強い、痛みやしびれを伴うといった場合は、別の原因が隠れていることもあるため、自己判断せず医療機関に相談してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが合わないインソールは、かえって歩きにくさや痛みの原因になります。最初は短時間から試し、違和感が強いときは無理に使い続けないことが大切です。特定の店舗や通販で見かける商品の価格やセット内容は変わることがあるため、購入前に必ず店頭や公式サイトで最新の情報を確認しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ふくらはぎ痩せの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ふくらはぎ痩せにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">歩行を整えてふくらはぎの筋ポンプを促す、アーチサポートのあるインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ふくらはぎケアの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れたら、かかと着地→足裏全体→つま先で蹴り出す歩き方を意識すると、ふくらはぎのポンプが働きやすくなります。こまめに歩く習慣も効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">むくみが強い方は、着圧ソックスやふくらはぎのストレッチ、長時間同じ姿勢を避けることもあわせて行いましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">歩行とむくみを整えるインソールで、ふくらはぎケアをサポートしましょう。</p>
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
