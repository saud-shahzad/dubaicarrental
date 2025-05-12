// components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 sm:p-5 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
          تأجير سيارات في دبي
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <Link href="/" className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">تسجيل الدخول</Link>
          </li>
          <li>
            <Link href="/" className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">إنشاء حساب</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center border rounded"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 lg:hidden flex flex-col gap-2 items-end">
          <Link href="/" className="w-full text-right px-4 py-2 bg-gray-200 rounded">تسجيل الدخول</Link>
          <Link href="/" className="w-full text-right px-4 py-2 bg-blue-600 text-white rounded">إنشاء حساب</Link>
        </div>
      )}
    </nav>
  );
}
