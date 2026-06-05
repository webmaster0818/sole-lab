import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "インソールの寿命と交換時期｜何ヶ月で替えるべき？劣化サインも解説",
  description:
    "インソールの寿命と交換時期を徹底解説。素材別の耐用期間、劣化のサイン、交換を怠るリスクまで詳しく紹介。ピットソール・ランウェイキュアソール・スリムアップインソールの耐久性も比較。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/lifespan/",
  },
  openGraph: {
    title: "インソールの寿命と交換時期｜何ヶ月で替えるべき？劣化サインも解説",
    description:
      "インソールの寿命と交換時期を徹底解説。素材別の耐用期間、劣化のサイン、交換を怠るリスクまで詳しく紹介。",
    url: "https://sole-laboratory.com/articles/lifespan/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "インソールの寿命と交換時期｜何ヶ月で替えるべき？劣化サインも解説",
  description:
    "インソールの寿命と交換時期を徹底解説。素材別の耐用期間、劣化のサイン、交換を怠るリスクまで詳しく紹介。",
  author: { "@type": "Person", name: "ソールラボ 編集部", url: "https://sole-laboratory.com/about/" },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "インソールの平均寿命はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的なインソールの寿命は3〜6ヶ月が目安です。ただし使用頻度や体重、活動内容によって大きく異なります。毎日使用する場合は3〜4ヶ月、週3〜4回の使用であれば6ヶ月程度が交換目安となります。",
      },
    },
    {
      "@type": "Question",
      name: "インソールが劣化しているサインは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主な劣化サインは5つあります。かかと部分のクッションが潰れて薄くなっている、アーチサポート部分が平らになっている、表面素材が剥がれたり破れたりしている、悪臭が取れない、足の疲れや痛みが以前より感じやすくなった、の5点です。",
      },
    },
    {
      "@type": "Question",
      name: "インソールの寿命を延ばす方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インソールの寿命を延ばすには、毎日同じインソールを使わず2枚をローテーションする、使用後は靴から出して乾燥させる、定期的に中性洗剤で手洗いする、直射日光やドライヤーでの乾燥を避ける、といった方法が効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "高価なインソールは寿命が長いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必ずしも価格と寿命は比例しませんが、高品質な素材を使用した製品は耐久性に優れる傾向があります。例えばTPU素材のアーチサポートはEVA素材より形状保持力が高く、長期間にわたって機能を維持します。コストパフォーマンスを考慮して選ぶことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "インソールを交換しないとどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "劣化したインソールを使い続けると、アーチサポートの機能が失われて扁平足が進行する、衝撃吸収力の低下により膝や腰への負担が増加する、足裏の荷重バランスが崩れて外反母趾や足底筋膜炎のリスクが高まる、といった問題が生じます。",
      },
    },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sole-laboratory.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "知識・コラム",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "インソールの寿命と交換時期",
      item: "https://sole-laboratory.com/articles/lifespan/",
    },
  ],
};

