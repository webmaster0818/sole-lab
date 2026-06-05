import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの返金保証・解約の注意点【2026年】定期購入のコツ",
  description:
    "ダイエットインソールの返金保証や定期購入の解約で損しないために。保証の条件・解約のタイミング・注意点をわかりやすく解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/refund-guarantee-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールの返金保証・解約の注意点｜定期購入で損しないコツ",
  description:
    "ダイエットインソールの返金保証や定期購入の解約で損しないために。保証の条件・解約のタイミング・注意点をわかりやすく解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "返金保証は必ず使えますか？", "a": "保証期間・対象・申請方法などの条件を満たす必要があります。購入前に条件を確認し、満たせない場合は返金されない点に注意しましょう。"}, {"q": "定期購入の解約はいつまでにすれば良い？", "a": "多くは『次回発送の◯日前まで』に解約連絡が必要です。発送日から逆算して早めに連絡するのが安全です。"}, {"q": "単品購入と定期購入どちらが良い？", "a": "まず試したいなら単品、継続前提で割安に使いたいなら定期が向きます。定期は最低回数と解約条件を必ず確認しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "返金保証・解約", item: "https://sole-laboratory.com/articles/refund-guarantee-insole/" },
  ],
};

const points = [{"t": "返金保証の条件を確認", "b": "保証期間・対象・申請方法・返送の要否を購入前にチェック。条件を満たさないと返金されません。"}, {"t": "定期の最低回数・解約期限", "b": "『最低継続回数』『解約は次回発送の何日前まで』を必ず確認。スケジュールを把握しておきましょう。"}, {"t": "解約方法を事前に把握", "b": "電話のみ・マイページからなど解約方法は様々。受付時間や手順を事前に確認しておくとスムーズです。"}];
const related = [{"href": "/articles/ec-buy-insole/", "label": "Amazon・楽天での購入"}, {"href": "/articles/fake-genuine-insole/", "label": "偽物・正規品の見分け方"}, {"href": "/articles/pitsole-coupon/", "label": "ピットソールのクーポン"}, {"href": "/articles/where-to-buy-insole/", "label": "市販はどこで売ってる"}];

export default function RefundGuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "返金保証・解約" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールの返金保証・解約の注意点｜定期購入で損しないコツ</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">ダイエットインソールには返金保証や定期購入(定期コース)がついていることがあります。お得な反面、条件や解約のルールを知らないと損をすることも。後悔しないための注意点を整理します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">返金保証は『条件（期間・対象・申請方法）』を、定期購入は『最低継続回数・解約期限・解約方法』を、購入前に必ず確認しましょう。条件を把握しておけば、保証を活かしつつ無駄な出費を防げます。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・定期購入の仕組みと落とし穴</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">返金保証は『一定期間内に効果に満足できなければ返金』といった制度ですが、保証期間・対象商品・申請手続き・返送の要否など条件が細かく決まっていることが多いです。条件を満たさないと返金されません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">定期購入(定期コース)は単品より割安な反面、『最低◯回の継続が条件』『次回発送の◯日前までに解約連絡』などのルールがあります。これを知らずに解約しようとすると、想定外の回数分を購入することになる場合があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・解約の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">返金保証・解約におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">保証や解約条件が明確な、正規販売店での購入が安心です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">損しないためのチェックリスト</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">購入前に、①返金保証の有無と条件、②定期購入か単品か、③定期なら最低回数と解約期限・方法、④販売元と問い合わせ先、を確認しましょう。これらが明確な販売店を選ぶのが安全です。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">解約したい場合は、次回発送日から逆算して早めに連絡するのが鉄則です。期限ぎりぎりや過ぎた連絡は、次回分が発送されてしまうことがあります。</p>
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
          <p className="text-white/90 text-sm mb-5">保証・解約条件が明確なインソールを、安心して選びましょう。</p>
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
