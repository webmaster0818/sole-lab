import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソールのサイズ選び｜外反母趾でも使える？",
  description:
    "ランウェイキュアソールのサイズ展開・サイズ選びのポイントを徹底解説。外反母趾の方が使用する際の注意点、靴別フィッティングガイド、よくある質問まで網羅した完全ガイド。",
  openGraph: {
    title:
      "ランウェイキュアソールのサイズ選び｜外反母趾でも使える？｜ソールラボ",
    description:
      "ランウェイキュアソールのサイズ展開・選び方・外反母趾での注意点を徹底解説。",
    url: "https://sole-laboratory.com/articles/runway-size-guide/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/runway-size-guide/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ランウェイキュアソールのサイズ選び｜外反母趾でも使える？",
  description:
    "ランウェイキュアソールのサイズ展開・選び方・外反母趾での注意点を解説。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-laboratory.com",
  },
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
};

const faqs = [
  {
    question: "ランウェイキュアソールは外反母趾でも使えますか？",
    answer:
      "軽度の外反母趾であれば使用可能ですが、注意が必要です。ランウェイキュアソールの3点アーチサポートは横アーチも支えるため、外反母趾の変形が強い場合は親指の付け根に負担がかかる可能性があります。痛みが出た場合は無理に使用せず、医師に相談してください。",
  },
  {
    question: "ランウェイキュアソールのサイズが合わない場合は返品できますか？",
    answer:
      "公式サイトでの購入の場合、未使用・未開封の状態であれば返品が可能です。ただし、カットしてしまった場合や使用後の返品は基本的に受け付けられません。サイズに不安がある場合は、まず1足で試してからセット購入を検討するのがおすすめです。",
  },
  {
    question: "ランウェイキュアソールはヒールの靴にも使えますか？",
    answer:
      "ランウェイキュアソールは薄型設計のため、3〜5cmのローヒール・ミドルヒールには対応可能です。ただし、7cm以上のハイヒールやピンヒールは足裏の接地面積が小さく、インソールのサポート効果が十分に発揮されないため推奨されません。パンプス用に使う場合はつま先部分のカットが必要です。",
  },
  {
    question: "ランウェイキュアソールとピットソールのサイズ感は同じですか？",
    answer:
      "サイズ展開（XS〜Lの4サイズ）は同じですが、インソールの厚みや形状が異なります。ランウェイキュアソールのほうが薄型設計のため、タイトな靴にも入りやすい傾向があります。ただし、サイズ選びの基本（靴のサイズに合わせる、大きめを選んでカット）は共通です。",
  },
  {
    question: "ランウェイキュアソールは洗えますか？",
    answer:
      "ランウェイキュアソールはぬるま湯で手洗いが可能です。中性洗剤を使って軽く洗い、陰干しで乾かしてください。洗濯機の使用や乾燥機は型崩れの原因になるため避けましょう。衛生面を保つため、2週間に1回程度のお手入れをおすすめします。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sole-laboratory.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ランウェイキュアソール",
      item: "https://sole-laboratory.com/runway-cure-sole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "サイズ・外反母趾",
      item: "https://sole-laboratory.com/articles/runway-size-guide/",
    },
  ],
};

