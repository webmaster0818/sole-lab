import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ランニング用インソールおすすめ5選｜走る人向けの選び方ガイド",
  description:
    "ランニング用インソールのおすすめ5選を紹介。走行時の衝撃吸収・膝や足裏の負担軽減に最適なインソールの選び方を解説。ピットソール・ランウェイキュアソール・スリムアップインソールの比較も。",
  alternates: {
    canonical: "https://sole-laboratory.com/articles/running-insole/",
  },
  openGraph: {
    title: "ランニング用インソールおすすめ5選｜走る人向けの選び方ガイド",
    description:
      "ランニング用インソールのおすすめ5選を紹介。走行時の衝撃吸収・膝や足裏の負担軽減に最適なインソールの選び方を解説。",
    url: "https://sole-laboratory.com/articles/running-insole/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ランニング用インソールおすすめ5選｜走る人向けの選び方ガイド",
  description:
    "ランニング用インソールのおすすめ5選を紹介。走行時の衝撃吸収・膝や足裏の負担軽減に最適なインソールの選び方を解説。",
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
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ランニング用インソールはどのくらいで交換すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ランニング用インソールの交換目安は走行距離500〜800kmが一般的です。週に30km走る方であれば4〜6ヶ月程度になります。クッション性の低下やヘタリを感じたら早めの交換をおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ランニングシューズに最初から入っている中敷きと何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "純正の中敷きは薄いフラットなものが多く、個人の足形に合わせた設計ではありません。高機能インソールはアーチサポートや衝撃吸収素材を搭載し、足裏の荷重分散や走行効率の向上が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "初心者ランナーにもインソールは必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "初心者ランナーにこそインソールをおすすめします。走り方が安定していない初心者は足や膝に余計な負担がかかりやすく、インソールによる衝撃吸収とアーチサポートが怪我予防に役立ちます。",
      },
    },
    {
      "@type": "Question",
      name: "ランニング用インソールは普段履きの靴にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使用は可能ですが、ランニング用は衝撃吸収を重視した厚めの設計が多いため、普段履きの靴に入れると窮屈に感じることがあります。兼用したい場合は薄型でマルチユースに対応したモデルを選ぶとよいでしょう。",
      },
    },
    {
      "@type": "Question",
      name: "扁平足でもランニング用インソールは効果がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "扁平足の方にこそランニング用インソールは効果的です。土踏まずのアーチを適切にサポートすることで、着地時の過回内（オーバープロネーション）を抑制し、膝や脛の痛みの予防につながります。",
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
      name: "ランニング用インソールおすすめ",
      item: "https://sole-laboratory.com/articles/running-insole/",
    },
  ],
};

