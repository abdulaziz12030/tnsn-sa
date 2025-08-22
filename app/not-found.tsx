import React from 'react';
export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-3">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-6">تأكد من الرابط أو ارجع للصفحة الرئيسية.</p>
        <a href="/" className="inline-block underline">العودة للصفحة الرئيسية</a>
      </div>
    </main>
  );
}