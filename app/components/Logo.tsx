/**
 * サイトロゴ（案C：ヒール＋歩いた弧）
 * ヘッダーでは横組み、フッターなどで縦組みにも使えるようにしている。
 */
export function LogoMark({
  className = "",
  arcWidth = 2,
}: {
  className?: string;
  arcWidth?: number;
}) {
  return (
    <svg
      viewBox="-4 -6 112 86"
      className={className}
      role="img"
      aria-label="ソールラボ"
    >
      <path
        d="M-3,76 C24,64 66,56 107,62"
        fill="none"
        stroke="#c9a76c"
        strokeWidth={arcWidth}
        strokeLinecap="round"
      />
      <path
        d="M1,57 C4,61 12,63.4 26,63.6 C40,63.8 56,63 66,56 C74,50 81,41 85,30
           C87,41 89,52 91,61 L95,61 C95,49 96.5,34 97.5,24
           C98,11 94.5,2.5 87.5,0.8 C70,10 48,25 31,35.5
           C21,40 9,46 2,50 C0,52 0,55 1,57 Z"
        fill="#8a6a4f"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="w-[46px] h-[30px] shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-mincho text-[19px] tracking-[0.12em] text-[#5c4433]">
          ソールラボ
        </span>
        <span className="font-mincho mt-1 text-[8.5px] tracking-[0.16em] text-[#9a8b7d]">
          ダイエットインソール比較
        </span>
      </span>
    </span>
  );
}
