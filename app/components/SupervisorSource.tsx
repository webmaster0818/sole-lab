// スリムアップインソールの「美容整体師 井上剛志監修」の出典表記。
// 公式（ロッピング公式ショップ 一番星）の商品ページで確認した範囲のみを書く。
// 監修の具体的な内容（どの構造をどう監修したか）は公式に案内がないため、断定しない。
export default function SupervisorSource({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 leading-relaxed ${className}`}>
      監修の出典：
      <a
        href="https://ichiban-boshi.com/shop/products/B_sui_s"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="underline"
      >
        ロッピング公式ショップ 一番星
      </a>
      の商品ページ表記（2026年11月28日確認。商品内容に「美容整体師『井上剛志監修』」と記載）。監修の具体的な内容は公式に案内がありません。
    </p>
  );
}
