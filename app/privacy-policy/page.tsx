import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ソールラボ",
  description:
    "ソールラボのプライバシーポリシーです。個人情報の取り扱いについてご確認ください。",
  alternates: {
    canonical: "https://sole-laboratory.com/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#e8627c]">
          プライバシーポリシー
        </h1>

        <p className="text-sm text-gray-700 leading-relaxed mb-8">
          ソールラボ（以下「当サイト」）は、ユーザーの個人情報の保護を重要視し、
          以下のとおりプライバシーポリシーを定め、適切な管理・保護に努めます。
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">1.</span>
            個人情報の定義
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、
            氏名・メールアドレス・その他の記述等により特定の個人を識別できる情報をいいます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">2.</span>
            個人情報の取得方法
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイトでは、お問い合わせフォーム等を通じて、ユーザーの氏名・メールアドレスなどの
            個人情報をご提供いただく場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">3.</span>
            個人情報の利用目的
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-2">当サイトでは、取得した個人情報を以下の目的で利用します。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>お問い合わせへの対応</li>
              <li>当サイトのサービス改善・運営に必要な分析</li>
              <li>重要なお知らせや変更事項の通知</li>
              <li>利用規約に違反する行為への対応</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">4.</span>
            個人情報の第三者提供
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-2">
              当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">5.</span>
            個人情報の管理
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイトは、ユーザーの個人情報を正確かつ最新の状態に保ち、
            不正アクセス・紛失・破損・改ざん・漏えいなどを防ぐため、
            セキュリティの維持・管理体制の整備など必要な措置を講じます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">6.</span>
            開示・訂正・利用停止
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            ユーザーから個人情報の開示・訂正・追加・削除・利用停止の求めがあった場合、
            本人確認を行った上で、合理的な期間内に対応いたします。
            ご希望の方は、下記のお問い合わせ窓口までご連絡ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">7.</span>
            Cookie等の利用
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトでは、サイトの利用状況を把握するために、Googleアナリティクスを利用しています。
              Googleアナリティクスは、Cookieを使用してユーザーのアクセス情報を収集しますが、
              個人を特定する情報は含まれません。
            </p>
            <p>
              収集されたデータはGoogleのプライバシーポリシーに基づいて管理されます。
              Googleアナリティクスの利用規約およびプライバシーポリシーについては、
              Googleの公式サイトをご確認ください。
            </p>
            <p>
              Cookieの利用を希望されない場合は、ブラウザの設定からCookieを無効にするか、
              Googleアナリティクスのオプトアウトアドオンをご利用ください。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">8.</span>
            広告について
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトは、アフィリエイトプログラムに参加しています。
              当サイト内のリンクを経由して商品を購入された場合、
              当サイト運営者が広告報酬を受け取る場合があります。
            </p>
            <p>
              アフィリエイト広告の掲載にあたっては、ユーザーに有益な情報提供を第一に考え、
              中立的かつ公正な情報発信に努めます。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">9.</span>
            免責事項
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトからリンクやバナーなどによって他のサイトに移動した場合、
              移動先のサイトで提供される情報やサービスについて、
              当サイトは一切の責任を負いません。
            </p>
            <p>
              当サイトのコンテンツは、可能な限り正確な情報を掲載するよう努めていますが、
              誤情報が入り込んだり、情報が古くなったりする場合があります。
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">10.</span>
            プライバシーポリシーの変更
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイトは、必要に応じて本ポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">11.</span>
            お問い合わせ窓口
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
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
