import Image from 'next/image'

export default function PortfolioGrid({ images = [] as { src?: string; alt?: string }[] }) {
  if (!images.length) return <p className="opacity-70">لا توجد صور للأعمال حتى الآن.</p>
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {images.map((img, idx) => (
        <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/5">
          {img?.src ? (
            <Image
              src={img.src}
              alt={img.alt || 'صورة عمل'}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs opacity-60">بدون صورة</div>
          )}
        </div>
      ))}
    </div>
  )
}
