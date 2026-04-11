import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ランウェイキュアソール vs スリムアップインソール徹底比較！",
  description:
    "ランウェイキュアソールとスリムアップインソールを徹底比較。価格・サイズ・機能・監修・口コミ評価まで全項目を比較表付きで解説。あなたに合うダイエットインソールが分かります。",
  alternates: {
    canonical: "https://sole-lab.com/compare/runway-vs-slimup/",
  },
  openGraph: {
    title:
      "ランウェイキュアソール vs スリムアップインソール徹底比較！｜ソールラボ",
    description:
      "ランウェイキュアソールとスリムアップインソールを全項目で比較。価格・機能・口コミの違いが一目で分かる。",
    url: "https://sole-lab.com/compare/runway-vs-slimup/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ランウェイキュアソール vs スリムアップインソール徹底比較！",
  description:
    "ランウェイキュアソールとスリムアップインソールを価格・サイズ・機能・口コミなど全項目で徹底比較。",
  author: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-lab.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ソールラボ",
    url: "https://sole-lab.com",
  },
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ランウェイキュアソールとスリムアップインソールはどちらが安いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "単品価格はランウェイキュアソールが4,980円、スリムアップインソールが6,980円でランウェイキュアソールの方が安いです。ただしセット割引を含めると、ランウェイキュアソールは5足セットで1足2,980円、スリムアップインソールは3足セットで実質1足4,480円となり、いずれもまとめ買いが最もお得です。",
      },
    },
    {
      "@type": "Question",
      name: "男性が使えるのはどちらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スリムアップインソールは男女兼用のフリーサイズで、はさみでカットして調整できるため男性も使用可能です。ランウェイキュアソールはM（22.5〜23.5cm）とL（24.0〜25.0cm）の女性向けサイズのみのため、男性には対応していません。",
      },
    },
    {
      "@type": "Question",
      name: "抗菌防臭機能があるのはどちらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スリムアップインソールには抗菌防臭加工が施されています。ランウェイキュアソールには抗菌防臭の記載はなく、使用後は陰干しでの管理が推奨されています。",
      },
    },
    {
      "@type": "Question",
      name: "どちらが初めてのダイエットインソールにおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性で美姿勢を重視するならランウェイキュアソール、専門家監修や抗菌防臭などの機能性を重視するならスリムアップインソールがおすすめです。価格面ではランウェイキュアソールの方が単品で安いため、まず1足試したい方にはランウェイキュアソールが始めやすいでしょう。",
      },
    },
  ],
};

