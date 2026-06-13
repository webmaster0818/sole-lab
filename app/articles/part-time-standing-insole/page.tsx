import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "立ち仕事のバイト・パートの足の疲れに！インソールの選び方【2026年】",
  description:
    "コンビニ・飲食・レジなど立ち仕事のアルバイト・パートで足が疲れる方へ。長時間シフトの疲れをやわらげるインソールの選び方、指定靴への入れ方、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/part-time-standing-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "立ち仕事のバイト・パートにおすすめのインソール｜長時間シフトの疲れ対策",
  description:
    "コンビニ・飲食・レジなど立ち仕事のアルバイト・パートで足が疲れる方へ。長時間シフトの疲れをやわらげるインソールの選び方、指定靴への入れ方、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "バイト先の指定靴にも入れられますか？", "a": "薄型のインソールなら多くの指定靴に入ります。中が浅い場合は元の中敷きを外す、カットできるタイプでサイズを合わせるなどで調整しましょう。判断に迷う場合は職場の靴ルールも確認してください。"}, {"q": "週2〜3回のシフトでも効果はありますか？", "a": "はい。立ち仕事に慣れていない方ほど一回のシフトでの疲れが大きいため、アーチサポートの恩恵を感じやすいといえます。毎回同じ勤務用の靴に入れておくと手間もかかりません。"}, {"q": "学生でも買いやすい価格のものはありますか？", "a": "比較的手頃な価格帯の製品からカットして試せるものがあります。まずは無理のない価格で始めて、長く続ける仕事ならサポート力の高いものへのステップアップを検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "立ち仕事のアルバイト・パート", item: "https://sole-laboratory.com/articles/part-time-standing-insole/" },
  ],
};

const points = [{"t": "初めてでも試しやすい価格と調整のしやすさ", "b": "まずは手頃な価格帯で、ハサミでカットしてサイズ調整できるタイプが失敗しにくいです。靴のサイズに合わせやすく、指定靴にも自分のスニーカーにも転用できます。"}, {"t": "長時間シフトを支えるアーチサポート", "b": "数時間立ち続けるとアーチが沈んで疲れが一気に出ます。土踏まずを支える設計なら、シフト後半の疲れの蓄積を抑える助けになります。"}, {"t": "職場の靴ルールとの相性", "b": "制服に合わせた指定靴や厨房用シューズなど、職場によって履く靴はさまざまです。薄型なら多くの靴に入り、毎回入れ替えるのが面倒なら勤務用の靴に入れっぱなしにするのが手軽です。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/sales-staff-insole/", "label": "販売員・アパレルのインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/lifespan/", "label": "インソールの寿命と交換時期"}];

export default function PartTimeStandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "立ち仕事のアルバイト・パート" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">立ち仕事のバイト・パートにおすすめのインソール｜長時間シフトの疲れ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">コンビニのレジ、飲食店のホールやキッチン、スーパーの品出し——アルバイト・パートの立ち仕事は、慣れないうちは数時間でも足がパンパンになります。学業や家事と両立しながら続けるなら、足の疲れは早めにケアするのが正解。インソールは手軽に始められる対策です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">立ち仕事のバイト・パートには、長時間シフトの立ちっぱなしを支えるアーチサポートがあり、職場の指定靴にも自分の靴にも合わせやすいインソールが向いています。初めてなら、カットでサイズ調整できる手頃な価格帯から試すのがおすすめです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">バイト・パートの立ち仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">接客や品出しの立ち仕事は、レジ前で立ち続ける時間と店内を動き回る時間が混ざり合い、シフトによっては休憩まで長く立ちっぱなしになることもあります。店舗の床は硬く、職場指定の靴やスニーカーは必ずしも自分の足に合っているとは限りません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">とくに立ち仕事を始めたばかりの時期は、足裏のアーチを支える筋肉がまだ慣れておらず、疲れやむくみを感じやすいものです。インソールで土踏まずを支えて衝撃を吸収すると、シフト後半の足の重さをやわらげる補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">立ち仕事のアルバイト・パートの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">立ち仕事のアルバイト・パートにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">手頃に始めるならカット調整できるスリムアップ（S/M・抗菌防臭）、しっかり支えたいなら特許技術のアーチサポートを持つピットソール（XS〜L・カット可）という選び方ができます。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">シフトの疲れをためない工夫</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">立ち仕事に慣れるまでは、休憩中に靴を脱いで足を休める、帰宅後にふくらはぎを伸ばすといった小さなケアの積み重ねが効きます。インソールと組み合わせると、翌日に疲れを持ち越しにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">週に数回のシフトでも、足裏やかかとの痛みが何週間も続くようなら、単なる疲れではない可能性があります。我慢して続けず、整形外科で一度相談してください。靴自体が合っていない場合は、サイズの合う靴への見直しも並行して行いましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">レジ・ホール・品出しの立ちっぱなしに。手軽に始められるインソールを比較しましょう。</p>
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
