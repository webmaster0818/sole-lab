import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ウォーキング用インソールおすすめ3選｜歩きやすさと痩せ効果",
  description:
    "ウォーキング用ダイエットインソールのおすすめ3選を紹介。歩きやすさと痩せ効果を両立するインソールの選び方、正しい歩き方、効果を最大化する使い方を徹底解説。",
  openGraph: {
    title:
      "ウォーキング用インソールおすすめ3選｜歩きやすさと痩せ効果｜ソールラボ",
    description:
      "ウォーキングに最適なダイエットインソール3選。歩きやすさと痩せ効果を両立する選び方を解説。",
    url: "https://sole-laboratory.com/articles/walking-insole/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/walking-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ウォーキング用インソールおすすめ3選｜歩きやすさと痩せ効果",
  description:
    "ウォーキング用ダイエットインソールのおすすめ3選。歩きやすさと痩せ効果を両立する選び方を解説。",
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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
};

const faqs = [
  {
    question: "ウォーキング用インソールで本当に痩せますか？",
    answer:
      "ウォーキング用ダイエットインソールは、足裏のアーチをサポートすることで正しい歩行フォームを促し、筋肉活動量を増やします。ウォーキングとの組み合わせにより、通常の歩行よりも効率的なカロリー消費が期待できます。ただし、インソール単体での痩せ効果ではなく、ウォーキングの効果を高めるサポートツールとして捉えてください。",
  },
  {
    question: "ウォーキング用インソールの寿命はどのくらいですか？",
    answer:
      "使用頻度や歩行量によりますが、一般的に3〜6ヶ月が交換の目安です。毎日ウォーキングで使用する場合は3ヶ月程度、通勤メインの場合は6ヶ月程度で交換をおすすめします。クッション性やアーチサポートが低下してきたと感じたら交換時期です。",
  },
  {
    question: "ウォーキングシューズとランニングシューズ、どちらに入れるべきですか？",
    answer:
      "ウォーキングシューズに入れるのがおすすめです。ランニングシューズは既にクッション性が高く設計されているため、インソールとの相性が悪い場合があります。ウォーキングシューズやスニーカーの方が、インソールのアーチサポートが足裏に正しくフィットしやすいです。",
  },
  {
    question: "ウォーキング時のインソールは1日何分使えば効果がありますか？",
    answer:
      "効果を実感するには1日30分以上のウォーキングが目安です。30分の歩行で約3,000〜4,000歩になります。可能であれば1時間（約6,000〜8,000歩）のウォーキングが理想的です。まとまった時間が取れない場合は、通勤などで分割しても構いません。",
  },
  {
    question: "ウォーキング用インソールを選ぶ際の最も重要なポイントは何ですか？",
    answer:
      "最も重要なのはサイズのフィット感です。サイズが合っていないとアーチサポートが足裏の正しい位置にフィットせず、効果が半減するだけでなく、靴ずれや足の痛みの原因になります。次に重要なのはアーチサポートの設計で、3点アーチ（内側縦・外側縦・横）をサポートする製品が理想的です。",
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
      name: "知識・コラム一覧",
      item: "https://sole-laboratory.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ウォーキング用インソール",
      item: "https://sole-laboratory.com/articles/walking-insole/",
    },
  ],
};

