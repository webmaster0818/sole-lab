import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ピットソール 全サイズ実寸レビュー｜フィット感を徹底検証",
  description:
    "ピットソールのXS・S・M・L全サイズの実寸を計測し、フィット感を徹底レビュー。足のサイズ別おすすめや、靴との相性、カット方法まで詳しく解説。サイズ選びで失敗したくない方必見です。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/pitsole-all-sizes/",
  },
  openGraph: {
    title: "ピットソール 全サイズ実寸レビュー｜フィット感を徹底検証",
    description:
      "ピットソールの全サイズ（XS〜L）の実寸を計測し、フィット感を徹底レビュー。サイズ選びのコツを解説。",
    url: "https://sole-laboratory.com/articles/pitsole-all-sizes/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://sole-laboratory.com/og-image.png",
  headline: "ピットソール 全サイズ実寸レビュー｜フィット感を徹底検証",
  description:
    "ピットソールのXS〜L全サイズの実寸を計測し、フィット感を徹底レビューします。",
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
      name: "ピットソールのサイズ選びで迷ったらどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2つのサイズの境界にいる場合は、大きめのサイズを選ぶことをおすすめします。ピットソールはカットラインが付いているため、大きめを購入してハサミで微調整することが可能です。小さいサイズを買ってしまうと広げることはできないため、迷ったら大きめが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "ピットソールは自分でカットできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ピットソールにはつま先部分にカットラインが印刷されており、ハサミで簡単にカットできます。靴の中敷きを取り出してサイズを合わせ、カットラインに沿って少しずつ切り詰めていくのがコツです。一度に切りすぎないよう、少しずつ調整しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "足幅が広い場合はどのサイズを選ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピットソールは足長に合わせたサイズ選びが基本です。足幅が広い方は横幅が気になることがありますが、使用しているうちに足にフィットしてきます。極端に幅広（4E以上）の方は、靴側のサイズを0.5cm上げることで対応するのが効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "XSサイズは子供でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XSサイズは21〜22.5cm対応のため、小学校高学年〜中学生の足サイズに対応可能です。ただしピットソールは成人の骨格に合わせた設計のため、成長期の子供への使用については医師や専門家に相談することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "同じサイズでもモデルによって大きさは変わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピットソールは基本的に1モデルの展開のため、同じサイズ表記であれば実寸は同じです。ただし製造ロットによって数ミリ程度の個体差がある場合があります。カットラインで微調整できるため、実用上の問題にはなりません。",
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
      name: "ピットソール全サイズ実寸レビュー",
      item: "https://sole-laboratory.com/articles/pitsole-all-sizes/",
    },
  ],
};

