import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "調理師・厨房スタッフの足の疲れに！インソールの選び方【2026年】コックシューズ対応",
  description:
    "濡れた硬い床で立ちっぱなしの調理師・厨房スタッフへ。コックシューズ・厨房シューズと相性の良いインソールの選び方、蒸れ・衛生面の対策、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/chef-kitchen-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "調理師・厨房スタッフにおすすめのインソール｜コックシューズの疲れ対策",
  description:
    "濡れた硬い床で立ちっぱなしの調理師・厨房スタッフへ。コックシューズ・厨房シューズと相性の良いインソールの選び方、蒸れ・衛生面の対策、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "コックシューズにインソールは入れられますか？", "a": "入れられるものが多いですが、厨房シューズは中敷きが外せない一体成型のタイプもあります。スペースが浅い場合は薄型やカットできるタイプを選び、難しい場合は足に直接装着するソックス型を検討しましょう。"}, {"q": "厨房の蒸れが気になります。お手入れはどうすれば？", "a": "勤務後にインソールを靴から出して乾かすだけでも蒸れ・においの対策になります。抗菌防臭機能のある製品を選ぶのも一つの方法です。お手入れは各製品の説明に従ってください。"}, {"q": "狭い場所で立ちっぱなしでも効果はありますか？", "a": "はい。その場で立ち続ける時間が長いほどアーチが沈み込みやすいため、土踏まずを支えるインソールの恩恵を感じやすい環境といえます。合間に足を動かす習慣と組み合わせるとより効果的です。"}];

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
    { "@type": "ListItem", position: 3, name: "調理師・厨房スタッフ", item: "https://sole-laboratory.com/articles/chef-kitchen-insole/" },
  ],
};

const points = [{"t": "コックシューズとの相性を確認", "b": "厨房シューズは中敷きが外せない一体成型のものもあります。入れるスペースが浅い場合は薄型やカットで調整できるタイプを、入れにくい場合は足に直接装着するソックス型という選択肢もあります。"}, {"t": "硬い床に立ち続けるための衝撃吸収＋アーチサポート", "b": "タイルやコンクリートの床では、クッション性と土踏まずの支えの両方が必要です。柔らかいだけでなく、アーチが沈み込まない適度な支えのある設計を選びましょう。"}, {"t": "蒸れ・衛生面のケアのしやすさ", "b": "熱気がこもる厨房では靴の中が蒸れがちです。抗菌防臭機能のあるものや、洗って清潔に保ちやすいものだと毎日使いやすくなります。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/factory-work-insole/", "label": "工場の立ち仕事インソール"}, {"href": "/articles/washing-guide/", "label": "インソールの洗い方"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function ChefKitchenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "調理師・厨房スタッフ" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">調理師・厨房スタッフにおすすめのインソール｜コックシューズの疲れ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">仕込みから営業終わりまで、厨房ではほぼ一日立ちっぱなし。水や油で濡れた硬い床、熱気のこもる環境、クッション性より防水・耐滑が優先されたコックシューズ——調理の現場は足が疲れる条件がそろっています。インソールで足裏の負担を軽くしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">調理師・厨房スタッフには、硬い床の衝撃を吸収しアーチを支えるインソールが向いています。コックシューズは中敷きを外せない一体成型もあるため、薄型やカットできるタイプ、または靴に入れず足に直接装着するソックス型を選ぶのがポイントです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厨房の立ち仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">厨房の床はコンクリートやタイルなど非常に硬く、さらに水や油に対応するためコックシューズは防水性・耐滑性を最優先に作られています。そのぶんクッション性やアーチサポートは控えめなものが多く、長時間の立ち仕事の衝撃が足裏に直接たまりやすいのです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、調理中はコンロや調理台の前など狭い範囲で立ち続けるため、足を大きく動かす機会が少なく、血流が滞ってむくみやだるさも出やすくなります。火や熱気で靴の中が蒸れやすいのも厨房特有の悩みです。インソールでアーチを支えて衝撃を吸収しつつ、蒸れ・衛生面にも配慮した選び方をしましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">調理師・厨房スタッフの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">調理師・厨房スタッフにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">硬く濡れた床での立ちっぱなしには、衝撃吸収とアーチサポートを両立したインソールが向いています。カットで調整できるピットソール・スリムアップ（スリムアップは抗菌防臭加工）はコックシューズにも合わせやすく、ソックス型のランウェイキュアソール（M/L・22.5〜25cmの女性向け）は中敷きを外せない靴でも使えます。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">厨房での使い方と衛生面の注意</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">コックシューズに入れる場合は、つま先や甲まわりが窮屈にならないか確認し、サイズが合わなければカットして調整しましょう。厨房は水気が多いため、勤務後はインソールを取り出して乾かすと衛生的に長持ちします。製品ごとのお手入れ方法に従ってケアしてください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">営業の合間には足踏みやかかと上げで血流を促すと、むくみ・だるさがたまりにくくなります。それでも足裏やかかとの痛みが何週間も続く場合は、足底腱膜炎などの可能性があるため整形外科で相談しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">硬い床の厨房で立ち続ける足に。衝撃吸収とアーチサポートのインソールを比較しましょう。</p>
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
