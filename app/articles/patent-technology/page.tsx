import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ダイエットインソールの特許技術を徹底解説【BMZ・各社の独自技術】",
  description:
    "ダイエットインソールの特許技術を比較解説。BMZのキュボイドバランス理論・CCLP理論（世界特許）、ランウェイキュアソールの3点アーチサポート、スリムアップインソールの整体師監修設計を徹底比較。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/patent-technology/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダイエットインソールの特許技術を徹底解説【BMZ・各社の独自技術】",
  description:
    "ダイエットインソールの特許技術を比較解説。BMZのキュボイドバランス理論・CCLP理論（世界特許）、3点アーチサポート、整体師監修設計を徹底比較。",
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
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
};

const faqs = [
  {
    question: "キュボイドバランス理論とは何ですか？",
    answer:
      "キュボイドバランス理論は、BMZ社が開発した足裏の立方骨（キュボイド）を適切にサポートすることで足本来の機能を引き出す理論です。従来のインソールが土踏まず（内側縦アーチ）のサポートに注力していたのに対し、足の外側にある立方骨を支えることで、足全体のバランスと安定性を高めるという新しいアプローチです。特許番号4733957として日本で登録されています。",
  },
  {
    question: "ピットソールの世界特許とはどの技術を指しますか？",
    answer:
      "ピットソールの世界特許は、BMZ社が開発したCCLP理論（Cuboid Calcaneus Leading Point理論）に基づく技術を指します。立方骨と踵骨前部を同時にサポートする構造で、日本国内の特許に加えて国際的にも特許を取得しています。これにより足裏の骨格バランスを根本から整え、歩行時の筋活動量を高める効果が期待されます。",
  },
  {
    question: "特許を取得していないインソールは効果がないのですか？",
    answer:
      "特許の有無だけで効果の有無を判断することはできません。特許はあくまで「技術の独自性」を証明するものであり、「効果の大きさ」を保証するものではありません。特許がなくても、整体師や医療専門家の監修のもと、人体工学に基づいた設計を行っている製品は十分な効果が期待できます。ただし、特許技術は第三者機関による審査を経ているため、技術的な信頼性の一つの指標にはなります。",
  },
  {
    question: "3つのインソールの中でどれを選べばよいですか？",
    answer:
      "科学的根拠とエビデンスを重視するならピットソール（世界特許・大学共同研究あり）、美姿勢や立ち仕事での疲労軽減を重視するならランウェイキュアソール（3点アーチサポート）、コストパフォーマンスと手軽さを重視するならスリムアップインソール（整体師監修・手頃価格）がおすすめです。詳しくは当サイトのランキングページも参考にしてください。",
  },
  {
    question: "特許技術のインソールは普通のインソールより高価ですか？",
    answer:
      "特許技術を搭載したインソールは、一般的なクッション系インソール（500〜1,000円程度）と比較するとやや高価です。ピットソールは6,578円〜、ランウェイキュアソールは4,378円〜、スリムアップインソールは2,178円〜となっています。ただし、独自の設計開発費や研究費が価格に反映されており、機能性と耐久性の面では費用対効果は高いと言えます。",
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
      name: "コラム一覧",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ダイエットインソールの特許技術を徹底解説",
      item: "https://sole-laboratory.com/articles/patent-technology/",
    },
  ],
};

