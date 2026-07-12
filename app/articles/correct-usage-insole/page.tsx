import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイエットインソールの効果的な使い方【2026年】正しい歩き方も解説",
  description:
    "ダイエットインソールの効果を最大化する使い方を解説。入れ方・慣らし方・正しい歩き方・続け方のコツと、やりがちなNGをまとめました。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/correct-usage-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ダイエットインソールの効果的な使い方｜正しい歩き方と続け方",
  description:
    "ダイエットインソールの効果を最大化する使い方を解説。入れ方・慣らし方・正しい歩き方・続け方のコツと、やりがちなNGをまとめました。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-12",
};

const faqs = [{"q": "ダイエットインソールは履くだけで痩せますか？", "a": "履くだけで痩せる魔法ではありません。正しい歩き方と毎日の継続、食事・運動との組み合わせで効果が高まります。"}, {"q": "元の中敷きは外すべきですか？", "a": "はい。フィットと効果を保つため、元の中敷きを外してインソールと入れ替えるのがおすすめです。サイズはカットして調整します。"}, {"q": "1日何時間履けば良いですか？", "a": "決まりはありませんが、できるだけ日常的に履くのが理想です。最初は短時間から慣らし、徐々に時間を延ばしましょう。"}, {"q": "元の中敷きの上に重ねて入れてもいいですか？", "a": "基本的には元の中敷きを外して入れ替えるのがおすすめです。重ねると靴の中が窮屈になり、つま先や甲が圧迫されてサイズ感が変わったり、ズレやすくなったりします。元の中敷きが取り外せない靴では、ハーフ（前足部）タイプを選ぶなどの工夫をしましょう。"}, {"q": "毎日洗ったほうがいいですか？お手入れの頻度は？", "a": "毎日洗う必要はありませんが、汗や皮脂で汚れやニオイがたまりやすいため、定期的なお手入れがおすすめです。使用後は靴から取り出して陰干しし、湿気を逃がすと清潔に保てます。洗える素材かどうかや洗い方は製品ごとに異なるため、各製品の表示に従ってください。"}, {"q": "履いていて違和感や痛みが出たら？", "a": "アーチサポートのある製品では、慣れるまで足裏に押し上げられる感覚や違和感が出ることがあります。まずは短時間の使用から慣らしてください。我慢できない痛みやしびれ、皮膚のトラブルが続く場合は使用を中止し、必要に応じて医療機関に相談しましょう。"}, {"q": "インソールが靴の中で浮いたりズレたりするときは？", "a": "元の中敷きを外し忘れていないか、カットが大きすぎ・小さすぎないかをまず確認しましょう。かかとを靴の奥まで押し込んで装着し直すと改善することも多いです。それでもズレる場合は、元の中敷きを型紙にして輪郭を少しずつ再調整するか、固定方法について製品の表示・公式の案内を確認してください。"}, {"q": "慣らし期間はどのくらいを目安にすればいいですか？", "a": "一般に、数日〜2週間程度かけて短時間の使用から少しずつ時間を延ばす方法がよく紹介されます。ただし慣れるまでの期間には個人差があるため、足の状態を見ながら無理なく進めてください。強い痛みやしびれが続く場合は使用を中止し、整形外科などの受診を検討しましょう。"}];

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
    { "@type": "ListItem", position: 3, name: "効果的な使い方", item: "https://sole-laboratory.com/articles/correct-usage-insole/" },
  ],
};

const points = [{"t": "靴に正しくフィットさせる", "b": "元の中敷きを外し、サイズに合わせてカットして入れます。ズレると効果が落ちるため、しっかりフィットさせましょう。"}, {"t": "かかと着地→蹴り出しの歩き方", "b": "かかとから着地し、足裏全体を通してつま先で地面を蹴る歩き方を意識すると、下半身を使えて効果的です。"}, {"t": "毎日続ける", "b": "効果は継続が前提。普段の靴に入れて毎日履き、まずは習慣化することが大切です。"}];
const related = [{"href": "/articles/breaking-in-insole/", "label": "インソールに慣れるまで"}, {"href": "/articles/diet-period-insole/", "label": "効果が出る期間の目安"}, {"href": "/articles/diet-mechanism/", "label": "ダイエットインソールの仕組み"}, {"href": "/articles/walking-diet/", "label": "ウォーキングダイエット"}, {"href": "/articles/washing-guide/", "label": "インソールの洗い方・お手入れガイド"}];

