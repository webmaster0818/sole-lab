import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "テニスのインソールの選び方【2026年】横の動き・急停止の安定に",
  description:
    "テニスでパフォーマンスを上げたい・足を守りたい方へ。左右の急な動きと急停止を支えるインソールの選び方、衝撃吸収・横ブレ抑制のポイント、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/tennis-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "テニスのインソールの選び方｜横の動き・急停止の安定性アップ",
  description:
    "テニスでパフォーマンスを上げたい・足を守りたい方へ。左右の急な動きと急停止を支えるインソールの選び方、衝撃吸収・横ブレ抑制のポイント、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-12",
};

const faqs = [{"q": "テニスでインソールを使うメリットは？", "a": "後足部の安定と衝撃吸収で、急な切り返しでも踏ん張りやすくなり、足首・膝の負担を軽減できます。プレーの安定感の向上が見込めます。"}, {"q": "ハードコートとクレーで選び方は変わりますか？", "a": "ハードコートは衝撃が大きいためクッション性を重視、どちらの面でも後足部の安定性は重要です。基本は安定性と衝撃吸収を両立したものが向いています。"}, {"q": "足首の捻挫予防になりますか？", "a": "かかとを安定させて横ブレを抑えるインソールは捻挫予防の補助になります。足首のバランストレーニングも併用しましょう。"}, {"q": "テニスシューズにインソールは必要ですか？", "a": "必須ではありませんが、テニスは左右の切り返しと急停止が多く足の横ブレや衝撃が大きいため、後足部を安定させ衝撃を吸収するインソールを入れると踏ん張りやすくなります。元の中敷きで横ブレや疲れが気になる方は試す価値があります。"}, {"q": "ダイエット用のインソールでテニスに代用できますか？", "a": "用途が異なるため基本的には不向きです。ダイエット用は土踏まずを刺激する形状などが中心で、テニスに必要な後足部の安定や衝撃吸収を重視した設計とは限りません。激しい横の動きには、安定性とクッション性を備えたスポーツ向けのものを選びましょう。"}, {"q": "オムニコート（砂入り人工芝）ではどんなインソールが向いていますか？", "a": "オムニコートは表面の砂で滑りやすく、細かいステップで体勢を立て直す場面が増えるとされます。足が靴の中でズレると踏ん張りが効きにくいため、ヒールカップで後足部を安定させ、表面素材が滑りにくいものが向いています。衝撃は一般にハードコートより小さめとされますが、横ブレへの備えはどの面でも共通して重要です。"}, {"q": "週1回程度のプレーでもインソールを使う意味はありますか？", "a": "プレー頻度が低い方ほど、急な切り返しの負荷に足が慣れておらず、翌日に疲れや張りが出やすい傾向があるとされます。週末プレーヤーでも後足部の安定と衝撃吸収の恩恵は受けられます。効果の感じ方には個人差があり、プレー後の痛みが続く場合は整形外科など医療機関への受診をご検討ください。"}];

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
    { "@type": "ListItem", position: 3, name: "テニス", item: "https://sole-laboratory.com/articles/tennis-insole/" },
  ],
};

const points = [{"t": "後足部を固定するヒールカップ", "b": "左右の動きで足がブレないよう、深いヒールカップで後足部を安定させます。"}, {"t": "急停止・着地の衝撃吸収", "b": "ストップやジャンプの衝撃を和らげるクッション性が、足裏と関節の負担を軽減します。"}, {"t": "アーチサポートで踏ん張る", "b": "素早いステップで力が逃げないよう、アーチを支える設計を選びましょう。"}, {"t": "横方向の動きを支える設計", "b": "サイドステップでは足が内外に倒れやすくなります。土踏まずから足の側面までしっかり支える形状だと、横の踏ん張りが安定し力が伝わりやすくなります。"}, {"t": "ズレを防ぐフィット感", "b": "切り返しの多いテニスでは、靴の中でインソールがズレると安定感が損なわれます。足のサイズに合い、滑りにくい表面素材でシューズ内に収まるものを選びましょう。"}];
const related = [{"href": "/articles/basketball-insole/", "label": "バスケのインソール"}, {"href": "/articles/ankle-pain-insole/", "label": "足首の痛みのインソール"}, {"href": "/articles/badminton-insole/", "label": "バドミントンのインソール"}, {"href": "/articles/knee-pain/", "label": "膝の痛みのインソール"}, {"href": "/articles/futsal-insole/", "label": "フットサルのインソール"}, {"href": "/articles/volleyball-insole/", "label": "バレーボールのインソール"}];