export default function WalkingInsolePage() {
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
          { label: "知識・コラム一覧", href: "/articles/" },
          { label: "ウォーキング用インソール" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#34d399] font-medium mb-2">
            目的別インソール選び
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ウォーキング用インソール
            <br />
            <span className="text-[#34d399]">おすすめ3選</span>
            <br className="md:hidden" />
            ｜歩きやすさと痩せ効果
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ウォーキングでダイエット効果を最大化したい方向けに、歩きやすさと痩せ効果を両立するダイエットインソールのおすすめ3選を紹介。選び方のポイント、正しい歩き方、効果的な活用法まで解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              ウォーキング インソール
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              ダイエット おすすめ
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* ウォーキング×インソールの相性 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ウォーキング×ダイエットインソールの相性が良い理由
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              ダイエットインソールは「歩くこと」で効果を発揮する設計です。つまり、ウォーキングとの相性は抜群。インソールなしのウォーキングと比べて、以下の3つの点で効率が向上します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#128099;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                正しい歩行フォーム
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                足裏のアーチサポートにより、かかと着地→足裏全体→つま先蹴り出しの正しい体重移動が促されます。自己流のフォームより筋肉が効率的に使われます。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#128170;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                筋肉活動量の増加
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                正しい歩行フォームにより、内転筋・大腿四頭筋・腹筋群など普段使われにくい筋肉が活性化。同じ距離を歩いてもカロリー消費が増加します。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#128694;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                疲れにくさの向上
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                アーチサポートが足裏への衝撃を分散し、長時間歩いても疲れにくくなります。結果として「歩く距離を伸ばせる」→「消費カロリー増」の好循環が生まれます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ3選 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ウォーキング用ダイエットインソールおすすめ3選
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#e8627c] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-[#e8627c] text-white px-3 py-1 rounded-full font-bold">
                  1位
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  ピットソール
                </h3>
                <span className="text-xs bg-red-100 text-[#e8627c] px-2 py-0.5 rounded-full">
                  エビデンス重視
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                世界特許取得のキュボイドサポートで3つのアーチを同時にサポート。筑波大学との共同研究で筋肉活動量の増加が科学的に実証済み。ウォーキング時の歩行効率を最も高められるインソールです。累計200万足突破の実績も信頼の証。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block text-xs">価格</span>
                  <span className="text-gray-900 font-medium">6,578円</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">セット最安値</span>
                  <span className="text-[#c9a76c] font-bold">4,378円/足</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">サイズ</span>
                  <span className="text-gray-900 font-medium">XS〜L（4サイズ）</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">対象</span>
                  <span className="text-gray-900 font-medium">男女兼用</span>
                </div>
              </div>
              <Link href="/pitsole/" className="text-sm text-[#e8627c] font-medium hover:underline">
                ピットソールの詳細レビューを見る →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-gray-500 text-white px-3 py-1 rounded-full font-bold">
                  2位
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  ランウェイキュアソール
                </h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                  薄型・快適
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                3点アーチサポートによる美姿勢効果。薄型設計で長時間のウォーキングでも違和感が少なく、快適に歩けます。軽量で靴の中でかさばらないため、ウォーキングシューズとの相性が良好。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block text-xs">価格</span>
                  <span className="text-gray-900 font-medium">6,380円</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">セット最安値</span>
                  <span className="text-[#c9a76c] font-bold">3,938円/足</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">サイズ</span>
                  <span className="text-gray-900 font-medium">M・L（2サイズ）</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">対象</span>
                  <span className="text-gray-900 font-medium">女性向け</span>
                </div>
              </div>
              <Link href="/runway-cure-sole/" className="text-sm text-[#e8627c] font-medium hover:underline">
                ランウェイキュアソールの詳細レビューを見る →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-gray-400 text-white px-3 py-1 rounded-full font-bold">
                  3位
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  スリムアップインソール
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                  コスパ重視
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                美容整体師・井上剛志氏監修の骨格筋アプローチ。フリーサイズでウォーキングシューズに合わせてカット可能。3足+1足プレゼントのセット割引でコスパ最強。ウォーキング用とランニング用で使い分けも可能。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block text-xs">価格</span>
                  <span className="text-gray-900 font-medium">6,980円</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">セット最安値</span>
                  <span className="text-[#c9a76c] font-bold">4,480円/足</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">サイズ</span>
                  <span className="text-gray-900 font-medium">フリーサイズ</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">対象</span>
                  <span className="text-gray-900 font-medium">男女兼用</span>
                </div>
              </div>
              <Link href="/slim-up-insole/" className="text-sm text-[#e8627c] font-medium hover:underline">
                スリムアップインソールの詳細レビューを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 選び方 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ウォーキング用インソールの選び方4つのポイント
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "サイズのフィット感を最優先",
                desc: "ウォーキングでは長距離を歩くため、サイズが合っていないと靴ずれや足の痛みが発生します。試し履きの感覚で最初は短時間から使い、足裏にフィットしているか確認しましょう。",
              },
              {
                num: "02",
                title: "3点アーチサポートがあるか",
                desc: "足裏には内側縦アーチ・外側縦アーチ・横アーチの3つがあります。3つすべてをサポートするインソールが、ウォーキング時の歩行効率を最も高めます。1つのアーチしかサポートしない安価な製品は効果が限定的です。",
              },
              {
                num: "03",
                title: "薄型かどうか",
                desc: "ウォーキングシューズに入れた時にかさばると、窮屈で長時間歩けません。薄型でありながらサポート力を維持しているインソールが理想的です。ランウェイキュアソールは薄型設計で評価が高いです。",
              },
              {
                num: "04",
                title: "耐久性と交換コスト",
                desc: "ウォーキングで毎日使うと消耗が早いため、セット割引で複数足購入できる製品がおすすめ。3〜6ヶ月ごとの交換を考慮し、1足あたりのコストを計算しましょう。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#34d399] shrink-0">
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

      {/* 正しい歩き方 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソールの効果を最大化する正しい歩き方
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールを入れるだけでなく、正しい歩き方を意識することで効果が大幅にアップします。以下の5つのポイントを意識してウォーキングしましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "かかとから着地する",
                desc: "足を前に出したら、かかとの外側から着地します。インソールのかかと部分がしっかりサポートしてくれるので、正しい着地がしやすくなります。",
              },
              {
                title: "足裏全体で体重を受け止める",
                desc: "かかとから着地した後、足裏の外側から小指の付け根→親指の付け根へと体重を移動。インソールのアーチサポートがこの動きをガイドしてくれます。",
              },
              {
                title: "つま先でしっかり蹴り出す",
                desc: "最後に親指で地面をしっかり蹴り出します。この「ローリング歩行」ができると、ふくらはぎの筋肉が効率的に使われ、消費カロリーが増えます。",
              },
              {
                title: "やや大股で歩く",
                desc: "普段より少し大股を意識すると、股関節周りの筋肉が使われ、歩行効果がアップ。ただし無理な大股は膝に負担がかかるので、自然に少し広げる程度でOKです。",
              },
              {
                title: "背筋を伸ばして視線は前方へ",
                desc: "猫背で下を向いて歩くと、インソールの姿勢改善効果が半減します。背筋を伸ばし、10〜15m先を見るイメージで歩きましょう。腕は自然に振ります。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
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

      {/* ウォーキングプラン */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            初心者向けインソール×ウォーキングプラン
          </h2>

          <div className="space-y-4">
            {[
              {
                week: "1週目",
                title: "慣らし期間",
                desc: "インソールに足裏を慣らす期間。1日20分、約2,000歩のウォーキングから。足裏に軽い筋肉痛を感じても正常です。",
                color: "border-l-gray-300",
              },
              {
                week: "2〜3週目",
                title: "歩行量を増やす",
                desc: "1日30分、約3,000〜4,000歩に増加。正しい歩き方を意識しながらペースをつかみましょう。姿勢の変化を感じ始める方も。",
                color: "border-l-emerald-300",
              },
              {
                week: "4〜8週目",
                title: "習慣化フェーズ",
                desc: "1日45〜60分、約5,000〜7,000歩を目標に。ウォーキングが習慣になり、足の疲れが軽減されてくる時期。体が軽くなる感覚を実感する方も。",
                color: "border-l-emerald-500",
              },
              {
                week: "9〜12週目",
                title: "効果実感フェーズ",
                desc: "1日60分、約6,000〜8,000歩の継続。3ヶ月の継続で姿勢の改善、ボディラインの変化を実感する方が増えてきます。体重計の数字にも変化が表れ始めます。",
                color: "border-l-[#e8627c]",
              },
            ].map((item) => (
              <div key={item.week} className={`bg-white border border-gray-200 rounded-xl p-5 border-l-4 ${item.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#e8627c]">{item.week}</span>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ウォーキング用途で3製品を比較
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">評価項目</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">ピットソール</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">ランウェイキュアソール</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">スリムアップインソール</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "歩行サポート力", p: "◎", r: "○", s: "○" },
                    { item: "快適性（薄さ）", p: "○", r: "◎", s: "○" },
                    { item: "科学的根拠", p: "◎", r: "△", s: "△" },
                    { item: "耐久性", p: "○", r: "○", s: "○" },
                    { item: "コスパ", p: "○", r: "◎", s: "○" },
                    { item: "男性対応", p: "◎", r: "×", s: "◎" },
                    { item: "総合評価", p: "◎", r: "○", s: "○" },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900 font-medium">{row.item}</td>
                      <td className="py-3 px-4 text-gray-700">{row.p}</td>
                      <td className="py-3 px-4 text-gray-700">{row.r}</td>
                      <td className="py-3 px-4 text-gray-500">{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/articles/walking-diet/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">歩くだけダイエットは本当に効果ある？</p>
              <p className="text-xs text-gray-500 mt-1">歩くだけダイエットの科学的根拠とインソール活用法</p>
            </Link>
            <Link href="/articles/desk-work/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">デスクワークの足の疲れにインソールは効果ある？</p>
              <p className="text-xs text-gray-500 mt-1">歩行量が少ない方のインソール活用法</p>
            </Link>
            <Link href="/articles/how-to-choose/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールの選び方5つのポイント</p>
              <p className="text-xs text-gray-500 mt-1">失敗しないインソールの選び方ガイド</p>
            </Link>
            <Link href="/ranking/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめ3選を徹底比較</p>
              <p className="text-xs text-gray-500 mt-1">ピットソール・ランウェイキュアソール・スリムアップインソールを比較</p>
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
              <details key={faq.question} className="bg-white border border-gray-200 rounded-lg group">
                <summary className="cursor-pointer text-base font-bold text-gray-900 list-none flex items-center justify-between gap-2 px-5 py-4">
                  <span className="flex items-start gap-2">
                    <span className="text-[#34d399] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed pl-10">
                  <span className="text-[#34d399] font-bold">A.</span>{" "}
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
            まとめ：ウォーキング×インソールで効率的にダイエット
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              ウォーキングはダイエットインソールの効果を最大限に引き出す最適な運動です。インソールのアーチサポートにより正しい歩行フォームが促され、同じ距離を歩いても筋肉活動量とカロリー消費が増加します。
            </p>
            <p>
              エビデンス重視ならピットソール、薄型で快適さ重視ならランウェイキュアソール、コスパ重視ならスリムアップインソールがおすすめです。どの製品を選んでも、1日30分以上のウォーキングを3ヶ月以上継続することが効果実感のカギです。
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-[#e8627c] hover:bg-[#d54d68] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              おすすめインソールランキングを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