export default function RunwaySizeGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "ランウェイキュアソール", href: "/runway-cure-sole/" },
          { label: "サイズ・外反母趾" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            ランウェイキュアソール特集
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソールの
            <span className="text-[#e8627c]">サイズ選び</span>
            <br />
            外反母趾でも使える？
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ランウェイキュアソールのサイズ展開からサイズ選びのコツ、外反母趾の方の注意点まで徹底解説。靴別のフィッティングガイドもあわせて紹介します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-pink-100 text-[#e8627c] px-3 py-1 rounded-full font-medium">
              ランウェイキュアソール サイズ
            </span>
            <span className="bg-pink-100 text-[#e8627c] px-3 py-1 rounded-full font-medium">
              外反母趾
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 競合との差別化 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            この記事の特徴
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ランウェイキュアソールのサイズに関する記事は少なく、公式サイトの情報だけでは不十分なケースがあります。特に「外反母趾でも使えるか」という疑問に対して、具体的に踏み込んで解説しているサイトはほとんどありません。
            </p>
            <p>
              この記事では、サイズ展開の詳細だけでなく、<strong>外反母趾との相性についての注意点</strong>、<strong>靴の種類別のフィッティングポイント</strong>、<strong>他社製品とのサイズ感の比較</strong>まで、購入前に知っておくべき情報を網羅します。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ展開一覧 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ展開一覧
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      対応cm
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      おすすめの方
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      カット調整
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      size: "XS",
                      cm: "21〜22.5cm",
                      target: "小さめの足の女性・学生",
                      cut: "可能",
                    },
                    {
                      size: "S",
                      cm: "23〜24.5cm",
                      target: "標準〜やや小さめの女性",
                      cut: "可能",
                    },
                    {
                      size: "M",
                      cm: "25〜26cm",
                      target: "大きめの女性・小さめの男性",
                      cut: "可能",
                    },
                    {
                      size: "L",
                      cm: "26.5〜27.5cm",
                      target: "標準的な男性",
                      cut: "可能",
                    },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-bold">
                        {row.size}
                      </td>
                      <td className="py-3 text-gray-900">{row.cm}</td>
                      <td className="py-3 text-gray-600">{row.target}</td>
                      <td className="py-3 text-emerald-600">{row.cut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ すべてのサイズでつま先部分のカット調整が可能です。
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
            <p>
              ランウェイキュアソールのサイズ展開は、ピットソールと同じXS〜Lの4サイズです。整体師監修の骨盤補整設計が特徴で、ピットソールと比較するとやや薄型に設計されているため、靴内のスペースが限られるパンプスなどにも装着しやすくなっています。
            </p>
          </div>
        </div>
      </section>

      {/* サイズ選びのポイント */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            サイズ選びの5つのポイント
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "靴のサイズを基準にする",
                desc: "足の実寸ではなく、普段履いている靴のサイズを基準にサイズを選びましょう。例えば、足の実寸が23.5cmでも24cmの靴を履いている場合は、Sサイズ（23〜24.5cm）を選びます。ランウェイキュアソールは靴の中に入れて使うため、靴のサイズに合わせることが重要です。",
              },
              {
                num: "02",
                title: "迷ったら大きいサイズを選ぶ",
                desc: "サイズの境目で迷った場合は、大きいほうを選びましょう。ランウェイキュアソールはつま先部分をカットして調整できるため、大きめからカットするほうが失敗のリスクが少ないです。小さいサイズを選んでしまうとアーチサポートの位置がずれる可能性があります。",
              },
              {
                num: "03",
                title: "元の中敷きを取り外す",
                desc: "靴に元々入っている中敷きを取り外してからランウェイキュアソールを入れてください。元の中敷きの上に重ねると、靴の中が窮屈になるだけでなく、アーチサポートの位置がずれて効果が半減します。元の中敷きをテンプレートとしてカットの際に使うと便利です。",
              },
              {
                num: "04",
                title: "つま先に0.5〜1cmの余裕を確認",
                desc: "インソールを入れた状態で靴を履き、つま先に0.5〜1cmの余裕があることを確認してください。余裕がない場合は、つま先を歩行時に圧迫し、外反母趾やタコの原因になります。特に幅の狭い靴では注意が必要です。",
              },
              {
                num: "05",
                title: "実際に歩いてフィット感を確認",
                desc: "装着後、必ず室内で数分間歩いてフィット感を確認しましょう。かかとがしっかり収まっているか、土踏まずのサポートが適切な位置に当たっているか、歩行時にインソールがズレないかの3点をチェックしてください。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#e8627c] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 外反母趾の注意点 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            外反母趾の方への重要な注意点
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              外反母趾をお持ちの方からよく寄せられる「ランウェイキュアソールは外反母趾でも使えるか？」という質問に、正直にお答えします。
            </p>
          </div>

          <div className="card border-2 border-amber-200 bg-amber-50 mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              結論：使用できるが注意が必要
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ランウェイキュアソールの3点アーチサポート構造は、横アーチ（前足部の横方向のアーチ）もサポートします。横アーチのサポートは外反母趾の予防に効果的な場合もありますが、<strong>すでに変形が進んでいる外反母趾の場合、親指の付け根（母趾球）に負担がかかる可能性があります</strong>。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-emerald-50 border-emerald-200">
              <h3 className="text-sm font-bold text-emerald-700 mb-3">
                使用OK：軽度の外反母趾
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  親指の角度が15度未満
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  痛みがない or 時々軽い痛みがある程度
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  アーチサポートで改善が期待できる段階
                </li>
              </ul>
            </div>

            <div className="card bg-amber-50 border-[#c9a76c]">
              <h3 className="text-sm font-bold text-[#c9a76c] mb-3">
                要注意：中度の外反母趾
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  親指の角度が15〜30度
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  歩行時に時々痛みがある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0 mt-0.5">!</span>
                  短時間の使用から始め、痛みが出たら中止
                </li>
              </ul>
            </div>

            <div className="card bg-red-50 border-red-200">
              <h3 className="text-sm font-bold text-[#e8627c] mb-3">
                非推奨：重度の外反母趾
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] shrink-0 mt-0.5">
                    &#10007;
                  </span>
                  親指の角度が30度以上
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] shrink-0 mt-0.5">
                    &#10007;
                  </span>
                  日常的に強い痛みがある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8627c] shrink-0 mt-0.5">
                    &#10007;
                  </span>
                  医師の診断・治療を優先すべき段階
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              外反母趾の程度は自己判断が難しい場合もあります。不安がある方は、整形外科を受診してからインソールの使用を検討されることをおすすめします。また、外反母趾用の専用インソールとランウェイキュアソールは設計思想が異なるため、外反母趾の治療を目的とする場合は医療用インソール（オーダーメイド矯正具）を検討してください。
            </p>
            <p>
              ランウェイキュアソールは「外反母趾の治療器具」ではなく「姿勢改善・ダイエットサポートインソール」です。外反母趾への直接的な治療効果を期待して購入するのは適切ではありません。あくまで、軽度の方が姿勢改善の副次的効果としてアーチサポートを受けるという位置づけで使用してください。
            </p>
          </div>
        </div>
      </section>

      {/* 靴別フィッティングガイド */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            靴別フィッティングガイド
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ランウェイキュアソールは薄型設計のため、様々な種類の靴に対応しています。ただし、靴の種類によってフィッティングのポイントが異なります。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                type: "スニーカー",
                compatibility: "◎ 最適",
                points: [
                  "最も装着しやすく、相性の良い靴タイプです",
                  "元の中敷きを取り外して入れ替えるだけでOK",
                  "クッション性のあるスニーカーと組み合わせると快適さが向上",
                  "ウォーキングやランニング用スニーカーとの併用が効果的",
                  "幅広タイプなら外反母趾の方でも窮屈になりにくい",
                ],
              },
              {
                type: "パンプス",
                compatibility: "○ 対応可",
                points: [
                  "薄型設計のランウェイキュアソールはパンプスにも対応",
                  "つま先部分を多めにカットして靴の形状に合わせる",
                  "ヒール高3〜5cmのローヒールが最も相性が良い",
                  "ポインテッドトゥ（先が尖った形）は大幅なカットが必要",
                  "ストラップ付きのパンプスだとズレにくい",
                ],
              },
              {
                type: "ブーツ",
                compatibility: "○ 対応可",
                points: [
                  "ショートブーツ・ロングブーツともに使用可能",
                  "元の中敷きを取り外してから装着",
                  "厚手の靴下を履く場合はワンサイズ大きめのブーツが必要",
                  "防水・防寒ブーツでも基本的に問題なし",
                  "レインブーツは中がツルツルでズレやすい場合があるため注意",
                ],
              },
              {
                type: "ビジネスシューズ（革靴）",
                compatibility: "○ 対応可",
                points: [
                  "紐付きの革靴が最も装着しやすい",
                  "ローファーはフィット感が変わるため試し履き必須",
                  "先の細い革靴はつま先部分の大幅カットが必要",
                  "元の中敷きの取り外しが必須（スペース確保のため）",
                  "通勤での長時間使用に最適",
                ],
              },
              {
                type: "サンダル・ミュール",
                compatibility: "△ 不向き",
                points: [
                  "かかとが固定されないサンダルではインソールがズレやすい",
                  "バックストラップ付きのサンダルなら使用可能な場合も",
                  "足の甲が露出するため、インソールが見える場合がある",
                  "基本的にはサンダル以外の靴での使用を推奨",
                  "室内でのスリッパ代わりには使用できません",
                ],
              },
            ].map((item) => (
              <div key={item.type} className="card">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-base font-bold text-gray-900">
                    {item.type}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                      item.compatibility.includes("最適")
                        ? "bg-emerald-100 text-emerald-700"
                        : item.compatibility.includes("不向き")
                        ? "bg-red-100 text-[#e8627c]"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.compatibility}
                  </span>
                </div>
                <ul className="space-y-1">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-[#e8627c] shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 他社製品との比較 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            他社インソールとのサイズ・仕様比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-medium">
                      比較項目
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      ランウェイキュアソール
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      ピットソール
                    </th>
                    <th className="py-3 text-left text-gray-500 font-medium">
                      スリムアップインソール
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "サイズ展開",
                      runway: "XS/S/M/L",
                      pitsole: "XS/S/M/L",
                      slimup: "S/M/L",
                    },
                    {
                      item: "対応cm",
                      runway: "21〜27.5cm",
                      pitsole: "21〜27.5cm",
                      slimup: "22〜28cm",
                    },
                    {
                      item: "厚さ",
                      runway: "薄型設計",
                      pitsole: "標準厚",
                      slimup: "標準厚",
                    },
                    {
                      item: "カット調整",
                      runway: "可能",
                      pitsole: "可能",
                      slimup: "可能",
                    },
                    {
                      item: "パンプス対応",
                      runway: "◎",
                      pitsole: "○",
                      slimup: "△",
                    },
                    {
                      item: "外反母趾",
                      runway: "要注意",
                      pitsole: "要注意",
                      slimup: "要注意",
                    },
                    {
                      item: "監修",
                      runway: "整体師",
                      pitsole: "特許技術",
                      slimup: "-",
                    },
                    {
                      item: "価格（1足）",
                      runway: "4,378円〜",
                      pitsole: "6,578円〜",
                      slimup: "2,178円〜",
                    },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900 font-medium">
                        {row.item}
                      </td>
                      <td className="py-3 text-[#e8627c] font-medium">
                        {row.runway}
                      </td>
                      <td className="py-3 text-gray-600">{row.pitsole}</td>
                      <td className="py-3 text-gray-600">{row.slimup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
            <p>
              ランウェイキュアソールの最大の特徴は薄型設計です。パンプスやタイトな靴にも装着しやすいため、女性のデイリーユースに最も適しています。一方、ピットソールは世界特許技術によるアーチサポートが強力で、スニーカーやウォーキングシューズとの併用で高い効果が期待できます。
            </p>
            <p>
              サイズ選びで迷っている方は、まず自分が主にどの靴で使いたいかを明確にしてから選ぶと失敗しにくいです。パンプス中心ならランウェイキュアソール、スニーカー中心ならピットソール、コスパ重視ならスリムアップインソールがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* 正しいカット方法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            正しいカット方法
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "元の中敷きをテンプレートにする",
                desc: "靴から元の中敷きを取り出し、ランウェイキュアソールの上に重ねます。かかと部分を合わせて、つま先の形をペンでなぞってください。これが最も確実にフィットするカット方法です。",
              },
              {
                num: "02",
                title: "ガイドラインの外側をカット",
                desc: "ペンでなぞったガイドラインの少し外側（2〜3mm程度）をハサミで切ります。最初は少し大きめにカットし、都度靴に入れてフィット感を確認しながら微調整するのがコツです。",
              },
              {
                num: "03",
                title: "かかと部分は絶対にカットしない",
                desc: "ランウェイキュアソールのかかと部分にはサポート構造が組み込まれているため、かかと部分は絶対にカットしないでください。カットするのはつま先部分と、必要に応じて側面のみです。",
              },
              {
                num: "04",
                title: "靴に入れて最終確認",
                desc: "カットしたインソールを靴に入れ、実際に足を入れてフィット感を確認します。かかとがしっかり収まり、つま先に余裕があり、土踏まずのサポートが適切な位置に当たっていればOKです。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#e8627c] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-[#e8627c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-[#e8627c] font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ランウェイキュアソールはXS〜Lの4サイズ展開で、靴のサイズに合わせてカット調整が可能です。薄型設計のためパンプスやタイトな靴にも装着しやすく、整体師監修の骨盤補整設計が特徴です。
            </p>
            <p>
              外反母趾の方は使用できる場合もありますが、注意が必要です。軽度であればアーチサポートの恩恵を受けられますが、中度以上の場合は痛みが出る可能性があるため、短時間から試すか医師に相談してください。ランウェイキュアソールは外反母趾の治療器具ではなく、姿勢改善・ダイエットサポートインソールです。
            </p>
            <p>
              サイズ選びで迷ったら大きいサイズを選んでカットで調整するのが鉄則です。購入前にこの記事のフィッティングガイドを参考に、自分の靴との相性を確認してください。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/runway-cure-sole/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ランウェイキュアソールの詳細レビューを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/runway-cure-sole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ランウェイキュアソールの口コミ・効果を徹底検証
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50"
            >
              <p className="text-sm font-semibold text-[#e8627c]">
                おすすめダイエットインソール3選を見る →
              </p>
            </Link>
            <Link
              href="/articles/flat-feet/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                扁平足の方のインソール選び完全ガイド
              </p>
            </Link>
            <Link
              href="/compare/pitsole-vs-runway/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソール vs ランウェイキュアソール 徹底比較
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