export default function RunningInsolePage() {
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
      <Breadcrumb items={[{ label: "知識・コラム", href: "/articles/" }, { label: "ランニング用インソールおすすめ" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-[#0ea5e9] font-semibold mb-3">
            2026年最新版
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランニング用インソール
            <br className="md:hidden" />
            おすすめ<span className="text-[#0ea5e9]">5選</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ジョギングからマラソンまで、走る人の足を守るインソールを厳選。
            <br className="hidden md:block" />
            衝撃吸収・アーチサポート・走行効率を高める選び方ガイドです。
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
              <a href="#why" className="hover:text-[#0ea5e9] transition-colors">
                1. ランニングにインソールが必要な理由
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:text-[#0ea5e9] transition-colors">
                2. ランニング用インソールの選び方4つのポイント
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-[#0ea5e9] transition-colors">
                3. ランニング用インソールおすすめ5選
              </a>
            </li>
            <li>
              <a href="#usage" className="hover:text-[#0ea5e9] transition-colors">
                4. ランニングインソールの正しい使い方
              </a>
            </li>
            <li>
              <a href="#training" className="hover:text-[#0ea5e9] transition-colors">
                5. インソールと組み合わせたいトレーニング
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#0ea5e9] transition-colors">
                6. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[#0ea5e9] transition-colors">
                7. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Section 1 */}
        <section id="why" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            ランニングにインソールが必要な理由
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランニングは健康維持やダイエットに効果的な運動ですが、着地のたびに体重の2〜3倍の衝撃が足にかかります。この繰り返しの衝撃は、足裏の痛み、膝の故障、シンスプリントなどさまざまなトラブルの原因になります。インソールを導入することで、これらのリスクを大幅に軽減できます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            着地衝撃の吸収と分散
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランニング時の着地では、体重の約2.5倍の力が足裏に集中します。1kmあたり約700歩として、10km走れば7,000回もの衝撃が足に加わる計算です。高機能インソールは衝撃吸収素材を使用し、この負荷を足裏全体に分散させることで、特定部位への過度なストレスを防ぎます。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            足裏アーチの崩れを防止
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            長距離を走ると筋肉が疲労し、足裏のアーチが徐々に低下していきます。アーチが崩れると着地時の衝撃吸収機能が失われ、足底筋膜炎やシンスプリントのリスクが高まります。アーチサポート機能のあるインソールは、疲労時にもアーチを適切な高さに保ち、怪我を予防します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            走行フォームの安定
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            足元が不安定だと、膝が内側に入ったり（ニーイン）、足首が過度に回内したりと、フォームが乱れます。フォームの乱れは走行効率の低下だけでなく、膝や股関節への過度な負担にもつながります。インソールで足元を安定させることで、自然と正しいフォームが維持でき、結果として走行効率も向上します。
          </p>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
            ダイエット効果の最大化
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ランニングでダイエットを目指す方にとって、怪我による中断は最大の敵です。インソールで足を守りながら安定したフォームで走ることで、継続しやすくなり、長期的なダイエット効果が期待できます。また、正しい姿勢での走行は筋肉の使い方を最適化し、消費カロリーの向上にもつながります。
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">ポイント：</span>
              ランニング用インソールは「怪我予防」「走行効率の向上」「ダイエット効果の最大化」の3つの面で、走る人をサポートします。初心者から上級者まで、すべてのランナーに導入を推奨します。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-to-choose" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            ランニング用インソールの選び方4つのポイント
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            ランニング用インソールを選ぶ際に重要な4つのチェックポイントを解説します。用途や足の特徴に合わせて、最適なインソールを見つけましょう。
          </p>

          {/* Point 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                衝撃吸収性能
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ランニング用インソールで最も重要なのが衝撃吸収性能です。かかとと前足部にクッション性の高い素材が配置されているものを選びましょう。EVA（エチレン酢酸ビニル）やポリウレタン、ジェル素材など、衝撃吸収に優れた素材を使用しているかをチェックします。ただし、柔らかすぎると安定性が失われるため、適度な硬さとのバランスが重要です。
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                アーチサポートの形状
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              足裏のアーチの高さや形状は人それぞれ異なります。自分の足に合ったアーチサポートを選ぶことが重要です。扁平足気味の方は高めのアーチサポートが必要で、ハイアーチの方は低めのものが適しています。特許技術に基づく3点サポート構造のインソールであれば、内側縦アーチ・外側縦アーチ・横アーチをバランスよく支え、走行時の安定性が大幅に向上します。
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                通気性と軽量性
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ランニング中は大量の汗をかくため、通気性は快適さを左右する重要な要素です。メッシュ素材や通気孔を備えたインソールを選ぶと、蒸れを防ぎ快適に走り続けられます。また、重量も見逃せないポイント。インソール1枚あたり数十グラムの差が、長距離走では大きな違いとなります。できるだけ軽量な製品を選びましょう。
            </p>
          </div>

          {/* Point 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                耐久性とコストパフォーマンス
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              ランニング用インソールは消耗品です。走行距離500〜800kmで交換が必要になるため、継続的なコストを考慮して選びましょう。安価すぎるものはすぐにヘタるため、結果的にコストが高くつきます。まとめ買い割引があるブランドや、耐久性の高い素材を使用した製品を選ぶことで、長期的なコストパフォーマンスが向上します。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="recommend" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            ランニング用インソールおすすめ5選
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            上記の選び方を踏まえて、ランニングに適したインソールを5つ厳選しました。衝撃吸収・アーチサポート・走行安定性に優れたモデルを中心に紹介します。
          </p>

          {/* Product 1: Pitsole */}
          <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-[#0ea5e9] text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 1
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ピットソール（Pitsole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              世界特許取得のBMZ社「足の骨格アライメント理論」に基づく設計で、ランニング時の足裏安定性に優れたインソールです。3点サポート構造が着地から蹴り出しまでの重心移動をスムーズにし、走行効率を高めます。累計200万足の販売実績が信頼性の高さを証明しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>世界特許の3点サポート構造で着地時の安定性が高い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>XS〜Lの4サイズ展開（21〜27.5cm対応）で男女兼用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>まとめ買い割引でランナーのコスト負担を軽減</span>
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
              おすすめ 2
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              ランウェイキュアソール（RUNWAY CURE SOLE）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美姿勢サポートに特化したインソールで、ランニング中のフォーム改善に効果を発揮します。足裏のアーチサポートと骨盤周りの筋肉活性化を促す設計により、正しいランニングフォームの維持をサポートします。薄型設計のため、ランニングシューズ内の空間を圧迫しません。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>姿勢改善機能でランニングフォームが安定</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>薄型設計でシューズ内の快適性を損なわない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>骨盤周りの筋肉を効率的に使えるよう設計</span>
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
              おすすめ 3
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              スリムアップインソール（Slim Up Insole）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              美容整体師が監修した機能性インソールで、正しい重心移動を促す設計が特徴です。ランニング時に適切な筋肉を使いやすくなるため、走行効率の向上と同時にダイエット効果も期待できます。男女兼用で幅広いサイズに対応しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>美容整体師監修で身体のバランスを最適化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>正しい重心移動で走行効率とダイエット効果を両立</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>男女兼用の幅広いサイズ展開</span>
              </li>
            </ul>
            <Link
              href="/slim-up-insole/"
              className="inline-block text-sm font-bold text-[#0ea5e9] hover:underline"
            >
              スリムアップインソールの詳細レビューを見る &rarr;
            </Link>
          </div>

          {/* Product 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 4
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              SIDAS（シダス） ラン3Dプロテクト
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              フランスのインソール専門メーカーSIDASが開発したランニング専用モデルです。かかと部分にジェルパッドを搭載し、着地時の衝撃を効率的に吸収。3D形状が足裏にフィットし、長距離走でも安定した走りをサポートします。ランニング専用に開発された製品だけあり、走行時の安定感は抜群です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>かかとのジェルパッドで着地衝撃を効率的に吸収</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>3D形状で足裏へのフィット感が高い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>ランニング専門メーカーの知見を凝縮した設計</span>
              </li>
            </ul>
          </div>

          {/* Product 5 */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 mb-6 shadow-sm relative">
            <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ 5
            </span>
            <h3 className="text-base md:text-xl font-bold text-gray-900 mt-2 mb-3">
              Superfeet（スーパーフィート） RUN Comfort
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              アメリカ発のインソールブランドSuperfeetのランニング特化モデルです。独自のヒールカップ構造が足のアライメントを整え、安定した着地を実現。前足部のフォーム素材が蹴り出し時の反発力を高め、走行効率の向上に貢献します。耐久性にも優れ、長期間の使用が可能です。
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>深めのヒールカップで足のアライメントを最適化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>前足部の反発素材で蹴り出し効率を向上</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0ea5e9] font-bold mt-0.5">+</span>
                <span>高い耐久性で長期使用が可能</span>
              </li>
            </ul>
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

        {/* Section 4 */}
        <section id="usage" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            ランニングインソールの正しい使い方
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの効果を最大限に引き出すための正しい使い方を紹介します。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                純正の中敷きを取り外してから使用する
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ランニングシューズに最初から入っている中敷きは必ず取り外してからインソールを入れましょう。重ねて使用すると靴内部の空間が狭くなり、足指の動きが制限されてしまいます。中敷きが接着されている場合は、無理に剥がさず、薄型のインソールを上から重ねるか、別のシューズでの使用を検討してください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                最初は短い距離から慣らす
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                新しいインソールを入れたら、いきなり長距離を走らず、まず3〜5kmの短い距離から始めましょう。足がインソールの形状に馴染むまで1〜2週間かかることがあります。違和感がある場合は無理をせず、徐々に距離を伸ばしていくことで、足への負担なくインソールに慣れることができます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                定期的な状態チェックと交換
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                走行距離500〜800kmを目安にインソールの状態をチェックしましょう。かかと部分のヘタリ、アーチサポートの潰れ、表面素材の摩耗が見られたら交換のタイミングです。月間走行距離を記録しておくと、交換時期の管理が容易になります。性能が低下したインソールを使い続けると怪我のリスクが高まるため、早めの交換を心がけてください。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                サイズ調整のコツ
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                カットタイプのインソールは、少しずつ切り詰めてフィッティングを調整します。最初から大きめにカットし、靴に入れてみて窮屈な部分を少しずつ追加カットするのがコツです。特につま先部分は余裕を持たせ、足指が自由に動く空間を確保しましょう。詳しいカット方法は
                <Link href="/articles/size-adjustment/" className="text-[#0ea5e9] hover:underline">サイズ調整方法の記事</Link>
                で解説しています。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="training" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            インソールと組み合わせたいトレーニング
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの効果をさらに高めるために、ランナーにおすすめのトレーニングを紹介します。足の筋力を強化することで、インソールとの相乗効果が生まれます。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                タオルギャザー（足指トレーニング）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                床にタオルを広げ、足指だけで手前に手繰り寄せるトレーニングです。足裏の内在筋を鍛えることで、アーチの維持力が向上し、インソールのサポート効果と合わせてより安定した着地が可能になります。片足20回を3セット、毎日続けることを目標にしましょう。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                カーフレイズ（ふくらはぎ強化）
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                つま先立ちでかかとを上げ下げするトレーニングです。ふくらはぎの筋力を強化することで、着地時の衝撃吸収力が向上し、インソールと合わせて膝や足首への負担をさらに軽減できます。段差を使って可動域を広げると効果的です。片足15回を3セットが目安です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                片足バランストレーニング
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                片足で30秒間立つことを目標とするバランストレーニングです。足首周りの安定性が向上し、インソールによるアライメント矯正効果と組み合わせることで、走行中の足のブレを大幅に軽減できます。慣れてきたら目を閉じて行うとさらに効果が高まります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">
                ランニング前後のストレッチ
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                走る前は動的ストレッチ（レッグスイング、バットキック）で筋肉を温め、走った後は静的ストレッチ（ふくらはぎ伸ばし、足底筋膜ストレッチ）で筋肉をほぐしましょう。ストレッチとインソールの組み合わせにより、怪我予防効果が格段に向上します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            よくある質問（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                ランニング用インソールはどのくらいで交換すべきですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                ランニング用インソールの交換目安は走行距離500〜800kmが一般的です。週に30km走る方であれば4〜6ヶ月程度になります。クッション性の低下やヘタリを感じたら早めの交換をおすすめします。かかと部分を指で押してみて、反発力が弱くなっていたら交換のサインです。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                ランニングシューズに最初から入っている中敷きと何が違いますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                純正の中敷きは薄いフラットなものが多く、個人の足形に合わせた設計ではありません。高機能インソールはアーチサポートや衝撃吸収素材を搭載し、足裏の荷重分散や走行効率の向上が期待できます。特に長距離を走る方や足のトラブルがある方は、専用インソールの導入で大きな改善を実感できるでしょう。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                初心者ランナーにもインソールは必要ですか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                初心者ランナーにこそインソールをおすすめします。走り方が安定していない初心者は足や膝に余計な負担がかかりやすく、インソールによる衝撃吸収とアーチサポートが怪我予防に役立ちます。最初から正しいフォームで走る習慣がつくため、上達も早くなります。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                ランニング用インソールは普段履きの靴にも使えますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                使用は可能ですが、ランニング用は衝撃吸収を重視した厚めの設計が多いため、普段履きの靴に入れると窮屈に感じることがあります。兼用したい場合は薄型でマルチユースに対応したモデルを選ぶとよいでしょう。普段使いには別途スニーカー用インソールの導入もおすすめです。
              </div>
            </details>

            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 text-sm md:text-base font-bold text-gray-900 flex items-center justify-between">
                扁平足でもランニング用インソールは効果がありますか？
                <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                扁平足の方にこそランニング用インソールは効果的です。土踏まずのアーチを適切にサポートすることで、着地時の過回内（オーバープロネーション）を抑制し、膝や脛の痛みの予防につながります。アーチサポートが高めのモデルを選ぶとより効果的です。
              </div>
            </details>
          </div>
        </section>

        {/* Section 7: Summary */}
        <section id="summary" className="mb-14">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-6">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ランニング用インソールは、衝撃吸収・アーチサポート・走行安定性の3つの面でランナーの足を守り、パフォーマンス向上に貢献します。選ぶ際は衝撃吸収性能、アーチサポートの形状、通気性と軽量性、耐久性の4つをチェックしましょう。
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            特にダイエット目的でランニングを始める方にとって、インソールは怪我を予防し、走ることを継続するための重要なアイテムです。正しい姿勢で効率的に走ることで、消費カロリーの向上も期待できます。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 mb-6">
            <p className="text-sm font-bold text-gray-900 mb-3">
              今回紹介した主要3商品
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <Link
                  href="/pitsole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ピットソール
                </Link>
                ：世界特許の3点サポートで走行時の安定性抜群。まとめ買い割引でコスパも優秀。
              </li>
              <li>
                <Link
                  href="/runway-cure-sole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  ランウェイキュアソール
                </Link>
                ：美姿勢サポートでフォーム改善。薄型設計でシューズ内の快適性を維持。
              </li>
              <li>
                <Link
                  href="/slim-up-insole/"
                  className="text-[#0ea5e9] font-bold hover:underline"
                >
                  スリムアップインソール
                </Link>
                ：美容整体師監修。正しい重心移動で走行効率とダイエット効果を両立。
              </li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            インソールの導入は、ランニングシューズを買い替えるよりも手軽で、今のシューズのまま走行環境を大幅に改善できます。足のトラブルが起きる前に、予防的にインソールを取り入れて、快適なランニングライフを楽しみましょう。
          </p>

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
            <Link href="/articles/walking-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ウォーキング用インソールおすすめ</p>
            </Link>
            <Link href="/articles/sneaker-insole/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">スニーカー用インソールおすすめ5選</p>
            </Link>
            <Link href="/articles/flat-feet/" className="block p-4 border border-[#f3e0e4] rounded-xl hover:bg-[#fdf2f4] transition-colors">
              <p className="text-sm font-semibold text-gray-900">扁平足・浮き指にインソールは効果ある？</p>
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
