import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約 | ソールラボ",
  description:
    "ソールラボの利用規約です。当サイトのご利用にあたっての条件・注意事項をご確認ください。",
  alternates: {
    canonical: "https://sole-laboratory.com/terms/",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "利用規約" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#e8627c]">
          利用規約
        </h1>

        <p className="text-sm text-gray-700 leading-relaxed mb-8">
          この利用規約（以下「本規約」）は、ソールラボ（以下「当サイト」）の利用条件を定めるものです。
          ご利用の皆さま（以下「ユーザー」）には、本規約に同意いただいた上で、当サイトをご利用いただきます。
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第1条</span>
            本サービスの目的
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイトは、ダイエットインソールの比較・レビュー情報を提供することを目的としたWebサイトです。
            ピットソール・ランウェイキュアソール・スリムアップインソールをはじめとする各種ダイエットインソールについて、
            特徴・料金・口コミなどの情報をわかりやすく整理し、ユーザーの商品選びをサポートします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第2条</span>
            本規約の適用
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            本規約は、当サイトの全てのページおよびコンテンツに適用されます。
            ユーザーが当サイトを利用した時点で、本規約に同意したものとみなします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第3条</span>
            利用条件
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>当サイトの利用にあたり、以下の条件を遵守してください。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>当サイトの情報は、個人の商品選びの参考としてご利用ください。</li>
              <li>掲載情報に基づく商品の購入・使用は、ユーザーご自身の判断と責任において行ってください。</li>
              <li>当サイトの利用により生じた損害について、当サイト運営者は一切の責任を負いません。</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第4条</span>
            掲載商品について
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトに掲載している商品情報（価格・スペック・効果・口コミ等）は、
              各メーカー・販売元の公式情報およびユーザーの口コミに基づいて作成しています。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>掲載情報は調査時点のものであり、最新の情報と異なる場合があります。</li>
              <li>正確な情報については、各商品の公式サイトをご確認ください。</li>
              <li>商品の効果には個人差があり、当サイトが効果を保証するものではありません。</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第5条</span>
            アフィリエイトリンクについて
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトは、アフィリエイトプログラムに参加しています。
              当サイト内のリンクを経由して商品を購入された場合、当サイト運営者が広告報酬を受け取る場合があります。
            </p>
            <p>
              ただし、アフィリエイト報酬の有無が、掲載内容やランキング・評価に影響を与えることはありません。
              当サイトでは、ユーザーにとって有益な情報を中立的な立場で発信することを最優先としています。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第6条</span>
            禁止行為
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-2">ユーザーは、以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>当サイトのコンテンツを無断で複製・転載・改変する行為</li>
              <li>当サイトの運営を妨げる行為</li>
              <li>不正アクセスやサーバーに過度な負荷をかける行為</li>
              <li>他のユーザーまたは第三者に不利益を与える行為</li>
              <li>法令または公序良俗に反する行為</li>
              <li>その他、当サイト運営者が不適切と判断する行為</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第7条</span>
            免責事項
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>当サイトは、掲載情報の正確性・完全性・最新性を保証するものではありません。</li>
              <li>当サイトに掲載された商品の効果・品質について、当サイトは一切保証いたしません。商品の購入・使用はユーザーの自己責任で行ってください。</li>
              <li>当サイトからリンクされた外部サイトの内容について、当サイトは一切の責任を負いません。</li>
              <li>当サイトの利用により生じたいかなる損害についても、当サイト運営者は責任を負いかねます。</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第8条</span>
            著作権
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトに掲載されている文章・画像・デザイン等のコンテンツの著作権は、
              当サイト運営者または正当な権利を有する第三者に帰属します。
            </p>
            <p>
              無断での複製・転載・改変・再配布等は固く禁じます。
              引用する場合は、出典元として当サイト名およびURLを明記してください。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第9条</span>
            規約の変更
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイト運営者は、必要に応じて本規約を変更することがあります。
            変更後の規約は、当サイト上に掲載した時点で効力を生じるものとします。
            ユーザーは、定期的に本規約をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-[#e8627c]">第10条</span>
            準拠法・管轄裁判所
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            本規約の解釈および適用は、日本法に準拠するものとします。
            当サイトに関連する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
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
