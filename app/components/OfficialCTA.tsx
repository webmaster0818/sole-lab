import { AFFILIATE, type ProductKey } from "../lib/affiliate";

/** アフィリエイト広告の公式サイトCTA。rel=sponsored nofollow（景表法・ステマ規制対応＝PR表記つき）。 */
export default function OfficialCTA({
  product,
  label,
  className = "btn-cta text-base",
  pr = true,
}: {
  product: ProductKey;
  label?: string;
  className?: string;
  pr?: boolean;
}) {
  const p = AFFILIATE[product];
  return (
    <span className="inline-flex flex-col items-center gap-1">
      <a
        href={p.url}
        target="_blank"
        rel="sponsored nofollow noopener"
        className={className}
      >
        {label ?? `${p.name}を公式サイトでチェック`}
      </a>
      {pr && <span className="text-[10px] text-gray-400">PR・公式サイトへ移動します</span>}
    </span>
  );
}
