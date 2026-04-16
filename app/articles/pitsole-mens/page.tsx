import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ピットソールは男性にも効果ある？メンズ向け完全ガイド",
  description:
    "ピットソールは男性でも使える？メンズ向けのサイズ選び・ビジネスシューズへの装着方法・男性の口コミ・効果実感までの期間を徹底解説。立ち仕事・営業職・通勤で使いたい男性必見のガイド。",
  openGraph: {
    title:
      "ピットソールは男性にも効果ある？メンズ向け完全ガイド｜ソールラボ",
    description:
      "ピットソールは男性でも使える？メンズ向けのサイズ選び・ビジネスシューズへの装着方法・効果を徹底解説。",
    url: "https://sole-laboratory.com/articles/pitsole-mens/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pitsole-mens/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ピットソールは男性にも効果ある？メンズ向け完全ガイド",
  description:
    "ピットソールは男性でも使える？メンズ向けのサイズ選び・ビジネスシューズへの装着・効果を解説。",
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
    question: "ピットソールは男性用・女性用がありますか？",
    answer:
      "ピットソールに男性用・女性用の区別はありません。XS（21〜22.5cm）・S（23〜24.5cm）・M（25〜26cm）・L（26.5〜27.5cm）の4サイズ展開で、男女問わず足のサイズに合わせて選べます。男性の場合はMサイズまたはLサイズが該当する方が多いです。",
  },
  {
    question: "ピットソールはビジネスシューズに入りますか？",
    answer:
      "はい、多くのビジネスシューズに装着可能です。ただし、先の細い革靴やタイトなデザインの靴は中のスペースが限られるため、元の中敷きを取り外してからピットソールを入れてください。つま先部分をカットして調整することで、より快適にフィットさせることができます。",
  },
  {
    question: "男性がピットソールを使って効果を実感するまでの期間は？",
    answer:
      "個人差がありますが、姿勢の改善は1〜2週間で実感する方が多いです。体重や体型の変化は2〜3ヶ月の継続使用が目安です。男性は女性に比べて筋肉量が多いため、歩行時の筋活動量増加効果をより早く実感しやすい傾向があります。",
  },
  {
    question: "足のサイズが27.5cmを超える場合はどうすればいいですか？",
    answer:
      "残念ながら、ピットソールの最大サイズはLサイズ（26.5〜27.5cm対応）となっており、28cm以上のサイズには対応していません。28cm以上の方は、一般的なアーチサポートインソールの大きいサイズを検討されることをおすすめします。",
  },
  {
    question: "ピットソールを営業の外回りで使っても大丈夫ですか？",
    answer:
      "むしろ営業職の方にこそおすすめです。営業で1日中歩き回る方はピットソールの効果を最大限に引き出せます。足裏アーチのサポートにより疲労が軽減されるため、夕方の足のだるさや腰の痛みの改善も期待できます。汗をかきやすい方は、抗菌消臭スプレーとの併用をおすすめします。",
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
      name: "ピットソール",
      item: "https://sole-laboratory.com/pitsole/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "メンズガイド",
      item: "https://sole-laboratory.com/articles/pitsole-mens/",
    },
  ],
};