export default function PatentTechnologyPage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "特許技術解説" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-emerald-600 font-medium mb-2">
            ダイエットコラム
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ダイエットインソールの特許技術を徹底解説
            <br />
            <span className="text-emerald-600">
              BMZ・各社の独自技術
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「世界特許取得」「独自理論」――ダイエットインソールの広告でよく目にするこれらの言葉。実際にどんな技術が使われているのか？BMZのキュボイドバランス理論から各社の設計思想まで、特許技術の中身を徹底的に解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              ダイエットインソール 特許
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              BMZ 特許
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              キュボイドバランス
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* なぜ特許技術が重要なのか？ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            なぜ特許技術が重要なのか？
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ダイエットインソールを選ぶ際、「特許技術」という言葉は一つの重要な判断材料になります。しかし、特許があれば必ず良い製品というわけでもなく、特許がないから悪い製品というわけでもありません。まずは特許技術の意味と、一般的なインソールとの違いを理解しましょう。
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              一般的なインソールとの違い
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-t-4 border-t-gray-300">
                <h4 className="text-base font-bold text-gray-500 mb-3">
                  一般的なインソール
                </h4>
                <ul className="space-y-2">
                  {[
                    "主にクッション性・快適さを重視",
                    "既存の素材・構造を組み合わせた設計",
                    "足裏全体を均一にサポート",
                    "衝撃吸収がメインの機能",
                    "価格帯は500〜1,500円程度",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-gray-400 shrink-0 mt-0.5">
                        &#9679;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-t-4 border-t-emerald-500">
                <h4 className="text-base font-bold text-emerald-700 mb-3">
                  特許技術搭載インソール
                </h4>
                <ul className="space-y-2">
                  {[
                    "足の骨格・筋肉の仕組みに基づいた設計",
                    "独自の理論・研究をもとに開発",
                    "特定の骨や関節をピンポイントでサポート",
                    "姿勢改善・筋活動量の向上を目的",
                    "価格帯は2,000〜7,000円程度",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-emerald-500 shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              特許取得の意味と信頼性
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                特許とは、発明者が新規性・進歩性のある技術を特許庁に出願し、審査を経て認められた独占的な権利です。インソールの分野で特許を取得しているということは、以下の点が第三者機関（特許庁）によって認められたことを意味します。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  title: "新規性",
                  desc: "これまでにない新しい技術・構造であること。既存のインソールにはない独自のアプローチが含まれている。",
                },
                {
                  title: "進歩性",
                  desc: "単なる改良ではなく、技術的に優れた進歩があること。専門家が見ても容易には思いつかない工夫がある。",
                },
                {
                  title: "産業上の利用可能性",
                  desc: "実際に製品として製造・使用できる実用的な技術であること。机上の空論ではなく実用性がある。",
                },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h4 className="text-sm font-bold text-emerald-700 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="card mt-6 border-l-4 border-l-amber-400">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">注意点：</span>
                特許は「技術の独自性」を証明するものであり、「製品の効果の大きさ」を直接保証するものではありません。しかし、特許取得には数年の審査期間と専門的な技術資料の提出が必要であり、一定水準以上の技術力と研究開発力を持つ企業であることの証明にはなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ピットソールの世界特許技術 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            ピットソールの世界特許技術
          </h2>
          <p className="text-sm text-[#e8627c] font-medium mb-6">
            BMZ社のキュボイドバランス理論 × CCLP理論
          </p>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ピットソールに搭載されている特許技術は、インソール専門メーカーBMZ社が長年の研究を通じて開発したものです。BMZ社はスポーツ用インソールの分野で国内トップクラスのシェアを誇り、プロアスリートにも採用されている技術力の高い企業です。
            </p>
          </div>

          {/* キュボイドバランス理論 */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              BMZ社のキュボイドバランス理論とは
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                キュボイドバランス理論は、BMZ社の代表である高橋毅氏が提唱した、足の立方骨（キュボイド）に着目した独自の理論です。従来のインソールは足の内側（土踏まず＝内側縦アーチ）をサポートするのが主流でしたが、BMZ社は足の外側にある立方骨こそが足全体のバランスの鍵を握ると発見しました。
              </p>
              <p>
                立方骨は足の外側アーチの頂点に位置する骨で、足の横方向の安定性を担っています。この骨を適切に支えることで、足本来が持つバランス機能を引き出すことができるとする理論です。
              </p>
            </div>

            <div className="card mt-6 bg-white">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                従来のインソール理論との違い
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">
                        項目
                      </th>
                      <th className="text-left py-2 pr-4 text-gray-500 font-medium">
                        従来のインソール
                      </th>
                      <th className="text-left py-2 text-gray-500 font-medium">
                        キュボイドバランス
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-medium">サポート部位</td>
                      <td className="py-2 pr-4">土踏まず（内側縦アーチ）</td>
                      <td className="py-2">立方骨（外側アーチ）</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-medium">設計思想</td>
                      <td className="py-2 pr-4">崩れたアーチを外から支える</td>
                      <td className="py-2">足本来の機能を引き出す</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-medium">筋肉への影響</td>
                      <td className="py-2 pr-4">
                        サポートに頼り筋力が低下する懸念
                      </td>
                      <td className="py-2">
                        足指の自然な動きを促進し筋力を維持
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium">長期使用</td>
                      <td className="py-2 pr-4">
                        依存性が生じる可能性がある
                      </td>
                      <td className="py-2">
                        足の機能回復を目指すため依存性が低い
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 立方骨サポートの仕組み */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              立方骨サポートの仕組み
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                立方骨は足の26個の骨のうちの一つで、足の外側縦アーチの「要石（かなめいし）」として機能しています。立方骨が適切な位置にあることで、足裏の3つのアーチ（内側縦アーチ・外側縦アーチ・横アーチ）が連動して正しく機能します。
              </p>
              <p>
                キュボイドバランスインソールは、立方骨の下にピンポイントで凸部を配置し、歩行時に立方骨を適度に持ち上げます。これにより以下のメカニズムで歩行の質が向上します。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  num: "01",
                  title: "立方骨の位置が最適化される",
                  desc: "インソールの凸部が立方骨を適切な高さに支え、外側縦アーチが本来の形状を取り戻します。",
                },
                {
                  num: "02",
                  title: "3つのアーチが連動する",
                  desc: "外側アーチの安定により、内側縦アーチ・横アーチも連動して機能が回復。足裏全体のバランスが整います。",
                },
                {
                  num: "03",
                  title: "足指が自由に動ける",
                  desc: "土踏まずを直接持ち上げないため、足指の自然な「握る」動きが妨げられず、地面を蹴り出す力が維持されます。",
                },
                {
                  num: "04",
                  title: "下肢全体の筋活動が増加",
                  desc: "足裏の安定性向上により、ふくらはぎ・太もも・お尻の筋肉がバランスよく使われ、歩行時の筋活動量が増加します。",
                },
              ].map((item) => (
                <div key={item.num} className="card">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-[#e8627c] shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CCLP理論 */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              CCLP理論への進化
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                キュボイドバランス理論をさらに発展させたのが、CCLP理論（Cuboid Calcaneus Leading Point理論）です。CCLP理論では、立方骨に加えて踵骨（かかとの骨）の前部も同時にサポートすることで、より効果的な足のアライメント補整を実現しています。
              </p>
              <p>
                踵骨前部は、立方骨と隣接する部位であり、この2点を同時に支えることで足の外側全体が安定し、かかとから足指への体重移動がよりスムーズになります。ピットソールにはこのCCLP理論に基づく設計が採用されており、世界特許として保護されています。
              </p>
            </div>
            <div className="card mt-6 border-l-4 border-l-[#e8627c]">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">
                  CCLP理論のポイント：
                </span>
                立方骨と踵骨前部を同時にサポートすることで、「足のアーチ保持」と「スムーズな体重移動」を両立。単一ポイントのサポートでは実現できなかった、歩行サイクル全体を通じた足の安定性向上を可能にしました。
              </p>
            </div>
          </div>

          {/* 特許番号 */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              特許番号と取得国
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                BMZ社のインソール技術は、日本国内だけでなく国際的にも特許を取得しています。これは技術の独自性が日本だけでなく世界的に認められていることを示しています。
              </p>
            </div>
            <div className="card mt-4 bg-white">
              <div className="space-y-3">
                {[
                  {
                    label: "日本特許",
                    value: "特許第4733957号（キュボイドバランス理論）",
                  },
                  {
                    label: "国際特許",
                    value:
                      "PCT国際出願による複数国での権利取得（CCLP理論関連）",
                  },
                  {
                    label: "取得分野",
                    value: "足骨格のサポート構造およびインソールの設計に関する技術",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-sm font-bold text-[#e8627c] shrink-0 min-w-[80px]">
                      {item.label}
                    </span>
                    <span className="text-sm text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 臨床データ */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              臨床データ・エビデンス
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                BMZ社は大学研究機関との共同研究を実施し、キュボイドバランスインソールの効果を科学的に検証しています。特にピットソールについては、以下のようなエビデンスが報告されています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  title: "筋電図測定による検証",
                  desc: "大学との共同研究において、ピットソール着用時に下肢の筋電図活動量が有意に増加したとするデータが報告されています。特に中殿筋・大腿四頭筋の活動量の増加が確認されています。",
                },
                {
                  title: "姿勢変化の測定",
                  desc: "インソール着用前後の立位姿勢を測定した結果、骨盤の前傾角度が改善し、より理想的な姿勢アライメントに近づいたとするデータが示されています。",
                },
                {
                  title: "歩行解析",
                  desc: "歩行解析装置を用いた研究で、着用時に歩行時の足圧分布が改善し、より効率的な体重移動パターンが観察されたと報告されています。",
                },
                {
                  title: "累計販売実績",
                  desc: "累計200万足を超える販売実績は、多くのユーザーがリピート購入していることを間接的に示しており、ユーザー満足度の高さを反映しています。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#f3e0e4]"
                >
                  <span className="text-emerald-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  <div>
                    <span className="text-sm font-bold text-gray-900">
                      {item.title}：
                    </span>
                    <span className="text-sm text-gray-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ランウェイキュアソールの3点アーチサポート技術 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            ランウェイキュアソールの3点アーチサポート技術
          </h2>
          <p className="text-sm text-[#c9a76c] font-medium mb-6">
            足裏3つのアーチを同時サポートする独自設計
          </p>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ランウェイキュアソールは、ピットソールとは異なるアプローチで足裏のサポートを行うダイエットインソールです。BMZの立方骨に特化した設計ではなく、足裏にある3つのアーチすべてを同時にサポートする「3点アーチサポート」を設計の核としています。
            </p>
          </div>

          {/* 足裏3つのアーチ */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              足裏3つのアーチとは
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                人間の足裏には3つのアーチ構造があり、これらが連動して「天然のサスペンション」として機能しています。体重の分散、衝撃の吸収、歩行時の推進力の発生において、3つのアーチは欠かすことのできない役割を果たしています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  name: "内側縦アーチ",
                  sub: "土踏まず",
                  desc: "足の内側を縦に走るアーチ。最も大きく、衝撃吸収と推進力の発生を担う。崩れると「扁平足」になり、疲れやすくなる。",
                  color: "text-[#e8627c]",
                },
                {
                  name: "外側縦アーチ",
                  sub: "小趾側",
                  desc: "足の外側を縦に走るアーチ。体の横方向の安定性を担う。崩れると歩行時にふらつきやすくなり、O脚の原因にも。",
                  color: "text-[#c9a76c]",
                },
                {
                  name: "横アーチ",
                  sub: "前足部",
                  desc: "足指の付け根を横に走るアーチ。体重の分散と足指の機能を担う。崩れると「開張足」になり、外反母趾の原因にも。",
                  color: "text-emerald-600",
                },
              ].map((arch) => (
                <div key={arch.name} className="card">
                  <h4 className={`text-base font-bold ${arch.color} mb-1`}>
                    {arch.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">（{arch.sub}）</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3点同時サポート */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              3点同時サポートの仕組み
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                ランウェイキュアソールの特徴は、これら3つのアーチを個別にではなく、「同時に」サポートする設計にあります。インソール上の3つのポイントに適切な高さと硬さの凸部を配置し、それぞれのアーチの頂点を支える構造です。
              </p>
              <p>
                3つのアーチは互いに連動して機能しているため、1つのアーチだけをサポートしても他のアーチに負荷が集中し、バランスが崩れる可能性があります。3点を同時にサポートすることで、アーチ全体の調和を保ちながら足裏の機能を回復させることを狙っています。
              </p>
            </div>
            <div className="card mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                3点アーチサポートの設計ポイント
              </h4>
              <div className="space-y-3">
                {[
                  {
                    label: "内側縦アーチサポート",
                    desc: "舟状骨（土踏まずの頂点の骨）の下に配置。最も高さのあるサポートで、扁平足の方でもアーチが再形成されるよう設計。",
                  },
                  {
                    label: "外側縦アーチサポート",
                    desc: "立方骨付近に配置。内側ほど高さは必要ないが、横方向の安定性を確保する重要なポイント。",
                  },
                  {
                    label: "横アーチサポート",
                    desc: "中足骨頭部の後方に配置。開張足を防ぎ、足指が正しく地面を捉えられるようにサポート。",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-[#c9a76c] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.label}：
                      </span>
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 美姿勢への効果 */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              美姿勢への効果メカニズム
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                ランウェイキュアソールが「美姿勢インソール」として訴求しているのには理由があります。3つのアーチが同時に整うことで、足元から体全体のアライメントが連鎖的に改善されるメカニズムが働くためです。
              </p>
            </div>
            <div className="space-y-3 mt-4">
              {[
                {
                  step: "STEP 1",
                  title: "足裏のアーチが復元",
                  desc: "3点サポートにより崩れたアーチ構造が正しい形状に近づく",
                },
                {
                  step: "STEP 2",
                  title: "足首・膝の角度が改善",
                  desc: "足裏の安定により、足首の過回内や膝の内向きが補正される",
                },
                {
                  step: "STEP 3",
                  title: "骨盤の位置が最適化",
                  desc: "下肢のアライメント改善が骨盤に伝わり、前傾・後傾が修正される",
                },
                {
                  step: "STEP 4",
                  title: "上半身の姿勢が整う",
                  desc: "骨盤が安定することで背骨の自然なS字カーブが保たれ、美姿勢に",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#f3e0e4]"
                >
                  <span className="text-xs font-bold text-white bg-[#c9a76c] px-2 py-1 rounded shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card mt-6 border-l-4 border-l-[#c9a76c]">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">ポイント：</span>
                ランウェイキュアソールの3点アーチサポートは、「足裏」から「姿勢全体」へと効果が波及するボトムアップ型のアプローチです。整体師の監修により、人体の連動性（運動連鎖）を踏まえた設計となっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スリムアップインソールの整体師監修設計 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            スリムアップインソールの整体師監修設計
          </h2>
          <p className="text-sm text-[#34d399] font-medium mb-6">
            美容整体師の知見を製品設計に反映
          </p>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              スリムアップインソールは、特許技術ではなく「専門家監修」をアプローチの軸にしたダイエットインソールです。美容整体の分野で活動する井上剛志氏が監修し、整体の知見を製品設計に反映させています。
            </p>
          </div>

          {/* 井上剛志の監修 */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              美容整体師・井上剛志の監修とは
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                井上剛志氏は美容整体の分野で活動する整体師で、骨格と姿勢の関係性に着目した施術を行っています。スリムアップインソールでは、氏の臨床経験から得られた「日常的に骨格バランスを整えることの重要性」という考えが設計に反映されています。
              </p>
              <p>
                特許技術のような独自の理論体系ではありませんが、実際の施術現場で多くの患者の足を見てきた経験に基づくアプローチは、実用性の面で一定の価値があります。整体の「足元から全身のバランスを整える」という考え方がインソール設計に活かされています。
              </p>
            </div>
          </div>

          {/* 骨格筋サポート構造 */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              骨格筋サポート構造の特徴
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                スリムアップインソールの設計は、足裏の骨格と筋肉の両方をサポートする構造を採用しています。特許取得こそしていませんが、整体の観点から以下の特徴を持った設計になっています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  title: "傾斜設計",
                  desc: "インソール全体に微妙な傾斜をつけることで、立位時・歩行時に自然と正しい体重分散が促されます。特にかかとからつま先への体重移動をガイドする設計です。",
                },
                {
                  title: "アーチサポート",
                  desc: "土踏まず部分に緩やかなカーブを設け、内側縦アーチをサポート。強すぎず弱すぎない、初心者にも違和感の少ない高さに設計されています。",
                },
                {
                  title: "ヒールカップ",
                  desc: "かかと周りを包み込むカップ構造を採用。かかとの骨（踵骨）を正しい位置に保持し、足全体の安定性を高めます。",
                },
                {
                  title: "前足部の設計",
                  desc: "足指の付け根部分に適度なクッション性を持たせ、歩行時の蹴り出しをサポート。長時間の歩行でも疲れにくい構造です。",
                },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h4 className="text-sm font-bold text-[#34d399] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 抗菌防臭 */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              抗菌防臭機能
            </h3>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                スリムアップインソールは、ダイエットサポート機能に加えて抗菌防臭機能も搭載しています。毎日使用するインソールだからこそ、衛生面への配慮は実用上重要なポイントです。
              </p>
            </div>
            <div className="card mt-4">
              <div className="space-y-3">
                {[
                  {
                    label: "抗菌加工",
                    desc: "表面素材に抗菌処理を施し、雑菌の繁殖を抑制。汗をかきやすい足元でも清潔に保てます。",
                  },
                  {
                    label: "防臭機能",
                    desc: "臭いの原因となる細菌の増殖を抑えることで、靴内の不快な臭いを軽減。ビジネスシーンでも安心して使用できます。",
                  },
                  {
                    label: "通気性素材",
                    desc: "通気性に配慮した素材を使用し、ムレを軽減。長時間の着用でも快適さが持続します。",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-[#34d399] shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <div>
                      <span className="text-sm font-bold text-gray-900">
                        {item.label}：
                      </span>
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card mt-6 border-l-4 border-l-[#34d399]">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">
                  スリムアップの強み：
                </span>
                特許技術こそ持ちませんが、整体師監修による実用的な設計と手頃な価格（2,178円〜）で、「まず試してみたい」という方にとって最も敷居の低い選択肢です。抗菌防臭機能の搭載も日常使用における実用性を高めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3商品の技術を比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3商品の技術を比較
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ここまで解説した3つのダイエットインソールの技術を、一覧表で比較してみましょう。それぞれ異なるアプローチで足裏からのダイエットサポートを実現しており、一概にどれが優れているとは言えません。自分の目的や重視するポイントに合った技術を選ぶことが大切です。
            </p>
          </div>

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium min-w-[100px]">
                    比較項目
                  </th>
                  <th className="text-left py-3 pr-4 font-medium text-[#e8627c] min-w-[140px]">
                    ピットソール
                  </th>
                  <th className="text-left py-3 pr-4 font-medium text-[#c9a76c] min-w-[140px]">
                    ランウェイキュアソール
                  </th>
                  <th className="text-left py-3 font-medium text-[#34d399] min-w-[140px]">
                    スリムアップインソール
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    技術タイプ
                  </td>
                  <td className="py-3 pr-4">
                    キュボイドバランス理論
                    <br />
                    CCLP理論
                  </td>
                  <td className="py-3 pr-4">3点アーチサポート</td>
                  <td className="py-3">整体師監修設計</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    特許状況
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs bg-[#e8627c]/10 text-[#e8627c] px-2 py-0.5 rounded font-medium">
                      世界特許取得
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                      独自設計
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                      監修設計
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    メカニズム
                  </td>
                  <td className="py-3 pr-4">
                    立方骨＋踵骨前部を同時サポートし足の機能を回復
                  </td>
                  <td className="py-3 pr-4">
                    3つのアーチを同時にサポートし姿勢全体を改善
                  </td>
                  <td className="py-3">
                    傾斜設計で体重分散を最適化し筋肉を刺激
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    ターゲット部位
                  </td>
                  <td className="py-3 pr-4">
                    立方骨・踵骨前部（足の外側）
                  </td>
                  <td className="py-3 pr-4">
                    足裏3アーチの頂点（足裏全体）
                  </td>
                  <td className="py-3">
                    土踏まず・かかと（足裏内側中心）
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    エビデンス
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-medium">
                      大学共同研究あり
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                      整体理論に基づく
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                      整体師の臨床経験
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    価格帯
                  </td>
                  <td className="py-3 pr-4">6,578円〜</td>
                  <td className="py-3 pr-4">4,378円〜</td>
                  <td className="py-3">2,178円〜</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    おすすめの方
                  </td>
                  <td className="py-3 pr-4">
                    科学的根拠と実績を最重視する方
                  </td>
                  <td className="py-3 pr-4">
                    姿勢改善・美姿勢を重視する方
                  </td>
                  <td className="py-3">
                    手頃に試したい・初めての方
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card mt-6 border-l-4 border-l-emerald-500">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                ソールラボの見解：
              </span>
              技術的な独自性とエビデンスの充実度ではピットソールが頭一つ抜けています。一方、ランウェイキュアソールの3点アーチサポートは足裏全体をカバーする実用的なアプローチで、姿勢改善を実感しやすい設計です。スリムアップインソールは技術的な独自性では劣るものの、価格の手頃さと実用的な設計で入門用として優れた選択肢です。
            </p>
          </div>
        </div>
      </section>

      {/* 特許技術でインソールを選ぶポイント */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            特許技術でインソールを選ぶポイント
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              特許技術はインソール選びの重要な判断材料の一つですが、それだけで決めるのは早計です。以下の5つのポイントを総合的に考慮して、自分に最適なインソールを選びましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "技術の具体性を確認する",
                desc: "「特許技術搭載」という文言だけでなく、具体的にどの部位をどのようにサポートする技術なのかを確認しましょう。キュボイドバランスのように具体的な理論名や特許番号が公開されている製品は信頼性が高いです。",
              },
              {
                num: "02",
                title: "エビデンスの有無を確認する",
                desc: "特許は技術の独自性を証明するものであり、効果を直接保証するものではありません。大学研究機関との共同研究や、第三者機関による検証データがある製品はより信頼できます。",
              },
              {
                num: "03",
                title: "自分の目的と照らし合わせる",
                desc: "ダイエット効率を高めたいのか、姿勢を改善したいのか、足の疲れを軽減したいのか。自分の目的に合った技術アプローチの製品を選ぶことが、満足度を左右します。",
              },
              {
                num: "04",
                title: "価格と技術のバランスを考える",
                desc: "高度な特許技術を搭載した製品は当然価格も高くなります。初めてダイエットインソールを試す方は、まず手頃な価格の製品から始めて、効果を実感できたらより高機能な製品にステップアップするのも一つの方法です。",
              },
              {
                num: "05",
                title: "口コミと実績を参考にする",
                desc: "技術的に優れていても、実際の使用感は個人差があります。累計販売数や口コミ評価、リピート率なども参考にして、多くのユーザーに支持されている製品を選ぶと失敗が少なくなります。",
              },
            ].map((item) => (
              <div key={item.num} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-emerald-600 shrink-0">
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

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d4526c] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              技術で選ぶダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2">
                  <span className="flex items-start gap-2">
                    <span className="text-emerald-600 shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-emerald-600 font-bold">A.</span>{" "}
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ダイエットインソールの特許技術を理解することは、製品選びで失敗しないための重要なステップです。BMZ社のキュボイドバランス理論・CCLP理論は、従来の土踏まずサポートとは異なる「立方骨」という新しい着眼点を持ち、世界特許を取得するほどの独自性があります。
            </p>
            <p>
              ランウェイキュアソールの3点アーチサポートは、足裏全体のバランスを整える実用的なアプローチで、特に美姿勢を重視する方に適しています。スリムアップインソールは特許こそないものの、整体師の臨床経験を活かした実用的な設計と手頃な価格で、初めての方にも試しやすい選択肢です。
            </p>
            <p>
              どの技術アプローチが最適かは、あなたの目的・予算・重視するポイントによって異なります。この記事で解説した各製品の技術的な特徴を参考に、自分に合ったダイエットインソールを選んでください。
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d4526c] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
            >
              おすすめインソールランキングを見る
            </Link>
            <Link
              href="/articles/how-to-choose/"
              className="inline-block bg-white hover:bg-gray-50 text-emerald-600 border border-emerald-600 font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
            >
              インソールの選び方ガイドを読む
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/insole-truth/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ダイエットインソールは嘘？効果の科学的根拠を検証
              </p>
            </Link>
            <Link
              href="/articles/how-to-choose/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ダイエットインソールの選び方5つのポイント【失敗しない】
              </p>
            </Link>
            <Link
              href="/articles/insole-care/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                インソールのお手入れ方法と長持ちさせるコツ
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
          </div>
        </div>
      </section>
    </>
  );
}
