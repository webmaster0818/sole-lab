import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ローファーに合うインソールの選び方【2026年】脱げ・かかと痛・疲れ対策",
  description:
    "通学や通勤で履くローファーは底が硬く平らで、足が疲れやすい靴。ひもがない靴特有の脱げやすさ・中敷きのズレを防ぐインソールの選び方とおすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/loafers-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ローファーに合うインソールの選び方｜脱げやすさと硬い底の疲れ対策",
  description:
    "通学や通勤で履くローファーは底が硬く平らで、足が疲れやすい靴。ひもがない靴特有の脱げやすさ・中敷きのズレを防ぐインソールの選び方とおすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "ローファーにインソールを入れると脱げやすくなりませんか？", "a": "厚いインソールを入れると足が持ち上がってかかと脱げが悪化することがあります。薄型を選び、元の中敷きが外せる場合は外してから入れると、足の位置が変わりにくく脱げにくさを保てます。"}, {"q": "学生のローファーにも使えますか？", "a": "使えます。カットできるタイプなら細身のローファーにも合わせやすいです。ピットソールはXS（21cm〜）から対応しています。通学靴全般の選び方は通学靴・上履きの記事も参考にしてください。"}, {"q": "ローファーの中敷きが外せない場合はどうすればいいですか？", "a": "外せない場合は、その上に重ねて入れることになるため、より薄いタイプを選びましょう。甲がきつくなる場合は使用を控え、靴のサイズ自体の見直しも検討してください。"}, {"q": "革底のローファーでかかとが痛いのですが効果はありますか？", "a": "硬い底からの衝撃をクッションとアーチサポートで分散することで、かかとへの負担を減らす補助になります。ただし朝の一歩目に強く痛むなどの場合は足底腱膜炎の可能性もあるため、整形外科の受診を優先してください。"}, {"q": "ビジネス用の革靴とローファーでインソールの選び方は違いますか？", "a": "基本は同じく薄型・アーチサポート重視ですが、ローファーはひもで調整できないぶん、ズレ防止のためのカット精度とかかと脱げへの配慮がより重要になります。"}];

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
    { "@type": "ListItem", position: 3, name: "ローファー", item: "https://sole-laboratory.com/articles/loafers-insole/" },
  ],
};

const points = [{"t": "甲を圧迫しない薄型を選ぶ", "b": "ローファーは甲まわりの空間に余裕がない靴です。厚いインソールを入れると甲が圧迫されて痛みが出たり、逆に足が持ち上がってかかと脱げが悪化したりします。前足部が薄いフラットに近い設計か、薄型のアーチサポートタイプを選びましょう。"}, {"t": "カットして靴にぴったり合わせる", "b": "ひもがない靴は中敷きが靴の中でズレると歩きにくさに直結します。ピットソールやスリムアップインソールのようにハサミでカットして調整できるタイプなら、ローファーの細めのつま先形状にも正確に合わせられ、ズレを防げます。"}, {"t": "土踏まずを支えるアーチサポート", "b": "硬く平らな底を補うには、土踏まずを支えるアーチサポートが効果的です。足裏全体で体重を受けられるようになると、長い通学・通勤でも疲れがたまりにくくなります。"}];
const related = [{"href": "/articles/business-shoes-insole/", "label": "ビジネスシューズ・革靴のインソール"}, {"href": "/articles/school-shoes-insole/", "label": "通学靴・上履きのインソール"}, {"href": "/articles/pumps-insole/", "label": "パンプスで疲れないインソール"}, {"href": "/articles/heel-pain-insole/", "label": "かかとの痛みのインソール対策"}];

export default function LoafersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "ローファー" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">靴タイプ別</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ローファーに合うインソールの選び方｜脱げやすさと硬い底の疲れ対策</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">通学や通勤の定番のローファー。きちんと見える一方で、底が硬く平らなため足裏に衝撃が伝わりやすく、ひもで甲を固定できないぶん歩くとかかとが浮きやすい靴でもあります。ローファーの構造に合わせたインソール選びで、毎日の歩きをぐっと楽にしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ローファーには、甲のスペースを圧迫しない薄型で、土踏まずを支えるアーチサポート付きのインソールが向いています。ひもがない靴は中敷きがズレやすいため、カットで靴に正確に合わせられるタイプを選ぶのがポイントです。厚すぎるものはかかと脱げを悪化させるので避けましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ローファーで足が疲れる・痛くなる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ローファーの底は革や硬めの合成素材で平らに作られていることが多く、土踏まずを支える構造がほとんどありません。アスファルトの通学路や駅までの道を歩くと、着地の衝撃がそのまま足裏に伝わり、足裏のだるさやかかとの痛みにつながりやすくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらにローファーはひもやベルトで甲を固定できないため、歩くたびにかかとがわずかに浮き、靴の中で足が前後に動きがちです。この『遊び』は靴ずれや指の付け根への負担の原因にもなります。インソールで足裏とのフィット感を高めると、衝撃の緩和と靴の中の安定の両方を補助できます。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ローファーの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ローファーにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ローファーには、薄型でカット調整ができ、アーチを支えられるインソールが向いています。ピットソールはXS〜L（21〜27.5cm）でカット調整でき、学生用の小さめサイズにも対応しやすいのが特徴です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">ローファーで使うときの注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">入れた直後はサイズ感が変わるため、まず室内で履いて甲のきつさとかかとの浮きを確認しましょう。元の中敷きが取り外せるタイプなら、外してから入れると窮屈になりにくいです。きつい場合は無理に使わず、薄いタイプへの変更を検討してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールを入れても靴ずれやかかとの痛みが続く場合は、靴そのもののサイズが合っていない可能性があります。また、足裏やかかとの痛みが2週間以上続く・腫れを伴う場合は、自己判断せず整形外科を受診してください。</p>
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
          <p className="text-white/90 text-sm mb-5">硬くて平らなローファーの底を、アーチサポートで歩きやすく変えましょう。</p>
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
