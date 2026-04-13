import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ダイエットインソールの選び方5つのポイント【失敗しない】",
  description:
    "ダイエットインソールの選び方を5つのポイントで徹底解説。サイズ・アーチサポート・靴との相性・価格・口コミの観点から、失敗しないインソール選びをサポートします。タイプ別おすすめや購入前チェックリストも掲載。",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダイエットインソールの選び方5つのポイント【失敗しない】",
  description:
    "ダイエットインソールの選び方を5つのポイントで徹底解説。サイズ・アーチサポート・靴との相性・価格・口コミの観点から失敗しない選び方を紹介。",
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
    question: "ダイエットインソールは本当に効果がありますか？",
    answer:
      "ダイエットインソールは、足裏のアーチをサポートし正しい姿勢・歩行を促すことで、普段使われにくい筋肉を活性化させるサポートアイテムです。装着するだけで劇的に痩せるものではありませんが、継続的に使用することで歩行時の消費カロリー向上や姿勢改善が期待できます。",
  },
  {
    question: "どのサイズを選べばいいですか？",
    answer:
      "基本的には普段履いている靴のサイズに合わせて選びます。多くの製品はS・M・Lなどのサイズ展開で、カットラインに沿ってハサミで微調整できます。迷ったら大きめを選んでカットするのが失敗しにくいコツです。",
  },
  {
    question: "スニーカー以外の靴にも使えますか？",
    answer:
      "製品によります。ランウェイキュアソールのような薄型設計のものはパンプスやローファーにも対応可能です。一方、アーチサポートが厚めの製品はスニーカーやウォーキングシューズ向けです。靴のタイプに合わせて選ぶことが大切です。",
  },
  {
    question: "インソールの寿命はどれくらいですか？",
    answer:
      "一般的に3〜6ヶ月が交換目安です。毎日使用すると素材のヘタリが早まるため、2足分用意してローテーションすると長持ちします。アーチサポートのクッション性が明らかに低下したら交換のサインです。",
  },
  {
    question: "安いインソールと高いインソールの違いは何ですか？",
    answer:
      "安価な製品は主にクッション性のみに特化しているのに対し、高品質な製品はアーチサポート設計・特許技術・人間工学に基づく構造など、姿勢や歩行の質を改善する機能が備わっています。長期的な効果を求めるなら、構造にこだわった製品を選ぶのがおすすめです。",
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

export default function HowToChoosePage() {
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-sky-600 font-medium mb-2">
            ダイエットコラム
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ダイエットインソールの選び方
            <br />
            <span className="text-sky-600">5つのポイント</span>
            【失敗しない】
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「種類が多すぎてどれを選べばいいかわからない」「買ったけど合わなかった」そんな失敗を防ぐために、ダイエットインソール選びで押さえるべき5つのポイントを徹底解説します。自分にぴったりの1足を見つけましょう。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-medium">
              ダイエットインソール
            </span>
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-medium">
              選び方
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 失敗する人の共通点 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール選びで失敗する人の共通点
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ダイエットインソールはここ数年で種類が急増し、価格帯も1,000円台から10,000円超までさまざまです。ECサイトで「ダイエットインソール」と検索すれば数百件がヒットする状況で、選択肢が多い分、選び方を間違えて「思っていたのと違う」と後悔するケースも少なくありません。
            </p>
            <p>
              当サイトに寄せられる相談でも「買ったけど足に合わなかった」「期待していた効果を感じられなかった」という声が多く見られます。こうした失敗の多くは、購入前のリサーチ不足が原因です。
            </p>
            <p>
              失敗する方に共通するのは、以下のようなパターンです。
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {[
              {
                title: "値段だけで選んでしまう",
                desc: "「安ければお得」と価格だけで選ぶと、ただのクッション材のような製品を掴んでしまいがちです。逆に「高ければ良い」わけでもなく、自分の足と靴に合うかどうかが最も重要です。",
              },
              {
                title: "サイズ確認を怠る",
                desc: "フリーサイズだから大丈夫だろうと確認せずに購入し、靴の中でズレたり窮屈になったりするケースが多発しています。足のサイズだけでなく、靴の中の余裕スペースも考慮する必要があります。",
              },
              {
                title: "自分の靴タイプを考慮しない",
                desc: "スニーカー向けの厚みのあるインソールをパンプスに入れようとしたり、ヒール用の薄型をスニーカーに使ったり。靴との相性を無視すると、本来の機能を発揮できません。",
              },
              {
                title: "口コミを確認しない",
                desc: "公式サイトの情報だけで判断してしまい、実際の使用感やデメリットを見落とすパターンです。口コミには公式では分からないリアルな使用感が含まれています。",
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

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              これらの失敗を避けるために、次のセクションで紹介する「選び方5つのポイント」をしっかり押さえておきましょう。正しい基準を知っていれば、自分にぴったりのインソールを見つけるのは難しくありません。ダイエットインソールは正しく選べば日常生活の中で無理なく体づくりをサポートしてくれる優秀なアイテムです。最初の選び方さえ間違えなければ、長く快適に使い続けることができます。
            </p>
          </div>
        </div>
      </section>

      {/* 選び方5つのポイント */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            失敗しない選び方5つのポイント
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ダイエットインソールを選ぶ際にチェックすべき5つのポイントを、優先度の高い順に解説します。すべてを満たす製品が理想ですが、最低でも上位3つは必ず確認しましょう。
            </p>
            <p>
              これらのポイントは、実際にインソール選びで成功した方・失敗した方の声をもとにまとめたものです。購入前にこの5つを意識するだけで、満足度は大きく変わります。
            </p>
          </div>

          <div className="space-y-6">
            {/* ポイント1: サイズ */}
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-sky-600 shrink-0">
                  01
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                    サイズが自分の足と靴に合っているか
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      最も重要なのがサイズです。どんなに高機能なインソールでも、サイズが合わなければ効果を発揮できないどころか、足のトラブルの原因になりかねません。
                    </p>
                    <p>
                      多くのダイエットインソールはS/M/Lなどのサイズ展開で、カットラインに沿ってハサミで調整できる仕様です。購入前に以下を確認しましょう。
                    </p>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        自分の足のサイズ（cm）が対応サイズ範囲に含まれているか
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        使いたい靴の中敷きを外してインソールが収まるスペースがあるか
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        甲が低めの靴の場合、インソールの厚みで窮屈にならないか
                      </li>
                    </ul>
                    <p>
                      迷ったときは大きめサイズを選んでカットして調整するのが鉄則です。小さいものを大きくすることはできません。なお、足のサイズは左右で異なることも珍しくないため、両足を計測して大きい方に合わせるのがポイントです。
                    </p>
                    <p>
                      また、立った状態で計測することも重要です。体重がかかると足は数mm広がるため、座った状態で計測したサイズでは実際の使用感と異なる場合があります。靴専門店で正確に計測してもらうのも良い方法です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ポイント2: アーチサポート */}
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-sky-600 shrink-0">
                  02
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                    アーチサポートの構造と品質
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      ダイエットインソールの核心がアーチサポートです。足裏には「内側縦アーチ」「外側縦アーチ」「横アーチ」の3つのアーチがあり、これらが正しく機能することで体重の分散・衝撃吸収・推進力の伝達が効率的に行われます。
                    </p>
                    <p>
                      アーチサポートが優れたインソールを使うことで、崩れたアーチが本来の位置に補整され、正しい姿勢での歩行が可能になります。結果として、普段使われにくい筋肉が活性化し、同じ歩数でも消費カロリーが高まる効果が期待できます。
                    </p>
                    <p>
                      チェックすべきポイントは以下の通りです。
                    </p>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        3つのアーチ（内側縦・外側縦・横）すべてをサポートしているか
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        特許取得など、科学的根拠のある設計かどうか
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        硬すぎず柔らかすぎない、適度な弾力があるか
                      </li>
                    </ul>
                    <p>
                      単にクッションが厚いだけの製品と、アーチ構造を計算した製品では、歩行への影響がまったく異なります。特にピットソールのような世界特許技術を持つ製品は、足の立方骨（キュボイド）を支点にアーチを補整する独自設計を採用しており、この点で大きなアドバンテージがあります。
                    </p>
                    <p>
                      アーチサポートが適切に機能すると、体重が足裏全体に均等に分散されるため、長時間歩いても疲れにくくなります。さらに、骨盤や背骨のアライメントも整い、普段使われにくいインナーマッスルが自然と活性化されます。これがダイエットインソールの効果の根幹です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ポイント3: 靴との相性 */}
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-sky-600 shrink-0">
                  03
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                    普段履く靴との相性
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      どんなに優れたインソールでも、自分が毎日履く靴に合わなければ意味がありません。靴のタイプによって最適なインソールの厚み・形状は異なります。
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="py-2 text-left text-gray-500 font-medium">
                              靴のタイプ
                            </th>
                            <th className="py-2 text-left text-gray-500 font-medium">
                              適したインソール
                            </th>
                            <th className="py-2 text-left text-gray-500 font-medium">
                              注意点
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">スニーカー</td>
                            <td className="py-2 text-gray-900">標準〜厚めタイプ</td>
                            <td className="py-2 text-gray-600">元の中敷きと入れ替えが基本</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">パンプス・ローファー</td>
                            <td className="py-2 text-gray-900">薄型タイプ</td>
                            <td className="py-2 text-gray-600">厚みがあると足が入らない</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">ブーツ</td>
                            <td className="py-2 text-gray-900">標準タイプ</td>
                            <td className="py-2 text-gray-600">筒の太さとの兼ね合いを確認</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">ビジネスシューズ</td>
                            <td className="py-2 text-gray-900">薄型〜標準タイプ</td>
                            <td className="py-2 text-gray-600">見た目に影響しないか確認</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      毎日違う靴を履く方は、複数のインソールを用意するか、幅広い靴に対応できる薄型設計の製品を選ぶのがおすすめです。通勤用と休日用で使い分けるのも賢い方法です。
                    </p>
                    <p>
                      インソールを入れる際は、靴に元々付いている中敷きを取り外してから入れるのが基本です。中敷きの上にインソールを重ねると、靴の中が窮屈になったり、インソールがずれやすくなったりします。元の中敷きが接着されている靴の場合は、その上から使える薄型タイプを選びましょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ポイント4: 価格と続けやすさ */}
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-sky-600 shrink-0">
                  04
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                    価格と続けやすさ
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      ダイエットインソールは消耗品です。3〜6ヶ月ごとに交換が必要なため、1回の購入価格だけでなく、年間のランニングコストまで考慮することが大切です。
                    </p>
                    <p>
                      主要製品の価格帯を整理すると、おおむね以下のようになります。
                    </p>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        エントリー価格帯（2,000〜3,000円）：気軽に試せるが機能は限定的
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        ミドル価格帯（4,000〜5,000円）：機能と価格のバランスが良い
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        プレミアム価格帯（6,000円〜）：特許技術・高品質素材を採用
                      </li>
                    </ul>
                    <p>
                      まとめ買い割引や定期便がある製品なら、1足あたりのコストを大幅に抑えられます。例えば、3足セットで購入すると1足あたり月額1,000〜2,000円程度に収まる製品も多くあります。続けられなければ意味がないので、無理のない予算で選びましょう。
                    </p>
                    <p>
                      また、購入先によっても価格が異なります。公式サイト・Amazon・楽天などで同じ製品が販売されていることも多いため、最安値を比較してから購入するのが賢明です。公式サイト限定のセット割引やキャンペーンが適用される場合もあるので、各販売チャネルを一通りチェックすることをおすすめします。
                    </p>
                    <p>
                      「安物買いの銭失い」を避けつつ、継続可能な価格帯を選ぶこと。これがダイエットインソール選びにおけるコストの考え方の基本です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ポイント5: 口コミ・実績 */}
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-sky-600 shrink-0">
                  05
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                    口コミ・実績を確認する
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      最後のチェックポイントは、実際に使った人の声と製品の実績です。公式サイトの情報はどうしてもメリットが強調されがちなので、第三者の口コミで「リアルな使用感」を確認しましょう。
                    </p>
                    <p>
                      口コミをチェックするときのコツは以下の通りです。
                    </p>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        良い口コミと悪い口コミの両方をバランスよく読む
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        自分と似た体型・用途の方のレビューを重視する
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        累計販売数・リピート率・メディア掲載実績なども参考にする
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 shrink-0 mt-0.5">&#10003;</span>
                        購入後1ヶ月以上使った長期レビューを探す
                      </li>
                    </ul>
                    <p>
                      累計販売数が多い製品は、それだけ多くの人に支持されている証拠です。また、大学や研究機関との共同研究の実績がある製品は、科学的な裏付けがある点で信頼性が高いと言えます。
                    </p>
                    <p>
                      当サイトでは各製品の口コミを詳しく分析していますので、ぜひ参考にしてください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* タイプ別おすすめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            タイプ別おすすめダイエットインソール
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              5つのポイントを踏まえて、タイプ別におすすめのダイエットインソールを紹介します。自分の目的や優先事項に合った製品を選びましょう。
            </p>
            <p>
              当サイトでは主要3製品を実際に購入し、構造・使用感・コストパフォーマンスを詳しく検証しています。それぞれに明確な強みがあるため、「どれが一番いいか」ではなく「自分にはどれが合うか」という視点で選ぶことが大切です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="card border-l-4 border-l-sky-500">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                効果・実績重視なら：ピットソール
              </h3>
              <ul className="space-y-1 mb-3">
                {[
                  "世界特許取得のキュボイドサポート技術",
                  "累計200万足突破の圧倒的な販売実績",
                  "3つのアーチを同時にサポートする独自構造",
                  "大学との共同研究で効果を検証",
                ].map((point) => (
                  <li
                    key={point}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-sky-500 shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 text-sm mb-3">
                <span className="text-gray-500">
                  価格：<span className="text-gray-900 font-medium">6,578円（税込）〜</span>
                </span>
                <span className="text-gray-500">
                  おすすめ：<span className="text-gray-900 font-medium">しっかり結果を出したい方</span>
                </span>
              </div>
              <Link
                href="/pitsole/"
                className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors"
              >
                ピットソールの詳細を見る &rarr;
              </Link>
            </div>

            <div className="card border-l-4 border-l-purple-500">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                姿勢改善も重視なら：ランウェイキュアソール
              </h3>
              <ul className="space-y-1 mb-3">
                {[
                  "整体師監修の骨盤補整設計",
                  "薄型でパンプスやローファーにも対応",
                  "美姿勢サポートに特化した設計",
                  "靴を選ばない汎用性の高さ",
                ].map((point) => (
                  <li
                    key={point}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-purple-500 shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 text-sm mb-3">
                <span className="text-gray-500">
                  価格：<span className="text-gray-900 font-medium">4,378円（税込）〜</span>
                </span>
                <span className="text-gray-500">
                  おすすめ：<span className="text-gray-900 font-medium">おしゃれな靴でも使いたい方</span>
                </span>
              </div>
              <Link
                href="/runway-cure-sole/"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
              >
                ランウェイキュアソールの詳細を見る &rarr;
              </Link>
            </div>

            <div className="card border-l-4 border-l-emerald-500">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                コスパ重視・初めてなら：スリムアップインソール
              </h3>
              <ul className="space-y-1 mb-3">
                {[
                  "2,178円〜の手頃な価格設定",
                  "初めてのダイエットインソールに最適",
                  "傾斜設計で自然と筋肉を刺激",
                  "男女兼用の豊富なサイズ展開",
                ].map((point) => (
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
              <div className="flex flex-wrap gap-3 text-sm mb-3">
                <span className="text-gray-500">
                  価格：<span className="text-gray-900 font-medium">2,178円（税込）〜</span>
                </span>
                <span className="text-gray-500">
                  おすすめ：<span className="text-gray-900 font-medium">まずは気軽に試したい方</span>
                </span>
              </div>
              <Link
                href="/slim-up-insole/"
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
              >
                スリムアップインソールの詳細を見る &rarr;
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ダイエットインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 購入前チェックリスト */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            購入前チェックリスト
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ダイエットインソールを購入する前に、以下の項目を最終確認しましょう。すべてにチェックが入れば、失敗のリスクは大幅に減らせます。
            </p>
          </div>

          <div className="card">
            <div className="space-y-4">
              {[
                {
                  category: "サイズ",
                  items: [
                    "自分の足のサイズを正確に計測した",
                    "対応サイズ範囲に自分の足が含まれている",
                    "使いたい靴にインソールが収まるか確認した",
                  ],
                },
                {
                  category: "機能",
                  items: [
                    "アーチサポートの構造を確認した",
                    "特許や科学的根拠があるか調べた",
                    "素材の品質やクッション性を確認した",
                  ],
                },
                {
                  category: "相性",
                  items: [
                    "自分が毎日履く靴のタイプに合っている",
                    "インソールの厚みが靴に対して適切か確認した",
                  ],
                },
                {
                  category: "コスト",
                  items: [
                    "まとめ買い割引や定期購入の有無を調べた",
                    "月額換算のランニングコストを計算した",
                  ],
                },
                {
                  category: "評判",
                  items: [
                    "口コミで良い点・悪い点の両方を確認した",
                    "自分と似た条件の方のレビューを読んだ",
                  ],
                },
              ].map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-bold text-sky-600 mb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="w-4 h-4 border-2 border-gray-300 rounded shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-8">
            <p>
              特に初めてダイエットインソールを購入する方は、このチェックリストを活用して慎重に選んでください。不安が残る場合は、返品保証のある製品を選ぶと安心です。チェック項目が多く感じるかもしれませんが、一度しっかり確認しておけば2回目以降の購入はスムーズになります。自分の足と靴の特徴を把握しておくことは、インソール選びだけでなく靴選び全般にも役立つ知識です。
            </p>
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
                    <span className="text-sky-600 shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-sky-600 font-bold">A.</span>{" "}
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
              ダイエットインソール選びで最も大切なのは、「自分の足・靴・目的に合った製品を選ぶこと」です。価格やブランド名だけで決めるのではなく、今回紹介した5つのポイント（サイズ・アーチサポート・靴との相性・価格と続けやすさ・口コミと実績）を基準に比較検討しましょう。
            </p>
            <p>
              効果と実績を最重視するならピットソール、姿勢改善や靴の汎用性を求めるならランウェイキュアソール、コスパ重視で気軽に始めたいならスリムアップインソールがおすすめです。
            </p>
            <p>
              正しい選び方で自分にぴったりのインソールを見つけて、快適なダイエットライフをスタートさせましょう。迷ったら当サイトのランキングページも参考にしてみてください。
            </p>
            <p>
              ダイエットインソールは「入れて歩くだけ」という手軽さが最大の魅力です。ジム通いや食事制限のように強い意志力を必要としないため、これまでダイエットが続かなかった方にこそ試していただきたいアイテムです。正しい1足を選んで、毎日の歩行を味方につけましょう。
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ranking/"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
            >
              ダイエットインソールランキングを見る
            </Link>
            <Link
              href="/compare/"
              className="inline-block bg-white hover:bg-gray-100 text-gray-700 font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base border border-gray-300 text-center"
            >
              3製品を徹底比較する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
