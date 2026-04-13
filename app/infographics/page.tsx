'use client';

import Link from 'next/link';

export default function Infographics() {
  const infographics = [
    {
      id: 1,
      title: "خطوات التخلص من القلق",
      description: "5 خطوات فعّالة للتعامل مع القلق اليومي",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "دورة العادات",
      description: "كيف تتشكل العادات وكيفية تغييرها",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "مستويات الثقة بالنفس",
      description: "مراحل بناء الثقة بالنفس خطوة بخطوة",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "الصحة النفسية في 30 يوم",
      description: "برنامج شامل لتحسين الصحة النفسية",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "التوازن بين العمل والحياة",
      description: "كيفية تحقيق التوازن الصحي",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "خريطة الأهداف",
      description: "طريقة فعّالة لتحقيق أهدافك",
      color: "from-yellow-500 to-orange-500"
    }
  ];

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
            <li><Link href="/infographics" className="text-gray-700 dark:text-white hover:text-indigo-600 transition font-bold text-indigo-600">إنفوجرافيك</Link></li>
            <li><Link href="/about" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">عن الموقع</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            🎨 إنفوجرافيك توعوي
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            صور وتخطيطات توضح مفاهيم نفسية معقدة بشكل بسيط وجذاب
          </p>
        </div>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infographics.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-lg shadow-lg p-8 h-64 flex flex-col justify-between text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-white/90">{item.description}</p>
                </div>

                {/* Icon/Number */}
                <div className="relative z-10 text-right">
                  <span className="text-4xl font-bold opacity-30">#{item.id}</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">عن الموقع</h3>
              <p className="text-gray-600 dark:text-gray-300">
                موقع متخصص في التوعية النفسية وتطوير الذات بطريقة مبسطة وسهلة الفهم
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">الروابط</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition">الرئيسية</Link></li>
                <li><Link href="/articles" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition">المقالات</Link></li>
                <li><Link href="/infographics" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition">الإنفوجرافيك</Link></li>
                <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition">عن الموقع</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">تابعنا</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition text-2xl">📘</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition text-2xl">🐦</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition text-2xl">📷</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 جرعة وعي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}