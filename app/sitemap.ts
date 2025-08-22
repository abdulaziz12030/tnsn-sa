import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://tnsn-site.vercel.app';
  const pages = ['', '/about', '/services', '/contact'];
  const now = new Date();
  return pages.map((p) => ({
    url: `${base}${p || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7
  }));
}