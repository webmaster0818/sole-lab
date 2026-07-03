import type { Metadata } from "next";
import Link from "next/link";
import { NG_OK_EXPRESSIONS, KEIHYO_NOTE_TEXT } from "../../lib/keihyo";

export const metadata: Metadata = {
  title: "ダイエットインソールの広告表現NG⇔OK対訳ガイド【景表法・薬機法配慮】",
  description:
    "「履くだけで痩せる」はなぜNG？ダイエット・健康インソールを紹介する際に避けるべき表現と、景品表示法・薬機法に配慮した言い換えを7つの対訳で公開。当編集部が実際に運用しているレビュー基準です。メディア運営者・アフィリエイターの方の引用を歓迎します。",
  alternates: { canonical: "https://sole-laboratory.com/articles/keihyoho-guide/" },
  openGraph: {
    title: "ダイエットインソールの広告表現NG⇔OK対訳ガイド【景表法・薬機法配慮】",
    description:
      "避けるべき表現と配慮した言い換えの7対訳を公開。当編集部が実際に運用しているレビュー基準です。",
    url: "https://sole-laboratory.com/articles/keihyoho-guide/",
    siteName: "ソールラボ",
    type: "article",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ダイエットインソールの広告表現NG⇔OK対訳ガイド【景表法・薬機法配慮】",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Organization", name: "ソールラボ編集部", url: "https://sole-laboratory.com" },
  publisher: { "@type": "Organization", name: "ソールラボ", url: "https://sole-laboratory.com" },
  description:
    "ダイエット・健康インソールの紹介で避けるべき表現と、景品表示法・薬機法に配慮した言い換え7対訳。編集部の実運用基準を公開。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sole-laboratory.com/articles/keihyoho-guide/" },
};

export default function KeihyohoGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-[#fdf2f4] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-semibold text-[#e8627c] mb-3">編集部の運用基準を公開</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            ダイエットインソールの広告表現
            <br className="md:hidden" />
            NG⇔OK対訳ガイド
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
            「履くだけで痩せる」はなぜ書いてはいけないのか。ダイエット・健康系インソールを紹介する当サイトが、景品表示法・薬機法に配慮して実際に運用している「使わない表現」と「言い換え」の基準を、そのまま公開します。メディア運営者・アフィリエイターの方の参考・引用を歓迎します。
          </p>
          <p className="mt-3 text-xs text-gray-500">最終更新: 2026年7月4日</p>
        </div>
      </section>

      {/* 前提 */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">なぜこの基準が必要か</h2>
          <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              インソールは<strong>医薬品・医療機器ではありません</strong>。そのため「痩せる」「治る」「脂肪燃焼」のような身体への効果を断定する表現は、景品表示法の優良誤認や薬機法の効能効果標榜に抵触するおそれがあります。2023年施行のステルスマーケティング規制以降、アフィリエイトサイトの表現も広告主と同様に見られます。
            </p>
            <p>
              以下の7対訳は、当編集部が全記事・比較表・CTAのレビューに使っている実運用の基準です。
            </p>
          </div>
        </div>
      </section>

      {/* NG⇔OK 対訳表 */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">NG⇔OK 7つの対訳</h2>
          <div className="space-y-4">
            {NG_OK_EXPRESSIONS.map((pair, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4 md:p-5 bg-red-50/60 border-b md:border-b-0 md:border-r border-gray-100">
                    <p className="text-xs font-bold text-red-500 mb-1.5">NG（使わない）</p>
                    <p className="text-sm text-gray-800 font-medium">{pair.ng}</p>
                  </div>
                  <div className="p-4 md:p-5 bg-emerald-50/50">
                    <p className="text-xs font-bold text-emerald-600 mb-1.5">OK（言い換え）</p>
                    <p className="text-sm text-gray-800">{pair.ok}</p>
                  </div>
                </div>
                {pair.note && (
                  <div className="px-4 md:px-5 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">理由: {pair.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 統一注記 */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">当サイトが全CV箇所に置いている統一注記</h2>
          <p className="text-sm text-gray-600 mb-4">
            言い換えだけでなく、ランキング・製品ページ・ダイエット記事の全コンバージョン箇所に次の注記を統一配置しています。そのままの利用・改変利用ともにご自由にどうぞ。
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
            {KEIHYO_NOTE_TEXT}
          </div>
        </div>
      </section>

      {/* チェックリスト */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">公開前チェックリスト（編集部運用）</h2>
          <ul className="space-y-2.5 text-sm text-gray-700">
            {[
              "「痩せる」「治る」「燃焼」など身体への作用を断定する語が残っていないか",
              "数値効果（−○kg・−○cm）を保証・暗示する記述がないか",
              "体験談・口コミに「個人差があります」の注記が添えられているか",
              "No.1・最安値など最上級表現に出典・調査時点が明記されているか",
              "アフィリエイトリンクにPR表記があるか（ステマ規制対応）",
              "症状・疾患に触れる場合、医療機関への相談を案内しているか",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 bg-white border border-gray-200 rounded-lg p-3">
                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 引用について */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">引用・転載について</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            本ガイドの対訳・チェックリストは、出典（当ページURL）を明記いただければ、記事・社内資料への引用を歓迎します。
          </p>
          <p className="text-xs font-bold text-gray-700 mb-1">クレジット表記の例</p>
          <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-[11px] leading-relaxed text-gray-600 mb-4">{`出典: ソールラボ「ダイエットインソールの広告表現NG⇔OK対訳ガイド」
https://sole-laboratory.com/articles/keihyoho-guide/`}</pre>
          <p className="text-xs font-bold text-gray-700 mb-1">リンク付きHTMLスニペット（コピーしてお使いください）</p>
          <pre className="overflow-x-auto rounded bg-gray-100 p-3 text-[11px] leading-relaxed text-gray-600">{`<a href="https://sole-laboratory.com/articles/keihyoho-guide/">出典: ソールラボ「広告表現NG⇔OK対訳ガイド」</a>`}</pre>
        </div>
      </section>

      {/* 免責・関連 */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-8">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>免責:</strong> 本ガイドは当編集部の運用基準を共有するものであり、法的助言ではありません。個別の広告表現の適法性については、消費者庁の公表資料をご確認いただくか、専門家にご相談ください。
            </p>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/content-policy/" className="block p-4 border border-gray-200 bg-white rounded-xl hover:border-[#e8627c] transition-colors">
              <p className="text-sm font-semibold text-gray-900">コンテンツポリシー</p>
              <p className="text-xs text-gray-500 mt-1">当サイトの編集・広告方針の全文</p>
            </Link>
            <Link href="/articles/insole-truth/" className="block p-4 border border-gray-200 bg-white rounded-xl hover:border-[#e8627c] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールは嘘？科学的根拠を検証</p>
              <p className="text-xs text-gray-500 mt-1">「痩せない」と感じる理由も正直に解説</p>
            </Link>
            <Link href="/about/" className="block p-4 border border-gray-200 bg-white rounded-xl hover:border-[#e8627c] transition-colors">
              <p className="text-sm font-semibold text-gray-900">運営者情報・編集体制</p>
              <p className="text-xs text-gray-500 mt-1">情報の確認方法と検証体制</p>
            </Link>
            <Link href="/ranking/" className="block p-4 border border-gray-200 bg-white rounded-xl hover:border-[#e8627c] transition-colors">
              <p className="text-sm font-semibold text-gray-900">ダイエットインソールおすすめランキング</p>
              <p className="text-xs text-gray-500 mt-1">本ガイドの基準で書かれた比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
