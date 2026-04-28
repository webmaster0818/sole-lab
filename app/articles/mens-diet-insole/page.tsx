import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ダイエットインソール男性向けおすすめ3選｜メンズの選び方ガイド",
  description:
    "男性向けダイエットインソールのおすすめ3選を紹介。メンズのサイズ対応状況、男性の体型・歩行に合った選び方、ビジネスシューズとの相性まで徹底解説。",
  openGraph: {
    title:
      "ダイエットインソール男性向けおすすめ3選｜メンズの選び方ガイド｜ソールラボ",
    description:
      "男性向けダイエットインソールのおすすめ3選。メンズの選び方とビジネスシューズとの相性を解説。",
    url: "https://sole-laboratory.com/articles/mens-diet-insole/",
    type: "article",
  },
  alternates: {
    canonical: "https://sole-laboratory.com/articles/mens-diet-insole/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダイエットインソール男性向けおすすめ3選｜メンズの選び方ガイド",
  description:
    "男性向けダイエットインソールのおすすめ3選。メンズの選び方とビジネスシューズとの相性を解説。",
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
    question: "男性でもダイエットインソールは効果がありますか？",
    answer:
      "はい、男性でも効果があります。ダイエットインソールは足裏のアーチサポートにより正しい姿勢と歩行を促し、筋肉活動量を増やす仕組みです。この仕組みは男女共通のため、男性でも姿勢改善や歩行効率の向上が期待できます。男性は一般的に体重が重い分、歩行時の消費カロリーも大きく、インソールの効果を実感しやすい傾向があります。",
  },
  {
    question: "ビジネスシューズにダイエットインソールは入りますか？",
    answer:
      "多くのダイエットインソールはビジネスシューズに対応しています。ただし、靴の中が狭いタイプのビジネスシューズでは窮屈に感じる場合があります。元の中敷きを外してからインソールを入れると、スペースを確保しやすくなります。スリムアップインソールのフリーサイズは靴に合わせてカットできるため、ビジネスシューズとの相性が良いです。",
  },
  {
    question: "男性向けのダイエットインソールでサイズが合わない場合はどうすればいいですか？",
    answer:
      "ピットソールはXS〜Lの4サイズ展開で28cmまで対応しています。スリムアップインソールはフリーサイズでカットして調整可能です。28cm以上の方はスリムアップインソールが最も対応しやすいです。なお、ランウェイキュアソールは22.5〜25.0cmの女性向けのため、男性には対応していません。",
  },
  {
    question: "男性がダイエットインソールで痩せるにはどのくらいかかりますか？",
    answer:
      "女性と同様、毎日使用して2〜3ヶ月の継続が目安です。男性は体重が重い分、歩行時の消費カロリーが多く、効果が出やすい場合もあります。ただし、インソール単体ではなく、食事管理と歩行量の確保が必要です。1日6,000歩以上を目標にしましょう。",
  },
  {
    question: "メンズのダイエットインソールはどこで買えますか？",
    answer:
      "ピットソールは公式サイト・楽天・Amazonで購入可能。スリムアップインソールは公式サイト（イッティ）・楽天・Amazon・Yahooショッピングで購入可能です。いずれもドラッグストアや実店舗では販売されていないため、オンラインでの購入となります。",
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
      name: "男性向けダイエットインソール",
      item: "https://sole-laboratory.com/articles/mens-diet-insole/",
    },
  ],
};

