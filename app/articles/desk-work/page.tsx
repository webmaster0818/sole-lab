import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "デスクワークの足の疲れにインソールは効果ある？おすすめと対策",
  description:
    "デスクワーク中心の方の足の疲れ・むくみ対策にインソールは効果があるのか？座りっぱなしの影響と、通勤・休憩時のインソール活用法、おすすめ製品を紹介。",
  openGraph: {
    title:
      "デスクワークの足の疲れにインソールは効果ある？おすすめと対策｜ソールラボ",
    description:
      "デスクワークの足の疲れ・むくみ対策にインソールは有効？おすすめ製品と活用法を解説。",
    url: "https://sole-laboratory.com/articles/desk-work/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/desk-work/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "デスクワークの足の疲れにインソールは効果ある？おすすめと対策",
  description:
    "デスクワーク中心の方の足の疲れ・むくみ対策にインソールは効果があるのか解説。",
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
    question: "デスクワーク中にインソールを使う意味はありますか？",
    answer:
      "デスクワーク中にインソールが効果を発揮するのは限定的です。ダイエットインソールの多くは歩行時の姿勢・筋肉活動を改善する設計のため、座っている間の効果は小さいです。ただし、通勤時やオフィス内での移動、昼休みの散歩など、歩く機会に装着することで効果を得られます。",
  },
  {
    question: "デスクワークで1日何歩くらい歩けばインソールの効果がありますか？",
    answer:
      "効果を実感するには1日5,000歩以上が目安です。デスクワーク中心の方は通勤で往復3,000〜4,000歩程度が確保できるため、昼休みに10〜15分の散歩を加えれば5,000歩に近づけます。意識的に階段を使ったり、1駅手前で降りるなどの工夫も効果的です。",
  },
  {
    question: "デスクワークの足のむくみにインソールは効果がありますか？",
    answer:
      "直接的なむくみ解消効果は限定的ですが、通勤時のインソール使用で正しい歩行が促され、ふくらはぎのポンプ機能が改善されることで、間接的にむくみの軽減に寄与します。むくみ対策としては、座ったままのつま先立ち運動や、こまめな水分補給も併用するのがおすすめです。",
  },
  {
    question: "オフィス用のスリッパにインソールを入れても効果はありますか？",
    answer:
      "スリッパは足をホールドする力が弱いため、インソールのアーチサポートが正しく機能しない場合があります。効果を最大化するには、足をしっかりホールドするスニーカーやウォーキングシューズに入れて、通勤時や外出時に使うのがおすすめです。",
  },
  {
    question: "デスクワークの方におすすめのダイエットインソールはどれですか？",
    answer:
      "デスクワーク中心で歩行量が限られる方には、少ない歩数でも効率的に筋肉を刺激できるピットソールがおすすめです。世界特許技術による3つのアーチサポートで、短い歩行時間でも効果的な姿勢改善が期待できます。コスパ重視ならスリムアップインソールも選択肢に入ります。",
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
      name: "デスクワークの足の疲れ対策",
      item: "https://sole-laboratory.com/articles/desk-work/",
    },
  ],
};

