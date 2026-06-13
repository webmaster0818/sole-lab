import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの重ね使いはアリ？【2026年】2枚重ねのリスクと正しい代替案",
  description:
    "インソールの2枚重ねはOK？元の中敷きの上に置く場合と重ね使いの違い、靴がきつくなる・かかとが浮くなどのリスク、重ねずに目的を達成する選び方を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/layering-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの重ね使いはアリ？2枚重ねのリスクと正しい代替案",
  description:
    "インソールの2枚重ねはOK？元の中敷きの上に置く場合と重ね使いの違い、靴がきつくなる・かかとが浮くなどのリスク、重ねずに目的を達成する選び方を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqs = [{"q": "インソールを2枚重ねて使ってもいいですか？", "a": "機能性インソール同士の2枚重ねはおすすめしません。靴がきつくなる、かかとが浮く、アーチサポートの位置がずれるなどのデメリットが大きいためです。必要な機能を1枚で備えた製品を選びましょう。"}, {"q": "元から入っている中敷きの上に重ねるのはダメですか？", "a": "取り外せる中敷きなら、機能性インソールに入れ替えるのが基本です。靴がやや大きく容積に余裕がある場合に限り、元の薄い中敷きの上に薄型を重ねる調整は許容範囲です。きつさや違和感が出たら入れ替え方式に戻してください。"}, {"q": "クッションもアーチサポートも欲しい場合はどうすればいいですか？", "a": "重ねるのではなく、両方を1枚で備えた設計のインソールを選びましょう。多くの機能性インソールはアーチサポートとクッション層を組み合わせた構造になっています。"}, {"q": "靴が大きいので2枚入れてサイズ調整したいのですが？", "a": "2枚重ねは厚みが出る一方でかかとの保持は改善しにくく、根本解決になりません。かかとパッドや厚手の靴下、つま先カットでのフィッティングなど、目的に合った方法を試すほうが確実です。"}, {"q": "ソックス型インソールなら中敷きタイプと併用できますか？", "a": "ソックス型は足に直接装着するため中敷きタイプと物理的には共存し得ますが、その分靴内は確実に狭くなります。併用する場合は圧迫感がないか必ず確認し、きつい場合はどちらか一方にしてください。"}];

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
    { "@type": "ListItem", position: 3, name: "重ね使い", item: "https://sole-laboratory.com/articles/layering-insole/" },
  ],
};

const points = [{"t": "1枚で機能が完結する設計を選ぶ", "b": "クッション性とアーチサポートの両方が欲しいなら、最初から両方を備えた1枚を選ぶのが正解です。重ねて機能を足すのではなく、必要な機能を備えた製品を選びましょう。"}, {"t": "靴の余裕（捨て寸・甲の高さ）を確認する", "b": "インソールを入れる前に、靴にどれだけ余裕があるかを確認しましょう。ぴったりサイズの靴には薄型を、紐で甲の高さを調整できるスニーカーなら標準的な厚みも入ります。"}, {"t": "サイズ調整が目的なら専用の方法を使う", "b": "「靴が大きいから2枚重ね」は脱げやすさの根本解決になりません。かかとパッドやタンパッドなど部位別の調整、靴下の厚みの見直し、つま先カットでのフィッティングなど、目的に合った調整方法を選びましょう。"}];
const related = [{"href": "/articles/thickness-guide-insole/", "label": "インソールの厚みの選び方"}, {"href": "/articles/size-adjustment/", "label": "インソールのサイズ調整方法"}, {"href": "/articles/insole-demerit-risk/", "label": "ダイエットインソールのデメリット・注意点"}, {"href": "/articles/how-to-choose/", "label": "失敗しないインソールの選び方"}];

export default function LayeringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "重ね使い" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-13" className="text-xs text-gray-500">2026年6月13日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールの重ね使いはアリ？2枚重ねのリスクと正しい代替案</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">「クッションも欲しいしアーチサポートも欲しい」「靴が少し大きいから2枚入れて調整したい」——インソールの重ね使いを考える方は少なくありません。しかし靴の中の容積は限られており、安易な2枚重ねはフィットの悪化を招きがちです。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">機能性インソール同士の2枚重ねは基本的におすすめしません。靴内の容積が圧迫されてつま先・甲がきつくなり、かかとが浅くなって脱げやすくなるほか、アーチサポートの位置もずれて本来の機能を発揮できなくなります。「元から入っている薄い中敷きの上に1枚置く（または入れ替える）」が基本で、複数の機能が欲しい場合は1枚で完結する設計のものを選びましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">重ね使いで何が起きるか｜容積・フィット・機能の3つの問題</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴は「素足＋中敷き」を想定した内寸で作られています。そこに機能性インソールを2枚重ねると、足が入るスペースが数ミリ単位で削られ、つま先や甲の圧迫、かかとの浮き・靴擦れの原因になります。とくにアーチサポート型は土踏まず部分に立体的な盛り上がりがあるため、2枚重ねるとサポート位置が高くなりすぎたり前後にずれたりして、かえって違和感や痛みにつながることがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で「元から靴に入っている取り外し可能な薄い中敷き」との関係は別の話です。機能性インソールに入れ替えるのが基本ですが、靴がやや大きい場合に元の中敷きの上へ薄型インソールを重ねて容積を詰める使い方は現実的な調整手段です。問題なのは『機能性インソール×機能性インソール』『厚手クッション×アーチサポート』のような重ね方です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">重ね使いの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">重ね使いにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">重ね使いをしなくても、1枚でアーチサポートとクッション性を両立できる設計のものを選ぶのが基本です。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">重ね使いを避けるべき場面と、例外的にアリな場面</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">避けるべきなのは、(1)機能性インソール同士の重ね、(2)パンプス・ローファーなど容積に余裕のない靴での重ね、(3)アーチサポート型の上下にさらに何かを足す使い方です。圧迫やかかと浮きはタコ・靴擦れ・爪のトラブルの原因になり、歩き方が崩れると足以外への負担にもつながります。違和感や痛みが続く場合は使用を中止し、症状があれば整形外科などの受診を検討してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">例外的に許容されるのは、容積に余裕のある靴で「元の薄い平らな中敷きの上に薄型インソールを置く」程度の組み合わせです。なお、ランウェイキュアソールのようなソックス型（足に直接装着するタイプ）は中敷きと物理的に競合しにくい設計ですが、その場合も靴がきつくならないかは試着で確認しましょう。</p>
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
          <p className="text-white/90 text-sm mb-5">重ねなくても1枚で完結。アーチサポートとクッション性を両立したインソールを比較してみましょう。</p>
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