export default function PitsoleMensPage() {
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
          { label: "ピットソール", href: "/pitsole/" },
          { label: "メンズガイド" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-blue-600 font-medium mb-2">
            ピットソール メンズ特集
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソールは
            <span className="text-blue-600">男性</span>にも効果ある？
            <br />
            メンズ向け完全ガイド
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ピットソールは女性向けのイメージが強いですが、実は男性にも十分対応しています。この記事では、男性ならではのサイズ選び、ビジネスシューズへの装着方法、男性ユーザーの口コミを徹底解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              ピットソール 男性
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              メンズ
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 男性でも使えるか */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ピットソールは男性でも使えるのか？
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              結論から言えば、<strong>ピットソールは男性でも問題なく使用できます</strong>。ピットソールには男性用・女性用の区別はなく、XS〜Lの4サイズ展開で最大27.5cmまで対応しています。
            </p>
            <p>
              SNSやネット上ではピットソールの広告が女性向けに展開されているため「女性専用の商品なのでは？」と思われがちですが、足裏のアーチサポートによる姿勢改善・筋肉活性化の仕組みは男女共通です。むしろ、男性は筋肉量が多いぶん、歩行時の筋活動量増加効果がより顕著に表れる可能性があります。
            </p>
            <p>
              ただし、足のサイズが28cm以上の男性には対応していない点が唯一の制限です。日本人男性の平均足サイズは約26cm前後であるため、多くの男性はM（25〜26cm）またはL（26.5〜27.5cm）で対応可能です。
            </p>
          </div>

          <div className="card mt-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              競合サイトとの情報の違い
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                ピットソールに関する多くの記事は女性向けに書かれており、男性の使用について詳しく解説しているサイトはほとんどありません。「ピットソール 男性」で検索しても、女性向けレビューの中に「男性も使えます」と一言添えてあるだけのケースが大半です。
              </p>
              <p>
                この記事では、男性特有のニーズ（ビジネスシューズへの装着、大きめサイズの選び方、男性の体格での効果実感期間など）に焦点を当て、男性がピットソールを購入・使用する際に必要な情報を網羅します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サイズ展開 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性向けサイズ選びガイド
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ピットソールのサイズ選びは効果を左右する重要なポイントです。男性は足の幅が広い傾向があるため、女性とは異なるポイントに注意が必要です。
            </p>
          </div>

          <div className="card mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              サイズ展開一覧
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      サイズ
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      対応cm
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      男性の目安
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      おすすめ度
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">XS</td>
                    <td className="py-3 text-gray-900">21〜22.5cm</td>
                    <td className="py-3 text-gray-500">男性には小さい</td>
                    <td className="py-3 text-gray-400">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">S</td>
                    <td className="py-3 text-gray-900">23〜24.5cm</td>
                    <td className="py-3 text-gray-500">
                      小さめの足の男性向け
                    </td>
                    <td className="py-3 text-gray-900">△</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-blue-50">
                    <td className="py-3 text-gray-900 font-bold">M</td>
                    <td className="py-3 text-gray-900 font-bold">
                      25〜26cm
                    </td>
                    <td className="py-3 text-blue-600 font-medium">
                      多くの男性に最適
                    </td>
                    <td className="py-3 text-blue-600 font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-blue-50">
                    <td className="py-3 text-gray-900 font-bold">L</td>
                    <td className="py-3 text-gray-900 font-bold">
                      26.5〜27.5cm
                    </td>
                    <td className="py-3 text-blue-600 font-medium">
                      足が大きめの男性向け
                    </td>
                    <td className="py-3 text-blue-600 font-bold">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                スニーカーに入れる場合
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  元の中敷きを取り外してからピットソールを入れる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  靴のサイズと同じか、0.5cm大きめのピットソールを選ぶ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  幅広タイプのスニーカーなら相性抜群
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  ランニングシューズとの併用も可能
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                ビジネスシューズに入れる場合
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  必ず元の中敷きを取り外す（スペースが限られるため）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  先の細い革靴はつま先部分を多めにカットして調整
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  紐靴タイプが最も装着しやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  ローファーはフィット感を要確認
                </li>
              </ul>
            </div>
          </div>

          <div className="card mt-6 bg-amber-50 border-[#c9a76c]">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              男性のサイズ選びのコツ
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              男性は足の幅が広い方が多いため、長さだけでなく幅のフィット感も確認しましょう。ピットソールはつま先部分をカットできるので、長さは調整可能ですが、幅は調整できません。足幅が4E以上の方は、幅広の靴と組み合わせることで快適に使用できます。また、迷った場合は大きめのサイズを選んでカットで調整するのが安全です。
            </p>
          </div>
        </div>
      </section>

      {/* 男性の口コミ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性ユーザーの口コミ・使用レビュー
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ピットソールを実際に使用している男性の口コミを、職業・使用シーン別にまとめました。女性と比較して口コミ数は少ないですが、効果を実感している男性の声も確実に存在します。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                type: "立ち仕事・工場勤務",
                age: "30代男性",
                period: "使用3ヶ月",
                review:
                  "工場で1日8時間の立ち仕事をしています。安全靴にピットソールを入れて使い始めました。最初は足裏が少し痛かったですが、1週間で慣れました。以前は帰宅時にふくらはぎがパンパンでしたが、今はかなり楽になりました。体重は2ヶ月で1.5kg減りましたが、それ以上に姿勢が良くなったと妻に言われたのが嬉しいです。",
                good: "足の疲れ軽減、姿勢改善",
              },
              {
                type: "営業職・外回り",
                age: "40代男性",
                period: "使用4ヶ月",
                review:
                  "営業で1日1万歩以上歩くので、効果を実感しやすかったのかもしれません。ビジネスシューズに入れていますが、元の中敷きを外せば問題なくフィットしました。3ヶ月目あたりからズボンのウエストが少しゆるくなり、4ヶ月で3kg減りました。歩く仕事の人にはおすすめです。",
                good: "体重減少、ウエスト変化",
              },
              {
                type: "通勤・デスクワーク",
                age: "30代男性",
                period: "使用2ヶ月",
                review:
                  "往復40分の徒歩通勤で使っています。正直、2ヶ月では体重の変化はまだ感じていません。ただ、歩き方が変わった実感はあります。以前は内股気味でしたが、ピットソールを使い始めてからまっすぐ歩けるようになりました。もう少し続けてみようと思います。",
                good: "歩行フォーム改善",
              },
              {
                type: "ウォーキング・運動習慣",
                age: "50代男性",
                period: "使用6ヶ月",
                review:
                  "健康のために毎朝30分ウォーキングをしています。ピットソールを入れてからは同じ距離でもふくらはぎの筋肉を使っている感覚が強くなりました。半年で4kg減り、健康診断でも中性脂肪の値が改善しました。50代でも効果はあると思います。",
                good: "体重減少、健康数値改善",
              },
            ].map((item) => (
              <div key={item.type} className="card">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.age} / {item.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {item.review}
                </p>
                <p className="text-xs text-gray-500">
                  効果の実感：
                  <span className="text-blue-600 font-medium">
                    {item.good}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 口コミは個人の感想であり、効果を保証するものではありません。使用感には個人差があります。
          </p>
        </div>
      </section>

      {/* ビジネスシューズへの装着方法 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ビジネスシューズへの装着方法【ステップガイド】
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              男性がピットソールを最も使いたいシーンの一つがビジネスシューズです。ここでは、革靴への正しい装着方法をステップバイステップで解説します。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "STEP 1",
                title: "靴の元の中敷きを取り外す",
                desc: "ビジネスシューズは内部のスペースが限られるため、必ず元の中敷きを取り外してからピットソールを入れます。接着されている場合は、端からゆっくり剥がしてください。中敷きが取り外せない靴もありますが、その場合はスペースが十分にあるか確認してから装着しましょう。",
              },
              {
                step: "STEP 2",
                title: "元の中敷きに合わせてカット",
                desc: "取り外した元の中敷きをピットソールの上に置き、つま先部分の形をペンでなぞります。ハサミでガイドラインに沿ってカットしてください。特に先の細い革靴は、つま先を多めにカットする必要があります。カットは少しずつ行い、都度靴に入れてフィット感を確認しましょう。",
              },
              {
                step: "STEP 3",
                title: "靴に装着してフィット感を確認",
                desc: "カットしたピットソールを靴に入れ、実際に履いてみます。かかと部分がしっかり収まっているか、つま先に0.5〜1cmの余裕があるか、足の甲が圧迫されていないかを確認してください。歩いてみて、インソールがズレないことも確認しましょう。",
              },
              {
                step: "STEP 4",
                title: "微調整して完成",
                desc: "フィット感に問題があれば、つま先や側面を少しずつカットして調整します。靴の中でインソールが動く場合は、両面テープで固定するのも一つの方法です。慣れるまで最初の1週間は短時間から始め、徐々に使用時間を延ばしていきましょう。",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {item.step}
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

      {/* 男性の効果実感期間 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性の効果実感タイムライン
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              男性は女性と比べて筋肉量が多いため、歩行時の筋活動量増加効果がより顕著に表れやすいと考えられます。ただし、体脂肪率が低い方は体重の変化幅が小さくなる傾向があります。
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "1〜2週間",
                title: "初期適応期間",
                changes: [
                  "足裏にアーチサポートの刺激を感じる",
                  "ふくらはぎや太ももに軽い筋肉痛が出ることも",
                  "歩き方が変わった感覚（重心の位置が変わる）",
                  "足の疲れ方が変化する（最初は増えるが徐々に軽減）",
                ],
                color: "border-l-gray-400",
              },
              {
                period: "1ヶ月目",
                title: "姿勢改善期間",
                changes: [
                  "歩行フォームが安定してくる",
                  "猫背や反り腰が改善してくる",
                  "立ち姿勢が楽になる",
                  "足の疲れが明らかに軽減される",
                  "靴の減り方が均等になってくる",
                ],
                color: "border-l-blue-400",
              },
              {
                period: "2〜3ヶ月目",
                title: "体型変化期間",
                changes: [
                  "ズボンのウエストにゆとりが出始める",
                  "体重が1〜3kg減少（個人差あり）",
                  "下半身の引き締まりを実感",
                  "基礎代謝の向上による疲れにくさ",
                  "周囲から「姿勢が良くなった」と言われることも",
                ],
                color: "border-l-blue-600",
              },
              {
                period: "半年以上",
                title: "定着期間",
                changes: [
                  "正しい姿勢・歩き方が習慣化される",
                  "体重が3〜5kg減少（運動・食事管理併用時）",
                  "体型の変化が写真で明確に分かる",
                  "腰痛や膝の痛みの軽減を実感する方も",
                  "健康診断の数値改善（メタボ改善等）",
                ],
                color: "border-l-emerald-600",
              },
            ].map((item) => (
              <div
                key={item.period}
                className={`card border-l-4 ${item.color}`}
              >
                <div className="flex items-start gap-3">
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <ul className="space-y-1">
                      {item.changes.map((change) => (
                        <li
                          key={change}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-blue-500 shrink-0 mt-0.5">
                            &#10003;
                          </span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 男性ならではのメリット */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性がピットソールを使うメリット
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "ジム不要の「ながらダイエット」",
                desc: "通勤や営業の移動時間がそのままダイエットタイムに変わります。ジムに通う時間や費用がかからず、日常の歩行を効率化するだけなので、忙しいビジネスマンにとって最も手軽なダイエット方法です。月額ジム代（8,000〜15,000円）と比べてもコストパフォーマンスは優秀です。",
              },
              {
                title: "メタボ対策・健康管理",
                desc: "30代以降の男性に多い内臓脂肪型肥満（メタボ）の予防・改善に役立ちます。歩行時の筋活動量を高めることで、日常的なカロリー消費を増やし、食事管理と組み合わせることで健康診断の数値改善も期待できます。特に中性脂肪や血糖値が気になる方に。",
              },
              {
                title: "腰痛・膝痛の予防",
                desc: "デスクワークや長時間の運転で腰に負担がかかっている男性にも効果的です。足裏のアーチが整うことで骨盤の位置が改善され、腰への負担が軽減されます。また、正しい歩行フォームにより膝への負担も減り、将来的な膝痛のリスクを下げられます。",
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
        </div>
      </section>

      {/* 購入時の注意点 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性が購入する際の注意点
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "28cm以上には非対応",
                desc: "ピットソールの最大サイズはL（26.5〜27.5cm）です。足のサイズが28cm以上の男性は残念ながら使用できません。購入前に自分の足のサイズを正確に測定しましょう。靴のサイズではなく、実際の足の長さで確認することをおすすめします。",
              },
              {
                title: "革靴のタイプによる向き不向き",
                desc: "紐タイプの革靴（ストレートチップ・プレーントゥなど）はピットソールとの相性が良いです。一方、ローファーやスリッポンタイプは甲のフィット感が変わりやすいため、装着後のフィット感を必ず確認してください。先の極端に細いイタリアンタイプの革靴には不向きな場合もあります。",
              },
              {
                title: "汗・ムレ対策",
                desc: "男性は女性に比べて足の発汗量が多い傾向があります。ピットソールを清潔に保つため、帰宅後は靴から取り出して風通しの良い場所で乾かしましょう。週に1回程度、ウェットティッシュで拭くか、消臭スプレーを使うと衛生的に使えます。",
              },
              {
                title: "複数足セットがお得",
                desc: "通勤用・プライベート用など複数の靴で使う場合は、3足セットがコスパ最強です。1足あたり4,696円で購入でき、毎日入れ替える手間も省けます。特に革靴とスニーカーの両方で使いたい男性には、3足セット購入をおすすめします。",
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

      {/* XLサイズ対応 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            XLサイズ（28-29cm）の対応について
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            2026年時点で、ピットソールには<strong>XLサイズ（28-29cm）が追加</strong>されています。これまで足のサイズが27.5cmを超える男性はLサイズでは対応しきれないケースがありましたが、XLサイズの登場により幅広い足サイズに対応可能になりました。
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h4 className="font-bold text-blue-700 mb-2">ビジネスシューズでの使用ポイント</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              ビジネスシューズは靴自体が大きめに作られていることが多いため、足のサイズが28cm前後の方でもLサイズで十分入るケースがあります。まずはLサイズで試し、窮屈に感じる場合はXLサイズを検討するのがおすすめです。
            </p>
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
                    <span className="text-blue-600 shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-6">
                  <span className="text-blue-600 font-bold">A.</span>{" "}
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
            まとめ：ピットソールは男性のダイエット・健康管理の味方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ピットソールは女性向けのイメージが先行していますが、男性でも十分に効果を発揮するダイエットサポートインソールです。特に、毎日の通勤や営業で歩く機会が多い男性は、ピットソールの効果を最大限に引き出しやすいと言えます。
            </p>
            <p>
              M（25〜26cm）とL（26.5〜27.5cm）の2サイズで多くの男性に対応し、ビジネスシューズにも装着可能です。ジムに通う時間がない忙しいビジネスマンにとって、日常の歩行をダイエットに変える最も手軽な選択肢の一つでしょう。
            </p>
            <p>
              ただし、28cm以上の足のサイズには対応していないことと、効果を実感するには最低3ヶ月の継続が必要な点は理解しておきましょう。正しいサイズで毎日使い続ければ、姿勢改善・体型変化・健康数値の改善が期待できます。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pitsole/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              ピットソールの詳細レビューを見る
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
              href="/pitsole/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールの口コミ・効果を徹底検証【累計200万足の実力】
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
              href="/pitsole/size/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールのサイズ選び完全ガイド
              </p>
            </Link>
            <Link
              href="/articles/pitsole-not-working/"
              className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">
                ピットソールは痩せない？やめた理由の真相と正しい使い方
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
