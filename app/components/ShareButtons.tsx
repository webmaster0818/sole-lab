"use client";

import { useState } from "react";

export default function ShareButtons({ url, text }: { url: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-500 transition-colors"
      >
        Xでシェア
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-500 transition-colors"
      >
        LINEで送る
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-500 transition-colors"
      >
        {copied ? "コピーしました✓" : "URLをコピー"}
      </button>
    </div>
  );
}
