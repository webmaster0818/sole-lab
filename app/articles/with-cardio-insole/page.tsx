import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "有酸素運動とインソールの併用｜【2026年】ウォーキングやジョグの足の負担を軽く",
  description:
    "ダイエットの有酸素運動とインソールを併用するとどうなる？インソールは脂肪を燃やす道具ではなく、ウォーキングやジョギングの足の負担を和らげて続けやすくする補助。選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/with-cardio-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "有酸素運動とインソールの併用｜歩行・ジョグの負担を軽くして続けやすく",
  description:
    "ダイエットの有酸素運動とインソールを併用するとどうなる？インソールは脂肪を燃やす道具ではなく、ウォーキングやジョギングの足の負担を和らげて続けやすくする補助。選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールを入れると消費カロリーは増えますか？", "a": "ほとんど変わりません。消費カロリーは運動の強度・時間・体重で決まり、インソールが直接増やすものではありません。インソールは足の負担を減らして運動を続けやすくする補助です。"}, {"q": "ウォーキングダイエットにインソールは効果がありますか？", "a": "脂肪燃焼を直接高めるものではありませんが、着地衝撃や足の疲れをやわらげることで、ウォーキングを無理なく継続しやすくなります。継続こそがダイエットの鍵なので、その点で役立ちます。"}, {"q": "ジョギング用とウォーキング用で選び方は違いますか？", "a": "基本は共通で、衝撃吸収とアーチサポートが要です。ジョギングは衝撃が大きいぶんクッション性を、長距離ウォーキングはアーチサポートと疲れにくさをより重視すると良いでしょう。"}, {"q": "毎日有酸素運動をしても膝が痛くなりません？", "a": "運動量を急に増やすと膝や脛を痛めることがあります。クッション性のあるインソールは負担軽減の助けになりますが、痛みが出たら休養し、続く場合は整形外科に相談してください。"}, {"q": "どのくらいの期間で痩せますか？", "a": "インソール単体では痩せません。体重の変化は運動の継続と食事管理の積み重ねによるもので個人差が大きいです。まずは運動を習慣化することを目標にしましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "有酸素運動との併用", item: "https://sole-laboratory.com/articles/with-cardio-insole/" },
  ],
};

const points = [{"t": "着地衝撃を吸収するクッション", "b": "ウォーキングやジョギングはかかとへの衝撃が繰り返されます。クッション性の高いインソールで衝撃を和らげると、足や膝の負担がたまりにくくなります。"}, {"t": "アーチサポートで歩行を安定", "b": "土踏まずを支えると着地のブレが減り、長く歩いても疲れにくくなります。フォームの安定にもつながります。"}, {"t": "運動靴に合う厚みとフィット", "b": "ランニングシューズやウォーキングシューズに無理なく収まる厚みで、ズレにくいフィット感のものを選びましょう。"}];
const related = [{"href": "/articles/walking-diet/", "label": "ウォーキングダイエットとインソール"}, {"href": "/articles/effective-walking/", "label": "効果的なウォーキングの歩き方"}, {"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/sports-vs-diet/", "label": "スポーツとダイエットのインソール"}];

export default function WithCardioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "有酸素運動との併用" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">ダイエット</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">有酸素運動とインソールの併用｜歩行・ジョグの負担を軽くして続けやすく</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットの有酸素運動（ウォーキングやジョギング）にインソールを取り入れると何が変わるのか——インソールは脂肪を直接燃やすものではありませんが、足の負担をやわらげて運動を続けやすくする補助になります。主役はあくまで運動の継続です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">インソールが脂肪を燃やしたり消費カロリーを大きく増やしたりすることはありません。ただし足元の衝撃や疲れがやわらぐと、ウォーキングやジョギングを無理なく続けやすくなります。インソールは『有酸素運動を継続するための足のサポート』と考えるのが現実的です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">有酸素運動の効果はインソールではなく「継続」から</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットにおける有酸素運動の価値は、消費エネルギーを増やし、運動習慣を通じて生活全体の活動量を底上げできる点にあります。ただしこの効果は運動そのものと継続によるもので、インソールが消費カロリーを直接増やすわけではありません。『インソールで脂肪が燃える』といった表現には根拠がない点に注意してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、ウォーキングやジョギングはかかとや膝に繰り返し衝撃がかかり、足が疲れたり痛んだりすると続かなくなりがちです。クッション性とアーチサポートのあるインソールで衝撃をやわらげ、足元を安定させると、疲れや痛みで運動が中断しにくくなります。これが『続けやすさ』という形での後押しです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">有酸素運動との併用の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">有酸素運動との併用におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">着地衝撃を吸収しアーチを支える、有酸素運動を続けやすくするインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">有酸素運動と併用するときのコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエット効果の主役は運動の継続です。インソールはあくまで足の負担を減らして続けやすくする脇役なので、『インソールを入れたから短時間でも痩せる』とは考えないでください。週の合計時間や歩数など、続けられる目標設定が大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">走る量を急に増やすとシンスプリントや膝の痛みなど故障につながります。クッション性のあるインソールは負担軽減の助けになりますが、それでも痛みが出たら無理をせず休み、必要なら整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">足の負担をやわらげて有酸素運動を続けやすく。クッション性のあるインソールを比較しましょう。</p>
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
