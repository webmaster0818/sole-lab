import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "歩くだけダイエットは本当に効果ある？インソールで効率UP",
  description:
    "歩くだけダイエットの効果を科学的根拠とともに解説。正しい歩き方・時間・頻度から、インソールで消費カロリーを最大化する方法まで。おすすめダイエットインソールも紹介。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/walking-diet/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "歩くだけダイエットは本当に効果ある？インソールで効率UP",
  description:
    "歩くだけダイエットの効果を科学的根拠とともに解説。正しい歩き方・時間・頻度から、インソールで消費カロリーを最大化する方法まで。",
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
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
};

const faqs = [
  {
    question: "歩くだけダイエットはどれくらいで効果が出ますか？",
    answer:
      "個人差がありますが、正しいフォームで1日30分以上のウォーキングを継続した場合、2〜3ヶ月目あたりから体重や体脂肪率の変化を実感する方が多いです。食事管理を併用するとさらに早く結果が出やすくなります。",
  },
  {
    question: "歩くだけで本当にお腹の脂肪は落ちますか？",
    answer:
      "ウォーキングは有酸素運動のため、継続することで体全体の体脂肪が減少します。お腹周りだけを部分的に落とすことはできませんが、全身の脂肪燃焼の結果としてお腹周りも徐々にスッキリしていきます。",
  },
  {
    question: "雨の日はどうすればいいですか？",
    answer:
      "ショッピングモールや地下街でのウォーキング、自宅での踏み台昇降、階段の上り下りなどで代替できます。大切なのは継続することなので、天候に左右されない代替プランを用意しておきましょう。",
  },
  {
    question: "インソールを入れるだけで痩せますか？",
    answer:
      "インソールを入れるだけで劇的に体重が減ることはありません。インソールは足裏アーチをサポートし、正しい姿勢・歩行を促すことで普段使われにくい筋肉を活性化させるサポートアイテムです。ウォーキングや日常の活動と組み合わせることで効果を発揮します。",
  },
  {
    question: "ウォーキングとジョギングではどちらがダイエットに効果的ですか？",
    answer:
      "短時間での消費カロリーはジョギングが上ですが、ウォーキングは膝や腰への負担が少なく長時間・長期間続けやすいメリットがあります。ダイエットは継続が最も重要なため、無理なく続けられるウォーキングのほうが結果的に成功率が高いという研究もあります。",
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

export default function WalkingDietPage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "歩くだけダイエット" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-emerald-600 font-medium mb-2">
            ダイエットコラム
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            歩くだけダイエットは本当に効果ある？
            <br />
            <span className="text-emerald-600">インソール</span>
            で効率UP
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「歩くだけで痩せるなんて本当？」そんな疑問に科学的根拠をもとにお答えします。正しいウォーキング方法から、インソールを活用して消費カロリーを最大化するテクニックまで徹底解説。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              歩くだけダイエット
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              インソール効果
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 歩くだけダイエットとは？ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            歩くだけダイエットとは？
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              歩くだけダイエットとは、特別な運動器具やジム通いをせず、日常のウォーキングを意識的に行うことで体重減少を目指すダイエット法です。激しい運動が苦手な方や、忙しくてまとまった運動時間が取れない方に特に人気があります。
            </p>
            <p>
              通勤・買い物・散歩など、誰もが日常的に行う「歩く」という動作を最大限に活用するため、始めるハードルが非常に低いのが最大の特徴です。特別な準備も費用もほとんど必要ありません。
            </p>
            <p>
              ただし、「歩くだけで簡単に痩せる」というイメージが先行しがちですが、実際には正しい知識と継続が不可欠です。闇雲に歩くのではなく、フォーム・時間・頻度を意識することで初めてダイエット効果が期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* 科学的根拠 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            歩くだけで本当に痩せる？科学的根拠
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              結論から言えば、ウォーキングにはダイエット効果があります。ウォーキングは代表的な有酸素運動であり、脂肪をエネルギー源として消費する運動です。
            </p>
            <p>
              厚生労働省の「健康づくりのための身体活動基準2023」では、成人に対して1日60分以上（約8,000歩相当）の歩行を含む身体活動を推奨しています。適度なウォーキングの継続が、肥満予防や生活習慣病リスクの低減に寄与することは多くの研究で示されています。
            </p>
          </div>

          <div className="card mt-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              ウォーキングの消費カロリー目安（体重60kgの場合）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      時間
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      通常歩行（4km/h）
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      早歩き（6km/h）
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-900">20分</td>
                    <td className="py-2 text-gray-900">約63kcal</td>
                    <td className="py-2 text-gray-900 font-medium">
                      約105kcal
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-900">30分</td>
                    <td className="py-2 text-gray-900">約95kcal</td>
                    <td className="py-2 text-gray-900 font-medium">
                      約158kcal
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-900">60分</td>
                    <td className="py-2 text-gray-900">約189kcal</td>
                    <td className="py-2 text-gray-900 font-medium">
                      約315kcal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              ※ METs法による概算値。個人の体格・歩き方により変動します。
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              脂肪1kgを燃焼させるには約7,200kcalの消費が必要です。毎日30分の早歩きウォーキングを続ければ、月に約4,740kcal（約0.66kgの脂肪に相当）を追加で消費できる計算になります。食事を変えなくても、半年で約4kgの減量が理論上可能です。
            </p>
            <p>
              また、ウォーキングは脂肪燃焼だけでなく、基礎代謝の維持・向上にも寄与します。筋肉量を適度に保つことで、安静時のカロリー消費も高まり、太りにくい体質づくりにつながります。
            </p>
          </div>
        </div>
      </section>

      {/* 正しいやり方 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            歩くだけダイエットの正しいやり方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              効果を最大化するには、ただ漫然と歩くのではなく、いくつかのポイントを意識することが重要です。以下の5つのポイントを押さえましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "正しい姿勢を保つ",
                desc: "背筋を伸ばし、顎を引いて目線はやや前方に。猫背のまま歩くと効果が半減するだけでなく、腰痛の原因にもなります。骨盤を軽く前傾させるイメージで立つと、自然と良い姿勢になります。",
              },
              {
                num: "02",
                title: "やや大股で早歩きを意識",
                desc: "通常の歩幅より拳1つ分大きく踏み出し、時速5〜6kmのペースを意識しましょう。心拍数が「少し息が上がるが会話できる」程度が脂肪燃焼に最適な強度です。",
              },
              {
                num: "03",
                title: "かかとから着地し、つま先で蹴り出す",
                desc: "かかとから着地して足裏全体で体重を受け止め、最後につま先で蹴り出します。この「ローリング歩行」が足裏の筋肉をしっかり使い、下半身全体の筋肉を効率よく動かします。",
              },
              {
                num: "04",
                title: "1日30分以上を週5日以上",
                desc: "脂肪燃焼が活発になるのは運動開始20分以降と言われています。まずは30分の連続歩行を目標にしましょう。まとめて時間が取れない場合は、15分×2回に分けてもOKです。",
              },
              {
                num: "05",
                title: "腕を大きく振る",
                desc: "肘を90度に曲げ、前後に大きく腕を振ることで上半身の筋肉も動員されます。消費カロリーが約10〜15%アップするだけでなく、全身のバランスも良くなります。",
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
        </div>
      </section>

      {/* インソールで効果最大化 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールで歩くだけダイエットの効果を最大化
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              歩くだけダイエットの効果をさらに高めるアイテムとして注目されているのが、ダイエットインソール（機能性中敷き）です。なぜインソールがダイエットに役立つのか、その仕組みを解説します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "足裏アーチのサポート",
                desc: "足裏には縦アーチと横アーチがあり、これが崩れると歩行効率が低下します。ダイエットインソールはアーチを正しい位置で支え、足本来の機能を回復させます。結果として1歩あたりの筋肉の使用量が増加し、同じ距離を歩いても消費カロリーが高まります。",
              },
              {
                title: "姿勢・骨盤の補整",
                desc: "足裏のバランスが整うと、膝・骨盤・背骨のアライメントも自然と改善されます。正しい姿勢で歩くことで、体幹の筋肉（インナーマッスル）が活性化し、基礎代謝の向上にもつながります。猫背や反り腰の改善効果も期待できます。",
              },
              {
                title: "疲労軽減で長時間歩ける",
                desc: "クッション性のあるインソールは足裏への衝撃を吸収し、疲労を軽減します。足が疲れにくくなることで、より長い時間・長い距離のウォーキングが可能になり、トータルの消費カロリーが増加します。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              特に、世界特許技術を採用したインソールは、足の立方骨（キュボイド）を支点にアーチを補整する独自設計により、従来のインソールよりも効果的に筋肉を活性化させます。「入れて歩くだけ」で正しい歩行フォームに近づけるため、フォームを意識するのが苦手な方にもおすすめです。
            </p>
            <p>
              大学との共同研究では、機能性インソールの使用により、通常歩行時と比較して下肢の筋活動量が有意に増加したとする報告もあります。つまり、同じ歩数・同じ時間歩いても、インソールを使うことでより多くのカロリーを消費できる可能性があるのです。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめインソール3選 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            おすすめダイエットインソール3選
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              歩くだけダイエットと相性の良い、人気のダイエットインソールを3つ厳選してご紹介します。それぞれの特徴を比較して、自分に合ったものを選びましょう。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                rank: "1",
                name: "ピットソール（Pitsole）",
                points: [
                  "世界特許取得のキュボイドサポート技術",
                  "累計200万足突破の実績",
                  "足裏の3つのアーチを同時にサポート",
                ],
                price: "6,578円（税込）〜",
                best: "科学的根拠と実績重視の方",
              },
              {
                rank: "2",
                name: "ランウェイキュアソール",
                points: [
                  "整体師監修の骨盤補整設計",
                  "美姿勢サポートに特化",
                  "ヒール靴にも対応する薄型設計",
                ],
                price: "4,378円（税込）〜",
                best: "姿勢改善も同時に目指す方",
              },
              {
                rank: "3",
                name: "スリムアップインソール",
                points: [
                  "手頃な価格で始めやすい",
                  "傾斜設計で自然と筋肉を刺激",
                  "男女兼用の豊富なサイズ展開",
                ],
                price: "2,178円（税込）〜",
                best: "コスパ重視で気軽に試したい方",
              },
            ].map((item) => (
              <div key={item.rank} className="card">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-emerald-600 shrink-0">
                    {item.rank}位
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <ul className="space-y-1 mb-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-emerald-500 shrink-0 mt-0.5">
                            &#10003;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500">
                        価格：
                        <span className="text-gray-900 font-medium">
                          {item.price}
                        </span>
                      </span>
                      <span className="text-gray-500">
                        おすすめ：
                        <span className="text-gray-900 font-medium">
                          {item.best}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            歩くだけダイエットの注意点
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "食事管理なしでは効果が限定的",
                desc: "ウォーキング30分の消費カロリーは約100〜160kcal程度。おにぎり1個分ほどです。「歩いたからたくさん食べていい」と思ってしまうと、消費分を簡単に上回ってしまいます。食事内容は現状維持か、少し控えめを心がけましょう。",
              },
              {
                title: "即効性はない",
                desc: "歩くだけダイエットは、劇的な短期間での変化は期待できません。最低2〜3ヶ月の継続が必要です。体重の変化が現れる前に、疲れにくさや睡眠の質向上など体調面の変化を感じることが多いので、体重だけにとらわれないことが大切です。",
              },
              {
                title: "靴選びを怠らない",
                desc: "合わない靴で長時間歩くと、膝や腰を痛める原因になります。クッション性があり、足にフィットするウォーキングシューズを選びましょう。ダイエットインソールとの併用で、さらに歩行の質を高められます。",
              },
              {
                title: "無理な距離・ペースで始めない",
                desc: "運動習慣のない方がいきなり1時間以上のウォーキングを始めると、関節を痛めたり筋肉痛で挫折する原因になります。最初は15〜20分から始め、2週間ごとに5分ずつ延ばしていくのがおすすめです。",
              },
              {
                title: "水分補給を忘れずに",
                desc: "ウォーキング中も発汗によって水分が失われます。特に夏場は脱水のリスクがあるため、出発前にコップ1杯の水を飲み、30分以上歩く場合は途中でも水分を補給しましょう。",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
              歩くだけダイエットは、正しいフォームと適切な時間・頻度を守れば、科学的に効果が認められた有効なダイエット法です。即効性はないものの、体への負担が少なく継続しやすいため、長期的なダイエット成功率は高い方法と言えます。
            </p>
            <p>
              さらに、ダイエットインソールを活用することで、足裏アーチのサポートによる筋肉活性化、姿勢改善、疲労軽減といった複数のメリットが加わり、同じウォーキングでもより高いダイエット効果が期待できます。
            </p>
            <p>
              まずは毎日30分のウォーキングから始めて、慣れてきたらインソールを取り入れてみてはいかがでしょうか。小さな一歩の積み重ねが、理想の体型への最短ルートです。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>
      {/* 関連記事 */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/articles/posture-correction/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">猫背を改善するインソールの選び方【姿勢矯正ガイド】</p>
            </Link>
            <Link href="/articles/leg-slimming/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">脚痩せしたい人のインソール選び完全ガイド</p>
            </Link>
            <Link href="/articles/insole-truth/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールは嘘？効果の科学的根拠を検証</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-[#e8627c] rounded-xl hover:bg-[#fdf2f4] transition-colors bg-[#fdf2f4]/50">
              <p className="text-sm font-semibold text-[#e8627c]">おすすめダイエットインソール3選を見る →</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
