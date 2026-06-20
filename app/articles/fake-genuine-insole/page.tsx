import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの偽物・正規品の見分け方【2026年】安全に買うコツ",
  description:
    "ダイエットインソールの偽物・模倣品を避けたい方へ。正規品の見分け方、非正規の格安品・フリマのリスク、安全に購入するためのチェックポイントを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/fake-genuine-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールの偽物・正規品の見分け方｜安全に買うコツ",
  description:
    "ダイエットインソールの偽物・模倣品を避けたい方へ。正規品の見分け方、非正規の格安品・フリマのリスク、安全に購入するためのチェックポイントを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "ダイエットインソールに偽物はありますか？", "a": "人気製品には模倣品や非正規品が出回ることがあります。見た目が似ていても素材・設計が異なり、機能や保証が得られない場合があります。"}, {"q": "偽物を避けるにはどうすれば？", "a": "メーカー公式サイトや正規販売店から購入するのが確実です。極端に安い出品やフリマの中古は避け、販売元と保証を確認しましょう。"}, {"q": "フリマの中古は買っても大丈夫？", "a": "衛生面のほか、正規品保証・返金保証の対象外になることがほとんどです。安全と効果を考えると正規の新品がおすすめです。"}, {"q": "正規品か不安なときは、どこを確認すればいい？", "a": "公式サイトに記載された正規販売店・取扱店の一覧を確認するのが基本です。あわせて、販売ページの販売者情報（事業者名・所在地・連絡先）の表示や、特定商取引法に基づく表記の有無もチェックしましょう。判断に迷う場合はメーカーの問い合わせ窓口に確認するのが確実です。"}, {"q": "通販モールの出品なら安心ですか？", "a": "大手モールでもメーカー以外の第三者が出品している場合があります。商品ページの販売元がメーカー公式ストアか、正規取扱店かを確認しましょう。レビューは件数や内容の偏りもあるため、ひとつの目安として参考にする程度にとどめるのがおすすめです。"}];

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
    { "@type": "ListItem", position: 3, name: "偽物・正規品", item: "https://sole-laboratory.com/articles/fake-genuine-insole/" },
  ],
};

const points = [{"t": "公式・正規販売店から買う", "b": "最も確実な対策は、メーカー公式サイトや正規販売店からの購入です。正規品保証・返金保証の対象になります。公式サイトに取扱店一覧が掲載されている場合は、購入先がそこに含まれるかを確認しましょう。"}, {"t": "極端に安い出品を疑う", "b": "定価から大きく外れた格安出品は、模倣品や非正規品の可能性があります。販売元を確認しましょう。"}, {"t": "販売元・保証を確認", "b": "販売元の表記、正規品保証、返金保証の有無をチェック。これらが不明確な出品は避けるのが安全です。"}, {"t": "販売者情報と特商法表記を確認", "b": "通販では、販売者の事業者名・所在地・連絡先や、特定商取引法に基づく表記が掲載されているかを確認しましょう。これらの情報が見当たらない、または連絡が取れない出品は慎重に判断するのが安全です。"}];
const related = [{"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での購入"}, {"href": "/articles/refund-guarantee-insole/", "label": "返金保証・解約の注意"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}, {"href": "/articles/pitsole-coupon/", "label": "ピットソールのクーポン"}];

export default function FakeGenuinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "偽物・正規品" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールの偽物・正規品の見分け方｜安全に買うコツ</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">人気のダイエットインソールには、模倣品や非正規の格安品が出回ることがあります。偽物は品質や保証の面でリスク大。正規品を安全に手に入れるための見分け方とチェックポイントを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">偽物・模倣品を避けるには、メーカー公式サイトや正規販売店から購入するのが確実です。極端に安い非正規出品やフリマの中古は、品質・正規品保証・返金保証の対象外になるリスクがあるため避けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">なぜ偽物・模倣品が出回るのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">人気が高くよく売れる製品ほど、似せた模倣品や、正規ルートを通らない非正規品が出回りやすくなります。見た目が似ていても、素材や設計が異なり、本来の機能や耐久性が得られないことがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに、非正規品やフリマの中古は、メーカーの正規品保証や返金保証の対象外です。安く見えても、効果が得られず買い直すことになれば結局割高になりかねません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">購入前に確認できる一般的なポイントとして、販売元がメーカー公式ストアか正規取扱店か、定価から極端にかけ離れた価格になっていないか、販売者情報や特定商取引法に基づく表記が明示されているか、返品・返金保証の条件が記載されているか、などが挙げられます。ひとつでも不明確な点があれば、購入を急がず確認するのが安心です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">偽物・正規品の選び方4つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">偽物・正規品におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">正規販売店から購入し、正規品保証・返金保証を確認するのが安全です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フリマ・中古の注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">フリマアプリの中古は、衛生面に加え、正規品保証・返金保証の対象外であることがほとんどです。安くても、効果や安全性が保証されないリスクがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">とくにインソールは肌に触れて毎日使うものです。安全と効果を考えれば、多少高くても正規の新品を選ぶのが安心です。</p>
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
          <p className="text-white/90 text-sm mb-5">正規品を安全に。販売元と保証を確認してインソールを選びましょう。</p>
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
