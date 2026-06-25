import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "警備員の足の疲れに！インソールの選び方【2026年】長時間の立哨対策",
  description:
    "長時間の立哨・巡回で足に負担がかかる警備員さんへ。立ちっぱなし・夜勤の足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/security-guard-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "警備員の足の疲れにおすすめのインソール｜長時間の立哨・巡回対策",
  description:
    "長時間の立哨・巡回で足に負担がかかる警備員さんへ。立ちっぱなし・夜勤の足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "安全靴にインソールは入れられますか？", "a": "多くのインソールは安全靴にも対応します。安全靴は中が狭いことがあるため、薄型を選ぶか元の中敷きを取り外して入れると窮屈になりにくいです。つま先の安全カバーに当たらないか、立ったり歩いたりして確認してから使いましょう。"}, {"q": "立ちっぱなしの足の疲れに本当に効きますか？", "a": "アーチを支えて衝撃を吸収することで、立ち続ける足の疲れを軽減する補助になります。効果には個人差があり、合間の足踏みやストレッチと併用するとより感じやすくなります。痛みやしびれが続く場合は無理をせず、整形外科などの受診をご検討ください。"}, {"q": "夜勤の足のむくみにも良いですか？", "a": "アーチサポートで歩行時の筋ポンプが働きやすくなり、むくみの軽減を助けます。着圧ソックスの併用や、勤務後に足を高くして休むのもおすすめです。それでも強いむくみや痛みが続く場合は医療機関にご相談ください。"}];

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
    { "@type": "ListItem", position: 3, name: "警備員", item: "https://sole-laboratory.com/articles/security-guard-insole/" },
  ],
};

const points = [{"t": "長時間の立ちに耐える衝撃吸収", "b": "立哨が長い警備には、持続的な衝撃を吸収できるクッション性が重要です。硬い路面やコンクリートからの突き上げをやわらげ、かかとや足裏への負担集中を防ぎます。毎日長時間使うほどへたりやすいので、繰り返しの圧力に強い耐久性も確認しましょう。"}, {"t": "アーチサポートで沈み込みを防ぐ", "b": "長時間でアーチ（土踏まず）が潰れないよう、しっかり支える設計を選びましょう。アーチが沈み込むと衝撃を逃がせず疲れがたまりやすくなります。土踏まずを下から支えることで立ち姿勢が安定し、歩行時の筋ポンプも働きやすくなります。"}, {"t": "蒸れ対策・通気性で快適に保つ", "b": "夜勤や夏場の長時間勤務では靴の中が蒸れやすく、不快感やにおいの原因になります。通気性のよい素材や、消臭・抗菌加工のあるインソールを選ぶと快適さを保ちやすくなります。汗をかきやすい人は、こまめに乾かせるよう取り外しできるタイプが便利です。"}, {"t": "安全靴・作業靴に合う厚み", "b": "安全靴は中が狭いことがあるため、薄型を選ぶか元の中敷きを外して使いましょう。厚みが合わないとつま先の安全カバーに当たって窮屈になることがあります。入れたあとに立ったり歩いたりして、きつさや浮きがないかを必ず確かめてください。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/factory-work-insole/", "label": "工場の立ち仕事インソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}];

export default function SecurityGuardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "警備員" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">警備員の足の疲れにおすすめのインソール｜長時間の立哨・巡回対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">交通誘導や施設警備で長時間立ち続け、夜勤や巡回もある警備の仕事。足への負担は相当なものです。アーチを支えて衝撃を吸収するインソールは、立哨・巡回の足の疲れをやわらげる味方になります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">警備員さんには、長時間の立哨に耐える衝撃吸収とアーチサポートを備え、安全靴・作業靴にも入る薄型〜標準のインソールが向いています。立ちっぱなしと巡回の疲れを軽減します。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">警備の仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">警備員は、交通誘導や立哨で同じ場所に長時間立ち続けることが多く、足裏への持続的な負担が大きい仕事です。巡回では歩行も加わり、夜勤による拘束時間の長さも疲労を強めます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立ち続けて足裏のアーチが沈むと衝撃を吸収できず疲れが蓄積します。インソールでアーチを支え、硬い路面やコンクリートからの衝撃を吸収すると、足の疲れをやわらげる補助になります。安全靴を履く場合は薄型を選びましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">そもそも長時間の立ち仕事で足が疲れたりむくんだりするのは、いくつかの一般的な原因が重なって起こります。まず、同じ姿勢で立ち続けると足の筋肉がほとんど動かず、ふくらはぎが血液を心臓へ押し戻す「筋ポンプ」が働きにくくなります。すると血液や水分が下半身にたまりやすく、夕方や夜勤明けに足が重い・だるい・むくむと感じやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">次に、コンクリートやアスファルトといった硬い路面は衝撃をほとんど逃がしてくれないため、立つ・歩くたびの負担がそのまま足裏やかかと、ひざ・腰へ伝わります。さらに、足裏のアーチ（土踏まず）が長時間で沈み込むと、本来クッションとして働く構造が機能しにくくなり、特定の部位に圧力が集中して疲れや痛みにつながります。交通誘導や巡回で歩行が加わる警備では、この衝撃と圧力の繰り返しが一日中続くことになります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">こうした負担に対して、衝撃吸収とアーチサポートを備えたインソールは、足裏全体で体重を受け止めて圧力を分散し、一点への集中を和らげる手助けをします。ただし感じ方には個人差があり、インソールはあくまで負担を軽くする補助です。痛みやしびれが長く続く場合は、自己判断で我慢せず整形外科などの受診を検討してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">警備員の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">警備員におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">長時間の立哨に耐える衝撃吸収とアーチサポートを備えたインソールが警備員さんに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">仕事靴での使い方・注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">仕事靴に入れるときは、まず靴の元の中敷きを取り外し、その上にインソールを重ねるか、入れ替えて使います。安全靴や作業靴は内部が狭いことが多いため、二枚重ねで窮屈になる場合は元の中敷きを外して入れ替えるのがおすすめです。入れたあとは実際に立ったり数歩歩いたりして、つま先が安全カバーに当たらないか、かかとが浮かないかを確認しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが合わずインソールが大きい場合は、ガイド線に沿って先端をカットして調整します。切りすぎると元に戻せないため、少しずつ合わせるのがコツです。前後がずれて足が滑ると感じるときは、いったん抜いて位置を整え直してください。左右の入れ間違いにも注意しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立哨の合間に足踏みやかかと上げをすると、血流が促されて疲れ・むくみがたまりにくくなります。インソールと併用すると効果を感じやすくなります。蒸れ対策として、休憩時に靴を脱いで湿気を逃がしたり、汗をかいたインソールを乾かしたりするのも快適さの維持に役立ちます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">毎日長時間の使用でへたりやすいため、3〜6ヶ月を目安に、クッションがつぶれてきたら早めに交換しましょう。なお効果の感じ方には個人差があります。インソールを使っても足の痛みやしびれ、強いむくみが続く場合は、無理をせず整形外科などの医療機関にご相談ください。</p>
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
          <p className="text-white/90 text-sm mb-5">長時間の立哨・巡回の足の疲れに。衝撃吸収とアーチサポートのインソールを比較しましょう。</p>
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
