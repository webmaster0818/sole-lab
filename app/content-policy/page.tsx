import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事制作ポリシー | ソールラボ",
  description:
    "ソールラボの記事制作ポリシーです。ユーザーファースト・正確性・中立性・わかりやすさの4つの原則に基づき記事を制作しています。",
  alternates: {
    canonical: "https://sole-laboratory.com/content-policy/",
  },
};

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "記事制作ポリシー" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#e8627c]">
          記事制作ポリシー
        </h1>

        <p className="text-sm text-gray-700 leading-relaxed mb-8">
          ソールラボは、ダイエットインソールの比較・レビュー情報を提供するWebサイトです。
          ユーザーの皆さまが最適な商品を選べるよう、以下の4つの原則に基づいて記事を制作しています。
        </p>

        {/* 4つの原則 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-[#e8627c] text-white text-sm px-3 py-1 rounded">POLICY</span>
            ソールラボの記事制作ポリシー（4つの原則）
          </h2>

          <div className="space-y-8">
            {/* 原則1 */}
            <div className="border border-[#f3e0e4] rounded-lg p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#e8627c] text-white text-sm w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </span>
                ユーザーファーストであり続けます
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2 pl-11">
                <p>
                  ソールラボは、ダイエットインソール選びに悩むすべてのユーザーに寄り添います。
                  「足の悩みを改善したい」「歩くだけでダイエットしたい」「姿勢を良くしたい」など、
                  多様なニーズに対応できるよう、各商品の特性や強みをわかりやすく発信します。
                </p>
                <p>
                  ピットソール・ランウェイキュアソール・スリムアップインソールそれぞれの
                  特徴を客観的に比較し、ユーザーにとって最適な商品選びをサポートします。
                </p>
              </div>
            </div>

            {/* 原則2 */}
            <div className="border border-[#f3e0e4] rounded-lg p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#e8627c] text-white text-sm w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </span>
                正確かつ最新な情報発信に努めます
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2 pl-11">
                <p>
                  掲載情報は、各メーカー・販売元の公式情報を確認した上で作成しています。
                  価格・スペック・キャンペーン情報などは定期的に見直し、常に最新の状態を保つよう努めています。
                </p>
                <p>
                  万が一、掲載内容に誤りがあった場合は速やかに修正いたします。
                  情報の正確性を保つため、複数の情報源を照合し、信頼性の高い情報のみを掲載します。
                </p>
              </div>
            </div>

            {/* 原則3 */}
            <div className="border border-[#f3e0e4] rounded-lg p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#e8627c] text-white text-sm w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </span>
                中立的な口コミ・評価を発信します
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2 pl-11">
                <p>
                  良い口コミだけでなく、悪い口コミも包み隠さず掲載します。
                  口コミの参照元を明確にし、情報の透明性を確保します。
                </p>
                <p>
                  当サイトはアフィリエイトプログラムに参加していますが、
                  広告報酬の有無がランキングや評価に影響することはありません。
                  あくまでユーザー目線に立った中立性を保ちます。
                </p>
              </div>
            </div>

            {/* 原則4 */}
            <div className="border border-[#f3e0e4] rounded-lg p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#e8627c] text-white text-sm w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  4
                </span>
                分かりやすさを追求し続けます
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2 pl-11">
                <p>
                  専門用語はできるだけ避け、誰にでもわかりやすい言葉で情報を伝えます。
                  やむを得ず専門用語を使う場合は、わかりやすい解説を添えます。
                </p>
                <p>
                  比較表・図解を活用し、商品ごとの違いを一目で理解できる記事作りを心がけています。
                  「読んでよかった」と思っていただける、実用的なコンテンツを目指します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 記事制作フロー */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-[#e8627c] text-white text-sm px-3 py-1 rounded">FLOW</span>
            記事制作フロー
          </h2>

          <div className="space-y-6">
            {/* STEP 1 */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#fdf2f4] border-2 border-[#e8627c] rounded-full flex items-center justify-center">
                  <span className="text-[#e8627c] font-bold text-sm">01</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">企画設計</h3>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1 list-disc pl-5">
                  <li>ユーザーニーズの調査（検索意図・お悩み分析）</li>
                  <li>対策キーワードの選定</li>
                  <li>記事構成の設計</li>
                </ul>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#fdf2f4] border-2 border-[#e8627c] rounded-full flex items-center justify-center">
                  <span className="text-[#e8627c] font-bold text-sm">02</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">調査・ライティング</h3>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1 list-disc pl-5">
                  <li>各メーカー公式情報の確認・調査</li>
                  <li>口コミ・レビューの収集・分析</li>
                  <li>専門用語を避けたわかりやすい文章の作成</li>
                  <li>比較表・図解などの視覚的コンテンツの制作</li>
                </ul>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#fdf2f4] border-2 border-[#e8627c] rounded-full flex items-center justify-center">
                  <span className="text-[#e8627c] font-bold text-sm">03</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">公開</h3>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1 list-disc pl-5">
                  <li>構造化データ・SEO対策を施した上で公開</li>
                  <li>表示崩れやリンク切れのチェック</li>
                  <li>モバイル表示の確認</li>
                </ul>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#fdf2f4] border-2 border-[#e8627c] rounded-full flex items-center justify-center">
                  <span className="text-[#e8627c] font-bold text-sm">04</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">更新</h3>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-1 list-disc pl-5">
                  <li>定期的な情報の見直し・更新</li>
                  <li>価格変更・キャンペーン情報の反映</li>
                  <li>新商品の追加・廃盤商品の対応</li>
                  <li>ユーザーからのフィードバックの反映</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-base font-bold text-gray-900 mb-3">運営者情報</h2>
          <dl className="text-sm text-gray-700 space-y-2">
            <div className="flex gap-4">
              <dt className="font-medium min-w-[80px]">運営者</dt>
              <dd>株式会社MediaX</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-medium min-w-[80px]">所在地</dt>
              <dd>東京都渋谷区</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-medium min-w-[80px]">サイト名</dt>
              <dd>ソールラボ</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-medium min-w-[80px]">URL</dt>
              <dd>https://sole-laboratory.com</dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}
