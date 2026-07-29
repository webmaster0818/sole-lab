// 中立性の担保: 特定製品に依存しない「インソールのタイプ別の選び方」。
// 症状ページで、当サイトの3製品を紹介する前に置き、まず一般的な選び方を示す。
export default function InsoleTypeGuide() {
  const types = [
    {
      name: "クッション型",
      desc: "衝撃吸収を重視したタイプ。立ち仕事や長時間の歩行で、かかと・前足部への衝撃をやわらげたい場合に向きます。",
    },
    {
      name: "アーチサポート型",
      desc: "土踏まず（縦アーチ）を支えるタイプ。アーチの崩れによる疲れや、足裏・かかとへの負担が気になる場合の補助に用いられます。",
    },
    {
      name: "横アーチパッド付き",
      desc: "足指の付け根（横アーチ）を支えるパッドつき。前足部の一点に負担が集中しやすい方向けの形状です。",
    },
    {
      name: "ハーフ（3/4）インソール",
      desc: "つま先までない短めのタイプ。パンプスや革靴など、つま先に余裕のない靴で厚みを足したくない場合に使われます。",
    },
  ];
  return (
    <section className="my-8">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 border-l-4 border-[#0ea5e9] pl-3 mb-3">
        まず知っておきたい｜インソールのタイプ別の選び方
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        特定の製品を選ぶ前に、まずインソールの「タイプ」を知っておくと、症状や靴・使い方に合ったものを選びやすくなります。以下は製品を問わない一般的な分類です。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {types.map((t) => (
          <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-[#0369a1] mb-1">{t.name}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        ※上記は一般的なタイプ分けの目安です。合うタイプは症状・足の形・靴によって異なり、痛みが続く場合は市販インソールで対処せず整形外科などにご相談ください。
      </p>
    </section>
  );
}
