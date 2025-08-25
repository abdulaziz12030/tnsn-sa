import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import PortfolioGrid from '@/components/PortfolioGrid';
import Link from 'next/link';
import { site } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <section className="container py-12" id="services">
        <h2 className="text-2xl font-bold mb-6">خدماتنا</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {site.services.map((s, i) => (
            <ServiceCard key={i} title={s.title} desc={s.desc} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="underline">تعرف على تفاصيل خدماتنا</Link>
        </div>
      </section>
      <section className="container py-12" id="portfolio">
        <h2 className="text-2xl font-bold mb-6">أعمالنا</h2>
        <PortfolioGrid />
        <div className="mt-6">
          <Link href="/contact" className="underline">اطلب عرض عمل مشابه</Link>
        </div>
      </section>
      <section className="container py-12" id="contact">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <p className="mb-4">يسعدنا خدمتك وتقديم الحلول المناسبة لمشروعك.</p>
        <div className="space-x-4 space-x-reverse">
          <a href="tel:+966507646222" className="underline">اتصل: {site.brand.phone}</a>
        </div>
      </section>
    </>
  );
}