export default function RunwayVsSlimupPage() {
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

      {/* Breadcrumb */}
      <nav
        aria-label="パンくずリスト"
        className="max-w-4xl mx-auto px-4 py-3 text-xs text-gray-500"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-[#0ea5e9] transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">
            ランウェイキュアソール vs スリムアップインソール
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-indigo-600 font-semibold mb-3">
            2026年4月最新版 ・ 比較検証
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ランウェイキュアソール vs
            <br className="md:hidden" />
            スリムアップインソール
            <br />
            <span className="text-indigo-600">徹底比較！</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            女性向け美姿勢インソール「ランウェイキュアソール」と整体師監修の「スリムアップインソール」。
            <br className="hidden md:block" />
            価格・機能・サイズ・口コミを項目別に比較し、あなたに合う1足を見つけましょう。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm font-bold text-gray-900 mb-3">この記事の内容</p>
          <ol className="space-y-1.5 text-sm text-gray-600">
            <li>
              <a href="#overview" className="hover:text-indigo-600 transition-colors">
                1. 両商品の基本情報を比較
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-indigo-600 transition-colors">
                2. 価格・コスパ比較
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-indigo-600 transition-colors">
                3. 機能・技術の違い
              </a>
            </li>
            <li>
              <a href="#size" className="hover:text-indigo-600 transition-colors">
                4. サイズ展開・対象ユーザー
              </a>
            </li>
            <li>
              <a href="#reputation" className="hover:text-indigo-600 transition-colors">
                5. 口コミ・評判の比較
              </a>
            </li>
            <li>
              <a href="#credibility" className="hover:text-indigo-600 transition-colors">
                6. 信頼性・監修・メディア実績
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:text-indigo-600 transition-colors">
                7. こんな人にはこちらがおすすめ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-indigo-600 transition-colors">
                8. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-indigo-600 transition-colors">
                9. まとめ
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 1: Overview Comparison */}
      <section id="overview" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
          両商品の基本情報を比較
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          まずはランウェイキュアソールとスリムアップインソールの基本スペックを一覧表で比較します。
          それぞれの強みが一目で分かるようにまとめました。
        </p>

        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto mb-6">
          <table className="w-full text-sm min-w-[540px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-900">比較項目</th>
                <th className="text-center px-4 py-3 font-semibold text-[#8b5cf6]">ランウェイキュアソール</th>
                <th className="text-center px-4 py-3 font-semibold text-emerald-600">スリムアップインソール</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">単品価格（税込）</td>
                <td className="px-4 py-3 text-center text-gray-600">4,980円</td>
                <td className="px-4 py-3 text-center text-gray-600">6,980円</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">お得なセット</td>
                <td className="px-4 py-3 text-center text-gray-600">セット割引あり（5足で1足2,980円）</td>
                <td className="px-4 py-3 text-center text-gray-600">2足11,980円 / 3足17,920円+1足無料</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">サイズ</td>
                <td className="px-4 py-3 text-center text-gray-600">M / L（22.5〜25.0cm）</td>
                <td className="px-4 py-3 text-center text-gray-600">フリーサイズ（カット調整）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">対象</td>
                <td className="px-4 py-3 text-center text-gray-600">女性向け</td>
                <td className="px-4 py-3 text-center text-gray-600">男女兼用</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">技術・設計</td>
                <td className="px-4 py-3 text-center text-gray-600">3点アーチサポート</td>
                <td className="px-4 py-3 text-center text-gray-600">骨格筋サポート構造</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">監修・権威性</td>
                <td className="px-4 py-3 text-center text-gray-600">雑誌掲載実績</td>
                <td className="px-4 py-3 text-center text-gray-600">整体師 井上剛志監修（YouTube136万人）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">抗菌防臭</td>
                <td className="px-4 py-3 text-center text-gray-600">記載なし</td>
                <td className="px-4 py-3 text-center text-gray-600">あり</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">販売元</td>
                <td className="px-4 py-3 text-center text-gray-600">FLOReショップ</td>
                <td className="px-4 py-3 text-center text-gray-600">イッティ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            一覧で見ると、<strong>ランウェイキュアソール</strong>は「女性に特化した美姿勢サポート」、
            <strong>スリムアップインソール</strong>は「専門家監修の男女兼用タイプ」というコンセプトの違いが明確です。
            価格面ではランウェイキュアソールが単品で約2,000円安く、セット割引も充実しています。
          </p>
          <p>
            一方でスリムアップインソールは抗菌防臭機能やフリーサイズ対応など、日常的な使いやすさに強みがあります。
            以下でそれぞれの項目を詳しく掘り下げていきましょう。
          </p>
        </div>
      </section>

      {/* Section 2: Price Comparison */}
      <section id="price" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
            価格・コスパ比較
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ダイエットインソールは継続使用が前提のため、長期的なコストパフォーマンスが重要です。
            両商品の価格体系を詳しく比較してみましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Runway */}
            <div className="bg-white border border-purple-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#8b5cf6] mb-4">ランウェイキュアソール</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>1足（単品）</span>
                  <span className="font-medium text-gray-900">4,980円</span>
                </li>
                <li className="flex justify-between">
                  <span>3足セット</span>
                  <span className="font-medium text-gray-900">9,960円（1足3,320円）</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>5足セット</span>
                  <span className="font-bold text-[#8b5cf6]">14,900円（1足2,980円）</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">販売元：FLOReショップ公式サイト</p>
            </div>

            {/* SlimUp */}
            <div className="bg-white border border-emerald-200 rounded-xl p-5">
              <p className="text-sm font-bold text-emerald-600 mb-4">スリムアップインソール</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>1足（単品）</span>
                  <span className="font-medium text-gray-900">6,980円</span>
                </li>
                <li className="flex justify-between">
                  <span>2足セット</span>
                  <span className="font-medium text-gray-900">11,980円（1足5,990円）</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>3足+1足無料</span>
                  <span className="font-bold text-emerald-600">17,920円（実質1足4,480円）</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">販売元：イッティ公式サイト</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
            <p className="text-sm font-bold text-gray-900 mb-2">
              価格比較のポイント
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5 shrink-0">&#10003;</span>
                単品価格はランウェイキュアソールが2,000円安い（4,980円 vs 6,980円）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5 shrink-0">&#10003;</span>
                最安単価もランウェイキュアソールが優位（2,980円 vs 4,480円）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5 shrink-0">&#10003;</span>
                スリムアップインソールは3足セットに+1足無料が付くのが特徴
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-0.5 shrink-0">&#10003;</span>
                コスパ重視ならランウェイキュアソールのセット購入がお得
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Features */}
      <section id="features" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
          機能・技術の違い
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          両商品とも「履くだけで姿勢改善をサポートする」という基本コンセプトは同じですが、
          アプローチの仕方に大きな違いがあります。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-sm font-bold text-[#8b5cf6] mb-3">ランウェイキュアソール</p>
            <h3 className="text-base font-bold text-gray-900 mb-3">3点アーチサポート</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              足裏にある「内側縦アーチ」「外側縦アーチ」「横アーチ」の3つを同時にサポートする設計です。
              アーチの崩れを補正することで骨盤を正しい位置に導き、自然と美しい姿勢を促します。
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                3つのアーチを同時にケア
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                薄型設計で靴を選ばない
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                骨盤の安定をサポート
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-600 mb-3">スリムアップインソール</p>
            <h3 className="text-base font-bold text-gray-900 mb-3">骨格筋サポート構造</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              美容整体師・井上剛志氏の知見を活かし、骨格と筋肉の連動に着目した立体サポート構造を採用。
              足裏から全身の骨格筋バランスを整えるアプローチが特徴です。
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                骨格筋に着目した独自設計
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                抗菌防臭加工つき
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                水洗い可能でお手入れ簡単
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            技術面での最大の違いは、ランウェイキュアソールが<strong>足裏アーチの形状補正</strong>から姿勢を改善するのに対し、
            スリムアップインソールは<strong>骨格筋全体のバランス調整</strong>というアプローチをとっている点です。
          </p>
          <p>
            実用面では、スリムアップインソールの抗菌防臭機能と水洗い対応が大きなアドバンテージです。
            毎日使うインソールだからこそ、衛生面の配慮は見逃せないポイントでしょう。
            一方、ランウェイキュアソールは薄型設計でパンプスなど女性向けの靴にもフィットしやすい特徴があります。
          </p>
        </div>
      </section>

      {/* Section 4: Size & Target */}
      <section id="size" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
            サイズ展開・対象ユーザー
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto mb-6">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="text-center px-4 py-3 font-semibold text-[#8b5cf6]">ランウェイキュアソール</th>
                  <th className="text-center px-4 py-3 font-semibold text-emerald-600">スリムアップインソール</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">サイズ展開</td>
                  <td className="px-4 py-3 text-center text-gray-600">M（22.5〜23.5cm）/ L（24.0〜25.0cm）</td>
                  <td className="px-4 py-3 text-center text-gray-600">フリーサイズ（はさみでカット調整）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">対象</td>
                  <td className="px-4 py-3 text-center text-gray-600">女性専用</td>
                  <td className="px-4 py-3 text-center text-gray-600">男女兼用</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">対応靴の種類</td>
                  <td className="px-4 py-3 text-center text-gray-600">スニーカー・パンプス・ローヒール</td>
                  <td className="px-4 py-3 text-center text-gray-600">スニーカー・ウォーキングシューズ等</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">サイズ調整</td>
                  <td className="px-4 py-3 text-center text-gray-600">2サイズから選択</td>
                  <td className="px-4 py-3 text-center text-gray-600">カットして微調整可能</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              サイズ展開の差は、この2商品の最も大きな違いの一つです。
              <strong>ランウェイキュアソール</strong>はM/Lの2サイズで女性専用設計。
              足のサイズが22.5〜25.0cmの女性に限定されますが、その分女性の足に最適化されたフィット感があります。
            </p>
            <p>
              <strong>スリムアップインソール</strong>はフリーサイズで男女兼用。はさみでカットして自分の靴に合わせられるため、
              家族やパートナーと共有しやすいメリットがあります。
              ただし、カットの手間がかかることと、切り過ぎてしまうと元に戻せない点には注意が必要です。
            </p>
            <p>
              女性で足のサイズが22.5〜25.0cmに収まる方は、既にサイズが合わせてあるランウェイキュアソールの方が手軽です。
              男性や足のサイズが範囲外の方は、スリムアップインソール一択となります。
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section id="reputation" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
          口コミ・評判の比較
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          実際のユーザーの口コミ傾向を比較します。どちらも「即効性はない」という点は共通していますが、
          評価されるポイントに違いがあります。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-purple-200 rounded-xl p-5">
            <p className="text-sm font-bold text-[#8b5cf6] mb-4">ランウェイキュアソールの口コミ傾向</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1">良い口コミ</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                    姿勢が良くなったと周囲に言われた
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                    足の疲れが軽減された
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                    薄型で靴がきつくならない
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1">気になる口コミ</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    外反母趾だと痛みを感じる場合あり
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    夏場の蒸れ・締め付けが気になる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    サイズが合わないケースがある
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-600 mb-4">スリムアップインソールの口コミ傾向</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1">良い口コミ</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                    歩き方が変わった実感がある
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                    整体師監修で安心感がある
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                    抗菌防臭で衛生的に使える
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 mb-1">気になる口コミ</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    価格がやや高めに感じる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    効果の実感に時間がかかる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">&#9651;</span>
                    靴によっては厚みが気になる
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
          <p className="text-sm font-bold text-gray-900 mb-2">口コミ比較まとめ</p>
          <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <p>
              両商品とも「2〜3ヶ月の継続使用で変化を実感する」という傾向は共通しています。
              ランウェイキュアソールは「姿勢の変化」「足の疲れ軽減」に関する好意的な口コミが多く、
              薄型設計の使いやすさが評価されています。
            </p>
            <p>
              スリムアップインソールは「整体師監修の安心感」「抗菌防臭の衛生面」が評価ポイントです。
              一方で単品6,980円という価格に対して「やや高い」と感じる声もあります。
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Credibility */}
      <section id="credibility" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
            信頼性・監修・メディア実績
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ダイエットインソールを選ぶ際、商品の信頼性やバックグラウンドも重要な判断材料です。
            両商品の権威性を比較します。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-purple-200 rounded-xl p-5">
              <p className="text-sm font-bold text-[#8b5cf6] mb-4">ランウェイキュアソール</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>有名雑誌での掲載実績あり</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>FLOReショップが販売元として運営</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#10003;</span>
                  <span>SNSを中心に女性ユーザーの間で話題</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                雑誌掲載による知名度が高く、美容意識の高い女性層からの支持を集めています。
                専門家による監修の明記はありませんが、メディア露出の実績は信頼材料の一つです。
              </p>
            </div>

            <div className="bg-white border border-emerald-200 rounded-xl p-5">
              <p className="text-sm font-bold text-emerald-600 mb-4">スリムアップインソール</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>美容整体師・井上剛志氏が監修</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>YouTube登録者数約136万人の影響力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">&#10003;</span>
                  <span>販売元イッティは健康系商品で実績あり</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                YouTube登録者約136万人を誇る美容整体師が監修しており、専門家のお墨付きという点で信頼性が高いです。
                骨格筋へのアプローチは整体の知見が活かされた設計といえます。
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              信頼性の面では、<strong>スリムアップインソール</strong>が「専門家監修」という明確な権威性を持っています。
              井上剛志氏はYouTubeで136万人の登録者を持つ人気整体師で、骨格や筋肉に関する専門知識が商品設計に反映されています。
            </p>
            <p>
              <strong>ランウェイキュアソール</strong>は雑誌掲載実績という形でメディアからの評価を受けています。
              専門家の個人名による監修はありませんが、第三者メディアに取り上げられている実績は信頼度を裏付ける要素です。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Recommendations */}
      <section id="recommend" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
          こんな人にはこちらがおすすめ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <p className="text-sm font-bold text-[#8b5cf6] mb-4">
              ランウェイキュアソールがおすすめの人
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                美姿勢を最優先で改善したい女性
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                コスパ重視でセット購入を考えている方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                パンプスやローヒールなど女性向けの靴で使いたい方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                まず1足をお手頃価格で試したい方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b5cf6] mt-0.5 shrink-0">&#9675;</span>
                産後の骨盤ケアを日常に取り入れたい方
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/runway-cure-sole/"
                className="text-sm text-[#8b5cf6] font-semibold hover:underline"
              >
                ランウェイキュアソールの詳細レビューを見る →
              </Link>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-600 mb-4">
              スリムアップインソールがおすすめの人
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                専門家監修の安心感を重視したい方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                男性やカップル・家族で共用したい方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                抗菌防臭機能を重視する方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                足のサイズが規格外（22.5cm未満や25cm超）の方
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">&#9675;</span>
                水洗いで清潔に保ちたい方
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/slim-up-insole/"
                className="text-sm text-emerald-600 font-semibold hover:underline"
              >
                スリムアップインソールの詳細レビューを見る →
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            選び方のポイントをシンプルにまとめると、<strong>「女性で美姿勢+コスパ重視ならランウェイキュアソール」</strong>、
            <strong>「専門家監修+機能性+男女問わずならスリムアップインソール」</strong>という使い分けがおすすめです。
          </p>
          <p>
            なお、どちらも公式サイトでの購入が最もお得です。
            特にセット割引は公式サイト限定の場合が多いため、まずは公式サイトで最新の価格とキャンペーン情報を確認しましょう。
          </p>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" className="section-light py-12 md:py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqStructuredData.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group border border-gray-200 rounded-lg bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>{faq.name}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Summary */}
      <section id="summary" className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-600">
          まとめ
        </h2>

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
          <p>
            ランウェイキュアソールとスリムアップインソールは、どちらも「履くだけで姿勢改善をサポートする」
            ダイエットインソールですが、ターゲット層やアプローチに明確な違いがあります。
          </p>
          <p>
            <strong>ランウェイキュアソール</strong>は、足裏3点アーチサポートによる美姿勢へのアプローチが特徴。
            女性専用設計で薄型のため、パンプスやローヒールにもフィットします。
            単品4,980円、5足セットなら1足2,980円とコスパにも優れています。
            雑誌掲載実績もあり、美容意識の高い女性に支持されている商品です。
          </p>
          <p>
            <strong>スリムアップインソール</strong>は、YouTube登録者約136万人の美容整体師・井上剛志氏が監修。
            骨格筋サポート構造と抗菌防臭機能を搭載した機能派インソールです。
            フリーサイズの男女兼用で、はさみでカット調整できるため幅広い足のサイズに対応可能。
            単品6,980円、3足セットは17,920円で+1足無料と、まとめ買い特典も充実しています。
          </p>
          <p>
            最終的には、<strong>女性で美姿勢×コスパ重視ならランウェイキュアソール</strong>、
            <strong>専門家監修×機能性×男女兼用ならスリムアップインソール</strong>がそれぞれ最適解です。
            どちらも2〜3ヶ月の継続使用が推奨されているため、セット購入でじっくり試すのが賢い選び方でしょう。
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 md:p-6 text-center">
          <p className="text-sm font-bold text-gray-900 mb-4">
            迷ったらこちらもチェック
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/runway-cure-sole/"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#8b5cf6] border-2 border-[#8b5cf6] rounded-full hover:bg-purple-50 transition-colors"
            >
              ランウェイキュアソール詳細
            </Link>
            <Link
              href="/slim-up-insole/"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-emerald-600 border-2 border-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
            >
              スリムアップインソール詳細
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/ranking/" className="btn-cta text-sm md:text-base">
              ダイエットインソールおすすめランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
          関連記事
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/runway-cure-sole/"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-sm font-bold text-gray-900 mb-1">
              ランウェイキュアソールの口コミ・効果を検証
            </p>
            <p className="text-xs text-gray-500">
              3点アーチサポートの美姿勢インソールを徹底レビュー
            </p>
          </Link>
          <Link
            href="/slim-up-insole/"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-sm font-bold text-gray-900 mb-1">
              スリムアップインソールの口コミ・効果を検証
            </p>
            <p className="text-xs text-gray-500">
              整体師監修の骨格筋サポートインソールの実力
            </p>
          </Link>
          <Link
            href="/pitsole/"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <p className="text-sm font-bold text-gray-900 mb-1">
              ピットソールの口コミ・効果を徹底検証
            </p>
            <p className="text-xs text-gray-500">
              世界特許取得の骨格矯正インソールの実力を検証
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
