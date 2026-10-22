'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * ヒーローの写真を一定時間ごとに入れ替える。
 * 3枚とも 2000×1333 に揃えてあるため、左右が切れることはない。
 * 動きを減らす設定の端末では切り替えず、1枚目だけを表示する。
 */
const SLIDES = [
  '/images/hero-walk-1.jpg',
  '/images/hero-walk-2.jpg',
  '/images/hero-walk-3.jpg',
];

const INTERVAL_MS = 6000;

export default function HeroSlides() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[2000/1333] w-full overflow-hidden">
      {SLIDES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
