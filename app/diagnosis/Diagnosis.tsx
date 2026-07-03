"use client";

import { useState } from "react";
import Link from "next/link";
import OfficialCTA from "../components/OfficialCTA";

type Key = "pitsole" | "runway" | "slimup";

const PRODUCTS: Record<
  Key,
  { name: string; tagline: string; href: string; reason: string; accent: string }
> = {
  pitsole: {
    name: "ピットソール",
    tagline: "特許取得の骨格矯正インソール",
    href: "/pitsole/",
    reason:
      "効果・実績を重視するあなたには、世界特許の独自構造で骨格から姿勢をサポートするピットソールが向いています。本格的に取り組みたい方におすすめです。",
    accent: "#e8627c",
  },
  runway: {
    name: "ランウェイキュアソール",
    tagline: "美姿勢サポートインソール",
    href: "/runway-cure-sole/",
    reason:
      "姿勢・バランスや、薄型で靴を選ばない使い心地を重視するあなたには、3つのアーチをサポートするランウェイキュアソールが向いています。",
    accent: "#c9a76c",
  },
  slimup: {
    name: "スリムアップインソール",
    tagline: "コスパ重視のダイエットインソール",
    href: "/slim-up-insole/",
    reason:
      "まず手頃に試したい・コスパを重視するあなたには、シンプルな設計で使いやすいスリムアップインソールが向いています。インソールが初めての方にもおすすめです。",
    accent: "#34d399",
  },
};

const QUESTIONS: {
  q: string;
  options: { label: string; scores: Partial<Record<Key, number>> }[];
}[] = [
  {
    q: "インソールに最も期待することは？",
    options: [
      { label: "しっかりした効果・実績", scores: { pitsole: 2 } },
      { label: "美姿勢・歩行バランスの改善", scores: { runway: 2 } },
      { label: "まずは手頃に試したい", scores: { slimup: 2 } },
    ],
  },
  {
    q: "インソールを使うのは？",
    options: [
      { label: "初めて", scores: { slimup: 2, runway: 1 } },
      { label: "使ったことがある／本格的に取り組みたい", scores: { pitsole: 2 } },
    ],
  },
  {
    q: "主にどんな靴に入れたい？",
    options: [
      { label: "パンプス・ブーツなど（薄型がいい）", scores: { runway: 2 } },
      { label: "スニーカー・普段の靴", scores: { pitsole: 1, slimup: 1 } },
    ],
  },
  {
    q: "予算の優先度は？",
    options: [
      { label: "効果重視（価格はこだわらない）", scores: { pitsole: 2 } },
      { label: "コスパ・価格を抑えたい", scores: { slimup: 2 } },
      { label: "バランス重視", scores: { runway: 1 } },
    ],
  },
  {
    q: "求める「装着感」に近いのは？",
    options: [
      { label: "しっかりした矯正感がほしい", scores: { pitsole: 2 } },
      { label: "自然で目立たない薄さがいい", scores: { runway: 2 } },
      { label: "シンプルで気軽に使えれば十分", scores: { slimup: 2 } },
    ],
  },
  {
    q: "選ぶときに最も気になるのは？",
    options: [
      { label: "実績・口コミの多さ（信頼感）", scores: { pitsole: 2 } },
      { label: "いろんな靴で使い回せること", scores: { runway: 2 } },
      { label: "とにかく試しやすい価格", scores: { slimup: 2 } },
    ],
  },
];

export default function Diagnosis() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Key, number>>({
    pitsole: 0,
    runway: 0,
    slimup: 0,
  });

  const choose = (s: Partial<Record<Key, number>>) => {
    setScores((prev) => {
      const next = { ...prev };
      (Object.keys(s) as Key[]).forEach((k) => (next[k] += s[k] || 0));
      return next;
    });
    setStep((p) => p + 1);
  };

  const reset = () => {
    setScores({ pitsole: 0, runway: 0, slimup: 0 });
    setStep(0);
  };

  const done = step >= QUESTIONS.length;
  const best = (Object.keys(scores) as Key[]).sort((a, b) => scores[b] - scores[a])[0];
  const result = PRODUCTS[best];

  if (done) {
    return (
      <div className="rounded-2xl border border-[#f3e0e4] bg-white p-6 md:p-8 text-center">
        <p className="text-sm font-semibold text-gray-500">診断結果</p>
        <p className="mt-2 text-xs text-gray-400">あなたに向いているのは</p>
        <h3 className="mt-1 text-2xl font-bold" style={{ color: result.accent }}>
          {result.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{result.tagline}</p>
        <p className="mt-4 text-sm text-gray-700 leading-relaxed text-left">{result.reason}</p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-center">
          <OfficialCTA product={best} className="btn-cta text-sm" />
          <Link href={result.href} className="btn-outline text-sm">
            {result.name}を詳しく見る
          </Link>
          <Link href="/ranking/" className="btn-outline text-sm">
            ダイエットインソールおすすめランキングで比較する
          </Link>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-5 text-xs text-gray-400 underline hover:text-gray-600"
        >
          もう一度診断する
        </button>
        <p className="mt-4 text-xs text-gray-400 leading-relaxed">
          ※ 本診断は各製品の特徴をもとにした目安です。効果には個人差があります。詳しくは各製品ページ・公式サイトでご確認ください。
        </p>
      </div>
    );
  }

  const cur = QUESTIONS[step];
  return (
    <div className="rounded-2xl border border-[#f3e0e4] bg-white p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold text-[#e8627c]">
          質問 {step + 1} / {QUESTIONS.length}
        </p>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-6 rounded-full"
              style={{ backgroundColor: i <= step ? "#e8627c" : "#f3e0e4" }}
            />
          ))}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-5">{cur.q}</h3>
      <div className="space-y-3">
        {cur.options.map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => choose(o.scores)}
            className="block w-full text-left rounded-xl border border-[#f3e0e4] px-5 py-4 text-sm font-medium text-gray-700 hover:bg-[#fdf2f4] hover:border-[#e8627c] transition-colors"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
