import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "フリマ・中古のインソールは大丈夫？【2026年】衛生面・保証・偽造品リスクの注意点",
  description:
    "メルカリなどフリマアプリでインソールを買うのは大丈夫？中敷きならではの衛生面の注意、正規品保証・返金保証が受けられない問題、偽造品リスクと見分けの考え方を冷静に解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/mercari-used-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "フリマ・中古のインソールは大丈夫？衛生面・保証・偽造品リスクの注意点",
  description:
    "メルカリなどフリマアプリでインソールを買うのは大丈夫？中敷きならではの衛生面の注意、正規品保証・返金保証が受けられない問題、偽造品リスクと見分けの考え方を冷静に解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "メルカリでインソールを買うのはやめたほうが良いですか？", "a": "フリマ自体が悪いわけではありませんが、インソールは肌に近い消耗品のため中古品は衛生面でおすすめしません。新品とされる出品も、メーカー保証の対象外になる点は理解した上で判断しましょう。"}, {"q": "未使用品ならフリマで買っても問題ありませんか？", "a": "衛生面のリスクは小さくなりますが、メーカーの返金保証・正規品サポートは原則対象外です。また個人間取引では本当に未使用か・正規品かの確認が難しい点は残ります。"}, {"q": "フリマで偽物を見分ける方法はありますか？", "a": "個人間取引での確実な見分けは困難です。定価から不自然に安い出品は避ける、出品者の評価を確認するなどの自衛はできますが、確実なのは正規ルートでの購入です。ピットソールはAmazon Transparency（正規品認証プログラム）登録済みで、正規ルートには真贋確認の仕組みがあります。"}, {"q": "中古のインソールは機能的にも劣りますか？", "a": "インソールのクッションやアーチサポートは使用とともにへたる消耗品です。使用歴のある中古品は、見た目がきれいでも本来の支える機能が落ちている可能性があります。"}, {"q": "正規ルートで安く買う方法はありますか？", "a": "公式サイトのセット割引や、公式が出店するAmazon・楽天店舗のセール・ポイント還元の活用が現実的です。保証や真贋の心配なく価格を抑えられます。"}];

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
    { "@type": "ListItem", position: 3, name: "フリマ・中古インソール", item: "https://sole-laboratory.com/articles/mercari-used-insole/" },
  ],
};

const points = [{"t": "中古（使用済み）は衛生とへたりの両面で非推奨", "b": "インソールは下着や靴下に近い感覚で考えるのが安全です。使用済み品は衛生面の不安に加え、サポート機能がへたっている可能性もあります。"}, {"t": "「新品・未使用」でも保証対象外と心得る", "b": "フリマで買った時点で、メーカーの返金保証・正規品サポートは原則受けられません。保証込みの価格と比べて本当に得かを冷静に計算しましょう。"}, {"t": "極端に安い出品は偽造品リスクを疑う", "b": "定価から大きく外れた価格の人気商品は要注意です。個人間取引では真贋確認が難しいため、不安があれば正規ルートを選びましょう。"}];
const related = [{"href": "/articles/fake-genuine-insole/", "label": "偽物と正規品の見分け方"}, {"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での買い方"}, {"href": "/articles/lifespan/", "label": "インソールの寿命と交換時期"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function MercariUsedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "フリマ・中古インソール" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">フリマ・中古のインソールは大丈夫？衛生面・保証・偽造品リスクの注意点</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">メルカリなどのフリマアプリで「インソール」と検索すると、未使用品から中古品まで多くの出品が見つかります。定価より安く買える魅力はありますが、インソールは足裏に直接近い消耗品という特性上、ほかの商品とは異なる注意点があります。フリマ・中古品で買う前に知っておきたいポイントを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">フリマアプリ自体は便利な仕組みですが、インソールは肌に近い消耗品のため中古品は衛生面の不安が残り、新品とされる出品でもメーカーの正規品保証・返金保証の対象外になるのが一般的です。人気商品には偽造品・模倣品が紛れるリスクもあります。確実さを重視するなら、公式サイトなど正規ルートでの新品購入が安心です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フリマ・中古のインソールに注意が必要な理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">第一に衛生面です。インソールは靴の中で足裏の汗や皮脂を受け止め続ける、肌に近い消耗品です。使用済みの中古品は見た目がきれいでも内部に汗や雑菌が残っている可能性があり、衣類以上に「他人が使ったもの」のリスクが残ります。また、使用とともにクッションやアーチサポートはへたるため、中古品では本来の支える機能が落ちている場合もあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">第二に保証の問題です。メーカーの返金保証や正規品サポートは、公式サイトや正規販売店での購入を条件とするのが一般的で、フリマ経由の購入は新品・未使用とされる出品でも対象外になります。第三に偽造品リスクです。人気商品には模倣品が紛れることがあり、個人間取引では真贋の確認が困難です。なおピットソールはAmazon Transparency（正規品認証プログラム）に登録されており、正規ルートでは真贋確認の仕組みがありますが、フリマの個人出品はこの仕組みの外側です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">フリマ・中古で買う前に確認したい3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">新品・正規ルートで選ぶならこのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">当サイトで紹介する3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）は、いずれも公式通販が主な購入ルートです。返金保証などの条件は正規ルートでの購入が前提となるため、新品を正規ルートで購入するのが確実です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安く買いたい場合の現実的な選択肢</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">「少しでも安く」が目的なら、フリマの中古より先に検討したい選択肢があります。公式サイトのセット割引（複数足購入で単価が下がる）、公式が出店するAmazon・楽天店舗のポイント還元やセールなどです。これらなら保証や真贋の心配なく価格を抑えられます。正規ルートの選び方は別記事「Amazon・楽天での買い方」で詳しく解説しています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">どうしてもフリマを利用する場合は、未使用・未開封の明記、購入時期、出品者の評価を確認し、定価から不自然に安い出品は避ける——といった自衛が最低限必要です。そのうえで、保証が受けられないことは織り込んでおきましょう。インソールは数ヶ月で交換する消耗品であることを考えると、最初から正規ルートの新品を選ぶほうが結果的に納得感のある買い物になりやすいといえます。</p>
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
          <p className="text-white/90 text-sm mb-5">保証と安心を含めて選ぶなら正規ルートの新品から。まずは製品比較からどうぞ。</p>
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
