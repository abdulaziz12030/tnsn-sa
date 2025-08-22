'use client';
import React from 'react';
export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-3">حدث خطأ غير متوقع</h1>
        <p className="text-gray-600 mb-6">جرّب تحديث الصفحة أو الرجوع للصفحة الرئيسية.</p>
        <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto">{error?.message}</pre>
        <a href="/" className="inline-block mt-6 underline">العودة للصفحة الرئيسية</a>
      </div>
    </main>
  );
}