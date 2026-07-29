// 足のアーチ・衝撃分散の「概念図（イメージ図）」。YMYL配慮でAI生成の医療画像は使わず、
// 自作のスキーマ図（インラインSVG）で一般的な足のアーチ構造を示す。治療・診断を断定しない。
export default function FootArchDiagram() {
  return (
    <figure className="my-8 rounded-xl border border-[#e5e7eb] bg-white p-5">
      <figcaption className="mb-4 text-sm font-bold text-gray-800">
        足のアーチと衝撃のイメージ（概念図）
      </figcaption>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 460 210" role="img" aria-label="足の縦アーチと踵・土踏まず・前足部の3点、および歩行時の衝撃を示した概念図" className="w-full max-w-[460px] mx-auto">
          {/* 衝撃の矢印 */}
          <g stroke="#f472b6" strokeWidth="2" fill="none">
            <line x1="90" y1="18" x2="90" y2="50" markerEnd="url(#arw)" />
            <line x1="230" y1="8" x2="230" y2="40" markerEnd="url(#arw)" />
            <line x1="370" y1="18" x2="370" y2="50" markerEnd="url(#arw)" />
          </g>
          <defs>
            <marker id="arw" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
              <path d="M0,0 L4,6 L8,0" fill="none" stroke="#f472b6" strokeWidth="2" />
            </marker>
          </defs>
          <text x="230" y="6" textAnchor="middle" fontSize="11" fill="#db2777">歩くたびにかかる衝撃</text>

          {/* 足のアーチ（側面・概念） */}
          <path d="M55,150 Q60,70 120,72 Q230,74 300,74 Q360,74 405,150"
                fill="#eff6ff" stroke="#0ea5e9" strokeWidth="3" />
          {/* 地面 */}
          <line x1="30" y1="165" x2="430" y2="165" stroke="#9ca3af" strokeWidth="2" />
          <text x="30" y="182" fontSize="10" fill="#6b7280">地面</text>

          {/* 3つの接地・支持ポイント */}
          <g fill="#0369a1">
            <circle cx="75" cy="150" r="7" />
            <circle cx="230" cy="74" r="7" fill="#e8627c" />
            <circle cx="385" cy="150" r="7" />
          </g>
          <text x="75" y="200" textAnchor="middle" fontSize="12" fill="#111827">踵（かかと）</text>
          <text x="230" y="112" textAnchor="middle" fontSize="12" fill="#be185d">土踏まず（縦アーチ）</text>
          <text x="385" y="200" textAnchor="middle" fontSize="12" fill="#111827">前足部（指の付け根）</text>
        </svg>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        ※上図はイメージ（概念図）です。足の裏には縦・横のアーチがあり、歩行のたびに体重を超える力（地面反力）が踵・土踏まず・前足部に繰り返しかかります。アーチが崩れると衝撃の分散がうまくいかず、特定の部位に負担が集中しやすくなると一般に説明されます。インソール（アーチサポート）は、このアーチを支えて衝撃を分散する補助を目的としたものです。診断・治療を目的とするものではなく、痛みが続く場合は整形外科などの医療機関にご相談ください。
      </p>
    </figure>
  );
}
