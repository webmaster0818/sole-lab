import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "妊娠中にインソールは使える？【2026年】使用前に知っておきたい注意点",
  description:
    "妊娠中の足の疲れ・むくみにインソールは使える？体の変化と足への負担の関係、使用前に主治医・助産師へ相談すべき理由、転倒リスクへの注意点を慎重に解説。ダイエット目的の使用は産後に。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pregnancy-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "妊娠中にインソールは使える？使用前に知っておきたい注意点",
  description:
    "妊娠中の足の疲れ・むくみにインソールは使える？体の変化と足への負担の関係、使用前に主治医・助産師へ相談すべき理由、転倒リスクへの注意点を慎重に解説。ダイエット目的の使用は産後に。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "妊娠中にインソールを使っても大丈夫ですか？", "a": "体の状態は一人ひとり異なるため、使用前に主治医や助産師に相談してください。使う場合も足の疲れをやわらげる補助に限定し、違和感があればすぐに中止しましょう。"}, {"q": "妊娠中のダイエットに使えますか？", "a": "妊娠中はダイエット目的でインソールを使う時期ではありません。体重管理は医師の指導のもとで行い、体型ケア目的での使用は産後に体調が落ち着いてから検討してください。"}, {"q": "妊娠中のむくみに効果はありますか？", "a": "インソールはむくみを治すものではありません。歩行時の足の負担をやわらげる補助に留まります。急なむくみの悪化や痛みを伴う場合は、製品でのケアではなくすぐに主治医へ相談してください。"}, {"q": "転倒が心配です。気をつけることは？", "a": "慣れない装着物は歩行感覚を変えるため、最初は室内で短時間から試し、かかとの低い安定した靴と組み合わせてください。おなかが大きく足元が見えにくい時期は特に慎重に。少しでも歩きにくければ使用を中止しましょう。"}, {"q": "産後はいつから使えますか？", "a": "産後の回復には個人差が大きいため、一概には言えません。体調が落ち着き、産後の経過に問題がないことを医師に確認してから検討しましょう。産後のインソール活用は産後向けの記事で詳しく解説しています。"}];

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
    { "@type": "ListItem", position: 3, name: "妊娠中", item: "https://sole-laboratory.com/articles/pregnancy-insole/" },
  ],
};

const points = [{"t": "使用前に主治医・助産師に相談する", "b": "妊娠中の体は時期や個人差が大きく、一般向けの製品がそのまま合うとは限りません。インソールに限らず、体に装着するケア用品を試す前に、健診などの機会に必ず相談しましょう。むくみが急に強くなった場合などは、製品でのケアより先に受診が必要です。"}, {"t": "転倒リスクに最大限配慮する", "b": "慣れないインソールは足裏の感覚や靴のフィット感を変えるため、特におなかが大きく足元が見えにくい時期は注意が必要です。使う場合は、かかとが低く安定した履き慣れた靴に入れ、最初は室内で短時間から慣らし、少しでも歩きにくさを感じたら使用を中止してください。"}, {"t": "ダイエット目的では使わない", "b": "妊娠中の体重管理は医師の指導のもとで行うもので、インソールをダイエット目的で使う時期ではありません。妊娠中はあくまで足の疲れをやわらげる補助に限定し、体型を整える目的での使用を考えるなら、産後の体調が落ち着き、医師に相談できてからにしましょう。"}];
const related = [{"href": "/articles/postpartum-insole/", "label": "産後のインソール活用"}, {"href": "/articles/swelling-insole/", "label": "むくみ対策インソール"}, {"href": "/articles/flat-feet/", "label": "扁平足のインソール"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function PregnancyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "妊娠中" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">妊娠中にインソールは使える？使用前に知っておきたい注意点</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">妊娠中はおなかが大きくなるにつれて足への負担が増え、足の疲れやむくみを感じる方が多くなります。インソールが負担軽減の補助になる場合もありますが、妊娠中は体が大きく変化する時期。この記事では、効果をうたう前に知っておいてほしい注意点を中心に、慎重に解説します。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">妊娠中のインソール使用は、必ず事前に主治医や助産師に相談してください。使う場合も、足の疲れをやわらげる補助に限定し、ダイエット目的の使用は産後の体調が落ち着いてからにしましょう。慣れない装着物は歩行感覚を変えるため、転倒リスクに十分注意が必要です。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">妊娠中に足へ負担がかかる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">妊娠中は、おなかが大きくなることで体重が増え、体の重心も前方へ変化します。これを支えるために反り腰気味の姿勢になりやすく、足裏や腰への負担が増えるといわれます。また、ホルモンの影響で関節を支える靭帯が緩みやすくなることが一般に知られており、足のアーチが下がって足が疲れやすくなったり、靴のサイズ感が変わったりする方もいます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールで土踏まずを支えることは、こうした足裏の負担をやわらげる補助になる可能性があります。ただし妊娠中の体の状態は一人ひとり大きく異なり、時期によっても変わります。むくみや痛みの背景に医療的な確認が必要な場合もあるため、自己判断で対処せず、まず妊婦健診の際などに主治医・助産師へ相談することを強くおすすめします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">妊娠中の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">妊娠中におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">妊娠中に検討する場合は、主治医・助産師への相談を前提に、安定した履き慣れた靴に合わせやすい薄型タイプから慎重に選びましょう。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">妊娠中の使い方の注意と受診の目安</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使う場合は、必ず安定した靴（かかとが低く、足の甲が固定できるスニーカーなど）と組み合わせ、初日は室内で短時間だけ試してください。違和感・歩きにくさ・足の痛みを感じたら、すぐに使用をやめましょう。妊娠の経過とともに足の状態は変わるため、合っていたものが合わなくなることもあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">足の強いむくみ・急なむくみの悪化・痛み・しびれがある場合は、インソールでのケアを考える前に、必ず主治医に相談してください。妊娠中の症状には医療的な確認が必要なものが含まれます。この記事は一般的な情報であり、個別の医学的アドバイスに代わるものではありません。</p>
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
          <p className="text-white/90 text-sm mb-5">まずは主治医・助産師に相談を。検討の際は製品の特徴を正しく比較しましょう。</p>
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
