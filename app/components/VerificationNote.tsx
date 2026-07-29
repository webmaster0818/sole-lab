import Link from "next/link";

// 編集・検証方針（E-E-A-T）ボックス。実売レビュー・公式一次確認・架空口コミ排除という
// 当サイトの実際の検証プロセスを可視化し、正直データを信頼シグナルに変換する。
// 主要ページ（製品・症状・診断・比較）に統一配置。
export default function VerificationNote() {
  return (
    <div className="my-8 rounded-xl border border-[#bae6fd] bg-[#f0f9ff] p-4 md:p-5 text-sm leading-relaxed text-gray-700">
      <p className="mb-2 font-bold text-[#0369a1]">この記事の編集・検証方針（ソールラボ編集部）</p>
      <ul className="space-y-1.5">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-[#0ea5e9]">✓</span>
          <span>各製品の<strong>価格・仕様は公式サイト等の一次情報で確認</strong>し、出典と確認日を明記しています。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-[#0ea5e9]">✓</span>
          <span>口コミは<strong>楽天公式レビュー・ダイエットカフェなど実在の集計値（点数・件数）のみ</strong>を掲載し、<strong>架空の体験談・レビューは一切作成していません</strong>。</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-[#0ea5e9]">✓</span>
          <span>製品の評価・順位は<strong>広告（アフィリエイト）の有無に影響されません</strong>。</span>
        </li>
      </ul>
      <p className="mt-2 text-xs text-gray-500">
        運営者情報・検証体制の詳細は
        <Link href="/about/" className="text-[#0369a1] underline">こちら</Link>
        をご覧ください。
      </p>
    </div>
  );
}
