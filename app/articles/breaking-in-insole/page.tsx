import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールに慣れるまで痛い・違和感がある時の対処【2026年】",
  description:
    "インソールを入れたら痛い・違和感がある——慣らし期間の目安と対処法、無理せず使うコツ、合わない場合の見極めを解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/breaking-in-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールに慣れるまで痛い・違和感がある時の対処法",
  description:
    "インソールを入れたら痛い・違和感がある——慣らし期間の目安と対処法、無理せず使うコツ、合わない場合の見極めを解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const faqs = [{"q": "インソールの違和感はいつ消えますか？", "a": "多くは数日〜2週間で足が慣れて違和感が和らぎます。短時間から徐々に使用時間を延ばすのが慣らしのコツです。"}, {"q": "痛みが続く場合はどうすれば？", "a": "2週間ほど慣らしても痛みが減らない・悪化する場合は、サイズやアーチの高さが合っていない可能性があります。無理に使わず別の製品を検討しましょう。"}, {"q": "最初から長時間履いても大丈夫ですか？", "a": "いきなり長時間履くと痛みや疲れが出やすくなります。最初は短時間から始め、徐々に慣らすのがおすすめです。"}, {"q": "新しい靴の慣らし期間はどれくらい？", "a": "素材や個人差によりますが、一般的には数日〜2週間ほど、短時間の着用を繰り返すうちに馴染んでいくことが多いです。革靴など硬い素材ほど時間がかかる傾向があります。"}, {"q": "インソールで靴擦れは防げますか？", "a": "靴の中での足の動きを抑えてフィットを整えることで、こすれによる靴擦れを軽減できる場合があります。ただし靴自体のサイズや形が合っていないと根本解決にはなりません。"}, {"q": "靴擦れの傷がある時もインソールを使ってよいですか？", "a": "傷や水ぶくれがある部位を圧迫・刺激しないよう注意してください。痛みや傷が長引く・悪化する場合は無理に使わず、皮膚科などの医療機関に相談しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "慣れるまで", item: "https://sole-laboratory.com/articles/breaking-in-insole/" },
  ],
};

const points = [{"t": "短時間から徐々に慣らす", "b": "最初は1日1〜2時間など短時間から始め、数日〜2週間かけて使用時間を延ばすと、足が無理なく適応します。"}, {"t": "サイズ・アーチの高さを確認", "b": "痛みが強い場合はサイズが合っていないか、アーチが高すぎる可能性があります。カットして調整し、合わなければ別の高さを検討しましょう。"}, {"t": "靴とのフィットを確認", "b": "インソールで靴が窮屈になっていないか確認。窮屈なら元の中敷きを外す・薄型に変えるなどで調整します。"}];
const related = [{"href": "/articles/correct-usage-insole/", "label": "効果的な使い方"}, {"href": "/articles/size-adjustment/", "label": "インソールのサイズ調整"}, {"href": "/articles/thickness-guide-insole/", "label": "インソールの厚みの選び方"}, {"href": "/articles/how-to-choose/", "label": "インソールの選び方"}];

