import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "バスケのインソールの選び方【2026年】ジャンプ衝撃・足首保護に",
  description:
    "バスケットボールでパフォーマンスを上げたい・足を守りたい方へ。ジャンプの着地衝撃を吸収し足首を安定させるインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/basketball-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "バスケのインソールの選び方｜ジャンプの着地衝撃と足首保護",
  description:
    "バスケットボールでパフォーマンスを上げたい・足を守りたい方へ。ジャンプの着地衝撃を吸収し足首を安定させるインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "バスケでインソールを使うと足首の捻挫を予防できますか？", "a": "後足部を安定させるインソールは足のブレを抑え、捻挫予防の補助になります。あわせて足首の筋力・バランストレーニングを行うとより効果的です。効果の感じ方には個人差があります。"}, {"q": "バッシュの元の中敷きは外すべきですか？", "a": "フィットと効果を保つため、元の中敷きを外してインソールと入れ替えるのがおすすめです。重ねて入れると窮屈になりやすいため、厚みが合わない場合は調整しましょう。"}, {"q": "ジャンプ力に影響しますか？", "a": "アーチを支えると踏み込みの力が伝わりやすくなり、安定した着地で次の動作に移りやすくなります。過度な期待は禁物ですが、安定感の向上が見込めます。"}, {"q": "サイズが合わないインソールはカットして使えますか？", "a": "つま先側をカットして調整できるタイプもあります。元の中敷きを型紙にして少しずつ切るのがコツで、切りすぎると戻せないため慎重に行いましょう。指先が当たったり余りすぎたりしないか、履いて確認してください。"}, {"q": "厚みのあるインソールに替えると靴がきつくなりませんか？", "a": "厚みが増すと靴内のスペースが減り、足首まわりの締め付けやかかとの収まりが変わることがあります。薄型を選ぶか、シューレースで調整し、必ず履いてフィット感を確かめましょう。"}, {"q": "新しいインソールはすぐに試合で使って大丈夫ですか？", "a": "替えた直後は違和感が出ることもあるため、まずは練習で慣らしてから試合に使うのがおすすめです。足や動きに合うかを確かめてから本番に臨むと安心です。"}];

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
    { "@type": "ListItem", position: 3, name: "バスケットボール", item: "https://sole-laboratory.com/articles/basketball-insole/" },
  ],
};

const points = [{"t": "着地衝撃を吸収するクッション", "b": "ジャンプの多いバスケでは、かかと・前足部の衝撃吸収が重要です。弾力のある素材で着地の衝撃を和らげます。"}, {"t": "後足部を安定させるヒールカップ", "b": "急な切り返しでかかとがブレないよう、深いヒールカップで後足部を固定します。足首の捻挫予防にも。"}, {"t": "アーチサポートで力を伝える", "b": "ダッシュやジャンプの踏み込みで力が逃げないよう、アーチをしっかり支える設計を選びましょう。"}];
const related = [{"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}, {"href": "/articles/badminton-insole/", "label": "バドミントンのインソール"}, {"href": "/articles/knee-pain/", "label": "膝の痛みのインソール"}, {"href": "/articles/running-insole/", "label": "ランニング用インソール"}];

export default function BasketballPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "バスケットボール" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">スポーツ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">バスケのインソールの選び方｜ジャンプの着地衝撃と足首保護</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ジャンプ・着地・急な切り返しを繰り返すバスケットボールは、足首や膝、足裏への負担が大きい競技です。着地衝撃を吸収し足元を安定させるインソールは、パフォーマンス向上とケガ予防の両面で役立ちます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">バスケには、ジャンプの着地衝撃を吸収するクッション性と、急な切り返しに耐える後足部の安定性（ヒールカップ）、アーチサポートを備えたインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バスケで足に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">バスケットボールはジャンプの着地、ダッシュとストップ、左右の素早い切り返しが連続する競技で、足首・膝・足裏に大きな衝撃と捻れの負担がかかります。着地の衝撃を吸収しきれないと、足首の捻挫や膝の痛み、足底の疲労につながります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">特にジャンプからの着地では、自分の体重に加えて落下のエネルギーが足元に集中し、前足部やかかとに繰り返し強い負荷がかかります。リバウンドやシュートのたびにこの動作が積み重なるため、衝撃をうまく逃がせる足元の環境づくりが大切です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">また、ピボットや急なストップ＆ダッシュでは、足の中で前後・左右へのズレが生じやすくなります。足が靴の中で滑ったりブレたりすると、踏ん張りが効かないだけでなく、足首をひねる原因にもなりかねません。素早い方向転換が多いプレースタイルほど、足元の安定性が問われます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで着地衝撃を吸収し、かかとを安定させて足の過度なブレを抑えると、ケガのリスクを減らしながら踏ん張りやすくなります。アーチサポートはダッシュ時の力の伝達も助け、終盤の足裏の疲れをやわらげる一助にもなります。なお、効果の感じ方には個人差があり、症状が続く場合は無理をせず専門家に相談しましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バスケットボールの選び方3つのポイント</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">バスケ用にインソールを選ぶときは、「衝撃吸収」「安定性」「フィット」の3つを軸に考えると迷いにくくなります。ジャンプの多いプレーなら衝撃吸収を、切り返しやストップが多いなら安定性を優先するなど、自分のプレースタイルに合わせて重視するポイントを決めましょう。どれか一つに偏りすぎず、バランスのとれた一枚を選ぶのが基本です。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バスケットボールにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">着地衝撃の吸収と後足部の安定を両立したインソールがバスケに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バッシュでの使い方・サイズ調整の注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">バスケットシューズに入れる際は、元の中敷きを外して入れ替えるとフィットが保てます。バッシュはもともと足を包み込むようにタイトな作りのモデルが多いため、元の中敷きの上に重ねて入れると窮屈になり、かえって動きづらくなることがあります。インソールとバッシュの相性を確かめるためにも、必ず一度履いてみてフィット感を確認しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズ調整では、つま先側に余裕がありすぎたり、逆に指先が当たったりしないかをチェックします。元の中敷きを型紙にしてインソールの先端を少しずつカットできるタイプもありますが、切りすぎると元に戻せないため、少しずつ調整するのが無難です。厚みのあるインソールに替えると靴内のスペースが減るので、足首まわりの締め付けやかかとの収まりも合わせて確認してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足首の不安定さが気になる場合は、足首サポーターやバランストレーニングも併用しましょう。インソールはあくまで足元の環境を整える補助であり、足首やふくらはぎの筋力づくりと組み合わせることで、より安定したプレーにつながります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">激しい競技で消耗が早いため、クッションがへたったり、かかとのホールド感が弱くなったと感じたら早めに交換すると衝撃吸収効果を保てます。新しいインソールに替えた直後は違和感が出ることもあるので、いきなり試合で使わず練習で慣らしてから本番に臨むと安心です。</p>
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
          <p className="text-white/90 text-sm mb-5">ジャンプの衝撃と足首の負担に。クッション性の高いインソールを比較しましょう。</p>
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
