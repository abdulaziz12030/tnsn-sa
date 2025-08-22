'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-bold">TNSN</Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="toggle menu">☰</button>
        <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}>
          <Link href="/services">الخدمات</Link>
          <Link href="/#portfolio">الأعمال</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل</Link>
        </nav>
      </div>
    </header>
  );
}