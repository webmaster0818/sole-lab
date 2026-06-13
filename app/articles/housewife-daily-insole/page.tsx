import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "家事・買い物の足の疲れに！インソールの選び方【2026年】毎日使いのコツ",
  description:
    "キッチンでの立ち仕事、掃除に洗濯、買い物の往復。家事の一日は意外なほど足を使います。毎日の家事・買い物の疲れをやわらげるインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/housewife-daily-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "家事・買い物の足の疲れにおすすめのインソール｜毎日使いの選び方",
  description:
    "キッチンでの立ち仕事、掃除に洗濯、買い物の往復。家事の一日は意外なほど足を使います。毎日の家事・買い物の疲れをやわらげるインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "スリッパにもインソールを入れられますか？", "a": "薄型タイプなら入れられるスリッパもありますが、形状によっては安定しません。室内用には、かかとのあるルームシューズと薄型インソールの組み合わせが安定しやすくおすすめです。"}, {"q": "家事だけでダイエット効果はありますか？", "a": "インソール自体に痩せる効果はありません。アーチを支えて歩行や立ち姿勢を整える補助であり、体型の変化には食事や運動習慣との組み合わせが前提です。誇大な期待はせず、まず足の疲れにくさの変化から確かめましょう。"}, {"q": "夕方になると足がむくみます。インソールで良くなりますか？", "a": "アーチサポートで歩行時のふくらはぎの筋ポンプが働きやすくなり、むくみ対策の補助になります。ただし片足だけの強いむくみや痛みを伴う場合は、病気の可能性もあるため受診してください。"}, {"q": "どの靴に入れるのが一番効果的ですか？", "a": "一番長く履く靴・歩く距離が長い靴に入れるのが基本です。多くの方は買い物や送り迎えで使うスニーカーが最適です。カットできるタイプなら他の靴への使い回しもしやすくなります。"}, {"q": "毎日使う場合のお手入れと交換時期は？", "a": "週に一度は取り出して陰干しし、汚れは固く絞った布で拭き取りましょう。毎日使うなら3〜6ヶ月がへたりの目安です。クッションが薄く感じたら交換時期です。"}];

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
    { "@type": "ListItem", position: 3, name: "家事・買い物の毎日使い", item: "https://sole-laboratory.com/articles/housewife-daily-insole/" },
  ],
};

const points = [{"t": "買い物用スニーカーへのアーチサポートを基本に", "b": "一日のうち足への負担が大きいのが、荷物を持って歩く買い物の時間です。よく履くスニーカーに、土踏まずを支えるインソールを入れるのが最も効果を感じやすい使い方です。"}, {"t": "キッチンの立ち時間にはクッション性を", "b": "硬いフローリングでの立ち仕事には、足裏への圧力をやわらげるクッション性が役立ちます。室内履きを使う方は、入れられる薄型タイプを選びましょう。"}, {"t": "履き替えの多い生活にはカット調整やソックス型", "b": "家の中はスリッパ、ゴミ出しはサンダル、買い物はスニーカーと、家事は履き替えの連続です。カットできるタイプなら複数の靴に合わせやすく、足に直接装着するソックス型なら履き替えても効果が続きます。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事で疲れないインソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/indoor-slippers-insole/", "label": "室内・スリッパのインソール"}];

export default function HousewifeDailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "家事・買い物の毎日使い" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">家事・買い物の足の疲れにおすすめのインソール｜毎日使いの選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">料理で立ちっぱなし、掃除機をかけて、洗濯物を干して、スーパーへの買い物——家事の一日を歩数にすると、立派な『立ち仕事＋ウォーキング』です。それなのに足元はスリッパや履き慣れたスニーカーのまま、という方がほとんど。毎日の家事・買い物の足の疲れをやわらげるインソール選びを解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">家事・買い物には、買い物用のスニーカーに入れるアーチサポート付きインソールが基本です。キッチンの硬い床対策にはクッション性も重視しましょう。室内と屋外で靴を履き替える生活なら、カットして複数の靴に合わせやすいタイプや、足に直接装着するソックス型も便利です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">家事と買い物で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">家事の負担で見落とされがちなのが、キッチンでの立ち時間です。調理や洗い物で同じ場所に立ち続けると、足裏の同じ部分に体重がかかり続け、ふくらはぎの血流も滞りがちになり、疲れやむくみの原因になります。多くの住まいの床はフローリングで硬く、素足やスリッパでは衝撃も圧力も逃げません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに買い物では、荷物を持って歩くぶん足への負担が増えます。エコバッグに食材を詰めて帰る道のりは、ちょっとした荷物運びの運動です。インソールで足裏のアーチを支えると、立ち時間の圧力分散と歩行時の衝撃吸収の両方を補助でき、夕方の足の重だるさをやわらげる助けになります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">家事・買い物の毎日使いの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">家事・買い物の毎日使いにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">毎日の家事・買い物には、扱いやすくて続けやすいインソールが一番です。履き替えの多い方には、足に直接装着するソックス型のランウェイキュアソール（女性向けM/L・22.5〜25cm）も便利です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">毎日の家事で無理なく続けるコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まずは一番よく履く靴1足に入れて、買い物や送り迎えなど歩く場面から試すのがおすすめです。慣れてきたら室内用と使い分けると、一日を通して足の負担をケアできます。キッチンでの立ち仕事の合間に、かかとの上げ下げでふくらはぎを動かすと、むくみ対策としてより効果的です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足裏やかかとの痛みが続く、朝の一歩目が強く痛む、むくみが片足だけ強いなどの場合は、疲れではなく病気が隠れていることがあります。インソールで様子を見続けず、整形外科など医療機関を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">立ちっぱなしの家事と毎日の買い物に。足の疲れをやわらげるインソールを比較しましょう。</p>
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