export default function TennisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "テニス" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">スポーツ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">テニスのインソールの選び方｜横の動き・急停止の安定性アップ</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">左右への素早いステップ、急停止、ダッシュを繰り返すテニスは、足の横ブレと衝撃が大きい競技です。後足部を安定させ衝撃を吸収するインソールは、プレーの安定とケガ予防に役立ちます。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">テニスには、左右の動きで足が横ブレしないよう後足部を安定させるヒールカップと、急停止・着地の衝撃を吸収するクッション、アーチサポートを備えたインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">テニスで足に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">テニスは左右へのサイドステップ、急停止、ダッシュ、ジャンプが連続し、足が横方向に大きくブレやすい競技です。コートの硬さも加わり、足首・膝・足裏への衝撃と捻れの負担が蓄積します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでかかとを安定させて横ブレを抑え、衝撃を吸収すると、急な切り返しでも踏ん張りやすく、足首の捻挫などのリスクを減らす補助になります。アーチサポートは素早いステップの力の伝達も助けます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">テニスの選び方のポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">テニスにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">後足部の安定と衝撃吸収を両立したインソールがテニスに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">テニスシューズでの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">テニスシューズに入れる際は、元の中敷きと入れ替えてフィットを保ちましょう。横ブレが気になる場合は、足首まわりのトレーニングも併用すると安定します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ハードコートなど硬い面でのプレーが多い方は、クッション性を重視すると関節への負担を抑えられます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">コート面別（ハード・クレー・オムニ）の負担の違いと選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">同じテニスでも、プレーするコート面によって足への負担のかかり方は変わるとされます。よく使う面に合わせて、インソールで重視するポイントを調整すると選びやすくなります。</p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">ハードコート：衝撃吸収を最優先</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">ハードコートは一般に最も衝撃の大きい面とされ、急停止のたびにかかとや膝への突き上げが蓄積しやすくなります。クッション性の高いインソールで着地・ストップの衝撃をやわらげつつ、ヒールカップで後足部を安定させる組み合わせが基本です。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">クレーコート：足の流れを抑えるフィット感</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">クレーは滑りながら止まるスライドの動きが特徴で、足が靴の中で前後左右に流れやすくなるとされます。アーチサポートと滑りにくい表面素材で、靴内のズレを抑えられるものが向いています。衝撃自体は一般にハードコートより穏やかとされます。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">オムニコート（砂入り人工芝）：後足部の安定を重視</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">国内の一般コートで広く使われるオムニコートは、表面の砂で滑りやすく、細かいステップで体勢を立て直す場面が増えるとされます。踏ん張りの起点になる後足部をヒールカップで安定させることを重視しましょう。</p>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">複数の面でプレーする方は、どの面でも共通して重要な「後足部の安定」を軸に、衝撃吸収とのバランスが取れた一枚を選ぶのが無難です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">テニスシューズとの相性・組み合わせのコツ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは単体ではなく、シューズとの組み合わせで働きます。ソールのクッションが厚めのシューズなら薄型のインソールでフィットを優先し、ソールが硬め・薄めのモデルなら衝撃吸収を補う、というように「靴とインソールを合わせた全体の厚み・硬さ」で考えるとバランスを取りやすくなります。オールコート用と面専用（オムニ・クレー用など）でソールの性格が異なる点も踏まえておきましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">入れ替えた直後は感覚が変わるため、いきなり試合や大会で使わず、練習で数回慣らしてから本番に使うのがおすすめです。急停止と切り返しが中心という負荷の性質は<Link href="/articles/basketball-insole/" className="text-[#e8627c] underline font-medium">バスケットボール</Link>とも共通しており、同じく後足部の安定が選び方の軸になります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">自分にどのタイプが合うか迷う場合は、<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">インソールタイプ診断</Link>も参考にしてください。なお、プレー後にかかとや足裏、膝の痛みが続く場合は、インソールで我慢せず整形外科など医療機関への受診をご検討ください。</p>
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
          <p className="text-white/90 text-sm mb-5">テニスの横の動き・急停止の安定に。後足部を支えるインソールを比較しましょう。</p>
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
