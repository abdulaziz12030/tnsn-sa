export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} TNSN. جميع الحقوق محفوظة.</p>
        <p>Next.js + Vercel</p>
      </div>
    </footer>
  );
}