export default function CorrectUsagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "効果的な使い方" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">使い方・選び方</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">ダイエットインソールの効果的な使い方｜正しい歩き方と続け方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">せっかくのダイエットインソール、ただ入れているだけでは効果が半減します。正しい入れ方・歩き方・続け方を押さえることで、姿勢改善やボディメイクのサポート効果を引き出しましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">ダイエットインソールは、①靴に正しくフィットさせ、②かかと着地→蹴り出しの歩き方を意識し、③毎日続けることで効果が高まります。履くだけで痩せる魔法ではなく、正しい使い方と継続がカギです。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">なぜ使い方で効果が変わるのか</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">ダイエットインソールは、足元を安定させて姿勢・歩き方を整え、本来使うべき筋肉を働かせることで消費エネルギーを高める『補助』です。ただ入れているだけでは、歩き方のクセが残ったままで効果を引き出しきれません。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">靴にきちんとフィットさせ、かかとから着地してつま先で蹴り出す歩き方を意識し、毎日継続することで、お尻や裏もも、ふくらはぎといった大きな筋肉が使われやすくなり、姿勢改善やボディメイクの効果が高まります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">入れ方とサイズ調整の基本</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">まず靴から元の中敷きを取り出し、それを型紙代わりにインソールの上へ重ねて、はみ出した分の輪郭をペンでなぞります。ライン通りにカットすれば、靴のサイズにぴったり合わせられます。少しずつ切って試し履きを繰り返すと、切りすぎを防げます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">入れるときは前後・左右の向きに注意しましょう。多くのインソールはかかと側が深く、つま先側が薄い形状で、左右が分かれているものはL／Rや足の形で区別できます。アーチ（土踏まず）の盛り上がりが内側の正しい位置にくるよう、かかとを靴の奥までしっかり押し込んでセットします。向きを間違えるとフィットも効果も損なわれるため、装着後はかかとが浮かないか歩いて確認してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">慣らし期間とお手入れ</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチサポートのあるインソールは、最初から長時間履くと足裏が疲れたり違和感が出たりしやすいものです。はじめの数日は短時間の使用から始め、足の状態を見ながら少しずつ時間を延ばして慣らしていくと、無理なく日常使いに移行できます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">清潔に保つことも長く使うコツです。汗や皮脂がたまりやすいため、使用後は靴から取り出して陰干しし、湿気を逃がしましょう。洗えるかどうかや洗い方、乾かし方は素材によって異なるので、各製品の表示に従ってお手入れしてください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果的な使い方の選び方3つのポイント</h2>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">効果的な使い方におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">正しい使い方を活かせる、フィット感とアーチサポートに優れたインソールが向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">やりがちなNGと対処</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが合わずズレる、慣らさずいきなり長時間履いて痛くなる、数日で諦める——これらはよくある失敗です。サイズを合わせ、最初は短時間から慣らし、最低でも1〜3ヶ月は継続しましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">痛みや違和感が強い場合は無理せず使用時間を調整し、合わないと感じたら別の製品も検討してください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">入れ方の失敗例と直し方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">インソールは入れ方ひとつでフィット感が大きく変わります。「なんだか合わない」と感じるときは、まず次の4つの失敗パターンに当てはまっていないか確認してみましょう。</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">失敗例1：前後を逆に入れている</h3>
              <p className="text-sm text-gray-700 leading-relaxed">かかと側とつま先側を逆に入れると、アーチの盛り上がりが土踏まずに合わず、歩くたびに違和感が出ます。多くのインソールはかかと側が深いカップ状、つま先側が薄い形状です。土踏まずの膨らみが足の内側・かかと寄りにくるよう、向きを確認して入れ直しましょう。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">失敗例2：左右を逆に入れている</h3>
              <p className="text-sm text-gray-700 leading-relaxed">左右が分かれているタイプを逆に入れると、アーチの支えが足の外側に当たり、かえって歩きにくくなります。L／Rの刻印や、親指側が高くなる形状を目印に、左右を確かめてからセットしてください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">失敗例3：元の中敷きの上に重ねている</h3>
              <p className="text-sm text-gray-700 leading-relaxed">元の中敷きの上に重ねて入れると、靴の中が窮屈になって甲やつま先が圧迫されたり、中敷きの上で滑って安定しなかったりします。基本は元の中敷きを外して入れ替えましょう。中敷きが外せない靴では、前足部だけのハーフタイプを検討するのも一つの方法です。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">失敗例4：かかとが浮く・歩くとズレる</h3>
              <p className="text-sm text-gray-700 leading-relaxed">カットした輪郭が靴に合っていないと、浮きやズレの原因になります。元の中敷きを型紙にして輪郭を再確認し、大きすぎる場合は少しずつ切って調整しましょう。かかとを靴の奥までしっかり押し込んで装着し直すだけで改善することもあります。固定方法については、お使いの製品の表示に従ってください。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">慣らし期間の目安と違和感があるときの見直し手順</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">アーチサポートのあるインソールは、履き始めに足裏が押し上げられるような感覚が出ることがあります。一般に、数日〜2週間程度かけて短時間の使用から少しずつ時間を延ばしていく慣らし方がよく紹介されますが、慣れるまでの期間には個人差があります。焦らず、足の状態を見ながら進めましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">慣らし期間を過ぎても違和感が続くときは、次の順番で見直してみてください。</p>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            <li>使用時間を一度短くする（1〜2時間程度から再スタート）</li>
            <li>前後・左右の向きと、カットのフィット具合を再確認する</li>
            <li>ひもで甲の締め具合を調整できるスニーカーなど、別の靴で試す</li>
            <li>それでも合わなければ、いったん使用を中断して様子を見る</li>
          </ol>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">強い痛みやしびれ、皮膚のトラブルが続く場合は、自己判断で我慢せず整形外科などの医療機関に相談してください。また、そもそも自分の足や目的に合うタイプか見直したい場合は、<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">インソール診断</Link>で相性をチェックしてみるのもおすすめです。</p>
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
          <p className="text-white/90 text-sm mb-5">正しい使い方で効果を引き出せるインソールを選びましょう。</p>
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
