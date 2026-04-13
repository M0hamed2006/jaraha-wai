'use client';

import { useState } from 'react';
import Link from 'next/link';

const quotes = [
  "الحياة تحتاج إلى توازن، لا إلى كمال",
  "تقبل نفسك أولاً، والباقي سيأتي",
  "القلق لن يغير المستقبل، لكنه سيفسد الحاضر",
  "كل خطأ هو درس، وليس فشل",
  "أنت أقوى مما تعتقد"
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            🌟 جرعة وعي
          </Link>
          <ul className="flex gap-6">
            <li><Link href="/" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">الرئيسية</Link></li>
            <li><Link href="/articles" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">مقالات</Link></li>
            <li><Link href="/infographics" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">إنفوجرافيك</Link></li>
            <li><Link href="/about" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">عن الموقع</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Daily Quote Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              💡 اقتباس اليوم
            </h2>
            <p className="text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
              "{quotes[currentQuote]}"
            </p>
            <button
              onClick={() => setCurrentQuote(Math.floor(Math.random() * quotes.length))}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
            >
              اقتباس جديد
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          <Link href="/articles" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              📖 مقالات
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              اقرأ مقالات قصيرة في علم النفس والتطوير الذاتي
            </p>
          </Link>

          <Link href="/infographics" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              🎨 إنفوجرافيك
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              صور وتخطيطات توضح مفاهيم نفسية بسهولة
            </p>
          </Link>

          <Link href="/about" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition cursor-pointer">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              ✨ محفزات يومية
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              تحفيز يومي لتحسين مزاجك وإنتاجيتك
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
}