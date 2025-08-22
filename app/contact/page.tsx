export default function ContactPage() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">تواصل معنا</h1>
      <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <input required placeholder="الاسم" className="border rounded-md p-3" />
        <input required type="email" placeholder="البريد الإلكتروني" className="border rounded-md p-3" />
        <input placeholder="الهاتف (اختياري)" className="border rounded-md p-3 md:col-span-2" />
        <textarea required placeholder="رسالتك" className="border rounded-md p-3 min-h-[140px] md:col-span-2" />
        <button className="bg-brand-orange text-white px-6 py-3 rounded-md hover:opacity-90 md:col-span-2">إرسال</button>
      </form>
    </section>
  )
}
