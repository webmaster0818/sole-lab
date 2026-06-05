import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報 | ソールラボ",
  description:
    "ソールラボの運営者情報・編集方針・免責事項についてご確認ください。",
  alternates: {
    canonical: "https://sole-laboratory.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "運営者情報" }]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#e8627c]">
          運営者情報
        </h1>

        {/* サイトについて */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">1.</span>
            サイトについて
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            「ソールラボ」は、ダイエットインソールを徹底比較する専門メディアです。ピットソール・ランウェイキュアソール・スリムアップインソールなど、人気のダイエットインソールの効果・口コミ・料金を独自に調査し、あなたに最適なインソール選びをサポートします。
          </p>
        </section>

        {/* 運営会社 */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">2.</span>
            運営会社
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium text-gray-600 bg-gray-50 w-1/3">
                    会社名
                  </th>
                  <td className="py-3 px-4 text-gray-700">
                    株式会社MediaX
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium text-gray-600 bg-gray-50 w-1/3">
                    所在地
                  </th>
                  <td className="py-3 px-4 text-gray-700">東京都渋谷区</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium text-gray-600 bg-gray-50 w-1/3">
                    事業内容
                  </th>
                  <td className="py-3 px-4 text-gray-700">
                    Webメディアの企画・運営
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium text-gray-600 bg-gray-50 w-1/3">
                    運営サイト
                  </th>
                  <td className="py-3 px-4 text-gray-700">
                    ソールラボ（https://sole-laboratory.com）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 編集方針 */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">3.</span>
            編集方針
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-2">
              当サイトでは、以下の方針に基づいてコンテンツを制作しています。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                各ダイエットインソールの効果・使用感・口コミを独自に調査し、正確な情報を掲載するよう努めます。
              </li>
              <li>
                特定の商品を不当に優遇・排除することなく、公正な比較情報を提供します。
              </li>
              <li>
                掲載情報は定期的に見直し、最新の状態を維持するよう努めます。
              </li>
              <li>
                当サイトはアフィリエイトプログラムに参加しており、掲載リンクを通じて商品が購入された場合、当サイト運営者が報酬を受け取ることがあります。ただし、報酬の有無が評価やランキングに影響を与えることはありません。
              </li>
            </ul>
          </div>
        </section>

        {/* 免責事項 */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            <span className="text-[#e8627c] mr-2">4.</span>
            免責事項
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              当サイトのコンテンツは、可能な限り正確な情報を掲載するよう努めておりますが、情報の正確性・完全性・最新性を保証するものではありません。
            </p>
            <p>
              当サイトに掲載された情報を利用したことにより生じた損害について、当サイト運営者は一切の責任を負いかねます。各商品の詳細については、必ず公式サイトにてご確認ください。
            </p>
            <p>
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報やサービスについて、当サイトは一切の責任を負いません。
            </p>
          </div>
        </section>

        <p className="text-xs text-gray-400 mt-8 text-right">
          最終更新日：2026年5月20日
        </p>
      </main>
    </>
  );
}
