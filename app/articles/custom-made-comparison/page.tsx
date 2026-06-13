import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "オーダーメイドインソールと既製品の違い【2026年】費用感とどっちを選ぶかの基準",
  description:
    "オーダーメイドインソールと市販の既製インソールはどう違う？計測・作製の流れ、店舗により数千円〜数万円と幅がある費用感、既製品で十分なケースと使い分けの基準を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/custom-made-comparison/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "オーダーメイドインソールと既製品の違い｜費用感と選び分けの基準",
  description:
    "オーダーメイドインソールと市販の既製インソールはどう違う？計測・作製の流れ、店舗により数千円〜数万円と幅がある費用感、既製品で十分なケースと使い分けの基準を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "オーダーメイドインソールの値段はいくらくらいですか？", "a": "店舗やサービス内容により数千円から数万円と幅があります。計測方法やアフター調整の有無でも変わるため、検討する場合は複数店舗でサービス内容と費用を比較するのがおすすめです。"}, {"q": "オーダーメイドのほうが既製品より必ず良いのですか？", "a": "フィット精度では有利ですが、仕上がりは計測者の技術やサービス内容に左右されます。日常使いの目的なら既製品で十分なことも多く、「必ず良い」とは言い切れません。目的と費用のバランスで判断しましょう。"}, {"q": "既製品のインソールでもフィット調整はできますか？", "a": "できます。多くの機能性インソールはサイズ展開に加えてつま先のカット調整に対応しています。ピットソールやスリムアップインソールもカット調整が公式に案内されています。"}, {"q": "足が痛いのでオーダーメイドを作ろうと思いますが？", "a": "痛みなどの症状がある場合は、民間のオーダーメイドより先に整形外科の受診をおすすめします。治療が必要な状態なら、医師の処方による医療用の足底装具（保険制度の対象になり得ます）が適切な選択肢になります。"}, {"q": "スポーツ用品店のオーダーメイドと医療用の足底装具は同じものですか？", "a": "別物です。スポーツ用品店などのオーダーメイドは民間サービスで治療目的ではありません。医療用足底装具は医師の処方にもとづき義肢装具士が作製する治療用装具です。目的に応じて使い分けてください。"}];

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
    { "@type": "ListItem", position: 3, name: "オーダーメイドとの違い", item: "https://sole-laboratory.com/articles/custom-made-comparison/" },
  ],
};

const points = [{"t": "目的に対して費用が見合うかで判断する", "b": "毎日の通勤や立ち仕事の疲れ対策なら、まず既製品からで十分なことが多いです。競技パフォーマンスへのこだわりや、既製品を複数試しても合わない場合に、オーダーの費用を掛ける価値が出てきます。"}, {"t": "既製品はサイズ展開とカット調整の幅を確認", "b": "既製品でもサイズ選びとつま先カットでフィット精度は上げられます。サイズ展開が細かいか、カット調整が公式に案内されているかを確認しましょう。"}, {"t": "オーダーは計測内容とアフター調整の有無で選ぶ", "b": "オーダーを検討するなら、計測方法（静的な足型だけか、歩行も見るか）と、作製後の再調整サービスの有無を確認しましょう。費用だけでなくサービス範囲の比較が大切です。"}];
const related = [{"href": "/articles/medical-orthotics-difference/", "label": "医療用足底板との違い"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}, {"href": "/articles/cheap-insole/", "label": "安いインソールと高いインソールの違い"}, {"href": "/articles/material-comparison/", "label": "インソールの素材比較"}];

export default function CustomMadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "オーダーメイドとの違い" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">オーダーメイドインソールと既製品の違い｜費用感と選び分けの基準</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">スポーツ用品店や靴店、専門サロンなどでは、足を計測して作るオーダーメイドインソールのサービスがあります。「既製品より絶対に良いのでは？」と思いがちですが、費用も手間も大きく違うため、自分の目的に対して見合うかどうかで判断するのが賢明です。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">オーダーメイドは足の計測にもとづいて個別に調整されるためフィット精度が高い一方、費用は店舗やサービスにより数千円から数万円と幅があり、作製にも来店・計測の手間がかかります。日常の疲れ対策やウォーキングのサポートが目的なら、まず数千円程度の既製インソールで十分なケースが多数派。競技スポーツでのこだわりや、既製品で合うものが見つからない足の方がオーダーを検討する、という順番がおすすめです。なお治療目的なら、民間のオーダーメイドではなく医療機関の受診が先です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">オーダーメイドと既製品、それぞれの仕組みと得意分野</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">オーダーメイドインソールは、店舗での足型計測（フットプリント、3Dスキャン、歩行チェックなど方式は店舗ごとに異なります）をもとに、アーチの高さやパッドの位置を個別に調整して仕上げます。左右差や特殊な足型にも対応しやすく、計測者によるフィッティングを受けられるのが強みです。一方で品質は計測者の技術やサービス内容に左右され、費用は店舗により数千円〜数万円と幅があります。完成までに日数がかかる場合や、調整に再来店が必要な場合もあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">既製品（市販の機能性インソール）は、多くの人の足に合うよう設計された汎用品です。サイズ展開やカット調整である程度のフィッティングが可能で、価格は手頃、買ってすぐ使えます。「平均的な足型から大きく外れていない人の日常使い」では、既製品でも必要なサポートを得られることが多く、まず既製品で試して足りなければオーダーを検討する、という段階的な選び方が費用対効果に優れます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">オーダーメイドとの違いの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">オーダーメイドとの違いにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">まずは手頃な既製品から。サイズ展開とカット調整に対応した機能性インソールなら段階的に試せます。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">オーダーメイドを検討すべき人・既製品で十分な人</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">オーダーメイドが向くのは、(1)競技スポーツで細かなフィットを追求したい、(2)左右差や特殊な足型で既製品が合った試しがない、(3)プロのフィッティングを受けながら調整したい、という方です。ただし民間のオーダーメイドインソールは治療用装具とは別物です。足の痛みや変形など症状がある場合は、オーダーメイドで解決を図る前に整形外科を受診してください。医師が必要と判断すれば、保険制度の対象になり得る医療用の足底装具という選択肢があります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、日常の疲れ対策・ウォーキングや姿勢のサポート・ダイエット中の歩行サポートが目的なら、既製の機能性インソールで始めるのが現実的です。数千円程度で試せて、合わなければ買い替えやすいのも既製品の利点。まず既製品→物足りなければオーダー検討、の順番なら無駄がありません。</p>
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
          <p className="text-white/90 text-sm mb-5">オーダーの前に試す価値あり。サイズ調整できる既製インソールを比較してみましょう。</p>
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
