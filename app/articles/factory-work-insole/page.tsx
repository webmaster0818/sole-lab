import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "工場の立ち仕事の足の疲れに！インソールの選び方【2026年】安全靴対応",
  description:
    "コンクリート床で立ちっぱなしの工場勤務・ライン作業の方へ。硬い床の衝撃と足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/factory-work-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "工場の立ち仕事の足の疲れにおすすめのインソール｜安全靴対応の選び方",
  description:
    "コンクリート床で立ちっぱなしの工場勤務・ライン作業の方へ。硬い床の衝撃と足の疲れをやわらげるインソールの選び方、安全靴対応、おすすめ3選を解説。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-07-10",
};

const faqs = [{"q": "安全靴にインソールを入れても大丈夫ですか？", "a": "多くは対応しますが、つま先の保護芯（先芯）に干渉しないよう薄型を選ぶか、元の中敷きを外して入れ替えましょう。厚すぎると窮屈になり、かえって足が圧迫されて逆効果です。心配な場合は安全靴メーカーや勤務先の規定も確認してください。"}, {"q": "コンクリート床の足の疲れに効きますか？", "a": "衝撃吸収性の高いインソールは、硬い床から足裏に伝わる衝撃を和らげ、立ち仕事の疲れを軽減する補助になります。ただし感じ方には個人差があり、効果を保証するものではありません。痛みが強い場合は無理をせず専門家に相談しましょう。"}, {"q": "どのくらいで交換すべきですか？", "a": "毎日長時間使う工場勤務では、へたりやすいため3〜6ヶ月が交換の目安です。クッションが薄くなった、左右で沈み方が違う、表面が傷んできた、といった変化はへたりのサインです。"}, {"q": "サイズが合わない場合はどうすればいいですか？", "a": "多くのインソールはつま先側をカットしてサイズ調整できます。まず靴の中敷きを型紙にして、線に沿って少しずつ切るのがコツです。一度に大きく切ると元に戻せないため、合わせながら少しずつ調整しましょう。"}, {"q": "冷凍倉庫や寒い職場の防寒長靴にも使えますか？", "a": "長靴は中が広く足が前後に動きやすいため、フィットを整える目的でインソールを使う人もいます。ただし厚手の靴下と併用すると窮屈になりやすいので、実際に履く靴下を着けた状態で余裕を確認しましょう。低温環境では素材が硬く感じられることもあるため、違和感があれば無理に使わないでください。"}, {"q": "静電気対策の安全靴にインソールを入れても大丈夫ですか？", "a": "静電気帯電防止などの機能をもつ安全靴は、中敷きを入れ替えると本来の性能に影響する可能性があります。職場の安全規定やメーカーの案内を必ず確認し、指定がある場合はそれに従ってください。判断に迷う場合は、入れ替えではなく指定品の使用が無難です。"}];

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
    { "@type": "ListItem", position: 3, name: "工場の立ち仕事", item: "https://sole-laboratory.com/articles/factory-work-insole/" },
  ],
};

const points = [{"t": "コンクリート床の衝撃を吸収", "b": "硬い床対策には衝撃吸収性の高いクッションが重要です。足裏全体で衝撃を受け止めます。"}, {"t": "アーチサポートで立ちを支える", "b": "長時間でアーチが潰れないよう、しっかり支える設計を選びましょう。足裏の痛み・疲れの蓄積を抑えます。"}, {"t": "安全靴に入る薄型・耐久性", "b": "安全靴は中が狭いことが多いため薄型を選び、毎日長時間でもへたりにくい耐久性のあるものを。"}];
const related = [{"href": "/articles/standing-work/", "label": "立ち仕事のインソール"}, {"href": "/articles/cheap-insole/", "label": "コスパの良いインソール"}, {"href": "/articles/security-guard-insole/", "label": "警備員のインソール"}, {"href": "/articles/safety-shoes-insole/", "label": "安全靴のインソール"}, {"href": "/articles/warehouse-work-insole/", "label": "倉庫作業のインソール"}, {"href": "/articles/nurse-insole/", "label": "看護師のインソール"}];

