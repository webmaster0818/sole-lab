import type { Metadata } from "next";
import Link from "next/link";
import OfficialCTA from "../../../components/OfficialCTA";
import ShareButtons from "../../../components/ShareButtons";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "診断結果: あなたに合うのはピットソール｜ダイエットインソール相性診断",
  description:
    "6つの質問によるダイエットインソール相性診断の結果ページです。ピットソール（特許取得の骨格矯正インソール）と相性が良い回答傾向でした。特徴と選ばれる理由を紹介します。",
  alternates: { canonical: "https://sole-laboratory.com/diagnosis/result/pitsole/" },
  openGraph: {
    title: "診断結果: あなたに合うのはピットソール",
    description: "6つの質問でわかるダイエットインソール相性診断（ソールラボ）",
    url: "https://sole-laboratory.com/diagnosis/result/pitsole/",
    siteName: "ソールラボ",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "https://sole-laboratory.com/og/diagnosis-pitsole.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function DiagnosisResultPage() {
  const url = "https://sole-laboratory.com/diagnosis/result/pitsole/";
  return (
    <main className="py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="rounded-2xl border border-[#f3e0e4] bg-white p-6 md:p-10 text-center">
          <p className="text-sm font-semibold text-gray-500">ダイエットインソール相性診断</p>
          <p className="mt-3 text-xs text-gray-400">この診断結果と相性が良いのは</p>
          <h1 className="mt-1 text-3xl font-bold" style={{ color: "#e8627c" }}>ピットソール</h1>
          <p className="mt-1 text-sm text-gray-500">特許取得の骨格矯正インソール</p>
          <p className="mt-5 text-sm text-gray-700 leading-relaxed text-left">効果・実績を重視する方に向いた結果です。世界特許の独自構造で骨格から姿勢をサポートするピットソールは、実績・口コミの多さを重視し、本格的に取り組みたい方と相性が良い製品です。</p>
          <div className="mt-5 rounded-xl bg-gray-50 p-4 text-left">
            <p className="text-xs font-bold text-gray-500 mb-2">こんな回答傾向の方に出る結果です</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・しっかりした効果・実績を最優先したい</li>
              <li>・矯正感のある装着感が好み</li>
              <li>・実績・口コミの多さで選びたい</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-center">
            <OfficialCTA product="pitsole" className="btn-cta text-sm" />
            <Link href="/pitsole/" className="btn-outline text-sm">
              ピットソールを詳しく見る
            </Link>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-xs font-bold text-gray-500 mb-3">この結果をシェアする</p>
            <ShareButtons url={url} text="ダイエットインソール相性診断の結果: あなたに合うのはピットソールでした" />
          </div>
          <div className="mt-6">
            <Link href="/diagnosis/" className="text-sm text-[#e8627c] underline font-medium">
              自分でも診断してみる（6つの質問・無料）
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="/ranking/" className="text-sm text-gray-600 underline">
              3製品のランキングを見る
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400 leading-relaxed text-left">
            ※本診断は各製品の公開されている特徴をもとにした相性の目安であり、効果を保証するものではありません。効果の感じ方には個人差があり、ダイエットには食事管理・適度な運動との併用が前提です。
          </p>
        </div>
      </div>
    </main>
  );
}
