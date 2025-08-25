import Image from 'next/image';
import { site } from '@/content/site';

export default function PortfolioGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {site.portfolio.map((p, idx) => (
        <div key={idx} className="relative h-40 md:h-48 rounded-lg overflow-hidden">
          <Image src={p.src} alt={p.alt} fill sizes="25vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}