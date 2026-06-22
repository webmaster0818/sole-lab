import type { Metadata } from "next";
import Link from "next/link";
import Diagnosis from "./Diagnosis";

export const metadata: Metadata = {
  title: "ダイエットインソール診断｜あなたに合う1足を3つの質問で無料診断【2026年】",
  description:
    "4つの質問に答えるだけで、人気のダイエットインソール3製品（ピットソール・ランウェイキュアソール・スリムアップインソール）からあなたに合う1足を無料診断。重視ポイント・予算・使う靴から相性の良いインソールが分かります。",
  alternates: { canonical: "https://sole-laboratory.com/diagnosis/" },
  openGraph: {
    title: "ダイエットインソール診断｜あなたに合う1足を無料診断",
    description:
      "4つの質問で、3製品からあなたに合うダイエットインソールを無料診断。",
    url: "https://sole-laboratory.com/diagnosis/",
    type: "website",
  },
};

const faqs = [
  {
    question: "ダイエットインソール診断は無料ですか？",
    answer:
      "はい、完全無料でご利用いただけます。会員登録や個人情報の入力も不要で、4つの質問に答えるだけですぐに結果が分かります。",
  },
  {
    question: "診断結果のインソールは必ず買わないといけませんか？",
    answer:
      "いいえ、購入の義務はありません。診断結果はあくまで各製品の特徴をもとにした「相性の目安」です。結果を参考に、各製品ページやランキングで詳しく比較してご検討ください。",
  },
  {
    question: "効果には個人差がありますか？",
    answer:
      "はい、インソールの効果や使用感には個人差があります。本診断は製品の特徴と利用者の重視ポイントを照らし合わせた目安であり、効果を保証するものではありません。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function DiagnosisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-[#c9a76c] tracking-wider mb-3">
            DIET INSOLE DIAGNOSIS
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            あなたに合う
            <span className="text-gradient-fresh">ダイエットインソール</span>
            診断
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            4つの質問に答えるだけ。人気3製品から、あなたの重視ポイントに合った1足を無料で診断します。
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4">
          <Diagnosis />
        </div>
      </section>

      {/* 3製品の特徴 */}
      <section className="section-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
            診断で比較する3つのダイエットインソール
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            それぞれ重視するポイントが異なります
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "ピットソール", tag: "効果・実績重視", desc: "世界特許の独自構造で骨格から姿勢をサポート", href: "/pitsole/", c: "#e8627c" },
              { name: "ランウェイキュアソール", tag: "美姿勢・薄型", desc: "3つのアーチをサポート、靴を選ばない薄型", href: "/runway-cure-sole/", c: "#c9a76c" },
              { name: "スリムアップインソール", tag: "コスパ重視", desc: "手頃な価格で、初めての方にもおすすめ", href: "/slim-up-insole/", c: "#34d399" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card group block">
                <span className="text-xs font-bold" style={{ color: p.c }}>
                  {p.tag}
                </span>
                <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-[#e8627c]">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/ranking/" className="btn-outline text-sm">
              3製品の詳しい比較ランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group border border-[#f3e0e4] rounded-xl"
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#fdf2f4] rounded-xl">
                  {f.question}
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