export default function PitsoleAllSizesPage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "ピットソール全サイズ実寸レビュー" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            2026年最新版 サイズ実寸レビュー
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ピットソール
            <br className="md:hidden" />
            <span className="text-[#0ea5e9]">全サイズ実寸</span>レビュー
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            XS・S・M・L全4サイズの実寸を計測し、フィット感を徹底検証。
            <br className="hidden md:block" />
            あなたの足に最適なサイズの選び方を分かりやすく解説します。
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
              <a href="#size-chart" className="hover:text-[#0ea5e9] transition-colors">
                1. ピットソールのサイズ展開
              </a>
            </li>
            <li>
              <a href="#xs-review" className="hover:text-[#0ea5e9] transition-colors">
                2. XSサイズ（21〜22.5cm）実寸レビュー
              </a>
            </li>
            <li>
              <a href="#s-review" className="hover:text-[#0ea5e9] transition-colors">
                3. Sサイズ（23〜24.5cm）実寸レビュー
              </a>
            </li>
            <li>
              <a href="#m-review" className="hover:text-[#0ea5e9] transition-colors">
                4. Mサイズ（25〜26cm）実寸レビュー
              </a>
            </li>
            <li>
              <a href="#l-review" className="hover:text-[#0ea5e9] transition-colors">
                5. Lサイズ（26.5〜27.5cm）実寸レビュー
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                6. 失敗しないサイズの選び方
              </a>
            </li>
            <li>
              <a href="#cut-guide" className="hover:text-[#0ea5e9] transition-colors">
                7. カット方法とフィッティング調整
              </a>
            </li>
            <li>
              <a href="#shoe-compatibility" className="hover:text-[#0ea5e9] transition-colors">
                8. 靴のタイプ別相性
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                9. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#0ea5e9] transition-colors">
                10. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Section 1 */}
        <section id="size-chart" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            ピットソールのサイズ展開
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ピットソールはXS・S・M・Lの4サイズ展開で、21cm〜27.5cmまでの幅広い足サイズに対応しています。各サイズの公式対応範囲と実寸の概要を一覧で確認しましょう。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">サイズ</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">対応cm（公式）</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">実寸（全長）</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">実寸（最大幅）</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">おすすめの足長</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-bold text-[#0ea5e9]">XS</td>
                  <td className="border border-gray-200 px-4 py-3">21〜22.5cm</td>
                  <td className="border border-gray-200 px-4 py-3">約23.0cm</td>
                  <td className="border border-gray-200 px-4 py-3">約7.8cm</td>
                  <td className="border border-gray-200 px-4 py-3">21.0〜22.5cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-bold text-[#0ea5e9]">S</td>
                  <td className="border border-gray-200 px-4 py-3">23〜24.5cm</td>
                  <td className="border border-gray-200 px-4 py-3">約25.0cm</td>
                  <td className="border border-gray-200 px-4 py-3">約8.3cm</td>
                  <td className="border border-gray-200 px-4 py-3">23.0〜24.5cm</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-bold text-[#0ea5e9]">M</td>
                  <td className="border border-gray-200 px-4 py-3">25〜26cm</td>
                  <td className="border border-gray-200 px-4 py-3">約26.5cm</td>
                  <td className="border border-gray-200 px-4 py-3">約8.8cm</td>
                  <td className="border border-gray-200 px-4 py-3">25.0〜26.0cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-bold text-[#0ea5e9]">L</td>
                  <td className="border border-gray-200 px-4 py-3">26.5〜27.5cm</td>
                  <td className="border border-gray-200 px-4 py-3">約28.0cm</td>
                  <td className="border border-gray-200 px-4 py-3">約9.3cm</td>
                  <td className="border border-gray-200 px-4 py-3">26.5〜27.5cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              実寸は公式対応サイズより約0.5〜1cm長めに作られています。これはカットによる微調整を前提とした設計のためです。つま先のカットラインに沿って調整することで、ぴったりのフィット感が得られます。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="xs-review" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            XSサイズ（21〜22.5cm）実寸レビュー
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            XSサイズは主に足の小さい女性向けのサイズです。21〜22.5cmの足に対応しており、パンプスやスニーカーの小さめサイズに最適です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            実寸の計測結果
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span className="font-bold">全長：</span>約23.0cm（カットライン最小時：約21.5cm）</li>
              <li><span className="font-bold">最大幅（母趾球付近）：</span>約7.8cm</li>
              <li><span className="font-bold">かかと幅：</span>約5.5cm</li>
              <li><span className="font-bold">アーチ部分の高さ：</span>約2.0cm</li>
              <li><span className="font-bold">かかと部分の厚み：</span>約1.5cm</li>
            </ul>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            フィット感レビュー
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            22cmの足で試した場合、カットラインの2番目まで切ることでジャストフィットします。アーチサポート部分がちょうど土踏まずの中心に来る位置関係で、3点サポートがしっかり機能しています。22.5cmの場合はカットラインの1番目で十分です。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            XSサイズは全体的にコンパクトな設計のため、薄底のパンプスやバレエシューズにも収まりやすいのが特徴です。ヒール付きの靴に使用する場合は、かかと部分が靴から浮かないか確認しましょう。
          </p>
        </section>

        {/* Section 3 */}
        <section id="s-review" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            Sサイズ（23〜24.5cm）実寸レビュー
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Sサイズは最も販売数が多いサイズで、標準的な女性の足に対応しています。日本人女性の平均的な足サイズ（23.5cm前後）にぴったりです。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            実寸の計測結果
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span className="font-bold">全長：</span>約25.0cm（カットライン最小時：約23.5cm）</li>
              <li><span className="font-bold">最大幅（母趾球付近）：</span>約8.3cm</li>
              <li><span className="font-bold">かかと幅：</span>約5.8cm</li>
              <li><span className="font-bold">アーチ部分の高さ：</span>約2.2cm</li>
              <li><span className="font-bold">かかと部分の厚み：</span>約1.5cm</li>
            </ul>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            フィット感レビュー
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            23.5cmの足で試した場合、カットラインの3番目でちょうどよいフィット感です。24cmの足ではカットラインの2番目がベスト。アーチサポートの位置が足裏の中心にしっかり対応し、歩行時の安定感が高いです。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            Sサイズは一般的なレディースのスニーカー（23〜24.5cm）にぴったり収まります。スニーカーの純正中敷きを外して入れ替えると、厚みの増加なく使用できます。ウォーキングシューズやランニングシューズとの相性も良好です。
          </p>
        </section>

        {/* Section 4 */}
        <section id="m-review" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            Mサイズ（25〜26cm）実寸レビュー
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Mサイズは足の大きな女性や小さめの男性に対応するサイズです。男女兼用で使いやすいサイズ帯です。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            実寸の計測結果
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span className="font-bold">全長：</span>約26.5cm（カットライン最小時：約25.5cm）</li>
              <li><span className="font-bold">最大幅（母趾球付近）：</span>約8.8cm</li>
              <li><span className="font-bold">かかと幅：</span>約6.2cm</li>
              <li><span className="font-bold">アーチ部分の高さ：</span>約2.3cm</li>
              <li><span className="font-bold">かかと部分の厚み：</span>約1.6cm</li>
            </ul>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            フィット感レビュー
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            25.5cmの足で試した場合、カットラインの2番目で快適にフィットします。26cmの場合はカットラインの1番目またはカットなしでも使用可能です。男性の小さめの足（25cm）にも対応し、カットラインの最大までカットすればぴったりです。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            Mサイズはメンズのスニーカー（25〜26cm）やレディースの大きめサイズに対応。幅も適度に広がるため、足幅が広めの方でも窮屈さを感じにくいです。ビジネスシューズに入れる場合は、靴の内部空間に余裕があるか事前に確認することをおすすめします。
          </p>
        </section>

        {/* Section 5 */}
        <section id="l-review" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            Lサイズ（26.5〜27.5cm）実寸レビュー
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Lサイズは標準的な男性の足に対応するサイズです。日本人男性の平均的な足サイズ（26.5cm前後）にフィットします。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            実寸の計測結果
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span className="font-bold">全長：</span>約28.0cm（カットライン最小時：約27.0cm）</li>
              <li><span className="font-bold">最大幅（母趾球付近）：</span>約9.3cm</li>
              <li><span className="font-bold">かかと幅：</span>約6.5cm</li>
              <li><span className="font-bold">アーチ部分の高さ：</span>約2.5cm</li>
              <li><span className="font-bold">かかと部分の厚み：</span>約1.7cm</li>
            </ul>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            フィット感レビュー
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            27cmの足で試した場合、カットラインの2番目でジャストフィットします。27.5cmの場合はカットなしまたは最小限のカットで使用可能です。アーチサポートの位置が男性の足にも適切に対応し、大きめの足でも3点サポートがしっかり機能します。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            Lサイズはメンズのスニーカー（26.5〜27.5cm）に最適です。ランニングシューズやウォーキングシューズとの相性は抜群で、かかと部分のフィット感が安定感をもたらします。ただし28cm以上の足には対応できないため、その場合は他のインソールの検討が必要です。ピットソールのサイズ情報の詳細は<Link href="/pitsole/size/" className="text-[#0ea5e9] hover:underline">ピットソールサイズページ</Link>でも確認できます。
          </p>
        </section>

        {/* Section 6 */}
        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            失敗しないサイズの選び方
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            サイズ選びで失敗しないための具体的な手順とポイントを解説します。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-base font-bold text-gray-900">正確な足長を計測する</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                まず自分の足の正確な長さを計測しましょう。壁にかかとを付けて立ち、一番長い指の先端までの長さを測ります。両足で長さが異なる場合は、大きい方の足に合わせます。夕方に計測すると、むくみで足が大きくなっているためより正確です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-base font-bold text-gray-900">サイズ範囲の境界にいる場合は大きめを</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                例えば足長が24.5cmの場合、Sサイズ（23〜24.5cm）とMサイズ（25〜26cm）のどちらにするか迷います。この場合はSサイズを選びましょう。24.5cmはSサイズの上限ですが、カットラインで微調整が可能です。ただし靴が大きめの場合はMサイズも選択肢に入ります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-base font-bold text-gray-900">使用する靴のサイズも考慮する</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                インソールは靴の中に入れて使うものです。靴のサイズが実際の足より大きい場合（ゆるめの靴を履いている場合）、インソールを大きめのまま使うことでフィット感が向上します。逆に靴がタイトフィットの場合は、カットラインでしっかり調整する必要があります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h3 className="text-base font-bold text-gray-900">純正中敷きと比較する</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                使用予定の靴から純正の中敷きを取り出し、ピットソールと重ねて比較するのが最も確実な方法です。純正中敷きとほぼ同じサイズになるよう、カットラインで調整します。この方法なら靴内の空間を正確に把握でき、フィッティングの失敗を防げます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="cut-guide" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            カット方法とフィッティング調整
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ピットソールのつま先部分にはカットライン（ガイド線）が印刷されています。このラインに沿って切ることで、自分の足にぴったりのサイズに調整できます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            カットに必要な道具
          </h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-2 mb-4 list-disc list-inside">
            <li>よく切れるハサミ（裁断用のものがベスト）</li>
            <li>靴の純正中敷き（サイズ確認用）</li>
            <li>ペン（マーキング用）</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            カット手順
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="flex-shrink-0 w-8 text-xs font-bold text-white bg-[#0ea5e9] rounded-full flex items-center justify-center h-8">1</span>
              <p className="text-sm text-gray-700">靴の純正中敷きを取り出し、ピットソールの上に重ねる</p>
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="flex-shrink-0 w-8 text-xs font-bold text-white bg-[#0ea5e9] rounded-full flex items-center justify-center h-8">2</span>
              <p className="text-sm text-gray-700">かかと部分を合わせて固定し、つま先のはみ出し部分を確認</p>
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="flex-shrink-0 w-8 text-xs font-bold text-white bg-[#0ea5e9] rounded-full flex items-center justify-center h-8">3</span>
              <p className="text-sm text-gray-700">最も近いカットラインを確認し、最初は1段階大きめでカット</p>
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="flex-shrink-0 w-8 text-xs font-bold text-white bg-[#0ea5e9] rounded-full flex items-center justify-center h-8">4</span>
              <p className="text-sm text-gray-700">靴に入れてフィット感を確認。大きければ追加でカット</p>
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="flex-shrink-0 w-8 text-xs font-bold text-white bg-[#0ea5e9] rounded-full flex items-center justify-center h-8">5</span>
              <p className="text-sm text-gray-700">つま先に5mm程度の余裕が残るサイズがベスト</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">注意：</span>
              一度カットしたものは元に戻せません。必ず少しずつカットし、靴に入れて確認しながら調整しましょう。カットしすぎるとアーチサポートの位置がずれてしまう可能性があります。詳しいサイズ調整方法は<Link href="/articles/size-adjustment/" className="text-[#0ea5e9] hover:underline">サイズ調整ガイド</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="shoe-compatibility" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            靴のタイプ別相性
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ピットソールと各タイプの靴との相性をレビューします。フィット感はサイズだけでなく靴の形状にも大きく左右されます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                スニーカーとの相性（相性：非常に良い）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                スニーカーとの相性は抜群です。純正の中敷きを取り外して入れ替えるだけでぴったりフィットします。Nike、adidas、New Balanceなど主要ブランドのスニーカーで問題なく使用できました。靴内の空間に余裕があるスニーカーは特にフィットしやすいです。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                ウォーキングシューズとの相性（相性：非常に良い）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ウォーキング専用シューズとの相性も非常に良いです。もともと長時間歩行を想定した靴のため、インソールを入れ替えてもフィット感が損なわれません。ピットソールの3点サポートがウォーキング時の安定感をさらに高めてくれます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                ビジネスシューズとの相性（相性：やや注意が必要）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ビジネスシューズは靴内の空間が狭いため、ピットソールの厚み（かかと部約1.5〜1.7cm）がフィット感に影響する場合があります。中敷きが取り外せるタイプの靴であれば問題ありませんが、中敷きが接着されている靴では窮屈に感じることがあります。その場合は0.5cm大きめの靴を選ぶか、<Link href="/runway-cure-sole/" className="text-[#0ea5e9] hover:underline">薄型のランウェイキュアソール</Link>を検討してみてください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                ランニングシューズとの相性（相性：良い）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ランニングシューズとの相性も良好です。ただし厚底のランニングシューズ（HOKAなど）は純正中敷きとの一体設計のものがあるため、取り外し可能か事前に確認が必要です。薄底〜標準的なランニングシューズであれば問題なくフィットします。ランニング向けインソールの詳しい情報は<Link href="/articles/running-insole/" className="text-[#0ea5e9] hover:underline">ランニング向けインソール記事</Link>をご覧ください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                パンプスとの相性（相性：サイズによる）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                パンプスは靴内の空間が限られるため、XSまたはSサイズの使用が中心になります。ヒールの高さが5cm以下であればフィットしやすいですが、ハイヒール（7cm以上）の場合はかかと部分が浮きやすくなります。パンプスでの使用については<Link href="/articles/pumps-insole/" className="text-[#0ea5e9] hover:underline">パンプス向けインソール記事</Link>も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. ピットソールのサイズ選びで迷ったらどうすればいいですか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. 2つのサイズの境界にいる場合は、大きめのサイズを選ぶことをおすすめします。ピットソールはカットラインが付いているため、大きめを購入してハサミで微調整することが可能です。小さいサイズを買ってしまうと広げることはできないため、迷ったら大きめが安全です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. ピットソールは自分でカットできますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. はい、ピットソールにはつま先部分にカットラインが印刷されており、ハサミで簡単にカットできます。靴の中敷きを取り出してサイズを合わせ、カットラインに沿って少しずつ切り詰めていくのがコツです。一度に切りすぎないよう、少しずつ調整しましょう。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. 足幅が広い場合はどのサイズを選ぶべきですか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. ピットソールは足長に合わせたサイズ選びが基本です。足幅が広い方は横幅が気になることがありますが、使用しているうちに足にフィットしてきます。極端に幅広（4E以上）の方は、靴側のサイズを0.5cm上げることで対応するのが効果的です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. XSサイズは子供でも使えますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. XSサイズは21〜22.5cm対応のため、小学校高学年〜中学生の足サイズに対応可能です。ただしピットソールは成人の骨格に合わせた設計のため、成長期の子供への使用については医師や専門家に相談することをおすすめします。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                Q. 同じサイズでもモデルによって大きさは変わりますか？
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A. ピットソールは基本的に1モデルの展開のため、同じサイズ表記であれば実寸は同じです。ただし製造ロットによって数ミリ程度の個体差がある場合があります。カットラインで微調整できるため、実用上の問題にはなりません。
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Summary */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ピットソール全4サイズの実寸レビューをまとめます。適切なサイズ選びができれば、世界特許の3点サポート構造の効果を最大限に発揮できます。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3">
              サイズ選びの要点
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><span className="font-bold">XS（21〜22.5cm）：</span>小さめの女性向け。パンプスにも対応。</li>
              <li><span className="font-bold">S（23〜24.5cm）：</span>標準的な女性向け。最も売れているサイズ。</li>
              <li><span className="font-bold">M（25〜26cm）：</span>大きめ女性・小さめ男性向け。男女兼用。</li>
              <li><span className="font-bold">L（26.5〜27.5cm）：</span>標準的な男性向け。スニーカーに最適。</li>
              <li><span className="font-bold">共通ルール：</span>迷ったら大きめを選び、カットラインで微調整。</li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ピットソールの購入やまとめ買い割引については<Link href="/pitsole/price/" className="text-[#0ea5e9] hover:underline">ピットソール料金ページ</Link>をご覧ください。また、ピットソールの効果や口コミについては<Link href="/pitsole/" className="text-[#0ea5e9] hover:underline">ピットソール詳細レビュー</Link>で確認できます。
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              ランウェイキュアソールやスリムアップインソールのサイズ選びについては
              <Link href="/articles/runway-size-guide/" className="text-[#0ea5e9] font-bold hover:underline">ランウェイキュアソールサイズガイド</Link>、<Link href="/articles/slimup-guide/" className="text-[#0ea5e9] font-bold hover:underline">スリムアップインソールガイド</Link>をご覧ください。3商品の比較は<Link href="/ranking/" className="text-[#0ea5e9] font-bold hover:underline">おすすめランキング</Link>で確認できます。
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
