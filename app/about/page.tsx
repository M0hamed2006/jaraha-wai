'use client';

import Link from 'next/link';

export default function About() {
  const team = [
    { name: "أحمد محمد", role: "مؤسس الموقع", emoji: "👨‍💼" },
    { name: "فاطمة علي", role: "متخصصة نفسية", emoji: "👩‍⚕️" },
    { name: "محمود حسن", role: "مطور الموقع", emoji: "👨‍💻" }
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
            <li><Link href="/infographics" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">إنفوجرافيك</Link></li>
            <li><Link href="/about" className="text-gray-700 dark:text-white hover:text-indigo-600 transition font-bold text-indigo-600">عن الموقع</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            ✨ عن جرعة وعي
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-8">
            مرحباً بك في <span className="font-bold text-indigo-600 dark:text-indigo-400">جرعة وعي</span>، موقع متخصص في نشر الوعي النفسي وتطوير الذات بطريقة مبسطة وسهلة الفهم.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-8">
            نؤمن أن الصحة النفسية مهمة مثل الصحة الجسدية، وأن فهم أنفسنا هو أول خطوة نحو حياة أفضل وأكثر إنتاجية.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">🎯 مهمتنا</h2>
            <p className="text-lg leading-8">
              نشر الوعي النفسي والمعرفة السلوكية بطريقة مبسطة تناسب جميع الفئات العمرية والثقافات المختلفة.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">🌟 رؤيتنا</h2>
            <p className="text-lg leading-8">
              بناء مجتمع واعٍ نفسياً، حيث يفهم كل شخص نفسه ويعمل على تطويرها باستمرار نحو حياة أفضل.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            🚀 ما يميز الموقع
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">📚 محتوى غني</h3>
              <p className="text-gray-600 dark:text-gray-300">
                مقالات وإنفوجرافيك ومحتوى توعوي متنوع يغطي جوانب مختلفة من الصحة النفسية
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">⚡ سهل الاستخدام</h3>
              <p className="text-gray-600 dark:text-gray-300">
                تصميم بسيط وسهل التصفح يناسب جميع الأعمار والمستويات التعليمية
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">✅ مجاني وموثوق</h3>
              <p className="text-gray-600 dark:text-gray-300">
                موقع مجاني بالكامل يقدم معلومات موثوقة بناءً على أسس علمية سليمة
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            👥 فريق العمل
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:scale-105 transition">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 هل أنت جاهز لبدء رحلتك؟</h2>
          <p className="text-lg mb-8 opacity-90">
            استكشف محتوانا الغني وابدأ رحلتك نحو وعي نفسي أفضل اليوم
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/articles" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              اقرأ المقالات
            </Link>
            <Link href="/infographics" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition">
              اكتشف الإنفوجرافيك
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
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