export default function LifespanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "インソールの寿命と交換時期" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            インソール 寿命 交換時期
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            インソールの寿命と交換時期
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">劣化サイン</span>も解説
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            インソールは消耗品です。交換時期を見極めないと足のトラブルに直結します。
            <br className="hidden md:block" />
            素材別の寿命目安と劣化のサインを知り、適切なタイミングで交換しましょう。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">
            この記事の内容
          </p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#why-replace" className="hover:text-[#0ea5e9] transition-colors">
                1. インソールに���命がある理由
              </a>
            </li>
            <li>
              <a href="#lifespan-by-material" className="hover:text-[#0ea5e9] transition-colors">
                2. 素材別のインソール寿命目安
              </a>
            </li>
            <li>
              <a href="#deterioration-signs" className="hover:text-[#0ea5e9] transition-colors">
                3. 劣化サイン5つのチェックポイント
              </a>
            </li>
            <li>
              <a href="#risk" className="hover:text-[#0ea5e9] transition-colors">
                4. 交換を怠ったときのリスク
              </a>
            </li>
            <li>
              <a href="#extend-life" className="hover:text-[#0ea5e9] transition-colors">
                5. インソールの寿命を延ばすコツ
              </a>
            </li>
            <li>
              <a href="#product-durability" className="hover:text-[#0ea5e9] transition-colors">
                6. おすすめインソールの耐久性比較
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                7. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#0ea5e9] transition-colors">
                8. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Section 1 */}
        <section id="why-replace" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールに寿命がある理由
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソールは靴と足の間で毎日体重を支え続ける消耗品です。歩行のたびに圧縮と復元を繰り返す素材は、時間とともに必ず劣化します。ここでは、インソールが劣化するメカニズムを解説します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            圧縮による素材のヘタリ
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            人間の歩行では1歩ごとに体重の1.2〜1.5倍の荷重がインソールにかかります。1日8,000歩の平均的な歩数で計算すると、年間で約300万回もの圧縮が加わることになります。EVAやウレタンなどのクッション素材は、この繰り返し圧縮によって徐々に弾力性を失い、元の厚みに戻らなくなっていきます。これがいわゆる「ヘタリ」の正体です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            汗や湿気による素材の劣化
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足は1日にコップ1杯分（約200ml）の汗をかくと言われています。この湿気がインソールに染み込むことで、接着剤の劣化、素材の加水分解、雑菌の繁殖が起こります。特にポリウレタン素材は加水分解に弱く、高温多湿の環境では劣化が加速します。日本の梅雨時期や夏場は特に注意が必要です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            摩擦による表面の摩耗
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            歩行時に足はインソール上で微細なスライド運動を繰り返しています。この摩擦により、インソール表面の生地が薄くなったり、滑り止め加工が剥がれたりします。表面が摩耗すると靴内部で足が滑りやすくなり、本来のフィッティング性能が失われます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            体重と活動量の影響
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            体重が重いほど、また活動量が多いほど、インソールへの負荷は大きくなります。体重80kgの方と50kgの方では、同じインソールでも寿命が大きく異なります。ランニングなどの衝撃の強い運動をする場合、通常歩行の2〜3倍の負荷がかかるため、交換頻度を上げる必要があります。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              インソールの劣化は「圧縮によるヘタリ」「湿気による素材劣化」「摩擦による表面摩耗」の3つが主な原因。これらは使い方次第で進行速度を遅らせることが可能です。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="lifespan-by-material" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            素材別のインソール寿命目安
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの寿命は使用素材によって大きく異なります。以下に素材別の耐用期間と特徴をまとめました。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">素材</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">寿命目安</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">EVA（エチレン酢酸ビニル）</td>
                  <td className="border border-gray-200 px-4 py-2">3〜6ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">軽量で安価だがヘタリやすい。最も一般的な素材。</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">ポリウレタン（PU）</td>
                  <td className="border border-gray-200 px-4 py-2">6〜12ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">耐久性が高いが加水分解に弱い。中〜上位製品に使用。</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">TPU（熱可塑性ポリウレタン）</td>
                  <td className="border border-gray-200 px-4 py-2">8〜18ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">形状保持力が高く耐久性に優れる。アーチサポート部に多い。</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">コルク</td>
                  <td className="border border-gray-200 px-4 py-2">12〜24ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">天然素材で耐久性に優れる。使い込むほど足に馴染む。</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">ジェル（シリコン）</td>
                  <td className="border border-gray-200 px-4 py-2">4〜8ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">衝撃吸収に優れるが経年で硬化。部分使用が多い。</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">カーボン</td>
                  <td className="border border-gray-200 px-4 py-2">18〜36ヶ月</td>
                  <td className="border border-gray-200 px-4 py-2">最も耐久性が高いがコストも高い。オーダーメイドに多い。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            EVA素材の寿命と特徴
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            EVA（エチレン酢酸ビニル）は最も広く使われているインソール素材です。軽量で衝撃吸収性に優れ、コストも抑えられるため、多くの既製品インソールに採用されています。しかし、圧縮永久歪みが大きく、使い込むとクッション性が急激に低下します。毎日使用で3〜4ヶ月、週3〜4回の使用で5〜6ヶ月が交換目安です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            TPU素材の寿命と特徴
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            TPU（熱可塑性ポリウレタン）は近年のハイエンドインソールで多く採用される素材です。形状記憶性と復元力に優れ、長期間にわたってアーチサポート機能を維持します。ピットソールのアーチサポート部にもTPU系素材が使用されており、通常のEVAインソールよりも長い耐用期間を実現しています。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            複合素材の寿命
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            多くの高機能インソールは単一素材ではなく、複数素材を組み合わせて設計されています。例えば、表面に通気性の高いメッシュ、中層にEVAクッション、底部にTPUのアーチサポートという3層構造のものがあります。この場合、最も早く劣化するのは表面素材やEVA層であり、全体としての寿命はそれらに左右されます。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              素材の特徴を詳しく知りたい方は
              <Link href="/articles/material-comparison/" className="text-[#0ea5e9] font-bold hover:underline">
                インソール素材比較の記事
              </Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="deterioration-signs" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            劣化サイン5つのチェックポイント
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            期間だけでなく、見た目や使用感から劣化を判断することも重要です。以下の5つのサインが出ていたら、交換のタイミングです。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  かかと部分のクッション潰れ
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                インソールのかかと部分を指で押してみてください。新品時と比べて明らかに反発力が弱い、または押した跡が戻らない場合は劣化しています。かかとは体重が最も集中する部位であり、最初に劣化が進行する場所です。クッションが潰れた状態では、着地時の衝撃が直接かかとの骨に伝わり、足底筋膜炎やかかとの痛みにつながります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  アーチサポートの平坦化
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                土踏まず部分のアーチサポートが新品時より明らかに低くなっていたら交換のサインです。インソールを平らな面に置いて、横から見てアーチの盛り上がりがほとんどない状態であれば、サポート機能は失われています。アーチサポートの低下は扁平足の進行や膝への負担増加につながるため、早めの対処が重要です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  表面素材の破損・剥離
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                インソール表面の生地が破れている、剥がれている、または穴が開いている場合は即時交換が必要です。表面が損傷した状態で使い続けると、靴下が引っかかって転倒のリスクがあるだけでなく、露出した内部素材が急速に劣化します。特につま先や母趾球付近は摩擦が大きく、最初に摩耗が進行しやすい箇所です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  取れない悪��
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                洗っても取れない悪臭は、インソール内部に雑菌が深く侵入している証拠です。素材の劣化により内部に水分が溜まりやすくなり、雑菌の温床となっています。見た目はまだ使えそうに見えても、衛生面から交換を推奨します。臭いが気になる場合は、まず
                <Link href="/articles/washing-guide/" className="text-[#0ea5e9] hover:underline">インソールの洗い方</Link>
                を試し、それでも改善しなければ交換してください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  足の疲れ・痛みの増加
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                以前は快適に歩けていたのに、最近足が疲れやすい、足裏や膝に痛みを感じるようになった、という場合はインソールの劣化が原因かもしれません。特に見た目に大きな変化がなくても、内部のクッション素材は徐々に性能を失っていきます。「最近なんとなく足が疲れやすい」と感じたら、インソールの状態を確認してみてください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="risk" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            交換を怠ったときのリスク
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            「まだ使えそうだから」と劣化したインソールを使い続けると、さまざまな足のトラブルにつながります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            扁平足の進行
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            アーチサポートが機能しなくなったインソールを使い続けると、足裏のアーチを支える力がなくなり、扁平足が進行します。一度崩れたアーチを元に戻すのは困難で、場合によっては医療機関での治療が必要になることもあります。
            <Link href="/articles/foot-arch/" className="text-[#0ea5e9] hover:underline">足のアーチの崩れ</Link>
            については別記事で詳しく解説しています。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            膝や腰への負担増加
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            衝撃吸収力が失われたインソールでは、歩行時の衝撃が足裏から膝、腰へとダイレクトに伝わります。特に体重の重い方や長時間歩く方は、
            <Link href="/articles/knee-pain/" className="text-[#0ea5e9] hover:underline">膝痛</Link>
            や
            <Link href="/articles/back-pain/" className="text-[#0ea5e9] hover:underline">腰痛</Link>
            のリスクが大幅に高まります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足底筋膜炎のリスク
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            クッション性の低下したインソールは、足底筋膜に過度なストレスを与えます。足底筋膜炎は一度発症すると完治に数ヶ月かかることもある厄介な症状です。インソールの適切な交換で予防することが重要です。詳しくは
            <Link href="/articles/plantar-fasciitis/" className="text-[#0ea5e9] hover:underline">足底筋膜炎とインソールの記事</Link>
            をご参照ください。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            外反母趾や巻き爪の悪化
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            劣化により足の位置が安定しなくなると、靴内部で足が滑り、つま先に過度な圧力がかかります。これが外反母趾の進行や巻き爪の原因になることがあります。
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-red-700">注意：</span>
              インソールの交換にかかる費用は、足のトラブルを治療する費用に比べれば微々たるものです。「節約のため」に交換を先延ばしにすることは、結果的にはるかに大きな出費につながる可能性があります。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="extend-life" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールの寿命を延ばすコツ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            適切なケアを行うことで、インソールの寿命を最大限に引き延ばすことができます。以下のポイントを日々の習慣に取り入れましょう。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                2枚のインソールをローテーションする
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                毎日同じインソールを使い続けると、乾燥する間もなく湿気が蓄積し、素材の劣化が加速します。2枚のインソールを交互に使うことで、乾燥時間を確保でき、それぞれの寿命が1.5〜2倍に延びます。まとめ買い割引のある製品であれば、複数枚を用意してもコストを抑えられます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                毎日靴から取り出して乾燥させる
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                帰宅したらインソールを靴から取り出し、風通しの良い場所で乾燥させましょう。靴の中に入れたままだと湿気がこもり、雑菌の繁殖と素材の劣化が進行します。直射日光やドライヤーは素材を傷めるため避け、陰干しで自然乾燥させてください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                定期的に手洗いする
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                月に1〜2回程度、中性洗剤でやさしく手洗いすることで、汗や皮脂汚れを除去し、素材の劣化を遅らせることができます。洗濯機は絶対に使わないでください。脱水も手で軽く押し絞る程度にとどめ、陰干しで完全に乾かしてから使用しましょう。詳しい洗い方は
                <Link href="/articles/washing-guide/" className="text-[#0ea5e9] hover:underline">インソールの洗い方ガイド</Link>
                で解説しています。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                用途に合ったインソールを使い分ける
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ランニング用のインソールで通勤したり、通勤用のインソールでスポーツをしたりすると、想定以上の負荷がかかり寿命が縮みます。活動内容に合わせて複数のインソールを使い分けることで、それぞれの寿命を最大化できます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                交換時期を記録する
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                インソールの使用開始日をスマホのメモやカレンダーに記録しておきましょう。使用日数や歩数を把握することで、劣化が進む前に適切なタイミングで交換できます。スマホの歩数計アプリと連動させて累計歩数を管理すると、より正確な交換タイミングの判断が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="product-durability" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            おすすめインソールの耐久性比較
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            当サイトで推奨する3つのインソールについて、耐久性とコストパフォーマンスの観点から比較します。
          </p>

          {/* Product 1: Pitsole */}
          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
              耐久性で選ぶなら
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ピットソール（Pitsole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              世界特許取得のBMZ社の技術を採用したピットソールは、アーチサポート部にTPU系素材を使用しており、形状保持力に優れています。毎日使用しても4〜6ヶ月は機能を維持する設計です。まとめ買い割引を利用すれば、1足あたりのコストを抑えて定期的な交換が可能になります。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>TPU系素材のアーチサポートで長期間形状を維持</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>まとめ買い割引で定期交換のコストを抑制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>累計200万足の販売実績で品質の安定性が証明済み</span>
              </li>
            </ul>
            <Link
              href="/pitsole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ピットソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Product 2: Runway Cure Sole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              薄型で長持ち
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ランウェイキュアソール（RUNWAY CURE SOLE）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              薄型設計のランウェイキュアソールは、素材への圧縮負荷が分散されるよう設計されており、薄さの割に耐久性に優れます。ヒールやパンプスなど狭い靴内で使用しても形崩れしにくく、3〜5ヶ月程度の使用が可能です。定期購入コースを利用すれば、交換タイミングに合わせて届くため管理も楽になります。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>薄型でも荷重分散設計で形崩れしにくい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>パンプスなど狭い靴内でも安定した耐久性</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>定期購入コースで交換管理が容易</span>
              </li>
            </ul>
            <Link
              href="/runway-cure-sole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              ランウェイキュアソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Product 3: Slim Up Insole */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              コスパ重視
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              スリムアップインソール（Slim Up Insole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師が監修したスリムアップインソールは、適度な硬さの素材を使用しており、クッション性と耐久性のバランスが良好です。3〜5ヶ月程度の使用が目安となりますが、価格を考慮するとコストパフォーマンスに優れた選択肢です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>クッション性と耐久性のバランスが良好</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>価格帯を考慮するとコストパフォーマンスが高い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>男女兼用で家族での共有も可能</span>
              </li>
            </ul>
            <Link
              href="/slim-up-insole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              スリムアップインソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              3商品の料金・機能・口コミを一覧で比較したい方は
              <Link
                href="/ranking/"
                className="text-[#0ea5e9] font-bold hover:underline"
              >
                おすすめランキングページ
              </Link>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールの平均寿命はどのくらいですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                一般的なインソールの寿命は3〜6ヶ月が目安です。ただし使用頻度や体重、活動内容によって大きく異なります。毎日使用する場合は3〜4ヶ月、週3〜4回の使用であれば6ヶ月程度が交換目安となります。高品質なTPU素材を使用した製品であれば、さらに長持ちする場合もあります。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールが劣化しているサインは何ですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                主な劣化サインは5つあります。かかと部分のクッションが潰れて薄くなっている、アーチサポート部分が平らになっている、表面素材が剥がれたり破れたりしている、洗っても取れない悪臭がある、足の疲れや痛みが以前より感じやすくなった、の5点です。1つでも当てはまれば交換を検討してください。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールの寿命を延ばす方法はありますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                インソールの寿命を延ばすには、毎日同じインソールを使わず2枚をローテーションする、使用後は靴から出して乾燥させる、定期的に中性洗剤で手洗いする、直射日光やドライヤーでの乾燥を避ける、といった方法が効果的です。これらを実践することで寿命を1.5〜2倍に延ばすことが可能です。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                高価なインソールは寿命が長いですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                必ずしも価格と寿命は比例しませんが、高品質な素材を使用した製品は耐久性に優れる傾向があります。例えばTPU素材のアーチサポートはEVA素材より形状保持力が高く、長期間にわたって機能を維持します。重要なのは価格だけでなく、使用素材と設計を確認することです。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                インソールを交換しないとどうなりますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                劣化したインソールを使い続けると、アーチサポートの機能が失われて扁平足が進行する、衝撃吸収力の低下により膝や腰への負担が増加する、足裏の荷重バランスが崩れて外反母趾や足底筋膜炎のリスクが高まる、といった問題が生じます。定期的な交換で足の健康を守りましょう。
              </div>
            </details>
          </div>
        </section>

        {/* Section 8: Summary */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            インソールは消耗品であり、定期的な交換が足の健康を維持するために不可欠です。素材や使用頻度によって寿命は異なりますが、3〜6ヶ月を目安に状態をチェックし、劣化のサインが見られたら早めに交換しましょう。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            特に「かかとのクッション潰れ」「アーチサポートの平坦化」「表面素材の破損」「取れない悪臭」「足の疲れや痛みの増加」の5つは明確な交換サインです。これらを放置すると、扁平足の進行や膝・腰の痛み、足底筋膜炎など、より深刻な問題に発展するリスクがあります。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            2枚のインソールをローテーションし、毎日乾燥させることで寿命を延ばすことも可能です。適切なケアと定期交換で、常に最高のコンディションで足をサポートしましょう。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">
              耐久性に優れたおすすめインソール
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link
                  href="/pitsole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ピットソール
                </Link>
                ：TPU系素材のアーチサポートで長期間機能を維持。まとめ買い割引で交換コストも抑制。
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ランウェイキュアソール
                </Link>
                ：薄型でも荷重分散設計により形崩れしにくい。定期購入で管理も楽。
              </li>
              <li>
                <Link
                  href="/slim-up-insole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  スリムアップインソール
                </Link>
                ：クッション性と耐久性のバランスが良好。コストパフォーマンスに優れた選択肢。
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#0ea5e9] text-white font-bold text-sm md:text-base px-8 py-3 rounded-full hover:bg-sky-600 transition-colors shadow-md"
            >
              3商品の詳細比較ランキングを見る
            </Link>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/material-comparison/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールの素材比較｜EVA・TPU・コルク・ジェル</p>
            </Link>
            <Link href="/articles/washing-guide/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールの洗い方ガイド</p>
            </Link>
            <Link href="/articles/insole-care/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">インソールのお手入れ方法</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50">
              <p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
