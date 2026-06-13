import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "保育士の足腰の負担に！インソールの選び方【2026年】抱っこ・中腰対策",
  description:
    "子どもの抱っこ、しゃがむ・立つの繰り返し、外遊びの追いかけっこ。保育士特有の足腰の負担をやわらげるインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/childcare-worker-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "保育士におすすめのインソール｜抱っこと中腰の足腰負担対策",
  description:
    "子どもの抱っこ、しゃがむ・立つの繰り返し、外遊びの追いかけっこ。保育士特有の足腰の負担をやわらげるインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "園内の上履きにも入れられますか？", "a": "薄型のインソールなら多くの上履きに入ります。中が浅い場合は元の中敷きを外す、カットできるタイプでサイズを合わせるなどの工夫をすると窮屈になりにくいです。"}, {"q": "抱っこで腰がつらいのですが、インソールで楽になりますか？", "a": "インソールは足元を安定させて姿勢のブレを減らすことで、腰への負担を間接的に減らす補助になります。膝を使った抱き上げ方との併用が大切で、痛みが強い場合は受診を優先してください。"}, {"q": "外遊びで走ることが多くてもズレませんか？", "a": "フィット感のあるインソールを正しいサイズで入れればズレにくいです。靴の中で動く場合はカットで調整するか、足に直接装着するソックス型を検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "保育士", item: "https://sole-laboratory.com/articles/childcare-worker-insole/" },
  ],
};

const points = [{"t": "抱っこの荷重を分散するアーチサポート", "b": "子どもの体重が加わったぶん、足裏への荷重は普段より増えます。土踏まずをしっかり支えて荷重を足裏全体に分散できる設計を選びましょう。"}, {"t": "しゃがむ・立つ・走るを支える安定性", "b": "立ち上がりや急な動き出しでは足元の踏ん張りが要になります。かかとが安定し、力を入れたときにブレにくいものが向いています。"}, {"t": "上履き・外履きそれぞれで使えること", "b": "園内は上履き、園庭ではスニーカーと、保育士は履き替えが多い仕事です。薄型なら上履きにも入り、カットできるタイプならどちらの靴にも合わせやすくなります。"}];
const related = [{"href": "/articles/care-worker-insole/", "label": "介護士のインソール"}, {"href": "/articles/nurse-insole/", "label": "看護師のインソール"}, {"href": "/articles/teacher-insole/", "label": "教員・先生のインソール"}, {"href": "/articles/back-pain/", "label": "腰痛のインソール対策"}];

export default function ChildcareWorkerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "保育士" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">保育士におすすめのインソール｜抱っこと中腰の足腰負担対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">子どもを抱っこしたまま動き、目線を合わせるためにしゃがんでは立ち上がり、園庭では全力で追いかける——保育士の一日は、立ち仕事という言葉だけでは語れない動きの連続です。抱っこのぶん増える荷重と、しゃがむ・立つの繰り返しに、足元から備えましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">保育士には、抱っこで増えた荷重を分散するアーチサポートと、立ち上がり・追いかけの踏ん張りを支える安定性を備えたインソールが向いています。園内の上履きと外遊び用の靴、それぞれの使い方を考えて選ぶのがポイントです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">保育の仕事で足腰に負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">保育士の身体的負担で大きいのが抱っこです。子どもを抱えると、そのぶんの重さが自分の体重に上乗せされて足裏にかかり、しかも前抱きの姿勢は重心が前に寄るため、足裏とふくらはぎ、腰で支え続けることになります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに、子どもと目線を合わせるためのしゃがみ込みと立ち上がりを一日に何度も繰り返し、外遊びでは急な動き出しで子どもを追いかけます。足元が不安定だと、こうした動作のたびに膝や腰へ負担が逃げてしまいます。インソールで足裏のアーチを支えて土台を安定させることが、足腰全体の負担軽減の補助になります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">保育士の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">保育士におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">抱っこで増えた荷重と踏ん張りの多い動きを支えるインソールが保育士に向いています。履き替えの多い方は、足に直接装着するソックス型のランウェイキュアソール（M/L・22.5〜25cmの女性向け）なら靴を替えても効果が続きます。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">抱っこと中腰から腰を守る使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは足元の土台を安定させる補助です。抱っこや抱き上げのときは、腰だけで持ち上げず膝を曲げて重心を低くする動作と組み合わせると、腰への負担をより減らせます。中腰姿勢が続いたあとは、軽く伸びをして姿勢をリセットしましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">外遊び用のスニーカーは、クッション性のあるものを選ぶとインソールとの相乗効果が出ます。足裏・膝・腰の痛みが続く場合は、無理を重ねる前に整形外科で相談してください。</p>
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
          <p className="text-white/90 text-sm mb-5">抱っこ・中腰・追いかけっこの毎日に。足元から支えるインソールを比較しましょう。</p>
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
