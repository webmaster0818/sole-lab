import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホームセンターのインソールはダイエットに使える？【2026年】作業用との違い",
  description:
    "カインズやコーナンなどホームセンターのインソールはダイエットに使える？作業靴・安全靴向けが中心という売り場の一般的な特徴と、ダイエット専用設計との目的の違い、選び分けを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/home-center-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ホームセンターのインソールはダイエットに使える？作業用との目的の違い",
  description:
    "カインズやコーナンなどホームセンターのインソールはダイエットに使える？作業靴・安全靴向けが中心という売り場の一般的な特徴と、ダイエット専用設計との目的の違い、選び分けを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ホームセンターにダイエットインソールはありますか？", "a": "作業靴・安全靴向けの衝撃吸収・疲労軽減系が中心で、姿勢・歩行を整えるダイエット専用設計の取り扱いは一般的ではありません。品揃えは店舗・時期によって変わります。"}, {"q": "ピットソールはホームセンターで買えますか？", "a": "ホームセンターでのピットソールの取り扱いは確認されていません。公式サイトと正規のAmazon・楽天店舗が主な購入ルートです。"}, {"q": "ホームセンターのインソールはどんな人に向いていますか？", "a": "安全靴・作業靴・長靴での立ち仕事や現場作業、庭仕事の疲れ対策をコスパよく済ませたい人に向いています。"}, {"q": "作業用インソールを普段のスニーカーに入れても良いですか？", "a": "入れても問題はありませんが、作業向けは耐久性・衝撃吸収を優先した設計が中心です。日常の歩行で姿勢サポートを求めるなら、目的に合った設計を選ぶほうが効果的です。"}, {"q": "安全靴の疲れがつらいのですが、まず何をすべきですか？", "a": "靴のサイズ・ひもの締め方の見直しと、クッション性のあるインソールの追加が手軽な第一歩です。痛みが続く場合は我慢せず医療機関に相談してください。"}];

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
    { "@type": "ListItem", position: 3, name: "ホームセンター", item: "https://sole-laboratory.com/articles/home-center-insole/" },
  ],
};

const points = [{"t": "作業靴・安全靴向けならホームセンターが手堅い", "b": "現場作業や庭仕事など、作業靴の疲れ対策が目的なら、耐久性重視の実用品が手頃に揃うホームセンターは合理的です。"}, {"t": "ダイエット目的は専用設計を確認", "b": "姿勢・歩行サポートが目的なら、作業向けのクッション系ではなく、アーチサポートを軸にしたダイエット向け設計かを確認しましょう。"}, {"t": "品揃えは店舗・時期で変わる前提で", "b": "ホームセンターの在庫・取扱商品は店舗規模や季節で変わります。確実に欲しい商品が決まっている場合は通販ルートも検討しましょう。"}];
const related = [{"href": "/articles/workman-insole/", "label": "ワークマンのインソール"}, {"href": "/articles/factory-work-insole/", "label": "工場勤務のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function HomeCenterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ホームセンター" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">購入ガイド</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ホームセンターのインソールはダイエットに使える？作業用との目的の違い</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ホームセンターの作業用品コーナーには、安全靴や長靴に合わせるインソールが並んでいます。耐久性とコスパに優れた実用品が中心ですが、ダイエット目的にはどうなのか——ホームセンターのインソールの一般的な特徴と、専用品との違いを整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ホームセンターのインソールは、作業靴・安全靴での立ち仕事や作業の負担軽減を目的とした、耐久性・クッション性重視の実用品が中心です。品揃えは店舗・時期で変わります。姿勢・歩き方を整える本格的なダイエット設計とは目的が異なるため、ダイエット重視なら専用インソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ホームセンターのインソールの特徴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ホームセンターのインソール売り場は、作業用品の文脈が中心です。安全靴・作業靴・長靴に入れて使う前提の、衝撃吸収や疲労軽減をうたう実用的な商品が多く、価格も手頃で耐久性重視。現場仕事や庭仕事、立ち作業の負担を減らす目的では理にかなった品揃えです。農作業用品や靴コーナーの近くで実物を確かめて買えるのも利点です。なお、具体的な品揃えや取扱ブランドは店舗の規模・時期によって異なります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方、ダイエットインソールは日常の歩行や立ち姿勢でアーチを支え、姿勢・歩き方を整えることを目的とした設計です。ホームセンターの作業向けインソールは「重作業の疲れを減らす」ことが主眼で、ボディメイクを狙う設計とは方向性が異なります。作業中の足の負担軽減と、日常のダイエットサポートは分けて考えましょう。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ホームセンターの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ホームセンターにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ダイエットや姿勢改善が目的なら、専用設計のインソールが向いています。なお、当サイトで紹介する3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）は、ホームセンターを含む実店舗での取り扱いは確認されておらず、公式通販が中心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ダイエットインソールはホームセンターで売ってる？</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ピットソール・ランウェイキュアソール・スリムアップインソールの<strong>ホームセンターでの取り扱いは確認されていません</strong>。ピットソールは公式サイトと正規のAmazon・楽天店舗、ランウェイキュアソールは公式サイト（FLOReショップ）が主な購入ルートです。店頭の作業向けインソールとは設計目的が異なる別商品です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使い分けの目安は、「安全靴や長靴での作業の疲れを減らしたい」ならホームセンターの実用品、「日常の歩行で姿勢や歩き方を整えたい」ならダイエット専用設計です。立ち仕事・作業系の足の悩みについては、別記事「ワークマンのインソール」や「工場勤務のインソール」も参考になります。</p>
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
          <p className="text-white/90 text-sm mb-5">ダイエット目的なら、姿勢と歩行を整える専用インソールを比較しましょう。</p>
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