export default function BreakingInPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "慣れるまで" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">インソールに慣れるまで痛い・違和感がある時の対処法</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">アーチサポートのあるインソールを入れたら、土踏まずに違和感がある、足が痛い——これは多くの場合、足が新しいサポートに慣れていく過程です。正しい慣らし方と、合わない場合の見極めを知っておきましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">アーチサポートのあるインソールは、最初の数日〜2週間ほど違和感や軽い痛みを感じることがあります。短時間から徐々に慣らすのが基本です。ただし強い痛みが続く・悪化する場合は、サイズ不適合や合っていない可能性があるため使用を見直しましょう。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">なぜ最初は違和感・痛みが出るのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">これまでアーチを支えられていなかった足に、急にしっかりしたサポートが入ると、土踏まずが押し上げられる感覚や、使っていなかった筋肉が刺激される違和感が出ることがあります。これは足がサポートに適応していく過程で起こる一時的なものが多いです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">一方で、サイズが合っていない、アーチの高さが足に合わない、靴の中で窮屈になっているなど、製品が合っていないことが原因の痛みもあります。一時的な慣らしの違和感と、合わない痛みを見極めることが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">新しい靴の慣らし期間と靴擦れの原因</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">新しい靴は、買ったばかりの状態では素材が硬く、足の形にもまだ馴染んでいません。一般的には数日〜2週間ほど、最初は短時間の着用を繰り返すうちに少しずつ足になじんでいくことが多いとされます。革靴など硬い素材ほど慣らしに時間がかかる傾向があり、いきなり一日中歩き回るような使い方は靴擦れの原因になりやすいです。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴擦れの一般的な原因は、靴の中で足が前後・左右に動いてしまい、かかとや指の付け根などが繰り返しこすれることです。サイズが大きすぎて足が滑る、逆に小さすぎて圧迫される、甲や幅が合っていない、靴の硬い縫い目が肌に当たる——といった「フィットのずれ」が積み重なると、こすれや圧迫が起きやすくなります。新品時は特にこのずれが出やすいため、最初の数日は様子を見ながら履くと安心です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">インソールでフィットを調整する考え方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは、靴と足のあいだにできるすき間を埋めてフィットを整える役割があります。靴の中で足が滑って動くことがこすれの一因になるため、適度に厚みのあるインソールやアーチサポートで足の位置を安定させると、靴の中での余分な動きを抑えられる場合があります。とくにかかとが浮く・前滑りするといった動きが靴擦れにつながっているケースでは、フィット調整が役立つことがあります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ただし、インソールはあくまでフィットを補助するものです。靴自体のサイズや形状が大きくずれている場合は、インソールだけで根本的に解決するのは難しいため、まずは靴選びそのものを見直すことが前提になります。インソールは「ちょうどよい靴をさらに足に合わせる」ための調整手段と考えると失敗が少なくなります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">サイズ・厚みの選び方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールはサイズ表記どおりに選ぶのが基本ですが、靴の形によっては大きめの製品をつま先側でカットして調整するタイプもあります。カットして使う場合は、いきなり切らず、もとの中敷きを型紙にして少しずつ合わせると失敗しにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">厚みは、靴の中の余裕に合わせて選びます。厚すぎると靴が窮屈になり、かえって甲や指が圧迫されて新たな靴擦れを招くことがあります。逆に薄すぎるとフィット調整の効果が出にくくなります。窮屈に感じる場合は、もとの中敷きを外してインソールと入れ替える、薄型タイプに変えるといった調整が有効です。アーチサポートの高さも、高すぎると土踏まずに違和感が出やすいため、足に合った高さを選ぶことが大切です。詳しくは<Link href="/articles/thickness-guide-insole/" className="text-[#e8627c] underline font-medium">厚みの選び方</Link>もあわせてご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">靴擦れ予防の注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴擦れを防ぐには、フィット調整に加えて履き方の工夫も役立ちます。新しい靴は最初から長時間履かず短時間から慣らす、こすれやすい部位を事前に保護する、靴ひもやストラップでかかとが浮かないよう調整する、といった基本を押さえておきましょう。すでに赤みやこすれが出ている部位は、その箇所を圧迫・刺激しないよう注意してください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">なお、本記事で紹介するインソールは医療目的の装具ではなく、フィット調整や履き心地のサポートを目的としたものです。痛みや傷、水ぶくれが続く・悪化する場合や、もともと足に変形やトラブルがある場合は、自己判断で使い続けず、皮膚科や整形外科などの医療機関に相談してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">慣れるまでの選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">慣れるまでにおすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">足に合うアーチの高さと、調整しやすい設計のインソールが慣らしやすくなります。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">慣らしても痛い場合の見極め</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">短時間からの慣らしを2週間ほど続けても痛みが減らない、むしろ悪化する場合は、その製品が足に合っていない可能性が高いです。無理に使い続けず、別のアーチ高さ・厚みの製品を試しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">もともと足に痛みや変形がある方は、自己判断で続けず整形外科に相談してください。インソールは合うものを使ってこそ効果を発揮します。</p>
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
          <p className="text-white/90 text-sm mb-5">足に合うインソールを見つけて、無理なく快適に使いましょう。</p>
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