export default function FactoryWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "記事一覧", href: "/articles/" }, { label: "工場の立ち仕事" }]} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">用途・シーン別</span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">工場の立ち仕事の足の疲れにおすすめのインソール｜安全靴対応の選び方</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">コンクリートの硬い床でライン作業や立ち仕事を続ける工場勤務。安全靴の薄い中敷きでは、足裏に衝撃が直に伝わって疲れがたまりがちです。衝撃を吸収しアーチを支えるインソールで、足の負担を軽くしましょう。</p>
        </header>

        <div className="bg-[#fdf2f4] border border-[#f3e0e4] rounded-xl p-5 mb-10">
          <p className="font-bold text-[#e8627c] text-sm mb-2">この記事の結論</p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">工場の立ち仕事には、コンクリート床の衝撃を吸収するクッション性と、長時間の立ちを支えるアーチサポートを備え、安全靴に入る薄型のインソールが向いています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事で足が疲れる理由</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">工場やライン作業では、コンクリートなど非常に硬い床の上で長時間立ち続けることが多く、足裏への衝撃が蓄積しやすい環境です。本来であれば歩くたびに足裏のアーチや関節がクッションの役割を果たしますが、ほとんど動かずに同じ姿勢で立ち続けると、足の同じ部分に負担が集中し続けます。これが立ち仕事特有の疲れやすさの一因と一般に考えられています。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">さらに安全靴は中敷きが薄く硬いことが多く、クッション性が不足しがちです。床から伝わる衝撃を吸収する余地が少ないため、足裏やかかと、すね、ふくらはぎ、さらには腰にまで張りや重だるさを感じる人もいます。床がコンクリートやタイルのように硬いほど、また勤務時間が長いほど、その負担は大きくなりやすい傾向があります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">硬い床と立ちっぱなしでアーチが沈むと、衝撃を吸収できず疲れや足裏の痛みが出やすくなります。インソールでアーチを支え、衝撃を吸収すると、足の負担をやわらげる補助になります。感じ方には個人差がありますが、足元のクッション性を見直すことは、立ち仕事の疲れ対策の手軽な一歩です。安全靴に入る薄型を選ぶのがポイントです。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事の選び方3つのポイント</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">工場勤務向けにインソールを選ぶときは、(1)硬い床の衝撃をやわらげるクッション性、(2)長時間の立ちを支えるアーチサポート、(3)安全靴に収まる薄さと毎日使える耐久性、の3点を軸にすると選びやすくなります。クッション性だけを優先して厚みを増やしすぎると、安全靴の中で足が浮いて不安定になることもあるため、安全靴との相性とのバランスが大切です。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">工場の立ち仕事におすすめのインソール3選</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">硬い床の衝撃を吸収しアーチを支える、安全靴に入る薄型インソールが工場勤務に向いています。 詳しい比較は<Link href="/ranking/" className="text-[#e8627c] underline font-medium">おすすめランキング</Link>もご覧ください。</p>
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
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">安全靴での使い方とサイズ調整の注意点</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴に入れる際は、つま先の保護芯（先芯）に干渉しないよう厚みを確認し、必要なら元の中敷きを外してから入れ替えましょう。元の中敷きの上に重ねると窮屈になりやすく、つま先が圧迫されて逆に疲れの原因になります。インソールがフィットしないと靴の中で足が前後に動き、せっかくのアーチサポートの位置がずれて効果を感じにくくなります。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">サイズが大きい場合は、つま先側を少しずつカットして調整します。元の中敷きや安全靴のサイズを目安に線を引き、合わせながら数ミリずつ切るのが失敗しないコツです。一度大きく切ると元に戻せないため、こまめに靴へ入れて確認しながら進めましょう。左右の向きや前後を間違えないように、アーチの膨らみが土踏まずの位置にくるかも確かめてください。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">使い始めは違和感を覚えることもあるため、最初から長時間ではなく短時間から慣らすのがおすすめです。毎日長時間の使用ではへたりやすいため、3〜6ヶ月を目安に交換すると足元のクッション性を保てます。なお、足裏の痛みやしびれが続く場合は、インソールに頼りきらず整形外科など専門家に相談しましょう。効果の感じ方には個人差があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">立ち仕事8時間の疲労を減らす使い方</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">8時間の勤務では、一歩ごとの小さな負担よりも「同じ場所に立ち続けることによる蓄積」が疲労の中心になります。インソールの効果を保つには、まずかかとが靴の中で浮かないフィットが前提です。休憩のタイミングで靴ひもやマジックテープを締め直し、インソールが靴の中で前後にずれていないかを確かめる習慣をつけると、アーチサポートの位置が一日を通して保たれやすくなります。休憩中に足首を回す・つま先立ちを数回するなど、同じ姿勢を断ち切る小さな動きを挟むのも、立ち仕事の一般的な疲労対策としてよく挙げられます。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">安全靴との相性では、先芯に干渉しない厚みであることに加えて、「元の中敷きが外せるタイプかどうか」を先に確認しておくとスムーズです。中敷きが縫い付けられている安全靴では重ね入れになるため、より薄型を選ぶ必要があります。また、静電気帯電防止などの機能をもつ安全靴は、中敷きの入れ替えが性能に影響する可能性があるため、職場の安全規定やメーカーの案内を確認してから使いましょう。</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">交換タイミングは、毎日8時間使う環境では一般的な目安（3〜6ヶ月）の中でも早めに訪れがちです。「クッションを押しても戻りが鈍い」「土踏まずの支えられている感覚が薄れた」「かかと部分だけ極端に沈む」といった変化はへたりのサインです。安全靴を2足用意して交互に履く職場なら、インソールも靴ごとに分けて休ませると、乾燥が進んでへたりや臭いの進行を緩やかにしやすくなります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">職場環境別の選び方（一般論）</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">ひと口に工場勤務といっても、床の硬さ・温度・履く靴の種類によってインソールに求める性質は変わります。ここでは環境別の一般的な考え方を整理します。</p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">コンクリート床のライン・組立作業</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">最も硬い床環境で、衝撃吸収のクッション性とアーチサポートの両立が第一候補になります。ほぼ同じ位置に立ち続ける作業では、かかと部のクッションの戻りの良さ（へたりにくさ）を特に重視しましょう。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">冷凍・冷蔵倉庫や防寒長靴の職場</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">長靴は中が広く足が動きやすいため、フィットを整える目的でのインソール活用が一般的です。厚手の靴下と併用すると窮屈になりやすいので、実際に履く靴下を着けて余裕を確認しましょう。低温では素材が硬く感じられることもあります。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">クリーンルーム・静電気対策が必要な職場</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">静電気帯電防止靴や指定シューズがある職場では、中敷きの入れ替えが靴の性能や規定に影響する可能性があります。自己判断で入れ替えず、職場の安全規定とメーカーの案内を先に確認してください。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">油や水で床が濡れやすい職場</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">靴内が蒸れたり水分が入りやすい環境では、インソールが湿ったままだとへたりや臭いが進みやすくなります。勤務後に取り出して乾かす、傷みが見えたら早めに交換するなど、手入れと交換サイクルを短めに意識しましょう。</p>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">どのタイプが自分の足に合うか迷う場合は、<Link href="/diagnosis/" className="text-[#e8627c] underline font-medium">6つの質問で相性がわかるタイプ診断</Link>も参考にしてください。立ち仕事全般の対策は<Link href="/articles/standing-work/" className="text-[#e8627c] underline font-medium">立ち仕事のインソール</Link>でも詳しく解説しています。</p>
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
          <p className="text-white/90 text-sm mb-5">コンクリート床の衝撃と立ちっぱなしの疲れに。衝撃吸収インソールを比較しましょう。</p>
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
