import Link from 'next/link'
import HeroSlider from '../components/HeroSlider'
import ServiceCard from '../components/ServiceCard'
import PortfolioGrid from '../components/PortfolioGrid'
import { site } from '../content/site'

export default function HomePage() {
  return (
    <>
      <section role="region" aria-label="بانر ترحيبي" className="container mx-auto px-6 py-10 md:py-14">
        <HeroSlider slides={site.hero} />
      </section>

      <section id="services" aria-labelledby="services-heading" className="container mx-auto px-6 py-12 md:py-16">
        <h2 id="services-heading" className="text-2xl md:text-3xl font-bold mb-6">خدماتنا</h2>
        {site.services?.length ? (
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {site.services.map((s) => (
              <ServiceCard key={s.title} title={s.title}>{s.desc}</ServiceCard>
            ))}
          </div>
        ) : <p className="opacity-70">جاري تحديث خدماتنا…</p>}
        <div className="mt-6">
          <Link href="/services" className="inline-block text-brand-blue underline underline-offset-4 hover:opacity-80" aria-label="المزيد عن خدماتنا" scroll>
            تعرف على تفاصيل خدماتنا
          </Link>
        </div>
      </section>

      <section id="portfolio" aria-labelledby="portfolio-heading" className="container mx-auto px-6 py-12 md:py-16">
        <h2 id="portfolio-heading" className="text-2xl md:text-3xl font-bold mb-6">أعمالنا</h2>
        <PortfolioGrid images={site.portfolio} />
        <div className="mt-6">
          <Link href="/#contact" className="inline-block text-brand-blue underline underline-offset-4 hover:opacity-80" scroll>
            اطلب عرض عمل مشابه
          </Link>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="container mx-auto px-6 py-12 md:py-16">
        <div className="rounded-2xl bg-gradient-to-tr from-brand-blue/10 to-brand-orange/10 border p-8">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold mb-3">تواصل معنا</h2>
          <p className="opacity-80 mb-6">يسعدنا خدمتك وتقديم الحلول المناسبة لمشروعك.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-blue text-white px-6 py-3 rounded-md hover:opacity-90" aria-label="انتقل إلى صفحة نموذج التواصل">أرسل رسالة</Link>
            <a href={`tel:${site.brand.phone.replace(/\s+/g, '')}`} className="inline-block border px-6 py-3 rounded-md hover:bg-black/5" aria-label={`اتصل بنا على ${site.brand.phone}`}>اتصل: {site.brand.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