export default function MensDietInsolePage() {
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
          { label: "男性向けダイエットインソール" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#e8627c] font-medium mb-2">
            メンズ向けガイド
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ダイエットインソール
            <br />
            <span className="text-[#e8627c]">男性向けおすすめ3選</span>
            <br className="md:hidden" />
            ｜メンズの選び方ガイド
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            ダイエットインソールは女性向けのイメージが強いですが、男性でも効果を実感できます。男性のサイズに対応した製品の選び方、ビジネスシューズとの相性、男性ならではの活用法を解説します。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
              ダイエットインソール 男性
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
              メンズ おすすめ
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              2026年4月更新
            </span>
          </div>
        </div>
      </section>

      {/* 男性でも効果がある理由 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性にもダイエットインソールが効果的な3つの理由
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#9878;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                体重が重い分、効果が出やすい
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                男性は一般的に女性より体重が重いため、同じ距離を歩いた時の消費カロリーが大きくなります。インソールで歩行効率が向上すれば、そのカロリー増加分も大きくなります。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#128694;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                通勤で歩行量を確保しやすい
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ビジネスマンは通勤で毎日歩く機会があります。通勤靴にインソールを入れるだけで、特別な運動時間を作らなくても日常の中で効果を得られます。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-3">&#128170;</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                筋肉量が多く姿勢改善効果大
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                男性は筋肉量が多いため、正しい姿勢に矯正された時の筋肉活動量の増加も大きくなります。猫背の改善は見た目の印象も大きく変わります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メンズ対応状況 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ダイエットインソール3製品のメンズ対応状況
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">製品名</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">男性対応</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">サイズ展開</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">対応cm</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">メンズおすすめ度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">ピットソール</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">&#10003; 対応</td>
                    <td className="py-3 px-4 text-gray-700">XS〜L（4サイズ）</td>
                    <td className="py-3 px-4 text-gray-700">21.0〜28.0cm</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">スリムアップインソール</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">&#10003; 対応</td>
                    <td className="py-3 px-4 text-gray-700">フリーサイズ（カット式）</td>
                    <td className="py-3 px-4 text-gray-700">制限なし</td>
                    <td className="py-3 px-4 text-[#c9a76c] font-bold">◎</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">ランウェイキュアソール</td>
                    <td className="py-3 px-4 text-red-500 font-bold">&#10007; 非対応</td>
                    <td className="py-3 px-4 text-gray-500">M・L（2サイズ）</td>
                    <td className="py-3 px-4 text-gray-500">22.5〜25.0cm</td>
                    <td className="py-3 px-4 text-gray-500">×</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-[#c9a76c]">注意：</span>
              ランウェイキュアソールは22.5〜25.0cmの女性向け商品のため、男性には対応していません。男性がダイエットインソールを選ぶ場合は、ピットソールかスリムアップインソールの二択となります。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめランキング */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性向けダイエットインソールおすすめランキング
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
                  エビデンス最強
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                男性向けにも最もおすすめなのがピットソールです。世界特許取得の3つのアーチサポートと筑波大学との共同研究による科学的根拠は、他の追随を許しません。XS〜Lの4サイズ展開で28cmまで対応しており、ビジネスシューズにもフィットします。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block text-xs">単品価格</span>
                  <span className="text-gray-900 font-medium">6,578円</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">セット最安値</span>
                  <span className="text-[#c9a76c] font-bold">4,378円/足</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">サイズ</span>
                  <span className="text-gray-900 font-medium">21.0〜28.0cm</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">ビジネス靴</span>
                  <span className="text-emerald-600 font-medium">&#10003; 対応</span>
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
                  スリムアップインソール
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                  コスパ重視
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                フリーサイズでカットして調整するため、どんなサイズの男性にも対応。美容整体師・井上剛志氏監修の骨格筋アプローチは男女共通で効果を発揮します。3足セット+1足プレゼントのコスパの良さも魅力。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block text-xs">単品価格</span>
                  <span className="text-gray-900 font-medium">6,980円</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">セット最安値</span>
                  <span className="text-[#c9a76c] font-bold">4,480円/足</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">サイズ</span>
                  <span className="text-gray-900 font-medium">フリー（カット式）</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">ビジネス靴</span>
                  <span className="text-emerald-600 font-medium">&#10003; 対応</span>
                </div>
              </div>
              <Link href="/slim-up-insole/" className="text-sm text-[#e8627c] font-medium hover:underline">
                スリムアップインソールの詳細レビューを見る →
              </Link>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-700">※ ランウェイキュアソールについて：</span>
              ランウェイキュアソールはM（22.5〜23.5cm）・L（24.0〜25.0cm）の女性向けサイズのみのため、男性向けランキングからは除外しています。パートナーやご家族の女性にはおすすめできる製品です。
            </p>
          </div>
        </div>
      </section>

      {/* ビジネスシューズとの相性 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ビジネスシューズとの相性ガイド
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <p>
              男性がダイエットインソールを使う最も効果的なシーンは通勤です。ビジネスシューズとの相性を靴のタイプ別に解説します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "紐靴タイプのビジネスシューズ",
                desc: "最もインソールとの相性が良いタイプ。元の中敷きを外してインソールを入れると、ちょうど良いフィット感が得られます。紐で締め具合も調整できるため、最適な装着感を実現しやすいです。",
                compatibility: "◎ 相性抜群",
              },
              {
                title: "スリッポンタイプ",
                desc: "紐がないため微調整が難しいですが、元の中敷きを外せば問題なく使える場合が多いです。ただし、歩行中にインソールがずれやすい場合があるため、フィット感の確認が重要。",
                compatibility: "○ 概ね問題なし",
              },
              {
                title: "ローファー",
                desc: "甲が浅いため、インソールを入れると窮屈に感じる場合があります。薄型のインソールを選ぶか、ハーフサイズ大きめの靴に入れるのがコツです。",
                compatibility: "△ 靴による",
              },
              {
                title: "スニーカー通勤",
                desc: "最もインソールとの相性が良い組み合わせ。足をしっかりホールドし、歩行時のアーチサポートが正しく機能します。近年はスニーカー通勤OKの企業も増えており、おすすめです。",
                compatibility: "◎ 最適",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {item.compatibility}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 男性のインソール活用法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性ならではのインソール活用法5選
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "通勤靴にインソールを常備",
                desc: "毎日の通勤で使うビジネスシューズにインソールを入れておきましょう。往復の通勤歩行だけでも1日3,000〜5,000歩を確保できます。特別な運動をしなくても日常で効果を得られます。",
              },
              {
                num: "02",
                title: "営業・外回りで歩行量を稼ぐ",
                desc: "営業職や外回りの多い方はインソールの効果を最大限に活かせます。1日1万歩以上歩く営業マンなら、3ヶ月で明確な体型変化を実感する可能性が高いです。",
              },
              {
                num: "03",
                title: "休日のウォーキングに活用",
                desc: "休日にスニーカーでウォーキングする際にもインソールを使いましょう。30〜60分のウォーキングをインソール付きで行うことで、普段の運動効率が大幅にアップします。",
              },
              {
                num: "04",
                title: "ジムのトレーニングシューズに",
                desc: "ジム通いしている方は、トレーニングシューズにもインソールを入れましょう。ウォーキングマシンやエリプティカルなどの有酸素運動時に効果的です。",
              },
              {
                num: "05",
                title: "ゴルフシューズに入れる",
                desc: "ゴルフは1ラウンドで約1万歩。インソールをゴルフシューズに入れると、ラウンド中の歩行効率が上がり、足の疲れも軽減。趣味とダイエットを両立できます。",
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

      {/* メンズ特有の注意点 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性がインソールを使う際の注意点
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "体重が重い分、消耗が早い",
                desc: "男性は一般的に体重が重いため、インソールの消耗が早くなります。女性が6ヶ月使えるところ、男性は3〜4ヶ月で交換が必要になる場合があります。セット購入で予備を確保しておきましょう。",
              },
              {
                title: "足の臭い対策を併用する",
                desc: "男性は女性より足の発汗量が多く、インソールの衛生管理が重要です。抗菌防臭機能付きのインソールを選ぶか、定期的に洗浄・乾燥させましょう。消臭スプレーの併用もおすすめです。",
              },
              {
                title: "サイズが大きい場合の対処法",
                desc: "28cm以上の方はピットソールのLサイズ（26.0〜28.0cm）かスリムアップインソールのフリーサイズが選択肢になります。29cm以上の方はスリムアップインソール一択。カットの際は慎重に調整しましょう。",
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

      {/* 比較表 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            男性目線でピットソール vs スリムアップインソールを比較
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">比較項目</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">ピットソール</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">スリムアップインソール</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "科学的根拠", p: "◎ 世界特許+臨床データ", s: "○ 整体師監修" },
                    { item: "サイズ対応", p: "○ 28.0cmまで", s: "◎ フリーサイズ" },
                    { item: "ビジネス靴対応", p: "◎", s: "◎" },
                    { item: "コスパ（セット）", p: "○ 4,378円/足", s: "○ 4,480円/足" },
                    { item: "抗菌防臭", p: "○", s: "◎ 抗菌防臭加工" },
                    { item: "耐久性", p: "○", s: "○" },
                    { item: "おすすめタイプ", p: "エビデンス重視", s: "コスパ・サイズ重視" },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900 font-medium">{row.item}</td>
                      <td className="py-3 px-4 text-gray-700">{row.p}</td>
                      <td className="py-3 px-4 text-gray-700">{row.s}</td>
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
            <Link href="/articles/pitsole-mens/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ピットソールは男性でも使える？メンズの口コミ</p>
              <p className="text-xs text-gray-500 mt-1">ピットソールの男性向けサイズ・口コミを解説</p>
            </Link>
            <Link href="/articles/walking-insole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ウォーキング用インソールおすすめ3選</p>
              <p className="text-xs text-gray-500 mt-1">歩きやすさと痩せ効果を両立するインソール</p>
            </Link>
            <Link href="/articles/cheap-insole/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールの安いおすすめ比較</p>
              <p className="text-xs text-gray-500 mt-1">コスパ重視で選ぶダイエットインソール</p>
            </Link>
            <Link href="/ranking/" className="block p-3 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめ3選を徹底比較</p>
              <p className="text-xs text-gray-500 mt-1">ピットソール・ランウェイキュアソール・スリムアップインソールを比較</p>
            </Link>
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
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            まとめ：男性はピットソールかスリムアップインソールがおすすめ
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              男性向けダイエットインソールは、エビデンス重視なら<strong>ピットソール</strong>、コスパ重視なら<strong>スリムアップインソール</strong>がおすすめです。ランウェイキュアソールは女性向けサイズのため、男性には対応していません。
            </p>
            <p>
              男性は体重が重い分、歩行時のカロリー消費が大きく、インソールの効果を実感しやすい傾向があります。通勤靴に入れて毎日使うだけで、特別な運動なしに効果を得られるのが最大のメリットです。
            </p>
            <p>
              ビジネスシューズとの相性は紐靴タイプが最も良好。セット購入で通勤用・プライベート用を確保し、毎日の歩行をダイエットに活用しましょう。
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
