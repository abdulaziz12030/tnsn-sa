import Image from 'next/image'

type Slide = {
  src?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function HeroSlider({ slides = [] as Slide[] }) {
  const s = slides[0]
  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{s?.title ?? 'عنوان بانر'}</h1>
          <p className="opacity-80 mb-4">{s?.subtitle ?? 'وصف مختصر يظهر هنا.'}</p>
          {s?.ctaHref && (
            <a href={s.ctaHref} className="inline-block bg-brand-orange text-white px-6 py-3 rounded-md hover:opacity-90">
              {s?.ctaText ?? 'اعرف أكثر'}
            </a>
          )}
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-tr from-brand-blue/10 to-brand-orange/10">
          {s?.src ? (
            <Image
              src={s.src}
              alt={s.title || 'صورة بانر'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm opacity-70">لا توجد صورة</div>
          )}
        </div>
      </div>
    </div>
  )
}