export default function DeskWorkPage() {
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
          { label: "デスクワークの足の疲れ対策" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            悩み別インソール活用法
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            デスクワークの足の疲れに
            <br />
            <span className="text-[#e8627c]">インソール</span>は効果ある？
            <br />
            おすすめと対策
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            「座りっぱなしなのに足が疲れる」「夕方になると足がパンパン」そんなデスクワーカーの悩みに、インソールはどこまで効果があるのか。正直な答えと、歩行量が少ない方でも効果を引き出す活用法を解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              デスクワーク 足の疲れ
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              インソール 効果
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 正直な結論 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            結論：デスクワーク中の効果は限定的、活用法次第で変わる
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              最初に正直にお伝えすると、ダイエットインソールは<strong>歩くことで効果を発揮する</strong>設計です。デスクワーク中（座っている間）のダイエット効果はほとんど期待できません。
            </p>
            <p>
              しかし、デスクワーカーでもインソールが全く意味がないわけではありません。<strong>通勤時の歩行</strong>、<strong>昼休みの散歩</strong>、<strong>オフィス内の移動</strong>など、歩く場面でインソールの効果は発揮されます。重要なのは「いかに歩く機会を作るか」です。
            </p>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#c9a76c]">当サイトのスタンス：</span>
              多くの競合サイトはデスクワーカーにも無条件にインソールを勧めていますが、それは正確ではありません。歩行量が極端に少ない方にとって、インソール単体でのダイエット効果は限られます。ただし、通勤時の活用と歩行量の工夫で十分な効果を引き出すことは可能です。
            </p>
          </div>
        </div>
      </section>

      {/* デスクワークが体に与える影響 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            デスクワークが足・体に与える5つの影響
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "血流の低下による足のむくみ",
                desc: "長時間座り続けると下半身の血流が低下し、重力の影響で足に水分が溜まりやすくなります。夕方に靴がきつく感じるのはこのためです。ふくらはぎのポンプ機能が使われないことが主な原因です。",
              },
              {
                num: "02",
                title: "足裏アーチの崩れ",
                desc: "歩かない生活が続くと、足裏の筋肉が衰えてアーチが崩れやすくなります。アーチが崩れると扁平足傾向になり、立った時や歩いた時の疲れやすさが増します。",
              },
              {
                num: "03",
                title: "猫背・骨盤の後傾",
                desc: "デスクワークでは前かがみの姿勢が続くため、猫背と骨盤の後傾が起きやすくなります。これは腰痛や下半身太りの原因となり、歩行時の姿勢にも悪影響を及ぼします。",
              },
              {
                num: "04",
                title: "基礎代謝の低下",
                desc: "1日の大半を座って過ごすと、筋肉の活動量が極端に減少し、基礎代謝が低下します。同じ食事量でも太りやすくなり、痩せにくい体質に変わっていきます。",
              },
              {
                num: "05",
                title: "冷え性の悪化",
                desc: "血流の低下に伴い、足先の冷えが悪化します。冷えは脂肪の蓄積を促進し、セルライトの原因にもなります。特に冬場のオフィスでは深刻な問題です。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-5">
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

      {/* デスクワーカーのインソール活用法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            デスクワーカーのインソール活用法5選
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              デスクワーク中心でも、工夫次第でインソールの効果を引き出すことは可能です。以下の5つの活用法を実践してみてください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "通勤靴にインソールを入れる",
                desc: "最も確実な方法。通勤で往復20〜30分歩くだけでも約3,000〜5,000歩を確保できます。電車通勤の方は1駅手前で降りるだけで+1,000〜2,000歩。毎日の積み重ねが大きな差になります。",
                tag: "おすすめ度：★★★★★",
              },
              {
                title: "昼休みに15分のウォーキング",
                desc: "昼食後に15分歩くだけで約1,500〜2,000歩。食後の血糖値上昇を抑える効果もあり、午後の眠気防止にもつながります。インソール入りのスニーカーに履き替えるのが理想です。",
                tag: "おすすめ度：★★★★★",
              },
              {
                title: "エレベーターの代わりに階段を使う",
                desc: "オフィス内の移動で階段を使う習慣をつけましょう。階段昇降は平地歩行の2〜3倍のカロリーを消費します。インソールのアーチサポートにより正しい体重移動で階段を上れます。",
                tag: "おすすめ度：★★★★☆",
              },
              {
                title: "遠くのトイレ・給湯室を使う",
                desc: "わざと遠いトイレや給湯室を利用することで、こまめな歩行機会を作れます。1時間に1回、5分程度歩くだけでも血流改善に効果があります。",
                tag: "おすすめ度：★★★☆☆",
              },
              {
                title: "退勤後に一駅分歩く",
                desc: "退勤後に1駅分（15〜20分）歩く習慣をつけましょう。1日の終わりにインソール入りの靴でウォーキングすることで、歩数を効率的に稼げます。音楽やポッドキャストを聴きながら歩けばストレス発散にも。",
                tag: "おすすめ度：★★★★☆",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#c9a76c] font-medium mb-2">
                  {item.tag}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デスクワーカー向け1日スケジュール */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            デスクワーカーの理想的なインソール活用スケジュール
          </h2>

          <div className="space-y-3">
            {[
              { time: "7:30", action: "通勤開始：インソール入りスニーカーで出発", steps: "+1,500歩" },
              { time: "8:00", action: "1駅手前で下車、オフィスまで歩く", steps: "+1,000歩" },
              { time: "10:00", action: "休憩で遠くの給湯室まで歩く", steps: "+200歩" },
              { time: "12:00", action: "昼食後にオフィス周辺を15分散歩", steps: "+1,500歩" },
              { time: "15:00", action: "階段で別フロアのトイレを利用", steps: "+300歩" },
              { time: "18:00", action: "退勤：1駅手前で降りて歩く", steps: "+1,500歩" },
              { time: "合計", action: "1日の歩数合計", steps: "約6,000歩" },
            ].map((item) => (
              <div key={item.time} className={`flex items-center gap-4 p-3 rounded-lg ${item.time === "合計" ? "bg-[#e8627c] text-white" : "bg-white border border-gray-200"}`}>
                <span className={`text-sm font-bold shrink-0 w-16 ${item.time === "合計" ? "text-white" : "text-[#e8627c]"}`}>
                  {item.time}
                </span>
                <span className={`text-sm flex-1 ${item.time === "合計" ? "text-white font-bold" : "text-gray-700"}`}>
                  {item.action}
                </span>
                <span className={`text-sm font-medium shrink-0 ${item.time === "合計" ? "text-white font-bold" : "text-[#c9a76c]"}`}>
                  {item.steps}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-emerald-700">ポイント：</span>
              デスクワーク中心でも、通勤と昼休みの工夫だけで約6,000歩を確保できます。これはダイエットインソールの効果を実感するのに十分な歩数です。特別な運動時間を確保する必要はありません。
            </p>
          </div>
        </div>
      </section>

      {/* デスクワーカー向けおすすめインソール */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            デスクワーカーにおすすめのインソール3選
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              歩行量が限られるデスクワーカーにとって、少ない歩数でも効率的に効果を発揮するインソールを選ぶことが重要です。
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-[#e8627c] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-[#e8627c] text-white px-3 py-1 rounded-full font-bold">
                  1位
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  ピットソール
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                世界特許取得のキュボイドサポートにより、3つのアーチを同時にサポート。筑波大学との共同研究で筋肉活動量の増加が確認済み。少ない歩数でも効率的に姿勢改善と筋肉活性化が期待できるため、デスクワーカーに最もおすすめです。
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">単品：6,578円</span>
                <span className="text-[#c9a76c] font-bold">セット：4,378円/足〜</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-gray-500 text-white px-3 py-1 rounded-full font-bold">
                  2位
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  スリムアップインソール
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                美容整体師監修の骨格筋アプローチ。フリーサイズで男女兼用のため、どんな靴にも対応可能。3足セット+1足プレゼントでコスパも良好。コスパ重視のデスクワーカーにおすすめです。
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">単品：6,980円</span>
                <span className="text-[#c9a76c] font-bold">セット：4,480円/足〜</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm bg-gray-400 text-white px-3 py-1 rounded-full font-bold">
                  3位
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  ランウェイキュアソール
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                薄型で履き心地が良く、長時間の着用でも快適。3点アーチサポートによる美姿勢効果が期待できます。ただし女性向け（22.5〜25.0cm）のため、男性デスクワーカーには対応していません。
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">単品：6,380円</span>
                <span className="text-[#c9a76c] font-bold">セット：3,938円/足〜</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* インソール以外の対策 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            インソール以外のデスクワーク疲れ対策
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              インソールだけに頼るのではなく、以下の対策も併用することで、デスクワークの足の疲れをより効果的に軽減できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "座ったままのつま先立ち運動",
                desc: "座ったまま両足のかかとを上げ下げする運動。ふくらはぎのポンプ機能を活性化し、血流を改善します。1時間に10回×3セットが目安。",
              },
              {
                title: "足首回し・足指グーパー",
                desc: "足首を大きく回したり、足指をグーパーする運動。足裏の筋肉を活性化し、アーチの崩れを防ぎます。会議中でもこっそりできます。",
              },
              {
                title: "着圧ソックスの活用",
                desc: "デスクワーク中に着圧ソックスを着用すると、血流の低下を防ぎ、むくみを軽減できます。インソールと併用することで相乗効果が期待できます。",
              },
              {
                title: "スタンディングデスクの導入",
                desc: "1時間に15〜20分程度立って作業するだけで、下半身の血流が改善されます。立っている間にインソール入りの靴を履けば、立ち仕事と同様の効果が得られます。",
              },
              {
                title: "こまめな水分補給",
                desc: "水分をこまめに摂ることで、トイレに行く回数が増え、自然と歩行機会が増えます。1時間にコップ1杯の水分補給を心がけましょう。",
              },
              {
                title: "退勤後のストレッチ",
                desc: "1日の終わりにふくらはぎ・太もも・股関節のストレッチを行うと、血流改善とむくみ解消に効果的です。5〜10分で十分な効果があります。",
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

      {/* デスクワーカーの成功パターン */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            デスクワーカーのインソールダイエット成功パターン
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              実際にデスクワーク中心の生活でインソールダイエットに成功した方の口コミを分析すると、いくつかの共通パターンが見えてきます。
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-emerald-200">
              <h3 className="font-bold text-emerald-700 mb-3">パターン1：通勤ウォーキング派</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                自宅から最寄り駅、駅からオフィスの徒歩を合わせて往復40分（約4,000歩）。これに昼休みの散歩15分（約1,500歩）を加えて1日5,500歩を確保。3ヶ月で姿勢改善を実感し、5ヶ月目に体重-2kgを達成。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-emerald-200">
              <h3 className="font-bold text-emerald-700 mb-3">パターン2：退勤後ウォーキング派</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                通勤は車のため歩行量が少なかったが、退勤後に30分のウォーキングを日課に。インソール入りのスニーカーで約3,500歩。休日も含めて週6日の継続で4ヶ月目にボディラインの変化を実感。
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-emerald-200">
              <h3 className="font-bold text-emerald-700 mb-3">パターン3：スタンディングデスク併用派</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                スタンディングデスクを導入し、1日2〜3時間は立って作業。インソール入りの靴を履いて立ち作業することで、座りっぱなしの時間を減らし、足裏からの姿勢改善も同時に実現。2ヶ月で腰痛改善、4ヶ月でウエスト-3cmを達成。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#c9a76c]">共通点：</span>
              成功した方に共通しているのは、デスクワーク以外の時間で意識的に歩行量を確保していることです。インソールは「歩く時間を最大限活かすツール」として活用し、座っている時間には別のアプローチ（ストレッチ、着圧ソックス等）を併用しているのが特徴です。
            </p>
          </div>

          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              デスクワーカーが避けるべきNG行動
            </h3>
            <ul className="space-y-3">
              {[
                "インソールを入れたまま1日中座りっぱなしで効果を期待する",
                "1ヶ月未満で「効果なし」と判断して使用をやめる",
                "通勤以外の歩行機会を全く増やさない",
                "食事量を増やしてしまう（インソールを使い始めたから大丈夫という油断）",
                "サイズの合わないインソールを無理に使い続ける",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-red-400 shrink-0 mt-0.5">
                    &#10007;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/articles/standing-work/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">立ち仕事で足が疲れない最強インソール3選</p>
              <p className="text-xs text-gray-500 mt-1">立ち仕事の足の疲れ対策とおすすめインソール</p>
            </Link>
            <Link href="/articles/walking-insole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ウォーキング用インソールおすすめ3選</p>
              <p className="text-xs text-gray-500 mt-1">歩きやすさと痩せ効果を両立するインソール</p>
            </Link>
            <Link href="/articles/swelling-insole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">足のむくみ対策インソールの効果と選び方</p>
              <p className="text-xs text-gray-500 mt-1">むくみ軽減に効果的なインソールの選び方</p>
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
                    <span className="text-[#e8627c] shrink-0">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">
                    &#9662;
                  </span>
                </summary>
                <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed pl-10">
                  <span className="text-[#e8627c] font-bold">A.</span>{" "}
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
            まとめ：デスクワーカーこそ「歩く工夫」でインソールを活かそう
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              デスクワーク中心の方にとって、ダイエットインソールのデスクワーク中の効果は限定的です。しかし、通勤時の活用、昼休みの散歩、階段利用などの工夫を加えることで、1日6,000歩程度を確保でき、インソールの効果を十分に引き出すことができます。
            </p>
            <p>
              インソールは「歩く時間を最大限活かすツール」として捉え、意識的に歩く機会を増やすことが大切です。着圧ソックスやストレッチなど、他の対策と組み合わせることで、デスクワークによる足の疲れやむくみも効果的に軽減できます。
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
