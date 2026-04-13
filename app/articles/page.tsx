'use client';

import Link from 'next/link';

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "فهم القلق والتعامل معه",
      excerpt: "تعلم كيفية التعامل مع القلق اليومي بطرق عملية وفعّالة",
      category: "الصحة النفسية",
      content: "القلق هو رد فعل طبيعي للضغوط، لكن يمكن إدارته بفعالية من خلال تقنيات التنفس والتأمل."
    },
    {
      id: 2,
      title: "تكسير عادات سيئة",
      excerpt: "استراتيجيات مثبتة لتغيير العادات السلبية بشكل دائم",
      category: "تطوير الذات",
      content: "تتكون العادات من 3 عناصر: الإشارة والسلوك والمكافأة. بفهم هذه العناصر تستطيع تغيير أي عادة."
    },
    {
      id: 3,
      title: "التغلب على التسويف",
      excerpt: "أسباب التسويف وحلول عملية للبدء الآن",
      category: "الإنتاجية",
      content: "التسويف غالباً ما ينبع من الخوف. ابدأ بخطوة صغيرة واستمتع بالإنجاز."
    },
    {
      id: 4,
      title: "بناء علاقات صحية",
      excerpt: "مفاتيح العلاقات الإيجابية والمستقرة",
      category: "العلاقات",
      content: "التواصل الصادق والاحترام المتبادل أساس أي علاقة صحية وناجحة."
    },
    {
      id: 5,
      title: "إدارة الضغوط والتوتر",
      excerpt: "تقنيات فعّالة للتعامل مع الضغوط اليومية",
      category: "الصحة النفسية",
      content: "التوتر لا يختفي، لكن يمكنك تعلم طرقاً أفضل للتعامل معه وإدارته."
    },
    {
      id: 6,
      title: "أهمية النوم الجيد",
      excerpt: "كيف يؤثر النوم على صحتك النفسية والجسدية",
      category: "الصحة",
      content: "النوم الجيد ضروري للصحة النفسية. حاول الحصول على 7-8 ساعات يومياً."
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
            <li><Link href="/articles" className="text-gray-700 dark:text-white hover:text-indigo-600 transition font-bold text-indigo-600">مقالات</Link></li>
            <li><Link href="/infographics" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">إنفوجرافيك</Link></li>
            <li><Link href="/about" className="text-gray-700 dark:text-white hover:text-indigo-600 transition">عن الموقع</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            📖 مقالات توعوية
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            مقالات مبسطة في علم النفس والتطوير الذاتي لتحسين حياتك اليومية
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Category Badge */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 transition">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    وقت القراءة: 5 دقائق
                  </span>
                  <button className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline inline-flex items-center gap-2 group-hover:translate-x-2 transition">
                    اقرأ أكثر
                    <span>←</span>
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition pointer-events-none"></div>
            </div>
          ))}
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