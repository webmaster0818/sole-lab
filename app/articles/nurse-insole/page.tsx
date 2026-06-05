import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "看護師の足の疲れに！インソールの選び方【2026年】ナースシューズ対応",
  description:
    "院内を歩き回り立ちっぱなしの看護師さんへ。夜勤・長時間勤務の足の疲れ・むくみをやわらげるインソールの選び方、ナースシューズに合う薄型、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/nurse-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "看護師の足の疲れにおすすめのインソール｜ナースシューズ対応の選び方",
  description:
    "院内を歩き回り立ちっぱなしの看護師さんへ。夜勤・長時間勤務の足の疲れ・むくみをやわらげるインソールの選び方、ナースシューズに合う薄型、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ナースシューズに入る薄いインソールはありますか？", "a": "はい、薄型でアーチサポートのあるインソールを選べばナースシューズにも入ります。中が浅い場合は、元の中敷きを取り外してから入れると窮屈になりにくいです。"}, {"q": "夜勤の足のむくみにも効果はありますか？", "a": "アーチを支えると歩行時にふくらはぎの筋ポンプが働きやすくなり、むくみの軽減を助けます。着圧ソックスや休憩中のストレッチと組み合わせると効果的です。"}, {"q": "立ち仕事全般のインソールと何が違いますか？", "a": "基本は共通ですが、看護師は歩行距離が長くナースシューズが浅いため、薄型かつ歩行に強いアーチサポートを重視するのがポイントです。"}];

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
    { "@type": "ListItem", position: 3, name: "看護師", item: "https://sole-laboratory.com/articles/nurse-insole/" },
  ],
};

const points = [{"t": "ナースシューズに入る薄型設計", "b": "ナースシューズは中敷きスペースが浅めです。厚すぎると窮屈になるため、薄型でアーチサポートのある設計を選びましょう。元の中敷きを外して入れるのも手です。"}, {"t": "アーチサポートで歩行と立ちを支える", "b": "歩行距離が長い看護師には、内側縦アーチをしっかり支える設計が必須。疲れの蓄積を抑えます。"}, {"t": "通気性・抗菌で蒸れ対策", "b": "長時間勤務で靴の中は蒸れがち。通気性や抗菌・防臭機能があると快適さが保てます。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事で疲れないインソール"}, {"href": "/articles/care-worker-insole/", "label": "介護士のインソール"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/walking-insole/", "label": "ウォーキング用インソール"}];

export default function NursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "看護師" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">看護師の足の疲れにおすすめのインソール｜ナースシューズ対応の選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">1日中院内を歩き回り、立ちっぱなしの時間も長い看護師さん。夕方になると足が疲れてむくむ、という方は多いはず。ナースシューズに入る薄型でアーチを支えるインソールは、足の疲れをやわらげる心強い味方です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">看護師さんには、ナースシューズに収まる薄型で、土踏まずをしっかり支えつつ衝撃を吸収するインソールが向いています。長時間の歩行・立ち仕事による疲れとむくみの軽減に役立ちます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">看護師の足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">看護師の勤務は、長時間の立ち仕事に加えて院内をかなりの距離歩き回るのが特徴です。さらに夜勤では拘束時間が長く、足裏のアーチが疲労で沈み込みやすくなります。アーチが崩れると衝撃が吸収できず、疲れやむくみが強まります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで足裏のアーチを支えると、着地の衝撃が分散され、ふくらはぎの筋ポンプも働きやすくなって、疲れ・むくみの軽減につながります。ナースシューズは中が浅いことが多いため、薄型設計を選ぶのがポイントです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">看護師の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">看護師におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ナースシューズに入る薄型で、アーチサポートと衝撃吸収を両立したインソールが看護師さんに向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">夜勤・長時間勤務での使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">夜勤など長時間勤務では、休憩時に靴を脱いで足を休める・ふくらはぎを伸ばすと、インソールの効果と相まって疲れがたまりにくくなります。むくみが強い方は着圧ソックスの併用も有効です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">へたってくると効果が落ちるため、毎日長時間使う看護師さんは交換時期（3〜6ヶ月目安）を意識しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">立ちっぱなし・歩きっぱなしの足の疲れに。アーチを支えるインソールを比較しましょう。</p>
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
