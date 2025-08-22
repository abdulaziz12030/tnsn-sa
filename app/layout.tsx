import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TNSN Advertising',
  description: 'أسوار إعلانية، طباعة رقمية، لوحات إرشادية – حلول جاذبية بصرية راقية.',
  openGraph: {
    title: 'TNSN Advertising',
    description: 'حلول جاذبية بصرية راقية.',
    type: 'website',
    locale: 'ar_SA'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-brand-black antialiased font-sans">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-bold tracking-tight">TNSN</a>
            <ul className="flex gap-6 text-sm">
              <li><a href="/#services" className="hover:text-brand-orange">الخدمات</a></li>
              <li><a href="/#portfolio" className="hover:text-brand-orange">الأعمال</a></li>
              <li><a href="/about" className="hover:text-brand-orange">من نحن</a></li>
              <li><a href="/contact" className="hover:text-brand-orange">تواصل</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-10 text-sm flex flex-col md:flex-row gap-4 md:gap-8 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} TNSN. جميع الحقوق محفوظة.</p>
            <p className="opacity-70">Next.js + Vercel</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
