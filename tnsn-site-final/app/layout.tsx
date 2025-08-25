import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TNSN Advertising',
  description: 'أسوار إعلانية، طباعة رقمية، لوحات إرشادية – حلول جاذبية بصرية راقية.',
  openGraph: { title: 'TNSN Advertising', description: 'حلول جاذبية بصرية راقية.', type: 'website', locale: 'ar_SA' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-white text-brand-black flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}