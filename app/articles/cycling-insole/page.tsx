import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ロードバイク・自転車のインソールの選び方【2026年】ペダリング効率アップ",
  description:
    "ロードバイク・自転車で疲れにくく・効率よく漕ぎたい方へ。ペダリングの力の伝達を高め、足裏のしびれを防ぐインソールの選び方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/cycling-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ロードバイク・自転車のインソールの選び方｜ペダリング効率と足裏のしびれ対策",
  description:
    "ロードバイク・自転車で疲れにくく・効率よく漕ぎたい方へ。ペダリングの力の伝達を高め、足裏のしびれを防ぐインソールの選び方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "自転車のインソールでペダリングは変わりますか？", "a": "アーチを支えると足裏全体で力を受けてペダルに伝えやすくなり、効率や安定感の向上が見込めます。劇的ではありませんが、長距離での疲れにくさにつながります。感じ方には個人差があります。"}, {"q": "ロードバイクで足裏がしびれます。改善しますか？", "a": "母趾球への圧集中が一因のことが多く、アーチサポートで圧を分散すると、しびれ（ホットフット）の軽減が期待できます。改善には個人差があり、痛みやしびれが続く場合は医療機関への相談をおすすめします。"}, {"q": "ビンディングシューズに入りますか？", "a": "薄型のインソールなら入ります。内寸がタイトなため、元の中敷きを外して入れ替え、クリートとの相性を確認しましょう。"}, {"q": "普通のスニーカーで自転車に乗る場合もインソールは有効ですか？", "a": "通勤・通学などフラットペダルでスニーカーを履く場合も、アーチを支えることで足裏の疲れや力の逃げを抑えやすくなります。靴の中敷きと入れ替えて使えるかをまず確認しましょう。"}, {"q": "厚いインソールと薄いインソール、どちらを選べばよいですか？", "a": "サイクリングシューズは内寸がタイトなため、基本は薄型でアーチサポートのあるものが扱いやすいです。厚みのあるものを入れるとつま先やかかとが窮屈になり、ペダリングに影響することがあります。"}];

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
    { "@type": "ListItem", position: 3, name: "ロードバイク・自転車", item: "https://sole-laboratory.com/articles/cycling-insole/" },
  ],
};

const points = [{"t": "アーチサポートで力を伝える", "b": "ペダリングの力が足裏全体から伝わるよう、アーチをしっかり支える設計を選びましょう。効率アップにつながります。"}, {"t": "圧集中を防ぐ前足部の支え", "b": "母趾球への圧集中によるしびれを防ぐため、前足部を適切に支えるものが向いています。"}, {"t": "シューズに入る薄型", "b": "ビンディングシューズは内寸がタイトなことが多いため、薄型でアーチサポートのあるものを選びましょう。"}];
const related = [{"href": "/articles/running-insole/", "label": "ランニング用インソール"}, {"href": "/articles/foot-arch/", "label": "足のアーチのチェック"}, {"href": "/articles/hiking-insole/", "label": "登山用インソール"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function CyclingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ロードバイク・自転車" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">スポーツ別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ロードバイク・自転車のインソールの選び方｜ペダリング効率と足裏のしびれ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">長時間ペダルを漕ぐロードバイクや自転車では、足裏の一点に圧が集中して力が逃げたり、しびれが出たりします。アーチを支えるインソールは、ペダリングの力の伝達を高め、足裏の負担を軽減します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ロードバイク・自転車には、ビンディングシューズやスニーカーに入る薄型で、アーチを支えてペダリングの力を効率よく伝え、母趾球への圧集中によるしびれを防ぐインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">自転車で足裏に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ロードバイクや自転車のペダリングは、足裏の母趾球付近でペダルを押し続ける動作の繰り返しです。アーチの支えがないと力が一点に集中し、ペダリング効率が落ちるうえ、神経が圧迫されて足裏や指のしびれ（ホットフット）が起こることがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールでアーチを支えると、足裏全体で力を受けてペダルに伝えやすくなり、効率が高まります。圧の集中が分散されることで、長距離でのしびれも軽減できます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一般的に、ペダリングは「踏み込む」だけでなく「引き上げる」局面もあり、足が靴の中で安定しているほど力のロスが少なくなると言われています。アーチが落ち込んで足裏がぐらつくと、踏み込みのたびに足が左右や前後に動き、その分だけ余計な力を使ってしまいます。足の土台が安定することは、効率だけでなく膝や足首のブレを抑えることにもつながると考えられています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ただし、こうした変化の感じ方には個人差があります。足の形・乗り方・走行距離によって効果は異なるため、まずは普段の距離で試しながら、自分の足に合う支え方を確かめていくのがおすすめです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ロードバイク・自転車の選び方3つのポイント</h2>
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

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ビンディングシューズと普通の靴での選び方の違い</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">同じ自転車向けでも、ビンディングシューズ（クリート固定）とスニーカーなどの普通の靴では、インソールに求める条件が少し変わります。乗り方に合わせて選ぶと失敗しにくくなります。</p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">ビンディングシューズ（クリート固定）の場合</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">ソールが硬く内寸がタイトなため、薄型でアーチサポートのあるものが向いています。足がペダルに固定されるぶん圧が一点に集中しやすく、母趾球まわりを支えてしびれを防げる設計が役立ちます。元の中敷きと入れ替え、クリート位置との相性を確認しましょう。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">スニーカー・普通の靴（フラットペダル）の場合</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">通勤・通学やクロスバイクでスニーカーを履く場合は、ビンディングほど内寸がシビアでないため、アーチサポートに加えて軽いクッション性のあるものも選べます。靴の中敷きを外して入れ替えられるか、サイズが合うかをまず確認するのがおすすめです。</p>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ロードバイク・自転車におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">アーチを支えてペダリング効率を高め、しびれを防ぐ薄型インソールが自転車に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">長距離ライドでの使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ビンディングシューズに入れる際は、元の中敷きと入れ替えてクリート位置との相性を確認しましょう。フィットしないとペダリングに影響します。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">長距離でしびれが出やすい方は、こまめに足の位置を変える・休憩で足を動かすこともあわせて行うと効果的です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サイズ・厚みの注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイクリングシューズは内寸が狭めに作られていることが多いため、インソール選びではサイズと厚みに注意が必要です。元の中敷きを外して入れ替えることを前提に考えると、靴の容量を圧迫しにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズはつま先に余裕を残しつつ、かかとが浮かない範囲で合わせます。インソールが大きい場合は、メーカーの推奨に沿ってつま先側をカットして調整できる製品もあります。逆に小さすぎると足裏全体を支えきれず、アーチサポートの効果が出にくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">厚みは、厚いほどクッション性は増しますが、靴の中で足が持ち上がってつま先やかかとが窮屈になりやすく、ペダリング時の収まりが悪くなることがあります。一般的にサイクリングでは、薄型でアーチをしっかり支えるタイプが扱いやすいとされています。装着後は短い距離から試し、当たりや窮屈さがないかを確認しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">ペダリング効率と足裏のしびれに。アーチを支えるインソールを比較しましょう。</p>
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
