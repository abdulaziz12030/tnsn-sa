import ServiceCard from '@/components/ServiceCard';
import { site } from '@/content/site';

export default function ServicesPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">الخدمات</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {site.services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}