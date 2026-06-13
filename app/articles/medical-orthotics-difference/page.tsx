import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "市販インソールと医療用足底板（足底装具）の違い【2026年】保険適用の制度も解説",
  description:
    "市販インソールと医療用の足底板（足底装具）は何が違う？医師の処方・義肢装具士による作製・健康保険の療養費支給制度の概要と、市販品でよい場合・受診すべき場合の線引きを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/medical-orthotics-difference/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "市販インソールと医療用足底板（足底装具）の違い｜どちらを選ぶべき？",
  description:
    "市販インソールと医療用の足底板（足底装具）は何が違う？医師の処方・義肢装具士による作製・健康保険の療養費支給制度の概要と、市販品でよい場合・受診すべき場合の線引きを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "医療用足底板（足底装具）はどうすれば作れますか？", "a": "整形外科などを受診し、医師が治療上必要と判断した場合に処方されます。義肢装具士が足型を採型して個別に作製する流れです。まずは足の症状を医療機関で相談することから始まります。"}, {"q": "足底装具に健康保険は使えますか？", "a": "医師が治療のために必要と認めた治療用装具は、健康保険の療養費支給の対象になり得る制度があります。一般にいったん全額支払い後に保険者へ申請する流れですが、条件・手続き・支給額はケースにより異なるため、医療機関と加入先の保険者に確認してください。"}, {"q": "市販のインソールに治療効果はありますか？", "a": "市販インソールは治療を目的とした製品ではありません。日常の足の負担軽減やアーチのサポートなど、セルフケアの補助として使うものです。治療が必要な症状には医療機関での対応を優先してください。"}, {"q": "市販品と足底装具、迷ったらどちらにすべきですか？", "a": "痛み・しびれ・変形など「症状」があるならまず受診を。診断の結果、装具が不要なら市販品を検討すれば遠回りになりません。症状がなく予防や疲れ対策が目的なら市販品からで問題ありません。"}, {"q": "足底装具を使っていますが市販インソールに替えてもいいですか？", "a": "自己判断での置き換えは避けてください。足底装具は症状に合わせて設計された治療用装具です。装着感や買い替えの相談も含め、まず処方を受けた医療機関・主治医に相談しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "医療用足底板との違い", item: "https://sole-laboratory.com/articles/medical-orthotics-difference/" },
  ],
};

const points = [{"t": "「治療」が必要かどうかで入口を決める", "b": "強い痛み・しびれ・変形・診断済みの疾患があるなら、市販品で様子を見るより先に整形外科を受診しましょう。治療が必要なら足底装具という選択肢を医師が判断してくれます。"}, {"t": "市販品は「日常の負担軽減・予防」の範囲で", "b": "立ち仕事の疲れ対策、ウォーキングのサポート、アーチの崩れ予防といった日常ケアの目的なら市販インソールが手軽です。治療効果を期待して選ぶものではない、と理解した上で使いましょう。"}, {"t": "市販品で改善しなければ受診のサインと捉える", "b": "市販インソールを2〜4週間使っても痛みが続く・悪化する場合は、自己判断を続けず受診を。医療用が必要な状態を市販品でカバーし続けるのが最も避けたいパターンです。"}];
const related = [{"href": "/articles/custom-made-comparison/", "label": "オーダーメイドインソールとの違い"}, {"href": "/articles/plantar-fasciitis/", "label": "足底筋膜炎のインソール対策"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール対策"}, {"href": "/articles/insole-demerit-risk/", "label": "ダイエットインソールのデメリット・注意点"}];

export default function MedicalOrthoticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "医療用足底板との違い" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">市販インソールと医療用足底板（足底装具）の違い｜どちらを選ぶべき？</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">足の痛みを調べていると「足底板」「足底装具」という言葉に行き当たります。これは市販インソールの上位版ではなく、医師の処方にもとづいて作られる治療用の装具で、位置づけがまったく異なるものです。違いを知っておくと、自分が今どちらを必要としているかを判断しやすくなります。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">医療用足底板（足底装具）は、医師の診断・処方にもとづき義肢装具士が個別に採型・作製する治療用装具で、条件を満たせば健康保険の療養費支給の対象になり得る制度があります。一方、市販インソールは治療を目的としたものではなく、日常の足の負担軽減や快適さをサポートする汎用品です。診断がつく症状・強い痛みがあるならまず整形外科へ。予防や日常ケアの範囲なら市販品から試す、というのが基本の線引きです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">医療用足底板と市販インソールは何が違うのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">医療用足底板（足底装具）は、整形外科などで医師が診断し、治療上必要と判断した場合に処方される装具です。国家資格を持つ義肢装具士が患者の足型を採型し、症状や骨格に合わせて個別に設計・作製します。扁平足障害や足底腱膜炎、関節リウマチによる足部変形、糖尿病性の足病変など、疾患の治療・進行予防の一環として用いられるものです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">費用面では、医師が治療のために必要と認めて作製された治療用装具は、健康保険の療養費支給の対象になり得る制度があります。一般に、いったん全額を支払ったうえで加入する健康保険（保険者）に申請する流れですが、対象となる条件・手続き・支給額は個々のケースや保険者によって異なるため、具体的なことは受診先の医療機関や加入先の保険者に確認してください。これに対し市販インソールは医療行為を伴わない汎用設計の製品で、保険制度の対象ではなく、治療目的のものでもありません。そのぶん数千円程度から手軽に試せるのが特徴です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">医療用足底板との違いの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">医療用足底板との違いにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">治療が不要で日常のサポートが目的なら、市販の機能性インソールから手軽に始められます。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">受診の目安と、市販品を使う場合の注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">次のような場合は市販品より受診を優先してください。(1)安静にしていても痛む、(2)朝の一歩目の強い痛みが数週間続く、(3)足の変形が進んでいる、(4)糖尿病・リウマチなど足に影響する持病がある、(5)子どもの足の痛みが続く。これらは治療用装具を含む医学的な対応が必要な可能性があり、健康保険の制度を使えるかどうかも含めて医療機関で相談するのが確実です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">市販インソールを使う場合は、「痛みを治すもの」ではなく「負担を減らす補助」と位置づけ、痛みが出たら使用を中止して原因を確認しましょう。医療用足底板を処方されている方が自己判断で市販品に置き換えるのは避け、必ず主治医に相談してください。</p>
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
          <p className="text-white/90 text-sm mb-5">日常の足の負担軽減が目的なら。手軽に試せる市販インソールを比較してみましょう。</p>
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
