'use client';
import Image from 'next/image';
import { useState } from 'react';
import { site } from '@/content/site';

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const slides = site.hero;
  const next = () => setI((i + 1) % slides.length);
  const prev = () => setI((i - 1 + slides.length) % slides.length);
  const s = slides[i];
  return (
    <section className="relative">
      <div className="relative h-[52vh] md:h-[64vh]">
        <Image src={s.src} alt={s.title} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="container relative -mt-16 bg-white/90 backdrop-blur p-6 rounded-2xl shadow">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{s.title}</h1>
        <p className="text-gray-700 mb-4">{s.subtitle}</p>
        <div className="flex gap-2">
          <button onClick={prev} className="px-4 py-2 border rounded">السابق</button>
          <button onClick={next} className="px-4 py-2 border rounded">التالي</button>
          <a href={s.ctaHref} className="px-4 py-2 rounded bg-black text-white">إجراء</a>
        </div>
      </div>
    </section>
  );
}